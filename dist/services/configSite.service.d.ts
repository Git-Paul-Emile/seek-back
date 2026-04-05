export type ServiceHoursDay = {
    day: string;
    isOpen: boolean;
    open: string;
    close: string;
};
export declare const getConfigSite: () => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    serviceClientHours: import("@prisma/client/runtime/library").JsonValue;
    logoFiligrane: string | null;
} | null>;
export declare const updateConfigSite: (data: {
    contactEmail?: string;
    contactPhone?: string;
    contactAddress?: string;
    serviceClientHours?: ServiceHoursDay[];
}) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    serviceClientHours: import("@prisma/client/runtime/library").JsonValue;
    logoFiligrane: string | null;
}>;
export declare const updateLogoFiligrane: (logoUrl: string | null) => Promise<void>;
/**
 * Récupère le buffer du logo filigrane depuis son URL Cloudinary.
 * Retourne null si aucun logo n'est configuré ou si le téléchargement échoue.
 * Utilisé pour appliquer le filigrane avant l'upload des photos de biens.
 */
export declare const getLogoFiligraneBuffer: () => Promise<Buffer | null>;
//# sourceMappingURL=configSite.service.d.ts.map