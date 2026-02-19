-- CreateTable
CREATE TABLE "StatutBien" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StatutBien_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StatutBien_nom_key" ON "StatutBien"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "StatutBien_slug_key" ON "StatutBien"("slug");

-- CreateIndex
CREATE INDEX "StatutBien_slug_idx" ON "StatutBien"("slug");
