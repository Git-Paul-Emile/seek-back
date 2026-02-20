import { z } from "zod";
export declare const createTypeTransactionSchema: z.ZodObject<{
    nom: z.ZodString;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateTypeTransactionSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    actif: z.ZodOptional<z.ZodBoolean>;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CreateTypeTransactionInput = z.infer<typeof createTypeTransactionSchema>;
export type UpdateTypeTransactionInput = z.infer<typeof updateTypeTransactionSchema>;
//# sourceMappingURL=typeTransaction.validator.d.ts.map