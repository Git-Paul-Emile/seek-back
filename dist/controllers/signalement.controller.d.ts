import type { Request, Response, NextFunction } from "express";
export declare const createSignalement: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getSignalementsAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getSignalementByIdAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const validerSignalementAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const rejeterSignalementAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=signalement.controller.d.ts.map