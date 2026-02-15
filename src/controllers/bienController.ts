/**
 * Contrôleur pour la gestion des biens immobiliers
 * Gère la création, modification, suppression et consultation des biens
 */

import type { Request, Response, NextFunction } from 'express';
import { PrismaClient, TypeBien, StatutBien, ModeLocation, CategorieEtablissement, TypeEtablissement } from '../generated/prisma/client.js';
import { AppError } from '../utils/AppError.js';
import { controllerWrapper } from '../utils/ControllerWrapper.js';
import { geocodeAddress } from '../services/geocodingService.js';
import { rechercherEtablissementsProches, type EtablissementTrouve } from '../services/placesService.js';
import { processCoverImage, processAdditionalImage, validateImageSet, type UploadResult } from '../services/imageService.js';

const prisma = new PrismaClient();

// Extension du type Express Request pour ajouter la propriété user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        [key: string]: any;
      };
    }
  }
}

/**
 * Mapping des types d'établissements entre le service et Prisma
 */
const TYPE_ETABLISSEMENT_MAP: Record<string, TypeEtablissement> = {
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

const CATEGORIE_ETABLISSEMENT_MAP: Record<string, CategorieEtablissement> = {
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
async function rechercherEtEnregistrerEtablissements(
  bienId: string, 
  latitude: number, 
  longitude: number
): Promise<void> {
  try {
    // Recherche avec maxParType: 1 pour obtenir un seul résultat par type d'établissement
    const etablissements = await rechercherEtablissementsProches(latitude, longitude, 1);

    if (etablissements.length === 0) {
      console.log('[Bien] Aucun établissement trouvé à proximité');
      return;
    }

    // Regrouper les établissements par type et ne garder que le plus proche de chaque type
    // Cela garantit un établissement par type (école maternelle, école primaire, collège, etc.)
    const etablissementsParType = new Map<string, EtablissementTrouve>();
    
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
      } catch (error: unknown) {
        // Ignorer les erreurs de duplication
        const prismaError = error as { code?: string };
        if (prismaError.code !== 'P2002') {
          console.error(`[Bien] Erreur création établissement ${etab.nom}:`, error);
        }
      }
    }

    console.log(`[Bien] ${etablissementsParType.size} établissements enregistrés pour le bien ${bienId} (un par type)`);
  } catch (error) {
    console.error('[Bien] Erreur lors de la recherche d\'établissements:', error);
  }
}

/**
 * Crée un nouveau bien immobilier avec géocodage automatique et recherche d'établissements proches
 * POST /api/biens
 */
