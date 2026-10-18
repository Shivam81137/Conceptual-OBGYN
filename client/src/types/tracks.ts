import { z } from 'zod';

/**
 * API contract for the Conceptual OBGYN intelligence layer.
 * Mirrors `server/src/modules/tracks/tracks.schema.ts` — the server-side zod
 * schemas are the source of truth; this client copy validates every response at
 * the edge so a stale service-worker snapshot can never poison the UI.
 */

export const TRACK_IDS = ['NEET_UG', 'NEET_PG'] as const;
export type TrackId = (typeof TRACK_IDS)[number];

export const trackIdSchema = z.enum(TRACK_IDS);

export const conceptNodeKindSchema = z.enum(['physiology', 'anatomy', 'clinical', 'pharmacology', 'embryology']);
export type ConceptNodeKind = z.infer<typeof conceptNodeKindSchema>;

export const conceptNodeSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  detail: z.string().min(1),
  kind: conceptNodeKindSchema,
  highYield: z.boolean(),
});
export type ConceptNode = z.infer<typeof conceptNodeSchema>;

export const trackMetricSchema = z.object({
  id: z.string().min(1),
  value: z.string().min(1),
  label: z.string().min(1),
});
export type TrackMetric = z.infer<typeof trackMetricSchema>;

export const clinicalPearlSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  tags: z.array(z.string()).max(8),
  track: trackIdSchema,
});
export type ClinicalPearl = z.infer<typeof clinicalPearlSchema>;

export const trackSummarySchema = z.object({
  id: trackIdSchema,
  title: z.string().min(1),
  kicker: z.string().min(1),
  badge: z.string().min(1),
  description: z.string().min(1),
  ctaLabel: z.string().min(1),
  accent: z.object({
    from: z.string().regex(/^#?[0-9a-fA-F]{6}$/),
    to: z.string().regex(/^#?[0-9a-fA-F]{6}$/),
    glow: z.string().regex(/^#?[0-9a-fA-F]{6}$/),
  }),
  metrics: z.array(trackMetricSchema).min(1),
  conceptNodes: z.array(conceptNodeSchema).min(1),
  topicCount: z.number().int().nonnegative(),
  revisionModuleCount: z.number().int().nonnegative(),
  flashcardCount: z.number().int().nonnegative(),
  ibqCount: z.number().int().nonnegative(),
  retentionRate: z.number().min(0).max(1),
  dailyPearl: clinicalPearlSchema,
  updatedAtISO: z.string().datetime(),
});
export type TrackSummary = z.infer<typeof trackSummarySchema>;

export const trackSummaryResponseSchema = z.object({
  generatedAtISO: z.string().datetime(),
  source: z.enum(['live', 'seed']),
  tracks: z.array(trackSummarySchema).min(1),
});
export type TrackSummaryResponse = z.infer<typeof trackSummaryResponseSchema>;

export const apiEnvelopeSchema = <T extends z.ZodTypeAny>(data: T) =>
  z.object({
    success: z.literal(true),
    requestId: z.string().min(1),
    data,
  });

export interface ApiEnvelope<T> {
  success: true;
  requestId: string;
  data: T;
}
