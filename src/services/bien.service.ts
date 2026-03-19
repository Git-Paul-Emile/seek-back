import * as BienRepository from "../repositories/bien.repository.js";
import type { BienWithRelations } from "../repositories/bien.repository.js";
import * as CloudinaryService from "./cloudinary.service.js";
import type { SaveDraftInput } from "../validators/bien.validator.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import type { StatutAnnonce } from "../generated/prisma/enums.js";
import { prisma } from "../config/database.js";
import { computeScoreForProprietaire } from "./trustScore.service.js";
import { verifierLimiteAnnonces } from "./abonnement.service.js";

// ─── Types établissements ─────────────────────────────────────────────────────

interface OverpassNode {
  type: string;
  id: number;
  lat: number;
  lon: number;
  tags: Record<string, string>;
}

const ETABLISSEMENT_QUERIES: { type: string; label: string; query: string }[] = [
  { type: "hopital", label: "Hôpital", query: '["amenity"="hospital"]' },
  { type: "pharmacie", label: "Pharmacie", query: '["amenity"="pharmacy"]' },
  { type: "ecole_maternelle", label: "École maternelle", query: '["amenity"="kindergarten"]' },
  { type: "ecole_primaire", label: "École primaire", query: '["amenity"="school"]["school"="primary"]' },
  { type: "college", label: "Collège", query: '["amenity"="school"]["school"="secondary"]' },
  { type: "lycee", label: "Lycée", query: '["amenity"="school"]["school"="high_school"]' },
  { type: "universite", label: "Université", query: '["amenity"="university"]' },
  { type: "supermarche", label: "Supermarché", query: '["shop"="supermarket"]' },
  { type: "marche", label: "Marché", query: '["amenity"="marketplace"]' },
  { type: "boulangerie", label: "Boulangerie", query: '["shop"="bakery"]' },
  { type: "mosquee", label: "Mosquée", query: '["amenity"="place_of_worship"]["religion"="muslim"]' },
  { type: "eglise", label: "Église", query: '["amenity"="place_of_worship"]["religion"="christian"]' },
  { type: "gendarmerie", label: "Gendarmerie", query: '["amenity"="police"]' },
  { type: "pompiers", label: "Caserne des pompiers", query: '["amenity"="fire_station"]' },
  { type: "mairie", label: "Mairie", query: '["amenity"="townhall"]' },
  { type: "arret_bus", label: "Arrêt de bus", query: '["highway"="bus_stop"]' },
  { type: "station_brt", label: "Station BRT", query: '["railway"="station"]' },
  { type: "route_principale", label: "Route principale", query: '["highway"="primary"]' },
];

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function fetchNearestEtablissements(
  lat: number,
  lon: number
): Promise<BienRepository.EtablissementData[]> {
  const radius = 5000;
  const results: BienRepository.EtablissementData[] = [];

  const unionParts = ETABLISSEMENT_QUERIES.map(
    ({ query }) => `node${query}(around:${radius},${lat},${lon});`
  ).join("\n");

  const overpassQuery = `[out:json][timeout:25];\n(\n${unionParts}\n);\nout body;`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `data=${encodeURIComponent(overpassQuery)}`,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) return results;

    const json = await response.json() as { elements: OverpassNode[] };
    const elements: OverpassNode[] = json.elements ?? [];

    for (const { type, label } of ETABLISSEMENT_QUERIES) {
      let nearest: OverpassNode | null = null;
      let nearestDist = Infinity;

      for (const el of elements) {
        if (!matchesType(el, type)) continue;
        const dist = haversineDistance(lat, lon, el.lat, el.lon);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = el;
        }
      }

      if (nearest) {
        results.push({
          bienId: "",
          type,
          nom: nearest.tags?.name ?? label,
          latitude: nearest.lat,
          longitude: nearest.lon,
          distance: Math.round(nearestDist),
        });
      }
    }
  } catch {
    // Overpass unavailable - silently skip
  }

  return results;
}