export const createBienHandler = controllerWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const proprietaireId = req.user?.id;

  if (!proprietaireId) {
    return next(new AppError('Utilisateur non authentifié', 401));
  }

  const {
    titre,
    type,
    prix,
    statut,
    modeLocation,
    description,
    surface,
    chambres,
    sallesDeBain,
    adresse: adresseBody,
    quartier,
    villeId,
    imageCouverture,
    images,
    documents,
    urlVisiteVirtuelle
  } = req.body;

  // Validation des champs obligatoires
  if (!titre || !type || !prix || !adresseBody) {
    return next(new AppError('Les champs titre, type, prix et adresse sont obligatoires', 400));
  }

  // Convertir le type en majuscules si c'est une valeur minuscule (compatible avec le frontend)
  let typeBien: TypeBien;
  if (typeof type === 'string' && type === type.toLowerCase()) {
    // Le frontend envoie "appartement" mais Prisma attend "APPARTEMENT"
    typeBien = (type.toUpperCase() as TypeBien);
  } else {
    typeBien = type as TypeBien;
  }

  // Vérifier que le type est valide
  if (!Object.values(TypeBien).includes(typeBien)) {
    return next(new AppError('Type de bien invalide', 400));
  }

  // Convertir le statut en majuscules si c'est une valeur minuscule (compatible avec le frontend)
  let statutBien: StatutBien = StatutBien.DISPONIBLE;
  if (statut) {
    if (typeof statut === 'string' && statut === statut.toLowerCase()) {
      // Le frontend envoie "libre" mais Prisma attend "DISPONIBLE"
      const STATUT_MAP: Record<string, StatutBien> = {
        'libre': StatutBien.DISPONIBLE,
        'loué': StatutBien.LOUE,
        'partiellement loué': StatutBien.DISPONIBLE, // Pas de équivalent, on utilise DISPONIBLE
        'en maintenance': StatutBien.EN_MAINTENANCE,
        'à vendre': StatutBien.VENDU,
        'vendu': StatutBien.VENDU
      };
      statutBien = STATUT_MAP[statut] || StatutBien.DISPONIBLE;
    } else {
      statutBien = statut as StatutBien;
    }
  }

  // Convertir le mode de location en majuscules si c'est une valeur minuscule
  let modeLocationEnum: ModeLocation | null = null;
  if (modeLocation) {
    if (typeof modeLocation === 'string' && modeLocation === modeLocation.toLowerCase()) {
      const MODE_LOCATION_MAP: Record<string, ModeLocation> = {
        'classique': ModeLocation.MENSUEL, // Pas de "classique" dans Prisma, on utilise MENSUEL par défaut
        'colocation': ModeLocation.MENSUEL
      };
      modeLocationEnum = MODE_LOCATION_MAP[modeLocation] || null;
    } else {
      modeLocationEnum = modeLocation as ModeLocation;
    }
  }

  console.log(`[Bien] Création d'un bien: ${titre} à ${adresseBody}`);

  // Étape 1: Géocodage automatique de l'adresse
  console.log('[Bien] Géocodage de l\'adresse...');
  const geocodingResult = await geocodeAddress(adresseBody);
  
  let latitude: number | null = null;
  let longitude: number | null = null;

  if (geocodingResult) {
    latitude = geocodingResult.latitude;
    longitude = geocodingResult.longitude;
    console.log(`[Bien] Coordonnées obtenues: (${latitude}, ${longitude})`);
  } else {
    console.warn('[Bien] Géocodage échoué, le bien sera créé sans coordonnées');
  }

  // Convertir les tableaux en chaînes JSON pour la base de données
  let imagesJson: string | null = null;
  if (images) {
    if (Array.isArray(images)) {
      imagesJson = JSON.stringify(images);
    } else if (typeof images === 'string') {
      imagesJson = images;
    }
  }

  // Créer le bien avec les coordonnées
  const bien = await prisma.bien.create({
    data: {
      titre,
      type: typeBien,
      prix: parseFloat(prix as string),
      statut: statutBien,
      modeLocation: modeLocationEnum,
      description: description || null,
      surface: surface ? parseFloat(surface as string) : null,
      chambres: chambres ? parseInt(chambres as string) : null,
      sallesDeBain: sallesDeBain ? parseInt(sallesDeBain as string) : null,
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
    message: 'Bien créé avec succès. Un établissement par type (le plus proche) est en cours de recherche.'
  });
});

/**
 * Récupère tous les biens du propriétaire connecté
 * GET /api/biens
 */
