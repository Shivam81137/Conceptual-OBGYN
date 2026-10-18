import rateLimit, { type RateLimitRequestHandler } from 'express-rate-limit';
import type { RequestHandler } from 'express';
import { env } from '../config/env.js';
import type { ErrorEnvelope } from './errorHandler.js';

/**
 * Two tiers: a generous read limiter for the revision endpoints (they are cheap
 * and heavily cached by Workbox) and a tight limiter for the AI pipeline, which
 * is the only endpoint with real compute cost behind it.
 */
export const createRateLimiters = (): { read: RequestHandler; ai: RequestHandler } => {
  const read: RateLimitRequestHandler = rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    limit: env.RATE_LIMIT_MAX,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    skip: () => env.NODE_ENV === 'test',
    handler: (req, res) => {
      const envelope: ErrorEnvelope = {
        success: false,
        requestId: req.requestId ?? 'unknown',
        error: {
          code: 'RATE_LIMITED',
          message: 'Too many revision requests — the offline vault will serve you until the window resets.',
        },
      };
      res.status(429).json(envelope);
    },
  });

  const ai: RateLimitRequestHandler = rateLimit({
    windowMs: 60_000,
    limit: 20,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    skip: () => env.NODE_ENV === 'test',
    handler: (req, res) => {
      const envelope: ErrorEnvelope = {
        success: false,
        requestId: req.requestId ?? 'unknown',
        error: { code: 'RATE_LIMITED', message: 'Summarisation quota reached for this minute.' },
      };
      res.status(429).json(envelope);
    },
  });

  return { read, ai };
};
