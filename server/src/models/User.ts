import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
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

export interface PasswordDigest {
  passwordHash: string;
  passwordSalt: string;
}

/** Salted scrypt digest — deterministic length, constant-time verification. */
export const hashPassword = (password: string): PasswordDigest => {
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long.');
  }
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, KEY_LENGTH).toString('hex');
  return { passwordHash: hash, passwordSalt: salt };
};

export const verifyPassword = (password: string, digest: PasswordDigest): boolean => {
  const candidate = scryptSync(password, digest.passwordSalt, KEY_LENGTH);
  const expected = Buffer.from(digest.passwordHash, 'hex');
  if (candidate.length !== expected.length) return false;
  return timingSafeEqual(candidate, expected);
};
