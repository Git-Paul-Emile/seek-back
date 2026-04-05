import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PromotionHistory
 *
 */
export type PromotionHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$PromotionHistoryPayload>;
export type AggregatePromotionHistory = {
    _count: PromotionHistoryCountAggregateOutputType | null;
    _avg: PromotionHistoryAvgAggregateOutputType | null;
    _sum: PromotionHistorySumAggregateOutputType | null;
    _min: PromotionHistoryMinAggregateOutputType | null;
    _max: PromotionHistoryMaxAggregateOutputType | null;
};
export type PromotionHistoryAvgAggregateOutputType = {
    dureeJours: number | null;
    montant: number | null;
    joursRestants: number | null;
};
export type PromotionHistorySumAggregateOutputType = {
    dureeJours: number | null;
    montant: number | null;
    joursRestants: number | null;
};
export type PromotionHistoryMinAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    transactionId: string | null;
    formuleId: string | null;
    formuleNom: string | null;
    dureeJours: number | null;
    montant: number | null;
    dateDebut: Date | null;
    dateFin: Date | null;
    dateFinReelle: Date | null;
    modePaiement: string | null;
    reference: string | null;
    note: string | null;
    confirmeParAdmin: boolean | null;
    dateConfirmation: Date | null;
    statut: $Enums.StatutPromotion | null;
    motifArret: string | null;
    joursRestants: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PromotionHistoryMaxAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    transactionId: string | null;
    formuleId: string | null;
    formuleNom: string | null;
    dureeJours: number | null;
    montant: number | null;
    dateDebut: Date | null;
    dateFin: Date | null;
    dateFinReelle: Date | null;
    modePaiement: string | null;
    reference: string | null;
    note: string | null;
    confirmeParAdmin: boolean | null;
    dateConfirmation: Date | null;
    statut: $Enums.StatutPromotion | null;
    motifArret: string | null;
    joursRestants: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PromotionHistoryCountAggregateOutputType = {
    id: number;
    bienId: number;
    proprietaireId: number;
    transactionId: number;
    formuleId: number;
    formuleNom: number;
    dureeJours: number;
    montant: number;
    dateDebut: number;
    dateFin: number;
    dateFinReelle: number;
    modePaiement: number;
    reference: number;
    note: number;
    confirmeParAdmin: number;
    dateConfirmation: number;
    statut: number;
    motifArret: number;
    joursRestants: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PromotionHistoryAvgAggregateInputType = {
    dureeJours?: true;
    montant?: true;
    joursRestants?: true;
};
export type PromotionHistorySumAggregateInputType = {
    dureeJours?: true;
    montant?: true;
    joursRestants?: true;
};
export type PromotionHistoryMinAggregateInputType = {
    id?: true;
    bienId?: true;
    proprietaireId?: true;
    transactionId?: true;
    formuleId?: true;
    formuleNom?: true;
    dureeJours?: true;
    montant?: true;
    dateDebut?: true;
    dateFin?: true;
    dateFinReelle?: true;
    modePaiement?: true;
    reference?: true;
    note?: true;
    confirmeParAdmin?: true;
    dateConfirmation?: true;
    statut?: true;
    motifArret?: true;
    joursRestants?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PromotionHistoryMaxAggregateInputType = {
    id?: true;
    bienId?: true;
    proprietaireId?: true;
    transactionId?: true;
    formuleId?: true;
    formuleNom?: true;
    dureeJours?: true;
    montant?: true;
    dateDebut?: true;
    dateFin?: true;
    dateFinReelle?: true;
    modePaiement?: true;
    reference?: true;
    note?: true;
    confirmeParAdmin?: true;
    dateConfirmation?: true;
    statut?: true;
    motifArret?: true;
    joursRestants?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PromotionHistoryCountAggregateInputType = {
    id?: true;
    bienId?: true;
    proprietaireId?: true;
    transactionId?: true;
    formuleId?: true;
    formuleNom?: true;
    dureeJours?: true;
    montant?: true;
    dateDebut?: true;
    dateFin?: true;
    dateFinReelle?: true;
    modePaiement?: true;
    reference?: true;
    note?: true;
    confirmeParAdmin?: true;
    dateConfirmation?: true;
    statut?: true;
    motifArret?: true;
    joursRestants?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PromotionHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionHistory to aggregate.
     */
    where?: Prisma.PromotionHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PromotionHistories to fetch.
     */
    orderBy?: Prisma.PromotionHistoryOrderByWithRelationInput | Prisma.PromotionHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PromotionHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PromotionHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PromotionHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PromotionHistories
    **/
    _count?: true | PromotionHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PromotionHistoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PromotionHistorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PromotionHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PromotionHistoryMaxAggregateInputType;
};
export type GetPromotionHistoryAggregateType<T extends PromotionHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregatePromotionHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePromotionHistory[P]> : Prisma.GetScalarType<T[P], AggregatePromotionHistory[P]>;
};
export type PromotionHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromotionHistoryWhereInput;
    orderBy?: Prisma.PromotionHistoryOrderByWithAggregationInput | Prisma.PromotionHistoryOrderByWithAggregationInput[];
    by: Prisma.PromotionHistoryScalarFieldEnum[] | Prisma.PromotionHistoryScalarFieldEnum;
    having?: Prisma.PromotionHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PromotionHistoryCountAggregateInputType | true;
    _avg?: PromotionHistoryAvgAggregateInputType;
    _sum?: PromotionHistorySumAggregateInputType;
    _min?: PromotionHistoryMinAggregateInputType;
    _max?: PromotionHistoryMaxAggregateInputType;
};
export type PromotionHistoryGroupByOutputType = {
    id: string;
    bienId: string;
    proprietaireId: string;
    transactionId: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date;
    dateFin: Date;
    dateFinReelle: Date | null;
    modePaiement: string | null;
    reference: string | null;
    note: string | null;
    confirmeParAdmin: boolean;
    dateConfirmation: Date | null;
    statut: $Enums.StatutPromotion;
    motifArret: string | null;
    joursRestants: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PromotionHistoryCountAggregateOutputType | null;
    _avg: PromotionHistoryAvgAggregateOutputType | null;
    _sum: PromotionHistorySumAggregateOutputType | null;
    _min: PromotionHistoryMinAggregateOutputType | null;
    _max: PromotionHistoryMaxAggregateOutputType | null;
};
type GetPromotionHistoryGroupByPayload<T extends PromotionHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PromotionHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PromotionHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PromotionHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PromotionHistoryGroupByOutputType[P]>;
}>>;
export type PromotionHistoryWhereInput = {
    AND?: Prisma.PromotionHistoryWhereInput | Prisma.PromotionHistoryWhereInput[];
    OR?: Prisma.PromotionHistoryWhereInput[];
    NOT?: Prisma.PromotionHistoryWhereInput | Prisma.PromotionHistoryWhereInput[];
    id?: Prisma.StringFilter<"PromotionHistory"> | string;
    bienId?: Prisma.StringFilter<"PromotionHistory"> | string;
    proprietaireId?: Prisma.StringFilter<"PromotionHistory"> | string;
    transactionId?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    formuleId?: Prisma.StringFilter<"PromotionHistory"> | string;
    formuleNom?: Prisma.StringFilter<"PromotionHistory"> | string;
    dureeJours?: Prisma.IntFilter<"PromotionHistory"> | number;
    montant?: Prisma.FloatFilter<"PromotionHistory"> | number;
    dateDebut?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    dateFin?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    dateFinReelle?: Prisma.DateTimeNullableFilter<"PromotionHistory"> | Date | string | null;
    modePaiement?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    reference?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    note?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    confirmeParAdmin?: Prisma.BoolFilter<"PromotionHistory"> | boolean;
    dateConfirmation?: Prisma.DateTimeNullableFilter<"PromotionHistory"> | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFilter<"PromotionHistory"> | $Enums.StatutPromotion;
    motifArret?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    joursRestants?: Prisma.IntNullableFilter<"PromotionHistory"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
};
export type PromotionHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    formuleId?: Prisma.SortOrder;
    formuleNom?: Prisma.SortOrder;
    dureeJours?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    dateFinReelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    modePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmeParAdmin?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifArret?: Prisma.SortOrderInput | Prisma.SortOrder;
    joursRestants?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
};
export type PromotionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PromotionHistoryWhereInput | Prisma.PromotionHistoryWhereInput[];
    OR?: Prisma.PromotionHistoryWhereInput[];
    NOT?: Prisma.PromotionHistoryWhereInput | Prisma.PromotionHistoryWhereInput[];
    bienId?: Prisma.StringFilter<"PromotionHistory"> | string;
    proprietaireId?: Prisma.StringFilter<"PromotionHistory"> | string;
    transactionId?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    formuleId?: Prisma.StringFilter<"PromotionHistory"> | string;
    formuleNom?: Prisma.StringFilter<"PromotionHistory"> | string;
    dureeJours?: Prisma.IntFilter<"PromotionHistory"> | number;
    montant?: Prisma.FloatFilter<"PromotionHistory"> | number;
    dateDebut?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    dateFin?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    dateFinReelle?: Prisma.DateTimeNullableFilter<"PromotionHistory"> | Date | string | null;
    modePaiement?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    reference?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    note?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    confirmeParAdmin?: Prisma.BoolFilter<"PromotionHistory"> | boolean;
    dateConfirmation?: Prisma.DateTimeNullableFilter<"PromotionHistory"> | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFilter<"PromotionHistory"> | $Enums.StatutPromotion;
    motifArret?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    joursRestants?: Prisma.IntNullableFilter<"PromotionHistory"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
}, "id">;
export type PromotionHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    formuleId?: Prisma.SortOrder;
    formuleNom?: Prisma.SortOrder;
    dureeJours?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    dateFinReelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    modePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmeParAdmin?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifArret?: Prisma.SortOrderInput | Prisma.SortOrder;
    joursRestants?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PromotionHistoryCountOrderByAggregateInput;
    _avg?: Prisma.PromotionHistoryAvgOrderByAggregateInput;
    _max?: Prisma.PromotionHistoryMaxOrderByAggregateInput;
    _min?: Prisma.PromotionHistoryMinOrderByAggregateInput;
    _sum?: Prisma.PromotionHistorySumOrderByAggregateInput;
};
export type PromotionHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.PromotionHistoryScalarWhereWithAggregatesInput | Prisma.PromotionHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.PromotionHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PromotionHistoryScalarWhereWithAggregatesInput | Prisma.PromotionHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PromotionHistory"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"PromotionHistory"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"PromotionHistory"> | string;
    transactionId?: Prisma.StringNullableWithAggregatesFilter<"PromotionHistory"> | string | null;
    formuleId?: Prisma.StringWithAggregatesFilter<"PromotionHistory"> | string;
    formuleNom?: Prisma.StringWithAggregatesFilter<"PromotionHistory"> | string;
    dureeJours?: Prisma.IntWithAggregatesFilter<"PromotionHistory"> | number;
    montant?: Prisma.FloatWithAggregatesFilter<"PromotionHistory"> | number;
    dateDebut?: Prisma.DateTimeWithAggregatesFilter<"PromotionHistory"> | Date | string;
    dateFin?: Prisma.DateTimeWithAggregatesFilter<"PromotionHistory"> | Date | string;
    dateFinReelle?: Prisma.DateTimeNullableWithAggregatesFilter<"PromotionHistory"> | Date | string | null;
    modePaiement?: Prisma.StringNullableWithAggregatesFilter<"PromotionHistory"> | string | null;
    reference?: Prisma.StringNullableWithAggregatesFilter<"PromotionHistory"> | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"PromotionHistory"> | string | null;
    confirmeParAdmin?: Prisma.BoolWithAggregatesFilter<"PromotionHistory"> | boolean;
    dateConfirmation?: Prisma.DateTimeNullableWithAggregatesFilter<"PromotionHistory"> | Date | string | null;
    statut?: Prisma.EnumStatutPromotionWithAggregatesFilter<"PromotionHistory"> | $Enums.StatutPromotion;
    motifArret?: Prisma.StringNullableWithAggregatesFilter<"PromotionHistory"> | string | null;
    joursRestants?: Prisma.IntNullableWithAggregatesFilter<"PromotionHistory"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PromotionHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PromotionHistory"> | Date | string;
};
export type PromotionHistoryCreateInput = {
    id?: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutPromotionHistoriesInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutPromotionHistoriesInput;
};
export type PromotionHistoryUncheckedCreateInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PromotionHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutPromotionHistoriesNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutPromotionHistoriesNestedInput;
};
export type PromotionHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PromotionHistoryCreateManyInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PromotionHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PromotionHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PromotionHistoryListRelationFilter = {
    every?: Prisma.PromotionHistoryWhereInput;
    some?: Prisma.PromotionHistoryWhereInput;
    none?: Prisma.PromotionHistoryWhereInput;
};
export type PromotionHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PromotionHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    formuleId?: Prisma.SortOrder;
    formuleNom?: Prisma.SortOrder;
    dureeJours?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    dateFinReelle?: Prisma.SortOrder;
    modePaiement?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    confirmeParAdmin?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifArret?: Prisma.SortOrder;
    joursRestants?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PromotionHistoryAvgOrderByAggregateInput = {
    dureeJours?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    joursRestants?: Prisma.SortOrder;
};
export type PromotionHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    formuleId?: Prisma.SortOrder;
    formuleNom?: Prisma.SortOrder;
    dureeJours?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    dateFinReelle?: Prisma.SortOrder;
    modePaiement?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    confirmeParAdmin?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifArret?: Prisma.SortOrder;
    joursRestants?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PromotionHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    formuleId?: Prisma.SortOrder;
    formuleNom?: Prisma.SortOrder;
    dureeJours?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateFin?: Prisma.SortOrder;
    dateFinReelle?: Prisma.SortOrder;
    modePaiement?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    confirmeParAdmin?: Prisma.SortOrder;
    dateConfirmation?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifArret?: Prisma.SortOrder;
    joursRestants?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PromotionHistorySumOrderByAggregateInput = {
    dureeJours?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    joursRestants?: Prisma.SortOrder;
};
export type PromotionHistoryCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutBienInput, Prisma.PromotionHistoryUncheckedCreateWithoutBienInput> | Prisma.PromotionHistoryCreateWithoutBienInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutBienInput | Prisma.PromotionHistoryCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.PromotionHistoryCreateManyBienInputEnvelope;
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
};
export type PromotionHistoryUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutBienInput, Prisma.PromotionHistoryUncheckedCreateWithoutBienInput> | Prisma.PromotionHistoryCreateWithoutBienInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutBienInput | Prisma.PromotionHistoryCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.PromotionHistoryCreateManyBienInputEnvelope;
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
};
export type PromotionHistoryUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutBienInput, Prisma.PromotionHistoryUncheckedCreateWithoutBienInput> | Prisma.PromotionHistoryCreateWithoutBienInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutBienInput | Prisma.PromotionHistoryCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutBienInput | Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.PromotionHistoryCreateManyBienInputEnvelope;
    set?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    disconnect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    delete?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    update?: Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutBienInput | Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.PromotionHistoryUpdateManyWithWhereWithoutBienInput | Prisma.PromotionHistoryUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.PromotionHistoryScalarWhereInput | Prisma.PromotionHistoryScalarWhereInput[];
};
export type PromotionHistoryUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutBienInput, Prisma.PromotionHistoryUncheckedCreateWithoutBienInput> | Prisma.PromotionHistoryCreateWithoutBienInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutBienInput | Prisma.PromotionHistoryCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutBienInput | Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.PromotionHistoryCreateManyBienInputEnvelope;
    set?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    disconnect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    delete?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    update?: Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutBienInput | Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.PromotionHistoryUpdateManyWithWhereWithoutBienInput | Prisma.PromotionHistoryUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.PromotionHistoryScalarWhereInput | Prisma.PromotionHistoryScalarWhereInput[];
};
export type PromotionHistoryCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput> | Prisma.PromotionHistoryCreateWithoutProprietaireInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput | Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.PromotionHistoryCreateManyProprietaireInputEnvelope;
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
};
export type PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput> | Prisma.PromotionHistoryCreateWithoutProprietaireInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput | Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.PromotionHistoryCreateManyProprietaireInputEnvelope;
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
};
export type PromotionHistoryUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput> | Prisma.PromotionHistoryCreateWithoutProprietaireInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput | Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.PromotionHistoryCreateManyProprietaireInputEnvelope;
    set?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    disconnect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    delete?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    update?: Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.PromotionHistoryUpdateManyWithWhereWithoutProprietaireInput | Prisma.PromotionHistoryUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.PromotionHistoryScalarWhereInput | Prisma.PromotionHistoryScalarWhereInput[];
};
export type PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput> | Prisma.PromotionHistoryCreateWithoutProprietaireInput[] | Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput | Prisma.PromotionHistoryCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.PromotionHistoryUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.PromotionHistoryCreateManyProprietaireInputEnvelope;
    set?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    disconnect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    delete?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    connect?: Prisma.PromotionHistoryWhereUniqueInput | Prisma.PromotionHistoryWhereUniqueInput[];
    update?: Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.PromotionHistoryUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.PromotionHistoryUpdateManyWithWhereWithoutProprietaireInput | Prisma.PromotionHistoryUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.PromotionHistoryScalarWhereInput | Prisma.PromotionHistoryScalarWhereInput[];
};
export type EnumStatutPromotionFieldUpdateOperationsInput = {
    set?: $Enums.StatutPromotion;
};
export type PromotionHistoryCreateWithoutBienInput = {
    id?: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutPromotionHistoriesInput;
};
export type PromotionHistoryUncheckedCreateWithoutBienInput = {
    id?: string;
    proprietaireId: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PromotionHistoryCreateOrConnectWithoutBienInput = {
    where: Prisma.PromotionHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutBienInput, Prisma.PromotionHistoryUncheckedCreateWithoutBienInput>;
};
export type PromotionHistoryCreateManyBienInputEnvelope = {
    data: Prisma.PromotionHistoryCreateManyBienInput | Prisma.PromotionHistoryCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type PromotionHistoryUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.PromotionHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PromotionHistoryUpdateWithoutBienInput, Prisma.PromotionHistoryUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutBienInput, Prisma.PromotionHistoryUncheckedCreateWithoutBienInput>;
};
export type PromotionHistoryUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.PromotionHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PromotionHistoryUpdateWithoutBienInput, Prisma.PromotionHistoryUncheckedUpdateWithoutBienInput>;
};
export type PromotionHistoryUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.PromotionHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.PromotionHistoryUpdateManyMutationInput, Prisma.PromotionHistoryUncheckedUpdateManyWithoutBienInput>;
};
export type PromotionHistoryScalarWhereInput = {
    AND?: Prisma.PromotionHistoryScalarWhereInput | Prisma.PromotionHistoryScalarWhereInput[];
    OR?: Prisma.PromotionHistoryScalarWhereInput[];
    NOT?: Prisma.PromotionHistoryScalarWhereInput | Prisma.PromotionHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"PromotionHistory"> | string;
    bienId?: Prisma.StringFilter<"PromotionHistory"> | string;
    proprietaireId?: Prisma.StringFilter<"PromotionHistory"> | string;
    transactionId?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    formuleId?: Prisma.StringFilter<"PromotionHistory"> | string;
    formuleNom?: Prisma.StringFilter<"PromotionHistory"> | string;
    dureeJours?: Prisma.IntFilter<"PromotionHistory"> | number;
    montant?: Prisma.FloatFilter<"PromotionHistory"> | number;
    dateDebut?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    dateFin?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    dateFinReelle?: Prisma.DateTimeNullableFilter<"PromotionHistory"> | Date | string | null;
    modePaiement?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    reference?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    note?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    confirmeParAdmin?: Prisma.BoolFilter<"PromotionHistory"> | boolean;
    dateConfirmation?: Prisma.DateTimeNullableFilter<"PromotionHistory"> | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFilter<"PromotionHistory"> | $Enums.StatutPromotion;
    motifArret?: Prisma.StringNullableFilter<"PromotionHistory"> | string | null;
    joursRestants?: Prisma.IntNullableFilter<"PromotionHistory"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PromotionHistory"> | Date | string;
};
export type PromotionHistoryCreateWithoutProprietaireInput = {
    id?: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutPromotionHistoriesInput;
};
export type PromotionHistoryUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    bienId: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PromotionHistoryCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.PromotionHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput>;
};
export type PromotionHistoryCreateManyProprietaireInputEnvelope = {
    data: Prisma.PromotionHistoryCreateManyProprietaireInput | Prisma.PromotionHistoryCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type PromotionHistoryUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.PromotionHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PromotionHistoryUpdateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.PromotionHistoryCreateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedCreateWithoutProprietaireInput>;
};
export type PromotionHistoryUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.PromotionHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PromotionHistoryUpdateWithoutProprietaireInput, Prisma.PromotionHistoryUncheckedUpdateWithoutProprietaireInput>;
};
export type PromotionHistoryUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.PromotionHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.PromotionHistoryUpdateManyMutationInput, Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireInput>;
};
export type PromotionHistoryCreateManyBienInput = {
    id?: string;
    proprietaireId: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PromotionHistoryUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutPromotionHistoriesNestedInput;
};
export type PromotionHistoryUncheckedUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PromotionHistoryUncheckedUpdateManyWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PromotionHistoryCreateManyProprietaireInput = {
    id?: string;
    bienId: string;
    transactionId?: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    montant: number;
    dateDebut: Date | string;
    dateFin: Date | string;
    dateFinReelle?: Date | string | null;
    modePaiement?: string | null;
    reference?: string | null;
    note?: string | null;
    confirmeParAdmin?: boolean;
    dateConfirmation?: Date | string | null;
    statut?: $Enums.StatutPromotion;
    motifArret?: string | null;
    joursRestants?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PromotionHistoryUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutPromotionHistoriesNestedInput;
};
export type PromotionHistoryUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PromotionHistoryUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    formuleNom?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeJours?: Prisma.IntFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinReelle?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    modePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmeParAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateConfirmation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutPromotionFieldUpdateOperationsInput | $Enums.StatutPromotion;
    motifArret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joursRestants?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PromotionHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    transactionId?: boolean;
    formuleId?: boolean;
    formuleNom?: boolean;
    dureeJours?: boolean;
    montant?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    dateFinReelle?: boolean;
    modePaiement?: boolean;
    reference?: boolean;
    note?: boolean;
    confirmeParAdmin?: boolean;
    dateConfirmation?: boolean;
    statut?: boolean;
    motifArret?: boolean;
    joursRestants?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["promotionHistory"]>;
