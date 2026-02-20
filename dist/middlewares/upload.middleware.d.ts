import type { Request, Response, NextFunction } from "express";
/**
 * Middleware d'upload d'image (optionnel).
 * - Champ FormData : "image"
 * - Types acceptés : JPEG, PNG, WEBP
 * - Taille maximale : 5 Mo
 * - Stockage en mémoire (req.file.buffer) puis upload vers Cloudinary
 * - Passe silencieusement si aucun fichier n'est envoyé (requêtes JSON)
 */
export declare const uploadImageMiddleware: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=upload.middleware.d.ts.map