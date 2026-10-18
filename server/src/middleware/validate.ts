import type { RequestHandler } from 'express';
import type { ZodTypeAny, z } from 'zod';
import { HttpError } from '../utils/httpError.js';

export interface ValidationTargets {
  body?: ZodTypeAny;
  query?: ZodTypeAny;
  params?: ZodTypeAny;
}

export interface ValidatedRequest<TTargets extends ValidationTargets> {
  body: TTargets['body'] extends ZodTypeAny ? z.infer<NonNullable<TTargets['body']>> : unknown;
  query: TTargets['query'] extends ZodTypeAny ? z.infer<NonNullable<TTargets['query']>> : unknown;
  params: TTargets['params'] extends ZodTypeAny ? z.infer<NonNullable<TTargets['params']>> : unknown;
}

/**
 * Request validator. Parsed (and coerced) values replace the raw Express
 * objects, so downstream controllers work with fully typed data and never touch
 * `req.query` string soup.
 */
export const validate =
  (targets: ValidationTargets): RequestHandler =>
  (req, _res, next) => {
    try {
      if (targets.params) req.params = targets.params.parse(req.params);
      if (targets.query) req.query = targets.query.parse(req.query);
      if (targets.body) req.body = targets.body.parse(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };

/** Type-narrowing helper for handlers that ran through `validate`. */
export const validated = <TTargets extends ValidationTargets>(req: unknown): ValidatedRequest<TTargets> => {
  const request = req as {
    body: unknown;
    query: unknown;
    params: unknown;
  };
  return {
    body: request.body,
    query: request.query,
    params: request.params,
  } as ValidatedRequest<TTargets>;
};

/** Guards controllers that must not run without a healthy datastore. */
export const assertFound = <TValue>(value: TValue | null | undefined, resource: string, id?: string): TValue => {
  if (value === null || value === undefined) throw HttpError.notFound(resource, id);
  return value;
};
