import multer from 'multer';
import { Router } from 'express';
import type { Request, RequestHandler, Response } from 'express';
import { env } from '../config/env.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { validate, validated, type ValidationTargets } from '../middleware/validate.js';
import { HttpError } from '../utils/httpError.js';
import { obgynAiService, obgynAssistRequestSchema, type BufferedUpload, type ObgynAssistAnswer } from '../services/obgynAi.service.js';
import type { SuccessEnvelope } from '../modules/tracks/tracks.schema.js';

type ObgynAiTargets = ValidationTargets & { body: typeof obgynAssistRequestSchema };

const envelope = <TData>(requestId: string, data: TData): SuccessEnvelope<TData> => ({ success: true, requestId, data });

const ACCEPTED_UPLOAD_RE = /\.(pdf|txt)$/i;
const MEGABYTE = 1024 * 1024;

/**
 * In-memory upload handling: the PDF/TXT bytes never touch disk — they flow
 * straight from multer's buffer into the extraction pipeline.
 */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: env.AI_UPLOAD_MAX_BYTES, files: 1, fields: 12 },
  fileFilter: (_req, file, callback) => {
    if (ACCEPTED_UPLOAD_RE.test(file.originalname)) {
      callback(null, true);
      return;
    }
    callback(new HttpError('VALIDATION_ERROR', `Unsupported file "${file.originalname}" — upload a .pdf or .txt file.`, { status: 415 }));
  },
});

/** Runs multer for multipart bodies only; JSON requests pass straight through. */
const acceptAttachment: RequestHandler = (req, res, next) => {
  if (!req.is('multipart/form-data')) {
    next();
    return;
  }

  upload.single('file')(req, res, (error: unknown) => {
    if (!error) {
      next();
      return;
    }

    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        next(
          new HttpError('VALIDATION_ERROR', `Attachment exceeds the ${Math.round(env.AI_UPLOAD_MAX_BYTES / MEGABYTE)} MB upload limit.`, {
            status: 413,
          }),
        );
        return;
      }
      next(new HttpError('VALIDATION_ERROR', `Upload rejected: ${error.message}`));
      return;
    }

    next(error);
  });
};

/** A file-carrying request without words still means "summarize this". */
const normaliseFields: RequestHandler = (req, _res, next) => {
  if (req.file) {
    const prompt = typeof req.body?.prompt === 'string' ? req.body.prompt.trim() : '';
    if (prompt.length === 0) req.body.prompt = 'Summarize the attached document.';
  }
  next();
};

/**
 * OBGYN AI Studio controller — powers the landing-page <ObgynAiStudioCard />.
 *
 *   POST /api/v1/ai/obgyn-assist          multipart (pdf/txt + fields) or JSON
 *   GET  /api/v1/ai/obgyn-assist/status   engine + vault capabilities
 *
 * The provider chain (OmniRoute → Gemini → OpenRouter → Groq → Pollinations →
 * curated clinical vault) is orchestrated inside `obgynAiService`; this layer owns transport concerns
 * only: upload limits, request normalisation, schema validation and the success
 * envelope shared by every endpoint in the API.
 */
export const createObgynAiRouter = (aiLimiter: RequestHandler): Router => {
  const router = Router();

  router.post(
    '/obgyn-assist',
    aiLimiter,
    acceptAttachment,
    normaliseFields,
    validate({ body: obgynAssistRequestSchema }),
    asyncHandler(async (req: Request, res: Response) => {
      const { body } = validated<ObgynAiTargets>(req);
      const file = req.file;

      const upload: BufferedUpload | null = file
        ? { name: file.originalname, bytes: file.size, mediaType: file.mimetype, buffer: file.buffer }
        : null;

      const data = await obgynAiService.assist(body, upload, req.requestId);
      res.status(200).json(envelope(req.requestId, data satisfies ObgynAssistAnswer));
    }),
  );

  router.get(
    '/obgyn-assist/status',
    asyncHandler(async (req: Request, res: Response) => {
      res.status(200).json(envelope(req.requestId, obgynAiService.capabilities()));
    }),
  );

  return router;
};

export default createObgynAiRouter;
