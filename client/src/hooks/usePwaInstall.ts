import { useCallback, useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export interface PwaInstallApi {
  /** `beforeinstallprompt` captured and ready to replay. */
  canInstall: boolean;
  installed: boolean;
  offlineReady: boolean;
  updateAvailable: boolean;
  registrationError: string | null;
  /** Resolution of the last prompt (for UI feedback). */
  promptOutcome: 'accepted' | 'dismissed' | null;
  promptInstall: () => Promise<'accepted' | 'dismissed' | 'unavailable'>;
  applyUpdate: () => void;
  closeUpdateToast: () => void;
}

/**
 * `usePwaInstall` — bridges Workbox's autoUpdate lifecycle with the Chromium
 * install prompt so the navbar can render a first-class "Install App" glass pill
 * and an "Offline Ready • v1.0" status badge instead of a bolted-on banner.
 */
export function usePwaInstall(): PwaInstallApi {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  });
  const [promptOutcome, setPromptOutcome] = useState<'accepted' | 'dismissed' | null>(null);
  const [registrationError, setRegistrationError] = useState<string | null>(null);

  const {
    offlineReady: [offlineReady],
    needRefresh: [updateAvailable],
    updateServiceWorker,
  } = useRegisterSW({
    immediate: true,
    onRegisterError: (error: unknown) => {
      setRegistrationError(error instanceof Error ? error.message : 'Service worker registration failed');
    },
    onRegisteredSW: () => setRegistrationError(null),
  });

  useEffect(() => {
    const onBeforeInstallPrompt = (event: BeforeInstallPromptEvent): void => {
      event.preventDefault();
      setDeferredPrompt(event);
    };
    const onInstalled = (): void => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const promptInstall = useCallback(async (): Promise<'accepted' | 'dismissed' | 'unavailable'> => {
    if (!deferredPrompt) return 'unavailable';
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setPromptOutcome(outcome);
    if (outcome === 'accepted') setDeferredPrompt(null);
    return outcome;
  }, [deferredPrompt]);

  const applyUpdate = useCallback((): void => {
    void updateServiceWorker(true);
  }, [updateServiceWorker]);

  const closeUpdateToast = useCallback((): void => {
    // Workbox autoUpdate keeps the toast informational only.
    setPromptOutcome(null);
  }, []);

  return {
    canInstall: deferredPrompt !== null && !installed,
    installed,
    offlineReady,
    updateAvailable,
    registrationError,
    promptOutcome,
    promptInstall,
    applyUpdate,
    closeUpdateToast,
  };
}
