import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import * as LocataireAuthService from "../services/locataireAuth.service.js";
import * as BailService from "../services/bail.service.js";
import * as EtatDesLieuxService from "../services/etatDesLieux.service.js";
import * as MobileMoneyService from "../services/mobileMoney.service.js";
import * as QuittanceService from "../services/quittance.service.js";
import * as NotificationService from "../services/notification.service.js";
import { prisma } from "../config/database.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";

// ─── Cookie helpers ───────────────────────────────────────────────────────────

const IS_PROD = process.env.NODE_ENV === "production";

const setAuthCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string,
  refreshTokenExpiresAt: Date
) => {
  // Nettoyer d'anciens cookies potentiellement créés avec un path différent
  res.clearCookie("locataireAccessToken");
  res.clearCookie("locataireAccessToken", { path: "/api/locataire/auth" });
  res.clearCookie("locataireRefreshToken");
  res.clearCookie("locataireRefreshToken", { path: "/api/locataire/auth" });

  res.cookie("locataireAccessToken", accessToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 min
  });
  res.cookie("locataireRefreshToken", refreshToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "strict",
    expires: refreshTokenExpiresAt,
  });
};

const clearAuthCookies = (res: Response) => {
  res.clearCookie("locataireAccessToken");
  res.clearCookie("locataireAccessToken", { path: "/api/locataire/auth" });
  res.clearCookie("locataireRefreshToken");
  res.clearCookie("locataireRefreshToken", { path: "/api/locataire/auth" });
};

// ─── Activation ───────────────────────────────────────────────────────────────

const activerSchema = z.object({
  token: z.string().min(1, "Token requis"),
  password: z.string().min(6, "Mot de passe requis (min 6 caractères)"),
  dateNaissance: z.coerce.date().optional().nullable(),
  lieuNaissance: z.string().optional().nullable(),
  nationalite: z.string().optional().nullable(),
  sexe: z.string().optional().nullable(),
  numPieceIdentite: z.string().optional().nullable(),
  typePiece: z.enum(["CNI", "PASSEPORT", "CARTE_CONSULAIRE", "AUTRE"]).optional().nullable(),
  dateDelivrance: z.coerce.date().optional().nullable(),
  dateExpiration: z.coerce.date().optional().nullable(),
  autoriteDelivrance: z.string().optional().nullable(),
  situationProfessionnelle: z.string().optional().nullable(),
});

export const activer = async (req: Request, res: Response): Promise<void> => {
  const parsed = activerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const result = await LocataireAuthService.activer(parsed.data);
  setAuthCookies(
    res,
    result.accessToken,
    result.refreshToken,
    result.refreshTokenExpiresAt
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Compte activé avec succès",
      data: { locataire: result.locataire },
    })
  );
};

// ─── Connexion ────────────────────────────────────────────────────────────────

const loginSchema = z.object({
  identifiant: z.string().min(1, "Identifiant requis"),
  password: z.string().min(1, "Mot de passe requis"),
});

export const login = async (req: Request, res: Response): Promise<void> => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const result = await LocataireAuthService.login(parsed.data);
  setAuthCookies(
    res,
    result.accessToken,
    result.refreshToken,
    result.refreshTokenExpiresAt
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Connexion réussie",
      data: { locataire: result.locataire },
    })
  );
};

// ─── Refresh ──────────────────────────────────────────────────────────────────

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  const token = req.cookies?.locataireRefreshToken as string | undefined;
  if (!token) {
    clearAuthCookies(res);
    throw new AppError("Refresh token manquant", StatusCodes.UNAUTHORIZED);
  }

  try {
    const tokens = await LocataireAuthService.refresh(token);
    setAuthCookies(
      res,
      tokens.accessToken,
      tokens.refreshToken,
      tokens.refreshTokenExpiresAt
    );
    res.status(StatusCodes.OK).json(
      jsonResponse({ status: "success", message: "Token renouvelé", data: null })
    );
  } catch (error) {
    // Nettoyer les cookies quand le refresh échoue pour éviter une boucle avec token révoqué
    clearAuthCookies(res);
    throw error;
  }
};

