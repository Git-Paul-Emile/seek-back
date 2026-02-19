import type { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";
import cloudinary from "../config/cloudinary.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

export interface CloudinaryUploadResult {
  url: string;
  publicId: string;
}

/**
 * Upload un buffer en mémoire (fourni par Multer) vers Cloudinary.
 * @param buffer - Le buffer du fichier (Multer memoryStorage)
 * @param folder - Le dossier Cloudinary cible (ex: "seek/types-logement")
 */
export const uploadImage = (
  buffer: Buffer,
  folder: string
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error || !result) {
          return reject(
            new AppError(
              "Échec de l'upload vers Cloudinary",
              StatusCodes.INTERNAL_SERVER_ERROR
            )
          );
        }
        resolve({ url: result.secure_url, publicId: result.public_id });
      }
    );
    stream.end(buffer);
  });
};

/**
 * Supprime une image Cloudinary à partir de son public ID.
 * Ne lance pas d'erreur si la suppression échoue (image déjà absente).
 */
export const deleteImage = async (publicId: string): Promise<void> => {
  await cloudinary.uploader.destroy(publicId);
};

/**
 * Extrait le public ID Cloudinary depuis une URL sécurisée.
 * Ex: "https://res.cloudinary.com/cloud/image/upload/v123/seek/types-logement/abc.jpg"
 *  → "seek/types-logement/abc"
 */
export const extractPublicId = (url: string): string | null => {
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-zA-Z0-9]+$/);
  return match ? match[1] : null;
};
