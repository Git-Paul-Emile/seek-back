import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Meuble
 *
 */
export type MeubleModel = runtime.Types.Result.DefaultSelection<Prisma.$MeublePayload>;
export type AggregateMeuble = {
    _count: MeubleCountAggregateOutputType | null;
    _min: MeubleMinAggregateOutputType | null;
    _max: MeubleMaxAggregateOutputType | null;
};
export type MeubleMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    categorieId: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MeubleMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    categorieId: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MeubleCountAggregateOutputType = {
    id: number;
    nom: number;
    categorieId: number;
    actif: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MeubleMinAggregateInputType = {
    id?: true;
    nom?: true;
    categorieId?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MeubleMaxAggregateInputType = {
    id?: true;
    nom?: true;
    categorieId?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MeubleCountAggregateInputType = {
    id?: true;
    nom?: true;
    categorieId?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MeubleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Meuble to aggregate.
     */
    where?: Prisma.MeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Meubles to fetch.
     */
    orderBy?: Prisma.MeubleOrderByWithRelationInput | Prisma.MeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Meubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Meubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Meubles
    **/
    _count?: true | MeubleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MeubleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MeubleMaxAggregateInputType;
};
export type GetMeubleAggregateType<T extends MeubleAggregateArgs> = {
    [P in keyof T & keyof AggregateMeuble]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMeuble[P]> : Prisma.GetScalarType<T[P], AggregateMeuble[P]>;
};
export type MeubleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeubleWhereInput;
    orderBy?: Prisma.MeubleOrderByWithAggregationInput | Prisma.MeubleOrderByWithAggregationInput[];
    by: Prisma.MeubleScalarFieldEnum[] | Prisma.MeubleScalarFieldEnum;
    having?: Prisma.MeubleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MeubleCountAggregateInputType | true;
    _min?: MeubleMinAggregateInputType;
    _max?: MeubleMaxAggregateInputType;
};
export type MeubleGroupByOutputType = {
    id: string;
    nom: string;
    categorieId: string;
    actif: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MeubleCountAggregateOutputType | null;
    _min: MeubleMinAggregateOutputType | null;
    _max: MeubleMaxAggregateOutputType | null;
};
type GetMeubleGroupByPayload<T extends MeubleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MeubleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MeubleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MeubleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MeubleGroupByOutputType[P]>;
}>>;
export type MeubleWhereInput = {
    AND?: Prisma.MeubleWhereInput | Prisma.MeubleWhereInput[];
    OR?: Prisma.MeubleWhereInput[];
    NOT?: Prisma.MeubleWhereInput | Prisma.MeubleWhereInput[];
    id?: Prisma.StringFilter<"Meuble"> | string;
    nom?: Prisma.StringFilter<"Meuble"> | string;
    categorieId?: Prisma.StringFilter<"Meuble"> | string;
    actif?: Prisma.BoolFilter<"Meuble"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Meuble"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Meuble"> | Date | string;
    categorie?: Prisma.XOR<Prisma.CategorieMeubleScalarRelationFilter, Prisma.CategorieMeubleWhereInput>;
};
export type MeubleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categorie?: Prisma.CategorieMeubleOrderByWithRelationInput;
};
export type MeubleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom_categorieId?: Prisma.MeubleNomCategorieIdCompoundUniqueInput;
    AND?: Prisma.MeubleWhereInput | Prisma.MeubleWhereInput[];
    OR?: Prisma.MeubleWhereInput[];
    NOT?: Prisma.MeubleWhereInput | Prisma.MeubleWhereInput[];
    nom?: Prisma.StringFilter<"Meuble"> | string;
    categorieId?: Prisma.StringFilter<"Meuble"> | string;
    actif?: Prisma.BoolFilter<"Meuble"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Meuble"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Meuble"> | Date | string;
    categorie?: Prisma.XOR<Prisma.CategorieMeubleScalarRelationFilter, Prisma.CategorieMeubleWhereInput>;
}, "id" | "nom_categorieId">;
export type MeubleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MeubleCountOrderByAggregateInput;
    _max?: Prisma.MeubleMaxOrderByAggregateInput;
    _min?: Prisma.MeubleMinOrderByAggregateInput;
};
export type MeubleScalarWhereWithAggregatesInput = {
    AND?: Prisma.MeubleScalarWhereWithAggregatesInput | Prisma.MeubleScalarWhereWithAggregatesInput[];
    OR?: Prisma.MeubleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MeubleScalarWhereWithAggregatesInput | Prisma.MeubleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Meuble"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Meuble"> | string;
    categorieId?: Prisma.StringWithAggregatesFilter<"Meuble"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"Meuble"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Meuble"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Meuble"> | Date | string;
};
export type MeubleCreateInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categorie: Prisma.CategorieMeubleCreateNestedOneWithoutMeublesInput;
};
export type MeubleUncheckedCreateInput = {
    id?: string;
    nom: string;
    categorieId: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeubleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categorie?: Prisma.CategorieMeubleUpdateOneRequiredWithoutMeublesNestedInput;
};
export type MeubleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeubleCreateManyInput = {
    id?: string;
    nom: string;
    categorieId: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeubleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeubleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeubleListRelationFilter = {
    every?: Prisma.MeubleWhereInput;
    some?: Prisma.MeubleWhereInput;
    none?: Prisma.MeubleWhereInput;
};
export type MeubleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MeubleNomCategorieIdCompoundUniqueInput = {
    nom: string;
    categorieId: string;
};
export type MeubleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeubleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeubleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeubleCreateNestedManyWithoutCategorieInput = {
    create?: Prisma.XOR<Prisma.MeubleCreateWithoutCategorieInput, Prisma.MeubleUncheckedCreateWithoutCategorieInput> | Prisma.MeubleCreateWithoutCategorieInput[] | Prisma.MeubleUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.MeubleCreateOrConnectWithoutCategorieInput | Prisma.MeubleCreateOrConnectWithoutCategorieInput[];
    createMany?: Prisma.MeubleCreateManyCategorieInputEnvelope;
    connect?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
};
export type MeubleUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: Prisma.XOR<Prisma.MeubleCreateWithoutCategorieInput, Prisma.MeubleUncheckedCreateWithoutCategorieInput> | Prisma.MeubleCreateWithoutCategorieInput[] | Prisma.MeubleUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.MeubleCreateOrConnectWithoutCategorieInput | Prisma.MeubleCreateOrConnectWithoutCategorieInput[];
    createMany?: Prisma.MeubleCreateManyCategorieInputEnvelope;
    connect?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
};
export type MeubleUpdateManyWithoutCategorieNestedInput = {
    create?: Prisma.XOR<Prisma.MeubleCreateWithoutCategorieInput, Prisma.MeubleUncheckedCreateWithoutCategorieInput> | Prisma.MeubleCreateWithoutCategorieInput[] | Prisma.MeubleUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.MeubleCreateOrConnectWithoutCategorieInput | Prisma.MeubleCreateOrConnectWithoutCategorieInput[];
    upsert?: Prisma.MeubleUpsertWithWhereUniqueWithoutCategorieInput | Prisma.MeubleUpsertWithWhereUniqueWithoutCategorieInput[];
    createMany?: Prisma.MeubleCreateManyCategorieInputEnvelope;
    set?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    disconnect?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    delete?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    connect?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    update?: Prisma.MeubleUpdateWithWhereUniqueWithoutCategorieInput | Prisma.MeubleUpdateWithWhereUniqueWithoutCategorieInput[];
    updateMany?: Prisma.MeubleUpdateManyWithWhereWithoutCategorieInput | Prisma.MeubleUpdateManyWithWhereWithoutCategorieInput[];
    deleteMany?: Prisma.MeubleScalarWhereInput | Prisma.MeubleScalarWhereInput[];
};
export type MeubleUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: Prisma.XOR<Prisma.MeubleCreateWithoutCategorieInput, Prisma.MeubleUncheckedCreateWithoutCategorieInput> | Prisma.MeubleCreateWithoutCategorieInput[] | Prisma.MeubleUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.MeubleCreateOrConnectWithoutCategorieInput | Prisma.MeubleCreateOrConnectWithoutCategorieInput[];
    upsert?: Prisma.MeubleUpsertWithWhereUniqueWithoutCategorieInput | Prisma.MeubleUpsertWithWhereUniqueWithoutCategorieInput[];
    createMany?: Prisma.MeubleCreateManyCategorieInputEnvelope;
    set?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    disconnect?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    delete?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    connect?: Prisma.MeubleWhereUniqueInput | Prisma.MeubleWhereUniqueInput[];
    update?: Prisma.MeubleUpdateWithWhereUniqueWithoutCategorieInput | Prisma.MeubleUpdateWithWhereUniqueWithoutCategorieInput[];
    updateMany?: Prisma.MeubleUpdateManyWithWhereWithoutCategorieInput | Prisma.MeubleUpdateManyWithWhereWithoutCategorieInput[];
    deleteMany?: Prisma.MeubleScalarWhereInput | Prisma.MeubleScalarWhereInput[];
};
export type MeubleCreateWithoutCategorieInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeubleUncheckedCreateWithoutCategorieInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeubleCreateOrConnectWithoutCategorieInput = {
    where: Prisma.MeubleWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeubleCreateWithoutCategorieInput, Prisma.MeubleUncheckedCreateWithoutCategorieInput>;
};
export type MeubleCreateManyCategorieInputEnvelope = {
    data: Prisma.MeubleCreateManyCategorieInput | Prisma.MeubleCreateManyCategorieInput[];
    skipDuplicates?: boolean;
};
export type MeubleUpsertWithWhereUniqueWithoutCategorieInput = {
    where: Prisma.MeubleWhereUniqueInput;
    update: Prisma.XOR<Prisma.MeubleUpdateWithoutCategorieInput, Prisma.MeubleUncheckedUpdateWithoutCategorieInput>;
    create: Prisma.XOR<Prisma.MeubleCreateWithoutCategorieInput, Prisma.MeubleUncheckedCreateWithoutCategorieInput>;
};
export type MeubleUpdateWithWhereUniqueWithoutCategorieInput = {
    where: Prisma.MeubleWhereUniqueInput;
    data: Prisma.XOR<Prisma.MeubleUpdateWithoutCategorieInput, Prisma.MeubleUncheckedUpdateWithoutCategorieInput>;
};
export type MeubleUpdateManyWithWhereWithoutCategorieInput = {
    where: Prisma.MeubleScalarWhereInput;
    data: Prisma.XOR<Prisma.MeubleUpdateManyMutationInput, Prisma.MeubleUncheckedUpdateManyWithoutCategorieInput>;
};
export type MeubleScalarWhereInput = {
    AND?: Prisma.MeubleScalarWhereInput | Prisma.MeubleScalarWhereInput[];
    OR?: Prisma.MeubleScalarWhereInput[];
    NOT?: Prisma.MeubleScalarWhereInput | Prisma.MeubleScalarWhereInput[];
    id?: Prisma.StringFilter<"Meuble"> | string;
    nom?: Prisma.StringFilter<"Meuble"> | string;
    categorieId?: Prisma.StringFilter<"Meuble"> | string;
    actif?: Prisma.BoolFilter<"Meuble"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Meuble"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Meuble"> | Date | string;
};
export type MeubleCreateManyCategorieInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeubleUpdateWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeubleUncheckedUpdateWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeubleUncheckedUpdateManyWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeubleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categorie?: boolean | Prisma.CategorieMeubleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meuble"]>;
export type MeubleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categorie?: boolean | Prisma.CategorieMeubleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meuble"]>;
export type MeubleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categorie?: boolean | Prisma.CategorieMeubleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meuble"]>;
export type MeubleSelectScalar = {
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MeubleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "categorieId" | "actif" | "createdAt" | "updatedAt", ExtArgs["result"]["meuble"]>;
export type MeubleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.CategorieMeubleDefaultArgs<ExtArgs>;
};
export type MeubleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.CategorieMeubleDefaultArgs<ExtArgs>;
};
export type MeubleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.CategorieMeubleDefaultArgs<ExtArgs>;
};
export type $MeublePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Meuble";
    objects: {
        categorie: Prisma.$CategorieMeublePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        categorieId: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["meuble"]>;
    composites: {};
};
export type MeubleGetPayload<S extends boolean | null | undefined | MeubleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MeublePayload, S>;
export type MeubleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MeubleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MeubleCountAggregateInputType | true;
};
export interface MeubleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Meuble'];
        meta: {
            name: 'Meuble';
        };
    };
    /**
     * Find zero or one Meuble that matches the filter.
     * @param {MeubleFindUniqueArgs} args - Arguments to find a Meuble
     * @example
     * // Get one Meuble
     * const meuble = await prisma.meuble.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeubleFindUniqueArgs>(args: Prisma.SelectSubset<T, MeubleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Meuble that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeubleFindUniqueOrThrowArgs} args - Arguments to find a Meuble
     * @example
     * // Get one Meuble
     * const meuble = await prisma.meuble.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeubleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MeubleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Meuble that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeubleFindFirstArgs} args - Arguments to find a Meuble
     * @example
     * // Get one Meuble
     * const meuble = await prisma.meuble.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeubleFindFirstArgs>(args?: Prisma.SelectSubset<T, MeubleFindFirstArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Meuble that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeubleFindFirstOrThrowArgs} args - Arguments to find a Meuble
     * @example
     * // Get one Meuble
     * const meuble = await prisma.meuble.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeubleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MeubleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Meubles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeubleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meubles
     * const meubles = await prisma.meuble.findMany()
     *
     * // Get first 10 Meubles
     * const meubles = await prisma.meuble.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const meubleWithIdOnly = await prisma.meuble.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MeubleFindManyArgs>(args?: Prisma.SelectSubset<T, MeubleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Meuble.
     * @param {MeubleCreateArgs} args - Arguments to create a Meuble.
     * @example
     * // Create one Meuble
     * const Meuble = await prisma.meuble.create({
     *   data: {
     *     // ... data to create a Meuble
     *   }
     * })
     *
     */
    create<T extends MeubleCreateArgs>(args: Prisma.SelectSubset<T, MeubleCreateArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Meubles.
     * @param {MeubleCreateManyArgs} args - Arguments to create many Meubles.
     * @example
     * // Create many Meubles
     * const meuble = await prisma.meuble.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MeubleCreateManyArgs>(args?: Prisma.SelectSubset<T, MeubleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Meubles and returns the data saved in the database.
     * @param {MeubleCreateManyAndReturnArgs} args - Arguments to create many Meubles.
     * @example
     * // Create many Meubles
     * const meuble = await prisma.meuble.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Meubles and only return the `id`
     * const meubleWithIdOnly = await prisma.meuble.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MeubleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MeubleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Meuble.
     * @param {MeubleDeleteArgs} args - Arguments to delete one Meuble.
     * @example
     * // Delete one Meuble
     * const Meuble = await prisma.meuble.delete({
     *   where: {
     *     // ... filter to delete one Meuble
     *   }
     * })
     *
     */
    delete<T extends MeubleDeleteArgs>(args: Prisma.SelectSubset<T, MeubleDeleteArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Meuble.
     * @param {MeubleUpdateArgs} args - Arguments to update one Meuble.
     * @example
     * // Update one Meuble
     * const meuble = await prisma.meuble.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MeubleUpdateArgs>(args: Prisma.SelectSubset<T, MeubleUpdateArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Meubles.
     * @param {MeubleDeleteManyArgs} args - Arguments to filter Meubles to delete.
     * @example
     * // Delete a few Meubles
     * const { count } = await prisma.meuble.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MeubleDeleteManyArgs>(args?: Prisma.SelectSubset<T, MeubleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Meubles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeubleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meubles
     * const meuble = await prisma.meuble.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MeubleUpdateManyArgs>(args: Prisma.SelectSubset<T, MeubleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Meubles and returns the data updated in the database.
     * @param {MeubleUpdateManyAndReturnArgs} args - Arguments to update many Meubles.
     * @example
     * // Update many Meubles
     * const meuble = await prisma.meuble.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Meubles and only return the `id`
     * const meubleWithIdOnly = await prisma.meuble.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeubleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MeubleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Meuble.
     * @param {MeubleUpsertArgs} args - Arguments to update or create a Meuble.
     * @example
     * // Update or create a Meuble
     * const meuble = await prisma.meuble.upsert({
     *   create: {
     *     // ... data to create a Meuble
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meuble we want to update
     *   }
     * })
     */
    upsert<T extends MeubleUpsertArgs>(args: Prisma.SelectSubset<T, MeubleUpsertArgs<ExtArgs>>): Prisma.Prisma__MeubleClient<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Meubles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeubleCountArgs} args - Arguments to filter Meubles to count.
     * @example
     * // Count the number of Meubles
     * const count = await prisma.meuble.count({
     *   where: {
     *     // ... the filter for the Meubles we want to count
     *   }
     * })
    **/
    count<T extends MeubleCountArgs>(args?: Prisma.Subset<T, MeubleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MeubleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Meuble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeubleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeubleAggregateArgs>(args: Prisma.Subset<T, MeubleAggregateArgs>): Prisma.PrismaPromise<GetMeubleAggregateType<T>>;
    /**
     * Group by Meuble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeubleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MeubleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MeubleGroupByArgs['orderBy'];
    } : {
        orderBy?: MeubleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MeubleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeubleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Meuble model
     */
    readonly fields: MeubleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Meuble.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MeubleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categorie<T extends Prisma.CategorieMeubleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategorieMeubleDefaultArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Meuble model
 */
export interface MeubleFieldRefs {
    readonly id: Prisma.FieldRef<"Meuble", 'String'>;
    readonly nom: Prisma.FieldRef<"Meuble", 'String'>;
    readonly categorieId: Prisma.FieldRef<"Meuble", 'String'>;
    readonly actif: Prisma.FieldRef<"Meuble", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Meuble", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Meuble", 'DateTime'>;
}
/**
 * Meuble findUnique
 */
export type MeubleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * Filter, which Meuble to fetch.
     */
    where: Prisma.MeubleWhereUniqueInput;
};
/**
 * Meuble findUniqueOrThrow
 */
export type MeubleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * Filter, which Meuble to fetch.
     */
    where: Prisma.MeubleWhereUniqueInput;
};
/**
 * Meuble findFirst
 */
export type MeubleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * Filter, which Meuble to fetch.
     */
    where?: Prisma.MeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Meubles to fetch.
     */
    orderBy?: Prisma.MeubleOrderByWithRelationInput | Prisma.MeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Meubles.
     */
    cursor?: Prisma.MeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Meubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Meubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Meubles.
     */
    distinct?: Prisma.MeubleScalarFieldEnum | Prisma.MeubleScalarFieldEnum[];
};
/**
 * Meuble findFirstOrThrow
 */
export type MeubleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * Filter, which Meuble to fetch.
     */
    where?: Prisma.MeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Meubles to fetch.
     */
    orderBy?: Prisma.MeubleOrderByWithRelationInput | Prisma.MeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Meubles.
     */
    cursor?: Prisma.MeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Meubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Meubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Meubles.
     */
    distinct?: Prisma.MeubleScalarFieldEnum | Prisma.MeubleScalarFieldEnum[];
};
/**
 * Meuble findMany
 */
export type MeubleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * Filter, which Meubles to fetch.
     */
    where?: Prisma.MeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Meubles to fetch.
     */
    orderBy?: Prisma.MeubleOrderByWithRelationInput | Prisma.MeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Meubles.
     */
    cursor?: Prisma.MeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Meubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Meubles.
     */
    skip?: number;
    distinct?: Prisma.MeubleScalarFieldEnum | Prisma.MeubleScalarFieldEnum[];
};
/**
 * Meuble create
 */
export type MeubleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * The data needed to create a Meuble.
     */
    data: Prisma.XOR<Prisma.MeubleCreateInput, Prisma.MeubleUncheckedCreateInput>;
};
/**
 * Meuble createMany
 */
