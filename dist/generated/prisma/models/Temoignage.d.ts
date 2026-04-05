import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Temoignage
 *
 */
export type TemoignageModel = runtime.Types.Result.DefaultSelection<Prisma.$TemoignagePayload>;
export type AggregateTemoignage = {
    _count: TemoignageCountAggregateOutputType | null;
    _avg: TemoignageAvgAggregateOutputType | null;
    _sum: TemoignageSumAggregateOutputType | null;
    _min: TemoignageMinAggregateOutputType | null;
    _max: TemoignageMaxAggregateOutputType | null;
};
export type TemoignageAvgAggregateOutputType = {
    ordre: number | null;
};
export type TemoignageSumAggregateOutputType = {
    ordre: number | null;
};
export type TemoignageMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    temoignage: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TemoignageMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    temoignage: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TemoignageCountAggregateOutputType = {
    id: number;
    nom: number;
    temoignage: number;
    actif: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TemoignageAvgAggregateInputType = {
    ordre?: true;
};
export type TemoignageSumAggregateInputType = {
    ordre?: true;
};
export type TemoignageMinAggregateInputType = {
    id?: true;
    nom?: true;
    temoignage?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TemoignageMaxAggregateInputType = {
    id?: true;
    nom?: true;
    temoignage?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TemoignageCountAggregateInputType = {
    id?: true;
    nom?: true;
    temoignage?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TemoignageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Temoignage to aggregate.
     */
    where?: Prisma.TemoignageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Temoignages to fetch.
     */
    orderBy?: Prisma.TemoignageOrderByWithRelationInput | Prisma.TemoignageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TemoignageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Temoignages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Temoignages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Temoignages
    **/
    _count?: true | TemoignageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TemoignageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TemoignageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TemoignageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TemoignageMaxAggregateInputType;
};
export type GetTemoignageAggregateType<T extends TemoignageAggregateArgs> = {
    [P in keyof T & keyof AggregateTemoignage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTemoignage[P]> : Prisma.GetScalarType<T[P], AggregateTemoignage[P]>;
};
export type TemoignageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemoignageWhereInput;
    orderBy?: Prisma.TemoignageOrderByWithAggregationInput | Prisma.TemoignageOrderByWithAggregationInput[];
    by: Prisma.TemoignageScalarFieldEnum[] | Prisma.TemoignageScalarFieldEnum;
    having?: Prisma.TemoignageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TemoignageCountAggregateInputType | true;
    _avg?: TemoignageAvgAggregateInputType;
    _sum?: TemoignageSumAggregateInputType;
    _min?: TemoignageMinAggregateInputType;
    _max?: TemoignageMaxAggregateInputType;
};
export type TemoignageGroupByOutputType = {
    id: string;
    nom: string;
    temoignage: string;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: TemoignageCountAggregateOutputType | null;
    _avg: TemoignageAvgAggregateOutputType | null;
    _sum: TemoignageSumAggregateOutputType | null;
    _min: TemoignageMinAggregateOutputType | null;
    _max: TemoignageMaxAggregateOutputType | null;
};
type GetTemoignageGroupByPayload<T extends TemoignageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TemoignageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TemoignageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TemoignageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TemoignageGroupByOutputType[P]>;
}>>;
export type TemoignageWhereInput = {
    AND?: Prisma.TemoignageWhereInput | Prisma.TemoignageWhereInput[];
    OR?: Prisma.TemoignageWhereInput[];
    NOT?: Prisma.TemoignageWhereInput | Prisma.TemoignageWhereInput[];
    id?: Prisma.StringFilter<"Temoignage"> | string;
    nom?: Prisma.StringFilter<"Temoignage"> | string;
    temoignage?: Prisma.StringFilter<"Temoignage"> | string;
    actif?: Prisma.BoolFilter<"Temoignage"> | boolean;
    ordre?: Prisma.IntFilter<"Temoignage"> | number;
    createdAt?: Prisma.DateTimeFilter<"Temoignage"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Temoignage"> | Date | string;
};
export type TemoignageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    temoignage?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TemoignageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TemoignageWhereInput | Prisma.TemoignageWhereInput[];
    OR?: Prisma.TemoignageWhereInput[];
    NOT?: Prisma.TemoignageWhereInput | Prisma.TemoignageWhereInput[];
    nom?: Prisma.StringFilter<"Temoignage"> | string;
    temoignage?: Prisma.StringFilter<"Temoignage"> | string;
    actif?: Prisma.BoolFilter<"Temoignage"> | boolean;
    ordre?: Prisma.IntFilter<"Temoignage"> | number;
    createdAt?: Prisma.DateTimeFilter<"Temoignage"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Temoignage"> | Date | string;
}, "id">;
export type TemoignageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    temoignage?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TemoignageCountOrderByAggregateInput;
    _avg?: Prisma.TemoignageAvgOrderByAggregateInput;
    _max?: Prisma.TemoignageMaxOrderByAggregateInput;
    _min?: Prisma.TemoignageMinOrderByAggregateInput;
    _sum?: Prisma.TemoignageSumOrderByAggregateInput;
};
export type TemoignageScalarWhereWithAggregatesInput = {
    AND?: Prisma.TemoignageScalarWhereWithAggregatesInput | Prisma.TemoignageScalarWhereWithAggregatesInput[];
    OR?: Prisma.TemoignageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TemoignageScalarWhereWithAggregatesInput | Prisma.TemoignageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Temoignage"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Temoignage"> | string;
    temoignage?: Prisma.StringWithAggregatesFilter<"Temoignage"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"Temoignage"> | boolean;
    ordre?: Prisma.IntWithAggregatesFilter<"Temoignage"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Temoignage"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Temoignage"> | Date | string;
};
export type TemoignageCreateInput = {
    id?: string;
    nom: string;
    temoignage: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TemoignageUncheckedCreateInput = {
    id?: string;
    nom: string;
    temoignage: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TemoignageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    temoignage?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemoignageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    temoignage?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemoignageCreateManyInput = {
    id?: string;
    nom: string;
    temoignage: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TemoignageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    temoignage?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemoignageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    temoignage?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemoignageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    temoignage?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TemoignageAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type TemoignageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    temoignage?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TemoignageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    temoignage?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TemoignageSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type TemoignageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    temoignage?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["temoignage"]>;
export type TemoignageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    temoignage?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["temoignage"]>;
export type TemoignageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    temoignage?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["temoignage"]>;
export type TemoignageSelectScalar = {
    id?: boolean;
    nom?: boolean;
    temoignage?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TemoignageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "temoignage" | "actif" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["temoignage"]>;
export type $TemoignagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Temoignage";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        temoignage: string;
        actif: boolean;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["temoignage"]>;
    composites: {};
};
export type TemoignageGetPayload<S extends boolean | null | undefined | TemoignageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TemoignagePayload, S>;
export type TemoignageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TemoignageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TemoignageCountAggregateInputType | true;
};
export interface TemoignageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Temoignage'];
        meta: {
            name: 'Temoignage';
        };
    };
    /**
     * Find zero or one Temoignage that matches the filter.
     * @param {TemoignageFindUniqueArgs} args - Arguments to find a Temoignage
     * @example
     * // Get one Temoignage
     * const temoignage = await prisma.temoignage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemoignageFindUniqueArgs>(args: Prisma.SelectSubset<T, TemoignageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Temoignage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemoignageFindUniqueOrThrowArgs} args - Arguments to find a Temoignage
     * @example
     * // Get one Temoignage
     * const temoignage = await prisma.temoignage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemoignageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TemoignageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Temoignage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemoignageFindFirstArgs} args - Arguments to find a Temoignage
     * @example
     * // Get one Temoignage
     * const temoignage = await prisma.temoignage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemoignageFindFirstArgs>(args?: Prisma.SelectSubset<T, TemoignageFindFirstArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Temoignage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemoignageFindFirstOrThrowArgs} args - Arguments to find a Temoignage
     * @example
     * // Get one Temoignage
     * const temoignage = await prisma.temoignage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemoignageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TemoignageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Temoignages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemoignageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temoignages
     * const temoignages = await prisma.temoignage.findMany()
     *
     * // Get first 10 Temoignages
     * const temoignages = await prisma.temoignage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const temoignageWithIdOnly = await prisma.temoignage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TemoignageFindManyArgs>(args?: Prisma.SelectSubset<T, TemoignageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Temoignage.
     * @param {TemoignageCreateArgs} args - Arguments to create a Temoignage.
     * @example
     * // Create one Temoignage
     * const Temoignage = await prisma.temoignage.create({
     *   data: {
     *     // ... data to create a Temoignage
     *   }
     * })
     *
     */
    create<T extends TemoignageCreateArgs>(args: Prisma.SelectSubset<T, TemoignageCreateArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Temoignages.
     * @param {TemoignageCreateManyArgs} args - Arguments to create many Temoignages.
     * @example
     * // Create many Temoignages
     * const temoignage = await prisma.temoignage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TemoignageCreateManyArgs>(args?: Prisma.SelectSubset<T, TemoignageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Temoignages and returns the data saved in the database.
     * @param {TemoignageCreateManyAndReturnArgs} args - Arguments to create many Temoignages.
     * @example
     * // Create many Temoignages
     * const temoignage = await prisma.temoignage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Temoignages and only return the `id`
     * const temoignageWithIdOnly = await prisma.temoignage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TemoignageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TemoignageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Temoignage.
     * @param {TemoignageDeleteArgs} args - Arguments to delete one Temoignage.
     * @example
     * // Delete one Temoignage
     * const Temoignage = await prisma.temoignage.delete({
     *   where: {
     *     // ... filter to delete one Temoignage
     *   }
     * })
     *
     */
    delete<T extends TemoignageDeleteArgs>(args: Prisma.SelectSubset<T, TemoignageDeleteArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Temoignage.
     * @param {TemoignageUpdateArgs} args - Arguments to update one Temoignage.
     * @example
     * // Update one Temoignage
     * const temoignage = await prisma.temoignage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TemoignageUpdateArgs>(args: Prisma.SelectSubset<T, TemoignageUpdateArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Temoignages.
     * @param {TemoignageDeleteManyArgs} args - Arguments to filter Temoignages to delete.
     * @example
     * // Delete a few Temoignages
     * const { count } = await prisma.temoignage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TemoignageDeleteManyArgs>(args?: Prisma.SelectSubset<T, TemoignageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Temoignages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemoignageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temoignages
     * const temoignage = await prisma.temoignage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TemoignageUpdateManyArgs>(args: Prisma.SelectSubset<T, TemoignageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Temoignages and returns the data updated in the database.
     * @param {TemoignageUpdateManyAndReturnArgs} args - Arguments to update many Temoignages.
     * @example
     * // Update many Temoignages
     * const temoignage = await prisma.temoignage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Temoignages and only return the `id`
     * const temoignageWithIdOnly = await prisma.temoignage.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemoignageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TemoignageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Temoignage.
     * @param {TemoignageUpsertArgs} args - Arguments to update or create a Temoignage.
     * @example
     * // Update or create a Temoignage
     * const temoignage = await prisma.temoignage.upsert({
     *   create: {
     *     // ... data to create a Temoignage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temoignage we want to update
     *   }
     * })
     */
    upsert<T extends TemoignageUpsertArgs>(args: Prisma.SelectSubset<T, TemoignageUpsertArgs<ExtArgs>>): Prisma.Prisma__TemoignageClient<runtime.Types.Result.GetResult<Prisma.$TemoignagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Temoignages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemoignageCountArgs} args - Arguments to filter Temoignages to count.
     * @example
     * // Count the number of Temoignages
     * const count = await prisma.temoignage.count({
     *   where: {
     *     // ... the filter for the Temoignages we want to count
     *   }
     * })
    **/
    count<T extends TemoignageCountArgs>(args?: Prisma.Subset<T, TemoignageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TemoignageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Temoignage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemoignageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemoignageAggregateArgs>(args: Prisma.Subset<T, TemoignageAggregateArgs>): Prisma.PrismaPromise<GetTemoignageAggregateType<T>>;
    /**
     * Group by Temoignage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemoignageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TemoignageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TemoignageGroupByArgs['orderBy'];
    } : {
        orderBy?: TemoignageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TemoignageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemoignageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Temoignage model
     */
    readonly fields: TemoignageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Temoignage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TemoignageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Temoignage model
 */
export interface TemoignageFieldRefs {
    readonly id: Prisma.FieldRef<"Temoignage", 'String'>;
    readonly nom: Prisma.FieldRef<"Temoignage", 'String'>;
    readonly temoignage: Prisma.FieldRef<"Temoignage", 'String'>;
    readonly actif: Prisma.FieldRef<"Temoignage", 'Boolean'>;
    readonly ordre: Prisma.FieldRef<"Temoignage", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Temoignage", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Temoignage", 'DateTime'>;
}
/**
 * Temoignage findUnique
 */
export type TemoignageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * Filter, which Temoignage to fetch.
     */
    where: Prisma.TemoignageWhereUniqueInput;
};
/**
 * Temoignage findUniqueOrThrow
 */
export type TemoignageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * Filter, which Temoignage to fetch.
     */
    where: Prisma.TemoignageWhereUniqueInput;
};
/**
 * Temoignage findFirst
 */
export type TemoignageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * Filter, which Temoignage to fetch.
     */
    where?: Prisma.TemoignageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Temoignages to fetch.
     */
    orderBy?: Prisma.TemoignageOrderByWithRelationInput | Prisma.TemoignageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Temoignages.
     */
    cursor?: Prisma.TemoignageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Temoignages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Temoignages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Temoignages.
     */
    distinct?: Prisma.TemoignageScalarFieldEnum | Prisma.TemoignageScalarFieldEnum[];
};
/**
 * Temoignage findFirstOrThrow
 */
export type TemoignageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * Filter, which Temoignage to fetch.
     */
    where?: Prisma.TemoignageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Temoignages to fetch.
     */
    orderBy?: Prisma.TemoignageOrderByWithRelationInput | Prisma.TemoignageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Temoignages.
     */
    cursor?: Prisma.TemoignageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Temoignages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Temoignages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Temoignages.
     */
    distinct?: Prisma.TemoignageScalarFieldEnum | Prisma.TemoignageScalarFieldEnum[];
};
/**
 * Temoignage findMany
 */
export type TemoignageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * Filter, which Temoignages to fetch.
     */
    where?: Prisma.TemoignageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Temoignages to fetch.
     */
    orderBy?: Prisma.TemoignageOrderByWithRelationInput | Prisma.TemoignageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Temoignages.
     */
    cursor?: Prisma.TemoignageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Temoignages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Temoignages.
     */
    skip?: number;
    distinct?: Prisma.TemoignageScalarFieldEnum | Prisma.TemoignageScalarFieldEnum[];
};
/**
 * Temoignage create
 */
export type TemoignageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * The data needed to create a Temoignage.
     */
    data: Prisma.XOR<Prisma.TemoignageCreateInput, Prisma.TemoignageUncheckedCreateInput>;
};
/**
 * Temoignage createMany
 */
export type TemoignageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Temoignages.
     */
    data: Prisma.TemoignageCreateManyInput | Prisma.TemoignageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Temoignage createManyAndReturn
 */
export type TemoignageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * The data used to create many Temoignages.
     */
    data: Prisma.TemoignageCreateManyInput | Prisma.TemoignageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Temoignage update
 */
export type TemoignageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * The data needed to update a Temoignage.
     */
    data: Prisma.XOR<Prisma.TemoignageUpdateInput, Prisma.TemoignageUncheckedUpdateInput>;
    /**
     * Choose, which Temoignage to update.
     */
    where: Prisma.TemoignageWhereUniqueInput;
};
/**
 * Temoignage updateMany
 */
