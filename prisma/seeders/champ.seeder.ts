import type { PrismaClient } from '../../src/generated/prisma/client.js';
import { TypeChamp } from '../../src/generated/prisma/enums.js';
import type { Seeder } from './seeder.interface.js';

interface ChampData {
  nom: string;
  type: TypeChamp;
  unite?: string;
  options?: string[];
  typeLogements: string[];
  obligatoire?: boolean;
}

const CATEGORIES: readonly { nom: string; ordre: number; champs: ChampData[] }[] = [
  {
    nom: 'Caractéristiques générales',
    ordre: 1,
    champs: [
      { nom: 'Année de construction', type: TypeChamp.NOMBRE, typeLogements: ['appartement', 'villa', 'maison', 'immeuble'] },
      { nom: 'Orientation', type: TypeChamp.SELECT, options: ['Nord', 'Sud', 'Est', 'Ouest'], typeLogements: ['appartement', 'villa', 'maison'] },
      { nom: 'État général', type: TypeChamp.SELECT, options: ['Neuf', 'Bon état', 'À rénover'], typeLogements: ['appartement', 'villa', 'maison', 'studio', 'chambre'] },
    ],
  },
  {
    nom: 'Sécurité',
    ordre: 2,
    champs: [
      { nom: 'Gardiennage', type: TypeChamp.BOOLEEN, typeLogements: ['villa', 'maison', 'immeuble', 'bureau'] },
      { nom: 'Vidéosurveillance', type: TypeChamp.BOOLEEN, typeLogements: ['villa', 'maison', 'immeuble', 'commerce', 'bureau'] },
      { nom: "Hauteur du mur de clôture", type: TypeChamp.SURFACE, unite: 'm', typeLogements: ['villa', 'maison'] },
    ],
  },
];

export class ChampSeeder implements Seeder {
  readonly name = 'ChampSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    for (const cat of CATEGORIES) {
      const categorie = await prisma.categorieChamp.upsert({
        where: { nom: cat.nom },
        update: { ordre: cat.ordre },
        create: { nom: cat.nom, ordre: cat.ordre },
      });

      for (const champData of cat.champs) {
        const champ = await prisma.champ.upsert({
          where: { nom_categorieId: { nom: champData.nom, categorieId: categorie.id } },
          update: { type: champData.type, unite: champData.unite, options: champData.options ?? [] },
          create: {
            nom: champData.nom,
            type: champData.type,
            unite: champData.unite,
            options: champData.options ?? [],
            categorieId: categorie.id,
          },
        });

        for (const slug of champData.typeLogements) {
          const typeLogement = await prisma.typeLogement.findUnique({ where: { slug } });
          if (!typeLogement) continue;

          await prisma.typeLogementChamp.upsert({
            where: { typeLogementId_champId: { typeLogementId: typeLogement.id, champId: champ.id } },
            update: {},
            create: {
              typeLogementId: typeLogement.id,
              champId: champ.id,
              obligatoire: champData.obligatoire ?? false,
            },
          });
        }

        console.log(`  ✔ Champ : ${champData.nom} (${cat.nom})`);
      }
    }
  }
}
