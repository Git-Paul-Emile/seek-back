export interface CloudinaryUploadResult {
    url: string;
    publicId: string;
}
/**
 * Upload un buffer en mémoire (fourni par Multer) vers Cloudinary.
 * @param buffer - Le buffer du fichier (Multer memoryStorage)
 * @param folder - Le dossier Cloudinary cible (ex: "seek/types-logement")
 */
export declare const uploadImage: (buffer: Buffer, folder: string) => Promise<CloudinaryUploadResult>;
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
//# sourceMappingURL=cloudinary.service.d.ts.map