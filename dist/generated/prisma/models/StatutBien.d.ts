import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model StatutBien
 *
 */
export type StatutBienModel = runtime.Types.Result.DefaultSelection<Prisma.$StatutBienPayload>;
export type AggregateStatutBien = {
    _count: StatutBienCountAggregateOutputType | null;
    _avg: StatutBienAvgAggregateOutputType | null;
    _sum: StatutBienSumAggregateOutputType | null;
    _min: StatutBienMinAggregateOutputType | null;
    _max: StatutBienMaxAggregateOutputType | null;
};
export type StatutBienAvgAggregateOutputType = {
    ordre: number | null;
};
export type StatutBienSumAggregateOutputType = {
    ordre: number | null;
};
export type StatutBienMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StatutBienMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StatutBienCountAggregateOutputType = {
    id: number;
    nom: number;
    slug: number;
    actif: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StatutBienAvgAggregateInputType = {
    ordre?: true;
};
export type StatutBienSumAggregateInputType = {
    ordre?: true;
};
export type StatutBienMinAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StatutBienMaxAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StatutBienCountAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StatutBienAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StatutBien to aggregate.
     */
    where?: Prisma.StatutBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatutBiens to fetch.
     */
    orderBy?: Prisma.StatutBienOrderByWithRelationInput | Prisma.StatutBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StatutBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatutBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatutBiens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StatutBiens
    **/
    _count?: true | StatutBienCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StatutBienAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StatutBienSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StatutBienMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StatutBienMaxAggregateInputType;
};
export type GetStatutBienAggregateType<T extends StatutBienAggregateArgs> = {
    [P in keyof T & keyof AggregateStatutBien]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStatutBien[P]> : Prisma.GetScalarType<T[P], AggregateStatutBien[P]>;
};
export type StatutBienGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatutBienWhereInput;
    orderBy?: Prisma.StatutBienOrderByWithAggregationInput | Prisma.StatutBienOrderByWithAggregationInput[];
    by: Prisma.StatutBienScalarFieldEnum[] | Prisma.StatutBienScalarFieldEnum;
    having?: Prisma.StatutBienScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatutBienCountAggregateInputType | true;
    _avg?: StatutBienAvgAggregateInputType;
    _sum?: StatutBienSumAggregateInputType;
    _min?: StatutBienMinAggregateInputType;
    _max?: StatutBienMaxAggregateInputType;
};
export type StatutBienGroupByOutputType = {
    id: string;
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: StatutBienCountAggregateOutputType | null;
    _avg: StatutBienAvgAggregateOutputType | null;
    _sum: StatutBienSumAggregateOutputType | null;
    _min: StatutBienMinAggregateOutputType | null;
    _max: StatutBienMaxAggregateOutputType | null;
};
type GetStatutBienGroupByPayload<T extends StatutBienGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StatutBienGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StatutBienGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StatutBienGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StatutBienGroupByOutputType[P]>;
}>>;
export type StatutBienWhereInput = {
    AND?: Prisma.StatutBienWhereInput | Prisma.StatutBienWhereInput[];
    OR?: Prisma.StatutBienWhereInput[];
    NOT?: Prisma.StatutBienWhereInput | Prisma.StatutBienWhereInput[];
    id?: Prisma.StringFilter<"StatutBien"> | string;
    nom?: Prisma.StringFilter<"StatutBien"> | string;
    slug?: Prisma.StringFilter<"StatutBien"> | string;
    actif?: Prisma.BoolFilter<"StatutBien"> | boolean;
    ordre?: Prisma.IntFilter<"StatutBien"> | number;
    createdAt?: Prisma.DateTimeFilter<"StatutBien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StatutBien"> | Date | string;
};
export type StatutBienOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatutBienWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    slug?: string;
    AND?: Prisma.StatutBienWhereInput | Prisma.StatutBienWhereInput[];
    OR?: Prisma.StatutBienWhereInput[];
    NOT?: Prisma.StatutBienWhereInput | Prisma.StatutBienWhereInput[];
    actif?: Prisma.BoolFilter<"StatutBien"> | boolean;
    ordre?: Prisma.IntFilter<"StatutBien"> | number;
    createdAt?: Prisma.DateTimeFilter<"StatutBien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StatutBien"> | Date | string;
}, "id" | "nom" | "slug">;
export type StatutBienOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StatutBienCountOrderByAggregateInput;
    _avg?: Prisma.StatutBienAvgOrderByAggregateInput;
    _max?: Prisma.StatutBienMaxOrderByAggregateInput;
    _min?: Prisma.StatutBienMinOrderByAggregateInput;
    _sum?: Prisma.StatutBienSumOrderByAggregateInput;
};
export type StatutBienScalarWhereWithAggregatesInput = {
    AND?: Prisma.StatutBienScalarWhereWithAggregatesInput | Prisma.StatutBienScalarWhereWithAggregatesInput[];
    OR?: Prisma.StatutBienScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StatutBienScalarWhereWithAggregatesInput | Prisma.StatutBienScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StatutBien"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"StatutBien"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"StatutBien"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"StatutBien"> | boolean;
    ordre?: Prisma.IntWithAggregatesFilter<"StatutBien"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StatutBien"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StatutBien"> | Date | string;
};
export type StatutBienCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatutBienUncheckedCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatutBienUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatutBienUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatutBienCreateManyInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatutBienUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatutBienUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatutBienCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatutBienAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type StatutBienMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatutBienMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatutBienSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type StatutBienSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["statutBien"]>;
export type StatutBienSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["statutBien"]>;
export type StatutBienSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["statutBien"]>;
export type StatutBienSelectScalar = {
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StatutBienOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "slug" | "actif" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["statutBien"]>;
export type $StatutBienPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StatutBien";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["statutBien"]>;
    composites: {};
};
export type StatutBienGetPayload<S extends boolean | null | undefined | StatutBienDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatutBienPayload, S>;
export type StatutBienCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StatutBienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatutBienCountAggregateInputType | true;
};
export interface StatutBienDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StatutBien'];
        meta: {
            name: 'StatutBien';
        };
    };
    /**
     * Find zero or one StatutBien that matches the filter.
     * @param {StatutBienFindUniqueArgs} args - Arguments to find a StatutBien
     * @example
     * // Get one StatutBien
     * const statutBien = await prisma.statutBien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatutBienFindUniqueArgs>(args: Prisma.SelectSubset<T, StatutBienFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StatutBien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatutBienFindUniqueOrThrowArgs} args - Arguments to find a StatutBien
     * @example
     * // Get one StatutBien
     * const statutBien = await prisma.statutBien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatutBienFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StatutBienFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StatutBien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutBienFindFirstArgs} args - Arguments to find a StatutBien
     * @example
     * // Get one StatutBien
     * const statutBien = await prisma.statutBien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatutBienFindFirstArgs>(args?: Prisma.SelectSubset<T, StatutBienFindFirstArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StatutBien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutBienFindFirstOrThrowArgs} args - Arguments to find a StatutBien
     * @example
     * // Get one StatutBien
     * const statutBien = await prisma.statutBien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatutBienFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StatutBienFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StatutBiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutBienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatutBiens
     * const statutBiens = await prisma.statutBien.findMany()
     *
     * // Get first 10 StatutBiens
     * const statutBiens = await prisma.statutBien.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const statutBienWithIdOnly = await prisma.statutBien.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StatutBienFindManyArgs>(args?: Prisma.SelectSubset<T, StatutBienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StatutBien.
     * @param {StatutBienCreateArgs} args - Arguments to create a StatutBien.
     * @example
     * // Create one StatutBien
     * const StatutBien = await prisma.statutBien.create({
     *   data: {
     *     // ... data to create a StatutBien
     *   }
     * })
     *
     */
    create<T extends StatutBienCreateArgs>(args: Prisma.SelectSubset<T, StatutBienCreateArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StatutBiens.
     * @param {StatutBienCreateManyArgs} args - Arguments to create many StatutBiens.
     * @example
     * // Create many StatutBiens
     * const statutBien = await prisma.statutBien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StatutBienCreateManyArgs>(args?: Prisma.SelectSubset<T, StatutBienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StatutBiens and returns the data saved in the database.
     * @param {StatutBienCreateManyAndReturnArgs} args - Arguments to create many StatutBiens.
     * @example
     * // Create many StatutBiens
     * const statutBien = await prisma.statutBien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StatutBiens and only return the `id`
     * const statutBienWithIdOnly = await prisma.statutBien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StatutBienCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StatutBienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StatutBien.
     * @param {StatutBienDeleteArgs} args - Arguments to delete one StatutBien.
     * @example
     * // Delete one StatutBien
     * const StatutBien = await prisma.statutBien.delete({
     *   where: {
     *     // ... filter to delete one StatutBien
     *   }
     * })
     *
     */
    delete<T extends StatutBienDeleteArgs>(args: Prisma.SelectSubset<T, StatutBienDeleteArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StatutBien.
     * @param {StatutBienUpdateArgs} args - Arguments to update one StatutBien.
     * @example
     * // Update one StatutBien
     * const statutBien = await prisma.statutBien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StatutBienUpdateArgs>(args: Prisma.SelectSubset<T, StatutBienUpdateArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StatutBiens.
     * @param {StatutBienDeleteManyArgs} args - Arguments to filter StatutBiens to delete.
     * @example
     * // Delete a few StatutBiens
     * const { count } = await prisma.statutBien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StatutBienDeleteManyArgs>(args?: Prisma.SelectSubset<T, StatutBienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StatutBiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutBienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatutBiens
     * const statutBien = await prisma.statutBien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StatutBienUpdateManyArgs>(args: Prisma.SelectSubset<T, StatutBienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StatutBiens and returns the data updated in the database.
     * @param {StatutBienUpdateManyAndReturnArgs} args - Arguments to update many StatutBiens.
     * @example
     * // Update many StatutBiens
     * const statutBien = await prisma.statutBien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StatutBiens and only return the `id`
     * const statutBienWithIdOnly = await prisma.statutBien.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatutBienUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StatutBienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StatutBien.
     * @param {StatutBienUpsertArgs} args - Arguments to update or create a StatutBien.
     * @example
     * // Update or create a StatutBien
     * const statutBien = await prisma.statutBien.upsert({
     *   create: {
     *     // ... data to create a StatutBien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatutBien we want to update
     *   }
     * })
     */
    upsert<T extends StatutBienUpsertArgs>(args: Prisma.SelectSubset<T, StatutBienUpsertArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StatutBiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutBienCountArgs} args - Arguments to filter StatutBiens to count.
     * @example
     * // Count the number of StatutBiens
     * const count = await prisma.statutBien.count({
     *   where: {
     *     // ... the filter for the StatutBiens we want to count
     *   }
     * })
    **/
    count<T extends StatutBienCountArgs>(args?: Prisma.Subset<T, StatutBienCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StatutBienCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StatutBien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutBienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatutBienAggregateArgs>(args: Prisma.Subset<T, StatutBienAggregateArgs>): Prisma.PrismaPromise<GetStatutBienAggregateType<T>>;
    /**
     * Group by StatutBien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutBienGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StatutBienGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StatutBienGroupByArgs['orderBy'];
    } : {
        orderBy?: StatutBienGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StatutBienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatutBienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StatutBien model
     */
    readonly fields: StatutBienFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StatutBien.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StatutBienClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the StatutBien model
 */
export interface StatutBienFieldRefs {
    readonly id: Prisma.FieldRef<"StatutBien", 'String'>;
    readonly nom: Prisma.FieldRef<"StatutBien", 'String'>;
    readonly slug: Prisma.FieldRef<"StatutBien", 'String'>;
    readonly actif: Prisma.FieldRef<"StatutBien", 'Boolean'>;
    readonly ordre: Prisma.FieldRef<"StatutBien", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"StatutBien", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StatutBien", 'DateTime'>;
}
/**
 * StatutBien findUnique
 */
export type StatutBienFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * Filter, which StatutBien to fetch.
     */
    where: Prisma.StatutBienWhereUniqueInput;
};
/**
 * StatutBien findUniqueOrThrow
 */
export type StatutBienFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * Filter, which StatutBien to fetch.
     */
    where: Prisma.StatutBienWhereUniqueInput;
};
/**
 * StatutBien findFirst
 */
export type StatutBienFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * Filter, which StatutBien to fetch.
     */
    where?: Prisma.StatutBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatutBiens to fetch.
     */
    orderBy?: Prisma.StatutBienOrderByWithRelationInput | Prisma.StatutBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StatutBiens.
     */
    cursor?: Prisma.StatutBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatutBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatutBiens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StatutBiens.
     */
    distinct?: Prisma.StatutBienScalarFieldEnum | Prisma.StatutBienScalarFieldEnum[];
};
/**
 * StatutBien findFirstOrThrow
 */
export type StatutBienFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * Filter, which StatutBien to fetch.
     */
    where?: Prisma.StatutBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatutBiens to fetch.
     */
    orderBy?: Prisma.StatutBienOrderByWithRelationInput | Prisma.StatutBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StatutBiens.
     */
    cursor?: Prisma.StatutBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatutBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatutBiens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StatutBiens.
     */
    distinct?: Prisma.StatutBienScalarFieldEnum | Prisma.StatutBienScalarFieldEnum[];
};
/**
 * StatutBien findMany
 */
export type StatutBienFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * Filter, which StatutBiens to fetch.
     */
    where?: Prisma.StatutBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatutBiens to fetch.
     */
    orderBy?: Prisma.StatutBienOrderByWithRelationInput | Prisma.StatutBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StatutBiens.
     */
    cursor?: Prisma.StatutBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatutBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatutBiens.
     */
    skip?: number;
    distinct?: Prisma.StatutBienScalarFieldEnum | Prisma.StatutBienScalarFieldEnum[];
};
/**
 * StatutBien create
 */
export type StatutBienCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * The data needed to create a StatutBien.
     */
    data: Prisma.XOR<Prisma.StatutBienCreateInput, Prisma.StatutBienUncheckedCreateInput>;
};
/**
 * StatutBien createMany
 */
export type StatutBienCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatutBiens.
     */
    data: Prisma.StatutBienCreateManyInput | Prisma.StatutBienCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StatutBien createManyAndReturn
 */
export type StatutBienCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * The data used to create many StatutBiens.
     */
    data: Prisma.StatutBienCreateManyInput | Prisma.StatutBienCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StatutBien update
 */
export type StatutBienUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * The data needed to update a StatutBien.
     */
    data: Prisma.XOR<Prisma.StatutBienUpdateInput, Prisma.StatutBienUncheckedUpdateInput>;
    /**
     * Choose, which StatutBien to update.
     */
    where: Prisma.StatutBienWhereUniqueInput;
};
/**
 * StatutBien updateMany
 */
