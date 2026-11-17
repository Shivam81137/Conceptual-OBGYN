import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { env } from '../../config/env.js';
import { isDatabaseReady } from '../../config/database.js';
import { UserModel } from '../../models/User.js';
import { HttpError } from '../../utils/httpError.js';
import { logger } from '../../utils/logger.js';
import type { PublicUser } from './auth.schema.js';

/**
 * Persistence for student accounts.
 * MongoDB is used when connected; otherwise a small JSON file store keeps
 * signup working in local development without a database. Both implementations
 * satisfy the same `UsersRepository` contract, so swapping storage never
 * touches the service layer.
 */

export interface StoredUser extends PublicUser {
  passwordHash: string;
  passwordSalt: string;
}

export interface NewUser {
  email: string;
  displayName: string;
  trackFocus: PublicUser['trackFocus'];
  passwordHash: string;
  passwordSalt: string;
}

export interface UsersRepository {
  readonly kind: 'mongo' | 'file';
  findByEmail(email: string): Promise<StoredUser | null>;
  findById(id: string): Promise<StoredUser | null>;
  create(input: NewUser): Promise<StoredUser>;
}

/* ------------------------------------------------------------------- mongo --- */

interface MongoDoc {
  _id: { toString(): string };
  email: string;
  displayName: string;
  role: PublicUser['role'];
  trackFocus: PublicUser['trackFocus'];
  passwordHash?: string;
  passwordSalt?: string;
  createdAt?: Date;
}

const fromMongo = (doc: MongoDoc): StoredUser => ({
  id: doc._id.toString(),
  email: doc.email,
  displayName: doc.displayName,
  role: doc.role,
  trackFocus: doc.trackFocus,
  passwordHash: doc.passwordHash ?? '',
  passwordSalt: doc.passwordSalt ?? '',
  createdAtISO: (doc.createdAt ?? new Date()).toISOString(),
});

class MongoUsersRepository implements UsersRepository {
  public readonly kind = 'mongo' as const;

  public async findByEmail(email: string): Promise<StoredUser | null> {
    const doc = await UserModel.findOne({ email }).select('+passwordHash +passwordSalt').lean<MongoDoc>();
    return doc ? fromMongo(doc) : null;
  }

  public async findById(id: string): Promise<StoredUser | null> {
    if (!/^[a-f\d]{24}$/i.test(id)) return null;
    const doc = await UserModel.findById(id).select('+passwordHash +passwordSalt').lean<MongoDoc>();
    return doc ? fromMongo(doc) : null;
  }

  public async create(input: NewUser): Promise<StoredUser> {
    try {
      const doc = await UserModel.create({ ...input, role: 'student' });
      return fromMongo(doc.toObject() as unknown as MongoDoc);
    } catch (error) {
      if ((error as { code?: number }).code === 11000) {
        throw new HttpError('CONFLICT', 'An account with this email already exists.');
      }
      throw error;
    }
  }
}

/* -------------------------------------------------------------------- file --- */

class FileUsersRepository implements UsersRepository {
  public readonly kind = 'file' as const;
  private readonly path = resolve(process.cwd(), env.AUTH_FILE_STORE_PATH);
  private cache: StoredUser[] | null = null;
  /** Serialises writes so concurrent signups cannot clobber each other. */
  private queue: Promise<unknown> = Promise.resolve();

  private async load(): Promise<StoredUser[]> {
    if (this.cache) return this.cache;
    try {
      this.cache = JSON.parse(await readFile(this.path, 'utf8')) as StoredUser[];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        logger.warn('auth file store unreadable — starting empty', { path: this.path });
      }
      this.cache = [];
    }
    return this.cache;
  }

  private async persist(users: StoredUser[]): Promise<void> {
    await mkdir(dirname(this.path), { recursive: true });
    const tmp = `${this.path}.tmp`;
    await writeFile(tmp, JSON.stringify(users, null, 2), 'utf8');
    await rename(tmp, this.path);
  }

  public async findByEmail(email: string): Promise<StoredUser | null> {
    return (await this.load()).find((user) => user.email === email) ?? null;
  }

  public async findById(id: string): Promise<StoredUser | null> {
    return (await this.load()).find((user) => user.id === id) ?? null;
  }

  public create(input: NewUser): Promise<StoredUser> {
    const run = async (): Promise<StoredUser> => {
      const users = await this.load();
      if (users.some((user) => user.email === input.email)) {
        throw new HttpError('CONFLICT', 'An account with this email already exists.');
      }
      const user: StoredUser = {
        ...input,
        id: randomUUID(),
        role: 'student',
        createdAtISO: new Date().toISOString(),
      };
      await this.persist([...users, user]);
      this.cache = [...users, user];
      return user;
    };
    const result = this.queue.then(run, run);
    this.queue = result.catch(() => undefined);
    return result;
  }
}

/** Picks the backing store per call so the app follows the database's live state. */
const mongoRepo = new MongoUsersRepository();
const fileRepo = new FileUsersRepository();
export const getUsersRepository = (): UsersRepository => (isDatabaseReady() ? mongoRepo : fileRepo);
