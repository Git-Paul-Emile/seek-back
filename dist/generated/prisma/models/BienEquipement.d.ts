import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BienEquipement
 *
 */
export type BienEquipementModel = runtime.Types.Result.DefaultSelection<Prisma.$BienEquipementPayload>;
export type AggregateBienEquipement = {
    _count: BienEquipementCountAggregateOutputType | null;
    _min: BienEquipementMinAggregateOutputType | null;
    _max: BienEquipementMaxAggregateOutputType | null;
};
export type BienEquipementMinAggregateOutputType = {
    bienId: string | null;
    equipementId: string | null;
};
export type BienEquipementMaxAggregateOutputType = {
    bienId: string | null;
    equipementId: string | null;
};
export type BienEquipementCountAggregateOutputType = {
    bienId: number;
    equipementId: number;
    _all: number;
};
export type BienEquipementMinAggregateInputType = {
    bienId?: true;
    equipementId?: true;
};
export type BienEquipementMaxAggregateInputType = {
    bienId?: true;
    equipementId?: true;
};
export type BienEquipementCountAggregateInputType = {
    bienId?: true;
    equipementId?: true;
    _all?: true;
};
export type BienEquipementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BienEquipement to aggregate.
     */
    where?: Prisma.BienEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienEquipements to fetch.
     */
    orderBy?: Prisma.BienEquipementOrderByWithRelationInput | Prisma.BienEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BienEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienEquipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BienEquipements
    **/
    _count?: true | BienEquipementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BienEquipementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BienEquipementMaxAggregateInputType;
};
export type GetBienEquipementAggregateType<T extends BienEquipementAggregateArgs> = {
    [P in keyof T & keyof AggregateBienEquipement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBienEquipement[P]> : Prisma.GetScalarType<T[P], AggregateBienEquipement[P]>;
};
export type BienEquipementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienEquipementWhereInput;
    orderBy?: Prisma.BienEquipementOrderByWithAggregationInput | Prisma.BienEquipementOrderByWithAggregationInput[];
    by: Prisma.BienEquipementScalarFieldEnum[] | Prisma.BienEquipementScalarFieldEnum;
    having?: Prisma.BienEquipementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BienEquipementCountAggregateInputType | true;
    _min?: BienEquipementMinAggregateInputType;
    _max?: BienEquipementMaxAggregateInputType;
};
export type BienEquipementGroupByOutputType = {
    bienId: string;
    equipementId: string;
    _count: BienEquipementCountAggregateOutputType | null;
    _min: BienEquipementMinAggregateOutputType | null;
    _max: BienEquipementMaxAggregateOutputType | null;
};
type GetBienEquipementGroupByPayload<T extends BienEquipementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BienEquipementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BienEquipementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BienEquipementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BienEquipementGroupByOutputType[P]>;
}>>;
export type BienEquipementWhereInput = {
    AND?: Prisma.BienEquipementWhereInput | Prisma.BienEquipementWhereInput[];
    OR?: Prisma.BienEquipementWhereInput[];
    NOT?: Prisma.BienEquipementWhereInput | Prisma.BienEquipementWhereInput[];
    bienId?: Prisma.StringFilter<"BienEquipement"> | string;
    equipementId?: Prisma.StringFilter<"BienEquipement"> | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    equipement?: Prisma.XOR<Prisma.EquipementScalarRelationFilter, Prisma.EquipementWhereInput>;
};
export type BienEquipementOrderByWithRelationInput = {
    bienId?: Prisma.SortOrder;
    equipementId?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
    equipement?: Prisma.EquipementOrderByWithRelationInput;
};
export type BienEquipementWhereUniqueInput = Prisma.AtLeast<{
    bienId_equipementId?: Prisma.BienEquipementBienIdEquipementIdCompoundUniqueInput;
    AND?: Prisma.BienEquipementWhereInput | Prisma.BienEquipementWhereInput[];
    OR?: Prisma.BienEquipementWhereInput[];
    NOT?: Prisma.BienEquipementWhereInput | Prisma.BienEquipementWhereInput[];
    bienId?: Prisma.StringFilter<"BienEquipement"> | string;
    equipementId?: Prisma.StringFilter<"BienEquipement"> | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    equipement?: Prisma.XOR<Prisma.EquipementScalarRelationFilter, Prisma.EquipementWhereInput>;
}, "bienId_equipementId">;
export type BienEquipementOrderByWithAggregationInput = {
    bienId?: Prisma.SortOrder;
    equipementId?: Prisma.SortOrder;
    _count?: Prisma.BienEquipementCountOrderByAggregateInput;
    _max?: Prisma.BienEquipementMaxOrderByAggregateInput;
    _min?: Prisma.BienEquipementMinOrderByAggregateInput;
};
export type BienEquipementScalarWhereWithAggregatesInput = {
    AND?: Prisma.BienEquipementScalarWhereWithAggregatesInput | Prisma.BienEquipementScalarWhereWithAggregatesInput[];
    OR?: Prisma.BienEquipementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BienEquipementScalarWhereWithAggregatesInput | Prisma.BienEquipementScalarWhereWithAggregatesInput[];
    bienId?: Prisma.StringWithAggregatesFilter<"BienEquipement"> | string;
    equipementId?: Prisma.StringWithAggregatesFilter<"BienEquipement"> | string;
};
export type BienEquipementCreateInput = {
    bien: Prisma.BienCreateNestedOneWithoutEquipementsInput;
    equipement: Prisma.EquipementCreateNestedOneWithoutBiensInput;
};
export type BienEquipementUncheckedCreateInput = {
    bienId: string;
    equipementId: string;
};
export type BienEquipementUpdateInput = {
    bien?: Prisma.BienUpdateOneRequiredWithoutEquipementsNestedInput;
    equipement?: Prisma.EquipementUpdateOneRequiredWithoutBiensNestedInput;
};
export type BienEquipementUncheckedUpdateInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    equipementId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BienEquipementCreateManyInput = {
    bienId: string;
    equipementId: string;
};
export type BienEquipementUpdateManyMutationInput = {};
export type BienEquipementUncheckedUpdateManyInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    equipementId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BienEquipementListRelationFilter = {
    every?: Prisma.BienEquipementWhereInput;
    some?: Prisma.BienEquipementWhereInput;
    none?: Prisma.BienEquipementWhereInput;
};
export type BienEquipementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BienEquipementBienIdEquipementIdCompoundUniqueInput = {
    bienId: string;
    equipementId: string;
};
export type BienEquipementCountOrderByAggregateInput = {
    bienId?: Prisma.SortOrder;
    equipementId?: Prisma.SortOrder;
};
export type BienEquipementMaxOrderByAggregateInput = {
    bienId?: Prisma.SortOrder;
    equipementId?: Prisma.SortOrder;
};
export type BienEquipementMinOrderByAggregateInput = {
    bienId?: Prisma.SortOrder;
    equipementId?: Prisma.SortOrder;
};
export type BienEquipementCreateNestedManyWithoutEquipementInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutEquipementInput, Prisma.BienEquipementUncheckedCreateWithoutEquipementInput> | Prisma.BienEquipementCreateWithoutEquipementInput[] | Prisma.BienEquipementUncheckedCreateWithoutEquipementInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutEquipementInput | Prisma.BienEquipementCreateOrConnectWithoutEquipementInput[];
    createMany?: Prisma.BienEquipementCreateManyEquipementInputEnvelope;
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
};
export type BienEquipementUncheckedCreateNestedManyWithoutEquipementInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutEquipementInput, Prisma.BienEquipementUncheckedCreateWithoutEquipementInput> | Prisma.BienEquipementCreateWithoutEquipementInput[] | Prisma.BienEquipementUncheckedCreateWithoutEquipementInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutEquipementInput | Prisma.BienEquipementCreateOrConnectWithoutEquipementInput[];
    createMany?: Prisma.BienEquipementCreateManyEquipementInputEnvelope;
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
};
export type BienEquipementUpdateManyWithoutEquipementNestedInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutEquipementInput, Prisma.BienEquipementUncheckedCreateWithoutEquipementInput> | Prisma.BienEquipementCreateWithoutEquipementInput[] | Prisma.BienEquipementUncheckedCreateWithoutEquipementInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutEquipementInput | Prisma.BienEquipementCreateOrConnectWithoutEquipementInput[];
    upsert?: Prisma.BienEquipementUpsertWithWhereUniqueWithoutEquipementInput | Prisma.BienEquipementUpsertWithWhereUniqueWithoutEquipementInput[];
    createMany?: Prisma.BienEquipementCreateManyEquipementInputEnvelope;
    set?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    disconnect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    delete?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    update?: Prisma.BienEquipementUpdateWithWhereUniqueWithoutEquipementInput | Prisma.BienEquipementUpdateWithWhereUniqueWithoutEquipementInput[];
    updateMany?: Prisma.BienEquipementUpdateManyWithWhereWithoutEquipementInput | Prisma.BienEquipementUpdateManyWithWhereWithoutEquipementInput[];
    deleteMany?: Prisma.BienEquipementScalarWhereInput | Prisma.BienEquipementScalarWhereInput[];
};
export type BienEquipementUncheckedUpdateManyWithoutEquipementNestedInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutEquipementInput, Prisma.BienEquipementUncheckedCreateWithoutEquipementInput> | Prisma.BienEquipementCreateWithoutEquipementInput[] | Prisma.BienEquipementUncheckedCreateWithoutEquipementInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutEquipementInput | Prisma.BienEquipementCreateOrConnectWithoutEquipementInput[];
    upsert?: Prisma.BienEquipementUpsertWithWhereUniqueWithoutEquipementInput | Prisma.BienEquipementUpsertWithWhereUniqueWithoutEquipementInput[];
    createMany?: Prisma.BienEquipementCreateManyEquipementInputEnvelope;
    set?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    disconnect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    delete?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    update?: Prisma.BienEquipementUpdateWithWhereUniqueWithoutEquipementInput | Prisma.BienEquipementUpdateWithWhereUniqueWithoutEquipementInput[];
    updateMany?: Prisma.BienEquipementUpdateManyWithWhereWithoutEquipementInput | Prisma.BienEquipementUpdateManyWithWhereWithoutEquipementInput[];
    deleteMany?: Prisma.BienEquipementScalarWhereInput | Prisma.BienEquipementScalarWhereInput[];
};
export type BienEquipementCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutBienInput, Prisma.BienEquipementUncheckedCreateWithoutBienInput> | Prisma.BienEquipementCreateWithoutBienInput[] | Prisma.BienEquipementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutBienInput | Prisma.BienEquipementCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BienEquipementCreateManyBienInputEnvelope;
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
};
export type BienEquipementUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutBienInput, Prisma.BienEquipementUncheckedCreateWithoutBienInput> | Prisma.BienEquipementCreateWithoutBienInput[] | Prisma.BienEquipementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutBienInput | Prisma.BienEquipementCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BienEquipementCreateManyBienInputEnvelope;
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
};
export type BienEquipementUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutBienInput, Prisma.BienEquipementUncheckedCreateWithoutBienInput> | Prisma.BienEquipementCreateWithoutBienInput[] | Prisma.BienEquipementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutBienInput | Prisma.BienEquipementCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BienEquipementUpsertWithWhereUniqueWithoutBienInput | Prisma.BienEquipementUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BienEquipementCreateManyBienInputEnvelope;
    set?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    disconnect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    delete?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    update?: Prisma.BienEquipementUpdateWithWhereUniqueWithoutBienInput | Prisma.BienEquipementUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BienEquipementUpdateManyWithWhereWithoutBienInput | Prisma.BienEquipementUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BienEquipementScalarWhereInput | Prisma.BienEquipementScalarWhereInput[];
};
export type BienEquipementUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienEquipementCreateWithoutBienInput, Prisma.BienEquipementUncheckedCreateWithoutBienInput> | Prisma.BienEquipementCreateWithoutBienInput[] | Prisma.BienEquipementUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienEquipementCreateOrConnectWithoutBienInput | Prisma.BienEquipementCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BienEquipementUpsertWithWhereUniqueWithoutBienInput | Prisma.BienEquipementUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BienEquipementCreateManyBienInputEnvelope;
    set?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    disconnect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    delete?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    connect?: Prisma.BienEquipementWhereUniqueInput | Prisma.BienEquipementWhereUniqueInput[];
    update?: Prisma.BienEquipementUpdateWithWhereUniqueWithoutBienInput | Prisma.BienEquipementUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BienEquipementUpdateManyWithWhereWithoutBienInput | Prisma.BienEquipementUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BienEquipementScalarWhereInput | Prisma.BienEquipementScalarWhereInput[];
};
export type BienEquipementCreateWithoutEquipementInput = {
    bien: Prisma.BienCreateNestedOneWithoutEquipementsInput;
};
export type BienEquipementUncheckedCreateWithoutEquipementInput = {
    bienId: string;
};
export type BienEquipementCreateOrConnectWithoutEquipementInput = {
    where: Prisma.BienEquipementWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienEquipementCreateWithoutEquipementInput, Prisma.BienEquipementUncheckedCreateWithoutEquipementInput>;
};
export type BienEquipementCreateManyEquipementInputEnvelope = {
    data: Prisma.BienEquipementCreateManyEquipementInput | Prisma.BienEquipementCreateManyEquipementInput[];
    skipDuplicates?: boolean;
};
export type BienEquipementUpsertWithWhereUniqueWithoutEquipementInput = {
    where: Prisma.BienEquipementWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienEquipementUpdateWithoutEquipementInput, Prisma.BienEquipementUncheckedUpdateWithoutEquipementInput>;
    create: Prisma.XOR<Prisma.BienEquipementCreateWithoutEquipementInput, Prisma.BienEquipementUncheckedCreateWithoutEquipementInput>;
};
export type BienEquipementUpdateWithWhereUniqueWithoutEquipementInput = {
    where: Prisma.BienEquipementWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienEquipementUpdateWithoutEquipementInput, Prisma.BienEquipementUncheckedUpdateWithoutEquipementInput>;
};
export type BienEquipementUpdateManyWithWhereWithoutEquipementInput = {
    where: Prisma.BienEquipementScalarWhereInput;
    data: Prisma.XOR<Prisma.BienEquipementUpdateManyMutationInput, Prisma.BienEquipementUncheckedUpdateManyWithoutEquipementInput>;
};
export type BienEquipementScalarWhereInput = {
    AND?: Prisma.BienEquipementScalarWhereInput | Prisma.BienEquipementScalarWhereInput[];
    OR?: Prisma.BienEquipementScalarWhereInput[];
    NOT?: Prisma.BienEquipementScalarWhereInput | Prisma.BienEquipementScalarWhereInput[];
    bienId?: Prisma.StringFilter<"BienEquipement"> | string;
    equipementId?: Prisma.StringFilter<"BienEquipement"> | string;
};
export type BienEquipementCreateWithoutBienInput = {
    equipement: Prisma.EquipementCreateNestedOneWithoutBiensInput;
};
export type BienEquipementUncheckedCreateWithoutBienInput = {
    equipementId: string;
};
export type BienEquipementCreateOrConnectWithoutBienInput = {
    where: Prisma.BienEquipementWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienEquipementCreateWithoutBienInput, Prisma.BienEquipementUncheckedCreateWithoutBienInput>;
};
export type BienEquipementCreateManyBienInputEnvelope = {
    data: Prisma.BienEquipementCreateManyBienInput | Prisma.BienEquipementCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type BienEquipementUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.BienEquipementWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienEquipementUpdateWithoutBienInput, Prisma.BienEquipementUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.BienEquipementCreateWithoutBienInput, Prisma.BienEquipementUncheckedCreateWithoutBienInput>;
};
export type BienEquipementUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.BienEquipementWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienEquipementUpdateWithoutBienInput, Prisma.BienEquipementUncheckedUpdateWithoutBienInput>;
};
export type BienEquipementUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.BienEquipementScalarWhereInput;
    data: Prisma.XOR<Prisma.BienEquipementUpdateManyMutationInput, Prisma.BienEquipementUncheckedUpdateManyWithoutBienInput>;
};
export type BienEquipementCreateManyEquipementInput = {
    bienId: string;
};
export type BienEquipementUpdateWithoutEquipementInput = {
    bien?: Prisma.BienUpdateOneRequiredWithoutEquipementsNestedInput;
};
export type BienEquipementUncheckedUpdateWithoutEquipementInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BienEquipementUncheckedUpdateManyWithoutEquipementInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BienEquipementCreateManyBienInput = {
    equipementId: string;
};
export type BienEquipementUpdateWithoutBienInput = {
    equipement?: Prisma.EquipementUpdateOneRequiredWithoutBiensNestedInput;
};
export type BienEquipementUncheckedUpdateWithoutBienInput = {
    equipementId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BienEquipementUncheckedUpdateManyWithoutBienInput = {
    equipementId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BienEquipementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bienId?: boolean;
    equipementId?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    equipement?: boolean | Prisma.EquipementDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienEquipement"]>;
export type BienEquipementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bienId?: boolean;
    equipementId?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    equipement?: boolean | Prisma.EquipementDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienEquipement"]>;
export type BienEquipementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bienId?: boolean;
    equipementId?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    equipement?: boolean | Prisma.EquipementDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienEquipement"]>;
export type BienEquipementSelectScalar = {
    bienId?: boolean;
    equipementId?: boolean;
};
export type BienEquipementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"bienId" | "equipementId", ExtArgs["result"]["bienEquipement"]>;
export type BienEquipementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    equipement?: boolean | Prisma.EquipementDefaultArgs<ExtArgs>;
};
export type BienEquipementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    equipement?: boolean | Prisma.EquipementDefaultArgs<ExtArgs>;
};
export type BienEquipementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    equipement?: boolean | Prisma.EquipementDefaultArgs<ExtArgs>;
};
export type $BienEquipementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BienEquipement";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
        equipement: Prisma.$EquipementPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        bienId: string;
        equipementId: string;
    }, ExtArgs["result"]["bienEquipement"]>;
    composites: {};
};
export type BienEquipementGetPayload<S extends boolean | null | undefined | BienEquipementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload, S>;
export type BienEquipementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BienEquipementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BienEquipementCountAggregateInputType | true;
};
export interface BienEquipementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BienEquipement'];
        meta: {
            name: 'BienEquipement';
        };
    };
    /**
     * Find zero or one BienEquipement that matches the filter.
     * @param {BienEquipementFindUniqueArgs} args - Arguments to find a BienEquipement
     * @example
     * // Get one BienEquipement
     * const bienEquipement = await prisma.bienEquipement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BienEquipementFindUniqueArgs>(args: Prisma.SelectSubset<T, BienEquipementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BienEquipement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BienEquipementFindUniqueOrThrowArgs} args - Arguments to find a BienEquipement
     * @example
     * // Get one BienEquipement
     * const bienEquipement = await prisma.bienEquipement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BienEquipementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BienEquipementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BienEquipement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienEquipementFindFirstArgs} args - Arguments to find a BienEquipement
     * @example
     * // Get one BienEquipement
     * const bienEquipement = await prisma.bienEquipement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BienEquipementFindFirstArgs>(args?: Prisma.SelectSubset<T, BienEquipementFindFirstArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BienEquipement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienEquipementFindFirstOrThrowArgs} args - Arguments to find a BienEquipement
     * @example
     * // Get one BienEquipement
     * const bienEquipement = await prisma.bienEquipement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BienEquipementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BienEquipementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BienEquipements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienEquipementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BienEquipements
     * const bienEquipements = await prisma.bienEquipement.findMany()
     *
     * // Get first 10 BienEquipements
     * const bienEquipements = await prisma.bienEquipement.findMany({ take: 10 })
     *
     * // Only select the `bienId`
     * const bienEquipementWithBienIdOnly = await prisma.bienEquipement.findMany({ select: { bienId: true } })
     *
     */
    findMany<T extends BienEquipementFindManyArgs>(args?: Prisma.SelectSubset<T, BienEquipementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BienEquipement.
     * @param {BienEquipementCreateArgs} args - Arguments to create a BienEquipement.
     * @example
     * // Create one BienEquipement
     * const BienEquipement = await prisma.bienEquipement.create({
     *   data: {
     *     // ... data to create a BienEquipement
     *   }
     * })
     *
     */
    create<T extends BienEquipementCreateArgs>(args: Prisma.SelectSubset<T, BienEquipementCreateArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BienEquipements.
     * @param {BienEquipementCreateManyArgs} args - Arguments to create many BienEquipements.
     * @example
     * // Create many BienEquipements
     * const bienEquipement = await prisma.bienEquipement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BienEquipementCreateManyArgs>(args?: Prisma.SelectSubset<T, BienEquipementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BienEquipements and returns the data saved in the database.
     * @param {BienEquipementCreateManyAndReturnArgs} args - Arguments to create many BienEquipements.
     * @example
     * // Create many BienEquipements
     * const bienEquipement = await prisma.bienEquipement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BienEquipements and only return the `bienId`
     * const bienEquipementWithBienIdOnly = await prisma.bienEquipement.createManyAndReturn({
     *   select: { bienId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BienEquipementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BienEquipementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BienEquipement.
     * @param {BienEquipementDeleteArgs} args - Arguments to delete one BienEquipement.
     * @example
     * // Delete one BienEquipement
     * const BienEquipement = await prisma.bienEquipement.delete({
     *   where: {
     *     // ... filter to delete one BienEquipement
     *   }
     * })
     *
     */
    delete<T extends BienEquipementDeleteArgs>(args: Prisma.SelectSubset<T, BienEquipementDeleteArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BienEquipement.
     * @param {BienEquipementUpdateArgs} args - Arguments to update one BienEquipement.
     * @example
     * // Update one BienEquipement
     * const bienEquipement = await prisma.bienEquipement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BienEquipementUpdateArgs>(args: Prisma.SelectSubset<T, BienEquipementUpdateArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BienEquipements.
     * @param {BienEquipementDeleteManyArgs} args - Arguments to filter BienEquipements to delete.
     * @example
     * // Delete a few BienEquipements
     * const { count } = await prisma.bienEquipement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BienEquipementDeleteManyArgs>(args?: Prisma.SelectSubset<T, BienEquipementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BienEquipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienEquipementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BienEquipements
     * const bienEquipement = await prisma.bienEquipement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BienEquipementUpdateManyArgs>(args: Prisma.SelectSubset<T, BienEquipementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BienEquipements and returns the data updated in the database.
     * @param {BienEquipementUpdateManyAndReturnArgs} args - Arguments to update many BienEquipements.
     * @example
     * // Update many BienEquipements
     * const bienEquipement = await prisma.bienEquipement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BienEquipements and only return the `bienId`
     * const bienEquipementWithBienIdOnly = await prisma.bienEquipement.updateManyAndReturn({
     *   select: { bienId: true },
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
    updateManyAndReturn<T extends BienEquipementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BienEquipementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BienEquipement.
     * @param {BienEquipementUpsertArgs} args - Arguments to update or create a BienEquipement.
     * @example
     * // Update or create a BienEquipement
     * const bienEquipement = await prisma.bienEquipement.upsert({
     *   create: {
     *     // ... data to create a BienEquipement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BienEquipement we want to update
     *   }
     * })
     */
    upsert<T extends BienEquipementUpsertArgs>(args: Prisma.SelectSubset<T, BienEquipementUpsertArgs<ExtArgs>>): Prisma.Prisma__BienEquipementClient<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BienEquipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienEquipementCountArgs} args - Arguments to filter BienEquipements to count.
     * @example
     * // Count the number of BienEquipements
     * const count = await prisma.bienEquipement.count({
     *   where: {
     *     // ... the filter for the BienEquipements we want to count
     *   }
     * })
    **/
    count<T extends BienEquipementCountArgs>(args?: Prisma.Subset<T, BienEquipementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BienEquipementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BienEquipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienEquipementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BienEquipementAggregateArgs>(args: Prisma.Subset<T, BienEquipementAggregateArgs>): Prisma.PrismaPromise<GetBienEquipementAggregateType<T>>;
    /**
     * Group by BienEquipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienEquipementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BienEquipementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BienEquipementGroupByArgs['orderBy'];
    } : {
        orderBy?: BienEquipementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BienEquipementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBienEquipementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BienEquipement model
     */
    readonly fields: BienEquipementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BienEquipement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BienEquipementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    equipement<T extends Prisma.EquipementDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EquipementDefaultArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BienEquipement model
 */
export interface BienEquipementFieldRefs {
    readonly bienId: Prisma.FieldRef<"BienEquipement", 'String'>;
    readonly equipementId: Prisma.FieldRef<"BienEquipement", 'String'>;
}
/**
 * BienEquipement findUnique
 */
export type BienEquipementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which BienEquipement to fetch.
     */
    where: Prisma.BienEquipementWhereUniqueInput;
};
/**
 * BienEquipement findUniqueOrThrow
 */
export type BienEquipementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which BienEquipement to fetch.
     */
    where: Prisma.BienEquipementWhereUniqueInput;
};
/**
 * BienEquipement findFirst
 */
export type BienEquipementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which BienEquipement to fetch.
     */
    where?: Prisma.BienEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienEquipements to fetch.
     */
    orderBy?: Prisma.BienEquipementOrderByWithRelationInput | Prisma.BienEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BienEquipements.
     */
    cursor?: Prisma.BienEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienEquipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BienEquipements.
     */
    distinct?: Prisma.BienEquipementScalarFieldEnum | Prisma.BienEquipementScalarFieldEnum[];
};
/**
 * BienEquipement findFirstOrThrow
 */
export type BienEquipementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which BienEquipement to fetch.
     */
    where?: Prisma.BienEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienEquipements to fetch.
     */
    orderBy?: Prisma.BienEquipementOrderByWithRelationInput | Prisma.BienEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BienEquipements.
     */
    cursor?: Prisma.BienEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienEquipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BienEquipements.
     */
    distinct?: Prisma.BienEquipementScalarFieldEnum | Prisma.BienEquipementScalarFieldEnum[];
};
/**
 * BienEquipement findMany
 */
export type BienEquipementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which BienEquipements to fetch.
     */
    where?: Prisma.BienEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienEquipements to fetch.
     */
    orderBy?: Prisma.BienEquipementOrderByWithRelationInput | Prisma.BienEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BienEquipements.
     */
    cursor?: Prisma.BienEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienEquipements.
     */
    skip?: number;
    distinct?: Prisma.BienEquipementScalarFieldEnum | Prisma.BienEquipementScalarFieldEnum[];
};
/**
 * BienEquipement create
 */
export type BienEquipementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * The data needed to create a BienEquipement.
     */
    data: Prisma.XOR<Prisma.BienEquipementCreateInput, Prisma.BienEquipementUncheckedCreateInput>;
};
/**
 * BienEquipement createMany
 */
export type BienEquipementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BienEquipements.
     */
    data: Prisma.BienEquipementCreateManyInput | Prisma.BienEquipementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BienEquipement createManyAndReturn
 */
export type BienEquipementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * The data used to create many BienEquipements.
     */
    data: Prisma.BienEquipementCreateManyInput | Prisma.BienEquipementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BienEquipement update
 */
export type BienEquipementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * The data needed to update a BienEquipement.
     */
    data: Prisma.XOR<Prisma.BienEquipementUpdateInput, Prisma.BienEquipementUncheckedUpdateInput>;
    /**
     * Choose, which BienEquipement to update.
     */
    where: Prisma.BienEquipementWhereUniqueInput;
};
/**
 * BienEquipement updateMany
 */
export type BienEquipementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BienEquipements.
     */
    data: Prisma.XOR<Prisma.BienEquipementUpdateManyMutationInput, Prisma.BienEquipementUncheckedUpdateManyInput>;
    /**
     * Filter which BienEquipements to update
     */
    where?: Prisma.BienEquipementWhereInput;
    /**
     * Limit how many BienEquipements to update.
     */
    limit?: number;
};
/**
 * BienEquipement updateManyAndReturn
 */
export type BienEquipementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * The data used to update BienEquipements.
     */
    data: Prisma.XOR<Prisma.BienEquipementUpdateManyMutationInput, Prisma.BienEquipementUncheckedUpdateManyInput>;
    /**
     * Filter which BienEquipements to update
     */
    where?: Prisma.BienEquipementWhereInput;
    /**
     * Limit how many BienEquipements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BienEquipement upsert
 */
export type BienEquipementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * The filter to search for the BienEquipement to update in case it exists.
     */
    where: Prisma.BienEquipementWhereUniqueInput;
    /**
     * In case the BienEquipement found by the `where` argument doesn't exist, create a new BienEquipement with this data.
     */
    create: Prisma.XOR<Prisma.BienEquipementCreateInput, Prisma.BienEquipementUncheckedCreateInput>;
    /**
     * In case the BienEquipement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BienEquipementUpdateInput, Prisma.BienEquipementUncheckedUpdateInput>;
};
/**
 * BienEquipement delete
 */
export type BienEquipementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    /**
     * Filter which BienEquipement to delete.
     */
    where: Prisma.BienEquipementWhereUniqueInput;
};
/**
 * BienEquipement deleteMany
 */
export type BienEquipementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BienEquipements to delete
     */
    where?: Prisma.BienEquipementWhereInput;
    /**
     * Limit how many BienEquipements to delete.
     */
    limit?: number;
};
/**
 * BienEquipement without action
 */
export type BienEquipementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=BienEquipement.d.ts.map