export type StatutBienUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StatutBiens.
     */
    data: Prisma.XOR<Prisma.StatutBienUpdateManyMutationInput, Prisma.StatutBienUncheckedUpdateManyInput>;
    /**
     * Filter which StatutBiens to update
     */
    where?: Prisma.StatutBienWhereInput;
    /**
     * Limit how many StatutBiens to update.
     */
    limit?: number;
};
/**
 * StatutBien updateManyAndReturn
 */
export type StatutBienUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * The data used to update StatutBiens.
     */
    data: Prisma.XOR<Prisma.StatutBienUpdateManyMutationInput, Prisma.StatutBienUncheckedUpdateManyInput>;
    /**
     * Filter which StatutBiens to update
     */
    where?: Prisma.StatutBienWhereInput;
    /**
     * Limit how many StatutBiens to update.
     */
    limit?: number;
};
/**
 * StatutBien upsert
 */
export type StatutBienUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * The filter to search for the StatutBien to update in case it exists.
     */
    where: Prisma.StatutBienWhereUniqueInput;
    /**
     * In case the StatutBien found by the `where` argument doesn't exist, create a new StatutBien with this data.
     */
    create: Prisma.XOR<Prisma.StatutBienCreateInput, Prisma.StatutBienUncheckedCreateInput>;
    /**
     * In case the StatutBien was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StatutBienUpdateInput, Prisma.StatutBienUncheckedUpdateInput>;
};
/**
 * StatutBien delete
 */
export type StatutBienDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * Filter which StatutBien to delete.
     */
    where: Prisma.StatutBienWhereUniqueInput;
};
/**
 * StatutBien deleteMany
 */
export type StatutBienDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StatutBiens to delete
     */
    where?: Prisma.StatutBienWhereInput;
    /**
     * Limit how many StatutBiens to delete.
     */
    limit?: number;
};
/**
 * StatutBien without action
 */
export type StatutBienDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=StatutBien.d.ts.map