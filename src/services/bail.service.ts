import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as BailRepo from "../repositories/bail.repository.js";
import { prisma } from "../config/database.js";
import type { EcheancierLoyerCreateManyInput } from "../generated/prisma/models/EcheancierLoyer.js";

// ─── Génération de l'échéancier ───────────────────────────────────────────────

function advanceByFrequence(date: Date, frequence: string): Date {
  const next = new Date(date);
  switch (frequence) {
    case "journalier":   next.setDate(next.getDate() + 1); break;
    case "hebdomadaire": next.setDate(next.getDate() + 7); break;
    case "trimestriel":  next.setMonth(next.getMonth() + 3); break;
    case "semestriel":   next.setMonth(next.getMonth() + 6); break;
    case "annuel":       next.setFullYear(next.getFullYear() + 1); break;
    default:             next.setMonth(next.getMonth() + 1); // mensuel
  }
  return next;
}

function genererEcheances(
  bailId: string, bienId: string,
  proprietaireId: string, locataireId: string,
  dateDebut: Date, dateFin: Date | null,
  frequence: string, montant: number,
  dateMax?: Date // arrêt au 31/12 de l'année cible
): EcheancierLoyerCreateManyInput[] {
  const MAX = 36;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const echeances: EcheancierLoyerCreateManyInput[] = [];
  let current = new Date(dateDebut);
  while (echeances.length < MAX) {
    if (dateFin && current > dateFin) break;
    if (dateMax && current > dateMax) break;
    const due = new Date(current);
    due.setHours(0, 0, 0, 0);
    // Statut initial : EN_ATTENTE si déjà due, A_VENIR sinon
    const statut = due <= today ? "EN_ATTENTE" as const : "A_VENIR" as const;
    echeances.push({
      bailId, bienId, proprietaireId, locataireId,
      dateEcheance: new Date(current),
      montant, statut,
    });
    current = advanceByFrequence(current, frequence);
  }
  return echeances;
}

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
    cautionVersee?: boolean;
    jourLimitePaiement?: number | null;
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

  // Créer le bail (sera en EN_ATTENTE par défaut, activation lors de la validation du contrat)
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
    cautionVersee: data.cautionVersee ?? false,
    jourLimitePaiement: data.jourLimitePaiement,
    frequencePaiement: data.frequencePaiement,
  });

  return bail;
};

// ─── Mettre un bail en préavis ────────────────────────────────────────────────

export const mettreEnPreavis = async (
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
    throw new AppError("Le bail doit être actif pour passer en préavis", StatusCodes.BAD_REQUEST);
  if (!bail.dateFinBail)
    throw new AppError("Impossible de mettre en préavis un bail sans date de fin", StatusCodes.BAD_REQUEST);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return BailRepo.updateStatut(bailId, "EN_PREAVIS" as any);
};

// ─── Mettre un bail en renouvellement ────────────────────────────────────────

export const mettreEnRenouvellement = async (
  bienId: string,
  bailId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);
  if ((bail.statut as string) !== "EN_PREAVIS")
    throw new AppError("Le bail doit être en préavis pour passer en renouvellement", StatusCodes.BAD_REQUEST);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return BailRepo.updateStatut(bailId, "EN_RENOUVELLEMENT" as any);
};

// ─── Archiver un bail ─────────────────────────────────────────────────────────

export const archiverBail = async (
  bienId: string,
  bailId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);
  if (bail.statut !== "TERMINE" && bail.statut !== "RESILIE")
    throw new AppError("Seul un bail terminé ou résilié peut être archivé", StatusCodes.BAD_REQUEST);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updated = await BailRepo.updateStatut(bailId, "ARCHIVE" as any);

  // Locataire → ANCIEN
  await prisma.locataire.update({
    where: { id: bail.locataireId },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { statut: "ANCIEN" as any },
  });

  return updated;
};

// ─── Récupérer le bail à archiver d'un bien ──────────────────────────────────

