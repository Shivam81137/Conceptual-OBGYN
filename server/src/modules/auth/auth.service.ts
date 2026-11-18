import { DUMMY_DIGEST, hashPassword, verifyPassword } from '../../models/User.js';
import { HttpError } from '../../utils/httpError.js';
import type { AuthSession, LoginBody, PublicUser, SignupBody } from './auth.schema.js';
import { getUsersRepository, type StoredUser } from './auth.repository.js';
import { issueToken, verifyToken } from './auth.tokens.js';

const toPublic = (user: StoredUser): PublicUser => ({
  id: user.id,
  email: user.email,
  displayName: user.displayName,
  role: user.role,
  trackFocus: user.trackFocus,
  createdAtISO: user.createdAtISO,
});

const toSession = (user: StoredUser): AuthSession => ({ ...issueToken(user.id), user: toPublic(user) });

/** Same message for unknown email and wrong password — never reveal which. */
const invalidCredentials = (): HttpError => new HttpError('UNAUTHORIZED', 'Incorrect email or password.');

/* ------------------------------------------------- per-account lockout --- */

/**
 * Brute-force protection per email address (on top of the per-IP rate limit):
 * after MAX_FAILURES wrong passwords the account is locked for LOCK_MS. Kept in
 * memory — good for a single instance; move to Redis/Mongo when scaling out.
 */
const MAX_FAILURES = 5;
const LOCK_MS = 15 * 60_000;
const WINDOW_MS = 15 * 60_000;
const MAX_TRACKED = 10_000;

interface FailureRecord {
  count: number;
  firstAt: number;
  lockedUntil: number;
}

const failures = new Map<string, FailureRecord>();

const isLocked = (email: string, now = Date.now()): boolean => (failures.get(email)?.lockedUntil ?? 0) > now;

const recordFailure = (email: string, now = Date.now()): void => {
  const current = failures.get(email);
  const record = !current || now - current.firstAt > WINDOW_MS ? { count: 0, firstAt: now, lockedUntil: 0 } : current;
  record.count += 1;
  if (record.count >= MAX_FAILURES) record.lockedUntil = now + LOCK_MS;
  failures.delete(email);
  failures.set(email, record);
  /* Bound memory: drop the oldest entries (Map keeps insertion order). */
  while (failures.size > MAX_TRACKED) {
    const oldest = failures.keys().next().value;
    if (oldest === undefined) break;
    failures.delete(oldest);
  }
};

const lockedError = (): HttpError =>
  new HttpError('RATE_LIMITED', 'Too many failed sign-in attempts. Please wait 15 minutes and try again.');

export class AuthService {
  public async signup(input: SignupBody): Promise<AuthSession> {
    const repository = getUsersRepository();
    if (await repository.findByEmail(input.email)) {
      throw new HttpError('CONFLICT', 'An account with this email already exists. Try signing in instead.');
    }
    const digest = await hashPassword(input.password);
    const user = await repository.create({
      email: input.email,
      displayName: input.displayName,
      trackFocus: input.trackFocus,
      ...digest,
    });
    return toSession(user);
  }

  public async login(input: LoginBody): Promise<AuthSession> {
    if (isLocked(input.email)) throw lockedError();
    const user = await getUsersRepository().findByEmail(input.email);
    /* Always run scrypt so response time does not reveal whether the email exists. */
    const valid = await verifyPassword(input.password, user ?? DUMMY_DIGEST);
    if (!user || !valid) {
      recordFailure(input.email);
      if (isLocked(input.email)) throw lockedError();
      throw invalidCredentials();
    }
    failures.delete(input.email);
    return toSession(user);
  }

  /** Resolves a bearer token to the current user, or throws 401. */
  public async authenticate(token: string): Promise<PublicUser> {
    const payload = verifyToken(token);
    if (!payload) throw new HttpError('UNAUTHORIZED', 'Your session has expired. Please sign in again.');
    const user = await getUsersRepository().findById(payload.sub);
    if (!user) throw new HttpError('UNAUTHORIZED', 'Your session is no longer valid. Please sign in again.');
    return toPublic(user);
  }
}

export const authService = new AuthService();
