import { z } from "zod";
export declare const createStatutBienSchema: z.ZodObject<{
    nom: z.ZodString;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateStatutBienSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    actif: z.ZodOptional<z.ZodBoolean>;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CreateStatutBienInput = z.infer<typeof createStatutBienSchema>;
export type UpdateStatutBienInput = z.infer<typeof updateStatutBienSchema>;
//# sourceMappingURL=statutBien.validator.d.ts.map