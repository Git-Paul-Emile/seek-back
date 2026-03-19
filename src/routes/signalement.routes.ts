import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as SignalementController from "../controllers/signalement.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

// ─── Public ───────────────────────────────────────────────────────────────────

// POST /api/signalements/annonce/:bienId — signaler une annonce
router.post(
  "/annonce/:bienId",
  controllerWrapper(SignalementController.createSignalement)
);

// ─── Admin ────────────────────────────────────────────────────────────────────

// GET /api/signalements/admin/count — badge sidebar
router.get(
  "/admin/count",
  authenticate,
  controllerWrapper(SignalementController.countBiensSignales)
);

// GET /api/signalements/admin — liste des biens signalés
router.get(
  "/admin",
  authenticate,
  controllerWrapper(SignalementController.listBiensSignales)
);

// GET /api/signalements/admin/:bienId — détail d'un bien signalé
router.get(
  "/admin/:bienId",
  authenticate,
  controllerWrapper(SignalementController.getSignalementDetail)
);

// POST /api/signalements/admin/:bienId/rejeter — rejeter (abusif, reset compteur)
router.post(
  "/admin/:bienId/rejeter",
  authenticate,
  controllerWrapper(SignalementController.rejeterSignalements)
);

// POST /api/signalements/admin/:bienId/avertir — avertir le propriétaire
router.post(
  "/admin/:bienId/avertir",
  authenticate,
  controllerWrapper(SignalementController.avertirProprietaire)
);

// POST /api/signalements/admin/:bienId/sanctionner — suppression définitive
router.post(
  "/admin/:bienId/sanctionner",
  authenticate,
  controllerWrapper(SignalementController.sanctionnerAnnonce)
);

export default router;
