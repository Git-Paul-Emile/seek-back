import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LocataireRefreshToken
 *
 */
export type LocataireRefreshTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$LocataireRefreshTokenPayload>;
export type AggregateLocataireRefreshToken = {
    _count: LocataireRefreshTokenCountAggregateOutputType | null;
    _min: LocataireRefreshTokenMinAggregateOutputType | null;
    _max: LocataireRefreshTokenMaxAggregateOutputType | null;
};
export type LocataireRefreshTokenMinAggregateOutputType = {
    id: string | null;
    locataireId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type LocataireRefreshTokenMaxAggregateOutputType = {
    id: string | null;
    locataireId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type LocataireRefreshTokenCountAggregateOutputType = {
    id: number;
    locataireId: number;
    tokenHash: number;
    expiresAt: number;
    revokedAt: number;
    createdAt: number;
    _all: number;
};
export type LocataireRefreshTokenMinAggregateInputType = {
    id?: true;
    locataireId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type LocataireRefreshTokenMaxAggregateInputType = {
    id?: true;
    locataireId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type LocataireRefreshTokenCountAggregateInputType = {
    id?: true;
    locataireId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type LocataireRefreshTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LocataireRefreshToken to aggregate.
     */
    where?: Prisma.LocataireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocataireRefreshTokens to fetch.
     */
    orderBy?: Prisma.LocataireRefreshTokenOrderByWithRelationInput | Prisma.LocataireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LocataireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocataireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocataireRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LocataireRefreshTokens
    **/
    _count?: true | LocataireRefreshTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LocataireRefreshTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LocataireRefreshTokenMaxAggregateInputType;
};
export type GetLocataireRefreshTokenAggregateType<T extends LocataireRefreshTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateLocataireRefreshToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocataireRefreshToken[P]> : Prisma.GetScalarType<T[P], AggregateLocataireRefreshToken[P]>;
};
export type LocataireRefreshTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocataireRefreshTokenWhereInput;
    orderBy?: Prisma.LocataireRefreshTokenOrderByWithAggregationInput | Prisma.LocataireRefreshTokenOrderByWithAggregationInput[];
    by: Prisma.LocataireRefreshTokenScalarFieldEnum[] | Prisma.LocataireRefreshTokenScalarFieldEnum;
    having?: Prisma.LocataireRefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocataireRefreshTokenCountAggregateInputType | true;
    _min?: LocataireRefreshTokenMinAggregateInputType;
    _max?: LocataireRefreshTokenMaxAggregateInputType;
};
export type LocataireRefreshTokenGroupByOutputType = {
    id: string;
    locataireId: string;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdAt: Date;
    _count: LocataireRefreshTokenCountAggregateOutputType | null;
    _min: LocataireRefreshTokenMinAggregateOutputType | null;
    _max: LocataireRefreshTokenMaxAggregateOutputType | null;
};
type GetLocataireRefreshTokenGroupByPayload<T extends LocataireRefreshTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocataireRefreshTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocataireRefreshTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocataireRefreshTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocataireRefreshTokenGroupByOutputType[P]>;
}>>;
export type LocataireRefreshTokenWhereInput = {
    AND?: Prisma.LocataireRefreshTokenWhereInput | Prisma.LocataireRefreshTokenWhereInput[];
    OR?: Prisma.LocataireRefreshTokenWhereInput[];
    NOT?: Prisma.LocataireRefreshTokenWhereInput | Prisma.LocataireRefreshTokenWhereInput[];
    id?: Prisma.StringFilter<"LocataireRefreshToken"> | string;
    locataireId?: Prisma.StringFilter<"LocataireRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"LocataireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"LocataireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"LocataireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LocataireRefreshToken"> | Date | string;
    locataire?: Prisma.XOR<Prisma.LocataireScalarRelationFilter, Prisma.LocataireWhereInput>;
};
export type LocataireRefreshTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    locataire?: Prisma.LocataireOrderByWithRelationInput;
};
export type LocataireRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.LocataireRefreshTokenWhereInput | Prisma.LocataireRefreshTokenWhereInput[];
    OR?: Prisma.LocataireRefreshTokenWhereInput[];
    NOT?: Prisma.LocataireRefreshTokenWhereInput | Prisma.LocataireRefreshTokenWhereInput[];
    locataireId?: Prisma.StringFilter<"LocataireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"LocataireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"LocataireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LocataireRefreshToken"> | Date | string;
    locataire?: Prisma.XOR<Prisma.LocataireScalarRelationFilter, Prisma.LocataireWhereInput>;
}, "id" | "tokenHash">;
export type LocataireRefreshTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LocataireRefreshTokenCountOrderByAggregateInput;
    _max?: Prisma.LocataireRefreshTokenMaxOrderByAggregateInput;
    _min?: Prisma.LocataireRefreshTokenMinOrderByAggregateInput;
};
export type LocataireRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocataireRefreshTokenScalarWhereWithAggregatesInput | Prisma.LocataireRefreshTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocataireRefreshTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocataireRefreshTokenScalarWhereWithAggregatesInput | Prisma.LocataireRefreshTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LocataireRefreshToken"> | string;
    locataireId?: Prisma.StringWithAggregatesFilter<"LocataireRefreshToken"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"LocataireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"LocataireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LocataireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LocataireRefreshToken"> | Date | string;
};
export type LocataireRefreshTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    locataire: Prisma.LocataireCreateNestedOneWithoutRefreshTokensInput;
};
export type LocataireRefreshTokenUncheckedCreateInput = {
    id?: string;
    locataireId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LocataireRefreshTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutRefreshTokensNestedInput;
};
export type LocataireRefreshTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireRefreshTokenCreateManyInput = {
    id?: string;
    locataireId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LocataireRefreshTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireRefreshTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireRefreshTokenListRelationFilter = {
    every?: Prisma.LocataireRefreshTokenWhereInput;
    some?: Prisma.LocataireRefreshTokenWhereInput;
    none?: Prisma.LocataireRefreshTokenWhereInput;
};
export type LocataireRefreshTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LocataireRefreshTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LocataireRefreshTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LocataireRefreshTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LocataireRefreshTokenCreateNestedManyWithoutLocataireInput = {
    create?: Prisma.XOR<Prisma.LocataireRefreshTokenCreateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput> | Prisma.LocataireRefreshTokenCreateWithoutLocataireInput[] | Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput | Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput[];
    createMany?: Prisma.LocataireRefreshTokenCreateManyLocataireInputEnvelope;
    connect?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
};
export type LocataireRefreshTokenUncheckedCreateNestedManyWithoutLocataireInput = {
    create?: Prisma.XOR<Prisma.LocataireRefreshTokenCreateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput> | Prisma.LocataireRefreshTokenCreateWithoutLocataireInput[] | Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput | Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput[];
    createMany?: Prisma.LocataireRefreshTokenCreateManyLocataireInputEnvelope;
    connect?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
};
export type LocataireRefreshTokenUpdateManyWithoutLocataireNestedInput = {
    create?: Prisma.XOR<Prisma.LocataireRefreshTokenCreateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput> | Prisma.LocataireRefreshTokenCreateWithoutLocataireInput[] | Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput | Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput[];
    upsert?: Prisma.LocataireRefreshTokenUpsertWithWhereUniqueWithoutLocataireInput | Prisma.LocataireRefreshTokenUpsertWithWhereUniqueWithoutLocataireInput[];
    createMany?: Prisma.LocataireRefreshTokenCreateManyLocataireInputEnvelope;
    set?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    delete?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    connect?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    update?: Prisma.LocataireRefreshTokenUpdateWithWhereUniqueWithoutLocataireInput | Prisma.LocataireRefreshTokenUpdateWithWhereUniqueWithoutLocataireInput[];
    updateMany?: Prisma.LocataireRefreshTokenUpdateManyWithWhereWithoutLocataireInput | Prisma.LocataireRefreshTokenUpdateManyWithWhereWithoutLocataireInput[];
    deleteMany?: Prisma.LocataireRefreshTokenScalarWhereInput | Prisma.LocataireRefreshTokenScalarWhereInput[];
};
export type LocataireRefreshTokenUncheckedUpdateManyWithoutLocataireNestedInput = {
    create?: Prisma.XOR<Prisma.LocataireRefreshTokenCreateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput> | Prisma.LocataireRefreshTokenCreateWithoutLocataireInput[] | Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput | Prisma.LocataireRefreshTokenCreateOrConnectWithoutLocataireInput[];
    upsert?: Prisma.LocataireRefreshTokenUpsertWithWhereUniqueWithoutLocataireInput | Prisma.LocataireRefreshTokenUpsertWithWhereUniqueWithoutLocataireInput[];
    createMany?: Prisma.LocataireRefreshTokenCreateManyLocataireInputEnvelope;
    set?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    delete?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    connect?: Prisma.LocataireRefreshTokenWhereUniqueInput | Prisma.LocataireRefreshTokenWhereUniqueInput[];
    update?: Prisma.LocataireRefreshTokenUpdateWithWhereUniqueWithoutLocataireInput | Prisma.LocataireRefreshTokenUpdateWithWhereUniqueWithoutLocataireInput[];
    updateMany?: Prisma.LocataireRefreshTokenUpdateManyWithWhereWithoutLocataireInput | Prisma.LocataireRefreshTokenUpdateManyWithWhereWithoutLocataireInput[];
    deleteMany?: Prisma.LocataireRefreshTokenScalarWhereInput | Prisma.LocataireRefreshTokenScalarWhereInput[];
};
export type LocataireRefreshTokenCreateWithoutLocataireInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LocataireRefreshTokenUncheckedCreateWithoutLocataireInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LocataireRefreshTokenCreateOrConnectWithoutLocataireInput = {
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocataireRefreshTokenCreateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput>;
};
export type LocataireRefreshTokenCreateManyLocataireInputEnvelope = {
    data: Prisma.LocataireRefreshTokenCreateManyLocataireInput | Prisma.LocataireRefreshTokenCreateManyLocataireInput[];
    skipDuplicates?: boolean;
};
export type LocataireRefreshTokenUpsertWithWhereUniqueWithoutLocataireInput = {
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocataireRefreshTokenUpdateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedUpdateWithoutLocataireInput>;
    create: Prisma.XOR<Prisma.LocataireRefreshTokenCreateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedCreateWithoutLocataireInput>;
};
export type LocataireRefreshTokenUpdateWithWhereUniqueWithoutLocataireInput = {
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocataireRefreshTokenUpdateWithoutLocataireInput, Prisma.LocataireRefreshTokenUncheckedUpdateWithoutLocataireInput>;
};
export type LocataireRefreshTokenUpdateManyWithWhereWithoutLocataireInput = {
    where: Prisma.LocataireRefreshTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.LocataireRefreshTokenUpdateManyMutationInput, Prisma.LocataireRefreshTokenUncheckedUpdateManyWithoutLocataireInput>;
};
export type LocataireRefreshTokenScalarWhereInput = {
    AND?: Prisma.LocataireRefreshTokenScalarWhereInput | Prisma.LocataireRefreshTokenScalarWhereInput[];
    OR?: Prisma.LocataireRefreshTokenScalarWhereInput[];
    NOT?: Prisma.LocataireRefreshTokenScalarWhereInput | Prisma.LocataireRefreshTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"LocataireRefreshToken"> | string;
    locataireId?: Prisma.StringFilter<"LocataireRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"LocataireRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"LocataireRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"LocataireRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LocataireRefreshToken"> | Date | string;
};
export type LocataireRefreshTokenCreateManyLocataireInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LocataireRefreshTokenUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireRefreshTokenUncheckedUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireRefreshTokenUncheckedUpdateManyWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireRefreshTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    locataireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locataireRefreshToken"]>;
export type LocataireRefreshTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    locataireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locataireRefreshToken"]>;
export type LocataireRefreshTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    locataireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locataireRefreshToken"]>;
export type LocataireRefreshTokenSelectScalar = {
    id?: boolean;
    locataireId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
};
export type LocataireRefreshTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "locataireId" | "tokenHash" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["locataireRefreshToken"]>;
export type LocataireRefreshTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
};
export type LocataireRefreshTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
};
export type LocataireRefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
};
export type $LocataireRefreshTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LocataireRefreshToken";
    objects: {
        locataire: Prisma.$LocatairePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        locataireId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["locataireRefreshToken"]>;
    composites: {};
};
export type LocataireRefreshTokenGetPayload<S extends boolean | null | undefined | LocataireRefreshTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload, S>;
export type LocataireRefreshTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocataireRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocataireRefreshTokenCountAggregateInputType | true;
};
export interface LocataireRefreshTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LocataireRefreshToken'];
        meta: {
            name: 'LocataireRefreshToken';
        };
    };
    /**
     * Find zero or one LocataireRefreshToken that matches the filter.
     * @param {LocataireRefreshTokenFindUniqueArgs} args - Arguments to find a LocataireRefreshToken
     * @example
     * // Get one LocataireRefreshToken
     * const locataireRefreshToken = await prisma.locataireRefreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocataireRefreshTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LocataireRefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocataireRefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a LocataireRefreshToken
     * @example
     * // Get one LocataireRefreshToken
     * const locataireRefreshToken = await prisma.locataireRefreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocataireRefreshTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LocataireRefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireRefreshTokenFindFirstArgs} args - Arguments to find a LocataireRefreshToken
     * @example
     * // Get one LocataireRefreshToken
     * const locataireRefreshToken = await prisma.locataireRefreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocataireRefreshTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, LocataireRefreshTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LocataireRefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireRefreshTokenFindFirstOrThrowArgs} args - Arguments to find a LocataireRefreshToken
     * @example
     * // Get one LocataireRefreshToken
     * const locataireRefreshToken = await prisma.locataireRefreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocataireRefreshTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocataireRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LocataireRefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireRefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocataireRefreshTokens
     * const locataireRefreshTokens = await prisma.locataireRefreshToken.findMany()
     *
     * // Get first 10 LocataireRefreshTokens
     * const locataireRefreshTokens = await prisma.locataireRefreshToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const locataireRefreshTokenWithIdOnly = await prisma.locataireRefreshToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LocataireRefreshTokenFindManyArgs>(args?: Prisma.SelectSubset<T, LocataireRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LocataireRefreshToken.
     * @param {LocataireRefreshTokenCreateArgs} args - Arguments to create a LocataireRefreshToken.
     * @example
     * // Create one LocataireRefreshToken
     * const LocataireRefreshToken = await prisma.locataireRefreshToken.create({
     *   data: {
     *     // ... data to create a LocataireRefreshToken
     *   }
     * })
     *
     */
    create<T extends LocataireRefreshTokenCreateArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenCreateArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LocataireRefreshTokens.
     * @param {LocataireRefreshTokenCreateManyArgs} args - Arguments to create many LocataireRefreshTokens.
     * @example
     * // Create many LocataireRefreshTokens
     * const locataireRefreshToken = await prisma.locataireRefreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LocataireRefreshTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, LocataireRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LocataireRefreshTokens and returns the data saved in the database.
     * @param {LocataireRefreshTokenCreateManyAndReturnArgs} args - Arguments to create many LocataireRefreshTokens.
     * @example
     * // Create many LocataireRefreshTokens
     * const locataireRefreshToken = await prisma.locataireRefreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LocataireRefreshTokens and only return the `id`
     * const locataireRefreshTokenWithIdOnly = await prisma.locataireRefreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LocataireRefreshTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocataireRefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LocataireRefreshToken.
     * @param {LocataireRefreshTokenDeleteArgs} args - Arguments to delete one LocataireRefreshToken.
     * @example
     * // Delete one LocataireRefreshToken
     * const LocataireRefreshToken = await prisma.locataireRefreshToken.delete({
     *   where: {
     *     // ... filter to delete one LocataireRefreshToken
     *   }
     * })
     *
     */
    delete<T extends LocataireRefreshTokenDeleteArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LocataireRefreshToken.
     * @param {LocataireRefreshTokenUpdateArgs} args - Arguments to update one LocataireRefreshToken.
     * @example
     * // Update one LocataireRefreshToken
     * const locataireRefreshToken = await prisma.locataireRefreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LocataireRefreshTokenUpdateArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LocataireRefreshTokens.
     * @param {LocataireRefreshTokenDeleteManyArgs} args - Arguments to filter LocataireRefreshTokens to delete.
     * @example
     * // Delete a few LocataireRefreshTokens
     * const { count } = await prisma.locataireRefreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LocataireRefreshTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocataireRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LocataireRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireRefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocataireRefreshTokens
     * const locataireRefreshToken = await prisma.locataireRefreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LocataireRefreshTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LocataireRefreshTokens and returns the data updated in the database.
     * @param {LocataireRefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many LocataireRefreshTokens.
     * @example
     * // Update many LocataireRefreshTokens
     * const locataireRefreshToken = await prisma.locataireRefreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LocataireRefreshTokens and only return the `id`
     * const locataireRefreshTokenWithIdOnly = await prisma.locataireRefreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocataireRefreshTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LocataireRefreshToken.
     * @param {LocataireRefreshTokenUpsertArgs} args - Arguments to update or create a LocataireRefreshToken.
     * @example
     * // Update or create a LocataireRefreshToken
     * const locataireRefreshToken = await prisma.locataireRefreshToken.upsert({
     *   create: {
     *     // ... data to create a LocataireRefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocataireRefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends LocataireRefreshTokenUpsertArgs>(args: Prisma.SelectSubset<T, LocataireRefreshTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__LocataireRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LocataireRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireRefreshTokenCountArgs} args - Arguments to filter LocataireRefreshTokens to count.
     * @example
     * // Count the number of LocataireRefreshTokens
     * const count = await prisma.locataireRefreshToken.count({
     *   where: {
     *     // ... the filter for the LocataireRefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends LocataireRefreshTokenCountArgs>(args?: Prisma.Subset<T, LocataireRefreshTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocataireRefreshTokenCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LocataireRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireRefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocataireRefreshTokenAggregateArgs>(args: Prisma.Subset<T, LocataireRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetLocataireRefreshTokenAggregateType<T>>;
    /**
     * Group by LocataireRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireRefreshTokenGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LocataireRefreshTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocataireRefreshTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: LocataireRefreshTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocataireRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocataireRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LocataireRefreshToken model
     */
    readonly fields: LocataireRefreshTokenFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LocataireRefreshToken.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LocataireRefreshTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    locataire<T extends Prisma.LocataireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LocataireDefaultArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LocataireRefreshToken model
 */
export interface LocataireRefreshTokenFieldRefs {
    readonly id: Prisma.FieldRef<"LocataireRefreshToken", 'String'>;
    readonly locataireId: Prisma.FieldRef<"LocataireRefreshToken", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"LocataireRefreshToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"LocataireRefreshToken", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"LocataireRefreshToken", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LocataireRefreshToken", 'DateTime'>;
}
/**
 * LocataireRefreshToken findUnique
 */
export type LocataireRefreshTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which LocataireRefreshToken to fetch.
     */
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
};
/**
 * LocataireRefreshToken findUniqueOrThrow
 */
export type LocataireRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which LocataireRefreshToken to fetch.
     */
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
};
/**
 * LocataireRefreshToken findFirst
 */
export type LocataireRefreshTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which LocataireRefreshToken to fetch.
     */
    where?: Prisma.LocataireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocataireRefreshTokens to fetch.
     */
    orderBy?: Prisma.LocataireRefreshTokenOrderByWithRelationInput | Prisma.LocataireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LocataireRefreshTokens.
     */
    cursor?: Prisma.LocataireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocataireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocataireRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocataireRefreshTokens.
     */
    distinct?: Prisma.LocataireRefreshTokenScalarFieldEnum | Prisma.LocataireRefreshTokenScalarFieldEnum[];
};
/**
 * LocataireRefreshToken findFirstOrThrow
 */
export type LocataireRefreshTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which LocataireRefreshToken to fetch.
     */
    where?: Prisma.LocataireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocataireRefreshTokens to fetch.
     */
    orderBy?: Prisma.LocataireRefreshTokenOrderByWithRelationInput | Prisma.LocataireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LocataireRefreshTokens.
     */
    cursor?: Prisma.LocataireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocataireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocataireRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocataireRefreshTokens.
     */
    distinct?: Prisma.LocataireRefreshTokenScalarFieldEnum | Prisma.LocataireRefreshTokenScalarFieldEnum[];
};
/**
 * LocataireRefreshToken findMany
 */
export type LocataireRefreshTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which LocataireRefreshTokens to fetch.
     */
    where?: Prisma.LocataireRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocataireRefreshTokens to fetch.
     */
    orderBy?: Prisma.LocataireRefreshTokenOrderByWithRelationInput | Prisma.LocataireRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LocataireRefreshTokens.
     */
    cursor?: Prisma.LocataireRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocataireRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocataireRefreshTokens.
     */
    skip?: number;
    distinct?: Prisma.LocataireRefreshTokenScalarFieldEnum | Prisma.LocataireRefreshTokenScalarFieldEnum[];
};
/**
 * LocataireRefreshToken create
 */
export type LocataireRefreshTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a LocataireRefreshToken.
     */
    data: Prisma.XOR<Prisma.LocataireRefreshTokenCreateInput, Prisma.LocataireRefreshTokenUncheckedCreateInput>;
};
/**
 * LocataireRefreshToken createMany
 */
export type LocataireRefreshTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocataireRefreshTokens.
     */
    data: Prisma.LocataireRefreshTokenCreateManyInput | Prisma.LocataireRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LocataireRefreshToken createManyAndReturn
 */
export type LocataireRefreshTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many LocataireRefreshTokens.
     */
    data: Prisma.LocataireRefreshTokenCreateManyInput | Prisma.LocataireRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LocataireRefreshToken update
 */
export type LocataireRefreshTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a LocataireRefreshToken.
     */
    data: Prisma.XOR<Prisma.LocataireRefreshTokenUpdateInput, Prisma.LocataireRefreshTokenUncheckedUpdateInput>;
    /**
     * Choose, which LocataireRefreshToken to update.
     */
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
};
/**
 * LocataireRefreshToken updateMany
 */
