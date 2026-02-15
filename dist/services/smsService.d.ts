/**
 * Envoyer un SMS de réinitialisation de mot de passe
 */
export declare const sendPasswordResetSMS: (phone: string, code: string, nomComplet: string) => Promise<{
    success: boolean;
    devCode?: string;
}>;
/**
 * Envoyer un SMS de confirmation
 */
export declare const sendConfirmationSMS: (phone: string, message: string) => Promise<{
    success: boolean;
    devMessage?: string;
}>;
/**
 * Vérifier la configuration Twilio
 */
export declare const checkTwilioConfig: () => boolean;
/**
 * Formater un numéro de téléphone pour Twilio
 */
export declare const formatPhoneNumber: (phone: string) => string;
/**
 * Nettoyer les caractères spéciaux d'un numéro de téléphone
 */
export declare const sanitizePhoneNumber: (phone: string) => string;
//# sourceMappingURL=smsService.d.ts.map