export const getBailAArchiver = async (bienId: string, proprietaireId: string) => {
  await assertBienOwner(bienId, proprietaireId);
  return BailRepo.findAArchiverByBien(bienId);
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
  if (!["ACTIF", "EN_PREAVIS", "EN_RENOUVELLEMENT"].includes(bail.statut as string))
    throw new AppError("Ce bail ne peut pas être terminé dans son état actuel", StatusCodes.BAD_REQUEST);

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
  if (!["ACTIF", "EN_PREAVIS"].includes(bail.statut as string))
    throw new AppError("Ce bail ne peut pas être résilié dans son état actuel", StatusCodes.BAD_REQUEST);

  const updated = await BailRepo.updateStatut(bailId, "RESILIE");

  // Remettre le bien à "Libre"
  const statutLibreId = await getStatutId("libre");
  await BailRepo.updateBienStatut(bienId, statutLibreId);

  return updated;
};

// ─── Annuler un bail (suppression + retour bien à "Libre") ───────────────────

export const annulerBail = async (
  bienId: string,
  bailId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);

  // Supprimer le bail (contrat supprimé en cascade par Prisma)
  await BailRepo.remove(bailId);

  // Remettre le bien à "Libre"
  const statutLibreId = await getStatutId("libre");
  await BailRepo.updateBienStatut(bienId, statutLibreId);
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
  if (!["ACTIF", "EN_PREAVIS", "EN_RENOUVELLEMENT"].includes(bail.statut as string))
    throw new AppError("Ce bail ne peut pas être prolongé dans son état actuel", StatusCodes.BAD_REQUEST);

  // Si en préavis ou renouvellement, la prolongation remet le bail en ACTIF
  if ((bail.statut as string) === "EN_PREAVIS" || (bail.statut as string) === "EN_RENOUVELLEMENT") {
    return prisma.bailLocation.update({
      where: { id: bailId },
      data: { dateFinBail, statut: "ACTIF", renouvellement: true },
      include: {
        locataire: { select: { id: true, nom: true, prenom: true, telephone: true, email: true, statut: true, nbOccupants: true, presenceEnfants: true } },
        bien: { select: { id: true, titre: true, ville: true, quartier: true, prix: true, caution: true, frequencePaiement: true, typeTransaction: { select: { slug: true } } } },
      },
    });
  }
  return BailRepo.prolonger(bailId, dateFinBail);
};

// ─── Échéancier ───────────────────────────────────────────────────────────────

const GRACE_DAYS = 5; // jours après l'échéance avant EN_RETARD

export const getEcheancier = async (bienId: string, bailId: string, proprietaireId: string) => {
  await assertBienOwner(bienId, proprietaireId);

  const now = new Date();
  const graceLimit = new Date(now.getTime() - GRACE_DAYS * 24 * 60 * 60 * 1000);

  // A_VENIR → EN_ATTENTE quand la date est arrivée
  await prisma.echeancierLoyer.updateMany({
    where: { bailId, statut: "A_VENIR", dateEcheance: { lte: now } },
    data: { statut: "EN_ATTENTE" },
  });

  // EN_ATTENTE → EN_RETARD après la période de grâce (5 jours)
  await prisma.echeancierLoyer.updateMany({
    where: { bailId, statut: "EN_ATTENTE", dateEcheance: { lt: graceLimit } },
    data: { statut: "EN_RETARD" },
  });

  return prisma.echeancierLoyer.findMany({
    where: { bailId },
    orderBy: { dateEcheance: "asc" },
  });
};

export const payerEcheance = async (
  bienId: string,
  bailId: string,
  echeanceId: string,
  proprietaireId: string,
  data: { datePaiement: Date; modePaiement?: string; reference?: string; note?: string; montant?: number }
) => {
  await assertBienOwner(bienId, proprietaireId);
  const echeance = await prisma.echeancierLoyer.findUnique({ where: { id: echeanceId } });
  if (!echeance) throw new AppError("Échéance introuvable", StatusCodes.NOT_FOUND);
  if (echeance.bailId !== bailId) throw new AppError("Échéance non associée à ce bail", StatusCodes.BAD_REQUEST);
  if (echeance.statut === "PAYE" || echeance.statut === "ANNULE")
    throw new AppError("Cette échéance est déjà soldée ou annulée", StatusCodes.BAD_REQUEST);

  // Vérifier la séquentialité : aucune échéance antérieure ne doit être impayée
  const precedente = await prisma.echeancierLoyer.findFirst({
    where: {
      bailId,
      dateEcheance: { lt: echeance.dateEcheance },
      statut: { notIn: ["PAYE", "ANNULE"] },
    },
    orderBy: { dateEcheance: "desc" },
  });
  if (precedente) {
    const dateStr = new Date(precedente.dateEcheance).toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
    throw new AppError(
      `Veuillez d'abord payer l'échéance de ${dateStr}`,
      StatusCodes.BAD_REQUEST
    );
  }

  const montantPaye = data.montant ?? echeance.montant;
  const statut = montantPaye >= echeance.montant ? "PAYE" : "PARTIEL";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (prisma.echeancierLoyer.update as any)({
    where: { id: echeanceId },
    data: {
      statut,
      datePaiement: data.datePaiement,
      modePaiement: data.modePaiement,
      reference: data.reference,
      note: data.note,
      montant: echeance.montant,
      sourceEnregistrement: "PROPRIETAIRE",
    },
  });
};

