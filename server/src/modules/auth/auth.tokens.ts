import { createHmac, timingSafeEqual } from 'node:crypto';
import { env } from '../../config/env.js';

/**
 * Minimal HS256 JSON Web Token implementation on Node's built-in crypto, so the
 * auth layer needs no extra dependency. Tokens are `header.payload.signature`
 * (base64url) and are verified in constant time.
 */

export interface TokenPayload {
  /** Subject — the user id. */
  sub: string;
  /** Issued-at / expiry, seconds since epoch. */
  iat: number;
  exp: number;
}

const b64url = (input: Buffer | string): string => Buffer.from(input).toString('base64url');
const HEADER = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));

const sign = (data: string): string => createHmac('sha256', env.AUTH_JWT_SECRET).update(data).digest('base64url');

export const issueToken = (userId: string): { token: string; expiresAtISO: string } => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + env.AUTH_TOKEN_TTL_HOURS * 3600;
  const payload: TokenPayload = { sub: userId, iat, exp };
  const unsigned = `${HEADER}.${b64url(JSON.stringify(payload))}`;
  return { token: `${unsigned}.${sign(unsigned)}`, expiresAtISO: new Date(exp * 1000).toISOString() };
};

/** Returns the payload for a valid, unexpired token; otherwise null. */
export const verifyToken = (token: string): TokenPayload | null => {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, signature] = parts as [string, string, string];
  if (header !== HEADER) return null;

  const expected = Buffer.from(sign(`${header}.${body}`));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as Partial<TokenPayload>;
    if (typeof payload.sub !== 'string' || typeof payload.exp !== 'number') return null;
    if (payload.exp * 1000 <= Date.now()) return null;
    return payload as TokenPayload;
  } catch {
    return null;
  }
};
