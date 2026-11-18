import { useEffect, useId, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, X } from 'lucide-react';
import { login, signup } from '@/api/auth';
import { ApiError } from '@/api/client';
import { useAuthStore } from '@/store/useAuthStore';
import { loginFormSchema, signupFormSchema } from '@/types/auth';
import { TRACK_IDS, type TrackId } from '@/types/tracks';
import { withFilterTween } from '@/lib/motion';
import { cn } from '@/lib/utils';

const TRACK_LABELS: Record<TrackId, { title: string; hint: string }> = {
  NEET_UG: { title: 'UG', hint: 'MBBS · physiology & core concepts' },
  NEET_PG: { title: 'PG', hint: 'NEET-PG · clinical vault' },
};

type FieldErrors = Partial<Record<'displayName' | 'email' | 'password' | 'form', string>>;

const inputClass =
  'h-11 w-full rounded-xl border border-slate-200/90 bg-white/80 px-3.5 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm transition-colors focus:border-[#4285F4]/50 focus:outline-none focus:ring-2 focus:ring-[#4285F4]/25 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-slate-100 dark:placeholder:text-slate-500';

/**
 * AuthDialog — student signup / sign-in modal.
 * Validates with the same rules as the API, shows field-level errors (including
 * the server's), and stores the session in `useAuthStore` on success.
 */
export function AuthDialog(): JSX.Element {
  const open = useAuthStore((state) => state.dialogOpen);
  const mode = useAuthStore((state) => state.dialogMode);
  const openDialog = useAuthStore((state) => state.openDialog);
  const closeDialog = useAuthStore((state) => state.closeDialog);
  const setSession = useAuthStore((state) => state.setSession);
  const ids = { name: useId(), email: useId(), password: useId() };

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [trackFocus, setTrackFocus] = useState<TrackId>('NEET_PG');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [busy, setBusy] = useState(false);

  /* Reset transient state each time the dialog opens or the mode flips. */
  useEffect(() => {
    if (open) {
      setErrors({});
      setPassword('');
    }
  }, [open, mode]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation();
        closeDialog();
      }
    };
    window.addEventListener('keydown', onKeyDown, { capture: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true });
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeDialog]);

  const isSignup = mode === 'signup';

  const onSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (busy) return;
    setErrors({});

    const parsed = isSignup
      ? signupFormSchema.safeParse({ displayName, email, password, trackFocus })
      : loginFormSchema.safeParse({ email, password });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if ((key === 'displayName' || key === 'email' || key === 'password') && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setBusy(true);
    try {
      const session = isSignup
        ? await signup(parsed.data as Parameters<typeof signup>[0])
        : await login(parsed.data as Parameters<typeof login>[0]);
      setSession(session);
      setDisplayName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      if (error instanceof ApiError) {
        setErrors({
          form:
            error.status === 0 || error.code === 'TIMEOUT'
              ? 'Could not reach the server. Check your connection and try again.'
              : error.message,
        });
      } else {
        setErrors({ form: 'Something went wrong. Please try again.' });
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[8vh] sm:px-4 sm:pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm dark:bg-black/50"
            onClick={closeDialog}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={isSignup ? 'Create your account' : 'Sign in'}
            initial={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 24 })}
            className="glass-capsule relative w-full max-w-md rounded-3xl p-6 sm:p-7"
          >
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-900/[0.06] hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {isSignup ? 'Create your student account' : 'Welcome back'}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {isSignup
                ? 'Save your progress and pick up where you left off.'
                : 'Sign in to continue your revision.'}
            </p>

            <form onSubmit={(event) => void onSubmit(event)} noValidate className="mt-5 space-y-4">
              {isSignup ? (
                <div>
                  <label htmlFor={ids.name} className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">
                    Full name
                  </label>
                  <input
                    id={ids.name}
                    className={inputClass}
                    value={displayName}
                    onChange={(event) => setDisplayName(event.target.value)}
                    autoComplete="name"
                    maxLength={80}
                    placeholder="Dr. Asha Rao"
                    aria-invalid={errors.displayName ? true : undefined}
                  />
                  {errors.displayName ? <p className="mt-1 text-xs text-rose-500">{errors.displayName}</p> : null}
                </div>
              ) : null}

              <div>
                <label htmlFor={ids.email} className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">
                  Email
                </label>
                <input
                  id={ids.email}
                  type="email"
                  className={inputClass}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  maxLength={254}
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? true : undefined}
                />
                {errors.email ? <p className="mt-1 text-xs text-rose-500">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor={ids.password} className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">
                  Password
                </label>
                <input
                  id={ids.password}
                  type="password"
                  className={inputClass}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete={isSignup ? 'new-password' : 'current-password'}
                  maxLength={128}
                  placeholder={isSignup ? 'At least 8 characters, with a number' : 'Your password'}
                  aria-invalid={errors.password ? true : undefined}
                />
                {errors.password ? <p className="mt-1 text-xs text-rose-500">{errors.password}</p> : null}
              </div>

              {isSignup ? (
                <fieldset>
                  <legend className="mb-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">I am preparing for</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {TRACK_IDS.map((track) => (
                      <button
                        key={track}
                        type="button"
                        onClick={() => setTrackFocus(track)}
                        aria-pressed={trackFocus === track}
                        className={cn(
                          'rounded-xl border px-3 py-2 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/40',
                          trackFocus === track
                            ? 'border-[#4285F4]/60 bg-[#4285F4]/10 text-slate-900 dark:text-white'
                            : 'border-slate-200/90 bg-white/60 text-slate-600 hover:border-slate-300 dark:border-white/[0.12] dark:bg-white/[0.05] dark:text-slate-300',
                        )}
                      >
                        <span className="block text-sm font-semibold">{TRACK_LABELS[track].title}</span>
                        <span className="block text-[11px] leading-snug opacity-70">{TRACK_LABELS[track].hint}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {errors.form ? (
                <p role="alert" className="rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-300">
                  {errors.form}
                </p>
              ) : null}

              <button type="submit" disabled={busy} className="action-primary h-11 w-full justify-center text-sm disabled:opacity-70">
                {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
                {isSignup ? 'Create account' : 'Sign in'}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
              {isSignup ? 'Already have an account?' : 'New here?'}{' '}
              <button
                type="button"
                onClick={() => openDialog(isSignup ? 'login' : 'signup')}
                className="font-medium text-[#4285F4] hover:underline focus-visible:outline-none focus-visible:underline"
              >
                {isSignup ? 'Sign in' : 'Create an account'}
              </button>
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default AuthDialog;