export const payerMoisMultiples = async (
  bienId: string,
  bailId: string,
  proprietaireId: string,
  data: { datePaiement: Date; nombreMois: number; modePaiement?: string; reference?: string; note?: string }
) => {
  await assertBienOwner(bienId, proprietaireId);
  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId) throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);

  // Récupérer les N prochaines échéances non payées dans l'ordre chronologique
  const unpaid = await prisma.echeancierLoyer.findMany({
    where: { bailId, statut: { notIn: ["PAYE", "ANNULE"] } },
    orderBy: { dateEcheance: "asc" },
    take: data.nombreMois,
  });

  if (unpaid.length === 0) throw new AppError("Aucune échéance à payer", StatusCodes.BAD_REQUEST);

  const ids = unpaid.map(e => e.id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (prisma.echeancierLoyer.updateMany as any)({
    where: { id: { in: ids } },
    data: {
      statut: "PAYE",
      datePaiement: data.datePaiement,
      modePaiement: data.modePaiement,
      reference: data.reference,
      note: data.note,
      sourceEnregistrement: "PROPRIETAIRE",
    },
  });

  return { paye: unpaid.length, ids };
};

// ─── Paiement par le locataire (enregistrement direct) ───────────────────────

export const payerEcheancesLocataire = async (
  locataireId: string,
  data: {
    nombreMois: number;
    datePaiement: Date;
    modePaiement: string;
    reference?: string;
    note?: string;
  }
) => {
  // Récupérer le bail actif du locataire
  const bail = await prisma.bailLocation.findFirst({
    where: { locataireId, statut: "ACTIF" },
  });
  if (!bail) throw new AppError("Aucun bail actif trouvé", StatusCodes.BAD_REQUEST);

  // Récupérer les N premières échéances non payées dans l'ordre chronologique
  const unpaid = await prisma.echeancierLoyer.findMany({
    where: { bailId: bail.id, statut: { notIn: ["PAYE", "ANNULE"] } },
    orderBy: { dateEcheance: "asc" },
    take: data.nombreMois,
  });

  if (unpaid.length === 0)
    throw new AppError("Aucune échéance à payer", StatusCodes.BAD_REQUEST);

  const ids = unpaid.map(e => e.id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (prisma.echeancierLoyer.updateMany as any)({
    where: { id: { in: ids } },
    data: {
      statut: "PAYE",
      datePaiement: data.datePaiement,
      modePaiement: data.modePaiement,
      reference: data.reference ?? null,
      note: data.note ?? null,
      sourceEnregistrement: "LOCATAIRE",
    },
  });

  return { paye: unpaid.length, ids };
};

// ─── Caution ──────────────────────────────────────────────────────────────────

export const getCaution = async (bienId: string, bailId: string, proprietaireId: string) => {
  await assertBienOwner(bienId, proprietaireId);
  return prisma.depotCaution.findUnique({ where: { bailId } });
};

export const restituerCaution = async (
  bienId: string,
  bailId: string,
  proprietaireId: string,
  data: { montantRestitue: number; motifRetenue?: string; dateRestitution?: Date }
) => {
  await assertBienOwner(bienId, proprietaireId);
  const depot = await prisma.depotCaution.findUnique({ where: { bailId } });
  if (!depot) throw new AppError("Dépôt de caution introuvable", StatusCodes.NOT_FOUND);

  const statut = data.montantRestitue >= depot.montant
    ? "RESTITUE"
    : data.montantRestitue > 0
    ? "PARTIELLEMENT_RESTITUE"
    : "RETENU";

  return prisma.depotCaution.update({
    where: { bailId },
    data: {
      statut,
      montantRestitue: data.montantRestitue,
      motifRetenue: data.motifRetenue,
      dateRestitution: data.dateRestitution ?? new Date(),
    },
  });
};

// ─── Mobile Money ─────────────────────────────────────────────────────────────

const MOBILE_MONEY_PAR_PAYS: Record<string, { nom: string; instructions: string }[]> = {
  "Côte d'Ivoire": [
    { nom: "Orange Money",      instructions: "Composez *144# pour accéder au service Orange Money." },
    { nom: "MTN Mobile Money",  instructions: "Composez *133# pour accéder au service MTN MoMo." },
    { nom: "Wave",              instructions: "Utilisez l'application Wave pour effectuer le virement." },
    { nom: "Moov Money",        instructions: "Composez *555# pour accéder au service Moov Money." },
  ],
  "Sénégal": [
    { nom: "Orange Money",  instructions: "Composez *144# pour accéder au service Orange Money Sénégal." },
    { nom: "Wave",          instructions: "Utilisez l'application Wave pour effectuer le virement." },
    { nom: "Free Money",    instructions: "Composez *555# pour accéder au service Free Money." },
  ],
  "Cameroun": [
    { nom: "Orange Money",     instructions: "Composez *150*2# pour Orange Money Cameroun." },
    { nom: "MTN Mobile Money", instructions: "Composez *126# pour MTN MoMo Cameroun." },
  ],
  "Burkina Faso": [
    { nom: "Orange Money", instructions: "Composez *144# pour Orange Money Burkina." },
    { nom: "Moov Money",   instructions: "Composez *555# pour Moov Money." },
  ],
  "Mali": [
    { nom: "Orange Money", instructions: "Composez *144# pour Orange Money Mali." },
    { nom: "Moov Money",   instructions: "Composez *555# pour Moov Money Mali." },
  ],
  "Bénin": [
    { nom: "MTN Mobile Money", instructions: "Composez *880# pour MTN MoMo Bénin." },
    { nom: "Moov Money",       instructions: "Composez *555# pour Moov Money Bénin." },
  ],
  "Togo": [
    { nom: "T-Money", instructions: "Composez *145# pour T-Money (Togocel)." },
    { nom: "Flooz",   instructions: "Composez *155# pour Flooz (Moov Togo)." },
  ],
  "Guinée": [
    { nom: "Orange Money",     instructions: "Composez *144# pour Orange Money Guinée." },
    { nom: "MTN Mobile Money", instructions: "Composez *155# pour MTN MoMo Guinée." },
  ],
  "Niger": [
    { nom: "Orange Money",  instructions: "Composez *144# pour Orange Money Niger." },
    { nom: "Airtel Money",  instructions: "Utilisez l'application Airtel Money Niger." },
  ],
  "Congo": [
    { nom: "MTN Mobile Money", instructions: "Composez *126# pour MTN MoMo Congo." },
    { nom: "Airtel Money",     instructions: "Utilisez l'application Airtel Money Congo." },
  ],
  "Gabon": [
    { nom: "Airtel Money", instructions: "Utilisez l'application Airtel Money Gabon." },
    { nom: "Moov Money",   instructions: "Composez *555# pour Moov Money Gabon." },
  ],
};

const DEFAULT_MOBILE_MONEY = [
  {
    nom: "Mobile Money",
    instructions:
      "Contactez le propriétaire pour obtenir ses coordonnées de paiement Mobile Money.",
  },
];

export const getMobileMoney = async (bienId: string, proprietaireId: string) => {
  await assertBienOwner(bienId, proprietaireId);
  const bien = await prisma.bien.findUnique({
    where: { id: bienId },
    select: { pays: true },
  });
  const pays = bien?.pays ?? null;
  const providers = pays
    ? (MOBILE_MONEY_PAR_PAYS[pays] ?? DEFAULT_MOBILE_MONEY)
    : DEFAULT_MOBILE_MONEY;
  return { pays, providers };
};

// ─── Solde locataire ──────────────────────────────────────────────────────────

export const getSolde = async (
  bienId: string,
  bailId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);

  const echeances = await prisma.echeancierLoyer.findMany({
    where: { bailId },
    orderBy: { dateEcheance: "asc" },
  });

  let montantTotalDu = 0;
  let montantPaye = 0;
  let montantEnRetard = 0;
  let nbPaye = 0;
  let nbEnRetard = 0;
  let nbEnAttente = 0;
  let nbAVenir = 0;

  for (const e of echeances) {
    montantTotalDu += e.montant;
    if (e.statut === "PAYE" || e.statut === "PARTIEL") {
      montantPaye += e.montant;
      nbPaye++;
    } else if (e.statut === "EN_RETARD") {
      montantEnRetard += e.montant;
      nbEnRetard++;
    } else if (e.statut === "EN_ATTENTE") {
      nbEnAttente++;
    } else if (e.statut === "A_VENIR") {
      nbAVenir++;
    }
  }

  return {
    totalEcheances: echeances.length,
    nbPaye,
    nbEnRetard,
    nbEnAttente,
    nbAVenir,
    montantTotalDu,
    montantPaye,
    montantEnRetard,
    solde: montantTotalDu - montantPaye,
  };
};

