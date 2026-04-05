import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ConfigMonetisation
 *
 */
export type ConfigMonetisationModel = runtime.Types.Result.DefaultSelection<Prisma.$ConfigMonetisationPayload>;
export type AggregateConfigMonetisation = {
    _count: ConfigMonetisationCountAggregateOutputType | null;
    _avg: ConfigMonetisationAvgAggregateOutputType | null;
    _sum: ConfigMonetisationSumAggregateOutputType | null;
    _min: ConfigMonetisationMinAggregateOutputType | null;
    _max: ConfigMonetisationMaxAggregateOutputType | null;
};
export type ConfigMonetisationAvgAggregateOutputType = {
    tauxCommission: number | null;
};
export type ConfigMonetisationSumAggregateOutputType = {
    tauxCommission: number | null;
};
export type ConfigMonetisationMinAggregateOutputType = {
    id: string | null;
    miseEnAvantActive: boolean | null;
    commissionActive: boolean | null;
    tauxCommission: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConfigMonetisationMaxAggregateOutputType = {
    id: string | null;
    miseEnAvantActive: boolean | null;
    commissionActive: boolean | null;
    tauxCommission: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConfigMonetisationCountAggregateOutputType = {
    id: number;
    miseEnAvantActive: number;
    commissionActive: number;
    tauxCommission: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ConfigMonetisationAvgAggregateInputType = {
    tauxCommission?: true;
};
export type ConfigMonetisationSumAggregateInputType = {
    tauxCommission?: true;
};
export type ConfigMonetisationMinAggregateInputType = {
    id?: true;
    miseEnAvantActive?: true;
    commissionActive?: true;
    tauxCommission?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConfigMonetisationMaxAggregateInputType = {
    id?: true;
    miseEnAvantActive?: true;
    commissionActive?: true;
    tauxCommission?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConfigMonetisationCountAggregateInputType = {
    id?: true;
    miseEnAvantActive?: true;
    commissionActive?: true;
    tauxCommission?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConfigMonetisationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigMonetisation to aggregate.
     */
    where?: Prisma.ConfigMonetisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigMonetisations to fetch.
     */
    orderBy?: Prisma.ConfigMonetisationOrderByWithRelationInput | Prisma.ConfigMonetisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConfigMonetisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigMonetisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigMonetisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ConfigMonetisations
    **/
    _count?: true | ConfigMonetisationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ConfigMonetisationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ConfigMonetisationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMonetisationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMonetisationMaxAggregateInputType;
};
export type GetConfigMonetisationAggregateType<T extends ConfigMonetisationAggregateArgs> = {
    [P in keyof T & keyof AggregateConfigMonetisation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConfigMonetisation[P]> : Prisma.GetScalarType<T[P], AggregateConfigMonetisation[P]>;
};
export type ConfigMonetisationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigMonetisationWhereInput;
    orderBy?: Prisma.ConfigMonetisationOrderByWithAggregationInput | Prisma.ConfigMonetisationOrderByWithAggregationInput[];
    by: Prisma.ConfigMonetisationScalarFieldEnum[] | Prisma.ConfigMonetisationScalarFieldEnum;
    having?: Prisma.ConfigMonetisationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConfigMonetisationCountAggregateInputType | true;
    _avg?: ConfigMonetisationAvgAggregateInputType;
    _sum?: ConfigMonetisationSumAggregateInputType;
    _min?: ConfigMonetisationMinAggregateInputType;
    _max?: ConfigMonetisationMaxAggregateInputType;
};
export type ConfigMonetisationGroupByOutputType = {
    id: string;
    miseEnAvantActive: boolean;
    commissionActive: boolean;
    tauxCommission: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ConfigMonetisationCountAggregateOutputType | null;
    _avg: ConfigMonetisationAvgAggregateOutputType | null;
    _sum: ConfigMonetisationSumAggregateOutputType | null;
    _min: ConfigMonetisationMinAggregateOutputType | null;
    _max: ConfigMonetisationMaxAggregateOutputType | null;
};
type GetConfigMonetisationGroupByPayload<T extends ConfigMonetisationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConfigMonetisationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConfigMonetisationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConfigMonetisationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConfigMonetisationGroupByOutputType[P]>;
}>>;
export type ConfigMonetisationWhereInput = {
    AND?: Prisma.ConfigMonetisationWhereInput | Prisma.ConfigMonetisationWhereInput[];
    OR?: Prisma.ConfigMonetisationWhereInput[];
    NOT?: Prisma.ConfigMonetisationWhereInput | Prisma.ConfigMonetisationWhereInput[];
    id?: Prisma.StringFilter<"ConfigMonetisation"> | string;
    miseEnAvantActive?: Prisma.BoolFilter<"ConfigMonetisation"> | boolean;
    commissionActive?: Prisma.BoolFilter<"ConfigMonetisation"> | boolean;
    tauxCommission?: Prisma.FloatFilter<"ConfigMonetisation"> | number;
    createdAt?: Prisma.DateTimeFilter<"ConfigMonetisation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ConfigMonetisation"> | Date | string;
};
export type ConfigMonetisationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    miseEnAvantActive?: Prisma.SortOrder;
    commissionActive?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigMonetisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConfigMonetisationWhereInput | Prisma.ConfigMonetisationWhereInput[];
    OR?: Prisma.ConfigMonetisationWhereInput[];
    NOT?: Prisma.ConfigMonetisationWhereInput | Prisma.ConfigMonetisationWhereInput[];
    miseEnAvantActive?: Prisma.BoolFilter<"ConfigMonetisation"> | boolean;
    commissionActive?: Prisma.BoolFilter<"ConfigMonetisation"> | boolean;
    tauxCommission?: Prisma.FloatFilter<"ConfigMonetisation"> | number;
    createdAt?: Prisma.DateTimeFilter<"ConfigMonetisation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ConfigMonetisation"> | Date | string;
}, "id">;
export type ConfigMonetisationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    miseEnAvantActive?: Prisma.SortOrder;
    commissionActive?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConfigMonetisationCountOrderByAggregateInput;
    _avg?: Prisma.ConfigMonetisationAvgOrderByAggregateInput;
    _max?: Prisma.ConfigMonetisationMaxOrderByAggregateInput;
    _min?: Prisma.ConfigMonetisationMinOrderByAggregateInput;
    _sum?: Prisma.ConfigMonetisationSumOrderByAggregateInput;
};
export type ConfigMonetisationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConfigMonetisationScalarWhereWithAggregatesInput | Prisma.ConfigMonetisationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConfigMonetisationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConfigMonetisationScalarWhereWithAggregatesInput | Prisma.ConfigMonetisationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ConfigMonetisation"> | string;
    miseEnAvantActive?: Prisma.BoolWithAggregatesFilter<"ConfigMonetisation"> | boolean;
    commissionActive?: Prisma.BoolWithAggregatesFilter<"ConfigMonetisation"> | boolean;
    tauxCommission?: Prisma.FloatWithAggregatesFilter<"ConfigMonetisation"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ConfigMonetisation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ConfigMonetisation"> | Date | string;
};
export type ConfigMonetisationCreateInput = {
    id?: string;
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConfigMonetisationUncheckedCreateInput = {
    id?: string;
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConfigMonetisationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    miseEnAvantActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    commissionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tauxCommission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigMonetisationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    miseEnAvantActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    commissionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tauxCommission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigMonetisationCreateManyInput = {
    id?: string;
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConfigMonetisationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    miseEnAvantActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    commissionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tauxCommission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigMonetisationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    miseEnAvantActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    commissionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tauxCommission?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigMonetisationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    miseEnAvantActive?: Prisma.SortOrder;
    commissionActive?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigMonetisationAvgOrderByAggregateInput = {
    tauxCommission?: Prisma.SortOrder;
};
export type ConfigMonetisationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    miseEnAvantActive?: Prisma.SortOrder;
    commissionActive?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigMonetisationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    miseEnAvantActive?: Prisma.SortOrder;
    commissionActive?: Prisma.SortOrder;
    tauxCommission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigMonetisationSumOrderByAggregateInput = {
    tauxCommission?: Prisma.SortOrder;
};
export type ConfigMonetisationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configMonetisation"]>;
export type ConfigMonetisationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configMonetisation"]>;
export type ConfigMonetisationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configMonetisation"]>;
export type ConfigMonetisationSelectScalar = {
    id?: boolean;
    miseEnAvantActive?: boolean;
    commissionActive?: boolean;
    tauxCommission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ConfigMonetisationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "miseEnAvantActive" | "commissionActive" | "tauxCommission" | "createdAt" | "updatedAt", ExtArgs["result"]["configMonetisation"]>;
export type $ConfigMonetisationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConfigMonetisation";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        miseEnAvantActive: boolean;
        commissionActive: boolean;
        tauxCommission: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["configMonetisation"]>;
    composites: {};
};
export type ConfigMonetisationGetPayload<S extends boolean | null | undefined | ConfigMonetisationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload, S>;
export type ConfigMonetisationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConfigMonetisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConfigMonetisationCountAggregateInputType | true;
};
export interface ConfigMonetisationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConfigMonetisation'];
        meta: {
            name: 'ConfigMonetisation';
        };
    };
    /**
     * Find zero or one ConfigMonetisation that matches the filter.
     * @param {ConfigMonetisationFindUniqueArgs} args - Arguments to find a ConfigMonetisation
     * @example
     * // Get one ConfigMonetisation
     * const configMonetisation = await prisma.configMonetisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigMonetisationFindUniqueArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ConfigMonetisation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigMonetisationFindUniqueOrThrowArgs} args - Arguments to find a ConfigMonetisation
     * @example
     * // Get one ConfigMonetisation
     * const configMonetisation = await prisma.configMonetisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigMonetisationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConfigMonetisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigMonetisationFindFirstArgs} args - Arguments to find a ConfigMonetisation
     * @example
     * // Get one ConfigMonetisation
     * const configMonetisation = await prisma.configMonetisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigMonetisationFindFirstArgs>(args?: Prisma.SelectSubset<T, ConfigMonetisationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConfigMonetisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigMonetisationFindFirstOrThrowArgs} args - Arguments to find a ConfigMonetisation
     * @example
     * // Get one ConfigMonetisation
     * const configMonetisation = await prisma.configMonetisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigMonetisationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConfigMonetisationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ConfigMonetisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigMonetisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfigMonetisations
     * const configMonetisations = await prisma.configMonetisation.findMany()
     *
     * // Get first 10 ConfigMonetisations
     * const configMonetisations = await prisma.configMonetisation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const configMonetisationWithIdOnly = await prisma.configMonetisation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ConfigMonetisationFindManyArgs>(args?: Prisma.SelectSubset<T, ConfigMonetisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ConfigMonetisation.
     * @param {ConfigMonetisationCreateArgs} args - Arguments to create a ConfigMonetisation.
     * @example
     * // Create one ConfigMonetisation
     * const ConfigMonetisation = await prisma.configMonetisation.create({
     *   data: {
     *     // ... data to create a ConfigMonetisation
     *   }
     * })
     *
     */
    create<T extends ConfigMonetisationCreateArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationCreateArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ConfigMonetisations.
     * @param {ConfigMonetisationCreateManyArgs} args - Arguments to create many ConfigMonetisations.
     * @example
     * // Create many ConfigMonetisations
     * const configMonetisation = await prisma.configMonetisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConfigMonetisationCreateManyArgs>(args?: Prisma.SelectSubset<T, ConfigMonetisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ConfigMonetisations and returns the data saved in the database.
     * @param {ConfigMonetisationCreateManyAndReturnArgs} args - Arguments to create many ConfigMonetisations.
     * @example
     * // Create many ConfigMonetisations
     * const configMonetisation = await prisma.configMonetisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ConfigMonetisations and only return the `id`
     * const configMonetisationWithIdOnly = await prisma.configMonetisation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConfigMonetisationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConfigMonetisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ConfigMonetisation.
     * @param {ConfigMonetisationDeleteArgs} args - Arguments to delete one ConfigMonetisation.
     * @example
     * // Delete one ConfigMonetisation
     * const ConfigMonetisation = await prisma.configMonetisation.delete({
     *   where: {
     *     // ... filter to delete one ConfigMonetisation
     *   }
     * })
     *
     */
    delete<T extends ConfigMonetisationDeleteArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationDeleteArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ConfigMonetisation.
     * @param {ConfigMonetisationUpdateArgs} args - Arguments to update one ConfigMonetisation.
     * @example
     * // Update one ConfigMonetisation
     * const configMonetisation = await prisma.configMonetisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConfigMonetisationUpdateArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationUpdateArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ConfigMonetisations.
     * @param {ConfigMonetisationDeleteManyArgs} args - Arguments to filter ConfigMonetisations to delete.
     * @example
     * // Delete a few ConfigMonetisations
     * const { count } = await prisma.configMonetisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConfigMonetisationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConfigMonetisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConfigMonetisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigMonetisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfigMonetisations
     * const configMonetisation = await prisma.configMonetisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConfigMonetisationUpdateManyArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConfigMonetisations and returns the data updated in the database.
     * @param {ConfigMonetisationUpdateManyAndReturnArgs} args - Arguments to update many ConfigMonetisations.
     * @example
     * // Update many ConfigMonetisations
     * const configMonetisation = await prisma.configMonetisation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ConfigMonetisations and only return the `id`
     * const configMonetisationWithIdOnly = await prisma.configMonetisation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfigMonetisationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ConfigMonetisation.
     * @param {ConfigMonetisationUpsertArgs} args - Arguments to update or create a ConfigMonetisation.
     * @example
     * // Update or create a ConfigMonetisation
     * const configMonetisation = await prisma.configMonetisation.upsert({
     *   create: {
     *     // ... data to create a ConfigMonetisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfigMonetisation we want to update
     *   }
     * })
     */
    upsert<T extends ConfigMonetisationUpsertArgs>(args: Prisma.SelectSubset<T, ConfigMonetisationUpsertArgs<ExtArgs>>): Prisma.Prisma__ConfigMonetisationClient<runtime.Types.Result.GetResult<Prisma.$ConfigMonetisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ConfigMonetisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigMonetisationCountArgs} args - Arguments to filter ConfigMonetisations to count.
     * @example
     * // Count the number of ConfigMonetisations
     * const count = await prisma.configMonetisation.count({
     *   where: {
     *     // ... the filter for the ConfigMonetisations we want to count
     *   }
     * })
    **/
    count<T extends ConfigMonetisationCountArgs>(args?: Prisma.Subset<T, ConfigMonetisationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConfigMonetisationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ConfigMonetisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigMonetisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigMonetisationAggregateArgs>(args: Prisma.Subset<T, ConfigMonetisationAggregateArgs>): Prisma.PrismaPromise<GetConfigMonetisationAggregateType<T>>;
    /**
     * Group by ConfigMonetisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigMonetisationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ConfigMonetisationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConfigMonetisationGroupByArgs['orderBy'];
    } : {
        orderBy?: ConfigMonetisationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConfigMonetisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigMonetisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ConfigMonetisation model
     */
    readonly fields: ConfigMonetisationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ConfigMonetisation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConfigMonetisationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ConfigMonetisation model
 */
export interface ConfigMonetisationFieldRefs {
    readonly id: Prisma.FieldRef<"ConfigMonetisation", 'String'>;
    readonly miseEnAvantActive: Prisma.FieldRef<"ConfigMonetisation", 'Boolean'>;
    readonly commissionActive: Prisma.FieldRef<"ConfigMonetisation", 'Boolean'>;
    readonly tauxCommission: Prisma.FieldRef<"ConfigMonetisation", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"ConfigMonetisation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ConfigMonetisation", 'DateTime'>;
}
/**
 * ConfigMonetisation findUnique
 */
export type ConfigMonetisationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigMonetisation to fetch.
     */
    where: Prisma.ConfigMonetisationWhereUniqueInput;
};
/**
 * ConfigMonetisation findUniqueOrThrow
 */
export type ConfigMonetisationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigMonetisation to fetch.
     */
    where: Prisma.ConfigMonetisationWhereUniqueInput;
};
/**
 * ConfigMonetisation findFirst
 */
export type ConfigMonetisationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigMonetisation to fetch.
     */
    where?: Prisma.ConfigMonetisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigMonetisations to fetch.
     */
    orderBy?: Prisma.ConfigMonetisationOrderByWithRelationInput | Prisma.ConfigMonetisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConfigMonetisations.
     */
    cursor?: Prisma.ConfigMonetisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigMonetisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigMonetisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConfigMonetisations.
     */
    distinct?: Prisma.ConfigMonetisationScalarFieldEnum | Prisma.ConfigMonetisationScalarFieldEnum[];
};
/**
 * ConfigMonetisation findFirstOrThrow
 */
