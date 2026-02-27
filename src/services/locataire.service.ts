import { randomUUID } from "crypto";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as LocataireRepo from "../repositories/locataire.repository.js";

const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:5173";
const TOKEN_EXPIRY_HOURS = 72;

// ─── Liste ────────────────────────────────────────────────────────────────────

export const getByProprietaire = async (proprietaireId: string) => {
  return LocataireRepo.findByProprietaire(proprietaireId);
};

// ─── Détail ───────────────────────────────────────────────────────────────────

export const getById = async (id: string, proprietaireId: string) => {
  const locataire = await LocataireRepo.findById(id);
  if (!locataire) {
    throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
  }
  if (locataire.proprietaireId !== proprietaireId) {
    throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  }
  return locataire;
};

// ─── Création ─────────────────────────────────────────────────────────────────

export const create = async (
  proprietaireId: string,
  data: {
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
  }
) => {
  const telephone = data.telephone.replace(/\s/g, "");

  const activationToken = randomUUID();
  const tokenExpiresAt = new Date(
    Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000
  );

  return LocataireRepo.create({
    proprietaireId,
    nom: data.nom.trim(),
    prenom: data.prenom.trim(),
    telephone,
    email: data.email?.trim() || null,
    nbOccupants: data.nbOccupants ?? 1,
    presenceEnfants: data.presenceEnfants ?? false,
    activationToken,
    tokenExpiresAt,
  });
};

// ─── Modification (partie owner) ──────────────────────────────────────────────

export const updateOwner = async (
  id: string,
  proprietaireId: string,
  data: {
    nom?: string;
    prenom?: string;
    telephone?: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
  }
) => {
  const existing = await LocataireRepo.findById(id);
  if (!existing) {
    throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
  }
  if (existing.proprietaireId !== proprietaireId) {
    throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  }

  const updateData: import("../repositories/locataire.repository.js").UpdateLocataireOwnerData = {};
  if (data.nom !== undefined) updateData.nom = data.nom.trim();
  if (data.prenom !== undefined) updateData.prenom = data.prenom.trim();
  if (data.telephone !== undefined)
    updateData.telephone = data.telephone.replace(/\s/g, "");
  if (data.email !== undefined)
    updateData.email = data.email?.trim() || null;
  if (data.nbOccupants !== undefined) updateData.nbOccupants = data.nbOccupants;
  if (data.presenceEnfants !== undefined)
    updateData.presenceEnfants = data.presenceEnfants;

  return LocataireRepo.update(id, updateData);
};

// ─── Suppression ──────────────────────────────────────────────────────────────

export const remove = async (id: string, proprietaireId: string) => {
  const locataire = await LocataireRepo.findById(id);
  if (!locataire) {
    throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
  }
  if (locataire.proprietaireId !== proprietaireId) {
    throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  }

  const bailActif = locataire.bails?.find((b) => b.statut === "ACTIF");
  if (bailActif) {
    throw new AppError(
      "Ce locataire a un bail actif. Terminez ou résiliez le bail avant de supprimer.",
      StatusCodes.CONFLICT
    );
  }

  await LocataireRepo.remove(id);
};

// ─── Lien d'activation ────────────────────────────────────────────────────────

export const getLien = async (id: string, proprietaireId: string) => {
  const locataire = await LocataireRepo.findById(id);
  if (!locataire) {
    throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
  }
  if (locataire.proprietaireId !== proprietaireId) {
    throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  }

  // Regénérer le token si expiré ou absent
  let token = locataire.activationToken;
  if (!token || (locataire.tokenExpiresAt && locataire.tokenExpiresAt < new Date())) {
    token = randomUUID();
    const tokenExpiresAt = new Date(
      Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000
    );
    await LocataireRepo.update(id, { activationToken: token, tokenExpiresAt });
  }

  const lien = `${FRONTEND_URL}/locataire/activer?token=${token}`;

  return {
    lien,
    statut: locataire.statut,
    // Placeholders pour les services d'envoi
    services: {
      email: null,   // TODO: intégrer service email
      whatsapp: null, // TODO: intégrer service WhatsApp
      sms: null,      // TODO: intégrer service SMS
    },
  };
};
