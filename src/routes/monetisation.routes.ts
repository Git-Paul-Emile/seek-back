import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as MonetisationController from "../controllers/monetisation.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";

const router = Router();

// ─── Admin : Config ───────────────────────────────────────────────────────────
router.get("/admin/config", authenticate, controllerWrapper(MonetisationController.getConfigHandler));
router.put("/admin/config", authenticate, controllerWrapper(MonetisationController.updateConfigHandler));

// ─── Admin : Plans d'abonnement ───────────────────────────────────────────────
router.get("/admin/plans", authenticate, controllerWrapper(MonetisationController.listPlansHandler));
router.post("/admin/plans", authenticate, controllerWrapper(MonetisationController.createPlanHandler));
router.put("/admin/plans/:id", authenticate, controllerWrapper(MonetisationController.updatePlanHandler));
router.delete("/admin/plans/:id", authenticate, controllerWrapper(MonetisationController.deletePlanHandler));

// ─── Admin : Abonnements ──────────────────────────────────────────────────────
router.get("/admin/abonnements", authenticate, controllerWrapper(MonetisationController.listAbonnementsAdminHandler));
router.patch("/admin/abonnements/:id/confirmer", authenticate, controllerWrapper(MonetisationController.confirmerAbonnementHandler));
router.patch("/admin/abonnements/:id/resilier", authenticate, controllerWrapper(MonetisationController.resilierAbonnementHandler));

// ─── Admin : Mises en avant ───────────────────────────────────────────────────
router.get("/admin/mises-en-avant", authenticate, controllerWrapper(MonetisationController.listMisesEnAvantAdminHandler));
router.patch("/admin/mises-en-avant/:id/confirmer", authenticate, controllerWrapper(MonetisationController.confirmerMiseEnAvantHandler));

// ─── Owner : Plans disponibles ────────────────────────────────────────────────
router.get("/owner/plans", authenticateOwner, controllerWrapper(MonetisationController.listPlansActifsHandler));

// ─── Owner : Abonnements ──────────────────────────────────────────────────────
router.get("/owner/abonnement", authenticateOwner, controllerWrapper(MonetisationController.getAbonnementActifOwnerHandler));
router.get("/owner/abonnements", authenticateOwner, controllerWrapper(MonetisationController.getAbonnementsOwnerHandler));
router.post("/owner/abonnement/souscrire", authenticateOwner, controllerWrapper(MonetisationController.souscrireAbonnementHandler));

// ─── Owner : Mises en avant ───────────────────────────────────────────────────
router.get("/owner/mises-en-avant", authenticateOwner, controllerWrapper(MonetisationController.getMisesEnAvantOwnerHandler));
router.post("/owner/biens/:bienId/mise-en-avant", authenticateOwner, controllerWrapper(MonetisationController.demanderMiseEnAvantHandler));

export default router;
