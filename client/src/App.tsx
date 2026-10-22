import { useEffect, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuroraGlassCanvas } from '@/components/canvas/AuroraGlassCanvas';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { QuickRecallModal } from '@/components/ui/QuickRecallModal';
import { LandingPage } from '@/components/landing/LandingPage';
import { TrackModuleDirectoryPage } from '@/components/studio/TrackModuleDirectoryPage';
import { createQueryClient } from '@/lib/queryClient';
import { replaceNavigate, usePathname } from '@/lib/router';
import { useTheme } from '@/hooks/useTheme';
import type { TrackId } from '@/types/tracks';

const ROUTES: Record<string, { trackId: TrackId; title: string }> = {
  '/track/ug': { trackId: 'NEET_UG', title: 'UG Revision Studio — Conceptual OBGYN' },
  '/track/pg': { trackId: 'NEET_PG', title: 'PG Clinical Vault — Conceptual OBGYN' },
};

/** Step-3 bookmarks are rewritten to the Step-4 workspace paths. */
const LEGACY_ROUTES: Record<string, string> = {
  '/ug': '/track/ug',
  '/pg': '/track/pg',
};

/**
 * App shell: aurora canvas → error boundary → query provider → route.
 * The living background lives outside the boundary so the quiet environment
 * survives a component failure; the ⌘K palette mounts once for every route.
 */
export default function App(): JSX.Element {
  const [queryClient] = useState(createQueryClient);
  const pathname = usePathname();
  useTheme();

  const legacyTarget = LEGACY_ROUTES[pathname];
  const route = ROUTES[pathname] ?? (legacyTarget ? ROUTES[legacyTarget] : undefined);

  useEffect(() => {
    if (legacyTarget) replaceNavigate(legacyTarget);
  }, [legacyTarget]);

  useEffect(() => {
    document.title = route ? route.title : 'Conceptual OBGYN — UG & PG Revision Workspace';
  }, [route]);

  return (
    <>
      <AuroraGlassCanvas />
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          {route ? (
            <TrackModuleDirectoryPage key={route.trackId} trackId={route.trackId} />
          ) : (
            <LandingPage />
          )}
          <QuickRecallModal />
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
