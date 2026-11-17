import type { TrackId } from '@/types/tracks';

/** Shape of a Revision Studio module and its parts (notes, flashcards, MCQs). */

export type StudioTabId = 'notes' | 'simulator' | 'flashcards';
export type FlashcardRating = 'again' | 'good' | 'easy';

export interface StudioNoteTable {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}

export interface StudioNoteCode {
  label: string;
  language?: string;
  source: string;
}

/** Bespoke inline SVG diagram rendered inside a concept block. */
export type StudioDiagramKind =
  | 'tvs-distance-cutoffs'
  | 'silver-cs-risk-chart'
  | 'figo-pas-grades'
  | 'scan-timeline-flowchart'
  | 'delivery-timing-matrix'
  | 'usg-doppler-mri-markers'
  | 'hysterectomy-vs-triple-p'
  | 'torch-serology-avidity-pcr'
  | 'torch-usg-signature-map'
  | 'toxoplasmosis-diagnosis-treatment'
  | 'syphilis-treatment-congenital-risk'
  | 'rubella-crs-risk-gradient'
  | 'cmv-avidity-amniocentesis'
  | 'hsv-perinatal-suppression'
  | 'parvovirus-vzv-timeline'
  | 'delphi-early-vs-late-fgr'
  | 'mvm-plgf-aspirin-pathway'
  | 'fgr-genetic-cmv-workup'
  | 'ua-doppler-waveforms-aedf-redf'
  | 'mca-cpr-ductus-venosus-cascade'
  | 'sogc-442-delivery-timing-matrix'
  | 'fgr-master-sheet-numbers'
  | 'fgr-bpp-loss-cascade';

export interface StudioNoteDiagram {
  kind: StudioDiagramKind;
  title: string;
  caption?: string;
  /** Optional key that labels the numbered callouts in the figure. */
  legend?: readonly string[];
}

export interface StudioNoteSection {
  id: string;
  heading: string;
  intro?: string;
  bullets?: readonly string[];
  flow?: readonly string[];
  table?: StudioNoteTable;
  /** Source algorithm (e.g. the extracted Mermaid commands) in a monospace panel. */
  code?: StudioNoteCode;
  /** Interactive/print-safe SVG clinical diagrams rendered with the section. */
  diagram?: readonly StudioNoteDiagram[];
  /** Golden rules rendered with a "Save Pearl to Vault" action. */
  pearls?: readonly string[];
  trap?: { title: string; body: string };
  /** Additional examiner traps for blocks that carry more than one. */
  traps?: readonly { title: string; body?: string }[];
}

export interface StudioFlashcard {
  id: string;
  front: string;
  back: string;
}

export interface StudioMcq {
  id: string;
  stem: string;
  options: readonly [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface StudioModule {
  id: string;
  track: TrackId;
  title: string;
  shortTitle: string;
  summary: string;
  /** One-line directory tagline — shorter and sharper than the full summary. */
  tagline?: string;
  highYield: boolean;
  weightage: string;
  durationMinutes: number;
  tags: readonly string[];
  sourceTag: string;
  updatedAtISO: string;
  notes: readonly StudioNoteSection[];
  flashcards: readonly StudioFlashcard[];
  mcqs: readonly StudioMcq[];
}

export interface StudioTrackTheme {
  slug: 'ug' | 'pg';
  label: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  /** Gradient for accent bars, active tabs and primary buttons. */
  gradient: string;
  gradientText: string;
  tint: string;
  text: string;
  border: string;
  ring: string;
  dot: string;
  /** Hex used by SVG chart strokes. */
  chart: string;
}
