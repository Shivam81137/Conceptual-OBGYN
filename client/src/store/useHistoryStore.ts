import { create } from 'zustand';
import type { StudyEvent, StudyStats } from '@/types/history';

/** Session-local view of the student's server-side history (stats + timeline). */
interface HistoryState {
  stats: StudyStats | null;
  events: StudyEvent[];
  dialogOpen: boolean;
  /** `syncing` while a request is in flight; `offline` when the last one failed. */
  status: 'idle' | 'syncing' | 'synced' | 'offline';
  setSnapshot: (stats: StudyStats, events: StudyEvent[]) => void;
  setStatus: (status: HistoryState['status']) => void;
  setDialogOpen: (open: boolean) => void;
  clear: () => void;
}

export const useHistoryStore = create<HistoryState>()((set) => ({
  stats: null,
  events: [],
  dialogOpen: false,
  status: 'idle',
  setSnapshot: (stats, events) => set({ stats, events }),
  setStatus: (status) => set({ status }),
  setDialogOpen: (dialogOpen) => set({ dialogOpen }),
  clear: () => set({ stats: null, events: [], status: 'idle', dialogOpen: false }),
}));
