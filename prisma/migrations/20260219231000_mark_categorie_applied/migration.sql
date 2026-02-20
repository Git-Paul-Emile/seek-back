-- AlterTable Meuble: add categorie column
ALTER TABLE "Meuble" ADD COLUMN "categorie" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Meuble" ALTER COLUMN "categorie" DROP DEFAULT;

-- Drop old unique index on nom
DROP INDEX IF EXISTS "Meuble_nom_key";

-- Add categorie index and new unique index
CREATE INDEX "Meuble_categorie_idx" ON "Meuble"("categorie");
CREATE UNIQUE INDEX "Meuble_nom_categorie_key" ON "Meuble"("nom", "categorie");

-- AlterTable Equipement: add categorie column
ALTER TABLE "Equipement" ADD COLUMN "categorie" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Equipement" ALTER COLUMN "categorie" DROP DEFAULT;

-- Drop old unique index on nom
DROP INDEX IF EXISTS "Equipement_nom_key";

-- Add categorie index and new unique index
CREATE INDEX "Equipement_categorie_idx" ON "Equipement"("categorie");
CREATE UNIQUE INDEX "Equipement_nom_categorie_key" ON "Equipement"("nom", "categorie");
