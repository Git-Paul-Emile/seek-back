import * as BienRepository from "../repositories/bien.repository.js";
import * as CloudinaryService from "./cloudinary.service.js";
import type { SaveDraftInput } from "../validators/bien.validator.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import type { StatutAnnonce } from "../generated/prisma/enums.js";

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

    // Combine: existing photos + new uploads
    const { existingPhotos = [], disponibleLe, ...rest } = input;
    const photos = [...(existingPhotos || []), ...newPhotoUrls];

    const data: BienRepository.BienData = {
      ...rest,
      proprietaireId,
      photos,
      disponibleLe: disponibleLe ? new Date(disponibleLe) : null,
    };

    return BienRepository.updateBien(input.id, data);
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

  // Combine: main photo first, then existing, then new uploads
  const { existingPhotos = [], disponibleLe, ...rest } = input;
  const photos = [...existingPhotos, ...newPhotoUrls];

  const data: BienRepository.BienData = {
    ...rest,
    proprietaireId,
    photos,
    disponibleLe: disponibleLe ? new Date(disponibleLe) : null,
    statutAnnonce: "BROUILLON",
  };

  if (existing) {
    return BienRepository.updateBien(existing.id, data);
  } else {
    return BienRepository.createBien(data);
  }
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
  return BienRepository.getBiensByProprietaire(proprietaireId);
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

  if (action === "REVISION") {
    if (bien.statutAnnonce !== "PUBLIE") {
      throw new AppError("Seules les annonces publiées peuvent être mises en révision", StatusCodes.BAD_REQUEST);
    }
    return BienRepository.updateStatutAnnonce(bienId, "EN_ATTENTE");
  }

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
