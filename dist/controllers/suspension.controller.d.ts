import type { Request, Response } from "express";
export declare const getProprietaires: (req: Request, res: Response) => Promise<void>;
export declare const getProprietaireById: (req: Request, res: Response) => Promise<void>;
export declare const getLocataires: (req: Request, res: Response) => Promise<void>;
export declare const getLocataireById: (req: Request, res: Response) => Promise<void>;
export declare const getLocataireAvecDocuments: (req: Request, res: Response) => Promise<void>;
export declare const supprimerProprietaire: (req: Request, res: Response) => Promise<void>;
export declare const supprimerLocataire: (req: Request, res: Response) => Promise<void>;
export declare const getProprietaireWithBiens: (req: Request, res: Response) => Promise<void>;
export declare const getLocataireWithBails: (req: Request, res: Response) => Promise<void>;
export declare const suspendreProprietaire: (req: Request, res: Response) => Promise<void>;
export declare const reactiverProprietaire: (req: Request, res: Response) => Promise<void>;
export declare const getStatutSuspensionProprietaire: (req: Request, res: Response) => Promise<void>;
export declare const suspendreLocataire: (req: Request, res: Response) => Promise<void>;
export declare const reactiverLocataire: (req: Request, res: Response) => Promise<void>;
export declare const getStatutSuspensionLocataire: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=suspension.controller.d.ts.map