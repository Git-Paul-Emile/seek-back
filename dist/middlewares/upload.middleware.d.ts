/**
 * Middleware Multer pour l'upload d'images
 * Gère l'upload de la photo de couverture et des photos supplémentaires
 */
import type { Request, Response, NextFunction } from 'express';
declare const MAX_FILE_SIZE: number;
declare const ALLOWED_MIME_TYPES: string[];
declare const ALLOWED_EXTENSIONS: string[];
declare const MIN_COVER_RESOLUTION: {
    width: number;
    height: number;
};
/**
 * Configuration Multer pour l'upload de la photo de couverture
 */
export declare const uploadCover: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * Configuration Multer pour l'upload des photos supplémentaires
 */
export declare const uploadImages: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * Configuration Multer pour l'upload combiné (cover + images)
 */
export declare const uploadBienImages: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const debugUpload: (req: Request, _res: Response, next: NextFunction) => void;
/**
 * Middleware combiné pour gérer les erreurs d'upload
 */
export declare const handleUploadErrors: (err: Error, _req: Request, _res: Response, next: NextFunction) => void;
/**
 * Interface pour les fichiers uploadés
 */
export interface UploadedFiles {
    cover?: Express.Multer.File[];
    images?: Express.Multer.File[];
}
export { ALLOWED_MIME_TYPES, ALLOWED_EXTENSIONS, MAX_FILE_SIZE, MIN_COVER_RESOLUTION };
declare const _default: {
    uploadCover: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    uploadImages: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    uploadBienImages: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    handleUploadErrors: (err: Error, _req: Request, _res: Response, next: NextFunction) => void;
};
export default _default;
//# sourceMappingURL=upload.middleware.d.ts.map