import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProprietaireRefreshToken
 *
 */
export type ProprietaireRefreshTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$ProprietaireRefreshTokenPayload>;
export type AggregateProprietaireRefreshToken = {
    _count: ProprietaireRefreshTokenCountAggregateOutputType | null;
    _min: ProprietaireRefreshTokenMinAggregateOutputType | null;
    _max: ProprietaireRefreshTokenMaxAggregateOutputType | null;
};
export type ProprietaireRefreshTokenMinAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type ProprietaireRefreshTokenMaxAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type ProprietaireRefreshTokenCountAggregateOutputType = {
    id: number;
    proprietaireId: number;
    tokenHash: number;
    expiresAt: number;
    revokedAt: number;
    createdAt: number;
    _all: number;
};
export type ProprietaireRefreshTokenMinAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type ProprietaireRefreshTokenMaxAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type ProprietaireRefreshTokenCountAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ProprietaireRefreshTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProprietaireRefreshToken to aggregate.
     */
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProprietaireRefreshTokens to fetch.
     */
    orderBy?: Prisma.ProprietaireRefreshTokenOrderByWithRelationInput | Prisma.ProprietaireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProprietaireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProprietaireRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProprietaireRefreshTokens
    **/
    _count?: true | ProprietaireRefreshTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProprietaireRefreshTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProprietaireRefreshTokenMaxAggregateInputType;
};
export type GetProprietaireRefreshTokenAggregateType<T extends ProprietaireRefreshTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateProprietaireRefreshToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProprietaireRefreshToken[P]> : Prisma.GetScalarType<T[P], AggregateProprietaireRefreshToken[P]>;
};
export type ProprietaireRefreshTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    orderBy?: Prisma.ProprietaireRefreshTokenOrderByWithAggregationInput | Prisma.ProprietaireRefreshTokenOrderByWithAggregationInput[];
    by: Prisma.ProprietaireRefreshTokenScalarFieldEnum[] | Prisma.ProprietaireRefreshTokenScalarFieldEnum;
    having?: Prisma.ProprietaireRefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProprietaireRefreshTokenCountAggregateInputType | true;
    _min?: ProprietaireRefreshTokenMinAggregateInputType;
    _max?: ProprietaireRefreshTokenMaxAggregateInputType;
};
export type ProprietaireRefreshTokenGroupByOutputType = {
    id: string;
    proprietaireId: string;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdAt: Date;
    _count: ProprietaireRefreshTokenCountAggregateOutputType | null;
    _min: ProprietaireRefreshTokenMinAggregateOutputType | null;
    _max: ProprietaireRefreshTokenMaxAggregateOutputType | null;
};
type GetProprietaireRefreshTokenGroupByPayload<T extends ProprietaireRefreshTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProprietaireRefreshTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProprietaireRefreshTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProprietaireRefreshTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProprietaireRefreshTokenGroupByOutputType[P]>;
}>>;
export type ProprietaireRefreshTokenWhereInput = {
    AND?: Prisma.ProprietaireRefreshTokenWhereInput | Prisma.ProprietaireRefreshTokenWhereInput[];
    OR?: Prisma.ProprietaireRefreshTokenWhereInput[];
    NOT?: Prisma.ProprietaireRefreshTokenWhereInput | Prisma.ProprietaireRefreshTokenWhereInput[];
    id?: Prisma.StringFilter<"ProprietaireRefreshToken"> | string;
    proprietaireId?: Prisma.StringFilter<"ProprietaireRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"ProprietaireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"ProprietaireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ProprietaireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProprietaireRefreshToken"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
};
export type ProprietaireRefreshTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
};
export type ProprietaireRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.ProprietaireRefreshTokenWhereInput | Prisma.ProprietaireRefreshTokenWhereInput[];
    OR?: Prisma.ProprietaireRefreshTokenWhereInput[];
    NOT?: Prisma.ProprietaireRefreshTokenWhereInput | Prisma.ProprietaireRefreshTokenWhereInput[];
    proprietaireId?: Prisma.StringFilter<"ProprietaireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"ProprietaireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ProprietaireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProprietaireRefreshToken"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
}, "id" | "tokenHash">;
export type ProprietaireRefreshTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProprietaireRefreshTokenCountOrderByAggregateInput;
    _max?: Prisma.ProprietaireRefreshTokenMaxOrderByAggregateInput;
    _min?: Prisma.ProprietaireRefreshTokenMinOrderByAggregateInput;
};
export type ProprietaireRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProprietaireRefreshTokenScalarWhereWithAggregatesInput | Prisma.ProprietaireRefreshTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProprietaireRefreshTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProprietaireRefreshTokenScalarWhereWithAggregatesInput | Prisma.ProprietaireRefreshTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProprietaireRefreshToken"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"ProprietaireRefreshToken"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"ProprietaireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"ProprietaireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ProprietaireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProprietaireRefreshToken"> | Date | string;
};
export type ProprietaireRefreshTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutRefreshTokensInput;
};
export type ProprietaireRefreshTokenUncheckedCreateInput = {
    id?: string;
    proprietaireId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProprietaireRefreshTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutRefreshTokensNestedInput;
};
export type ProprietaireRefreshTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireRefreshTokenCreateManyInput = {
    id?: string;
    proprietaireId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProprietaireRefreshTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireRefreshTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireRefreshTokenListRelationFilter = {
    every?: Prisma.ProprietaireRefreshTokenWhereInput;
    some?: Prisma.ProprietaireRefreshTokenWhereInput;
    none?: Prisma.ProprietaireRefreshTokenWhereInput;
};
export type ProprietaireRefreshTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProprietaireRefreshTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProprietaireRefreshTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProprietaireRefreshTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput> | Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput[] | Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.ProprietaireRefreshTokenCreateManyProprietaireInputEnvelope;
    connect?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
};
export type ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput> | Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput[] | Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.ProprietaireRefreshTokenCreateManyProprietaireInputEnvelope;
    connect?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
};
export type ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput> | Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput[] | Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.ProprietaireRefreshTokenUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.ProprietaireRefreshTokenCreateManyProprietaireInputEnvelope;
    set?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    delete?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    connect?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    update?: Prisma.ProprietaireRefreshTokenUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.ProprietaireRefreshTokenUpdateManyWithWhereWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.ProprietaireRefreshTokenScalarWhereInput | Prisma.ProprietaireRefreshTokenScalarWhereInput[];
};
export type ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput> | Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput[] | Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.ProprietaireRefreshTokenUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.ProprietaireRefreshTokenCreateManyProprietaireInputEnvelope;
    set?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    delete?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    connect?: Prisma.ProprietaireRefreshTokenWhereUniqueInput | Prisma.ProprietaireRefreshTokenWhereUniqueInput[];
    update?: Prisma.ProprietaireRefreshTokenUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.ProprietaireRefreshTokenUpdateManyWithWhereWithoutProprietaireInput | Prisma.ProprietaireRefreshTokenUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.ProprietaireRefreshTokenScalarWhereInput | Prisma.ProprietaireRefreshTokenScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ProprietaireRefreshTokenCreateWithoutProprietaireInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProprietaireRefreshTokenCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput>;
};
export type ProprietaireRefreshTokenCreateManyProprietaireInputEnvelope = {
    data: Prisma.ProprietaireRefreshTokenCreateManyProprietaireInput | Prisma.ProprietaireRefreshTokenCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type ProprietaireRefreshTokenUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProprietaireRefreshTokenUpdateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedCreateWithoutProprietaireInput>;
};
export type ProprietaireRefreshTokenUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProprietaireRefreshTokenUpdateWithoutProprietaireInput, Prisma.ProprietaireRefreshTokenUncheckedUpdateWithoutProprietaireInput>;
};
export type ProprietaireRefreshTokenUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.ProprietaireRefreshTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireRefreshTokenUpdateManyMutationInput, Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireInput>;
};
export type ProprietaireRefreshTokenScalarWhereInput = {
    AND?: Prisma.ProprietaireRefreshTokenScalarWhereInput | Prisma.ProprietaireRefreshTokenScalarWhereInput[];
    OR?: Prisma.ProprietaireRefreshTokenScalarWhereInput[];
    NOT?: Prisma.ProprietaireRefreshTokenScalarWhereInput | Prisma.ProprietaireRefreshTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"ProprietaireRefreshToken"> | string;
    proprietaireId?: Prisma.StringFilter<"ProprietaireRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"ProprietaireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"ProprietaireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ProprietaireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProprietaireRefreshToken"> | Date | string;
};
export type ProprietaireRefreshTokenCreateManyProprietaireInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProprietaireRefreshTokenUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireRefreshTokenUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireRefreshTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proprietaireRefreshToken"]>;
export type ProprietaireRefreshTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proprietaireRefreshToken"]>;
export type ProprietaireRefreshTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proprietaireRefreshToken"]>;
export type ProprietaireRefreshTokenSelectScalar = {
    id?: boolean;
    proprietaireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
};
export type ProprietaireRefreshTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proprietaireId" | "tokenHash" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["proprietaireRefreshToken"]>;
export type ProprietaireRefreshTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type ProprietaireRefreshTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type ProprietaireRefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $ProprietaireRefreshTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProprietaireRefreshToken";
    objects: {
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        proprietaireId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["proprietaireRefreshToken"]>;
    composites: {};
};
export type ProprietaireRefreshTokenGetPayload<S extends boolean | null | undefined | ProprietaireRefreshTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload, S>;
export type ProprietaireRefreshTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProprietaireRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProprietaireRefreshTokenCountAggregateInputType | true;
};
export interface ProprietaireRefreshTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProprietaireRefreshToken'];
        meta: {
            name: 'ProprietaireRefreshToken';
        };
    };
    /**
     * Find zero or one ProprietaireRefreshToken that matches the filter.
     * @param {ProprietaireRefreshTokenFindUniqueArgs} args - Arguments to find a ProprietaireRefreshToken
     * @example
     * // Get one ProprietaireRefreshToken
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProprietaireRefreshTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProprietaireRefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProprietaireRefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a ProprietaireRefreshToken
     * @example
     * // Get one ProprietaireRefreshToken
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProprietaireRefreshTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProprietaireRefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireRefreshTokenFindFirstArgs} args - Arguments to find a ProprietaireRefreshToken
     * @example
     * // Get one ProprietaireRefreshToken
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProprietaireRefreshTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, ProprietaireRefreshTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProprietaireRefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireRefreshTokenFindFirstOrThrowArgs} args - Arguments to find a ProprietaireRefreshToken
     * @example
     * // Get one ProprietaireRefreshToken
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProprietaireRefreshTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProprietaireRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProprietaireRefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireRefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProprietaireRefreshTokens
     * const proprietaireRefreshTokens = await prisma.proprietaireRefreshToken.findMany()
     *
     * // Get first 10 ProprietaireRefreshTokens
     * const proprietaireRefreshTokens = await prisma.proprietaireRefreshToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proprietaireRefreshTokenWithIdOnly = await prisma.proprietaireRefreshToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProprietaireRefreshTokenFindManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProprietaireRefreshToken.
     * @param {ProprietaireRefreshTokenCreateArgs} args - Arguments to create a ProprietaireRefreshToken.
     * @example
     * // Create one ProprietaireRefreshToken
     * const ProprietaireRefreshToken = await prisma.proprietaireRefreshToken.create({
     *   data: {
     *     // ... data to create a ProprietaireRefreshToken
     *   }
     * })
     *
     */
    create<T extends ProprietaireRefreshTokenCreateArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenCreateArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProprietaireRefreshTokens.
     * @param {ProprietaireRefreshTokenCreateManyArgs} args - Arguments to create many ProprietaireRefreshTokens.
     * @example
     * // Create many ProprietaireRefreshTokens
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProprietaireRefreshTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProprietaireRefreshTokens and returns the data saved in the database.
     * @param {ProprietaireRefreshTokenCreateManyAndReturnArgs} args - Arguments to create many ProprietaireRefreshTokens.
     * @example
     * // Create many ProprietaireRefreshTokens
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProprietaireRefreshTokens and only return the `id`
     * const proprietaireRefreshTokenWithIdOnly = await prisma.proprietaireRefreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProprietaireRefreshTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProprietaireRefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProprietaireRefreshToken.
     * @param {ProprietaireRefreshTokenDeleteArgs} args - Arguments to delete one ProprietaireRefreshToken.
     * @example
     * // Delete one ProprietaireRefreshToken
     * const ProprietaireRefreshToken = await prisma.proprietaireRefreshToken.delete({
     *   where: {
     *     // ... filter to delete one ProprietaireRefreshToken
     *   }
     * })
     *
     */
    delete<T extends ProprietaireRefreshTokenDeleteArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProprietaireRefreshToken.
     * @param {ProprietaireRefreshTokenUpdateArgs} args - Arguments to update one ProprietaireRefreshToken.
     * @example
     * // Update one ProprietaireRefreshToken
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProprietaireRefreshTokenUpdateArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProprietaireRefreshTokens.
     * @param {ProprietaireRefreshTokenDeleteManyArgs} args - Arguments to filter ProprietaireRefreshTokens to delete.
     * @example
     * // Delete a few ProprietaireRefreshTokens
     * const { count } = await prisma.proprietaireRefreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProprietaireRefreshTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProprietaireRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireRefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProprietaireRefreshTokens
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProprietaireRefreshTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProprietaireRefreshTokens and returns the data updated in the database.
     * @param {ProprietaireRefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many ProprietaireRefreshTokens.
     * @example
     * // Update many ProprietaireRefreshTokens
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProprietaireRefreshTokens and only return the `id`
     * const proprietaireRefreshTokenWithIdOnly = await prisma.proprietaireRefreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProprietaireRefreshTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProprietaireRefreshToken.
     * @param {ProprietaireRefreshTokenUpsertArgs} args - Arguments to update or create a ProprietaireRefreshToken.
     * @example
     * // Update or create a ProprietaireRefreshToken
     * const proprietaireRefreshToken = await prisma.proprietaireRefreshToken.upsert({
     *   create: {
     *     // ... data to create a ProprietaireRefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProprietaireRefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends ProprietaireRefreshTokenUpsertArgs>(args: Prisma.SelectSubset<T, ProprietaireRefreshTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__ProprietaireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProprietaireRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireRefreshTokenCountArgs} args - Arguments to filter ProprietaireRefreshTokens to count.
     * @example
     * // Count the number of ProprietaireRefreshTokens
     * const count = await prisma.proprietaireRefreshToken.count({
     *   where: {
     *     // ... the filter for the ProprietaireRefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends ProprietaireRefreshTokenCountArgs>(args?: Prisma.Subset<T, ProprietaireRefreshTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProprietaireRefreshTokenCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProprietaireRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireRefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProprietaireRefreshTokenAggregateArgs>(args: Prisma.Subset<T, ProprietaireRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetProprietaireRefreshTokenAggregateType<T>>;
    /**
     * Group by ProprietaireRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireRefreshTokenGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProprietaireRefreshTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProprietaireRefreshTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: ProprietaireRefreshTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProprietaireRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProprietaireRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProprietaireRefreshToken model
     */
    readonly fields: ProprietaireRefreshTokenFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProprietaireRefreshToken.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProprietaireRefreshTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the ProprietaireRefreshToken model
 */
export interface ProprietaireRefreshTokenFieldRefs {
    readonly id: Prisma.FieldRef<"ProprietaireRefreshToken", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"ProprietaireRefreshToken", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"ProprietaireRefreshToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"ProprietaireRefreshToken", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"ProprietaireRefreshToken", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ProprietaireRefreshToken", 'DateTime'>;
}
/**
 * ProprietaireRefreshToken findUnique
 */
export type ProprietaireRefreshTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ProprietaireRefreshToken to fetch.
     */
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
};
/**
 * ProprietaireRefreshToken findUniqueOrThrow
 */
export type ProprietaireRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ProprietaireRefreshToken to fetch.
     */
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
};
/**
 * ProprietaireRefreshToken findFirst
 */
export type ProprietaireRefreshTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ProprietaireRefreshToken to fetch.
     */
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProprietaireRefreshTokens to fetch.
     */
    orderBy?: Prisma.ProprietaireRefreshTokenOrderByWithRelationInput | Prisma.ProprietaireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProprietaireRefreshTokens.
     */
    cursor?: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProprietaireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProprietaireRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProprietaireRefreshTokens.
     */
    distinct?: Prisma.ProprietaireRefreshTokenScalarFieldEnum | Prisma.ProprietaireRefreshTokenScalarFieldEnum[];
};
/**
 * ProprietaireRefreshToken findFirstOrThrow
 */
export type ProprietaireRefreshTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ProprietaireRefreshToken to fetch.
     */
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProprietaireRefreshTokens to fetch.
     */
    orderBy?: Prisma.ProprietaireRefreshTokenOrderByWithRelationInput | Prisma.ProprietaireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProprietaireRefreshTokens.
     */
    cursor?: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProprietaireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProprietaireRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProprietaireRefreshTokens.
     */
    distinct?: Prisma.ProprietaireRefreshTokenScalarFieldEnum | Prisma.ProprietaireRefreshTokenScalarFieldEnum[];
};
/**
 * ProprietaireRefreshToken findMany
 */
export type ProprietaireRefreshTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ProprietaireRefreshTokens to fetch.
     */
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProprietaireRefreshTokens to fetch.
     */
    orderBy?: Prisma.ProprietaireRefreshTokenOrderByWithRelationInput | Prisma.ProprietaireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProprietaireRefreshTokens.
     */
    cursor?: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProprietaireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProprietaireRefreshTokens.
     */
    skip?: number;
    distinct?: Prisma.ProprietaireRefreshTokenScalarFieldEnum | Prisma.ProprietaireRefreshTokenScalarFieldEnum[];
};
/**
 * ProprietaireRefreshToken create
 */
export type ProprietaireRefreshTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProprietaireRefreshToken.
     */
    data: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateInput, Prisma.ProprietaireRefreshTokenUncheckedCreateInput>;
};
/**
 * ProprietaireRefreshToken createMany
 */
export type ProprietaireRefreshTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProprietaireRefreshTokens.
     */
    data: Prisma.ProprietaireRefreshTokenCreateManyInput | Prisma.ProprietaireRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProprietaireRefreshToken createManyAndReturn
 */
export type ProprietaireRefreshTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many ProprietaireRefreshTokens.
     */
    data: Prisma.ProprietaireRefreshTokenCreateManyInput | Prisma.ProprietaireRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProprietaireRefreshToken update
 */
export type ProprietaireRefreshTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProprietaireRefreshToken.
     */
    data: Prisma.XOR<Prisma.ProprietaireRefreshTokenUpdateInput, Prisma.ProprietaireRefreshTokenUncheckedUpdateInput>;
    /**
     * Choose, which ProprietaireRefreshToken to update.
     */
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
};
/**
 * ProprietaireRefreshToken updateMany
 */
