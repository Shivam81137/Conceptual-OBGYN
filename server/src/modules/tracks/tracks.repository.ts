import { createHash } from 'node:crypto';
import { Types, type FilterQuery } from 'mongoose';
import { isDatabaseReady } from '../../config/database.js';
import { REVISION_MODULE_SEEDS, TRACK_BLUEPRINTS } from '../../data/seed-data.js';
import { ClinicalCaseModel } from '../../models/ClinicalCase.js';
import { FlashcardModel } from '../../models/Flashcard.js';
import { RevisionModuleModel, type RevisionModuleAttrs } from '../../models/RevisionModule.js';
import { TRACK_IDS, type ClinicalPearl, type RevisionModuleDto, type RevisionModuleQuery, type TrackId } from './tracks.schema.js';

export interface TrackStats {
  id: TrackId;
  topicCount: number;
  revisionModuleCount: number;
  flashcardCount: number;
  ibqCount: number;
  retentionRate: number;
  updatedAtISO: string;
}

export interface RevisionPage {
  items: RevisionModuleDto[];
  total: number;
  nextCursor: string | null;
}

/**
 * Repository port. Two adapters implement it:
 *   · MongoTracksRepository — aggregates the live collections (revision modules,
 *     flashcards, clinical cases) with a single round-trip per collection.
 *   · InMemoryTracksRepository — the seed corpus, used when MONGODB_URI is unset
 *     or unreachable, so the PWA always receives a complete payload.
 */
export interface TracksRepository {
  readonly kind: 'mongo' | 'memory';
  listTrackStats(): Promise<Record<TrackId, TrackStats>>;
  listPearls(track: TrackId): Promise<readonly ClinicalPearl[]>;
  listRevisionModules(query: RevisionModuleQuery): Promise<RevisionPage>;
  countRevisionModules(): Promise<number>;
}

const stableHexId = (seed: string): string => createHash('sha1').update(seed).digest('hex').slice(0, 24);

const blueprintStats = (track: TrackId, updatedAtISO: string): TrackStats => {
  const blueprint = TRACK_BLUEPRINTS[track];
  return {
    id: track,
    topicCount: blueprint.counts.topicCount,
    revisionModuleCount: blueprint.counts.revisionModuleCount,
    flashcardCount: blueprint.counts.flashcardCount,
    ibqCount: blueprint.counts.ibqCount,
    retentionRate: blueprint.counts.retentionRate,
    updatedAtISO,
  };
};

const seedModulesAsDto = (): RevisionModuleDto[] =>
  REVISION_MODULE_SEEDS.map((seed) => ({
    id: stableHexId(seed.slug),
    slug: seed.slug,
    track: seed.track,
    title: seed.title,
    summary: seed.summary,
    difficulty: seed.difficulty,
    highYieldScore: seed.highYieldScore,
    durationMinutes: seed.durationMinutes,
    tags: seed.tags,
    conceptNodeIds: seed.conceptNodeIds,
    imageBased: seed.imageBased,
    spiralRepetitionStage: seed.spiralRepetitionStage,
    rag: seed.rag,
    updatedAtISO: new Date('2026-10-16T06:00:00.000Z').toISOString(),
  }));

const applyModuleQuery = (modules: readonly RevisionModuleDto[], query: RevisionModuleQuery): RevisionPage => {
  const filtered = modules.filter((module) => {
    if (query.track && module.track !== query.track) return false;
    if (query.difficulty && module.difficulty !== query.difficulty) return false;
    if (query.highYieldOnly && module.highYieldScore < 8) return false;
    return true;
  });

  const startIndex = query.cursor ? filtered.findIndex((module) => module.id === query.cursor) + 1 : 0;
  const page = filtered.slice(startIndex, startIndex + query.limit);
  const last = page.at(-1);

  return {
    items: page,
    total: filtered.length,
    nextCursor: last && startIndex + query.limit < filtered.length ? last.id : null,
  };
};

/* ----------------------------------------------------------- in-memory ------ */

export class InMemoryTracksRepository implements TracksRepository {
  public readonly kind = 'memory' as const;

  private readonly modules: RevisionModuleDto[] = seedModulesAsDto();

  public async listTrackStats(): Promise<Record<TrackId, TrackStats>> {
    const updatedAtISO = new Date('2026-10-16T06:00:00.000Z').toISOString();
    return {
      NEET_UG: blueprintStats('NEET_UG', updatedAtISO),
      NEET_PG: blueprintStats('NEET_PG', updatedAtISO),
    };
  }

  public async listPearls(track: TrackId): Promise<readonly ClinicalPearl[]> {
    return TRACK_BLUEPRINTS[track].pearls;
  }

  public async listRevisionModules(query: RevisionModuleQuery): Promise<RevisionPage> {
    return applyModuleQuery(this.modules, query);
  }

  public async countRevisionModules(): Promise<number> {
    return this.modules.length;
  }
}

/* --------------------------------------------------------------- mongo ------ */

interface TrackAggregationRow {
  _id: TrackId;
  modules: number;
  imageBased: number;
  latest: Date | null;
}

export class MongoTracksRepository implements TracksRepository {
  public readonly kind = 'mongo' as const;

