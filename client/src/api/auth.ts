import { apiRequest } from '@/api/client';
import { authSessionSchema, meSchema, type AuthSession, type LoginForm, type PublicUser, type SignupForm } from '@/types/auth';
import { apiEnvelopeSchema } from '@/types/tracks';

/** Auth endpoints — the only place that talks to `/auth/*`. */

const sessionEnvelope = apiEnvelopeSchema(authSessionSchema);
const meEnvelope = apiEnvelopeSchema(meSchema);

const post = (body: unknown) => ({ method: 'POST' as const, body: JSON.stringify(body), timeoutMs: 15_000 });

export const signup = async (form: SignupForm): Promise<AuthSession> =>
  (await apiRequest('/auth/signup', sessionEnvelope, post(form))).data;

export const login = async (form: LoginForm): Promise<AuthSession> =>
  (await apiRequest('/auth/login', sessionEnvelope, post(form))).data;

export const fetchMe = async (token: string): Promise<PublicUser> =>
  (await apiRequest('/auth/me', meEnvelope, { headers: { Authorization: `Bearer ${token}` } })).data.user;
