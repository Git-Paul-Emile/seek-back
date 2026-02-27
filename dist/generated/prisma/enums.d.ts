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
};
export type StatutLocataire = (typeof StatutLocataire)[keyof typeof StatutLocataire];
export declare const StatutBail: {
    readonly ACTIF: "ACTIF";
    readonly TERMINE: "TERMINE";
    readonly RESILIE: "RESILIE";
};
export type StatutBail = (typeof StatutBail)[keyof typeof StatutBail];
export declare const TypePieceIdentite: {
    readonly CNI: "CNI";
    readonly PASSEPORT: "PASSEPORT";
    readonly CARTE_CONSULAIRE: "CARTE_CONSULAIRE";
    readonly AUTRE: "AUTRE";
};
export type TypePieceIdentite = (typeof TypePieceIdentite)[keyof typeof TypePieceIdentite];
//# sourceMappingURL=enums.d.ts.map