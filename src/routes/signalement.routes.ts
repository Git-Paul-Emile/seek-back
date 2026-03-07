import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as SignalementController from "../controllers/signalement.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { optionalAuthOwner } from "../middlewares/ownerAuth.middleware.js";

const router = Router();

// POST /api/signalements — public (avec ou sans auth owner)
router.post("/", optionalAuthOwner, controllerWrapper(SignalementController.createSignalement));

// GET /api/signalements/admin/count — badge EN_ATTENTE (admin)
router.get("/admin/count", authenticate, controllerWrapper(SignalementController.countEnAttente));

// GET /api/signalements/admin — liste paginée (admin)
router.get("/admin", authenticate, controllerWrapper(SignalementController.listSignalements));

// GET /api/signalements/admin/:id — détail (admin)
router.get("/admin/:id", authenticate, controllerWrapper(SignalementController.getSignalementDetail));

// PATCH /api/signalements/admin/:id/traiter — traitement (admin)
router.patch("/admin/:id/traiter", authenticate, controllerWrapper(SignalementController.traiterSignalement));

export default router;
