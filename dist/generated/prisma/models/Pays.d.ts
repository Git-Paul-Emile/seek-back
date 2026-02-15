import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Pays
 *
 */
export type PaysModel = runtime.Types.Result.DefaultSelection<Prisma.$PaysPayload>;
export type AggregatePays = {
    _count: PaysCountAggregateOutputType | null;
    _min: PaysMinAggregateOutputType | null;
    _max: PaysMaxAggregateOutputType | null;
};
export type PaysMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    code: string | null;
    date_creation: Date | null;
    date_modification: Date | null;
};
export type PaysMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    code: string | null;
    date_creation: Date | null;
    date_modification: Date | null;
};
export type PaysCountAggregateOutputType = {
    id: number;
    nom: number;
    code: number;
    date_creation: number;
    date_modification: number;
    _all: number;
};
export type PaysMinAggregateInputType = {
    id?: true;
    nom?: true;
    code?: true;
    date_creation?: true;
    date_modification?: true;
};
export type PaysMaxAggregateInputType = {
    id?: true;
    nom?: true;
    code?: true;
    date_creation?: true;
    date_modification?: true;
};
export type PaysCountAggregateInputType = {
    id?: true;
    nom?: true;
    code?: true;
    date_creation?: true;
    date_modification?: true;
    _all?: true;
};
export type PaysAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pays to aggregate.
     */
    where?: Prisma.PaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pays to fetch.
     */
    orderBy?: Prisma.PaysOrderByWithRelationInput | Prisma.PaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pays
    **/
    _count?: true | PaysCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PaysMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PaysMaxAggregateInputType;
};
export type GetPaysAggregateType<T extends PaysAggregateArgs> = {
    [P in keyof T & keyof AggregatePays]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePays[P]> : Prisma.GetScalarType<T[P], AggregatePays[P]>;
};
export type PaysGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaysWhereInput;
    orderBy?: Prisma.PaysOrderByWithAggregationInput | Prisma.PaysOrderByWithAggregationInput[];
    by: Prisma.PaysScalarFieldEnum[] | Prisma.PaysScalarFieldEnum;
    having?: Prisma.PaysScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaysCountAggregateInputType | true;
    _min?: PaysMinAggregateInputType;
    _max?: PaysMaxAggregateInputType;
};
export type PaysGroupByOutputType = {
    id: string;
    nom: string;
    code: string | null;
    date_creation: Date;
    date_modification: Date;
    _count: PaysCountAggregateOutputType | null;
    _min: PaysMinAggregateOutputType | null;
    _max: PaysMaxAggregateOutputType | null;
};
type GetPaysGroupByPayload<T extends PaysGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaysGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaysGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaysGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaysGroupByOutputType[P]>;
}>>;
export type PaysWhereInput = {
    AND?: Prisma.PaysWhereInput | Prisma.PaysWhereInput[];
    OR?: Prisma.PaysWhereInput[];
    NOT?: Prisma.PaysWhereInput | Prisma.PaysWhereInput[];
    id?: Prisma.StringFilter<"Pays"> | string;
    nom?: Prisma.StringFilter<"Pays"> | string;
    code?: Prisma.StringNullableFilter<"Pays"> | string | null;
    date_creation?: Prisma.DateTimeFilter<"Pays"> | Date | string;
    date_modification?: Prisma.DateTimeFilter<"Pays"> | Date | string;
    villes?: Prisma.VilleListRelationFilter;
};
export type PaysOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
    villes?: Prisma.VilleOrderByRelationAggregateInput;
};
export type PaysWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    code?: string;
    AND?: Prisma.PaysWhereInput | Prisma.PaysWhereInput[];
    OR?: Prisma.PaysWhereInput[];
    NOT?: Prisma.PaysWhereInput | Prisma.PaysWhereInput[];
    date_creation?: Prisma.DateTimeFilter<"Pays"> | Date | string;
    date_modification?: Prisma.DateTimeFilter<"Pays"> | Date | string;
    villes?: Prisma.VilleListRelationFilter;
}, "id" | "nom" | "code">;
export type PaysOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
    _count?: Prisma.PaysCountOrderByAggregateInput;
    _max?: Prisma.PaysMaxOrderByAggregateInput;
    _min?: Prisma.PaysMinOrderByAggregateInput;
};
export type PaysScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaysScalarWhereWithAggregatesInput | Prisma.PaysScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaysScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaysScalarWhereWithAggregatesInput | Prisma.PaysScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Pays"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Pays"> | string;
    code?: Prisma.StringNullableWithAggregatesFilter<"Pays"> | string | null;
    date_creation?: Prisma.DateTimeWithAggregatesFilter<"Pays"> | Date | string;
    date_modification?: Prisma.DateTimeWithAggregatesFilter<"Pays"> | Date | string;
};
export type PaysCreateInput = {
    id?: string;
    nom: string;
    code?: string | null;
    date_creation?: Date | string;
    date_modification?: Date | string;
    villes?: Prisma.VilleCreateNestedManyWithoutPaysInput;
};
export type PaysUncheckedCreateInput = {
    id?: string;
    nom: string;
    code?: string | null;
    date_creation?: Date | string;
    date_modification?: Date | string;
    villes?: Prisma.VilleUncheckedCreateNestedManyWithoutPaysInput;
};
export type PaysUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    villes?: Prisma.VilleUpdateManyWithoutPaysNestedInput;
};
export type PaysUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    villes?: Prisma.VilleUncheckedUpdateManyWithoutPaysNestedInput;
};
export type PaysCreateManyInput = {
    id?: string;
    nom: string;
    code?: string | null;
    date_creation?: Date | string;
    date_modification?: Date | string;
};
export type PaysUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaysUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaysCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
};
export type PaysMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
};
export type PaysMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
};
export type PaysScalarRelationFilter = {
    is?: Prisma.PaysWhereInput;
    isNot?: Prisma.PaysWhereInput;
};
export type PaysCreateNestedOneWithoutVillesInput = {
    create?: Prisma.XOR<Prisma.PaysCreateWithoutVillesInput, Prisma.PaysUncheckedCreateWithoutVillesInput>;
    connectOrCreate?: Prisma.PaysCreateOrConnectWithoutVillesInput;
    connect?: Prisma.PaysWhereUniqueInput;
};
export type PaysUpdateOneRequiredWithoutVillesNestedInput = {
    create?: Prisma.XOR<Prisma.PaysCreateWithoutVillesInput, Prisma.PaysUncheckedCreateWithoutVillesInput>;
    connectOrCreate?: Prisma.PaysCreateOrConnectWithoutVillesInput;
    upsert?: Prisma.PaysUpsertWithoutVillesInput;
    connect?: Prisma.PaysWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaysUpdateToOneWithWhereWithoutVillesInput, Prisma.PaysUpdateWithoutVillesInput>, Prisma.PaysUncheckedUpdateWithoutVillesInput>;
};
export type PaysCreateWithoutVillesInput = {
    id?: string;
    nom: string;
    code?: string | null;
    date_creation?: Date | string;
    date_modification?: Date | string;
};
export type PaysUncheckedCreateWithoutVillesInput = {
    id?: string;
    nom: string;
    code?: string | null;
    date_creation?: Date | string;
    date_modification?: Date | string;
};
export type PaysCreateOrConnectWithoutVillesInput = {
    where: Prisma.PaysWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaysCreateWithoutVillesInput, Prisma.PaysUncheckedCreateWithoutVillesInput>;
};
export type PaysUpsertWithoutVillesInput = {
    update: Prisma.XOR<Prisma.PaysUpdateWithoutVillesInput, Prisma.PaysUncheckedUpdateWithoutVillesInput>;
    create: Prisma.XOR<Prisma.PaysCreateWithoutVillesInput, Prisma.PaysUncheckedCreateWithoutVillesInput>;
    where?: Prisma.PaysWhereInput;
};
export type PaysUpdateToOneWithWhereWithoutVillesInput = {
    where?: Prisma.PaysWhereInput;
    data: Prisma.XOR<Prisma.PaysUpdateWithoutVillesInput, Prisma.PaysUncheckedUpdateWithoutVillesInput>;
};
export type PaysUpdateWithoutVillesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaysUncheckedUpdateWithoutVillesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PaysCountOutputType
 */
