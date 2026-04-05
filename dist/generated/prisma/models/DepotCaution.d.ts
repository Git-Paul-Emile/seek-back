import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DepotCaution
 *
 */
export type DepotCautionModel = runtime.Types.Result.DefaultSelection<Prisma.$DepotCautionPayload>;
export type AggregateDepotCaution = {
    _count: DepotCautionCountAggregateOutputType | null;
    _avg: DepotCautionAvgAggregateOutputType | null;
    _sum: DepotCautionSumAggregateOutputType | null;
    _min: DepotCautionMinAggregateOutputType | null;
    _max: DepotCautionMaxAggregateOutputType | null;
};
export type DepotCautionAvgAggregateOutputType = {
    montant: number | null;
    montantRestitue: number | null;
};
export type DepotCautionSumAggregateOutputType = {
    montant: number | null;
    montantRestitue: number | null;
};
export type DepotCautionMinAggregateOutputType = {
    id: string | null;
    bailId: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    locataireId: string | null;
    montant: number | null;
    statut: $Enums.StatutDepot | null;
    dateReception: Date | null;
    dateRestitution: Date | null;
    montantRestitue: number | null;
    motifRetenue: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DepotCautionMaxAggregateOutputType = {
    id: string | null;
    bailId: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    locataireId: string | null;
    montant: number | null;
    statut: $Enums.StatutDepot | null;
    dateReception: Date | null;
    dateRestitution: Date | null;
    montantRestitue: number | null;
    motifRetenue: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DepotCautionCountAggregateOutputType = {
    id: number;
    bailId: number;
    bienId: number;
    proprietaireId: number;
    locataireId: number;
    montant: number;
    statut: number;
    dateReception: number;
    dateRestitution: number;
    montantRestitue: number;
    motifRetenue: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DepotCautionAvgAggregateInputType = {
    montant?: true;
    montantRestitue?: true;
};
export type DepotCautionSumAggregateInputType = {
    montant?: true;
    montantRestitue?: true;
};
export type DepotCautionMinAggregateInputType = {
    id?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    montant?: true;
    statut?: true;
    dateReception?: true;
    dateRestitution?: true;
    montantRestitue?: true;
    motifRetenue?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DepotCautionMaxAggregateInputType = {
    id?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    montant?: true;
    statut?: true;
    dateReception?: true;
    dateRestitution?: true;
    montantRestitue?: true;
    motifRetenue?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DepotCautionCountAggregateInputType = {
    id?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    montant?: true;
    statut?: true;
    dateReception?: true;
    dateRestitution?: true;
    montantRestitue?: true;
    motifRetenue?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DepotCautionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DepotCaution to aggregate.
     */
    where?: Prisma.DepotCautionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DepotCautions to fetch.
     */
    orderBy?: Prisma.DepotCautionOrderByWithRelationInput | Prisma.DepotCautionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DepotCautionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DepotCautions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DepotCautions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DepotCautions
    **/
    _count?: true | DepotCautionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DepotCautionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DepotCautionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DepotCautionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DepotCautionMaxAggregateInputType;
};
export type GetDepotCautionAggregateType<T extends DepotCautionAggregateArgs> = {
    [P in keyof T & keyof AggregateDepotCaution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepotCaution[P]> : Prisma.GetScalarType<T[P], AggregateDepotCaution[P]>;
};
export type DepotCautionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepotCautionWhereInput;
    orderBy?: Prisma.DepotCautionOrderByWithAggregationInput | Prisma.DepotCautionOrderByWithAggregationInput[];
    by: Prisma.DepotCautionScalarFieldEnum[] | Prisma.DepotCautionScalarFieldEnum;
    having?: Prisma.DepotCautionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepotCautionCountAggregateInputType | true;
    _avg?: DepotCautionAvgAggregateInputType;
    _sum?: DepotCautionSumAggregateInputType;
    _min?: DepotCautionMinAggregateInputType;
    _max?: DepotCautionMaxAggregateInputType;
};
export type DepotCautionGroupByOutputType = {
    id: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    montant: number;
    statut: $Enums.StatutDepot;
    dateReception: Date;
    dateRestitution: Date | null;
    montantRestitue: number | null;
    motifRetenue: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DepotCautionCountAggregateOutputType | null;
    _avg: DepotCautionAvgAggregateOutputType | null;
    _sum: DepotCautionSumAggregateOutputType | null;
    _min: DepotCautionMinAggregateOutputType | null;
    _max: DepotCautionMaxAggregateOutputType | null;
};
type GetDepotCautionGroupByPayload<T extends DepotCautionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepotCautionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepotCautionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepotCautionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepotCautionGroupByOutputType[P]>;
}>>;
export type DepotCautionWhereInput = {
    AND?: Prisma.DepotCautionWhereInput | Prisma.DepotCautionWhereInput[];
    OR?: Prisma.DepotCautionWhereInput[];
    NOT?: Prisma.DepotCautionWhereInput | Prisma.DepotCautionWhereInput[];
    id?: Prisma.StringFilter<"DepotCaution"> | string;
    bailId?: Prisma.StringFilter<"DepotCaution"> | string;
    bienId?: Prisma.StringFilter<"DepotCaution"> | string;
    proprietaireId?: Prisma.StringFilter<"DepotCaution"> | string;
    locataireId?: Prisma.StringFilter<"DepotCaution"> | string;
    montant?: Prisma.IntFilter<"DepotCaution"> | number;
    statut?: Prisma.EnumStatutDepotFilter<"DepotCaution"> | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFilter<"DepotCaution"> | Date | string;
    dateRestitution?: Prisma.DateTimeNullableFilter<"DepotCaution"> | Date | string | null;
    montantRestitue?: Prisma.IntNullableFilter<"DepotCaution"> | number | null;
    motifRetenue?: Prisma.StringNullableFilter<"DepotCaution"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DepotCaution"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DepotCaution"> | Date | string;
    bail?: Prisma.XOR<Prisma.BailLocationScalarRelationFilter, Prisma.BailLocationWhereInput>;
};
export type DepotCautionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateReception?: Prisma.SortOrder;
    dateRestitution?: Prisma.SortOrderInput | Prisma.SortOrder;
    montantRestitue?: Prisma.SortOrderInput | Prisma.SortOrder;
    motifRetenue?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bail?: Prisma.BailLocationOrderByWithRelationInput;
};
export type DepotCautionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bailId?: string;
    AND?: Prisma.DepotCautionWhereInput | Prisma.DepotCautionWhereInput[];
    OR?: Prisma.DepotCautionWhereInput[];
    NOT?: Prisma.DepotCautionWhereInput | Prisma.DepotCautionWhereInput[];
    bienId?: Prisma.StringFilter<"DepotCaution"> | string;
    proprietaireId?: Prisma.StringFilter<"DepotCaution"> | string;
    locataireId?: Prisma.StringFilter<"DepotCaution"> | string;
    montant?: Prisma.IntFilter<"DepotCaution"> | number;
    statut?: Prisma.EnumStatutDepotFilter<"DepotCaution"> | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFilter<"DepotCaution"> | Date | string;
    dateRestitution?: Prisma.DateTimeNullableFilter<"DepotCaution"> | Date | string | null;
    montantRestitue?: Prisma.IntNullableFilter<"DepotCaution"> | number | null;
    motifRetenue?: Prisma.StringNullableFilter<"DepotCaution"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DepotCaution"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DepotCaution"> | Date | string;
    bail?: Prisma.XOR<Prisma.BailLocationScalarRelationFilter, Prisma.BailLocationWhereInput>;
}, "id" | "bailId">;
export type DepotCautionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateReception?: Prisma.SortOrder;
    dateRestitution?: Prisma.SortOrderInput | Prisma.SortOrder;
    montantRestitue?: Prisma.SortOrderInput | Prisma.SortOrder;
    motifRetenue?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DepotCautionCountOrderByAggregateInput;
    _avg?: Prisma.DepotCautionAvgOrderByAggregateInput;
    _max?: Prisma.DepotCautionMaxOrderByAggregateInput;
    _min?: Prisma.DepotCautionMinOrderByAggregateInput;
    _sum?: Prisma.DepotCautionSumOrderByAggregateInput;
};
export type DepotCautionScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepotCautionScalarWhereWithAggregatesInput | Prisma.DepotCautionScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepotCautionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepotCautionScalarWhereWithAggregatesInput | Prisma.DepotCautionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DepotCaution"> | string;
    bailId?: Prisma.StringWithAggregatesFilter<"DepotCaution"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"DepotCaution"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"DepotCaution"> | string;
    locataireId?: Prisma.StringWithAggregatesFilter<"DepotCaution"> | string;
    montant?: Prisma.IntWithAggregatesFilter<"DepotCaution"> | number;
    statut?: Prisma.EnumStatutDepotWithAggregatesFilter<"DepotCaution"> | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeWithAggregatesFilter<"DepotCaution"> | Date | string;
    dateRestitution?: Prisma.DateTimeNullableWithAggregatesFilter<"DepotCaution"> | Date | string | null;
    montantRestitue?: Prisma.IntNullableWithAggregatesFilter<"DepotCaution"> | number | null;
    motifRetenue?: Prisma.StringNullableWithAggregatesFilter<"DepotCaution"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DepotCaution"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DepotCaution"> | Date | string;
};
export type DepotCautionCreateInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    montant: number;
    statut?: $Enums.StatutDepot;
    dateReception?: Date | string;
    dateRestitution?: Date | string | null;
    montantRestitue?: number | null;
    motifRetenue?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutDepotCautionInput;
};
export type DepotCautionUncheckedCreateInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    montant: number;
    statut?: $Enums.StatutDepot;
    dateReception?: Date | string;
    dateRestitution?: Date | string | null;
    montantRestitue?: number | null;
    motifRetenue?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DepotCautionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutDepotFieldUpdateOperationsInput | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateRestitution?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montantRestitue?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motifRetenue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutDepotCautionNestedInput;
};
export type DepotCautionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutDepotFieldUpdateOperationsInput | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateRestitution?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montantRestitue?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motifRetenue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepotCautionCreateManyInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    montant: number;
    statut?: $Enums.StatutDepot;
    dateReception?: Date | string;
    dateRestitution?: Date | string | null;
    montantRestitue?: number | null;
    motifRetenue?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DepotCautionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutDepotFieldUpdateOperationsInput | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateRestitution?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montantRestitue?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motifRetenue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepotCautionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutDepotFieldUpdateOperationsInput | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateRestitution?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montantRestitue?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motifRetenue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepotCautionNullableScalarRelationFilter = {
    is?: Prisma.DepotCautionWhereInput | null;
    isNot?: Prisma.DepotCautionWhereInput | null;
};
export type DepotCautionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateReception?: Prisma.SortOrder;
    dateRestitution?: Prisma.SortOrder;
    montantRestitue?: Prisma.SortOrder;
    motifRetenue?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DepotCautionAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    montantRestitue?: Prisma.SortOrder;
};
export type DepotCautionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateReception?: Prisma.SortOrder;
    dateRestitution?: Prisma.SortOrder;
    montantRestitue?: Prisma.SortOrder;
    motifRetenue?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DepotCautionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateReception?: Prisma.SortOrder;
    dateRestitution?: Prisma.SortOrder;
    montantRestitue?: Prisma.SortOrder;
    motifRetenue?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DepotCautionSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    montantRestitue?: Prisma.SortOrder;
};
export type DepotCautionCreateNestedOneWithoutBailInput = {
    create?: Prisma.XOR<Prisma.DepotCautionCreateWithoutBailInput, Prisma.DepotCautionUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.DepotCautionCreateOrConnectWithoutBailInput;
    connect?: Prisma.DepotCautionWhereUniqueInput;
};
export type DepotCautionUncheckedCreateNestedOneWithoutBailInput = {
    create?: Prisma.XOR<Prisma.DepotCautionCreateWithoutBailInput, Prisma.DepotCautionUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.DepotCautionCreateOrConnectWithoutBailInput;
    connect?: Prisma.DepotCautionWhereUniqueInput;
};
export type DepotCautionUpdateOneWithoutBailNestedInput = {
    create?: Prisma.XOR<Prisma.DepotCautionCreateWithoutBailInput, Prisma.DepotCautionUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.DepotCautionCreateOrConnectWithoutBailInput;
    upsert?: Prisma.DepotCautionUpsertWithoutBailInput;
    disconnect?: Prisma.DepotCautionWhereInput | boolean;
    delete?: Prisma.DepotCautionWhereInput | boolean;
    connect?: Prisma.DepotCautionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepotCautionUpdateToOneWithWhereWithoutBailInput, Prisma.DepotCautionUpdateWithoutBailInput>, Prisma.DepotCautionUncheckedUpdateWithoutBailInput>;
};
export type DepotCautionUncheckedUpdateOneWithoutBailNestedInput = {
    create?: Prisma.XOR<Prisma.DepotCautionCreateWithoutBailInput, Prisma.DepotCautionUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.DepotCautionCreateOrConnectWithoutBailInput;
    upsert?: Prisma.DepotCautionUpsertWithoutBailInput;
    disconnect?: Prisma.DepotCautionWhereInput | boolean;
    delete?: Prisma.DepotCautionWhereInput | boolean;
    connect?: Prisma.DepotCautionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepotCautionUpdateToOneWithWhereWithoutBailInput, Prisma.DepotCautionUpdateWithoutBailInput>, Prisma.DepotCautionUncheckedUpdateWithoutBailInput>;
};
export type EnumStatutDepotFieldUpdateOperationsInput = {
    set?: $Enums.StatutDepot;
};
export type DepotCautionCreateWithoutBailInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    montant: number;
    statut?: $Enums.StatutDepot;
    dateReception?: Date | string;
    dateRestitution?: Date | string | null;
    montantRestitue?: number | null;
    motifRetenue?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DepotCautionUncheckedCreateWithoutBailInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    montant: number;
    statut?: $Enums.StatutDepot;
    dateReception?: Date | string;
    dateRestitution?: Date | string | null;
    montantRestitue?: number | null;
    motifRetenue?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DepotCautionCreateOrConnectWithoutBailInput = {
    where: Prisma.DepotCautionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepotCautionCreateWithoutBailInput, Prisma.DepotCautionUncheckedCreateWithoutBailInput>;
};
export type DepotCautionUpsertWithoutBailInput = {
    update: Prisma.XOR<Prisma.DepotCautionUpdateWithoutBailInput, Prisma.DepotCautionUncheckedUpdateWithoutBailInput>;
    create: Prisma.XOR<Prisma.DepotCautionCreateWithoutBailInput, Prisma.DepotCautionUncheckedCreateWithoutBailInput>;
    where?: Prisma.DepotCautionWhereInput;
};
export type DepotCautionUpdateToOneWithWhereWithoutBailInput = {
    where?: Prisma.DepotCautionWhereInput;
    data: Prisma.XOR<Prisma.DepotCautionUpdateWithoutBailInput, Prisma.DepotCautionUncheckedUpdateWithoutBailInput>;
};
export type DepotCautionUpdateWithoutBailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutDepotFieldUpdateOperationsInput | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateRestitution?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montantRestitue?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motifRetenue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepotCautionUncheckedUpdateWithoutBailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutDepotFieldUpdateOperationsInput | $Enums.StatutDepot;
    dateReception?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateRestitution?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montantRestitue?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motifRetenue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepotCautionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateReception?: boolean;
    dateRestitution?: boolean;
    montantRestitue?: boolean;
    motifRetenue?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depotCaution"]>;
