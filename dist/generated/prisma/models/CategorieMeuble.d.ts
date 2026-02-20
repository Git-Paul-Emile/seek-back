import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CategorieMeuble
 *
 */
export type CategorieMeubleModel = runtime.Types.Result.DefaultSelection<Prisma.$CategorieMeublePayload>;
export type AggregateCategorieMeuble = {
    _count: CategorieMeubleCountAggregateOutputType | null;
    _avg: CategorieMeubleAvgAggregateOutputType | null;
    _sum: CategorieMeubleSumAggregateOutputType | null;
    _min: CategorieMeubleMinAggregateOutputType | null;
    _max: CategorieMeubleMaxAggregateOutputType | null;
};
export type CategorieMeubleAvgAggregateOutputType = {
    ordre: number | null;
};
export type CategorieMeubleSumAggregateOutputType = {
    ordre: number | null;
};
export type CategorieMeubleMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategorieMeubleMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategorieMeubleCountAggregateOutputType = {
    id: number;
    nom: number;
    slug: number;
    actif: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CategorieMeubleAvgAggregateInputType = {
    ordre?: true;
};
export type CategorieMeubleSumAggregateInputType = {
    ordre?: true;
};
export type CategorieMeubleMinAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategorieMeubleMaxAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategorieMeubleCountAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CategorieMeubleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieMeuble to aggregate.
     */
    where?: Prisma.CategorieMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieMeubles to fetch.
     */
    orderBy?: Prisma.CategorieMeubleOrderByWithRelationInput | Prisma.CategorieMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CategorieMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieMeubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CategorieMeubles
    **/
    _count?: true | CategorieMeubleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CategorieMeubleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CategorieMeubleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMeubleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMeubleMaxAggregateInputType;
};
export type GetCategorieMeubleAggregateType<T extends CategorieMeubleAggregateArgs> = {
    [P in keyof T & keyof AggregateCategorieMeuble]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategorieMeuble[P]> : Prisma.GetScalarType<T[P], AggregateCategorieMeuble[P]>;
};
export type CategorieMeubleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategorieMeubleWhereInput;
    orderBy?: Prisma.CategorieMeubleOrderByWithAggregationInput | Prisma.CategorieMeubleOrderByWithAggregationInput[];
    by: Prisma.CategorieMeubleScalarFieldEnum[] | Prisma.CategorieMeubleScalarFieldEnum;
    having?: Prisma.CategorieMeubleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategorieMeubleCountAggregateInputType | true;
    _avg?: CategorieMeubleAvgAggregateInputType;
    _sum?: CategorieMeubleSumAggregateInputType;
    _min?: CategorieMeubleMinAggregateInputType;
    _max?: CategorieMeubleMaxAggregateInputType;
};
export type CategorieMeubleGroupByOutputType = {
    id: string;
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CategorieMeubleCountAggregateOutputType | null;
    _avg: CategorieMeubleAvgAggregateOutputType | null;
    _sum: CategorieMeubleSumAggregateOutputType | null;
    _min: CategorieMeubleMinAggregateOutputType | null;
    _max: CategorieMeubleMaxAggregateOutputType | null;
};
type GetCategorieMeubleGroupByPayload<T extends CategorieMeubleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategorieMeubleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategorieMeubleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategorieMeubleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategorieMeubleGroupByOutputType[P]>;
}>>;
export type CategorieMeubleWhereInput = {
    AND?: Prisma.CategorieMeubleWhereInput | Prisma.CategorieMeubleWhereInput[];
    OR?: Prisma.CategorieMeubleWhereInput[];
    NOT?: Prisma.CategorieMeubleWhereInput | Prisma.CategorieMeubleWhereInput[];
    id?: Prisma.StringFilter<"CategorieMeuble"> | string;
    nom?: Prisma.StringFilter<"CategorieMeuble"> | string;
    slug?: Prisma.StringFilter<"CategorieMeuble"> | string;
    actif?: Prisma.BoolFilter<"CategorieMeuble"> | boolean;
    ordre?: Prisma.IntFilter<"CategorieMeuble"> | number;
    createdAt?: Prisma.DateTimeFilter<"CategorieMeuble"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CategorieMeuble"> | Date | string;
    meubles?: Prisma.MeubleListRelationFilter;
};
export type CategorieMeubleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    meubles?: Prisma.MeubleOrderByRelationAggregateInput;
};
export type CategorieMeubleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    slug?: string;
    AND?: Prisma.CategorieMeubleWhereInput | Prisma.CategorieMeubleWhereInput[];
    OR?: Prisma.CategorieMeubleWhereInput[];
    NOT?: Prisma.CategorieMeubleWhereInput | Prisma.CategorieMeubleWhereInput[];
    actif?: Prisma.BoolFilter<"CategorieMeuble"> | boolean;
    ordre?: Prisma.IntFilter<"CategorieMeuble"> | number;
    createdAt?: Prisma.DateTimeFilter<"CategorieMeuble"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CategorieMeuble"> | Date | string;
    meubles?: Prisma.MeubleListRelationFilter;
}, "id" | "nom" | "slug">;
export type CategorieMeubleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CategorieMeubleCountOrderByAggregateInput;
    _avg?: Prisma.CategorieMeubleAvgOrderByAggregateInput;
    _max?: Prisma.CategorieMeubleMaxOrderByAggregateInput;
    _min?: Prisma.CategorieMeubleMinOrderByAggregateInput;
    _sum?: Prisma.CategorieMeubleSumOrderByAggregateInput;
};
export type CategorieMeubleScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategorieMeubleScalarWhereWithAggregatesInput | Prisma.CategorieMeubleScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategorieMeubleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategorieMeubleScalarWhereWithAggregatesInput | Prisma.CategorieMeubleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CategorieMeuble"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"CategorieMeuble"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"CategorieMeuble"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"CategorieMeuble"> | boolean;
    ordre?: Prisma.IntWithAggregatesFilter<"CategorieMeuble"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CategorieMeuble"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CategorieMeuble"> | Date | string;
};
export type CategorieMeubleCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meubles?: Prisma.MeubleCreateNestedManyWithoutCategorieInput;
};
export type CategorieMeubleUncheckedCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meubles?: Prisma.MeubleUncheckedCreateNestedManyWithoutCategorieInput;
};
export type CategorieMeubleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meubles?: Prisma.MeubleUpdateManyWithoutCategorieNestedInput;
};
export type CategorieMeubleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meubles?: Prisma.MeubleUncheckedUpdateManyWithoutCategorieNestedInput;
};
export type CategorieMeubleCreateManyInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategorieMeubleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategorieMeubleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategorieMeubleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategorieMeubleAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type CategorieMeubleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategorieMeubleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategorieMeubleSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type CategorieMeubleScalarRelationFilter = {
    is?: Prisma.CategorieMeubleWhereInput;
    isNot?: Prisma.CategorieMeubleWhereInput;
};
export type CategorieMeubleCreateNestedOneWithoutMeublesInput = {
    create?: Prisma.XOR<Prisma.CategorieMeubleCreateWithoutMeublesInput, Prisma.CategorieMeubleUncheckedCreateWithoutMeublesInput>;
    connectOrCreate?: Prisma.CategorieMeubleCreateOrConnectWithoutMeublesInput;
    connect?: Prisma.CategorieMeubleWhereUniqueInput;
};
export type CategorieMeubleUpdateOneRequiredWithoutMeublesNestedInput = {
    create?: Prisma.XOR<Prisma.CategorieMeubleCreateWithoutMeublesInput, Prisma.CategorieMeubleUncheckedCreateWithoutMeublesInput>;
    connectOrCreate?: Prisma.CategorieMeubleCreateOrConnectWithoutMeublesInput;
    upsert?: Prisma.CategorieMeubleUpsertWithoutMeublesInput;
    connect?: Prisma.CategorieMeubleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategorieMeubleUpdateToOneWithWhereWithoutMeublesInput, Prisma.CategorieMeubleUpdateWithoutMeublesInput>, Prisma.CategorieMeubleUncheckedUpdateWithoutMeublesInput>;
};
export type CategorieMeubleCreateWithoutMeublesInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategorieMeubleUncheckedCreateWithoutMeublesInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategorieMeubleCreateOrConnectWithoutMeublesInput = {
    where: Prisma.CategorieMeubleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategorieMeubleCreateWithoutMeublesInput, Prisma.CategorieMeubleUncheckedCreateWithoutMeublesInput>;
};
export type CategorieMeubleUpsertWithoutMeublesInput = {
    update: Prisma.XOR<Prisma.CategorieMeubleUpdateWithoutMeublesInput, Prisma.CategorieMeubleUncheckedUpdateWithoutMeublesInput>;
    create: Prisma.XOR<Prisma.CategorieMeubleCreateWithoutMeublesInput, Prisma.CategorieMeubleUncheckedCreateWithoutMeublesInput>;
    where?: Prisma.CategorieMeubleWhereInput;
};
export type CategorieMeubleUpdateToOneWithWhereWithoutMeublesInput = {
    where?: Prisma.CategorieMeubleWhereInput;
    data: Prisma.XOR<Prisma.CategorieMeubleUpdateWithoutMeublesInput, Prisma.CategorieMeubleUncheckedUpdateWithoutMeublesInput>;
};
export type CategorieMeubleUpdateWithoutMeublesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategorieMeubleUncheckedUpdateWithoutMeublesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CategorieMeubleCountOutputType
 */
