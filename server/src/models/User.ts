import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import mongoose, { Schema, model, type InferSchemaType, type Model } from 'mongoose';
import { TRACK_IDS } from '../modules/tracks/tracks.schema.js';

/**
 * User — the study profile.
 * Authentication material is stored as scrypt(salt, hash) using Node's built-in
 * crypto, so the scaffold has production-grade password handling without pulling
 * a native bcrypt dependency. Swap in an OAuth provider later without touching
 * the study-progress fields.
 */
const preferenceSchema = new Schema(
  {
    theme: { type: String, enum: ['obsidian', 'pearl'], default: 'obsidian' },
    ambientMotion: { type: Boolean, default: true },
    reduceMotion: { type: Boolean, default: false },
    dailyGoalMinutes: { type: Number, default: 45, min: 5, max: 600 },
  },
  { _id: false },
);

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    },
    displayName: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    role: { type: String, enum: ['student', 'mentor', 'admin'], default: 'student', index: true },
    trackFocus: { type: String, required: true, enum: TRACK_IDS, default: 'NEET_PG', index: true },
    passwordHash: { type: String, required: true, select: false },
    passwordSalt: { type: String, required: true, select: false },
    targetExamDate: { type: Date, default: null },
    studyStreakDays: { type: Number, default: 0, min: 0 },
    revisionXp: { type: Number, default: 0, min: 0 },
    preferences: { type: preferenceSchema, default: () => ({}) },
    lastActiveAt: { type: Date, default: () => new Date() },
  },
  { timestamps: true, versionKey: false },
);

userSchema.index({ trackFocus: 1, studyStreakDays: -1 });

export type UserAttrs = InferSchemaType<typeof userSchema>;

export const UserModel: Model<UserAttrs> = (mongoose.models.User as Model<UserAttrs> | undefined) ?? model<UserAttrs>('User', userSchema);

/* --------------------------------------------------------------- password --- */

const KEY_LENGTH = 64;

/**
 * scrypt cost for new hashes (N = 2^15, r = 8, p = 1 ≈ 32 MB, OWASP-level).
 * The parameters are stored inside `passwordSalt` as `s2$<N>$<salt>` so the
 * cost can be raised later; legacy salts (plain hex) verify with Node's default
 * N = 16384 and keep working.
 */
const SCRYPT_N = 2 ** 15;
const SCRYPT_MAXMEM = 128 * 1024 * 1024;
const LEGACY_N = 2 ** 14;

const scryptAsync = (password: string, salt: string, n: number): Promise<Buffer> =>
  new Promise((resolvePromise, reject) => {
    scrypt(password, salt, KEY_LENGTH, { N: n, r: 8, p: 1, maxmem: SCRYPT_MAXMEM }, (error, key) =>
      error ? reject(error) : resolvePromise(key),
    );
  });

export interface PasswordDigest {
  passwordHash: string;
  passwordSalt: string;
}

/** Salted scrypt digest, computed off the event loop. */
export const hashPassword = async (password: string): Promise<PasswordDigest> => {
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long.');
  }
  const salt = randomBytes(16).toString('hex');
  const hash = await scryptAsync(password, salt, SCRYPT_N);
  return { passwordHash: hash.toString('hex'), passwordSalt: `s2$${SCRYPT_N}$${salt}` };
};

/** Constant-time verification for both current (`s2$N$salt`) and legacy digests. */
export const verifyPassword = async (password: string, digest: PasswordDigest): Promise<boolean> => {
  const match = /^s2\$(\d+)\$([a-f0-9]+)$/.exec(digest.passwordSalt);
  const n = match ? Number(match[1]) : LEGACY_N;
  const salt = match ? (match[2] as string) : digest.passwordSalt;
  if (!Number.isInteger(n) || n < LEGACY_N || n > 2 ** 20) return false;
  const expected = Buffer.from(digest.passwordHash, 'hex');
  const candidate = await scryptAsync(password, salt, n);
  if (candidate.length !== expected.length) return false;
  return timingSafeEqual(candidate, expected);
};

/** A fixed digest used to spend the same time when an account does not exist. */
export const DUMMY_DIGEST: PasswordDigest = {
  passwordHash: '0'.repeat(KEY_LENGTH * 2),
  passwordSalt: `s2$${SCRYPT_N}$${'0'.repeat(32)}`,
};
