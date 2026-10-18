import type { Server } from 'node:http';
import { createApp } from './app.js';
import { env } from './config/env.js';
import { connectDatabase, disconnectDatabase, getDatabaseStatus } from './config/database.js';
import { logger } from './utils/logger.js';

/**
 * Process lifecycle: connect → listen → graceful shutdown.
 * The API intentionally starts even without MongoDB (the tracks repository
 * degrades to the curated seed snapshot), so a fresh clone always boots.
 */
const bootstrap = async (): Promise<void> => {
  const database = await connectDatabase();

  if (!database.ready) {
    logger.warn('starting in seed mode', { reason: database.reason ?? 'database not connected' });
  }

  const app = createApp();
  const server: Server = app.listen(env.PORT, () => {
    logger.info('conceptual-obgyn api listening', {
      port: env.PORT,
      environment: env.NODE_ENV,
      apiPrefix: env.API_PREFIX,
      repository: database.ready ? 'mongo' : 'memory',
      url: `http://localhost:${env.PORT}${env.API_PREFIX}/tracks/summary`,
    });
  });

  server.keepAliveTimeout = 65_000;
  server.headersTimeout = 70_000;

  let shuttingDown = false;

  const shutdown = async (signal: string): Promise<void> => {
    if (shuttingDown) return;
    shuttingDown = true;
    logger.info('shutdown signal received', { signal });

    const forceExit = setTimeout(() => {
      logger.error('forced shutdown after 10s window');
      process.exit(1);
    }, 10_000);
    forceExit.unref();

    await new Promise<void>((resolve) => server.close(() => resolve()));
    await disconnectDatabase();
    logger.info('shutdown complete', { database: getDatabaseStatus().state });
    process.exit(0);
  };

  process.on('SIGINT', () => void shutdown('SIGINT'));
  process.on('SIGTERM', () => void shutdown('SIGTERM'));
  process.on('unhandledRejection', (reason) => {
    logger.error('unhandled promise rejection', { reason: reason instanceof Error ? reason.message : String(reason) });
  });
  process.on('uncaughtException', (error) => {
    logger.error('uncaught exception — exiting', { message: error.message, stack: error.stack?.split('\n').slice(0, 3).join(' | ') });
    process.exit(1);
  });
};

void bootstrap().catch((error: unknown) => {
  logger.error('fatal boot error', { message: error instanceof Error ? error.message : String(error) });
  process.exit(1);
});
