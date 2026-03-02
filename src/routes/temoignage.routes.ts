import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as TemoignageController from "../controllers/temoignage.controller.js";

const router = Router();

/** GET /api/temoignages — public : témoignages actifs */
router.get("/", controllerWrapper(TemoignageController.getAllActifs));

export default router;
