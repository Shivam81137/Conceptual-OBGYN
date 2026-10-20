import { z } from 'zod';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import {
  COMMON_OBGYN_TERMS,
  DOC_NUMERIC_GLOBAL_RE,
  DOC_SENTENCE_MIN_CHARS,
  DOC_SENTENCE_SPLIT,
  DOC_STOPWORDS,
  OBGYN_SCAFFOLD_FOLLOW_UPS,
  OBGYN_SCAFFOLD_PEARL,
  OBGYN_VAULT_LABELS,
  buildObgynScaffoldBody,
  detectObgynTopic,
  type ObgynTopic,
  type ObgynTrack,
} from '../data/obgynAiKnowledge.js';

/**
 * OBGYN AI Studio engine for POST /api/v1/ai/obgyn-assist.
 * ---------------------------------------------------------------------------
 * Provider chain for every request (each stage skipped when its key/flag is
 * absent, and parked for a cooldown after a failure):
 *
 *   upload ─▶ extract text (pdf-parse / utf8) ─┐
 *                                              ├─▶ OmniRoute (auto)     (OMNIROUTE_API_KEY)
 *   prompt + mode + track ────────────────────┤─▶ Gemini Flash         (GEMINI_API_KEY)
 *                                              ├─▶ OpenRouter          (OPENROUTER_API_KEY)
 *                                              ├─▶ Groq Llama           (GROQ_API_KEY)
 *                                              ├─▶ Pollinations          (keyless, open)
 *                                              └─▶ curated clinical vault
 *
 * Every live answer is JSON-parsed and re-validated with zod before it is
 * trusted. The service NEVER throws for AI-side problems: without keys, on
 * quota exhaustion, timeouts or unparseable model output it degrades down the
 * chain to the curated vault, so demos work 100% out of the box. Only caller
 * mistakes (validation) surface as HttpErrors, enforced at the route layer.
 */

/* ============================================================================
   System instruction — the exam persona served to Gemini on every request
   ========================================================================== */

export const OBGYN_AI_SYSTEM_INSTRUCTION = `You are 'Conceptual OBGYN AI', a senior Obstetrics & Gynecology academic mentor for NEET UG, NEET PG and INI-CET aspirants.

Accuracy rules (non-negotiable):
1. Anchor every fact to mainstream, current guidance — Williams Obstetrics / Shaw's Gynaecology / Dutta for mechanism and FOGSI / RCOG / ACOG / FIGO / WHO for management. Prefer published guideline cut-offs and doses over memory.
2. Never invent citations, page numbers, trial names, doses, thresholds or "recent studies". Only list a source in "references" if you are confident it exists — if unsure of the year or edition, name the guideline/source without a year rather than guessing. If a value varies between guidelines, give the accepted range and name the guideline it comes from.
3. If the evidence is uncertain, contested, or the question is outside exam scope, say so in one plain line instead of guessing.
4. Use precise standard clinical nomenclature and units (e.g. MCA-PSV > 1.5 MoM, MgSO4 4 g IV loading dose). Expand any abbreviation the first time it appears.
5. This is exam revision material for clinicians-in-training, not individual patient advice — keep every management statement guideline-referenced.

Tailor depth strictly to the requested track:
- track === 'UG': NCERT Class 12 Human Reproduction and Reproductive Health, with core physiology and embryology bridges.
- track === 'PG': examinable clinical depth — definitions, diagnostic criteria, staging, investigations, management and complications as tested in NEET PG / INI-CET.

Structure every response into three crisp, scannable sections:
- 🎯 **High-Yield Exam Pearl:** a 1-2 sentence golden takeaway frequently tested in MCQs.
- 🧠 **Core Clinical Concept:** bullet points, numbered steps, or a compact Markdown table (comparisons, staging, cut-offs).
- ⚡ **Rapid Recall & Exam Trap:** the classic discriminator or trap (e.g. 'most sensitive vs most specific', 'best initial vs definitive test').

If a PDF document is uploaded, extract and condense its entire text into: Executive Topic Summary, Top 5 High-Yield One-Liners, and 3 Rapid-Fire Practice MCQs with explanations — while still filling every response field.

Markdown must be clean and well-formed: no stray asterisks, no filler introductions, bold only genuine clinical keywords.`;

/* ============================================================================
   Request / response contract
   ========================================================================== */

export const obgynAssistRequestSchema = z.object({
  prompt: z.string().trim().min(3, 'Ask a question of at least 3 characters.').max(8000),
  mode: z
    .enum(['ask', 'summarize', 'summarize_pdf', 'flashcards'])
    .default('ask')
    .transform((mode): ObgynAssistMode => (mode === 'summarize' ? 'summarize_pdf' : mode)),
  track: z
    .enum(['UG', 'PG', 'NEET_UG', 'NEET_PG'])
    .default('PG')
    .transform((track): ObgynTrack => (track === 'UG' || track === 'NEET_UG' ? 'UG' : 'PG')),
});

export type ObgynAssistMode = 'ask' | 'summarize_pdf' | 'flashcards';
export type ObgynAssistRequest = z.infer<typeof obgynAssistRequestSchema>;

export interface BufferedUpload {
  name: string;
  bytes: number;
  mediaType: string;
  buffer: Buffer;
}

export interface DocumentAttachment {
  name: string;
  kind: 'pdf' | 'text';
  bytes: number;
  characters: number;
  pages: number | null;
  text: string;
  truncated: boolean;
}

