import { z } from "zod";

export const createBailSchema = z.object({
  locataireId: z.string().uuid("ID locataire invalide"),
  typeBail: z.string().optional().nullable(),
  dateDebutBail: z.coerce.date(),
  dateFinBail: z.coerce.date().optional().nullable(),
  renouvellement: z.boolean().optional(),
  montantLoyer: z.number().positive("Le montant du loyer doit être positif"),
  montantCaution: z.number().nonnegative().optional().nullable(),
  cautionVersee: z.boolean().optional(),
  jourLimitePaiement: z.number().int().min(1).max(28).optional().nullable(),
  delaiGrace: z.number().int().min(0).max(30).optional(),
  frequencePaiement: z.string().optional().nullable(),
});

export const prolongerBailSchema = z.object({
  dateFinBail: z.coerce.date(),
});
