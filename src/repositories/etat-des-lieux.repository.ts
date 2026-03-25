import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../config/database.js";

type EtatDesLieuxCreateInput = {
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
  type: "ENTREE" | "SORTIE";
  nbCles?: number;
  pieces: {
    nom: string;
    elements: {
      nom: string;
      etat: "NEUF" | "BON" | "USAGE" | "MAUVAIS" | "DEGRADE";
      commentaire?: string;
      photos?: string[];
    }[];
  }[];
};

export const create = async (data: EtatDesLieuxCreateInput) => {
  return prisma.etatDesLieux.create({
    data: {
      bailId: data.bailId,
      bienId: data.bienId,
      proprietaireId: data.proprietaireId,
      locataireId: data.locataireId,
      type: data.type,
      nbCles: data.nbCles,
      pieces: {
        create: data.pieces.map((piece) => ({
          nom: piece.nom,
          elements: {
            create: piece.elements.map((element) => ({
              nom: element.nom,
              etat: element.etat as any,
              commentaire: element.commentaire,
              photos: element.photos || [],
            })),
          },
        })),
      },
    },
    include: {
      pieces: {
        include: {
          elements: true,
        },
      },
    },
  });
};

export const findById = async (id: string) => {
  return prisma.etatDesLieux.findUnique({
    where: { id },
    include: {
      pieces: {
        include: {
          elements: true,
        },
      },
      bail: true,
      bien: true,
      proprietaire: true,
      locataire: true,
    },
  });
};

export const findByBailAndType = async (bailId: string, type: "ENTREE" | "SORTIE") => {
  return prisma.etatDesLieux.findUnique({
    where: {
      bailId_type: {
        bailId,
        type,
      },
    },
    include: {
      pieces: {
        include: {
          elements: true,
        },
      },
      bien: true,
    },
  });
};

export const findAllByBail = async (bailId: string) => {
  return prisma.etatDesLieux.findMany({
    where: { bailId },
    include: {
      pieces: {
        include: { elements: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const updateStatus = async (
  id: string,
  statut: "BROUILLON" | "EN_ATTENTE_VALIDATION" | "VALIDE" | "CONTESTE",
  documentPdf?: string
) => {
  return prisma.etatDesLieux.update({
    where: { id },
    data: {
      statut,
      ...(statut === "VALIDE" ? { dateValidation: new Date() } : {}),
      ...(documentPdf ? { documentPdf } : {}),
    },
  });
};

export const updateBrouillon = async (id: string, data: Partial<EtatDesLieuxCreateInput>) => {
  return prisma.$transaction(async (tx) => {
    if (data.pieces && data.pieces.length > 0) {
      await tx.pieceEtatDesLieux.deleteMany({
        where: { etatDesLieuxId: id },
      });
    }

    return tx.etatDesLieux.update({
      where: { id },
      data: {
        nbCles: data.nbCles,
        ...(data.pieces && data.pieces.length > 0
          ? {
              pieces: {
                create: data.pieces.map((piece) => ({
                  nom: piece.nom,
                  elements: {
                    create: piece.elements.map((element) => ({
                      nom: element.nom,
                      etat: element.etat as any,
                      commentaire: element.commentaire,
                      photos: element.photos || [],
                    })),
                  },
                })),
              },
            }
          : {}),
      },
      include: {
        pieces: {
          include: { elements: true },
        },
      },
    });
  });
};
