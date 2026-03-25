/// <reference types="node" />
import bcrypt from 'bcrypt';
import type { PrismaClient } from '../../src/generated/prisma/client.js';
import type { Seeder } from './seeder.interface.js';

const DEFAULT_LOCATAIRE_PASSWORD = 'Locataire@2024!';
const DEFAULT_SALT = 10;

// ─────────────────────────────────────────────────────────────────────────────
// TYPES INTERNES
// ─────────────────────────────────────────────────────────────────────────────

interface Refs {
  typeLogId:    Record<string, string>;
  typeTxId:     Record<string, string>;
  statutBienId: Record<string, string>;
  meubleId:     Record<string, string>; // clé = "nom|categorie"
  equipId:      Record<string, string>; // clé = "nom|categorie"
}

interface BienDef {
  key: string;
  proprietaireEmail: string;
  titre: string;
  description: string;
  typeLog: string;
  typeTx: string;
  statut: string;
  statutAnnonce: 'BROUILLON' | 'EN_ATTENTE' | 'PUBLIE' | 'REJETE' | 'ANNULE';
  actif?: boolean;
  noteAdmin?: string;
  pays: string; region: string; ville: string; quartier: string;
  surface?: number; surfaceParcelle?: number;
  nbChambres?: number; nbSdb?: number; nbSalons?: number; nbCuisines?: number;
  etage?: number; nbEtages?: number; nbAppartements?: number;
  typeTerrain?: string; typeBureau?: string;
  cloture?: boolean; rideauMetallique?: boolean;
  meuble?: boolean; parking?: boolean; ascenseur?: boolean;
  chargesIncluses?: boolean; animaux?: boolean; fumeurs?: boolean;
  prix?: number; prixAncien?: number; dateDerniereModificationPrix?: Date;
  frequencePaiement?: string; caution?: number;
  disponibleLe?: Date;
  estPremium?: boolean; estMisEnAvant?: boolean;
  dateDebutPromotion?: Date; dateFinPromotion?: Date;
  nbVues?: number; nbFavoris?: number;
  photos?: string[];
  meubles?: string[];
  equips?: string[];
  createdAt?: Date;
}

interface LocataireDef {
  key: string;
  proprietaireEmail: string;
  nom: string; prenom: string;
  telephone: string; email: string;
  nbOccupants?: number; presenceEnfants?: boolean;
  dateNaissance?: Date; lieuNaissance?: string;
  nationalite?: string; sexe?: string;
  numPieceIdentite?: string; typePiece?: 'CNI' | 'PASSEPORT' | 'CARTE_CONSULAIRE' | 'AUTRE';
  situationProfessionnelle?: string;
  statut: 'INVITE' | 'ACTIF' | 'INACTIF' | 'ANCIEN';
  activationToken?: string; tokenExpiresAt?: Date;
  needsPassword?: boolean;
}

interface EcheanceDef {
  statut: 'A_VENIR' | 'EN_ATTENTE' | 'EN_RETARD' | 'PAYE' | 'ANNULE';
  datePaiement?: Date;
  modePaiement?: string;
  reference?: string;
  confirmeParProprietaire?: boolean;
}

interface BailDef {
  bienKey: string;
  locataireKey: string;
  proprietaireEmail: string;
  typeBail?: string;
  dateDebutBail: Date;
  dateFinBail?: Date;
  montantLoyer: number;
  montantCaution?: number;
  cautionVersee: boolean;
  jourLimitePaiement?: number;
  delaiGrace?: number;
  frequencePaiement?: string;
  renouvellement?: boolean;
  statut: 'EN_ATTENTE' | 'ACTIF' | 'EN_PREAVIS' | 'EN_RENOUVELLEMENT' | 'TERMINE' | 'RESILIE' | 'ARCHIVE';
  motifResiliation?: string;
  initiePar?: string;
  echeances: EcheanceDef[];
  depot?: {
    statut: 'RECU' | 'RESTITUE' | 'PARTIELLEMENT_RESTITUE' | 'RETENU';
    montant: number;
    dateReception: Date;
    dateRestitution?: Date;
    montantRestitue?: number;
    motifRetenue?: string;
  } | null;
  createTransactions?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA — BIENS (30 biens : 18 à la une ⭐, 12 cas variés)
//
// Répartition statuts :
//   PUBLIE + actif + misEnAvant : 18 (⭐ à la une — dont 2 actif:false compte suspendu)
//   PUBLIE + actif + !misEnAvant : 4  (libre ou loué, listing normal)
//   BROUILLON                   : 2
//   EN_ATTENTE                  : 2
//   REJETE                      : 2
//   ANNULE                      : 1
//   PUBLIE + actif:false        : 1  (sans mise en avant)
// ─────────────────────────────────────────────────────────────────────────────

const BIENS: readonly BienDef[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // MOUSSA DIALLO (VERIFIED) — 9 biens
  // ══════════════════════════════════════════════════════════════════════════

  // [1] ⭐ À LA UNE — F3 meublé Plateau (ancien, bail terminé, libre de nouveau)
  {
    key: 'appart_f3_plateau',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Appartement F3 meublé Plateau',
    description: "Bel appartement F3 entièrement meublé au cœur du Plateau, à deux pas des commerces et des institutions. Lumineux, bien entretenu avec ascenseur, eau chaude, sécurité 24h/24. Idéal pour cadres ou couples.",
    typeLog: 'appartement', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Plateau',
    surface: 85, nbChambres: 3, nbSdb: 2, nbSalons: 1, nbCuisines: 1, etage: 3,
    meuble: true, ascenseur: true,
    prix: 250000, frequencePaiement: 'mensuel', caution: 2,
    estPremium: true, estMisEnAvant: true,
    dateDebutPromotion: new Date('2026-03-01'), dateFinPromotion: new Date('2026-03-31'),
    nbVues: 312, nbFavoris: 18,
    createdAt: new Date('2024-06-01'),
    photos: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    ],
    meubles: ['Canapé|Salon', 'Table basse|Salon', 'Meuble TV|Salon', 'Table à manger|Salon', 'Chaises|Salon', 'Lit double|Chambre', 'Armoire|Chambre', 'Table de chevet|Chambre'],
    equips: ['Télévision|Salon', 'Climatisation|Salon', 'Réfrigérateur|Cuisine', 'Micro-ondes|Cuisine', 'Chauffe-eau|Salle de bain', 'Caméras de surveillance|Équipements généraux', 'Interphone|Équipements généraux'],
  },

