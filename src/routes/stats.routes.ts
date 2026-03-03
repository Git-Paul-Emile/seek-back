import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import { getStats, getAdminStatsController, getProprietairesStatsController, getProprietaireDetailController } from "../controllers/stats.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

/** GET /api/stats — public */
router.get("/", controllerWrapper(getStats));

/** GET /api/stats/admin — admin auth */
router.get("/admin", authenticate, controllerWrapper(getAdminStatsController));

/** GET /api/stats/proprietaires — admin auth */
router.get("/proprietaires", authenticate, controllerWrapper(getProprietairesStatsController));

/** GET /api/stats/proprietaires/:id — admin auth */
router.get("/proprietaires/:id", authenticate, controllerWrapper(getProprietaireDetailController));

export default router;
