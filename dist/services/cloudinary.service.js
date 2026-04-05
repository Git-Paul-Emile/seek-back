import cloudinary from "../config/cloudinary.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import { optimizeImage } from "../utils/optimizeImage.js";
/**
 * Optimise (compression + resize + WebP) puis upload vers Cloudinary.
 * @param buffer  - Buffer brut fourni par Multer (memoryStorage)
 * @param folder  - Dossier Cloudinary cible (ex: "seek/biens")
 * @param options - Paramètres d'optimisation optionnels (maxDimension, quality)
 */
export const uploadImage = async (buffer, folder, options) => {
    const optimized = await optimizeImage(buffer, options);
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder, resource_type: "image", format: "webp" }, (error, result) => {
            if (error || !result) {
                return reject(new AppError("Échec de l'upload vers Cloudinary", StatusCodes.INTERNAL_SERVER_ERROR));
            }
            resolve({ url: result.secure_url, publicId: result.public_id });
        });
        stream.end(optimized);
    });
};
/**
 * Upload un fichier quelconque (PDF, image) vers Cloudinary (resource_type: auto)
 */
export const uploadFile = (buffer, folder, filename) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder, resource_type: "auto", use_filename: true, public_id: filename }, (error, result) => {
            if (error || !result) {
                return reject(new AppError("Échec de l'upload vers Cloudinary", StatusCodes.INTERNAL_SERVER_ERROR));
            }
            resolve({ url: result.secure_url, publicId: result.public_id });
        });
        stream.end(buffer);
    });
};
/**
 * Supprime une image Cloudinary à partir de son public ID.
 * Ne lance pas d'erreur si la suppression échoue (image déjà absente).
 */
export const deleteImage = async (publicId) => {
    await cloudinary.uploader.destroy(publicId);
};
/**
 * Extrait le public ID Cloudinary depuis une URL sécurisée.
 * Ex: "https://res.cloudinary.com/cloud/image/upload/v123/seek/types-logement/abc.jpg"
 *  → "seek/types-logement/abc"
 */
export const extractPublicId = (url) => {
    const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-zA-Z0-9]+$/);
    return match?.[1] ?? null;
};
/**
 * Supprime en masse des ressources Cloudinary à partir d'une liste d'URLs.
 * Les URLs nulles/undefined et les échecs individuels sont ignorés silencieusement.
 */
export const deleteUrls = async (urls) => {
    const tasks = urls
        .filter((u) => !!u)
        .map((url) => {
        const publicId = extractPublicId(url);
        return publicId ? deleteImage(publicId) : Promise.resolve();
    });
    await Promise.allSettled(tasks);
};
//# sourceMappingURL=cloudinary.service.js.map