function matchesType(el: OverpassNode, type: string): boolean {
  const t = el.tags ?? {};
  switch (type) {
    case "hopital":          return t.amenity === "hospital";
    case "pharmacie":        return t.amenity === "pharmacy";
    case "ecole_maternelle": return t.amenity === "kindergarten";
    case "ecole_primaire":   return t.amenity === "school" && (t.school === "primary" || !t.school);
    case "college":          return t.amenity === "school" && t.school === "secondary";
    case "lycee":            return t.amenity === "school" && (t.school === "high_school" || t.school === "lycee");
    case "universite":       return t.amenity === "university";
    case "supermarche":      return t.shop === "supermarket";
    case "marche":           return t.amenity === "marketplace";
    case "boulangerie":      return t.shop === "bakery";
    case "mosquee":          return t.amenity === "place_of_worship" && t.religion === "muslim";
    case "eglise":           return t.amenity === "place_of_worship" && t.religion === "christian";
    case "gendarmerie":      return t.amenity === "police";
    case "pompiers":         return t.amenity === "fire_station";
    case "mairie":           return t.amenity === "townhall";
    case "arret_bus":        return t.highway === "bus_stop";
    case "station_brt":      return t.railway === "station";
    case "route_principale": return t.highway === "primary";
    default:                 return false;
  }
}

// ─── Brouillon ────────────────────────────────────────────────────────────────

export const getDraftByProprietaire = async (proprietaireId: string) => {
  return BienRepository.getDraftByProprietaire(proprietaireId);
};

export const saveDraft = async (
  input: SaveDraftInput,
  proprietaireId: string,
  files: Express.Multer.File[]
) => {
  const { existingPhotos = [], disponibleLe, ...rest } = input;

  // Si un ID est fourni, mettre à jour le bien existant
  if (input.id) {
    const bien = await BienRepository.getBienById(input.id);

    if (!bien) {
      throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
    }
    if (bien.proprietaireId !== proprietaireId) {
      throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
    }

    // Upload new photos if provided
    let newPhotoUrls: string[] = [];
    if (files.length > 0) {
      for (const file of files) {
        const result = await CloudinaryService.uploadImage(file.buffer, "seek/biens");
        newPhotoUrls.push(result.url);
      }
    }

    const photos = [...(existingPhotos || []), ...newPhotoUrls];
    const data: BienRepository.BienData = {
      ...rest,
      proprietaireId,
      photos,
      disponibleLe: disponibleLe ? new Date(disponibleLe) : null,
    };

    // Gérer la logique de baisse de prix
    // Si le nouveau prix est inférieur à l'ancien prix, enregistrer l'ancien prix et la date
    if (input.id && rest.prix !== undefined) {
      const bienExistant = await BienRepository.getBienById(input.id);
      if (bienExistant && bienExistant.prix && rest.prix !== null && rest.prix < bienExistant.prix) {
        // Nouvelle baisse de prix significative (minimum 5%)
        const pourcentageBaisse = ((bienExistant.prix - rest.prix) / bienExistant.prix) * 100;
        if (pourcentageBaisse >= 5) {
          (data as any).prixAncien = bienExistant.prix;
          (data as any).dateDerniereModificationPrix = new Date();
        }
      }
    }

    return await BienRepository.updateBien(input.id, data);
  }

  // Sinon, utiliser le comportement existant (brouillon)
  const existing = await BienRepository.getDraftByProprietaire(proprietaireId);

  // Upload new photos if provided
  let newPhotoUrls: string[] = [];
  if (files.length > 0) {
    for (const file of files) {
      const result = await CloudinaryService.uploadImage(file.buffer, "seek/biens");
      newPhotoUrls.push(result.url);
    }
  }

  const photos = [...existingPhotos, ...newPhotoUrls];
  const data: BienRepository.BienData = {
    ...rest,
    proprietaireId,
    photos,
    disponibleLe: disponibleLe ? new Date(disponibleLe) : null,
    statutAnnonce: "BROUILLON",
  };

  let saved;
  if (existing) {
    saved = await BienRepository.updateBien(existing.id, data);
  } else {
    saved = await BienRepository.createBien(data);
  }
  return saved;
};

// ─── Soumettre pour publication ───────────────────────────────────────────────

