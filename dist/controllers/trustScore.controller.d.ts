import type { Request, Response } from "express";
/** GET /api/proprietaires/:id/score - score public d'un propriétaire */
export declare const getPublicScore: (req: Request, res: Response) => Promise<void>;
/** GET /api/owner/score - score du propriétaire connecté (avec détail) */
export declare const getOwnScore: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=trustScore.controller.d.ts.map