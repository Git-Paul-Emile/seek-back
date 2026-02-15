import twilio from "twilio";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import { generateOTP } from "../utils/crypto.js";
// Initialiser Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// Client Twilio (null si pas configuré)
const twilioClient = accountSid && authToken ? twilio(accountSid, authToken) : null;
/**
 * Envoyer un SMS de réinitialisation de mot de passe
 */
export const sendPasswordResetSMS = async (phone, code, nomComplet) => {
    // En dev, retourner le code sans envoyer de SMS
    if (!twilioClient || process.env.NODE_ENV !== "production") {
        console.log(`[DEV] Code OTP pour ${phone}: ${code}`);
        return { success: true, devCode: code };
    }
    try {
        await twilioClient.messages.create({
            body: `Seek: Votre code de vérification est ${code}. Expire dans 10 minutes.`,
            from: twilioPhoneNumber,
            to: phone,
        });
        return { success: true };
    }
    catch (error) {
        console.error("Erreur envoi SMS Twilio:", error);
        throw new AppError("Erreur lors de l'envoi du SMS", StatusCodes.INTERNAL_SERVER_ERROR);
    }
};
/**
 * Envoyer un SMS de confirmation
 */
export const sendConfirmationSMS = async (phone, message) => {
    // En dev, logger le message
    if (!twilioClient || process.env.NODE_ENV !== "production") {
        console.log(`[DEV] SMS pour ${phone}: ${message}`);
        return { success: true, devMessage: message };
    }
    try {
        await twilioClient.messages.create({
            body: `Seek: ${message}`,
            from: twilioPhoneNumber,
            to: phone,
        });
        return { success: true };
    }
    catch (error) {
        console.error("Erreur envoi SMS Twilio:", error);
        return { success: false };
    }
};
/**
 * Vérifier la configuration Twilio
 */
export const checkTwilioConfig = () => {
    return !!(accountSid && authToken && twilioPhoneNumber);
};
/**
 * Formater un numéro de téléphone pour Twilio
 */
export const formatPhoneNumber = (phone) => {
    // Enlever tous les caractères non numériques
    let cleaned = phone.replace(/[^0-9+]/g, "");
    // Si ça commence par 00, remplacer par +
    if (cleaned.startsWith("00")) {
        cleaned = "+" + cleaned.substring(2);
    }
    // Si ça commence par 7 (Sénégal) sans +, ajouter +
    if (cleaned.startsWith("7") && !cleaned.startsWith("+")) {
        cleaned = "+221" + cleaned;
    }
    return cleaned;
};
/**
 * Nettoyer les caractères spéciaux d'un numéro de téléphone
 */
export const sanitizePhoneNumber = (phone) => {
    return phone.replace(/[^0-9+]/g, "");
};
//# sourceMappingURL=smsService.js.map