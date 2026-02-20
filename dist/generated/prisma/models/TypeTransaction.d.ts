import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TypeTransaction
 *
 */
export type TypeTransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$TypeTransactionPayload>;
export type AggregateTypeTransaction = {
    _count: TypeTransactionCountAggregateOutputType | null;
    _avg: TypeTransactionAvgAggregateOutputType | null;
    _sum: TypeTransactionSumAggregateOutputType | null;
    _min: TypeTransactionMinAggregateOutputType | null;
    _max: TypeTransactionMaxAggregateOutputType | null;
};
export type TypeTransactionAvgAggregateOutputType = {
    ordre: number | null;
};
export type TypeTransactionSumAggregateOutputType = {
    ordre: number | null;
};
export type TypeTransactionMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TypeTransactionMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TypeTransactionCountAggregateOutputType = {
    id: number;
    nom: number;
    slug: number;
    actif: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TypeTransactionAvgAggregateInputType = {
    ordre?: true;
};
export type TypeTransactionSumAggregateInputType = {
    ordre?: true;
};
export type TypeTransactionMinAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TypeTransactionMaxAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TypeTransactionCountAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TypeTransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TypeTransaction to aggregate.
     */
    where?: Prisma.TypeTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeTransactions to fetch.
     */
    orderBy?: Prisma.TypeTransactionOrderByWithRelationInput | Prisma.TypeTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TypeTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeTransactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TypeTransactions
    **/
    _count?: true | TypeTransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TypeTransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TypeTransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TypeTransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TypeTransactionMaxAggregateInputType;
};
export type GetTypeTransactionAggregateType<T extends TypeTransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTypeTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTypeTransaction[P]> : Prisma.GetScalarType<T[P], AggregateTypeTransaction[P]>;
};
export type TypeTransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeTransactionWhereInput;
    orderBy?: Prisma.TypeTransactionOrderByWithAggregationInput | Prisma.TypeTransactionOrderByWithAggregationInput[];
    by: Prisma.TypeTransactionScalarFieldEnum[] | Prisma.TypeTransactionScalarFieldEnum;
    having?: Prisma.TypeTransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TypeTransactionCountAggregateInputType | true;
    _avg?: TypeTransactionAvgAggregateInputType;
    _sum?: TypeTransactionSumAggregateInputType;
    _min?: TypeTransactionMinAggregateInputType;
    _max?: TypeTransactionMaxAggregateInputType;
};
export type TypeTransactionGroupByOutputType = {
    id: string;
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: TypeTransactionCountAggregateOutputType | null;
    _avg: TypeTransactionAvgAggregateOutputType | null;
    _sum: TypeTransactionSumAggregateOutputType | null;
    _min: TypeTransactionMinAggregateOutputType | null;
    _max: TypeTransactionMaxAggregateOutputType | null;
};
type GetTypeTransactionGroupByPayload<T extends TypeTransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TypeTransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TypeTransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TypeTransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TypeTransactionGroupByOutputType[P]>;
}>>;
export type TypeTransactionWhereInput = {
    AND?: Prisma.TypeTransactionWhereInput | Prisma.TypeTransactionWhereInput[];
    OR?: Prisma.TypeTransactionWhereInput[];
    NOT?: Prisma.TypeTransactionWhereInput | Prisma.TypeTransactionWhereInput[];
    id?: Prisma.StringFilter<"TypeTransaction"> | string;
    nom?: Prisma.StringFilter<"TypeTransaction"> | string;
    slug?: Prisma.StringFilter<"TypeTransaction"> | string;
    actif?: Prisma.BoolFilter<"TypeTransaction"> | boolean;
    ordre?: Prisma.IntFilter<"TypeTransaction"> | number;
    createdAt?: Prisma.DateTimeFilter<"TypeTransaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TypeTransaction"> | Date | string;
};
export type TypeTransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    slug?: string;
    AND?: Prisma.TypeTransactionWhereInput | Prisma.TypeTransactionWhereInput[];
    OR?: Prisma.TypeTransactionWhereInput[];
    NOT?: Prisma.TypeTransactionWhereInput | Prisma.TypeTransactionWhereInput[];
    actif?: Prisma.BoolFilter<"TypeTransaction"> | boolean;
    ordre?: Prisma.IntFilter<"TypeTransaction"> | number;
    createdAt?: Prisma.DateTimeFilter<"TypeTransaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TypeTransaction"> | Date | string;
}, "id" | "nom" | "slug">;
export type TypeTransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TypeTransactionCountOrderByAggregateInput;
    _avg?: Prisma.TypeTransactionAvgOrderByAggregateInput;
    _max?: Prisma.TypeTransactionMaxOrderByAggregateInput;
    _min?: Prisma.TypeTransactionMinOrderByAggregateInput;
    _sum?: Prisma.TypeTransactionSumOrderByAggregateInput;
};
export type TypeTransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TypeTransactionScalarWhereWithAggregatesInput | Prisma.TypeTransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TypeTransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TypeTransactionScalarWhereWithAggregatesInput | Prisma.TypeTransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TypeTransaction"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"TypeTransaction"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"TypeTransaction"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"TypeTransaction"> | boolean;
    ordre?: Prisma.IntWithAggregatesFilter<"TypeTransaction"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TypeTransaction"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TypeTransaction"> | Date | string;
};
export type TypeTransactionCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeTransactionUncheckedCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeTransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeTransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeTransactionCreateManyInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeTransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeTransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeTransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeTransactionAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type TypeTransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeTransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeTransactionSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type TypeTransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["typeTransaction"]>;
export type TypeTransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["typeTransaction"]>;
export type TypeTransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["typeTransaction"]>;
export type TypeTransactionSelectScalar = {
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TypeTransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "slug" | "actif" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["typeTransaction"]>;
export type $TypeTransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TypeTransaction";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["typeTransaction"]>;
    composites: {};
};
export type TypeTransactionGetPayload<S extends boolean | null | undefined | TypeTransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload, S>;
export type TypeTransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TypeTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TypeTransactionCountAggregateInputType | true;
};
export interface TypeTransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TypeTransaction'];
        meta: {
            name: 'TypeTransaction';
        };
    };
    /**
     * Find zero or one TypeTransaction that matches the filter.
     * @param {TypeTransactionFindUniqueArgs} args - Arguments to find a TypeTransaction
     * @example
     * // Get one TypeTransaction
     * const typeTransaction = await prisma.typeTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeTransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, TypeTransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TypeTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeTransactionFindUniqueOrThrowArgs} args - Arguments to find a TypeTransaction
     * @example
     * // Get one TypeTransaction
     * const typeTransaction = await prisma.typeTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeTransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TypeTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TypeTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeTransactionFindFirstArgs} args - Arguments to find a TypeTransaction
     * @example
     * // Get one TypeTransaction
     * const typeTransaction = await prisma.typeTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeTransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, TypeTransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TypeTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeTransactionFindFirstOrThrowArgs} args - Arguments to find a TypeTransaction
     * @example
     * // Get one TypeTransaction
     * const typeTransaction = await prisma.typeTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeTransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TypeTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TypeTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeTransactions
     * const typeTransactions = await prisma.typeTransaction.findMany()
     *
     * // Get first 10 TypeTransactions
     * const typeTransactions = await prisma.typeTransaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const typeTransactionWithIdOnly = await prisma.typeTransaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TypeTransactionFindManyArgs>(args?: Prisma.SelectSubset<T, TypeTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TypeTransaction.
     * @param {TypeTransactionCreateArgs} args - Arguments to create a TypeTransaction.
     * @example
     * // Create one TypeTransaction
     * const TypeTransaction = await prisma.typeTransaction.create({
     *   data: {
     *     // ... data to create a TypeTransaction
     *   }
     * })
     *
     */
    create<T extends TypeTransactionCreateArgs>(args: Prisma.SelectSubset<T, TypeTransactionCreateArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TypeTransactions.
     * @param {TypeTransactionCreateManyArgs} args - Arguments to create many TypeTransactions.
     * @example
     * // Create many TypeTransactions
     * const typeTransaction = await prisma.typeTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TypeTransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, TypeTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TypeTransactions and returns the data saved in the database.
     * @param {TypeTransactionCreateManyAndReturnArgs} args - Arguments to create many TypeTransactions.
     * @example
     * // Create many TypeTransactions
     * const typeTransaction = await prisma.typeTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TypeTransactions and only return the `id`
     * const typeTransactionWithIdOnly = await prisma.typeTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TypeTransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TypeTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TypeTransaction.
     * @param {TypeTransactionDeleteArgs} args - Arguments to delete one TypeTransaction.
     * @example
     * // Delete one TypeTransaction
     * const TypeTransaction = await prisma.typeTransaction.delete({
     *   where: {
     *     // ... filter to delete one TypeTransaction
     *   }
     * })
     *
     */
    delete<T extends TypeTransactionDeleteArgs>(args: Prisma.SelectSubset<T, TypeTransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TypeTransaction.
     * @param {TypeTransactionUpdateArgs} args - Arguments to update one TypeTransaction.
     * @example
     * // Update one TypeTransaction
     * const typeTransaction = await prisma.typeTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TypeTransactionUpdateArgs>(args: Prisma.SelectSubset<T, TypeTransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TypeTransactions.
     * @param {TypeTransactionDeleteManyArgs} args - Arguments to filter TypeTransactions to delete.
     * @example
     * // Delete a few TypeTransactions
     * const { count } = await prisma.typeTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TypeTransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TypeTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TypeTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeTransactions
     * const typeTransaction = await prisma.typeTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TypeTransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, TypeTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TypeTransactions and returns the data updated in the database.
     * @param {TypeTransactionUpdateManyAndReturnArgs} args - Arguments to update many TypeTransactions.
     * @example
     * // Update many TypeTransactions
     * const typeTransaction = await prisma.typeTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TypeTransactions and only return the `id`
     * const typeTransactionWithIdOnly = await prisma.typeTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TypeTransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TypeTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TypeTransaction.
     * @param {TypeTransactionUpsertArgs} args - Arguments to update or create a TypeTransaction.
     * @example
     * // Update or create a TypeTransaction
     * const typeTransaction = await prisma.typeTransaction.upsert({
     *   create: {
     *     // ... data to create a TypeTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeTransaction we want to update
     *   }
     * })
     */
    upsert<T extends TypeTransactionUpsertArgs>(args: Prisma.SelectSubset<T, TypeTransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TypeTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeTransactionCountArgs} args - Arguments to filter TypeTransactions to count.
     * @example
     * // Count the number of TypeTransactions
     * const count = await prisma.typeTransaction.count({
     *   where: {
     *     // ... the filter for the TypeTransactions we want to count
     *   }
     * })
    **/
    count<T extends TypeTransactionCountArgs>(args?: Prisma.Subset<T, TypeTransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TypeTransactionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TypeTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeTransactionAggregateArgs>(args: Prisma.Subset<T, TypeTransactionAggregateArgs>): Prisma.PrismaPromise<GetTypeTransactionAggregateType<T>>;
    /**
     * Group by TypeTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeTransactionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TypeTransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TypeTransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: TypeTransactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TypeTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TypeTransaction model
     */
    readonly fields: TypeTransactionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TypeTransaction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TypeTransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the TypeTransaction model
 */
export interface TypeTransactionFieldRefs {
    readonly id: Prisma.FieldRef<"TypeTransaction", 'String'>;
    readonly nom: Prisma.FieldRef<"TypeTransaction", 'String'>;
    readonly slug: Prisma.FieldRef<"TypeTransaction", 'String'>;
    readonly actif: Prisma.FieldRef<"TypeTransaction", 'Boolean'>;
    readonly ordre: Prisma.FieldRef<"TypeTransaction", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TypeTransaction", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TypeTransaction", 'DateTime'>;
}
/**
 * TypeTransaction findUnique
 */
export type TypeTransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * Filter, which TypeTransaction to fetch.
     */
    where: Prisma.TypeTransactionWhereUniqueInput;
};
/**
 * TypeTransaction findUniqueOrThrow
 */
export type TypeTransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * Filter, which TypeTransaction to fetch.
     */
    where: Prisma.TypeTransactionWhereUniqueInput;
};
/**
 * TypeTransaction findFirst
 */
export type TypeTransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * Filter, which TypeTransaction to fetch.
     */
    where?: Prisma.TypeTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeTransactions to fetch.
     */
    orderBy?: Prisma.TypeTransactionOrderByWithRelationInput | Prisma.TypeTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TypeTransactions.
     */
    cursor?: Prisma.TypeTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeTransactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TypeTransactions.
     */
    distinct?: Prisma.TypeTransactionScalarFieldEnum | Prisma.TypeTransactionScalarFieldEnum[];
};
/**
 * TypeTransaction findFirstOrThrow
 */
export type TypeTransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * Filter, which TypeTransaction to fetch.
     */
    where?: Prisma.TypeTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeTransactions to fetch.
     */
    orderBy?: Prisma.TypeTransactionOrderByWithRelationInput | Prisma.TypeTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TypeTransactions.
     */
    cursor?: Prisma.TypeTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeTransactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TypeTransactions.
     */
    distinct?: Prisma.TypeTransactionScalarFieldEnum | Prisma.TypeTransactionScalarFieldEnum[];
};
/**
 * TypeTransaction findMany
 */
