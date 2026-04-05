import type { Request, Response } from "express";
export declare const getFormulesPremium: (_req: Request, res: Response) => Promise<void>;
export declare const adminGetFormules: (_req: Request, res: Response) => Promise<void>;
export declare const adminCreateFormule: (req: Request, res: Response) => Promise<void>;
export declare const adminUpdateFormule: (req: Request, res: Response) => Promise<void>;
export declare const adminDeleteFormule: (req: Request, res: Response) => Promise<void>;
export declare const payerEtActiverPremium: (req: Request, res: Response) => Promise<void>;
export declare const getMoyensPaiement: (_req: Request, res: Response) => Promise<void>;
export declare const arreterPremium: (req: Request, res: Response) => Promise<void>;
export declare const getHistoriqueBien: (req: Request, res: Response) => Promise<void>;
export declare const getHistoriquePaiements: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=premium.controller.d.ts.map