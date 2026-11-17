import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { fetchMe } from '@/api/auth';
import { ApiError } from '@/api/client';
import type { AuthSession, PublicUser } from '@/types/auth';

export type AuthDialogMode = 'signup' | 'login';

interface AuthState {
  token: string | null;
  expiresAtISO: string | null;
  user: PublicUser | null;
  /** Account dialog visibility (session-local). */
  dialogOpen: boolean;
  dialogMode: AuthDialogMode;
  openDialog: (mode?: AuthDialogMode) => void;
  closeDialog: () => void;
  setSession: (session: AuthSession) => void;
  signOut: () => void;
  /** Re-validates a stored token on startup; clears it only when the server says it is invalid. */
  refresh: () => Promise<void>;
}

/**
 * Student session. Only the token and profile are persisted; dialog state is
 * session-local. Offline or server errors never sign the student out — only an
 * explicit 401 does.
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      expiresAtISO: null,
      user: null,
      dialogOpen: false,
      dialogMode: 'signup',
      openDialog: (mode = 'signup') => set({ dialogOpen: true, dialogMode: mode }),
      closeDialog: () => set({ dialogOpen: false }),
      setSession: (session) =>
        set({ token: session.token, expiresAtISO: session.expiresAtISO, user: session.user, dialogOpen: false }),
      signOut: () => set({ token: null, expiresAtISO: null, user: null }),
      refresh: async () => {
        const { token, expiresAtISO } = get();
        if (!token) return;
        if (expiresAtISO && new Date(expiresAtISO).getTime() <= Date.now()) {
          set({ token: null, expiresAtISO: null, user: null });
          return;
        }
        try {
          const user = await fetchMe(token);
          set({ user });
        } catch (error) {
          if (error instanceof ApiError && error.status === 401) set({ token: null, expiresAtISO: null, user: null });
        }
      },
    }),
    {
      name: 'obgyn-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token, expiresAtISO: state.expiresAtISO, user: state.user }),
    },
  ),
);
