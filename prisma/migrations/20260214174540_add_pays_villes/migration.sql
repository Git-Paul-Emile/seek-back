-- CreateTable
CREATE TABLE "pays" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "code" TEXT,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modification" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villes" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "paysId" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modification" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "villes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pays_nom_key" ON "pays"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "pays_code_key" ON "pays"("code");

-- CreateIndex
CREATE INDEX "villes_paysId_idx" ON "villes"("paysId");

-- CreateIndex
CREATE UNIQUE INDEX "villes_nom_paysId_key" ON "villes"("nom", "paysId");

-- AddForeignKey
ALTER TABLE "villes" ADD CONSTRAINT "villes_paysId_fkey" FOREIGN KEY ("paysId") REFERENCES "pays"("id") ON DELETE CASCADE ON UPDATE CASCADE;
