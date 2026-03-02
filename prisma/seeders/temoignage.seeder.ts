import type { PrismaClient } from '../../src/generated/prisma/client.js';
import type { Seeder } from './seeder.interface.js';

const TEMOIGNAGES = [
  {
    nom: 'Marie Dubois',
    temoignage:
      'Seek a révolutionné ma recherche de logement. En quelques clics, j\'ai trouvé l\'appartement parfait à Dakar. L\'interface est intuitive et les annonces sont toujours à jour. Je recommande fortement cette plateforme à tous ceux qui cherchent un chez-soi au Sénégal.',
    ordre: 1,
  },
  {
    nom: 'Cheikh Fall',
    temoignage:
      'Propriétaire depuis 2 ans sur Seek, je suis séduit par la facilité de gestion de mes biens. L\'espace locataire est très pratique et les paiements sont sécurisés. Le service client est réactif et toujours disponible pour m\'accompagner. Une plateforme incontournable pour l\'immobilier au Sénégal.',
    ordre: 2,
  },
  {
    nom: 'Fatou Diallo',
    temoignage:
      'En tant que jeune professionnelle, trouver un logement me paraissait impossible avant de découvrir Seek. La qualité des annonces et la fiabilité des informations m\'ont permis de louer mon premier appartement en toute confiance. Merci Seek pour cette belle expérience !',
    ordre: 3,
  },
];

export class TemoignageSeeder implements Seeder {
  readonly name = 'TemoignageSeeder';

  async run(prisma: PrismaClient): Promise<void> {
    for (const temoin of TEMOIGNAGES) {
      await prisma.temoignage.upsert({
        where: { id: temoin.nom },
        update: { ...temoin, actif: true },
        create: { ...temoin, actif: true },
      });
      console.log(`  ✔ Témoignage : ${temoin.nom}`);
    }
  }
}
