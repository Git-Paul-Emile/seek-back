-- CreateTable
CREATE TABLE "TypeTransaction" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeTransaction_nom_key" ON "TypeTransaction"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "TypeTransaction_slug_key" ON "TypeTransaction"("slug");

-- CreateIndex
CREATE INDEX "TypeTransaction_slug_idx" ON "TypeTransaction"("slug");
