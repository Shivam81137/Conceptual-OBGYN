import { z } from 'zod';
import { trackIdSchema } from '@/types/tracks';

/**
 * API contract for the Revision Studio module index.
 * Mirrors `studioModuleDtoSchema` in `server/src/modules/tracks/tracks.schema.ts`.
 * The interactive content itself ships in the client bundle; this DTO only
 * reconciles order, weightage, durations and counts with the API.
 */

export const studioModuleDtoSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(3),
  track: trackIdSchema,
  title: z.string().min(4),
  summary: z.string().min(20),
  highYield: z.boolean(),
  weightage: z.string().min(2).max(32),
  durationMinutes: z.number().int().min(1).max(600),
  tags: z.array(z.string()).max(12),
  flashcardCount: z.number().int().nonnegative(),
  mcqCount: z.number().int().nonnegative(),
  updatedAtISO: z.string().datetime(),
});
export type StudioModuleDto = z.infer<typeof studioModuleDtoSchema>;

export const studioModuleListSchema = z.object({
  track: trackIdSchema,
  modules: z.array(studioModuleDtoSchema),
  generatedAtISO: z.string().datetime(),
});
export type StudioModuleList = z.infer<typeof studioModuleListSchema>;
