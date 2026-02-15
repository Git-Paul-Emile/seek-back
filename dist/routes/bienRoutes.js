/**
 * Routes pour la gestion des biens immobiliers
 */
import { Router } from 'express';
import { createBienHandler, getBiensHandler, getBienByIdHandler, updateBienHandler, deleteBienHandler, refreshEtablissementsHandler } from '../controllers/bienController.js';
import { authentifier } from '../middlewares/auth.middleware.js';
const router = Router();
// Toutes les routes nécessitent une authentification
router.use(authentifier);
// Routes pour les biens
router.post('/', createBienHandler);
router.get('/', getBiensHandler);
router.get('/:id', getBienByIdHandler);
router.put('/:id', updateBienHandler);
router.delete('/:id', deleteBienHandler);
// Route pour rafraîchir les établissements proches
router.post('/:id/refresh-etablissements', refreshEtablissementsHandler);
export default router;
//# sourceMappingURL=bienRoutes.js.map