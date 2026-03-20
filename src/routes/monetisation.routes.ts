import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as MonetisationController from "../controllers/monetisation.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";

const router = Router();

// ─── Admin : Config ───────────────────────────────────────────────────────────
router.get("/admin/config", authenticate, controllerWrapper(MonetisationController.getConfigHandler));
router.put("/admin/config", authenticate, controllerWrapper(MonetisationController.updateConfigHandler));


// ─── Admin : Mises en avant ───────────────────────────────────────────────────
router.get("/admin/mises-en-avant", authenticate, controllerWrapper(MonetisationController.listMisesEnAvantAdminHandler));
router.patch("/admin/mises-en-avant/:id/confirmer", authenticate, controllerWrapper(MonetisationController.confirmerMiseEnAvantHandler));


// ─── Owner : Mises en avant ───────────────────────────────────────────────────
router.get("/owner/mises-en-avant", authenticateOwner, controllerWrapper(MonetisationController.getMisesEnAvantOwnerHandler));
router.post("/owner/biens/:bienId/mise-en-avant", authenticateOwner, controllerWrapper(MonetisationController.demanderMiseEnAvantHandler));

export default router;
