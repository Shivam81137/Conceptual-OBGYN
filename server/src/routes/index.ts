import { Router } from 'express';
import { createRateLimiters } from '../middleware/rateLimit.js';
import { createHistoryRouter } from '../modules/history/history.routes.js';
import { createAuthRouter } from '../modules/auth/auth.routes.js';
import { createAiRouter } from '../modules/ai/ai.routes.js';
import { createObgynAiRouter } from '../modules/ai/obgyn.routes.js';
import { createRevisionRouter } from '../modules/revision/revision.routes.js';
import { createTracksRouter } from '../modules/tracks/tracks.routes.js';

/**
 * API surface (mounted at env.API_PREFIX, default /api/v1):
 *
 *   POST /auth/signup               → create a student account (returns session token)
 *   POST /auth/login                → sign in (returns session token)
 *   GET  /auth/me                   → current student (Bearer token)
 *   GET  /history                  → student's study snapshot, stats and recent activity (auth)
 *   POST /history/sync              → merge/replace the student's study state (auth)
 *   GET  /tracks/summary            → dual-track landing payload (SWR cached)
 *   GET  /tracks/health             → repository + corpus telemetry
 *   GET  /tracks/:track             → single portal payload
 *   GET  /tracks/:track/modules     → Revision Studio module index (order + metadata)
 *   GET  /revision/modules          → paginated revision feed (network-first)
 *   POST /revision/reviews          → SM-2 scheduling for a flashcard review
 *   POST /ai/summarise              → RAG extractive summarisation
 *   GET  /ai/search                 → semantic recall over the indexed corpus
 *   POST /ai/obgyn-assist           → clinical studio composer (Gemini + curated vault)
 *   GET  /ai/obgyn-assist/status    → studio engine capabilities
 */
export const createApiRouter = (): Router => {
  const router = Router();
  const { read, ai, auth } = createRateLimiters();

  router.use('/auth', createAuthRouter(auth));
  router.use('/history', createHistoryRouter(read));
  router.use('/tracks', createTracksRouter(read));
  router.use('/revision', createRevisionRouter(read));
  router.use('/ai', createAiRouter(ai));
  /* The OBGYN studio composer lives alongside the RAG module in `modules/ai`;
     it keeps `/ai/summarise` and `/ai/search` untouched. */
  router.use('/ai', createObgynAiRouter(ai));

  return router;
};

export default createApiRouter;
