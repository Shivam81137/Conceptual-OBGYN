import { z } from 'zod';
import { trackIdSchema } from '@/types/tracks';

/**
 * Auth contracts. Mirrors `server/src/modules/auth/auth.schema.ts`; the server
 * is the source of truth, this copy validates responses at the edge and powers
 * instant client-side form feedback.
 */

export const publicUserSchema = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  displayName: z.string().min(1),
  role: z.enum(['student', 'mentor', 'admin']),
  trackFocus: trackIdSchema,
  createdAtISO: z.string(),
});
export type PublicUser = z.infer<typeof publicUserSchema>;

export const authSessionSchema = z.object({
  token: z.string().min(1),
  expiresAtISO: z.string(),
  user: publicUserSchema,
});
export type AuthSession = z.infer<typeof authSessionSchema>;

export const meSchema = z.object({ user: publicUserSchema });

/** Form-level validation (same rules the server enforces). */
export const signupFormSchema = z.object({
  displayName: z.string().trim().min(2, 'Enter your name.').max(80),
  email: z.string().trim().email('Enter a valid email address.'),
  password: z
    .string()
    .min(8, 'Use at least 8 characters.')
    .refine((value) => /[A-Za-z]/.test(value) && /\d/.test(value), 'Include a letter and a number.'),
  trackFocus: trackIdSchema,
});
export type SignupForm = z.infer<typeof signupFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().trim().email('Enter a valid email address.'),
  password: z.string().min(1, 'Enter your password.'),
});
export type LoginForm = z.infer<typeof loginFormSchema>;
