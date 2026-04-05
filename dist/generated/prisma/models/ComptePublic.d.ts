import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ComptePublic
 *
 */
export type ComptePublicModel = runtime.Types.Result.DefaultSelection<Prisma.$ComptePublicPayload>;
export type AggregateComptePublic = {
    _count: ComptePublicCountAggregateOutputType | null;
    _min: ComptePublicMinAggregateOutputType | null;
    _max: ComptePublicMaxAggregateOutputType | null;
};
export type ComptePublicMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ComptePublicMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ComptePublicCountAggregateOutputType = {
    id: number;
    nom: number;
    prenom: number;
    telephone: number;
    email: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ComptePublicMinAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ComptePublicMaxAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ComptePublicCountAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ComptePublicAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ComptePublic to aggregate.
     */
    where?: Prisma.ComptePublicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublics to fetch.
     */
    orderBy?: Prisma.ComptePublicOrderByWithRelationInput | Prisma.ComptePublicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ComptePublicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ComptePublics
    **/
    _count?: true | ComptePublicCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ComptePublicMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ComptePublicMaxAggregateInputType;
};
export type GetComptePublicAggregateType<T extends ComptePublicAggregateArgs> = {
    [P in keyof T & keyof AggregateComptePublic]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComptePublic[P]> : Prisma.GetScalarType<T[P], AggregateComptePublic[P]>;
};
export type ComptePublicGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComptePublicWhereInput;
    orderBy?: Prisma.ComptePublicOrderByWithAggregationInput | Prisma.ComptePublicOrderByWithAggregationInput[];
    by: Prisma.ComptePublicScalarFieldEnum[] | Prisma.ComptePublicScalarFieldEnum;
    having?: Prisma.ComptePublicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComptePublicCountAggregateInputType | true;
    _min?: ComptePublicMinAggregateInputType;
    _max?: ComptePublicMaxAggregateInputType;
};
export type ComptePublicGroupByOutputType = {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    email: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ComptePublicCountAggregateOutputType | null;
    _min: ComptePublicMinAggregateOutputType | null;
    _max: ComptePublicMaxAggregateOutputType | null;
};
type GetComptePublicGroupByPayload<T extends ComptePublicGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComptePublicGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComptePublicGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComptePublicGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComptePublicGroupByOutputType[P]>;
}>>;
export type ComptePublicWhereInput = {
    AND?: Prisma.ComptePublicWhereInput | Prisma.ComptePublicWhereInput[];
    OR?: Prisma.ComptePublicWhereInput[];
    NOT?: Prisma.ComptePublicWhereInput | Prisma.ComptePublicWhereInput[];
    id?: Prisma.StringFilter<"ComptePublic"> | string;
    nom?: Prisma.StringFilter<"ComptePublic"> | string;
    prenom?: Prisma.StringFilter<"ComptePublic"> | string;
    telephone?: Prisma.StringFilter<"ComptePublic"> | string;
    email?: Prisma.StringNullableFilter<"ComptePublic"> | string | null;
    password?: Prisma.StringFilter<"ComptePublic"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComptePublic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ComptePublic"> | Date | string;
    favoris?: Prisma.FavoriListRelationFilter;
    refreshTokens?: Prisma.ComptePublicRefreshTokenListRelationFilter;
    signalements?: Prisma.SignalementListRelationFilter;
};
export type ComptePublicOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    favoris?: Prisma.FavoriOrderByRelationAggregateInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenOrderByRelationAggregateInput;
    signalements?: Prisma.SignalementOrderByRelationAggregateInput;
};
export type ComptePublicWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    telephone?: string;
    email?: string;
    AND?: Prisma.ComptePublicWhereInput | Prisma.ComptePublicWhereInput[];
    OR?: Prisma.ComptePublicWhereInput[];
    NOT?: Prisma.ComptePublicWhereInput | Prisma.ComptePublicWhereInput[];
    nom?: Prisma.StringFilter<"ComptePublic"> | string;
    prenom?: Prisma.StringFilter<"ComptePublic"> | string;
    password?: Prisma.StringFilter<"ComptePublic"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComptePublic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ComptePublic"> | Date | string;
    favoris?: Prisma.FavoriListRelationFilter;
    refreshTokens?: Prisma.ComptePublicRefreshTokenListRelationFilter;
    signalements?: Prisma.SignalementListRelationFilter;
}, "id" | "telephone" | "email">;
export type ComptePublicOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ComptePublicCountOrderByAggregateInput;
    _max?: Prisma.ComptePublicMaxOrderByAggregateInput;
    _min?: Prisma.ComptePublicMinOrderByAggregateInput;
};
export type ComptePublicScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComptePublicScalarWhereWithAggregatesInput | Prisma.ComptePublicScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComptePublicScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComptePublicScalarWhereWithAggregatesInput | Prisma.ComptePublicScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ComptePublic"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"ComptePublic"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"ComptePublic"> | string;
    telephone?: Prisma.StringWithAggregatesFilter<"ComptePublic"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"ComptePublic"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"ComptePublic"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ComptePublic"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ComptePublic"> | Date | string;
};
export type ComptePublicCreateInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoris?: Prisma.FavoriCreateNestedManyWithoutComptePublicInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenCreateNestedManyWithoutComptePublicInput;
    signalements?: Prisma.SignalementCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicUncheckedCreateInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoris?: Prisma.FavoriUncheckedCreateNestedManyWithoutComptePublicInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUncheckedCreateNestedManyWithoutComptePublicInput;
    signalements?: Prisma.SignalementUncheckedCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoris?: Prisma.FavoriUpdateManyWithoutComptePublicNestedInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUpdateManyWithoutComptePublicNestedInput;
    signalements?: Prisma.SignalementUpdateManyWithoutComptePublicNestedInput;
};
export type ComptePublicUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoris?: Prisma.FavoriUncheckedUpdateManyWithoutComptePublicNestedInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUncheckedUpdateManyWithoutComptePublicNestedInput;
    signalements?: Prisma.SignalementUncheckedUpdateManyWithoutComptePublicNestedInput;
};
export type ComptePublicCreateManyInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ComptePublicUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComptePublicCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ComptePublicMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ComptePublicMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ComptePublicScalarRelationFilter = {
    is?: Prisma.ComptePublicWhereInput;
    isNot?: Prisma.ComptePublicWhereInput;
};
export type ComptePublicNullableScalarRelationFilter = {
    is?: Prisma.ComptePublicWhereInput | null;
    isNot?: Prisma.ComptePublicWhereInput | null;
};
export type ComptePublicCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.ComptePublicCreateWithoutRefreshTokensInput, Prisma.ComptePublicUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.ComptePublicCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.ComptePublicWhereUniqueInput;
};
export type ComptePublicUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.ComptePublicCreateWithoutRefreshTokensInput, Prisma.ComptePublicUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.ComptePublicCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.ComptePublicUpsertWithoutRefreshTokensInput;
    connect?: Prisma.ComptePublicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComptePublicUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.ComptePublicUpdateWithoutRefreshTokensInput>, Prisma.ComptePublicUncheckedUpdateWithoutRefreshTokensInput>;
};
export type ComptePublicCreateNestedOneWithoutFavorisInput = {
    create?: Prisma.XOR<Prisma.ComptePublicCreateWithoutFavorisInput, Prisma.ComptePublicUncheckedCreateWithoutFavorisInput>;
    connectOrCreate?: Prisma.ComptePublicCreateOrConnectWithoutFavorisInput;
    connect?: Prisma.ComptePublicWhereUniqueInput;
};
export type ComptePublicUpdateOneRequiredWithoutFavorisNestedInput = {
    create?: Prisma.XOR<Prisma.ComptePublicCreateWithoutFavorisInput, Prisma.ComptePublicUncheckedCreateWithoutFavorisInput>;
    connectOrCreate?: Prisma.ComptePublicCreateOrConnectWithoutFavorisInput;
    upsert?: Prisma.ComptePublicUpsertWithoutFavorisInput;
    connect?: Prisma.ComptePublicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComptePublicUpdateToOneWithWhereWithoutFavorisInput, Prisma.ComptePublicUpdateWithoutFavorisInput>, Prisma.ComptePublicUncheckedUpdateWithoutFavorisInput>;
};
export type ComptePublicCreateNestedOneWithoutSignalementsInput = {
    create?: Prisma.XOR<Prisma.ComptePublicCreateWithoutSignalementsInput, Prisma.ComptePublicUncheckedCreateWithoutSignalementsInput>;
    connectOrCreate?: Prisma.ComptePublicCreateOrConnectWithoutSignalementsInput;
    connect?: Prisma.ComptePublicWhereUniqueInput;
};
export type ComptePublicUpdateOneWithoutSignalementsNestedInput = {
    create?: Prisma.XOR<Prisma.ComptePublicCreateWithoutSignalementsInput, Prisma.ComptePublicUncheckedCreateWithoutSignalementsInput>;
    connectOrCreate?: Prisma.ComptePublicCreateOrConnectWithoutSignalementsInput;
    upsert?: Prisma.ComptePublicUpsertWithoutSignalementsInput;
    disconnect?: Prisma.ComptePublicWhereInput | boolean;
    delete?: Prisma.ComptePublicWhereInput | boolean;
    connect?: Prisma.ComptePublicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComptePublicUpdateToOneWithWhereWithoutSignalementsInput, Prisma.ComptePublicUpdateWithoutSignalementsInput>, Prisma.ComptePublicUncheckedUpdateWithoutSignalementsInput>;
};
export type ComptePublicCreateWithoutRefreshTokensInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoris?: Prisma.FavoriCreateNestedManyWithoutComptePublicInput;
    signalements?: Prisma.SignalementCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoris?: Prisma.FavoriUncheckedCreateNestedManyWithoutComptePublicInput;
    signalements?: Prisma.SignalementUncheckedCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.ComptePublicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComptePublicCreateWithoutRefreshTokensInput, Prisma.ComptePublicUncheckedCreateWithoutRefreshTokensInput>;
};
export type ComptePublicUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.ComptePublicUpdateWithoutRefreshTokensInput, Prisma.ComptePublicUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.ComptePublicCreateWithoutRefreshTokensInput, Prisma.ComptePublicUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.ComptePublicWhereInput;
};
export type ComptePublicUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.ComptePublicWhereInput;
    data: Prisma.XOR<Prisma.ComptePublicUpdateWithoutRefreshTokensInput, Prisma.ComptePublicUncheckedUpdateWithoutRefreshTokensInput>;
};
export type ComptePublicUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoris?: Prisma.FavoriUpdateManyWithoutComptePublicNestedInput;
    signalements?: Prisma.SignalementUpdateManyWithoutComptePublicNestedInput;
};
export type ComptePublicUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoris?: Prisma.FavoriUncheckedUpdateManyWithoutComptePublicNestedInput;
    signalements?: Prisma.SignalementUncheckedUpdateManyWithoutComptePublicNestedInput;
};
export type ComptePublicCreateWithoutFavorisInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refreshTokens?: Prisma.ComptePublicRefreshTokenCreateNestedManyWithoutComptePublicInput;
    signalements?: Prisma.SignalementCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicUncheckedCreateWithoutFavorisInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUncheckedCreateNestedManyWithoutComptePublicInput;
    signalements?: Prisma.SignalementUncheckedCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicCreateOrConnectWithoutFavorisInput = {
    where: Prisma.ComptePublicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComptePublicCreateWithoutFavorisInput, Prisma.ComptePublicUncheckedCreateWithoutFavorisInput>;
};
export type ComptePublicUpsertWithoutFavorisInput = {
    update: Prisma.XOR<Prisma.ComptePublicUpdateWithoutFavorisInput, Prisma.ComptePublicUncheckedUpdateWithoutFavorisInput>;
    create: Prisma.XOR<Prisma.ComptePublicCreateWithoutFavorisInput, Prisma.ComptePublicUncheckedCreateWithoutFavorisInput>;
    where?: Prisma.ComptePublicWhereInput;
};
export type ComptePublicUpdateToOneWithWhereWithoutFavorisInput = {
    where?: Prisma.ComptePublicWhereInput;
    data: Prisma.XOR<Prisma.ComptePublicUpdateWithoutFavorisInput, Prisma.ComptePublicUncheckedUpdateWithoutFavorisInput>;
};
export type ComptePublicUpdateWithoutFavorisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUpdateManyWithoutComptePublicNestedInput;
    signalements?: Prisma.SignalementUpdateManyWithoutComptePublicNestedInput;
};
export type ComptePublicUncheckedUpdateWithoutFavorisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUncheckedUpdateManyWithoutComptePublicNestedInput;
    signalements?: Prisma.SignalementUncheckedUpdateManyWithoutComptePublicNestedInput;
};
export type ComptePublicCreateWithoutSignalementsInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoris?: Prisma.FavoriCreateNestedManyWithoutComptePublicInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicUncheckedCreateWithoutSignalementsInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoris?: Prisma.FavoriUncheckedCreateNestedManyWithoutComptePublicInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUncheckedCreateNestedManyWithoutComptePublicInput;
};
export type ComptePublicCreateOrConnectWithoutSignalementsInput = {
    where: Prisma.ComptePublicWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComptePublicCreateWithoutSignalementsInput, Prisma.ComptePublicUncheckedCreateWithoutSignalementsInput>;
};
export type ComptePublicUpsertWithoutSignalementsInput = {
    update: Prisma.XOR<Prisma.ComptePublicUpdateWithoutSignalementsInput, Prisma.ComptePublicUncheckedUpdateWithoutSignalementsInput>;
    create: Prisma.XOR<Prisma.ComptePublicCreateWithoutSignalementsInput, Prisma.ComptePublicUncheckedCreateWithoutSignalementsInput>;
    where?: Prisma.ComptePublicWhereInput;
};
export type ComptePublicUpdateToOneWithWhereWithoutSignalementsInput = {
    where?: Prisma.ComptePublicWhereInput;
    data: Prisma.XOR<Prisma.ComptePublicUpdateWithoutSignalementsInput, Prisma.ComptePublicUncheckedUpdateWithoutSignalementsInput>;
};
export type ComptePublicUpdateWithoutSignalementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoris?: Prisma.FavoriUpdateManyWithoutComptePublicNestedInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUpdateManyWithoutComptePublicNestedInput;
};
export type ComptePublicUncheckedUpdateWithoutSignalementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoris?: Prisma.FavoriUncheckedUpdateManyWithoutComptePublicNestedInput;
    refreshTokens?: Prisma.ComptePublicRefreshTokenUncheckedUpdateManyWithoutComptePublicNestedInput;
};
/**
 * Count Type ComptePublicCountOutputType
 */
