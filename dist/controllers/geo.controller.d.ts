import type { Request, Response } from "express";
export declare const getPays: (_req: Request, res: Response) => Promise<void>;
export declare const getAllPaysAdmin: (_req: Request, res: Response) => Promise<void>;
export declare const createPays: (req: Request, res: Response) => Promise<void>;
export declare const updatePays: (req: Request, res: Response) => Promise<void>;
export declare const deletePays: (req: Request, res: Response) => Promise<void>;
export declare const getVilles: (req: Request, res: Response) => Promise<void>;
export declare const getAllVillesAdmin: (req: Request, res: Response) => Promise<void>;
export declare const createVille: (req: Request, res: Response) => Promise<void>;
export declare const updateVille: (req: Request, res: Response) => Promise<void>;
export declare const deleteVille: (req: Request, res: Response) => Promise<void>;
export declare const getQuartiersByVille: (req: Request, res: Response) => Promise<void>;
export declare const getAllQuartiersAdmin: (req: Request, res: Response) => Promise<void>;
export declare const createQuartier: (req: Request, res: Response) => Promise<void>;
export declare const updateQuartier: (req: Request, res: Response) => Promise<void>;
export declare const deleteQuartier: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=geo.controller.d.ts.map