export const getBiensHandler = controllerWrapper(async (req: Request, res: Response, next: NextFunction) => {
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
export const getBienByIdHandler = controllerWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const rawId = (req.params as any).id;
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
export const updateBienHandler = controllerWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const rawId = (req.params as any).id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const proprietaireId = req.user?.id;

  if (!proprietaireId) {
    return next(new AppError('Utilisateur non authentifié', 401));
  }

  // Vérifier que le bien existe et appartient au propriétaire
  if (!id) return next(new AppError('ID invalide', 400));

  const existingBien = await prisma.bien.findFirst({
    where: { id, proprietaireId }
  });

  if (!existingBien) {
    return next(new AppError('Bien non trouvé', 404));
  }

  const {
    titre,
    type,
    prix,
    statut,
    modeLocation,
    description,
    surface,
    chambres,
    sallesDeBain,
    adresse,
    quartier,
    villeId,
    imageCouverture,
    images,
    documents,
    urlVisiteVirtuelle
  } = req.body;

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
  let typeValue: TypeBien = existingBien.type;
  if (type) {
    if (typeof type === 'string' && type === type.toLowerCase()) {
      typeValue = (type.toUpperCase() as TypeBien);
    } else {
      typeValue = type as TypeBien;
    }
    // Vérifier que le type est valide
    if (!Object.values(TypeBien).includes(typeValue)) {
      return next(new AppError('Type de bien invalide', 400));
    }
  }

  // Convertir le statut en majuscules si c'est une valeur minuscule
  let statutValue: StatutBien = existingBien.statut;
  if (statut) {
    if (typeof statut === 'string' && statut === statut.toLowerCase()) {
      const STATUT_MAP: Record<string, StatutBien> = {
        'libre': StatutBien.DISPONIBLE,
        'loué': StatutBien.LOUE,
        'partiellement loué': StatutBien.DISPONIBLE,
        'en maintenance': StatutBien.EN_MAINTENANCE,
        'à vendre': StatutBien.VENDU,
        'vendu': StatutBien.VENDU
      };
      statutValue = STATUT_MAP[statut] || StatutBien.DISPONIBLE;
    } else {
      statutValue = statut as StatutBien;
    }
  }

  // Convertir le mode de location en majuscules si c'est une valeur minuscule
  let modeLocationValue: ModeLocation | null = existingBien.modeLocation;
  if (modeLocation !== undefined) {
    if (typeof modeLocation === 'string' && modeLocation === modeLocation.toLowerCase()) {
      const MODE_LOCATION_MAP: Record<string, ModeLocation> = {
        'classique': ModeLocation.MENSUEL,
        'colocation': ModeLocation.MENSUEL
      };
      modeLocationValue = MODE_LOCATION_MAP[modeLocation] || null;
    } else {
      modeLocationValue = modeLocation as ModeLocation;
    }
  }

  // Convertir les tableaux en chaînes JSON pour la mise à jour
  let imagesValue: string | null;
  if (images !== undefined) {
    if (Array.isArray(images)) {
      imagesValue = JSON.stringify(images);
    } else if (typeof images === 'string') {
      imagesValue = images;
    } else {
      imagesValue = null;
    }
  } else {
    imagesValue = existingBien.images;
  }

  // Mettre à jour le bien
  const updatedBien = await prisma.bien.update({
    where: { id },
    data: {
      titre: titre || existingBien.titre,
      type: typeValue,
      prix: prix !== undefined ? parseFloat(prix as string) : existingBien.prix,
      statut: statutValue,
      modeLocation: modeLocationValue,
      description: description !== undefined ? description : existingBien.description,
      surface: surface !== undefined ? (surface ? parseFloat(surface as string) : null) : existingBien.surface,
      chambres: chambres !== undefined ? (chambres ? parseInt(chambres as string) : null) : existingBien.chambres,
      sallesDeBain: sallesDeBain !== undefined ? (sallesDeBain ? parseInt(sallesDeBain as string) : null) : existingBien.sallesDeBain,
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
export const deleteBienHandler = controllerWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const rawId = (req.params as any).id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const proprietaireId = req.user?.id;

  if (!proprietaireId) {
    return next(new AppError('Utilisateur non authentifié', 401));
  }

  // Vérifier que le bien existe et appartient au propriétaire
  if (!id) return next(new AppError('ID invalide', 400));

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
export const refreshEtablissementsHandler = controllerWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const rawId = (req.params as any).id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const proprietaireId = req.user?.id;

  if (!proprietaireId) {
    return next(new AppError('Utilisateur non authentifié', 401));
  }

  if (!id) return next(new AppError('ID invalide', 400));

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
 */
export const uploadImagesHandler = controllerWrapper(async (req: Request, res: Response, next: NextFunction) => {
  // Les fichiers sont disponibles via req.files grâce au middleware Multer
  const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

  console.log('[Bien] Upload images - req.files:', JSON.stringify(files));
  console.log('[Bien] Upload images - req.body:', JSON.stringify(req.body));

  if (!files || (Object.keys(files).length === 0)) {
    return next(new AppError('Aucune image fournie', 400));
  }

  console.log('[Bien] Upload d\'images en cours...');

  // Traiter la photo de couverture
  let coverResult: UploadResult | null = null;
  if (files.cover && files.cover.length > 0 && files.cover[0]) {
    const coverFile = files.cover[0];
    coverResult = await processCoverImage(coverFile.buffer, coverFile.originalname);
    
    if (!coverResult.success) {
      return next(new AppError(coverResult.error || 'Erreur lors du traitement de la photo principale', 400));
    }
  }

  // Traiter les images supplémentaires
  const additionalResults: UploadResult[] = [];
  if (files.images && Array.isArray(files.images)) {
    for (const imageFile of files.images) {
      const result = await processAdditionalImage(imageFile.buffer, imageFile.originalname);
      additionalResults.push(result);
    }
  }

  // Valider l'ensemble des images
  const validation = validateImageSet(coverResult, additionalResults);
  
  if (!validation.valid) {
    return next(new AppError(
      validation.errors.map(e => e.message).join('. '),
      400
    ));
  }

  // Retourner les URLs des images
  res.status(200).json({
    status: 'success',
    data: {
      cover: coverResult,
      images: additionalResults.filter(r => r.success)
    },
    message: 'Images uploadées et optimisées avec succès'
  });
});

export {
  TypeBien,
  StatutBien,
  ModeLocation,
  CategorieEtablissement,
  TypeEtablissement
};