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
}>;
//# sourceMappingURL=configSite.service.d.ts.map