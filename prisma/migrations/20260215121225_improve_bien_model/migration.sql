/*
  Warnings:

  - You are about to alter the column `prix` on the `biens` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,2)`.

*/
-- AlterTable
ALTER TABLE "biens" ADD COLUMN     "caracteristiques" TEXT,
ADD COLUMN     "dateDisponibilite" TIMESTAMP(3),
ADD COLUMN     "disponibleALocation" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "etage" INTEGER,
ADD COLUMN     "nbPieces" INTEGER,
ADD COLUMN     "numeroPorte" TEXT,
ADD COLUMN     "surfaceHabitable" DOUBLE PRECISION,
ADD COLUMN     "surfaceTerrain" DOUBLE PRECISION,
ALTER COLUMN "prix" SET DATA TYPE DECIMAL(15,2);

-- CreateIndex
CREATE INDEX "biens_dateDisponibilite_idx" ON "biens"("dateDisponibilite");