  // [2] LOUÉ — Villa Almadies (bail actif Amadou Baldé)
  {
    key: 'villa_almadies',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Villa 4 chambres avec piscine Almadies',
    description: "Majestueuse villa de 250 m² aux Almadies. 4 chambres en suite, 2 salons, grand jardin avec piscine, parking 3 véhicules, groupe électrogène, gardien permanent. Quartier calme et sécurisé, proche ambassades et restaurants.",
    typeLog: 'villa', typeTx: 'location', statut: 'loue', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Almadies',
    surface: 250, nbChambres: 4, nbSdb: 3, nbSalons: 2, nbCuisines: 1,
    meuble: false, parking: true,
    prix: 500000, frequencePaiement: 'mensuel', caution: 2,
    nbVues: 487, nbFavoris: 34,
    createdAt: new Date('2025-08-15'),
    photos: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    ],
    equips: ['Piscine|Équipements généraux', 'Parking|Équipements généraux', 'Jardin|Équipements généraux', 'Gardien|Équipements généraux', 'Groupe électrogène|Équipements généraux', 'Caméras de surveillance|Équipements généraux', 'Portail électrique|Équipements généraux'],
  },

  // [3] ⭐ À LA UNE — Studio à vendre Mermoz
  {
    key: 'studio_mermoz',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Studio à vendre Mermoz',
    description: "Studio fonctionnel de 35 m² à Mermoz, proche plage et centres commerciaux. Bon état général, idéal pour investissement locatif ou premier achat. Titre foncier disponible.",
    typeLog: 'studio', typeTx: 'vente', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Mermoz',
    surface: 35, nbChambres: 1, nbSdb: 1,
    prix: 15000000,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-11-01'), dateFinPromotion: new Date('2025-12-31'),
    nbVues: 156, nbFavoris: 9,
    createdAt: new Date('2025-11-10'),
    photos: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'],
    equips: ['Chauffe-eau|Salle de bain'],
  },

  // [4] ⭐ À LA UNE — Local commercial Sandaga
  {
    key: 'local_sandaga',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Local commercial marché Sandaga',
    description: "Local commercial de 120 m² en plein cœur du marché Sandaga. Rez-de-chaussée avec rideau métallique, forte visibilité commerciale. Idéal boutique, restaurant ou bureau de change.",
    typeLog: 'commerce', typeTx: 'vente', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Plateau',
    surface: 120, rideauMetallique: true,
    prix: 35000000,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-07-01'), dateFinPromotion: new Date('2025-09-30'),
    nbVues: 89, nbFavoris: 5,
    createdAt: new Date('2025-07-20'),
    photos: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'],
    equips: ['Rideau métallique|Local commercial'],
  },

  // [5] LOUÉ — Chambre Yoff (bail actif Mariama Camara)
  {
    key: 'chambre_yoff',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Chambre meublée Yoff',
    description: "Chambre meublée de 20 m² à Yoff, proche transports et plage. Eau et électricité incluses. Salle de bain privée. Idéale pour étudiant(e) ou personne seule.",
    typeLog: 'chambre', typeTx: 'location', statut: 'loue', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Yoff',
    surface: 20, nbChambres: 1, nbSdb: 1,
    meuble: true, chargesIncluses: true,
    prix: 65000, frequencePaiement: 'mensuel', caution: 1,
    nbVues: 203, nbFavoris: 11,
    createdAt: new Date('2025-12-01'),
    photos: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'],
    meubles: ['Lit simple|Chambre', 'Armoire|Chambre', 'Table de chevet|Chambre'],
    equips: ['Ventilateur|Chambre', 'Chauffe-eau|Salle de bain'],
  },

  // [6] ⭐ À LA UNE — Villa Ngor vue mer (très récente)
  {
    key: 'villa_ngor',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Villa 5 chambres vue mer Ngor',
    description: "Superbe villa contemporaine de 320 m² à Ngor avec vue panoramique sur l'océan. 5 chambres en suite, piscine à débordement, terrasse, cuisine équipée, double salon. Gardiennage 24h, accès direct à la plage de Ngor.",
    typeLog: 'villa', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Ngor',
    surface: 320, nbChambres: 5, nbSdb: 4, nbSalons: 2, nbCuisines: 1,
    meuble: true, parking: true,
    prix: 700000, frequencePaiement: 'mensuel', caution: 2,
    estPremium: true, estMisEnAvant: true,
    dateDebutPromotion: new Date('2026-02-01'), dateFinPromotion: new Date('2026-04-30'),
    nbVues: 524, nbFavoris: 41,
    createdAt: new Date('2026-02-20'),
    photos: [
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    ],
    meubles: ['Canapé|Salon', 'Table à manger|Salon', 'Chaises|Salon', 'Lit double|Chambre', 'Armoire|Chambre'],
    equips: ['Piscine|Équipements généraux', 'Parking|Équipements généraux', 'Jardin|Équipements généraux', 'Gardien|Équipements généraux', 'Climatisation|Salon', 'Télévision|Salon', 'Réfrigérateur|Cuisine'],
  },

  // [7] ⭐ À LA UNE — Appartement F4 Ouakam (récent)
  {
    key: 'appart_ouakam',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Appartement F4 Ouakam',
    description: "Bel appartement F4 de 110 m² à Ouakam, quartier résidentiel calme proche des Almadies. 4 chambres dont une suite parentale, 2 salles de bain, grand salon avec terrasse, cuisine américaine. Parking sécurisé.",
    typeLog: 'appartement', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Ouakam',
    surface: 110, nbChambres: 4, nbSdb: 2, nbSalons: 1, nbCuisines: 1, etage: 2,
    meuble: false, parking: true,
    prix: 320000, frequencePaiement: 'mensuel', caution: 2,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2026-01-01'), dateFinPromotion: new Date('2026-03-31'),
    nbVues: 198, nbFavoris: 15,
    createdAt: new Date('2026-01-10'),
    photos: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    ],
    equips: ['Climatisation|Salon', 'Réfrigérateur|Cuisine', 'Chauffe-eau|Salle de bain', 'Parking|Équipements généraux', 'Caméras de surveillance|Équipements généraux'],
  },

  // [8] ⭐ À LA UNE — Chambre meublée Mermoz (ancienne)
  {
    key: 'chambre_mermoz',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Chambre meublée dans villa Mermoz',
    description: "Chambre spacieuse de 25 m² avec salle de bain privée dans une villa à Mermoz. Cuisine partagée, jardin, wifi inclus. Quartier calme, proche des transports. Idéale pour professionnel ou étudiant.",
    typeLog: 'chambre', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Mermoz',
    surface: 25, nbChambres: 1, nbSdb: 1,
    meuble: true,
    prix: 90000, frequencePaiement: 'mensuel', caution: 1,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-09-01'), dateFinPromotion: new Date('2025-12-31'),
    nbVues: 267, nbFavoris: 22,
    createdAt: new Date('2025-09-15'),
    photos: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'],
    meubles: ['Lit double|Chambre', 'Armoire|Chambre', 'Table de travail|Chambre', 'Table de chevet|Chambre'],
    equips: ['Climatisation|Chambre', 'Chauffe-eau|Salle de bain', 'Routeur|Bureau'],
  },

  // [9] ANNULÉ — Appartement Sicap (retiré par le propriétaire)
  {
    key: 'appart_annule_sicap',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    titre: 'Appartement F2 Sicap Liberté (annulé)',
    description: "Appartement 2 pièces de 55 m² à Sicap Liberté. Annoncé puis retiré par le propriétaire suite à une mise en vente directe.",
    typeLog: 'appartement', typeTx: 'vente', statut: 'libre', statutAnnonce: 'ANNULE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Sicap',
    surface: 55, nbChambres: 2, nbSdb: 1,
    prix: 18000000,
    nbVues: 32, nbFavoris: 1,
    createdAt: new Date('2025-05-10'),
    photos: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FATOU NDIAYE (PENDING) — 7 biens
  // ══════════════════════════════════════════════════════════════════════════

  // [10] ⭐ À LA UNE — F2 Fann (prix baissé, récent)
  {
    key: 'appart_f2_fann',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    titre: 'Appartement F2 Fann Résidence',
    description: "Appartement F2 de 65 m² dans le quartier résidentiel de Fann. Bien entretenu, lumineux, proche UCAD et hôpitaux. Prix revu à la baisse. Disponible dès avril.",
    typeLog: 'appartement', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Fann',
    surface: 65, nbChambres: 2, nbSdb: 1, nbSalons: 1,
    prix: 180000, prixAncien: 200000,
    dateDerniereModificationPrix: new Date('2026-02-15'),
    frequencePaiement: 'mensuel', caution: 2,
    disponibleLe: new Date('2026-04-01'),
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2026-01-01'), dateFinPromotion: new Date('2026-03-31'),
    nbVues: 134, nbFavoris: 7,
    createdAt: new Date('2026-01-05'),
    photos: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'],
    equips: ['Climatisation|Salon', 'Chauffe-eau|Salle de bain'],
  },

  // [11] EN ATTENTE — Bureau open space Plateau (très récent)
  {
    key: 'bureau_plateau',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    titre: 'Bureau open space Plateau',
    description: "Bureau open space de 80 m² au Plateau dans un immeuble moderne. Fibre internet, climatisation, vue dégagée. Idéal PME, cabinet conseil ou agence.",
    typeLog: 'bureau', typeTx: 'vente', statut: 'libre', statutAnnonce: 'EN_ATTENTE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Plateau',
    surface: 80, typeBureau: 'Open space',
    prix: 22000000,
    nbVues: 42, nbFavoris: 3,
    createdAt: new Date('2026-02-28'),
    photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'],
    equips: ['Climatisation|Bureau', 'Fibre internet|Bureau', 'Routeur|Bureau'],
  },

  // [12] PUBLIE sans mise en avant — Terrain Diamniadio (mi-ancienne)
  {
    key: 'terrain_diamniadio',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    titre: 'Terrain constructible 500 m² Diamniadio',
    description: "Terrain constructible et viabilisé de 500 m² à Diamniadio, zone en plein essor avec accès autoroute à péage. Titre foncier disponible. Idéal villa ou immeuble R+2.",
    typeLog: 'terrain', typeTx: 'vente', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Thiès', ville: 'Thiès', quartier: 'Diamniadio',
    surface: 500, surfaceParcelle: 500, typeTerrain: 'Constructible', cloture: false,
    prix: 12000000,
    nbVues: 78, nbFavoris: 4,
    createdAt: new Date('2025-10-12'),
    photos: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'],
  },

  // [13] ⭐ À LA UNE — Maison Grand Yoff (récente)
  {
    key: 'maison_grand_yoff',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    titre: 'Maison F5 Grand Yoff',
    description: "Belle maison familiale de 180 m² à Grand Yoff, proche école, hôpital et marchés. 5 chambres, 2 salles de bain, double salon, cuisine séparée, cour intérieure, parking 2 voitures. Disponible immédiatement.",
    typeLog: 'maison', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Grand Yoff',
    surface: 180, nbChambres: 5, nbSdb: 2, nbSalons: 2, nbCuisines: 1,
    meuble: false, parking: true,
    prix: 200000, frequencePaiement: 'mensuel', caution: 2,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2026-02-01'), dateFinPromotion: new Date('2026-04-30'),
    nbVues: 173, nbFavoris: 13,
    createdAt: new Date('2026-02-10'),
    photos: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    ],
    equips: ['Parking|Équipements généraux', 'Climatisation|Salon'],
  },

  // [14] ⭐ À LA UNE — Studio meublé Sacré-Cœur (ancienne)
  {
    key: 'studio_sacre_coeur',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    titre: 'Studio meublé Sacré-Cœur',
    description: "Studio moderne de 40 m² entièrement meublé à Sacré-Cœur 3. Cuisine équipée (réfrigérateur, micro-ondes, plaques), lit double, bureau de travail, climatisation. Idéal pour professionnel expatrié ou en mission.",
    typeLog: 'studio', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Sacré-Cœur',
    surface: 40, nbChambres: 1, nbSdb: 1,
    meuble: true, chargesIncluses: true,
    prix: 120000, frequencePaiement: 'mensuel', caution: 1,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-11-01'), dateFinPromotion: new Date('2026-01-31'),
    nbVues: 289, nbFavoris: 26,
    createdAt: new Date('2025-11-25'),
    photos: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    ],
    meubles: ['Lit double|Chambre', 'Armoire|Chambre', 'Table de travail|Chambre', 'Canapé|Salon', 'Table basse|Salon'],
    equips: ['Climatisation|Salon', 'Réfrigérateur|Cuisine', 'Micro-ondes|Cuisine', 'Chauffe-eau|Salle de bain', 'Routeur|Bureau', 'Télévision|Salon'],
  },

  // [15] ⭐ À LA UNE — Villa balnéaire Mbour à vendre (ancienne)
  {
    key: 'villa_mbour',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    titre: 'Villa balnéaire 4 chambres Mbour',
    description: "Villa de 200 m² à 200 m de la plage de Mbour. 4 chambres, 3 salles de bain, piscine privée, jardin paysager, terrasse couverte. Idéale en résidence secondaire ou en location saisonnière. Gardien sur place.",
    typeLog: 'villa', typeTx: 'vente', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Thiès', ville: 'Mbour', quartier: 'Mbour plage',
    surface: 200, nbChambres: 4, nbSdb: 3, nbSalons: 2,
    meuble: false, parking: true,
    prix: 95000000,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-08-01'), dateFinPromotion: new Date('2025-12-31'),
    nbVues: 341, nbFavoris: 29,
    createdAt: new Date('2025-08-30'),
    photos: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    ],
    equips: ['Piscine|Équipements généraux', 'Jardin|Équipements généraux', 'Parking|Équipements généraux', 'Gardien|Équipements généraux'],
  },

  // [16] ⭐ À LA UNE — Appartement F3 neuf Thiès (tout récent)
  {
    key: 'appart_f3_thies',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    titre: 'Appartement F3 neuf Thiès Centre',
    description: "Appartement neuf de 90 m² au cœur de Thiès. 3 chambres, 2 salles de bain, grand salon-salle à manger, cuisine équipée. Immeuble sécurisé avec gardien, parking résidents. Disponible dès mars 2026.",
    typeLog: 'appartement', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Thiès', ville: 'Thiès', quartier: 'Médina',
    surface: 90, nbChambres: 3, nbSdb: 2, nbSalons: 1, nbCuisines: 1, etage: 1,
    meuble: false, parking: true,
    prix: 130000, frequencePaiement: 'mensuel', caution: 2,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2026-03-01'), dateFinPromotion: new Date('2026-05-31'),
    nbVues: 47, nbFavoris: 4,
    createdAt: new Date('2026-03-01'),
    photos: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'],
    equips: ['Climatisation|Salon', 'Chauffe-eau|Salle de bain', 'Parking|Équipements généraux', 'Gardien|Équipements généraux'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // IBRAHIMA SOW (NOT_VERIFIED) — 5 biens
  // ══════════════════════════════════════════════════════════════════════════

  // [17] PUBLIE sans mise en avant — Maison Pikine (très ancienne, bail terminé)
  {
    key: 'maison_pikine',
    proprietaireEmail: 'ibrahima.sow@seek.sn',
    titre: 'Maison familiale F4 Pikine',
    description: "Maison familiale de 150 m² à Pikine, 4 chambres, double salon, cuisine séparée, 2 salles de bain, parking. Quartier calme, bien desservi par les transports.",
    typeLog: 'maison', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Pikine',
    surface: 150, nbChambres: 4, nbSdb: 2, nbSalons: 2, nbCuisines: 1,
    parking: true,
    prix: 150000, frequencePaiement: 'mensuel', caution: 2,
    nbVues: 95, nbFavoris: 6,
    createdAt: new Date('2024-01-15'),
    photos: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'],
    equips: ['Parking|Équipements généraux', 'Groupe électrogène|Équipements généraux'],
  },

  // [18] BROUILLON — Studio Grand Dakar (très récent, en cours)
  {
    key: 'studio_grand_dakar',
    proprietaireEmail: 'ibrahima.sow@seek.sn',
    titre: 'Studio Grand Dakar',
    description: "Studio de 30 m² en cours de finition. Disponible dès mai 2026.",
    typeLog: 'studio', typeTx: 'location', statut: 'libre', statutAnnonce: 'BROUILLON',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Grand Dakar',
    surface: 30, nbChambres: 1,
    prix: 80000, frequencePaiement: 'mensuel',
    disponibleLe: new Date('2026-05-01'),
    nbVues: 0, nbFavoris: 0,
    createdAt: new Date('2026-03-10'),
    photos: [],
  },

  // [19] ⭐ À LA UNE — Chambre Guédiawaye (récente)
  {
    key: 'chambre_guediawaye',
    proprietaireEmail: 'ibrahima.sow@seek.sn',
    titre: 'Chambre meublée Guédiawaye',
    description: "Chambre confortable de 18 m² à Guédiawaye, dans une maison familiale propre et sécurisée. Salle de bain privée, eau chaude, wifi, charges comprises. Proche transports et marché.",
    typeLog: 'chambre', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Guédiawaye',
    surface: 18, nbChambres: 1, nbSdb: 1,
    meuble: true, chargesIncluses: true,
    prix: 45000, frequencePaiement: 'mensuel', caution: 1,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-12-01'), dateFinPromotion: new Date('2026-02-28'),
    nbVues: 143, nbFavoris: 8,
    createdAt: new Date('2025-12-15'),
    photos: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'],
    meubles: ['Lit simple|Chambre', 'Armoire|Chambre', 'Table de chevet|Chambre'],
    equips: ['Ventilateur|Chambre', 'Chauffe-eau|Salle de bain', 'Routeur|Bureau'],
  },

  // [20] EN ATTENTE — Villa Keur Massar (soumise récemment)
  {
    key: 'villa_keur_massar',
    proprietaireEmail: 'ibrahima.sow@seek.sn',
    titre: 'Villa F6 Keur Massar',
    description: "Grande villa de 280 m² à Keur Massar. 6 chambres, 3 salles de bain, cuisine américaine, 3 salons, cour intérieure avec jardin. Groupe électrogène, château d'eau. Titre foncier disponible.",
    typeLog: 'villa', typeTx: 'location', statut: 'libre', statutAnnonce: 'EN_ATTENTE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Keur Massar',
    surface: 280, nbChambres: 6, nbSdb: 3, nbSalons: 3, nbCuisines: 1,
    parking: true,
    prix: 280000, frequencePaiement: 'mensuel', caution: 2,
    nbVues: 0, nbFavoris: 0,
    createdAt: new Date('2026-03-08'),
    photos: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80'],
    equips: ['Parking|Équipements généraux', 'Groupe électrogène|Équipements généraux', 'Jardin|Équipements généraux'],
  },

  // [21] ⭐ À LA UNE — Appartement Parcelles Assainies (ancienne)
  {
    key: 'appart_parcelles',
    proprietaireEmail: 'ibrahima.sow@seek.sn',
    titre: 'Appartement F3 Parcelles Assainies',
    description: "Appartement F3 de 75 m² aux Parcelles Assainies, quartier populaire et bien desservi. 3 chambres, 1 salle de bain, salon, cuisine. Proche école, mosquée et marché. Loyer très compétitif.",
    typeLog: 'appartement', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Parcelles Assainies',
    surface: 75, nbChambres: 3, nbSdb: 1, nbSalons: 1, nbCuisines: 1,
    meuble: false,
    prix: 110000, frequencePaiement: 'mensuel', caution: 2,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-06-01'), dateFinPromotion: new Date('2025-09-30'),
    nbVues: 217, nbFavoris: 14,
    createdAt: new Date('2025-06-20'),
    photos: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'],
    equips: ['Climatisation|Salon', 'Chauffe-eau|Salle de bain'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AMINATA DIOP (VERIFIED, suspendue) — 4 biens
  // ══════════════════════════════════════════════════════════════════════════

  // [22] ⭐ À LA UNE + actif:false — Villa Saly (compte suspendu)
  {
    key: 'villa_saly',
    proprietaireEmail: 'aminata.diop@seek.sn',
    titre: 'Villa balnéaire avec piscine Saly',
    description: "Villa de luxe à Saly Portudal, 5 chambres, piscine privée, terrasse face à la mer. Cadre idyllique pour vacances ou résidence secondaire.",
    typeLog: 'villa', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    actif: false,
    pays: 'Sénégal', region: 'Thiès', ville: 'Saly', quartier: 'Saly Portudal',
    surface: 300, nbChambres: 5, nbSdb: 3, nbSalons: 2,
    parking: true,
    prix: 350000, frequencePaiement: 'mensuel', caution: 2,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-03-01'), dateFinPromotion: new Date('2025-06-30'),
    nbVues: 231, nbFavoris: 19,
    createdAt: new Date('2025-03-15'),
    photos: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80'],
    equips: ['Piscine|Équipements généraux', 'Terrasse|Équipements généraux', 'Parking|Équipements généraux', 'Jardin|Équipements généraux'],
  },

  // [23] REJETÉ — Appartement Thiès (description insuffisante)
  {
    key: 'appart_thies_rejete',
    proprietaireEmail: 'aminata.diop@seek.sn',
    titre: 'Appartement F3 Thiès Centre',
    description: "Appartement 3 pièces à Thiès.",
    typeLog: 'appartement', typeTx: 'location', statut: 'libre', statutAnnonce: 'REJETE',
    noteAdmin: "Photos de mauvaise qualité et description insuffisante. Veuillez republier avec au moins 4 photos nettes et une description détaillée (équipements, étage, charges).",
    pays: 'Sénégal', region: 'Thiès', ville: 'Thiès', quartier: 'Médina',
    surface: 70, nbChambres: 3, nbSdb: 1,
    prix: 120000, frequencePaiement: 'mensuel',
    nbVues: 0, nbFavoris: 0,
    createdAt: new Date('2026-02-05'),
    photos: [],
  },

  // [24] ⭐ À LA UNE + actif:false — Maison coloniale Ziguinchor (très ancienne)
  {
    key: 'maison_ziguinchor',
    proprietaireEmail: 'aminata.diop@seek.sn',
    titre: 'Maison coloniale Ziguinchor',
    description: "Belle maison coloniale de 250 m² au cœur de Ziguinchor. 6 chambres, grande véranda, jardin tropical, manguiers centenaires. Idéale comme gîte ou résidence principale. Quartier historique calme.",
    typeLog: 'maison', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    actif: false,
    pays: 'Sénégal', region: 'Ziguinchor', ville: 'Ziguinchor', quartier: 'Boucotte',
    surface: 250, nbChambres: 6, nbSdb: 2, nbSalons: 2,
    meuble: false, parking: true,
    prix: 200000, frequencePaiement: 'mensuel', caution: 2,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2024-09-01'), dateFinPromotion: new Date('2024-12-31'),
    nbVues: 185, nbFavoris: 16,
    createdAt: new Date('2024-09-01'),
    photos: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'],
    equips: ['Jardin|Équipements généraux', 'Parking|Équipements généraux'],
  },

  // [25] REJETÉ — Terrain Saly (titre foncier non fourni)
  {
    key: 'terrain_saly_rejete',
    proprietaireEmail: 'aminata.diop@seek.sn',
    titre: 'Terrain 300 m² Saly Portudal',
    description: "Terrain de 300 m² à Saly Portudal, proche plage.",
    typeLog: 'terrain', typeTx: 'vente', statut: 'libre', statutAnnonce: 'REJETE',
    noteAdmin: "Aucun document de propriété fourni. Merci de joindre le titre foncier ou un acte notarié avant de republier.",
    pays: 'Sénégal', region: 'Thiès', ville: 'Saly', quartier: 'Saly Portudal',
    surface: 300, surfaceParcelle: 300, typeTerrain: 'Constructible',
    prix: 45000000,
    nbVues: 0, nbFavoris: 0,
    createdAt: new Date('2026-01-20'),
    photos: [],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OUSMANE SARR (NOT_VERIFIED) — 5 biens
  // ══════════════════════════════════════════════════════════════════════════

  // [26] EN ATTENTE — Immeuble R+4 Médina (tout récent)
  {
    key: 'immeuble_dakar',
    proprietaireEmail: 'ousmane.sarr@seek.sn',
    titre: 'Immeuble R+4 de rapport Médina',
    description: "Immeuble de rapport R+4 à la Médina, 8 appartements F2 de 60 m² chacun. Rendement locatif attractif. Titre foncier disponible.",
    typeLog: 'immeuble', typeTx: 'vente', statut: 'libre', statutAnnonce: 'EN_ATTENTE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Médina',
    surface: 600, nbAppartements: 8, nbEtages: 4,
    prix: 250000000,
    nbVues: 18, nbFavoris: 2,
    createdAt: new Date('2026-03-01'),
    photos: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80'],
    equips: ['Ascenseur|Équipements généraux', 'Local gardien|Immeuble', 'Local poubelle|Immeuble', 'Escalier de secours|Immeuble'],
  },

  // [27] ⭐ À LA UNE — Chambre Médina (ancienne)
  {
    key: 'chambre_medina',
    proprietaireEmail: 'ousmane.sarr@seek.sn',
    titre: 'Chambre à louer Médina',
    description: "Chambre simple de 15 m² à la Médina, proche Grande Mosquée, marchés et transports. Salle de bain partagée. Eau et électricité incluses.",
    typeLog: 'chambre', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Médina',
    surface: 15, nbChambres: 1,
    chargesIncluses: true,
    prix: 45000, frequencePaiement: 'mensuel', caution: 1,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-04-01'), dateFinPromotion: new Date('2025-07-31'),
    nbVues: 67, nbFavoris: 3,
    createdAt: new Date('2025-04-10'),
    photos: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'],
  },

  // [28] ⭐ À LA UNE — Villa F5 Rufisque à vendre (ancienne)
  {
    key: 'villa_rufisque',
    proprietaireEmail: 'ousmane.sarr@seek.sn',
    titre: 'Villa F5 à vendre Rufisque',
    description: "Villa de 220 m² à Rufisque, proche autoroute VDN. 5 chambres, 2 salles de bain, grand salon, cuisine équipée, cour clôturée, parking 2 voitures. Titre foncier disponible. Quartier calme et sécurisé.",
    typeLog: 'villa', typeTx: 'vente', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Rufisque', quartier: 'Diokoul',
    surface: 220, nbChambres: 5, nbSdb: 2, nbSalons: 2, nbCuisines: 1,
    meuble: false, parking: true, cloture: true,
    prix: 75000000,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-09-01'), dateFinPromotion: new Date('2025-12-31'),
    nbVues: 302, nbFavoris: 23,
    createdAt: new Date('2025-09-05'),
    photos: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    ],
    equips: ['Parking|Équipements généraux', 'Jardin|Équipements généraux', 'Groupe électrogène|Équipements généraux'],
  },

  // [29] BROUILLON — Appartement Thiaroye (tout récent, incomplet)
  {
    key: 'appart_thiaroye',
    proprietaireEmail: 'ousmane.sarr@seek.sn',
    titre: 'Appartement F2 Thiaroye',
    description: "Appartement en cours de construction à Thiaroye.",
    typeLog: 'appartement', typeTx: 'location', statut: 'libre', statutAnnonce: 'BROUILLON',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Thiaroye',
    surface: 50, nbChambres: 2,
    prix: 90000, frequencePaiement: 'mensuel',
    nbVues: 0, nbFavoris: 0,
    createdAt: new Date('2026-03-15'),
    photos: [],
  },

  // [30] ⭐ À LA UNE — Local commercial Pikine marché (ancienne)
  {
    key: 'local_pikine',
    proprietaireEmail: 'ousmane.sarr@seek.sn',
    titre: 'Local commercial Pikine marché',
    description: "Local commercial de 60 m² en rez-de-chaussée au bord du marché de Pikine. Rideau métallique, forte affluence commerciale, 1 espace de stockage. Idéal épicerie, pharmacie, friperie ou restaurant.",
    typeLog: 'commerce', typeTx: 'location', statut: 'libre', statutAnnonce: 'PUBLIE',
    pays: 'Sénégal', region: 'Dakar', ville: 'Dakar', quartier: 'Pikine',
    surface: 60, rideauMetallique: true,
    prix: 120000, frequencePaiement: 'mensuel', caution: 2,
    estMisEnAvant: true,
    dateDebutPromotion: new Date('2025-07-01'), dateFinPromotion: new Date('2025-10-31'),
    nbVues: 112, nbFavoris: 7,
    createdAt: new Date('2025-07-08'),
    photos: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'],
    equips: ['Rideau métallique|Local commercial'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA — LOCATAIRES (6 locataires, 3 statuts distincts)
// ─────────────────────────────────────────────────────────────────────────────

const LOCATAIRES: readonly LocataireDef[] = [
  // ── Moussa Diallo : 4 locataires ─────────────────────────────────────────
  {
    key: 'amadou_balde',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    nom: 'Baldé', prenom: 'Amadou',
    telephone: '+221771000001', email: 'amadou.balde@email.com',
    nbOccupants: 3, presenceEnfants: true,
    dateNaissance: new Date('1985-03-15'), lieuNaissance: 'Conakry, Guinée',
    nationalite: 'Guinéenne', sexe: 'homme',
    numPieceIdentite: 'PASS-GN-123456', typePiece: 'PASSEPORT',
    situationProfessionnelle: 'Directeur commercial',
    statut: 'ACTIF', needsPassword: true,
  },
  {
    key: 'mariama_camara',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    nom: 'Camara', prenom: 'Mariama',
    telephone: '+221771000002', email: 'mariama.camara@email.com',
    nbOccupants: 1, presenceEnfants: false,
    dateNaissance: new Date('1999-08-22'), lieuNaissance: 'Dakar, Sénégal',
    nationalite: 'Sénégalaise', sexe: 'femme',
    numPieceIdentite: 'CNI-SN-78901234', typePiece: 'CNI',
    situationProfessionnelle: 'Étudiante en master',
    statut: 'ACTIF', needsPassword: true,
  },
  {
    key: 'cheikh_tall',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    nom: 'Tall', prenom: 'Cheikh',
    telephone: '+221771000003', email: 'cheikh.tall@email.com',
    nbOccupants: 2, presenceEnfants: false,
    statut: 'INVITE',
    activationToken: 'seed_tok_cheikh_tall_20260318',
    tokenExpiresAt: new Date('2026-03-25'),
  },
  {
    key: 'binta_diallo',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    nom: 'Diallo', prenom: 'Binta',
    telephone: '+221771000004', email: 'binta.diallo@email.com',
    nbOccupants: 1, presenceEnfants: false,
    dateNaissance: new Date('1992-12-10'),
    nationalite: 'Sénégalaise', sexe: 'femme',
    numPieceIdentite: 'CNI-SN-34567890', typePiece: 'CNI',
    situationProfessionnelle: 'Fonctionnaire',
    statut: 'ANCIEN', needsPassword: true,
  },
  // ── Fatou Ndiaye : 1 locataire ────────────────────────────────────────────
  {
    key: 'rokhaya_fall',
    proprietaireEmail: 'fatou.ndiaye@seek.sn',
    nom: 'Fall', prenom: 'Rokhaya',
    telephone: '+221771000005', email: 'rokhaya.fall@email.com',
    nbOccupants: 2, presenceEnfants: true,
    statut: 'INVITE',
    activationToken: 'seed_tok_rokhaya_fall_20260318',
    tokenExpiresAt: new Date('2026-03-21'),
  },
  // ── Ibrahima Sow : 1 locataire ────────────────────────────────────────────
  {
    key: 'seydou_mbaye',
    proprietaireEmail: 'ibrahima.sow@seek.sn',
    nom: 'Mbaye', prenom: 'Seydou',
    telephone: '+221771000006', email: 'seydou.mbaye@email.com',
    nbOccupants: 4, presenceEnfants: true,
    dateNaissance: new Date('1988-05-30'),
    nationalite: 'Sénégalaise', sexe: 'homme',
    numPieceIdentite: 'CNI-SN-56789012', typePiece: 'CNI',
    situationProfessionnelle: 'Artisan maçon',
    statut: 'ANCIEN', needsPassword: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS — génération des échéances
// ─────────────────────────────────────────────────────────────────────────────

function addMonths(date: Date, n: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + n);
  return d;
}

function payeEcheance(
  datePaiement: Date,
  modePaiement: string,
  reference: string,
): EcheanceDef {
  return {
    statut: 'PAYE',
    datePaiement,
    modePaiement,
    reference,
    confirmeParProprietaire: true,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA — BAILS (4 bails, situations variées)
// ─────────────────────────────────────────────────────────────────────────────

const BAILS: readonly BailDef[] = [
  // ── BAIL 1 : Villa Almadies → Amadou Baldé (ACTIF depuis sept. 2025) ─────
  // jourLimitePaiement=15, delaiGrace=3 → deadline mars = 18 mars → EN_ATTENTE aujourd'hui
  {
    bienKey: 'villa_almadies',
    locataireKey: 'amadou_balde',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    typeBail: 'Habitation',
    dateDebutBail: new Date('2025-09-01'),
    montantLoyer: 500000,
    montantCaution: 1000000,
    cautionVersee: true,
    jourLimitePaiement: 15,
    delaiGrace: 3,
    frequencePaiement: 'mensuel',
    renouvellement: true,
    statut: 'ACTIF',
    createTransactions: true,
    echeances: [
      payeEcheance(new Date('2025-09-05'), 'Orange Money', 'OM-250905-B1'),
      payeEcheance(new Date('2025-10-04'), 'Orange Money', 'OM-251004-B1'),
      payeEcheance(new Date('2025-11-06'), 'Wave',         'WV-251106-B1'),
      payeEcheance(new Date('2025-12-03'), 'Orange Money', 'OM-251203-B1'),
      payeEcheance(new Date('2026-01-07'), 'Orange Money', 'OM-260107-B1'),
      payeEcheance(new Date('2026-02-06'), 'Wave',         'WV-260206-B1'),
      { statut: 'EN_ATTENTE' },  // mars 2026 — dans délai de grâce (deadline = 18 mars)
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
    ],
    depot: {
      statut: 'RECU',
      montant: 1000000,
      dateReception: new Date('2025-08-28'),
    },
  },

  // ── BAIL 2 : Chambre Yoff → Mariama Camara (ACTIF depuis janv. 2026) ────
  // jourLimitePaiement=5, delaiGrace=3 → deadline mars = 8 mars → EN_RETARD (18 mars)
  {
    bienKey: 'chambre_yoff',
    locataireKey: 'mariama_camara',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    typeBail: 'Habitation',
    dateDebutBail: new Date('2026-01-01'),
    montantLoyer: 65000,
    montantCaution: 65000,
    cautionVersee: false,
    jourLimitePaiement: 5,
    delaiGrace: 3,
    frequencePaiement: 'mensuel',
    renouvellement: true,
    statut: 'ACTIF',
    createTransactions: true,
    echeances: [
      payeEcheance(new Date('2026-01-05'), 'Wave', 'WV-260105-B2'),
      payeEcheance(new Date('2026-02-05'), 'Wave', 'WV-260205-B2'),
      { statut: 'EN_RETARD' },  // mars 2026 — délai de grâce dépassé (limite était le 8 mars)
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
      { statut: 'A_VENIR' },
    ],
    depot: null,
  },

  // ── BAIL 3 : Maison Pikine → Seydou Mbaye (TERMINE : janv-déc 2024) ──────
  {
    bienKey: 'maison_pikine',
    locataireKey: 'seydou_mbaye',
    proprietaireEmail: 'ibrahima.sow@seek.sn',
    typeBail: 'Habitation',
    dateDebutBail: new Date('2024-01-01'),
    dateFinBail: new Date('2025-01-01'),
    montantLoyer: 150000,
    montantCaution: 300000,
    cautionVersee: true,
    jourLimitePaiement: 10,
    delaiGrace: 5,
    frequencePaiement: 'mensuel',
    renouvellement: false,
    statut: 'TERMINE',
    initiePar: 'LOCATAIRE',
    echeances: [
      payeEcheance(new Date('2024-01-09'), 'Orange Money', 'OM-240109-B3'),
      payeEcheance(new Date('2024-02-08'), 'Orange Money', 'OM-240208-B3'),
      payeEcheance(new Date('2024-03-07'), 'Wave',         'WV-240307-B3'),
      payeEcheance(new Date('2024-04-09'), 'Orange Money', 'OM-240409-B3'),
      payeEcheance(new Date('2024-05-08'), 'Orange Money', 'OM-240508-B3'),
      payeEcheance(new Date('2024-06-06'), 'Wave',         'WV-240606-B3'),
      payeEcheance(new Date('2024-07-09'), 'Orange Money', 'OM-240709-B3'),
      payeEcheance(new Date('2024-08-08'), 'Orange Money', 'OM-240808-B3'),
      payeEcheance(new Date('2024-09-05'), 'Wave',         'WV-240905-B3'),
      payeEcheance(new Date('2024-10-09'), 'Orange Money', 'OM-241009-B3'),
      payeEcheance(new Date('2024-11-07'), 'Orange Money', 'OM-241107-B3'),
      payeEcheance(new Date('2024-12-05'), 'Wave',         'WV-241205-B3'),
    ],
    depot: {
      statut: 'RESTITUE',
      montant: 300000,
      dateReception: new Date('2024-01-10'),
      dateRestitution: new Date('2025-01-15'),
      montantRestitue: 300000,
    },
  },

  // ── BAIL 4 : Appart F3 Plateau → Binta Diallo (TERMINE : juin 2024-mai 2025)
  {
    bienKey: 'appart_f3_plateau',
    locataireKey: 'binta_diallo',
    proprietaireEmail: 'moussa.diallo@seek.sn',
    typeBail: 'Habitation',
    dateDebutBail: new Date('2024-06-01'),
    dateFinBail: new Date('2025-06-01'),
    montantLoyer: 250000,
    montantCaution: 500000,
    cautionVersee: true,
    jourLimitePaiement: 5,
    delaiGrace: 5,
    frequencePaiement: 'mensuel',
    renouvellement: false,
    statut: 'TERMINE',
    initiePar: 'PROPRIETAIRE',
    echeances: [
      payeEcheance(new Date('2024-06-06'), 'Orange Money', 'OM-240606-B4'),
      payeEcheance(new Date('2024-07-05'), 'Wave',         'WV-240705-B4'),
      payeEcheance(new Date('2024-08-07'), 'Orange Money', 'OM-240807-B4'),
      payeEcheance(new Date('2024-09-06'), 'Orange Money', 'OM-240906-B4'),
      payeEcheance(new Date('2024-10-04'), 'Wave',         'WV-241004-B4'),
      payeEcheance(new Date('2024-11-05'), 'Orange Money', 'OM-241105-B4'),
      payeEcheance(new Date('2024-12-04'), 'Orange Money', 'OM-241204-B4'),
      payeEcheance(new Date('2025-01-06'), 'Wave',         'WV-250106-B4'),
      payeEcheance(new Date('2025-02-05'), 'Orange Money', 'OM-250205-B4'),
      payeEcheance(new Date('2025-03-06'), 'Orange Money', 'OM-250306-B4'),
      payeEcheance(new Date('2025-04-04'), 'Wave',         'WV-250404-B4'),
      payeEcheance(new Date('2025-05-06'), 'Orange Money', 'OM-250506-B4'),
    ],
    depot: {
      statut: 'PARTIELLEMENT_RESTITUE',
      montant: 500000,
      dateReception: new Date('2024-05-30'),
      dateRestitution: new Date('2025-06-10'),
      montantRestitue: 420000,
      motifRetenue: "Dégradation du parquet dans la chambre principale — devis réparation 80 000 FCFA",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SEEDER
// ─────────────────────────────────────────────────────────────────────────────

export class DonneesTestSeeder implements Seeder {
  readonly name = 'DonneesTestSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    const saltRounds = parseInt(process.env.BCRYPT_SALT ?? String(DEFAULT_SALT), 10);
    const locPwd = await bcrypt.hash(
      process.env.SEED_LOCATAIRE_PASSWORD ?? DEFAULT_LOCATAIRE_PASSWORD,
      saltRounds,
    );

    // 1. Nettoyer les données dynamiques existantes
    await this.cleanup(prisma);

    // 2. Charger les références (types, statuts, meubles, équipements)
    const refs = await this.loadRefs(prisma);

    // 3. Récupérer les IDs des propriétaires
    const propIds = await this.loadProprietaireIds(prisma);

    // 4. Créer les biens
    const bienIds = await this.createBiens(prisma, refs, propIds);

    // 5. Créer les locataires
    const locIds = await this.createLocataires(prisma, propIds, locPwd);

    // 6. Créer les bails + échéanciers + dépôts caution + transactions
    await this.createBails(prisma, bienIds, locIds, propIds, refs);

    // 7. Upsert ConfigMonetisation
    await prisma.configMonetisation.upsert({
      where:  { id: 'config' },
      update: { miseEnAvantActive: true },
      create: { id: 'config', miseEnAvantActive: true, commissionActive: false, tauxCommission: 0 },
    });
    console.log('  ✔ ConfigMonetisation mise à jour');
  }

  // ── Nettoyage ──────────────────────────────────────────────────────────────

  private async cleanup(prisma: PrismaClient): Promise<void> {
    console.log('  🧹 Nettoyage des données dynamiques...');
    await prisma.transaction.deleteMany({});
    await prisma.locataire.deleteMany({});
    await prisma.bien.deleteMany({});
    await prisma.passwordResetToken.deleteMany({});
    await prisma.proprietaireRefreshToken.deleteMany({});
    await prisma.verificationDocuments.deleteMany({});
    await prisma.comptePublicRefreshToken.deleteMany({});
    await prisma.comptePublic.deleteMany({});
    console.log('  ✔ Nettoyage terminé');
  }

  // ── Références ─────────────────────────────────────────────────────────────

  private async loadRefs(prisma: PrismaClient): Promise<Refs> {
    const [typesLog, typesTx, statuts, meubles, equips] = await Promise.all([
      prisma.typeLogement.findMany({ select: { id: true, slug: true } }),
      prisma.typeTransaction.findMany({ select: { id: true, slug: true } }),
      prisma.statutBien.findMany({ select: { id: true, slug: true } }),
      prisma.meuble.findMany({ include: { categorie: true } }),
      prisma.equipement.findMany({ include: { categorie: true } }),
    ]);
    return {
      typeLogId:    Object.fromEntries(typesLog.map(t => [t.slug, t.id])),
      typeTxId:     Object.fromEntries(typesTx.map(t => [t.slug, t.id])),
      statutBienId: Object.fromEntries(statuts.map(s => [s.slug, s.id])),
      meubleId:     Object.fromEntries(meubles.map(m => [`${m.nom}|${m.categorie.nom}`, m.id])),
      equipId:      Object.fromEntries(equips.map(e => [`${e.nom}|${e.categorie.nom}`, e.id])),
    };
  }

  private async loadProprietaireIds(prisma: PrismaClient): Promise<Record<string, string>> {
    const props = await prisma.proprietaire.findMany({ select: { id: true, email: true } });
    const map: Record<string, string> = {};
    for (const p of props) {
      if (p.email) map[p.email] = p.id;
    }
    return map;
  }

  // ── Biens ──────────────────────────────────────────────────────────────────

  private async createBiens(
    prisma: PrismaClient,
    refs: Refs,
    propIds: Record<string, string>,
  ): Promise<Record<string, string>> {
    const ids: Record<string, string> = {};
    let countMisEnAvant = 0;

    for (const b of BIENS) {
      const proprietaireId = propIds[b.proprietaireEmail];
      if (!proprietaireId) {
        console.log(`  ⚠ Propriétaire introuvable : ${b.proprietaireEmail}`);
        continue;
      }

      const bien = await prisma.bien.create({
        data: {
          titre:            b.titre,
          description:      b.description,
          typeLogementId:   refs.typeLogId[b.typeLog],
          typeTransactionId: refs.typeTxId[b.typeTx],
          statutBienId:     refs.statutBienId[b.statut],
          proprietaireId,
          pays:             b.pays,
          region:           b.region,
          ville:            b.ville,
          quartier:         b.quartier,
          surface:          b.surface,
          surfaceParcelle:  b.surfaceParcelle,
          nbChambres:       b.nbChambres,
          nbSdb:            b.nbSdb,
          nbSalons:         b.nbSalons,
          nbCuisines:       b.nbCuisines,
          etage:            b.etage,
          nbEtages:         b.nbEtages,
          nbAppartements:   b.nbAppartements,
          typeTerrain:      b.typeTerrain,
          typeBureau:       b.typeBureau,
          cloture:          b.cloture   ?? false,
          rideauMetallique: b.rideauMetallique ?? false,
          meuble:           b.meuble   ?? false,
          parking:          b.parking  ?? false,
          ascenseur:        b.ascenseur ?? false,
          chargesIncluses:  b.chargesIncluses ?? false,
          animaux:          b.animaux  ?? false,
          fumeurs:          b.fumeurs  ?? false,
          prix:             b.prix,
          prixAncien:       b.prixAncien,
          dateDerniereModificationPrix: b.dateDerniereModificationPrix,
          frequencePaiement: b.frequencePaiement,
          caution:          b.caution,
          disponibleLe:     b.disponibleLe,
          photos:           b.photos ?? [],
          nbVues:           b.nbVues ?? 0,
          nbFavoris:        b.nbFavoris ?? 0,
          actif:            b.actif ?? true,
          statutAnnonce:    b.statutAnnonce,
          noteAdmin:        b.noteAdmin,
          estPremium:       b.estPremium ?? false,
          estMisEnAvant:    b.estMisEnAvant ?? false,
          dateDebutPromotion: b.dateDebutPromotion,
          dateFinPromotion:   b.dateFinPromotion,
          createdAt:          b.createdAt,
        },
      });

      ids[b.key] = bien.id;
      if (b.estMisEnAvant) countMisEnAvant++;

      // Meubles
      if (b.meubles?.length) {
        for (const key of b.meubles) {
          const meubleId = refs.meubleId[key];
          if (meubleId) {
            await prisma.bienMeuble.create({ data: { bienId: bien.id, meubleId, quantite: 1 } });
          }
        }
      }

      // Équipements
      if (b.equips?.length) {
        for (const key of b.equips) {
          const equipementId = refs.equipId[key];
          if (equipementId) {
            await prisma.bienEquipement.create({ data: { bienId: bien.id, equipementId } });
          }
        }
      }

      const star = b.estMisEnAvant ? ' ⭐' : '';
      const inactive = b.actif === false ? ' [inactif]' : '';
      console.log(`  ✔ Bien : ${b.titre} [${b.statutAnnonce}]${star}${inactive}`);
    }

    console.log(`  ℹ ${BIENS.length} biens créés dont ${countMisEnAvant} à la une`);
    return ids;
  }

  // ── Locataires ─────────────────────────────────────────────────────────────

  private async createLocataires(
    prisma: PrismaClient,
    propIds: Record<string, string>,
    locPwd: string,
  ): Promise<Record<string, string>> {
    const ids: Record<string, string> = {};

    for (const l of LOCATAIRES) {
      const proprietaireId = propIds[l.proprietaireEmail];
      if (!proprietaireId) {
        console.log(`  ⚠ Propriétaire introuvable pour locataire : ${l.email}`);
        continue;
      }

      const loc = await prisma.locataire.create({
        data: {
          proprietaireId,
          nom:            l.nom,
          prenom:         l.prenom,
          telephone:      l.telephone,
          email:          l.email,
          nbOccupants:    l.nbOccupants ?? 1,
          presenceEnfants: l.presenceEnfants ?? false,
          dateNaissance:  l.dateNaissance,
          lieuNaissance:  l.lieuNaissance,
          nationalite:    l.nationalite,
          sexe:           l.sexe,
          numPieceIdentite: l.numPieceIdentite,
          typePiece:      l.typePiece as any,
          situationProfessionnelle: l.situationProfessionnelle,
          statut:         l.statut as any,
          password:       l.needsPassword ? locPwd : null,
          activationToken: l.activationToken,
          tokenExpiresAt:  l.tokenExpiresAt,
        },
      });

      ids[l.key] = loc.id;
      console.log(`  ✔ Locataire : ${l.prenom} ${l.nom} [${l.statut}]`);
    }

    return ids;
  }

  // ── Bails ──────────────────────────────────────────────────────────────────

  private async createBails(
    prisma: PrismaClient,
    bienIds: Record<string, string>,
    locIds:  Record<string, string>,
    propIds: Record<string, string>,
    refs:    Refs,
  ): Promise<void> {
    for (const bail of BAILS) {
      const bienId         = bienIds[bail.bienKey];
      const locataireId    = locIds[bail.locataireKey];
      const proprietaireId = propIds[bail.proprietaireEmail];

      if (!bienId || !locataireId || !proprietaireId) {
        console.log(`  ⚠ Bail ignoré (IDs manquants) : ${bail.bienKey} → ${bail.locataireKey}`);
        continue;
      }

      const created = await prisma.bailLocation.create({
        data: {
          bienId,
          locataireId,
          proprietaireId,
          typeBail:          bail.typeBail,
          dateDebutBail:     bail.dateDebutBail,
          dateFinBail:       bail.dateFinBail,
          montantLoyer:      bail.montantLoyer,
          montantCaution:    bail.montantCaution,
          cautionVersee:     bail.cautionVersee,
          jourLimitePaiement: bail.jourLimitePaiement,
          delaiGrace:        bail.delaiGrace ?? 5,
          frequencePaiement: bail.frequencePaiement,
          renouvellement:    bail.renouvellement ?? false,
          statut:            bail.statut as any,
          motifResiliation:  bail.motifResiliation,
          initiePar:         bail.initiePar,
        },
      });

      console.log(`  ✔ Bail [${bail.statut}] : ${bail.bienKey} → ${bail.locataireKey}`);

      for (let i = 0; i < bail.echeances.length; i++) {
        const ech = bail.echeances[i];
        const dateEcheance = addMonths(bail.dateDebutBail, i);
        const isPaye = ech.statut === 'PAYE';

        const echeance = await prisma.echeancierLoyer.create({
          data: {
            bailId:         created.id,
            bienId,
            proprietaireId,
            locataireId,
            dateEcheance,
            montant:        bail.montantLoyer,
            statut:         ech.statut as any,
            datePaiement:   ech.datePaiement,
            modePaiement:   ech.modePaiement,
            reference:      ech.reference,
            sourceEnregistrement: isPaye ? 'PROPRIETAIRE' : null,
            confirmeParProprietaire: ech.confirmeParProprietaire ?? false,
            dateConfirmation: isPaye ? ech.datePaiement : null,
          },
        });

        if (isPaye && bail.createTransactions && ech.datePaiement) {
          await prisma.transaction.create({
            data: {
              proprietaireId,
              type:          'PAIEMENT_LOYER',
              statut:        'CONFIRME',
              montant:       bail.montantLoyer,
              devise:        'XOF',
              modePaiement:  ech.modePaiement ?? 'Orange Money',
              reference:     ech.reference,
              dateInitiation: ech.datePaiement,
              dateConfirmation: ech.datePaiement,
              dateEcheance,
              bienId,
              bailId:        created.id,
              echeanceId:    echeance.id,
              locataireId,
            },
          });
        }
      }

      if (bail.depot) {
        await prisma.depotCaution.create({
          data: {
            bailId:          created.id,
            bienId,
            proprietaireId,
            locataireId,
            montant:         bail.depot.montant,
            statut:          bail.depot.statut as any,
            dateReception:   bail.depot.dateReception,
            dateRestitution: bail.depot.dateRestitution,
            montantRestitue: bail.depot.montantRestitue,
            motifRetenue:    bail.depot.motifRetenue,
          },
        });
        console.log(`    ✔ Dépôt caution [${bail.depot.statut}] : ${bail.depot.montant.toLocaleString()} FCFA`);
      }

      if (bail.statut === 'ACTIF') {
        const statutLoueId = refs.statutBienId['loue'];
        if (statutLoueId) {
          await prisma.bien.update({
            where: { id: bienId },
            data:  { statutBienId: statutLoueId },
          });
        }
      }
    }
  }

}
