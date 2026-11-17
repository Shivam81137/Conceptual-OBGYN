import { getHistoryRepository } from './history.repository.js';
import type { HistoryPayload, StudyEvent, StudyState, StudyStats, SyncBody } from './history.schema.js';

const MAX_PEARLS = 200;

const later = (a: string, b: string): string => (a >= b ? a : b);
const earlier = (a: string, b: string): string => (a <= b ? a : b);

/** Combine device + account without ever dropping study evidence. */
export const mergeStates = (server: StudyState, client: StudyState): StudyState => {
  const cardRatings: StudyState['cardRatings'] = { ...server.cardRatings };
  for (const [id, record] of Object.entries(client.cardRatings)) {
    const existing = cardRatings[id];
    cardRatings[id] = !existing || later(record.reviewedAtISO, existing.reviewedAtISO) === record.reviewedAtISO ? record : existing;
  }

  /* MCQ answers lock on first answer, so the account's answer wins. */
  const mcqAnswers: StudyState['mcqAnswers'] = { ...client.mcqAnswers, ...server.mcqAnswers };

  const openedModules: StudyState['openedModules'] = { ...server.openedModules };
  for (const [id, at] of Object.entries(client.openedModules)) {
    openedModules[id] = openedModules[id] ? earlier(openedModules[id] as string, at) : at;
  }

  const byId = new Map(server.savedPearls.map((pearl) => [pearl.id, pearl]));
  for (const pearl of client.savedPearls) {
    const existing = byId.get(pearl.id);
    if (!existing || pearl.savedAtISO > existing.savedAtISO) byId.set(pearl.id, pearl);
  }
  const savedPearls = [...byId.values()].sort((a, b) => b.savedAtISO.localeCompare(a.savedAtISO)).slice(0, MAX_PEARLS);

  return {
    cardRatings,
    mcqAnswers,
    openedModules,
    lastModuleByTrack: { ...server.lastModuleByTrack, ...client.lastModuleByTrack },
    savedPearls,
  };
};

/** Turns the difference between two snapshots into timeline events. */
export const diffEvents = (before: StudyState, after: StudyState): StudyEvent[] => {
  const events: StudyEvent[] = [];
  const moduleOfCard = (cardId: string): string | null => /^(m\d+)-/.exec(cardId)?.[1] ?? null;

  for (const [id, record] of Object.entries(after.cardRatings)) {
    if (before.cardRatings[id]?.reviewedAtISO !== record.reviewedAtISO) {
      events.push({ type: 'card_rated', moduleId: moduleOfCard(id), itemId: id, detail: record.rating, atISO: record.reviewedAtISO });
    }
  }
  const now = new Date().toISOString();
  for (const [key, option] of Object.entries(after.mcqAnswers)) {
    if (before.mcqAnswers[key] === undefined) {
      const [moduleId, itemId] = key.split(':');
      events.push({ type: 'mcq_answered', moduleId: moduleId ?? null, itemId: itemId ?? key, detail: `option ${option + 1}`, atISO: now });
    }
  }
  for (const [moduleId, at] of Object.entries(after.openedModules)) {
    if (!before.openedModules[moduleId]) events.push({ type: 'module_opened', moduleId, itemId: null, detail: null, atISO: at });
  }
  const knownPearls = new Set(before.savedPearls.map((pearl) => pearl.id));
  for (const pearl of after.savedPearls) {
    if (!knownPearls.has(pearl.id)) {
      events.push({ type: 'pearl_saved', moduleId: pearl.moduleId ?? null, itemId: pearl.id, detail: pearl.text.slice(0, 120), atISO: pearl.savedAtISO });
    }
  }
  return events;
};

const dayKey = (date: Date): string => date.toISOString().slice(0, 10);

/** Consecutive-day streak ending today (UTC) or yesterday. */
export const computeStreak = (daysDesc: readonly string[], today = new Date()): number => {
  if (daysDesc.length === 0) return 0;
  const set = new Set(daysDesc);
  const cursor = new Date(today);
  if (!set.has(dayKey(cursor))) cursor.setUTCDate(cursor.getUTCDate() - 1);
  let streak = 0;
  while (set.has(dayKey(cursor))) {
    streak += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return streak;
};

export class HistoryService {
  private async build(userId: string, state: StudyState, limit: number): Promise<HistoryPayload> {
    const repository = getHistoryRepository();
    const [recentEvents, days] = await Promise.all([repository.recentEvents(userId, limit), repository.activityDays(userId)]);
    const stats: StudyStats = {
      cardsRated: Object.keys(state.cardRatings).length,
      mcqsAnswered: Object.keys(state.mcqAnswers).length,
      modulesOpened: Object.keys(state.openedModules).length,
      pearlsSaved: state.savedPearls.length,
      activeDays: days.length,
      streakDays: computeStreak(days),
      lastActiveISO: recentEvents[0]?.atISO ?? null,
    };
    return { state, stats, recentEvents };
  }

  public async get(userId: string, limit = 30): Promise<HistoryPayload> {
    return this.build(userId, await getHistoryRepository().getState(userId), limit);
  }

  public async sync(userId: string, body: SyncBody, limit = 30): Promise<HistoryPayload> {
    const repository = getHistoryRepository();
    const before = await repository.getState(userId);
    const after = body.mode === 'merge' ? mergeStates(before, body.state) : body.state;
    await repository.saveState(userId, after);
    await repository.appendEvents(userId, diffEvents(before, after));
    return this.build(userId, after, limit);
  }
}

export const historyService = new HistoryService();