export type LocataireRefreshTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LocataireRefreshTokens.
     */
    data: Prisma.XOR<Prisma.LocataireRefreshTokenUpdateManyMutationInput, Prisma.LocataireRefreshTokenUncheckedUpdateManyInput>;
    /**
     * Filter which LocataireRefreshTokens to update
     */
    where?: Prisma.LocataireRefreshTokenWhereInput;
    /**
     * Limit how many LocataireRefreshTokens to update.
     */
    limit?: number;
};
/**
 * LocataireRefreshToken updateManyAndReturn
 */
export type LocataireRefreshTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to update LocataireRefreshTokens.
     */
    data: Prisma.XOR<Prisma.LocataireRefreshTokenUpdateManyMutationInput, Prisma.LocataireRefreshTokenUncheckedUpdateManyInput>;
    /**
     * Filter which LocataireRefreshTokens to update
     */
    where?: Prisma.LocataireRefreshTokenWhereInput;
    /**
     * Limit how many LocataireRefreshTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LocataireRefreshToken upsert
 */
export type LocataireRefreshTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the LocataireRefreshToken to update in case it exists.
     */
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
    /**
     * In case the LocataireRefreshToken found by the `where` argument doesn't exist, create a new LocataireRefreshToken with this data.
     */
    create: Prisma.XOR<Prisma.LocataireRefreshTokenCreateInput, Prisma.LocataireRefreshTokenUncheckedCreateInput>;
    /**
     * In case the LocataireRefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LocataireRefreshTokenUpdateInput, Prisma.LocataireRefreshTokenUncheckedUpdateInput>;
};
/**
 * LocataireRefreshToken delete
 */
export type LocataireRefreshTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter which LocataireRefreshToken to delete.
     */
    where: Prisma.LocataireRefreshTokenWhereUniqueInput;
};
/**
 * LocataireRefreshToken deleteMany
 */
export type LocataireRefreshTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LocataireRefreshTokens to delete
     */
    where?: Prisma.LocataireRefreshTokenWhereInput;
    /**
     * Limit how many LocataireRefreshTokens to delete.
     */
    limit?: number;
};
/**
 * LocataireRefreshToken without action
 */
export type LocataireRefreshTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LocataireRefreshToken.d.ts.map