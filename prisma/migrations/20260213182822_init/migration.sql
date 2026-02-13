-- CreateEnum
CREATE TYPE "TypeProprietaire" AS ENUM ('PARTICULIER', 'ENTREPRISE');

-- CreateEnum
CREATE TYPE "StatutProprietaire" AS ENUM ('ACTIF', 'INACTIF', 'SUSPENDU');

-- CreateTable
CREATE TABLE "proprietaires" (
    "id" TEXT NOT NULL,
    "nom_complet" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT,
    "adresse" TEXT,
    "mot_de_passe" TEXT NOT NULL,
    "whatsapp" TEXT,
    "ville" TEXT,
    "type_proprietaire" "TypeProprietaire" NOT NULL DEFAULT 'PARTICULIER',
    "raison_sociale" TEXT,
    "profil_complet" BOOLEAN NOT NULL DEFAULT false,
    "taux_completude_profil" INTEGER NOT NULL DEFAULT 0,
    "statut" "StatutProprietaire" NOT NULL DEFAULT 'ACTIF',
    "role" TEXT NOT NULL DEFAULT 'PROPRIETAIRE',
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modification" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "proprietaires_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "proprietaires_telephone_key" ON "proprietaires"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "proprietaires_email_key" ON "proprietaires"("email");
