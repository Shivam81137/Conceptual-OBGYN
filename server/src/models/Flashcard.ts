import mongoose, { Schema, model, type InferSchemaType, type Model } from 'mongoose';
import { TRACK_IDS } from '../modules/tracks/tracks.schema.js';

/**
 * Flashcard — an SM-2 scheduled card.
 * Scheduling state is stored explicitly (ease factor, interval, repetitions,
 * lapses) so the review queue can be computed server-side with a single indexed
 * query on `dueAt`, while the client keeps working offline against the same
 * field names.
 */
const flashcardSchema = new Schema(
  {
    deck: { type: String, required: true, trim: true, maxlength: 80, index: true },
    track: { type: String, required: true, enum: TRACK_IDS, index: true },
    front: { type: String, required: true, trim: true, maxlength: 400 },
    back: { type: String, required: true, trim: true, maxlength: 800 },
    pearl: { type: String, required: true, trim: true, maxlength: 800 },
    tags: { type: [String], default: [] },
    conceptNodeIds: { type: [String], default: [] },
    owner: { type: Schema.Types.ObjectId, ref: 'User', index: true },

    /* ---- SM-2 scheduling state ---- */
    easeFactor: { type: Number, default: 2.5, min: 1.3, max: 3.0 },
    intervalDays: { type: Number, default: 0, min: 0 },
    repetitions: { type: Number, default: 0, min: 0 },
    lapses: { type: Number, default: 0, min: 0 },
    dueAt: { type: Date, default: () => new Date(), index: true },
    lastReviewedAt: { type: Date, default: null },
  },
  { timestamps: true, versionKey: false },
);

flashcardSchema.index({ owner: 1, dueAt: 1 });
flashcardSchema.index({ track: 1, deck: 1 });

export type FlashcardAttrs = InferSchemaType<typeof flashcardSchema>;

export const FlashcardModel: Model<FlashcardAttrs> =
  (mongoose.models.Flashcard as Model<FlashcardAttrs> | undefined) ?? model<FlashcardAttrs>('Flashcard', flashcardSchema);