export type DepotCautionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateReception?: boolean;
    dateRestitution?: boolean;
    montantRestitue?: boolean;
    motifRetenue?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depotCaution"]>;
export type DepotCautionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateReception?: boolean;
    dateRestitution?: boolean;
    montantRestitue?: boolean;
    motifRetenue?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["depotCaution"]>;
export type DepotCautionSelectScalar = {
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    montant?: boolean;
    statut?: boolean;
    dateReception?: boolean;
    dateRestitution?: boolean;
    montantRestitue?: boolean;
    motifRetenue?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DepotCautionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bailId" | "bienId" | "proprietaireId" | "locataireId" | "montant" | "statut" | "dateReception" | "dateRestitution" | "montantRestitue" | "motifRetenue" | "createdAt" | "updatedAt", ExtArgs["result"]["depotCaution"]>;
export type DepotCautionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
};
export type DepotCautionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
};
export type DepotCautionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
};
export type $DepotCautionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DepotCaution";
    objects: {
        bail: Prisma.$BailLocationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bailId: string;
        bienId: string;
        proprietaireId: string;
        locataireId: string;
        montant: number;
        statut: $Enums.StatutDepot;
        dateReception: Date;
        dateRestitution: Date | null;
        montantRestitue: number | null;
        motifRetenue: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["depotCaution"]>;
    composites: {};
};
export type DepotCautionGetPayload<S extends boolean | null | undefined | DepotCautionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload, S>;
export type DepotCautionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepotCautionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepotCautionCountAggregateInputType | true;
};
export interface DepotCautionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DepotCaution'];
        meta: {
            name: 'DepotCaution';
        };
    };
    /**
     * Find zero or one DepotCaution that matches the filter.
     * @param {DepotCautionFindUniqueArgs} args - Arguments to find a DepotCaution
     * @example
     * // Get one DepotCaution
     * const depotCaution = await prisma.depotCaution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepotCautionFindUniqueArgs>(args: Prisma.SelectSubset<T, DepotCautionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DepotCaution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepotCautionFindUniqueOrThrowArgs} args - Arguments to find a DepotCaution
     * @example
     * // Get one DepotCaution
     * const depotCaution = await prisma.depotCaution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepotCautionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepotCautionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DepotCaution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCautionFindFirstArgs} args - Arguments to find a DepotCaution
     * @example
     * // Get one DepotCaution
     * const depotCaution = await prisma.depotCaution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepotCautionFindFirstArgs>(args?: Prisma.SelectSubset<T, DepotCautionFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DepotCaution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCautionFindFirstOrThrowArgs} args - Arguments to find a DepotCaution
     * @example
     * // Get one DepotCaution
     * const depotCaution = await prisma.depotCaution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepotCautionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepotCautionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DepotCautions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCautionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepotCautions
     * const depotCautions = await prisma.depotCaution.findMany()
     *
     * // Get first 10 DepotCautions
     * const depotCautions = await prisma.depotCaution.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const depotCautionWithIdOnly = await prisma.depotCaution.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DepotCautionFindManyArgs>(args?: Prisma.SelectSubset<T, DepotCautionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DepotCaution.
     * @param {DepotCautionCreateArgs} args - Arguments to create a DepotCaution.
     * @example
     * // Create one DepotCaution
     * const DepotCaution = await prisma.depotCaution.create({
     *   data: {
     *     // ... data to create a DepotCaution
     *   }
     * })
     *
     */
    create<T extends DepotCautionCreateArgs>(args: Prisma.SelectSubset<T, DepotCautionCreateArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DepotCautions.
     * @param {DepotCautionCreateManyArgs} args - Arguments to create many DepotCautions.
     * @example
     * // Create many DepotCautions
     * const depotCaution = await prisma.depotCaution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DepotCautionCreateManyArgs>(args?: Prisma.SelectSubset<T, DepotCautionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DepotCautions and returns the data saved in the database.
     * @param {DepotCautionCreateManyAndReturnArgs} args - Arguments to create many DepotCautions.
     * @example
     * // Create many DepotCautions
     * const depotCaution = await prisma.depotCaution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DepotCautions and only return the `id`
     * const depotCautionWithIdOnly = await prisma.depotCaution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DepotCautionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepotCautionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DepotCaution.
     * @param {DepotCautionDeleteArgs} args - Arguments to delete one DepotCaution.
     * @example
     * // Delete one DepotCaution
     * const DepotCaution = await prisma.depotCaution.delete({
     *   where: {
     *     // ... filter to delete one DepotCaution
     *   }
     * })
     *
     */
    delete<T extends DepotCautionDeleteArgs>(args: Prisma.SelectSubset<T, DepotCautionDeleteArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DepotCaution.
     * @param {DepotCautionUpdateArgs} args - Arguments to update one DepotCaution.
     * @example
     * // Update one DepotCaution
     * const depotCaution = await prisma.depotCaution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DepotCautionUpdateArgs>(args: Prisma.SelectSubset<T, DepotCautionUpdateArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DepotCautions.
     * @param {DepotCautionDeleteManyArgs} args - Arguments to filter DepotCautions to delete.
     * @example
     * // Delete a few DepotCautions
     * const { count } = await prisma.depotCaution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DepotCautionDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepotCautionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DepotCautions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCautionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepotCautions
     * const depotCaution = await prisma.depotCaution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DepotCautionUpdateManyArgs>(args: Prisma.SelectSubset<T, DepotCautionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DepotCautions and returns the data updated in the database.
     * @param {DepotCautionUpdateManyAndReturnArgs} args - Arguments to update many DepotCautions.
     * @example
     * // Update many DepotCautions
     * const depotCaution = await prisma.depotCaution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DepotCautions and only return the `id`
     * const depotCautionWithIdOnly = await prisma.depotCaution.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepotCautionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepotCautionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DepotCaution.
     * @param {DepotCautionUpsertArgs} args - Arguments to update or create a DepotCaution.
     * @example
     * // Update or create a DepotCaution
     * const depotCaution = await prisma.depotCaution.upsert({
     *   create: {
     *     // ... data to create a DepotCaution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepotCaution we want to update
     *   }
     * })
     */
    upsert<T extends DepotCautionUpsertArgs>(args: Prisma.SelectSubset<T, DepotCautionUpsertArgs<ExtArgs>>): Prisma.Prisma__DepotCautionClient<runtime.Types.Result.GetResult<Prisma.$DepotCautionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DepotCautions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCautionCountArgs} args - Arguments to filter DepotCautions to count.
     * @example
     * // Count the number of DepotCautions
     * const count = await prisma.depotCaution.count({
     *   where: {
     *     // ... the filter for the DepotCautions we want to count
     *   }
     * })
    **/
    count<T extends DepotCautionCountArgs>(args?: Prisma.Subset<T, DepotCautionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepotCautionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DepotCaution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCautionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepotCautionAggregateArgs>(args: Prisma.Subset<T, DepotCautionAggregateArgs>): Prisma.PrismaPromise<GetDepotCautionAggregateType<T>>;
    /**
     * Group by DepotCaution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCautionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DepotCautionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepotCautionGroupByArgs['orderBy'];
    } : {
        orderBy?: DepotCautionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepotCautionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepotCautionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DepotCaution model
     */
    readonly fields: DepotCautionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DepotCaution.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DepotCautionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bail<T extends Prisma.BailLocationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BailLocationDefaultArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the DepotCaution model
 */
export interface DepotCautionFieldRefs {
    readonly id: Prisma.FieldRef<"DepotCaution", 'String'>;
    readonly bailId: Prisma.FieldRef<"DepotCaution", 'String'>;
    readonly bienId: Prisma.FieldRef<"DepotCaution", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"DepotCaution", 'String'>;
    readonly locataireId: Prisma.FieldRef<"DepotCaution", 'String'>;
    readonly montant: Prisma.FieldRef<"DepotCaution", 'Int'>;
    readonly statut: Prisma.FieldRef<"DepotCaution", 'StatutDepot'>;
    readonly dateReception: Prisma.FieldRef<"DepotCaution", 'DateTime'>;
    readonly dateRestitution: Prisma.FieldRef<"DepotCaution", 'DateTime'>;
    readonly montantRestitue: Prisma.FieldRef<"DepotCaution", 'Int'>;
    readonly motifRetenue: Prisma.FieldRef<"DepotCaution", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DepotCaution", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DepotCaution", 'DateTime'>;
}
/**
 * DepotCaution findUnique
 */
export type DepotCautionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * Filter, which DepotCaution to fetch.
     */
    where: Prisma.DepotCautionWhereUniqueInput;
};
/**
 * DepotCaution findUniqueOrThrow
 */
export type DepotCautionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * Filter, which DepotCaution to fetch.
     */
    where: Prisma.DepotCautionWhereUniqueInput;
};
/**
 * DepotCaution findFirst
 */
export type DepotCautionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * Filter, which DepotCaution to fetch.
     */
    where?: Prisma.DepotCautionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DepotCautions to fetch.
     */
    orderBy?: Prisma.DepotCautionOrderByWithRelationInput | Prisma.DepotCautionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DepotCautions.
     */
    cursor?: Prisma.DepotCautionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DepotCautions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DepotCautions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DepotCautions.
     */
    distinct?: Prisma.DepotCautionScalarFieldEnum | Prisma.DepotCautionScalarFieldEnum[];
};
/**
 * DepotCaution findFirstOrThrow
 */
export type DepotCautionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * Filter, which DepotCaution to fetch.
     */
    where?: Prisma.DepotCautionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DepotCautions to fetch.
     */
    orderBy?: Prisma.DepotCautionOrderByWithRelationInput | Prisma.DepotCautionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DepotCautions.
     */
    cursor?: Prisma.DepotCautionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DepotCautions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DepotCautions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DepotCautions.
     */
    distinct?: Prisma.DepotCautionScalarFieldEnum | Prisma.DepotCautionScalarFieldEnum[];
};
/**
 * DepotCaution findMany
 */
export type DepotCautionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * Filter, which DepotCautions to fetch.
     */
    where?: Prisma.DepotCautionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DepotCautions to fetch.
     */
    orderBy?: Prisma.DepotCautionOrderByWithRelationInput | Prisma.DepotCautionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DepotCautions.
     */
    cursor?: Prisma.DepotCautionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DepotCautions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DepotCautions.
     */
    skip?: number;
    distinct?: Prisma.DepotCautionScalarFieldEnum | Prisma.DepotCautionScalarFieldEnum[];
};
/**
 * DepotCaution create
 */
