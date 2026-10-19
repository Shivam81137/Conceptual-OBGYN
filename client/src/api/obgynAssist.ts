import { z } from 'zod';
import { apiRequest } from '@/api/client';
import { apiEnvelopeSchema } from '@/types/tracks';

/**
 * Client contract for POST /api/v1/ai/obgyn-assist.
 * Mirrors `server/src/services/obgynAi.service.ts` — the server validates its
 * own output with zod before responding, and this copy re-validates at the
 * edge so the glass drawer can only ever render a complete answer.
 */

export const obgynAssistEngineSchema = z.enum(['omniroute', 'gemini', 'openrouter', 'groq', 'pollinations', 'curated']);
export type ObgynAssistEngine = z.infer<typeof obgynAssistEngineSchema>;

export const obgynAssistModeSchema = z.enum(['ask', 'summarize_pdf', 'flashcards']);
export type ObgynAssistMode = z.infer<typeof obgynAssistModeSchema>;

export const obgynAssistPayloadSchema = z.object({
  answer: z.string().min(1),
  highYieldPearl: z.string().min(1),
  followUpQuestions: z.array(z.string().min(1)).min(1),
  sourceTag: z.string().min(1),
  /** Guideline/textbook citations; absent on legacy or curated responses. */
  references: z.array(z.string().min(1)).default([]),
  meta: z.object({
    engine: obgynAssistEngineSchema,
    model: z.string().nullable(),
    track: z.enum(['UG', 'PG']),
    mode: obgynAssistModeSchema,
    document: z
      .object({ name: z.string(), kind: z.enum(['pdf', 'text']), characters: z.number() })
      .nullable(),
    durationMs: z.number(),
    generatedAtISO: z.string(),
  }),
});
export type ObgynAssistPayload = z.infer<typeof obgynAssistPayloadSchema>;

const obgynAssistEnvelopeSchema = apiEnvelopeSchema(obgynAssistPayloadSchema);

export interface ObgynAssistInput {
  /** Student prompt; the server answers from the curated vault when blank + document. */
  prompt: string;
  mode: ObgynAssistMode;
  /** Sent as-is: the server normalises NEET_UG / NEET_PG aliases. */
  track: 'NEET_UG' | 'NEET_PG';
  /** PDF or .txt only — images stay on-device and never leave the browser. */
  file?: File | null;
  signal?: AbortSignal;
}

/**
 * Builds multipart when a document is attached, JSON otherwise. The timeout is
 * generous because a live model may think for 30s+; the server itself always
 * degrades to the curated vault, so a slow provider still yields an answer.
 */
export async function requestObgynAssist(input: ObgynAssistInput): Promise<ObgynAssistPayload> {
  const options = {
    method: 'POST' as const,
    timeoutMs: 90_000,
    signal: input.signal,
  };

  if (input.file) {
    const form = new FormData();
    form.append('prompt', input.prompt);
    form.append('mode', input.mode);
    form.append('track', input.track);
    form.append('file', input.file, input.file.name);
    const envelope = await apiRequest('/ai/obgyn-assist', obgynAssistEnvelopeSchema, { ...options, body: form });
    return envelope.data;
  }

  const envelope = await apiRequest('/ai/obgyn-assist', obgynAssistEnvelopeSchema, {
    ...options,
    body: JSON.stringify({ prompt: input.prompt, mode: input.mode, track: input.track }),
  });
  return envelope.data;
}