export type ComptePublicCountOutputType = {
    favoris: number;
    refreshTokens: number;
    signalements: number;
};
export type ComptePublicCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favoris?: boolean | ComptePublicCountOutputTypeCountFavorisArgs;
    refreshTokens?: boolean | ComptePublicCountOutputTypeCountRefreshTokensArgs;
    signalements?: boolean | ComptePublicCountOutputTypeCountSignalementsArgs;
};
/**
 * ComptePublicCountOutputType without action
 */
export type ComptePublicCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublicCountOutputType
     */
    select?: Prisma.ComptePublicCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ComptePublicCountOutputType without action
 */
export type ComptePublicCountOutputTypeCountFavorisArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriWhereInput;
};
/**
 * ComptePublicCountOutputType without action
 */
export type ComptePublicCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
};
/**
 * ComptePublicCountOutputType without action
 */
export type ComptePublicCountOutputTypeCountSignalementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SignalementWhereInput;
};
export type ComptePublicSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    favoris?: boolean | Prisma.ComptePublic$favorisArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.ComptePublic$refreshTokensArgs<ExtArgs>;
    signalements?: boolean | Prisma.ComptePublic$signalementsArgs<ExtArgs>;
    _count?: boolean | Prisma.ComptePublicCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comptePublic"]>;
