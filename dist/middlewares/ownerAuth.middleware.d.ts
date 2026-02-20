import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            owner?: {
                id: string;
                prenom: string;
                nom: string;
            };
        }
    }
}
export declare const authenticateOwner: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=ownerAuth.middleware.d.ts.map