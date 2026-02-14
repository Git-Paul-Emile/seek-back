import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/client.js';
import { controllerWrapper } from '../utils/ControllerWrapper.js';

const asyncHandler = controllerWrapper;

const prisma = new PrismaClient();

// Récupérer tous les pays avec leurs villes
export const getAllPaysWithVilles = asyncHandler(async (req: Request, res: Response) => {
  const pays = await prisma.pays.findMany({
    include: {
      villes: {
        orderBy: { nom: 'asc' }
      }
    },
    orderBy: { nom: 'asc' }
  });

  res.status(200).json({
    success: true,
    data: pays
  });
});

// Récupérer tous les pays
export const getAllPays = asyncHandler(async (req: Request, res: Response) => {
  const pays = await prisma.pays.findMany({
    orderBy: { nom: 'asc' }
  });

  res.status(200).json({
    success: true,
    data: pays
  });
});

// Récupérer un pays par ID
export const getPaysById = asyncHandler(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  const pays = await prisma.pays.findUnique({
    where: { id },
    include: {
      villes: {
        orderBy: { nom: 'asc' }
      }
    }
  });

  if (!pays) {
    return res.status(404).json({
      success: false,
      message: 'Pays non trouvé'
    });
  }

  res.status(200).json({
    success: true,
    data: pays
  });
});

// Récupérer toutes les villes d'un pays
export const getVillesByPays = asyncHandler(async (req: Request, res: Response) => {
  const paysId = Array.isArray(req.params.paysId) ? req.params.paysId[0] : req.params.paysId;

  const villes = await prisma.ville.findMany({
    where: { paysId },
    orderBy: { nom: 'asc' }
  });

  res.status(200).json({
    success: true,
    data: villes
  });
});

// Récupérer toutes les villes
export const getAllVilles = asyncHandler(async (req: Request, res: Response) => {
  const paysId = Array.isArray(req.query.paysId) ? req.query.paysId[0] : req.query.paysId;

  const where = paysId ? { paysId } : {};

  const villes = await prisma.ville.findMany({
    where,
    include: {
      pays: {
        select: { nom: true, code: true }
      }
    },
    orderBy: { nom: 'asc' }
  });

  res.status(200).json({
    success: true,
    data: villes
  });
});

// Récupérer les villes du Sénégal (endpoint pratique)
export const getVillesSenegal = asyncHandler(async (req: Request, res: Response) => {
  const villes = await prisma.ville.findMany({
    where: {
      pays: { code: 'SN' }
    },
    orderBy: { nom: 'asc' }
  });

  res.status(200).json({
    success: true,
    data: villes
  });
});

// Créer un nouveau pays
export const createPays = asyncHandler(async (req: Request, res: Response) => {
  const { nom, code } = req.body;

  if (!nom) {
    return res.status(400).json({
      success: false,
      message: 'Le nom du pays est requis'
    });
  }

  const pays = await prisma.pays.create({
    data: { nom, code }
  });

  res.status(201).json({
    success: true,
    data: pays,
    message: 'Pays créé avec succès'
  });
});

// Créer une nouvelle ville
export const createVille = asyncHandler(async (req: Request, res: Response) => {
  const { nom, paysId } = req.body;

  if (!nom || !paysId) {
    return res.status(400).json({
      success: false,
      message: 'Le nom de la ville et l\'ID du pays sont requis'
    });
  }

  // Vérifier que le pays existe
  const pays = await prisma.pays.findUnique({
    where: { id: paysId as string }
  });

  if (!pays) {
    return res.status(404).json({
      success: false,
      message: 'Pays non trouvé'
    });
  }

  const ville = await prisma.ville.create({
    data: { nom, paysId }
  });

  res.status(201).json({
    success: true,
    data: ville,
    message: 'Ville créée avec succès'
  });
});

// Supprimer un pays (cascade delete des villes)
export const deletePays = asyncHandler(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  const pays = await prisma.pays.findUnique({
    where: { id }
  });

  if (!pays) {
    return res.status(404).json({
      success: false,
      message: 'Pays non trouvé'
    });
  }

  // La suppression en cascade est gérée par Prisma (onDelete: Cascade)
  await prisma.pays.delete({
    where: { id: id! }
  });

  res.status(200).json({
    success: true,
    message: 'Pays et ses villes supprimés avec succès'
  });
});

// Supprimer une ville
export const deleteVille = asyncHandler(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  const ville = await prisma.ville.findUnique({
    where: { id }
  });

  if (!ville) {
    return res.status(404).json({
      success: false,
      message: 'Ville non trouvée'
    });
  }

  await prisma.ville.delete({
    where: { id: id! }
  });

  res.status(200).json({
    success: true,
    message: 'Ville supprimée avec succès'
  });
});
