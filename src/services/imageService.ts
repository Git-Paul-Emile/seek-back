/**
 * Service d'upload et d'optimisation d'images pour les biens immobiliers
 * Utilise Sharp pour le traitement des images
 */

import sharp from 'sharp';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des uploads
const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, '../../uploads');
const COVERS_DIR = path.join(UPLOAD_DIR, 'covers');
const IMAGES_DIR = path.join(UPLOAD_DIR, 'images');

// Dimensions recommandées
const COVER_DIMENSIONS = { width: 1280, height: 720 };
const IMAGE_DIMENSIONS = { width: 1024, height: 768 };

// Taille maximale en bytes (5 MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Formats autorisés
const ALLOWED_FORMATS = ['jpg', 'jpeg', 'png', 'webp'];
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

// Résolution minimale pour la cover
const MIN_COVER_RESOLUTION = { width: 1200, height: 800 };

/**
 * Interface pour les métadonnées d'image
 */
export interface ImageMetadata {
  width: number;
  height: number;
  format: string;
  size: number;
  hash: string;
}

/**
 * Interface pour le résultat d'upload
 */
export interface UploadResult {
  success: boolean;
  filename: string;
  originalName: string;
  path: string;
  url: string;
  width: number;
  height: number;
  format: string;
  size: number;
  hash: string;
  quality: 'excellente' | 'bonne' | 'moyenne' | 'faible';
  error?: string;
}

/**
 * Interface pour les erreurs d'upload
 */
export interface UploadError {
  field: string;
  message: string;
  code: string;
}

/**
 * Assure que les répertoires d'upload existent
 */
export const ensureUploadDirs = async (): Promise<void> => {
  const dirs = [UPLOAD_DIR, COVERS_DIR, IMAGES_DIR];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      await fs.promises.mkdir(dir, { recursive: true });
      console.log(`[ImageService] Répertoire créé: ${dir}`);
    }
  }
};

/**
 * Génère un hash unique pour une image (anti-doublons)
 */
export const generateImageHash = (buffer: Buffer): string => {
  return crypto.createHash('sha256').update(buffer).digest('hex');
};

/**
 * Vérifie si une image existe déjà par son hash
 */
export const checkImageExists = async (hash: string): Promise<string | null> => {
  // Cette fonction pourrait être étendue pour vérifier en base de données
  // Pour l'instant, on retourne null (pas de doublon)
  return null;
};

/**
 * Valide le type MIME d'une image
 */
export const validateMimeType = (mimeType: string): boolean => {
  return ALLOWED_MIME_TYPES.includes(mimeType);
};

/**
 * Valide la taille d'une image
 */
export const validateFileSize = (size: number): boolean => {
  return size > 0 && size <= MAX_FILE_SIZE;
};

/**
 * Obtient les métadonnées d'une image
 */
export const getImageMetadata = async (buffer: Buffer): Promise<ImageMetadata> => {
  const metadata = await sharp(buffer).metadata();
  
  if (!metadata.width || !metadata.height || !metadata.format) {
    throw new Error('Impossible de lire les métadonnées de l\'image');
  }

  return {
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    size: buffer.length,
    hash: generateImageHash(buffer)
  };
};

/**
 * Évalue la qualité d'une image
 */
export const assessImageQuality = (metadata: ImageMetadata, isCover: boolean): 'excellente' | 'bonne' | 'moyenne' | 'faible' => {
  const { width, height, size } = metadata;
  
  // Pour la cover, on exige une résolution minimale plus élevée
  const minWidth = isCover ? MIN_COVER_RESOLUTION.width : 800;
  const minHeight = isCover ? MIN_COVER_RESOLUTION.height : 600;
  
  // Calcul du ratio (proche de 16:9 = 1.78)
  const ratio = width / height;
  const isGoodRatio = ratio >= 1.5 && ratio <= 2;
  
  // Vérification de la netteté approximative (basée sur la taille par pixel)
  const pixelCount = width * height;
  const bytesPerPixel = size / pixelCount;
  const isSharp = bytesPerPixel > 0.5; // Plus de 0.5 octets par pixel suggère une bonne qualité
  
  // Scoring
  if (width >= minWidth && height >= minHeight && isGoodRatio && isSharp) {
    return 'excellente';
  } else if (width >= minWidth * 0.9 && height >= minHeight * 0.9 && isGoodRatio) {
    return 'bonne';
  } else if (width >= minWidth * 0.7 && height >= minHeight * 0.7) {
    return 'moyenne';
  } else {
    return 'faible';
  }
};

/**
 * Optimise une image pour l'affichage web
 */
