export interface OptimizeOptions {
    /** Largeur/hauteur max (maintient le ratio). Défaut : 1920 */
    maxDimension?: number;
    /** Qualité WebP 0–100. Défaut : 82 */
    quality?: number;
}
/**
 * Compresse, redimensionne et convertit un buffer image en WebP.
 * - Redimensionne si l'image dépasse maxDimension (conserve le ratio)
 * - Supprime les métadonnées EXIF (vie privée + taille)
 * - Retourne toujours un buffer WebP
 */
export declare const optimizeImage: (buffer: Buffer, options?: OptimizeOptions) => Promise<Buffer>;
//# sourceMappingURL=optimizeImage.d.ts.map