export type PromotionHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    transactionId?: boolean;
    formuleId?: boolean;
    formuleNom?: boolean;
    dureeJours?: boolean;
    montant?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    dateFinReelle?: boolean;
    modePaiement?: boolean;
    reference?: boolean;
    note?: boolean;
    confirmeParAdmin?: boolean;
    dateConfirmation?: boolean;
    statut?: boolean;
    motifArret?: boolean;
    joursRestants?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["promotionHistory"]>;
export type PromotionHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    transactionId?: boolean;
    formuleId?: boolean;
    formuleNom?: boolean;
    dureeJours?: boolean;
    montant?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    dateFinReelle?: boolean;
    modePaiement?: boolean;
    reference?: boolean;
    note?: boolean;
    confirmeParAdmin?: boolean;
    dateConfirmation?: boolean;
    statut?: boolean;
    motifArret?: boolean;
    joursRestants?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["promotionHistory"]>;
export type PromotionHistorySelectScalar = {
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    transactionId?: boolean;
    formuleId?: boolean;
    formuleNom?: boolean;
    dureeJours?: boolean;
    montant?: boolean;
    dateDebut?: boolean;
    dateFin?: boolean;
    dateFinReelle?: boolean;
    modePaiement?: boolean;
    reference?: boolean;
    note?: boolean;
    confirmeParAdmin?: boolean;
    dateConfirmation?: boolean;
    statut?: boolean;
    motifArret?: boolean;
    joursRestants?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PromotionHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bienId" | "proprietaireId" | "transactionId" | "formuleId" | "formuleNom" | "dureeJours" | "montant" | "dateDebut" | "dateFin" | "dateFinReelle" | "modePaiement" | "reference" | "note" | "confirmeParAdmin" | "dateConfirmation" | "statut" | "motifArret" | "joursRestants" | "createdAt" | "updatedAt", ExtArgs["result"]["promotionHistory"]>;
export type PromotionHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type PromotionHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type PromotionHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $PromotionHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PromotionHistory";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bienId: string;
        proprietaireId: string;
        transactionId: string | null;
        formuleId: string;
        formuleNom: string;
        dureeJours: number;
        montant: number;
        dateDebut: Date;
        dateFin: Date;
        dateFinReelle: Date | null;
        modePaiement: string | null;
        reference: string | null;
        note: string | null;
        confirmeParAdmin: boolean;
        dateConfirmation: Date | null;
        statut: $Enums.StatutPromotion;
        motifArret: string | null;
        joursRestants: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["promotionHistory"]>;
    composites: {};
};
export type PromotionHistoryGetPayload<S extends boolean | null | undefined | PromotionHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload, S>;
export type PromotionHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PromotionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PromotionHistoryCountAggregateInputType | true;
};
export interface PromotionHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PromotionHistory'];
        meta: {
            name: 'PromotionHistory';
        };
    };
    /**
     * Find zero or one PromotionHistory that matches the filter.
     * @param {PromotionHistoryFindUniqueArgs} args - Arguments to find a PromotionHistory
     * @example
     * // Get one PromotionHistory
     * const promotionHistory = await prisma.promotionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, PromotionHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PromotionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionHistoryFindUniqueOrThrowArgs} args - Arguments to find a PromotionHistory
     * @example
     * // Get one PromotionHistory
     * const promotionHistory = await prisma.promotionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PromotionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PromotionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionHistoryFindFirstArgs} args - Arguments to find a PromotionHistory
     * @example
     * // Get one PromotionHistory
     * const promotionHistory = await prisma.promotionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, PromotionHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PromotionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionHistoryFindFirstOrThrowArgs} args - Arguments to find a PromotionHistory
     * @example
     * // Get one PromotionHistory
     * const promotionHistory = await prisma.promotionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PromotionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PromotionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromotionHistories
     * const promotionHistories = await prisma.promotionHistory.findMany()
     *
     * // Get first 10 PromotionHistories
     * const promotionHistories = await prisma.promotionHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const promotionHistoryWithIdOnly = await prisma.promotionHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PromotionHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, PromotionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PromotionHistory.
     * @param {PromotionHistoryCreateArgs} args - Arguments to create a PromotionHistory.
     * @example
     * // Create one PromotionHistory
     * const PromotionHistory = await prisma.promotionHistory.create({
     *   data: {
     *     // ... data to create a PromotionHistory
     *   }
     * })
     *
     */
    create<T extends PromotionHistoryCreateArgs>(args: Prisma.SelectSubset<T, PromotionHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PromotionHistories.
     * @param {PromotionHistoryCreateManyArgs} args - Arguments to create many PromotionHistories.
     * @example
     * // Create many PromotionHistories
     * const promotionHistory = await prisma.promotionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PromotionHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, PromotionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PromotionHistories and returns the data saved in the database.
     * @param {PromotionHistoryCreateManyAndReturnArgs} args - Arguments to create many PromotionHistories.
     * @example
     * // Create many PromotionHistories
     * const promotionHistory = await prisma.promotionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PromotionHistories and only return the `id`
     * const promotionHistoryWithIdOnly = await prisma.promotionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PromotionHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PromotionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PromotionHistory.
     * @param {PromotionHistoryDeleteArgs} args - Arguments to delete one PromotionHistory.
     * @example
     * // Delete one PromotionHistory
     * const PromotionHistory = await prisma.promotionHistory.delete({
     *   where: {
     *     // ... filter to delete one PromotionHistory
     *   }
     * })
     *
     */
    delete<T extends PromotionHistoryDeleteArgs>(args: Prisma.SelectSubset<T, PromotionHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PromotionHistory.
     * @param {PromotionHistoryUpdateArgs} args - Arguments to update one PromotionHistory.
     * @example
     * // Update one PromotionHistory
     * const promotionHistory = await prisma.promotionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PromotionHistoryUpdateArgs>(args: Prisma.SelectSubset<T, PromotionHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PromotionHistories.
     * @param {PromotionHistoryDeleteManyArgs} args - Arguments to filter PromotionHistories to delete.
     * @example
     * // Delete a few PromotionHistories
     * const { count } = await prisma.promotionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PromotionHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, PromotionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PromotionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromotionHistories
     * const promotionHistory = await prisma.promotionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PromotionHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, PromotionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PromotionHistories and returns the data updated in the database.
     * @param {PromotionHistoryUpdateManyAndReturnArgs} args - Arguments to update many PromotionHistories.
     * @example
     * // Update many PromotionHistories
     * const promotionHistory = await prisma.promotionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PromotionHistories and only return the `id`
     * const promotionHistoryWithIdOnly = await prisma.promotionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PromotionHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PromotionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PromotionHistory.
     * @param {PromotionHistoryUpsertArgs} args - Arguments to update or create a PromotionHistory.
     * @example
     * // Update or create a PromotionHistory
     * const promotionHistory = await prisma.promotionHistory.upsert({
     *   create: {
     *     // ... data to create a PromotionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromotionHistory we want to update
     *   }
     * })
     */
    upsert<T extends PromotionHistoryUpsertArgs>(args: Prisma.SelectSubset<T, PromotionHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__PromotionHistoryClient<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PromotionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionHistoryCountArgs} args - Arguments to filter PromotionHistories to count.
     * @example
     * // Count the number of PromotionHistories
     * const count = await prisma.promotionHistory.count({
     *   where: {
     *     // ... the filter for the PromotionHistories we want to count
     *   }
     * })
    **/
    count<T extends PromotionHistoryCountArgs>(args?: Prisma.Subset<T, PromotionHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PromotionHistoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PromotionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionHistoryAggregateArgs>(args: Prisma.Subset<T, PromotionHistoryAggregateArgs>): Prisma.PrismaPromise<GetPromotionHistoryAggregateType<T>>;
    /**
     * Group by PromotionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PromotionHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PromotionHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: PromotionHistoryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PromotionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PromotionHistory model
     */
    readonly fields: PromotionHistoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PromotionHistory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PromotionHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proprietaire<T extends Prisma.ProprietaireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProprietaireDefaultArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the PromotionHistory model
 */
export interface PromotionHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly bienId: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly transactionId: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly formuleId: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly formuleNom: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly dureeJours: Prisma.FieldRef<"PromotionHistory", 'Int'>;
    readonly montant: Prisma.FieldRef<"PromotionHistory", 'Float'>;
    readonly dateDebut: Prisma.FieldRef<"PromotionHistory", 'DateTime'>;
    readonly dateFin: Prisma.FieldRef<"PromotionHistory", 'DateTime'>;
    readonly dateFinReelle: Prisma.FieldRef<"PromotionHistory", 'DateTime'>;
    readonly modePaiement: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly reference: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly note: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly confirmeParAdmin: Prisma.FieldRef<"PromotionHistory", 'Boolean'>;
    readonly dateConfirmation: Prisma.FieldRef<"PromotionHistory", 'DateTime'>;
    readonly statut: Prisma.FieldRef<"PromotionHistory", 'StatutPromotion'>;
    readonly motifArret: Prisma.FieldRef<"PromotionHistory", 'String'>;
    readonly joursRestants: Prisma.FieldRef<"PromotionHistory", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PromotionHistory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PromotionHistory", 'DateTime'>;
}
/**
 * PromotionHistory findUnique
 */
export type PromotionHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PromotionHistory to fetch.
     */
    where: Prisma.PromotionHistoryWhereUniqueInput;
};
/**
 * PromotionHistory findUniqueOrThrow
 */
export type PromotionHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PromotionHistory to fetch.
     */
    where: Prisma.PromotionHistoryWhereUniqueInput;
};
/**
 * PromotionHistory findFirst
 */
export type PromotionHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PromotionHistory to fetch.
     */
    where?: Prisma.PromotionHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PromotionHistories to fetch.
     */
    orderBy?: Prisma.PromotionHistoryOrderByWithRelationInput | Prisma.PromotionHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PromotionHistories.
     */
    cursor?: Prisma.PromotionHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PromotionHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PromotionHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PromotionHistories.
     */
    distinct?: Prisma.PromotionHistoryScalarFieldEnum | Prisma.PromotionHistoryScalarFieldEnum[];
};
/**
 * PromotionHistory findFirstOrThrow
 */
