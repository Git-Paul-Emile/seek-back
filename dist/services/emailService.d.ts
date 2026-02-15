/**
 * Envoyer un email de réinitialisation de mot de passe
 */
export declare const sendPasswordResetEmail: (email: string, code: string, nomComplet: string) => Promise<void>;
/**
 * Envoyer un email de confirmation d'inscription
 */
export declare const sendWelcomeEmail: (email: string, nomComplet: string) => Promise<void>;
/**
 * Vérifier la configuration SMTP
 */
export declare const checkEmailConfig: () => boolean;
//# sourceMappingURL=emailService.d.ts.map