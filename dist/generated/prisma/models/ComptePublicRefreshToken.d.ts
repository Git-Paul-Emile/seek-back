import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ComptePublicRefreshToken
 *
 */
export type ComptePublicRefreshTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$ComptePublicRefreshTokenPayload>;
export type AggregateComptePublicRefreshToken = {
    _count: ComptePublicRefreshTokenCountAggregateOutputType | null;
    _min: ComptePublicRefreshTokenMinAggregateOutputType | null;
    _max: ComptePublicRefreshTokenMaxAggregateOutputType | null;
};
export type ComptePublicRefreshTokenMinAggregateOutputType = {
    id: string | null;
    comptePublicId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type ComptePublicRefreshTokenMaxAggregateOutputType = {
    id: string | null;
    comptePublicId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type ComptePublicRefreshTokenCountAggregateOutputType = {
    id: number;
    comptePublicId: number;
    tokenHash: number;
    expiresAt: number;
    revokedAt: number;
    createdAt: number;
    _all: number;
};
export type ComptePublicRefreshTokenMinAggregateInputType = {
    id?: true;
    comptePublicId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type ComptePublicRefreshTokenMaxAggregateInputType = {
    id?: true;
    comptePublicId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type ComptePublicRefreshTokenCountAggregateInputType = {
    id?: true;
    comptePublicId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ComptePublicRefreshTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ComptePublicRefreshToken to aggregate.
     */
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublicRefreshTokens to fetch.
     */
    orderBy?: Prisma.ComptePublicRefreshTokenOrderByWithRelationInput | Prisma.ComptePublicRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublicRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublicRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ComptePublicRefreshTokens
    **/
    _count?: true | ComptePublicRefreshTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ComptePublicRefreshTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ComptePublicRefreshTokenMaxAggregateInputType;
};
export type GetComptePublicRefreshTokenAggregateType<T extends ComptePublicRefreshTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateComptePublicRefreshToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComptePublicRefreshToken[P]> : Prisma.GetScalarType<T[P], AggregateComptePublicRefreshToken[P]>;
};
export type ComptePublicRefreshTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    orderBy?: Prisma.ComptePublicRefreshTokenOrderByWithAggregationInput | Prisma.ComptePublicRefreshTokenOrderByWithAggregationInput[];
    by: Prisma.ComptePublicRefreshTokenScalarFieldEnum[] | Prisma.ComptePublicRefreshTokenScalarFieldEnum;
    having?: Prisma.ComptePublicRefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComptePublicRefreshTokenCountAggregateInputType | true;
    _min?: ComptePublicRefreshTokenMinAggregateInputType;
    _max?: ComptePublicRefreshTokenMaxAggregateInputType;
};
export type ComptePublicRefreshTokenGroupByOutputType = {
    id: string;
    comptePublicId: string;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdAt: Date;
    _count: ComptePublicRefreshTokenCountAggregateOutputType | null;
    _min: ComptePublicRefreshTokenMinAggregateOutputType | null;
    _max: ComptePublicRefreshTokenMaxAggregateOutputType | null;
};
type GetComptePublicRefreshTokenGroupByPayload<T extends ComptePublicRefreshTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComptePublicRefreshTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComptePublicRefreshTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComptePublicRefreshTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComptePublicRefreshTokenGroupByOutputType[P]>;
}>>;
export type ComptePublicRefreshTokenWhereInput = {
    AND?: Prisma.ComptePublicRefreshTokenWhereInput | Prisma.ComptePublicRefreshTokenWhereInput[];
    OR?: Prisma.ComptePublicRefreshTokenWhereInput[];
    NOT?: Prisma.ComptePublicRefreshTokenWhereInput | Prisma.ComptePublicRefreshTokenWhereInput[];
    id?: Prisma.StringFilter<"ComptePublicRefreshToken"> | string;
    comptePublicId?: Prisma.StringFilter<"ComptePublicRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"ComptePublicRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"ComptePublicRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ComptePublicRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComptePublicRefreshToken"> | Date | string;
    comptePublic?: Prisma.XOR<Prisma.ComptePublicScalarRelationFilter, Prisma.ComptePublicWhereInput>;
};
export type ComptePublicRefreshTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    comptePublicId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    comptePublic?: Prisma.ComptePublicOrderByWithRelationInput;
};
export type ComptePublicRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.ComptePublicRefreshTokenWhereInput | Prisma.ComptePublicRefreshTokenWhereInput[];
    OR?: Prisma.ComptePublicRefreshTokenWhereInput[];
    NOT?: Prisma.ComptePublicRefreshTokenWhereInput | Prisma.ComptePublicRefreshTokenWhereInput[];
    comptePublicId?: Prisma.StringFilter<"ComptePublicRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"ComptePublicRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ComptePublicRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComptePublicRefreshToken"> | Date | string;
    comptePublic?: Prisma.XOR<Prisma.ComptePublicScalarRelationFilter, Prisma.ComptePublicWhereInput>;
}, "id" | "tokenHash">;
export type ComptePublicRefreshTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    comptePublicId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ComptePublicRefreshTokenCountOrderByAggregateInput;
    _max?: Prisma.ComptePublicRefreshTokenMaxOrderByAggregateInput;
    _min?: Prisma.ComptePublicRefreshTokenMinOrderByAggregateInput;
};
export type ComptePublicRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComptePublicRefreshTokenScalarWhereWithAggregatesInput | Prisma.ComptePublicRefreshTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComptePublicRefreshTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComptePublicRefreshTokenScalarWhereWithAggregatesInput | Prisma.ComptePublicRefreshTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ComptePublicRefreshToken"> | string;
    comptePublicId?: Prisma.StringWithAggregatesFilter<"ComptePublicRefreshToken"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"ComptePublicRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"ComptePublicRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ComptePublicRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ComptePublicRefreshToken"> | Date | string;
};
export type ComptePublicRefreshTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    comptePublic: Prisma.ComptePublicCreateNestedOneWithoutRefreshTokensInput;
};
export type ComptePublicRefreshTokenUncheckedCreateInput = {
    id?: string;
    comptePublicId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ComptePublicRefreshTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comptePublic?: Prisma.ComptePublicUpdateOneRequiredWithoutRefreshTokensNestedInput;
};
export type ComptePublicRefreshTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comptePublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicRefreshTokenCreateManyInput = {
    id?: string;
    comptePublicId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ComptePublicRefreshTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicRefreshTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comptePublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicRefreshTokenListRelationFilter = {
    every?: Prisma.ComptePublicRefreshTokenWhereInput;
    some?: Prisma.ComptePublicRefreshTokenWhereInput;
    none?: Prisma.ComptePublicRefreshTokenWhereInput;
};
export type ComptePublicRefreshTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ComptePublicRefreshTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    comptePublicId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComptePublicRefreshTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    comptePublicId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComptePublicRefreshTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    comptePublicId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComptePublicRefreshTokenCreateNestedManyWithoutComptePublicInput = {
    create?: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput> | Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput[] | Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput[];
    connectOrCreate?: Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput[];
    createMany?: Prisma.ComptePublicRefreshTokenCreateManyComptePublicInputEnvelope;
    connect?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
};
export type ComptePublicRefreshTokenUncheckedCreateNestedManyWithoutComptePublicInput = {
    create?: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput> | Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput[] | Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput[];
    connectOrCreate?: Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput[];
    createMany?: Prisma.ComptePublicRefreshTokenCreateManyComptePublicInputEnvelope;
    connect?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
};
export type ComptePublicRefreshTokenUpdateManyWithoutComptePublicNestedInput = {
    create?: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput> | Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput[] | Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput[];
    connectOrCreate?: Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput[];
    upsert?: Prisma.ComptePublicRefreshTokenUpsertWithWhereUniqueWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenUpsertWithWhereUniqueWithoutComptePublicInput[];
    createMany?: Prisma.ComptePublicRefreshTokenCreateManyComptePublicInputEnvelope;
    set?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    delete?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    connect?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    update?: Prisma.ComptePublicRefreshTokenUpdateWithWhereUniqueWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenUpdateWithWhereUniqueWithoutComptePublicInput[];
    updateMany?: Prisma.ComptePublicRefreshTokenUpdateManyWithWhereWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenUpdateManyWithWhereWithoutComptePublicInput[];
    deleteMany?: Prisma.ComptePublicRefreshTokenScalarWhereInput | Prisma.ComptePublicRefreshTokenScalarWhereInput[];
};
export type ComptePublicRefreshTokenUncheckedUpdateManyWithoutComptePublicNestedInput = {
    create?: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput> | Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput[] | Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput[];
    connectOrCreate?: Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput[];
    upsert?: Prisma.ComptePublicRefreshTokenUpsertWithWhereUniqueWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenUpsertWithWhereUniqueWithoutComptePublicInput[];
    createMany?: Prisma.ComptePublicRefreshTokenCreateManyComptePublicInputEnvelope;
    set?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    delete?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    connect?: Prisma.ComptePublicRefreshTokenWhereUniqueInput | Prisma.ComptePublicRefreshTokenWhereUniqueInput[];
    update?: Prisma.ComptePublicRefreshTokenUpdateWithWhereUniqueWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenUpdateWithWhereUniqueWithoutComptePublicInput[];
    updateMany?: Prisma.ComptePublicRefreshTokenUpdateManyWithWhereWithoutComptePublicInput | Prisma.ComptePublicRefreshTokenUpdateManyWithWhereWithoutComptePublicInput[];
    deleteMany?: Prisma.ComptePublicRefreshTokenScalarWhereInput | Prisma.ComptePublicRefreshTokenScalarWhereInput[];
};
export type ComptePublicRefreshTokenCreateWithoutComptePublicInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ComptePublicRefreshTokenCreateOrConnectWithoutComptePublicInput = {
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput>;
};
export type ComptePublicRefreshTokenCreateManyComptePublicInputEnvelope = {
    data: Prisma.ComptePublicRefreshTokenCreateManyComptePublicInput | Prisma.ComptePublicRefreshTokenCreateManyComptePublicInput[];
    skipDuplicates?: boolean;
};
export type ComptePublicRefreshTokenUpsertWithWhereUniqueWithoutComptePublicInput = {
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComptePublicRefreshTokenUpdateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedUpdateWithoutComptePublicInput>;
    create: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedCreateWithoutComptePublicInput>;
};
export type ComptePublicRefreshTokenUpdateWithWhereUniqueWithoutComptePublicInput = {
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComptePublicRefreshTokenUpdateWithoutComptePublicInput, Prisma.ComptePublicRefreshTokenUncheckedUpdateWithoutComptePublicInput>;
};
export type ComptePublicRefreshTokenUpdateManyWithWhereWithoutComptePublicInput = {
    where: Prisma.ComptePublicRefreshTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.ComptePublicRefreshTokenUpdateManyMutationInput, Prisma.ComptePublicRefreshTokenUncheckedUpdateManyWithoutComptePublicInput>;
};
export type ComptePublicRefreshTokenScalarWhereInput = {
    AND?: Prisma.ComptePublicRefreshTokenScalarWhereInput | Prisma.ComptePublicRefreshTokenScalarWhereInput[];
    OR?: Prisma.ComptePublicRefreshTokenScalarWhereInput[];
    NOT?: Prisma.ComptePublicRefreshTokenScalarWhereInput | Prisma.ComptePublicRefreshTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"ComptePublicRefreshToken"> | string;
    comptePublicId?: Prisma.StringFilter<"ComptePublicRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"ComptePublicRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"ComptePublicRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ComptePublicRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComptePublicRefreshToken"> | Date | string;
};
export type ComptePublicRefreshTokenCreateManyComptePublicInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ComptePublicRefreshTokenUpdateWithoutComptePublicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicRefreshTokenUncheckedUpdateWithoutComptePublicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicRefreshTokenUncheckedUpdateManyWithoutComptePublicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicRefreshTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    comptePublicId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    comptePublic?: boolean | Prisma.ComptePublicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comptePublicRefreshToken"]>;
export type ComptePublicRefreshTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    comptePublicId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    comptePublic?: boolean | Prisma.ComptePublicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comptePublicRefreshToken"]>;
export type ComptePublicRefreshTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    comptePublicId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    comptePublic?: boolean | Prisma.ComptePublicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comptePublicRefreshToken"]>;
export type ComptePublicRefreshTokenSelectScalar = {
    id?: boolean;
    comptePublicId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
};
export type ComptePublicRefreshTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "comptePublicId" | "tokenHash" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["comptePublicRefreshToken"]>;
export type ComptePublicRefreshTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comptePublic?: boolean | Prisma.ComptePublicDefaultArgs<ExtArgs>;
};
export type ComptePublicRefreshTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comptePublic?: boolean | Prisma.ComptePublicDefaultArgs<ExtArgs>;
};
export type ComptePublicRefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comptePublic?: boolean | Prisma.ComptePublicDefaultArgs<ExtArgs>;
};
export type $ComptePublicRefreshTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComptePublicRefreshToken";
    objects: {
        comptePublic: Prisma.$ComptePublicPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        comptePublicId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["comptePublicRefreshToken"]>;
    composites: {};
};
export type ComptePublicRefreshTokenGetPayload<S extends boolean | null | undefined | ComptePublicRefreshTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload, S>;
export type ComptePublicRefreshTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComptePublicRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComptePublicRefreshTokenCountAggregateInputType | true;
};
export interface ComptePublicRefreshTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComptePublicRefreshToken'];
        meta: {
            name: 'ComptePublicRefreshToken';
        };
    };
    /**
     * Find zero or one ComptePublicRefreshToken that matches the filter.
     * @param {ComptePublicRefreshTokenFindUniqueArgs} args - Arguments to find a ComptePublicRefreshToken
     * @example
     * // Get one ComptePublicRefreshToken
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComptePublicRefreshTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ComptePublicRefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComptePublicRefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a ComptePublicRefreshToken
     * @example
     * // Get one ComptePublicRefreshToken
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComptePublicRefreshTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ComptePublicRefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicRefreshTokenFindFirstArgs} args - Arguments to find a ComptePublicRefreshToken
     * @example
     * // Get one ComptePublicRefreshToken
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComptePublicRefreshTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, ComptePublicRefreshTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ComptePublicRefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicRefreshTokenFindFirstOrThrowArgs} args - Arguments to find a ComptePublicRefreshToken
     * @example
     * // Get one ComptePublicRefreshToken
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComptePublicRefreshTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComptePublicRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ComptePublicRefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicRefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComptePublicRefreshTokens
     * const comptePublicRefreshTokens = await prisma.comptePublicRefreshToken.findMany()
     *
     * // Get first 10 ComptePublicRefreshTokens
     * const comptePublicRefreshTokens = await prisma.comptePublicRefreshToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const comptePublicRefreshTokenWithIdOnly = await prisma.comptePublicRefreshToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ComptePublicRefreshTokenFindManyArgs>(args?: Prisma.SelectSubset<T, ComptePublicRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ComptePublicRefreshToken.
     * @param {ComptePublicRefreshTokenCreateArgs} args - Arguments to create a ComptePublicRefreshToken.
     * @example
     * // Create one ComptePublicRefreshToken
     * const ComptePublicRefreshToken = await prisma.comptePublicRefreshToken.create({
     *   data: {
     *     // ... data to create a ComptePublicRefreshToken
     *   }
     * })
     *
     */
    create<T extends ComptePublicRefreshTokenCreateArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenCreateArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ComptePublicRefreshTokens.
     * @param {ComptePublicRefreshTokenCreateManyArgs} args - Arguments to create many ComptePublicRefreshTokens.
     * @example
     * // Create many ComptePublicRefreshTokens
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ComptePublicRefreshTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, ComptePublicRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ComptePublicRefreshTokens and returns the data saved in the database.
     * @param {ComptePublicRefreshTokenCreateManyAndReturnArgs} args - Arguments to create many ComptePublicRefreshTokens.
     * @example
     * // Create many ComptePublicRefreshTokens
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ComptePublicRefreshTokens and only return the `id`
     * const comptePublicRefreshTokenWithIdOnly = await prisma.comptePublicRefreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ComptePublicRefreshTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComptePublicRefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ComptePublicRefreshToken.
     * @param {ComptePublicRefreshTokenDeleteArgs} args - Arguments to delete one ComptePublicRefreshToken.
     * @example
     * // Delete one ComptePublicRefreshToken
     * const ComptePublicRefreshToken = await prisma.comptePublicRefreshToken.delete({
     *   where: {
     *     // ... filter to delete one ComptePublicRefreshToken
     *   }
     * })
     *
     */
    delete<T extends ComptePublicRefreshTokenDeleteArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ComptePublicRefreshToken.
     * @param {ComptePublicRefreshTokenUpdateArgs} args - Arguments to update one ComptePublicRefreshToken.
     * @example
     * // Update one ComptePublicRefreshToken
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ComptePublicRefreshTokenUpdateArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ComptePublicRefreshTokens.
     * @param {ComptePublicRefreshTokenDeleteManyArgs} args - Arguments to filter ComptePublicRefreshTokens to delete.
     * @example
     * // Delete a few ComptePublicRefreshTokens
     * const { count } = await prisma.comptePublicRefreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ComptePublicRefreshTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComptePublicRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ComptePublicRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicRefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComptePublicRefreshTokens
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ComptePublicRefreshTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ComptePublicRefreshTokens and returns the data updated in the database.
     * @param {ComptePublicRefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many ComptePublicRefreshTokens.
     * @example
     * // Update many ComptePublicRefreshTokens
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ComptePublicRefreshTokens and only return the `id`
     * const comptePublicRefreshTokenWithIdOnly = await prisma.comptePublicRefreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComptePublicRefreshTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ComptePublicRefreshToken.
     * @param {ComptePublicRefreshTokenUpsertArgs} args - Arguments to update or create a ComptePublicRefreshToken.
     * @example
     * // Update or create a ComptePublicRefreshToken
     * const comptePublicRefreshToken = await prisma.comptePublicRefreshToken.upsert({
     *   create: {
     *     // ... data to create a ComptePublicRefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComptePublicRefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends ComptePublicRefreshTokenUpsertArgs>(args: Prisma.SelectSubset<T, ComptePublicRefreshTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__ComptePublicRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ComptePublicRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicRefreshTokenCountArgs} args - Arguments to filter ComptePublicRefreshTokens to count.
     * @example
     * // Count the number of ComptePublicRefreshTokens
     * const count = await prisma.comptePublicRefreshToken.count({
     *   where: {
     *     // ... the filter for the ComptePublicRefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends ComptePublicRefreshTokenCountArgs>(args?: Prisma.Subset<T, ComptePublicRefreshTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComptePublicRefreshTokenCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ComptePublicRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicRefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComptePublicRefreshTokenAggregateArgs>(args: Prisma.Subset<T, ComptePublicRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetComptePublicRefreshTokenAggregateType<T>>;
    /**
     * Group by ComptePublicRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicRefreshTokenGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ComptePublicRefreshTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComptePublicRefreshTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: ComptePublicRefreshTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComptePublicRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComptePublicRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ComptePublicRefreshToken model
     */
    readonly fields: ComptePublicRefreshTokenFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ComptePublicRefreshToken.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ComptePublicRefreshTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comptePublic<T extends Prisma.ComptePublicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComptePublicDefaultArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ComptePublicRefreshToken model
 */
export interface ComptePublicRefreshTokenFieldRefs {
    readonly id: Prisma.FieldRef<"ComptePublicRefreshToken", 'String'>;
    readonly comptePublicId: Prisma.FieldRef<"ComptePublicRefreshToken", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"ComptePublicRefreshToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"ComptePublicRefreshToken", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"ComptePublicRefreshToken", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ComptePublicRefreshToken", 'DateTime'>;
}
/**
 * ComptePublicRefreshToken findUnique
 */
export type ComptePublicRefreshTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublicRefreshToken to fetch.
     */
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
};
/**
 * ComptePublicRefreshToken findUniqueOrThrow
 */
export type ComptePublicRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublicRefreshToken to fetch.
     */
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
};
/**
 * ComptePublicRefreshToken findFirst
 */
export type ComptePublicRefreshTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublicRefreshToken to fetch.
     */
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublicRefreshTokens to fetch.
     */
    orderBy?: Prisma.ComptePublicRefreshTokenOrderByWithRelationInput | Prisma.ComptePublicRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ComptePublicRefreshTokens.
     */
    cursor?: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublicRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublicRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ComptePublicRefreshTokens.
     */
    distinct?: Prisma.ComptePublicRefreshTokenScalarFieldEnum | Prisma.ComptePublicRefreshTokenScalarFieldEnum[];
};
/**
 * ComptePublicRefreshToken findFirstOrThrow
 */
export type ComptePublicRefreshTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublicRefreshToken to fetch.
     */
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublicRefreshTokens to fetch.
     */
    orderBy?: Prisma.ComptePublicRefreshTokenOrderByWithRelationInput | Prisma.ComptePublicRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ComptePublicRefreshTokens.
     */
    cursor?: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublicRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublicRefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ComptePublicRefreshTokens.
     */
    distinct?: Prisma.ComptePublicRefreshTokenScalarFieldEnum | Prisma.ComptePublicRefreshTokenScalarFieldEnum[];
};
/**
 * ComptePublicRefreshToken findMany
 */
export type ComptePublicRefreshTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublicRefreshTokens to fetch.
     */
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublicRefreshTokens to fetch.
     */
    orderBy?: Prisma.ComptePublicRefreshTokenOrderByWithRelationInput | Prisma.ComptePublicRefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ComptePublicRefreshTokens.
     */
    cursor?: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublicRefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublicRefreshTokens.
     */
    skip?: number;
    distinct?: Prisma.ComptePublicRefreshTokenScalarFieldEnum | Prisma.ComptePublicRefreshTokenScalarFieldEnum[];
};
/**
 * ComptePublicRefreshToken create
 */
export type ComptePublicRefreshTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a ComptePublicRefreshToken.
     */
    data: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateInput, Prisma.ComptePublicRefreshTokenUncheckedCreateInput>;
};
/**
 * ComptePublicRefreshToken createMany
 */
export type ComptePublicRefreshTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComptePublicRefreshTokens.
     */
    data: Prisma.ComptePublicRefreshTokenCreateManyInput | Prisma.ComptePublicRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ComptePublicRefreshToken createManyAndReturn
 */
export type ComptePublicRefreshTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many ComptePublicRefreshTokens.
     */
    data: Prisma.ComptePublicRefreshTokenCreateManyInput | Prisma.ComptePublicRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ComptePublicRefreshToken update
 */
export type ComptePublicRefreshTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a ComptePublicRefreshToken.
     */
    data: Prisma.XOR<Prisma.ComptePublicRefreshTokenUpdateInput, Prisma.ComptePublicRefreshTokenUncheckedUpdateInput>;
    /**
     * Choose, which ComptePublicRefreshToken to update.
     */
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
};
/**
 * ComptePublicRefreshToken updateMany
 */