// ─── Prolonger l'échéancier d'une année ──────────────────────────────────────

export const prolongerEcheancesAnnee = async (
  bienId: string,
  bailId: string,
  proprietaireId: string,
  anneeActuelle: number
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);
  if (!["ACTIF", "EN_PREAVIS", "EN_RENOUVELLEMENT"].includes(bail.statut as string))
    throw new AppError("Le bail doit être actif pour renouveler les paiements", StatusCodes.BAD_REQUEST);

  const anneeProchaine = anneeActuelle + 1;
  const prochaineAnneeDebut = new Date(anneeProchaine, 0, 1);
  const prochaineAnneeFin  = new Date(anneeProchaine, 11, 31);

  // Si des échéances pour l'année prochaine existent déjà (vieux bail), on les retourne
  const dejaExistantes = await prisma.echeancierLoyer.count({
    where: {
      bailId,
      dateEcheance: { gte: prochaineAnneeDebut, lte: prochaineAnneeFin },
    },
  });
  if (dejaExistantes > 0) {
    return { generated: 0, annee: anneeProchaine, existed: dejaExistantes };
  }

  // Trouver la dernière échéance de l'année actuelle pour calculer le prochain départ
  const lastCurrentYear = await prisma.echeancierLoyer.findFirst({
    where: {
      bailId,
      dateEcheance: { lte: new Date(anneeActuelle, 11, 31) },
    },
    orderBy: { dateEcheance: "desc" },
  });
  if (!lastCurrentYear)
    throw new AppError("Aucune échéance trouvée pour l'année en cours", StatusCodes.BAD_REQUEST);

  // La prochaine période commence juste après la dernière de l'année actuelle
  const nextStart = advanceByFrequence(
    new Date(lastCurrentYear.dateEcheance),
    bail.frequencePaiement ?? "mensuel"
  );

  // Respecter la date de fin du bail si elle est plus tôt que le 31/12 de l'année prochaine
  const stopDate =
    bail.dateFinBail && new Date(bail.dateFinBail) < prochaineAnneeFin
      ? new Date(bail.dateFinBail)
      : null;

  const echeances = genererEcheances(
    bailId, bienId, proprietaireId, bail.locataireId,
    nextStart, stopDate,
    bail.frequencePaiement ?? "mensuel",
    bail.montantLoyer,
    stopDate ? undefined : prochaineAnneeFin
  );

  if (echeances.length === 0)
    throw new AppError("Aucune nouvelle échéance à générer pour cette période", StatusCodes.BAD_REQUEST);

  await prisma.echeancierLoyer.createMany({ data: echeances });
  return { generated: echeances.length, annee: anneeProchaine };
};