// ─── Logout ───────────────────────────────────────────────────────────────────

export const logout = async (req: Request, res: Response): Promise<void> => {
  const token = req.cookies?.locataireRefreshToken as string | undefined;
  if (token) {
    await LocataireAuthService.logout(token);
  }
  clearAuthCookies(res);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Déconnexion réussie", data: null })
  );
};

// ─── Me ───────────────────────────────────────────────────────────────────────

export const me = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const locataire = await LocataireAuthService.me(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Profil récupéré", data: locataire })
  );
};

// ─── Mise à jour du profil ────────────────────────────────────────────────────

const updateProfilSchema = z.object({
  dateNaissance: z.coerce.date().optional().nullable(),
  lieuNaissance: z.string().optional().nullable(),
  nationalite: z.string().optional().nullable(),
  sexe: z.string().optional().nullable(),
  numPieceIdentite: z.string().optional().nullable(),
  typePiece: z.enum(["CNI", "PASSEPORT", "CARTE_CONSULAIRE", "AUTRE"]).optional().nullable(),
  dateDelivrance: z.coerce.date().optional().nullable(),
  dateExpiration: z.coerce.date().optional().nullable(),
  autoriteDelivrance: z.string().optional().nullable(),
  situationProfessionnelle: z.string().optional().nullable(),
});

export const updateProfil = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  
  // Vérifier si le locataire a une vérification en cours
  const verification = await prisma.locataireVerification.findUnique({
    where: { locataireId: req.locataire.id },
  });
  
  if (verification && verification.statut === "PENDING") {
    throw new AppError(
      "Vous ne pouvez pas modifier vos informations pendant qu'une demande de vérification est en cours d'analyse. Annulez d'abord votre demande de vérification.",
      StatusCodes.FORBIDDEN
    );
  }
  
  const parsed = updateProfilSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }
  const updated = await LocataireAuthService.updateProfil(
    req.locataire.id,
    parsed.data
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Profil mis à jour", data: updated })
  );
};

// ─── Échéancier du bail actif ─────────────────────────────────────────────────

export const getEcheancier = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const echeancier = await BailService.getEcheancierForLocataire(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Échéancier récupéré", data: echeancier })
  );
};

// ─── Contrat du bail actif ────────────────────────────────────────────────────

export const getContrat = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const contrat = await BailService.getContratForLocataire(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: contrat ? "Contrat récupéré" : "Aucun contrat trouvé", data: contrat })
  );
};

// ─── Enregistrer un paiement (locataire) ──────────────────────────────────────

const payerEcheancesSchema = z.object({
  nombreMois:   z.number().int().min(1).max(36),
  datePaiement: z.coerce.date(),
  modePaiement: z.string().min(1, "Mode de paiement requis"),
  reference:    z.string().optional(),
  note:         z.string().optional(),
});

export const payerEcheances = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);

  const parsed = payerEcheancesSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: parsed.error.issues[0]?.message ?? "Données invalides", data: null })
    );
    return;
  }

  const result = await BailService.payerEcheancesLocataire(req.locataire.id, parsed.data);
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: `${result.paye} paiement(s) enregistré(s)`,
      data: result,
    })
  );
};

// ─── Initier un paiement Mobile Money (locataire) ─────────────────────────────

const initierPaiementSchema = z.object({
  echeanceId: z.string().min(1),
  provider: z.string().min(1),
});

