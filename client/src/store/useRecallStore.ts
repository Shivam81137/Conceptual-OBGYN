import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { TrackId } from '@/types/tracks';

/**
 * Quick Recall vault — the persisted side of the ⌘K palette.
 * ---------------------------------------------------------------------------
 * Pearls saved from the AI studio are written here (localStorage, survives
 * reloads) so they become instantly searchable inside the navbar's ⌘K modal.
 * `revealPearl` is session-only: the palette hands a saved pearl to the studio
 * card, which expands it in the glass drawer, then the card consumes it.
 */

export interface SavedPearl {
  id: string;
  /** The 🎯 high-yield pearl sentence itself. */
  text: string;
  /** The student question that produced it. */
  query: string;
  track: TrackId;
  sourceTag: string | null;
  savedAtISO: string;
}

interface RecallState {
  pearls: SavedPearl[];
  revealPearl: SavedPearl | null;
  savePearl: (input: { text: string; query: string; track: TrackId; sourceTag: string | null }) => void;
  removePearl: (id: string) => void;
  setRevealPearl: (pearl: SavedPearl | null) => void;
}

const MAX_SAVED_PEARLS = 40;
const STORAGE_KEY = 'conceptual-obgyn:recall-v1';

export const useRecallStore = create<RecallState>()(
  persist(
    (set) => ({
      pearls: [],
      revealPearl: null,
      savePearl: (input) =>
        set((state) => {
          const text = input.text.trim();
          if (text.length === 0) return state;
          /* One entry per distinct pearl — saving again simply moves it to the top. */
          const existing = state.pearls.find((pearl) => pearl.text === text);
          const entry: SavedPearl = {
            id: existing?.id ?? crypto.randomUUID(),
            text,
            query: input.query.trim(),
            track: input.track,
            sourceTag: input.sourceTag,
            savedAtISO: new Date().toISOString(),
          };
          return { pearls: [entry, ...state.pearls.filter((pearl) => pearl.id !== entry.id)].slice(0, MAX_SAVED_PEARLS) };
        }),
      removePearl: (id) => set((state) => ({ pearls: state.pearls.filter((pearl) => pearl.id !== id) })),
      setRevealPearl: (pearl) => set({ revealPearl: pearl }),
    }),
    {
      name: STORAGE_KEY,
      version: 1,
      storage: createJSONStorage(() => localStorage),
      /* `revealPearl` is a transient hand-off — never persisted. */
      partialize: (state) => ({ pearls: state.pearls }),
    },
  ),
);

export const RECALL_STORAGE_KEY = STORAGE_KEY;
