/**
 * Contrôleur pour la gestion des biens immobiliers
 * Gère la création, modification, suppression et consultation des biens
 */
import { PrismaClient, TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement } from '../generated/prisma/client.js';
import { AppError } from '../utils/AppError.js';
import { controllerWrapper } from '../utils/ControllerWrapper.js';
import { geocodeAddress } from '../services/geocodingService.js';
import { rechercherEtablissementsProches } from '../services/placesService.js';
import { processCoverImage, processAdditionalImage, validateImageSet } from '../services/imageService.js';
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
 * Sélectionne automatiquement et insère uniquement l'établissement le plus proche
 * pour chaque TYPE d'établissement disponible (un par type: école maternelle, école primaire, etc.)
 */
async function rechercherEtEnregistrerEtablissements(bienId, latitude, longitude) {
    try {
        // Recherche avec maxParType: 1 pour obtenir un seul résultat par type d'établissement
        const etablissements = await rechercherEtablissementsProches(latitude, longitude, 1);
        if (etablissements.length === 0) {
            console.log('[Bien] Aucun établissement trouvé à proximité');
            return;
        }
        // Regrouper les établissements par type et ne garder que le plus proche de chaque type
        // Cela garantit un établissement par type (école maternelle, école primaire, collège, etc.)
        const etablissementsParType = new Map();
        for (const etab of etablissements) {
            // La clé est le typeEnum (ex: ECOLE_MATERNELLE, ECOLE_PRIMAIRE, etc.)
            const existant = etablissementsParType.get(etab.typeEnum);
            // Garder uniquement l'établissement le plus proche de chaque type
            if (!existant || etab.distanceKm < existant.distanceKm) {
                etablissementsParType.set(etab.typeEnum, etab);
            }
        }
        console.log(`[Bien] ${etablissementsParType.size} types d'établissements à enregistrer (un par type)`);
        // Enregistrer les établissements en base de données (un seul par type)
        for (const [typeEnumKey, etab] of etablissementsParType) {
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
                console.log(`[Bien] Enregistré: ${etab.nom} (${etab.type}) [${etab.categorie}] - ${etab.distanceKm.toFixed(2)} km`);
            }
            catch (error) {
                // Ignorer les erreurs de duplication
                const prismaError = error;
                if (prismaError.code !== 'P2002') {
                    console.error(`[Bien] Erreur création établissement ${etab.nom}:`, error);
                }
            }
        }
        console.log(`[Bien] ${etablissementsParType.size} établissements enregistrés pour le bien ${bienId} (un par type)`);
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
    // Convertir le type en majuscules si c'est une valeur minuscule (compatible avec le frontend)
    let typeBien;
    if (typeof type === 'string' && type === type.toLowerCase()) {
        // Le frontend envoie "appartement" mais Prisma attend "APPARTEMENT"
        typeBien = type.toUpperCase();
    }
    else {
        typeBien = type;
    }
    // Vérifier que le type est valide
    if (!Object.values(TypeBien).includes(typeBien)) {
        return next(new AppError('Type de bien invalide', 400));
    }
    // Convertir le statut en majuscules si c'est une valeur minuscule (compatible avec le frontend)
    let statutBien = StatutBien.DISPONIBLE;
    if (statut) {
        if (typeof statut === 'string' && statut === statut.toLowerCase()) {
            // Le frontend envoie "libre" mais Prisma attend "DISPONIBLE"
            const STATUT_MAP = {
                'libre': StatutBien.DISPONIBLE,
                'loué': StatutBien.LOUE,
                'partiellement loué': StatutBien.DISPONIBLE, // Pas de équivalent, on utilise DISPONIBLE
                'en maintenance': StatutBien.EN_MAINTENANCE,
                'à vendre': StatutBien.VENDU,
                'vendu': StatutBien.VENDU
            };
            statutBien = STATUT_MAP[statut] || StatutBien.DISPONIBLE;
        }
        else {
            statutBien = statut;
        }
    }
    // Convertir le mode de location en majuscules si c'est une valeur minuscule
    let modeLocationEnum = null;
    if (modeLocation) {
        if (typeof modeLocation === 'string' && modeLocation === modeLocation.toLowerCase()) {
            const MODE_LOCATION_MAP = {
                'classique': ModeLocation.MENSUEL, // Pas de "classique" dans Prisma, on utilise MENSUEL par défaut
                'colocation': ModeLocation.MENSUEL
            };
            modeLocationEnum = MODE_LOCATION_MAP[modeLocation] || null;
        }
        else {
            modeLocationEnum = modeLocation;
        }
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
    // Convertir les tableaux en chaînes JSON pour la base de données
    let imagesJson = null;
    if (images) {
        if (Array.isArray(images)) {
            imagesJson = JSON.stringify(images);
        }
        else if (typeof images === 'string') {
            imagesJson = images;
        }
    }
    // Créer le bien avec les coordonnées
    const bien = await prisma.bien.create({
        data: {
            titre,
            type: typeBien,
            prix: parseFloat(prix),
            statut: statutBien,
            modeLocation: modeLocationEnum,
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
            images: imagesJson,
            documents: null,
            urlVisiteVirtuelle: urlVisiteVirtuelle || null,
            proprietaireId
        }
    });
    console.log(`[Bien] Bien créé avec l'ID: ${bien.id}`);
    // Étape 2: Sauvegarder les images dans la table BienImage (nouvelle fonctionnalité)
    if (imageCouverture || (imagesJson && imagesJson !== '[]' && imagesJson !== 'null')) {
        try {
            // Supprimer les anciennes images si existantes (pour éviter les doublons)
            await prisma.bienImage.deleteMany({
                where: { bienId: bien.id }
            });
            // Sauvegarder l'image de couverture
            if (imageCouverture) {
                // Construire le chemin du fichier à partir de l'URL
                // URL format: /uploads/covers/filename.webp
                // Chemin réel: uploads/covers/filename.webp (chemin relatif au dossier racine du projet)
                const filename = imageCouverture.split('/').pop() || 'unknown';
                const coverPath = `uploads/covers/${filename}`;
                console.log(`[Bien] Sauvegarde image couverture - URL: ${imageCouverture}, Chemin: ${coverPath}`);
                await prisma.bienImage.create({
                    data: {
                        bienId: bien.id,
                        type: 'COVER',
                        url: imageCouverture,
                        chemin: coverPath,
                        ordre: 0
                    }
                });
            }
            // Sauvegarder les images supplémentaires
            const imagesArray = imagesJson ? JSON.parse(imagesJson) : [];
            let ordre = 1;
            for (const imgUrl of imagesArray) {
                // URL format: /uploads/images/filename.webp
                // Chemin réel: uploads/images/filename.webp
                const filename = imgUrl.split('/').pop() || 'unknown';
                const imgPath = `uploads/images/${filename}`;
                console.log(`[Bien] Sauvegarde image supplémentaire - URL: ${imgUrl}, Chemin: ${imgPath}`);
                await prisma.bienImage.create({
                    data: {
                        bienId: bien.id,
                        type: 'SUPPLEMENTAIRE',
                        url: imgUrl,
                        chemin: imgPath,
                        ordre: ordre++
                    }
                });
            }
            console.log(`[Bien] Images sauvegardées en base pour le bien ${bien.id}`);
        }
        catch (error) {
            console.error('[Bien] Erreur lors de la sauvegarde des images:', error);
            // Ne pas bloquer la création du bien si les images ne peuvent pas être sauvegardées
        }
    }
    // Étape 3: Rechercher et enregistrer les établissements proches (en arrière-plan si coordonnées disponibles)
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
        message: 'Bien créé avec succès. Un établissement par type (le plus proche) est en cours de recherche.'
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
            },
            bienImages: {
                orderBy: { ordre: 'asc' }
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
            },
            bienImages: {
                orderBy: { ordre: 'asc' }
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
    // Convertir le type en majuscules si c'est une valeur minuscule (compatible avec le frontend)
    let typeValue = existingBien.type;
    if (type) {
        if (typeof type === 'string' && type === type.toLowerCase()) {
            typeValue = type.toUpperCase();
        }
        else {
            typeValue = type;
        }
        // Vérifier que le type est valide
        if (!Object.values(TypeBien).includes(typeValue)) {
            return next(new AppError('Type de bien invalide', 400));
        }
    }
    // Convertir le statut en majuscules si c'est une valeur minuscule
    let statutValue = existingBien.statut;
    if (statut) {
        if (typeof statut === 'string' && statut === statut.toLowerCase()) {
            const STATUT_MAP = {
                'libre': StatutBien.DISPONIBLE,
                'loué': StatutBien.LOUE,
                'partiellement loué': StatutBien.DISPONIBLE,
                'en maintenance': StatutBien.EN_MAINTENANCE,
                'à vendre': StatutBien.VENDU,
                'vendu': StatutBien.VENDU
            };
            statutValue = STATUT_MAP[statut] || StatutBien.DISPONIBLE;
        }
        else {
            statutValue = statut;
        }
    }
    // Convertir le mode de location en majuscules si c'est une valeur minuscule
    let modeLocationValue = existingBien.modeLocation;
    if (modeLocation !== undefined) {
        if (typeof modeLocation === 'string' && modeLocation === modeLocation.toLowerCase()) {
            const MODE_LOCATION_MAP = {
                'classique': ModeLocation.MENSUEL,
                'colocation': ModeLocation.MENSUEL
            };
            modeLocationValue = MODE_LOCATION_MAP[modeLocation] || null;
        }
        else {
            modeLocationValue = modeLocation;
        }
    }
    // Convertir les tableaux en chaînes JSON pour la mise à jour
    let imagesValue;
    if (images !== undefined) {
        if (Array.isArray(images)) {
            imagesValue = JSON.stringify(images);
        }
        else if (typeof images === 'string') {
            imagesValue = images;
        }
        else {
            imagesValue = null;
        }
    }
    else {
        imagesValue = existingBien.images;
    }
    // Mettre à jour le bien
    const updatedBien = await prisma.bien.update({
        where: { id },
        data: {
            titre: titre || existingBien.titre,
            type: typeValue,
            prix: prix !== undefined ? parseFloat(prix) : existingBien.prix,
            statut: statutValue,
            modeLocation: modeLocationValue,
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
            images: imagesValue,
            documents: existingBien.documents,
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
            ? 'Bien mis à jour. Un établissement par type (le plus proche) est en cours de mise à jour.'
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
        message: 'Un établissement par type (le plus proche) a été mis à jour avec succès'
    });
});
/**
 * Upload et optimisation des images d'un bien
 * POST /api/biens/upload-images
 * POST /api/biens/:bienId/upload-images (pour lier à un bien existant)
 */
export const uploadImagesHandler = controllerWrapper(async (req, res, next) => {
    // Les fichiers sont disponibles via req.files grâce au Multer
    const files = req.files;
    // Récupérer le bienId s'il est fourni (pour lier les images à un bien existant)
    const rawBienId = req.params.bienId;
    const bienId = rawBienId ? (Array.isArray(rawBienId) ? rawBienId[0] : rawBienId) : null;
    console.log('[Bien] Upload images - req.files:', JSON.stringify(files));
    console.log('[Bien] Upload images - req.body:', JSON.stringify(req.body));
    console.log('[Bien] Upload images - bienId:', bienId);
    if (!files || (Object.keys(files).length === 0)) {
        return next(new AppError('Aucune image fournie', 400));
    }
    console.log('[Bien] Upload d\'images en cours...');
    // Traiter la photo de couverture
    let coverResult = null;
    if (files.cover && files.cover.length > 0 && files.cover[0]) {
        const coverFile = files.cover[0];
        coverResult = await processCoverImage(coverFile.buffer, coverFile.originalname);
        if (!coverResult.success) {
            return next(new AppError(coverResult.error || 'Erreur lors du traitement de la photo principale', 400));
        }
    }
    // Traiter les images supplémentaires
    const additionalResults = [];
    if (files.images && Array.isArray(files.images)) {
        for (const imageFile of files.images) {
            const result = await processAdditionalImage(imageFile.buffer, imageFile.originalname);
            additionalResults.push(result);
        }
    }
    // Valider l'ensemble des images
    const validation = validateImageSet(coverResult, additionalResults);
    if (!validation.valid) {
        return next(new AppError(validation.errors.map(e => e.message).join('. '), 400));
    }
    // Si un bienId est fourni, sauvegarder les images dans la base de données
    if (bienId) {
        try {
            // Vérifier que le bien existe et appartient au propriétaire
            const proprietaireId = req.user?.id;
            const existingBien = await prisma.bien.findFirst({
                where: { id: bienId, proprietaireId }
            });
            if (!existingBien) {
                return next(new AppError('Bien non trouvé', 404));
            }
            // Supprimer les anciennes images de la base (si elles existent)
            await prisma.bienImage.deleteMany({
                where: { bienId }
            });
            // Sauvegarder la cover en base
            if (coverResult && coverResult.success) {
                await prisma.bienImage.create({
                    data: {
                        bienId,
                        type: 'COVER',
                        url: coverResult.url,
                        chemin: coverResult.path,
                        nomOriginal: coverResult.originalName,
                        taille: coverResult.size,
                        largeur: coverResult.width,
                        hauteur: coverResult.height,
                        format: coverResult.format,
                        hash: coverResult.hash,
                        qualite: coverResult.quality,
                        ordre: 0
                    }
                });
            }
            // Sauvegarder les images supplémentaires en base
            let ordre = 1;
            for (const imgResult of additionalResults) {
                if (imgResult.success) {
                    await prisma.bienImage.create({
                        data: {
                            bienId,
                            type: 'SUPPLEMENTAIRE',
                            url: imgResult.url,
                            chemin: imgResult.path,
                            nomOriginal: imgResult.originalName,
                            taille: imgResult.size,
                            largeur: imgResult.width,
                            hauteur: imgResult.height,
                            format: imgResult.format,
                            hash: imgResult.hash,
                            qualite: imgResult.quality,
                            ordre: ordre++
                        }
                    });
                }
            }
            // Mettre à jour les champs imageCouverture et images du bien pour compatibilité
            const coverUrl = coverResult?.url || null;
            const imagesUrls = additionalResults.filter(r => r.success).map(r => r.url);
            await prisma.bien.update({
                where: { id: bienId },
                data: {
                    imageCouverture: coverUrl,
                    images: imagesUrls.length > 0 ? JSON.stringify(imagesUrls) : null
                }
            });
            console.log('[Bien] Images sauvegardées en base pour le bien:', bienId);
        }
        catch (error) {
            console.error('[Bien] Erreur lors de la sauvegarde des images:', error);
            return next(new AppError('Erreur lors de la sauvegarde des images', 500));
        }
    }
    // Retourner les URLs des images
    res.status(200).json({
        status: 'success',
        data: {
            cover: coverResult,
            images: additionalResults.filter(r => r.success)
        },
        message: bienId ? 'Images uploadées, optimisées et sauvegardées en base avec succès' : 'Images uploadées et optimisées avec succès'
    });
});
/**
 * Récupère les statistiques des biens du propriétaire connecté
 * GET /api/biens/stats
 */
export const getBienStatsHandler = controllerWrapper(async (req, res, next) => {
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    // Compter les biens par statut
    const [totalBiens, disponibleCount, loueCount, maintenanceCount, indisponibleCount] = await Promise.all([
        prisma.bien.count({ where: { proprietaireId } }),
        prisma.bien.count({ where: { proprietaireId, statut: StatutBien.DISPONIBLE } }),
        prisma.bien.count({ where: { proprietaireId, statut: StatutBien.LOUE } }),
        prisma.bien.count({ where: { proprietaireId, statut: StatutBien.EN_MAINTENANCE } }),
        prisma.bien.count({ where: { proprietaireId, statut: StatutBien.INDISPONIBLE } })
    ]);
    // Calculer le revenu mensuel total (biens loués)
    const biensLoues = await prisma.bien.findMany({
        where: { proprietaireId, statut: StatutBien.LOUE },
        select: { prix: true }
    });
    const revenuMensuelTotal = biensLoues.reduce((sum, bien) => sum + Number(bien.prix), 0);
    const revenuAnnuelTotal = revenuMensuelTotal * 12;
    // Pour les statistiques mensuelles, on simule basé sur les données réelles
    // (Dans une vraie application, il faudrait une table des paiements)
    const currentYear = new Date().getFullYear();
    const monthlyRevenue = [
        { month: 'Janvier', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Février', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Mars', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Avril', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Mai', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Juin', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Juillet', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Août', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Septembre', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Octobre', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Novembre', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 },
        { month: 'Décembre', revenue: revenuMensuelTotal, expenses: revenuMensuelTotal * 0.1 }
    ];
    const totalAnnualRevenue = monthlyRevenue.reduce((sum, m) => sum + m.revenue, 0);
    const totalAnnualExpenses = monthlyRevenue.reduce((sum, m) => sum + m.expenses, 0);
    // Revenus par bien
    const biens = await prisma.bien.findMany({
        where: { proprietaireId },
        select: {
            id: true,
            titre: true,
            prix: true,
            statut: true,
            adresse: true,
            ville: true
        },
        orderBy: { dateCreation: 'desc' }
    });
    const propertyRevenues = biens.map(bien => ({
        propertyId: bien.id,
        propertyTitle: bien.titre,
        location: bien.ville?.nom || bien.adresse,
        monthlyRent: Number(bien.prix),
        occupancyRate: bien.statut === StatutBien.LOUE ? 100 : 0,
        annualRevenue: Number(bien.prix) * 12,
        occupancyMonths: bien.statut === StatutBien.LOUE ? 12 : 0
    }));
    res.status(200).json({
        status: 'success',
        data: {
            totalProperties: totalBiens,
            disponibleCount,
            loueCount,
            maintenanceCount,
            indisponibleCount,
            totalAnnualRevenue,
            totalAnnualExpenses,
            netAnnualRevenue: totalAnnualRevenue - totalAnnualExpenses,
            monthlyRevenue,
            propertyRevenues,
            yearlyRevenue: revenuAnnuelTotal,
            monthlyRevenueTotal: revenuMensuelTotal
        }
    });
});
/**
 * Récupère les biens du propriétaire avec filtres
 * GET /api/biens?statut=DISPO&archived=false
 */
export const getBiensWithFiltersHandler = controllerWrapper(async (req, res, next) => {
    const proprietaireId = req.user?.id;
    if (!proprietaireId) {
        return next(new AppError('Utilisateur non authentifié', 401));
    }
    // Extraire les filtres de la requête
    const { statut, type, modeLocation, search, limit, offset } = req.query;
    // Construire les conditions de recherche
    const where = { proprietaireId };
    if (statut) {
        where.statut = statut;
    }
    if (type) {
        where.type = type;
    }
    if (modeLocation) {
        where.modeLocation = modeLocation;
    }
    // Compter le total pour la pagination
    const total = await prisma.bien.count({ where });
    // Récupérer les biens avec pagination
    const biens = await prisma.bien.findMany({
        where,
        include: {
            ville: true,
            etablissements: {
                orderBy: { distanceKm: 'asc' }
            },
            bienImages: {
                orderBy: { ordre: 'asc' }
            }
        },
        orderBy: { dateCreation: 'desc' },
        take: limit ? parseInt(limit) : undefined,
        skip: offset ? parseInt(offset) : undefined
    });
    // Transformer les données pour le frontend
    const transformedBiens = biens.map(bien => {
        // Récupérer les images depuis la nouvelle table ou l'ancien champ
        const bienImagesList = bien.bienImages || [];
        const coverFromDb = bienImagesList.find((img) => img.type === 'COVER');
        const imagesFromDb = bienImagesList.filter((img) => img.type === 'SUPPLEMENTAIRE');
        return {
            id: bien.id,
            title: bien.titre,
            type: bien.type.toLowerCase(),
            price: Number(bien.prix),
            status: mapStatutToFrontend(bien.statut),
            rentalMode: bien.modeLocation === ModeLocation.MENSUEL ? 'classique' : (bien.modeLocation?.toLowerCase() || 'classique'),
            description: bien.description,
            coverImage: bien.imageCouverture || (coverFromDb?.url || null),
            images: bien.images ? JSON.parse(bien.images) : imagesFromDb.map((img) => img.url),
            bedrooms: bien.chambres,
            bathrooms: bien.sallesDeBain,
            area: bien.surface,
            location: {
                city: bien.ville?.nom || '',
                address: bien.adresse,
                neighborhood: bien.quartier || '',
                lat: bien.latitude || 0,
                lng: bien.longitude || 0
            },
            proximity: {
                hospital: 0,
                police: 0,
                supermarket: 0,
                school: 0
            },
            featured: false,
            archived: false,
            ownerId: bien.proprietaireId,
            ownerName: '',
            ownerPhone: '',
            ownerEmail: '',
            createdAt: bien.dateCreation.toISOString().split('T')[0],
            updatedAt: bien.dateModification.toISOString().split('T')[0],
            documents: []
        };
    });
    res.status(200).json({
        status: 'success',
        results: total,
        data: {
            biens: transformedBiens
        }
    });
});
// Fonction helper pour convertir le statut Prisma vers le format frontend
function mapStatutToFrontend(statut) {
    const map = {
        [StatutBien.DISPONIBLE]: 'libre',
        [StatutBien.LOUE]: 'loué',
        [StatutBien.VENDU]: 'vendu',
        [StatutBien.INDISPONIBLE]: 'libre',
        [StatutBien.EN_MAINTENANCE]: 'en maintenance'
    };
    return map[statut] || 'libre';
}
export { TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement };
//# sourceMappingURL=bienController.js.map