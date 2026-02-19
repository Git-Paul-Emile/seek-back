-- CreateTable
CREATE TABLE "TypeLogement" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeLogement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeLogement_nom_key" ON "TypeLogement"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "TypeLogement_slug_key" ON "TypeLogement"("slug");

-- CreateIndex
CREATE INDEX "TypeLogement_slug_idx" ON "TypeLogement"("slug");
