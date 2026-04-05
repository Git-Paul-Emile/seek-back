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
export declare const optionalAuthOwner: (req: Request, _res: Response, next: NextFunction) => Promise<void>;
export declare const authenticateOwner: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=ownerAuth.middleware.d.ts.map