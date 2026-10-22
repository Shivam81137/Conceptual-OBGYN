import mongoose, { Schema, model, type InferSchemaType, type Model } from 'mongoose';
import { DIFFICULTIES, TRACK_IDS } from '../modules/tracks/tracks.schema.js';

/**
 * ClinicalCase — a vignette-driven question used by the AI rapid-fire mode and
 * the analytic layer. The `robsonGroup` field links the case to the caesarean
 * audit matrix shown in the PG portal.
 */
const optionSchema = new Schema(
  {
    id: { type: String, required: true, trim: true, maxlength: 8 },
    text: { type: String, required: true, trim: true, maxlength: 400 },
    correct: { type: Boolean, required: true, default: false },
    rationale: { type: String, required: true, trim: true, maxlength: 600 },
  },
  { _id: false },
);

const clinicalCaseSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    track: { type: String, required: true, enum: TRACK_IDS, index: true },
    stem: { type: String, required: true, trim: true, maxlength: 2000 },
    question: { type: String, required: true, trim: true, maxlength: 500 },
    options: {
      type: [optionSchema],
      required: true,
      validate: { validator: (options: unknown[]) => options.length >= 2 && options.length <= 6 },
    },
    explanation: { type: String, required: true, trim: true, maxlength: 2000 },
    robsonGroup: { type: Number, min: 1, max: 10, default: null },
    difficulty: { type: String, required: true, enum: DIFFICULTIES, default: 'clinical' },
    tags: { type: [String], default: [] },
    conceptNodeIds: { type: [String], default: [] },
    attemptCount: { type: Number, default: 0, min: 0 },
    correctRate: { type: Number, default: 0, min: 0, max: 1 },
  },
  { timestamps: true, versionKey: false },
);

clinicalCaseSchema.index({ track: 1, difficulty: 1 });
clinicalCaseSchema.index({ robsonGroup: 1 });

export type ClinicalCaseAttrs = InferSchemaType<typeof clinicalCaseSchema>;

export const ClinicalCaseModel: Model<ClinicalCaseAttrs> =
  (mongoose.models.ClinicalCase as Model<ClinicalCaseAttrs> | undefined) ??
  model<ClinicalCaseAttrs>('ClinicalCase', clinicalCaseSchema);
