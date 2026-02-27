import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as LocataireController from "../controllers/locataire.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

// Toutes les routes nécessitent l'authentification owner
router.use(authenticateOwner);

/** GET /api/owner/locataires */
router.get("/", controllerWrapper(LocataireController.getLocataires));

/** POST /api/owner/locataires */
router.post("/", controllerWrapper(LocataireController.createLocataire));

/** GET /api/owner/locataires/:id/lien */
router.get(
  "/:id/lien",
  validateId,
  controllerWrapper(LocataireController.getLienActivation)
);

/** GET /api/owner/locataires/:id */
router.get(
  "/:id",
  validateId,
  controllerWrapper(LocataireController.getLocataireById)
);

/** PATCH /api/owner/locataires/:id */
router.patch(
  "/:id",
  validateId,
  controllerWrapper(LocataireController.updateLocataire)
);

/** DELETE /api/owner/locataires/:id */
router.delete(
  "/:id",
  validateId,
  controllerWrapper(LocataireController.deleteLocataire)
);

export default router;
