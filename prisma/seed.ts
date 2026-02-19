/// <reference types="node" />
import dotenv from 'dotenv';
import { PrismaClient } from '../src/generated/prisma/client.js';
import type { Seeder } from './seeders/seeder.interface.js';
import { PaysSeeder } from './seeders/pays.seeder.js';
import { VilleSeeder } from './seeders/ville.seeder.js';
import { AdminSeeder } from './seeders/admin.seeder.js';
import { TypeLogementSeeder } from './seeders/type-logement.seeder.js';
import { TypeTransactionSeeder } from './seeders/type-transaction.seeder.js';
import { StatutBienSeeder } from './seeders/statut-bien.seeder.js';
import { MeubleSeeder } from './seeders/meuble.seeder.js';
import { EquipementSeeder } from './seeders/equipement.seeder.js';

dotenv.config();

/**
 * Ordre d'exécution — respecter les dépendances entre entités :
 *  1. Pays             (référencé par Ville)
 *  2. Ville            (dépend de Pays)
 *  3. Admin            (indépendant)
 *  4. TypeLogement     (indépendant)
 *  5. TypeTransaction  (indépendant)
 *  6. StatutBien       (indépendant)
 *  7. Meuble           (indépendant)
 *  8. Equipement       (indépendant)
 *
 * Pour ajouter un seeder : créer son fichier dans ./seeders/ et l'ajouter ici.
 * Aucun fichier existant à modifier (Open/Closed Principle).
 */
const SEEDERS: readonly Seeder[] = [
  new PaysSeeder(),
  new VilleSeeder(),
  new AdminSeeder(),
  new TypeLogementSeeder(),
  new TypeTransactionSeeder(),
  new StatutBienSeeder(),
  new MeubleSeeder(),
  new EquipementSeeder(),
];

async function main(): Promise<void> {
  const prisma = new PrismaClient();

  try {
    console.log('🌱 Début du seeding...\n');

    for (const seeder of SEEDERS) {
      console.log(`▶ ${seeder.name}`);
      await seeder.run(prisma);
    }

    console.log('\n🎉 Seeding terminé avec succès !');
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error('❌ Erreur lors du seeding :', err);
  process.exit(1);
});
