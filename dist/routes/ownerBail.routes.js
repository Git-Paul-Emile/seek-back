import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as BailController from "../controllers/bail.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
const router = Router();
router.use(authenticateOwner);
/** GET /api/owner/biens/loyers-retard */
router.get("/loyers-retard", controllerWrapper(BailController.getBiensEnRetard));
/** GET /api/owner/biens/avec-bail-actif */
router.get("/avec-bail-actif", controllerWrapper(BailController.getBiensAvecBailActif));
export default router;
//# sourceMappingURL=ownerBail.routes.js.map