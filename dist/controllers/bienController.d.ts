/**
 * Contrôleur pour la gestion des biens immobiliers
 * Gère la création, modification, suppression et consultation des biens
 */
import type { Request, Response, NextFunction } from 'express';
import { TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement } from '../generated/prisma/client.js';
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                [key: string]: any;
            };
        }
    }
}
/**
 * Crée un nouveau bien immobilier avec géocodage automatique et recherche d'établissements proches
 * POST /api/biens
 */
export declare const createBienHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Récupère tous les biens du propriétaire connecté
 * GET /api/biens
 */
export declare const getBiensHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Récupère un bien par son ID
 * GET /api/biens/:id
 */
export declare const getBienByIdHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Met à jour un bien existant
 * PUT /api/biens/:id
 */
export declare const updateBienHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Supprime un bien
 * DELETE /api/biens/:id
 */
export declare const deleteBienHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Rafraîchit manuellement les établissements proches d'un bien
 * POST /api/biens/:id/refresh-etablissements
 */
export declare const refreshEtablissementsHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export { TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement };
//# sourceMappingURL=bienController.d.ts.map