export type CategorieMeubleCountOutputType = {
    meubles: number;
};
export type CategorieMeubleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meubles?: boolean | CategorieMeubleCountOutputTypeCountMeublesArgs;
};
/**
 * CategorieMeubleCountOutputType without action
 */
export type CategorieMeubleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeubleCountOutputType
     */
    select?: Prisma.CategorieMeubleCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CategorieMeubleCountOutputType without action
 */
export type CategorieMeubleCountOutputTypeCountMeublesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeubleWhereInput;
};
export type CategorieMeubleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    meubles?: boolean | Prisma.CategorieMeuble$meublesArgs<ExtArgs>;
    _count?: boolean | Prisma.CategorieMeubleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categorieMeuble"]>;
export type CategorieMeubleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["categorieMeuble"]>;
export type CategorieMeubleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["categorieMeuble"]>;
export type CategorieMeubleSelectScalar = {
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CategorieMeubleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "slug" | "actif" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["categorieMeuble"]>;
export type CategorieMeubleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meubles?: boolean | Prisma.CategorieMeuble$meublesArgs<ExtArgs>;
    _count?: boolean | Prisma.CategorieMeubleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategorieMeubleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CategorieMeubleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CategorieMeublePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CategorieMeuble";
    objects: {
        meubles: Prisma.$MeublePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["categorieMeuble"]>;
    composites: {};
};
export type CategorieMeubleGetPayload<S extends boolean | null | undefined | CategorieMeubleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload, S>;
export type CategorieMeubleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategorieMeubleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategorieMeubleCountAggregateInputType | true;
};
export interface CategorieMeubleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CategorieMeuble'];
        meta: {
            name: 'CategorieMeuble';
        };
    };
    /**
     * Find zero or one CategorieMeuble that matches the filter.
     * @param {CategorieMeubleFindUniqueArgs} args - Arguments to find a CategorieMeuble
     * @example
     * // Get one CategorieMeuble
     * const categorieMeuble = await prisma.categorieMeuble.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieMeubleFindUniqueArgs>(args: Prisma.SelectSubset<T, CategorieMeubleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CategorieMeuble that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieMeubleFindUniqueOrThrowArgs} args - Arguments to find a CategorieMeuble
     * @example
     * // Get one CategorieMeuble
     * const categorieMeuble = await prisma.categorieMeuble.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieMeubleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategorieMeubleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CategorieMeuble that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieMeubleFindFirstArgs} args - Arguments to find a CategorieMeuble
     * @example
     * // Get one CategorieMeuble
     * const categorieMeuble = await prisma.categorieMeuble.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieMeubleFindFirstArgs>(args?: Prisma.SelectSubset<T, CategorieMeubleFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CategorieMeuble that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieMeubleFindFirstOrThrowArgs} args - Arguments to find a CategorieMeuble
     * @example
     * // Get one CategorieMeuble
     * const categorieMeuble = await prisma.categorieMeuble.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieMeubleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategorieMeubleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CategorieMeubles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieMeubleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategorieMeubles
     * const categorieMeubles = await prisma.categorieMeuble.findMany()
     *
     * // Get first 10 CategorieMeubles
     * const categorieMeubles = await prisma.categorieMeuble.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categorieMeubleWithIdOnly = await prisma.categorieMeuble.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategorieMeubleFindManyArgs>(args?: Prisma.SelectSubset<T, CategorieMeubleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CategorieMeuble.
     * @param {CategorieMeubleCreateArgs} args - Arguments to create a CategorieMeuble.
     * @example
     * // Create one CategorieMeuble
     * const CategorieMeuble = await prisma.categorieMeuble.create({
     *   data: {
     *     // ... data to create a CategorieMeuble
     *   }
     * })
     *
     */
    create<T extends CategorieMeubleCreateArgs>(args: Prisma.SelectSubset<T, CategorieMeubleCreateArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CategorieMeubles.
     * @param {CategorieMeubleCreateManyArgs} args - Arguments to create many CategorieMeubles.
     * @example
     * // Create many CategorieMeubles
     * const categorieMeuble = await prisma.categorieMeuble.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategorieMeubleCreateManyArgs>(args?: Prisma.SelectSubset<T, CategorieMeubleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CategorieMeubles and returns the data saved in the database.
     * @param {CategorieMeubleCreateManyAndReturnArgs} args - Arguments to create many CategorieMeubles.
     * @example
     * // Create many CategorieMeubles
     * const categorieMeuble = await prisma.categorieMeuble.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CategorieMeubles and only return the `id`
     * const categorieMeubleWithIdOnly = await prisma.categorieMeuble.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategorieMeubleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategorieMeubleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CategorieMeuble.
     * @param {CategorieMeubleDeleteArgs} args - Arguments to delete one CategorieMeuble.
     * @example
     * // Delete one CategorieMeuble
     * const CategorieMeuble = await prisma.categorieMeuble.delete({
     *   where: {
     *     // ... filter to delete one CategorieMeuble
     *   }
     * })
     *
     */
    delete<T extends CategorieMeubleDeleteArgs>(args: Prisma.SelectSubset<T, CategorieMeubleDeleteArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CategorieMeuble.
     * @param {CategorieMeubleUpdateArgs} args - Arguments to update one CategorieMeuble.
     * @example
     * // Update one CategorieMeuble
     * const categorieMeuble = await prisma.categorieMeuble.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategorieMeubleUpdateArgs>(args: Prisma.SelectSubset<T, CategorieMeubleUpdateArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CategorieMeubles.
     * @param {CategorieMeubleDeleteManyArgs} args - Arguments to filter CategorieMeubles to delete.
     * @example
     * // Delete a few CategorieMeubles
     * const { count } = await prisma.categorieMeuble.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategorieMeubleDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategorieMeubleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CategorieMeubles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieMeubleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategorieMeubles
     * const categorieMeuble = await prisma.categorieMeuble.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategorieMeubleUpdateManyArgs>(args: Prisma.SelectSubset<T, CategorieMeubleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CategorieMeubles and returns the data updated in the database.
     * @param {CategorieMeubleUpdateManyAndReturnArgs} args - Arguments to update many CategorieMeubles.
     * @example
     * // Update many CategorieMeubles
     * const categorieMeuble = await prisma.categorieMeuble.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CategorieMeubles and only return the `id`
     * const categorieMeubleWithIdOnly = await prisma.categorieMeuble.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategorieMeubleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategorieMeubleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CategorieMeuble.
     * @param {CategorieMeubleUpsertArgs} args - Arguments to update or create a CategorieMeuble.
     * @example
     * // Update or create a CategorieMeuble
     * const categorieMeuble = await prisma.categorieMeuble.upsert({
     *   create: {
     *     // ... data to create a CategorieMeuble
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategorieMeuble we want to update
     *   }
     * })
     */
    upsert<T extends CategorieMeubleUpsertArgs>(args: Prisma.SelectSubset<T, CategorieMeubleUpsertArgs<ExtArgs>>): Prisma.Prisma__CategorieMeubleClient<runtime.Types.Result.GetResult<Prisma.$CategorieMeublePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CategorieMeubles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieMeubleCountArgs} args - Arguments to filter CategorieMeubles to count.
     * @example
     * // Count the number of CategorieMeubles
     * const count = await prisma.categorieMeuble.count({
     *   where: {
     *     // ... the filter for the CategorieMeubles we want to count
     *   }
     * })
    **/
    count<T extends CategorieMeubleCountArgs>(args?: Prisma.Subset<T, CategorieMeubleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategorieMeubleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CategorieMeuble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieMeubleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieMeubleAggregateArgs>(args: Prisma.Subset<T, CategorieMeubleAggregateArgs>): Prisma.PrismaPromise<GetCategorieMeubleAggregateType<T>>;
    /**
     * Group by CategorieMeuble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieMeubleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CategorieMeubleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategorieMeubleGroupByArgs['orderBy'];
    } : {
        orderBy?: CategorieMeubleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategorieMeubleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieMeubleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CategorieMeuble model
     */
    readonly fields: CategorieMeubleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CategorieMeuble.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CategorieMeubleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    meubles<T extends Prisma.CategorieMeuble$meublesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategorieMeuble$meublesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeublePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the CategorieMeuble model
 */
export interface CategorieMeubleFieldRefs {
    readonly id: Prisma.FieldRef<"CategorieMeuble", 'String'>;
    readonly nom: Prisma.FieldRef<"CategorieMeuble", 'String'>;
    readonly slug: Prisma.FieldRef<"CategorieMeuble", 'String'>;
    readonly actif: Prisma.FieldRef<"CategorieMeuble", 'Boolean'>;
    readonly ordre: Prisma.FieldRef<"CategorieMeuble", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CategorieMeuble", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CategorieMeuble", 'DateTime'>;
}
/**
 * CategorieMeuble findUnique
 */
export type CategorieMeubleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieMeuble to fetch.
     */
    where: Prisma.CategorieMeubleWhereUniqueInput;
};
/**
 * CategorieMeuble findUniqueOrThrow
 */
export type CategorieMeubleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieMeuble to fetch.
     */
    where: Prisma.CategorieMeubleWhereUniqueInput;
};
/**
 * CategorieMeuble findFirst
 */
export type CategorieMeubleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieMeuble to fetch.
     */
    where?: Prisma.CategorieMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieMeubles to fetch.
     */
    orderBy?: Prisma.CategorieMeubleOrderByWithRelationInput | Prisma.CategorieMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategorieMeubles.
     */
    cursor?: Prisma.CategorieMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieMeubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategorieMeubles.
     */
    distinct?: Prisma.CategorieMeubleScalarFieldEnum | Prisma.CategorieMeubleScalarFieldEnum[];
};
/**
 * CategorieMeuble findFirstOrThrow
 */
export type CategorieMeubleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieMeuble to fetch.
     */
    where?: Prisma.CategorieMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieMeubles to fetch.
     */
    orderBy?: Prisma.CategorieMeubleOrderByWithRelationInput | Prisma.CategorieMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategorieMeubles.
     */
    cursor?: Prisma.CategorieMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieMeubles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategorieMeubles.
     */
    distinct?: Prisma.CategorieMeubleScalarFieldEnum | Prisma.CategorieMeubleScalarFieldEnum[];
};
/**
 * CategorieMeuble findMany
 */
export type CategorieMeubleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieMeubles to fetch.
     */
    where?: Prisma.CategorieMeubleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieMeubles to fetch.
     */
    orderBy?: Prisma.CategorieMeubleOrderByWithRelationInput | Prisma.CategorieMeubleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CategorieMeubles.
     */
    cursor?: Prisma.CategorieMeubleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieMeubles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieMeubles.
     */
    skip?: number;
    distinct?: Prisma.CategorieMeubleScalarFieldEnum | Prisma.CategorieMeubleScalarFieldEnum[];
};
/**
 * CategorieMeuble create
 */
