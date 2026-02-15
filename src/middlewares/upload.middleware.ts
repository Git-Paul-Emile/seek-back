/**
 * Middleware Multer pour l'upload d'images
 * Gère l'upload de la photo de couverture et des photos supplémentaires
 */

import multer from 'multer';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import { AppError } from '../utils/AppError.js';

// Taille maximale en bytes (5 MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Formats autorisés
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Résolution minimale pour la cover
const MIN_COVER_RESOLUTION = { width: 1200, height: 800 };

/**
 * Configuration du stockage en mémoire
 * Les fichiers seront traités par le service d'images ensuite
 * Utilise memoryStorage pour avoir accès au buffer directement
 */
const storage = multer.memoryStorage();

/**
 * Filtre les fichiers par type MIME et extension
 */
const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
): void => {
  const ext = path.extname(file.originalname).toLowerCase();
  
  // Vérifier le type MIME
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'Type de fichier non autorisé'));
  }
  
  // Vérifier l'extension
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'Extension non autorisée'));
  }
  
  cb(null, true);
};

/**
 * Configuration Multer pour l'upload de la photo de couverture
 */
export const uploadCover = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 1
  }
}).single('cover');

/**
 * Configuration Multer pour l'upload des photos supplémentaires
 */
export const uploadImages = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 10 // Maximum 10 images supplémentaires
  }
}).array('images', 10);

/**
 * Configuration Multer pour l'upload combiné (cover + images)
 */
export const uploadBienImages = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 11 // 1 cover + 10 images max
  }
}).fields([
  { name: 'cover', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]);

// Middleware de debug pour voir ce qui est reçu
export const debugUpload = (req: Request, _res: Response, next: NextFunction) => {
  console.log('[Debug] req.body:', req.body);
  console.log('[Debug] req.files:', req.files);
  next();
};

/**
 * Middleware combiné pour gérer les erreurs d'upload
 */
export const handleUploadErrors = (err: Error, _req: Request, _res: Response, next: NextFunction) => {
  if (err instanceof multer.MulterError) {
    // Erreurs spécifiques à Multer
    switch (err.code) {
      case 'LIMIT_FILE_SIZE':
        return next(new AppError('Fichier trop volumineux. Maximum: 5 MB', 400));
      case 'LIMIT_FILE_COUNT':
        return next(new AppError('Trop de fichiers. Maximum: 1 cover + 10 images', 400));
      case 'LIMIT_UNEXPECTED_FILE':
        return next(new AppError('Champ de fichier inattendu ou format non autorisé', 400));
      default:
        return next(new AppError(`Erreur d'upload: ${err.message}`, 400));
    }
  }
  
  if (err instanceof AppError) {
    return next(err);
  }
  
  next(err);
};

/**
 * Interface pour les fichiers uploadés
 */
export interface UploadedFiles {
  cover?: Express.Multer.File[];
  images?: Express.Multer.File[];
}

export {
  ALLOWED_MIME_TYPES,
  ALLOWED_EXTENSIONS,
  MAX_FILE_SIZE,
  MIN_COVER_RESOLUTION
};

export default {
  uploadCover,
  uploadImages,
  uploadBienImages,
  handleUploadErrors
};