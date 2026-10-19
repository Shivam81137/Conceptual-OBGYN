import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, DragEvent, FocusEvent, KeyboardEvent, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUp,
  ArrowUpRight,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Check,
  CheckCircle2,
  Circle,
  Copy,
  FileText,
  FileUp,
  GraduationCap,
  Library,
  Loader2,
  MessageCircle,
  Paperclip,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useRecallStore, type SavedPearl } from '@/store/useRecallStore';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { requestObgynAssist, type ObgynAssistEngine, type ObgynAssistPayload } from '@/api/obgynAssist';
import { StudioMarkdown } from '@/components/landing/StudioMarkdown';
import {
  resolveStudioAnswer,
  STUDIO_STARTER_PROMPTS,
  type AiStudioMode,
  type AnswerBlock,
  type AnswerFlashcardsBlock,
  type AnswerTableBlock,
  type AttachmentKind,
  type StudioAnswer,
  type StudioAttachment,
  type StudioQuery,
  type StudioTrack,
} from '@/data/obgynAiDemoContent';

/* ------------------------------------------------------------------ config */

interface ModeConfig {
  id: AiStudioMode;
  label: string;
  mobileLabel: string;
  icon: LucideIcon;
  placeholder: string;
  submitLabel: string;
}

const STUDIO_MODES: readonly ModeConfig[] = [
  {
    id: 'ask',
    label: 'Ask Clinical Doubt',
    mobileLabel: 'Ask',
    icon: MessageCircle,
    placeholder: 'Ask anything about Partograph, FIGO staging, MgSO4 regimen, or drop a lecture PDF...',
    submitLabel: 'Ask AI',
  },
  {
    id: 'summarize',
    label: 'Summarize PDF / Notes',
    mobileLabel: 'Summarize',
    icon: FileText,
    placeholder: 'Drop a lecture PDF or paste your notes — the studio distils the high-yield lines...',
    submitLabel: 'Summarize',
  },
  {
    id: 'flashcards',
    label: 'Generate Rapid Flashcards',
    mobileLabel: 'Flashcards',
    icon: Zap,
    placeholder: 'Name a topic — PPH, PCOD, FIGO staging — and get 5 exam-ready Q&A pearls...',
    submitLabel: 'Generate',
  },
];

const TRACK_OPTIONS: ReadonlyArray<{ id: StudioTrack; title: string; subtitle: string }> = [
  { id: 'NEET_UG', title: 'NEET UG', subtitle: 'NCERT + Core' },
  { id: 'NEET_PG', title: 'NEET PG / INI-CET', subtitle: 'Williams + Shaw + Guidelines' },
];

/** The three-beat clinical reasoning loop shown while the studio composes. */
const THINKING_STEPS = [
  'Scanning Williams Obstetrics & RCOG/FOGSI Guidelines...',
  'Cross-referencing Shaw & Dutta high-yield tables...',
  'Synthesizing High-Yield NEET Pearls...',
] as const;

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

const ATTACHMENT_BADGES: Record<AttachmentKind, { label: string; className: string }> = {
  pdf: { label: 'PDF', className: 'bg-gradient-to-br from-rose-500 to-red-600' },
  image: { label: 'IMG', className: 'bg-gradient-to-br from-sky-500 to-indigo-600' },
  text: { label: 'TXT', className: 'bg-gradient-to-br from-teal-500 to-emerald-600' },
};

/** Client mode → server mode mapping for POST /ai/obgyn-assist. */
const MODE_TO_API: Record<AiStudioMode, 'ask' | 'summarize_pdf' | 'flashcards'> = {
  ask: 'ask',
  summarize: 'summarize_pdf',
  flashcards: 'flashcards',
};

/** Live-engine badge per provider the chain can answer from. */
const ENGINE_BADGES: Record<ObgynAssistEngine, { label: string; className: string }> = {
  omniroute: {
    label: 'OmniRoute',
    className: 'border-fuchsia-400/30 bg-fuchsia-500/[0.08] text-fuchsia-600 dark:border-fuchsia-300/25 dark:bg-fuchsia-400/10 dark:text-fuchsia-300',
  },
  gemini: {
    label: 'Gemini',
    className: 'border-[#1A73E8]/25 bg-[#1A73E8]/[0.07] text-[#1A73E8] dark:border-[#8AB4F8]/25 dark:bg-[#8AB4F8]/10 dark:text-[#8AB4F8]',
  },
  openrouter: {
    label: 'OpenRouter',
    className: 'border-violet-400/30 bg-violet-500/[0.08] text-violet-600 dark:border-violet-300/25 dark:bg-violet-400/10 dark:text-violet-300',
  },
  groq: {
    label: 'Groq · GPT-OSS',
    className: 'border-amber-400/30 bg-amber-500/[0.08] text-amber-600 dark:border-amber-300/25 dark:bg-amber-400/10 dark:text-amber-300',
  },
  pollinations: {
    label: 'Open-Source AI',
    className: 'border-teal-400/30 bg-teal-500/[0.08] text-teal-600 dark:border-teal-300/25 dark:bg-teal-400/10 dark:text-teal-300',
  },
  curated: {
    label: 'Curated Vault',
    className: 'border-slate-300/60 bg-slate-500/[0.06] text-slate-500 dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-400',
  },
};

/** What the drawer is currently showing. */
type StudioResult =
  | { source: 'api'; payload: ObgynAssistPayload }
  | { source: 'local'; answer: StudioAnswer }
  | { source: 'recall'; pearl: SavedPearl };

