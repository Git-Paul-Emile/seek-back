import { Router } from 'express';
import { getAllPays, getAllPaysWithVilles, getPaysById, getVillesByPays, getAllVilles, getVillesSenegal, createPays, createVille, deletePays, deleteVille } from '../controllers/villeController.js';
const router = Router();
// Routes pour les pays
router.get('/pays', getAllPays);
router.get('/pays/with-villes', getAllPaysWithVilles);
router.get('/pays/:id', getPaysById);
router.post('/pays', createPays);
router.delete('/pays/:id', deletePays);
// Routes pour les villes
router.get('/villes', getAllVilles);
router.get('/villes/senegal', getVillesSenegal);
router.get('/villes/pays/:paysId', getVillesByPays);
router.post('/villes', createVille);
router.delete('/villes/:id', deleteVille);
export default router;
//# sourceMappingURL=villeRoutes.js.map