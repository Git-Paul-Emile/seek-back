import multer, { MulterError } from "multer";
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

// ─── Constantes ───────────────────────────────────────────────────────────────

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/jfif",
  "image/pjpeg",
];
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 Mo
const MAX_FILES = 10;

// ─── Instance Multer ──────────────────────────────────────────────────────────

const multerInstance = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_SIZE_BYTES, files: MAX_FILES },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("TYPE_INVALIDE"));
    }
  },
}).array("photos", MAX_FILES);

// ─── Middleware exporté ───────────────────────────────────────────────────────

export const uploadPhotosMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  multerInstance(req, res, (err: unknown) => {
    if (!err) return next();

    if (err instanceof MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return next(
          new AppError(
            "Photo trop volumineuse. Taille maximale : 5 Mo par photo",
            StatusCodes.BAD_REQUEST
          )
        );
      }
      if (err.code === "LIMIT_FILE_COUNT") {
        return next(
          new AppError(
            "Nombre de photos dépassé. Maximum : 10 photos",
            StatusCodes.BAD_REQUEST
          )
        );
      }
    }

    if (err instanceof Error && err.message === "TYPE_INVALIDE") {
      return next(
        new AppError(
          "Type de fichier non autorisé. Formats acceptés : JPEG, JFIF, PNG, WEBP, AVIF",
          StatusCodes.UNPROCESSABLE_ENTITY
        )
      );
    }

    return next(
      new AppError(
        "Erreur lors du traitement des photos",
        StatusCodes.INTERNAL_SERVER_ERROR
      )
    );
  });
};
