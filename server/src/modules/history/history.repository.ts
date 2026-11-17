import mongoose from 'mongoose';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { env } from '../../config/env.js';
import { isDatabaseReady } from '../../config/database.js';
import { StudyEventModel, StudyStateModel } from '../../models/StudyHistory.js';
import { logger } from '../../utils/logger.js';
import { emptyStudyState, type StudyEvent, type StudyState } from './history.schema.js';

/**
 * Persistence for study history. MongoDB when connected, otherwise a JSON file
 * (local development) — both behind one contract, mirroring the auth module.
 */

export interface HistoryRepository {
  readonly kind: 'mongo' | 'file';
  getState(userId: string): Promise<StudyState>;
  saveState(userId: string, state: StudyState): Promise<void>;
  appendEvents(userId: string, events: StudyEvent[]): Promise<void>;
  /** Newest first. */
  recentEvents(userId: string, limit: number): Promise<StudyEvent[]>;
  /** Distinct activity days (UTC `YYYY-MM-DD`), newest first, for streak maths. */
  activityDays(userId: string): Promise<string[]>;
}

/* ------------------------------------------------------------------- mongo --- */

const isObjectId = (id: string): boolean => /^[a-f\d]{24}$/i.test(id);

class MongoHistoryRepository implements HistoryRepository {
  public readonly kind = 'mongo' as const;

  public async getState(userId: string): Promise<StudyState> {
    if (!isObjectId(userId)) return emptyStudyState();
    const doc = await StudyStateModel.findOne({ user: userId }).lean();
    if (!doc) return emptyStudyState();
    return {
      cardRatings: (doc.cardRatings ?? {}) as StudyState['cardRatings'],
      mcqAnswers: (doc.mcqAnswers ?? {}) as StudyState['mcqAnswers'],
      openedModules: (doc.openedModules ?? {}) as StudyState['openedModules'],
      lastModuleByTrack: (doc.lastModuleByTrack ?? {}) as StudyState['lastModuleByTrack'],
      savedPearls: (doc.savedPearls ?? []) as StudyState['savedPearls'],
    };
  }

  public async saveState(userId: string, state: StudyState): Promise<void> {
    await StudyStateModel.updateOne({ user: userId }, { $set: state, $setOnInsert: { user: userId } }, { upsert: true });
  }

  public async appendEvents(userId: string, events: StudyEvent[]): Promise<void> {
    if (events.length === 0) return;
    await StudyEventModel.insertMany(
      events.map((event) => ({
        user: userId,
        type: event.type,
        moduleId: event.moduleId,
        itemId: event.itemId,
        detail: event.detail,
        at: new Date(event.atISO),
      })),
    );
  }

  public async recentEvents(userId: string, limit: number): Promise<StudyEvent[]> {
    if (!isObjectId(userId)) return [];
    const docs = await StudyEventModel.find({ user: userId }).sort({ at: -1 }).limit(limit).lean();
    return docs.map((doc) => ({
      type: doc.type,
      moduleId: doc.moduleId ?? null,
      itemId: doc.itemId ?? null,
      detail: doc.detail ?? null,
      atISO: doc.at.toISOString(),
    }));
  }

  public async activityDays(userId: string): Promise<string[]> {
    if (!isObjectId(userId)) return [];
    const rows = await StudyEventModel.aggregate<{ _id: string }>([
      { $match: { user: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$at', timezone: 'UTC' } } } },
      { $sort: { _id: -1 } },
      { $limit: 400 },
    ]);
    return rows.map((row) => row._id);
  }
}

/* -------------------------------------------------------------------- file --- */

interface FileShape {
  users: Record<string, { state: StudyState; events: StudyEvent[] }>;
}

const MAX_FILE_EVENTS = 1000;

class FileHistoryRepository implements HistoryRepository {
  public readonly kind = 'file' as const;
  private readonly path = resolve(process.cwd(), env.HISTORY_FILE_STORE_PATH);
  private cache: FileShape | null = null;
  private queue: Promise<unknown> = Promise.resolve();

  private async load(): Promise<FileShape> {
    if (this.cache) return this.cache;
    try {
      this.cache = JSON.parse(await readFile(this.path, 'utf8')) as FileShape;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') logger.warn('history file store unreadable — starting empty');
      this.cache = { users: {} };
    }
    return this.cache;
  }

  /** Serialised, atomic write (tmp file + rename). */
  private write(mutate: (data: FileShape) => void): Promise<void> {
    const run = async (): Promise<void> => {
      const data = await this.load();
      mutate(data);
      await mkdir(dirname(this.path), { recursive: true });
      const tmp = `${this.path}.tmp`;
      await writeFile(tmp, JSON.stringify(data), 'utf8');
      await rename(tmp, this.path);
    };
    const result = this.queue.then(run, run);
    this.queue = result.catch(() => undefined);
    return result;
  }

  public async getState(userId: string): Promise<StudyState> {
    return (await this.load()).users[userId]?.state ?? emptyStudyState();
  }

  public saveState(userId: string, state: StudyState): Promise<void> {
    return this.write((data) => {
      const entry = data.users[userId] ?? { state, events: [] };
      entry.state = state;
      data.users[userId] = entry;
    });
  }

  public appendEvents(userId: string, events: StudyEvent[]): Promise<void> {
    if (events.length === 0) return Promise.resolve();
    return this.write((data) => {
      const entry = data.users[userId] ?? { state: emptyStudyState(), events: [] };
      entry.events = [...entry.events, ...events].slice(-MAX_FILE_EVENTS);
      data.users[userId] = entry;
    });
  }

  public async recentEvents(userId: string, limit: number): Promise<StudyEvent[]> {
    const events = (await this.load()).users[userId]?.events ?? [];
    return [...events].sort((a, b) => b.atISO.localeCompare(a.atISO)).slice(0, limit);
  }

  public async activityDays(userId: string): Promise<string[]> {
    const events = (await this.load()).users[userId]?.events ?? [];
    return [...new Set(events.map((event) => event.atISO.slice(0, 10)))].sort().reverse();
  }
}

const mongoRepo = new MongoHistoryRepository();
const fileRepo = new FileHistoryRepository();
export const getHistoryRepository = (): HistoryRepository => (isDatabaseReady() ? mongoRepo : fileRepo);