export type TemoignageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Temoignages.
     */
    data: Prisma.XOR<Prisma.TemoignageUpdateManyMutationInput, Prisma.TemoignageUncheckedUpdateManyInput>;
    /**
     * Filter which Temoignages to update
     */
    where?: Prisma.TemoignageWhereInput;
    /**
     * Limit how many Temoignages to update.
     */
    limit?: number;
};
/**
 * Temoignage updateManyAndReturn
 */
export type TemoignageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * The data used to update Temoignages.
     */
    data: Prisma.XOR<Prisma.TemoignageUpdateManyMutationInput, Prisma.TemoignageUncheckedUpdateManyInput>;
    /**
     * Filter which Temoignages to update
     */
    where?: Prisma.TemoignageWhereInput;
    /**
     * Limit how many Temoignages to update.
     */
    limit?: number;
};
/**
 * Temoignage upsert
 */
export type TemoignageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * The filter to search for the Temoignage to update in case it exists.
     */
    where: Prisma.TemoignageWhereUniqueInput;
    /**
     * In case the Temoignage found by the `where` argument doesn't exist, create a new Temoignage with this data.
     */
    create: Prisma.XOR<Prisma.TemoignageCreateInput, Prisma.TemoignageUncheckedCreateInput>;
    /**
     * In case the Temoignage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TemoignageUpdateInput, Prisma.TemoignageUncheckedUpdateInput>;
};
/**
 * Temoignage delete
 */
export type TemoignageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
    /**
     * Filter which Temoignage to delete.
     */
    where: Prisma.TemoignageWhereUniqueInput;
};
/**
 * Temoignage deleteMany
 */
export type TemoignageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Temoignages to delete
     */
    where?: Prisma.TemoignageWhereInput;
    /**
     * Limit how many Temoignages to delete.
     */
    limit?: number;
};
/**
 * Temoignage without action
 */
export type TemoignageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temoignage
     */
    select?: Prisma.TemoignageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Temoignage
     */
    omit?: Prisma.TemoignageOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Temoignage.d.ts.map