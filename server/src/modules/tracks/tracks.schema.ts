import { z } from 'zod';

/* ============================================================================
   Canonical API contract for the Conceptual OBGYN intelligence layer.
   The React client validates every response against the mirrored zod schemas in
   `client/src/types/tracks.ts`; this file is the source of truth.
   ========================================================================== */

export const TRACK_IDS = ['NEET_UG', 'NEET_PG'] as const;
export const trackIdSchema = z.enum(TRACK_IDS);
export type TrackId = z.infer<typeof trackIdSchema>;

/** Accepts both canonical ids (`NEET_PG`) and the public `/track/pg` aliases. */
export const trackParamSchema = z.object({
  track: z
    .union([trackIdSchema, z.literal('pg'), z.literal('ug')])
    .transform((value): TrackId => (value === 'pg' ? 'NEET_PG' : value === 'ug' ? 'NEET_UG' : value)),
});
export type TrackParam = z.infer<typeof trackParamSchema>;

export const DIFFICULTIES = ['foundation', 'moderate', 'clinical', 'exam-trap'] as const;
export const difficultySchema = z.enum(DIFFICULTIES);
export type Difficulty = z.infer<typeof difficultySchema>;

export const conceptNodeKindSchema = z.enum(['physiology', 'anatomy', 'clinical', 'pharmacology', 'embryology']);
export type ConceptNodeKind = z.infer<typeof conceptNodeKindSchema>;

export const conceptNodeSchema = z.object({
  id: z.string().min(1).max(64),
  label: z.string().min(2).max(80),
  detail: z.string().min(10).max(400),
  kind: conceptNodeKindSchema,
  highYield: z.boolean(),
});
export type ConceptNode = z.infer<typeof conceptNodeSchema>;

export const trackMetricSchema = z.object({
  id: z.string().min(1).max(48),
  value: z.string().min(1).max(24),
  label: z.string().min(1).max(48),
});
export type TrackMetric = z.infer<typeof trackMetricSchema>;

export const clinicalPearlSchema = z.object({
  id: z.string().min(1).max(64),
  title: z.string().min(4).max(120),
  body: z.string().min(20).max(600),
  tags: z.array(z.string().min(1).max(32)).max(8),
  track: trackIdSchema,
});
export type ClinicalPearl = z.infer<typeof clinicalPearlSchema>;

export const trackSummarySchema = z.object({
  id: trackIdSchema,
  title: z.string().min(2).max(64),
  kicker: z.string().min(2).max(32),
  badge: z.string().min(4).max(96),
  description: z.string().min(20).max(400),
  ctaLabel: z.string().min(4).max(64),
  accent: z.object({
    from: z.string().regex(/^#?[0-9a-fA-F]{6}$/),
    to: z.string().regex(/^#?[0-9a-fA-F]{6}$/),
    glow: z.string().regex(/^#?[0-9a-fA-F]{6}$/),
  }),
  metrics: z.array(trackMetricSchema).min(1).max(6),
  conceptNodes: z.array(conceptNodeSchema).min(1).max(12),
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

/* ------------------------------------------------------------ revision ------ */

export const revisionModuleDtoSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(3),
  track: trackIdSchema,
  title: z.string().min(4),
  summary: z.string().min(20),
  difficulty: difficultySchema,
  highYieldScore: z.number().int().min(0).max(10),
  durationMinutes: z.number().int().min(1).max(600),
  tags: z.array(z.string()).max(12),
  conceptNodeIds: z.array(z.string()).max(16),
  imageBased: z.boolean(),
  spiralRepetitionStage: z.number().int().min(0).max(6),
  rag: z.object({
    sourceDocument: z.string().min(3),
    sourcePages: z.string().min(1),
    chunkCount: z.number().int().nonnegative(),
  }),
  updatedAtISO: z.string().datetime(),
});
export type RevisionModuleDto = z.infer<typeof revisionModuleDtoSchema>;

export const revisionModuleQuerySchema = z.object({
  track: trackIdSchema.optional(),
  difficulty: difficultySchema.optional(),
  highYieldOnly: z
    .union([z.literal('true'), z.literal('false'), z.boolean()])
    .transform((value) => value === true || value === 'true')
    .optional(),
  limit: z.coerce.number().int().min(1).max(50).default(12),
  cursor: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, 'cursor must be a 24 character ObjectId hex string')
    .optional(),
});
export type RevisionModuleQuery = z.infer<typeof revisionModuleQuerySchema>;

/* ------------------------------------------------------- studio modules ----- */

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

/* -------------------------------------------------------------- ai --------- */

export const summariseRequestSchema = z.object({
  documentId: z.string().min(3).max(96),
  title: z.string().min(3).max(160),
  track: trackIdSchema.default('NEET_PG'),
  focus: z.string().min(2).max(160).optional(),
  maxSentences: z.number().int().min(2).max(12).default(6),
  passages: z
    .array(
      z.object({
        page: z.number().int().positive(),
        text: z.string().min(20).max(6000),
      }),
    )
    .min(1)
    .max(40),
});
export type SummariseRequest = z.infer<typeof summariseRequestSchema>;

export const passageSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  page: z.number().int().positive(),
  tokens: z.number().int().positive(),
});
export type Passage = z.infer<typeof passageSchema>;

export const summariseResponseSchema = z.object({
  documentId: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  keyPoints: z.array(z.string().min(1)).min(1),
  citations: z.array(z.object({ passageId: z.string().min(1), page: z.number().int().positive() })).min(1),
  confidence: z.number().min(0).max(1),
  strategy: z.literal('extractive-tfidf'),
  chunkCount: z.number().int().nonnegative(),
  embeddingDimensions: z.number().int().positive(),
  generatedAtISO: z.string().datetime(),
});
export type SummariseResponse = z.infer<typeof summariseResponseSchema>;

/* ---------------------------------------------------------- envelope ------- */

export const successEnvelope = <TData extends z.ZodTypeAny>(data: TData) =>
  z.object({
    success: z.literal(true),
    requestId: z.string().min(1),
    data,
  });

export type SuccessEnvelope<TData> = {
  success: true;
  requestId: string;
  data: TData;
};
