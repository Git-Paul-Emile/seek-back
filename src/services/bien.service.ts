import * as BienRepository from "../repositories/bien.repository.js";
import type { BienWithRelations, PendingRevisionData } from "../repositories/bien.repository.js";
import * as CloudinaryService from "./cloudinary.service.js";
import type { SaveDraftInput } from "../validators/bien.validator.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import type { StatutAnnonce } from "../generated/prisma/enums.js";
import { prisma } from "../config/database.js";

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

// ─── Soumettre une révision (modification d'une annonce publiée) ──────────────

export const soumettreRevision = async (
  bienId: string,
  proprietaireId: string,
  input: SaveDraftInput,
  files: Express.Multer.File[]
) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  if (bien.proprietaireId !== proprietaireId) throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
  if (bien.statutAnnonce !== "PUBLIE") {
    throw new AppError("Seules les annonces publiées peuvent faire l'objet d'une révision", StatusCodes.BAD_REQUEST);
  }
  if (bien.hasPendingRevision) {
    throw new AppError("Une révision est déjà en attente de validation", StatusCodes.BAD_REQUEST);
  }

  // Upload new photos if provided
  let newPhotoUrls: string[] = [];
  if (files.length > 0) {
    for (const file of files) {
      const result = await CloudinaryService.uploadImage(file.buffer, "seek/biens");
      newPhotoUrls.push(result.url);
    }
  }

  const { existingPhotos = [], disponibleLe, equipementIds, meubles, ...rest } = input;
  const photos = [...existingPhotos, ...newPhotoUrls];

  const normalizeString = (value: string | null | undefined) => {
    const trimmed = value?.trim();
    return trimmed ? trimmed : null;
  };

  const normalizeNumber = (value: number | null | undefined) =>
    typeof value === "number" && Number.isFinite(value) ? value : null;

  const sortStrings = (values: string[] | null | undefined) =>
    [...(values ?? [])].sort();

  const sortMeubles = (
    values: { meubleId: string; quantite: number }[] | null | undefined
  ) =>
    [...(values ?? [])]
      .map((item) => ({ meubleId: item.meubleId, quantite: item.quantite ?? 1 }))
      .sort((a, b) =>
        a.meubleId === b.meubleId
          ? a.quantite - b.quantite
          : a.meubleId.localeCompare(b.meubleId)
      );

  const currentComparable = {
    titre: normalizeString(bien.titre),
    description: normalizeString(bien.description),
    typeLogementId: bien.typeLogementId ?? null,
    typeTransactionId: bien.typeTransactionId ?? null,
    statutBienId: bien.statutBienId ?? null,
    pays: normalizeString(bien.pays),
    region: normalizeString(bien.region),
    ville: normalizeString(bien.ville),
    quartier: normalizeString(bien.quartier),
    adresse: normalizeString(bien.adresse),
    latitude: normalizeNumber(bien.latitude),
    longitude: normalizeNumber(bien.longitude),
    surface: normalizeNumber(bien.surface),
    nbChambres: normalizeNumber(bien.nbChambres),
    nbSdb: normalizeNumber(bien.nbSdb),
    nbSalons: normalizeNumber(bien.nbSalons),
    nbCuisines: normalizeNumber(bien.nbCuisines),
    nbWc: normalizeNumber(bien.nbWc),
    etage: normalizeNumber(bien.etage),
    meuble: !!bien.meuble,
    fumeurs: !!bien.fumeurs,
    animaux: !!bien.animaux,
    parking: !!bien.parking,
    ascenseur: !!bien.ascenseur,
    prix: normalizeNumber(bien.prix),
    frequencePaiement: normalizeString(bien.frequencePaiement),
    chargesIncluses: !!bien.chargesIncluses,
    caution: normalizeNumber(bien.caution),
    disponibleLe: bien.disponibleLe ? bien.disponibleLe.toISOString().split("T")[0] : null,
    photos,
    equipementIds: sortStrings(bien.equipements?.map((e) => e.equipementId)),
    meubles: sortMeubles(
      bien.meubles?.map((m) => ({ meubleId: m.meubleId, quantite: m.quantite }))
    ),
  };

  const nextComparable = {
    titre: normalizeString(rest.titre as string | null | undefined),
    description: normalizeString(rest.description as string | null | undefined),
    typeLogementId: (rest.typeLogementId as string | null | undefined) ?? null,
    typeTransactionId: (rest.typeTransactionId as string | null | undefined) ?? null,
    statutBienId: (rest.statutBienId as string | null | undefined) ?? null,
    pays: normalizeString(rest.pays as string | null | undefined),
    region: normalizeString(rest.region as string | null | undefined),
    ville: normalizeString(rest.ville as string | null | undefined),
    quartier: normalizeString(rest.quartier as string | null | undefined),
    adresse: normalizeString(rest.adresse as string | null | undefined),
    latitude: normalizeNumber(rest.latitude as number | null | undefined),
    longitude: normalizeNumber(rest.longitude as number | null | undefined),
    surface: normalizeNumber(rest.surface as number | null | undefined),
    nbChambres: normalizeNumber(rest.nbChambres as number | null | undefined),
    nbSdb: normalizeNumber(rest.nbSdb as number | null | undefined),
    nbSalons: normalizeNumber(rest.nbSalons as number | null | undefined),
    nbCuisines: normalizeNumber(rest.nbCuisines as number | null | undefined),
    nbWc: normalizeNumber(rest.nbWc as number | null | undefined),
    etage: normalizeNumber(rest.etage as number | null | undefined),
    meuble: !!rest.meuble,
    fumeurs: !!rest.fumeurs,
    animaux: !!rest.animaux,
    parking: !!rest.parking,
    ascenseur: !!rest.ascenseur,
    prix: normalizeNumber(rest.prix as number | null | undefined),
    frequencePaiement: normalizeString(rest.frequencePaiement as string | null | undefined),
    chargesIncluses: !!rest.chargesIncluses,
    caution: normalizeNumber(rest.caution as number | null | undefined),
    disponibleLe: disponibleLe ?? null,
    photos,
    equipementIds: sortStrings(equipementIds),
    meubles: sortMeubles(meubles),
  };

  if (JSON.stringify(currentComparable) === JSON.stringify(nextComparable)) {
    throw new AppError(
      "Aucune modification détectée. Modifiez au moins un élément avant de soumettre.",
      StatusCodes.BAD_REQUEST
    );
  }

  // Build revision data with resolved labels for display in admin
  const revisionData: PendingRevisionData = {
    ...rest,
    photos,
    disponibleLe: disponibleLe ?? null,
    equipementIds: equipementIds ?? [],
    meubles: meubles ?? [],
    typeLogement: bien.typeLogement ? { nom: (bien.typeLogement as any).nom, slug: (bien.typeLogement as any).slug } : null,
    typeTransaction: bien.typeTransaction ? { nom: (bien.typeTransaction as any).nom, slug: (bien.typeTransaction as any).slug } : null,
    statutBien: bien.statutBien ? { nom: (bien.statutBien as any).nom, slug: (bien.statutBien as any).slug } : null,
  };

  return BienRepository.soumettreRevision(bienId, revisionData);
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

  // Cas REVISION (action admin manuelle - legacy)
  if (action === "REVISION") {
    if (bien.statutAnnonce !== "PUBLIE") {
      throw new AppError("Seules les annonces publiées peuvent être mises en révision", StatusCodes.BAD_REQUEST);
    }
    return BienRepository.updateStatutAnnonce(bienId, "EN_ATTENTE");
  }

  // Cas : révision en attente sur un bien PUBLIE
  if (bien.statutAnnonce === "PUBLIE" && bien.hasPendingRevision) {
    if (action === "APPROUVER") {
      // Supprimer de Cloudinary les photos retirées dans la révision
      const rev = bien.pendingRevision as PendingRevisionData | null;
      const newPhotos: string[] = rev?.photos ?? [];
      const oldPhotos: string[] = bien.photos ?? [];
      const orphaned = oldPhotos.filter((url) => !newPhotos.includes(url));
      await Promise.allSettled(
        orphaned.map((url) => {
          const publicId = CloudinaryService.extractPublicId(url);
          return publicId ? CloudinaryService.deleteImage(publicId) : Promise.resolve();
        })
      );
      return BienRepository.approuverRevision(bienId);
    } else {
      // REJETER : on conserve l'ancienne version publiée, on efface la révision
      return BienRepository.rejeterRevision(bienId, note);
    }
  }

  // Cas normal : annonce EN_ATTENTE (nouvelle soumission)
  if (bien.statutAnnonce !== "EN_ATTENTE") {
    throw new AppError("Cette annonce n'est pas en attente de validation", StatusCodes.BAD_REQUEST);
  }

  const newStatut: StatutAnnonce = action === "APPROUVER" ? "PUBLIE" : "REJETE";
  return BienRepository.updateStatutAnnonce(bienId, newStatut, note);
};

