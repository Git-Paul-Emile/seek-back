import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Proprietaire
 *
 */
export type ProprietaireModel = runtime.Types.Result.DefaultSelection<Prisma.$ProprietairePayload>;
export type AggregateProprietaire = {
    _count: ProprietaireCountAggregateOutputType | null;
    _min: ProprietaireMinAggregateOutputType | null;
    _max: ProprietaireMaxAggregateOutputType | null;
};
export type ProprietaireMinAggregateOutputType = {
    id: string | null;
    prenom: string | null;
    nom: string | null;
    sexe: string | null;
    telephone: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProprietaireMaxAggregateOutputType = {
    id: string | null;
    prenom: string | null;
    nom: string | null;
    sexe: string | null;
    telephone: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProprietaireCountAggregateOutputType = {
    id: number;
    prenom: number;
    nom: number;
    sexe: number;
    telephone: number;
    email: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProprietaireMinAggregateInputType = {
    id?: true;
    prenom?: true;
    nom?: true;
    sexe?: true;
    telephone?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProprietaireMaxAggregateInputType = {
    id?: true;
    prenom?: true;
    nom?: true;
    sexe?: true;
    telephone?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProprietaireCountAggregateInputType = {
    id?: true;
    prenom?: true;
    nom?: true;
    sexe?: true;
    telephone?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProprietaireAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Proprietaire to aggregate.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Proprietaires
    **/
    _count?: true | ProprietaireCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProprietaireMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProprietaireMaxAggregateInputType;
};
export type GetProprietaireAggregateType<T extends ProprietaireAggregateArgs> = {
    [P in keyof T & keyof AggregateProprietaire]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProprietaire[P]> : Prisma.GetScalarType<T[P], AggregateProprietaire[P]>;
};
export type ProprietaireGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProprietaireWhereInput;
    orderBy?: Prisma.ProprietaireOrderByWithAggregationInput | Prisma.ProprietaireOrderByWithAggregationInput[];
    by: Prisma.ProprietaireScalarFieldEnum[] | Prisma.ProprietaireScalarFieldEnum;
    having?: Prisma.ProprietaireScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProprietaireCountAggregateInputType | true;
    _min?: ProprietaireMinAggregateInputType;
    _max?: ProprietaireMaxAggregateInputType;
};
export type ProprietaireGroupByOutputType = {
    id: string;
    prenom: string;
    nom: string;
    sexe: string | null;
    telephone: string;
    email: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProprietaireCountAggregateOutputType | null;
    _min: ProprietaireMinAggregateOutputType | null;
    _max: ProprietaireMaxAggregateOutputType | null;
};
type GetProprietaireGroupByPayload<T extends ProprietaireGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProprietaireGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProprietaireGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProprietaireGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProprietaireGroupByOutputType[P]>;
}>>;
export type ProprietaireWhereInput = {
    AND?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    OR?: Prisma.ProprietaireWhereInput[];
    NOT?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    id?: Prisma.StringFilter<"Proprietaire"> | string;
    prenom?: Prisma.StringFilter<"Proprietaire"> | string;
    nom?: Prisma.StringFilter<"Proprietaire"> | string;
    sexe?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    telephone?: Prisma.StringFilter<"Proprietaire"> | string;
    email?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    password?: Prisma.StringFilter<"Proprietaire"> | string;
    createdAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    refreshTokens?: Prisma.ProprietaireRefreshTokenListRelationFilter;
};
export type ProprietaireOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    refreshTokens?: Prisma.ProprietaireRefreshTokenOrderByRelationAggregateInput;
};
export type ProprietaireWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    telephone?: string;
    email?: string;
    AND?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    OR?: Prisma.ProprietaireWhereInput[];
    NOT?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    prenom?: Prisma.StringFilter<"Proprietaire"> | string;
    nom?: Prisma.StringFilter<"Proprietaire"> | string;
    sexe?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    password?: Prisma.StringFilter<"Proprietaire"> | string;
    createdAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    refreshTokens?: Prisma.ProprietaireRefreshTokenListRelationFilter;
}, "id" | "telephone" | "email">;
export type ProprietaireOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProprietaireCountOrderByAggregateInput;
    _max?: Prisma.ProprietaireMaxOrderByAggregateInput;
    _min?: Prisma.ProprietaireMinOrderByAggregateInput;
};
export type ProprietaireScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProprietaireScalarWhereWithAggregatesInput | Prisma.ProprietaireScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProprietaireScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProprietaireScalarWhereWithAggregatesInput | Prisma.ProprietaireScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    sexe?: Prisma.StringNullableWithAggregatesFilter<"Proprietaire"> | string | null;
    telephone?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Proprietaire"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Proprietaire"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Proprietaire"> | Date | string;
};
export type ProprietaireCreateInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
};
export type ProprietaireUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
};
export type ProprietaireCreateManyInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProprietaireUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProprietaireMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProprietaireMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProprietaireScalarRelationFilter = {
    is?: Prisma.ProprietaireWhereInput;
    isNot?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.ProprietaireUpsertWithoutRefreshTokensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.ProprietaireUpdateWithoutRefreshTokensInput>, Prisma.ProprietaireUncheckedUpdateWithoutRefreshTokensInput>;
};
export type ProprietaireCreateWithoutRefreshTokensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProprietaireUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProprietaireCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
};
export type ProprietaireUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedUpdateWithoutRefreshTokensInput>;
};
export type ProprietaireUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ProprietaireCountOutputType
 */
