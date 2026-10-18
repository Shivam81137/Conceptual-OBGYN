import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { FlashcardRating } from '@/data/revisionStudio';
import type { TrackId } from '@/types/tracks';

/**
 * Revision Studio local state.
 * ---------------------------------------------------------------------------
 * All study evidence stays on the device: flashcard self-ratings, MCQ choices,
 * module recency and the per-track resume point. The store is deliberately
 * small so the workspace paints instantly offline and a future sync release can
 * reconcile it without a schema migration.
 */

export interface CardRatingRecord {
  rating: FlashcardRating;
  reviewedAtISO: string;
}

export interface StudioState {
  /** cardId → latest self-rating. */
  cardRatings: Record<string, CardRatingRecord>;
  /** `${moduleId}:${mcqId}` → chosen option index (locked once answered). */
  mcqAnswers: Record<string, number>;
  /** moduleId → first-open ISO timestamp. */
  openedModules: Record<string, string>;
  /** Resume point for each track. */
  lastModuleByTrack: Partial<Record<TrackId, string>>;
  rateCard: (cardId: string, rating: FlashcardRating) => void;
  answerMcq: (key: string, optionIndex: number) => void;
  openModule: (moduleId: string, track: TrackId) => void;
  resetCards: (cardIds: readonly string[]) => void;
  resetMcqs: (keys: readonly string[]) => void;
}

export const useStudioStore = create<StudioState>()(
  persist(
    (set) => ({
      cardRatings: {},
      mcqAnswers: {},
      openedModules: {},
      lastModuleByTrack: {},
      rateCard: (cardId, rating) =>
        set((state) => ({
          cardRatings: {
            ...state.cardRatings,
            [cardId]: { rating, reviewedAtISO: new Date().toISOString() },
          },
        })),
      answerMcq: (key, optionIndex) =>
        set((state) => {
          if (state.mcqAnswers[key] !== undefined) return state;
          return { mcqAnswers: { ...state.mcqAnswers, [key]: optionIndex } };
        }),
      openModule: (moduleId, track) =>
        set((state) => ({
          openedModules: state.openedModules[moduleId]
            ? state.openedModules
            : { ...state.openedModules, [moduleId]: new Date().toISOString() },
          lastModuleByTrack: { ...state.lastModuleByTrack, [track]: moduleId },
        })),
      resetCards: (cardIds) =>
        set((state) => {
          const next = { ...state.cardRatings };
          cardIds.forEach((id) => delete next[id]);
          return { cardRatings: next };
        }),
      resetMcqs: (keys) =>
        set((state) => {
          const next = { ...state.mcqAnswers };
          keys.forEach((key) => delete next[key]);
          return { mcqAnswers: next };
        }),
    }),
    {
      name: 'conceptual-obgyn:studio-v1',
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        cardRatings: state.cardRatings,
        mcqAnswers: state.mcqAnswers,
        openedModules: state.openedModules,
        lastModuleByTrack: state.lastModuleByTrack,
      }),
    },
  ),
);
