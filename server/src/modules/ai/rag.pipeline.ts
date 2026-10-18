import { createHash } from 'node:crypto';
import { env } from '../../config/env.js';
import type { Passage, SummariseRequest, SummariseResponse } from '../tracks/tracks.schema.js';

/* ============================================================================
   Retrieval-Augmented Generation scaffolding
   ----------------------------------------------------------------------------
   A complete, dependency-free extractive pipeline that produces genuinely useful
   revision summaries today and defines the seams where a hosted LLM / vector
   database slot in tomorrow:

       passages ──chunk()──▶ passages[] ──embed()──▶ vectors (EmbeddingProvider)
                                        │
                                        └─score()─▶ MMR selection ─▶ summary +
                                                   citations + key points

   Swap `LocalHashEmbeddingProvider` for OpenAI/Azure/BGE embeddings and
   `InMemoryVectorStore` for Atlas Vector Search without touching the service
   layer — both are expressed as interfaces.
   ========================================================================== */

export interface EmbeddingProvider {
  readonly id: string;
  readonly dimensions: number;
  embed(texts: readonly string[]): Promise<number[][]>;
}

export interface VectorMatch {
  readonly passageId: string;
  readonly score: number;
}

export interface VectorStore {
  readonly kind: string;
  upsert(collection: string, entries: ReadonlyArray<{ id: string; vector: number[]; metadata: Record<string, string> }>): Promise<number>;
  query(collection: string, vector: number[], topK: number): Promise<VectorMatch[]>;
}

const STOPWORDS = new Set([
  'a','an','and','are','as','at','be','been','but','by','can','could','do','does','for','from','had','has','have','if','in','into','is','it','its','may','might','more','most','must','no','not','of','on','or','should','so','some','such','than','that','the','their','then','there','these','they','this','those','to','was','were','will','with','would','also',
]);

const NUMERIC_HIGH_YIELD = /\b\d+(?:\.\d+)?\s?(?:%|mg|g|µg|mcg|ml|mL|IU|cm|mm|weeks?|hours?|h|min|minutes?|days?)\b/gi;

export const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s%µ.-]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));

export const splitSentences = (text: string): string[] =>
  text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?;:])\s+(?=[A-Z0-9(])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 24);

const jaccard = (a: readonly string[], b: readonly string[]): number => {
  const left = new Set(a);
  const right = new Set(b);
  const intersection = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union === 0 ? 0 : intersection / union;
};

/* ------------------------------------------------- embedded chunks -------- */

export interface ScoredChunk {
  id: string;
  page: number;
  text: string;
  tokens: number;
  score: number;
  keywords: string[];
}

/** Deterministic hashing embedder: reproducible vectors for offline demos. */
export class LocalHashEmbeddingProvider implements EmbeddingProvider {
  public readonly id = 'local-hash-v1';

  public constructor(public readonly dimensions: number = env.AI_EMBEDDING_DIMENSIONS) {}

  public async embed(texts: readonly string[]): Promise<number[][]> {
    return texts.map((text) => this.embedOne(text));
  }

  private embedOne(text: string): number[] {
    const vector = new Array<number>(this.dimensions).fill(0);
    for (const token of tokenize(text)) {
      const digest = createHash('sha1').update(token).digest();
      const index = digest.readUInt32BE(0) % this.dimensions;
      const sign = digest[4] % 2 === 0 ? 1 : -1;
      vector[index] += sign;
    }
    const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
    return vector.map((value) => Number((value / norm).toFixed(6)));
  }
}

/** Cosine similarity over normalised vectors — swap for pgvector/Atlas later. */
export class InMemoryVectorStore implements VectorStore {
  public readonly kind = 'memory';

  private readonly collections = new Map<string, Map<string, number[]>>();

  public async upsert(
    collection: string,
    entries: ReadonlyArray<{ id: string; vector: number[]; metadata: Record<string, string> }>,
  ): Promise<number> {
    const bucket = this.collections.get(collection) ?? new Map<string, number[]>();
    for (const entry of entries) bucket.set(entry.id, entry.vector);
    this.collections.set(collection, bucket);
    return entries.length;
  }

