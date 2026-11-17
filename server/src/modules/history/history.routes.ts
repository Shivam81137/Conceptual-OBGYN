import { Router, type Request, type RequestHandler, type Response } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { validate } from '../../middleware/validate.js';
import { HttpError } from '../../utils/httpError.js';
import { requireAuth } from '../auth/auth.middleware.js';
import { eventsQuerySchema, syncBodySchema, type SyncBody } from './history.schema.js';
import { historyService } from './history.service.js';

const envelope = <T>(requestId: string, data: T) => ({ success: true as const, requestId, data });

const currentUserId = (req: Request): string => {
  if (!req.user) throw new HttpError('UNAUTHORIZED', 'Sign in to continue.');
  return req.user.id;
};

/**
 *   GET  /history        → snapshot + stats + recent activity for the signed-in student
 *   POST /history/sync   → merge (first sync) or replace (later syncs) the student's state
 * Every route requires `Authorization: Bearer <token>`.
 */
export const createHistoryRouter = (limiter: RequestHandler): Router => {
  const router = Router();
  router.use(limiter, requireAuth);

  router.get(
    '/',
    validate({ query: eventsQuerySchema }),
    asyncHandler(async (req: Request, res: Response) => {
      const { limit } = eventsQuerySchema.parse(req.query);
      res.setHeader('Cache-Control', 'no-store');
      res.json(envelope(req.requestId, await historyService.get(currentUserId(req), limit)));
    }),
  );

  router.post(
    '/sync',
    validate({ body: syncBodySchema }),
    asyncHandler(async (req: Request, res: Response) => {
      res.setHeader('Cache-Control', 'no-store');
      res.json(envelope(req.requestId, await historyService.sync(currentUserId(req), req.body as SyncBody)));
    }),
  );

  return router;
};

export default createHistoryRouter;
