import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/api/client';
import { modulesForTrack, type StudioModule } from '@/data/revisionStudio';
import { studioModuleListSchema, type StudioModuleDto, type StudioModuleList } from '@/types/studio';
import { apiEnvelopeSchema, type TrackId } from '@/types/tracks';

const studioEnvelope = apiEnvelopeSchema(studioModuleListSchema);

const toDto = (module: StudioModule): StudioModuleDto => ({
  id: module.id,
  slug: module.id,
  track: module.track,
  title: module.title,
  summary: module.summary,
  highYield: module.highYield,
  weightage: module.weightage,
  durationMinutes: module.durationMinutes,
  tags: [...module.tags],
  flashcardCount: module.flashcards.length,
  mcqCount: module.mcqs.length,
  updatedAtISO: module.updatedAtISO,
});

const curatedList = (track: TrackId): StudioModuleList => ({
  track,
  modules: modulesForTrack(track).map(toDto),
  generatedAtISO: '2026-10-16T06:00:00.000Z',
});

export type StudioIndexSource = 'live' | 'curated';

export interface StudioModulesResult {
  modules: readonly StudioModule[];
  /** `live` once the API index reconciles; `curated` while offline or booting. */
  source: StudioIndexSource;
  isFetching: boolean;
}

/**
 * `useStudioModules`
 * ---------------------------------------------------------------------------
 * The complete curated corpus is `initialData`, so the workspace zero-flashes
 * even on a cold offline load. `/api/v1/tracks/:track/modules` is then
 * reconciled for high-yield weightage, durations and updated timestamps; the
 * interactive notes, simulators, cards and MCQs always stay local.
 */
export function useStudioModules(track: TrackId): StudioModulesResult {
  const curated = useMemo(() => modulesForTrack(track), [track]);
  const initialData = useMemo(() => curatedList(track), [track]);

  const query = useQuery({
    queryKey: ['studio', 'modules', track],
    queryFn: async () => {
      const payload = await apiRequest(`/tracks/${track}/modules`, studioEnvelope, { timeoutMs: 4500 });
      return payload.data;
    },
    initialData,
    initialDataUpdatedAt: 0,
    staleTime: 5 * 60_000,
    gcTime: 30 * 60_000,
    retry: 1,
  });

  const modules = useMemo<readonly StudioModule[]>(() => {
    const byId = new Map((query.data?.modules ?? []).map((dto) => [dto.id, dto]));
    return curated.map((module) => {
      const dto = byId.get(module.id);
      if (!dto) return module;
      return {
        ...module,
        highYield: dto.highYield,
        weightage: dto.weightage,
        durationMinutes: dto.durationMinutes,
        tags: dto.tags,
      };
    });
  }, [curated, query.data]);

  const source: StudioIndexSource = query.isError ? 'curated' : query.isFetched ? 'live' : 'curated';

  return { modules, source, isFetching: query.isFetching };
}
