import type { Response, Request } from "express";
export declare const creerAlerte: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAlertes: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const desactiverAlerte: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMesAlertes: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const creerAlerteCompte: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const activerAlerteCompte: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const desactiverAlerteCompte: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const supprimerAlerteCompte: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=alerte.controller.d.ts.map