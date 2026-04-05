import type { Request, Response } from "express";
/** GET /api/biens/:id/bail/:bailId/echeancier/:echeanceId/quittance */
export declare const getQuittance: (req: Request, res: Response) => Promise<void>;
/** POST /api/biens/:id/bail/:bailId/echeancier/:echeanceId/quittance */
export declare const genererQuittance: (req: Request, res: Response) => Promise<void>;
/** GET /api/biens/:id/bail/:bailId/quittances */
export declare const getQuittancesBail: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=quittance.controller.d.ts.map