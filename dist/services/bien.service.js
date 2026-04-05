import * as BienRepository from "../repositories/bien.repository.js";
import * as CloudinaryService from "./cloudinary.service.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { computeScoreForProprietaire } from "./trustScore.service.js";
import { emitPropertyAlert, fetchAndEmitStatsGlobales } from "./socket.service.js";
import { envoyerNotification } from "./notification.service.js";
const ETABLISSEMENT_QUERIES = [
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
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
async function queryOverpass(lat, lon, queries, radius) {
    const unionParts = queries
        .map(({ query }) => `node${query}(around:${radius},${lat},${lon});`)
        .join("\n");
    const overpassQuery = `[out:json][timeout:25];\n(\n${unionParts}\n);\nout body;`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `data=${encodeURIComponent(overpassQuery)}`,
        signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!response.ok)
        return { elements: [], ok: false };
    const json = await response.json();
    return { elements: json.elements ?? [], ok: true };
}
function pickNearest(elements, lat, lon, queries) {
    const found = new Map();
    for (const { type, label } of queries) {
        let nearest = null;
        let nearestDist = Infinity;
        for (const el of elements) {
            if (!matchesType(el, type))
                continue;
            const dist = haversineDistance(lat, lon, el.lat, el.lon);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = el;
            }
        }
        if (nearest)
            found.set(type, { node: nearest, dist: nearestDist, label });
    }
    return found;
}
async function fetchNearestEtablissements(lat, lon) {
    const results = [];
    try {
        // 1st pass — 5 km
        const { elements, ok } = await queryOverpass(lat, lon, ETABLISSEMENT_QUERIES, 5000);
        if (!ok)
            return results;
        const found = pickNearest(elements, lat, lon, ETABLISSEMENT_QUERIES);
        // Types absent from the 5 km radius
        const missing = ETABLISSEMENT_QUERIES.filter(({ type }) => !found.has(type));
        // 2nd pass — 50 km for missing types only
        if (missing.length > 0) {
            const { elements: elemsFar } = await queryOverpass(lat, lon, missing, 50000);
            const foundFar = pickNearest(elemsFar, lat, lon, missing);
            foundFar.forEach((v, type) => found.set(type, v));
        }
        found.forEach(({ node, dist, label }, type) => {
            results.push({
                bienId: "",
                type,
                nom: node.tags?.name ?? label,
                latitude: node.lat,
                longitude: node.lon,
                distance: Math.round(dist),
            });
        });
    }
    catch {
        // Overpass unavailable - silently skip
    }
    return results;
}
function matchesType(el, type) {
    const t = el.tags ?? {};
    switch (type) {
        case "hopital": return t.amenity === "hospital";
        case "pharmacie": return t.amenity === "pharmacy";
        case "ecole_maternelle": return t.amenity === "kindergarten";
        case "ecole_primaire": return t.amenity === "school" && (t.school === "primary" || !t.school);
        case "college": return t.amenity === "school" && t.school === "secondary";
        case "lycee": return t.amenity === "school" && (t.school === "high_school" || t.school === "lycee");
        case "universite": return t.amenity === "university";
        case "supermarche": return t.shop === "supermarket";
        case "marche": return t.amenity === "marketplace";
        case "boulangerie": return t.shop === "bakery";
        case "mosquee": return t.amenity === "place_of_worship" && t.religion === "muslim";
        case "eglise": return t.amenity === "place_of_worship" && t.religion === "christian";
        case "gendarmerie": return t.amenity === "police";
        case "pompiers": return t.amenity === "fire_station";
        case "mairie": return t.amenity === "townhall";
        case "arret_bus": return t.highway === "bus_stop";
        case "station_brt": return t.railway === "station";
        case "route_principale": return t.highway === "primary";
        default: return false;
    }
}
// ─── Brouillon ────────────────────────────────────────────────────────────────
export const getDraftByProprietaire = async (proprietaireId) => {
    return BienRepository.getDraftByProprietaire(proprietaireId);
};
export const saveDraft = async (input, proprietaireId, files) => {
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
        // Upload new photos in parallel
        const newPhotoUrls = files.length > 0
            ? await Promise.all(files.map((file) => CloudinaryService.uploadImage(file.buffer, "seek/biens").then((r) => r.url)))
            : [];
        const photos = [...(existingPhotos || []), ...newPhotoUrls];
        const data = {
            ...rest,
            proprietaireId,
            photos,
            disponibleLe: disponibleLe ? new Date(disponibleLe) : null,
        };
        // Gérer la logique de baisse de prix (bien déjà chargé plus haut)
        if (rest.prix !== undefined && bien.prix && rest.prix !== null && rest.prix < bien.prix) {
            const pourcentageBaisse = ((bien.prix - rest.prix) / bien.prix) * 100;
            if (pourcentageBaisse >= 5) {
                data.prixAncien = bien.prix;
                data.dateDerniereModificationPrix = new Date();
            }
        }
        return await BienRepository.updateBien(input.id, data);
    }
    // Sinon, utiliser le comportement existant (brouillon)
    const existing = await BienRepository.getDraftByProprietaire(proprietaireId);
    // Upload new photos in parallel
    const newPhotoUrls = files.length > 0
        ? await Promise.all(files.map((file) => CloudinaryService.uploadImage(file.buffer, "seek/biens").then((r) => r.url)))
        : [];
    const photos = [...existingPhotos, ...newPhotoUrls];
    const data = {
        ...rest,
        proprietaireId,
        photos,
        disponibleLe: disponibleLe ? new Date(disponibleLe) : null,
        statutAnnonce: "BROUILLON",
    };
    let saved;
    if (existing) {
        saved = await BienRepository.updateBien(existing.id, data);
    }
    else {
        saved = await BienRepository.createBien(data);
    }
    return saved;
};
// ─── Soumettre pour publication ───────────────────────────────────────────────
export const soumettreAnnonce = async (bienId, proprietaireId) => {
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
    const proprietaire = await prisma.proprietaire.findUnique({
        where: { id: proprietaireId },
        select: { estRestreint: true, dateFinRestriction: true },
    });
    if (proprietaire?.estRestreint) {
        const dateFin = proprietaire.dateFinRestriction
            ? new Date(proprietaire.dateFinRestriction).toLocaleDateString("fr-FR")
            : "sous peu";
        throw new AppError(`Votre compte est restreint suite à des avertissements. Publication désactivée jusqu'au ${dateFin}.`, StatusCodes.FORBIDDEN);
    }
    // Validate required fields
    const missing = [];
    if (!bien.titre?.trim())
        missing.push("titre");
    if (!bien.typeLogementId)
        missing.push("type de logement");
    if (!bien.typeTransactionId)
        missing.push("type de transaction");
    if (!bien.statutBienId)
        missing.push("statut du bien");
    if (!bien.region?.trim())
        missing.push("région");
    if (bien.prix === null || bien.prix === undefined)
        missing.push("prix");
    if (!bien.photos || bien.photos.length < 3)
        missing.push("au moins 3 photos");
    if (missing.length > 0) {
        throw new AppError(`Champs requis manquants pour la publication : ${missing.join(", ")}`, StatusCodes.BAD_REQUEST);
    }
    const updated = await BienRepository.updateStatutAnnonce(bienId, "EN_ATTENTE");
    // Stats admin temps réel
    fetchAndEmitStatsGlobales().catch(() => null);
    // Register nearby establishments asynchronously
    if (bien.latitude && bien.longitude) {
        fetchNearestEtablissements(bien.latitude, bien.longitude)
            .then(async (etablissements) => {
            const withBienId = etablissements.map((e) => ({ ...e, bienId: bien.id }));
            await BienRepository.createEtablissements(withBienId);
        })
            .catch(() => { });
    }
    return updated;
};
// ─── Biens du propriétaire ────────────────────────────────────────────────────
export const getBiensByProprietaire = async (proprietaireId) => {
    const biens = await BienRepository.getBiensByProprietaire(proprietaireId);
    return biens.map(({ bails, ...bien }) => ({
        ...bien,
        hasBailActif: bails.length > 0,
    }));
};
export const getBienById = async (id) => {
    return BienRepository.getBienById(id);
};
// ─── Nettoyage Cloudinary d'un bien (photos + documents + photos état des lieux) ──
const deleteCloudinaryForBien = async (bienId) => {
    const [bien, docs] = await Promise.all([
        prisma.bien.findUnique({ where: { id: bienId }, select: { photos: true } }),
        prisma.documentBien.findMany({ where: { bienId }, select: { url: true } }),
    ]);
    const urls = [
        ...(bien?.photos ?? []),
        ...docs.map((d) => d.url),
    ];
    await CloudinaryService.deleteUrls(urls);
};
export const deleteBien = async (bienId, proprietaireId) => {
    const bien = await BienRepository.getBienById(bienId);
    if (!bien)
        throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
    if (bien.proprietaireId !== proprietaireId)
        throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
    const activeBail = await prisma.bailLocation.findFirst({
        where: { bienId, statut: "ACTIF" },
        select: { id: true },
    });
    if (activeBail) {
        throw new AppError("Ce bien est associé à un locataire actif. Terminez ou résiliez le bail avant de supprimer.", StatusCodes.BAD_REQUEST);
    }
    await deleteCloudinaryForBien(bienId);
    return BienRepository.deleteBienById(bienId);
};
export const retourBrouillon = async (bienId, proprietaireId) => {
    const bien = await BienRepository.getBienById(bienId);
    if (!bien)
        throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
    if (bien.proprietaireId !== proprietaireId)
        throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
    if (bien.statutAnnonce !== "EN_ATTENTE" && bien.statutAnnonce !== "PUBLIE") {
        throw new AppError("Cette action n'est pas disponible pour ce statut", StatusCodes.BAD_REQUEST);
    }
    return BienRepository.updateStatutAnnonce(bienId, "BROUILLON");
};
// ─── Annuler une annonce (= suppression définitive) ──────────────────────────
export const annulerAnnonce = async (bienId, proprietaireId) => {
    const bien = await BienRepository.getBienById(bienId);
    if (!bien)
        throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
    if (bien.proprietaireId !== proprietaireId)
        throw new AppError("Non autorisé", StatusCodes.FORBIDDEN);
    if (bien.statutAnnonce !== "BROUILLON" && bien.statutAnnonce !== "REJETE") {
        throw new AppError("Seules les annonces en brouillon ou rejetées peuvent être supprimées via cette action", StatusCodes.BAD_REQUEST);
    }
    const activeBail = await prisma.bailLocation.findFirst({
        where: { bienId, statut: "ACTIF" },
        select: { id: true },
    });
    if (activeBail) {
        throw new AppError("Ce bien est associé à un locataire actif. Terminez ou résiliez le bail avant de supprimer.", StatusCodes.BAD_REQUEST);
    }
    return BienRepository.deleteBienById(bienId);
};
// ─── Admin - annonces ─────────────────────────────────────────────────────────
export const countAnnoncesPending = async () => {
    return BienRepository.countAnnoncesPending();
};
export const getAnnoncesCounts = async () => {
    return BienRepository.getAnnoncesCounts();
};
export const getAnnonces = async (params) => {
    return BienRepository.getAnnonces(params);
};
export const validerAnnonce = async (bienId, action, note) => {
    const bien = await BienRepository.getBienById(bienId);
    if (!bien)
        throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);
    if (bien.statutAnnonce !== "EN_ATTENTE") {
        throw new AppError("Cette annonce n'est pas en attente de validation", StatusCodes.BAD_REQUEST);
    }
    const newStatut = action === "APPROUVER" ? "PUBLIE" : "REJETE";
    const result = await BienRepository.updateStatutAnnonce(bienId, newStatut, note);
    // Notification in-app au propriétaire
    const proprietaire = result.proprietaire;
    if (proprietaire) {
        const bienTitre = result.titre ?? "votre annonce";
        if (action === "APPROUVER") {
            envoyerNotification({
                type: "ANNONCE_VALIDEE",
                telephone: proprietaire.telephone,
                email: proprietaire.email,
                sujet: "Annonce validée",
                contenu: `Votre annonce "${bienTitre}" a été validée et est maintenant publiée sur SEEK Immobilier.`,
                bienId,
                proprietaireId: proprietaire.id,
                noSmsEmail: true,
            }).catch(() => null);
        }
        else {
            envoyerNotification({
                type: "ANNONCE_REJETEE",
                telephone: proprietaire.telephone,
                email: proprietaire.email,
                sujet: "Annonce rejetée",
                contenu: `Votre annonce "${bienTitre}" a été rejetée${note ? ` : ${note}` : "."}`,
                bienId,
                proprietaireId: proprietaire.id,
                noSmsEmail: true,
            }).catch(() => null);
        }
    }
    // Alertes temps réel aux utilisateurs qui ont sauvegardé des critères
    if (action === "APPROUVER") {
        emitPropertyAlert(bienId).catch(() => null);
    }
    return result;
};
export const adminDeleteBien = async (bienId) => {
    const bien = await BienRepository.getBienById(bienId);
    if (!bien)
        throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
    await deleteCloudinaryForBien(bienId);
    return BienRepository.deleteBienById(bienId);
};
// ─── Public - dernières annonces (pour page d'accueil) ───────────────────────────
export const getDernieresAnnonces = async (limit = 10) => {
    return BienRepository.getDernieresAnnonces(limit);
};
// ─── Public - lieux distincts ────────────────────────────────────────────────
export const getDistinctLieux = async () => {
    return BienRepository.getDistinctLieux();
};
// ─── Public - recherche avec filtres ──────────────────────────────────────────
export const searchAnnoncePubliques = async (params) => {
    return BienRepository.searchAnnoncePubliques(params);
};
// ─── Public - annonce publiée par ID ─────────────────────────────────────────────
export const getAnnoncePublieById = async (id) => {
    const bien = await BienRepository.getAnnoncePublieById(id);
    if (!bien) {
        throw new AppError("Annonce introuvable ou non publiée", StatusCodes.NOT_FOUND);
    }
    const scoreProprietaire = await computeScoreForProprietaire(bien.proprietaireId).catch(() => null);
    return { ...bien, scoreProprietaire };
};
// ─── Public - annonces similaires avec système de score ─────────────────────
export const getAnnoncesSimilaires = async (bienId, limit = 4) => {
    // Récupérer le bien de référence pour avoir les infos complètes
    const bien = await BienRepository.getBienById(bienId);
    if (!bien) {
        return [];
    }
    // Appeler la nouvelle méthode avec score
    return BienRepository.getAnnoncesSimilairesWithScore(bienId, limit);
};
//# sourceMappingURL=bien.service.js.map