export type TypeTransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * Filter, which TypeTransactions to fetch.
     */
    where?: Prisma.TypeTransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeTransactions to fetch.
     */
    orderBy?: Prisma.TypeTransactionOrderByWithRelationInput | Prisma.TypeTransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TypeTransactions.
     */
    cursor?: Prisma.TypeTransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeTransactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeTransactions.
     */
    skip?: number;
    distinct?: Prisma.TypeTransactionScalarFieldEnum | Prisma.TypeTransactionScalarFieldEnum[];
};
/**
 * TypeTransaction create
 */
export type TypeTransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * The data needed to create a TypeTransaction.
     */
    data: Prisma.XOR<Prisma.TypeTransactionCreateInput, Prisma.TypeTransactionUncheckedCreateInput>;
};
/**
 * TypeTransaction createMany
 */
export type TypeTransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeTransactions.
     */
    data: Prisma.TypeTransactionCreateManyInput | Prisma.TypeTransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TypeTransaction createManyAndReturn
 */
export type TypeTransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * The data used to create many TypeTransactions.
     */
    data: Prisma.TypeTransactionCreateManyInput | Prisma.TypeTransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TypeTransaction update
 */
export type TypeTransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * The data needed to update a TypeTransaction.
     */
    data: Prisma.XOR<Prisma.TypeTransactionUpdateInput, Prisma.TypeTransactionUncheckedUpdateInput>;
    /**
     * Choose, which TypeTransaction to update.
     */
    where: Prisma.TypeTransactionWhereUniqueInput;
};
/**
 * TypeTransaction updateMany
 */
