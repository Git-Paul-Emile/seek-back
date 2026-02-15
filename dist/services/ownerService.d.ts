import { type ProprietaireInscriptionInput } from "../validators/ownerValidator.js";
export declare class ProprietaireService {
    /**
     * Enregistrer un nouveau propriétaire
     */
    register(data: ProprietaireInscriptionInput): Promise<{
        success: boolean;
        data: {
            owner: {
                nom_complet: string;
                telephone: string;
                email: string | null;
                adresse: string | null;
                id: string;
                whatsapp: string | null;
                ville: string | null;
                type_proprietaire: import("../generated/prisma/enums.js").TypeProprietaire;
                raison_sociale: string | null;
                profil_complet: boolean;
                taux_completude_profil: number;
                statut: import("../generated/prisma/enums.js").StatutProprietaire;
                role: string;
                date_creation: Date;
                date_modification: Date;
            };
            accessToken: string;
            refreshToken: string;
        };
        message: string;
    }>;
    /**
     * Authentifier un propriétaire et générer les tokens
     */
    login(telephone: string, mot_de_passe: string, userAgent?: string, ipAddress?: string): Promise<{
        success: boolean;
        data: {
            owner: {
                nom_complet: string;
                telephone: string;
                email: string | null;
                adresse: string | null;
                id: string;
                whatsapp: string | null;
                ville: string | null;
                type_proprietaire: import("../generated/prisma/enums.js").TypeProprietaire;
                raison_sociale: string | null;
                profil_complet: boolean;
                taux_completude_profil: number;
                statut: import("../generated/prisma/enums.js").StatutProprietaire;
                role: string;
                date_creation: Date;
                date_modification: Date;
            };
            accessToken: string;
            refreshToken: string;
        };
        message: string;
    }>;
    /**
     * Déconnexion - révoquer les tokens
     */
    logout(proprietaireId: string, res: any): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
     * Rafraîchir les tokens
     */
    refreshTokens(refreshTokenValue: string, userAgent?: string, ipAddress?: string): Promise<{
        success: boolean;
        data: {
            accessToken: string;
            refreshToken: string;
        };
        message: string;
    }>;
    /**
     * Obtenir le profil du propriétaire connecté
     */
    getProfile(proprietaireId: string): Promise<{
        success: boolean;
        data: {
            nom_complet: string;
            telephone: string;
            email: string | null;
            adresse: string | null;
            id: string;
            whatsapp: string | null;
            ville: string | null;
            type_proprietaire: import("../generated/prisma/enums.js").TypeProprietaire;
            raison_sociale: string | null;
            profil_complet: boolean;
            taux_completude_profil: number;
            statut: import("../generated/prisma/enums.js").StatutProprietaire;
            role: string;
            date_creation: Date;
            date_modification: Date;
        };
    }>;
    /**
     * Mettre à jour le profil du propriétaire connecté
     */
    updateProfile(proprietaireId: string, data: {
        nom_complet?: string;
        email?: string;
        adresse?: string;
        whatsapp?: string;
        ville?: string;
    }): Promise<{
        success: boolean;
        data: {
            nom_complet: string;
            telephone: string;
            email: string | null;
            adresse: string | null;
            id: string;
            whatsapp: string | null;
            ville: string | null;
            type_proprietaire: import("../generated/prisma/enums.js").TypeProprietaire;
            raison_sociale: string | null;
            profil_complet: boolean;
            taux_completude_profil: number;
            statut: import("../generated/prisma/enums.js").StatutProprietaire;
            role: string;
            date_creation: Date;
            date_modification: Date;
        };
        message: string;
    }>;
    /**
     * Changer le mot de passe directement (avec l'ancien mot de passe)
     */
    changePassword(proprietaireId: string, ancienMotDePasse: string, nouveauMotDePasse: string): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
     * Demander la réinitialisation du mot de passe par email
     */
    forgotPasswordByEmail(email: string): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
     * Demander la réinitialisation du mot de passe par SMS
     */
    forgotPasswordBySms(telephone: string): Promise<{
        success: boolean;
        message: string;
        devCode?: undefined;
    } | {
        success: boolean;
        devCode: string | undefined;
        message: string;
    }>;
    /**
     * Réinitialiser le mot de passe avec le code OTP (email)
     */
    resetPasswordByEmail(code: string, mot_de_passe: string): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
     * Réinitialiser le mot de passe avec le code OTP (SMS)
     */
    resetPasswordBySms(code: string, mot_de_passe: string): Promise<{
        success: boolean;
        message: string;
    }>;
    /**
     * Définir les cookies de tokens
     */
    setTokenCookies(res: any, accessToken: string, refreshToken: string): void;
    /**
     * Supprimer le compte du propriétaire connecté
     */
    deleteAccount(proprietaireId: string, res: any): Promise<{
        success: boolean;
        message: string;
    }>;
}
export declare const proprietaireService: ProprietaireService;
//# sourceMappingURL=ownerService.d.ts.map