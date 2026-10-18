import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { apiRequest } from '@/api/client';
import { fallbackTrackSummary, FALLBACK_TRACK_SUMMARIES } from '@/data/fallbackTracks';
import {
  apiEnvelopeSchema,
  trackSummaryResponseSchema,
  type TrackSummary,
  type TrackSummaryResponse,
} from '@/types/tracks';

export const queryKeys = {
  trackSummary: ['tracks', 'summary'] as const,
} as const;

const trackSummaryEnvelope = apiEnvelopeSchema(trackSummaryResponseSchema);
const TRACK_SUMMARY_FALLBACK: TrackSummaryResponse = fallbackTrackSummary;

/**
 * `useTrackSummary`
 * ---------------------------------------------------------------------------
 * Ships with complete seed data as `initialData`, so the glass portals paint on
 * the very first frame (zero layout shift, zero skeleton flash) and are then
 * reconciled with the live Express payload. Any network/offline failure keeps
 * the cached snapshot and flags the surface as an offline revision vault.
 */
export function useTrackSummary(): UseQueryResult<TrackSummaryResponse, Error> & { tracks: TrackSummary[]; isDegraded: boolean } {
  const query = useQuery<TrackSummaryResponse, Error>({
    queryKey: queryKeys.trackSummary,
    queryFn: async ({ signal }) => {
      const envelope = await apiRequest('/tracks/summary', trackSummaryEnvelope, { signal });
      return envelope.data;
    },
    initialData: TRACK_SUMMARY_FALLBACK,
    initialDataUpdatedAt: Date.parse(TRACK_SUMMARY_FALLBACK.generatedAtISO),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 1,
    retryDelay: 1200,
  });

  const data = query.data ?? fallbackTrackSummary;

  return {
    ...query,
    tracks: data.tracks.length > 0 ? data.tracks : FALLBACK_TRACK_SUMMARIES,
    isDegraded: query.isError || data.source === 'seed',
  };
}

/** Convenience selector with an exhaustive fallback for a single track. */
export function selectTrack(tracks: readonly TrackSummary[], id: TrackSummary['id']): TrackSummary {
  return tracks.find((track) => track.id === id) ?? fallbackTrackSummary.tracks[0];
}