export const initierPaiement = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);

  const parsed = initierPaiementSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: parsed.error.issues[0]?.message ?? "Données invalides", data: null })
    );
    return;
  }

  const { echeanceId, provider } = parsed.data;
  const locataireId = req.locataire.id;

  // Récupérer l'échéance + bail + bien + propriétaire
  const echeance = await prisma.echeancierLoyer.findUnique({
    where: { id: echeanceId },
    include: {
      bail: {
        include: {
          bien: { select: { id: true, titre: true } },
          proprietaire: { select: { id: true, telephone: true } },
        },
      },
    },
  });
  if (!echeance) throw new AppError("Échéance introuvable", StatusCodes.NOT_FOUND);
  if (echeance.locataireId !== locataireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  if (echeance.statut === "PAYE" || echeance.statut === "ANNULE")
    throw new AppError("Cette échéance est déjà soldée ou annulée", StatusCodes.BAD_REQUEST);

  // Récupérer le téléphone du locataire (non présent dans le JWT)
  const locataireDb = await prisma.locataire.findUnique({
    where: { id: locataireId },
    select: { telephone: true },
  });

  const montant = echeance.montant;
  const reference = `LOYER-${echeance.id.slice(0, 8).toUpperCase()}`;

  const result = await MobileMoneyService.initierPaiementMobileMoney({
    provider,
    montant,
    telephonePayeur: locataireDb?.telephone ?? "",
    telephoneBeneficiaire: echeance.bail.proprietaire.telephone,
    reference,
    echeanceId,
    bailId: echeance.bailId,
    bienId: echeance.bienId,
    locataireId,
    proprietaireId: echeance.proprietaireId,
  });

  // Notifier le propriétaire
  await NotificationService.envoyerInitiationPaiement({
    proprietaireTelephone: echeance.bail.proprietaire.telephone,
    locataireNom: `${req.locataire.prenom} ${req.locataire.nom}`,
    montant,
    dateEcheance: echeance.dateEcheance.toISOString(),
    provider,
    bienTitre: echeance.bail.bien.titre,
    echeanceId,
    bailId: echeance.bailId,
    bienId: echeance.bienId,
    proprietaireId: echeance.proprietaireId,
    locataireId,
  });

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: result.message, data: result })
  );
};

// ─── Quittances du locataire ──────────────────────────────────────────────────

export const getQuittances = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  const quittances = await QuittanceService.getQuittancesLocataire(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Quittances récupérées", data: quittances })
  );
};

// ─── Vérification des documents ────────────────────────────────────────────────

export const getVerification = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  
  const verification = await prisma.locataireVerification.findUnique({
    where: { locataireId: req.locataire.id },
  });
  
  // Formater la réponse comme pour le propriétaire
  const response = {
    locataireId: req.locataire.id,
    statut: (verification?.statut ?? "NOT_VERIFIED") as "NOT_VERIFIED" | "PENDING" | "VERIFIED" | "REJECTED",
    verifiedAt: verification?.statut === "VERIFIED" ? verification.dateTraitement?.toISOString() ?? null : null,
    documents: verification ? {
      typePiece: verification.typePiece,
      pieceIdentiteRecto: verification.pieceIdentiteRecto,
      pieceIdentiteVerso: verification.pieceIdentiteVerso,
      selfie: verification.selfie,
      conditionsAcceptees: verification.conditionsAcceptees,
      motifRejet: verification.motifRejet,
      traitePar: verification.traitePar,
      dateTraitement: verification.dateTraitement?.toISOString() ?? null,
    } : undefined,
  };
  
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Statut de vérification récupéré", data: response })
  );
};

const submitVerificationSchema = z.object({
  typePiece: z.enum(["CNI", "PASSEPORT"]),
  pieceIdentiteRecto: z.string().min(1, "Le recto est obligatoire"),
  pieceIdentiteVerso: z.string().optional(),
  selfie: z.string().min(1, "Le selfie est obligatoire"),
  conditionsAcceptees: z.boolean().refine(val => val === true, "Vous devez accepter les conditions"),
});

