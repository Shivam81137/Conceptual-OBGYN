import { z } from 'zod';
import { TRACK_IDS } from '../tracks/tracks.schema.js';

/** Signup / login payload contracts. Mirrored on the client in `client/src/types/auth.ts`. */

const email = z.string().trim().toLowerCase().email('Enter a valid email address.').max(254);

const password = z
  .string()
  .min(8, 'Password must be at least 8 characters.')
  .max(128, 'Password must be at most 128 characters.')
  .refine((value) => /[A-Za-z]/.test(value) && /\d/.test(value), {
    message: 'Password must include at least one letter and one number.',
  });

export const signupBodySchema = z.object({
  displayName: z.string().trim().min(2, 'Enter your name.').max(80),
  email,
  password,
  trackFocus: z.enum(TRACK_IDS).default('NEET_PG'),
});
export type SignupBody = z.infer<typeof signupBodySchema>;

export const loginBodySchema = z.object({
  email,
  password: z.string().min(1, 'Enter your password.').max(128),
});
export type LoginBody = z.infer<typeof loginBodySchema>;

/** Public (password-free) view of a student account. */
export interface PublicUser {
  id: string;
  email: string;
  displayName: string;
  role: 'student' | 'mentor' | 'admin';
  trackFocus: (typeof TRACK_IDS)[number];
  createdAtISO: string;
}

export interface AuthSession {
  token: string;
  expiresAtISO: string;
  user: PublicUser;
}
