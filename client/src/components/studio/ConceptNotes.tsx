import { useState } from 'react';
import { Bookmark, BookmarkCheck, Check, Copy, Sparkles, Terminal } from 'lucide-react';
import { useRecallStore } from '@/store/useRecallStore';
import { cn } from '@/lib/utils';
import type {
  StudioModule,
  StudioNoteCode,
  StudioNoteSection,
  StudioNoteTable,
  StudioTrackTheme,
} from '@/data/revisionStudio';

interface ConceptNotesProps {
  module: StudioModule;
  theme: StudioTrackTheme;
  /** Layer-A topic pill filter — only concept blocks mentioning it stay visible. */
  topicFilter?: string | null;
  /** Clears the topic filter from the empty state. */
  onClearTopic?: () => void;
}

const TOPIC_STOP_WORDS = new Set(['the', 'and', 'for', 'with', 'vs', 'from', 'high', 'yield']);

function sectionSearchText(section: StudioNoteSection): string {
  return [
    section.heading,
    section.intro ?? '',
    ...(section.bullets ?? []),
    ...(section.flow ?? []),
    ...(section.pearls ?? []),
    section.trap?.title ?? '',
    section.trap?.body ?? '',
    ...(section.table?.head ?? []),
    ...(section.table?.rows.flat() ?? []),
    section.code?.label ?? '',
    section.code?.source ?? '',
  ]
    .join(' ')
    .toLowerCase();
}

function sectionMatchesTopic(section: StudioNoteSection, topic: string): boolean {
  const haystack = sectionSearchText(section);
  const tokens = topic
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2 && !TOPIC_STOP_WORDS.has(token));
  if (tokens.length === 0) return true;
  return tokens.some((token) => haystack.includes(token));
}

/** Compact pill label for the notes jump bar, e.g. "SGA vs. Pathological FGR". */
function sectionJumpLabel(section: StudioNoteSection): string {
  if (/pearl|trap/i.test(section.heading)) return 'Golden rules';
  const base = section.heading.split(' — ')[0] ?? section.heading;
  const cleaned = base
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[\s&,·-]+$/, '')
    .trim();
  const words = cleaned.split(' ').slice(0, 4).join(' ');
  const label = words.length > 0 ? words : section.heading;
  return label.length > 30 ? `${label.slice(0, 28)}…` : label;
}

