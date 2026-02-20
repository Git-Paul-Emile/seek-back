import { z } from "zod";
export const loginSchema = z.object({
    email: z
        .string({ required_error: "L'email est requis" })
        .email("Format d'email invalide")
        .toLowerCase(),
    password: z
        .string({ required_error: "Le mot de passe est requis" })
        .min(1, "Le mot de passe est requis"),
});
//# sourceMappingURL=auth.validator.js.map