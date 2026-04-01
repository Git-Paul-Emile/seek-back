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

const BIENS: readonly BienDef[] = [];

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