export type ProprietaireRefreshTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProprietaireRefreshTokens.
     */
    data: Prisma.XOR<Prisma.ProprietaireRefreshTokenUpdateManyMutationInput, Prisma.ProprietaireRefreshTokenUncheckedUpdateManyInput>;
    /**
     * Filter which ProprietaireRefreshTokens to update
     */
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    /**
     * Limit how many ProprietaireRefreshTokens to update.
     */
    limit?: number;
};
/**
 * ProprietaireRefreshToken updateManyAndReturn
 */
export type ProprietaireRefreshTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to update ProprietaireRefreshTokens.
     */
    data: Prisma.XOR<Prisma.ProprietaireRefreshTokenUpdateManyMutationInput, Prisma.ProprietaireRefreshTokenUncheckedUpdateManyInput>;
    /**
     * Filter which ProprietaireRefreshTokens to update
     */
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    /**
     * Limit how many ProprietaireRefreshTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProprietaireRefreshToken upsert
 */
export type ProprietaireRefreshTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProprietaireRefreshToken to update in case it exists.
     */
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    /**
     * In case the ProprietaireRefreshToken found by the `where` argument doesn't exist, create a new ProprietaireRefreshToken with this data.
     */
    create: Prisma.XOR<Prisma.ProprietaireRefreshTokenCreateInput, Prisma.ProprietaireRefreshTokenUncheckedCreateInput>;
    /**
     * In case the ProprietaireRefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProprietaireRefreshTokenUpdateInput, Prisma.ProprietaireRefreshTokenUncheckedUpdateInput>;
};
/**
 * ProprietaireRefreshToken delete
 */
export type ProprietaireRefreshTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter which ProprietaireRefreshToken to delete.
     */
    where: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
};
/**
 * ProprietaireRefreshToken deleteMany
 */
export type ProprietaireRefreshTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProprietaireRefreshTokens to delete
     */
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    /**
     * Limit how many ProprietaireRefreshTokens to delete.
     */
    limit?: number;
};
/**
 * ProprietaireRefreshToken without action
 */
export type ProprietaireRefreshTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProprietaireRefreshToken.d.ts.map