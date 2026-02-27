import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import { getStats, getAdminStatsController } from "../controllers/stats.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const router = Router();
/** GET /api/stats — public */
router.get("/", controllerWrapper(getStats));
/** GET /api/stats/admin — admin auth */
router.get("/admin", authenticate, controllerWrapper(getAdminStatsController));
export default router;
//# sourceMappingURL=stats.routes.js.map