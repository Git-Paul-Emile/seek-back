import { controllerWrapper } from "../utils/ControllerWrapper.js";
import { proprietaireService } from "../services/ownerService.js";
import { validate } from "../middlewares/validate.middleware.js";
import { proprietaireInscriptionSchema, proprietaireConnexionSchema, forgotPasswordEmailSchema, forgotPasswordSmsSchema, resetPasswordSchema } from "../validators/ownerValidator.js";
/**
 * Enregistrer un nouveau propriétaire
 */
const registerProprietaire = async (req, res, _next) => {
    const data = req.body;
    const result = await proprietaireService.register(data);
    // Définir les cookies d'authentification après l'inscription
    if (result.data?.accessToken && result.data?.refreshToken) {
        proprietaireService.setTokenCookies(res, result.data.accessToken, result.data.refreshToken);
    }
    res.status(201).json(result);
};
/**
 * Connecter un propriétaire
 */
const loginProprietaire = async (req, res, _next) => {
    const { telephone, mot_de_passe } = req.body;
    // Récupérer les infos de la requête pour le tracking
    const userAgent = req.headers["user-agent"] || undefined;
    const ipAddress = req.ip || req.socket.remoteAddress || undefined;
    const result = await proprietaireService.login(telephone, mot_de_passe, userAgent, ipAddress);
    // Définir les cookies
    if (result.data?.accessToken && result.data?.refreshToken) {
        proprietaireService.setTokenCookies(res, result.data.accessToken, result.data.refreshToken);
    }
    res.status(200).json({
        success: true,
        data: { owner: result.data?.owner },
        message: result.message
    });
};
/**
 * Déconnecter un propriétaire
 */
const logoutProprietaire = async (req, res, _next) => {
    const proprietaireId = req.proprietaire?.id;
    if (!proprietaireId) {
        return res.status(401).json({
            success: false,
            message: "Non autorisé"
        });
    }
    const result = await proprietaireService.logout(proprietaireId, res);
    res.status(200).json(result);
};
/**
 * Mettre à jour le profil du propriétaire connecté
 */
const updateProfile = async (req, res, _next) => {
    const proprietaireId = req.proprietaire?.id;
    if (!proprietaireId) {
        return res.status(401).json({
            success: false,
            message: "Non autorisé"
        });
    }
    const { nom_complet, email, adresse, whatsapp, ville } = req.body;
    const result = await proprietaireService.updateProfile(proprietaireId, {
        nom_complet,
        email,
        adresse,
        whatsapp,
        ville,
    });
    res.status(200).json(result);
};
export const updateProfileHandler = controllerWrapper(updateProfile);
/**
 * Changer le mot de passe directement
 */
const changePassword = async (req, res, _next) => {
    const proprietaireId = req.proprietaire?.id;
    if (!proprietaireId) {
        return res.status(401).json({
            success: false,
            message: "Non autorisé"
        });
    }
    const { ancien_mot_de_passe, nouveau_mot_de_passe } = req.body;
    if (!ancien_mot_de_passe || !nouveau_mot_de_passe) {
        return res.status(400).json({
            success: false,
            message: "L'ancien et le nouveau mot de passe sont requis"
        });
    }
    const result = await proprietaireService.changePassword(proprietaireId, ancien_mot_de_passe, nouveau_mot_de_passe);
    res.status(200).json(result);
};
export const changePasswordHandler = controllerWrapper(changePassword);
/**
 * Rafraîchir les tokens
 */
const refreshTokens = async (req, res, _next) => {
    const refreshToken = req.cookies?.refresh_token;
    if (!refreshToken) {
        return res.status(401).json({
            success: false,
            message: "Token de rafraîchissement manquant"
        });
    }
    const userAgent = req.headers["user-agent"] || undefined;
    const ipAddress = req.ip || req.socket.remoteAddress || undefined;
    const result = await proprietaireService.refreshTokens(refreshToken, userAgent, ipAddress);
    // Définir les nouveaux cookies
    if (result.data?.accessToken && result.data?.refreshToken) {
        proprietaireService.setTokenCookies(res, result.data.accessToken, result.data.refreshToken);
    }
    res.status(200).json({
        success: true,
        message: result.message
    });
};
/**
 * Obtenir le profil du propriétaire connecté
 */
