-- CreateEnum
CREATE TYPE "TypeBien" AS ENUM ('APPARTEMENT', 'VILLA', 'MAISON', 'STUDIO', 'CHAMBRE', 'BUREAU', 'LOCAL_COMMERCIAL', 'TERRAIN', 'IMMEUBLE');

-- CreateEnum
CREATE TYPE "StatutBien" AS ENUM ('DISPONIBLE', 'LOUE', 'VENDU', 'INDISPONIBLE', 'EN_MAINTENANCE');

-- CreateEnum
CREATE TYPE "ModeLocation" AS ENUM ('JOURNALIER', 'MENSUEL', 'ANNUEL', 'SAISONNIER');

-- CreateEnum
CREATE TYPE "CategorieEtablissement" AS ENUM ('SANTE', 'EDUCATION', 'COMMERCE_ALIMENTATION', 'LIEUX_CULTE', 'SECURITE_SERVICES_PUBLICS', 'TRANSPORT', 'LOISIRS_QUALITE_VIE');

-- CreateEnum
CREATE TYPE "TypeEtablissement" AS ENUM ('HOPITAL', 'PHARMACIE', 'ECOLE_MATERNELLE', 'ECOLE_PRIMAIRE', 'COLLEGE', 'LYCEE', 'UNIVERSITE', 'CENTRE_FORMATION', 'SUPERMARCHE', 'BOUTIQUE_QUARTIER', 'MARCHE', 'CENTRE_COMMERCIAL', 'BOULANGERIE', 'MOSQUEE', 'EGLISE', 'COMMISSARIAT_GENDARMERIE', 'CASERNE_POMPIERS', 'MAIRIE', 'ARRET_BUS', 'GARE', 'STATION_BRT', 'ROUTE_PRINCIPALE', 'SALLE_SPORT', 'PARC', 'RESTAURANT', 'PLAGE', 'TERRAIN_SPORT');

-- CreateTable
CREATE TABLE "biens" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "type" "TypeBien" NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "statut" "StatutBien" NOT NULL DEFAULT 'DISPONIBLE',
    "modeLocation" "ModeLocation",
    "description" TEXT,
    "surface" DOUBLE PRECISION,
    "chambres" INTEGER,
    "sallesDeBain" INTEGER,
    "adresse" TEXT NOT NULL,
    "quartier" TEXT,
    "villeId" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "imageCouverture" TEXT,
    "images" TEXT,
    "documents" TEXT,
    "urlVisiteVirtuelle" TEXT,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModification" TIMESTAMP(3) NOT NULL,
    "proprietaireId" TEXT NOT NULL,

    CONSTRAINT "biens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etablissements_proches" (
    "id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "categorie" "CategorieEtablissement" NOT NULL,
    "type" "TypeEtablissement" NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse" TEXT,
    "distanceKm" DOUBLE PRECISION NOT NULL,
    "dureeMinutes" INTEGER,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModification" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "etablissements_proches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "biens_villeId_idx" ON "biens"("villeId");

-- CreateIndex
CREATE INDEX "biens_proprietaireId_idx" ON "biens"("proprietaireId");

-- CreateIndex
CREATE INDEX "biens_type_idx" ON "biens"("type");

-- CreateIndex
CREATE INDEX "biens_statut_idx" ON "biens"("statut");

-- CreateIndex
CREATE INDEX "etablissements_proches_bienId_idx" ON "etablissements_proches"("bienId");

-- CreateIndex
CREATE INDEX "etablissements_proches_categorie_idx" ON "etablissements_proches"("categorie");

-- CreateIndex
CREATE INDEX "etablissements_proches_type_idx" ON "etablissements_proches"("type");

-- CreateIndex
CREATE UNIQUE INDEX "etablissements_proches_bienId_type_nom_key" ON "etablissements_proches"("bienId", "type", "nom");

-- AddForeignKey
ALTER TABLE "biens" ADD CONSTRAINT "biens_villeId_fkey" FOREIGN KEY ("villeId") REFERENCES "villes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biens" ADD CONSTRAINT "biens_proprietaireId_fkey" FOREIGN KEY ("proprietaireId") REFERENCES "proprietaires"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "etablissements_proches" ADD CONSTRAINT "etablissements_proches_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "biens"("id") ON DELETE CASCADE ON UPDATE CASCADE;
