import bcrypt from 'bcrypt';
import type { PrismaClient } from '../../src/generated/prisma/client.js';
import type { Seeder } from './seeder.interface.js';

const DEFAULT_PASSWORD = 'Proprietaire@2024!';
const DEFAULT_SALT     = 10;

/**
 * 5 propriétaires couvrant différents cas de la plateforme :
 *  - VERIFIED         : Moussa Diallo (actif, biens loués)
 *  - PENDING          : Fatou Ndiaye  (vérification en attente)
 *  - NOT_VERIFIED (×2): Ibrahima Sow, Ousmane Sarr
 *  - VERIFIED + suspendu : Aminata Diop
 */
interface ProprietaireData {
  prenom: string;
  nom: string;
  sexe: string;
  telephone: string;
  email: string;
  statutVerification: 'NOT_VERIFIED' | 'PENDING' | 'VERIFIED' | 'REJECTED';
  verifiedAt?: Date;
  estSuspendu?: boolean;
  motifSuspension?: string;
  dateSuspension?: Date;
  suspenduPar?: string;
}

const PROPRIETAIRES: readonly ProprietaireData[] = [
  {
    prenom: 'Moussa',
    nom: 'Diallo',
    sexe: 'homme',
    telephone: '+221771234501',
    email: 'moussa.diallo@seek.sn',
    statutVerification: 'VERIFIED',
    verifiedAt: new Date('2025-06-01'),
  },
  {
    prenom: 'Fatou',
    nom: 'Ndiaye',
    sexe: 'femme',
    telephone: '+221771234502',
    email: 'fatou.ndiaye@seek.sn',
    statutVerification: 'PENDING',
  },
  {
    prenom: 'Ibrahima',
    nom: 'Sow',
    sexe: 'homme',
    telephone: '+221771234503',
    email: 'ibrahima.sow@seek.sn',
    statutVerification: 'NOT_VERIFIED',
  },
  {
    prenom: 'Aminata',
    nom: 'Diop',
    sexe: 'femme',
    telephone: '+221771234504',
    email: 'aminata.diop@seek.sn',
    statutVerification: 'VERIFIED',
    verifiedAt: new Date('2025-05-15'),
    estSuspendu: true,
    motifSuspension: "Comportement frauduleux confirmé par l'administration",
    dateSuspension: new Date('2026-03-10'),
    suspenduPar: 'admin',
  },
  {
    prenom: 'Ousmane',
    nom: 'Sarr',
    sexe: 'homme',
    telephone: '+221771234505',
    email: 'ousmane.sarr@seek.sn',
    statutVerification: 'NOT_VERIFIED',
  },
];

export class ProprietaireSeeder implements Seeder {
  readonly name = 'ProprietaireSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    const rawPassword  = process.env.SEED_PROPRIETAIRE_PASSWORD ?? DEFAULT_PASSWORD;
    const saltRounds   = parseInt(process.env.BCRYPT_SALT ?? String(DEFAULT_SALT), 10);
    const hashedPassword = await bcrypt.hash(rawPassword, saltRounds);

    for (const p of PROPRIETAIRES) {
      const { statutVerification, verifiedAt, estSuspendu, motifSuspension, dateSuspension, suspenduPar, ...base } = p;

      await prisma.proprietaire.upsert({
        where:  { telephone: p.telephone },
        update: {
          statutVerification,
          verifiedAt:       verifiedAt       ?? null,
          estSuspendu:      estSuspendu       ?? false,
          motifSuspension:  motifSuspension   ?? null,
          dateSuspension:   dateSuspension    ?? null,
          suspenduPar:      suspenduPar       ?? null,
        },
        create: {
          ...base,
          password: hashedPassword,
          statutVerification,
          verifiedAt:       verifiedAt       ?? null,
          estSuspendu:      estSuspendu       ?? false,
          motifSuspension:  motifSuspension   ?? null,
          dateSuspension:   dateSuspension    ?? null,
          suspenduPar:      suspenduPar       ?? null,
        },
      });

      const tag = estSuspendu ? ', ⛔ suspendu' : '';
      console.log(`  ✔ Propriétaire : ${p.prenom} ${p.nom} [${statutVerification}${tag}]`);
    }
  }
}
