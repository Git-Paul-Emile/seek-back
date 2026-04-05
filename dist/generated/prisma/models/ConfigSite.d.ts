import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ConfigSite
 *
 */
export type ConfigSiteModel = runtime.Types.Result.DefaultSelection<Prisma.$ConfigSitePayload>;
export type AggregateConfigSite = {
    _count: ConfigSiteCountAggregateOutputType | null;
    _min: ConfigSiteMinAggregateOutputType | null;
    _max: ConfigSiteMaxAggregateOutputType | null;
};
export type ConfigSiteMinAggregateOutputType = {
    id: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    contactAddress: string | null;
    logoFiligrane: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConfigSiteMaxAggregateOutputType = {
    id: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    contactAddress: string | null;
    logoFiligrane: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConfigSiteCountAggregateOutputType = {
    id: number;
    contactEmail: number;
    contactPhone: number;
    contactAddress: number;
    serviceClientHours: number;
    logoFiligrane: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ConfigSiteMinAggregateInputType = {
    id?: true;
    contactEmail?: true;
    contactPhone?: true;
    contactAddress?: true;
    logoFiligrane?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConfigSiteMaxAggregateInputType = {
    id?: true;
    contactEmail?: true;
    contactPhone?: true;
    contactAddress?: true;
    logoFiligrane?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConfigSiteCountAggregateInputType = {
    id?: true;
    contactEmail?: true;
    contactPhone?: true;
    contactAddress?: true;
    serviceClientHours?: true;
    logoFiligrane?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConfigSiteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigSite to aggregate.
     */
    where?: Prisma.ConfigSiteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigSites to fetch.
     */
    orderBy?: Prisma.ConfigSiteOrderByWithRelationInput | Prisma.ConfigSiteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConfigSiteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigSites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigSites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ConfigSites
    **/
    _count?: true | ConfigSiteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConfigSiteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConfigSiteMaxAggregateInputType;
};
export type GetConfigSiteAggregateType<T extends ConfigSiteAggregateArgs> = {
    [P in keyof T & keyof AggregateConfigSite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConfigSite[P]> : Prisma.GetScalarType<T[P], AggregateConfigSite[P]>;
};
export type ConfigSiteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigSiteWhereInput;
    orderBy?: Prisma.ConfigSiteOrderByWithAggregationInput | Prisma.ConfigSiteOrderByWithAggregationInput[];
    by: Prisma.ConfigSiteScalarFieldEnum[] | Prisma.ConfigSiteScalarFieldEnum;
    having?: Prisma.ConfigSiteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConfigSiteCountAggregateInputType | true;
    _min?: ConfigSiteMinAggregateInputType;
    _max?: ConfigSiteMaxAggregateInputType;
};
export type ConfigSiteGroupByOutputType = {
    id: string;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    serviceClientHours: runtime.JsonValue;
    logoFiligrane: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ConfigSiteCountAggregateOutputType | null;
    _min: ConfigSiteMinAggregateOutputType | null;
    _max: ConfigSiteMaxAggregateOutputType | null;
};
type GetConfigSiteGroupByPayload<T extends ConfigSiteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConfigSiteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConfigSiteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConfigSiteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConfigSiteGroupByOutputType[P]>;
}>>;
export type ConfigSiteWhereInput = {
    AND?: Prisma.ConfigSiteWhereInput | Prisma.ConfigSiteWhereInput[];
    OR?: Prisma.ConfigSiteWhereInput[];
    NOT?: Prisma.ConfigSiteWhereInput | Prisma.ConfigSiteWhereInput[];
    id?: Prisma.StringFilter<"ConfigSite"> | string;
    contactEmail?: Prisma.StringFilter<"ConfigSite"> | string;
    contactPhone?: Prisma.StringFilter<"ConfigSite"> | string;
    contactAddress?: Prisma.StringFilter<"ConfigSite"> | string;
    serviceClientHours?: Prisma.JsonFilter<"ConfigSite">;
    logoFiligrane?: Prisma.StringNullableFilter<"ConfigSite"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ConfigSite"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ConfigSite"> | Date | string;
};
export type ConfigSiteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactAddress?: Prisma.SortOrder;
    serviceClientHours?: Prisma.SortOrder;
    logoFiligrane?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigSiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConfigSiteWhereInput | Prisma.ConfigSiteWhereInput[];
    OR?: Prisma.ConfigSiteWhereInput[];
    NOT?: Prisma.ConfigSiteWhereInput | Prisma.ConfigSiteWhereInput[];
    contactEmail?: Prisma.StringFilter<"ConfigSite"> | string;
    contactPhone?: Prisma.StringFilter<"ConfigSite"> | string;
    contactAddress?: Prisma.StringFilter<"ConfigSite"> | string;
    serviceClientHours?: Prisma.JsonFilter<"ConfigSite">;
    logoFiligrane?: Prisma.StringNullableFilter<"ConfigSite"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ConfigSite"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ConfigSite"> | Date | string;
}, "id">;
export type ConfigSiteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactAddress?: Prisma.SortOrder;
    serviceClientHours?: Prisma.SortOrder;
    logoFiligrane?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConfigSiteCountOrderByAggregateInput;
    _max?: Prisma.ConfigSiteMaxOrderByAggregateInput;
    _min?: Prisma.ConfigSiteMinOrderByAggregateInput;
};
export type ConfigSiteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConfigSiteScalarWhereWithAggregatesInput | Prisma.ConfigSiteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConfigSiteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConfigSiteScalarWhereWithAggregatesInput | Prisma.ConfigSiteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ConfigSite"> | string;
    contactEmail?: Prisma.StringWithAggregatesFilter<"ConfigSite"> | string;
    contactPhone?: Prisma.StringWithAggregatesFilter<"ConfigSite"> | string;
    contactAddress?: Prisma.StringWithAggregatesFilter<"ConfigSite"> | string;
    serviceClientHours?: Prisma.JsonWithAggregatesFilter<"ConfigSite">;
    logoFiligrane?: Prisma.StringNullableWithAggregatesFilter<"ConfigSite"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ConfigSite"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ConfigSite"> | Date | string;
};
export type ConfigSiteCreateInput = {
    id?: string;
    contactEmail?: string;
    contactPhone?: string;
    contactAddress?: string;
    serviceClientHours?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    logoFiligrane?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConfigSiteUncheckedCreateInput = {
    id?: string;
    contactEmail?: string;
    contactPhone?: string;
    contactAddress?: string;
    serviceClientHours?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    logoFiligrane?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConfigSiteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceClientHours?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    logoFiligrane?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigSiteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceClientHours?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    logoFiligrane?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigSiteCreateManyInput = {
    id?: string;
    contactEmail?: string;
    contactPhone?: string;
    contactAddress?: string;
    serviceClientHours?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    logoFiligrane?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConfigSiteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceClientHours?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    logoFiligrane?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigSiteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceClientHours?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    logoFiligrane?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfigSiteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactAddress?: Prisma.SortOrder;
    serviceClientHours?: Prisma.SortOrder;
    logoFiligrane?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigSiteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactAddress?: Prisma.SortOrder;
    logoFiligrane?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigSiteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactAddress?: Prisma.SortOrder;
    logoFiligrane?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfigSiteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    contactAddress?: boolean;
    serviceClientHours?: boolean;
    logoFiligrane?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configSite"]>;
export type ConfigSiteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    contactAddress?: boolean;
    serviceClientHours?: boolean;
    logoFiligrane?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configSite"]>;
export type ConfigSiteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    contactAddress?: boolean;
    serviceClientHours?: boolean;
    logoFiligrane?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configSite"]>;
export type ConfigSiteSelectScalar = {
    id?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    contactAddress?: boolean;
    serviceClientHours?: boolean;
    logoFiligrane?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ConfigSiteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contactEmail" | "contactPhone" | "contactAddress" | "serviceClientHours" | "logoFiligrane" | "createdAt" | "updatedAt", ExtArgs["result"]["configSite"]>;
export type $ConfigSitePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConfigSite";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contactEmail: string;
        contactPhone: string;
        contactAddress: string;
        serviceClientHours: runtime.JsonValue;
        logoFiligrane: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["configSite"]>;
    composites: {};
};
export type ConfigSiteGetPayload<S extends boolean | null | undefined | ConfigSiteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload, S>;
export type ConfigSiteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConfigSiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConfigSiteCountAggregateInputType | true;
};
export interface ConfigSiteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConfigSite'];
        meta: {
            name: 'ConfigSite';
        };
    };
    /**
     * Find zero or one ConfigSite that matches the filter.
     * @param {ConfigSiteFindUniqueArgs} args - Arguments to find a ConfigSite
     * @example
     * // Get one ConfigSite
     * const configSite = await prisma.configSite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigSiteFindUniqueArgs>(args: Prisma.SelectSubset<T, ConfigSiteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ConfigSite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigSiteFindUniqueOrThrowArgs} args - Arguments to find a ConfigSite
     * @example
     * // Get one ConfigSite
     * const configSite = await prisma.configSite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigSiteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConfigSiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConfigSite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigSiteFindFirstArgs} args - Arguments to find a ConfigSite
     * @example
     * // Get one ConfigSite
     * const configSite = await prisma.configSite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigSiteFindFirstArgs>(args?: Prisma.SelectSubset<T, ConfigSiteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConfigSite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigSiteFindFirstOrThrowArgs} args - Arguments to find a ConfigSite
     * @example
     * // Get one ConfigSite
     * const configSite = await prisma.configSite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigSiteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConfigSiteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ConfigSites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigSiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfigSites
     * const configSites = await prisma.configSite.findMany()
     *
     * // Get first 10 ConfigSites
     * const configSites = await prisma.configSite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const configSiteWithIdOnly = await prisma.configSite.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ConfigSiteFindManyArgs>(args?: Prisma.SelectSubset<T, ConfigSiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ConfigSite.
     * @param {ConfigSiteCreateArgs} args - Arguments to create a ConfigSite.
     * @example
     * // Create one ConfigSite
     * const ConfigSite = await prisma.configSite.create({
     *   data: {
     *     // ... data to create a ConfigSite
     *   }
     * })
     *
     */
    create<T extends ConfigSiteCreateArgs>(args: Prisma.SelectSubset<T, ConfigSiteCreateArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ConfigSites.
     * @param {ConfigSiteCreateManyArgs} args - Arguments to create many ConfigSites.
     * @example
     * // Create many ConfigSites
     * const configSite = await prisma.configSite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConfigSiteCreateManyArgs>(args?: Prisma.SelectSubset<T, ConfigSiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ConfigSites and returns the data saved in the database.
     * @param {ConfigSiteCreateManyAndReturnArgs} args - Arguments to create many ConfigSites.
     * @example
     * // Create many ConfigSites
     * const configSite = await prisma.configSite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ConfigSites and only return the `id`
     * const configSiteWithIdOnly = await prisma.configSite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConfigSiteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConfigSiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ConfigSite.
     * @param {ConfigSiteDeleteArgs} args - Arguments to delete one ConfigSite.
     * @example
     * // Delete one ConfigSite
     * const ConfigSite = await prisma.configSite.delete({
     *   where: {
     *     // ... filter to delete one ConfigSite
     *   }
     * })
     *
     */
    delete<T extends ConfigSiteDeleteArgs>(args: Prisma.SelectSubset<T, ConfigSiteDeleteArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ConfigSite.
     * @param {ConfigSiteUpdateArgs} args - Arguments to update one ConfigSite.
     * @example
     * // Update one ConfigSite
     * const configSite = await prisma.configSite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConfigSiteUpdateArgs>(args: Prisma.SelectSubset<T, ConfigSiteUpdateArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ConfigSites.
     * @param {ConfigSiteDeleteManyArgs} args - Arguments to filter ConfigSites to delete.
     * @example
     * // Delete a few ConfigSites
     * const { count } = await prisma.configSite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConfigSiteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConfigSiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConfigSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigSiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfigSites
     * const configSite = await prisma.configSite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConfigSiteUpdateManyArgs>(args: Prisma.SelectSubset<T, ConfigSiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConfigSites and returns the data updated in the database.
     * @param {ConfigSiteUpdateManyAndReturnArgs} args - Arguments to update many ConfigSites.
     * @example
     * // Update many ConfigSites
     * const configSite = await prisma.configSite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ConfigSites and only return the `id`
     * const configSiteWithIdOnly = await prisma.configSite.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfigSiteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConfigSiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ConfigSite.
     * @param {ConfigSiteUpsertArgs} args - Arguments to update or create a ConfigSite.
     * @example
     * // Update or create a ConfigSite
     * const configSite = await prisma.configSite.upsert({
     *   create: {
     *     // ... data to create a ConfigSite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfigSite we want to update
     *   }
     * })
     */
    upsert<T extends ConfigSiteUpsertArgs>(args: Prisma.SelectSubset<T, ConfigSiteUpsertArgs<ExtArgs>>): Prisma.Prisma__ConfigSiteClient<runtime.Types.Result.GetResult<Prisma.$ConfigSitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ConfigSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigSiteCountArgs} args - Arguments to filter ConfigSites to count.
     * @example
     * // Count the number of ConfigSites
     * const count = await prisma.configSite.count({
     *   where: {
     *     // ... the filter for the ConfigSites we want to count
     *   }
     * })
    **/
    count<T extends ConfigSiteCountArgs>(args?: Prisma.Subset<T, ConfigSiteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConfigSiteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ConfigSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigSiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigSiteAggregateArgs>(args: Prisma.Subset<T, ConfigSiteAggregateArgs>): Prisma.PrismaPromise<GetConfigSiteAggregateType<T>>;
    /**
     * Group by ConfigSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigSiteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ConfigSiteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConfigSiteGroupByArgs['orderBy'];
    } : {
        orderBy?: ConfigSiteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConfigSiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ConfigSite model
     */
    readonly fields: ConfigSiteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ConfigSite.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConfigSiteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ConfigSite model
 */
export interface ConfigSiteFieldRefs {
    readonly id: Prisma.FieldRef<"ConfigSite", 'String'>;
    readonly contactEmail: Prisma.FieldRef<"ConfigSite", 'String'>;
    readonly contactPhone: Prisma.FieldRef<"ConfigSite", 'String'>;
    readonly contactAddress: Prisma.FieldRef<"ConfigSite", 'String'>;
    readonly serviceClientHours: Prisma.FieldRef<"ConfigSite", 'Json'>;
    readonly logoFiligrane: Prisma.FieldRef<"ConfigSite", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ConfigSite", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ConfigSite", 'DateTime'>;
}
/**
 * ConfigSite findUnique
 */
export type ConfigSiteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigSite to fetch.
     */
    where: Prisma.ConfigSiteWhereUniqueInput;
};
/**
 * ConfigSite findUniqueOrThrow
 */
export type ConfigSiteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigSite to fetch.
     */
    where: Prisma.ConfigSiteWhereUniqueInput;
};
/**
 * ConfigSite findFirst
 */
export type ConfigSiteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigSite to fetch.
     */
    where?: Prisma.ConfigSiteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigSites to fetch.
     */
    orderBy?: Prisma.ConfigSiteOrderByWithRelationInput | Prisma.ConfigSiteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConfigSites.
     */
    cursor?: Prisma.ConfigSiteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigSites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigSites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConfigSites.
     */
    distinct?: Prisma.ConfigSiteScalarFieldEnum | Prisma.ConfigSiteScalarFieldEnum[];
};
/**
 * ConfigSite findFirstOrThrow
 */
export type ConfigSiteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigSite to fetch.
     */
    where?: Prisma.ConfigSiteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigSites to fetch.
     */
    orderBy?: Prisma.ConfigSiteOrderByWithRelationInput | Prisma.ConfigSiteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConfigSites.
     */
    cursor?: Prisma.ConfigSiteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigSites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigSites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConfigSites.
     */
    distinct?: Prisma.ConfigSiteScalarFieldEnum | Prisma.ConfigSiteScalarFieldEnum[];
};
/**
 * ConfigSite findMany
 */
export type ConfigSiteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * Filter, which ConfigSites to fetch.
     */
    where?: Prisma.ConfigSiteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConfigSites to fetch.
     */
    orderBy?: Prisma.ConfigSiteOrderByWithRelationInput | Prisma.ConfigSiteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ConfigSites.
     */
    cursor?: Prisma.ConfigSiteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConfigSites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConfigSites.
     */
    skip?: number;
    distinct?: Prisma.ConfigSiteScalarFieldEnum | Prisma.ConfigSiteScalarFieldEnum[];
};
/**
 * ConfigSite create
 */
export type ConfigSiteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * The data needed to create a ConfigSite.
     */
    data: Prisma.XOR<Prisma.ConfigSiteCreateInput, Prisma.ConfigSiteUncheckedCreateInput>;
};
/**
 * ConfigSite createMany
 */
export type ConfigSiteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfigSites.
     */
    data: Prisma.ConfigSiteCreateManyInput | Prisma.ConfigSiteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ConfigSite createManyAndReturn
 */
export type ConfigSiteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * The data used to create many ConfigSites.
     */
    data: Prisma.ConfigSiteCreateManyInput | Prisma.ConfigSiteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ConfigSite update
 */
export type ConfigSiteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * The data needed to update a ConfigSite.
     */
    data: Prisma.XOR<Prisma.ConfigSiteUpdateInput, Prisma.ConfigSiteUncheckedUpdateInput>;
    /**
     * Choose, which ConfigSite to update.
     */
    where: Prisma.ConfigSiteWhereUniqueInput;
};
/**
 * ConfigSite updateMany
 */
