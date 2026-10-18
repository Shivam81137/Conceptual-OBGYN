import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Moon, Search, Sun } from 'lucide-react';
import { BrandMark } from '@/components/brand/BrandMark';
import { useAppStore } from '@/store/useAppStore';
import { usePwaInstall } from '@/hooks/usePwaInstall';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { navigate, usePathname } from '@/lib/router';
import { withFilterTween } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { TrackId } from '@/types/tracks';

interface SwitcherOption {
  id: TrackId | null;
  label: string;
  mobileLabel?: string;
}

const SWITCHER: readonly SwitcherOption[] = [
  { id: null, label: 'All Tracks', mobileLabel: 'All' },
  { id: 'NEET_UG', label: 'NEET UG', mobileLabel: 'UG' },
  { id: 'NEET_PG', label: 'NEET PG', mobileLabel: 'PG' },
];

/**
 * Navbar — Google Workspace-style frosted glass top bar.
 * Left: 4-dot Google emblem + gradient wordmark.
 * Center: Material You segmented switcher.
 * Right: ⌘K search pill, theme toggle, CTA.
 */
export function Navbar(): JSX.Element {
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const spotlightTrack = useAppStore((state) => state.spotlightTrack);
  const setSpotlightTrack = useAppStore((state) => state.setSpotlightTrack);
  const setCommandOpen = useAppStore((state) => state.setCommandOpen);
  const pathname = usePathname();
  const { canInstall, promptInstall } = usePwaInstall();
  const reduceMotion = usePrefersReducedMotion();
  const [noteOpen, setNoteOpen] = useState(false);
  const actionsRef = useRef<HTMLDivElement | null>(null);

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

  /* On a studio page the switcher mirrors the route; on the landing it mirrors the spotlight. */
  const isStudio = pathname.startsWith('/track/');
  const studioTrack: TrackId | null =
    pathname === '/track/ug' ? 'NEET_UG' : pathname === '/track/pg' ? 'NEET_PG' : null;
  const activeId = studioTrack ?? spotlightTrack;

  const selectOption = (option: SwitcherOption): void => {
    setSpotlightTrack(option.id);
    if (!isStudio) return;
    if (option.id === null) {
      navigate('/');
      return;
    }
    navigate(`/track/${option.id === 'NEET_UG' ? 'ug' : 'pg'}`);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-40 flex justify-center px-3 sm:top-5 sm:px-4">
      <motion.nav
        aria-label="Primary"
        initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={withFilterTween({ type: 'spring', stiffness: 280, damping: 26 })}
        className="glass-capsule pointer-events-auto relative flex w-full max-w-3xl items-center justify-between gap-1.5 rounded-full px-2 py-1 shadow-sm sm:gap-2 sm:px-3 sm:py-1.5"
      >
        {/* ─── Brand / studio back-pill ──────────────────────────────────── */}
        <div className="flex shrink-0 items-center gap-1 pl-0.5 sm:gap-2 sm:pl-1">
          <button
            type="button"
            onClick={() => {
              if (pathname !== '/') {
                navigate('/');
                return;
              }
              window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
            }}
            aria-label="Conceptual OBGYN home"
            className="group inline-flex items-center gap-1.5 rounded-full p-0.5 transition-colors duration-150 hover:bg-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/40 sm:gap-2 dark:hover:bg-white/[0.06]"
          >
            <BrandMark width={isStudio ? 30 : 34} glow={!isStudio} priority />
            {!isStudio ? (
              <span className="hidden select-none text-sm font-semibold tracking-tight sm:block">
                <span className="text-gradient">Conceptual</span>
                <span className="ml-1 text-slate-700 dark:text-slate-200">OBGYN</span>
              </span>
            ) : null}
          </button>
          {isStudio ? (
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/[0.07] bg-white/70 px-2 py-1 text-[10.5px] font-medium text-slate-600 shadow-sm transition-all duration-150 hover:border-slate-300 hover:text-slate-900 sm:px-3 sm:py-1.5 sm:text-[11px] dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white"
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={2.1} aria-hidden="true" />
              <span className="hidden sm:inline">Back to Hub</span>
              <span className="sm:hidden">Hub</span>
            </button>
          ) : null}
        </div>

        {/* ─── Segmented Switcher ─────────────────────────────────────────── */}
        <div
          role="tablist"
          aria-label="Track selection"
          className="flex items-center gap-0.5 rounded-full bg-black/[0.04] p-0.5 dark:bg-white/[0.06]"
        >
          {SWITCHER.map((option) => {
            const isActive = activeId === option.id;
            return (
              <button
                key={option.id ?? 'all'}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => selectOption(option)}
                className={cn(
                  'relative inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors duration-150 sm:px-3.5 sm:py-1.5 sm:text-xs',
                  isActive
                    ? 'text-[#1A73E8] dark:text-[#8AB4F8]'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-white/[0.12]"
                    style={{ boxShadow: '0 1px 4px rgba(66,133,244,0.18)' }}
                    transition={{ type: 'spring', stiffness: 440, damping: 36 }}
                  />
                ) : null}
                <span className="relative z-10 hidden whitespace-nowrap sm:inline">{option.label}</span>
                <span className="relative z-10 whitespace-nowrap sm:hidden">{option.mobileLabel ?? option.label}</span>
              </button>
            );
          })}
        </div>

        {/* ─── Actions ────────────────────────────────────────────────────── */}
        <div ref={actionsRef} className="relative flex shrink-0 items-center gap-1 pr-0.5">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            aria-label="Open quick recall search"
            className="flex h-7.5 items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-2 text-[11px] text-slate-500 shadow-sm transition-all duration-150 hover:border-[#4285F4]/30 hover:shadow-md hover:text-slate-800 sm:h-8 sm:gap-2 sm:px-3.5 sm:text-xs dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-slate-400 dark:hover:text-white"
          >
            <Search className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" strokeWidth={1.8} aria-hidden="true" />
            <span className="hidden font-medium text-slate-600 sm:inline dark:text-slate-300">Search</span>
            <span className="hidden lg:inline text-slate-400 dark:text-slate-500">· Recall</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid h-7 w-7 place-items-center rounded-full text-slate-500 transition-all duration-150 hover:bg-black/[0.06] hover:text-slate-800 focus-visible:outline-none sm:h-8 sm:w-8 dark:text-slate-400 dark:hover:bg-white/[0.10] dark:hover:text-white"
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
                  <Sun className="h-3.5 w-3.5 text-[#FBBC04] sm:h-4 sm:w-4" strokeWidth={1.5} aria-hidden="true" />
                ) : (
                  <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} aria-hidden="true" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          {canInstall ? (
            <button type="button" className="action-primary mr-0.5 text-xs" onClick={() => void promptInstall()}>
              Install
            </button>
          ) : (
            <button
              type="button"
              className="action-quiet hidden mr-0.5 text-xs sm:inline-flex"
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
      </motion.nav>
    </header>
  );
}

export default Navbar;