export interface ObgynAssistAnswer {
  answer: string;
  highYieldPearl: string;
  followUpQuestions: string[];
  sourceTag: string;
  /** Short guideline / textbook citations backing the answer (may be empty). */
  references: string[];
  meta: {
    engine: 'omniroute' | 'gemini' | 'openrouter' | 'groq' | 'pollinations' | 'curated';
    model: string | null;
    track: ObgynTrack;
    mode: ObgynAssistMode;
    document: { name: string; kind: 'pdf' | 'text'; characters: number } | null;
    durationMs: number;
    generatedAtISO: string;
  };
}

export interface ObgynAssistCapabilities {
  omnirouteConfigured: boolean;
  geminiConfigured: boolean;
  openrouterConfigured: boolean;
  groqConfigured: boolean;
  pollinationsEnabled: boolean;
  omnirouteModel: string;
  model: string;
  openrouterModel: string;
  groqModel: string;
  pollinationsModel: string;
  curatedTopics: readonly string[];
  acceptedExtensions: string[];
  maxUploadBytes: number;
}

/* ------------------------------------------------------------------ limits - */

const DOCUMENT_CHAR_LIMIT = 150_000;
const GEMINI_DOCUMENT_CHAR_LIMIT = 60_000;
const MIN_USABLE_DOCUMENT_CHARS = 80;
const TRACK_LABELS: Record<ObgynTrack, string> = { UG: 'NEET UG', PG: 'NEET PG / INI-CET' };

/* ============================================================================
   Structured LLM output — JSON schema for Gemini + zod re-validation
   ========================================================================== */

const OBGYN_ASSIST_LLM_SCHEMA = {
  type: 'object',
  properties: {
    answer: {
      type: 'string',
      description:
        'The full markdown answer. Follow the 3-section structure (🎯 pearl, 🧠 core concept with markdown tables/bullets, ⚡ rapid recall or exam trap). Ultra-clean formatting, bold clinical keywords, no filler.',
    },
    highYieldPearl: {
      type: 'string',
      description: 'A 1-2 sentence golden takeaway frequently tested in MCQs, extracted from the answer.',
    },
    followUpQuestions: {
      type: 'array',
      minItems: 3,
      maxItems: 3,
      items: { type: 'string' },
      description: 'Exactly 3 short, clickable follow-up questions a NEET aspirant would ask next.',
    },
    sourceTag: {
      type: 'string',
      description: 'A single badge line, e.g. "Synthesized for NEET PG • Williams 26e & FIGO Aligned".',
    },
    references: {
      type: 'array',
      minItems: 1,
      maxItems: 5,
      items: { type: 'string' },
      description:
        '2-5 short citations that genuinely support the answer — guideline or textbook name, optionally with the year/edition only if you are certain (no page numbers, never invented), e.g. "ACOG Practice Bulletin on fetal anemia".',
    },
  },
  required: ['answer', 'highYieldPearl', 'followUpQuestions', 'sourceTag', 'references'],
  propertyOrdering: ['answer', 'highYieldPearl', 'followUpQuestions', 'sourceTag', 'references'],
} as const;

const llmAnswerSchema = z.object({
  answer: z.string().trim().min(40, 'Answer too short.'),
  highYieldPearl: z.string().trim().min(10, 'Pearl too short.'),
  followUpQuestions: z.array(z.string().trim().min(3)).min(1),
  sourceTag: z.string().trim().min(3),
  references: z.array(z.string().trim().min(3)).max(8).optional().default([]),
});

/** OpenAI-compatible providers share one transport: JSON-mode chat completions. */
const OPENAI_COMPATIBLE_PROVIDERS = {
  /** Self-hosted OmniRoute gateway — env-driven so deployments can relocate it. */
  omniroute: { url: (): string => `${env.OMNIROUTE_BASE_URL.replace(/\/+$/, '')}/chat/completions` },
  openrouter: { url: (): string => 'https://openrouter.ai/api/v1/chat/completions' },
  groq: { url: (): string => 'https://api.groq.com/openai/v1/chat/completions' },
  pollinations: { url: (): string => 'https://text.pollinations.ai/openai' },
} as const;

type OpenAiCompatibleEngine = keyof typeof OPENAI_COMPATIBLE_PROVIDERS;

/** JSON mode across OpenAI-compatible engines needs the contract spelled out. */
const JSON_CONTRACT = `
Return ONLY a single valid JSON object (no markdown fences, no commentary) with exactly these keys:
- "answer": string — the full markdown answer following the section rules above.
- "highYieldPearl": string — the 1-2 sentence golden MCQ takeaway.
- "followUpQuestions": array of exactly 3 short strings — clickable next questions.
- "sourceTag": string — one badge line, e.g. "Synthesized for NEET PG • Williams 26e & FIGO Aligned".
- "references": array of 2-5 short strings — real guideline/textbook citations supporting the answer (name, plus year/edition only if certain; never invented page numbers or editions).`;

/**
 * Pollinations' anonymous tier caps a single completion at 1500 tokens, and its
 * `openai-fast` model is a reasoning model whose hidden reasoning also counts
 * toward that cap. A compact answer plus `reasoning_effort: 'low'` keeps the
 * JSON object inside the budget instead of truncating it mid-string.
 */
const POLLINATIONS_COMPACT_CONTRACT = `
Conciseness override (mandatory for this engine):
- Keep "answer" under 160 words using exactly the three bold headers above.
- One or two bullets per section; no introduction and no repetition.
- Keep every follow-up question under 12 words.
- The whole JSON object must stay well under 1200 tokens.`;

