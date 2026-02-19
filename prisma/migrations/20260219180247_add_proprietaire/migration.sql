-- CreateTable
CREATE TABLE "Proprietaire" (
    "id" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "sexe" TEXT,
    "telephone" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proprietaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProprietaireRefreshToken" (
    "id" TEXT NOT NULL,
    "proprietaireId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProprietaireRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proprietaire_telephone_key" ON "Proprietaire"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietaire_email_key" ON "Proprietaire"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProprietaireRefreshToken_tokenHash_key" ON "ProprietaireRefreshToken"("tokenHash");

-- CreateIndex
CREATE INDEX "ProprietaireRefreshToken_proprietaireId_idx" ON "ProprietaireRefreshToken"("proprietaireId");

-- CreateIndex
CREATE INDEX "ProprietaireRefreshToken_tokenHash_idx" ON "ProprietaireRefreshToken"("tokenHash");

-- AddForeignKey
ALTER TABLE "ProprietaireRefreshToken" ADD CONSTRAINT "ProprietaireRefreshToken_proprietaireId_fkey" FOREIGN KEY ("proprietaireId") REFERENCES "Proprietaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;
