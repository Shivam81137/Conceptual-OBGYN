import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Download, Moon, Search, Sun } from 'lucide-react';
import { BrandMark } from '@/components/brand/BrandMark';
import { useAppStore } from '@/store/useAppStore';
import { usePwaInstall } from '@/hooks/usePwaInstall';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { navigate, usePathname } from '@/lib/router';
import { withFilterTween } from '@/lib/motion';
import { cn } from '@/lib/utils';

/** Scroll distance before the bar is allowed to retreat. */
const HIDE_AFTER_PX = 88;
/** Minimum direction change before toggling, so jitter never flickers the bar. */
const DIRECTION_DELTA_PX = 6;

/**
 * Navbar — a fixed, frosted command bar.
 * Left: brand emblem + wordmark (studio pages add a Hub pill).
 * Right: ⌘K search, theme toggle, install / sign-in.
 * The bar stays pinned to the viewport and slides away while reading downward,
 * returning the moment the student scrolls back up.
 */
export function Navbar(): JSX.Element {
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const setCommandOpen = useAppStore((state) => state.setCommandOpen);
  const pathname = usePathname();
  const { canInstall, promptInstall } = usePwaInstall();
  const reduceMotion = usePrefersReducedMotion();
  const [noteOpen, setNoteOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const primed = useRef(false);

  /* The sign-in note closes on Escape or any click outside the action cluster. */
  useEffect(() => {
    if (!noteOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setNoteOpen(false);
    };
    const onPointerDown = (event: PointerEvent): void => {
      if (actionsRef.current && !actionsRef.current.contains(event.target as Node)) setNoteOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [noteOpen]);

  /* Pinned on arrival, retreats on scroll-down, returns on scroll-up.
     On studio views the bar stays hidden (the studio has its own masthead). */
  const isStudio = pathname.startsWith('/track/');

  useEffect(() => {
    const evaluate = (): void => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;
      setElevated(y > 6);

      if (!primed.current) {
        primed.current = true;
        return;
      }
      /* Studio views keep the bar hidden regardless of scroll direction. */
      if (isStudio) {
        setHidden(true);
        return;
      }
      if (y <= HIDE_AFTER_PX) {
        setHidden(false);
        return;
      }
      if (delta > DIRECTION_DELTA_PX) setHidden(true);
      else if (delta < -DIRECTION_DELTA_PX) setHidden(false);
    };

    window.addEventListener('scroll', evaluate, { passive: true });
    evaluate();
    return () => window.removeEventListener('scroll', evaluate);
  }, [isStudio]);

  const goHome = (): void => {
    if (pathname !== '/') {
      navigate('/');
      return;
    }
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-[calc(0.75rem_+_env(safe-area-inset-top))] z-40 flex justify-center px-3 sm:top-[calc(1.25rem_+_env(safe-area-inset-top))] sm:px-4">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={withFilterTween({ type: 'spring', stiffness: 280, damping: 26 })}
        className="pointer-events-none w-full max-w-3xl"
      >
        <nav
          aria-label="Primary"
          data-hidden={hidden ? 'true' : 'false'}
          onFocusCapture={() => setHidden(false)}
          className={cn(
            'glass-capsule pointer-events-auto relative flex w-full items-center justify-between gap-2 rounded-full py-1.5 pl-1.5 pr-1.5 transition-[transform,opacity] duration-300 ease-out will-change-transform motion-reduce:transition-none sm:gap-3 sm:pl-2 sm:pr-2',
            'data-[hidden=true]:pointer-events-none data-[hidden=true]:-translate-y-[140%] data-[hidden=true]:opacity-0',
            elevated && 'border-slate-900/[0.10] dark:border-white/[0.14]',
          )}
        >
          {/* ─── Brand / studio back-pill ──────────────────────────────────── */}
          <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={goHome}
              aria-label="Conceptual OBGYN home"
              className="group inline-flex min-h-9 items-center gap-2 rounded-full px-1 py-0.5 transition-colors duration-150 hover:bg-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/40 dark:hover:bg-white/[0.06]"
            >
              <BrandMark width={isStudio ? 28 : 32} glow={!isStudio} priority />
              {!isStudio ? (
                <>
                  <span className="hidden select-none items-baseline gap-1 text-[15px] font-semibold tracking-tight sm:inline-flex">
                    <span className="text-gradient">Conceptual</span>
                    <span className="text-slate-700 dark:text-slate-200">OBGYN</span>
                  </span>
                  <span className="select-none text-[13px] font-semibold tracking-tight text-slate-700 sm:hidden dark:text-slate-200">
                    OBGYN
                  </span>
                </>
              ) : null}
            </button>
            {isStudio ? (
              <button
                type="button"
                onClick={() => navigate('/')}
                className="inline-flex h-8 items-center gap-1.5 rounded-full border border-slate-900/[0.07] bg-white/70 px-2.5 text-[11px] font-medium text-slate-600 shadow-sm transition-all duration-150 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/40 dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white"
              >
                <ArrowLeft className="h-3 w-3" strokeWidth={2.1} aria-hidden="true" />
                <span className="hidden sm:inline">Back to Hub</span>
                <span className="sm:hidden">Hub</span>
              </button>
            ) : null}
          </div>

          {/* ─── Actions ────────────────────────────────────────────────────── */}
          <div ref={actionsRef} className="relative flex shrink-0 items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={() => setCommandOpen(true)}
              aria-label="Open quick recall search"
              className="flex h-9 items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-2.5 text-[12px] text-slate-500 shadow-sm transition-all duration-150 hover:border-[#4285F4]/30 hover:bg-white hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/40 sm:px-3 dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/[0.10] dark:hover:text-white"
            >
              <Search className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" strokeWidth={2} aria-hidden="true" />
              <span className="hidden font-medium sm:inline">Search</span>
              <kbd className="hidden h-5 items-center rounded border border-slate-200 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-400 lg:inline-flex dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-500">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition-all duration-150 hover:bg-slate-900/[0.06] hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/40 dark:text-slate-400 dark:hover:bg-white/[0.10] dark:hover:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -40, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 40, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="grid place-items-center"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-4 w-4 text-[#FBBC04]" strokeWidth={1.6} aria-hidden="true" />
                  ) : (
                    <Moon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            {canInstall ? (
              <button
                type="button"
                aria-label="Install Conceptual OBGYN"
                className="action-primary h-9 w-9 justify-center px-0 text-xs sm:w-auto sm:px-4"
                onClick={() => void promptInstall()}
              >
                <Download className="h-4 w-4 sm:hidden" strokeWidth={2} aria-hidden="true" />
                <span className="hidden sm:inline">Install</span>
              </button>
            ) : (
              <button
                type="button"
                className="action-quiet hidden h-9 px-3 text-[12.5px] sm:inline-flex"
                aria-expanded={noteOpen}
                onClick={() => setNoteOpen((open) => !open)}
              >
                Sign in
              </button>
            )}

            <AnimatePresence>
              {noteOpen ? (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="glass-card absolute right-0 top-[calc(100%+12px)] w-64 rounded-2xl px-4 py-3 text-left text-xs leading-relaxed text-slate-500 dark:text-slate-400"
                >
                  Sign-in arrives with the sync release. Your revision history stays on this device until then.
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}

export default Navbar;
