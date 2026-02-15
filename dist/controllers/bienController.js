/**
 * Contrôleur pour la gestion des biens immobiliers
 * Gère la création, modification, suppression et consultation des biens
 */
import { PrismaClient, TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement } from '../generated/prisma/client.js';
import { AppError } from '../utils/AppError.js';
import { controllerWrapper } from '../utils/ControllerWrapper.js';
import { geocodeAddress } from '../services/geocodingService.js';
import { rechercherEtablissementsProches } from '../services/placesService.js';
const prisma = new PrismaClient();
/**
 * Mapping des types d'établissements entre le service et Prisma
 */
const TYPE_ETABLISSEMENT_MAP = {
    HOPITAL: TypeEtablissement.HOPITAL,
    PHARMACIE: TypeEtablissement.PHARMACIE,
    ECOLE_MATERNELLE: TypeEtablissement.ECOLE_MATERNELLE,
    ECOLE_PRIMAIRE: TypeEtablissement.ECOLE_PRIMAIRE,
    COLLEGE: TypeEtablissement.COLLEGE,
    LYCEE: TypeEtablissement.LYCEE,
    UNIVERSITE: TypeEtablissement.UNIVERSITE,
    CENTRE_FORMATION: TypeEtablissement.CENTRE_FORMATION,
    SUPERMARCHE: TypeEtablissement.SUPERMARCHE,
    BOUTIQUE_QUARTIER: TypeEtablissement.BOUTIQUE_QUARTIER,
    MARCHE: TypeEtablissement.MARCHE,
    CENTRE_COMMERCIAL: TypeEtablissement.CENTRE_COMMERCIAL,
    BOULANGERIE: TypeEtablissement.BOULANGERIE,
    MOSQUEE: TypeEtablissement.MOSQUEE,
    EGLISE: TypeEtablissement.EGLISE,
    COMMISSARIAT_GENDARMERIE: TypeEtablissement.COMMISSARIAT_GENDARMERIE,
    CASERNE_POMPIERS: TypeEtablissement.CASERNE_POMPIERS,
    MAIRIE: TypeEtablissement.MAIRIE,
    ARRET_BUS: TypeEtablissement.ARRET_BUS,
    GARE: TypeEtablissement.GARE,
    STATION_BRT: TypeEtablissement.STATION_BRT,
    ROUTE_PRINCIPALE: TypeEtablissement.ROUTE_PRINCIPALE,
    SALLE_SPORT: TypeEtablissement.SALLE_SPORT,
    PARC: TypeEtablissement.PARC,
    RESTAURANT: TypeEtablissement.RESTAURANT,
    PLAGE: TypeEtablissement.PLAGE,
    TERRAIN_SPORT: TypeEtablissement.TERRAIN_SPORT
};
const CATEGORIE_ETABLISSEMENT_MAP = {
    SANTE: CategorieEtablissement.SANTE,
    EDUCATION: CategorieEtablissement.EDUCATION,
    COMMERCE_ALIMENTATION: CategorieEtablissement.COMMERCE_ALIMENTATION,
    LIEUX_CULTE: CategorieEtablissement.LIEUX_CULTE,
    SECURITE_SERVICES_PUBLICS: CategorieEtablissement.SECURITE_SERVICES_PUBLICS,
    TRANSPORT: CategorieEtablissement.TRANSPORT,
    LOISIRS_QUALITE_VIE: CategorieEtablissement.LOISIRS_QUALITE_VIE
};
/**
 * Fonction helper pour rechercher et enregistrer les établissements proches
 */
async function rechercherEtEnregistrerEtablissements(bienId, latitude, longitude) {
    try {
        const etablissements = await rechercherEtablissementsProches(latitude, longitude, 3);
        if (etablissements.length === 0) {
            console.log('[Bien] Aucun établissement trouvé à proximité');
            return;
        }
        // Enregistrer les établissements en base de données
        for (const etab of etablissements) {
            const typeEnum = TYPE_ETABLISSEMENT_MAP[etab.typeEnum];
            const categorieEnum = CATEGORIE_ETABLISSEMENT_MAP[etab.categorie];
            if (!typeEnum || !categorieEnum) {
                console.warn(`[Bien] Type ou catégorie inconnu: ${etab.typeEnum} / ${etab.categorie}`);
                continue;
            }
            try {
                await prisma.etablissementProche.create({
                    data: {
                        bienId,
                        categorie: categorieEnum,
                        type: typeEnum,
                        nom: etab.nom,
                        adresse: etab.adresse || null,
                        distanceKm: etab.distanceKm,
                        dureeMinutes: etab.dureeMinutes,
                        latitude: etab.latitude,
                        longitude: etab.longitude
                    }
                });
            }
            catch (error) {
                // Ignorer les erreurs de duplication
                const prismaError = error;
                if (prismaError.code !== 'P2002') {
                    console.error(`[Bien] Erreur création établissement ${etab.nom}:`, error);
                }
            }
        }
        console.log(`[Bien] ${etablissements.length} établissements enregistrés pour le bien ${bienId}`);
    }
    catch (error) {
        console.error('[Bien] Erreur lors de la recherche d\'établissements:', error);
    }
}
/**
 * Crée un nouveau bien immobilier avec géocodage automatique et recherche d'établissements proches
 * POST /api/biens
 */
