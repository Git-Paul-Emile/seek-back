import type { PrismaClient } from '../../src/generated/prisma/client.js';
import type { Seeder } from './seeder.interface.js';
import { QUARTIERS_SENEGAL } from './data/quartiers-senegal.data.js';

const CODE_PAYS_SENEGAL = 'SN';

export class QuartierSeeder implements Seeder {
  readonly name = 'QuartierSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    const pays = await prisma.pays.findUnique({
      where: { code: CODE_PAYS_SENEGAL },
    });

    if (!pays) {
      throw new Error(
        `QuartierSeeder : pays "${CODE_PAYS_SENEGAL}" introuvable. ` +
        'Exécutez PaysSeeder et VilleSeeder en premier.'
      );
    }

    let totalInserted = 0;
    let totalSkipped = 0;

    for (const entry of QUARTIERS_SENEGAL) {
      const ville = await prisma.ville.findFirst({
        where: { nom: entry.ville, paysId: pays.id },
      });

      if (!ville) {
        console.log(`  ⚠ Ville "${entry.ville}" introuvable — quartiers ignorés`);
        totalSkipped += entry.quartiers.length;
        continue;
      }

      // Supprimer les quartiers existants pour cette ville (idempotence)
      await prisma.quartier.deleteMany({ where: { villeId: ville.id } });

      const data = entry.quartiers.map((q) => ({
        nom: q.nom,
        villeId: ville.id,
        latitude: q.latitude,
        longitude: q.longitude,
      }));

      const { count } = await prisma.quartier.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`  ✔ ${count} quartiers insérés pour ${ville.nom}`);
      totalInserted += count;
    }

    console.log(`  → Total : ${totalInserted} quartiers insérés, ${totalSkipped} ignorés (villes manquantes)`);
  }
}
