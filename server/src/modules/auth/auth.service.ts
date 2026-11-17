import { hashPassword, verifyPassword } from '../../models/User.js';
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

export class AuthService {
  public async signup(input: SignupBody): Promise<AuthSession> {
    const repository = getUsersRepository();
    if (await repository.findByEmail(input.email)) {
      throw new HttpError('CONFLICT', 'An account with this email already exists. Try signing in instead.');
    }
    const digest = hashPassword(input.password);
    const user = await repository.create({
      email: input.email,
      displayName: input.displayName,
      trackFocus: input.trackFocus,
      ...digest,
    });
    return toSession(user);
  }

  public async login(input: LoginBody): Promise<AuthSession> {
    const user = await getUsersRepository().findByEmail(input.email);
    if (!user || !verifyPassword(input.password, user)) throw invalidCredentials();
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
