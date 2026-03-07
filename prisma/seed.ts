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
import { CategorieSeeder } from './seeders/categorie.seeder.js';
import { ModeleContratSeeder } from './seeders/modeleContrat.seeder.js';
import { QuartierSeeder } from './seeders/quartier.seeder.js';
import { ProprietaireSeeder } from './seeders/proprietaire.seeder.js';
import { TemoignageSeeder } from './seeders/temoignage.seeder.js';
import { FormulePremiumSeeder } from './seeders/formulePremium.seeder.js';

dotenv.config();

/**
 * Ordre d'exécution — respecter les dépendances entre entités :
 *  1. Pays             (référencé par Ville)
 *  2. Ville            (dépend de Pays)
 *  3. Quartier         (dépend de Ville)
 *  4. Admin            (indépendant)
 *  5. TypeLogement     (indépendant)
 *  6. TypeTransaction  (indépendant)
 *  7. StatutBien       (indépendant)
 *  8. Categorie              (catégories pour Meuble et Equipement)
 *  9. Meuble                (dépend de Categorie)
 * 10. Equipement            (dépend de Categorie)
 * 11. Proprietaire          (indépendant — comptes de test)
 *
 * Pour ajouter un seeder : créer son fichier dans ./seeders/ et l'ajouter ici.
 * Aucun fichier existant à modifier (Open/Closed Principle).
 */
const SEEDERS: readonly Seeder[] = [
  new PaysSeeder(),
  new VilleSeeder(),
  new QuartierSeeder(),
  new AdminSeeder(),
  new TypeLogementSeeder(),
  new TypeTransactionSeeder(),
  new StatutBienSeeder(),
  new CategorieSeeder(),
  new MeubleSeeder(),
  new EquipementSeeder(),
  new ModeleContratSeeder(),
  new ProprietaireSeeder(),
  new TemoignageSeeder(),
  new FormulePremiumSeeder(),
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
