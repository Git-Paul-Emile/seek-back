/**
 * Service d'upload et d'optimisation d'images pour les biens immobiliers
 * Utilise Sharp pour le traitement des images
 */
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
export declare const ensureUploadDirs: () => Promise<void>;
/**
 * Génère un hash unique pour une image (anti-doublons)
 */
export declare const generateImageHash: (buffer: Buffer) => string;
/**
 * Vérifie si une image existe déjà par son hash
 */
export declare const checkImageExists: (hash: string) => Promise<string | null>;
/**
 * Valide le type MIME d'une image
 */
export declare const validateMimeType: (mimeType: string) => boolean;
/**
 * Valide la taille d'une image
 */
export declare const validateFileSize: (size: number) => boolean;
/**
 * Obtient les métadonnées d'une image
 */
export declare const getImageMetadata: (buffer: Buffer) => Promise<ImageMetadata>;
/**
 * Évalue la qualité d'une image
 */
export declare const assessImageQuality: (metadata: ImageMetadata, isCover: boolean) => "excellente" | "bonne" | "moyenne" | "faible";
/**
 * Optimise une image pour l'affichage web
 */
export declare const optimizeImage: (buffer: Buffer, options: {
    width: number;
    height: number;
    isCover?: boolean;
}) => Promise<Buffer>;
/**
 * Génère un nom de fichier unique
 */
export declare const generateUniqueFilename: (originalName: string, hash: string) => string;
/**
 * Traite et sauvegarde une image de couverture
 */
export declare const processCoverImage: (buffer: Buffer, originalName: string) => Promise<UploadResult>;
/**
 * Traite et sauvegarde une image supplémentaire
 */
export declare const processAdditionalImage: (buffer: Buffer, originalName: string) => Promise<UploadResult>;
/**
 * Supprime une image du système de fichiers
 */
export declare const deleteImage: (imagePath: string) => Promise<boolean>;
/**
 * Valide un ensemble d'images pour un bien
 */
export declare const validateImageSet: (coverResult: UploadResult | null, additionalResults: UploadResult[]) => {
    valid: boolean;
    errors: UploadError[];
};
declare const _default: {
    processCoverImage: (buffer: Buffer, originalName: string) => Promise<UploadResult>;
    processAdditionalImage: (buffer: Buffer, originalName: string) => Promise<UploadResult>;
    deleteImage: (imagePath: string) => Promise<boolean>;
    validateImageSet: (coverResult: UploadResult | null, additionalResults: UploadResult[]) => {
        valid: boolean;
        errors: UploadError[];
    };
    getImageMetadata: (buffer: Buffer) => Promise<ImageMetadata>;
    assessImageQuality: (metadata: ImageMetadata, isCover: boolean) => "excellente" | "bonne" | "moyenne" | "faible";
    generateImageHash: (buffer: Buffer) => string;
    ensureUploadDirs: () => Promise<void>;
    ALLOWED_FORMATS: string[];
    ALLOWED_MIME_TYPES: string[];
    MAX_FILE_SIZE: number;
    MIN_COVER_RESOLUTION: {
        width: number;
        height: number;
    };
    COVER_DIMENSIONS: {
        width: number;
        height: number;
    };
    IMAGE_DIMENSIONS: {
        width: number;
        height: number;
    };
};
export default _default;
//# sourceMappingURL=imageService.d.ts.map