export const soumettreAnnonce = async (bienId: string, proprietaireId: string) => {
  const bien = await BienRepository.getBienById(bienId);

  if (!bien) {
    throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);
  }
  if (bien.proprietaireId !== proprietaireId) {
    throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
  }
  if (bien.statutAnnonce !== "BROUILLON" && bien.statutAnnonce !== "REJETE") {
    throw new AppError("Cette annonce ne peut pas être soumise dans son état actuel", StatusCodes.BAD_REQUEST);
  }

  // Vérifier si le compte est restreint (3 avertissements)
  const proprietaire = await (prisma as any).proprietaire.findUnique({
    where: { id: proprietaireId },
    select: { estRestreint: true, dateFinRestriction: true },
  });
  if (proprietaire?.estRestreint) {
    const dateFin = proprietaire.dateFinRestriction
      ? new Date(proprietaire.dateFinRestriction).toLocaleDateString("fr-FR")
      : "sous peu";
    throw new AppError(
      `Votre compte est restreint suite à des avertissements. Publication désactivée jusqu'au ${dateFin}.`,
      StatusCodes.FORBIDDEN
    );
  }

  // Vérifier la limite d'annonces selon le plan d'abonnement
  await verifierLimiteAnnonces(proprietaireId);

  // Validate required fields
  const missing: string[] = [];
  if (!bien.titre?.trim()) missing.push("titre");
  if (!bien.typeLogementId) missing.push("type de logement");
  if (!bien.typeTransactionId) missing.push("type de transaction");
  if (!bien.statutBienId) missing.push("statut du bien");
  if (!bien.region?.trim()) missing.push("région");
  if (bien.prix === null || bien.prix === undefined) missing.push("prix");
  if (!bien.photos || bien.photos.length < 3) missing.push("au moins 3 photos");

  if (missing.length > 0) {
    throw new AppError(
      `Champs requis manquants pour la publication : ${missing.join(", ")}`,
      StatusCodes.BAD_REQUEST
    );
  }

  const updated = await BienRepository.updateStatutAnnonce(bienId, "EN_ATTENTE");

  // Register nearby establishments asynchronously
  if (bien.latitude && bien.longitude) {
    fetchNearestEtablissements(bien.latitude, bien.longitude)
      .then(async (etablissements) => {
        const withBienId = etablissements.map((e) => ({ ...e, bienId: bien.id }));
        await BienRepository.createEtablissements(withBienId);
      })
      .catch(() => {});
  }

  return updated;
};

// ─── Biens du propriétaire ────────────────────────────────────────────────────

export const getBiensByProprietaire = async (proprietaireId: string) => {
  const biens = await BienRepository.getBiensByProprietaire(proprietaireId);
  return biens.map(({ bails, ...bien }) => ({
    ...bien,
    hasBailActif: bails.length > 0,
  }));
};

export const getBienById = async (id: string) => {
  return BienRepository.getBienById(id);
};

// ─── Nettoyage Cloudinary d'un bien (photos + documents + photos état des lieux) ──

const deleteCloudinaryForBien = async (bienId: string): Promise<void> => {
  const [bien, docs, etatPhotos] = await Promise.all([
    prisma.bien.findUnique({ where: { id: bienId }, select: { photos: true } }),
    prisma.documentBien.findMany({ where: { bienId }, select: { url: true } }),
    prisma.etatDesLieuxPhoto.findMany({
      where: { item: { etatDesLieux: { bienId } } },
      select: { url: true },
    }),
  ]);
  const urls: (string | null | undefined)[] = [
    ...(bien?.photos ?? []),
    ...docs.map((d) => d.url),
    ...etatPhotos.map((p) => p.url),
  ];
  await CloudinaryService.deleteUrls(urls);
};

export const deleteBien = async (bienId: string, proprietaireId: string) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  if (bien.proprietaireId !== proprietaireId) throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
  if (bien.statutAnnonce === "EN_ATTENTE" || bien.statutAnnonce === "PUBLIE") {
    throw new AppError(
      "Annulez ou dépubliez l'annonce avant de la supprimer",
      StatusCodes.BAD_REQUEST
    );
  }
  const activeBail = await prisma.bailLocation.findFirst({
    where: { bienId, statut: "ACTIF" },
    select: { id: true },
  });
  if (activeBail) {
    throw new AppError(
      "Ce bien est associé à un locataire actif. Terminez ou résiliez le bail avant de supprimer.",
      StatusCodes.BAD_REQUEST
    );
  }
  await deleteCloudinaryForBien(bienId);
  return BienRepository.deleteBienById(bienId);
};

export const retourBrouillon = async (bienId: string, proprietaireId: string) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  if (bien.proprietaireId !== proprietaireId) throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
  if (bien.statutAnnonce !== "EN_ATTENTE" && bien.statutAnnonce !== "PUBLIE") {
    throw new AppError("Cette action n'est pas disponible pour ce statut", StatusCodes.BAD_REQUEST);
  }
  return BienRepository.updateStatutAnnonce(bienId, "BROUILLON");
};

