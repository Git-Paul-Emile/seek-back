import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            admin?: {
                id: string;
                email: string;
            };
        }
    }
}
/**
 * Middleware d'authentification admin.
 * Lit le JWT access token depuis :
 *  1. Le cookie `accessToken` (HttpOnly — prioritaire)
 *  2. Le header Authorization: Bearer <token> (fallback pour les clients API)
 */
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map