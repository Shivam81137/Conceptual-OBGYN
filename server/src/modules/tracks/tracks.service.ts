import { TRACK_BLUEPRINTS } from '../../data/seed-data.js';
import { STUDIO_MODULE_INDEX } from '../../data/studio-modules.js';
import {
  resolveTracksRepository,
  trackRepositorySingletons,
  type RevisionPage,
  type TracksRepository,
} from './tracks.repository.js';
import {
  TRACK_IDS,
  type ClinicalPearl,
  type ConceptNode,
  type RevisionModuleQuery,
  type StudioModuleList,
  type TrackId,
  type TrackMetric,
  type TrackSummary,
  type TrackSummaryResponse,
} from './tracks.schema.js';

const MS_PER_DAY = 86_400_000;
const EPOCH_MS = Date.UTC(2026, 0, 1);

/** Days elapsed since the corpus epoch — the deterministic pearl rotation key. */
export const dayIndex = (now: Date = new Date()): number => Math.floor((now.getTime() - EPOCH_MS) / MS_PER_DAY);

const pickPearl = (pearls: readonly ClinicalPearl[], index: number, fallback: ClinicalPearl): ClinicalPearl => {
  if (pearls.length === 0) return fallback;
  const wrapped = ((index % pearls.length) + pearls.length) % pearls.length;
  return pearls[wrapped] ?? fallback;
};

export interface TracksServiceHealth {
  repository: TracksRepository['kind'];
  moduleCount: number;
  trackCount: number;
}

/**
 * TracksService
 * ---------------------------------------------------------------------------
 * Composes the immutable editorial blueprint (metrics, concept tree, accents)
 * with live repository statistics and the deterministic daily clinical pearl.
 * The controller stays a thin HTTP adapter; everything testable lives here.
 */
export class TracksService {
  public constructor(
    private readonly repository: TracksRepository = resolveTracksRepository(
      trackRepositorySingletons.mongo,
      trackRepositorySingletons.memory,
    ),
    /** Injectable clock keeps the daily pearl rotation deterministic in tests. */
    private readonly clock: () => Date = () => new Date(),
  ) {}

  public get repositoryKind(): TracksRepository['kind'] {
    return this.repository.kind;
  }

  public async getSummary(): Promise<TrackSummaryResponse> {
    const now = this.clock();
    const stats = await this.repository.listTrackStats();
    const rotation = dayIndex(now);

    const tracks = await Promise.all(
      TRACK_IDS.map(async (id, position): Promise<TrackSummary> => {
        const blueprint = TRACK_BLUEPRINTS[id];
        const stat = stats[id];
        const pearls = await this.repository.listPearls(id);

        return {
          id,
          title: blueprint.title,
          kicker: blueprint.kicker,
          badge: blueprint.badge,
          description: blueprint.description,
          ctaLabel: blueprint.ctaLabel,
          accent: blueprint.accent,
          metrics: blueprint.metrics satisfies TrackMetric[],
          conceptNodes: blueprint.conceptNodes satisfies ConceptNode[],
          topicCount: stat.topicCount,
          revisionModuleCount: stat.revisionModuleCount,
          flashcardCount: stat.flashcardCount,
          ibqCount: stat.ibqCount,
          retentionRate: stat.retentionRate,
          dailyPearl: pickPearl(pearls, rotation + position, blueprint.pearls[0]),
          updatedAtISO: stat.updatedAtISO,
        };
      }),
    );

    return {
      generatedAtISO: now.toISOString(),
      source: this.repository.kind === 'mongo' ? 'live' : 'seed',
      tracks,
    };
  }

  public async getTrack(track: TrackId): Promise<TrackSummary | null> {
    const summary = await this.getSummary();
    return summary.tracks.find((entry) => entry.id === track) ?? null;
  }

  public async listRevisionModules(query: RevisionModuleQuery): Promise<RevisionPage> {
    return this.repository.listRevisionModules(query);
  }

  /** Studio module index for one track — curated content ships in the client. */
  public listStudioModules(track: TrackId): StudioModuleList {
    return {
      track,
      modules: STUDIO_MODULE_INDEX.filter((module) => module.track === track),
      generatedAtISO: this.clock().toISOString(),
    };
  }

  public async getHealth(): Promise<TracksServiceHealth> {
    return {
      repository: this.repository.kind,
      moduleCount: await this.repository.countRevisionModules(),
      trackCount: TRACK_IDS.length,
    };
  }
}

export const tracksService = new TracksService();
