import { Router } from "express";
import * as EtatDesLieuxController from "../controllers/etat-des-lieux.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { authenticateLocataire } from "../middlewares/locataireAuth.middleware.js";
import { uploadImageMiddleware } from "../middlewares/upload.middleware.js";

const router = Router();

// ========================
// Routes Propriétaire
// ========================
router.post(
  "/upload",
  authenticateOwner,
  uploadImageMiddleware,
  EtatDesLieuxController.uploadImage
);

router.post(
  "/",
  authenticateOwner,
  EtatDesLieuxController.create
);

router.put(
  "/:id",
  authenticateOwner,
  EtatDesLieuxController.update
);

router.post(
  "/:id/submit",
  authenticateOwner,
  EtatDesLieuxController.submit
);

router.delete(
  "/:id",
  authenticateOwner,
  EtatDesLieuxController.deleteBrouillon
);

router.post(
  "/:id/resoudre-contestation",
  authenticateOwner,
  EtatDesLieuxController.resoudreContestations
);

router.get(
  "/owner/:id",
  authenticateOwner,
  EtatDesLieuxController.getByIdOwner
);

router.get(
  "/owner/bail/:bailId",
  authenticateOwner,
  EtatDesLieuxController.getByBailOwner
);

router.get(
  "/owner/bail/:bailId/comparison",
  authenticateOwner,
  EtatDesLieuxController.compareOwner
);

// ========================
// Routes Locataire
// ========================
router.post(
  "/locataire/upload",
  authenticateLocataire,
  uploadImageMiddleware,
  EtatDesLieuxController.uploadImage
);

router.post(
  "/:id/contester",
  authenticateLocataire,
  EtatDesLieuxController.contester
);

router.post(
  "/:id/validate",
  authenticateLocataire,
  EtatDesLieuxController.validate
);

router.get(
  "/locataire/:id",
  authenticateLocataire,
  EtatDesLieuxController.getByIdLocataire
);

router.get(
  "/locataire/bail/:bailId",
  authenticateLocataire,
  EtatDesLieuxController.getByBailLocataire
);

router.get(
  "/locataire/bail/:bailId/comparison",
  authenticateLocataire,
  EtatDesLieuxController.compareLocataire
);

export default router;
