import type { PrismaClient } from '../../src/generated/prisma/client.js';
import type { Seeder } from './seeder.interface.js';

const STATUTS: readonly { nom: string; slug: string; ordre: number }[] = [
  { nom: 'Libre',          slug: 'libre',          ordre: 1 },
  { nom: 'Loué',           slug: 'loue',           ordre: 2 },
  { nom: 'En maintenance', slug: 'en-maintenance', ordre: 3 },
];

export class StatutBienSeeder implements Seeder {
  readonly name = 'StatutBienSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    for (const statut of STATUTS) {
      await prisma.statutBien.upsert({
        where:  { slug: statut.slug },
        update: { nom: statut.nom, ordre: statut.ordre },
        create: { ...statut, actif: true },
      });
      console.log(`  ✔ Statut : ${statut.nom}`);
    }
  }
}