export type ConfigSiteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfigSites.
     */
    data: Prisma.XOR<Prisma.ConfigSiteUpdateManyMutationInput, Prisma.ConfigSiteUncheckedUpdateManyInput>;
    /**
     * Filter which ConfigSites to update
     */
    where?: Prisma.ConfigSiteWhereInput;
    /**
     * Limit how many ConfigSites to update.
     */
    limit?: number;
};
/**
 * ConfigSite updateManyAndReturn
 */
export type ConfigSiteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * The data used to update ConfigSites.
     */
    data: Prisma.XOR<Prisma.ConfigSiteUpdateManyMutationInput, Prisma.ConfigSiteUncheckedUpdateManyInput>;
    /**
     * Filter which ConfigSites to update
     */
    where?: Prisma.ConfigSiteWhereInput;
    /**
     * Limit how many ConfigSites to update.
     */
    limit?: number;
};
/**
 * ConfigSite upsert
 */
export type ConfigSiteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * The filter to search for the ConfigSite to update in case it exists.
     */
    where: Prisma.ConfigSiteWhereUniqueInput;
    /**
     * In case the ConfigSite found by the `where` argument doesn't exist, create a new ConfigSite with this data.
     */
    create: Prisma.XOR<Prisma.ConfigSiteCreateInput, Prisma.ConfigSiteUncheckedCreateInput>;
    /**
     * In case the ConfigSite was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConfigSiteUpdateInput, Prisma.ConfigSiteUncheckedUpdateInput>;
};
/**
 * ConfigSite delete
 */
export type ConfigSiteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
    /**
     * Filter which ConfigSite to delete.
     */
    where: Prisma.ConfigSiteWhereUniqueInput;
};
/**
 * ConfigSite deleteMany
 */
export type ConfigSiteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigSites to delete
     */
    where?: Prisma.ConfigSiteWhereInput;
    /**
     * Limit how many ConfigSites to delete.
     */
    limit?: number;
};
/**
 * ConfigSite without action
 */
export type ConfigSiteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigSite
     */
    select?: Prisma.ConfigSiteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConfigSite
     */
    omit?: Prisma.ConfigSiteOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ConfigSite.d.ts.map