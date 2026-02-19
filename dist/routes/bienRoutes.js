/**
 * Routes pour la gestion des biens immobiliers
 */
import { Router } from 'express';
import { createBienHandler, getBiensHandler, getBienByIdHandler, updateBienHandler, deleteBienHandler, refreshEtablissementsHandler, uploadImagesHandler, getBienStatsHandler, getBiensWithFiltersHandler } from '../controllers/bienController.js';
import { authentifier } from '../middlewares/auth.middleware.js';
import { uploadBienImages, handleUploadErrors, debugUpload } from '../middlewares/upload.middleware.js';
const router = Router();
// Route pour uploader des images sans bienId (pour prévisualisation ou création de bien)
router.post('/upload-images', uploadBienImages, handleUploadErrors, authentifier, uploadImagesHandler);
// Route pour uploader des images et les lier à un bien existant
router.post('/:bienId/upload-images', uploadBienImages, handleUploadErrors, authentifier, uploadImagesHandler);
// Routes pour les statistiques (nouveau)
router.get('/stats', authentifier, getBienStatsHandler);
// Routes pour les biens avec filtres (nouveau)
router.get('/list', authentifier, getBiensWithFiltersHandler);
// Toutes les autres routes nécessitent une authentification
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