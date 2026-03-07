import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as PremiumController from "../controllers/premium.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

// Admin CRUD FormulePremium
router.get("/admin/formules", authenticate, controllerWrapper(PremiumController.adminGetFormules));
router.post("/admin/formules", authenticate, controllerWrapper(PremiumController.adminCreateFormule));
router.put("/admin/formules/:id", authenticate, controllerWrapper(PremiumController.adminUpdateFormule));
router.delete("/admin/formules/:id", authenticate, controllerWrapper(PremiumController.adminDeleteFormule));

/**
 * GET /api/premium/formules - Récupérer les formules premium et moyens de paiement (public)
 */
router.get(
  "/formules",
  controllerWrapper(PremiumController.getFormulesPremium)
);

/**
 * GET /api/premium/paiements - Récupérer les moyens de paiement disponibles (public)
 */
router.get(
  "/paiements",
  controllerWrapper(PremiumController.getMoyensPaiement)
);

/**
 * POST /api/premium/:id/payer - Simuler le paiement et activer la mise en avant (protégé)
 * Body: { formuleId: string, modePaiement: "ORANGE_MONEY" | "WAVE" }
 */
// Temporary: Made public for testing - uncomment authenticateOwner for production
router.post(
  "/:id/payer",
  // authenticateOwner,
  validateId,
  controllerWrapper(PremiumController.payerEtActiverPremium)
);

/**
 * POST /api/premium/:id/arreter - Arrêter la mise en avant d'un bien (protégé)
 * Body: { motif?: string }
 */
router.post(
  "/:id/arreter",
  // authenticateOwner,
  validateId,
  controllerWrapper(PremiumController.arreterPremium)
);

/**
 * GET /api/premium/:id/historique - Récupérer l'historique des mises en avant d'un bien (protégé)
 */
router.get(
  "/:id/historique",
  // authenticateOwner,
  validateId,
  controllerWrapper(PremiumController.getHistoriqueBien)
);

/**
 * GET /api/premium/historique - Récupérer l'historique de tous les paiements premium du propriétaire (protégé)
 * Query: { page?: number, limit?: number }
 */
router.get(
  "/historique",
  // authenticateOwner,
  controllerWrapper(PremiumController.getHistoriquePaiements)
);

export default router;