export const adminDeleteBien = async (bienId: string) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  return BienRepository.deleteBienById(bienId);
};

// ─── Public — dernières annonces (pour page d'accueil) ───────────────────────────

export const getDernieresAnnonces = async (limit: number = 8) => {
  return BienRepository.getDernieresAnnonces(limit);
};

// ─── Public — lieux distincts ────────────────────────────────────────────────

export const getDistinctLieux = async () => {
  return BienRepository.getDistinctLieux();
};

// ─── Public — recherche avec filtres ──────────────────────────────────────────

export const searchAnnoncePubliques = async (params: {
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
  sortBy?: "prix" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}) => {
  return BienRepository.searchAnnoncePubliques(params);
};

// ─── Public — annonce publiée par ID ─────────────────────────────────────────────

export const getAnnoncePublieById = async (id: string) => {
  const bien = await BienRepository.getAnnoncePublieById(id);
  if (!bien) {
    throw new AppError("Annonce introuvable ou non publiée", StatusCodes.NOT_FOUND);
  }
  return bien;
};

// ─── Signalement d'annonce ─────────────────────────────────────────────────────
export const signalerAnnonce = async (
  bienId: string,
  motif: string,
  description?: string
) => {
  const bien = await BienRepository.getBienById(bienId);
  if (!bien) {
    throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);
  }
  // Log the report - in production you would create a Signalement model
  console.log(`Signalement d'annonce ${bienId}: ${motif} - ${description || "sans description"}`);
  return { success: true, message: "Signalement enregistré. Merci de votre vigilance." };
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