export type ComptePublicSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["comptePublic"]>;
export type ComptePublicSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["comptePublic"]>;
export type ComptePublicSelectScalar = {
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ComptePublicOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "prenom" | "telephone" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["comptePublic"]>;
export type ComptePublicInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favoris?: boolean | Prisma.ComptePublic$favorisArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.ComptePublic$refreshTokensArgs<ExtArgs>;
    signalements?: boolean | Prisma.ComptePublic$signalementsArgs<ExtArgs>;
    _count?: boolean | Prisma.ComptePublicCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ComptePublicIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ComptePublicIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ComptePublicPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComptePublic";
    objects: {
        favoris: Prisma.$FavoriPayload<ExtArgs>[];
        refreshTokens: Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>[];
        signalements: Prisma.$SignalementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        prenom: string;
        telephone: string;
        email: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["comptePublic"]>;
    composites: {};
};
export type ComptePublicGetPayload<S extends boolean | null | undefined | ComptePublicDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload, S>;
export type ComptePublicCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComptePublicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComptePublicCountAggregateInputType | true;
};
export interface ComptePublicDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComptePublic'];
        meta: {
            name: 'ComptePublic';
        };
    };
    /**
     * Find zero or one ComptePublic that matches the filter.
     * @param {ComptePublicFindUniqueArgs} args - Arguments to find a ComptePublic
     * @example
     * // Get one ComptePublic
     * const comptePublic = await prisma.comptePublic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComptePublicFindUniqueArgs>(args: Prisma.SelectSubset<T, ComptePublicFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ComptePublic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComptePublicFindUniqueOrThrowArgs} args - Arguments to find a ComptePublic
     * @example
     * // Get one ComptePublic
     * const comptePublic = await prisma.comptePublic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComptePublicFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComptePublicFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ComptePublic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicFindFirstArgs} args - Arguments to find a ComptePublic
     * @example
     * // Get one ComptePublic
     * const comptePublic = await prisma.comptePublic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComptePublicFindFirstArgs>(args?: Prisma.SelectSubset<T, ComptePublicFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ComptePublic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicFindFirstOrThrowArgs} args - Arguments to find a ComptePublic
     * @example
     * // Get one ComptePublic
     * const comptePublic = await prisma.comptePublic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComptePublicFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComptePublicFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ComptePublics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComptePublics
     * const comptePublics = await prisma.comptePublic.findMany()
     *
     * // Get first 10 ComptePublics
     * const comptePublics = await prisma.comptePublic.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const comptePublicWithIdOnly = await prisma.comptePublic.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ComptePublicFindManyArgs>(args?: Prisma.SelectSubset<T, ComptePublicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ComptePublic.
     * @param {ComptePublicCreateArgs} args - Arguments to create a ComptePublic.
     * @example
     * // Create one ComptePublic
     * const ComptePublic = await prisma.comptePublic.create({
     *   data: {
     *     // ... data to create a ComptePublic
     *   }
     * })
     *
     */
    create<T extends ComptePublicCreateArgs>(args: Prisma.SelectSubset<T, ComptePublicCreateArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ComptePublics.
     * @param {ComptePublicCreateManyArgs} args - Arguments to create many ComptePublics.
     * @example
     * // Create many ComptePublics
     * const comptePublic = await prisma.comptePublic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ComptePublicCreateManyArgs>(args?: Prisma.SelectSubset<T, ComptePublicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ComptePublics and returns the data saved in the database.
     * @param {ComptePublicCreateManyAndReturnArgs} args - Arguments to create many ComptePublics.
     * @example
     * // Create many ComptePublics
     * const comptePublic = await prisma.comptePublic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ComptePublics and only return the `id`
     * const comptePublicWithIdOnly = await prisma.comptePublic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ComptePublicCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComptePublicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ComptePublic.
     * @param {ComptePublicDeleteArgs} args - Arguments to delete one ComptePublic.
     * @example
     * // Delete one ComptePublic
     * const ComptePublic = await prisma.comptePublic.delete({
     *   where: {
     *     // ... filter to delete one ComptePublic
     *   }
     * })
     *
     */
    delete<T extends ComptePublicDeleteArgs>(args: Prisma.SelectSubset<T, ComptePublicDeleteArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ComptePublic.
     * @param {ComptePublicUpdateArgs} args - Arguments to update one ComptePublic.
     * @example
     * // Update one ComptePublic
     * const comptePublic = await prisma.comptePublic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ComptePublicUpdateArgs>(args: Prisma.SelectSubset<T, ComptePublicUpdateArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ComptePublics.
     * @param {ComptePublicDeleteManyArgs} args - Arguments to filter ComptePublics to delete.
     * @example
     * // Delete a few ComptePublics
     * const { count } = await prisma.comptePublic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ComptePublicDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComptePublicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ComptePublics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComptePublics
     * const comptePublic = await prisma.comptePublic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ComptePublicUpdateManyArgs>(args: Prisma.SelectSubset<T, ComptePublicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ComptePublics and returns the data updated in the database.
     * @param {ComptePublicUpdateManyAndReturnArgs} args - Arguments to update many ComptePublics.
     * @example
     * // Update many ComptePublics
     * const comptePublic = await prisma.comptePublic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ComptePublics and only return the `id`
     * const comptePublicWithIdOnly = await prisma.comptePublic.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComptePublicUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComptePublicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ComptePublic.
     * @param {ComptePublicUpsertArgs} args - Arguments to update or create a ComptePublic.
     * @example
     * // Update or create a ComptePublic
     * const comptePublic = await prisma.comptePublic.upsert({
     *   create: {
     *     // ... data to create a ComptePublic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComptePublic we want to update
     *   }
     * })
     */
    upsert<T extends ComptePublicUpsertArgs>(args: Prisma.SelectSubset<T, ComptePublicUpsertArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ComptePublics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicCountArgs} args - Arguments to filter ComptePublics to count.
     * @example
     * // Count the number of ComptePublics
     * const count = await prisma.comptePublic.count({
     *   where: {
     *     // ... the filter for the ComptePublics we want to count
     *   }
     * })
    **/
    count<T extends ComptePublicCountArgs>(args?: Prisma.Subset<T, ComptePublicCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComptePublicCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ComptePublic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComptePublicAggregateArgs>(args: Prisma.Subset<T, ComptePublicAggregateArgs>): Prisma.PrismaPromise<GetComptePublicAggregateType<T>>;
    /**
     * Group by ComptePublic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComptePublicGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ComptePublicGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComptePublicGroupByArgs['orderBy'];
    } : {
        orderBy?: ComptePublicGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComptePublicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComptePublicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ComptePublic model
     */
    readonly fields: ComptePublicFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ComptePublic.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ComptePublicClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    favoris<T extends Prisma.ComptePublic$favorisArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComptePublic$favorisArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refreshTokens<T extends Prisma.ComptePublic$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComptePublic$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    signalements<T extends Prisma.ComptePublic$signalementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComptePublic$signalementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ComptePublic model
 */
export interface ComptePublicFieldRefs {
    readonly id: Prisma.FieldRef<"ComptePublic", 'String'>;
    readonly nom: Prisma.FieldRef<"ComptePublic", 'String'>;
    readonly prenom: Prisma.FieldRef<"ComptePublic", 'String'>;
    readonly telephone: Prisma.FieldRef<"ComptePublic", 'String'>;
    readonly email: Prisma.FieldRef<"ComptePublic", 'String'>;
    readonly password: Prisma.FieldRef<"ComptePublic", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ComptePublic", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ComptePublic", 'DateTime'>;
}
/**
 * ComptePublic findUnique
 */
export type ComptePublicFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublic to fetch.
     */
    where: Prisma.ComptePublicWhereUniqueInput;
};
/**
 * ComptePublic findUniqueOrThrow
 */
export type ComptePublicFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublic to fetch.
     */
    where: Prisma.ComptePublicWhereUniqueInput;
};
/**
 * ComptePublic findFirst
 */
export type ComptePublicFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublic to fetch.
     */
    where?: Prisma.ComptePublicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublics to fetch.
     */
    orderBy?: Prisma.ComptePublicOrderByWithRelationInput | Prisma.ComptePublicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ComptePublics.
     */
    cursor?: Prisma.ComptePublicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ComptePublics.
     */
    distinct?: Prisma.ComptePublicScalarFieldEnum | Prisma.ComptePublicScalarFieldEnum[];
};
/**
 * ComptePublic findFirstOrThrow
 */
export type ComptePublicFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublic to fetch.
     */
    where?: Prisma.ComptePublicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublics to fetch.
     */
    orderBy?: Prisma.ComptePublicOrderByWithRelationInput | Prisma.ComptePublicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ComptePublics.
     */
    cursor?: Prisma.ComptePublicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ComptePublics.
     */
    distinct?: Prisma.ComptePublicScalarFieldEnum | Prisma.ComptePublicScalarFieldEnum[];
};
/**
 * ComptePublic findMany
 */
export type ComptePublicFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * Filter, which ComptePublics to fetch.
     */
    where?: Prisma.ComptePublicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ComptePublics to fetch.
     */
    orderBy?: Prisma.ComptePublicOrderByWithRelationInput | Prisma.ComptePublicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ComptePublics.
     */
    cursor?: Prisma.ComptePublicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ComptePublics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ComptePublics.
     */
    skip?: number;
    distinct?: Prisma.ComptePublicScalarFieldEnum | Prisma.ComptePublicScalarFieldEnum[];
};
/**
 * ComptePublic create
 */
export type ComptePublicCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * The data needed to create a ComptePublic.
     */
    data: Prisma.XOR<Prisma.ComptePublicCreateInput, Prisma.ComptePublicUncheckedCreateInput>;
};
/**
 * ComptePublic createMany
 */
