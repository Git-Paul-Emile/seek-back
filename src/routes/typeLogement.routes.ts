import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as TypeLogementController from "../controllers/typeLogement.controller.js";
import * as TypeLogementChampController from "../controllers/typeLogementChamp.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { uploadImageMiddleware } from "../middlewares/upload.middleware.js";
import {
  createTypeLogementSchema,
  updateTypeLogementSchema,
} from "../validators/typeLogement.validator.js";

const router = Router();

/** GET /api/types-logement - public : types actifs */
router.get("/", controllerWrapper(TypeLogementController.getAll));

/** GET /api/types-logement/admin - admin : tous les types (actifs + inactifs) */
router.get("/admin", authenticate, controllerWrapper(TypeLogementController.getAllAdmin));

/** POST /api/types-logement - admin
 *  Accepte multipart/form-data avec champ optionnel "image" (fichier)
 */
router.post(
  "/",
  authenticate,
  uploadImageMiddleware,           // Parse le fichier avant la validation
  validate(createTypeLogementSchema),
  controllerWrapper(TypeLogementController.create)
);

/** PUT /api/types-logement/:id - admin
 *  Accepte multipart/form-data (avec fichier) ou JSON (toggle actif, etc.)
 */
router.put(
  "/:id",
  authenticate,
  uploadImageMiddleware,           // Transparent pour les requêtes JSON
  validate(updateTypeLogementSchema),
  controllerWrapper(TypeLogementController.update)
);

/** DELETE /api/types-logement/:id - admin */
router.delete("/:id", authenticate, controllerWrapper(TypeLogementController.remove));

/** GET /api/types-logement/:id/champs - public : champs associés avec ordre */
router.get("/:id/champs", controllerWrapper(TypeLogementChampController.getChamps));

/** GET /api/types-logement/:id/champs/admin - admin : tous les champs + état d'association */
router.get("/:id/champs/admin", authenticate, controllerWrapper(TypeLogementChampController.getChampsAdmin));

/** PUT /api/types-logement/:id/champs - admin : mise à jour de l'association */
router.put("/:id/champs", authenticate, controllerWrapper(TypeLogementChampController.setChamps));

export default router;
