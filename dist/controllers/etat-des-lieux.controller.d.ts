import type { Request, Response, NextFunction } from "express";
export declare const uploadImage: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const submit: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteBrouillon: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getByIdOwner: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getByBailOwner: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const compareOwner: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getCreationContextOwner: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const contester: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const resoudreContestations: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const validate: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getByIdLocataire: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getByBailLocataire: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllByLocataire: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const compareLocataire: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=etat-des-lieux.controller.d.ts.map