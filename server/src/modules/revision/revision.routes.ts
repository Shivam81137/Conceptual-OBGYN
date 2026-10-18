import { Router, type Request, type RequestHandler, type Response } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { validate, validated, type ValidationTargets } from '../../middleware/validate.js';
import { HttpError } from '../../utils/httpError.js';
import { revisionModuleQuerySchema, type SuccessEnvelope } from '../tracks/tracks.schema.js';
import { tracksService } from '../tracks/tracks.service.js';
import {
  scheduleReviewBodySchema,
  type ScheduleReviewBody,
  type ScheduleReviewResponse,
} from './revision.schema.js';
import { describeInterval, scheduleNextReview } from './spacedRepetition.js';

type ModulesQueryTargets = ValidationTargets & { query: typeof revisionModuleQuerySchema };
type ReviewTargets = ValidationTargets & { body: typeof scheduleReviewBodySchema };

const envelope = <TData>(requestId: string, data: TData): SuccessEnvelope<TData> => ({ success: true, requestId, data });

export class RevisionController {
  /** GET /revision/modules — network-first cached by the service worker. */
  public readonly listModules: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const { query } = validated<ModulesQueryTargets>(req);
    const page = await tracksService.listRevisionModules(revisionModuleQuerySchema.parse(query));
    res.setHeader('Cache-Control', 'private, max-age=30, stale-while-revalidate=120');
    res.status(200).json(envelope(req.requestId, page));
  });

  /**
   * POST /revision/reviews — SM-2 scheduling.
   * Stateless by design: the flashcard carries its own scheduling state, so an
   * offline client can review for weeks and reconcile in one call.
   */
  public readonly scheduleReview: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const { body } = validated<ReviewTargets>(req);
    const payload = scheduleReviewBodySchema.parse(body) as ScheduleReviewBody;

    if (!Number.isFinite(payload.grade)) throw new HttpError('VALIDATION_ERROR', 'A review grade between 0 and 5 is required.');

    const next = scheduleNextReview(
      {
        easeFactor: payload.easeFactor,
        intervalDays: payload.intervalDays,
        repetitions: payload.repetitions,
        lapses: payload.lapses,
      },
      payload.grade,
      { imageBased: payload.imageBased },
    );

    const response: ScheduleReviewResponse = {
      flashcardId: payload.flashcardId,
      easeFactor: next.easeFactor,
      intervalDays: next.intervalDays,
      repetitions: next.repetitions,
      lapses: next.lapses,
      dueAtISO: next.dueAt.toISOString(),
      dueLabel: describeInterval(next.dueAt),
      grade: payload.grade,
    };

    res.status(200).json(envelope(req.requestId, response));
  });
}

export const revisionController = new RevisionController();

export const createRevisionRouter = (readLimiter: RequestHandler): Router => {
  const router = Router();
  router.get('/modules', readLimiter, validate({ query: revisionModuleQuerySchema }), revisionController.listModules);
  router.post('/reviews', validate({ body: scheduleReviewBodySchema }), revisionController.scheduleReview);
  return router;
};

export default createRevisionRouter;
