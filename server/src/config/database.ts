import mongoose, { type ConnectOptions } from 'mongoose';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

export interface DatabaseStatus {
  ready: boolean;
  state: 'disconnected' | 'connected' | 'connecting' | 'disconnecting' | 'unknown';
  database: string | null;
  reason: string | null;
}

let reason: string | null = null;

const STATE_LABELS: Record<number, DatabaseStatus['state']> = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
};

const connectOptions: ConnectOptions = {
  serverSelectionTimeoutMS: env.MONGODB_CONNECT_TIMEOUT_MS,
  socketTimeoutMS: 45_000,
  maxPoolSize: 12,
  minPoolSize: 1,
  autoIndex: !env.isProduction,
  retryWrites: true,
};

/**
 * Connects to MongoDB with bounded retries.
 * The API is deliberately designed to boot without a database: the tracks
 * repository transparently degrades to the in-memory seed snapshot, so the PWA
 * (and its offline vault) never sees a 500 because of local dev setup.
 */
export async function connectDatabase(): Promise<DatabaseStatus> {
  if (!env.MONGODB_URI) {
    reason = 'MONGODB_URI not configured — using the in-memory seed repository';
    logger.warn(reason);
    return getDatabaseStatus();
  }

  mongoose.connection.on('connected', () => logger.info('mongodb connected'));
  mongoose.connection.on('disconnected', () => logger.warn('mongodb disconnected'));
  mongoose.connection.on('error', (error: unknown) =>
    logger.error('mongodb error', { error: error instanceof Error ? error.message : String(error) }),
  );

  let attempt = 1;
  while (attempt <= Math.max(env.MONGODB_MAX_RETRIES, 1)) {
    try {
      await mongoose.connect(env.MONGODB_URI, connectOptions);
      reason = null;
      return getDatabaseStatus();
    } catch (error) {
      reason = error instanceof Error ? error.message : String(error);
      logger.warn(`mongodb connection attempt ${attempt} failed`, { reason });
      attempt += 1;
      await new Promise((resolve) => setTimeout(resolve, Math.min(500 * attempt ** 2, 5000)));
    }
  }

  logger.error('mongodb unavailable — falling back to the in-memory seed repository', { reason });
  return getDatabaseStatus();
}

export async function disconnectDatabase(): Promise<void> {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close(false);
  }
}

export function isDatabaseReady(): boolean {
  return mongoose.connection.readyState === 1;
}

export function getDatabaseStatus(): DatabaseStatus {
  const state = STATE_LABELS[mongoose.connection.readyState] ?? 'unknown';
  return {
    ready: state === 'connected',
    state,
    database: mongoose.connection.name ?? null,
    reason: state === 'connected' ? null : reason,
  };
}
