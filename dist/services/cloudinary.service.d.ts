import { type OptimizeOptions } from "../utils/optimizeImage.js";
export interface CloudinaryUploadResult {
    url: string;
    publicId: string;
}
/**
 * Optimise (compression + resize + WebP) puis upload vers Cloudinary.
 * @param buffer  - Buffer brut fourni par Multer (memoryStorage)
 * @param folder  - Dossier Cloudinary cible (ex: "seek/biens")
 * @param options - Paramètres d'optimisation optionnels (maxDimension, quality)
 */
export declare const uploadImage: (buffer: Buffer, folder: string, options?: OptimizeOptions, watermarkLogoBuffer?: Buffer | null) => Promise<CloudinaryUploadResult>;
/**
 * Upload un fichier quelconque (PDF, image) vers Cloudinary (resource_type: auto)
 */
export declare const uploadFile: (buffer: Buffer, folder: string, filename?: string) => Promise<CloudinaryUploadResult>;
/**
 * Supprime une image Cloudinary à partir de son public ID.
 * Ne lance pas d'erreur si la suppression échoue (image déjà absente).
 */
export declare const deleteImage: (publicId: string) => Promise<void>;
/**
 * Extrait le public ID Cloudinary depuis une URL sécurisée.
 * Ex: "https://res.cloudinary.com/cloud/image/upload/v123/seek/types-logement/abc.jpg"
 *  → "seek/types-logement/abc"
 */
export declare const extractPublicId: (url: string) => string | null;
/**
 * Supprime en masse des ressources Cloudinary à partir d'une liste d'URLs.
 * Les URLs nulles/undefined et les échecs individuels sont ignorés silencieusement.
 */
export declare const deleteUrls: (urls: (string | null | undefined)[]) => Promise<void>;
//# sourceMappingURL=cloudinary.service.d.ts.map