  public async query(collection: string, vector: number[], topK: number): Promise<VectorMatch[]> {
    const bucket = this.collections.get(collection);
    if (!bucket) return [];

    return [...bucket.entries()]
      .map(([passageId, candidate]) => ({
        passageId,
        score: candidate.reduce((sum, value, index) => sum + value * (vector[index] ?? 0), 0),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }
}

/* ---------------------------------------------------------------- pipeline -- */

export interface PipelineDependencies {
  embeddings?: EmbeddingProvider;
  vectorStore?: VectorStore;
}

export class RagSummarizationPipeline {
  public readonly embeddings: EmbeddingProvider;
  public readonly vectorStore: VectorStore;

  public constructor(dependencies: PipelineDependencies = {}) {
    this.embeddings = dependencies.embeddings ?? new LocalHashEmbeddingProvider();
    this.vectorStore = dependencies.vectorStore ?? new InMemoryVectorStore();
  }

  /** Sentence-aware chunking with a hard token budget; page numbers survive. */
  public chunk(passages: readonly Passage[], maxTokens: number = env.AI_CHUNK_TOKENS): ScoredChunk[] {
    const chunks: ScoredChunk[] = [];

    for (const passage of passages) {
      let buffer: string[] = [];
      let tokens = 0;

      const flush = (): void => {
        if (buffer.length === 0) return;
        const text = buffer.join(' ');
        chunks.push({
          id: `${passage.id}#${chunks.length}`,
          page: passage.page,
          text,
          tokens,
          score: 0,
          keywords: [],
        });
        buffer = [];
        tokens = 0;
      };

      for (const sentence of splitSentences(passage.text)) {
        const sentenceTokens = tokenize(sentence).length;
        if (tokens + sentenceTokens > maxTokens) flush();
        buffer.push(sentence);
        tokens += sentenceTokens;
      }
      flush();
    }

    return this.score(chunks);
  }

  /** TF-IDF with domain boosts (dosages, thresholds) and keyword extraction. */
  private score(chunks: readonly ScoredChunk[]): ScoredChunk[] {
    const documentFrequency = new Map<string, number>();
    for (const chunk of chunks) {
      for (const token of new Set(tokenize(chunk.text))) {
        documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1);
      }
    }

    return chunks.map((chunk) => {
      const tokens = tokenize(chunk.text);
      const frequencies = new Map<string, number>();
      for (const token of tokens) frequencies.set(token, (frequencies.get(token) ?? 0) + 1);

      const total = tokens.length || 1;
      let score = 0;
      let keywordScores: Array<{ token: string; value: number }> = [];

      for (const [token, count] of frequencies) {
        const tf = count / total;
        const idf = Math.log(chunks.length / (1 + (documentFrequency.get(token) ?? 1))) + 1;
        const value = tf * idf;
        score += value;
        keywordScores.push({ token, value });
      }

      /* Clinical dosage/threshold sentences carry disproportionate exam value. */
      const numericHits = chunk.text.match(NUMERIC_HIGH_YIELD)?.length ?? 0;
      score += numericHits * 0.045;

      keywordScores = keywordScores.sort((a, b) => b.value - a.value).slice(0, 6);

      return {
        ...chunk,
        score: Number(score.toFixed(5)),
        keywords: keywordScores.map((entry) => entry.token),
      };
    });
  }

  /** MMR-flavoured selection: relevance minus redundancy against chosen text. */
  public select(chunks: readonly ScoredChunk[], maxSentences: number, focus?: string): ScoredChunk[] {
    const focusTokens = focus ? tokenize(focus) : [];
    const ranked = [...chunks]
      .map((chunk) => ({
        chunk,
        relevance:
          chunk.score + (focusTokens.length > 0 ? focusTokens.reduce((sum, token) => sum + (chunk.keywords.includes(token) ? 0.35 : 0), 0) : 0),
      }))
      .sort((a, b) => b.relevance - a.relevance);

    const selected: ScoredChunk[] = [];
    for (const candidate of ranked) {
      if (selected.length >= maxSentences) break;
      const redundant = selected.some((chosen) => jaccard(tokenize(chosen.text), tokenize(candidate.chunk.text)) > 0.55);
      if (!redundant) selected.push(candidate.chunk);
    }

    return selected.sort((a, b) => a.page - b.page || a.id.localeCompare(b.id));
  }

  /** Full pipeline: chunk → embed → index → select → compose. */
  public async summarise(request: SummariseRequest): Promise<SummariseResponse> {
    const chunks = this.chunk(
      request.passages.map((passage, index) => ({
        id: `p${index + 1}`,
        page: passage.page,
        text: passage.text,
        tokens: tokenize(passage.text).length,
      })),
    );

    const vectors = await this.embeddings.embed(chunks.map((chunk) => chunk.text));
    await this.vectorStore.upsert(
      `revision:${request.track}`,
      chunks.map((chunk, index) => ({
        id: chunk.id,
        vector: vectors[index] ?? new Array<number>(this.embeddings.dimensions).fill(0),
        metadata: { page: String(chunk.page), documentId: request.documentId },
      })),
    );

    const selected = this.select(chunks, request.maxSentences, request.focus);
    const summary = selected.map((chunk) => chunk.text).join(' ');
    const keyPoints = selected.slice(0, 4).map((chunk) => this.toKeyPoint(chunk));
    const meanScore = selected.reduce((sum, chunk) => sum + chunk.score, 0) / (selected.length || 1);
    const confidence = Number(Math.min(0.97, 0.35 + meanScore * 0.6).toFixed(3));

    return {
      documentId: request.documentId,
      title: request.title,
      summary,
      keyPoints: keyPoints.length > 0 ? keyPoints : [summary.slice(0, 200)],
      citations: selected.map((chunk) => ({ passageId: chunk.id, page: chunk.page })),
      confidence,
      strategy: 'extractive-tfidf',
      chunkCount: chunks.length,
      embeddingDimensions: this.embeddings.dimensions,
      generatedAtISO: new Date().toISOString(),
    };
  }

  private toKeyPoint(chunk: ScoredChunk): string {
    const firstSentence = splitSentences(chunk.text)[0] ?? chunk.text;
    const trimmed = firstSentence.length > 240 ? `${firstSentence.slice(0, 237)}…` : firstSentence;
    const keywords = chunk.keywords.slice(0, 3).join(' · ');
    return keywords.length > 0 ? `${trimmed} [${keywords}]` : trimmed;
  }

  /** Semantic search across everything already indexed for a track. */
  public async search(track: string, query: string, topK = 5): Promise<VectorMatch[]> {
    const [vector] = await this.embeddings.embed([query]);
    if (!vector) return [];
    return this.vectorStore.query(`revision:${track}`, vector, topK);
  }
}

export const ragPipeline = new RagSummarizationPipeline();
