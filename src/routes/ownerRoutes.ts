import { Router } from "express";
import {
  registerProprietaireHandler,
  loginProprietaireHandler,
  logoutProprietaireHandler,
  refreshTokensHandler,
  getProfileHandler,
  forgotPasswordByEmailHandler,
  forgotPasswordBySmsHandler,
  resetPasswordByEmailHandler,
  resetPasswordBySmsHandler,
  validateInscription,
  validateConnexion,
  validateForgotPasswordEmail,
  validateForgotPasswordSms,
  validateResetPassword,
} from "../controllers/ownerController.js";
import { authentifier } from "../middlewares/auth.middleware.js";
import {
  limiteurAuth,
  limiteurOtp,
  limiteurRefresh,
} from "../middlewares/rateLimiter.middleware.js";

const router = Router();

// ============= ROUTES PUBLIQUES =============

// Inscription
router.post(
  "/proprietaires/inscription",
  limiteurAuth,
  validateInscription,
  registerProprietaireHandler
);

// Connexion
router.post(
  "/proprietaires/connexion",
  limiteurAuth,
  validateConnexion,
  loginProprietaireHandler
);

// ============= ROUTES AUTH (Cookies) =============

// Rafraîchir les tokens
router.post(
  "/proprietaires/auth/refresh",
  limiteurRefresh,
  refreshTokensHandler
);

// Déconnexion
router.post(
  "/proprietaires/auth/deconnexion",
  logoutProprietaireHandler
);

// Profil connecté
router.get(
  "/proprietaires/auth/moi",
  authentifier,
  getProfileHandler
);

// ============= ROUTES MOT DE PASSE OUBLIÉ =============

// Demander reset par email
router.post(
  "/proprietaires/auth/mot-de-passe-oublie/email",
  limiteurOtp,
  validateForgotPasswordEmail,
  forgotPasswordByEmailHandler
);

// Demander reset par SMS
router.post(
  "/proprietaires/auth/mot-de-passe-oublie/sms",
  limiteurOtp,
  validateForgotPasswordSms,
  forgotPasswordBySmsHandler
);

// Réinitialiser avec code email
router.post(
  "/proprietaires/auth/reset-mot-de-passe/email",
  limiteurAuth,
  validateResetPassword,
  resetPasswordByEmailHandler
);

// Réinitialiser avec code SMS
router.post(
  "/proprietaires/auth/reset-mot-de-passe/sms",
  limiteurAuth,
  validateResetPassword,
  resetPasswordBySmsHandler
);

export default router;
