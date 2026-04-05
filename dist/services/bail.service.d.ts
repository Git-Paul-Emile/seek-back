export declare const getBailActif: (bienId: string, proprietaireId: string) => Promise<({
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}) | null>;
export declare const getHistoriqueBails: (bienId: string, proprietaireId: string) => Promise<({
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
})[]>;
export declare const creerBail: (bienId: string, proprietaireId: string, data: {
    locataireId: string;
    typeBail?: string | null;
    dateDebutBail: Date;
    dateFinBail?: Date | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    cautionVersee?: boolean;
    jourLimitePaiement?: number | null;
    delaiGrace?: number;
    frequencePaiement?: string | null;
}) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const mettreEnPreavis: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        titre: string | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const mettreEnPreavisLocataire: (locataireId: string, motif?: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        titre: string | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const mettreEnRenouvellement: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const archiverBail: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const getBailAArchiver: (bienId: string, proprietaireId: string) => Promise<({
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}) | null>;
export declare const terminerBail: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const resilierBail: (bienId: string, bailId: string, proprietaireId: string, motif?: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        titre: string | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const resilierBailLocataire: (locataireId: string, motif?: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        titre: string | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const annulerBail: (bienId: string, bailId: string, proprietaireId: string) => Promise<void>;
export declare const prolongerBail: (bienId: string, bailId: string, proprietaireId: string, duree: 6 | 12) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const getEcheancier: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutPaiement;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    bailId: string;
    bienId: string;
    locataireId: string;
    dateEcheance: Date;
    montant: number;
    datePaiement: Date | null;
    modePaiement: string | null;
    reference: string | null;
    note: string | null;
    sourceEnregistrement: string | null;
    commissionTaux: number | null;
    commissionMontant: number | null;
    montantNet: number | null;
    confirmeParProprietaire: boolean;
    dateConfirmation: Date | null;
    confirmeParLocataire: boolean;
    dateConfirmationLocataire: Date | null;
}[]>;
export declare const payerEcheance: (bienId: string, bailId: string, echeanceId: string, proprietaireId: string, data: {
    datePaiement: Date;
    modePaiement?: string;
    reference?: string;
    note?: string;
}) => Promise<any>;
export declare const payerMoisMultiples: (bienId: string, bailId: string, proprietaireId: string, data: {
    datePaiement: Date;
    nombreMois: number;
    modePaiement?: string;
    reference?: string;
    note?: string;
}) => Promise<{
    paye: number;
    ids: string[];
}>;
export declare const payerEcheancesLocataire: (locataireId: string, data: {
    nombreMois: number;
    datePaiement: Date;
    modePaiement: string;
    reference?: string;
    note?: string;
}) => Promise<{
    paye: number;
    ids: string[];
}>;
/**
 * Le propriétaire confirme qu'il a bien reçu le paiement enregistré par le locataire.
 * Applicable aux échéances EN_ATTENTE_CONFIRMATION (sourceEnregistrement = "LOCATAIRE")
 * ou déjà PAYE par le locataire (rétro-compat).
 */
export declare const confirmerReceptionPaiement: (bienId: string, bailId: string, echeanceId: string, proprietaireId: string) => Promise<any>;
/**
 * Le propriétaire enregistre un paiement reçu en espèces hors plateforme.
 * L'échéance passe en EN_ATTENTE_CONFIRMATION, le locataire reçoit une notification.
 */
export declare const enregistrerPaiementEspeces: (bienId: string, bailId: string, echeanceId: string, proprietaireId: string, data: {
    datePaiement: Date;
    note?: string;
}) => Promise<any>;
/**
 * Le locataire confirme le paiement espèces enregistré par le propriétaire.
 * L'échéance passe en PAYE, quittance générée, notifications envoyées.
 */
export declare const confirmerPaiementEspacesLocataire: (locataireId: string, echeanceId: string) => Promise<any>;
export declare const getCaution: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutDepot;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    bailId: string;
    bienId: string;
    locataireId: string;
    montant: number;
    dateReception: Date;
    dateRestitution: Date | null;
    montantRestitue: number | null;
    motifRetenue: string | null;
} | null>;
export declare const restituerCaution: (bienId: string, bailId: string, proprietaireId: string, data: {
    montantRestitue: number;
    motifRetenue?: string;
    dateRestitution?: Date;
}) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutDepot;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    bailId: string;
    bienId: string;
    locataireId: string;
    montant: number;
    dateReception: Date;
    dateRestitution: Date | null;
    montantRestitue: number | null;
    motifRetenue: string | null;
}>;
export declare const getMobileMoney: (bienId: string, proprietaireId: string) => Promise<{
    pays: string | null;
    providers: {
        nom: string;
        instructions: string;
    }[];
}>;
export declare const getSolde: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    totalEcheances: number;
    nbPaye: number;
    nbEnRetard: number;
    nbEnAttente: number;
    nbAVenir: number;
    montantTotalDu: number;
    montantPaye: number;
    montantEnRetard: number;
    solde: number;
}>;
export declare const prolongerEcheancesAnnee: (bienId: string, bailId: string, proprietaireId: string, anneeActuelle: number) => Promise<{
    generated: number;
    annee: number;
    existed: number;
} | {
    generated: number;
    annee: number;
    existed?: undefined;
}>;
export declare const activerBail: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const getEcheancierForLocataire: (locataireId: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutPaiement;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    bailId: string;
    bienId: string;
    locataireId: string;
    dateEcheance: Date;
    montant: number;
    datePaiement: Date | null;
    modePaiement: string | null;
    reference: string | null;
    note: string | null;
    sourceEnregistrement: string | null;
    commissionTaux: number | null;
    commissionMontant: number | null;
    montantNet: number | null;
    confirmeParProprietaire: boolean;
    dateConfirmation: Date | null;
    confirmeParLocataire: boolean;
    dateConfirmationLocataire: Date | null;
}[]>;
export declare const getContratForLocataire: (locataireId: string) => Promise<{
    bail: {
        id: string;
        typeBail: string | null;
        dateDebutBail: Date;
        dateFinBail: Date | null;
        montantLoyer: number;
        montantCaution: number | null;
        cautionVersee: boolean;
        jourLimitePaiement: number | null;
        frequencePaiement: string | null;
    };
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        titre: string | null;
        region: string | null;
        adresse: string | null;
    };
    contrat: {
        id: string;
        titre: string;
        contenu: string;
        statut: import("../generated/prisma/enums.js").StatutContrat;
        createdAt: Date;
        updatedAt: Date;
        modele: {
            id: string;
            titre: string;
            typeBail: string | null;
        } | null;
    };
} | null>;
export declare const getProprietaireForLocataire: (locataireId: string) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        titre: string | null;
        pays: string | null;
        region: string | null;
        adresse: string | null;
    };
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
} | null>;
export declare const getBiensAvecBailActif: (proprietaireId: string) => Promise<{
    bailId: string;
    bienId: string;
    bienTitre: string | null;
    bienVille: string | null;
    locataireId: string;
    locataireNom: string | null;
    locataireTelephone: string;
    montantLoyer: number;
    statutBail: import("../generated/prisma/enums.js").StatutBail;
}[]>;
export declare const getBiensEnRetard: (proprietaireId: string) => Promise<{
    bailId: string;
    bien: {
        id: string;
        ville: string | null;
        typeTransaction: {
            nom: string;
            slug: string;
        } | null;
        titre: string | null;
        pays: string | null;
        adresse: string | null;
    };
    locataire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
    nbEcheancesEnRetard: number;
    totalRetard: number;
    joursRetardMax: number;
    echeancesEnRetard: {
        statut: import("../generated/prisma/enums.js").StatutPaiement;
        id: string;
        dateEcheance: Date;
        montant: number;
    }[];
}[]>;
//# sourceMappingURL=bail.service.d.ts.map