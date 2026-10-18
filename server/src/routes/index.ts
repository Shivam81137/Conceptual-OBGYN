import { Router } from 'express';
import { createRateLimiters } from '../middleware/rateLimit.js';
import { createAiRouter } from '../modules/ai/ai.routes.js';
import { createRevisionRouter } from '../modules/revision/revision.routes.js';
import { createTracksRouter } from '../modules/tracks/tracks.routes.js';
import { createObgynAiRouter } from './ai.routes.js';

/**
 * API surface (mounted at env.API_PREFIX, default /api/v1):
 *
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
  const { read, ai } = createRateLimiters();

  router.use('/tracks', createTracksRouter(read));
  router.use('/revision', createRevisionRouter(read));
  router.use('/ai', createAiRouter(ai));
  /* The studio composer lives in its own layer (`routes` + `services`); the
     RAG module above keeps `/ai/summarise` and `/ai/search` untouched. */
  router.use('/ai', createObgynAiRouter(ai));

  return router;
};

export default createApiRouter;