export type PaysCountOutputType = {
    villes: number;
};
export type PaysCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    villes?: boolean | PaysCountOutputTypeCountVillesArgs;
};
/**
 * PaysCountOutputType without action
 */
export type PaysCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaysCountOutputType
     */
    select?: Prisma.PaysCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PaysCountOutputType without action
 */
export type PaysCountOutputTypeCountVillesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VilleWhereInput;
};
export type PaysSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    code?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
    villes?: boolean | Prisma.Pays$villesArgs<ExtArgs>;
    _count?: boolean | Prisma.PaysCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pays"]>;
export type PaysSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    code?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
}, ExtArgs["result"]["pays"]>;
export type PaysSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    code?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
}, ExtArgs["result"]["pays"]>;
export type PaysSelectScalar = {
    id?: boolean;
    nom?: boolean;
    code?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
};
export type PaysOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "code" | "date_creation" | "date_modification", ExtArgs["result"]["pays"]>;
export type PaysInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    villes?: boolean | Prisma.Pays$villesArgs<ExtArgs>;
    _count?: boolean | Prisma.PaysCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PaysIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PaysIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PaysPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pays";
    objects: {
        villes: Prisma.$VillePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        code: string | null;
        date_creation: Date;
        date_modification: Date;
    }, ExtArgs["result"]["pays"]>;
    composites: {};
};
export type PaysGetPayload<S extends boolean | null | undefined | PaysDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaysPayload, S>;
export type PaysCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaysCountAggregateInputType | true;
};
export interface PaysDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pays'];
        meta: {
            name: 'Pays';
        };
    };
    /**
     * Find zero or one Pays that matches the filter.
     * @param {PaysFindUniqueArgs} args - Arguments to find a Pays
     * @example
     * // Get one Pays
     * const pays = await prisma.pays.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaysFindUniqueArgs>(args: Prisma.SelectSubset<T, PaysFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pays that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaysFindUniqueOrThrowArgs} args - Arguments to find a Pays
     * @example
     * // Get one Pays
     * const pays = await prisma.pays.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaysFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaysFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaysFindFirstArgs} args - Arguments to find a Pays
     * @example
     * // Get one Pays
     * const pays = await prisma.pays.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaysFindFirstArgs>(args?: Prisma.SelectSubset<T, PaysFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pays that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaysFindFirstOrThrowArgs} args - Arguments to find a Pays
     * @example
     * // Get one Pays
     * const pays = await prisma.pays.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaysFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaysFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pays
     * const pays = await prisma.pays.findMany()
     *
     * // Get first 10 Pays
     * const pays = await prisma.pays.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paysWithIdOnly = await prisma.pays.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaysFindManyArgs>(args?: Prisma.SelectSubset<T, PaysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pays.
     * @param {PaysCreateArgs} args - Arguments to create a Pays.
     * @example
     * // Create one Pays
     * const Pays = await prisma.pays.create({
     *   data: {
     *     // ... data to create a Pays
     *   }
     * })
     *
     */
    create<T extends PaysCreateArgs>(args: Prisma.SelectSubset<T, PaysCreateArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pays.
     * @param {PaysCreateManyArgs} args - Arguments to create many Pays.
     * @example
     * // Create many Pays
     * const pays = await prisma.pays.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaysCreateManyArgs>(args?: Prisma.SelectSubset<T, PaysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pays and returns the data saved in the database.
     * @param {PaysCreateManyAndReturnArgs} args - Arguments to create many Pays.
     * @example
     * // Create many Pays
     * const pays = await prisma.pays.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pays and only return the `id`
     * const paysWithIdOnly = await prisma.pays.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaysCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pays.
     * @param {PaysDeleteArgs} args - Arguments to delete one Pays.
     * @example
     * // Delete one Pays
     * const Pays = await prisma.pays.delete({
     *   where: {
     *     // ... filter to delete one Pays
     *   }
     * })
     *
     */
    delete<T extends PaysDeleteArgs>(args: Prisma.SelectSubset<T, PaysDeleteArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pays.
     * @param {PaysUpdateArgs} args - Arguments to update one Pays.
     * @example
     * // Update one Pays
     * const pays = await prisma.pays.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaysUpdateArgs>(args: Prisma.SelectSubset<T, PaysUpdateArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pays.
     * @param {PaysDeleteManyArgs} args - Arguments to filter Pays to delete.
     * @example
     * // Delete a few Pays
     * const { count } = await prisma.pays.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaysDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pays
     * const pays = await prisma.pays.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaysUpdateManyArgs>(args: Prisma.SelectSubset<T, PaysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pays and returns the data updated in the database.
     * @param {PaysUpdateManyAndReturnArgs} args - Arguments to update many Pays.
     * @example
     * // Update many Pays
     * const pays = await prisma.pays.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pays and only return the `id`
     * const paysWithIdOnly = await prisma.pays.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaysUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pays.
     * @param {PaysUpsertArgs} args - Arguments to update or create a Pays.
     * @example
     * // Update or create a Pays
     * const pays = await prisma.pays.upsert({
     *   create: {
     *     // ... data to create a Pays
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pays we want to update
     *   }
     * })
     */
    upsert<T extends PaysUpsertArgs>(args: Prisma.SelectSubset<T, PaysUpsertArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaysCountArgs} args - Arguments to filter Pays to count.
     * @example
     * // Count the number of Pays
     * const count = await prisma.pays.count({
     *   where: {
     *     // ... the filter for the Pays we want to count
     *   }
     * })
    **/
    count<T extends PaysCountArgs>(args?: Prisma.Subset<T, PaysCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaysCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaysAggregateArgs>(args: Prisma.Subset<T, PaysAggregateArgs>): Prisma.PrismaPromise<GetPaysAggregateType<T>>;
    /**
     * Group by Pays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaysGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PaysGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaysGroupByArgs['orderBy'];
    } : {
        orderBy?: PaysGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Pays model
     */
    readonly fields: PaysFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Pays.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PaysClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    villes<T extends Prisma.Pays$villesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pays$villesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Pays model
 */
export interface PaysFieldRefs {
    readonly id: Prisma.FieldRef<"Pays", 'String'>;
    readonly nom: Prisma.FieldRef<"Pays", 'String'>;
    readonly code: Prisma.FieldRef<"Pays", 'String'>;
    readonly date_creation: Prisma.FieldRef<"Pays", 'DateTime'>;
    readonly date_modification: Prisma.FieldRef<"Pays", 'DateTime'>;
}
/**
 * Pays findUnique
 */
export type PaysFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * Filter, which Pays to fetch.
     */
    where: Prisma.PaysWhereUniqueInput;
};
/**
 * Pays findUniqueOrThrow
 */
export type PaysFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * Filter, which Pays to fetch.
     */
    where: Prisma.PaysWhereUniqueInput;
};
/**
 * Pays findFirst
 */
export type PaysFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * Filter, which Pays to fetch.
     */
    where?: Prisma.PaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pays to fetch.
     */
    orderBy?: Prisma.PaysOrderByWithRelationInput | Prisma.PaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pays.
     */
    cursor?: Prisma.PaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pays.
     */
    distinct?: Prisma.PaysScalarFieldEnum | Prisma.PaysScalarFieldEnum[];
};
/**
 * Pays findFirstOrThrow
 */
export type PaysFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * Filter, which Pays to fetch.
     */
    where?: Prisma.PaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pays to fetch.
     */
    orderBy?: Prisma.PaysOrderByWithRelationInput | Prisma.PaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pays.
     */
    cursor?: Prisma.PaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pays.
     */
    distinct?: Prisma.PaysScalarFieldEnum | Prisma.PaysScalarFieldEnum[];
};
/**
 * Pays findMany
 */
export type PaysFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * Filter, which Pays to fetch.
     */
    where?: Prisma.PaysWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pays to fetch.
     */
    orderBy?: Prisma.PaysOrderByWithRelationInput | Prisma.PaysOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pays.
     */
    cursor?: Prisma.PaysWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pays.
     */
    skip?: number;
    distinct?: Prisma.PaysScalarFieldEnum | Prisma.PaysScalarFieldEnum[];
};
/**
 * Pays create
 */
export type PaysCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * The data needed to create a Pays.
     */
    data: Prisma.XOR<Prisma.PaysCreateInput, Prisma.PaysUncheckedCreateInput>;
};
/**
 * Pays createMany
 */
