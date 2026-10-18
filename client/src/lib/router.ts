import { useEffect, useState } from 'react';

/**
 * Minimal history router — the hub plus the two Studio destinations.
 * Kept dependency-free on purpose: `/` is the spatial landing and
 * `/track/ug` + `/track/pg` are the Revision Studio workspaces.
 */

/** `pushState` never emits `popstate` natively, so we re-announce it ourselves. */
const announce = (): void => {
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function navigate(to: string): void {
  if (window.location.pathname === to) return;
  window.history.pushState(null, '', to);
  announce();
  window.scrollTo({ top: 0 });
}

/** Legacy `/ug` + `/pg` bookmarks are rewritten to `/track/*` without a history entry. */
export function replaceNavigate(to: string): void {
  if (window.location.pathname === to) return;
  window.history.replaceState(null, '', to);
  announce();
  window.scrollTo({ top: 0 });
}

export function usePathname(): string {
  const [path, setPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const sync = (): void => setPath(window.location.pathname);
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return path;
}

interface ClickLike {
  button: number;
  metaKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  preventDefault: () => void;
}

/**
 * Intercepts a plain left click so anchors keep their native semantics
 * (middle-click, cmd-click and "open in new tab" still behave like the web).
 */
export function interceptNavigation(event: ClickLike, to: string): void {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  navigate(to);
}
