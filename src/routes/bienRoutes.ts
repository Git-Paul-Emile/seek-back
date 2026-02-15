/**
 * Routes pour la gestion des biens immobiliers
 */

import { Router } from 'express';
import {
  createBienHandler,
  getBiensHandler,
  getBienByIdHandler,
  updateBienHandler,
  deleteBienHandler,
  refreshEtablissementsHandler,
  uploadImagesHandler
} from '../controllers/bienController.js';
import { authentifier } from '../middlewares/auth.middleware.js';
import { uploadBienImages, handleUploadErrors, debugUpload } from '../middlewares/upload.middleware.js';

const router = Router();

// Route pour uploader des images - AVANT authentification (pour que Multer puisse parser les fichiers)
router.post('/upload-images', 
  uploadBienImages,
  handleUploadErrors,
  authentifier,
  uploadImagesHandler
);

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