  public async listTrackStats(): Promise<Record<TrackId, TrackStats>> {
    const [moduleRows, flashcardRows, caseRows] = await Promise.all([
      RevisionModuleModel.aggregate<TrackAggregationRow>([
        { $match: { status: 'published' } },
        {
          $group: {
            _id: '$track',
            modules: { $sum: 1 },
            imageBased: { $sum: { $cond: ['$imageBased', 1, 0] } },
            latest: { $max: '$updatedAt' },
          },
        },
      ]),
      FlashcardModel.aggregate<{ _id: TrackId; flashcards: number }>([{ $group: { _id: '$track', flashcards: { $sum: 1 } } }]),
      ClinicalCaseModel.aggregate<{ _id: TrackId; cases: number }>([{ $group: { _id: '$track', cases: { $sum: 1 } } }]),
    ]);

    const moduleByTrack = new Map(moduleRows.map((row) => [row._id, row]));
    const flashcardByTrack = new Map(flashcardRows.map((row) => [row._id, row.flashcards]));
    const caseByTrack = new Map(caseRows.map((row) => [row._id, row.cases]));

    const entries = TRACK_IDS.map((track): [TrackId, TrackStats] => {
      const live = moduleByTrack.get(track);
      const seed = blueprintStats(track, new Date().toISOString());
      const liveFlashcards = flashcardByTrack.get(track) ?? 0;
      const liveCases = caseByTrack.get(track) ?? 0;

      return [
        track,
        {
          ...seed,
          /* Never render an empty portal: an unseeded collection falls back to
             the curated snapshot rather than showing zeroes. */
          revisionModuleCount: live && live.modules > 0 ? live.modules : seed.revisionModuleCount,
          flashcardCount: liveFlashcards > 0 ? liveFlashcards : seed.flashcardCount,
          ibqCount: live && live.imageBased > 0 ? live.imageBased : seed.ibqCount,
          updatedAtISO: live?.latest ? live.latest.toISOString() : seed.updatedAtISO,
          topicCount: caseByTrack.size > 0 ? Math.max(liveCases, seed.topicCount) : seed.topicCount,
        },
      ];
    });

    return Object.fromEntries(entries) as Record<TrackId, TrackStats>;
  }

  public async listPearls(track: TrackId): Promise<readonly ClinicalPearl[]> {
    const blueprint = TRACK_BLUEPRINTS[track];
    const live = await RevisionModuleModel.find({ track, status: 'published', highYieldScore: { $gte: 9 } })
      .sort({ updatedAt: -1 })
      .limit(6)
      .exec();

    if (live.length === 0) return blueprint.pearls;

    const fromLive: ClinicalPearl[] = live.map((module) => ({
      id: `pearl-${module.slug}`,
      title: module.title.length > 110 ? `${module.title.slice(0, 107)}…` : module.title,
      body: module.summary.length > 560 ? `${module.summary.slice(0, 557)}…` : module.summary,
      tags: module.tags.slice(0, 4),
      track: module.track,
    }));

    return [...fromLive, ...blueprint.pearls];
  }

  public async listRevisionModules(query: RevisionModuleQuery): Promise<RevisionPage> {
    const filter: FilterQuery<RevisionModuleAttrs> = { status: 'published' };
    if (query.track) filter.track = query.track;
    if (query.difficulty) filter.difficulty = query.difficulty;
    if (query.highYieldOnly) filter.highYieldScore = { $gte: 8 };
    if (query.cursor) filter._id = { $lt: new Types.ObjectId(query.cursor) };

    const [documents, total] = await Promise.all([
      RevisionModuleModel.find(filter)
        .sort({ _id: -1 })
        .limit(query.limit + 1)
        .exec(),
      RevisionModuleModel.countDocuments({ ...filter, ...(query.cursor ? { _id: { $gt: new Types.ObjectId(query.cursor) } } : {}) }).exec(),
    ]);

    const hasMore = documents.length > query.limit;
    const page = hasMore ? documents.slice(0, query.limit) : documents;
    const items = page.map<RevisionModuleDto>((document) => ({
      id: document._id.toString(),
      slug: document.slug,
      track: document.track,
      title: document.title,
      summary: document.summary,
      difficulty: document.difficulty,
      highYieldScore: document.highYieldScore,
      durationMinutes: document.durationMinutes,
      tags: [...document.tags],
      conceptNodeIds: [...document.conceptNodeIds],
      imageBased: document.imageBased,
      spiralRepetitionStage: document.spiralRepetitionStage,
      rag: {
        sourceDocument: document.rag.sourceDocument,
        sourcePages: document.rag.sourcePages,
        chunkCount: document.rag.chunkCount,
      },
      updatedAtISO: document.updatedAt.toISOString(),
    }));

    return { items, total, nextCursor: hasMore ? (items.at(-1)?.id ?? null) : null };
  }

  public async countRevisionModules(): Promise<number> {
    return RevisionModuleModel.countDocuments({ status: 'published' }).exec();
  }
}

/**
 * Chooses the adapter at call time: the API degrades gracefully if the database
 * disappears mid-flight (e.g. a dropped container) instead of returning 500s.
 */
export const resolveTracksRepository = (mongoRepository: MongoTracksRepository, memoryRepository: InMemoryTracksRepository): TracksRepository =>
  isDatabaseReady() ? mongoRepository : memoryRepository;

export const trackRepositorySingletons = {
  memory: new InMemoryTracksRepository(),
  mongo: new MongoTracksRepository(),
};