export const createBienHandler = controllerWrapper(async (req, res, next) => {
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    const { titre, type, prix, statut, modeLocation, description, surface, chambres, sallesDeBain, adresse: adresseBody, quartier, villeId, imageCouverture, images, documents, urlVisiteVirtuelle } = req.body;
    // Validation des champs obligatoires
    if (!titre || !type || !prix || !adresseBody) {
        return next(new AppError('Les champs titre, type, prix et adresse sont obligatoires', 400));
    }
    // Vérifier que le type est valide
    if (!Object.values(TypeBien).includes(type)) {
        return next(new AppError('Type de bien invalide', 400));
    }
    console.log(`[Bien] Création d'un bien: ${titre} à ${adresseBody}`);
    // Étape 1: Géocodage automatique de l'adresse
    console.log('[Bien] Géocodage de l\'adresse...');
    const geocodingResult = await geocodeAddress(adresseBody);
    let latitude = null;
    let longitude = null;
    if (geocodingResult) {
        latitude = geocodingResult.latitude;
        longitude = geocodingResult.longitude;
        console.log(`[Bien] Coordonnées obtenues: (${latitude}, ${longitude})`);
    }
    else {
        console.warn('[Bien] Géocodage échoué, le bien sera créé sans coordonnées');
    }
    // Créer le bien avec les coordonnées
    const bien = await prisma.bien.create({
        data: {
            titre,
            type: type,
            prix: parseFloat(prix),
            statut: statut || StatutBien.DISPONIBLE,
            modeLocation: modeLocation ? modeLocation : null,
            description: description || null,
            surface: surface ? parseFloat(surface) : null,
            chambres: chambres ? parseInt(chambres) : null,
            sallesDeBain: sallesDeBain ? parseInt(sallesDeBain) : null,
            adresse: adresseBody,
            quartier: quartier || null,
            villeId: villeId || null,
            latitude,
            longitude,
            imageCouverture: imageCouverture || null,
            images: images || null,
            documents: documents || null,
            urlVisiteVirtuelle: urlVisiteVirtuelle || null,
            proprietaireId
        }
    });
    console.log(`[Bien] Bien créé avec l'ID: ${bien.id}`);
    // Étape 2: Rechercher et enregistrer les établissements proches (en arrière-plan si coordonnées disponibles)
    if (latitude && longitude) {
        console.log('[Bien] Recherche des établissements proches...');
        // Lancer la recherche en arrière-plan (ne pas bloquer la réponse)
        rechercherEtEnregistrerEtablissements(bien.id, latitude, longitude)
            .catch(err => {
            console.error('[Bien] Erreur lors de la recherche d\'établissements:', err);
        });
    }
    // Récupérer le bien complet avec les relations
    const bienComplet = await prisma.bien.findUnique({
        where: { id: bien.id },
        include: {
            ville: true,
            etablissements: {
                orderBy: { distanceKm: 'asc' }
            }
        }
    });
    res.status(201).json({
        status: 'success',
        data: {
            bien: bienComplet
        },
        message: 'Bien créé avec succès. Les établissements proches sont en cours de recherche.'
    });
});
/**
 * Récupère tous les biens du propriétaire connecté
 * GET /api/biens
 */
export const getBiensHandler = controllerWrapper(async (req, res, next) => {
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    const biens = await prisma.bien.findMany({
        where: { proprietaireId },
        include: {
            ville: true,
            etablissements: {
                orderBy: { distanceKm: 'asc' }
            }
        },
        orderBy: { dateCreation: 'desc' }
    });
    res.status(200).json({
        status: 'success',
        results: biens.length,
        data: {
            biens
        }
    });
});
/**
 * Récupère un bien par son ID
 * GET /api/biens/:id
 */
export const getBienByIdHandler = controllerWrapper(async (req, res, next) => {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    const bien = await prisma.bien.findFirst({
        where: {
            id,
            proprietaireId
        },
        include: {
            ville: true,
            etablissements: {
                orderBy: { distanceKm: 'asc' }
            }
        }
    });
    if (!bien) {
        return next(new AppError('Bien non trouvé', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            bien
        }
    });
});
/**
 * Met à jour un bien existant
 * PUT /api/biens/:id
 */
