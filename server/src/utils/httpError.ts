import { z } from 'zod';

export type HttpErrorCode =
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'RATE_LIMITED'
  | 'DATABASE_UNAVAILABLE'
  | 'AI_PIPELINE_ERROR'
  | 'INTERNAL_ERROR';

const STATUS_BY_CODE: Record<HttpErrorCode, number> = {
  VALIDATION_ERROR: 422,
  NOT_FOUND: 404,
  RATE_LIMITED: 429,
  DATABASE_UNAVAILABLE: 503,
  AI_PIPELINE_ERROR: 502,
  INTERNAL_ERROR: 500,
};

/**
 * Error type shared by every layer. `details` is a zod-style issue list that the
 * client can render field-by-field (the landing page never shows it, but the
 * authoring tools and future admin surface do).
 */
export class HttpError extends Error {
  public readonly status: number;
  public readonly code: HttpErrorCode;
  public readonly details: ReadonlyArray<{ path: string; message: string }> | undefined;

  constructor(
    code: HttpErrorCode,
    message: string,
    options: { status?: number; details?: ReadonlyArray<{ path: string; message: string }> } = {},
  ) {
    super(message);
    this.name = 'HttpError';
    this.code = code;
    this.status = options.status ?? STATUS_BY_CODE[code];
    this.details = options.details;
    Error.captureStackTrace?.(this, HttpError);
  }

  static notFound(resource: string, id?: string): HttpError {
    return new HttpError('NOT_FOUND', id ? `${resource} "${id}" was not found.` : `${resource} was not found.`);
  }

  static fromZod(error: z.ZodError): HttpError {
    return new HttpError('VALIDATION_ERROR', 'The request payload failed schema validation.', {
      details: error.issues.map((issue) => ({
        path: issue.path.join('.') || '(root)',
        message: issue.message,
      })),
    });
  }
}

/** Normalises anything thrown in an async handler into an HttpError. */
export const toHttpError = (error: unknown): HttpError => {
  if (error instanceof HttpError) return error;
  if (error instanceof z.ZodError) return HttpError.fromZod(error);

  const message = error instanceof Error ? error.message : 'Unexpected server error.';
  return new HttpError('INTERNAL_ERROR', message, { status: 500 });
};
