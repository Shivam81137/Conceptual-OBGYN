import { Router } from 'express';
import type { Request, RequestHandler, Response } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { validated, validate, type ValidationTargets } from '../../middleware/validate.js';
import { HttpError, toHttpError } from '../../utils/httpError.js';
import { logger } from '../../utils/logger.js';
import { summariseRequestSchema, type SummariseRequest, type SuccessEnvelope, type SummariseResponse } from '../tracks/tracks.schema.js';
import { ragPipeline } from './rag.pipeline.js';

type SummariseTargets = ValidationTargets & { body: typeof summariseRequestSchema };

const envelope = <TData>(requestId: string, data: TData): SuccessEnvelope<TData> => ({ success: true, requestId, data });

/**
 * AI controller — exposes the RAG pipeline over HTTP.
 * POST /api/v1/ai/summarise  { documentId, title, track, focus?, passages[] }
 */
export const createAiRouter = (aiLimiter: RequestHandler): Router => {
  const router = Router();

  router.post(
    '/summarise',
    aiLimiter,
    validate({ body: summariseRequestSchema }),
    asyncHandler(async (req: Request, res: Response) => {
      const { body } = validated<SummariseTargets>(req);
      const request = summariseRequestSchema.parse(body) as SummariseRequest;

      try {
        const result = await ragPipeline.summarise(request);
        logger.info('rag summarisation complete', {
          requestId: req.requestId,
          documentId: result.documentId,
          chunks: result.chunkCount,
          confidence: result.confidence,
        });
        res.status(200).json(envelope(req.requestId, result satisfies SummariseResponse));
      } catch (error) {
        const httpError = toHttpError(error);
        throw new HttpError('AI_PIPELINE_ERROR', `Summarisation failed: ${httpError.message}`);
      }
    }),
  );

  /** GET /api/v1/ai/search?track=NEET_PG&q=mgso4 — semantic recall over the index. */
  router.get(
    '/search',
    aiLimiter,
    asyncHandler(async (req: Request, res: Response) => {
      const query = typeof req.query.q === 'string' ? req.query.q : '';
      const track = typeof req.query.track === 'string' ? req.query.track : 'NEET_PG';
      const topK = Math.min(Number(req.query.topK ?? 5) || 5, 20);

      if (query.trim().length < 3) {
        throw new HttpError('VALIDATION_ERROR', 'Query parameter "q" must be at least 3 characters long.');
      }

      const matches = await ragPipeline.search(track, query, topK);
      res.status(200).json(envelope(req.requestId, { query, track, matches }));
    }),
  );

  return router;
};

export default createAiRouter;