export const updateBienHandler = controllerWrapper(async (req, res, next) => {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    // Vérifier que le bien existe et appartient au propriétaire
    if (!id)
        return next(new AppError('ID invalide', 400));
    const existingBien = await prisma.bien.findFirst({
        where: { id, proprietaireId }
    });
    if (!existingBien) {
        return next(new AppError('Bien non trouvé', 404));
    }
    const { titre, type, prix, statut, modeLocation, description, surface, chambres, sallesDeBain, adresse, quartier, villeId, imageCouverture, images, documents, urlVisiteVirtuelle } = req.body;
    // Si l'adresse a changé, refaire le géocodage
    let latitude = existingBien.latitude;
    let longitude = existingBien.longitude;
    let needUpdateEtablissements = false;
    if (adresse && adresse !== existingBien.adresse) {
        console.log('[Bien] Adresse modifiée, nouveau géocodage...');
        const geocodingResult = await geocodeAddress(adresse);
        if (geocodingResult) {
            latitude = geocodingResult.latitude;
            longitude = geocodingResult.longitude;
            needUpdateEtablissements = true;
        }
    }
    // Mettre à jour le bien
    const updatedBien = await prisma.bien.update({
        where: { id },
        data: {
            titre: titre || existingBien.titre,
            type: type || existingBien.type,
            prix: prix !== undefined ? parseFloat(prix) : existingBien.prix,
            statut: statut || existingBien.statut,
            modeLocation: modeLocation !== undefined ? (modeLocation ? modeLocation : null) : existingBien.modeLocation,
            description: description !== undefined ? description : existingBien.description,
            surface: surface !== undefined ? (surface ? parseFloat(surface) : null) : existingBien.surface,
            chambres: chambres !== undefined ? (chambres ? parseInt(chambres) : null) : existingBien.chambres,
            sallesDeBain: sallesDeBain !== undefined ? (sallesDeBain ? parseInt(sallesDeBain) : null) : existingBien.sallesDeBain,
            adresse: adresse || existingBien.adresse,
            quartier: quartier !== undefined ? quartier : existingBien.quartier,
            villeId: villeId !== undefined ? villeId : existingBien.villeId,
            latitude,
            longitude,
            imageCouverture: imageCouverture !== undefined ? imageCouverture : existingBien.imageCouverture,
            images: images !== undefined ? images : existingBien.images,
            documents: documents !== undefined ? documents : existingBien.documents,
            urlVisiteVirtuelle: urlVisiteVirtuelle !== undefined ? urlVisiteVirtuelle : existingBien.urlVisiteVirtuelle
        },
        include: {
            ville: true,
            etablissements: {
                orderBy: { distanceKm: 'asc' }
            }
        }
    });
    // Si l'adresse a changé et qu'on a de nouvelles coordonnées, mettre à jour les établissements
    if (needUpdateEtablissements && latitude && longitude) {
        // Supprimer les anciens établissements
        await prisma.etablissementProche.deleteMany({
            where: { bienId: id }
        });
        // Rechercher et enregistrer les nouveaux établissements
        rechercherEtEnregistrerEtablissements(id, latitude, longitude)
            .catch(err => {
            console.error('[Bien] Erreur lors de la mise à jour des établissements:', err);
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            bien: updatedBien
        },
        message: needUpdateEtablissements
            ? 'Bien mis à jour. Les établissements proches sont en cours de mise à jour.'
            : 'Bien mis à jour avec succès'
    });
});
/**
 * Supprime un bien
 * DELETE /api/biens/:id
 */
export const deleteBienHandler = controllerWrapper(async (req, res, next) => {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    // Vérifier que le bien existe et appartient au propriétaire
    if (!id)
        return next(new AppError('ID invalide', 400));
    const bien = await prisma.bien.findFirst({
        where: { id, proprietaireId }
    });
    if (!bien) {
        return next(new AppError('Bien non trouvé', 404));
    }
    // Supprimer le bien (les établissements seront supprimés en cascade)
    await prisma.bien.delete({
        where: { id }
    });
    res.status(204).json({
        status: 'success',
        data: null
    });
});
/**
 * Rafraîchit manuellement les établissements proches d'un bien
 * POST /api/biens/:id/refresh-etablissements
 */
export const refreshEtablissementsHandler = controllerWrapper(async (req, res, next) => {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    if (!id)
        return next(new AppError('ID invalide', 400));
    const bien = await prisma.bien.findFirst({
        where: { id, proprietaireId }
    });
    if (!bien) {
        return next(new AppError('Bien non trouvé', 404));
    }
    if (!bien.latitude || !bien.longitude) {
        return next(new AppError('Ce bien n\'a pas de coordonnées GPS. Veuillez mettre à jour l\'adresse.', 400));
    }
    // Supprimer les anciens établissements
    await prisma.etablissementProche.deleteMany({
        where: { bienId: id }
    });
    // Rechercher et enregistrer les nouveaux établissements
    await rechercherEtEnregistrerEtablissements(id, bien.latitude, bien.longitude);
    // Récupérer le bien avec les nouveaux établissements
    const updatedBien = await prisma.bien.findUnique({
        where: { id },
        include: {
            etablissements: {
                orderBy: { distanceKm: 'asc' }
            }
        }
    });
    res.status(200).json({
        status: 'success',
        data: {
            bien: updatedBien
        },
        message: 'Établissements proches mis à jour avec succès'
    });
});
export { TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement };
//# sourceMappingURL=bienController.js.map