export type PromotionHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PromotionHistory to fetch.
     */
    where?: Prisma.PromotionHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PromotionHistories to fetch.
     */
    orderBy?: Prisma.PromotionHistoryOrderByWithRelationInput | Prisma.PromotionHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PromotionHistories.
     */
    cursor?: Prisma.PromotionHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PromotionHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PromotionHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PromotionHistories.
     */
    distinct?: Prisma.PromotionHistoryScalarFieldEnum | Prisma.PromotionHistoryScalarFieldEnum[];
};
/**
 * PromotionHistory findMany
 */
export type PromotionHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PromotionHistories to fetch.
     */
    where?: Prisma.PromotionHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PromotionHistories to fetch.
     */
    orderBy?: Prisma.PromotionHistoryOrderByWithRelationInput | Prisma.PromotionHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PromotionHistories.
     */
    cursor?: Prisma.PromotionHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PromotionHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PromotionHistories.
     */
    skip?: number;
    distinct?: Prisma.PromotionHistoryScalarFieldEnum | Prisma.PromotionHistoryScalarFieldEnum[];
};
/**
 * PromotionHistory create
 */
export type PromotionHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a PromotionHistory.
     */
    data: Prisma.XOR<Prisma.PromotionHistoryCreateInput, Prisma.PromotionHistoryUncheckedCreateInput>;
};
/**
 * PromotionHistory createMany
 */
