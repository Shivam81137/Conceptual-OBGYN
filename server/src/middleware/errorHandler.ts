import type { ErrorRequestHandler, RequestHandler } from 'express';
import { env } from '../config/env.js';
import { HttpError, toHttpError } from '../utils/httpError.js';
import { logger } from '../utils/logger.js';

/** Uniform failure envelope consumed by the client's zod decoder. */
export interface ErrorEnvelope {
  success: false;
  requestId: string;
  error: {
    code: string;
    message: string;
    details?: ReadonlyArray<{ path: string; message: string }>;
  };
}

export const notFoundHandler: RequestHandler = (req, _res, next) => {
  next(HttpError.notFound(`${req.method} ${req.path}`));
};

export const errorHandler = (): ErrorRequestHandler => (error, req, res, _next) => {
  const httpError = toHttpError(error);
  const requestId = req.requestId ?? 'unknown';

  if (httpError.status >= 500) {
    logger.error('unhandled error', {
      requestId,
      code: httpError.code,
      message: httpError.message,
      stack: env.isProduction ? undefined : httpError.stack?.split('\n').slice(0, 4).join(' | '),
    });
  }

  const envelope: ErrorEnvelope = {
    success: false,
    requestId,
    error: {
      code: httpError.code,
      message: httpError.status >= 500 && env.isProduction ? 'The revision service encountered an internal error.' : httpError.message,
      ...(httpError.details ? { details: httpError.details } : {}),
    },
  };

  res.status(httpError.status).json(envelope);
};
