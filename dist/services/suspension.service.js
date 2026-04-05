import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as SuspensionRepo from "../repositories/suspension.repository.js";
import * as OwnerRepo from "../repositories/owner.repository.js";
import * as LocataireRepo from "../repositories/locataire.repository.js";
// ─── Liste des propriétaires ───────────────────────────────────────────────
export const getProprietaires = async (filter) => {
    return SuspensionRepo.getProprietaires(filter);
};
export const getProprietaireById = async (id) => {
    return SuspensionRepo.getProprietaireById(id);
};
// ─── Liste des locataires ──────────────────────────────────────────────────
export const getLocataires = async (filter) => {
    return SuspensionRepo.getLocataires(filter);
};
export const getLocataireById = async (id) => {
    return SuspensionRepo.getLocataireById(id);
};
// ─── Supprimer un propriétaire ───────────────────────────────────────────────
export const supprimerProprietaire = async (id) => {
    const proprietaire = await OwnerRepo.findById(id);
    if (!proprietaire) {
        throw new AppError("Propriétaire introuvable", StatusCodes.NOT_FOUND);
    }
    // Vérifier si le propriétaire a des biens actifs (annonces en ligne)
    const hasBiensActifs = await SuspensionRepo.hasBiensActifs(id);
    if (hasBiensActifs) {
        throw new AppError("Ce propriétaire a des annonces actives. Désactivez les annonces avant de supprimer ce compte.", StatusCodes.CONFLICT);
    }
    // Vérifier si le propriétaire a des baux actifs (locataires associés)
    const hasBauxActifs = await SuspensionRepo.hasBauxActifs(id);
    if (hasBauxActifs) {
        throw new AppError("Ce propriétaire a des locataires actifs (baux actifs). Utilisez la suspension au lieu de la suppression pour conserver l'historique.", StatusCodes.CONFLICT);
    }
    // Vérifier si le propriétaire a des paiements de mise en avant
    const hasPaiements = await SuspensionRepo.hasPaiementsPromotion(id);
    if (hasPaiements) {
        throw new AppError("Ce propriétaire a des historiques de paiement (mises en avant). Pour des raisons comptables, les données doivent être conservées. Utilisez la suspension au lieu de la suppression.", StatusCodes.CONFLICT);
    }
    await SuspensionRepo.supprimerProprietaire(id);
};
// ─── Supprimer un locataire ─────────────────────────────────────────────────
export const supprimerLocataire = async (id) => {
    const locataire = await LocataireRepo.findById(id);
    if (!locataire) {
        throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
    }
    // Vérifier si le locataire a un bail actif
    const bailActif = locataire.bails?.find((b) => b.statut === "ACTIF");
    if (bailActif) {
        throw new AppError("Ce locataire a un bail actif. Vous ne pouvez pas supprimer ce compte.", StatusCodes.CONFLICT);
    }
    // Vérifier si le locataire est associé à un logement actif
    const logementActif = locataire.bails?.find((b) => b.bien && b.bien.actif === true);
    if (logementActif) {
        throw new AppError("Ce locataire est associé à un logement actif. Vous ne pouvez pas supprimer ce compte.", StatusCodes.CONFLICT);
    }
    await SuspensionRepo.supprimerLocataire(id);
};
// ─── Détails d'un propriétaire avec ses biens ────────────────────────────────
export const getProprietaireWithBiens = async (id) => {
    const proprietaire = await SuspensionRepo.getProprietaireWithBiens(id);
    if (!proprietaire)
        return null;
    const biens = proprietaire.biens.map((bien) => ({
        id: bien.id,
        titre: bien.titre,
        pays: bien.pays,
        region: bien.region,
        ville: bien.ville,
        quartier: bien.quartier,
        adresse: bien.adresse,
        prix: bien.prix,
        surface: bien.surface,
        nbChambres: bien.nbChambres,
        nbSdb: bien.nbSdb,
        nbPieces: bien.nbPieces,
        typeLogement: bien.typeLogement?.nom ?? null,
        typeTransaction: bien.typeTransaction?.nom ?? null,
        statutAnnonce: bien.statutAnnonce ?? null,
        statutBien: bien.statutBien?.nom ?? null,
        // Maintient la compatibilite API historique: "statut" texte affiche dans l'admin
        statut: bien.statutBien?.nom ?? bien.statutAnnonce ?? null,
        actif: bien.actif,
    }));
    return {
        ...proprietaire,
        biens,
    };
};
// ─── Détails d'un locataire avec ses baux ─────────────────────────────────────
export const getLocataireWithBails = async (id) => {
    return SuspensionRepo.getLocataireWithBails(id);
};
// ─── Suspersion Propriétaire ─────────────────────────────────────────────────
export const suspendreProprietaire = async (proprietaireId, data, adminId, masquerAnnonces = true) => {
    // Vérifier que le propriétaire existe
    const proprietaire = await OwnerRepo.findById(proprietaireId);
    if (!proprietaire) {
        throw new AppError("Propriétaire introuvable", StatusCodes.NOT_FOUND);
    }
    // Vérifier si déjà suspendu
    if (proprietaire.estSuspendu) {
        throw new AppError("Ce compte est déjà suspendu", StatusCodes.CONFLICT);
    }
    // Suspendre le propriétaire
    await SuspensionRepo.suspendreProprietaire(proprietaireId, data.motif, adminId);
    // Masquer les annonces si demandé
    let annoncesMasquees = 0;
    if (masquerAnnonces) {
        const result = await SuspensionRepo.masquerAnnoncesProprietaire(proprietaireId);
        annoncesMasquees = result.count;
    }
    return {
        id: proprietaireId,
        type: "PROPRIETAIRE",
        estSuspendu: true,
        motifSuspension: data.motif,
        dateSuspension: new Date(),
        suspenduPar: adminId,
        annoncesMasquees,
    };
};
export const reactiverProprietaire = async (proprietaireId, afficherAnnonces = true) => {
    // Vérifier que le propriétaire existe
    const proprietaire = await OwnerRepo.findById(proprietaireId);
    if (!proprietaire) {
        throw new AppError("Propriétaire introuvable", StatusCodes.NOT_FOUND);
    }
    // Vérifier si pas suspendu
    if (!proprietaire.estSuspendu) {
        throw new AppError("Ce compte n'est pas suspendu", StatusCodes.CONFLICT);
    }
    // Réactiver le propriétaire
    await SuspensionRepo.reactiverProprietaire(proprietaireId);
    // Réafficher les annonces si demandé
    let annoncesMasquees = 0;
    if (afficherAnnonces) {
        const result = await SuspensionRepo.afficherAnnoncesProprietaire(proprietaireId);
        annoncesMasquees = result.count;
    }
    return {
        id: proprietaireId,
        type: "PROPRIETAIRE",
        estSuspendu: false,
        motifSuspension: null,
        dateSuspension: null,
        suspenduPar: null,
        annoncesMasquees,
    };
};
export const getStatutSuspensionProprietaire = async (proprietaireId) => {
    const suspension = await SuspensionRepo.getProprietaireSuspendu(proprietaireId);
    if (!suspension)
        return null;
    return {
        id: proprietaireId,
        type: "PROPRIETAIRE",
        estSuspendu: suspension.estSuspendu,
        motifSuspension: suspension.motifSuspension,
        dateSuspension: suspension.dateSuspension,
        suspenduPar: suspension.suspenduPar,
    };
};
// ─── Suspension Locataire ───────────────────────────────────────────────────
export const suspendreLocataire = async (locataireId, data, adminId) => {
    // Vérifier que le locataire existe
    const locataire = await LocataireRepo.findById(locataireId);
    if (!locataire) {
        throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
    }
    // Vérifier si déjà suspendu
    if (locataire.estSuspendu) {
        throw new AppError("Ce compte est déjà suspendu", StatusCodes.CONFLICT);
    }
    // Suspendre le locataire
    await SuspensionRepo.suspendreLocataire(locataireId, data.motif, adminId);
    // Révoquer les tokens de refresh du locataire
    await LocataireRepo.revokeAllRefreshTokens(locataireId);
    return {
        id: locataireId,
        type: "LOCATAIRE",
        estSuspendu: true,
        motifSuspension: data.motif,
        dateSuspension: new Date(),
        suspenduPar: adminId,
    };
};
export const reactiverLocataire = async (locataireId) => {
    // Vérifier que le locataire existe
    const locataire = await LocataireRepo.findById(locataireId);
    if (!locataire) {
        throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
    }
    // Vérifier si pas suspendu
    if (!locataire.estSuspendu) {
        throw new AppError("Ce compte n'est pas suspendu", StatusCodes.CONFLICT);
    }
    // Réactiver le locataire
    await SuspensionRepo.reactiverLocataire(locataireId);
    return {
        id: locataireId,
        type: "LOCATAIRE",
        estSuspendu: false,
        motifSuspension: null,
        dateSuspension: null,
        suspenduPar: null,
    };
};
export const getStatutSuspensionLocataire = async (locataireId) => {
    const suspension = await SuspensionRepo.getLocataireSuspendu(locataireId);
    if (!suspension)
        return null;
    return {
        id: locataireId,
        type: "LOCATAIRE",
        estSuspendu: suspension.estSuspendu,
        motifSuspension: suspension.motifSuspension,
        dateSuspension: suspension.dateSuspension,
        suspenduPar: suspension.suspenduPar,
    };
};
// ─── Vérification de suspension (pour les middlewares) ────────────────────────
export const verifierSuspensionProprietaire = async (proprietaireId) => {
    const proprietaire = await OwnerRepo.findById(proprietaireId);
    if (!proprietaire) {
        throw new AppError("Propriétaire introuvable", StatusCodes.NOT_FOUND);
    }
    return {
        suspendu: proprietaire.estSuspendu,
        motif: proprietaire.motifSuspension ?? undefined,
    };
};
export const verifierSuspensionLocataire = async (locataireId) => {
    const locataire = await LocataireRepo.findById(locataireId);
    if (!locataire) {
        throw new AppError("Locataire introuvable", StatusCodes.NOT_FOUND);
    }
    return {
        suspendu: locataire.estSuspendu,
        motif: locataire.motifSuspension ?? undefined,
    };
};
//# sourceMappingURL=suspension.service.js.map