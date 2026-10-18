import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import { cn } from '@/lib/utils';

/**
 * StudioMarkdown
 * ---------------------------------------------------------------------------
 * Glass-styled GFM renderer for live studio answers. Comparison tables get the
 * frosted shell used across the card, bold clinical keywords stay crisp, and
 * blockquotes read as clinical statements (used by auto-generated MCQs).
 * Raw HTML is intentionally left un-parsed — model output only ever renders
 * as safe markdown nodes.
 */

const MARKDOWN_COMPONENTS: Components = {
  h1: ({ children }) => <Heading level={1}>{children}</Heading>,
  h2: ({ children }) => <Heading level={2}>{children}</Heading>,
  h3: ({ children }) => <Heading level={3}>{children}</Heading>,
  h4: ({ children }) => <Heading level={4}>{children}</Heading>,
  h5: ({ children }) => <Heading level={4}>{children}</Heading>,
  h6: ({ children }) => <Heading level={4}>{children}</Heading>,
  p: ({ children }) => (
    <p className="my-2 text-[13px] leading-relaxed text-slate-600 first:mt-0 last:mb-0 [li_&]:my-0 dark:text-slate-300">
      {children}
    </p>
  ),
  strong: ({ children }) => <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => <ul className="my-2 list-disc space-y-1.5 pl-5 marker:text-blue-500 dark:marker:text-[#8AB4F8]">{children}</ul>,
  ol: ({ children }) => (
    <ol className="my-2 list-decimal space-y-1.5 pl-5 marker:font-semibold marker:text-[#1A73E8] dark:marker:text-[#8AB4F8]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 [&>ol]:my-1.5 [&>p]:my-0 [&>ul]:my-1.5">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-2.5 rounded-r-xl border-l-2 border-indigo-400/70 bg-indigo-500/[0.06] px-3 py-2 text-[12.5px] text-slate-600 dark:bg-indigo-400/[0.08] dark:text-slate-300 [&>p]:my-0 [&>p]:italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-4 border-slate-200/70 dark:border-white/10" />,
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[#1A73E8] underline-offset-2 hover:underline dark:text-[#8AB4F8]"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded-md bg-slate-900/[0.06] px-1.5 py-0.5 font-mono text-[11.5px] text-slate-700 dark:bg-white/10 dark:text-slate-200">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-2 overflow-x-auto rounded-xl border border-slate-200/70 bg-white/60 p-3 text-[11.5px] leading-relaxed dark:border-white/10 dark:bg-white/[0.04]">
      {children}
    </pre>
  ),
  /* ─── Signature comparison-table shell ──────────────────────────────────── */
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-xl border border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-white/[0.03]">
      <table className="w-full min-w-[520px] border-collapse text-left text-[12.5px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-slate-50/70 dark:bg-white/[0.04]">{children}</thead>,
  tr: ({ children }) => (
    <tr className="border-b border-slate-200/80 last:border-b-0 dark:border-white/10">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="whitespace-nowrap px-3 py-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2.5 align-top leading-relaxed text-slate-600 first:font-semibold first:text-slate-700 dark:text-slate-300 dark:first:text-slate-100 [&[align=center]]:text-center">
      {children}
    </td>
  ),
};

function Heading({ level, children }: { level: 1 | 2 | 3 | 4; children?: React.ReactNode }): JSX.Element {
  return (
    <div className={cn('flex items-center gap-2', level === 1 ? 'mb-2 mt-4 first:mt-0' : 'mb-1.5 mt-3.5 first:mt-0')}>
      <span aria-hidden="true" className="h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
      <h3
        className={cn(
          'font-semibold tracking-tight text-slate-800 dark:text-slate-100',
          level === 1 ? 'text-sm' : level === 2 ? 'text-[13.5px]' : 'text-[13px]',
        )}
      >
        {children}
      </h3>
    </div>
  );
}

export function StudioMarkdown({ markdown, className }: { markdown: string; className?: string }): JSX.Element {
  return (
    <div className={cn('text-slate-600 dark:text-slate-300', className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN_COMPONENTS}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default StudioMarkdown;
