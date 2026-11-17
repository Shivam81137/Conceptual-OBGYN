import { apiRequest } from '@/api/client';
import { historyPayloadSchema, type HistoryPayload, type StudyStatePayload } from '@/types/history';
import { apiEnvelopeSchema } from '@/types/tracks';

/** History endpoints — the only place that talks to `/history/*`. */

const envelope = apiEnvelopeSchema(historyPayloadSchema);
const authHeader = (token: string) => ({ Authorization: `Bearer ${token}` });

export const fetchHistory = async (token: string, limit = 30): Promise<HistoryPayload> =>
  (await apiRequest(`/history?limit=${limit}`, envelope, { headers: authHeader(token) })).data;

export const syncHistory = async (
  token: string,
  mode: 'merge' | 'replace',
  state: StudyStatePayload,
): Promise<HistoryPayload> =>
  (
    await apiRequest('/history/sync', envelope, {
      method: 'POST',
      body: JSON.stringify({ mode, state }),
      headers: authHeader(token),
      timeoutMs: 20_000,
    })
  ).data;
