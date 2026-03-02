import type { Response, Request } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

// ─── Créer une alerte ───────────────────────────────────────────────────────

export const creerAlerte = async (req: Request, res: Response) => {
  try {
    const {
      telephone,
      typeLogement,
      typeTransaction,
      ville,
      quartier,
      prixMin,
      prixMax,
      canalPrefere,
    } = req.body;

    // Validation de base
    if (!telephone) {
      return res.status(400).json({
        success: false,
        message: "Le numéro de téléphone est obligatoire",
      });
    }

    // Valider le format du téléphone (simple validation)
    const telephoneClean = telephone.replace(/\s/g, "");
    if (telephoneClean.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Le numéro de téléphone n'est pas valide",
      });
    }

    // Vérifier si une alerte existe déjà pour ce numéro de téléphone
    const alerteExistante = await prisma.alerte.findFirst({
      where: {
        telephone: telephoneClean,
        statut: "ACTIVE",
      },
    });

    let alerte;
    if (alerteExistante) {
      // Mettre à jour l'alerte existante
      alerte = await prisma.alerte.update({
        where: { id: alerteExistante.id },
        data: {
          typeLogement,
          typeTransaction,
          ville,
          quartier,
          prixMin: prixMin ? Number(prixMin) : undefined,
          prixMax: prixMax ? Number(prixMax) : undefined,
          canalPrefere: canalPrefere ?? "SMS",
        },
      });
    } else {
      // Créer une nouvelle alerte
      alerte = await prisma.alerte.create({
        data: {
          telephone: telephoneClean,
          typeLogement,
          typeTransaction,
          ville,
          quartier,
          prixMin: prixMin ? Number(prixMin) : undefined,
          prixMax: prixMax ? Number(prixMax) : undefined,
          canalPrefere: canalPrefere ?? "SMS",
          statut: "ACTIVE",
        },
      });
    }

    return res.status(201).json({
      success: true,
      message: alerteExistante
        ? "Alerte mise à jour avec succès !"
        : "Alerte créée avec succès ! Vous recevrez nos nouvelles annonces.",
      data: {
        id: alerte.id,
        telephone: alerte.telephone,
        canalPrefere: alerte.canalPrefere,
      },
    });
  } catch (error) {
    console.error("Erreur création alerte:", error);
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la création de l'alerte",
    });
  }
};

// ─── Lister les alertes (admin) ─────────────────────────────────────────────

export const getAlertes = async (_req: Request, res: Response) => {
  try {
    const alertes = await prisma.alerte.findMany({
      where: { statut: "ACTIVE" },
      orderBy: { createdAt: "desc" },
    });

    return res.json({
      success: true,
      data: alertes,
    });
  } catch (error) {
    console.error("Erreur liste alertes:", error);
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la récupération des alertes",
    });
  }
};

// ─── Désactiver une alerte ──────────────────────────────────────────────────

export const desactiverAlerte = async (req: Request, res: Response) => {
  try {
    const { telephone } = req.body;

    if (!telephone) {
      return res.status(400).json({
        success: false,
        message: "Le numéro de téléphone est obligatoire",
      });
    }

    const result = await prisma.alerte.updateMany({
      where: { telephone, statut: "ACTIVE" },
      data: { statut: "DESACTIVE" },
    });

    if (result.count === 0) {
      return res.status(404).json({
        success: false,
        message: "Aucune alerte active trouvée pour ce numéro",
      });
    }

    return res.json({
      success: true,
      message: "Alerte désactivée avec succès",
    });
  } catch (error) {
    console.error("Erreur désactivation alerte:", error);
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la désactivation de l'alerte",
    });
  }
};
