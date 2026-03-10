import { Router } from "express";
import multer from "multer";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as BailController from "../controllers/bail.controller.js";
import * as ContratController from "../controllers/contrat.controller.js";
import * as QuittanceController from "../controllers/quittance.controller.js";
import * as NotificationController from "../controllers/notification.controller.js";
import * as EtatDesLieuxController from "../controllers/etatDesLieux.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router({ mergeParams: true });
const etatDesLieuxPhotoUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    cb(null, ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype));
  },
});

router.use(authenticateOwner);

router.get("/", controllerWrapper(BailController.getBailActif));
router.get("/historique", controllerWrapper(BailController.getHistoriqueBails));
router.post("/", controllerWrapper(BailController.creerBail));

router.delete("/:bailId", validateId, controllerWrapper(BailController.annulerBail));
router.patch("/:bailId/terminer", validateId, controllerWrapper(BailController.terminerBail));
router.patch("/:bailId/resilier", validateId, controllerWrapper(BailController.resilierBail));
router.patch("/:bailId/prolonger", validateId, controllerWrapper(BailController.prolongerBail));
router.patch("/:bailId/preavis", validateId, controllerWrapper(BailController.mettreEnPreavis));
router.patch("/:bailId/renouvellement", validateId, controllerWrapper(BailController.mettreEnRenouvellement));
router.patch("/:bailId/archiver", validateId, controllerWrapper(BailController.archiverBail));

router.get("/mobile-money", controllerWrapper(BailController.getMobileMoney));
router.get("/a-archiver", controllerWrapper(BailController.getBailAArchiver));

router.get("/:bailId/echeancier", validateId, controllerWrapper(BailController.getEcheancier));
router.post("/:bailId/echeancier/prolonger-annee", validateId, controllerWrapper(BailController.prolongerEcheancesAnnee));
router.patch("/:bailId/echeancier/payer-multiple", validateId, controllerWrapper(BailController.payerMoisMultiples));
router.patch("/:bailId/echeancier/:echeanceId/payer", validateId, controllerWrapper(BailController.payerEcheance));
router.patch("/:bailId/echeancier/:echeanceId/confirmer", validateId, controllerWrapper(BailController.confirmerReception));

router.get("/:bailId/echeancier/:echeanceId/quittance", validateId, controllerWrapper(QuittanceController.getQuittance));
router.post("/:bailId/echeancier/:echeanceId/quittance", validateId, controllerWrapper(QuittanceController.genererQuittance));
router.post("/:bailId/echeancier/:echeanceId/rappel", validateId, controllerWrapper(NotificationController.envoyerRappel));

router.get("/:bailId/quittances", validateId, controllerWrapper(QuittanceController.getQuittancesBail));
router.get("/:bailId/notifications", validateId, controllerWrapper(NotificationController.getNotificationsBail));

router.get("/:bailId/solde", validateId, controllerWrapper(BailController.getSolde));
router.get("/:bailId/caution", validateId, controllerWrapper(BailController.getCaution));
router.patch("/:bailId/caution/restituer", validateId, controllerWrapper(BailController.restituerCaution));

router.get("/:bailId/etat-des-lieux", controllerWrapper(EtatDesLieuxController.getEtatsDesLieux));
router.post("/:bailId/etat-des-lieux", controllerWrapper(EtatDesLieuxController.createEtatDesLieux));
router.patch("/:bailId/etat-des-lieux/:etatDesLieuxId", controllerWrapper(EtatDesLieuxController.updateEtatDesLieux));
router.patch("/:bailId/etat-des-lieux/:etatDesLieuxId/signer", controllerWrapper(EtatDesLieuxController.signerEtatDesLieuxOwner));
router.post("/:bailId/etat-des-lieux/:etatDesLieuxId/items", controllerWrapper(EtatDesLieuxController.addItem));
router.patch("/:bailId/etat-des-lieux/:etatDesLieuxId/items/:itemId", controllerWrapper(EtatDesLieuxController.updateItem));
router.delete("/:bailId/etat-des-lieux/:etatDesLieuxId/items/:itemId", controllerWrapper(EtatDesLieuxController.deleteItem));
router.post(
  "/:bailId/etat-des-lieux/:etatDesLieuxId/items/:itemId/photos",
  etatDesLieuxPhotoUpload.single("photo"),
  controllerWrapper(EtatDesLieuxController.addPhoto)
);
router.delete(
  "/:bailId/etat-des-lieux/:etatDesLieuxId/items/:itemId/photos/:photoId",
  controllerWrapper(EtatDesLieuxController.deletePhoto)
);

router.get("/:bailId/contrat", validateId, controllerWrapper(ContratController.getContrat));
router.post("/:bailId/contrat", validateId, controllerWrapper(ContratController.genererContrat));
router.patch("/:bailId/contrat/:contratId", validateId, controllerWrapper(ContratController.updateContrat));
router.patch("/:bailId/contrat/:contratId/activer", validateId, controllerWrapper(ContratController.activerContrat));
router.post("/:bailId/contrat/:contratId/envoyer", validateId, controllerWrapper(ContratController.envoyerContrat));

export default router;
