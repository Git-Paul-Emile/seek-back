import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Etablissement
 *
 */
export type EtablissementModel = runtime.Types.Result.DefaultSelection<Prisma.$EtablissementPayload>;
export type AggregateEtablissement = {
    _count: EtablissementCountAggregateOutputType | null;
    _avg: EtablissementAvgAggregateOutputType | null;
    _sum: EtablissementSumAggregateOutputType | null;
    _min: EtablissementMinAggregateOutputType | null;
    _max: EtablissementMaxAggregateOutputType | null;
};
export type EtablissementAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    distance: number | null;
};
export type EtablissementSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    distance: number | null;
};
export type EtablissementMinAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    type: string | null;
    nom: string | null;
    latitude: number | null;
    longitude: number | null;
    distance: number | null;
    createdAt: Date | null;
};
export type EtablissementMaxAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    type: string | null;
    nom: string | null;
    latitude: number | null;
    longitude: number | null;
    distance: number | null;
    createdAt: Date | null;
};
export type EtablissementCountAggregateOutputType = {
    id: number;
    bienId: number;
    type: number;
    nom: number;
    latitude: number;
    longitude: number;
    distance: number;
    createdAt: number;
    _all: number;
};
export type EtablissementAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    distance?: true;
};
export type EtablissementSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    distance?: true;
};
export type EtablissementMinAggregateInputType = {
    id?: true;
    bienId?: true;
    type?: true;
    nom?: true;
    latitude?: true;
    longitude?: true;
    distance?: true;
    createdAt?: true;
};
export type EtablissementMaxAggregateInputType = {
    id?: true;
    bienId?: true;
    type?: true;
    nom?: true;
    latitude?: true;
    longitude?: true;
    distance?: true;
    createdAt?: true;
};
export type EtablissementCountAggregateInputType = {
    id?: true;
    bienId?: true;
    type?: true;
    nom?: true;
    latitude?: true;
    longitude?: true;
    distance?: true;
    createdAt?: true;
    _all?: true;
};
export type EtablissementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissement to aggregate.
     */
    where?: Prisma.EtablissementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: Prisma.EtablissementOrderByWithRelationInput | Prisma.EtablissementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EtablissementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etablissements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Etablissements
    **/
    _count?: true | EtablissementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EtablissementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EtablissementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EtablissementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EtablissementMaxAggregateInputType;
};
export type GetEtablissementAggregateType<T extends EtablissementAggregateArgs> = {
    [P in keyof T & keyof AggregateEtablissement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEtablissement[P]> : Prisma.GetScalarType<T[P], AggregateEtablissement[P]>;
};
export type EtablissementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtablissementWhereInput;
    orderBy?: Prisma.EtablissementOrderByWithAggregationInput | Prisma.EtablissementOrderByWithAggregationInput[];
    by: Prisma.EtablissementScalarFieldEnum[] | Prisma.EtablissementScalarFieldEnum;
    having?: Prisma.EtablissementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EtablissementCountAggregateInputType | true;
    _avg?: EtablissementAvgAggregateInputType;
    _sum?: EtablissementSumAggregateInputType;
    _min?: EtablissementMinAggregateInputType;
    _max?: EtablissementMaxAggregateInputType;
};
export type EtablissementGroupByOutputType = {
    id: string;
    bienId: string;
    type: string;
    nom: string | null;
    latitude: number;
    longitude: number;
    distance: number | null;
    createdAt: Date;
    _count: EtablissementCountAggregateOutputType | null;
    _avg: EtablissementAvgAggregateOutputType | null;
    _sum: EtablissementSumAggregateOutputType | null;
    _min: EtablissementMinAggregateOutputType | null;
    _max: EtablissementMaxAggregateOutputType | null;
};
type GetEtablissementGroupByPayload<T extends EtablissementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EtablissementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EtablissementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EtablissementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EtablissementGroupByOutputType[P]>;
}>>;
export type EtablissementWhereInput = {
    AND?: Prisma.EtablissementWhereInput | Prisma.EtablissementWhereInput[];
    OR?: Prisma.EtablissementWhereInput[];
    NOT?: Prisma.EtablissementWhereInput | Prisma.EtablissementWhereInput[];
    id?: Prisma.StringFilter<"Etablissement"> | string;
    bienId?: Prisma.StringFilter<"Etablissement"> | string;
    type?: Prisma.StringFilter<"Etablissement"> | string;
    nom?: Prisma.StringNullableFilter<"Etablissement"> | string | null;
    latitude?: Prisma.FloatFilter<"Etablissement"> | number;
    longitude?: Prisma.FloatFilter<"Etablissement"> | number;
    distance?: Prisma.FloatNullableFilter<"Etablissement"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Etablissement"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
};
export type EtablissementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distance?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
};
export type EtablissementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EtablissementWhereInput | Prisma.EtablissementWhereInput[];
    OR?: Prisma.EtablissementWhereInput[];
    NOT?: Prisma.EtablissementWhereInput | Prisma.EtablissementWhereInput[];
    bienId?: Prisma.StringFilter<"Etablissement"> | string;
    type?: Prisma.StringFilter<"Etablissement"> | string;
    nom?: Prisma.StringNullableFilter<"Etablissement"> | string | null;
    latitude?: Prisma.FloatFilter<"Etablissement"> | number;
    longitude?: Prisma.FloatFilter<"Etablissement"> | number;
    distance?: Prisma.FloatNullableFilter<"Etablissement"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Etablissement"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
}, "id">;
export type EtablissementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distance?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EtablissementCountOrderByAggregateInput;
    _avg?: Prisma.EtablissementAvgOrderByAggregateInput;
    _max?: Prisma.EtablissementMaxOrderByAggregateInput;
    _min?: Prisma.EtablissementMinOrderByAggregateInput;
    _sum?: Prisma.EtablissementSumOrderByAggregateInput;
};
export type EtablissementScalarWhereWithAggregatesInput = {
    AND?: Prisma.EtablissementScalarWhereWithAggregatesInput | Prisma.EtablissementScalarWhereWithAggregatesInput[];
    OR?: Prisma.EtablissementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EtablissementScalarWhereWithAggregatesInput | Prisma.EtablissementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Etablissement"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"Etablissement"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Etablissement"> | string;
    nom?: Prisma.StringNullableWithAggregatesFilter<"Etablissement"> | string | null;
    latitude?: Prisma.FloatWithAggregatesFilter<"Etablissement"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"Etablissement"> | number;
    distance?: Prisma.FloatNullableWithAggregatesFilter<"Etablissement"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Etablissement"> | Date | string;
};
export type EtablissementCreateInput = {
    id?: string;
    type: string;
    nom?: string | null;
    latitude: number;
    longitude: number;
    distance?: number | null;
    createdAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutEtablissementsInput;
};
export type EtablissementUncheckedCreateInput = {
    id?: string;
    bienId: string;
    type: string;
    nom?: string | null;
    latitude: number;
    longitude: number;
    distance?: number | null;
    createdAt?: Date | string;
};
export type EtablissementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutEtablissementsNestedInput;
};
export type EtablissementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementCreateManyInput = {
    id?: string;
    bienId: string;
    type: string;
    nom?: string | null;
    latitude: number;
    longitude: number;
    distance?: number | null;
    createdAt?: Date | string;
};
export type EtablissementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementListRelationFilter = {
    every?: Prisma.EtablissementWhereInput;
    some?: Prisma.EtablissementWhereInput;
    none?: Prisma.EtablissementWhereInput;
};
export type EtablissementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EtablissementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EtablissementAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
};
export type EtablissementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EtablissementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EtablissementSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
};
export type EtablissementCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.EtablissementCreateWithoutBienInput, Prisma.EtablissementUncheckedCreateWithoutBienInput> | Prisma.EtablissementCreateWithoutBienInput[] | Prisma.EtablissementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementCreateOrConnectWithoutBienInput | Prisma.EtablissementCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.EtablissementCreateManyBienInputEnvelope;
    connect?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
};
export type EtablissementUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.EtablissementCreateWithoutBienInput, Prisma.EtablissementUncheckedCreateWithoutBienInput> | Prisma.EtablissementCreateWithoutBienInput[] | Prisma.EtablissementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementCreateOrConnectWithoutBienInput | Prisma.EtablissementCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.EtablissementCreateManyBienInputEnvelope;
    connect?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
};
export type EtablissementUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.EtablissementCreateWithoutBienInput, Prisma.EtablissementUncheckedCreateWithoutBienInput> | Prisma.EtablissementCreateWithoutBienInput[] | Prisma.EtablissementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementCreateOrConnectWithoutBienInput | Prisma.EtablissementCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.EtablissementUpsertWithWhereUniqueWithoutBienInput | Prisma.EtablissementUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.EtablissementCreateManyBienInputEnvelope;
    set?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    disconnect?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    delete?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    connect?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    update?: Prisma.EtablissementUpdateWithWhereUniqueWithoutBienInput | Prisma.EtablissementUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.EtablissementUpdateManyWithWhereWithoutBienInput | Prisma.EtablissementUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.EtablissementScalarWhereInput | Prisma.EtablissementScalarWhereInput[];
};
export type EtablissementUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.EtablissementCreateWithoutBienInput, Prisma.EtablissementUncheckedCreateWithoutBienInput> | Prisma.EtablissementCreateWithoutBienInput[] | Prisma.EtablissementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementCreateOrConnectWithoutBienInput | Prisma.EtablissementCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.EtablissementUpsertWithWhereUniqueWithoutBienInput | Prisma.EtablissementUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.EtablissementCreateManyBienInputEnvelope;
    set?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    disconnect?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    delete?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    connect?: Prisma.EtablissementWhereUniqueInput | Prisma.EtablissementWhereUniqueInput[];
    update?: Prisma.EtablissementUpdateWithWhereUniqueWithoutBienInput | Prisma.EtablissementUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.EtablissementUpdateManyWithWhereWithoutBienInput | Prisma.EtablissementUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.EtablissementScalarWhereInput | Prisma.EtablissementScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EtablissementCreateWithoutBienInput = {
    id?: string;
    type: string;
    nom?: string | null;
    latitude: number;
    longitude: number;
    distance?: number | null;
    createdAt?: Date | string;
};
export type EtablissementUncheckedCreateWithoutBienInput = {
    id?: string;
    type: string;
    nom?: string | null;
    latitude: number;
    longitude: number;
    distance?: number | null;
    createdAt?: Date | string;
};
export type EtablissementCreateOrConnectWithoutBienInput = {
    where: Prisma.EtablissementWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtablissementCreateWithoutBienInput, Prisma.EtablissementUncheckedCreateWithoutBienInput>;
};
export type EtablissementCreateManyBienInputEnvelope = {
    data: Prisma.EtablissementCreateManyBienInput | Prisma.EtablissementCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type EtablissementUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.EtablissementWhereUniqueInput;
    update: Prisma.XOR<Prisma.EtablissementUpdateWithoutBienInput, Prisma.EtablissementUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.EtablissementCreateWithoutBienInput, Prisma.EtablissementUncheckedCreateWithoutBienInput>;
};
export type EtablissementUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.EtablissementWhereUniqueInput;
    data: Prisma.XOR<Prisma.EtablissementUpdateWithoutBienInput, Prisma.EtablissementUncheckedUpdateWithoutBienInput>;
};
export type EtablissementUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.EtablissementScalarWhereInput;
    data: Prisma.XOR<Prisma.EtablissementUpdateManyMutationInput, Prisma.EtablissementUncheckedUpdateManyWithoutBienInput>;
};
export type EtablissementScalarWhereInput = {
    AND?: Prisma.EtablissementScalarWhereInput | Prisma.EtablissementScalarWhereInput[];
    OR?: Prisma.EtablissementScalarWhereInput[];
    NOT?: Prisma.EtablissementScalarWhereInput | Prisma.EtablissementScalarWhereInput[];
    id?: Prisma.StringFilter<"Etablissement"> | string;
    bienId?: Prisma.StringFilter<"Etablissement"> | string;
    type?: Prisma.StringFilter<"Etablissement"> | string;
    nom?: Prisma.StringNullableFilter<"Etablissement"> | string | null;
    latitude?: Prisma.FloatFilter<"Etablissement"> | number;
    longitude?: Prisma.FloatFilter<"Etablissement"> | number;
    distance?: Prisma.FloatNullableFilter<"Etablissement"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Etablissement"> | Date | string;
};
export type EtablissementCreateManyBienInput = {
    id?: string;
    type: string;
    nom?: string | null;
    latitude: number;
    longitude: number;
    distance?: number | null;
    createdAt?: Date | string;
};
export type EtablissementUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementUncheckedUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementUncheckedUpdateManyWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    nom?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distance?: boolean;
    createdAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etablissement"]>;
