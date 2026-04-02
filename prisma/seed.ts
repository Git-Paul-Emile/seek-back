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
import { TemoignageSeeder } from './seeders/temoignage.seeder.js';
import { FormulePremiumSeeder } from './seeders/formulePremium.seeder.js';
import { ConfigSiteSeeder } from './seeders/configSite.seeder.js';

dotenv.config();

/**
 * Ordre d'exécution — respecter les dépendances entre entités :
 *  0.  ConfigSite       (indépendant)
 *  1.  Pays             (référencé par Ville)
 *  2.  Ville            (dépend de Pays)
 *  3.  Quartier         (dépend de Ville)
 *  4.  Admin            (indépendant)
 *  5.  TypeLogement     (upsert — ajoute Chambre si absent)
 *  6.  TypeTransaction  (upsert)
 *  7.  StatutBien       (upsert)
 *  8.  Categorie        (catégories Meuble et Équipement)
 *  9.  Meuble           (dépend de Categorie)
 * 10.  Equipement       (dépend de Categorie)
 * 11.  ModeleContrat    (indépendant)
 * 12.  Temoignage       (upsert)
 * 13.  FormulePremium   (upsert)
 *
 * Pour ajouter un seeder : créer son fichier dans ./seeders/ et l'ajouter ici.
 */
const SEEDERS: readonly Seeder[] = [
  new ConfigSiteSeeder(),
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
    console.log('\n📋 Comptes de test créés :');
    console.log('  Admin        → admin@seek.sn            / Admin@2024!');
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error('❌ Erreur lors du seeding :', err);
  process.exit(1);
});