export type ConfigMonetisationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigMonetisation to fetch.
     */
    where?: Prisma.ConfigMonetisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigMonetisations to fetch.
     */
    orderBy?: Prisma.ConfigMonetisationOrderByWithRelationInput | Prisma.ConfigMonetisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConfigMonetisations.
     */
    cursor?: Prisma.ConfigMonetisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigMonetisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigMonetisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConfigMonetisations.
     */
    distinct?: Prisma.ConfigMonetisationScalarFieldEnum | Prisma.ConfigMonetisationScalarFieldEnum[];
};
/**
 * ConfigMonetisation findMany
 */
export type ConfigMonetisationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigMonetisations to fetch.
     */
    where?: Prisma.ConfigMonetisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigMonetisations to fetch.
     */
    orderBy?: Prisma.ConfigMonetisationOrderByWithRelationInput | Prisma.ConfigMonetisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ConfigMonetisations.
     */
    cursor?: Prisma.ConfigMonetisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigMonetisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigMonetisations.
     */
    skip?: number;
    distinct?: Prisma.ConfigMonetisationScalarFieldEnum | Prisma.ConfigMonetisationScalarFieldEnum[];
};
/**
 * ConfigMonetisation create
 */
export type ConfigMonetisationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * The data needed to create a ConfigMonetisation.
     */
    data: Prisma.XOR<Prisma.ConfigMonetisationCreateInput, Prisma.ConfigMonetisationUncheckedCreateInput>;
};
/**
 * ConfigMonetisation createMany
 */
