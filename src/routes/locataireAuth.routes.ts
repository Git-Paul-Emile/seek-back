import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as LocataireAuthController from "../controllers/locataireAuth.controller.js";
import { authenticateLocataire } from "../middlewares/locataireAuth.middleware.js";

const router = Router();

/** POST /api/locataire/auth/activer — activer le compte avec le token */
router.post("/activer", controllerWrapper(LocataireAuthController.activer));

/** POST /api/locataire/auth/login */
router.post("/login", controllerWrapper(LocataireAuthController.login));

/** POST /api/locataire/auth/refresh */
router.post("/refresh", controllerWrapper(LocataireAuthController.refreshToken));

/** POST /api/locataire/auth/logout */
router.post(
  "/logout",
  authenticateLocataire,
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

export default router;