/* ---------------------------------------------------------------- helpers */

const resolveAttachmentKind = (file: File): AttachmentKind => {
  const name = file.name.toLowerCase();
  if (file.type === 'application/pdf' || name.endsWith('.pdf')) return 'pdf';
  if (file.type.startsWith('image/') || /\.(png|jpe?g|webp)$/.test(name)) return 'image';
  return 'text';
};

const formatBytes = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const formatSavedAt = (iso: string): string => {
  const parsed = Date.parse(iso);
  if (Number.isNaN(parsed)) return 'recently';
  return new Date(parsed).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

/** Wall-clock stamp for a live answer, shown in the provenance row. */
const formatGeneratedAt = (iso: string): string => {
  const parsed = Date.parse(iso);
  if (Number.isNaN(parsed)) return 'just now';
  return new Date(parsed).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
};

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the textarea fallback */
  }
  try {
    const scratch = document.createElement('textarea');
    scratch.value = text;
    scratch.style.position = 'fixed';
    scratch.style.opacity = '0';
    document.body.appendChild(scratch);
    scratch.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(scratch);
    return copied;
  } catch {
    return false;
  }
}

const trackLabelFor = (track: StudioTrack): string =>
  track === 'NEET_UG' ? 'NEET UG · NCERT + Core' : 'NEET PG / INI-CET · Williams + Shaw';

const modeLabelFor = (mode: AiStudioMode): string =>
  STUDIO_MODES.find((entry) => entry.id === mode)?.label ?? 'Ask Clinical Doubt';

/** Attachment-only requests still need a prompt for the API. */
const buildApiPrompt = (request: StudioQuery): string => {
  if (request.query) return request.query;
  const name = request.attachment?.name;
  if (request.mode === 'flashcards') {
    return name ? `Generate rapid-fire flashcards from "${name}".` : 'Generate rapid-fire flashcards from the attached notes.';
  }
  return name ? `Summarize the attached document "${name}".` : 'Summarize the attached document.';
};

const answerToPlainText = (request: StudioQuery, answer: StudioAnswer): string => {
  const lines: string[] = [`Conceptual OBGYN · ${trackLabelFor(request.track)} · ${modeLabelFor(request.mode)}`];

  if (request.query) lines.push(`Q: ${request.query}`);
  if (request.attachment) lines.push(`Source: ${request.attachment.name}`);
  lines.push('', `🎯 High-Yield NEET Pearl: ${answer.pearl}`, '');

  for (const block of answer.blocks) {
    lines.push(`— ${block.title} —`);
    switch (block.kind) {
      case 'bullets':
        for (const item of block.items) lines.push(`• ${item}`);
        break;
      case 'steps':
        block.items.forEach((item, index) => lines.push(`${index + 1}. ${item}`));
        break;
      case 'table':
        lines.push(block.columns.join(' | '));
        for (const row of block.rows) lines.push(row.join(' | '));
        break;
      case 'flashcards':
        block.items.forEach((card, index) => lines.push(`Q${index + 1}. ${card.q}`, `A${index + 1}. ${card.a}`));
        break;
    }
    lines.push('');
  }

  lines.push(`Sources: ${answer.sources.join(' · ')}`);
  return lines.join('\n');
};

const apiPayloadToPlainText = (request: StudioQuery, payload: ObgynAssistPayload): string => {
  const lines: string[] = [`Conceptual OBGYN · ${trackLabelFor(request.track)} · ${modeLabelFor(request.mode)}`];
  if (request.query) lines.push(`Q: ${request.query}`);
  if (payload.meta.document) lines.push(`Source: ${payload.meta.document.name}`);
  lines.push('', `🎯 High-Yield Exam Pearl: ${payload.highYieldPearl}`, '', payload.answer, '');
  lines.push(`Sources: ${payload.sourceTag}`);
  if (payload.references.length > 0) {
    lines.push('References:');
    payload.references.forEach((reference) => lines.push(`• ${reference}`));
  }
  lines.push(
    '',
    'AI-generated for NEET UG / PG & INI-CET revision — verify every dose, cut-off and guideline against the current primary source before clinical use.',
  );
  const engine = ENGINE_BADGES[payload.meta.engine].label;
  lines.push(`Generated by: ${engine}${payload.meta.model ? ` (${payload.meta.model})` : ''}`);
  return lines.join('\n');
};

const recallPearlToPlainText = (pearl: SavedPearl): string => {
  const lines: string[] = [`Conceptual OBGYN · ${trackLabelFor(pearl.track)} · Quick Recall`, ''];
  if (pearl.query) lines.push(`Q: ${pearl.query}`, '');
  lines.push(`🎯 High-Yield Exam Pearl: ${pearl.text}`);
  if (pearl.sourceTag) lines.push('', `Sources: ${pearl.sourceTag}`);
  return lines.join('\n');
};

/* ------------------------------------------------------- answer rendering */

function BlockTitle({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="mb-2.5 flex items-center gap-2">
      <span aria-hidden="true" className="h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
      <h4 className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">{children}</h4>
    </div>
  );
}

