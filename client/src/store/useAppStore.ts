import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { TrackId } from '@/types/tracks';

export type ThemeMode = 'light' | 'dark';

export interface AiStudioPrefill {
  query: string;
  track: TrackId;
  /** Bumped on every hand-off so repeat clicks re-focus the composer. */
  nonce: number;
}

export interface AppState {
  theme: ThemeMode;
  /** Portal highlighted by the navbar segmented switcher (null = all tracks). */
  spotlightTrack: TrackId | null;
  /** Bumped on every spotlight call so repeat clicks still re-announce the sync. */
  spotlightNonce: number;
  /** ⌘K quick recall modal. */
  commandOpen: boolean;
  /** A question handed from a studio MCQ (“Ask AI Why →”) to the landing card. */
  aiPrefill: AiStudioPrefill | null;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setSpotlightTrack: (track: TrackId | null) => void;
  setCommandOpen: (open: boolean) => void;
  prefillAiStudio: (query: string, track: TrackId) => void;
  consumeAiPrefill: () => void;
}

/**
 * The quiet state store.
 * Daylight is the default reading surface for study sessions; dark is an
 * explicit user choice — and the only piece of state worth remembering across
 * visits. Spotlight and command state are session-local.
 */
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      spotlightTrack: null,
      spotlightNonce: 0,
      commandOpen: false,
      aiPrefill: null,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setSpotlightTrack: (track) =>
        set((state) => ({ spotlightTrack: track, spotlightNonce: state.spotlightNonce + 1 })),
      setCommandOpen: (open) => set({ commandOpen: open }),
      prefillAiStudio: (query, track) =>
        set((state) => ({
          spotlightTrack: track,
          spotlightNonce: state.spotlightNonce + 1,
          aiPrefill: { query, track, nonce: state.spotlightNonce + 1 },
        })),
      consumeAiPrefill: () => set({ aiPrefill: null }),
    }),
    {
      name: 'conceptual-obgyn:theme-v1',
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
