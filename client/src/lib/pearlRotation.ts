/**
 * Daily-pearl rotation
 * ---------------------------------------------------------------------------
 * Guarantees for the landing card:
 *
 *   1. The first pearl of a calendar day is stable across reloads (a true
 *      "daily" pearl) and is never the same pearl that closed yesterday.
 *   2. Every refresh draws from the pearls not yet shown in the current cycle,
 *      so no line repeats until the whole bank has been seen once.
 *   3. When the cycle completes, the recently shown pearls are parked at the
 *      end of the next cycle — a refresh can never echo a line from the last
 *      few cards, and never shows the one currently on screen.
 *   4. The queue survives reloads via localStorage, so closing the tab no
 *      longer restarts the rotation at the same line.
 *
 * Pure selection logic lives here; persistence is a thin, failure-tolerant
 * wrapper (Safari private mode / full quota must never break the card).
 */

export interface PearlRotationState {
  /** Local calendar day the current pearl belongs to, `YYYY-MM-DD`. */
  dayKey: string;
  /** Id of the pearl currently on screen. */
  currentId: string;
  /** Ids not yet shown in the current no-repeat cycle. */
  remaining: string[];
  /** Most recently shown ids, newest first — parked at the next cycle's tail. */
  recent: string[];
}

type PearlLike = { readonly id: string };

const STORAGE_KEY = 'conceptual-obgyn:daily-pearl-v1';
/** How many just-seen pearls are held back at the end of the next cycle. */
const RECENT_WINDOW = 12;

/* ------------------------------------------------------------------ helpers */

export const todayKey = (now: Date = new Date()): string =>
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

/** FNV-1a — deterministic, dependency-free seed for a given day. */
const hashString = (value: string): number => {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

/** Mulberry32 — small deterministic PRNG so a day's queue is identical on every load. */
const createSeededRandom = (seed: number): (() => number) => {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
};

const shuffleWith = <TValue>(items: readonly TValue[], random: () => number): TValue[] => {
  const output = [...items];
  for (let index = output.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    const left = output[index] as TValue;
    output[index] = output[swapIndex] as TValue;
    output[swapIndex] = left;
  }
  return output;
};

const dedupe = (ids: readonly string[]): string[] => [...new Set(ids)];

const trackRecent = (recent: readonly string[], shownId: string): string[] =>
  dedupe([shownId, ...recent]).slice(0, RECENT_WINDOW);

/* --------------------------------------------------------------- selection */

/** Resolves the pearl that should be on screen right now. */
export function initialiseRotation(
  pearls: readonly PearlLike[],
  stored: PearlRotationState | null,
  now: Date = new Date(),
): PearlRotationState {
  const ids = dedupe(pearls.map((pearl) => pearl.id));
  const dayKey = todayKey(now);

  if (ids.length === 0) return { dayKey, currentId: '', remaining: [], recent: [] };

  const storedCurrent = stored && ids.includes(stored.currentId) ? stored.currentId : null;
  const storedRecent = stored ? dedupe(stored.recent.filter((id) => ids.includes(id))) : [];

  /* Same day and still valid → keep the pearl the student is reading. */
  if (stored && storedCurrent && stored.dayKey === dayKey) {
    return {
      dayKey,
      currentId: storedCurrent,
      remaining: dedupe(stored.remaining.filter((id) => ids.includes(id) && id !== storedCurrent)),
      recent: trackRecent(storedRecent, storedCurrent),
    };
  }

  /* New day (or first visit): deterministic pick, excluding yesterday's pearl. */
  const seed = hashString(dayKey);
  const random = createSeededRandom(seed);
  const dailyPool = storedCurrent ? ids.filter((id) => id !== storedCurrent) : ids;
  const shuffledPool = shuffleWith(dailyPool, random);
  const currentId = shuffledPool[0] as string;

  return {
    dayKey,
    currentId,
    remaining: shuffleWith(
      ids.filter((id) => id !== currentId),
      random,
    ),
    recent: [currentId],
  };
}

/** Draws the next pearl. Never returns the current pearl when alternatives exist. */
export function nextPearl(
  pearls: readonly PearlLike[],
  state: PearlRotationState,
  now: Date = new Date(),
  random: () => number = Math.random,
): PearlRotationState {
  const ids = dedupe(pearls.map((pearl) => pearl.id));
  if (ids.length === 0) return state;

  const remaining = state.remaining.filter((id) => ids.includes(id) && id !== state.currentId);

  if (remaining.length > 0) {
    const [nextId, ...rest] = remaining;
    return {
      dayKey: todayKey(now),
      currentId: nextId as string,
      remaining: rest,
      recent: trackRecent(state.recent, nextId as string),
    };
  }

  /* Cycle complete: refill with every pearl exactly once. The recently shown
     pearls are parked at the tail, so the next draws are genuinely new even
     right after a cycle boundary. */
  const recentSet = new Set(state.recent);
  const fresh = shuffleWith(
    ids.filter((id) => !recentSet.has(id)),
    random,
  );
  const parked = shuffleWith(
    state.recent.filter((id) => ids.includes(id)),
    random,
  );
  let refill = [...fresh, ...parked];

  /* Guard the first draw (catalog smaller than the recent window, etc.). */
  if (refill[0] === state.currentId && refill.length > 1) {
    const swapIndex = 1 + Math.floor(random() * (refill.length - 1));
    const first = refill[0] as string;
    refill[0] = refill[swapIndex] as string;
    refill[swapIndex] = first;
  }

  const [nextId, ...rest] = refill;
  return {
    dayKey: todayKey(now),
    currentId: nextId ?? state.currentId,
    remaining: rest,
    recent: trackRecent(state.recent, nextId ?? state.currentId),
  };
}

/* ------------------------------------------------------------ persistence */

export function loadRotation(): PearlRotationState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;

    const candidate = parsed as Partial<PearlRotationState>;
    if (typeof candidate.dayKey !== 'string' || typeof candidate.currentId !== 'string') return null;
    if (!Array.isArray(candidate.remaining)) return null;
    if (!candidate.remaining.every((id): id is string => typeof id === 'string')) return null;
    if (candidate.recent !== undefined) {
      if (!Array.isArray(candidate.recent)) return null;
      if (!candidate.recent.every((id): id is string => typeof id === 'string')) return null;
    }

    return {
      dayKey: candidate.dayKey,
      currentId: candidate.currentId,
      remaining: dedupe(candidate.remaining),
      recent: dedupe(candidate.recent ?? []),
    };
  } catch {
    return null;
  }
}

export function saveRotation(state: PearlRotationState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* Private mode or quota full — the card still rotates for this session. */
  }
}

export const PEARL_ROTATION_STORAGE_KEY = STORAGE_KEY;