// ─── Activer un bail (après validation du contrat) ──────────────────────────

export const activerBail = async (
  bienId: string,
  bailId: string,
  proprietaireId: string
) => {
  await assertBienOwner(bienId, proprietaireId);

  const bail = await BailRepo.findById(bailId);
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  if (bail.bienId !== bienId)
    throw new AppError("Bail non associé à ce bien", StatusCodes.BAD_REQUEST);
  if ((bail.statut as string) !== "EN_ATTENTE")
    throw new AppError("Seul un bail en attente peut être activé", StatusCodes.BAD_REQUEST);

  // Activer le bail
  const bailActif = await BailRepo.updateStatut(bailId, "ACTIF");

  // 1. Bien → statut "Loué"
  const statutLoueId = await getStatutId("loue");
  await BailRepo.updateBienStatut(bienId, statutLoueId);

  // 2. NOTE: Le locataire reste en statut INVITE jusqu'à ce qu'il active son compte
  // Le changement de statut vers ACTIF se fait lors de l'activation du compte locataire
  // (voir locataireAuth.service.ts - fonction activer())

  // 3. Génération de l'échéancier de loyers (limité au 31/12 de l'année en cours)
  const now = new Date();
  const dateMax = new Date(now.getFullYear(), 11, 31);
  const echeances = genererEcheances(
    bailId, bienId, proprietaireId, bail.locataireId,
    bail.dateDebutBail, bail.dateFinBail ?? null,
    bail.frequencePaiement ?? "mensuel",
    bail.montantLoyer,
    dateMax
  );
  if (echeances.length > 0) {
    await prisma.echeancierLoyer.createMany({ data: echeances });
  }

  // 4. Création du dépôt de caution
  if (bail.montantCaution && bail.montantCaution > 0) {
    await prisma.depotCaution.create({
      data: {
        bailId,
        bienId,
        proprietaireId,
        locataireId: bail.locataireId,
        montant: bail.montantCaution,
      },
    });
  }

  return bailActif;
};

