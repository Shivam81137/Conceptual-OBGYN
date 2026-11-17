import { Router, type RequestHandler } from 'express';
import { validate } from '../../middleware/validate.js';
import { authController } from './auth.controller.js';
import { requireAuth } from './auth.middleware.js';
import { loginBodySchema, signupBodySchema } from './auth.schema.js';

/**
 *   POST /auth/signup  → create a student account, returns a session
 *   POST /auth/login   → sign in, returns a session
 *   GET  /auth/me      → current student (Bearer token)
 */
export const createAuthRouter = (authLimiter: RequestHandler): Router => {
  const router = Router();
  router.post('/signup', authLimiter, validate({ body: signupBodySchema }), authController.signup);
  router.post('/login', authLimiter, validate({ body: loginBodySchema }), authController.login);
  router.get('/me', authLimiter, requireAuth, authController.me);
  return router;
};

export default createAuthRouter;
