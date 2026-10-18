import { z } from 'zod';

export const reviewGradeSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const scheduleReviewBodySchema = z.object({
  flashcardId: z.string().min(2).max(64),
  grade: reviewGradeSchema,
  imageBased: z.boolean().default(false),
  easeFactor: z.number().min(1.3).max(3).default(2.5),
  intervalDays: z.number().min(0).max(3650).default(0),
  repetitions: z.number().int().min(0).max(500).default(0),
  lapses: z.number().int().min(0).max(500).default(0),
});
export type ScheduleReviewBody = z.infer<typeof scheduleReviewBodySchema>;

export const scheduleReviewResponseSchema = z.object({
  flashcardId: z.string().min(1),
  easeFactor: z.number(),
  intervalDays: z.number(),
  repetitions: z.number().int(),
  lapses: z.number().int(),
  dueAtISO: z.string().datetime(),
  dueLabel: z.string().min(1),
  grade: reviewGradeSchema,
});
export type ScheduleReviewResponse = z.infer<typeof scheduleReviewResponseSchema>;

export const revisionModulesQueryEnvelope = z.object({
  query: z.unknown(),
});
