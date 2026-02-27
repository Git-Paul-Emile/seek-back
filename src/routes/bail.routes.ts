import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as BailController from "../controllers/bail.controller.js";
import * as ContratController from "../controllers/contrat.controller.js";
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
