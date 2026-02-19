import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as TypeLogementController from "../controllers/typeLogement.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createTypeLogementSchema,
  updateTypeLogementSchema,
} from "../validators/typeLogement.validator.js";

const router = Router();

/** GET /api/types-logement — public : types actifs */
router.get("/", controllerWrapper(TypeLogementController.getAll));

/** GET /api/types-logement/admin — admin : tous les types (actifs + inactifs) */
router.get("/admin", authenticate, controllerWrapper(TypeLogementController.getAllAdmin));

/** POST /api/types-logement — admin */
router.post(
  "/",
  authenticate,
  validate(createTypeLogementSchema),
  controllerWrapper(TypeLogementController.create)
);

/** PUT /api/types-logement/:id — admin */
router.put(
  "/:id",
  authenticate,
  validate(updateTypeLogementSchema),
  controllerWrapper(TypeLogementController.update)
);

/** DELETE /api/types-logement/:id — admin */
router.delete("/:id", authenticate, controllerWrapper(TypeLogementController.remove));

export default router;
