import mongoose, { Schema, model, type InferSchemaType, type Model } from 'mongoose';
import { DIFFICULTIES, TRACK_IDS } from '../modules/tracks/tracks.schema.js';

/**
 * RevisionModule — the atom of the revision engine.
 * One document == one high-yield revision card in the PWA vault, carrying the
 * clinical metadata the UI sorts on (`highYieldScore`), the spatial anchors it
 * renders (`conceptNodeIds`) and the provenance of the RAG pipeline that
 * generated its summary (`rag`).
 */

const ragProvenanceSchema = new Schema(
  {
    sourceDocument: { type: String, required: true, trim: true, maxlength: 240 },
    sourcePages: { type: String, required: true, trim: true, maxlength: 64 },
    chunkCount: { type: Number, required: true, min: 0, max: 2000, default: 0 },
  },
  { _id: false },
);

const revisionModuleSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, maxlength: 120 },
    track: { type: String, required: true, enum: TRACK_IDS, index: true },
    title: { type: String, required: true, trim: true, minlength: 4, maxlength: 200 },
    summary: { type: String, required: true, trim: true, minlength: 20, maxlength: 1200 },
    difficulty: { type: String, required: true, enum: DIFFICULTIES, default: 'moderate' },
    highYieldScore: { type: Number, required: true, min: 0, max: 10, default: 5 },
    durationMinutes: { type: Number, required: true, min: 1, max: 600, default: 15 },
    tags: { type: [String], default: [], validate: { validator: (value: string[]) => value.length <= 12 } },
    conceptNodeIds: { type: [String], default: [] },
    imageBased: { type: Boolean, default: false },
    spiralRepetitionStage: { type: Number, min: 0, max: 6, default: 0 },
    rag: { type: ragProvenanceSchema, required: true },
    status: { type: String, enum: ['draft', 'review', 'published'], default: 'published', index: true },
    publishedAt: { type: Date, default: () => new Date() },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret: Record<string, unknown>) => {
        ret.id = String(ret._id);
        delete ret._id;
        return ret;
      },
    },
  },
);

/* Query-critical compound indexes: the tracks summary aggregation and the
   "high yield first" revision feed both hit these paths directly. */
revisionModuleSchema.index({ track: 1, status: 1, highYieldScore: -1 });
revisionModuleSchema.index({ track: 1, imageBased: 1 });
revisionModuleSchema.index({ title: 'text', summary: 'text', tags: 'text' });

export type RevisionModuleAttrs = InferSchemaType<typeof revisionModuleSchema>;

export const RevisionModuleModel: Model<RevisionModuleAttrs> =
  (mongoose.models.RevisionModule as Model<RevisionModuleAttrs> | undefined) ??
  model<RevisionModuleAttrs>('RevisionModule', revisionModuleSchema);