export const optimizeImage = async (
  buffer: Buffer,
  options: {
    width: number;
    height: number;
    isCover?: boolean;
  }
): Promise<Buffer> => {
  const { width, height, isCover = false } = options;
  
  return await sharp(buffer)
    .resize(width, height, {
      fit: 'cover',
      position: 'center',
      withoutEnlargement: true // Ne pas agrandir les petites images
    })
    .webp({
      quality: isCover ? 90 : 85,
      effort: 6,
      lossless: false
    })
    .toBuffer();
};

/**
 * Génère un nom de fichier unique
 */
export const generateUniqueFilename = (originalName: string, hash: string): string => {
  const timestamp = Date.now();
  const randomStr = crypto.randomBytes(4).toString('hex');
  return `${timestamp}-${randomStr}-${hash.substring(0, 8)}.webp`;
};

/**
 * Traite et sauvegarde une image de couverture
 */
export const processCoverImage = async (
  buffer: Buffer,
  originalName: string
): Promise<UploadResult> => {
  try {
    // Validation du type MIME
    const imageInfo = await sharp(buffer).metadata();
    if (!imageInfo.format || !ALLOWED_FORMATS.includes(imageInfo.format)) {
      return {
        success: false,
        filename: '',
        originalName,
        path: '',
        url: '',
        width: 0,
        height: 0,
        format: '',
        size: 0,
        hash: '',
        quality: 'faible',
        error: `Format non autorisé. Formats acceptés: ${ALLOWED_FORMATS.join(', ')}`
      };
    }

    // Validation de la taille
    if (!validateFileSize(buffer.length)) {
      return {
        success: false,
        filename: '',
        originalName,
        path: '',
        url: '',
        width: 0,
        height: 0,
        format: '',
        size: 0,
        hash: '',
        quality: 'faible',
        error: `Taille maximale dépassée. Maximum: ${MAX_FILE_SIZE / (1024 * 1024)} MB`
      };
    }

    // Obtention des métadonnées
    const metadata = await getImageMetadata(buffer);
    
    // Validation de la taille maximale
    if (metadata.size > MAX_FILE_SIZE) {
      return {
        success: false,
        filename: '',
        originalName,
        path: '',
        url: '',
        width: metadata.width,
        height: metadata.height,
        format: metadata.format,
        size: metadata.size,
        hash: metadata.hash,
        quality: 'faible',
        error: `Taille maximale dépassée. Maximum: ${MAX_FILE_SIZE / (1024 * 1024)} MB`
      };
    }

    // Vérification des doublons
    const existingImage = await checkImageExists(metadata.hash);
    if (existingImage) {
      return {
        success: true,
        filename: path.basename(existingImage),
        originalName,
        path: existingImage,
        url: `/uploads/covers/${path.basename(existingImage)}`,
        width: metadata.width,
        height: metadata.height,
        format: 'webp',
        size: metadata.size,
        hash: metadata.hash,
        quality: assessImageQuality(metadata, true)
      };
    }

    // Optimisation de l'image
    const optimizedBuffer = await optimizeImage(buffer, {
      width: COVER_DIMENSIONS.width,
      height: COVER_DIMENSIONS.height,
      isCover: true
    });

    // Génération du nom de fichier
    const filename = generateUniqueFilename(originalName, metadata.hash);
    const filePath = path.join(COVERS_DIR, filename);

    // Sauvegarde
    await fs.promises.writeFile(filePath, optimizedBuffer);

    // Évaluation de la qualité
    const quality = assessImageQuality(metadata, true);

    return {
      success: true,
      filename,
      originalName,
      path: filePath,
      url: `/uploads/covers/${filename}`,
      width: COVER_DIMENSIONS.width,
      height: COVER_DIMENSIONS.height,
      format: 'webp',
      size: optimizedBuffer.length,
      hash: metadata.hash,
      quality
    };
  } catch (error) {
    console.error('[ImageService] Erreur traitement cover:', error);
    return {
      success: false,
      filename: '',
      originalName,
      path: '',
      url: '',
      width: 0,
      height: 0,
      format: '',
      size: 0,
      hash: '',
      quality: 'faible',
      error: 'Erreur lors du traitement de l\'image'
    };
  }
};

/**
 * Traite et sauvegarde une image supplémentaire
 */
