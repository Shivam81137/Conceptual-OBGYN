declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      /** Correlation id attached by requestContext; echoed in every response. */
      requestId: string;
      /** High-resolution start timestamp used by the access logger. */
      startedAt: number;
      /** Set by `requireAuth` on protected routes. */
      user?: import('../modules/auth/auth.schema.js').PublicUser;
    }
  }
}

export {};
