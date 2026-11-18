import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import { env } from '../../config/env.js';

/**
 * Minimal HS256 JSON Web Token implementation on Node's built-in crypto, so the
 * auth layer needs no extra dependency. Tokens are `header.payload.signature`
 * (base64url). Verification is constant-time, pins the algorithm (no `alg:none`
 * or algorithm confusion), and checks issuer, audience and expiry.
 */

const ISSUER = 'conceptual-obgyn-api';
const AUDIENCE = 'conceptual-obgyn-app';
/** Anything longer is not one of our tokens — reject before any work. */
const MAX_TOKEN_LENGTH = 1024;
/** Tolerated clock drift for `iat`. */
const CLOCK_SKEW_S = 60;

export interface TokenPayload {
  /** Subject — the user id. */
  sub: string;
  iss: string;
  aud: string;
  /** Unique token id (enables a future revocation list). */
  jti: string;
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
  const payload: TokenPayload = { sub: userId, iss: ISSUER, aud: AUDIENCE, jti: randomUUID(), iat, exp };
  const unsigned = `${HEADER}.${b64url(JSON.stringify(payload))}`;
  return { token: `${unsigned}.${sign(unsigned)}`, expiresAtISO: new Date(exp * 1000).toISOString() };
};

/** Returns the payload for a valid, unexpired token; otherwise null. */
export const verifyToken = (token: string): TokenPayload | null => {
  if (token.length > MAX_TOKEN_LENGTH) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, signature] = parts as [string, string, string];
  if (header !== HEADER) return null;

  const expected = Buffer.from(sign(`${header}.${body}`));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as Partial<TokenPayload>;
    const now = Math.floor(Date.now() / 1000);
    if (typeof payload.sub !== 'string' || payload.sub.length === 0 || payload.sub.length > 64) return null;
    if (payload.iss !== ISSUER || payload.aud !== AUDIENCE) return null;
    if (typeof payload.exp !== 'number' || payload.exp <= now) return null;
    if (typeof payload.iat !== 'number' || payload.iat > now + CLOCK_SKEW_S) return null;
    return payload as TokenPayload;
  } catch {
    return null;
  }
};
