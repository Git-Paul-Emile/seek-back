import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as LocataireAuthController from "../controllers/locataireAuth.controller.js";
import { authenticateLocataire } from "../middlewares/locataireAuth.middleware.js";
import { uploadImageMiddleware } from "../middlewares/upload.middleware.js";
import { uploadImage } from "../services/cloudinary.service.js";

const router = Router();

/** POST /api/locataire/auth/activer — activer le compte avec le token */
router.post("/activer", controllerWrapper(LocataireAuthController.activer));

/** POST /api/locataire/auth/forgot-password */
router.post("/forgot-password", controllerWrapper(LocataireAuthController.forgotPassword));

/** POST /api/locataire/auth/reset-password */
router.post("/reset-password", controllerWrapper(LocataireAuthController.resetPassword));

/** POST /api/locataire/auth/login */
router.post("/login", controllerWrapper(LocataireAuthController.login));

/** POST /api/locataire/auth/refresh */
router.post("/refresh", controllerWrapper(LocataireAuthController.refreshToken));

/** POST /api/locataire/auth/logout */
router.post(
  "/logout",
  controllerWrapper(LocataireAuthController.logout)
);

/** GET /api/locataire/auth/me */
router.get(
  "/me",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.me)
);

/** PUT /api/locataire/auth/profil */
router.put(
  "/profil",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.updateProfil)
);

/** GET /api/locataire/auth/echeancier */
router.get(
  "/echeancier",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.getEcheancier)
);

/** GET /api/locataire/auth/contrat */
router.get(
  "/contrat",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.getContrat)
);

/** POST /api/locataire/auth/paiement/payer — enregistrer un paiement (1 ou N mois) */
router.post(
  "/paiement/payer",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.payerEcheances)
);

/** POST /api/locataire/auth/paiement/initier — initier un paiement Mobile Money */
router.post(
  "/paiement/initier",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.initierPaiement)
);

/** GET /api/locataire/auth/quittances — quittances du locataire */
router.get(
  "/quittances",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.getQuittances)
);

/** GET /api/locataire/auth/verification — récupérer le statut de vérification */
router.get(
  "/verification",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.getVerification)
);

/** POST /api/locataire/auth/verification — soumettre les documents de vérification */
router.post(
  "/verification",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.submitVerification)
);

/** DELETE /api/locataire/auth/verification — annuler la demande de vérification */
router.delete(
  "/verification",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.cancelVerification)
);

/** GET /api/locataire/auth/proprietaire — récupérer les infos du propriétaire */
router.get(
  "/proprietaire",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.getProprietaire)
);

/** GET /api/locataire/auth/historique — historique de tous les logements */
router.get(
  "/historique",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.getHistoriqueLogement)
);

/** GET /api/locataire/auth/documents — documents du bien (bail actif) */
router.get(
  "/documents",
  authenticateLocataire,
  controllerWrapper(LocataireAuthController.getDocumentsBien)
);

/** POST /api/locataire/auth/verification/upload — uploader une image de vérification */
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
