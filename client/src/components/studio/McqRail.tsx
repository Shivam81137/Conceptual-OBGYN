import { motion } from 'framer-motion';
import { ArrowUpRight, Check, RotateCcw, Target, X } from 'lucide-react';
import { navigate } from '@/lib/router';
import { useAppStore } from '@/store/useAppStore';
import { useStudioStore } from '@/store/useStudioStore';
import { cn } from '@/lib/utils';
import { studioModuleKey } from '@/data/revisionStudio';
import type { StudioMcq, StudioModule, StudioTrackTheme } from '@/data/revisionStudio';

interface McqRailProps {
  module: StudioModule;
  theme: StudioTrackTheme;
  /** `rail` is the sticky pane-C layout; `inline` sits inside an accordion. */
  variant?: 'rail' | 'inline';
}

/**
 * Pane C — rapid drill tied to the selected module.
 * Answers lock after the first tap, reveal a high-yield explanation, and hand
 * any miss to the landing AI studio through the session prefill channel.
 */
export function McqRail({ module, theme, variant = 'rail' }: McqRailProps): JSX.Element {
  const inline = variant === 'inline';
  const mcqAnswers = useStudioStore((state) => state.mcqAnswers);
  const answerMcq = useStudioStore((state) => state.answerMcq);
  const resetMcqs = useStudioStore((state) => state.resetMcqs);
  const prefillAiStudio = useAppStore((state) => state.prefillAiStudio);

  const keys = module.mcqs.map((mcq) => studioModuleKey(module.id, mcq.id));
  const answered = module.mcqs.filter((_, index) => mcqAnswers[keys[index]] !== undefined);
  const correct = module.mcqs.filter((mcq, index) => mcqAnswers[keys[index]] === mcq.answerIndex);
  const missed = module.mcqs.filter((mcq, index) => {
    const selected = mcqAnswers[keys[index]];
    return selected !== undefined && selected !== mcq.answerIndex;
  });
  const allAnswered = answered.length === module.mcqs.length;

  const askWhy = (mcq: StudioMcq, selectedIndex: number | undefined): void => {
    const chosen = selectedIndex !== undefined ? mcq.options[selectedIndex] : null;
    const prompt = `${module.title}: ${mcq.stem}${chosen ? ` I chose “${chosen}”.` : ''} Explain why “${mcq.options[mcq.answerIndex]}” is correct and unpack the trap in the other options.`;
    prefillAiStudio(prompt, module.track);
    navigate('/');
  };

  return (
    <aside
      className={cn(
        'flex flex-col overflow-hidden',
        inline
          ? 'rounded-2xl border border-slate-900/[0.06] bg-white/40 dark:border-white/[0.07] dark:bg-white/[0.03]'
          : 'glass-card rounded-[26px] xl:sticky xl:top-24 xl:max-h-[calc(100dvh-7.5rem)]',
      )}
    >
      <div className={cn('border-b border-slate-900/[0.06] dark:border-white/[0.06]', inline ? 'px-3 pb-2.5 pt-3' : 'px-4 pb-3 pt-4')}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="eyebrow text-[9.5px] tracking-[0.2em]">{inline ? 'Clinical vignettes' : 'Rapid Drill'}</p>
            <h2 className="mt-1 text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
              {inline ? `${module.mcqs.length}-Question High-Yield Drill` : '3-Question Check'}
            </h2>
          </div>
          <span className={cn('rounded-full border px-2 py-0.5 text-[9px] font-semibold', theme.border, theme.tint, theme.text)}>
            {correct.length}/{module.mcqs.length} correct
          </span>
        </div>
        <p className="mt-1 line-clamp-1 text-[10px] text-slate-400">{module.shortTitle}</p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-900/[0.07] dark:bg-white/[0.08]">
          <motion.div
            className={cn('h-full rounded-full bg-gradient-to-r', theme.gradient)}
            animate={{ width: `${(answered.length / module.mcqs.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          />
        </div>
      </div>

      <div className={cn('min-h-0 flex-1 space-y-3 px-3 py-3', inline ? '' : 'overflow-y-auto')}>
        {module.mcqs.map((mcq, questionIndex) => {
          const key = keys[questionIndex];
          const selected = mcqAnswers[key];
          const isAnswered = selected !== undefined;
          const isCorrect = selected === mcq.answerIndex;

          return (
            <div
              key={mcq.id}
              className="rounded-2xl border border-slate-900/[0.06] bg-white/55 p-3 dark:border-white/[0.07] dark:bg-white/[0.035]"
            >
              <div className="flex items-start gap-2">
                <span
                  className={cn(
                    'grid h-5 w-5 shrink-0 place-items-center rounded-full text-[9px] font-bold',
                    isAnswered
                      ? isCorrect
                        ? 'bg-emerald-500 text-white'
                        : 'bg-rose-500 text-white'
                      : cn('bg-gradient-to-br text-white', theme.gradient),
                  )}
                  aria-hidden="true"
                >
                  {isAnswered ? isCorrect ? <Check className="h-3 w-3" strokeWidth={3} /> : <X className="h-3 w-3" strokeWidth={3} /> : questionIndex + 1}
                </span>
                <p className="text-[11px] font-semibold leading-snug text-slate-800 dark:text-slate-100">{mcq.stem}</p>
              </div>

              <div className="mt-2 space-y-1">
                {mcq.options.map((option, optionIndex) => {
                  const isKey = optionIndex === mcq.answerIndex;
                  const isChosen = selected === optionIndex;
                  const letter = String.fromCharCode(65 + optionIndex);

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => answerMcq(key, optionIndex)}
                      aria-pressed={isChosen}
                      className={cn(
                        'flex w-full items-start gap-1.5 rounded-xl border px-2 py-1.5 text-left transition-all duration-150',
                        !isAnswered &&
                          'border-slate-900/[0.06] bg-white/60 hover:border-slate-300 hover:bg-white dark:border-white/[0.07] dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:bg-white/[0.07]',
                        isAnswered && isKey &&
                          'border-emerald-500/40 bg-emerald-500/[0.13] dark:border-emerald-400/40 dark:bg-emerald-400/[0.12]',
                        isAnswered && isChosen && !isKey &&
                          'border-rose-500/40 bg-rose-500/[0.13] dark:border-rose-400/40 dark:bg-rose-400/[0.12]',
                        isAnswered && !isKey && !isChosen && 'border-transparent bg-slate-900/[0.02] opacity-55 dark:bg-white/[0.02]',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-[1px] grid h-4 w-4 shrink-0 place-items-center rounded-md text-[8.5px] font-bold',
                          isAnswered && isKey
                            ? 'bg-emerald-500 text-white'
                            : isAnswered && isChosen
                              ? 'bg-rose-500 text-white'
                              : 'bg-slate-900/[0.06] text-slate-500 dark:bg-white/[0.09] dark:text-slate-300',
                        )}
                        aria-hidden="true"
                      >
                        {letter}
                      </span>
                      <span className="text-[10.5px] leading-snug text-slate-600 dark:text-slate-300">{option}</span>
                    </button>
                  );
                })}
              </div>

              {isAnswered ? (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'mt-2 rounded-xl border px-2.5 py-2',
                    isCorrect
                      ? 'border-emerald-500/20 bg-emerald-500/[0.06] dark:border-emerald-400/20 dark:bg-emerald-400/[0.05]'
                      : 'border-rose-500/20 bg-rose-500/[0.06] dark:border-rose-400/20 dark:bg-rose-400/[0.05]',
                  )}
                >
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    {isCorrect ? 'Correct · why' : 'Not quite · why'}
                  </p>
                  <p className="mt-1 text-[10px] leading-relaxed text-slate-600 dark:text-slate-300">{mcq.explanation}</p>
                  <button
                    type="button"
                    onClick={() => askWhy(mcq, selected)}
                    className={cn(
                      'mt-1.5 inline-flex items-center gap-1 text-[9.5px] font-semibold transition-opacity hover:opacity-75',
                      theme.text,
                    )}
                  >
                    Ask AI Why
                    <ArrowUpRight className="h-2.5 w-2.5" strokeWidth={2.4} aria-hidden="true" />
                  </button>
                </motion.div>
              ) : null}
            </div>
          );
        })}

        {allAnswered ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-900/[0.06] bg-white/60 px-3 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.04]"
          >
            <p className="flex items-center gap-1.5 text-[10.5px] font-semibold text-slate-800 dark:text-slate-100">
              <Target className={cn('h-3 w-3', theme.text)} strokeWidth={2.2} aria-hidden="true" />
              {missed.length === 0
                ? `Clean sweep — ${module.mcqs.length}/${module.mcqs.length}.`
                : `${missed.length} miss${missed.length > 1 ? 'es' : ''} worth unpacking.`}
            </p>
            <p className="mt-0.5 text-[9.5px] leading-relaxed text-slate-500 dark:text-slate-400">
              {missed.length === 0
                ? 'Move to the next module, or save the golden rules before you go.'
                : 'Send the misses to the AI studio for a mechanism-first explanation, pre-filled and ready to run.'}
            </p>
            {missed.length > 0 ? (
              <button
                type="button"
                onClick={() => {
                  const missPrompt = `${module.title}. I missed these rapid-drill concepts: ${missed.map((mcq) => mcq.stem).join(' | ')}. Explain the underlying mechanism and the exam trap for each.`;
                  prefillAiStudio(missPrompt, module.track);
                  navigate('/');
                }}
                className={cn(
                  'mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r px-2.5 py-1 text-[9.5px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90',
                  theme.gradient,
                )}
              >
                Ask AI to review the misses
                <ArrowUpRight className="h-2.5 w-2.5" strokeWidth={2.4} aria-hidden="true" />
              </button>
            ) : null}
          </motion.div>
        ) : null}
      </div>

      <div className="flex items-center justify-between border-t border-slate-900/[0.06] px-4 py-2 dark:border-white/[0.06]">
        <span className="text-[9px] text-slate-400">
          {module.mcqs.length - answered.length} left · local persistence
        </span>
        <button
          type="button"
          onClick={() => resetMcqs(keys)}
          className="inline-flex items-center gap-1 text-[9px] font-medium text-slate-400 transition-colors hover:text-slate-700 dark:hover:text-slate-200"
        >
          <RotateCcw className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
          Reset drill
        </button>
      </div>
    </aside>
  );
}
