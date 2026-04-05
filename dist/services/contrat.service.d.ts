interface ContratData {
    bail: {
        typeBail?: string | null;
        dateDebutBail: Date;
        dateFinBail?: Date | null;
        montantLoyer: number;
        montantCaution?: number | null;
        frequencePaiement?: string | null;
        jourLimitePaiement?: number | null;
    };
    locataire: {
        nom: string;
        prenom: string;
        situationProfessionnelle?: string | null;
    };
    proprietaire: {
        nom: string;
        prenom: string;
    };
    bien: {
        titre?: string | null;
        region?: string | null;
        ville?: string | null;
        quartier?: string | null;
        adresse?: string | null;
    };
}
export declare const substituerVariables: (contenu: string, data: ContratData) => string;
export declare const getContrat: (bienId: string, bailId: string, proprietaireId: string) => Promise<({
    modele: {
        id: string;
        titre: string;
        typeBail: string | null;
    } | null;
} & {
    statut: import("../generated/prisma/enums.js").StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}) | null>;
/** Génère automatiquement un contrat en sélectionnant le modèle selon le type de bail */
export declare const genererContrat: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    modele: {
        id: string;
        titre: string;
        typeBail: string | null;
    } | null;
} & {
    statut: import("../generated/prisma/enums.js").StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}>;
export declare const updateContrat: (bienId: string, bailId: string, contratId: string, proprietaireId: string, contenu: string) => Promise<{
    modele: {
        id: string;
        titre: string;
        typeBail: string | null;
    } | null;
} & {
    statut: import("../generated/prisma/enums.js").StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}>;
export declare const activerContrat: (bienId: string, bailId: string, contratId: string, proprietaireId: string) => Promise<{
    contrat: {
        modele: {
            id: string;
            titre: string;
            typeBail: string | null;
        } | null;
    } & {
        statut: import("../generated/prisma/enums.js").StatutContrat;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        titre: string;
        contenu: string;
        bailId: string;
        modeleId: string | null;
    };
    lienActivation: string | null;
}>;
/** Active le contrat ET notifie le locataire (email / whatsapp / sms).
 *  L'envoi est best-effort : un échec de notification ne bloque pas l'activation. */
export declare const envoyerContrat: (bienId: string, bailId: string, contratId: string, proprietaireId: string) => Promise<{
    sent: boolean;
    email: string | null;
    lienActivation: string | null;
}>;
export {};
//# sourceMappingURL=contrat.service.d.ts.map