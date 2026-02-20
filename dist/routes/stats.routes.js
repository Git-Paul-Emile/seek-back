import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import { getStats } from "../controllers/stats.controller.js";
const router = Router();
/** GET /api/stats — public */
router.get("/", controllerWrapper(getStats));
export default router;
//# sourceMappingURL=stats.routes.js.map