const getProfile = async (req, res, _next) => {
    const proprietaireId = req.proprietaire?.id;
    if (!proprietaireId) {
        return res.status(401).json({
            success: false,
            message: "Non autorisé"
        });
    }
    const result = await proprietaireService.getProfile(proprietaireId);
    res.status(200).json(result);
};
/**
 * Demander la réinitialisation du mot de passe par email
 */
const forgotPasswordByEmail = async (req, res, _next) => {
    const { email } = req.body;
    const result = await proprietaireService.forgotPasswordByEmail(email);
    // En dev, retourner le code si disponible
    if (result?.devCode) {
        res.status(200).json({
            success: true,
            devCode: result.devCode,
            message: result.message,
        });
        return;
    }
    res.status(200).json(result);
};
/**
 * Demander la réinitialisation du mot de passe par SMS
 */
const forgotPasswordBySms = async (req, res, _next) => {
    const { telephone } = req.body;
    const result = await proprietaireService.forgotPasswordBySms(telephone);
    // En dev, retourner le code si disponible
    if (result?.devCode) {
        res.status(200).json({
            success: true,
            devCode: result.devCode,
            message: result.message,
        });
        return;
    }
    res.status(200).json(result);
};
/**
 * Réinitialiser le mot de passe avec code email
 */
const resetPasswordByEmail = async (req, res, _next) => {
    const { code, mot_de_passe } = req.body;
    const result = await proprietaireService.resetPasswordByEmail(code, mot_de_passe);
    res.status(200).json(result);
};
/**
 * Réinitialiser le mot de passe avec code SMS
 */
const resetPasswordBySms = async (req, res, _next) => {
    const { code, mot_de_passe } = req.body;
    const result = await proprietaireService.resetPasswordBySms(code, mot_de_passe);
    res.status(200).json(result);
};
// Export des handlers avec controllerWrapper
export const registerProprietaireHandler = controllerWrapper(registerProprietaire);
export const loginProprietaireHandler = controllerWrapper(loginProprietaire);
export const logoutProprietaireHandler = controllerWrapper(logoutProprietaire);
export const refreshTokensHandler = controllerWrapper(refreshTokens);
export const getProfileHandler = controllerWrapper(getProfile);
export const forgotPasswordByEmailHandler = controllerWrapper(forgotPasswordByEmail);
export const forgotPasswordBySmsHandler = controllerWrapper(forgotPasswordBySms);
export const resetPasswordByEmailHandler = controllerWrapper(resetPasswordByEmail);
export const resetPasswordBySmsHandler = controllerWrapper(resetPasswordBySms);
/**
 * Supprimer le compte du propriétaire connecté
 */
const deleteAccount = async (req, res, _next) => {
    const proprietaireId = req.proprietaire?.id;
    if (!proprietaireId) {
        return res.status(401).json({
            success: false,
            message: "Non autorisé"
        });
    }
    const result = await proprietaireService.deleteAccount(proprietaireId, res);
    res.status(200).json(result);
};
export const deleteAccountHandler = controllerWrapper(deleteAccount);
// Export des middlewares de validation
export const validateInscription = validate(proprietaireInscriptionSchema);
export const validateConnexion = validate(proprietaireConnexionSchema);
export const validateForgotPasswordEmail = validate(forgotPasswordEmailSchema);
export const validateForgotPasswordSms = validate(forgotPasswordSmsSchema);
export const validateResetPassword = validate(resetPasswordSchema);
//# sourceMappingURL=ownerController.js.map