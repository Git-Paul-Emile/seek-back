import bcrypt from 'bcrypt';
import type { PrismaClient } from '../../src/generated/prisma/client.js';
import type { Seeder } from './seeder.interface.js';

const DEFAULT_PASSWORD = 'Proprietaire@2024!';
const DEFAULT_SALT     = 10;

const PROPRIETAIRES: readonly { prenom: string; nom: string; sexe: string; telephone: string; email: string }[] = [
  { prenom: 'Moussa',   nom: 'Diallo',   sexe: 'homme', telephone: '+221771234501', email: 'moussa.diallo@seek.sn'   },
  { prenom: 'Fatou',    nom: 'Ndiaye',   sexe: 'femme', telephone: '+221771234502', email: 'fatou.ndiaye@seek.sn'    },
  { prenom: 'Ibrahima', nom: 'Sow',      sexe: 'homme', telephone: '+221771234503', email: 'ibrahima.sow@seek.sn'    },
  { prenom: 'Aminata',  nom: 'Diop',     sexe: 'femme', telephone: '+221771234504', email: 'aminata.diop@seek.sn'    },
  { prenom: 'Ousmane',  nom: 'Sarr',     sexe: 'homme', telephone: '+221771234505', email: 'ousmane.sarr@seek.sn'    },
];

export class ProprietaireSeeder implements Seeder {
  readonly name = 'ProprietaireSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    const rawPassword = process.env.SEED_PROPRIETAIRE_PASSWORD ?? DEFAULT_PASSWORD;
    const saltRounds  = parseInt(process.env.BCRYPT_SALT ?? String(DEFAULT_SALT), 10);
    const hashedPassword = await bcrypt.hash(rawPassword, saltRounds);

    for (const p of PROPRIETAIRES) {
      const existing = await prisma.proprietaire.findUnique({ where: { telephone: p.telephone } });

      if (existing) {
        console.log(`  ℹ Propriétaire "${p.prenom} ${p.nom}" déjà présent — ignoré`);
        continue;
      }

      await prisma.proprietaire.create({
        data: { ...p, password: hashedPassword },
      });

      console.log(`  ✔ Propriétaire créé : ${p.prenom} ${p.nom} (${p.telephone})`);
    }
  }
}
