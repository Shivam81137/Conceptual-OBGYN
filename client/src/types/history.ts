import { z } from 'zod';
import { trackIdSchema } from '@/types/tracks';

/** Study-history contracts. Mirrors `server/src/modules/history/history.schema.ts`. */

export const cardRatingSchema = z.object({
  rating: z.enum(['again', 'good', 'easy']),
  reviewedAtISO: z.string(),
});

export const savedPearlSchema = z.object({
  id: z.string(),
  text: z.string(),
  query: z.string(),
  track: trackIdSchema,
  sourceTag: z.string().nullable(),
  savedAtISO: z.string(),
  kind: z.enum(['pearl', 'trap', 'summary', 'ai']).optional(),
  moduleId: z.string().nullable().optional(),
});

export const studyStateSchema = z.object({
  cardRatings: z.record(cardRatingSchema),
  mcqAnswers: z.record(z.number()),
  openedModules: z.record(z.string()),
  lastModuleByTrack: z.record(trackIdSchema, z.string()),
  savedPearls: z.array(savedPearlSchema),
});
export type StudyStatePayload = z.infer<typeof studyStateSchema>;

export const studyEventSchema = z.object({
  type: z.enum(['card_rated', 'mcq_answered', 'module_opened', 'pearl_saved']),
  moduleId: z.string().nullable(),
  itemId: z.string().nullable(),
  detail: z.string().nullable(),
  atISO: z.string(),
});
export type StudyEvent = z.infer<typeof studyEventSchema>;

export const studyStatsSchema = z.object({
  cardsRated: z.number(),
  mcqsAnswered: z.number(),
  modulesOpened: z.number(),
  pearlsSaved: z.number(),
  activeDays: z.number(),
  streakDays: z.number(),
  lastActiveISO: z.string().nullable(),
});
export type StudyStats = z.infer<typeof studyStatsSchema>;

export const historyPayloadSchema = z.object({
  state: studyStateSchema,
  stats: studyStatsSchema,
  recentEvents: z.array(studyEventSchema),
});
export type HistoryPayload = z.infer<typeof historyPayloadSchema>;