// ─── Échéancier (vue locataire) ───────────────────────────────────────────────

export const getEcheancierForLocataire = async (locataireId: string) => {
  const bail = await prisma.bailLocation.findFirst({
    where: { locataireId, statut: "ACTIF" },
  });
  if (!bail) return [];

  const now = new Date();
  const graceLimit = new Date(now.getTime() - GRACE_DAYS * 24 * 60 * 60 * 1000);

  await prisma.echeancierLoyer.updateMany({
    where: { bailId: bail.id, statut: "A_VENIR", dateEcheance: { lte: now } },
    data: { statut: "EN_ATTENTE" },
  });
  await prisma.echeancierLoyer.updateMany({
    where: { bailId: bail.id, statut: "EN_ATTENTE", dateEcheance: { lt: graceLimit } },
    data: { statut: "EN_RETARD" },
  });

  return prisma.echeancierLoyer.findMany({
    where: { bailId: bail.id },
    orderBy: { dateEcheance: "asc" },
  });
};

// ─── Contrat (vue locataire) ───────────────────────────────────────────────

export const getContratForLocataire = async (locataireId: string) => {
  // Récupérer le bail actif du locataire
  const bail = await prisma.bailLocation.findFirst({
    where: { locataireId, statut: "ACTIF" },
    include: {
      bien: {
        select: {
          id: true,
          titre: true,
          adresse: true,
          quartier: true,
          ville: true,
          region: true,
        },
      },
      locataire: {
        select: {
          id: true,
          nom: true,
          prenom: true,
        },
      },
    },
  });

  if (!bail) return null;

  // Récupérer le contrat associé au bail
  const contrat = await prisma.contrat.findUnique({
    where: { bailId: bail.id },
    include: {
      modele: {
        select: { id: true, titre: true, typeBail: true },
      },
    },
  });

  if (!contrat) return null;

  return {
    bail: {
      id: bail.id,
      typeBail: bail.typeBail,
      dateDebutBail: bail.dateDebutBail,
      dateFinBail: bail.dateFinBail,
      montantLoyer: bail.montantLoyer,
      montantCaution: bail.montantCaution,
      cautionVersee: bail.cautionVersee,
      jourLimitePaiement: bail.jourLimitePaiement,
      frequencePaiement: bail.frequencePaiement,
    },
    bien: bail.bien,
    contrat: {
      id: contrat.id,
      titre: contrat.titre,
      contenu: contrat.contenu,
      statut: contrat.statut,
      createdAt: contrat.createdAt,
      updatedAt: contrat.updatedAt,
      modele: contrat.modele,
    },
  };
};
