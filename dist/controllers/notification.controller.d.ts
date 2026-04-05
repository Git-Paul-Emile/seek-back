import type { Request, Response } from "express";
/** POST /api/biens/:id/bail/:bailId/echeancier/:echeanceId/rappel */
export declare const envoyerRappel: (req: Request, res: Response) => Promise<void>;
/** GET /api/biens/:id/bail/:bailId/echeancier/:echeanceId/rappels */
export declare const getRappelsEcheance: (req: Request, res: Response) => Promise<void>;
/** GET /api/biens/:id/bail/:bailId/notifications */
export declare const getNotificationsBail: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=notification.controller.d.ts.map