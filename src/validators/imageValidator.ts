/**
 * Validateur pour les images de biens immobiliers
 * Utilisé pour valider les règles métier côté API
 */

import { z } from 'zod';

// Constantes de validation
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

/**
 * Schéma de validation pour une image uploadée
 */
export const imageSchema = z.object({
  fieldname: z.string(),
  originalname: z.string(),
  encoding: z.string(),
  mimetype: z.enum(ALLOWED_MIME_TYPES),
  size: z.number()
    .max(MAX_FILE_SIZE, `Taille maximale dépassée. Maximum: ${MAX_FILE_SIZE / (1024 * 1024)} MB`),
  destination: z.string(),
  filename: z.string(),
  path: z.string()
});

/**
 * Schéma de validation pour la photo de couverture
 */
export const coverImageSchema = imageSchema;

/**
 * Schéma de validation pour les images supplémentaires
 */
export const additionalImagesSchema = z.array(imageSchema)
  .min(3, 'Au moins 3 photos supplémentaires sont requises')
  .max(10, 'Maximum 10 photos supplémentaires autorisées');

/**
 * Schéma de validation complet pour l'upload d'images d'un bien
 */
export const bienImagesUploadSchema = z.object({
  cover: coverImageSchema,
  images: additionalImagesSchema
});

/**
 * Interface pour un fichier uploadé
 */
interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
}

/**
 * Interface pour le résultat de validation
 */
export interface ValidationResult {
  success: boolean;
  data?: {
    cover?: UploadedFile;
    images?: UploadedFile[];
  };
  errors?: {
    field: string;
    message: string;
    code: string;
  }[];
}

/**
 * Valide les fichiers uploadés pour un bien
 */
export const validateBienImages = (files: {
  cover?: UploadedFile[];
  images?: UploadedFile[];
}): ValidationResult => {
  const errors: { field: string; message: string; code: string }[] = [];

  // Vérification de la présence de la cover
  if (!files.cover || files.cover.length === 0) {
    errors.push({
      field: 'cover',
      message: 'Une photo de couverture est obligatoire',
      code: 'COVER_REQUIRED'
    });
  } else {
    const coverFile = files.cover[0];
    
    if (coverFile) {
      // Validation du type MIME
      if (!ALLOWED_MIME_TYPES.includes(coverFile.mimetype as typeof ALLOWED_MIME_TYPES[number])) {
        errors.push({
          field: 'cover',
          message: `Type de fichier non autorisé pour la couverture. Types acceptés: JPG, JPEG, PNG, WEBP`,
          code: 'COVER_FORMAT_INVALID'
        });
      }
      
      // Validation de la taille
      if (coverFile.size > MAX_FILE_SIZE) {
        errors.push({
          field: 'cover',
          message: `La photo de couverture dépasse la taille maximale de ${MAX_FILE_SIZE / (1024 * 1024)} MB`,
          code: 'COVER_SIZE_EXCEEDED'
        });
      }
    }
  }

  // Vérification des images supplémentaires
  const imagesCount = files.images?.length || 0;
  
  if (imagesCount < 3) {
    errors.push({
      field: 'images',
      message: `Au moins 3 photos supplémentaires sont requises. Actuellement: ${imagesCount}`,
      code: 'MIN_IMAGES_REQUIRED'
    });
  }
  
  if (imagesCount > 10) {
    errors.push({
      field: 'images',
      message: `Maximum 10 photos supplémentaires autorisées. Actuellement: ${imagesCount}`,
      code: 'MAX_IMAGES_EXCEEDED'
    });
  }

  // Validation individuelle des images
  if (files.images) {
    files.images.forEach((file, index) => {
      if (!ALLOWED_MIME_TYPES.includes(file.mimetype as typeof ALLOWED_MIME_TYPES[number])) {
        errors.push({
          field: `images[${index}]`,
          message: `Type de fichier non autorisé. Types acceptés: JPG, JPEG, PNG, WEBP`,
          code: 'IMAGE_FORMAT_INVALID'
        });
      }
      
      if (file.size > MAX_FILE_SIZE) {
        errors.push({
          field: `images[${index}]`,
          message: `L'image dépasse la taille maximale de ${MAX_FILE_SIZE / (1024 * 1024)} MB`,
          code: 'IMAGE_SIZE_EXCEEDED'
        });
      }
    });
  }

  // Vérification des doublons par nom de fichier
  if (files.images && files.images.length > 1) {
    const filenames = files.images.map(f => f.originalname);
    const duplicates = filenames.filter((name, index) => filenames.indexOf(name) !== index);
    
    if (duplicates.length > 0) {
      errors.push({
        field: 'images',
        message: `Des fichiers en double ont été détectés: ${duplicates.join(', ')}`,
        code: 'DUPLICATE_IMAGE'
      });
    }
  }

  return {
    success: errors.length === 0,
    data: errors.length === 0 ? {
      cover: files.cover?.[0],
      images: files.images
    } : undefined,
    errors: errors.length > 0 ? errors : undefined
  };
};

/**
 * Messages d'erreur pour l'upload d'images
 */
export const IMAGE_ERROR_MESSAGES = {
  COVER_REQUIRED: 'Une photo de couverture est obligatoire',
  COVER_FORMAT_INVALID: 'Format de photo de couverture invalide. Formats acceptés: JPG, JPEG, PNG, WEBP',
  COVER_SIZE_EXCEEDED: 'La photo de couverture dépasse la taille maximale de 5 MB',
  MIN_IMAGES_REQUIRED: 'Au moins 3 photos supplémentaires sont requises',
  MAX_IMAGES_EXCEEDED: 'Maximum 10 photos supplémentaires autorisées',
  IMAGE_FORMAT_INVALID: 'Format d\'image invalide. Formats acceptés: JPG, JPEG, PNG, WEBP',
  IMAGE_SIZE_EXCEEDED: 'L\'image dépasse la taille maximale de 5 MB',
  DUPLICATE_IMAGE: 'Cette image a déjà été uploadée'
};

export default {
  imageSchema,
  coverImageSchema,
  additionalImagesSchema,
  bienImagesUploadSchema,
  validateBienImages,
  IMAGE_ERROR_MESSAGES
};