import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { trackParamSchema } from './tracks.schema.js';
import { tracksController } from './tracks.controller.js';

/**
 * Public read surface for the PWA.
 * Everything mounted here is cached by Workbox at runtime:
 *   /api/v1/revision/*  → network-first (revision modules, Spaced repetition)
 *   /api/v1/tracks/*    → stale-while-revalidate (track summaries)
 */
export const createTracksRouter = (readLimiter: import('express').RequestHandler): Router => {
  const router = Router();

  router.get('/summary', readLimiter, tracksController.getSummary);
  router.get('/health', readLimiter, tracksController.getHealth);

  router.get(
    '/:track/modules',
    readLimiter,
    validate({ params: trackParamSchema }),
    tracksController.getTrackModules,
  );

  router.get(
    '/:track',
    readLimiter,
    validate({ params: trackParamSchema }),
    tracksController.getTrack,
  );

  return router;
};

export default createTracksRouter;
