declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      /** Correlation id attached by requestContext; echoed in every response. */
      requestId: string;
      /** High-resolution start timestamp used by the access logger. */
      startedAt: number;
    }
  }
}

export {};
