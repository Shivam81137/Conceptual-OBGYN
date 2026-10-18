import compression from 'compression';
import cors, { type CorsOptions } from 'cors';
import express, { type Application, type Request, type Response } from 'express';
import helmet from 'helmet';
import { env } from './config/env.js';
import { getDatabaseStatus } from './config/database.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { requestContext } from './middleware/requestContext.js';
import { createApiRouter } from './routes/index.js';
import { tracksService } from './modules/tracks/tracks.service.js';

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
  app.use(
    helmet({
      contentSecurityPolicy: env.isProduction
        ? {
            useDefaults: true,
            directives: {
              'default-src': ["'self'"],
              'script-src': ["'self'"],
              'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
              'font-src': ["'self'", 'https://fonts.gstatic.com', 'data:'],
              'img-src': ["'self'", 'data:', 'blob:'],
              'connect-src': ["'self'", ...env.corsOrigins],
              'object-src': ["'none'"],
              'frame-ancestors': ["'none'"],
            },
          }
        : false,
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );

  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // same-origin / server-to-server / curl
      if (!env.isProduction && env.corsOrigins.includes('*')) return callback(null, true);
      if (env.corsOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`Origin ${origin} is not permitted by the CORS policy.`));
    },
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    exposedHeaders: ['X-Request-Id', 'RateLimit-Remaining', 'RateLimit-Reset'],
    credentials: false,
    maxAge: 86_400,
  };

  app.use(cors(corsOptions));
  app.use(compression());
  app.use(express.json({ limit: env.JSON_BODY_LIMIT }));
  app.use(express.urlencoded({ extended: false, limit: env.JSON_BODY_LIMIT }));
  app.use(requestContext());

  /* ----------------------------------------------------------------- health */
  app.get('/health', (_req: Request, res: Response) => {
    const database = getDatabaseStatus();
    res.status(database.ready || !env.MONGODB_URI ? 200 : 200).json({
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
