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
/**
 * Upload et optimisation des images d'un bien
 * POST /api/biens/upload-images
 * POST /api/biens/:bienId/upload-images (pour lier à un bien existant)
 */
export declare const uploadImagesHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Récupère les statistiques des biens du propriétaire connecté
 * GET /api/biens/stats
 */
export declare const getBienStatsHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Récupère les biens du propriétaire avec filtres
 * GET /api/biens?statut=DISPO&archived=false
 */
export declare const getBiensWithFiltersHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export { TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement };
//# sourceMappingURL=bienController.d.ts.map