export type ComptePublicRefreshTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ComptePublicRefreshTokens.
     */
    data: Prisma.XOR<Prisma.ComptePublicRefreshTokenUpdateManyMutationInput, Prisma.ComptePublicRefreshTokenUncheckedUpdateManyInput>;
    /**
     * Filter which ComptePublicRefreshTokens to update
     */
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    /**
     * Limit how many ComptePublicRefreshTokens to update.
     */
    limit?: number;
};
/**
 * ComptePublicRefreshToken updateManyAndReturn
 */
export type ComptePublicRefreshTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to update ComptePublicRefreshTokens.
     */
    data: Prisma.XOR<Prisma.ComptePublicRefreshTokenUpdateManyMutationInput, Prisma.ComptePublicRefreshTokenUncheckedUpdateManyInput>;
    /**
     * Filter which ComptePublicRefreshTokens to update
     */
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    /**
     * Limit how many ComptePublicRefreshTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ComptePublicRefreshToken upsert
 */
export type ComptePublicRefreshTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the ComptePublicRefreshToken to update in case it exists.
     */
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    /**
     * In case the ComptePublicRefreshToken found by the `where` argument doesn't exist, create a new ComptePublicRefreshToken with this data.
     */
    create: Prisma.XOR<Prisma.ComptePublicRefreshTokenCreateInput, Prisma.ComptePublicRefreshTokenUncheckedCreateInput>;
    /**
     * In case the ComptePublicRefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ComptePublicRefreshTokenUpdateInput, Prisma.ComptePublicRefreshTokenUncheckedUpdateInput>;
};
/**
 * ComptePublicRefreshToken delete
 */
export type ComptePublicRefreshTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter which ComptePublicRefreshToken to delete.
     */
    where: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
};
/**
 * ComptePublicRefreshToken deleteMany
 */
export type ComptePublicRefreshTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ComptePublicRefreshTokens to delete
     */
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    /**
     * Limit how many ComptePublicRefreshTokens to delete.
     */
    limit?: number;
};
/**
 * ComptePublicRefreshToken without action
 */
export type ComptePublicRefreshTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicRefreshToken
     */
    select?: Prisma.ComptePublicRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublicRefreshToken
     */
    omit?: Prisma.ComptePublicRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicRefreshTokenInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ComptePublicRefreshToken.d.ts.map