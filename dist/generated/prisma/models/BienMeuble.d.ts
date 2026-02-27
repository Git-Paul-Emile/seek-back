import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BienMeuble
 *
 */
export type BienMeubleModel = runtime.Types.Result.DefaultSelection<Prisma.$BienMeublePayload>;
export type AggregateBienMeuble = {
    _count: BienMeubleCountAggregateOutputType | null;
    _avg: BienMeubleAvgAggregateOutputType | null;
    _sum: BienMeubleSumAggregateOutputType | null;
    _min: BienMeubleMinAggregateOutputType | null;
    _max: BienMeubleMaxAggregateOutputType | null;
};
export type BienMeubleAvgAggregateOutputType = {
    quantite: number | null;
};
export type BienMeubleSumAggregateOutputType = {
    quantite: number | null;
};
export type BienMeubleMinAggregateOutputType = {
    bienId: string | null;
    meubleId: string | null;
    quantite: number | null;
};
export type BienMeubleMaxAggregateOutputType = {
    bienId: string | null;
    meubleId: string | null;
    quantite: number | null;
};
export type BienMeubleCountAggregateOutputType = {
    bienId: number;
    meubleId: number;
    quantite: number;
    _all: number;
};
export type BienMeubleAvgAggregateInputType = {
    quantite?: true;
};
export type BienMeubleSumAggregateInputType = {
    quantite?: true;
};
export type BienMeubleMinAggregateInputType = {
    bienId?: true;
    meubleId?: true;
    quantite?: true;
};
export type BienMeubleMaxAggregateInputType = {
    bienId?: true;
    meubleId?: true;
    quantite?: true;
};
export type BienMeubleCountAggregateInputType = {
    bienId?: true;
    meubleId?: true;
    quantite?: true;
    _all?: true;
};
export type BienMeubleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BienMeuble to aggregate.
     */
    where?: Prisma.BienMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienMeubles to fetch.
     */
    orderBy?: Prisma.BienMeubleOrderByWithRelationInput | Prisma.BienMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BienMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienMeubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BienMeubles
    **/
    _count?: true | BienMeubleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BienMeubleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BienMeubleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BienMeubleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BienMeubleMaxAggregateInputType;
};
export type GetBienMeubleAggregateType<T extends BienMeubleAggregateArgs> = {
    [P in keyof T & keyof AggregateBienMeuble]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBienMeuble[P]> : Prisma.GetScalarType<T[P], AggregateBienMeuble[P]>;
};
export type BienMeubleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienMeubleWhereInput;
    orderBy?: Prisma.BienMeubleOrderByWithAggregationInput | Prisma.BienMeubleOrderByWithAggregationInput[];
    by: Prisma.BienMeubleScalarFieldEnum[] | Prisma.BienMeubleScalarFieldEnum;
    having?: Prisma.BienMeubleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BienMeubleCountAggregateInputType | true;
    _avg?: BienMeubleAvgAggregateInputType;
    _sum?: BienMeubleSumAggregateInputType;
    _min?: BienMeubleMinAggregateInputType;
    _max?: BienMeubleMaxAggregateInputType;
};
export type BienMeubleGroupByOutputType = {
    bienId: string;
    meubleId: string;
    quantite: number;
    _count: BienMeubleCountAggregateOutputType | null;
    _avg: BienMeubleAvgAggregateOutputType | null;
    _sum: BienMeubleSumAggregateOutputType | null;
    _min: BienMeubleMinAggregateOutputType | null;
    _max: BienMeubleMaxAggregateOutputType | null;
};
type GetBienMeubleGroupByPayload<T extends BienMeubleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BienMeubleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BienMeubleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BienMeubleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BienMeubleGroupByOutputType[P]>;
}>>;
export type BienMeubleWhereInput = {
    AND?: Prisma.BienMeubleWhereInput | Prisma.BienMeubleWhereInput[];
    OR?: Prisma.BienMeubleWhereInput[];
    NOT?: Prisma.BienMeubleWhereInput | Prisma.BienMeubleWhereInput[];
    bienId?: Prisma.StringFilter<"BienMeuble"> | string;
    meubleId?: Prisma.StringFilter<"BienMeuble"> | string;
    quantite?: Prisma.IntFilter<"BienMeuble"> | number;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    meuble?: Prisma.XOR<Prisma.MeubleScalarRelationFilter, Prisma.MeubleWhereInput>;
};
export type BienMeubleOrderByWithRelationInput = {
    bienId?: Prisma.SortOrder;
    meubleId?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
    meuble?: Prisma.MeubleOrderByWithRelationInput;
};
export type BienMeubleWhereUniqueInput = Prisma.AtLeast<{
    bienId_meubleId?: Prisma.BienMeubleBienIdMeubleIdCompoundUniqueInput;
    AND?: Prisma.BienMeubleWhereInput | Prisma.BienMeubleWhereInput[];
    OR?: Prisma.BienMeubleWhereInput[];
    NOT?: Prisma.BienMeubleWhereInput | Prisma.BienMeubleWhereInput[];
    bienId?: Prisma.StringFilter<"BienMeuble"> | string;
    meubleId?: Prisma.StringFilter<"BienMeuble"> | string;
    quantite?: Prisma.IntFilter<"BienMeuble"> | number;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    meuble?: Prisma.XOR<Prisma.MeubleScalarRelationFilter, Prisma.MeubleWhereInput>;
}, "bienId_meubleId">;
export type BienMeubleOrderByWithAggregationInput = {
    bienId?: Prisma.SortOrder;
    meubleId?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
    _count?: Prisma.BienMeubleCountOrderByAggregateInput;
    _avg?: Prisma.BienMeubleAvgOrderByAggregateInput;
    _max?: Prisma.BienMeubleMaxOrderByAggregateInput;
    _min?: Prisma.BienMeubleMinOrderByAggregateInput;
    _sum?: Prisma.BienMeubleSumOrderByAggregateInput;
};
export type BienMeubleScalarWhereWithAggregatesInput = {
    AND?: Prisma.BienMeubleScalarWhereWithAggregatesInput | Prisma.BienMeubleScalarWhereWithAggregatesInput[];
    OR?: Prisma.BienMeubleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BienMeubleScalarWhereWithAggregatesInput | Prisma.BienMeubleScalarWhereWithAggregatesInput[];
    bienId?: Prisma.StringWithAggregatesFilter<"BienMeuble"> | string;
    meubleId?: Prisma.StringWithAggregatesFilter<"BienMeuble"> | string;
    quantite?: Prisma.IntWithAggregatesFilter<"BienMeuble"> | number;
};
export type BienMeubleCreateInput = {
    quantite?: number;
    bien: Prisma.BienCreateNestedOneWithoutMeublesInput;
    meuble: Prisma.MeubleCreateNestedOneWithoutBiensInput;
};
export type BienMeubleUncheckedCreateInput = {
    bienId: string;
    meubleId: string;
    quantite?: number;
};
export type BienMeubleUpdateInput = {
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    bien?: Prisma.BienUpdateOneRequiredWithoutMeublesNestedInput;
    meuble?: Prisma.MeubleUpdateOneRequiredWithoutBiensNestedInput;
};
export type BienMeubleUncheckedUpdateInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    meubleId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BienMeubleCreateManyInput = {
    bienId: string;
    meubleId: string;
    quantite?: number;
};
export type BienMeubleUpdateManyMutationInput = {
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BienMeubleUncheckedUpdateManyInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    meubleId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BienMeubleListRelationFilter = {
    every?: Prisma.BienMeubleWhereInput;
    some?: Prisma.BienMeubleWhereInput;
    none?: Prisma.BienMeubleWhereInput;
};
export type BienMeubleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BienMeubleBienIdMeubleIdCompoundUniqueInput = {
    bienId: string;
    meubleId: string;
};
export type BienMeubleCountOrderByAggregateInput = {
    bienId?: Prisma.SortOrder;
    meubleId?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
};
export type BienMeubleAvgOrderByAggregateInput = {
    quantite?: Prisma.SortOrder;
};
export type BienMeubleMaxOrderByAggregateInput = {
    bienId?: Prisma.SortOrder;
    meubleId?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
};
export type BienMeubleMinOrderByAggregateInput = {
    bienId?: Prisma.SortOrder;
    meubleId?: Prisma.SortOrder;
    quantite?: Prisma.SortOrder;
};
export type BienMeubleSumOrderByAggregateInput = {
    quantite?: Prisma.SortOrder;
};
export type BienMeubleCreateNestedManyWithoutMeubleInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutMeubleInput, Prisma.BienMeubleUncheckedCreateWithoutMeubleInput> | Prisma.BienMeubleCreateWithoutMeubleInput[] | Prisma.BienMeubleUncheckedCreateWithoutMeubleInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutMeubleInput | Prisma.BienMeubleCreateOrConnectWithoutMeubleInput[];
    createMany?: Prisma.BienMeubleCreateManyMeubleInputEnvelope;
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
};
export type BienMeubleUncheckedCreateNestedManyWithoutMeubleInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutMeubleInput, Prisma.BienMeubleUncheckedCreateWithoutMeubleInput> | Prisma.BienMeubleCreateWithoutMeubleInput[] | Prisma.BienMeubleUncheckedCreateWithoutMeubleInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutMeubleInput | Prisma.BienMeubleCreateOrConnectWithoutMeubleInput[];
    createMany?: Prisma.BienMeubleCreateManyMeubleInputEnvelope;
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
};
export type BienMeubleUpdateManyWithoutMeubleNestedInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutMeubleInput, Prisma.BienMeubleUncheckedCreateWithoutMeubleInput> | Prisma.BienMeubleCreateWithoutMeubleInput[] | Prisma.BienMeubleUncheckedCreateWithoutMeubleInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutMeubleInput | Prisma.BienMeubleCreateOrConnectWithoutMeubleInput[];
    upsert?: Prisma.BienMeubleUpsertWithWhereUniqueWithoutMeubleInput | Prisma.BienMeubleUpsertWithWhereUniqueWithoutMeubleInput[];
    createMany?: Prisma.BienMeubleCreateManyMeubleInputEnvelope;
    set?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    disconnect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    delete?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    update?: Prisma.BienMeubleUpdateWithWhereUniqueWithoutMeubleInput | Prisma.BienMeubleUpdateWithWhereUniqueWithoutMeubleInput[];
    updateMany?: Prisma.BienMeubleUpdateManyWithWhereWithoutMeubleInput | Prisma.BienMeubleUpdateManyWithWhereWithoutMeubleInput[];
    deleteMany?: Prisma.BienMeubleScalarWhereInput | Prisma.BienMeubleScalarWhereInput[];
};
export type BienMeubleUncheckedUpdateManyWithoutMeubleNestedInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutMeubleInput, Prisma.BienMeubleUncheckedCreateWithoutMeubleInput> | Prisma.BienMeubleCreateWithoutMeubleInput[] | Prisma.BienMeubleUncheckedCreateWithoutMeubleInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutMeubleInput | Prisma.BienMeubleCreateOrConnectWithoutMeubleInput[];
    upsert?: Prisma.BienMeubleUpsertWithWhereUniqueWithoutMeubleInput | Prisma.BienMeubleUpsertWithWhereUniqueWithoutMeubleInput[];
    createMany?: Prisma.BienMeubleCreateManyMeubleInputEnvelope;
    set?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    disconnect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    delete?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    update?: Prisma.BienMeubleUpdateWithWhereUniqueWithoutMeubleInput | Prisma.BienMeubleUpdateWithWhereUniqueWithoutMeubleInput[];
    updateMany?: Prisma.BienMeubleUpdateManyWithWhereWithoutMeubleInput | Prisma.BienMeubleUpdateManyWithWhereWithoutMeubleInput[];
    deleteMany?: Prisma.BienMeubleScalarWhereInput | Prisma.BienMeubleScalarWhereInput[];
};
export type BienMeubleCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutBienInput, Prisma.BienMeubleUncheckedCreateWithoutBienInput> | Prisma.BienMeubleCreateWithoutBienInput[] | Prisma.BienMeubleUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutBienInput | Prisma.BienMeubleCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BienMeubleCreateManyBienInputEnvelope;
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
};
export type BienMeubleUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutBienInput, Prisma.BienMeubleUncheckedCreateWithoutBienInput> | Prisma.BienMeubleCreateWithoutBienInput[] | Prisma.BienMeubleUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutBienInput | Prisma.BienMeubleCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BienMeubleCreateManyBienInputEnvelope;
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
};
export type BienMeubleUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutBienInput, Prisma.BienMeubleUncheckedCreateWithoutBienInput> | Prisma.BienMeubleCreateWithoutBienInput[] | Prisma.BienMeubleUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutBienInput | Prisma.BienMeubleCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BienMeubleUpsertWithWhereUniqueWithoutBienInput | Prisma.BienMeubleUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BienMeubleCreateManyBienInputEnvelope;
    set?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    disconnect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    delete?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    update?: Prisma.BienMeubleUpdateWithWhereUniqueWithoutBienInput | Prisma.BienMeubleUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BienMeubleUpdateManyWithWhereWithoutBienInput | Prisma.BienMeubleUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BienMeubleScalarWhereInput | Prisma.BienMeubleScalarWhereInput[];
};
export type BienMeubleUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienMeubleCreateWithoutBienInput, Prisma.BienMeubleUncheckedCreateWithoutBienInput> | Prisma.BienMeubleCreateWithoutBienInput[] | Prisma.BienMeubleUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienMeubleCreateOrConnectWithoutBienInput | Prisma.BienMeubleCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BienMeubleUpsertWithWhereUniqueWithoutBienInput | Prisma.BienMeubleUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BienMeubleCreateManyBienInputEnvelope;
    set?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    disconnect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    delete?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    connect?: Prisma.BienMeubleWhereUniqueInput | Prisma.BienMeubleWhereUniqueInput[];
    update?: Prisma.BienMeubleUpdateWithWhereUniqueWithoutBienInput | Prisma.BienMeubleUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BienMeubleUpdateManyWithWhereWithoutBienInput | Prisma.BienMeubleUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BienMeubleScalarWhereInput | Prisma.BienMeubleScalarWhereInput[];
};
export type BienMeubleCreateWithoutMeubleInput = {
    quantite?: number;
    bien: Prisma.BienCreateNestedOneWithoutMeublesInput;
};
export type BienMeubleUncheckedCreateWithoutMeubleInput = {
    bienId: string;
    quantite?: number;
};
export type BienMeubleCreateOrConnectWithoutMeubleInput = {
    where: Prisma.BienMeubleWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienMeubleCreateWithoutMeubleInput, Prisma.BienMeubleUncheckedCreateWithoutMeubleInput>;
};
export type BienMeubleCreateManyMeubleInputEnvelope = {
    data: Prisma.BienMeubleCreateManyMeubleInput | Prisma.BienMeubleCreateManyMeubleInput[];
    skipDuplicates?: boolean;
};
export type BienMeubleUpsertWithWhereUniqueWithoutMeubleInput = {
    where: Prisma.BienMeubleWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienMeubleUpdateWithoutMeubleInput, Prisma.BienMeubleUncheckedUpdateWithoutMeubleInput>;
    create: Prisma.XOR<Prisma.BienMeubleCreateWithoutMeubleInput, Prisma.BienMeubleUncheckedCreateWithoutMeubleInput>;
};
export type BienMeubleUpdateWithWhereUniqueWithoutMeubleInput = {
    where: Prisma.BienMeubleWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienMeubleUpdateWithoutMeubleInput, Prisma.BienMeubleUncheckedUpdateWithoutMeubleInput>;
};
export type BienMeubleUpdateManyWithWhereWithoutMeubleInput = {
    where: Prisma.BienMeubleScalarWhereInput;
    data: Prisma.XOR<Prisma.BienMeubleUpdateManyMutationInput, Prisma.BienMeubleUncheckedUpdateManyWithoutMeubleInput>;
};
export type BienMeubleScalarWhereInput = {
    AND?: Prisma.BienMeubleScalarWhereInput | Prisma.BienMeubleScalarWhereInput[];
    OR?: Prisma.BienMeubleScalarWhereInput[];
    NOT?: Prisma.BienMeubleScalarWhereInput | Prisma.BienMeubleScalarWhereInput[];
    bienId?: Prisma.StringFilter<"BienMeuble"> | string;
    meubleId?: Prisma.StringFilter<"BienMeuble"> | string;
    quantite?: Prisma.IntFilter<"BienMeuble"> | number;
};
export type BienMeubleCreateWithoutBienInput = {
    quantite?: number;
    meuble: Prisma.MeubleCreateNestedOneWithoutBiensInput;
};
export type BienMeubleUncheckedCreateWithoutBienInput = {
    meubleId: string;
    quantite?: number;
};
export type BienMeubleCreateOrConnectWithoutBienInput = {
    where: Prisma.BienMeubleWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienMeubleCreateWithoutBienInput, Prisma.BienMeubleUncheckedCreateWithoutBienInput>;
};
export type BienMeubleCreateManyBienInputEnvelope = {
    data: Prisma.BienMeubleCreateManyBienInput | Prisma.BienMeubleCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type BienMeubleUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.BienMeubleWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienMeubleUpdateWithoutBienInput, Prisma.BienMeubleUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.BienMeubleCreateWithoutBienInput, Prisma.BienMeubleUncheckedCreateWithoutBienInput>;
};
export type BienMeubleUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.BienMeubleWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienMeubleUpdateWithoutBienInput, Prisma.BienMeubleUncheckedUpdateWithoutBienInput>;
};
export type BienMeubleUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.BienMeubleScalarWhereInput;
    data: Prisma.XOR<Prisma.BienMeubleUpdateManyMutationInput, Prisma.BienMeubleUncheckedUpdateManyWithoutBienInput>;
};
export type BienMeubleCreateManyMeubleInput = {
    bienId: string;
    quantite?: number;
};
export type BienMeubleUpdateWithoutMeubleInput = {
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    bien?: Prisma.BienUpdateOneRequiredWithoutMeublesNestedInput;
};
export type BienMeubleUncheckedUpdateWithoutMeubleInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BienMeubleUncheckedUpdateManyWithoutMeubleInput = {
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BienMeubleCreateManyBienInput = {
    meubleId: string;
    quantite?: number;
};
export type BienMeubleUpdateWithoutBienInput = {
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
    meuble?: Prisma.MeubleUpdateOneRequiredWithoutBiensNestedInput;
};
export type BienMeubleUncheckedUpdateWithoutBienInput = {
    meubleId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BienMeubleUncheckedUpdateManyWithoutBienInput = {
    meubleId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantite?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BienMeubleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bienId?: boolean;
    meubleId?: boolean;
    quantite?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    meuble?: boolean | Prisma.MeubleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienMeuble"]>;
export type BienMeubleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bienId?: boolean;
    meubleId?: boolean;
    quantite?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    meuble?: boolean | Prisma.MeubleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienMeuble"]>;
export type BienMeubleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bienId?: boolean;
    meubleId?: boolean;
    quantite?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    meuble?: boolean | Prisma.MeubleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienMeuble"]>;
export type BienMeubleSelectScalar = {
    bienId?: boolean;
    meubleId?: boolean;
    quantite?: boolean;
};
export type BienMeubleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"bienId" | "meubleId" | "quantite", ExtArgs["result"]["bienMeuble"]>;
export type BienMeubleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    meuble?: boolean | Prisma.MeubleDefaultArgs<ExtArgs>;
};
export type BienMeubleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    meuble?: boolean | Prisma.MeubleDefaultArgs<ExtArgs>;
};
export type BienMeubleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    meuble?: boolean | Prisma.MeubleDefaultArgs<ExtArgs>;
};
export type $BienMeublePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BienMeuble";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
        meuble: Prisma.$MeublePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        bienId: string;
        meubleId: string;
        quantite: number;
    }, ExtArgs["result"]["bienMeuble"]>;
    composites: {};
};
export type BienMeubleGetPayload<S extends boolean | null | undefined | BienMeubleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BienMeublePayload, S>;
export type BienMeubleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BienMeubleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BienMeubleCountAggregateInputType | true;
};
export interface BienMeubleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BienMeuble'];
        meta: {
            name: 'BienMeuble';
        };
    };
    /**
     * Find zero or one BienMeuble that matches the filter.
     * @param {BienMeubleFindUniqueArgs} args - Arguments to find a BienMeuble
     * @example
     * // Get one BienMeuble
     * const bienMeuble = await prisma.bienMeuble.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BienMeubleFindUniqueArgs>(args: Prisma.SelectSubset<T, BienMeubleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BienMeuble that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BienMeubleFindUniqueOrThrowArgs} args - Arguments to find a BienMeuble
     * @example
     * // Get one BienMeuble
     * const bienMeuble = await prisma.bienMeuble.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BienMeubleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BienMeubleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BienMeuble that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienMeubleFindFirstArgs} args - Arguments to find a BienMeuble
     * @example
     * // Get one BienMeuble
     * const bienMeuble = await prisma.bienMeuble.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BienMeubleFindFirstArgs>(args?: Prisma.SelectSubset<T, BienMeubleFindFirstArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BienMeuble that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienMeubleFindFirstOrThrowArgs} args - Arguments to find a BienMeuble
     * @example
     * // Get one BienMeuble
     * const bienMeuble = await prisma.bienMeuble.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BienMeubleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BienMeubleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BienMeubles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienMeubleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BienMeubles
     * const bienMeubles = await prisma.bienMeuble.findMany()
     *
     * // Get first 10 BienMeubles
     * const bienMeubles = await prisma.bienMeuble.findMany({ take: 10 })
     *
     * // Only select the `bienId`
     * const bienMeubleWithBienIdOnly = await prisma.bienMeuble.findMany({ select: { bienId: true } })
     *
     */
    findMany<T extends BienMeubleFindManyArgs>(args?: Prisma.SelectSubset<T, BienMeubleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BienMeuble.
     * @param {BienMeubleCreateArgs} args - Arguments to create a BienMeuble.
     * @example
     * // Create one BienMeuble
     * const BienMeuble = await prisma.bienMeuble.create({
     *   data: {
     *     // ... data to create a BienMeuble
     *   }
     * })
     *
     */
    create<T extends BienMeubleCreateArgs>(args: Prisma.SelectSubset<T, BienMeubleCreateArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BienMeubles.
     * @param {BienMeubleCreateManyArgs} args - Arguments to create many BienMeubles.
     * @example
     * // Create many BienMeubles
     * const bienMeuble = await prisma.bienMeuble.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BienMeubleCreateManyArgs>(args?: Prisma.SelectSubset<T, BienMeubleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BienMeubles and returns the data saved in the database.
     * @param {BienMeubleCreateManyAndReturnArgs} args - Arguments to create many BienMeubles.
     * @example
     * // Create many BienMeubles
     * const bienMeuble = await prisma.bienMeuble.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BienMeubles and only return the `bienId`
     * const bienMeubleWithBienIdOnly = await prisma.bienMeuble.createManyAndReturn({
     *   select: { bienId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BienMeubleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BienMeubleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BienMeuble.
     * @param {BienMeubleDeleteArgs} args - Arguments to delete one BienMeuble.
     * @example
     * // Delete one BienMeuble
     * const BienMeuble = await prisma.bienMeuble.delete({
     *   where: {
     *     // ... filter to delete one BienMeuble
     *   }
     * })
     *
     */
    delete<T extends BienMeubleDeleteArgs>(args: Prisma.SelectSubset<T, BienMeubleDeleteArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BienMeuble.
     * @param {BienMeubleUpdateArgs} args - Arguments to update one BienMeuble.
     * @example
     * // Update one BienMeuble
     * const bienMeuble = await prisma.bienMeuble.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BienMeubleUpdateArgs>(args: Prisma.SelectSubset<T, BienMeubleUpdateArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BienMeubles.
     * @param {BienMeubleDeleteManyArgs} args - Arguments to filter BienMeubles to delete.
     * @example
     * // Delete a few BienMeubles
     * const { count } = await prisma.bienMeuble.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BienMeubleDeleteManyArgs>(args?: Prisma.SelectSubset<T, BienMeubleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BienMeubles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienMeubleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BienMeubles
     * const bienMeuble = await prisma.bienMeuble.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BienMeubleUpdateManyArgs>(args: Prisma.SelectSubset<T, BienMeubleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BienMeubles and returns the data updated in the database.
     * @param {BienMeubleUpdateManyAndReturnArgs} args - Arguments to update many BienMeubles.
     * @example
     * // Update many BienMeubles
     * const bienMeuble = await prisma.bienMeuble.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BienMeubles and only return the `bienId`
     * const bienMeubleWithBienIdOnly = await prisma.bienMeuble.updateManyAndReturn({
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
    updateManyAndReturn<T extends BienMeubleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BienMeubleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BienMeuble.
     * @param {BienMeubleUpsertArgs} args - Arguments to update or create a BienMeuble.
     * @example
     * // Update or create a BienMeuble
     * const bienMeuble = await prisma.bienMeuble.upsert({
     *   create: {
     *     // ... data to create a BienMeuble
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BienMeuble we want to update
     *   }
     * })
     */
    upsert<T extends BienMeubleUpsertArgs>(args: Prisma.SelectSubset<T, BienMeubleUpsertArgs<ExtArgs>>): Prisma.Prisma__BienMeubleClient<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BienMeubles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienMeubleCountArgs} args - Arguments to filter BienMeubles to count.
     * @example
     * // Count the number of BienMeubles
     * const count = await prisma.bienMeuble.count({
     *   where: {
     *     // ... the filter for the BienMeubles we want to count
     *   }
     * })
    **/
    count<T extends BienMeubleCountArgs>(args?: Prisma.Subset<T, BienMeubleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BienMeubleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BienMeuble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienMeubleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BienMeubleAggregateArgs>(args: Prisma.Subset<T, BienMeubleAggregateArgs>): Prisma.PrismaPromise<GetBienMeubleAggregateType<T>>;
    /**
     * Group by BienMeuble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienMeubleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BienMeubleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BienMeubleGroupByArgs['orderBy'];
    } : {
        orderBy?: BienMeubleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BienMeubleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBienMeubleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BienMeuble model
     */
    readonly fields: BienMeubleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BienMeuble.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BienMeubleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    meuble<T extends Prisma.MeubleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MeubleDefaultArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BienMeuble model
 */
export interface BienMeubleFieldRefs {
    readonly bienId: Prisma.FieldRef<"BienMeuble", 'String'>;
    readonly meubleId: Prisma.FieldRef<"BienMeuble", 'String'>;
    readonly quantite: Prisma.FieldRef<"BienMeuble", 'Int'>;
}
/**
 * BienMeuble findUnique
 */
export type BienMeubleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which BienMeuble to fetch.
     */
    where: Prisma.BienMeubleWhereUniqueInput;
};
/**
 * BienMeuble findUniqueOrThrow
 */
export type BienMeubleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which BienMeuble to fetch.
     */
    where: Prisma.BienMeubleWhereUniqueInput;
};
/**
 * BienMeuble findFirst
 */
export type BienMeubleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which BienMeuble to fetch.
     */
    where?: Prisma.BienMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienMeubles to fetch.
     */
    orderBy?: Prisma.BienMeubleOrderByWithRelationInput | Prisma.BienMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BienMeubles.
     */
    cursor?: Prisma.BienMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienMeubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BienMeubles.
     */
    distinct?: Prisma.BienMeubleScalarFieldEnum | Prisma.BienMeubleScalarFieldEnum[];
};
/**
 * BienMeuble findFirstOrThrow
 */
export type BienMeubleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which BienMeuble to fetch.
     */
    where?: Prisma.BienMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienMeubles to fetch.
     */
    orderBy?: Prisma.BienMeubleOrderByWithRelationInput | Prisma.BienMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BienMeubles.
     */
    cursor?: Prisma.BienMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienMeubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BienMeubles.
     */
    distinct?: Prisma.BienMeubleScalarFieldEnum | Prisma.BienMeubleScalarFieldEnum[];
};
/**
 * BienMeuble findMany
 */
export type BienMeubleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which BienMeubles to fetch.
     */
    where?: Prisma.BienMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienMeubles to fetch.
     */
    orderBy?: Prisma.BienMeubleOrderByWithRelationInput | Prisma.BienMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BienMeubles.
     */
    cursor?: Prisma.BienMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienMeubles.
     */
    skip?: number;
    distinct?: Prisma.BienMeubleScalarFieldEnum | Prisma.BienMeubleScalarFieldEnum[];
};
/**
 * BienMeuble create
 */
export type BienMeubleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * The data needed to create a BienMeuble.
     */
    data: Prisma.XOR<Prisma.BienMeubleCreateInput, Prisma.BienMeubleUncheckedCreateInput>;
};
/**
 * BienMeuble createMany
 */
export type BienMeubleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BienMeubles.
     */
    data: Prisma.BienMeubleCreateManyInput | Prisma.BienMeubleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BienMeuble createManyAndReturn
 */
export type BienMeubleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * The data used to create many BienMeubles.
     */
    data: Prisma.BienMeubleCreateManyInput | Prisma.BienMeubleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BienMeuble update
 */
export type BienMeubleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * The data needed to update a BienMeuble.
     */
    data: Prisma.XOR<Prisma.BienMeubleUpdateInput, Prisma.BienMeubleUncheckedUpdateInput>;
    /**
     * Choose, which BienMeuble to update.
     */
    where: Prisma.BienMeubleWhereUniqueInput;
};
/**
 * BienMeuble updateMany
 */
export type BienMeubleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BienMeubles.
     */
    data: Prisma.XOR<Prisma.BienMeubleUpdateManyMutationInput, Prisma.BienMeubleUncheckedUpdateManyInput>;
    /**
     * Filter which BienMeubles to update
     */
    where?: Prisma.BienMeubleWhereInput;
    /**
     * Limit how many BienMeubles to update.
     */
    limit?: number;
};
/**
 * BienMeuble updateManyAndReturn
 */
export type BienMeubleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * The data used to update BienMeubles.
     */
    data: Prisma.XOR<Prisma.BienMeubleUpdateManyMutationInput, Prisma.BienMeubleUncheckedUpdateManyInput>;
    /**
     * Filter which BienMeubles to update
     */
    where?: Prisma.BienMeubleWhereInput;
    /**
     * Limit how many BienMeubles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BienMeuble upsert
 */
export type BienMeubleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * The filter to search for the BienMeuble to update in case it exists.
     */
    where: Prisma.BienMeubleWhereUniqueInput;
    /**
     * In case the BienMeuble found by the `where` argument doesn't exist, create a new BienMeuble with this data.
     */
    create: Prisma.XOR<Prisma.BienMeubleCreateInput, Prisma.BienMeubleUncheckedCreateInput>;
    /**
     * In case the BienMeuble was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BienMeubleUpdateInput, Prisma.BienMeubleUncheckedUpdateInput>;
};
/**
 * BienMeuble delete
 */
export type BienMeubleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    /**
     * Filter which BienMeuble to delete.
     */
    where: Prisma.BienMeubleWhereUniqueInput;
};
/**
 * BienMeuble deleteMany
 */
export type BienMeubleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BienMeubles to delete
     */
    where?: Prisma.BienMeubleWhereInput;
    /**
     * Limit how many BienMeubles to delete.
     */
    limit?: number;
};
/**
 * BienMeuble without action
 */
export type BienMeubleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=BienMeuble.d.ts.map