import mongoose, { Schema, model, type InferSchemaType, type Model } from 'mongoose';

/**
 * Per-student study history.
 *  - `StudyState`  : one document per user — the latest snapshot (flashcard
 *                    ratings, MCQ answers, opened modules, resume points, saved
 *                    pearls). Restores the workspace on any device.
 *  - `StudyEvent`  : append-only activity log — the timeline behind "history"
 *                    and streak statistics.
 */

const studyStateSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    cardRatings: { type: Schema.Types.Mixed, default: () => ({}) },
    mcqAnswers: { type: Schema.Types.Mixed, default: () => ({}) },
    openedModules: { type: Schema.Types.Mixed, default: () => ({}) },
    lastModuleByTrack: { type: Schema.Types.Mixed, default: () => ({}) },
    savedPearls: { type: [Schema.Types.Mixed], default: () => [] },
  },
  { timestamps: true, versionKey: false, minimize: false },
);

export type StudyStateAttrs = InferSchemaType<typeof studyStateSchema>;
export const StudyStateModel: Model<StudyStateAttrs> =
  (mongoose.models.StudyState as Model<StudyStateAttrs> | undefined) ?? model<StudyStateAttrs>('StudyState', studyStateSchema);

const studyEventSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, enum: ['card_rated', 'mcq_answered', 'module_opened', 'pearl_saved'] },
    moduleId: { type: String, default: null },
    itemId: { type: String, default: null },
    detail: { type: String, default: null, maxlength: 200 },
    at: { type: Date, required: true },
  },
  { versionKey: false },
);
studyEventSchema.index({ user: 1, at: -1 });

export type StudyEventAttrs = InferSchemaType<typeof studyEventSchema>;
export const StudyEventModel: Model<StudyEventAttrs> =
  (mongoose.models.StudyEvent as Model<StudyEventAttrs> | undefined) ?? model<StudyEventAttrs>('StudyEvent', studyEventSchema);
