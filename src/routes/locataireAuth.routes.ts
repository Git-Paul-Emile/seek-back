import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as LocataireAuthController from "../controllers/locataireAuth.controller.js";
import { authenticateLocataire } from "../middlewares/locataireAuth.middleware.js";
import { uploadImageMiddleware } from "../middlewares/upload.middleware.js";
import { uploadImage } from "../services/cloudinary.service.js";

const router = Router();

router.post("/activer", controllerWrapper(LocataireAuthController.activer));
router.post("/forgot-password", controllerWrapper(LocataireAuthController.forgotPassword));
router.post("/reset-password", controllerWrapper(LocataireAuthController.resetPassword));
router.post("/login", controllerWrapper(LocataireAuthController.login));
router.post("/refresh", controllerWrapper(LocataireAuthController.refreshToken));
router.post("/logout", controllerWrapper(LocataireAuthController.logout));

router.get("/me", authenticateLocataire, controllerWrapper(LocataireAuthController.me));
router.put("/profil", authenticateLocataire, controllerWrapper(LocataireAuthController.updateProfil));

router.get("/echeancier", authenticateLocataire, controllerWrapper(LocataireAuthController.getEcheancier));
router.get("/contrat", authenticateLocataire, controllerWrapper(LocataireAuthController.getContrat));
router.post("/paiement/payer", authenticateLocataire, controllerWrapper(LocataireAuthController.payerEcheances));
router.post("/paiement/initier", authenticateLocataire, controllerWrapper(LocataireAuthController.initierPaiement));
router.get("/quittances", authenticateLocataire, controllerWrapper(LocataireAuthController.getQuittances));

router.get("/verification", authenticateLocataire, controllerWrapper(LocataireAuthController.getVerification));
router.post("/verification", authenticateLocataire, controllerWrapper(LocataireAuthController.submitVerification));
router.delete("/verification", authenticateLocataire, controllerWrapper(LocataireAuthController.cancelVerification));

router.get("/proprietaire", authenticateLocataire, controllerWrapper(LocataireAuthController.getProprietaire));
router.get("/historique", authenticateLocataire, controllerWrapper(LocataireAuthController.getHistoriqueLogement));
router.get("/documents", authenticateLocataire, controllerWrapper(LocataireAuthController.getDocumentsBien));

router.get("/etat-des-lieux", authenticateLocataire, controllerWrapper(LocataireAuthController.getEtatsDesLieux));
router.patch(
  "/etat-des-lieux/:etatDesLieuxId/signer",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.signerEtatDesLieux)
);

router.post(
  "/verification/upload",
  authenticateLocataire,
  uploadImageMiddleware,
  controllerWrapper(async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ status: "error", message: "Aucun fichier fourni" });
    }

    const result = await uploadImage(req.file.buffer, "seek/verifications/locataires");
    res.json({ status: "success", data: result });
  })
);

export default router;
