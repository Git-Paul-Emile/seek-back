/**
 * Générer un mot de passe aléatoire
 */
export declare const generateRandomPassword: (length?: number) => string;
/**
 * Générer un code OTP de 6 chiffres
 */
export declare const generateOTP: (length?: number) => string;
/**
 * Hacher un token pour stockage en base de données
 */
export declare const hashToken: (token: string) => string;
/**
 * Générer un token de réinitialisation sécurisé
 */
export declare const generateResetToken: () => string;
/**
 * Vérifier si un token OTP a expiré
 */
export declare const isOTPExpired: (createdAt: Date, expiresInMinutes?: number) => boolean;
/**
 * Nettoyer les caractères spéciaux d'un numéro de téléphone
 */
export declare const sanitizePhoneNumber: (phone: string) => string;
/**
 * Générer un ID de token unique
 */
export declare const generateTokenId: () => string;
//# sourceMappingURL=crypto.d.ts.map