import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as BailController from "../controllers/bail.controller.js";
import * as ContratController from "../controllers/contrat.controller.js";
import * as QuittanceController from "../controllers/quittance.controller.js";
import * as NotificationController from "../controllers/notification.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router({ mergeParams: true });

// Toutes les routes nécessitent l'authentification owner
router.use(authenticateOwner);

/** GET /api/biens/:id/bail — bail actif du bien */
router.get("/", controllerWrapper(BailController.getBailActif));

/** POST /api/biens/:id/bail — créer un bail */
router.post("/", controllerWrapper(BailController.creerBail));

/** DELETE /api/biens/:id/bail/:bailId — annuler un bail (suppression) */
router.delete(
  "/:bailId",
  validateId,
  controllerWrapper(BailController.annulerBail)
);

/** PATCH /api/biens/:id/bail/:bailId/terminer */
router.patch(
  "/:bailId/terminer",
  validateId,
  controllerWrapper(BailController.terminerBail)
);

/** PATCH /api/biens/:id/bail/:bailId/resilier */
router.patch(
  "/:bailId/resilier",
  validateId,
  controllerWrapper(BailController.resilierBail)
);

/** PATCH /api/biens/:id/bail/:bailId/prolonger */
router.patch(
  "/:bailId/prolonger",
  validateId,
  controllerWrapper(BailController.prolongerBail)
);

// ─── Mobile Money ─────────────────────────────────────────────────────────────

/** GET /api/biens/:id/bail/mobile-money — providers Mobile Money selon le pays du bien */
router.get("/mobile-money", controllerWrapper(BailController.getMobileMoney));

// ─── Échéancier ───────────────────────────────────────────────────────────────

/** GET /api/biens/:id/bail/:bailId/echeancier */
router.get("/:bailId/echeancier", validateId, controllerWrapper(BailController.getEcheancier));

/** PATCH /api/biens/:id/bail/:bailId/echeancier/payer-multiple — payer N mois d'un coup */
router.patch("/:bailId/echeancier/payer-multiple", validateId, controllerWrapper(BailController.payerMoisMultiples));

/** PATCH /api/biens/:id/bail/:bailId/echeancier/:echeanceId/payer */
router.patch("/:bailId/echeancier/:echeanceId/payer", validateId, controllerWrapper(BailController.payerEcheance));

/** GET    /api/biens/:id/bail/:bailId/echeancier/:echeanceId/quittance */
router.get("/:bailId/echeancier/:echeanceId/quittance", validateId, controllerWrapper(QuittanceController.getQuittance));

/** POST   /api/biens/:id/bail/:bailId/echeancier/:echeanceId/quittance */
router.post("/:bailId/echeancier/:echeanceId/quittance", validateId, controllerWrapper(QuittanceController.genererQuittance));

/** POST   /api/biens/:id/bail/:bailId/echeancier/:echeanceId/rappel */
router.post("/:bailId/echeancier/:echeanceId/rappel", validateId, controllerWrapper(NotificationController.envoyerRappel));

// ─── Quittances d'un bail ─────────────────────────────────────────────────────

/** GET /api/biens/:id/bail/:bailId/quittances */
router.get("/:bailId/quittances", validateId, controllerWrapper(QuittanceController.getQuittancesBail));

// ─── Notifications d'un bail ──────────────────────────────────────────────────

/** GET /api/biens/:id/bail/:bailId/notifications */
router.get("/:bailId/notifications", validateId, controllerWrapper(NotificationController.getNotificationsBail));

// ─── Caution ──────────────────────────────────────────────────────────────────

/** GET /api/biens/:id/bail/:bailId/solde — solde du locataire */
router.get("/:bailId/solde", validateId, controllerWrapper(BailController.getSolde));

/** GET /api/biens/:id/bail/:bailId/caution */
router.get("/:bailId/caution", validateId, controllerWrapper(BailController.getCaution));

/** PATCH /api/biens/:id/bail/:bailId/caution/restituer */
router.patch("/:bailId/caution/restituer", validateId, controllerWrapper(BailController.restituerCaution));

// ─── Contrats ─────────────────────────────────────────────────────────────────

/** GET /api/biens/:id/bail/:bailId/contrat — contrat du bail */
router.get("/:bailId/contrat", validateId, controllerWrapper(ContratController.getContrat));

/** POST /api/biens/:id/bail/:bailId/contrat — générer contrat depuis modèle */
router.post("/:bailId/contrat", validateId, controllerWrapper(ContratController.genererContrat));

/** PATCH /api/biens/:id/bail/:bailId/contrat/:contratId — sauvegarder édition */
router.patch("/:bailId/contrat/:contratId", validateId, controllerWrapper(ContratController.updateContrat));

/** PATCH /api/biens/:id/bail/:bailId/contrat/:contratId/activer */
router.patch("/:bailId/contrat/:contratId/activer", validateId, controllerWrapper(ContratController.activerContrat));

/** POST /api/biens/:id/bail/:bailId/contrat/:contratId/envoyer — activer + envoyer par email */
router.post("/:bailId/contrat/:contratId/envoyer", validateId, controllerWrapper(ContratController.envoyerContrat));

export default router;