export type ProprietaireCountOutputType = {
    refreshTokens: number;
};
export type ProprietaireCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refreshTokens?: boolean | ProprietaireCountOutputTypeCountRefreshTokensArgs;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireCountOutputType
     */
    select?: Prisma.ProprietaireCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
};
export type ProprietaireSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    refreshTokens?: boolean | Prisma.Proprietaire$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.ProprietaireCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proprietaire"]>;
export type ProprietaireSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["proprietaire"]>;
export type ProprietaireSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["proprietaire"]>;
export type ProprietaireSelectScalar = {
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProprietaireOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "prenom" | "nom" | "sexe" | "telephone" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["proprietaire"]>;
export type ProprietaireInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refreshTokens?: boolean | Prisma.Proprietaire$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.ProprietaireCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProprietaireIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProprietaireIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProprietairePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Proprietaire";
    objects: {
        refreshTokens: Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        prenom: string;
        nom: string;
        sexe: string | null;
        telephone: string;
        email: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["proprietaire"]>;
    composites: {};
};
export type ProprietaireGetPayload<S extends boolean | null | undefined | ProprietaireDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProprietairePayload, S>;
export type ProprietaireCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProprietaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProprietaireCountAggregateInputType | true;
};
export interface ProprietaireDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Proprietaire'];
        meta: {
            name: 'Proprietaire';
        };
    };
    /**
     * Find zero or one Proprietaire that matches the filter.
     * @param {ProprietaireFindUniqueArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProprietaireFindUniqueArgs>(args: Prisma.SelectSubset<T, ProprietaireFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Proprietaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProprietaireFindUniqueOrThrowArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProprietaireFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProprietaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proprietaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireFindFirstArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProprietaireFindFirstArgs>(args?: Prisma.SelectSubset<T, ProprietaireFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proprietaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireFindFirstOrThrowArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProprietaireFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProprietaireFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Proprietaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proprietaires
     * const proprietaires = await prisma.proprietaire.findMany()
     *
     * // Get first 10 Proprietaires
     * const proprietaires = await prisma.proprietaire.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proprietaireWithIdOnly = await prisma.proprietaire.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProprietaireFindManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Proprietaire.
     * @param {ProprietaireCreateArgs} args - Arguments to create a Proprietaire.
     * @example
     * // Create one Proprietaire
     * const Proprietaire = await prisma.proprietaire.create({
     *   data: {
     *     // ... data to create a Proprietaire
     *   }
     * })
     *
     */
    create<T extends ProprietaireCreateArgs>(args: Prisma.SelectSubset<T, ProprietaireCreateArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Proprietaires.
     * @param {ProprietaireCreateManyArgs} args - Arguments to create many Proprietaires.
     * @example
     * // Create many Proprietaires
     * const proprietaire = await prisma.proprietaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProprietaireCreateManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Proprietaires and returns the data saved in the database.
     * @param {ProprietaireCreateManyAndReturnArgs} args - Arguments to create many Proprietaires.
     * @example
     * // Create many Proprietaires
     * const proprietaire = await prisma.proprietaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Proprietaires and only return the `id`
     * const proprietaireWithIdOnly = await prisma.proprietaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProprietaireCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProprietaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Proprietaire.
     * @param {ProprietaireDeleteArgs} args - Arguments to delete one Proprietaire.
     * @example
     * // Delete one Proprietaire
     * const Proprietaire = await prisma.proprietaire.delete({
     *   where: {
     *     // ... filter to delete one Proprietaire
     *   }
     * })
     *
     */
    delete<T extends ProprietaireDeleteArgs>(args: Prisma.SelectSubset<T, ProprietaireDeleteArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Proprietaire.
     * @param {ProprietaireUpdateArgs} args - Arguments to update one Proprietaire.
     * @example
     * // Update one Proprietaire
     * const proprietaire = await prisma.proprietaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProprietaireUpdateArgs>(args: Prisma.SelectSubset<T, ProprietaireUpdateArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Proprietaires.
     * @param {ProprietaireDeleteManyArgs} args - Arguments to filter Proprietaires to delete.
     * @example
     * // Delete a few Proprietaires
     * const { count } = await prisma.proprietaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProprietaireDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proprietaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proprietaires
     * const proprietaire = await prisma.proprietaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProprietaireUpdateManyArgs>(args: Prisma.SelectSubset<T, ProprietaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proprietaires and returns the data updated in the database.
     * @param {ProprietaireUpdateManyAndReturnArgs} args - Arguments to update many Proprietaires.
     * @example
     * // Update many Proprietaires
     * const proprietaire = await prisma.proprietaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Proprietaires and only return the `id`
     * const proprietaireWithIdOnly = await prisma.proprietaire.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProprietaireUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProprietaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Proprietaire.
     * @param {ProprietaireUpsertArgs} args - Arguments to update or create a Proprietaire.
     * @example
     * // Update or create a Proprietaire
     * const proprietaire = await prisma.proprietaire.upsert({
     *   create: {
     *     // ... data to create a Proprietaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proprietaire we want to update
     *   }
     * })
     */
    upsert<T extends ProprietaireUpsertArgs>(args: Prisma.SelectSubset<T, ProprietaireUpsertArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Proprietaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireCountArgs} args - Arguments to filter Proprietaires to count.
     * @example
     * // Count the number of Proprietaires
     * const count = await prisma.proprietaire.count({
     *   where: {
     *     // ... the filter for the Proprietaires we want to count
     *   }
     * })
    **/
    count<T extends ProprietaireCountArgs>(args?: Prisma.Subset<T, ProprietaireCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProprietaireCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Proprietaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProprietaireAggregateArgs>(args: Prisma.Subset<T, ProprietaireAggregateArgs>): Prisma.PrismaPromise<GetProprietaireAggregateType<T>>;
    /**
     * Group by Proprietaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProprietaireGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProprietaireGroupByArgs['orderBy'];
    } : {
        orderBy?: ProprietaireGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProprietaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProprietaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Proprietaire model
     */
    readonly fields: ProprietaireFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Proprietaire.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProprietaireClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    refreshTokens<T extends Prisma.Proprietaire$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Proprietaire model
 */
export interface ProprietaireFieldRefs {
    readonly id: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly prenom: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly nom: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly sexe: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly telephone: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly email: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly password: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
}
/**
 * Proprietaire findUnique
 */
export type ProprietaireFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire findUniqueOrThrow
 */
export type ProprietaireFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire findFirst
 */
export type ProprietaireFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Proprietaires.
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Proprietaires.
     */
    distinct?: Prisma.ProprietaireScalarFieldEnum | Prisma.ProprietaireScalarFieldEnum[];
};
/**
 * Proprietaire findFirstOrThrow
 */
export type ProprietaireFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Proprietaires.
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Proprietaires.
     */
    distinct?: Prisma.ProprietaireScalarFieldEnum | Prisma.ProprietaireScalarFieldEnum[];
};
/**
 * Proprietaire findMany
 */
export type ProprietaireFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaires to fetch.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Proprietaires.
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    distinct?: Prisma.ProprietaireScalarFieldEnum | Prisma.ProprietaireScalarFieldEnum[];
};
/**
 * Proprietaire create
 */
export type ProprietaireCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * The data needed to create a Proprietaire.
     */
    data: Prisma.XOR<Prisma.ProprietaireCreateInput, Prisma.ProprietaireUncheckedCreateInput>;
};
/**
 * Proprietaire createMany
 */
export type ProprietaireCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proprietaires.
     */
    data: Prisma.ProprietaireCreateManyInput | Prisma.ProprietaireCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Proprietaire createManyAndReturn
 */
export type ProprietaireCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * The data used to create many Proprietaires.
     */
    data: Prisma.ProprietaireCreateManyInput | Prisma.ProprietaireCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Proprietaire update
 */
export type ProprietaireUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * The data needed to update a Proprietaire.
     */
    data: Prisma.XOR<Prisma.ProprietaireUpdateInput, Prisma.ProprietaireUncheckedUpdateInput>;
    /**
     * Choose, which Proprietaire to update.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire updateMany
 */
export type ProprietaireUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Proprietaires.
     */
    data: Prisma.XOR<Prisma.ProprietaireUpdateManyMutationInput, Prisma.ProprietaireUncheckedUpdateManyInput>;
    /**
     * Filter which Proprietaires to update
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * Limit how many Proprietaires to update.
     */
    limit?: number;
};
/**
 * Proprietaire updateManyAndReturn
 */