export const submitVerification = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  
  const parsed = submitVerificationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }
  
  const { data } = parsed;
  
  try {
    // Vérifier si une demande de vérification est déjà en cours
    const existingVerification = await prisma.locataireVerification.findUnique({
      where: { locataireId: req.locataire.id },
      select: { statut: true },
    });
    
    if (existingVerification && existingVerification.statut === "PENDING") {
      throw new AppError(
        "Vous avez déjà une demande de vérification en cours d'analyse. Vous ne pouvez pas soumettre une nouvelle demande avant que la précédente soit traitée.",
        StatusCodes.CONFLICT
      );
    }
    
    // Vérifier que le locataire a des informations d'identité
    const locataire = await prisma.locataire.findUnique({
      where: { id: req.locataire.id },
      select: { numPieceIdentite: true, typePiece: true },
    });
    
    if (!locataire?.numPieceIdentite || !locataire?.typePiece) {
      throw new AppError(
        "Vous devez d'abord compléter vos informations d'identité dans votre profil",
        StatusCodes.BAD_REQUEST
      );
    }
    
    // Créer ou mettre à jour la vérification
    const verification = await prisma.locataireVerification.upsert({
      where: { locataireId: req.locataire.id },
      create: {
        locataireId: req.locataire.id,
        typePiece: data.typePiece ?? locataire.typePiece ?? "CNI",
        pieceIdentiteRecto: data.pieceIdentiteRecto,
        pieceIdentiteVerso: data.pieceIdentiteVerso,
        selfie: data.selfie,
        conditionsAcceptees: data.conditionsAcceptees ?? false,
        statut: "PENDING",
      },
      update: {
        typePiece: data.typePiece ?? locataire.typePiece,
        pieceIdentiteRecto: data.pieceIdentiteRecto,
        pieceIdentiteVerso: data.pieceIdentiteVerso,
        selfie: data.selfie,
        conditionsAcceptees: data.conditionsAcceptees,
        statut: "PENDING",
        motifRejet: null,
        dateTraitement: null,
      },
    });

    res.status(StatusCodes.OK).json(
      jsonResponse({ status: "success", message: "Documents soumis pour vérification", data: verification })
    );
  } catch (error) {
    // Re-throw AppError as-is
    if (error instanceof AppError) {
      throw error;
    }
    // Log and re-throw other errors
    console.error("Erreur lors de la soumission de vérification:", error);
    throw new AppError("Erreur lors de la soumission des documents", StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

// ─── Annuler la vérification ────────────────────────────────────────────────────

export const cancelVerification = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  
  const verification = await prisma.locataireVerification.findUnique({
    where: { locataireId: req.locataire.id },
  });
  
  if (!verification) {
    throw new AppError("Aucune vérification en cours", StatusCodes.NOT_FOUND);
  }
  
  if (verification.statut !== "PENDING") {
    throw new AppError("Impossible d'annuler une vérification qui n'est pas en attente", StatusCodes.BAD_REQUEST);
  }
  
  // Supprimer la vérification
  await prisma.locataireVerification.delete({
    where: { locataireId: req.locataire.id },
  });
  
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Vérification annulée", data: null })
  );
};

// ─── Infos propriétaire pour le locataire ──────────────────────────────────────

export const getProprietaire = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  
  const proprietaireInfo = await BailService.getProprietaireForLocataire(req.locataire.id);
  
  if (!proprietaireInfo) {
    res.status(StatusCodes.OK).json(
      jsonResponse({ status: "success", message: "Aucun bail actif", data: null })
    );
    return;
  }
  
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Informations du propriétaire", data: proprietaireInfo })
  );
};


// ─── Historique des logements ────────────────────────────────────────────────

