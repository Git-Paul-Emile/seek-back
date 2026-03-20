import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as BailController from "../controllers/bail.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";

const router = Router();

router.use(authenticateOwner);

/** GET /api/owner/biens/loyers-retard */
router.get("/loyers-retard", controllerWrapper(BailController.getBiensEnRetard));

export default router;
