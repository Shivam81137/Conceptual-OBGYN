import { randomUUID } from 'node:crypto';
import type { RequestHandler } from 'express';
import { logger } from '../utils/logger.js';

const REQUEST_ID_HEADER = 'x-request-id';
const CACHE_SAFE_METHODS = new Set(['GET', 'HEAD']);

/**
 * Correlation + access logging. Every response carries `x-request-id`, which the
 * React client surfaces inside its ApiError type for support triage.
 */
export const requestContext = (): RequestHandler => (req, res, next) => {
  const inbound = req.header(REQUEST_ID_HEADER);
  req.requestId = inbound && inbound.length <= 64 ? inbound : randomUUID();
  req.startedAt = performance.now();
  res.setHeader(REQUEST_ID_HEADER, req.requestId);
  res.setHeader('X-Content-Type-Options', 'nosniff');

  res.on('finish', () => {
    const durationMs = Number((performance.now() - req.startedAt).toFixed(2));
    const context = {
      requestId: req.requestId,
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      durationMs,
      ...(CACHE_SAFE_METHODS.has(req.method) && res.getHeader('x-cache') ? { cache: res.getHeader('x-cache') } : {}),
    };

    if (res.statusCode >= 500) logger.error('request failed', context);
    else if (res.statusCode >= 400) logger.warn('request rejected', context);
    else logger.info('request served', context);
  });

  next();
};
