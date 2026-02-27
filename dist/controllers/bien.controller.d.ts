import type { Request, Response } from "express";
export declare const saveDraft: (req: Request, res: Response) => Promise<void>;
export declare const getDraft: (req: Request, res: Response) => Promise<void>;
export declare const soumettreAnnonce: (req: Request, res: Response) => Promise<void>;
export declare const getBiens: (req: Request, res: Response) => Promise<void>;
export declare const deleteBien: (req: Request, res: Response) => Promise<void>;
export declare const retourBrouillon: (req: Request, res: Response) => Promise<void>;
export declare const annulerAnnonce: (req: Request, res: Response) => Promise<void>;
export declare const soumettreRevision: (req: Request, res: Response) => Promise<void>;
export declare const getBienById: (req: Request, res: Response) => Promise<void>;
export declare const getDernieresAnnonces: (req: Request, res: Response) => Promise<void>;
export declare const getAnnoncePublie: (req: Request, res: Response) => Promise<void>;
export declare const signalerAnnonce: (req: Request, res: Response) => Promise<void>;
export declare const getOwnerStatsController: (req: Request, res: Response) => Promise<void>;
export declare const getAnnoncesSimilaires: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=bien.controller.d.ts.map