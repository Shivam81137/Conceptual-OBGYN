import type { Request, RequestHandler, Response } from 'express';
import { env } from '../../config/env.js';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { validated, type ValidationTargets } from '../../middleware/validate.js';
import { HttpError } from '../../utils/httpError.js';
import {
  revisionModuleQuerySchema,
  trackIdSchema,
  trackParamSchema,
  type RevisionModuleQuery,
  type SuccessEnvelope,
  type TrackSummary,
  type TrackSummaryResponse,
} from './tracks.schema.js';
import { tracksService, type TracksService } from './tracks.service.js';

type QueryTargets = ValidationTargets & { query: typeof revisionModuleQuerySchema };
type TrackParamTargets = ValidationTargets & { params: typeof trackParamSchema };

const envelope = <TData>(requestId: string, data: TData): SuccessEnvelope<TData> => ({
  success: true,
  requestId,
  data,
});

/**
 * TracksController — pure HTTP adapter: validate → service → envelope.
 * No business logic, no persistence access, no framework leakage downward.
 */
export class TracksController {
  public constructor(private readonly service: TracksService = tracksService) {}

  /** GET /tracks/summary — consumed by the landing page via TanStack Query. */
  public readonly getSummary: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const summary = await this.service.getSummary();
    res.setHeader(
      'Cache-Control',
      env.isProduction ? 'public, max-age=60, stale-while-revalidate=600' : 'no-store',
    );
    res.setHeader('x-cache', 'MISS');
    res.status(200).json(envelope(req.requestId, summary satisfies TrackSummaryResponse));
  });

  /** GET /tracks/:track — single portal payload. */
  public readonly getTrack: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const { params } = validated<TrackParamTargets>(req);
    const trackId = trackIdSchema.parse(params.track);
    const track = await this.service.getTrack(trackId);

    if (!track) throw HttpError.notFound('Track', trackId);
    res.status(200).json(envelope(req.requestId, track satisfies TrackSummary));
  });

  /** GET /tracks/:track/modules — Revision Studio module index. */
  public readonly getTrackModules: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const { params } = validated<TrackParamTargets>(req);
    const trackId = trackIdSchema.parse(params.track);
    const payload = this.service.listStudioModules(trackId);
    res.setHeader(
      'Cache-Control',
      env.isProduction ? 'public, max-age=300, stale-while-revalidate=900' : 'no-store',
    );
    res.status(200).json(envelope(req.requestId, payload));
  });

  /** GET /tracks/revision/modules — paginated high-yield revision feed. */
  public readonly listRevisionModules: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const { query } = validated<QueryTargets>(req);
    const page = await this.service.listRevisionModules(query as RevisionModuleQuery);
    res.status(200).json(envelope(req.requestId, page));
  });

  /** GET /tracks/health — repository + corpus telemetry. */
  public readonly getHealth: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const health = await this.service.getHealth();
    res.status(200).json(envelope(req.requestId, health));
  });
}

export const tracksController = new TracksController();
