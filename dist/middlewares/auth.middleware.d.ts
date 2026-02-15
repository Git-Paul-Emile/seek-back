import type { Request, Response, NextFunction } from "express";
import type { AccessTokenPayload } from "../config/jwt.js";
declare global {
    namespace Express {
        interface Request {
            proprietaire?: AccessTokenPayload & {
                id: string;
                email?: string;
                telephone: string;
            };
        }
    }
}
/**
 * Middleware d'authentification - Extrait le JWT depuis le cookie
 */
export declare const authentifier: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Middleware optionnel - Ne fail pas si pas de token, mais l'ajoute si présent
 */
export declare const authentifierOptionnel: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.middleware.d.ts.map