// ─── Annuler une annonce (= suppression définitive) ──────────────────────────

export const annulerAnnonce = async (bienId: string, proprietaireId: string) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  if (bien.proprietaireId !== proprietaireId) throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);

  if (bien.statutAnnonce !== "BROUILLON" && bien.statutAnnonce !== "REJETE") {
    throw new AppError(
      "Seules les annonces en brouillon ou rejetées peuvent être supprimées via cette action",
      StatusCodes.BAD_REQUEST
    );
  }

  const activeBail = await prisma.bailLocation.findFirst({
    where: { bienId, statut: "ACTIF" },
    select: { id: true },
  });
  if (activeBail) {
    throw new AppError(
      "Ce bien est associé à un locataire actif. Terminez ou résiliez le bail avant de supprimer.",
      StatusCodes.BAD_REQUEST
    );
  }

  return BienRepository.deleteBienById(bienId);
};

// ─── Admin — annonces ─────────────────────────────────────────────────────────

export const countAnnoncesPending = async () => {
  return BienRepository.countAnnoncesPending();
};

export const getAnnoncesCounts = async () => {
  return BienRepository.getAnnoncesCounts();
};

export const getAnnonces = async (params: {
  statut?: StatutAnnonce;
  page?: number;
  limit?: number;
}) => {
  return BienRepository.getAnnonces(params);
};

export const validerAnnonce = async (
  bienId: string,
  action: "APPROUVER" | "REJETER" | "REVISION",
  note?: string
) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);

  if (bien.statutAnnonce !== "EN_ATTENTE") {
    throw new AppError("Cette annonce n'est pas en attente de validation", StatusCodes.BAD_REQUEST);
  }

  const newStatut: StatutAnnonce =
    action === "APPROUVER" ? "PUBLIE" :
    action === "REVISION"  ? "EN_REVISION" : "REJETE";
  return BienRepository.updateStatutAnnonce(bienId, newStatut, note);
};

export const adminDeleteBien = async (bienId: string) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  await deleteCloudinaryForBien(bienId);
  return BienRepository.deleteBienById(bienId);
};

// ─── Public — dernières annonces (pour page d'accueil) ───────────────────────────

export const getDernieresAnnonces = async (limit: number = 10) => {
  return BienRepository.getDernieresAnnonces(limit);
};

// ─── Public — lieux distincts ────────────────────────────────────────────────

export const getDistinctLieux = async () => {
  return BienRepository.getDistinctLieux();
};

// ─── Public — recherche avec filtres ──────────────────────────────────────────

export const searchAnnoncePubliques = async (params: {
  ville?: string;
  quartier?: string;
  typeLogementSlug?: string;
  typeTransactionSlug?: string;
  prixMin?: number;
  prixMax?: number;
  nbChambresMin?: number;
  surfaceMin?: number;
  surfaceMax?: number;
  meuble?: boolean;
  parking?: boolean;
  ascenseur?: boolean;
  fumeurs?: boolean;
  animaux?: boolean;
  equipementIds?: string[];
  sortBy?: "prix" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
  lat?: number;
  lng?: number;
  radius?: number;
}) => {
  return BienRepository.searchAnnoncePubliques(params);
};

// ─── Public — annonce publiée par ID ─────────────────────────────────────────────

export const getAnnoncePublieById = async (id: string) => {
  const bien = await BienRepository.getAnnoncePublieById(id);
  if (!bien) {
    throw new AppError("Annonce introuvable ou non publiée", StatusCodes.NOT_FOUND);
  }
  // Calcul du score de confiance du propriétaire en arrière-plan (non bloquant)
  const scoreProprietaire = await computeScoreForProprietaire(bien.proprietaireId).catch(() => null);
  return {
    ...bien,
    scoreProprietaire,
  };
};

// ─── Public — annonces similaires avec système de score ─────────────────────

export const getAnnoncesSimilaires = async (
  bienId: string,
  limit: number = 4
): Promise<BienWithRelations[]> => {
  // Récupérer le bien de référence pour avoir les infos complètes
  const bien = await BienRepository.getBienById(bienId);
  
  if (!bien) {
    return [];
  }
  
  // Appeler la nouvelle méthode avec score
  return BienRepository.getAnnoncesSimilairesWithScore(bienId, limit);
};
