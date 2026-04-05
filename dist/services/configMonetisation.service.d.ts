export declare const getConfig: () => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    miseEnAvantActive: boolean;
    commissionActive: boolean;
    tauxCommission: number;
}>;
export declare const updateConfig: (data: {
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: number;
}) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    miseEnAvantActive: boolean;
    commissionActive: boolean;
    tauxCommission: number;
}>;
//# sourceMappingURL=configMonetisation.service.d.ts.map