export type CategorieMeubleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * The data needed to create a CategorieMeuble.
     */
    data: Prisma.XOR<Prisma.CategorieMeubleCreateInput, Prisma.CategorieMeubleUncheckedCreateInput>;
};
/**
 * CategorieMeuble createMany
 */
export type CategorieMeubleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategorieMeubles.
     */
    data: Prisma.CategorieMeubleCreateManyInput | Prisma.CategorieMeubleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CategorieMeuble createManyAndReturn
 */
export type CategorieMeubleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * The data used to create many CategorieMeubles.
     */
    data: Prisma.CategorieMeubleCreateManyInput | Prisma.CategorieMeubleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CategorieMeuble update
 */
export type CategorieMeubleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * The data needed to update a CategorieMeuble.
     */
    data: Prisma.XOR<Prisma.CategorieMeubleUpdateInput, Prisma.CategorieMeubleUncheckedUpdateInput>;
    /**
     * Choose, which CategorieMeuble to update.
     */
    where: Prisma.CategorieMeubleWhereUniqueInput;
};
/**
 * CategorieMeuble updateMany
 */
export type CategorieMeubleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CategorieMeubles.
     */
    data: Prisma.XOR<Prisma.CategorieMeubleUpdateManyMutationInput, Prisma.CategorieMeubleUncheckedUpdateManyInput>;
    /**
     * Filter which CategorieMeubles to update
     */
    where?: Prisma.CategorieMeubleWhereInput;
    /**
     * Limit how many CategorieMeubles to update.
     */
    limit?: number;
};
/**
 * CategorieMeuble updateManyAndReturn
 */
