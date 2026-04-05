import type { Request, Response } from "express";
/**
 * Récupère l'historique des transactions du propriétaire connecté
 */
export declare const getHistorique: (req: Request, res: Response) => Promise<void>;
/**
 * Récupère les détails d'une transaction spécifique
 */
export declare const getTransactionDetail: (req: Request, res: Response) => Promise<void>;
export declare const getAdminHistorique: (req: Request, res: Response) => Promise<void>;
export declare const getAdminStats: (_req: Request, res: Response) => Promise<void>;
/**
 * Récupère les statistiques des transactions du propriétaire
 */
export declare const getStats: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=transaction.controller.d.ts.map