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
import { DonneesTestSeeder } from './seeders/donnees-test.seeder.js';

dotenv.config();

/**
 * Ordre d'exécution — respecter les dépendances entre entités :
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
 * 12.  Proprietaire     (upsert — définit statutVerification et suspension)
 * 13.  Temoignage       (upsert)
 * 14.  FormulePremium   (upsert)
 * 15.  DonneesTest      (nettoie + recrée : biens, locataires, bails, signalements)
 *
 * Pour ajouter un seeder : créer son fichier dans ./seeders/ et l'ajouter ici.
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
  new DonneesTestSeeder(),
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
    console.log('  Propriétaire → moussa.diallo@seek.sn    / Proprietaire@2024!  (VERIFIED)');
    console.log('  Propriétaire → fatou.ndiaye@seek.sn     / Proprietaire@2024!  (PENDING)');
    console.log('  Propriétaire → ibrahima.sow@seek.sn     / Proprietaire@2024!  (NOT_VERIFIED)');
    console.log('  Propriétaire → aminata.diop@seek.sn     / Proprietaire@2024!  (VERIFIED, suspendue)');
    console.log('  Propriétaire → ousmane.sarr@seek.sn     / Proprietaire@2024!  (NOT_VERIFIED)');
    console.log('  Locataire    → amadou.balde@email.com   / Locataire@2024!     (ACTIF, bail villa)');
    console.log('  Locataire    → mariama.camara@email.com / Locataire@2024!     (ACTIF, bail chambre)');
    console.log('  Locataire    → cheikh.tall@email.com    → INVITE (token: seed_tok_cheikh_tall_20260318)');
    console.log('  Locataire    → rokhaya.fall@email.com   → INVITE (token: seed_tok_rokhaya_fall_20260318)');
    console.log('  Locataire    → binta.diallo@email.com   / Locataire@2024!     (ANCIEN)');
    console.log('  Locataire    → seydou.mbaye@email.com   / Locataire@2024!     (ANCIEN)');
    console.log('\n🏠 Annonces créées : 30 biens');
    console.log('  ⭐ À la une (estMisEnAvant) : 18');
    console.log('  📋 Statuts : 22 PUBLIE / 2 EN_ATTENTE / 2 BROUILLON / 2 REJETE / 1 ANNULE / 1 PUBLIE inactif');
    console.log('  📅 Dates : de 2024-01-15 (très ancienne) à 2026-03-15 (très récente)');
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error('❌ Erreur lors du seeding :', err);
  process.exit(1);
});
