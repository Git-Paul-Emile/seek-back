import type { PrismaClient } from '../../src/generated/prisma/client.js';
import type { Seeder } from './seeder.interface.js';
import { VILLES_SENEGAL } from './data/villes-senegal.data.js';

const CODE_PAYS_SENEGAL = 'SN';

export class VilleSeeder implements Seeder {
  readonly name = 'VilleSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    const pays = await prisma.pays.findUnique({
      where: { code: CODE_PAYS_SENEGAL },
    });

    if (!pays) {
      throw new Error(
        `VilleSeeder : pays avec le code "${CODE_PAYS_SENEGAL}" introuvable. ` +
        'Assurez-vous que PaysSeeder a été exécuté avant.'
      );
    }

    // Dédupliquer les noms avant l'insertion
    const villesUniques = [...new Set(VILLES_SENEGAL)].map((nom) => ({
      nom,
      paysId: pays.id,
    }));

    // Supprimer les villes existantes pour garantir une idempotence propre
    await prisma.ville.deleteMany({ where: { paysId: pays.id } });

    const { count } = await prisma.ville.createMany({
      data: villesUniques,
      skipDuplicates: true,
    });

    console.log(`  ✔ ${count} villes insérées pour ${pays.nom}`);
  }
}