export const getHistoriqueLogement = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);

  const bails = await prisma.bailLocation.findMany({
    where: { locataireId: req.locataire.id },
    include: {
      bien: {
        select: {
          id: true,
          titre: true,
          adresse: true,
          ville: true,
          region: true,
          pays: true,
          photos: true,
          typeLogement: { select: { nom: true } },
          typeTransaction: { select: { nom: true, slug: true } },
        },
      },
      echeancier: {
        select: { statut: true, montant: true, datePaiement: true },
      },
    },
    orderBy: { dateDebutBail: "desc" },
  });

  // Enrichir chaque bail avec des stats rapides
  const result = bails.map((bail) => {
    const total = bail.echeancier.length;
    const payes = bail.echeancier.filter((e) => e.statut === "PAYE" || e.statut === "PARTIEL").length;
    const montantTotal = bail.echeancier.reduce((sum, e) => sum + e.montant, 0);
    const montantPaye = bail.echeancier
      .filter((e) => e.statut === "PAYE")
      .reduce((sum, e) => sum + e.montant, 0);
    return {
      ...bail,
      echeancier: undefined,
      stats: { total, payes, montantTotal, montantPaye },
    };
  });

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Historique des logements", data: result })
  );
};

// ─── Documents du bien (bail actif) ──────────────────────────────────────────

export const getDocumentsBien = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);

  // Trouver le bail actif
  const bailActif = await prisma.bailLocation.findFirst({
    where: { locataireId: req.locataire.id, statut: "ACTIF" },
    select: { bienId: true },
  });

  if (!bailActif) {
    res.status(StatusCodes.OK).json(
      jsonResponse({ status: "success", message: "Aucun bail actif", data: [] })
    );
    return;
  }

  const documents = await prisma.documentBien.findMany({
    where: { bienId: bailActif.bienId },
    orderBy: { createdAt: "desc" },
    select: { id: true, nom: true, type: true, url: true, taille: true, createdAt: true },
  });

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Documents du bien", data: documents })
  );
};

// ─── POST /api/locataire/auth/forgot-password ────────────────────────────────

const signerEtatDesLieuxLocataireSchema = z.object({
  etatDesLieuxId: z.string().uuid("ID �tat des lieux invalide"),
});

export const getEtatsDesLieux = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  const data = await EtatDesLieuxService.getEtatsDesLieuxLocataire(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Etats des lieux r�cup�r�s", data })
  );
};

export const signerEtatDesLieux = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  const parsed = signerEtatDesLieuxLocataireSchema.safeParse({ etatDesLieuxId: req.params.etatDesLieuxId });
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "ID invalide",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const data = await EtatDesLieuxService.signerEtatDesLieuxLocataire(
    parsed.data.etatDesLieuxId,
    req.locataire.id
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Etat des lieux sign�", data })
  );
};
export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  const { identifiant } = req.body;
  if (!identifiant) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: "Identifiant requis" })
    );
    return;
  }

  try {
    const { token, email, prenom } = await LocataireAuthService.requestPasswordReset(identifiant);

    if (email) {
      try {
        const { sendMail } = await import("../utils/mailer.js");
        const frontUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";
        await sendMail({
          to: email,
          subject: "Réinitialisation de votre mot de passe SEEK",
          html: `<p>Bonjour ${prenom},</p>
<p>Cliquez sur ce lien pour réinitialiser votre mot de passe locataire (valable 1 heure) :</p>
<p><a href="${frontUrl}/locataire/reset-password?token=${token}">${frontUrl}/locataire/reset-password?token=${token}</a></p>
<p>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>`,
        });
      } catch (e) {
        console.error("[LOCATAIRE] Erreur envoi email reset:", e);
      }
    }
  } catch (e: any) {
    if (e.statusCode === StatusCodes.OK) {
      // Compte non trouvé, on répond OK quand même (ne pas révéler)
    } else {
      throw e;
    }
  }

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Si ce compte existe, un lien de réinitialisation a été envoyé." })
  );
};

// ─── POST /api/locataire/auth/reset-password ─────────────────────────────────

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  const { token, password } = req.body;
  if (!token || !password) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: "Token et nouveau mot de passe requis" })
    );
    return;
  }
  if (password.length < 6) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: "Le mot de passe doit contenir au moins 6 caractères" })
    );
    return;
  }
  await LocataireAuthService.resetPassword(token, password);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Mot de passe réinitialisé avec succès" })
  );
};

