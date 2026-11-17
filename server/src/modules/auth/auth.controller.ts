import type { Request, RequestHandler, Response } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { authService, type AuthService } from './auth.service.js';
import type { LoginBody, SignupBody } from './auth.schema.js';

const envelope = <T>(requestId: string, data: T) => ({ success: true as const, requestId, data });

/** Pure HTTP adapter: validated body → service → envelope. */
export class AuthController {
  public constructor(private readonly service: AuthService = authService) {}

  public readonly signup: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const session = await this.service.signup(req.body as SignupBody);
    res.setHeader('Cache-Control', 'no-store');
    res.status(201).json(envelope(req.requestId, session));
  });

  public readonly login: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const session = await this.service.login(req.body as LoginBody);
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(envelope(req.requestId, session));
  });

  public readonly me: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(envelope(req.requestId, { user: req.user }));
  });
}

export const authController = new AuthController();