export type MeubleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meubles.
     */
    data: Prisma.MeubleCreateManyInput | Prisma.MeubleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Meuble createManyAndReturn
 */
export type MeubleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * The data used to create many Meubles.
     */
    data: Prisma.MeubleCreateManyInput | Prisma.MeubleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Meuble update
 */
export type MeubleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * The data needed to update a Meuble.
     */
    data: Prisma.XOR<Prisma.MeubleUpdateInput, Prisma.MeubleUncheckedUpdateInput>;
    /**
     * Choose, which Meuble to update.
     */
    where: Prisma.MeubleWhereUniqueInput;
};
/**
 * Meuble updateMany
 */
export type MeubleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Meubles.
     */
    data: Prisma.XOR<Prisma.MeubleUpdateManyMutationInput, Prisma.MeubleUncheckedUpdateManyInput>;
    /**
     * Filter which Meubles to update
     */
    where?: Prisma.MeubleWhereInput;
    /**
     * Limit how many Meubles to update.
     */
    limit?: number;
};
/**
 * Meuble updateManyAndReturn
 */
export type MeubleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * The data used to update Meubles.
     */
    data: Prisma.XOR<Prisma.MeubleUpdateManyMutationInput, Prisma.MeubleUncheckedUpdateManyInput>;
    /**
     * Filter which Meubles to update
     */
    where?: Prisma.MeubleWhereInput;
    /**
     * Limit how many Meubles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Meuble upsert
 */
export type MeubleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * The filter to search for the Meuble to update in case it exists.
     */
    where: Prisma.MeubleWhereUniqueInput;
    /**
     * In case the Meuble found by the `where` argument doesn't exist, create a new Meuble with this data.
     */
    create: Prisma.XOR<Prisma.MeubleCreateInput, Prisma.MeubleUncheckedCreateInput>;
    /**
     * In case the Meuble was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MeubleUpdateInput, Prisma.MeubleUncheckedUpdateInput>;
};
/**
 * Meuble delete
 */
export type MeubleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
    /**
     * Filter which Meuble to delete.
     */
    where: Prisma.MeubleWhereUniqueInput;
};
/**
 * Meuble deleteMany
 */
export type MeubleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Meubles to delete
     */
    where?: Prisma.MeubleWhereInput;
    /**
     * Limit how many Meubles to delete.
     */
    limit?: number;
};
/**
 * Meuble without action
 */
export type MeubleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meuble
     */
    select?: Prisma.MeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meuble
     */
    omit?: Prisma.MeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeubleInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Meuble.d.ts.map