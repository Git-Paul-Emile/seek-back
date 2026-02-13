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

export type ProprietaireInscriptionInput = z.infer<typeof proprietaireInscriptionSchema>;

// Schéma de connexion du propriétaire
export const proprietaireConnexionSchema = z.object({
  telephone: z
    .string()
    .regex(/^7[0-9]{8}$/, "Veuillez entrer un numéro de téléphone sénégalais valide"),
  mot_de_passe: z.string().min(1, "Le mot de passe est requis"),
});

export type ProprietaireConnexionInput = z.infer<typeof proprietaireConnexionSchema>;