function AnswerTable({ block }: { block: AnswerTableBlock }): JSX.Element {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-white/[0.03]">
      <table className="w-full min-w-[560px] border-collapse text-left text-[12.5px]">
        <thead>
          <tr className="border-b border-slate-200/80 dark:border-white/10">
            {block.columns.map((column) => (
              <th
                key={column}
                className="whitespace-nowrap px-3 py-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/60 dark:divide-white/[0.06]">
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cn(
                    'px-3 py-2.5 align-top leading-relaxed',
                    cellIndex === 0 ? 'font-semibold text-slate-700 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300',
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

function AnswerFlashcards({ block }: { block: AnswerFlashcardsBlock }): JSX.Element {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {block.items.map((card, index) => (
        <div
          key={card.q}
          className="rounded-xl border border-slate-200/80 bg-white/70 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div className="flex items-start gap-2">
            <span className="mt-0.5 grid h-5 min-w-[26px] shrink-0 place-items-center rounded-md bg-gradient-to-br from-blue-600 to-teal-500 px-1 font-mono text-[9px] font-bold text-white">
              Q{index + 1}
            </span>
            <p className="text-[12.5px] font-semibold leading-snug text-slate-800 dark:text-slate-100">{card.q}</p>
          </div>
          <div className="mt-2 flex items-start gap-2 border-t border-dashed border-slate-200/80 pt-2 dark:border-white/10">
            <span className="mt-0.5 grid h-5 min-w-[26px] shrink-0 place-items-center rounded-md bg-slate-100 px-1 font-mono text-[9px] font-bold text-slate-500 dark:bg-white/10 dark:text-slate-400">
              A{index + 1}
            </span>
            <p className="text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">{card.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnswerBlockView({ block }: { block: AnswerBlock }): JSX.Element {
  switch (block.kind) {
    case 'bullets':
      return (
        <div>
          <BlockTitle>{block.title}</BlockTitle>
          <ul className="space-y-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-teal-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'steps':
      return (
        <div>
          <BlockTitle>{block.title}</BlockTitle>
          <ol className="space-y-2.5">
            {block.items.map((item, index) => (
              <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 font-mono text-[10px] font-bold text-white">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      );
    case 'table':
      return (
        <div>
          <BlockTitle>{block.title}</BlockTitle>
          <AnswerTable block={block} />
        </div>
      );
    case 'flashcards':
      return (
        <div>
          <BlockTitle>{block.title}</BlockTitle>
          <AnswerFlashcards block={block} />
        </div>
      );
  }
}

/* ---------------------------------------------------------- thinking panel */

function ThinkingPanel({ step }: { step: number }): JSX.Element {
  return (
    <div role="status" aria-live="polite" className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <div className="flex-1 space-y-3">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
          Clinical reasoning in progress
        </p>
        {THINKING_STEPS.map((label, index) => {
          const done = index < step;
          const active = index === step;
          return (
            <motion.div
              key={label}
              initial={false}
              animate={{ opacity: done ? 0.72 : active ? 1 : 0.38 }}
              className="flex items-center gap-2.5"
            >
              {done ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={1.8} aria-hidden="true" />
              ) : active ? (
                <Loader2 className="h-4 w-4 shrink-0 animate-spin text-[#1A73E8] dark:text-[#8AB4F8]" strokeWidth={2} aria-hidden="true" />
              ) : (
                <Circle className="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600" strokeWidth={1.8} aria-hidden="true" />
              )}
              <span
                className={cn(
                  'text-[12.5px] font-medium',
                  active ? 'text-slate-700 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400',
                )}
              >
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div aria-hidden="true" className="hidden w-44 space-y-2.5 self-center sm:block">
        {[96, 84, 90, 62].map((width, index) => (
          <div
            key={width}
            className="h-2.5 animate-pulse rounded-full bg-slate-200/80 dark:bg-white/10"
            style={{ width: `${width}%`, animationDelay: `${index * 140}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- answer panel */

/** The signature emerald/indigo glass banner wrapping the 🎯 pearl. */
function PearlBanner({ text, label = 'High-Yield Exam Pearl' }: { text: string; label?: string }): JSX.Element {
  return (
    <div
      role="note"
      className="relative mt-3.5 overflow-hidden rounded-2xl border border-emerald-400/35 bg-gradient-to-br from-emerald-400/[0.14] via-teal-400/[0.08] to-indigo-500/[0.12] px-4 py-3 dark:border-emerald-300/20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400/80 via-teal-300/70 to-indigo-400/80"
      />
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="text-base leading-none">
          🎯
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            {label}
          </p>
          <p className="mt-1 text-[13px] font-medium leading-relaxed text-slate-800 dark:text-slate-100">{text}</p>
        </div>
      </div>
    </div>
  );
}

/** The 1-click deep-dive loop: 3 clickable glass pills under every answer. */
function FollowUpChips({ questions, onPick }: { questions: readonly string[]; onPick: (question: string) => void }): JSX.Element | null {
  if (questions.length === 0) return null;
  return (
    <div className="mt-4 border-t border-dashed border-slate-200/70 pt-3 dark:border-white/10">
      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
        <Sparkles className="h-3 w-3" aria-hidden="true" />
        Keep exploring
      </span>
      <div className="mt-2 flex flex-wrap gap-2">
        {questions.map((question) => (
          <motion.button
            key={question}
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={() => onPick(question)}
            className="chip-glass group inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-left text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:text-[#1A73E8] dark:text-slate-300 dark:hover:text-[#8AB4F8]"
          >
            <span className="truncate">{question}</span>
            <ArrowUpRight
              className="h-3 w-3 shrink-0 text-slate-400 transition-transform duration-150 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8]"
              strokeWidth={2}
              aria-hidden="true"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function EngineChip({ engine, model }: { engine: ObgynAssistEngine; model?: string | null }): JSX.Element {
  const badge = ENGINE_BADGES[engine];
  return (
    <span
      title={model ?? undefined}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.08em]',
        badge.className,
      )}
    >
      <Zap className="h-2.5 w-2.5" strokeWidth={2.2} aria-hidden="true" />
      {badge.label}
    </span>
  );
}

/** Real guideline / textbook citations the live engine returned alongside the answer. */
function ReferencesRow({ references }: { references: readonly string[] }): JSX.Element | null {
  if (references.length === 0) return null;
  return (
    <div className="mt-4 rounded-xl border border-slate-200/70 bg-white/50 px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.03]">
      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
        <Library className="h-3 w-3" aria-hidden="true" />
        Evidence &amp; references
      </span>
      <ul className="mt-2 space-y-1.5">
        {references.map((reference) => (
          <li
            key={reference}
            className="flex items-start gap-2 text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300"
          >
            <span
              aria-hidden="true"
              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-400"
            />
            <span>{reference}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Professional revision caveat shown under every answer. */
function ClinicalDisclaimer(): JSX.Element {
  return (
    <p className="mt-3 flex items-start gap-1.5 text-[10.5px] leading-relaxed text-slate-400 dark:text-slate-500">
      <ShieldCheck className="mt-px h-3 w-3 shrink-0 text-teal-500 dark:text-teal-400" strokeWidth={2} aria-hidden="true" />
      AI-generated for NEET UG / PG &amp; INI-CET revision. Verify every dose, cut-off and guideline against the current primary source before clinical use.
    </p>
  );
}

interface ActionBarProps {
  copied: boolean;
  saved: boolean;
  onCopy: () => void;
  onClear: () => void;
  onToggleSave: () => void;
}

function ActionBar({ copied, saved, onCopy, onClear, onToggleSave }: ActionBarProps): JSX.Element {
  return (
    <div className="flex shrink-0 flex-wrap items-center gap-2">
      <button
        type="button"
        aria-pressed={saved}
        onClick={onToggleSave}
        className={cn(
          'chip-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all duration-150',
          saved
            ? 'text-emerald-600 dark:text-emerald-400'
            : 'text-slate-600 hover:text-[#1A73E8] dark:text-slate-300 dark:hover:text-[#8AB4F8]',
        )}
      >
        {saved ? (
          <BookmarkCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
        ) : (
          <Bookmark className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        )}
        {saved ? 'Saved to Quick Recall ✓' : 'Save to Quick Recall (⌘K)'}
      </button>
      <button
        type="button"
        onClick={onCopy}
        className="chip-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition-all duration-150 hover:text-[#1A73E8] dark:text-slate-300 dark:hover:text-[#8AB4F8]"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2.2} aria-hidden="true" />
        ) : (
          <Copy className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        )}
        {copied ? 'Copied to Notes' : 'Copy to Revision Notes'}
      </button>
      <button
        type="button"
        onClick={onClear}
        className="chip-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition-all duration-150 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
      >
        <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        Clear / Ask Another
      </button>
    </div>
  );
}

interface ResultPanelProps {
  request: StudioQuery;
  result: StudioResult;
  copied: boolean;
  saved: boolean;
  onCopy: () => void;
  onClear: () => void;
  onFollowUp: (question: string) => void;
  onToggleSave: () => void;
}

function ResultPanel({ request, result, copied, saved, onCopy, onClear, onFollowUp, onToggleSave }: ResultPanelProps): JSX.Element {
  const TrackIcon = request.track === 'NEET_UG' ? GraduationCap : Stethoscope;
  const heading =
    result.source === 'recall'
      ? result.pearl.query || 'Saved pearl'
      : request.query || request.attachment?.name || 'Uploaded document';

  return (
    <div aria-live="polite">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1A73E8]/20 bg-[#1A73E8]/[0.07] px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-[#1A73E8] dark:border-[#8AB4F8]/25 dark:bg-[#8AB4F8]/10 dark:text-[#8AB4F8]">
          <TrackIcon className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
          {trackLabelFor(request.track)}
        </span>
        <span className="rounded-full border border-slate-200/80 bg-white/60 px-2.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-slate-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400">
          {result.source === 'recall' ? 'Quick Recall' : modeLabelFor(request.mode)}
        </span>
        <span className="min-w-0 flex-1 truncate text-xs text-slate-500 dark:text-slate-400">“{heading}”</span>
      </div>

      {result.source === 'api' ? (
        <>
          <PearlBanner text={result.payload.highYieldPearl} />
          <div className="mt-4 max-h-[440px] overflow-y-auto overscroll-contain pr-1">
            <StudioMarkdown markdown={result.payload.answer} />
          </div>
          <ReferencesRow references={result.payload.references} />
          <FollowUpChips questions={result.payload.followUpQuestions} onPick={onFollowUp} />

          <div className="mt-4 flex flex-col gap-3 border-t border-slate-200/70 pt-3.5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <div className="flex min-w-0 flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                <BookOpen className="h-3 w-3" aria-hidden="true" />
                Sources
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/60 px-2 py-0.5 text-[10px] text-slate-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400">
                {result.payload.sourceTag}
              </span>
              <EngineChip engine={result.payload.meta.engine} model={result.payload.meta.model} />
              <span className="rounded-full border border-slate-200/70 bg-white/60 px-2 py-0.5 font-mono text-[10px] tabular-nums text-slate-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-500">
                {(result.payload.meta.durationMs / 1000).toFixed(1)}s · {formatGeneratedAt(result.payload.meta.generatedAtISO)}
              </span>
              {result.payload.meta.document ? (
                <span className="rounded-full border border-slate-200/70 bg-white/60 px-2 py-0.5 text-[10px] text-slate-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400">
                  {result.payload.meta.document.name} · {result.payload.meta.document.characters.toLocaleString()} chars parsed
                </span>
              ) : null}
            </div>
            <ActionBar copied={copied} saved={saved} onCopy={onCopy} onClear={onClear} onToggleSave={onToggleSave} />
          </div>
        </>
      ) : result.source === 'local' ? (
        <>
          <PearlBanner text={result.answer.pearl} label="High-Yield NEET Pearl" />
          <div className="mt-4 max-h-[440px] space-y-5 overflow-y-auto overscroll-contain pr-1">
            {result.answer.blocks.map((block, index) => (
              <AnswerBlockView key={index} block={block} />
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-slate-200/70 pt-3.5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <div className="flex min-w-0 flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                <BookOpen className="h-3 w-3" aria-hidden="true" />
                Sources
              </span>
              {result.answer.sources.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-slate-200/70 bg-white/60 px-2 py-0.5 text-[10px] text-slate-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400"
                >
                  {source}
                </span>
              ))}
              <EngineChip engine="curated" />
            </div>
            <ActionBar copied={copied} saved={saved} onCopy={onCopy} onClear={onClear} onToggleSave={onToggleSave} />
          </div>
        </>
      ) : (
        <>
          <PearlBanner text={result.pearl.text} label="Saved in Quick Recall" />
          <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <span>Saved {formatSavedAt(result.pearl.savedAtISO)}</span>
            {result.pearl.sourceTag ? (
              <span className="rounded-full border border-slate-200/70 bg-white/60 px-2 py-0.5 text-[10px] text-slate-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400">
                {result.pearl.sourceTag}
              </span>
            ) : null}
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-200/70 pt-3.5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              {result.pearl.query ? (
                <button
                  type="button"
                  onClick={() => onFollowUp(result.pearl.query)}
                  className="chip-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#1A73E8] transition-colors duration-150 dark:text-[#8AB4F8]"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  Ask the full question
                </button>
              ) : null}
            </div>
            <ActionBar copied={copied} saved={saved} onCopy={onCopy} onClear={onClear} onToggleSave={onToggleSave} />
          </div>
        </>
      )}

      <ClinicalDisclaimer />
    </div>
  );
}

/* ------------------------------------------------------------------- card */

/**
 * ObgynAiStudioCard
 * ---------------------------------------------------------------------------
 * The flagship "Free OBGYN AI Assistant & PDF Summarizer" glass studio that
 * sits under the NEET UG / PG portals: an omnibox composer (mode pills,
 * drag-and-drop PDF zone, auto-expanding input), one-tap clinical starter
 * prompts, and an expandable frosted answer drawer with the 3-beat thinking
 * loader, 🎯 pearl banner, markdown comparison tables, 1-click follow-up
 * pills and Save-to-Quick-Recall.
 *
 * Answers come from POST /api/v1/ai/obgyn-assist (multipart when a PDF is
 * attached, JSON otherwise); every network failure silently degrades to the
 * deterministic on-device vault so the studio never stalls empty-handed.
 */
export function ObgynAiStudioCard({ className }: { className?: string }): JSX.Element {
  const fileInputId = useId();
  const spotlightTrack = useAppStore((state) => state.spotlightTrack);
  const spotlightNonce = useAppStore((state) => state.spotlightNonce);
  const revealPearl = useRecallStore((state) => state.revealPearl);
  const setRevealPearl = useRecallStore((state) => state.setRevealPearl);
  const savedPearls = useRecallStore((state) => state.pearls);
  const savePearl = useRecallStore((state) => state.savePearl);
  const removePearl = useRecallStore((state) => state.removePearl);
  const aiPrefill = useAppStore((state) => state.aiPrefill);
  const consumeAiPrefill = useAppStore((state) => state.consumeAiPrefill);
  const reduceMotion = usePrefersReducedMotion();

  const [mode, setMode] = useState<AiStudioMode>('ask');
  const [track, setTrack] = useState<StudioTrack>(spotlightTrack ?? 'NEET_UG');
  const [query, setQuery] = useState('');
  const [attachment, setAttachment] = useState<StudioAttachment | null>(null);
  const [attachmentText, setAttachmentText] = useState<string | null>(null);
  const [attachError, setAttachError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [composerFocused, setComposerFocused] = useState(false);
  const [summarizeHint, setSummarizeHint] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'thinking' | 'ready'>('idle');
  const [thinkingStep, setThinkingStep] = useState(0);
  const [pending, setPending] = useState<StudioQuery | null>(null);
  const [result, setResult] = useState<StudioResult | null>(null);
  const [copied, setCopied] = useState(false);

  const dragDepthRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const attachmentFileRef = useRef<File | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const runIdRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);

  const isThinking = phase === 'thinking';
  const canSubmit = (query.trim().length >= 3 || attachment !== null) && !isThinking;
  const activeMode = STUDIO_MODES.find((entry) => entry.id === mode) ?? STUDIO_MODES[0];
  const auraActive = composerFocused || isDragging || isThinking;

  /* The portal spotlight steers the studio's clinical depth (portal → AI only);
     the nonce re-announces repeat clicks on the already-spotlit portal. */
  useEffect(() => {
    if (spotlightTrack) setTrack(spotlightTrack);
  }, [spotlightTrack, spotlightNonce]);

  /* “Ask AI Why →” from the Revision Studio hands the question over here:
     fill the composer, surface the card and focus the input without auto-running. */
  useEffect(() => {
    if (!aiPrefill) return undefined;
    setMode('ask');
    setTrack(aiPrefill.track);
    setQuery(aiPrefill.query);
    const timer = window.setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      textareaRef.current?.focus({ preventScroll: true });
      consumeAiPrefill();
    }, reduceMotion ? 60 : 220);
    return () => window.clearTimeout(timer);
  }, [aiPrefill, consumeAiPrefill, reduceMotion]);

  /* A pearl handed over from the ⌘K palette expands straight into the drawer. */
  useEffect(() => {
    if (!revealPearl) return;
    setTrack(revealPearl.track);
    setPending({ query: revealPearl.query, mode: 'ask', track: revealPearl.track, attachment: null, attachmentText: null });
    setResult({ source: 'recall', pearl: revealPearl });
    setCopied(false);
    setThinkingStep(0);
    setPhase('ready');
    setRevealPearl(null);
  }, [revealPearl, setRevealPearl]);

  /* Cancel any in-flight request when the card unmounts. */
  useEffect(
    () => () => {
      runIdRef.current += 1;
      abortRef.current?.abort();
    },
    [],
  );

  /* Auto-expanding input. */
  useEffect(() => {
    const element = textareaRef.current;
    if (!element) return;
    element.style.height = 'auto';
    element.style.height = `${Math.min(element.scrollHeight, 152)}px`;
  }, [query]);

  /* The transient dropzone highlight after picking Summarize mode. */
  useEffect(() => {
    if (!summarizeHint) return undefined;
    const timer = window.setTimeout(() => setSummarizeHint(false), 2600);
    return () => window.clearTimeout(timer);
  }, [summarizeHint]);

  /* The staged clinical-thinking loop: 3 beats while the answer composes. */
  useEffect(() => {
    if (phase !== 'thinking') return undefined;
    const stepMs = reduceMotion ? 420 : 880;
    const timers: number[] = [];
    THINKING_STEPS.forEach((_, index) => {
      if (index === 0) return;
      timers.push(window.setTimeout(() => setThinkingStep(index), index * stepMs));
    });
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [phase, reduceMotion]);

  /* Nudge the drawer into view once the answer lands. */
  useEffect(() => {
    if (phase !== 'ready') return undefined;
    const timer = window.setTimeout(() => {
      drawerRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [phase, reduceMotion]);

  const executeStudio = async (request: StudioQuery, file: File | null, runId: number, signal: AbortSignal): Promise<void> => {
    const minMs = reduceMotion ? 420 : 1900;
    const startedAt = Date.now();
    const apiEligible = request.query.length > 0 || file !== null;

    let outcome: StudioResult;
    if (apiEligible) {
      try {
        const payload = await requestObgynAssist({
          prompt: buildApiPrompt(request),
          mode: MODE_TO_API[request.mode],
          track: request.track,
          file,
          signal,
        });
        outcome = { source: 'api', payload };
      } catch {
        if (runId !== runIdRef.current) return;
        /* Quiet degradation: the on-device vault answers instead. */
        outcome = { source: 'local', answer: resolveStudioAnswer(request) };
      }
    } else {
      outcome = { source: 'local', answer: resolveStudioAnswer(request) };
    }

    const remaining = minMs - (Date.now() - startedAt);
    if (remaining > 0) await new Promise((resolve) => window.setTimeout(resolve, remaining));
    if (runId !== runIdRef.current) return;

    setResult(outcome);
    setPhase('ready');
  };

  const runStudio = (
    rawQuery: string,
    options: { track?: StudioTrack; useAttachment?: boolean; mode?: AiStudioMode } = {},
  ): void => {
    const trimmed = rawQuery.trim();
    const useAttachment = options.useAttachment ?? true;
    const requestMode = options.mode ?? mode;
    const activeAttachment = useAttachment ? attachment : null;
    if (!trimmed && !activeAttachment) return;
    const activeTrack = options.track ?? track;
    if (options.track) setTrack(options.track);

    const request: StudioQuery = {
      query: trimmed,
      mode: requestMode,
      track: activeTrack,
      attachment: activeAttachment,
      attachmentText: useAttachment ? attachmentText : null,
    };

    /* Images stay on-device; PDFs and .txt notes travel to the API. */
    const file = activeAttachment && activeAttachment.kind !== 'image' ? attachmentFileRef.current : null;

    const runId = runIdRef.current + 1;
    runIdRef.current = runId;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setPending(request);
    setResult(null);
    setCopied(false);
    setThinkingStep(0);
    setPhase('thinking');

    void executeStudio(request, file, runId, controller.signal);
  };

  const acceptFiles = async (files: FileList | null): Promise<void> => {
    const file = files?.[0];
    if (!file) return;
    if (file.size > MAX_UPLOAD_BYTES) {
      setAttachError('Keep uploads under 10 MB — the studio parses in memory.');
      return;
    }
    const kind = resolveAttachmentKind(file);
    setAttachError(null);
    setAttachment({ name: file.name, sizeBytes: file.size, kind });
    attachmentFileRef.current = file;
    setAttachmentText(kind === 'text' ? await file.text().catch(() => null) : null);
  };

  const selectMode = (nextMode: AiStudioMode): void => {
    setMode(nextMode);
    if (nextMode === 'summarize' && !attachment) setSummarizeHint(true);
  };

  const resetStudio = (): void => {
    runIdRef.current += 1;
    abortRef.current?.abort();
    setPhase('idle');
    setResult(null);
    setPending(null);
    setQuery('');
    setAttachment(null);
    setAttachmentText(null);
    attachmentFileRef.current = null;
    setAttachError(null);
    setCopied(false);
    textareaRef.current?.focus();
  };

  /* The pearl currently on screen → the entry Quick Recall saves. */
  const activePearl = useMemo(() => {
    if (!result) return null;
    if (result.source === 'api') return { text: result.payload.highYieldPearl, sourceTag: result.payload.sourceTag };
    if (result.source === 'local') return { text: result.answer.pearl, sourceTag: result.answer.sources[0] ?? null };
    return { text: result.pearl.text, sourceTag: result.pearl.sourceTag };
  }, [result]);

  const savedPearl = activePearl ? savedPearls.find((pearl) => pearl.text === activePearl.text) ?? null : null;

  const toggleSavePearl = (): void => {
    if (!activePearl || !pending) return;
    if (savedPearl) {
      removePearl(savedPearl.id);
      return;
    }
    savePearl({ text: activePearl.text, query: pending.query, track: pending.track, sourceTag: activePearl.sourceTag });
  };

  const handleCopy = async (): Promise<void> => {
    if (!result || !pending) return;
    const text =
      result.source === 'api'
        ? apiPayloadToPlainText(pending, result.payload)
        : result.source === 'local'
          ? answerToPlainText(pending, result.answer)
          : recallPearlToPlainText(result.pearl);
    const copiedOk = await copyText(text);
    if (copiedOk) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  const handleComposerKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (canSubmit) runStudio(query);
    }
  };

  const handleComposerBlur = (event: FocusEvent<HTMLFormElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setComposerFocused(false);
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>): void => {
    void acceptFiles(event.target.files);
    event.target.value = '';
  };

  const handleDragEnter = (event: DragEvent<HTMLElement>): void => {
    event.preventDefault();
    dragDepthRef.current += 1;
    setIsDragging(true);
  };

  const handleDragOver = (event: DragEvent<HTMLElement>): void => {
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = (): void => {
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLElement>): void => {
    event.preventDefault();
    dragDepthRef.current = 0;
    setIsDragging(false);
    void acceptFiles(event.dataTransfer?.files ?? null);
  };

  const attachmentBadge = attachment ? ATTACHMENT_BADGES[attachment.kind] : null;

  return (
    <section
      ref={sectionRef}
      aria-label="Free OBGYN AI assistant and PDF summarizer"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn('relative', className)}
    >
      {/* ─── Ambient bioluminescent aura · brightens on focus / drag / thinking ── */}
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{ opacity: isThinking && !reduceMotion ? [0.55, 1, 0.55] : auraActive ? 1 : 0.5 }}
        transition={
          isThinking && !reduceMotion
            ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.45, ease: 'easeOut' }
        }
        className="pointer-events-none absolute -inset-2 rounded-[40px] bg-gradient-to-r from-blue-500/25 via-teal-400/25 to-indigo-500/25 blur-2xl"
      />

      {/* ─── Animated gradient hairline that wraps the glass card ─────────────── */}
      <div className="relative rounded-[34px] bg-gradient-to-r from-blue-500/20 via-teal-400/20 to-indigo-500/20 p-[1.5px]">
        <div className="relative rounded-[32px] border border-white/80 bg-white/65 p-5 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.07),inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-2xl backdrop-saturate-[190%] transition-all duration-500 md:p-6 dark:border-white/10 dark:bg-[#0F1423]/70 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.06)]">
          {/* ─── Header row ─────────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <h2 className="text-lg font-semibold tracking-tight text-slate-900 truncate dark:text-white">
                Clinical AI & PDF Recall
              </h2>
              <span className="shrink-0 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300">
                AI Studio
              </span>
            </div>

            {/* ─── Track context switcher ──────────────────────────────────────── */}
            <div
              role="tablist"
              aria-label="Clinical depth"
              className="inline-flex h-8 shrink-0 items-center gap-0.5 rounded-full bg-slate-900/5 p-0.5 border border-slate-200/60 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06]"
            >
              {TRACK_OPTIONS.map((option) => {
                const isActive = track === option.id;
                return (
                  <button
                    key={option.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setTrack(option.id)}
                    className={cn(
                      'relative rounded-full px-3 py-1 text-xs font-medium transition-colors duration-150',
                      isActive
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="aiTrackPill"
                        className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-white/[0.15]"
                        transition={{ type: 'spring', stiffness: 440, damping: 36 }}
                      />
                    ) : null}
                    <span className="relative z-10 block whitespace-nowrap text-xs font-semibold">
                      {option.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Omnibox composer ───────────────────────────────────────────────── */}
          <form
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              if (canSubmit) runStudio(query);
            }}
            onFocus={() => setComposerFocused(true)}
            onBlur={handleComposerBlur}
            className={cn(
              'relative rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,1)] focus-within:border-teal-500/50 focus-within:shadow-[0_8px_30px_-4px_rgba(13,148,136,0.12)] transition-all duration-300 px-4 py-3',
              'dark:border-white/10 dark:bg-[#0F1423]/90',
              summarizeHint && !attachment && 'border-teal-500 shadow-[0_8px_30px_-4px_rgba(13,148,136,0.12)]',
            )}
          >

            {/* Attachment preview chip · Google Drive-style frosted pill */}
            <AnimatePresence initial={false}>
              {attachment && attachmentBadge ? (
                <motion.div
                  key={attachment.name}
                  initial={reduceMotion ? false : { opacity: 0, y: -4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="mt-2.5 flex w-fit max-w-full items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/75 px-2.5 py-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <span
                    className={cn(
                      'grid h-6 w-7 shrink-0 place-items-center rounded-md font-mono text-[8px] font-bold tracking-wide text-white',
                      attachmentBadge.className,
                    )}
                  >
                    {attachmentBadge.label}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-700 dark:text-slate-200">
                    {attachment.name}
                  </span>
                  <span className="shrink-0 font-mono text-[10px] tabular-nums text-slate-400 dark:text-slate-500">
                    {formatBytes(attachment.sizeBytes)}
                  </span>
                  <button
                    type="button"
                    aria-label={`Remove ${attachment.name}`}
                    onClick={() => {
                      setAttachment(null);
                      setAttachmentText(null);
                      attachmentFileRef.current = null;
                    }}
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-slate-400 transition-colors duration-150 hover:bg-slate-900/5 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <X className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Auto-expanding question input */}
            <textarea
              ref={textareaRef}
              value={query}
              rows={1}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleComposerKeyDown}
              placeholder={activeMode.placeholder}
              aria-label={activeMode.label}
              className="mt-2.5 max-h-[152px] w-full resize-none bg-transparent px-1 text-sm leading-relaxed text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            />

            {/* Bottom action bar: attach + mode pills + submit */}
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 dark:border-white/5">
              <div className="flex min-w-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100/80 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15 dark:hover:text-white"
                >
                  <Paperclip className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                  <span>Attach</span>
                </button>

                <div className="h-4 w-[1px] bg-slate-200 mx-1 dark:bg-white/10" aria-hidden="true" />

                <div
                  role="tablist"
                  aria-label="Assistant mode"
                  className="flex items-center gap-1"
                >
                  {STUDIO_MODES.map((entry) => {
                    const isActive = mode === entry.id;
                    return (
                      <button
                        key={entry.id}
                        role="tab"
                        type="button"
                        aria-selected={isActive}
                        onClick={() => selectMode(entry.id)}
                        className={cn(
                          'rounded-full px-3 py-1 text-xs font-medium transition-all duration-150',
                          isActive
                            ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white',
                        )}
                      >
                        <span>{entry.id === 'ask' ? 'Ask' : entry.id === 'summarize' ? 'Summarize PDF' : 'Flashcards'}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-slate-900 px-4 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-slate-900 dark:hover:bg-teal-500 dark:hover:text-white"
              >
                {isThinking ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={2} aria-hidden="true" />
                ) : (
                  <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
                )}
                <span>{activeMode.submitLabel}</span>
              </button>
            </div>

            {attachError ? <p className="mt-2 text-[11px] font-medium text-rose-500">{attachError}</p> : null}
          </form>

          <input
            ref={fileInputRef}
            id={fileInputId}
            type="file"
            accept=".pdf,.txt,.png,.jpg"
            aria-label="Attach a PDF, text or image file"
            className="hidden"
            aria-hidden="true"
            tabIndex={-1}
            onChange={handleFileInput}
          />

          {/* ─── Single-row minimalist suggestion chips ──────────────────────────── */}
          <div className="mt-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {STUDIO_STARTER_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                type="button"
                onClick={() => runStudio(prompt.query, { track: prompt.track, useAttachment: false })}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/50 px-3 py-1 text-xs font-medium text-slate-500 transition-all hover:bg-white/90 hover:text-slate-900 whitespace-nowrap dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <span>{prompt.label}</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" strokeWidth={2} aria-hidden="true" />
              </button>
            ))}
          </div>

          {/* ─── Expandable glass response drawer ──────────────────────────────── */}
          <AnimatePresence initial={false}>
            {phase !== 'idle' ? (
              <motion.div
                key="studio-drawer"
                layout
                initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { height: { type: 'tween', duration: 0.42, ease: EASE_OUT_EXPO }, opacity: { duration: 0.24, ease: 'easeOut' } }
                }
                className="overflow-hidden"
              >
                <div ref={drawerRef} className="pt-5">
                  <div className="rounded-2xl border border-white/70 bg-white/55 p-4 shadow-inner backdrop-blur-xl md:p-5 dark:border-white/10 dark:bg-white/[0.04]">
                    {isThinking ? (
                      <ThinkingPanel step={thinkingStep} />
                    ) : result && pending ? (
                      <ResultPanel
                        request={pending}
                        result={result}
                        copied={copied}
                        saved={savedPearl !== null}
                        onCopy={() => void handleCopy()}
                        onClear={resetStudio}
                        onFollowUp={(question) => runStudio(question, { useAttachment: false, mode: 'ask', track: pending.track })}
                        onToggleSave={toggleSavePearl}
                      />
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* ─── Full-card dropzone overlay ────────────────────────────────────── */}
          <AnimatePresence>
            {isDragging ? (
              <motion.div
                key="studio-dropzone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="pointer-events-none absolute inset-0 z-30 grid place-items-center rounded-[32px] border-2 border-dashed border-blue-400/60 bg-blue-500/[0.08] backdrop-blur-sm"
              >
                <div className="chip-glass flex flex-col items-center gap-1.5 rounded-2xl px-6 py-4">
                  <FileUp className="h-5 w-5 text-[#1A73E8] dark:text-[#8AB4F8]" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-100">Drop to attach PDF / notes</p>
                  <p className="font-mono text-[10px] tracking-[0.08em] text-slate-400">.PDF · .TXT · .PNG · .JPG</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ObgynAiStudioCard;
