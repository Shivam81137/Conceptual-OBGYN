import { connectDatabase, disconnectDatabase, getDatabaseStatus } from '../config/database.js';
import { CLINICAL_CASE_SEEDS, FLASHCARD_SEEDS, REVISION_MODULE_SEEDS, TRACK_BLUEPRINTS } from '../data/seed-data.js';
import { ClinicalCaseModel } from '../models/ClinicalCase.js';
import { FlashcardModel } from '../models/Flashcard.js';
import { RevisionModuleModel } from '../models/RevisionModule.js';
import { UserModel, hashPassword } from '../models/User.js';
import { TRACK_IDS } from '../modules/tracks/tracks.schema.js';
import { logger } from '../utils/logger.js';

/**
 * `npm run seed`
 * Idempotent corpus loader: upserts the editorial blueprints, revision modules,
 * clinical cases, flashcards and one demo student account. Safe to re-run.
 */
const seed = async (): Promise<void> => {
  const status = await connectDatabase();

  if (!status.ready) {
    logger.error('seed aborted — MongoDB is not reachable', { reason: status.reason ?? 'unknown' });
    logger.info('hint: `docker compose up -d mongo` then set MONGODB_URI in server/.env');
    process.exitCode = 1;
    return;
  }

  logger.info('seeding conceptual-obgyn corpus', { database: getDatabaseStatus().database });

  const moduleOps = REVISION_MODULE_SEEDS.map((module) => ({
    updateOne: {
      filter: { slug: module.slug },
      update: {
        $set: {
          ...module,
          status: 'published' as const,
          publishedAt: new Date('2026-10-16T06:00:00.000Z'),
        },
      },
      upsert: true,
    },
  }));

  /* Embedded option subdocuments are typed as a mongoose DocumentArray on the
     hydrated model, so the raw driver collection is used for this replace-based
     seed — valid at runtime, and explicitly typed rather than `any`. */
  const caseCollection = ClinicalCaseModel.collection;
  const caseResult = await caseCollection.bulkWrite(
    CLINICAL_CASE_SEEDS.map((clinicalCase) => ({
      replaceOne: {
        filter: { slug: clinicalCase.slug },
        replacement: {
          ...clinicalCase,
          options: clinicalCase.options.map((option) => ({ ...option })),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        upsert: true,
      },
    })),
  );

  const flashcardOps = FLASHCARD_SEEDS.map((card) => ({
    updateOne: {
      filter: { deck: card.deck, front: card.front },
      update: {
        $set: {
          deck: card.deck,
          track: card.track,
          front: card.front,
          back: card.back,
          pearl: card.pearl,
          tags: card.tags,
          easeFactor: card.easeFactor,
          intervalDays: card.intervalDays,
          repetitions: card.repetitions,
          lapses: card.lapses,
          dueAt: new Date(Date.now() + 60_000),
        },
      },
      upsert: true,
    },
  }));

  const [modules, flashcards] = await Promise.all([
    RevisionModuleModel.bulkWrite(moduleOps),
    FlashcardModel.bulkWrite(flashcardOps),
  ]);

  const digest = hashPassword('revision-demo-2026');
  await UserModel.updateOne(
    { email: 'demo@conceptualobgyn.app' },
    {
      $set: {
        displayName: 'Demo Aspirant',
        role: 'student',
        trackFocus: 'NEET_PG',
        passwordHash: digest.passwordHash,
        passwordSalt: digest.passwordSalt,
        preferences: { theme: 'obsidian', ambientMotion: true, reduceMotion: false, dailyGoalMinutes: 45 },
      },
    },
    { upsert: true },
  );

  const perTrack = await RevisionModuleModel.aggregate<{ _id: string; modules: number }>([
    { $match: { track: { $in: TRACK_IDS } } },
    { $group: { _id: '$track', modules: { $sum: 1 } } },
  ]);

  logger.info('seed complete', {
    modulesUpserted: modules.upsertedCount + modules.modifiedCount,
    casesUpserted: caseResult.upsertedCount + caseResult.modifiedCount,
    flashcardsUpserted: flashcards.upsertedCount + flashcards.modifiedCount,
    tracks: perTrack.map((row) => `${row._id}:${row.modules}`).join(' '),
    mockUser: 'demo@conceptualobgyn.app / revision-demo-2026',
    trackTitles: TRACK_IDS.map((track) => `${track} → ${TRACK_BLUEPRINTS[track].metrics.length} metrics`).join(' | '),
  });

  await disconnectDatabase();
};

void seed().catch((error: unknown) => {
  logger.error('seed failed', { message: error instanceof Error ? error.message : String(error) });
  process.exitCode = 1;
});