export type ComptePublicCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComptePublics.
     */
    data: Prisma.ComptePublicCreateManyInput | Prisma.ComptePublicCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ComptePublic createManyAndReturn
 */
export type ComptePublicCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * The data used to create many ComptePublics.
     */
    data: Prisma.ComptePublicCreateManyInput | Prisma.ComptePublicCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ComptePublic update
 */
export type ComptePublicUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * The data needed to update a ComptePublic.
     */
    data: Prisma.XOR<Prisma.ComptePublicUpdateInput, Prisma.ComptePublicUncheckedUpdateInput>;
    /**
     * Choose, which ComptePublic to update.
     */
    where: Prisma.ComptePublicWhereUniqueInput;
};
/**
 * ComptePublic updateMany
 */
export type ComptePublicUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ComptePublics.
     */
    data: Prisma.XOR<Prisma.ComptePublicUpdateManyMutationInput, Prisma.ComptePublicUncheckedUpdateManyInput>;
    /**
     * Filter which ComptePublics to update
     */
    where?: Prisma.ComptePublicWhereInput;
    /**
     * Limit how many ComptePublics to update.
     */
    limit?: number;
};
/**
 * ComptePublic updateManyAndReturn
 */
export type ComptePublicUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * The data used to update ComptePublics.
     */
    data: Prisma.XOR<Prisma.ComptePublicUpdateManyMutationInput, Prisma.ComptePublicUncheckedUpdateManyInput>;
    /**
     * Filter which ComptePublics to update
     */
    where?: Prisma.ComptePublicWhereInput;
    /**
     * Limit how many ComptePublics to update.
     */
    limit?: number;
};
/**
 * ComptePublic upsert
 */