export type TypeTransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeTransactions.
     */
    data: Prisma.XOR<Prisma.TypeTransactionUpdateManyMutationInput, Prisma.TypeTransactionUncheckedUpdateManyInput>;
    /**
     * Filter which TypeTransactions to update
     */
    where?: Prisma.TypeTransactionWhereInput;
    /**
     * Limit how many TypeTransactions to update.
     */
    limit?: number;
};
/**
 * TypeTransaction updateManyAndReturn
 */
export type TypeTransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * The data used to update TypeTransactions.
     */
    data: Prisma.XOR<Prisma.TypeTransactionUpdateManyMutationInput, Prisma.TypeTransactionUncheckedUpdateManyInput>;
    /**
     * Filter which TypeTransactions to update
     */
    where?: Prisma.TypeTransactionWhereInput;
    /**
     * Limit how many TypeTransactions to update.
     */
    limit?: number;
};
/**
 * TypeTransaction upsert
 */
export type TypeTransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * The filter to search for the TypeTransaction to update in case it exists.
     */
    where: Prisma.TypeTransactionWhereUniqueInput;
    /**
     * In case the TypeTransaction found by the `where` argument doesn't exist, create a new TypeTransaction with this data.
     */
    create: Prisma.XOR<Prisma.TypeTransactionCreateInput, Prisma.TypeTransactionUncheckedCreateInput>;
    /**
     * In case the TypeTransaction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TypeTransactionUpdateInput, Prisma.TypeTransactionUncheckedUpdateInput>;
};
/**
 * TypeTransaction delete
 */
export type TypeTransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * Filter which TypeTransaction to delete.
     */
    where: Prisma.TypeTransactionWhereUniqueInput;
};
/**
 * TypeTransaction deleteMany
 */
export type TypeTransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TypeTransactions to delete
     */
    where?: Prisma.TypeTransactionWhereInput;
    /**
     * Limit how many TypeTransactions to delete.
     */
    limit?: number;
};
/**
 * TypeTransaction without action
 */
export type TypeTransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=TypeTransaction.d.ts.map