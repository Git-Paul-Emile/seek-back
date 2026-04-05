import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            comptePublic?: {
                id: string;
                nom: string;
                prenom: string;
            };
        }
    }
}
export declare const authenticateComptePublic: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=comptePublicAuth.middleware.d.ts.map