export type ConfigMonetisationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfigMonetisations.
     */
    data: Prisma.ConfigMonetisationCreateManyInput | Prisma.ConfigMonetisationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ConfigMonetisation createManyAndReturn
 */
export type ConfigMonetisationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * The data used to create many ConfigMonetisations.
     */
    data: Prisma.ConfigMonetisationCreateManyInput | Prisma.ConfigMonetisationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ConfigMonetisation update
 */
export type ConfigMonetisationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * The data needed to update a ConfigMonetisation.
     */
    data: Prisma.XOR<Prisma.ConfigMonetisationUpdateInput, Prisma.ConfigMonetisationUncheckedUpdateInput>;
    /**
     * Choose, which ConfigMonetisation to update.
     */
    where: Prisma.ConfigMonetisationWhereUniqueInput;
};
/**
 * ConfigMonetisation updateMany
 */
export type ConfigMonetisationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfigMonetisations.
     */
    data: Prisma.XOR<Prisma.ConfigMonetisationUpdateManyMutationInput, Prisma.ConfigMonetisationUncheckedUpdateManyInput>;
    /**
     * Filter which ConfigMonetisations to update
     */
    where?: Prisma.ConfigMonetisationWhereInput;
    /**
     * Limit how many ConfigMonetisations to update.
     */
    limit?: number;
};
/**
 * ConfigMonetisation updateManyAndReturn
 */