/** A failed provider is parked for a cooldown so one dead endpoint can't stall every request. */
const PROVIDER_COOLDOWN_MS = 3 * 60_000;
const PROVIDER_RATE_LIMIT_COOLDOWN_MS = 30_000;
const PROVIDER_TIMEOUT_COOLDOWN_MS = 10 * 60_000;

interface CuratedAnswer {
  answer: string;
  highYieldPearl: string;
  followUpQuestions: readonly string[];
  sourceTag: string;
  references?: readonly string[];
}

/** Balanced-brace scan — tolerant of prose before/after the JSON object. */
const extractFirstJsonObject = (raw: string): string | null => {
  const start = raw.indexOf('{');
  if (start === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < raw.length; index += 1) {
    const char = raw[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return raw.slice(start, index + 1);
    }
  }
  return null;
};

const parseLlmPayload = (raw: string): z.infer<typeof llmAnswerSchema> | null => {
  const trimmed = raw.trim().replace(/^```(?:json)?\s*|\s*```$/g, '');
  const candidates = [trimmed];
  const extracted = extractFirstJsonObject(trimmed);
  if (extracted && extracted !== trimmed) candidates.push(extracted);

  for (const candidate of candidates) {
    try {
      return llmAnswerSchema.parse(JSON.parse(candidate));
    } catch {
      /* try the next candidate */
    }
  }
  return null;
};

/* ============================================================================
   Shared text helpers (document heuristics)
   ========================================================================== */

const splitDocumentSentences = (text: string): string[] =>
  text
    .replace(/\s+/g, ' ')
    .split(DOC_SENTENCE_SPLIT)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= DOC_SENTENCE_MIN_CHARS);

const documentWords = (sentence: string): string[] =>
  sentence
    .toLowerCase()
    .replace(/[^a-z0-9\s%-]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 4 && !DOC_STOPWORDS.has(word));

const trimSentence = (sentence: string, max = 240): string =>
  sentence.length > max ? `${sentence.slice(0, max - 1).trimEnd()}…` : sentence;

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const boldFirstTerm = (sentence: string, terms: readonly string[]): string => {
  for (const term of terms) {
    const pattern = new RegExp(`(${escapeRegExp(term)})`, 'i');
    if (pattern.test(sentence)) return sentence.replace(pattern, '**$1**');
  }
  return sentence;
};

const blankFirstTerm = (sentence: string, term: string): string | null => {
  const position = sentence.toLowerCase().indexOf(term.toLowerCase());
  if (position < 0) return null;
  return `${sentence.slice(0, position)}________${sentence.slice(position + term.length)}`;
};

const rotate = <TValue,>(items: readonly TValue[], offset: number): TValue[] => {
  if (items.length === 0) return [];
  const pivot = offset % items.length;
  return [...items.slice(pivot), ...items.slice(0, pivot)];
};

interface ScoredSentence {
  sentence: string;
  index: number;
  score: number;
}

interface RankedDocument {
  rankings: ScoredSentence[];
  topTerms: string[];
}