export type EtablissementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    nom?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distance?: boolean;
    createdAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etablissement"]>;
export type EtablissementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    nom?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distance?: boolean;
    createdAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etablissement"]>;
export type EtablissementSelectScalar = {
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    nom?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distance?: boolean;
    createdAt?: boolean;
};
export type EtablissementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bienId" | "type" | "nom" | "latitude" | "longitude" | "distance" | "createdAt", ExtArgs["result"]["etablissement"]>;
export type EtablissementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type EtablissementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type EtablissementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type $EtablissementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Etablissement";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bienId: string;
        type: string;
        nom: string | null;
        latitude: number;
        longitude: number;
        distance: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["etablissement"]>;
    composites: {};
};
export type EtablissementGetPayload<S extends boolean | null | undefined | EtablissementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EtablissementPayload, S>;
export type EtablissementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EtablissementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EtablissementCountAggregateInputType | true;
};
export interface EtablissementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Etablissement'];
        meta: {
            name: 'Etablissement';
        };
    };
    /**
     * Find zero or one Etablissement that matches the filter.
     * @param {EtablissementFindUniqueArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtablissementFindUniqueArgs>(args: Prisma.SelectSubset<T, EtablissementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Etablissement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtablissementFindUniqueOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtablissementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EtablissementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Etablissement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtablissementFindFirstArgs>(args?: Prisma.SelectSubset<T, EtablissementFindFirstArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Etablissement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtablissementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EtablissementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Etablissements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etablissements
     * const etablissements = await prisma.etablissement.findMany()
     *
     * // Get first 10 Etablissements
     * const etablissements = await prisma.etablissement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EtablissementFindManyArgs>(args?: Prisma.SelectSubset<T, EtablissementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Etablissement.
     * @param {EtablissementCreateArgs} args - Arguments to create a Etablissement.
     * @example
     * // Create one Etablissement
     * const Etablissement = await prisma.etablissement.create({
     *   data: {
     *     // ... data to create a Etablissement
     *   }
     * })
     *
     */
    create<T extends EtablissementCreateArgs>(args: Prisma.SelectSubset<T, EtablissementCreateArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Etablissements.
     * @param {EtablissementCreateManyArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EtablissementCreateManyArgs>(args?: Prisma.SelectSubset<T, EtablissementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Etablissements and returns the data saved in the database.
     * @param {EtablissementCreateManyAndReturnArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Etablissements and only return the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EtablissementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EtablissementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Etablissement.
     * @param {EtablissementDeleteArgs} args - Arguments to delete one Etablissement.
     * @example
     * // Delete one Etablissement
     * const Etablissement = await prisma.etablissement.delete({
     *   where: {
     *     // ... filter to delete one Etablissement
     *   }
     * })
     *
     */
    delete<T extends EtablissementDeleteArgs>(args: Prisma.SelectSubset<T, EtablissementDeleteArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Etablissement.
     * @param {EtablissementUpdateArgs} args - Arguments to update one Etablissement.
     * @example
     * // Update one Etablissement
     * const etablissement = await prisma.etablissement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EtablissementUpdateArgs>(args: Prisma.SelectSubset<T, EtablissementUpdateArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Etablissements.
     * @param {EtablissementDeleteManyArgs} args - Arguments to filter Etablissements to delete.
     * @example
     * // Delete a few Etablissements
     * const { count } = await prisma.etablissement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EtablissementDeleteManyArgs>(args?: Prisma.SelectSubset<T, EtablissementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EtablissementUpdateManyArgs>(args: Prisma.SelectSubset<T, EtablissementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Etablissements and returns the data updated in the database.
     * @param {EtablissementUpdateManyAndReturnArgs} args - Arguments to update many Etablissements.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Etablissements and only return the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.updateManyAndReturn({
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
    updateManyAndReturn<T extends EtablissementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EtablissementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Etablissement.
     * @param {EtablissementUpsertArgs} args - Arguments to update or create a Etablissement.
     * @example
     * // Update or create a Etablissement
     * const etablissement = await prisma.etablissement.upsert({
     *   create: {
     *     // ... data to create a Etablissement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etablissement we want to update
     *   }
     * })
     */
    upsert<T extends EtablissementUpsertArgs>(args: Prisma.SelectSubset<T, EtablissementUpsertArgs<ExtArgs>>): Prisma.Prisma__EtablissementClient<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementCountArgs} args - Arguments to filter Etablissements to count.
     * @example
     * // Count the number of Etablissements
     * const count = await prisma.etablissement.count({
     *   where: {
     *     // ... the filter for the Etablissements we want to count
     *   }
     * })
    **/
    count<T extends EtablissementCountArgs>(args?: Prisma.Subset<T, EtablissementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EtablissementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtablissementAggregateArgs>(args: Prisma.Subset<T, EtablissementAggregateArgs>): Prisma.PrismaPromise<GetEtablissementAggregateType<T>>;
    /**
     * Group by Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EtablissementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EtablissementGroupByArgs['orderBy'];
    } : {
        orderBy?: EtablissementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EtablissementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtablissementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Etablissement model
     */
    readonly fields: EtablissementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Etablissement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EtablissementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Etablissement model
 */
export interface EtablissementFieldRefs {
    readonly id: Prisma.FieldRef<"Etablissement", 'String'>;
    readonly bienId: Prisma.FieldRef<"Etablissement", 'String'>;
    readonly type: Prisma.FieldRef<"Etablissement", 'String'>;
    readonly nom: Prisma.FieldRef<"Etablissement", 'String'>;
    readonly latitude: Prisma.FieldRef<"Etablissement", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Etablissement", 'Float'>;
    readonly distance: Prisma.FieldRef<"Etablissement", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Etablissement", 'DateTime'>;
}
/**
 * Etablissement findUnique
 */
export type EtablissementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * Filter, which Etablissement to fetch.
     */
    where: Prisma.EtablissementWhereUniqueInput;
};
/**
 * Etablissement findUniqueOrThrow
 */
export type EtablissementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * Filter, which Etablissement to fetch.
     */
    where: Prisma.EtablissementWhereUniqueInput;
};
/**
 * Etablissement findFirst
 */
export type EtablissementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: Prisma.EtablissementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: Prisma.EtablissementOrderByWithRelationInput | Prisma.EtablissementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Etablissements.
     */
    cursor?: Prisma.EtablissementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etablissements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Etablissements.
     */
    distinct?: Prisma.EtablissementScalarFieldEnum | Prisma.EtablissementScalarFieldEnum[];
};
/**
 * Etablissement findFirstOrThrow
 */
export type EtablissementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: Prisma.EtablissementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: Prisma.EtablissementOrderByWithRelationInput | Prisma.EtablissementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Etablissements.
     */
    cursor?: Prisma.EtablissementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etablissements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Etablissements.
     */
    distinct?: Prisma.EtablissementScalarFieldEnum | Prisma.EtablissementScalarFieldEnum[];
};
/**
 * Etablissement findMany
 */
export type EtablissementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * Filter, which Etablissements to fetch.
     */
    where?: Prisma.EtablissementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: Prisma.EtablissementOrderByWithRelationInput | Prisma.EtablissementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Etablissements.
     */
    cursor?: Prisma.EtablissementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etablissements.
     */
    skip?: number;
    distinct?: Prisma.EtablissementScalarFieldEnum | Prisma.EtablissementScalarFieldEnum[];
};
/**
 * Etablissement create
 */
export type EtablissementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * The data needed to create a Etablissement.
     */
    data: Prisma.XOR<Prisma.EtablissementCreateInput, Prisma.EtablissementUncheckedCreateInput>;
};
/**
 * Etablissement createMany
 */
export type EtablissementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etablissements.
     */
    data: Prisma.EtablissementCreateManyInput | Prisma.EtablissementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Etablissement createManyAndReturn
 */
export type EtablissementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * The data used to create many Etablissements.
     */
    data: Prisma.EtablissementCreateManyInput | Prisma.EtablissementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Etablissement update
 */
export type EtablissementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * The data needed to update a Etablissement.
     */
    data: Prisma.XOR<Prisma.EtablissementUpdateInput, Prisma.EtablissementUncheckedUpdateInput>;
    /**
     * Choose, which Etablissement to update.
     */
    where: Prisma.EtablissementWhereUniqueInput;
};
/**
 * Etablissement updateMany
 */
export type EtablissementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Etablissements.
     */
    data: Prisma.XOR<Prisma.EtablissementUpdateManyMutationInput, Prisma.EtablissementUncheckedUpdateManyInput>;
    /**
     * Filter which Etablissements to update
     */
    where?: Prisma.EtablissementWhereInput;
    /**
     * Limit how many Etablissements to update.
     */
    limit?: number;
};
/**
 * Etablissement updateManyAndReturn
 */
export type EtablissementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * The data used to update Etablissements.
     */
    data: Prisma.XOR<Prisma.EtablissementUpdateManyMutationInput, Prisma.EtablissementUncheckedUpdateManyInput>;
    /**
     * Filter which Etablissements to update
     */
    where?: Prisma.EtablissementWhereInput;
    /**
     * Limit how many Etablissements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Etablissement upsert
 */
export type EtablissementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * The filter to search for the Etablissement to update in case it exists.
     */
    where: Prisma.EtablissementWhereUniqueInput;
    /**
     * In case the Etablissement found by the `where` argument doesn't exist, create a new Etablissement with this data.
     */
    create: Prisma.XOR<Prisma.EtablissementCreateInput, Prisma.EtablissementUncheckedCreateInput>;
    /**
     * In case the Etablissement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EtablissementUpdateInput, Prisma.EtablissementUncheckedUpdateInput>;
};
/**
 * Etablissement delete
 */
export type EtablissementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    /**
     * Filter which Etablissement to delete.
     */
    where: Prisma.EtablissementWhereUniqueInput;
};
/**
 * Etablissement deleteMany
 */
export type EtablissementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissements to delete
     */
    where?: Prisma.EtablissementWhereInput;
    /**
     * Limit how many Etablissements to delete.
     */
    limit?: number;
};
/**
 * Etablissement without action
 */
export type EtablissementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Etablissement.d.ts.map