export type PromotionHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromotionHistories.
     */
    data: Prisma.PromotionHistoryCreateManyInput | Prisma.PromotionHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PromotionHistory createManyAndReturn
 */
export type PromotionHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many PromotionHistories.
     */
    data: Prisma.PromotionHistoryCreateManyInput | Prisma.PromotionHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PromotionHistory update
 */
export type PromotionHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a PromotionHistory.
     */
    data: Prisma.XOR<Prisma.PromotionHistoryUpdateInput, Prisma.PromotionHistoryUncheckedUpdateInput>;
    /**
     * Choose, which PromotionHistory to update.
     */
    where: Prisma.PromotionHistoryWhereUniqueInput;
};
/**
 * PromotionHistory updateMany
 */
export type PromotionHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PromotionHistories.
     */
    data: Prisma.XOR<Prisma.PromotionHistoryUpdateManyMutationInput, Prisma.PromotionHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which PromotionHistories to update
     */
    where?: Prisma.PromotionHistoryWhereInput;
    /**
     * Limit how many PromotionHistories to update.
     */
    limit?: number;
};
/**
 * PromotionHistory updateManyAndReturn
 */
export type PromotionHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * The data used to update PromotionHistories.
     */
    data: Prisma.XOR<Prisma.PromotionHistoryUpdateManyMutationInput, Prisma.PromotionHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which PromotionHistories to update
     */
    where?: Prisma.PromotionHistoryWhereInput;
    /**
     * Limit how many PromotionHistories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PromotionHistory upsert
 */
export type PromotionHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the PromotionHistory to update in case it exists.
     */
    where: Prisma.PromotionHistoryWhereUniqueInput;
    /**
     * In case the PromotionHistory found by the `where` argument doesn't exist, create a new PromotionHistory with this data.
     */
    create: Prisma.XOR<Prisma.PromotionHistoryCreateInput, Prisma.PromotionHistoryUncheckedCreateInput>;
    /**
     * In case the PromotionHistory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PromotionHistoryUpdateInput, Prisma.PromotionHistoryUncheckedUpdateInput>;
};
/**
 * PromotionHistory delete
 */
export type PromotionHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    /**
     * Filter which PromotionHistory to delete.
     */
    where: Prisma.PromotionHistoryWhereUniqueInput;
};
/**
 * PromotionHistory deleteMany
 */
export type PromotionHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionHistories to delete
     */
    where?: Prisma.PromotionHistoryWhereInput;
    /**
     * Limit how many PromotionHistories to delete.
     */
    limit?: number;
};
/**
 * PromotionHistory without action
 */
export type PromotionHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PromotionHistory.d.ts.map