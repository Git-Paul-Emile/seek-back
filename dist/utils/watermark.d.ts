export interface WatermarkOptions {
    /** Ratio largeur filigrane / largeur image (0–1). Défaut : 0.28 */
    sizeRatio?: number;
    /** Opacité 0–1. Défaut : 0.30 */
    opacity?: number;
    /** Position du filigrane. Défaut : "center" */
    gravity?: "center" | "north" | "south" | "east" | "west" | "northeast" | "northwest" | "southeast" | "southwest";
}
/**
 * Applique un filigrane PNG (logo avec fond transparent) sur un buffer image.
 *
 * - Redimensionne le logo à ~28 % de la largeur de l'image (configurable)
 * - Opacité 30 % par défaut (discret mais présent sur l'image)
 * - Centré par défaut (difficile à recadrer)
 * - Retourne un buffer au même format que l'entrée (WebP après optimisation)
 */
export declare const applyWatermark: (imageBuffer: Buffer, logoBuffer: Buffer, options?: WatermarkOptions) => Promise<Buffer>;
//# sourceMappingURL=watermark.d.ts.map