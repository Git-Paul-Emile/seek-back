import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as PromotionController from "../controllers/promotion.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

/**
 * GET /api/promotions/accueil - Récupérer les annonces mises en avant pour la page d'accueil (public)
 * Paramètre optionnel: limit (nombre d'annonces à afficher, défaut 4)
 */
router.get(
  "/accueil",
  controllerWrapper(PromotionController.getAnnoncesMiseEnAvant)
);

/**
 * Routes protégées pour les propriétaires
 */

/**
 * GET /api/promotions/stats - Statistiques de promotion du propriétaire connecté
 */
router.get(
  "/stats",
  authenticateOwner,
  controllerWrapper(PromotionController.getPromotionStats)
);

/**
 * POST /api/promotions/:id/activer - Activer la mise en avant d'une annonce
 * Body: { dureeJours?: number } - Durée en jours (1-90, défaut 7)
 */
router.post(
  "/:id/activer",
  authenticateOwner,
  validateId,
  controllerWrapper(PromotionController.activatePromotion)
);

/**
 * POST /api/promotions/:id/desactiver - Désactiver la mise en avant d'une annonce
 */
router.post(
  "/:id/desactiver",
  authenticateOwner,
  validateId,
  controllerWrapper(PromotionController.deactivatePromotion)
);

/**
 * GET /api/promotions/:id/statut - Récupérer le statut de mise en avant d'une annonce
 */
router.get(
  "/:id/statut",
  authenticateOwner,
  validateId,
  controllerWrapper(PromotionController.getPromotionStatus)
);

/**
 * POST /api/promotions/:id/prolonger - Prolonger la mise en avant d'une annonce
 * Body: { joursSupplementaires?: number } - Jours supplémentaires (1-90, défaut 7)
 */
router.post(
  "/:id/prolonger",
  authenticateOwner,
  validateId,
  controllerWrapper(PromotionController.extendPromotion)
);

export default router;
