import { config as loadEnv } from 'dotenv';
import { z } from 'zod';

loadEnv();

/**
 * Fail-fast environment contract. Every runtime dependency is validated once at
 * boot, so misconfiguration surfaces as a readable message instead of an
 * undefined value deep inside a controller.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().max(65535).default(5000),
  API_PREFIX: z.string().startsWith('/').default('/api/v1'),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error', 'silent']).default('info'),

  MONGODB_URI: z.string().optional(),
  MONGODB_CONNECT_TIMEOUT_MS: z.coerce.number().int().positive().default(5000),
  MONGODB_MAX_RETRIES: z.coerce.number().int().nonnegative().default(5),

  CORS_ORIGINS: z.string().default('http://localhost:5173,http://localhost:4173'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60_000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(180),
  JSON_BODY_LIMIT: z.string().default('256kb'),

  AI_EMBEDDING_DIMENSIONS: z.coerce.number().int().positive().default(384),
  AI_CHUNK_TOKENS: z.coerce.number().int().positive().default(180),
  AI_SUMMARY_SENTENCES: z.coerce.number().int().positive().max(20).default(6),
  AI_VECTOR_STORE: z.enum(['memory', 'mongo']).default('memory'),
  AI_UPLOAD_MAX_BYTES: z.coerce.number().int().positive().default(10 * 1024 * 1024),

  /* OmniRoute — self-hosted OpenAI-compatible gateway; the primary hop. */
  OMNIROUTE_API_KEY: z.preprocess(
    (value) => (typeof value === 'string' && value.trim().length === 0 ? undefined : value),
    z.string().min(1).optional(),
  ),
  OMNIROUTE_BASE_URL: z.string().url().default('http://localhost:20128/v1'),
  OMNIROUTE_MODEL: z.string().default('auto/best-chat'),
  OMNIROUTE_TIMEOUT_MS: z.coerce.number().int().min(1000).max(180_000).default(60_000),

  /* Gemini — optional. Without a key, or when unreachable, the chain degrades. */
  GEMINI_API_KEY: z.preprocess(
    (value) => (typeof value === 'string' && value.trim().length === 0 ? undefined : value),
    z.string().min(1).optional(),
  ),
  GEMINI_MODEL: z.string().default('gemini-3.8-flash'),
  GEMINI_TIMEOUT_MS: z.coerce.number().int().min(1000).max(120_000).default(30_000),

  /* OpenRouter — optional aggregator for open-source models (Gemma, Llama, DeepSeek…). */
  OPENROUTER_API_KEY: z.preprocess(
    (value) => (typeof value === 'string' && value.trim().length === 0 ? undefined : value),
    z.string().min(1).optional(),
  ),
  OPENROUTER_MODEL: z.string().default('google/gemma-4-31b-it:free'),
  OPENROUTER_TIMEOUT_MS: z.coerce.number().int().min(1000).max(120_000).default(30_000),

  /* Groq — optional open-source (Llama) engine. */
  GROQ_API_KEY: z.preprocess(
    (value) => (typeof value === 'string' && value.trim().length === 0 ? undefined : value),
    z.string().min(1).optional(),
  ),
  GROQ_MODEL: z.string().default('llama-3.3-70b-versatile'),
  GROQ_TIMEOUT_MS: z.coerce.number().int().min(1000).max(120_000).default(30_000),

  /* Pollinations — keyless open-source text API; the always-available live engine. */
  POLLINATIONS_ENABLED: z
    .enum(['0', '1', 'true', 'false'])
    .default('1')
    .transform((value) => value === '1' || value === 'true'),
  POLLINATIONS_MODEL: z.string().default('openai-fast'),
  POLLINATIONS_TIMEOUT_MS: z.coerce.number().int().min(1000).max(120_000).default(45_000),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((issue) => `  · ${issue.path.join('.') || '(root)'}: ${issue.message}`)
    .join('\n');
  throw new Error(`Invalid environment configuration:\n${issues}\n\nCopy server/.env.example to server/.env and retry.`);
}

const raw = parsed.data;

export const env = {
  ...raw,
  isProduction: raw.NODE_ENV === 'production',
  isDevelopment: raw.NODE_ENV === 'development',
  corsOrigins: raw.CORS_ORIGINS.split(',')
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0),
} as const;

export type Env = typeof env;
