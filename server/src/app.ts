import compression from 'compression';
import cors, { type CorsOptions } from 'cors';
import express, { type Application, type Request, type Response } from 'express';
import helmet from 'helmet';
import { env, isOriginAllowed } from './config/env.js';
import { getDatabaseStatus } from './config/database.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { requestContext } from './middleware/requestContext.js';
import { createApiRouter } from './routes/index.js';
import { tracksService } from './modules/tracks/tracks.service.js';
import { HttpError } from './utils/httpError.js';

/**
 * Builds the Express application.
 * Kept separate from `index.ts` (process lifecycle) so the app can be imported by
 * supertest-style integration tests without binding a port.
 */
export const createApp = (): Application => {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  /* --------------------------------------------------------------- security */
  /* The API only ever returns JSON, so it can use the strictest policy:
     nothing may load, nothing may frame it, no referrer leaks. */
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: false,
        directives: { 'default-src': ["'none'"], 'frame-ancestors': ["'none'"], 'base-uri': ["'none'"], 'form-action': ["'none'"] },
      },
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      referrerPolicy: { policy: 'no-referrer' },
      strictTransportSecurity: env.isProduction ? { maxAge: 63_072_000, includeSubDomains: true, preload: true } : false,
    }),
  );

  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // same-origin / server-to-server / curl
      if (isOriginAllowed(origin)) return callback(null, true);
      /* A proper HttpError (403) instead of a generic Error: the previous
         behaviour surfaced CORS denials as 500 INTERNAL_ERROR envelopes and
         logged them as >=500 failures. */
      return callback(new HttpError('VALIDATION_ERROR', `Origin ${origin} is not permitted by the CORS policy.`, { status: 403 }));
    },
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    exposedHeaders: ['X-Request-Id', 'RateLimit-Remaining', 'RateLimit-Reset'],
    credentials: false,
    maxAge: 86_400,
  };

  /* Request id first, so even CORS and body-parser failures are logged and traceable. */
  app.use(requestContext());
  app.use(cors(corsOptions));
  app.use(compression());
  /* Study-history sync carries the whole study state, so it alone gets a larger body. */
  app.use(`${env.API_PREFIX}/history`, express.json({ limit: env.HISTORY_BODY_LIMIT, strict: true }));
  app.use(express.json({ limit: env.JSON_BODY_LIMIT, strict: true }));

  /* ----------------------------------------------------------------- health */
  app.get('/health', (_req: Request, res: Response) => {
    const database = getDatabaseStatus();
    res.setHeader('Cache-Control', 'no-store');
    /* Production health stays minimal: no environment, uptime or database error text. */
    if (env.isProduction) {
      res.status(200).json({ success: true, service: 'conceptual-obgyn-api', database: { ready: database.ready } });
      return;
    }
    res.status(200).json({
      success: true,
      service: 'conceptual-obgyn-api',
      version: '1.0.0',
      uptimeSeconds: Number(process.uptime().toFixed(2)),
      environment: env.NODE_ENV,
      database,
      revisionRepository: tracksService.repositoryKind,
    });
  });

  /* -------------------------------------------------------------------- api */
  app.use(env.API_PREFIX, createApiRouter());

  if (!env.isProduction) {
    app.get('/', (_req: Request, res: Response) => {
      res.json({
        success: true,
        service: 'Conceptual OBGYN intelligence API',
        apiPrefix: env.API_PREFIX,
        endpoints: [
          `${env.API_PREFIX}/auth/signup`,
          `${env.API_PREFIX}/auth/login`,
          `${env.API_PREFIX}/auth/me`,
          `${env.API_PREFIX}/history`,
          `${env.API_PREFIX}/tracks/summary`,
          `${env.API_PREFIX}/tracks/health`,
          `${env.API_PREFIX}/revision/modules`,
          `${env.API_PREFIX}/revision/reviews`,
          `${env.API_PREFIX}/ai/summarise`,
          `${env.API_PREFIX}/ai/search`,
          `${env.API_PREFIX}/ai/obgyn-assist`,
        ],
      });
    });
  }

  app.use(notFoundHandler);
  app.use(errorHandler());

  return app;
};

export default createApp;
