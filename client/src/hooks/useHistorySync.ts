import { useEffect } from 'react';
import { syncHistory } from '@/api/history';
import { ApiError } from '@/api/client';
import { useAuthStore } from '@/store/useAuthStore';
import { useHistoryStore } from '@/store/useHistoryStore';
import { useRecallStore } from '@/store/useRecallStore';
import { useStudioStore } from '@/store/useStudioStore';
import type { StudyStatePayload } from '@/types/history';

const DEBOUNCE_MS = 1500;

/** True once this tab has held a session — so a later sign-out knows to wipe the device copy. */
let hadSession = false;

const snapshot = (): StudyStatePayload => {
  const studio = useStudioStore.getState();
  const recall = useRecallStore.getState();
  return {
    cardRatings: studio.cardRatings,
    mcqAnswers: studio.mcqAnswers,
    openedModules: studio.openedModules,
    lastModuleByTrack: studio.lastModuleByTrack,
    savedPearls: recall.pearls.map((pearl) => ({
      ...pearl,
      text: pearl.text.slice(0, 2000),
      query: pearl.query.slice(0, 600),
    })),
  };
};

const applyToStores = (state: StudyStatePayload): void => {
  useStudioStore.setState({
    cardRatings: state.cardRatings,
    mcqAnswers: state.mcqAnswers,
    openedModules: state.openedModules,
    lastModuleByTrack: state.lastModuleByTrack,
  });
  useRecallStore.setState({ pearls: state.savedPearls });
};

/** Wipes the device copy so the next account on a shared device never inherits it. */
const clearLocalStudy = (): void => {
  useStudioStore.setState({ cardRatings: {}, mcqAnswers: {}, openedModules: {}, lastModuleByTrack: {} });
  useRecallStore.setState({ pearls: [] });
};

/**
 * Keeps the signed-in student's study history in the database.
 *  1. On sign-in (or app start with a stored session): one `merge` sync — device
 *     work done before signing up is kept, account history is restored.
 *  2. Afterwards: any change to the study stores is pushed (debounced) as `replace`.
 *  3. On sign-out: the local copy is cleared (it lives safely in the account).
 * Offline failures never interrupt studying; the next change retries.
 */
export function useHistorySync(): void {
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const { setSnapshot, setStatus, clear } = useHistoryStore.getState();

    if (!token) {
      if (hadSession) {
        hadSession = false;
        clearLocalStudy();
        clear();
      }
      return undefined;
    }
    hadSession = true;

    let cancelled = false;
    let timer: number | undefined;
    let ready = false;

    const push = async (mode: 'merge' | 'replace'): Promise<void> => {
      setStatus('syncing');
      try {
        const payload = await syncHistory(token, mode, snapshot());
        if (cancelled) return;
        if (mode === 'merge') applyToStores(payload.state);
        setSnapshot(payload.stats, payload.recentEvents);
        setStatus('synced');
        ready = true;
      } catch (error) {
        if (cancelled) return;
        if (error instanceof ApiError && error.status === 401) {
          useAuthStore.getState().signOut();
          return;
        }
        setStatus('offline');
      }
    };

    void push('merge');

    const schedule = (): void => {
      if (!ready) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => void push('replace'), DEBOUNCE_MS);
    };
    const unsubscribeStudio = useStudioStore.subscribe(schedule);
    const unsubscribeRecall = useRecallStore.subscribe((state, previous) => {
      if (state.pearls !== previous.pearls) schedule();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      unsubscribeStudio();
      unsubscribeRecall();
    };
  }, [token]);
}
