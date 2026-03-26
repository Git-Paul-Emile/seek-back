import { Router } from "express";
import * as configSiteController from "../controllers/configSite.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

// Routes publiques
router.get("/", configSiteController.get);

// Routes admin
router.put("/", authenticate, configSiteController.update);

export default router;
