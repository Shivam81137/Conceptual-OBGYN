import { z } from 'zod';

const DEFAULT_BASE_URL = '/api/v1';
const REQUEST_TIMEOUT_MS = 6500;

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? DEFAULT_BASE_URL).replace(/\/$/, '');

export class ApiError extends Error {
  public readonly status: number;
  public readonly requestId: string | null;
  public readonly code: string;

  constructor(message: string, options: { status: number; requestId?: string | null; code?: string }) {
    super(message);
    this.name = 'ApiError';
    this.status = options.status;
    this.requestId = options.requestId ?? null;
    this.code = options.code ?? 'API_ERROR';
  }

  get isOfflineCulprit(): boolean {
    return this.status === 0 || this.status >= 500;
  }
}

const envelopeWithError = z.object({
  success: z.literal(false),
  requestId: z.string().optional(),
  error: z.object({ code: z.string().optional(), message: z.string().optional() }).optional(),
});

export interface RequestOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
  /** Defaults to GET; POST requests may carry a JSON string or FormData body. */
  method?: 'GET' | 'POST';
  body?: BodyInit | null;
  headers?: Record<string, string>;
}

/**
 * Typed fetch wrapper: hard timeout, envelope unwrapping, zod validation of the
 * payload and a single normalised error type for the whole app.
 */
export async function apiRequest<TSchema extends z.ZodTypeAny>(
  path: string,
  schema: TSchema,
  options: RequestOptions = {},
): Promise<z.infer<TSchema>> {
  const { signal, timeoutMs = REQUEST_TIMEOUT_MS, method = 'GET', body = null, headers } = options;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort('timeout'), timeoutMs);

  if (signal) {
    if (signal.aborted) controller.abort(signal.reason);
    else signal.addEventListener('abort', () => controller.abort(signal.reason), { once: true });
  }

  const url = path.startsWith('http') ? path : `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  try {
    /* FormData must keep the browser-generated multipart boundary — never set Content-Type for it. */
    const response = await fetch(url, {
      method,
      body,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        ...(typeof body === 'string' ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
      },
      credentials: 'omit',
      mode: 'cors',
    });

    const requestId = response.headers.get('x-request-id');

    if (!response.ok) {
      let detail = `Request failed with status ${response.status}`;
      let code = 'HTTP_ERROR';
      try {
        const parsed = envelopeWithError.safeParse(await response.json());
        if (parsed.success) {
          detail = parsed.data.error?.message ?? detail;
          code = parsed.data.error?.code ?? code;
        }
      } catch {
        /* body was not JSON — keep the status-derived message */
      }
      throw new ApiError(detail, { status: response.status, requestId, code });
    }

    const payload: unknown = await response.json();
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      throw new ApiError('The revision service returned an unexpected payload shape.', {
        status: response.status,
        requestId,
        code: 'SCHEMA_MISMATCH',
      });
    }

    return parsed.data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof DOMException && error.name === 'AbortError' && !signal?.aborted) {
      throw new ApiError('The revision service took too long to respond.', { status: 408, code: 'TIMEOUT' });
    }
    if (error instanceof DOMException && error.name === 'AbortError') throw error;
    throw new ApiError(
      navigator.onLine ? 'Network request to the revision service failed.' : 'You are offline — serving cached vault.',
      { status: 0, code: 'NETWORK_ERROR' },
    );
  } finally {
    window.clearTimeout(timeout);
  }
}