export const processAdditionalImage = async (
  buffer: Buffer,
  originalName: string
): Promise<UploadResult> => {
  try {
    // Validation du type MIME
    const imageInfo = await sharp(buffer).metadata();
    if (!imageInfo.format || !ALLOWED_FORMATS.includes(imageInfo.format)) {
      return {
        success: false,
        filename: '',
        originalName,
        path: '',
        url: '',
        width: 0,
        height: 0,
        format: '',
        size: 0,
        hash: '',
        quality: 'faible',
        error: `Format non autorisé. Formats acceptés: ${ALLOWED_FORMATS.join(', ')}`
      };
    }

    // Validation de la taille
    if (!validateFileSize(buffer.length)) {
      return {
        success: false,
        filename: '',
        originalName,
        path: '',
        url: '',
        width: 0,
        height: 0,
        format: '',
        size: 0,
        hash: '',
        quality: 'faible',
        error: `Taille maximale dépassée. Maximum: ${MAX_FILE_SIZE / (1024 * 1024)} MB`
      };
    }

    // Obtention des métadonnées
    const metadata = await getImageMetadata(buffer);

    // Vérification des doublons
    const existingImage = await checkImageExists(metadata.hash);
    if (existingImage) {
      return {
        success: true,
        filename: path.basename(existingImage),
        originalName,
        path: existingImage,
        url: `/uploads/images/${path.basename(existingImage)}`,
        width: metadata.width,
        height: metadata.height,
        format: 'webp',
        size: metadata.size,
        hash: metadata.hash,
        quality: assessImageQuality(metadata, false)
      };
    }

    // Optimisation de l'image
    const optimizedBuffer = await optimizeImage(buffer, {
      width: IMAGE_DIMENSIONS.width,
      height: IMAGE_DIMENSIONS.height,
      isCover: false
    });

    // Génération du nom de fichier
    const filename = generateUniqueFilename(originalName, metadata.hash);
    const filePath = path.join(IMAGES_DIR, filename);

    // Sauvegarde
    await fs.promises.writeFile(filePath, optimizedBuffer);

    // Évaluation de la qualité
    const quality = assessImageQuality(metadata, false);

    return {
      success: true,
      filename,
      originalName,
      path: filePath,
      url: `/uploads/images/${filename}`,
      width: IMAGE_DIMENSIONS.width,
      height: IMAGE_DIMENSIONS.height,
      format: 'webp',
      size: optimizedBuffer.length,
      hash: metadata.hash,
      quality
    };
  } catch (error) {
    console.error('[ImageService] Erreur traitement image:', error);
    return {
      success: false,
      filename: '',
      originalName,
      path: '',
      url: '',
      width: 0,
      height: 0,
      format: '',
      size: 0,
      hash: '',
      quality: 'faible',
      error: 'Erreur lors du traitement de l\'image'
    };
  }
};

/**
 * Supprime une image du système de fichiers
 */
export const deleteImage = async (imagePath: string): Promise<boolean> => {
  try {
    if (fs.existsSync(imagePath)) {
      await fs.promises.unlink(imagePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error('[ImageService] Erreur suppression image:', error);
    return false;
  }
};

/**
 * Valide un ensemble d'images pour un bien
 */
export const validateImageSet = (
  coverResult: UploadResult | null,
  additionalResults: UploadResult[]
): { valid: boolean; errors: UploadError[] } => {
  const errors: UploadError[] = [];

  // Vérification de la présence d'une cover
  if (!coverResult || !coverResult.success) {
    errors.push({
      field: 'cover',
      message: 'Une photo de couverture est obligatoire',
      code: 'COVER_REQUIRED'
    });
  }

  // Vérification du nombre d'images supplémentaires
  const successAdditional = additionalResults.filter(r => r.success);
  if (successAdditional.length < 3) {
    errors.push({
      field: 'images',
      message: `Au moins 3 photos supplémentaires sont requises. Actuellement: ${successAdditional.length}`,
      code: 'MIN_IMAGES_REQUIRED'
    });
  }

  if (successAdditional.length > 10) {
    errors.push({
      field: 'images',
      message: `Maximum 10 photos supplémentaires autorisées. Actuellement: ${successAdditional.length}`,
      code: 'MAX_IMAGES_EXCEEDED'
    });
  }

  // Collecte des erreurs individuelles
  if (coverResult && !coverResult.success && coverResult.error) {
    errors.push({
      field: 'cover',
      message: coverResult.error,
      code: 'COVER_INVALID'
    });
  }

  additionalResults.forEach((result, index) => {
    if (!result.success && result.error) {
      errors.push({
        field: `images[${index}]`,
        message: result.error,
        code: 'IMAGE_INVALID'
      });
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
};

// Initialisation des répertoires au chargement du module
ensureUploadDirs().catch(err => {
  console.error('[ImageService] Erreur lors de la création des répertoires:', err);
});

export default {
  processCoverImage,
  processAdditionalImage,
  deleteImage,
  validateImageSet,
  getImageMetadata,
  assessImageQuality,
  generateImageHash,
  ensureUploadDirs,
  ALLOWED_FORMATS,
  ALLOWED_MIME_TYPES,
  MAX_FILE_SIZE,
  MIN_COVER_RESOLUTION,
  COVER_DIMENSIONS,
  IMAGE_DIMENSIONS
};