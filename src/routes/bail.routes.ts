import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as BailController from "../controllers/bail.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router({ mergeParams: true });

// Toutes les routes nécessitent l'authentification owner
router.use(authenticateOwner);

/** GET /api/biens/:id/bail — bail actif du bien */
router.get("/", controllerWrapper(BailController.getBailActif));

/** POST /api/biens/:id/bail — créer un bail */
router.post("/", controllerWrapper(BailController.creerBail));

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

export default router;