export type CategorieMeubleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * The data used to update CategorieMeubles.
     */
    data: Prisma.XOR<Prisma.CategorieMeubleUpdateManyMutationInput, Prisma.CategorieMeubleUncheckedUpdateManyInput>;
    /**
     * Filter which CategorieMeubles to update
     */
    where?: Prisma.CategorieMeubleWhereInput;
    /**
     * Limit how many CategorieMeubles to update.
     */
    limit?: number;
};
/**
 * CategorieMeuble upsert
 */
export type CategorieMeubleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * The filter to search for the CategorieMeuble to update in case it exists.
     */
    where: Prisma.CategorieMeubleWhereUniqueInput;
    /**
     * In case the CategorieMeuble found by the `where` argument doesn't exist, create a new CategorieMeuble with this data.
     */
    create: Prisma.XOR<Prisma.CategorieMeubleCreateInput, Prisma.CategorieMeubleUncheckedCreateInput>;
    /**
     * In case the CategorieMeuble was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CategorieMeubleUpdateInput, Prisma.CategorieMeubleUncheckedUpdateInput>;
};
/**
 * CategorieMeuble delete
 */
export type CategorieMeubleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
    /**
     * Filter which CategorieMeuble to delete.
     */
    where: Prisma.CategorieMeubleWhereUniqueInput;
};
/**
 * CategorieMeuble deleteMany
 */
export type CategorieMeubleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieMeubles to delete
     */
    where?: Prisma.CategorieMeubleWhereInput;
    /**
     * Limit how many CategorieMeubles to delete.
     */
    limit?: number;
};
/**
 * CategorieMeuble.meubles
 */
export type CategorieMeuble$meublesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MeubleWhereInput;
    orderBy?: Prisma.MeubleOrderByWithRelationInput | Prisma.MeubleOrderByWithRelationInput[];
    cursor?: Prisma.MeubleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeubleScalarFieldEnum | Prisma.MeubleScalarFieldEnum[];
};
/**
 * CategorieMeuble without action
 */
export type CategorieMeubleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieMeuble
     */
    select?: Prisma.CategorieMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieMeuble
     */
    omit?: Prisma.CategorieMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieMeubleInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CategorieMeuble.d.ts.map