export type DepotCautionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * The data needed to create a DepotCaution.
     */
    data: Prisma.XOR<Prisma.DepotCautionCreateInput, Prisma.DepotCautionUncheckedCreateInput>;
};
/**
 * DepotCaution createMany
 */
export type DepotCautionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepotCautions.
     */
    data: Prisma.DepotCautionCreateManyInput | Prisma.DepotCautionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DepotCaution createManyAndReturn
 */
export type DepotCautionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * The data used to create many DepotCautions.
     */
    data: Prisma.DepotCautionCreateManyInput | Prisma.DepotCautionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DepotCaution update
 */
export type DepotCautionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * The data needed to update a DepotCaution.
     */
    data: Prisma.XOR<Prisma.DepotCautionUpdateInput, Prisma.DepotCautionUncheckedUpdateInput>;
    /**
     * Choose, which DepotCaution to update.
     */
    where: Prisma.DepotCautionWhereUniqueInput;
};
/**
 * DepotCaution updateMany
 */
export type DepotCautionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DepotCautions.
     */
    data: Prisma.XOR<Prisma.DepotCautionUpdateManyMutationInput, Prisma.DepotCautionUncheckedUpdateManyInput>;
    /**
     * Filter which DepotCautions to update
     */
    where?: Prisma.DepotCautionWhereInput;
    /**
     * Limit how many DepotCautions to update.
     */
    limit?: number;
};
/**
 * DepotCaution updateManyAndReturn
 */
