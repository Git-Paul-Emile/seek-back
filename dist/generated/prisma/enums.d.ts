export declare const StatutAnnonce: {
    readonly BROUILLON: "BROUILLON";
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly PUBLIE: "PUBLIE";
    readonly REJETE: "REJETE";
    readonly ANNULE: "ANNULE";
};
export type StatutAnnonce = (typeof StatutAnnonce)[keyof typeof StatutAnnonce];
export declare const StatutLocataire: {
    readonly INVITE: "INVITE";
    readonly ACTIF: "ACTIF";
    readonly INACTIF: "INACTIF";
    readonly ANCIEN: "ANCIEN";
};
export type StatutLocataire = (typeof StatutLocataire)[keyof typeof StatutLocataire];
export declare const StatutBail: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly ACTIF: "ACTIF";
    readonly EN_PREAVIS: "EN_PREAVIS";
    readonly EN_RENOUVELLEMENT: "EN_RENOUVELLEMENT";
    readonly TERMINE: "TERMINE";
    readonly RESILIE: "RESILIE";
    readonly ARCHIVE: "ARCHIVE";
};
export type StatutBail = (typeof StatutBail)[keyof typeof StatutBail];
export declare const TypePieceIdentite: {
    readonly CNI: "CNI";
    readonly PASSEPORT: "PASSEPORT";
    readonly CARTE_CONSULAIRE: "CARTE_CONSULAIRE";
    readonly AUTRE: "AUTRE";
};
export type TypePieceIdentite = (typeof TypePieceIdentite)[keyof typeof TypePieceIdentite];
export declare const StatutVerificationLocataire: {
    readonly NOT_VERIFIED: "NOT_VERIFIED";
    readonly PENDING: "PENDING";
    readonly VERIFIED: "VERIFIED";
    readonly REJECTED: "REJECTED";
};
export type StatutVerificationLocataire = (typeof StatutVerificationLocataire)[keyof typeof StatutVerificationLocataire];
export declare const StatutPaiement: {
    readonly A_VENIR: "A_VENIR";
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly EN_RETARD: "EN_RETARD";
    readonly EN_ATTENTE_CONFIRMATION: "EN_ATTENTE_CONFIRMATION";
    readonly PAYE: "PAYE";
    readonly ANNULE: "ANNULE";
};
export type StatutPaiement = (typeof StatutPaiement)[keyof typeof StatutPaiement];
export declare const StatutNotification: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly ENVOYE: "ENVOYE";
    readonly ECHEC: "ECHEC";
};
export type StatutNotification = (typeof StatutNotification)[keyof typeof StatutNotification];
export declare const TypeNotification: {
    readonly RAPPEL_LOYER: "RAPPEL_LOYER";
    readonly CONFIRMATION_PAIEMENT: "CONFIRMATION_PAIEMENT";
    readonly ALERTE_RETARD: "ALERTE_RETARD";
    readonly INITIATION_PAIEMENT: "INITIATION_PAIEMENT";
    readonly VERIFICATION_LOCATAIRE: "VERIFICATION_LOCATAIRE";
    readonly PAIEMENT_LOCATAIRE: "PAIEMENT_LOCATAIRE";
    readonly PREAVIS: "PREAVIS";
    readonly RESILIATION: "RESILIATION";
    readonly FIN_BAIL: "FIN_BAIL";
    readonly CONTRAT: "CONTRAT";
    readonly RESET_PASSWORD: "RESET_PASSWORD";
    readonly ALERTE: "ALERTE";
    readonly VERIFICATION_TELEPHONE: "VERIFICATION_TELEPHONE";
    readonly PAIEMENT_ESPECES_LOCATAIRE: "PAIEMENT_ESPECES_LOCATAIRE";
    readonly CONFIRMATION_ESPECES_PROPRIETAIRE: "CONFIRMATION_ESPECES_PROPRIETAIRE";
    readonly ETAT_DES_LIEUX_DISPONIBLE: "ETAT_DES_LIEUX_DISPONIBLE";
    readonly ETAT_DES_LIEUX_VALIDE: "ETAT_DES_LIEUX_VALIDE";
    readonly ETAT_DES_LIEUX_MODIFIE: "ETAT_DES_LIEUX_MODIFIE";
    readonly ANNONCE_VALIDEE: "ANNONCE_VALIDEE";
    readonly ANNONCE_REJETEE: "ANNONCE_REJETEE";
};
export type TypeNotification = (typeof TypeNotification)[keyof typeof TypeNotification];
export declare const StatutDepot: {
    readonly RECU: "RECU";
    readonly RESTITUE: "RESTITUE";
    readonly PARTIELLEMENT_RESTITUE: "PARTIELLEMENT_RESTITUE";
    readonly RETENU: "RETENU";
};
export type StatutDepot = (typeof StatutDepot)[keyof typeof StatutDepot];
export declare const StatutContrat: {
    readonly BROUILLON: "BROUILLON";
    readonly ACTIF: "ACTIF";
    readonly ARCHIVE: "ARCHIVE";
};
export type StatutContrat = (typeof StatutContrat)[keyof typeof StatutContrat];
export declare const StatutVerification: {
    readonly NOT_VERIFIED: "NOT_VERIFIED";
    readonly PENDING: "PENDING";
    readonly VERIFIED: "VERIFIED";
    readonly REJECTED: "REJECTED";
};
export type StatutVerification = (typeof StatutVerification)[keyof typeof StatutVerification];
export declare const StatutAlerte: {
    readonly ACTIVE: "ACTIVE";
    readonly DESACTIVE: "DESACTIVE";
};
export type StatutAlerte = (typeof StatutAlerte)[keyof typeof StatutAlerte];
export declare const TypePaiement: {
    readonly PAIEMENT_LOYER: "PAIEMENT_LOYER";
    readonly PAIEMENT_PREMIUM: "PAIEMENT_PREMIUM";
    readonly PAIEMENT_PROMOTION: "PAIEMENT_PROMOTION";
    readonly REMBOURSEMENT: "REMBOURSEMENT";
    readonly RESTITUTION_CAUTION: "RESTITUTION_CAUTION";
    readonly COMMISSION_LOYER: "COMMISSION_LOYER";
    readonly MISE_EN_AVANT: "MISE_EN_AVANT";
};
export type TypePaiement = (typeof TypePaiement)[keyof typeof TypePaiement];
export declare const StatutTransaction: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly CONFIRME: "CONFIRME";
    readonly ECHEC: "ECHEC";
    readonly ANNULE: "ANNULE";
    readonly REMBOURSE: "REMBOURSE";
};
export type StatutTransaction = (typeof StatutTransaction)[keyof typeof StatutTransaction];
export declare const StatutPromotion: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly ACTIVE: "ACTIVE";
    readonly TERMINEE: "TERMINEE";
    readonly ARRETEE: "ARRETEE";
    readonly EXPIREE: "EXPIREE";
};
export type StatutPromotion = (typeof StatutPromotion)[keyof typeof StatutPromotion];
export declare const StatutBailInvitation: {
    readonly PENDING: "PENDING";
    readonly ACCEPTEE: "ACCEPTEE";
    readonly REFUSEE: "REFUSEE";
    readonly EXPIREE: "EXPIREE";
};
export type StatutBailInvitation = (typeof StatutBailInvitation)[keyof typeof StatutBailInvitation];
export declare const MotifSignalement: {
    readonly ARNAQUE: "ARNAQUE";
    readonly INAPPROPRIE: "INAPPROPRIE";
    readonly INDISPONIBLE: "INDISPONIBLE";
    readonly FAUSSES_INFOS: "FAUSSES_INFOS";
    readonly DOUBLON: "DOUBLON";
    readonly AUTRE: "AUTRE";
};
export type MotifSignalement = (typeof MotifSignalement)[keyof typeof MotifSignalement];
export declare const StatutSignalement: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly VALIDE: "VALIDE";
    readonly REJETE: "REJETE";
};
export type StatutSignalement = (typeof StatutSignalement)[keyof typeof StatutSignalement];
export declare const TypeEtatDesLieux: {
    readonly ENTREE: "ENTREE";
    readonly SORTIE: "SORTIE";
};
export type TypeEtatDesLieux = (typeof TypeEtatDesLieux)[keyof typeof TypeEtatDesLieux];
export declare const StatutEtatDesLieux: {
    readonly BROUILLON: "BROUILLON";
    readonly EN_ATTENTE_VALIDATION: "EN_ATTENTE_VALIDATION";
    readonly VALIDE: "VALIDE";
    readonly CONTESTE: "CONTESTE";
    readonly EN_LITIGE: "EN_LITIGE";
};
export type StatutEtatDesLieux = (typeof StatutEtatDesLieux)[keyof typeof StatutEtatDesLieux];
export declare const StatutContestationElement: {
    readonly EN_ATTENTE: "EN_ATTENTE";
    readonly RECTIFIE: "RECTIFIE";
    readonly RESERVE: "RESERVE";
    readonly REFUSE: "REFUSE";
};
export type StatutContestationElement = (typeof StatutContestationElement)[keyof typeof StatutContestationElement];
export declare const EtatElement: {
    readonly NEUF: "NEUF";
    readonly BON: "BON";
    readonly USAGE: "USAGE";
    readonly MAUVAIS: "MAUVAIS";
    readonly DEGRADE: "DEGRADE";
};
export type EtatElement = (typeof EtatElement)[keyof typeof EtatElement];
//# sourceMappingURL=enums.d.ts.map