const rankDocument = (sentences: readonly string[]): RankedDocument => {
  const frequency = new Map<string, number>();
  for (const sentence of sentences) {
    for (const word of documentWords(sentence)) frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }

  const entries = [...frequency.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const strong = entries.filter(([, count]) => count >= 2).map(([word]) => word);
  const topTerms = (strong.length >= 6 ? strong : entries.map(([word]) => word)).slice(0, 10);
  const topTermSet = new Set(topTerms);

  const rankings = sentences
    .map((sentence, index) => ({
      sentence,
      index,
      score:
        (sentence.match(DOC_NUMERIC_GLOBAL_RE)?.length ?? 0) * 2 +
        documentWords(sentence).filter((word) => topTermSet.has(word)).length,
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);

  return { rankings, topTerms };
};

/* ============================================================================
   Deterministic MCQ construction (numeric + term cloze)
   ========================================================================== */

const NUMERIC_TOKEN_RE = /(\d+(?:[.,]\d+)?)\s?(%|mg|g|mcg|µg|mL|ml|ML|IU|iu|hours?|weeks?|days?|min|cm|mm)\b/;

const NUMERIC_MUTATIONS = [2, 0.5, 0.25, 1.5, 3, 0.1] as const;

const formatNumeric = (value: number): string => {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(Math.max(1, Math.round(rounded))) : String(rounded);
};

interface McqOption {
  text: string;
  correct: boolean;
}

const renderMcqOptions = (options: readonly McqOption[], seed: number): string => {
  const letters = ['A', 'B', 'C', 'D'];
  return rotate(options, seed)
    .map((option, index) => (option.correct ? `- **${letters[index]}. ${option.text}** ✅` : `- ${letters[index]}. ${option.text}`))
    .join('\n');
};

const buildNumericMcq = (entry: ScoredSentence, questionNumber: number): string | null => {
  const match = entry.sentence.match(NUMERIC_TOKEN_RE);
  if (!match) return null;

  const [, rawValue, unit] = match;
  const value = Number.parseFloat(rawValue.replace(',', '.'));
  if (!Number.isFinite(value) || value <= 0) return null;

  const correct = `${rawValue} ${unit}`.trim();
  const distractors: string[] = [];
  for (const mutation of NUMERIC_MUTATIONS) {
    if (distractors.length >= 3) break;
    const mutated = formatNumeric(value * mutation);
    const candidate = `${mutated} ${unit}`.trim();
    if (candidate !== correct && !distractors.includes(candidate)) distractors.push(candidate);
  }
  if (distractors.length < 3) return null;

  const question = entry.sentence.replace(match[0], '________');
  const options: McqOption[] = [{ text: correct, correct: true }, ...distractors.map((text) => ({ text, correct: false }))];

  return `**Q${questionNumber}.** According to your document — complete the statement:

> "${trimSentence(question, 260)}"

${renderMcqOptions(options, questionNumber)}

**Why:** the document states: *"${trimSentence(entry.sentence, 280)}"*`;
};

const buildTermMcq = (entry: ScoredSentence, topTerms: readonly string[], questionNumber: number): string | null => {
  const candidateTerms = topTerms.filter((term) => term.length >= 6 && entry.sentence.toLowerCase().includes(term));
  const fallbackTerm = documentWords(entry.sentence).find((word) => word.length >= 7);
  const term = candidateTerms[0] ?? fallbackTerm;
  if (!term) return null;

  const question = blankFirstTerm(entry.sentence, term);
  if (!question) return null;

  const pool = [
    ...topTerms.filter((candidate) => candidate !== term && !candidate.includes(term) && candidate.length >= 5),
    ...COMMON_OBGYN_TERMS.filter((candidate) => candidate !== term && !candidate.includes(term)),
  ];

  const distractors: string[] = [];
  for (const candidate of pool) {
    if (distractors.length >= 3) break;
    if (!distractors.some((existing) => existing.toLowerCase() === candidate.toLowerCase())) distractors.push(candidate);
  }
  if (distractors.length < 3) return null;

  const options: McqOption[] = [{ text: term, correct: true }, ...distractors.map((text) => ({ text, correct: false }))];

  return `**Q${questionNumber}.** According to your document — complete the statement:

> "${trimSentence(question, 260)}"

${renderMcqOptions(options, questionNumber)}

**Why:** the document states: *"${trimSentence(entry.sentence, 280)}"*`;
};

/* ============================================================================
   Service
   ========================================================================== */

type GeminiClient = import('@google/genai').GoogleGenAI;

export class ObgynAiService {
  private geminiClient: GeminiClient | null = null;
  /** engine → epoch-ms until which the provider is skipped after a failure. */
  private readonly providerCooldowns = new Map<string, number>();

  private isCooling(engine: string): boolean {
    const until = this.providerCooldowns.get(engine);
    return until !== undefined && until > Date.now();
  }

  private markHealthy(engine: string): void {
    this.providerCooldowns.delete(engine);
  }

  private markFailed(engine: string, retryAfterMs = PROVIDER_COOLDOWN_MS): void {
    this.providerCooldowns.set(engine, Date.now() + retryAfterMs);
  }

  /* ------------------------------------------------------------ public API - */

  public capabilities(): ObgynAssistCapabilities {
    return {
      omnirouteConfigured: Boolean(env.OMNIROUTE_API_KEY),
      geminiConfigured: Boolean(env.GEMINI_API_KEY),
      openrouterConfigured: Boolean(env.OPENROUTER_API_KEY),
      groqConfigured: Boolean(env.GROQ_API_KEY),
      pollinationsEnabled: env.POLLINATIONS_ENABLED,
      omnirouteModel: env.OMNIROUTE_MODEL,
      model: env.GEMINI_MODEL,
      openrouterModel: env.OPENROUTER_MODEL,
      groqModel: env.GROQ_MODEL,
      pollinationsModel: env.POLLINATIONS_MODEL,
      curatedTopics: OBGYN_VAULT_LABELS,
      acceptedExtensions: ['.pdf', '.txt'],
      maxUploadBytes: env.AI_UPLOAD_MAX_BYTES,
    };
  }

  public async assist(
    request: ObgynAssistRequest,
    upload: BufferedUpload | null,
    requestId: string,
  ): Promise<ObgynAssistAnswer> {
    const startedAt = performance.now();
    const attachment = upload ? await this.readAttachment(upload, requestId) : null;
    const document = attachment && attachment.text.length >= MIN_USABLE_DOCUMENT_CHARS ? attachment : null;

    let assembled: CuratedAnswer | null = null;
    let engine: ObgynAssistAnswer['meta']['engine'] = 'curated';
    let model: string | null = null;

    /* Summarize mode without a readable document never wastes a model call. */
    const liveEligible = !(request.mode === 'summarize_pdf' && !document);

    interface ProviderAttempt {
      engine: Exclude<ObgynAssistAnswer['meta']['engine'], 'curated'>;
      model: string;
      run: () => Promise<CuratedAnswer | null>;
    }

    const chain: ProviderAttempt[] = [];
    const omnirouteKey = env.OMNIROUTE_API_KEY;
    const geminiKey = env.GEMINI_API_KEY;
    const openrouterKey = env.OPENROUTER_API_KEY;
    const groqKey = env.GROQ_API_KEY;

    if (omnirouteKey) {
      chain.push({
        engine: 'omniroute',
        model: env.OMNIROUTE_MODEL,
        run: () =>
          this.generateWithOpenAiCompatible(
            'omniroute', omnirouteKey, env.OMNIROUTE_MODEL, env.OMNIROUTE_TIMEOUT_MS,
            request, attachment, document, requestId,
          ),
      });
    }
    if (geminiKey) {
      chain.push({
        engine: 'gemini',
        model: env.GEMINI_MODEL,
        run: () => this.generateWithGemini(request, attachment, document, requestId),
      });
    }
    if (openrouterKey) {
      chain.push({
        engine: 'openrouter',
        model: env.OPENROUTER_MODEL,
        run: () =>
          this.generateWithOpenAiCompatible(
            'openrouter', openrouterKey, env.OPENROUTER_MODEL, env.OPENROUTER_TIMEOUT_MS,
            request, attachment, document, requestId,
          ),
      });
    }
    if (groqKey) {
      chain.push({
        engine: 'groq',
        model: env.GROQ_MODEL,
        run: () =>
          this.generateWithOpenAiCompatible(
            'groq', groqKey, env.GROQ_MODEL, env.GROQ_TIMEOUT_MS,
            request, attachment, document, requestId,
          ),
      });
    }
    if (env.POLLINATIONS_ENABLED) {
      chain.push({
        engine: 'pollinations',
        model: env.POLLINATIONS_MODEL,
        run: () =>
          this.generateWithOpenAiCompatible(
            'pollinations', null, env.POLLINATIONS_MODEL, env.POLLINATIONS_TIMEOUT_MS,
            request, attachment, document, requestId,
          ),
      });
    }

    if (liveEligible) {
      for (const provider of chain) {
        /* Cooling providers are skipped so one dead endpoint can't stall every request. */
        if (this.isCooling(provider.engine)) continue;
        const answer = await provider.run();
        if (answer) {
          assembled = answer;
          engine = provider.engine;
          model = provider.model;
          this.markHealthy(provider.engine);
          break;
        }
      }
    }

    if (!assembled) {
      assembled = this.composeCurated(request, attachment, requestId);
    }

    return {
      answer: assembled.answer,
      highYieldPearl: assembled.highYieldPearl,
      followUpQuestions: this.ensureFollowUps(assembled.followUpQuestions, request.track),
      sourceTag: assembled.sourceTag,
      references: [...(assembled.references ?? [])],
      meta: {
        engine,
        model,
        track: request.track,
        mode: request.mode,
        document: attachment ? { name: attachment.name, kind: attachment.kind, characters: attachment.characters } : null,
        durationMs: Math.round(performance.now() - startedAt),
        generatedAtISO: new Date().toISOString(),
      },
    };
  }

  /* --------------------------------------------------------- attachments -- */

  private async readAttachment(upload: BufferedUpload, requestId: string): Promise<DocumentAttachment> {
    const kind: DocumentAttachment['kind'] = /\.pdf$/i.test(upload.name) ? 'pdf' : 'text';
    let raw = '';
    let pages: number | null = null;

    if (kind === 'text') {
      raw = upload.buffer.toString('utf8');
    } else {
      try {
        /* Loaded on demand: pdfjs (+ its native canvas dependency) stays cold
           until someone actually uploads a PDF. */
        const { PDFParse } = await import('pdf-parse');
        const parser = new PDFParse({ data: upload.buffer });
        try {
          const result = await parser.getText({ cellSeparator: ' ' });
          raw = result.text ?? '';
          pages = result.total ?? null;
        } finally {
          await parser.destroy().catch(() => undefined);
        }
      } catch (error) {
        logger.warn('pdf text extraction failed', {
          requestId,
          file: upload.name,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    const normalised = raw
      /* pdf-parse interleaves "-- n of m --" page markers; they are noise here. */
      .replace(/--\s*\d+\s+of\s+\d+\s*--/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const truncated = normalised.length > DOCUMENT_CHAR_LIMIT;

    return {
      name: upload.name,
      kind,
      bytes: upload.bytes,
      characters: Math.min(normalised.length, DOCUMENT_CHAR_LIMIT),
      pages,
      text: truncated ? normalised.slice(0, DOCUMENT_CHAR_LIMIT) : normalised,
      truncated,
    };
  }

  /* -------------------------------------------------------- live providers -- */

  private async getGeminiClient(): Promise<GeminiClient> {
    if (this.geminiClient) return this.geminiClient;
    const { GoogleGenAI } = await import('@google/genai');
    this.geminiClient = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY ?? '' });
    return this.geminiClient;
  }

  private buildPromptContents(
    request: ObgynAssistRequest,
    attachment: DocumentAttachment | null,
    document: DocumentAttachment | null,
  ): string {
    const lines = [`Track: ${TRACK_LABELS[request.track]}`, `Mode: ${request.mode}`];

    if (request.mode === 'summarize_pdf') {
      lines.push(
        'Deliver exactly three blocks inside the markdown answer: Executive Topic Summary, Top 5 High-Yield One-Liners (numbered), and 3 Rapid-Fire Practice MCQs with explanations (four options each, bold the correct one).',
      );
    }
    if (request.mode === 'flashcards') {
      lines.push('Deliver 8-10 rapid-fire flashcards (question → answer) inside the markdown answer field.');
    }

    lines.push(`Student prompt: ${request.prompt}`);

    if (document) {
      lines.push(
        `Attached document "${document.name}" — extracted text${document.truncated ? ' (truncated)' : ''}:\n"""\n${document.text.slice(0, GEMINI_DOCUMENT_CHAR_LIMIT)}\n"""`,
      );
    } else if (attachment) {
      lines.push(
        `An upload named "${attachment.name}" was received but contains no extractable text layer (likely a scanned or image-only file). Acknowledge that briefly and answer from the student prompt instead.`,
      );
    }

    return lines.join('\n\n');
  }

  private async generateWithGemini(
    request: ObgynAssistRequest,
    attachment: DocumentAttachment | null,
    document: DocumentAttachment | null,
    requestId: string,
  ): Promise<CuratedAnswer | null> {
    if (!env.GEMINI_API_KEY) return null;

    try {
      const client = await this.getGeminiClient();
      const startedAt = performance.now();

      const response = await client.models.generateContent({
        model: env.GEMINI_MODEL,
        contents: this.buildPromptContents(request, attachment, document),
        config: {
          systemInstruction: OBGYN_AI_SYSTEM_INSTRUCTION,
          temperature: 0.4,
          maxOutputTokens: 2600,
          responseMimeType: 'application/json',
          responseJsonSchema: OBGYN_ASSIST_LLM_SCHEMA,
          abortSignal: AbortSignal.timeout(env.GEMINI_TIMEOUT_MS),
        },
      });

      const raw = response.text ?? '';
      const payload = parseLlmPayload(raw);
      if (!payload) {
        this.markFailed('gemini');
        logger.warn('gemini response unparseable — trying the next engine', {
          requestId,
          head: raw.slice(0, 140),
        });
        return null;
      }

      logger.info('obgyn assist generated by gemini', {
        requestId,
        model: env.GEMINI_MODEL,
        mode: request.mode,
        track: request.track,
        latencyMs: Math.round(performance.now() - startedAt),
      });

      return {
        answer: payload.answer,
        highYieldPearl: payload.highYieldPearl,
        followUpQuestions: payload.followUpQuestions,
        sourceTag: payload.sourceTag,
        references: payload.references,
      };
    } catch (error) {
      /* Network-stuck providers (e.g. an unreachable generation backend) park longer. */
      const errorName = (error as { name?: string } | null)?.name;
      const timedOut = errorName === 'AbortError' || errorName === 'TimeoutError';
      this.markFailed('gemini', timedOut ? PROVIDER_TIMEOUT_COOLDOWN_MS : PROVIDER_COOLDOWN_MS);
      logger.warn('gemini assist failed — trying the next engine', {
        requestId,
        model: env.GEMINI_MODEL,
        error: error instanceof Error ? error.message : String(error),
      });
      return null;
    }
  }

  /* ------------------------------------------------- openai-compatible APIs - */

  private async generateWithOpenAiCompatible(
    engine: OpenAiCompatibleEngine,
    apiKey: string | null,
    model: string,
    timeoutMs: number,
    request: ObgynAssistRequest,
    attachment: DocumentAttachment | null,
    document: DocumentAttachment | null,
    requestId: string,
  ): Promise<CuratedAnswer | null> {
    const url = OPENAI_COMPATIBLE_PROVIDERS[engine].url();

    try {
      const startedAt = performance.now();

      /* Groq's gpt-oss models reject `response_format`, so they run prompt-driven
         JSON extraction (parseLlmPayload tolerates prose/fences around the object).
         Pollinations' json_schema mode returns empty content, but json_object works. */
      const responseFormat = engine === 'groq' ? undefined : ({ type: 'json_object' } as const);
      const maxTokens = engine === 'groq' ? 3600 : engine === 'pollinations' ? 1500 : 2600;
      const reasoningEffort =
        engine === 'pollinations' || (engine === 'groq' && /gpt-oss/i.test(model)) ? 'low' : undefined;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
        },
        body: JSON.stringify({
          model,
          temperature: 0.4,
          max_tokens: maxTokens,
          ...(responseFormat ? { response_format: responseFormat } : {}),
          ...(reasoningEffort ? { reasoning_effort: reasoningEffort } : {}),
          messages: [
            {
              role: 'system',
              content: `${OBGYN_AI_SYSTEM_INSTRUCTION}${JSON_CONTRACT}${
                engine === 'pollinations' ? POLLINATIONS_COMPACT_CONTRACT : ''
              }`,
            },
            { role: 'user', content: this.buildPromptContents(request, attachment, document) },
          ],
        }),
        signal: AbortSignal.timeout(timeoutMs),
      });

      if (!response.ok) {
        const rateLimited = response.status === 429 || response.status === 402;
        this.markFailed(engine, rateLimited ? PROVIDER_RATE_LIMIT_COOLDOWN_MS : PROVIDER_COOLDOWN_MS);
        const detail = await response.text().catch(() => '');
        logger.warn(`${engine} assist rejected — trying the next engine`, {
          requestId,
          status: response.status,
          model,
          detail: detail.slice(0, 160),
        });
        return null;
      }

      const body = (await response.json()) as {
        choices?: Array<{ message?: { content?: string | null } }>;
      };
      const raw = body.choices?.[0]?.message?.content ?? '';
      const payload = parseLlmPayload(raw);
      if (!payload) {
        this.markFailed(engine);
        logger.warn(`${engine} response unparseable — trying the next engine`, {
          requestId,
          head: raw.slice(0, 140),
        });
        return null;
      }

      logger.info(`obgyn assist generated by ${engine}`, {
        requestId,
        model,
        mode: request.mode,
        track: request.track,
        latencyMs: Math.round(performance.now() - startedAt),
      });

      return {
        answer: payload.answer,
        highYieldPearl: payload.highYieldPearl,
        followUpQuestions: payload.followUpQuestions,
        sourceTag: payload.sourceTag,
        references: payload.references,
      };
    } catch (error) {
      const errorName = (error as { name?: string } | null)?.name;
      const timedOut = errorName === 'AbortError' || errorName === 'TimeoutError';
      this.markFailed(engine, timedOut ? PROVIDER_TIMEOUT_COOLDOWN_MS : PROVIDER_COOLDOWN_MS);
      logger.warn(`${engine} assist failed — trying the next engine`, {
        requestId,
        model,
        error: error instanceof Error ? error.message : String(error),
      });
      return null;
    }
  }

  /* ---------------------------------------------------------- curated vault - */

  private composeCurated(
    request: ObgynAssistRequest,
    attachment: DocumentAttachment | null,
    requestId: string,
  ): CuratedAnswer {
    const document = attachment && attachment.text.length >= MIN_USABLE_DOCUMENT_CHARS ? attachment : null;
    const promptTopic = detectObgynTopic(request.prompt);
    const hintTopic = attachment ? detectObgynTopic(attachment.name) : null;
    const topic = promptTopic ?? hintTopic;

    let assembled: CuratedAnswer;

    if (request.mode === 'flashcards') {
      const deck = topic ? this.composeTopicFlashcards(topic, request.track) : document ? this.buildDocumentFlashcards(document, request.track) : null;
      assembled = deck ?? this.composeScaffold(request.prompt, request.track);
    } else if (request.mode === 'summarize_pdf' || (attachment && !promptTopic)) {
      const summary = document ? this.buildDocumentSummary(document, request.track) : null;
      if (summary) {
        assembled = summary;
      } else if (topic) {
        assembled = this.composeTopicAnswer(
          topic,
          request.track,
          attachment ? `no selectable text layer could be read from "${attachment.name}" — the studio answered from its curated vault instead` : null,
        );
      } else {
        assembled = this.composeUploadScaffold(attachment, request.track);
      }
    } else if (topic) {
      assembled = this.composeTopicAnswer(topic, request.track, null);
    } else if (document) {
      assembled = this.buildDocumentSummary(document, request.track) ?? this.composeScaffold(request.prompt, request.track);
    } else {
      assembled = this.composeScaffold(request.prompt, request.track);
    }

    logger.info('obgyn assist served by curated vault', {
      requestId,
      mode: request.mode,
      track: request.track,
      topic: topic?.id ?? null,
      document: document ? { name: document.name, characters: document.characters } : null,
    });

    return assembled;
  }

  private composeTopicAnswer(topic: ObgynTopic, track: ObgynTrack, orphanNote: string | null): CuratedAnswer {
    const note = orphanNote ? `> **Note:** ${orphanNote}.\n\n` : '';
    return {
      answer: `${note}${topic.body[track]}`,
      highYieldPearl: topic.pearl[track],
      followUpQuestions: topic.followUps[track],
      sourceTag: topic.sourceTag[track],
    };
  }

  private composeTopicFlashcards(topic: ObgynTopic, track: ObgynTrack): CuratedAnswer {
    return {
      answer: `🧠 **Core Clinical Concept / Summary**

**Rapid Deck · 5 high-yield cards (${TRACK_LABELS[track]})** — cover the reveal column, answer aloud, then check.

${topic.flashcardDeck}

⚡ **Rapid Recall & Exam Trap**

${topic.flashcardTrap}`,
      highYieldPearl: topic.pearl[track],
      followUpQuestions: topic.followUps[track],
      sourceTag: topic.sourceTag[track],
    };
  }

  /* -------------------------------------------------------- document paths - */

  private buildDocumentSummary(document: DocumentAttachment, track: ObgynTrack): CuratedAnswer | null {
    const sentences = splitDocumentSentences(document.text);
    if (sentences.length < 3) return null;

    const { rankings, topTerms } = rankDocument(sentences);
    const byIndex = (a: ScoredSentence, b: ScoredSentence): number => a.index - b.index;

    const executive = rankings.slice(0, 3).sort(byIndex);
    const oneLiners = rankings.slice(3, 8).sort(byIndex);
    const pool = rankings.length > 11 ? rankings.slice(8) : rankings;

    const mcqs: string[] = [];
    const usedIndices = new Set<number>();
    for (const entry of pool) {
      if (mcqs.length >= 3) break;
      if (usedIndices.has(entry.index)) continue;
      const mcq =
        buildNumericMcq(entry, mcqs.length + 1) ?? buildTermMcq(entry, topTerms, mcqs.length + 1);
      if (!mcq) continue;
      usedIndices.add(entry.index);
      mcqs.push(mcq);
    }

    const execBullets = executive.map((entry) => `- ${trimSentence(entry.sentence)}`).join('\n');
    const oneLinerLines = oneLiners.map((entry, index) => `${index + 1}. ${boldFirstTerm(trimSentence(entry.sentence, 220), topTerms)}`).join('\n');
    const mcqBlock =
      mcqs.length > 0
        ? mcqs.join('\n\n')
        : '*Not enough structured statements in this document to auto-write MCQs — switch to Ask mode and quiz yourself on the one-liners.*';

    return {
      answer: `🧠 **Core Clinical Concept / Summary**

**Executive Topic Summary — "${document.name}"**

${execBullets}

**Top 5 High-Yield One-Liners**

${oneLinerLines}

**Rapid-Fire Practice MCQs**

${mcqBlock}

⚡ **Rapid Recall & Exam Trap**

- Numbers inside a lecture handout are placed exactly where examiners dig — treat every threshold and dose above as a future MCQ.
- Cover the answers, recall aloud, and reopen only the lines you miss — retrieval, not rereading.

*Auto-distilled by the built-in extractive engine${document.pages ? ` (${document.pages} page${document.pages === 1 ? '' : 's'} parsed)` : ''} — cross-check every number against the original page.*`,
      highYieldPearl: trimSentence(rankings[0]?.sentence ?? sentences[0], 230),
      followUpQuestions: [
        'Quiz me on these one-liners as flashcards',
        'Explain the highest-yield threshold here in PG depth',
        'Which parts of this document are most commonly examined?',
      ],
      sourceTag: `Distilled from "${document.name}" • ${TRACK_LABELS[track]} framing`,
    };
  }

  private buildDocumentFlashcards(document: DocumentAttachment, track: ObgynTrack): CuratedAnswer | null {
    const sentences = splitDocumentSentences(document.text);
    if (sentences.length < 3) return null;

    const { rankings, topTerms } = rankDocument(sentences);
    const cards: Array<{ prompt: string; reveal: string }> = [];

    for (const entry of rankings) {
      if (cards.length >= 5) break;
      const numeric = entry.sentence.match(NUMERIC_TOKEN_RE);
      if (numeric) {
        const question = entry.sentence.replace(numeric[0], '________');
        if (question !== entry.sentence) cards.push({ prompt: trimSentence(question, 200), reveal: numeric[0] });
        continue;
      }
      const term = topTerms.find((candidate) => candidate.length >= 6 && entry.sentence.toLowerCase().includes(candidate));
      if (!term) continue;
      const question = blankFirstTerm(entry.sentence, term);
      if (question) cards.push({ prompt: trimSentence(question, 200), reveal: term });
    }

    if (cards.length < 3) return null;

    const rows = cards.map((card, index) => `| ${index + 1} | ${card.prompt} | **${card.reveal}** |`).join('\n');

    return {
      answer: `🧠 **Core Clinical Concept / Summary**

**Recall deck built from "${document.name}" (${TRACK_LABELS[track]})** — cover the reveal column, answer aloud, then check.

| # | Complete the line | Reveal |
| --- | --- | --- |
${rows}

⚡ **Rapid Recall & Exam Trap**

- Cloze-first retrieval: say every blank aloud before you check — recall beats rereading every single time.

*Auto-generated from your upload — verify each answer against the original document.*`,
      highYieldPearl: 'Cloze-first retrieval: say every blank aloud before you check — recall beats rereading.',
      followUpQuestions: [
        'Summarize this document into one-liners instead',
        'Explain the most tested number in this file in PG depth',
        'Which two conditions in this file are most easily confused?',
      ],
      sourceTag: `Cloze deck from "${document.name}" • ${TRACK_LABELS[track]} framing`,
    };
  }

  private composeUploadScaffold(attachment: DocumentAttachment | null, track: ObgynTrack): CuratedAnswer {
    const target = attachment ? `"${attachment.name}"` : 'your document';

    const lines = attachment
      ? `- The studio read ${target} but could not extract a usable text layer — typical of scanned or image-only PDFs.
- Export a text-based PDF, share the .txt version of your notes, or paste the key lines into Ask mode — every path feeds this same engine.`
      : `- No document reached the studio yet — attach a **.pdf** or **.txt** file (up to 10 MB) and Summarize again.
- Or paste the key lines straight into Ask mode — the engine will still structure them exam-ready.`;

    return {
      answer: `🧠 **Core Clinical Concept / Summary**

**Upload received — no readable text layer**

${lines}

**Meanwhile — make it exam-ready tonight**

- Map the headings of ${target} into a one-page skeleton before reading a single paragraph.
- Convert every table and flow chart into three viva questions — tables are examiner bait.
- Flag every number — dose, cut-off, week — those are the marks.

⚡ **Rapid Recall & Exam Trap**

- Scanned PDFs hide their text from every extractor; a single OCR pass converts them into fuel for Summarize mode.`,
      highYieldPearl: attachment
        ? 'Scanned PDFs hide their text layer from every extractor — run OCR or export a text-based PDF, then Summarize again.'
        : 'Summarize mode needs a document — attach a text-based PDF or a .txt export and the studio will distil it end to end.',
      followUpQuestions: OBGYN_SCAFFOLD_FOLLOW_UPS[track],
      sourceTag: attachment
        ? `Extraction attempt on ${target} • ${TRACK_LABELS[track]} framing`
        : `Awaiting attachment • ${TRACK_LABELS[track]} framework`,
    };
  }

  private composeScaffold(prompt: string, track: ObgynTrack): CuratedAnswer {
    return {
      answer: buildObgynScaffoldBody(prompt, track),
      highYieldPearl: OBGYN_SCAFFOLD_PEARL,
      followUpQuestions: OBGYN_SCAFFOLD_FOLLOW_UPS[track],
      sourceTag: `Conceptual OBGYN framework • ${TRACK_LABELS[track]}`,
    };
  }

  /* --------------------------------------------------------------- helpers - */

  private ensureFollowUps(questions: readonly string[], track: ObgynTrack): string[] {
    const pool: string[] = [];
    for (const question of questions) {
      const trimmed = question.trim();
      if (trimmed.length > 0 && !pool.includes(trimmed)) pool.push(trimmed);
      if (pool.length >= 3) break;
    }
    for (const fallback of OBGYN_SCAFFOLD_FOLLOW_UPS[track]) {
      if (pool.length >= 3) break;
      if (!pool.includes(fallback)) pool.push(fallback);
    }
    return pool.slice(0, 3);
  }
}

export const obgynAiService = new ObgynAiService();
