import { z } from "zod";
export declare const createLocataireSchema: z.ZodObject<{
    nom: z.ZodString;
    prenom: z.ZodString;
    telephone: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    nbOccupants: z.ZodOptional<z.ZodNumber>;
    presenceEnfants: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateLocataireSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    prenom: z.ZodOptional<z.ZodString>;
    telephone: z.ZodOptional<z.ZodString>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    nbOccupants: z.ZodOptional<z.ZodNumber>;
    presenceEnfants: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
//# sourceMappingURL=locataire.validator.d.ts.map