function noteSectionId(moduleId: string, sectionId: string): string {
  return `note-${moduleId}-${sectionId}`;
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

/** Extracted source algorithm (Mermaid commands) in a calm monospace panel. */
function CodePanel({ code }: { code: StudioNoteCode }): JSX.Element {
  const [copied, setCopied] = useState(false);

  const copy = (): void => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    void navigator.clipboard.writeText(code.source).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <figure className="mt-3 overflow-hidden rounded-2xl border border-indigo-500/20 bg-slate-950/[0.96] shadow-[0_18px_40px_-28px_rgba(79,70,229,0.55)] dark:border-indigo-400/25">
      <figcaption className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-gradient-to-r from-indigo-500/20 to-rose-500/15 px-3 py-1.5">
        <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-indigo-100">
          <Terminal className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
          {code.label}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${code.label} commands`}
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold transition-colors',
            copied
              ? 'border-emerald-400/40 bg-emerald-400/15 text-emerald-200'
              : 'border-white/15 bg-white/10 text-slate-200 hover:bg-white/20',
          )}
        >
          {copied ? <Check className="h-2.5 w-2.5" strokeWidth={2.5} aria-hidden="true" /> : <Copy className="h-2.5 w-2.5" strokeWidth={2.2} aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </figcaption>
      <pre className="overflow-x-auto px-3 py-2.5 text-[10.5px] leading-relaxed text-indigo-100/95">
        <code>{code.source}</code>
      </pre>
    </figure>
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

function TrapCard({
  trap,
  module,
}: {
  trap: { title: string; body: string };
  module: StudioModule;
}): JSX.Element {
  const pearls = useRecallStore((state) => state.pearls);
  const savePearl = useRecallStore((state) => state.savePearl);
  const removePearl = useRecallStore((state) => state.removePearl);
  const trapText = `${trap.title}: ${trap.body}`;
  const saved = pearls.find((entry) => entry.text === trapText) ?? null;

  return (
    <div className="mt-3 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-50/80 via-white/50 to-amber-50/50 px-3 py-2.5 dark:border-rose-400/20 dark:from-rose-400/[0.08] dark:via-white/[0.02] dark:to-amber-400/[0.05]">
      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-rose-600 dark:text-rose-300">
        <span aria-hidden="true">🎯</span> {trap.title}
      </p>
      <p className="mt-1 text-[11.5px] leading-relaxed text-rose-950/90 dark:text-rose-100/90">{trap.body}</p>
      <button
        type="button"
        onClick={() => {
          if (saved) {
            removePearl(saved.id);
            return;
          }
          savePearl({
            text: trapText,
            query: `${module.title} — examiner trap`,
            track: module.track,
            sourceTag: `${module.sourceTag} · Revision Studio`,
          });
        }}
        aria-pressed={saved !== null}
        aria-label={
          saved
            ? `Remove examiner trap from Quick Recall: ${module.title} — ${trap.title}`
            : `Save examiner trap to Quick Recall: ${module.title} — ${trap.title}`
        }
        className={cn(
          'mt-1.5 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold transition-colors',
          saved
            ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/25 dark:text-emerald-300'
            : 'border-rose-500/20 bg-white/65 text-rose-700 hover:bg-white dark:border-rose-400/20 dark:bg-white/[0.06] dark:text-rose-200 dark:hover:bg-white/[0.10]',
        )}
      >
        {saved ? (
          <BookmarkCheck className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
        ) : (
          <Bookmark className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
        )}
        {saved ? 'Saved to ⌘K' : 'Save trap to ⌘K'}
      </button>
    </div>
  );
}

function NoteSection({
  section,
  index,
  theme,
  module,
  domId,
}: {
  section: StudioNoteSection;
  index: number;
  theme: StudioTrackTheme;
  module: StudioModule;
  domId: string;
}): JSX.Element {
  const pearls = useRecallStore((state) => state.pearls);
  const savePearl = useRecallStore((state) => state.savePearl);
  const removePearl = useRecallStore((state) => state.removePearl);

  return (
    <section
      id={domId}
      className="scroll-mt-36 border-t border-slate-900/[0.06] pt-4 first:border-t-0 first:pt-0 dark:border-white/[0.06]"
    >
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

      {section.code ? <CodePanel code={section.code} /> : null}

      {section.trap ? <TrapCard trap={section.trap} module={module} /> : null}

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
 * A numbered jump bar anchors every concept block, while Layer-A topic pills
 * filter the list down to the blocks that mention a given topic. Causal flows,
 * comparison tables, examiner traps and golden rules can be filed straight
 * into the ⌘K vault without leaving the module.
 */
export function ConceptNotes({ module, theme, topicFilter = null, onClearTopic }: ConceptNotesProps): JSX.Element {
  const filter = topicFilter?.trim() ?? '';
  const indexed = module.notes.map((section, index) => ({ section, index }));
  const visible = filter ? indexed.filter(({ section }) => sectionMatchesTopic(section, filter)) : indexed;

  const jumpTo = (sectionId: string): void => {
    const target = document.getElementById(noteSectionId(module.id, sectionId));
    if (!target) return;
    const reduced =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
          <Sparkles className={cn('h-3 w-3', theme.text)} strokeWidth={2} aria-hidden="true" />
          Mechanism-first notes · every golden rule saves to ⌘K
        </p>
        <span className="rounded-full border border-slate-900/[0.06] bg-white/60 px-2 py-0.5 text-[9.5px] font-medium text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400">
          {filter
            ? `${visible.length} of ${module.notes.length} blocks · “${filter}”`
            : `${module.notes.length} concept blocks`}
        </span>
      </div>

      {visible.length > 0 && indexed.length > 1 ? (
        <div className="flex items-start gap-2">
          <span className="mt-1 shrink-0 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Jump
          </span>
          <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto pb-1">
            {visible.map(({ section, index }) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                aria-label={`Jump to section ${index + 1}: ${section.heading}`}
                className={cn(
                  'inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-900/[0.06] bg-white/60 px-2 py-0.5 text-[9.5px] font-medium text-slate-500 transition-colors hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400 dark:hover:text-white',
                )}
              >
                <span className={cn('grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br text-[8px] font-bold text-white', theme.gradient)}>
                  {index + 1}
                </span>
                {sectionJumpLabel(section)}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {visible.length === 0 ? (
        <div className="rounded-2xl border border-slate-900/[0.06] bg-white/50 px-4 py-6 text-center dark:border-white/[0.08] dark:bg-white/[0.03]">
          <p className="text-[11.5px] font-medium text-slate-600 dark:text-slate-300">
            No concept block mentions “{filter}”.
          </p>
          {onClearTopic ? (
            <button
              type="button"
              onClick={onClearTopic}
              className={cn(
                'mt-2 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold transition-colors',
                theme.border,
                theme.tint,
                theme.text,
              )}
            >
              Show all {module.notes.length} blocks
            </button>
          ) : null}
        </div>
      ) : (
        visible.map(({ section, index }) => (
          <NoteSection
            key={section.id}
            domId={noteSectionId(module.id, section.id)}
            section={section}
            index={index}
            theme={theme}
            module={module}
          />
        ))
      )}
    </div>
  );
}