export type ConfigMonetisationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * The data used to update ConfigMonetisations.
     */
    data: Prisma.XOR<Prisma.ConfigMonetisationUpdateManyMutationInput, Prisma.ConfigMonetisationUncheckedUpdateManyInput>;
    /**
     * Filter which ConfigMonetisations to update
     */
    where?: Prisma.ConfigMonetisationWhereInput;
    /**
     * Limit how many ConfigMonetisations to update.
     */
    limit?: number;
};
/**
 * ConfigMonetisation upsert
 */
export type ConfigMonetisationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * The filter to search for the ConfigMonetisation to update in case it exists.
     */
    where: Prisma.ConfigMonetisationWhereUniqueInput;
    /**
     * In case the ConfigMonetisation found by the `where` argument doesn't exist, create a new ConfigMonetisation with this data.
     */
    create: Prisma.XOR<Prisma.ConfigMonetisationCreateInput, Prisma.ConfigMonetisationUncheckedCreateInput>;
    /**
     * In case the ConfigMonetisation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConfigMonetisationUpdateInput, Prisma.ConfigMonetisationUncheckedUpdateInput>;
};
/**
 * ConfigMonetisation delete
 */
export type ConfigMonetisationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
    /**
     * Filter which ConfigMonetisation to delete.
     */
    where: Prisma.ConfigMonetisationWhereUniqueInput;
};
/**
 * ConfigMonetisation deleteMany
 */
export type ConfigMonetisationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigMonetisations to delete
     */
    where?: Prisma.ConfigMonetisationWhereInput;
    /**
     * Limit how many ConfigMonetisations to delete.
     */
    limit?: number;
};
/**
 * ConfigMonetisation without action
 */
export type ConfigMonetisationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigMonetisation
     */
    select?: Prisma.ConfigMonetisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigMonetisation
     */
    omit?: Prisma.ConfigMonetisationOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ConfigMonetisation.d.ts.map