export type ProprietaireUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * The data used to update Proprietaires.
     */
    data: Prisma.XOR<Prisma.ProprietaireUpdateManyMutationInput, Prisma.ProprietaireUncheckedUpdateManyInput>;
    /**
     * Filter which Proprietaires to update
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * Limit how many Proprietaires to update.
     */
    limit?: number;
};
/**
 * Proprietaire upsert
 */
export type ProprietaireUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * The filter to search for the Proprietaire to update in case it exists.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
    /**
     * In case the Proprietaire found by the `where` argument doesn't exist, create a new Proprietaire with this data.
     */
    create: Prisma.XOR<Prisma.ProprietaireCreateInput, Prisma.ProprietaireUncheckedCreateInput>;
    /**
     * In case the Proprietaire was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProprietaireUpdateInput, Prisma.ProprietaireUncheckedUpdateInput>;
};
/**
 * Proprietaire delete
 */
export type ProprietaireDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter which Proprietaire to delete.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire deleteMany
 */
export type ProprietaireDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Proprietaires to delete
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * Limit how many Proprietaires to delete.
     */
    limit?: number;
};
/**
 * Proprietaire.refreshTokens
 */
export type Proprietaire$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    orderBy?: Prisma.ProprietaireRefreshTokenOrderByWithRelationInput | Prisma.ProprietaireRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProprietaireRefreshTokenScalarFieldEnum | Prisma.ProprietaireRefreshTokenScalarFieldEnum[];
};
/**
 * Proprietaire without action
 */
export type ProprietaireDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Proprietaire.d.ts.map