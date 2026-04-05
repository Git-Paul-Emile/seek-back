export interface SuspensionData {
    motif: string;
    masquerAnnonces?: boolean;
}
export interface ResultatSuspension {
    id: string;
    type: "PROPRIETAIRE" | "LOCATAIRE";
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    annoncesMasquees?: number;
}
export interface ProprietaireListItem {
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    createdAt: Date;
}
export interface LocataireListItem {
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    createdAt: Date;
}
export interface ProprietaireDetails extends ProprietaireListItem {
    updatedAt: Date;
}
export interface LocataireDetails extends LocataireListItem {
    updatedAt: Date;
}
export declare const getProprietaires: (filter?: {
    estSuspendu?: boolean;
    search?: string;
}) => Promise<ProprietaireListItem[]>;
export declare const getProprietaireById: (id: string) => Promise<ProprietaireDetails | null>;
export declare const getLocataires: (filter?: {
    estSuspendu?: boolean;
    search?: string;
}) => Promise<LocataireListItem[]>;
export declare const getLocataireById: (id: string) => Promise<LocataireDetails | null>;
export declare const supprimerProprietaire: (id: string) => Promise<void>;
export declare const supprimerLocataire: (id: string) => Promise<void>;
export interface ProprietaireWithBiens {
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    createdAt: Date;
    updatedAt: Date;
    biens: {
        id: string;
        titre: string | null;
        pays: string | null;
        region: string | null;
        ville: string | null;
        quartier: string | null;
        adresse: string | null;
        prix: number | null;
        surface: number | null;
        nbChambres: number | null;
        nbSdb: number | null;
        nbPieces: number | null;
        typeLogement: string | null;
        typeTransaction: string | null;
        statutAnnonce: string | null;
        statutBien: string | null;
        statut: string | null;
        actif: boolean;
    }[];
}
export interface ProprietaireInfo {
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | null;
}
export interface PaysInfo {
    id: string;
    nom: string;
    code: string;
}
export interface VilleInfo {
    id: string;
    nom: string;
    pays: PaysInfo;
}
export interface QuartierInfo {
    id: string;
    nom: string;
    ville: VilleInfo;
}
export interface TypeLogementInfo {
    id: string;
    nom: string;
}
export interface TypeTransactionInfo {
    id: string;
    nom: string;
}
export interface StatutBienInfo {
    id: string;
    nom: string;
}
export interface ModeleContratInfo {
    id: string;
    titre: string;
}
export interface BienInfo {
    id: string;
    titre: string | null;
    description: string | null;
    pays: string | null;
    region: string | null;
    ville: string | null;
    quartier: string | null;
    adresse: string | null;
    surface: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    nbPieces: number | null;
    etage: number | null;
    actif: boolean;
    quartierRel: QuartierInfo | null;
    typeLogement: TypeLogementInfo | null;
    typeTransaction: TypeTransactionInfo | null;
    statutBien: StatutBienInfo | null;
}
export interface ContratInfo {
    id: string;
    titre: string | null;
    contenu: string | null;
    statut: string;
    createdAt: Date;
    updatedAt: Date;
    modele: ModeleContratInfo | null;
}
export interface BailWithDetails {
    id: string;
    typeBail: string | null;
    statut: string;
    dateDebutBail: Date | null;
    dateFinBail: Date | null;
    montantLoyer: number | null;
    montantCaution: number | null;
    cautionVersee: boolean | null;
    frequencePaiement: string | null;
    createdAt: Date;
    updatedAt: Date;
    bien: BienInfo | null;
    proprietaire: ProprietaireInfo;
    contrat: ContratInfo | null;
}
export interface LocataireWithBails {
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    createdAt: Date;
    updatedAt: Date;
    proprietaire: ProprietaireInfo;
    bails: BailWithDetails[];
}
export declare const getProprietaireWithBiens: (id: string) => Promise<ProprietaireWithBiens | null>;
export declare const getLocataireWithBails: (id: string) => Promise<LocataireWithBails | null>;
export declare const suspendreProprietaire: (proprietaireId: string, data: SuspensionData, adminId: string, masquerAnnonces?: boolean) => Promise<ResultatSuspension>;
export declare const reactiverProprietaire: (proprietaireId: string, afficherAnnonces?: boolean) => Promise<ResultatSuspension>;
export declare const getStatutSuspensionProprietaire: (proprietaireId: string) => Promise<ResultatSuspension | null>;
export declare const suspendreLocataire: (locataireId: string, data: SuspensionData, adminId: string) => Promise<ResultatSuspension>;
export declare const reactiverLocataire: (locataireId: string) => Promise<ResultatSuspension>;
export declare const getStatutSuspensionLocataire: (locataireId: string) => Promise<ResultatSuspension | null>;
export declare const verifierSuspensionProprietaire: (proprietaireId: string) => Promise<{
    suspendu: boolean;
    motif?: string;
}>;
export declare const verifierSuspensionLocataire: (locataireId: string) => Promise<{
    suspendu: boolean;
    motif?: string;
}>;
//# sourceMappingURL=suspension.service.d.ts.map