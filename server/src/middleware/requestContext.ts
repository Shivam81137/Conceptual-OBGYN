import { randomUUID } from 'node:crypto';
import type { RequestHandler } from 'express';
import { logger } from '../utils/logger.js';

const REQUEST_ID_HEADER = 'x-request-id';
const CACHE_SAFE_METHODS = new Set(['GET', 'HEAD']);
/** Safe header/log characters only — stops malformed or spoofed correlation ids
 *  from breaking res.setHeader (ERR_INVALID_CHAR) or polluting log lines. */
const REQUEST_ID_RE = /^[a-zA-Z0-9][a-zA-Z0-9_\-.]{0,63}$/;

/**
 * Correlation + access logging. Every response carries `x-request-id`, which the
 * React client surfaces inside its ApiError type for support triage.
 */
export const requestContext = (): RequestHandler => (req, res, next) => {
  const inbound = req.header(REQUEST_ID_HEADER);
  req.requestId = inbound && REQUEST_ID_RE.test(inbound) ? inbound : randomUUID();
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
