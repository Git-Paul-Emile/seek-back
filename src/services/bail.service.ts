import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as BailRepo from "../repositories/bail.repository.js";
import { prisma } from "../config/database.js";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Récupère l'ID du statut bien par son slug */
const getStatutId = async (slug: string): Promise<string> => {
  const statut = await BailRepo.getStatutBienBySlug(slug);
  if (!statut) throw new AppError(`Statut "${slug}" introuvable`, StatusCodes.INTERNAL_SERVER_ERROR);
  return statut.id;
};

/** Vérifie que le bien appartient au propriétaire */
const assertBienOwner = async (bienId: string, proprietaireId: string) => {
  const bien = await prisma.bien.findUnique({
    where: { id: bienId },
    select: { proprietaireId: true, typeTransaction: { select: { slug: true } } },
  });
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  if (bien.proprietaireId !== proprietaireId)
    throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  return bien;
};

// ─── Récupérer le bail actif d'un bien ───────────────────────────────────────

export const getBailActif = async (bienId: string, proprietaireId: string) => {
  await assertBienOwner(bienId, proprietaireId);
  return BailRepo.findActifByBien(bienId);
};

// ─── Historique des baux d'un bien ───────────────────────────────────────────

export const getHistoriqueBails = async (
  bienId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);
  return BailRepo.findByBien(bienId);
};

// ─── Créer un bail ────────────────────────────────────────────────────────────

export const creerBail = async (
  bienId: string,
  proprietaireId: string,
  data: {
    locataireId: string;
    typeBail?: string | null;
    dateDebutBail: Date;
    dateFinBail?: Date | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
  }
) => {
  const bien = await assertBienOwner(bienId, proprietaireId);

  // Vérifier qu'il n'y a pas déjà un bail ACTIF sur ce bien
  const existingBail = await BailRepo.findActifByBien(bienId);
  if (existingBail) {
    throw new AppError(
      "Ce bien a déjà un bail actif. Terminez-le avant d'en créer un nouveau.",
      StatusCodes.CONFLICT
    );
  }

  // Vérifier que le locataire appartient au propriétaire
  const locataire = await prisma.locataire.findUnique({
    where: { id: data.locataireId },
    select: { proprietaireId: true },
  });
  if (!locataire) throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
  if (locataire.proprietaireId !== proprietaireId)
    throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  // Créer le bail
  const bail = await BailRepo.create({
    bienId,
    locataireId: data.locataireId,
    proprietaireId,
    typeBail: data.typeBail,
    dateDebutBail: data.dateDebutBail,
    dateFinBail: data.dateFinBail,
    renouvellement: data.renouvellement ?? false,
    montantLoyer: data.montantLoyer,
    montantCaution: data.montantCaution,
    frequencePaiement: data.frequencePaiement,
  });

  // Mettre à jour le statut du bien → "Loué"
  const statutLoueId = await getStatutId("loue");
  await BailRepo.updateBienStatut(bienId, statutLoueId);

  return bail;
};

// ─── Terminer un bail ─────────────────────────────────────────────────────────

export const terminerBail = async (
  bienId: string,
  bailId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);
  if (bail.statut !== "ACTIF")
    throw new AppError("Ce bail n'est pas actif", StatusCodes.BAD_REQUEST);

  const updated = await BailRepo.updateStatut(bailId, "TERMINE");

  // Remettre le bien à "Libre"
  const statutLibreId = await getStatutId("libre");
  await BailRepo.updateBienStatut(bienId, statutLibreId);

  return updated;
};

// ─── Résilier un bail ─────────────────────────────────────────────────────────

export const resilierBail = async (
  bienId: string,
  bailId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);
  if (bail.statut !== "ACTIF")
    throw new AppError("Ce bail n'est pas actif", StatusCodes.BAD_REQUEST);

  const updated = await BailRepo.updateStatut(bailId, "RESILIE");

  // Remettre le bien à "Libre"
  const statutLibreId = await getStatutId("libre");
  await BailRepo.updateBienStatut(bienId, statutLibreId);

  return updated;
};

// ─── Prolonger un bail ────────────────────────────────────────────────────────

export const prolongerBail = async (
  bienId: string,
  bailId: string,
  proprietaireId: string,
  dateFinBail: Date
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);
  if (bail.statut !== "ACTIF")
    throw new AppError("Ce bail n'est pas actif", StatusCodes.BAD_REQUEST);

  return BailRepo.prolonger(bailId, dateFinBail);
};
