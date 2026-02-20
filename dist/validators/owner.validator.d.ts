import { z } from "zod";
export declare const registerOwnerSchema: z.ZodObject<{
    prenom: z.ZodString;
    nom: z.ZodString;
    sexe: z.ZodOptional<z.ZodString>;
    telephone: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, z.core.$strip>;
export type RegisterOwnerInput = z.infer<typeof registerOwnerSchema>;
export declare const loginOwnerSchema: z.ZodObject<{
    identifiant: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginOwnerInput = z.infer<typeof loginOwnerSchema>;
//# sourceMappingURL=owner.validator.d.ts.map