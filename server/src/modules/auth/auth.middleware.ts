import type { RequestHandler } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { HttpError } from '../../utils/httpError.js';
import { authService } from './auth.service.js';

/**
 * Protects a route: requires `Authorization: Bearer <token>` and attaches the
 * student to `req.user`. Use on any future feature that needs an account
 * (progress sync, saved pearls, …).
 */
export const requireAuth: RequestHandler = asyncHandler(async (req, _res, next) => {
  const header = req.header('authorization') ?? '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  if (!match?.[1]) throw new HttpError('UNAUTHORIZED', 'Sign in to continue.');
  req.user = await authService.authenticate(match[1]);
  next();
});
