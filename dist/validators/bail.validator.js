import { z } from "zod";
export const createBailSchema = z.object({
    locataireId: z.string().uuid("ID locataire invalide"),
    typeBail: z.string().optional().nullable(),
    dateDebutBail: z.coerce.date(),
    dateFinBail: z.coerce.date().optional().nullable(),
    renouvellement: z.boolean().optional(),
    montantLoyer: z.number().positive("Le montant du loyer doit être positif"),
    montantCaution: z.number().nonnegative().optional().nullable(),
    frequencePaiement: z.string().optional().nullable(),
});
export const prolongerBailSchema = z.object({
    dateFinBail: z.coerce.date(),
});
//# sourceMappingURL=bail.validator.js.map