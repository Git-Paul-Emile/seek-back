import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as BienController from "../controllers/bien.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { uploadPhotosMiddleware } from "../middlewares/uploadMultiple.middleware.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

/** GET /api/biens/stats — statistiques du propriétaire connecté */
router.get(
  "/stats",
  authenticateOwner,
  controllerWrapper(BienController.getOwnerStatsController)
);

/** GET /api/biens/draft — récupérer le brouillon du propriétaire */
router.get(
  "/draft",
  authenticateOwner,
  controllerWrapper(BienController.getDraft)
);

/** POST /api/biens/draft — enregistrer / mettre à jour le brouillon */
router.post(
  "/draft",
  authenticateOwner,
  uploadPhotosMiddleware,
  controllerWrapper(BienController.saveDraft)
);

/** PATCH /api/biens/:id/soumettre — soumettre pour publication */
router.patch(
  "/:id/soumettre",
  authenticateOwner,
  validateId,
  controllerWrapper(BienController.soumettreAnnonce)
);

/** PATCH /api/biens/:id/retour-brouillon — annuler/dépublier vers brouillon */
router.patch(
  "/:id/retour-brouillon",
  authenticateOwner,
  validateId,
  controllerWrapper(BienController.retourBrouillon)
);

/** PATCH /api/biens/:id/annuler — annuler définitivement une annonce */
router.patch(
  "/:id/annuler",
  authenticateOwner,
  validateId,
  controllerWrapper(BienController.annulerAnnonce)
);

/** PATCH /api/biens/:id/soumettre-revision — soumettre une modification d'une annonce publiée */
router.patch(
  "/:id/soumettre-revision",
  authenticateOwner,
  validateId,
  uploadPhotosMiddleware,
  controllerWrapper(BienController.soumettreRevision)
);

/** GET /api/biens — liste des biens du propriétaire */
router.get(
  "/",
  authenticateOwner,
  controllerWrapper(BienController.getBiens)
);

/** DELETE /api/biens/:id — supprimer un brouillon */
router.delete(
  "/:id",
  authenticateOwner,
  validateId,
  controllerWrapper(BienController.deleteBien)
);

/** GET /api/biens/:id */
router.get(
  "/:id",
  validateId,
  controllerWrapper(BienController.getBienById)
);

/** GET /api/biens/public/dernieres — dernières annonces publiées (pour page d'accueil) */
router.get(
  "/public/dernieres",
  controllerWrapper(BienController.getDernieresAnnonces)
);

/** GET /api/biens/public/:id — une annonce publiée (accessible publiquement) */
router.get(
  "/public/:id",
  validateId,
  controllerWrapper(BienController.getAnnoncePublie)
);

/** POST /api/biens/public/:id/signaler — signaler une annonce */
router.post(
  "/public/:id/signaler",
  validateId,
  controllerWrapper(BienController.signalerAnnonce)
);

/** GET /api/biens/public/:id/similaires — annonces similaires */
router.get(
  "/public/:id/similaires",
  validateId,
  controllerWrapper(BienController.getAnnoncesSimilaires)
);

export default router;