export type PaysCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pays.
     */
    data: Prisma.PaysCreateManyInput | Prisma.PaysCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pays createManyAndReturn
 */
export type PaysCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * The data used to create many Pays.
     */
    data: Prisma.PaysCreateManyInput | Prisma.PaysCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pays update
 */
export type PaysUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * The data needed to update a Pays.
     */
    data: Prisma.XOR<Prisma.PaysUpdateInput, Prisma.PaysUncheckedUpdateInput>;
    /**
     * Choose, which Pays to update.
     */
    where: Prisma.PaysWhereUniqueInput;
};
/**
 * Pays updateMany
 */
export type PaysUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Pays.
     */
    data: Prisma.XOR<Prisma.PaysUpdateManyMutationInput, Prisma.PaysUncheckedUpdateManyInput>;
    /**
     * Filter which Pays to update
     */
    where?: Prisma.PaysWhereInput;
    /**
     * Limit how many Pays to update.
     */
    limit?: number;
};
/**
 * Pays updateManyAndReturn
 */
export type PaysUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * The data used to update Pays.
     */
    data: Prisma.XOR<Prisma.PaysUpdateManyMutationInput, Prisma.PaysUncheckedUpdateManyInput>;
    /**
     * Filter which Pays to update
     */
    where?: Prisma.PaysWhereInput;
    /**
     * Limit how many Pays to update.
     */
    limit?: number;
};
/**
 * Pays upsert
 */
