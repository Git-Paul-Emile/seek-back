import { z } from "zod";
export declare const proprietaireInscriptionSchema: z.ZodObject<{
    nom_complet: z.ZodString;
    telephone: z.ZodString;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    adresse: z.ZodString;
    mot_de_passe: z.ZodString;
    accepter_cgus: z.ZodBoolean;
    accepter_confidentialite: z.ZodBoolean;
}, z.core.$strip>;
export type ProprietaireInscriptionInput = z.infer<typeof proprietaireInscriptionSchema>;
export declare const proprietaireConnexionSchema: z.ZodObject<{
    telephone: z.ZodString;
    mot_de_passe: z.ZodString;
}, z.core.$strip>;
export type ProprietaireConnexionInput = z.infer<typeof proprietaireConnexionSchema>;
export declare const forgotPasswordEmailSchema: z.ZodObject<{
    email: z.ZodString;
}, z.core.$strip>;
export type ForgotPasswordEmailInput = z.infer<typeof forgotPasswordEmailSchema>;
export declare const forgotPasswordSmsSchema: z.ZodObject<{
    telephone: z.ZodString;
}, z.core.$strip>;
export type ForgotPasswordSmsInput = z.infer<typeof forgotPasswordSmsSchema>;
export declare const resetPasswordSchema: z.ZodObject<{
    code: z.ZodString;
    mot_de_passe: z.ZodString;
}, z.core.$strip>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export declare const changePasswordSchema: z.ZodObject<{
    mot_de_passe_actuel: z.ZodString;
    nouveau_mot_de_passe: z.ZodString;
}, z.core.$strip>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
//# sourceMappingURL=ownerValidator.d.ts.map