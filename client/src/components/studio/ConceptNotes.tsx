import { Bookmark, BookmarkCheck, Sparkles } from 'lucide-react';
import { useRecallStore } from '@/store/useRecallStore';
import { cn } from '@/lib/utils';
import type { StudioModule, StudioNoteSection, StudioNoteTable, StudioTrackTheme } from '@/data/revisionStudio';

interface ConceptNotesProps {
  module: StudioModule;
  theme: StudioTrackTheme;
}

function FlowSteps({ steps, theme }: { steps: readonly string[]; theme: StudioTrackTheme }): JSX.Element {
  return (
    <ol className="relative mt-3 space-y-2 pl-1">
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-[10px] top-3 w-px bg-gradient-to-b from-slate-900/15 via-slate-900/10 to-transparent dark:from-white/20 dark:via-white/10"
      />
      {steps.map((step, index) => {
        const [lead, ...rest] = step.split(' · ');
        return (
          <li key={`${index}-${lead}`} className="relative flex items-start gap-2.5">
            <span
              className={cn(
                'relative z-10 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[9px] font-bold text-white shadow-sm',
                theme.gradient,
              )}
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <span className="pt-0.5 text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-100">{lead}</span>
              {rest.length > 0 ? <span className="text-slate-500 dark:text-slate-400"> · {rest.join(' · ')}</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function ComparisonTable({ table }: { table: StudioNoteTable }): JSX.Element {
  return (
    <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-900/[0.07] bg-white/45 dark:border-white/[0.08] dark:bg-white/[0.03]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-slate-900/[0.035] dark:bg-white/[0.05]">
            {table.head.map((cell) => (
              <th
                key={cell}
                scope="col"
                className="whitespace-nowrap px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={`${rowIndex}-${row[0] ?? ''}`}
              className="border-t border-slate-900/[0.05] transition-colors hover:bg-slate-900/[0.02] dark:border-white/[0.05] dark:hover:bg-white/[0.02]"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${rowIndex}-${cellIndex}`}
                  className={cn(
                    'align-top px-3 py-2 text-[11px] leading-relaxed',
                    cellIndex === 0
                      ? 'whitespace-nowrap font-semibold text-slate-800 dark:text-slate-100'
                      : 'text-slate-600 dark:text-slate-300',
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GoldenRule({
  text,
  module,
  onClick,
  saved,
}: {
  text: string;
  module: StudioModule;
  onClick: () => void;
  saved: boolean;
}): JSX.Element {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-50/80 via-white/60 to-orange-50/40 px-3 py-2.5 dark:border-amber-400/20 dark:from-amber-400/[0.09] dark:via-white/[0.03] dark:to-orange-400/[0.05]">
      <div className="flex items-start gap-2.5">
        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" strokeWidth={1.8} aria-hidden="true" />
        <p className="flex-1 text-[11.5px] font-medium leading-relaxed text-amber-950 dark:text-amber-100">{text}</p>
        <button
          type="button"
          onClick={onClick}
          aria-pressed={saved}
          aria-label={saved ? `Remove pearl from Quick Recall: ${module.title} — ${text}` : `Save pearl to Quick Recall: ${module.title} — ${text}`}
          className={cn(
            'inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-[9.5px] font-semibold transition-all duration-150',
            saved
              ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/15 dark:border-emerald-400/25 dark:text-emerald-300'
              : 'border-amber-500/25 bg-white/70 text-amber-800 hover:border-amber-500/40 hover:bg-white dark:border-amber-400/20 dark:bg-white/[0.06] dark:text-amber-200 dark:hover:bg-white/[0.10]',
          )}
        >
          {saved ? <BookmarkCheck className="h-3 w-3" strokeWidth={2} aria-hidden="true" /> : <Bookmark className="h-3 w-3" strokeWidth={2} aria-hidden="true" />}
          <span>{saved ? 'Saved to ⌘K' : 'Save Pearl to ⌘K'}</span>
        </button>
      </div>
    </div>
  );
}

function NoteSection({
  section,
  index,
  theme,
  module,
}: {
  section: StudioNoteSection;
  index: number;
  theme: StudioTrackTheme;
  module: StudioModule;
}): JSX.Element {
  const pearls = useRecallStore((state) => state.pearls);
  const savePearl = useRecallStore((state) => state.savePearl);
  const removePearl = useRecallStore((state) => state.removePearl);

  return (
    <section className="border-t border-slate-900/[0.06] pt-4 first:border-t-0 first:pt-0 dark:border-white/[0.06]">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            'grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[9.5px] font-bold text-white shadow-sm',
            theme.gradient,
          )}
          aria-hidden="true"
        >
          {index + 1}
        </span>
        <h3 className="text-[13px] font-semibold tracking-tight text-slate-900 dark:text-white">{section.heading}</h3>
      </div>

      {section.intro ? (
        <p className="mt-2 text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">{section.intro}</p>
      ) : null}

      {section.flow ? <FlowSteps steps={section.flow} theme={theme} /> : null}

      {section.bullets ? (
        <ul className="mt-2.5 space-y-1.5">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              <span className={cn('mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full', theme.dot)} aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.table ? <ComparisonTable table={section.table} /> : null}

      {section.trap ? (
        <div className="mt-3 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-50/80 via-white/50 to-amber-50/50 px-3 py-2.5 dark:border-rose-400/20 dark:from-rose-400/[0.08] dark:via-white/[0.02] dark:to-amber-400/[0.05]">
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-rose-600 dark:text-rose-300">
            <span aria-hidden="true">🎯</span> {section.trap.title}
          </p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-rose-950/90 dark:text-rose-100/90">{section.trap.body}</p>
        </div>
      ) : null}

      {section.pearls ? (
        <div className="mt-2.5 space-y-1.5">
          {section.pearls.map((pearl) => {
            const saved = pearls.find((entry) => entry.text === pearl) ?? null;
            return (
              <GoldenRule
                key={pearl}
                text={pearl}
                module={module}
                saved={saved !== null}
                onClick={() => {
                  if (saved) {
                    removePearl(saved.id);
                    return;
                  }
                  savePearl({
                    text: pearl,
                    query: `${module.title} — revision pearl`,
                    track: module.track,
                    sourceTag: `${module.sourceTag} · Revision Studio`,
                  });
                }}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

/**
 * Pane B, tab 1 — Visual Concept Notes.
 * Causal flows, comparison tables, examiner traps, and golden rules that can
 * be filed straight into the ⌘K vault without leaving the module.
 */
export function ConceptNotes({ module, theme }: ConceptNotesProps): JSX.Element {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
          <Sparkles className={cn('h-3 w-3', theme.text)} strokeWidth={2} aria-hidden="true" />
          Mechanism-first notes · every golden rule saves to ⌘K
        </p>
        <span className="rounded-full border border-slate-900/[0.06] bg-white/60 px-2 py-0.5 text-[9.5px] font-medium text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400">
          {module.notes.length} concept blocks
        </span>
      </div>

      {module.notes.map((section, index) => (
        <NoteSection key={section.id} section={section} index={index} theme={theme} module={module} />
      ))}
    </div>
  );
}
