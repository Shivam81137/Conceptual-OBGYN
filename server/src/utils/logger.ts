import { env } from '../config/env.js';

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'silent';

const LEVEL_WEIGHT: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100,
};

const RESET = '\u001b[0m';
const TONE: Record<Exclude<LogLevel, 'silent'>, string> = {
  debug: '\u001b[38;5;245m',
  info: '\u001b[38;5;45m',
  warn: '\u001b[38;5;214m',
  error: '\u001b[38;5;203m',
};

export interface LogContext {
  readonly [key: string]: unknown;
}

const threshold = LEVEL_WEIGHT[env.LOG_LEVEL as LogLevel] ?? LEVEL_WEIGHT.info;

const emit = (level: Exclude<LogLevel, 'silent'>, message: string, context?: LogContext): void => {
  if (LEVEL_WEIGHT[level] < threshold) return;

  const timestamp = new Date().toISOString();
  const prefix = `${TONE[level]}${level.toUpperCase().padEnd(5)}${RESET}`;
  const payload = context && Object.keys(context).length > 0 ? ` ${JSON.stringify(context)}` : '';

  const line = `${timestamp} ${prefix} ${message}${payload}`;
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
};

/** Minimal structured logger — zero dependencies, JSON context, ANSI toned. */
export const logger = {
  debug: (message: string, context?: LogContext): void => emit('debug', message, context),
  info: (message: string, context?: LogContext): void => emit('info', message, context),
  warn: (message: string, context?: LogContext): void => emit('warn', message, context),
  error: (message: string, context?: LogContext): void => emit('error', message, context),
};