export type PaysUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * The filter to search for the Pays to update in case it exists.
     */
    where: Prisma.PaysWhereUniqueInput;
    /**
     * In case the Pays found by the `where` argument doesn't exist, create a new Pays with this data.
     */
    create: Prisma.XOR<Prisma.PaysCreateInput, Prisma.PaysUncheckedCreateInput>;
    /**
     * In case the Pays was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PaysUpdateInput, Prisma.PaysUncheckedUpdateInput>;
};
/**
 * Pays delete
 */
export type PaysDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
    /**
     * Filter which Pays to delete.
     */
    where: Prisma.PaysWhereUniqueInput;
};
/**
 * Pays deleteMany
 */
export type PaysDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pays to delete
     */
    where?: Prisma.PaysWhereInput;
    /**
     * Limit how many Pays to delete.
     */
    limit?: number;
};
/**
 * Pays.villes
 */
export type Pays$villesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: Prisma.VilleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ville
     */
    omit?: Prisma.VilleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VilleInclude<ExtArgs> | null;
    where?: Prisma.VilleWhereInput;
    orderBy?: Prisma.VilleOrderByWithRelationInput | Prisma.VilleOrderByWithRelationInput[];
    cursor?: Prisma.VilleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VilleScalarFieldEnum | Prisma.VilleScalarFieldEnum[];
};
/**
 * Pays without action
 */
export type PaysDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pays
     */
    select?: Prisma.PaysSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pays
     */
    omit?: Prisma.PaysOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaysInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Pays.d.ts.map