export type ComptePublicUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * The filter to search for the ComptePublic to update in case it exists.
     */
    where: Prisma.ComptePublicWhereUniqueInput;
    /**
     * In case the ComptePublic found by the `where` argument doesn't exist, create a new ComptePublic with this data.
     */
    create: Prisma.XOR<Prisma.ComptePublicCreateInput, Prisma.ComptePublicUncheckedCreateInput>;
    /**
     * In case the ComptePublic was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ComptePublicUpdateInput, Prisma.ComptePublicUncheckedUpdateInput>;
};
/**
 * ComptePublic delete
 */
export type ComptePublicDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    /**
     * Filter which ComptePublic to delete.
     */
    where: Prisma.ComptePublicWhereUniqueInput;
};
/**
 * ComptePublic deleteMany
 */
export type ComptePublicDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ComptePublics to delete
     */
    where?: Prisma.ComptePublicWhereInput;
    /**
     * Limit how many ComptePublics to delete.
     */
    limit?: number;
};
/**
 * ComptePublic.favoris
 */
export type ComptePublic$favorisArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favori
     */
    select?: Prisma.FavoriSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favori
     */
    omit?: Prisma.FavoriOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FavoriInclude<ExtArgs> | null;
    where?: Prisma.FavoriWhereInput;
    orderBy?: Prisma.FavoriOrderByWithRelationInput | Prisma.FavoriOrderByWithRelationInput[];
    cursor?: Prisma.FavoriWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FavoriScalarFieldEnum | Prisma.FavoriScalarFieldEnum[];
};
/**
 * ComptePublic.refreshTokens
 */
export type ComptePublic$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ComptePublicRefreshTokenWhereInput;
    orderBy?: Prisma.ComptePublicRefreshTokenOrderByWithRelationInput | Prisma.ComptePublicRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.ComptePublicRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComptePublicRefreshTokenScalarFieldEnum | Prisma.ComptePublicRefreshTokenScalarFieldEnum[];
};
/**
 * ComptePublic.signalements
 */
export type ComptePublic$signalementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: Prisma.SignalementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Signalement
     */
    omit?: Prisma.SignalementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SignalementInclude<ExtArgs> | null;
    where?: Prisma.SignalementWhereInput;
    orderBy?: Prisma.SignalementOrderByWithRelationInput | Prisma.SignalementOrderByWithRelationInput[];
    cursor?: Prisma.SignalementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SignalementScalarFieldEnum | Prisma.SignalementScalarFieldEnum[];
};
/**
 * ComptePublic without action
 */
export type ComptePublicDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ComptePublic.d.ts.map