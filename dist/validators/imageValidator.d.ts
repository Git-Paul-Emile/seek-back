/**
 * Validateur pour les images de biens immobiliers
 * Utilisé pour valider les règles métier côté API
 */
import { z } from 'zod';
/**
 * Schéma de validation pour une image uploadée
 */
export declare const imageSchema: z.ZodObject<{
    fieldname: z.ZodString;
    originalname: z.ZodString;
    encoding: z.ZodString;
    mimetype: z.ZodEnum<{
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
        "image/webp": "image/webp";
    }>;
    size: z.ZodNumber;
    destination: z.ZodString;
    filename: z.ZodString;
    path: z.ZodString;
}, z.core.$strip>;
/**
 * Schéma de validation pour la photo de couverture
 */
export declare const coverImageSchema: z.ZodObject<{
    fieldname: z.ZodString;
    originalname: z.ZodString;
    encoding: z.ZodString;
    mimetype: z.ZodEnum<{
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
        "image/webp": "image/webp";
    }>;
    size: z.ZodNumber;
    destination: z.ZodString;
    filename: z.ZodString;
    path: z.ZodString;
}, z.core.$strip>;
/**
 * Schéma de validation pour les images supplémentaires
 */
export declare const additionalImagesSchema: z.ZodArray<z.ZodObject<{
    fieldname: z.ZodString;
    originalname: z.ZodString;
    encoding: z.ZodString;
    mimetype: z.ZodEnum<{
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
        "image/webp": "image/webp";
    }>;
    size: z.ZodNumber;
    destination: z.ZodString;
    filename: z.ZodString;
    path: z.ZodString;
}, z.core.$strip>>;
/**
 * Schéma de validation complet pour l'upload d'images d'un bien
 */
export declare const bienImagesUploadSchema: z.ZodObject<{
    cover: z.ZodObject<{
        fieldname: z.ZodString;
        originalname: z.ZodString;
        encoding: z.ZodString;
        mimetype: z.ZodEnum<{
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
            "image/webp": "image/webp";
        }>;
        size: z.ZodNumber;
        destination: z.ZodString;
        filename: z.ZodString;
        path: z.ZodString;
    }, z.core.$strip>;
    images: z.ZodArray<z.ZodObject<{
        fieldname: z.ZodString;
        originalname: z.ZodString;
        encoding: z.ZodString;
        mimetype: z.ZodEnum<{
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
            "image/webp": "image/webp";
        }>;
        size: z.ZodNumber;
        destination: z.ZodString;
        filename: z.ZodString;
        path: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
export declare const validateBienImages: (files: {
    cover?: UploadedFile[];
    images?: UploadedFile[];
}) => ValidationResult;
/**
 * Messages d'erreur pour l'upload d'images
 */
export declare const IMAGE_ERROR_MESSAGES: {
    COVER_REQUIRED: string;
    COVER_FORMAT_INVALID: string;
    COVER_SIZE_EXCEEDED: string;
    MIN_IMAGES_REQUIRED: string;
    MAX_IMAGES_EXCEEDED: string;
    IMAGE_FORMAT_INVALID: string;
    IMAGE_SIZE_EXCEEDED: string;
    DUPLICATE_IMAGE: string;
};
declare const _default: {
    imageSchema: z.ZodObject<{
        fieldname: z.ZodString;
        originalname: z.ZodString;
        encoding: z.ZodString;
        mimetype: z.ZodEnum<{
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
            "image/webp": "image/webp";
        }>;
        size: z.ZodNumber;
        destination: z.ZodString;
        filename: z.ZodString;
        path: z.ZodString;
    }, z.core.$strip>;
    coverImageSchema: z.ZodObject<{
        fieldname: z.ZodString;
        originalname: z.ZodString;
        encoding: z.ZodString;
        mimetype: z.ZodEnum<{
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
            "image/webp": "image/webp";
        }>;
        size: z.ZodNumber;
        destination: z.ZodString;
        filename: z.ZodString;
        path: z.ZodString;
    }, z.core.$strip>;
    additionalImagesSchema: z.ZodArray<z.ZodObject<{
        fieldname: z.ZodString;
        originalname: z.ZodString;
        encoding: z.ZodString;
        mimetype: z.ZodEnum<{
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
            "image/webp": "image/webp";
        }>;
        size: z.ZodNumber;
        destination: z.ZodString;
        filename: z.ZodString;
        path: z.ZodString;
    }, z.core.$strip>>;
    bienImagesUploadSchema: z.ZodObject<{
        cover: z.ZodObject<{
            fieldname: z.ZodString;
            originalname: z.ZodString;
            encoding: z.ZodString;
            mimetype: z.ZodEnum<{
                "image/jpeg": "image/jpeg";
                "image/png": "image/png";
                "image/webp": "image/webp";
            }>;
            size: z.ZodNumber;
            destination: z.ZodString;
            filename: z.ZodString;
            path: z.ZodString;
        }, z.core.$strip>;
        images: z.ZodArray<z.ZodObject<{
            fieldname: z.ZodString;
            originalname: z.ZodString;
            encoding: z.ZodString;
            mimetype: z.ZodEnum<{
                "image/jpeg": "image/jpeg";
                "image/png": "image/png";
                "image/webp": "image/webp";
            }>;
            size: z.ZodNumber;
            destination: z.ZodString;
            filename: z.ZodString;
            path: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    validateBienImages: (files: {
        cover?: UploadedFile[];
        images?: UploadedFile[];
    }) => ValidationResult;
    IMAGE_ERROR_MESSAGES: {
        COVER_REQUIRED: string;
        COVER_FORMAT_INVALID: string;
        COVER_SIZE_EXCEEDED: string;
        MIN_IMAGES_REQUIRED: string;
        MAX_IMAGES_EXCEEDED: string;
        IMAGE_FORMAT_INVALID: string;
        IMAGE_SIZE_EXCEEDED: string;
        DUPLICATE_IMAGE: string;
    };
};
export default _default;
//# sourceMappingURL=imageValidator.d.ts.map