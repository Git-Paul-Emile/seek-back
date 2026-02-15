import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
/**
 * Middleware de validation générique avec Zod
 */
export declare const validate: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => void;
/**
 * Middleware pour capturer les erreurs de validation
 */
export declare const validationErrorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
/**
 * Middleware pour valider les paramètres d'ID
 */
export declare const validateId: (paramName?: string) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate.middleware.d.ts.map