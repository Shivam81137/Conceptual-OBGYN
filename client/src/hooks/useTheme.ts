import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';

/**
 * Pushes the store theme onto the document — Tailwind's `dark` class, the
 * native `color-scheme`, and the browser/PWA chrome colour. The matching
 * pre-paint bootstrap lives in `index.html` so there is never a flash of the
 * wrong surface temperature.
 */
export function useTheme(): void {
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0B0F17' : '#F8FAFC';
  }, [theme]);
}
