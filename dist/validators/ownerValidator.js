import { z } from "zod";
// Schéma d'inscription du propriétaire
export const proprietaireInscriptionSchema = z.object({
    nom_complet: z
        .string()
        .min(3, "Le nom doit contenir au moins 3 caractères")
        .max(100, "Le nom ne doit pas dépasser 100 caractères")
        .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom contient des caractères invalides"),
    telephone: z
        .string()
        .regex(/^7[0-9]{8}$/, "Veuillez entrer un numéro de téléphone sénégalais valide (9 chiffres commençant par 7)"),
    email: z
        .string()
        .email("Veuillez entrer un email valide")
        .optional()
        .or(z.literal("")),
    adresse: z
        .string()
        .min(5, "L'adresse doit contenir au moins 5 caractères")
        .max(200, "L'adresse ne doit pas dépasser 200 caractères"),
    mot_de_passe: z
        .string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
        .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
        .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
    accepter_cgus: z.boolean().refine(val => val === true, {
        message: "Vous devez accepter les conditions d'utilisation",
    }),
    accepter_confidentialite: z.boolean().refine(val => val === true, {
        message: "Vous devez prendre connaissance de la politique de confidentialité",
    }),
});
// Schéma de connexion du propriétaire
export const proprietaireConnexionSchema = z.object({
    telephone: z
        .string()
        .regex(/^7[0-9]{8}$/, "Veuillez entrer un numéro de téléphone sénégalais valide"),
    mot_de_passe: z.string().min(1, "Le mot de passe est requis"),
});
// Schéma de demande de mot de passe oublié (email)
export const forgotPasswordEmailSchema = z.object({
    email: z.string().email("Email invalide"),
});
// Schéma de demande de mot de passe oublié (SMS)
export const forgotPasswordSmsSchema = z.object({
    telephone: z.string().regex(/^7[0-9]{8}$/, "Numéro de téléphone sénégalais requis"),
});
// Schéma de reset de mot de passe avec code OTP
export const resetPasswordSchema = z.object({
    code: z.string().length(6, "Le code doit contenir 6 chiffres"),
    mot_de_passe: z
        .string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
        .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
        .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
});
// Schéma de changement de mot de passe (authentifié)
export const changePasswordSchema = z.object({
    mot_de_passe_actuel: z.string().min(1, "Mot de passe actuel requis"),
    nouveau_mot_de_passe: z
        .string()
        .min(8, "Le nouveau mot de passe doit contenir au moins 8 caractères")
        .regex(/[A-Z]/, "Le nouveau mot de passe doit contenir au moins une majuscule")
        .regex(/[a-z]/, "Le nouveau mot de passe doit contenir au moins une minuscule")
        .regex(/[0-9]/, "Le nouveau mot de passe doit contenir au moins un chiffre"),
});
//# sourceMappingURL=ownerValidator.js.map