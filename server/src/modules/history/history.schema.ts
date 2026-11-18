import { z } from 'zod';
import { TRACK_IDS } from '../tracks/tracks.schema.js';

/**
 * Study-history contracts (mirrored in `client/src/types/history.ts`).
 * `StudyState` is the same shape the client keeps in localStorage, plus saved
 * pearls, so the two sides can be merged without translation.
 */

const MAX_KEYS = 5000;
const isoString = z.string().min(10).max(40);

export const cardRatingSchema = z.object({
  rating: z.enum(['again', 'good', 'easy']),
  reviewedAtISO: isoString,
});

export const savedPearlSchema = z.object({
  id: z.string().min(1).max(80),
  text: z.string().min(1).max(8000),
  query: z.string().max(1000),
  track: z.enum(TRACK_IDS),
  sourceTag: z.string().max(600).nullable(),
  savedAtISO: isoString,
  kind: z.enum(['pearl', 'trap', 'summary', 'ai']).optional(),
  moduleId: z.string().max(120).nullable().optional(),
});

/** Keys become object/Mongo field names: allow only plain ids and block prototype keys. */
const FORBIDDEN_KEYS = new Set(['__proto__', 'constructor', 'prototype']);
const safeKey = z
  .string()
  .min(1)
  .max(160)
  .regex(/^[A-Za-z0-9:_-]+$/, 'Invalid key.')
  .refine((key) => !FORBIDDEN_KEYS.has(key), 'Invalid key.');

const record = <T extends z.ZodTypeAny>(value: T) =>
  z.record(safeKey, value).refine((obj) => Object.keys(obj).length <= MAX_KEYS, 'Too many entries.');

export const studyStateSchema = z.object({
  cardRatings: record(cardRatingSchema),
  mcqAnswers: record(z.number().int().min(0).max(3)),
  openedModules: record(isoString),
  lastModuleByTrack: z.record(z.enum(TRACK_IDS), z.string().max(120)),
  savedPearls: z.array(savedPearlSchema).max(200),
});
export type StudyState = z.infer<typeof studyStateSchema>;

export const emptyStudyState = (): StudyState => ({
  cardRatings: {},
  mcqAnswers: {},
  openedModules: {},
  lastModuleByTrack: {},
  savedPearls: [],
});

/**
 * `merge`  — first sync after sign-in: combine device and account (never loses data).
 * `replace`— later syncs: the device is the source of truth, so resets/removals stick.
 */
export const syncBodySchema = z.object({
  mode: z.enum(['merge', 'replace']),
  state: studyStateSchema,
});
export type SyncBody = z.infer<typeof syncBodySchema>;

export const eventsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(200).default(30),
});

export type StudyEventType = 'card_rated' | 'mcq_answered' | 'module_opened' | 'pearl_saved';

export interface StudyEvent {
  type: StudyEventType;
  moduleId: string | null;
  itemId: string | null;
  detail: string | null;
  atISO: string;
}

export interface StudyStats {
  cardsRated: number;
  mcqsAnswered: number;
  modulesOpened: number;
  pearlsSaved: number;
  activeDays: number;
  streakDays: number;
  lastActiveISO: string | null;
}

export interface HistoryPayload {
  state: StudyState;
  stats: StudyStats;
  recentEvents: StudyEvent[];
}