export type DepotCautionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * The data used to update DepotCautions.
     */
    data: Prisma.XOR<Prisma.DepotCautionUpdateManyMutationInput, Prisma.DepotCautionUncheckedUpdateManyInput>;
    /**
     * Filter which DepotCautions to update
     */
    where?: Prisma.DepotCautionWhereInput;
    /**
     * Limit how many DepotCautions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DepotCaution upsert
 */
export type DepotCautionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * The filter to search for the DepotCaution to update in case it exists.
     */
    where: Prisma.DepotCautionWhereUniqueInput;
    /**
     * In case the DepotCaution found by the `where` argument doesn't exist, create a new DepotCaution with this data.
     */
    create: Prisma.XOR<Prisma.DepotCautionCreateInput, Prisma.DepotCautionUncheckedCreateInput>;
    /**
     * In case the DepotCaution was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DepotCautionUpdateInput, Prisma.DepotCautionUncheckedUpdateInput>;
};
/**
 * DepotCaution delete
 */
export type DepotCautionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
    /**
     * Filter which DepotCaution to delete.
     */
    where: Prisma.DepotCautionWhereUniqueInput;
};
/**
 * DepotCaution deleteMany
 */
export type DepotCautionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DepotCautions to delete
     */
    where?: Prisma.DepotCautionWhereInput;
    /**
     * Limit how many DepotCautions to delete.
     */
    limit?: number;
};
/**
 * DepotCaution without action
 */
export type DepotCautionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCaution
     */
    select?: Prisma.DepotCautionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DepotCaution
     */
    omit?: Prisma.DepotCautionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepotCautionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DepotCaution.d.ts.map