import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            locataire?: {
                id: string;
                nom: string;
                prenom: string;
            };
        }
    }
}
export declare const authenticateLocataire: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=locataireAuth.middleware.d.ts.map