import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TypeLogement
 *
 */
export type TypeLogementModel = runtime.Types.Result.DefaultSelection<Prisma.$TypeLogementPayload>;
export type AggregateTypeLogement = {
    _count: TypeLogementCountAggregateOutputType | null;
    _avg: TypeLogementAvgAggregateOutputType | null;
    _sum: TypeLogementSumAggregateOutputType | null;
    _min: TypeLogementMinAggregateOutputType | null;
    _max: TypeLogementMaxAggregateOutputType | null;
};
export type TypeLogementAvgAggregateOutputType = {
    ordre: number | null;
};
export type TypeLogementSumAggregateOutputType = {
    ordre: number | null;
};
export type TypeLogementMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    image: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TypeLogementMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    image: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TypeLogementCountAggregateOutputType = {
    id: number;
    nom: number;
    slug: number;
    image: number;
    actif: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TypeLogementAvgAggregateInputType = {
    ordre?: true;
};
export type TypeLogementSumAggregateInputType = {
    ordre?: true;
};
export type TypeLogementMinAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    image?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TypeLogementMaxAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    image?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TypeLogementCountAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    image?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TypeLogementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TypeLogement to aggregate.
     */
    where?: Prisma.TypeLogementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeLogements to fetch.
     */
    orderBy?: Prisma.TypeLogementOrderByWithRelationInput | Prisma.TypeLogementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TypeLogementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeLogements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeLogements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TypeLogements
    **/
    _count?: true | TypeLogementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TypeLogementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TypeLogementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TypeLogementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TypeLogementMaxAggregateInputType;
};
export type GetTypeLogementAggregateType<T extends TypeLogementAggregateArgs> = {
    [P in keyof T & keyof AggregateTypeLogement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTypeLogement[P]> : Prisma.GetScalarType<T[P], AggregateTypeLogement[P]>;
};
export type TypeLogementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeLogementWhereInput;
    orderBy?: Prisma.TypeLogementOrderByWithAggregationInput | Prisma.TypeLogementOrderByWithAggregationInput[];
    by: Prisma.TypeLogementScalarFieldEnum[] | Prisma.TypeLogementScalarFieldEnum;
    having?: Prisma.TypeLogementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TypeLogementCountAggregateInputType | true;
    _avg?: TypeLogementAvgAggregateInputType;
    _sum?: TypeLogementSumAggregateInputType;
    _min?: TypeLogementMinAggregateInputType;
    _max?: TypeLogementMaxAggregateInputType;
};
export type TypeLogementGroupByOutputType = {
    id: string;
    nom: string;
    slug: string;
    image: string | null;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: TypeLogementCountAggregateOutputType | null;
    _avg: TypeLogementAvgAggregateOutputType | null;
    _sum: TypeLogementSumAggregateOutputType | null;
    _min: TypeLogementMinAggregateOutputType | null;
    _max: TypeLogementMaxAggregateOutputType | null;
};
type GetTypeLogementGroupByPayload<T extends TypeLogementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TypeLogementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TypeLogementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TypeLogementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TypeLogementGroupByOutputType[P]>;
}>>;
export type TypeLogementWhereInput = {
    AND?: Prisma.TypeLogementWhereInput | Prisma.TypeLogementWhereInput[];
    OR?: Prisma.TypeLogementWhereInput[];
    NOT?: Prisma.TypeLogementWhereInput | Prisma.TypeLogementWhereInput[];
    id?: Prisma.StringFilter<"TypeLogement"> | string;
    nom?: Prisma.StringFilter<"TypeLogement"> | string;
    slug?: Prisma.StringFilter<"TypeLogement"> | string;
    image?: Prisma.StringNullableFilter<"TypeLogement"> | string | null;
    actif?: Prisma.BoolFilter<"TypeLogement"> | boolean;
    ordre?: Prisma.IntFilter<"TypeLogement"> | number;
    createdAt?: Prisma.DateTimeFilter<"TypeLogement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TypeLogement"> | Date | string;
};
export type TypeLogementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeLogementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    slug?: string;
    AND?: Prisma.TypeLogementWhereInput | Prisma.TypeLogementWhereInput[];
    OR?: Prisma.TypeLogementWhereInput[];
    NOT?: Prisma.TypeLogementWhereInput | Prisma.TypeLogementWhereInput[];
    image?: Prisma.StringNullableFilter<"TypeLogement"> | string | null;
    actif?: Prisma.BoolFilter<"TypeLogement"> | boolean;
    ordre?: Prisma.IntFilter<"TypeLogement"> | number;
    createdAt?: Prisma.DateTimeFilter<"TypeLogement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TypeLogement"> | Date | string;
}, "id" | "nom" | "slug">;
export type TypeLogementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TypeLogementCountOrderByAggregateInput;
    _avg?: Prisma.TypeLogementAvgOrderByAggregateInput;
    _max?: Prisma.TypeLogementMaxOrderByAggregateInput;
    _min?: Prisma.TypeLogementMinOrderByAggregateInput;
    _sum?: Prisma.TypeLogementSumOrderByAggregateInput;
};
export type TypeLogementScalarWhereWithAggregatesInput = {
    AND?: Prisma.TypeLogementScalarWhereWithAggregatesInput | Prisma.TypeLogementScalarWhereWithAggregatesInput[];
    OR?: Prisma.TypeLogementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TypeLogementScalarWhereWithAggregatesInput | Prisma.TypeLogementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TypeLogement"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"TypeLogement"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"TypeLogement"> | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"TypeLogement"> | string | null;
    actif?: Prisma.BoolWithAggregatesFilter<"TypeLogement"> | boolean;
    ordre?: Prisma.IntWithAggregatesFilter<"TypeLogement"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TypeLogement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TypeLogement"> | Date | string;
};
export type TypeLogementCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    image?: string | null;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeLogementUncheckedCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    image?: string | null;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeLogementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeLogementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeLogementCreateManyInput = {
    id?: string;
    nom: string;
    slug: string;
    image?: string | null;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeLogementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeLogementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeLogementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeLogementAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type TypeLogementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeLogementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeLogementSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TypeLogementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    image?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["typeLogement"]>;
export type TypeLogementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    image?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["typeLogement"]>;
export type TypeLogementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    image?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["typeLogement"]>;
export type TypeLogementSelectScalar = {
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    image?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TypeLogementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "slug" | "image" | "actif" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["typeLogement"]>;
export type $TypeLogementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TypeLogement";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        slug: string;
        image: string | null;
        actif: boolean;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["typeLogement"]>;
    composites: {};
};
export type TypeLogementGetPayload<S extends boolean | null | undefined | TypeLogementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload, S>;
export type TypeLogementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TypeLogementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TypeLogementCountAggregateInputType | true;
};
export interface TypeLogementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TypeLogement'];
        meta: {
            name: 'TypeLogement';
        };
    };
    /**
     * Find zero or one TypeLogement that matches the filter.
     * @param {TypeLogementFindUniqueArgs} args - Arguments to find a TypeLogement
     * @example
     * // Get one TypeLogement
     * const typeLogement = await prisma.typeLogement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeLogementFindUniqueArgs>(args: Prisma.SelectSubset<T, TypeLogementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TypeLogement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeLogementFindUniqueOrThrowArgs} args - Arguments to find a TypeLogement
     * @example
     * // Get one TypeLogement
     * const typeLogement = await prisma.typeLogement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeLogementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TypeLogementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TypeLogement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeLogementFindFirstArgs} args - Arguments to find a TypeLogement
     * @example
     * // Get one TypeLogement
     * const typeLogement = await prisma.typeLogement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeLogementFindFirstArgs>(args?: Prisma.SelectSubset<T, TypeLogementFindFirstArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TypeLogement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeLogementFindFirstOrThrowArgs} args - Arguments to find a TypeLogement
     * @example
     * // Get one TypeLogement
     * const typeLogement = await prisma.typeLogement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeLogementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TypeLogementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TypeLogements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeLogementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeLogements
     * const typeLogements = await prisma.typeLogement.findMany()
     *
     * // Get first 10 TypeLogements
     * const typeLogements = await prisma.typeLogement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const typeLogementWithIdOnly = await prisma.typeLogement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TypeLogementFindManyArgs>(args?: Prisma.SelectSubset<T, TypeLogementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TypeLogement.
     * @param {TypeLogementCreateArgs} args - Arguments to create a TypeLogement.
     * @example
     * // Create one TypeLogement
     * const TypeLogement = await prisma.typeLogement.create({
     *   data: {
     *     // ... data to create a TypeLogement
     *   }
     * })
     *
     */
    create<T extends TypeLogementCreateArgs>(args: Prisma.SelectSubset<T, TypeLogementCreateArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TypeLogements.
     * @param {TypeLogementCreateManyArgs} args - Arguments to create many TypeLogements.
     * @example
     * // Create many TypeLogements
     * const typeLogement = await prisma.typeLogement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TypeLogementCreateManyArgs>(args?: Prisma.SelectSubset<T, TypeLogementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TypeLogements and returns the data saved in the database.
     * @param {TypeLogementCreateManyAndReturnArgs} args - Arguments to create many TypeLogements.
     * @example
     * // Create many TypeLogements
     * const typeLogement = await prisma.typeLogement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TypeLogements and only return the `id`
     * const typeLogementWithIdOnly = await prisma.typeLogement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TypeLogementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TypeLogementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TypeLogement.
     * @param {TypeLogementDeleteArgs} args - Arguments to delete one TypeLogement.
     * @example
     * // Delete one TypeLogement
     * const TypeLogement = await prisma.typeLogement.delete({
     *   where: {
     *     // ... filter to delete one TypeLogement
     *   }
     * })
     *
     */
    delete<T extends TypeLogementDeleteArgs>(args: Prisma.SelectSubset<T, TypeLogementDeleteArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TypeLogement.
     * @param {TypeLogementUpdateArgs} args - Arguments to update one TypeLogement.
     * @example
     * // Update one TypeLogement
     * const typeLogement = await prisma.typeLogement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TypeLogementUpdateArgs>(args: Prisma.SelectSubset<T, TypeLogementUpdateArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TypeLogements.
     * @param {TypeLogementDeleteManyArgs} args - Arguments to filter TypeLogements to delete.
     * @example
     * // Delete a few TypeLogements
     * const { count } = await prisma.typeLogement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TypeLogementDeleteManyArgs>(args?: Prisma.SelectSubset<T, TypeLogementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TypeLogements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeLogementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeLogements
     * const typeLogement = await prisma.typeLogement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TypeLogementUpdateManyArgs>(args: Prisma.SelectSubset<T, TypeLogementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TypeLogements and returns the data updated in the database.
     * @param {TypeLogementUpdateManyAndReturnArgs} args - Arguments to update many TypeLogements.
     * @example
     * // Update many TypeLogements
     * const typeLogement = await prisma.typeLogement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TypeLogements and only return the `id`
     * const typeLogementWithIdOnly = await prisma.typeLogement.updateManyAndReturn({
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
    updateManyAndReturn<T extends TypeLogementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TypeLogementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TypeLogement.
     * @param {TypeLogementUpsertArgs} args - Arguments to update or create a TypeLogement.
     * @example
     * // Update or create a TypeLogement
     * const typeLogement = await prisma.typeLogement.upsert({
     *   create: {
     *     // ... data to create a TypeLogement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeLogement we want to update
     *   }
     * })
     */
    upsert<T extends TypeLogementUpsertArgs>(args: Prisma.SelectSubset<T, TypeLogementUpsertArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TypeLogements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeLogementCountArgs} args - Arguments to filter TypeLogements to count.
     * @example
     * // Count the number of TypeLogements
     * const count = await prisma.typeLogement.count({
     *   where: {
     *     // ... the filter for the TypeLogements we want to count
     *   }
     * })
    **/
    count<T extends TypeLogementCountArgs>(args?: Prisma.Subset<T, TypeLogementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TypeLogementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TypeLogement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeLogementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeLogementAggregateArgs>(args: Prisma.Subset<T, TypeLogementAggregateArgs>): Prisma.PrismaPromise<GetTypeLogementAggregateType<T>>;
    /**
     * Group by TypeLogement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeLogementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TypeLogementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TypeLogementGroupByArgs['orderBy'];
    } : {
        orderBy?: TypeLogementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TypeLogementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeLogementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TypeLogement model
     */
    readonly fields: TypeLogementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TypeLogement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TypeLogementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the TypeLogement model
 */
export interface TypeLogementFieldRefs {
    readonly id: Prisma.FieldRef<"TypeLogement", 'String'>;
    readonly nom: Prisma.FieldRef<"TypeLogement", 'String'>;
    readonly slug: Prisma.FieldRef<"TypeLogement", 'String'>;
    readonly image: Prisma.FieldRef<"TypeLogement", 'String'>;
    readonly actif: Prisma.FieldRef<"TypeLogement", 'Boolean'>;
    readonly ordre: Prisma.FieldRef<"TypeLogement", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TypeLogement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TypeLogement", 'DateTime'>;
}
/**
 * TypeLogement findUnique
 */
export type TypeLogementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * Filter, which TypeLogement to fetch.
     */
    where: Prisma.TypeLogementWhereUniqueInput;
};
/**
 * TypeLogement findUniqueOrThrow
 */
export type TypeLogementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * Filter, which TypeLogement to fetch.
     */
    where: Prisma.TypeLogementWhereUniqueInput;
};
/**
 * TypeLogement findFirst
 */
export type TypeLogementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * Filter, which TypeLogement to fetch.
     */
    where?: Prisma.TypeLogementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeLogements to fetch.
     */
    orderBy?: Prisma.TypeLogementOrderByWithRelationInput | Prisma.TypeLogementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TypeLogements.
     */
    cursor?: Prisma.TypeLogementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeLogements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeLogements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TypeLogements.
     */
    distinct?: Prisma.TypeLogementScalarFieldEnum | Prisma.TypeLogementScalarFieldEnum[];
};
/**
 * TypeLogement findFirstOrThrow
 */
export type TypeLogementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * Filter, which TypeLogement to fetch.
     */
    where?: Prisma.TypeLogementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeLogements to fetch.
     */
    orderBy?: Prisma.TypeLogementOrderByWithRelationInput | Prisma.TypeLogementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TypeLogements.
     */
    cursor?: Prisma.TypeLogementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeLogements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeLogements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TypeLogements.
     */
    distinct?: Prisma.TypeLogementScalarFieldEnum | Prisma.TypeLogementScalarFieldEnum[];
};
/**
 * TypeLogement findMany
 */
export type TypeLogementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * Filter, which TypeLogements to fetch.
     */
    where?: Prisma.TypeLogementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeLogements to fetch.
     */
    orderBy?: Prisma.TypeLogementOrderByWithRelationInput | Prisma.TypeLogementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TypeLogements.
     */
    cursor?: Prisma.TypeLogementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeLogements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeLogements.
     */
    skip?: number;
    distinct?: Prisma.TypeLogementScalarFieldEnum | Prisma.TypeLogementScalarFieldEnum[];
};
/**
 * TypeLogement create
 */
export type TypeLogementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * The data needed to create a TypeLogement.
     */
    data: Prisma.XOR<Prisma.TypeLogementCreateInput, Prisma.TypeLogementUncheckedCreateInput>;
};
/**
 * TypeLogement createMany
 */
export type TypeLogementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeLogements.
     */
    data: Prisma.TypeLogementCreateManyInput | Prisma.TypeLogementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TypeLogement createManyAndReturn
 */
export type TypeLogementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * The data used to create many TypeLogements.
     */
    data: Prisma.TypeLogementCreateManyInput | Prisma.TypeLogementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TypeLogement update
 */
export type TypeLogementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * The data needed to update a TypeLogement.
     */
    data: Prisma.XOR<Prisma.TypeLogementUpdateInput, Prisma.TypeLogementUncheckedUpdateInput>;
    /**
     * Choose, which TypeLogement to update.
     */
    where: Prisma.TypeLogementWhereUniqueInput;
};
/**
 * TypeLogement updateMany
 */
export type TypeLogementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeLogements.
     */
    data: Prisma.XOR<Prisma.TypeLogementUpdateManyMutationInput, Prisma.TypeLogementUncheckedUpdateManyInput>;
    /**
     * Filter which TypeLogements to update
     */
    where?: Prisma.TypeLogementWhereInput;
    /**
     * Limit how many TypeLogements to update.
     */
    limit?: number;
};
/**
 * TypeLogement updateManyAndReturn
 */
export type TypeLogementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * The data used to update TypeLogements.
     */
    data: Prisma.XOR<Prisma.TypeLogementUpdateManyMutationInput, Prisma.TypeLogementUncheckedUpdateManyInput>;
    /**
     * Filter which TypeLogements to update
     */
    where?: Prisma.TypeLogementWhereInput;
    /**
     * Limit how many TypeLogements to update.
     */
    limit?: number;
};
/**
 * TypeLogement upsert
 */
export type TypeLogementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * The filter to search for the TypeLogement to update in case it exists.
     */
    where: Prisma.TypeLogementWhereUniqueInput;
    /**
     * In case the TypeLogement found by the `where` argument doesn't exist, create a new TypeLogement with this data.
     */
    create: Prisma.XOR<Prisma.TypeLogementCreateInput, Prisma.TypeLogementUncheckedCreateInput>;
    /**
     * In case the TypeLogement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TypeLogementUpdateInput, Prisma.TypeLogementUncheckedUpdateInput>;
};
/**
 * TypeLogement delete
 */
export type TypeLogementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * Filter which TypeLogement to delete.
     */
    where: Prisma.TypeLogementWhereUniqueInput;
};
/**
 * TypeLogement deleteMany
 */
export type TypeLogementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TypeLogements to delete
     */
    where?: Prisma.TypeLogementWhereInput;
    /**
     * Limit how many TypeLogements to delete.
     */
    limit?: number;
};
/**
 * TypeLogement without action
 */
export type TypeLogementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=TypeLogement.d.ts.map