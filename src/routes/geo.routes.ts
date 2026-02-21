import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as GeoController from "../controllers/geo.controller.js";

const router = Router();

/** GET /api/geo/pays */
router.get("/pays", controllerWrapper(GeoController.getPays));

/** GET /api/geo/pays/:paysId/villes */
router.get("/pays/:paysId/villes", controllerWrapper(GeoController.getVilles));

export default router;
