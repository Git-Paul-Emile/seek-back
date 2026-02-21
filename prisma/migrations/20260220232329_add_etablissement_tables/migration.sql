/*
  Warnings:

  - You are about to drop the column `categorie` on the `Equipement` table. All the data in the column will be lost.
  - You are about to drop the column `categorie` on the `Meuble` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nom,categorieId]` on the table `Equipement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nom,categorieId]` on the table `Meuble` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categorieId` to the `Equipement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categorieId` to the `Meuble` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatutAnnonce" AS ENUM ('BROUILLON', 'EN_ATTENTE', 'PUBLIE', 'REJETE');

-- DropIndex
DROP INDEX "Equipement_categorie_idx";

-- DropIndex
DROP INDEX "Equipement_nom_categorie_key";

-- DropIndex
DROP INDEX "Meuble_categorie_idx";

-- DropIndex
DROP INDEX "Meuble_nom_categorie_key";

-- AlterTable
ALTER TABLE "Equipement" DROP COLUMN "categorie",
ADD COLUMN     "categorieId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Meuble" DROP COLUMN "categorie",
ADD COLUMN     "categorieId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CategorieMeuble" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategorieMeuble_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieEquipement" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategorieEquipement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bien" (
    "id" TEXT NOT NULL,
    "titre" TEXT,
    "description" TEXT,
    "typeLogementId" TEXT,
    "typeTransactionId" TEXT,
    "statutBienId" TEXT,
    "proprietaireId" TEXT NOT NULL,
    "pays" TEXT,
    "region" TEXT,
    "ville" TEXT,
    "quartier" TEXT,
    "adresse" TEXT,
    "pointRepere" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "surface" DOUBLE PRECISION,
    "surfaceParcelle" DOUBLE PRECISION,
    "nbChambres" INTEGER,
    "nbSdb" INTEGER,
    "nbSalons" INTEGER,
    "nbCuisines" INTEGER,
    "etage" INTEGER,
    "nbEtages" INTEGER,
    "nbAppartements" INTEGER,
    "nbPieces" INTEGER,
    "nbWc" INTEGER,
    "typeTerrain" TEXT,
    "cloture" BOOLEAN NOT NULL DEFAULT false,
    "typeBureau" TEXT,
    "rideauMetallique" BOOLEAN NOT NULL DEFAULT false,
    "meuble" BOOLEAN NOT NULL DEFAULT false,
    "fumeurs" BOOLEAN NOT NULL DEFAULT false,
    "animaux" BOOLEAN NOT NULL DEFAULT false,
    "parking" BOOLEAN NOT NULL DEFAULT false,
    "ascenseur" BOOLEAN NOT NULL DEFAULT false,
    "prix" DOUBLE PRECISION,
    "frequencePaiement" TEXT,
    "chargesIncluses" BOOLEAN NOT NULL DEFAULT false,
    "caution" DOUBLE PRECISION,
    "disponibleLe" TIMESTAMP(3),
    "photos" TEXT[],
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "statutAnnonce" "StatutAnnonce" NOT NULL DEFAULT 'BROUILLON',
    "noteAdmin" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BienEquipement" (
    "bienId" TEXT NOT NULL,
    "equipementId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BienMeuble" (
    "bienId" TEXT NOT NULL,
    "meubleId" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "Etablissement" (
    "id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "nom" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "distance" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Etablissement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategorieMeuble_nom_key" ON "CategorieMeuble"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "CategorieMeuble_slug_key" ON "CategorieMeuble"("slug");

-- CreateIndex
CREATE INDEX "CategorieMeuble_slug_idx" ON "CategorieMeuble"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CategorieEquipement_nom_key" ON "CategorieEquipement"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "CategorieEquipement_slug_key" ON "CategorieEquipement"("slug");

-- CreateIndex
CREATE INDEX "CategorieEquipement_slug_idx" ON "CategorieEquipement"("slug");

-- CreateIndex
CREATE INDEX "Bien_proprietaireId_idx" ON "Bien"("proprietaireId");

-- CreateIndex
CREATE INDEX "Bien_typeLogementId_idx" ON "Bien"("typeLogementId");

-- CreateIndex
CREATE INDEX "Bien_typeTransactionId_idx" ON "Bien"("typeTransactionId");

-- CreateIndex
CREATE INDEX "Bien_statutBienId_idx" ON "Bien"("statutBienId");

-- CreateIndex
CREATE INDEX "Bien_statutAnnonce_idx" ON "Bien"("statutAnnonce");

-- CreateIndex
CREATE UNIQUE INDEX "BienEquipement_bienId_equipementId_key" ON "BienEquipement"("bienId", "equipementId");

-- CreateIndex
CREATE UNIQUE INDEX "BienMeuble_bienId_meubleId_key" ON "BienMeuble"("bienId", "meubleId");

-- CreateIndex
CREATE INDEX "Etablissement_bienId_idx" ON "Etablissement"("bienId");

-- CreateIndex
CREATE INDEX "Etablissement_type_idx" ON "Etablissement"("type");

-- CreateIndex
CREATE INDEX "Equipement_categorieId_idx" ON "Equipement"("categorieId");

-- CreateIndex
CREATE UNIQUE INDEX "Equipement_nom_categorieId_key" ON "Equipement"("nom", "categorieId");

-- CreateIndex
CREATE INDEX "Meuble_categorieId_idx" ON "Meuble"("categorieId");

-- CreateIndex
CREATE UNIQUE INDEX "Meuble_nom_categorieId_key" ON "Meuble"("nom", "categorieId");

-- AddForeignKey
ALTER TABLE "Meuble" ADD CONSTRAINT "Meuble_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieMeuble"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipement" ADD CONSTRAINT "Equipement_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieEquipement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bien" ADD CONSTRAINT "Bien_typeLogementId_fkey" FOREIGN KEY ("typeLogementId") REFERENCES "TypeLogement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bien" ADD CONSTRAINT "Bien_typeTransactionId_fkey" FOREIGN KEY ("typeTransactionId") REFERENCES "TypeTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bien" ADD CONSTRAINT "Bien_statutBienId_fkey" FOREIGN KEY ("statutBienId") REFERENCES "StatutBien"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bien" ADD CONSTRAINT "Bien_proprietaireId_fkey" FOREIGN KEY ("proprietaireId") REFERENCES "Proprietaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BienEquipement" ADD CONSTRAINT "BienEquipement_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "Bien"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BienEquipement" ADD CONSTRAINT "BienEquipement_equipementId_fkey" FOREIGN KEY ("equipementId") REFERENCES "Equipement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BienMeuble" ADD CONSTRAINT "BienMeuble_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "Bien"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BienMeuble" ADD CONSTRAINT "BienMeuble_meubleId_fkey" FOREIGN KEY ("meubleId") REFERENCES "Meuble"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etablissement" ADD CONSTRAINT "Etablissement_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "Bien"("id") ON DELETE CASCADE ON UPDATE CASCADE;
