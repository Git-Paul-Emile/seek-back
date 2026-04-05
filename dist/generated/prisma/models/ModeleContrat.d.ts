import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ModeleContrat
 *
 */
export type ModeleContratModel = runtime.Types.Result.DefaultSelection<Prisma.$ModeleContratPayload>;
export type AggregateModeleContrat = {
    _count: ModeleContratCountAggregateOutputType | null;
    _avg: ModeleContratAvgAggregateOutputType | null;
    _sum: ModeleContratSumAggregateOutputType | null;
    _min: ModeleContratMinAggregateOutputType | null;
    _max: ModeleContratMaxAggregateOutputType | null;
};
export type ModeleContratAvgAggregateOutputType = {
    ordre: number | null;
};
export type ModeleContratSumAggregateOutputType = {
    ordre: number | null;
};
export type ModeleContratMinAggregateOutputType = {
    id: string | null;
    titre: string | null;
    typeBail: string | null;
    contenu: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ModeleContratMaxAggregateOutputType = {
    id: string | null;
    titre: string | null;
    typeBail: string | null;
    contenu: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ModeleContratCountAggregateOutputType = {
    id: number;
    titre: number;
    typeBail: number;
    contenu: number;
    actif: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ModeleContratAvgAggregateInputType = {
    ordre?: true;
};
export type ModeleContratSumAggregateInputType = {
    ordre?: true;
};
export type ModeleContratMinAggregateInputType = {
    id?: true;
    titre?: true;
    typeBail?: true;
    contenu?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ModeleContratMaxAggregateInputType = {
    id?: true;
    titre?: true;
    typeBail?: true;
    contenu?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ModeleContratCountAggregateInputType = {
    id?: true;
    titre?: true;
    typeBail?: true;
    contenu?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ModeleContratAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ModeleContrat to aggregate.
     */
    where?: Prisma.ModeleContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeleContrats to fetch.
     */
    orderBy?: Prisma.ModeleContratOrderByWithRelationInput | Prisma.ModeleContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ModeleContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeleContrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeleContrats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ModeleContrats
    **/
    _count?: true | ModeleContratCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ModeleContratAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ModeleContratSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ModeleContratMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ModeleContratMaxAggregateInputType;
};
export type GetModeleContratAggregateType<T extends ModeleContratAggregateArgs> = {
    [P in keyof T & keyof AggregateModeleContrat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModeleContrat[P]> : Prisma.GetScalarType<T[P], AggregateModeleContrat[P]>;
};
export type ModeleContratGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModeleContratWhereInput;
    orderBy?: Prisma.ModeleContratOrderByWithAggregationInput | Prisma.ModeleContratOrderByWithAggregationInput[];
    by: Prisma.ModeleContratScalarFieldEnum[] | Prisma.ModeleContratScalarFieldEnum;
    having?: Prisma.ModeleContratScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModeleContratCountAggregateInputType | true;
    _avg?: ModeleContratAvgAggregateInputType;
    _sum?: ModeleContratSumAggregateInputType;
    _min?: ModeleContratMinAggregateInputType;
    _max?: ModeleContratMaxAggregateInputType;
};
export type ModeleContratGroupByOutputType = {
    id: string;
    titre: string;
    typeBail: string | null;
    contenu: string;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ModeleContratCountAggregateOutputType | null;
    _avg: ModeleContratAvgAggregateOutputType | null;
    _sum: ModeleContratSumAggregateOutputType | null;
    _min: ModeleContratMinAggregateOutputType | null;
    _max: ModeleContratMaxAggregateOutputType | null;
};
type GetModeleContratGroupByPayload<T extends ModeleContratGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModeleContratGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModeleContratGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModeleContratGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModeleContratGroupByOutputType[P]>;
}>>;
export type ModeleContratWhereInput = {
    AND?: Prisma.ModeleContratWhereInput | Prisma.ModeleContratWhereInput[];
    OR?: Prisma.ModeleContratWhereInput[];
    NOT?: Prisma.ModeleContratWhereInput | Prisma.ModeleContratWhereInput[];
    id?: Prisma.StringFilter<"ModeleContrat"> | string;
    titre?: Prisma.StringFilter<"ModeleContrat"> | string;
    typeBail?: Prisma.StringNullableFilter<"ModeleContrat"> | string | null;
    contenu?: Prisma.StringFilter<"ModeleContrat"> | string;
    actif?: Prisma.BoolFilter<"ModeleContrat"> | boolean;
    ordre?: Prisma.IntFilter<"ModeleContrat"> | number;
    createdAt?: Prisma.DateTimeFilter<"ModeleContrat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ModeleContrat"> | Date | string;
    contrats?: Prisma.ContratListRelationFilter;
};
export type ModeleContratOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    contrats?: Prisma.ContratOrderByRelationAggregateInput;
};
export type ModeleContratWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ModeleContratWhereInput | Prisma.ModeleContratWhereInput[];
    OR?: Prisma.ModeleContratWhereInput[];
    NOT?: Prisma.ModeleContratWhereInput | Prisma.ModeleContratWhereInput[];
    titre?: Prisma.StringFilter<"ModeleContrat"> | string;
    typeBail?: Prisma.StringNullableFilter<"ModeleContrat"> | string | null;
    contenu?: Prisma.StringFilter<"ModeleContrat"> | string;
    actif?: Prisma.BoolFilter<"ModeleContrat"> | boolean;
    ordre?: Prisma.IntFilter<"ModeleContrat"> | number;
    createdAt?: Prisma.DateTimeFilter<"ModeleContrat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ModeleContrat"> | Date | string;
    contrats?: Prisma.ContratListRelationFilter;
}, "id">;
export type ModeleContratOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ModeleContratCountOrderByAggregateInput;
    _avg?: Prisma.ModeleContratAvgOrderByAggregateInput;
    _max?: Prisma.ModeleContratMaxOrderByAggregateInput;
    _min?: Prisma.ModeleContratMinOrderByAggregateInput;
    _sum?: Prisma.ModeleContratSumOrderByAggregateInput;
};
export type ModeleContratScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModeleContratScalarWhereWithAggregatesInput | Prisma.ModeleContratScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModeleContratScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModeleContratScalarWhereWithAggregatesInput | Prisma.ModeleContratScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ModeleContrat"> | string;
    titre?: Prisma.StringWithAggregatesFilter<"ModeleContrat"> | string;
    typeBail?: Prisma.StringNullableWithAggregatesFilter<"ModeleContrat"> | string | null;
    contenu?: Prisma.StringWithAggregatesFilter<"ModeleContrat"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"ModeleContrat"> | boolean;
    ordre?: Prisma.IntWithAggregatesFilter<"ModeleContrat"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ModeleContrat"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ModeleContrat"> | Date | string;
};
export type ModeleContratCreateInput = {
    id?: string;
    titre: string;
    typeBail?: string | null;
    contenu: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contrats?: Prisma.ContratCreateNestedManyWithoutModeleInput;
};
export type ModeleContratUncheckedCreateInput = {
    id?: string;
    titre: string;
    typeBail?: string | null;
    contenu: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contrats?: Prisma.ContratUncheckedCreateNestedManyWithoutModeleInput;
};
export type ModeleContratUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrats?: Prisma.ContratUpdateManyWithoutModeleNestedInput;
};
export type ModeleContratUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrats?: Prisma.ContratUncheckedUpdateManyWithoutModeleNestedInput;
};
export type ModeleContratCreateManyInput = {
    id?: string;
    titre: string;
    typeBail?: string | null;
    contenu: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ModeleContratUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ModeleContratUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ModeleContratCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ModeleContratAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type ModeleContratMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ModeleContratMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ModeleContratSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type ModeleContratNullableScalarRelationFilter = {
    is?: Prisma.ModeleContratWhereInput | null;
    isNot?: Prisma.ModeleContratWhereInput | null;
};
export type ModeleContratCreateNestedOneWithoutContratsInput = {
    create?: Prisma.XOR<Prisma.ModeleContratCreateWithoutContratsInput, Prisma.ModeleContratUncheckedCreateWithoutContratsInput>;
    connectOrCreate?: Prisma.ModeleContratCreateOrConnectWithoutContratsInput;
    connect?: Prisma.ModeleContratWhereUniqueInput;
};
export type ModeleContratUpdateOneWithoutContratsNestedInput = {
    create?: Prisma.XOR<Prisma.ModeleContratCreateWithoutContratsInput, Prisma.ModeleContratUncheckedCreateWithoutContratsInput>;
    connectOrCreate?: Prisma.ModeleContratCreateOrConnectWithoutContratsInput;
    upsert?: Prisma.ModeleContratUpsertWithoutContratsInput;
    disconnect?: Prisma.ModeleContratWhereInput | boolean;
    delete?: Prisma.ModeleContratWhereInput | boolean;
    connect?: Prisma.ModeleContratWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModeleContratUpdateToOneWithWhereWithoutContratsInput, Prisma.ModeleContratUpdateWithoutContratsInput>, Prisma.ModeleContratUncheckedUpdateWithoutContratsInput>;
};
export type ModeleContratCreateWithoutContratsInput = {
    id?: string;
    titre: string;
    typeBail?: string | null;
    contenu: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ModeleContratUncheckedCreateWithoutContratsInput = {
    id?: string;
    titre: string;
    typeBail?: string | null;
    contenu: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ModeleContratCreateOrConnectWithoutContratsInput = {
    where: Prisma.ModeleContratWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModeleContratCreateWithoutContratsInput, Prisma.ModeleContratUncheckedCreateWithoutContratsInput>;
};
export type ModeleContratUpsertWithoutContratsInput = {
    update: Prisma.XOR<Prisma.ModeleContratUpdateWithoutContratsInput, Prisma.ModeleContratUncheckedUpdateWithoutContratsInput>;
    create: Prisma.XOR<Prisma.ModeleContratCreateWithoutContratsInput, Prisma.ModeleContratUncheckedCreateWithoutContratsInput>;
    where?: Prisma.ModeleContratWhereInput;
};
export type ModeleContratUpdateToOneWithWhereWithoutContratsInput = {
    where?: Prisma.ModeleContratWhereInput;
    data: Prisma.XOR<Prisma.ModeleContratUpdateWithoutContratsInput, Prisma.ModeleContratUncheckedUpdateWithoutContratsInput>;
};
export type ModeleContratUpdateWithoutContratsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ModeleContratUncheckedUpdateWithoutContratsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ModeleContratCountOutputType
 */
export type ModeleContratCountOutputType = {
    contrats: number;
};
export type ModeleContratCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrats?: boolean | ModeleContratCountOutputTypeCountContratsArgs;
};
/**
 * ModeleContratCountOutputType without action
 */
export type ModeleContratCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContratCountOutputType
     */
    select?: Prisma.ModeleContratCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ModeleContratCountOutputType without action
 */
export type ModeleContratCountOutputTypeCountContratsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContratWhereInput;
};
export type ModeleContratSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    typeBail?: boolean;
    contenu?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    contrats?: boolean | Prisma.ModeleContrat$contratsArgs<ExtArgs>;
    _count?: boolean | Prisma.ModeleContratCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modeleContrat"]>;
export type ModeleContratSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    typeBail?: boolean;
    contenu?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["modeleContrat"]>;
export type ModeleContratSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    typeBail?: boolean;
    contenu?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["modeleContrat"]>;
export type ModeleContratSelectScalar = {
    id?: boolean;
    titre?: boolean;
    typeBail?: boolean;
    contenu?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ModeleContratOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titre" | "typeBail" | "contenu" | "actif" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["modeleContrat"]>;
export type ModeleContratInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrats?: boolean | Prisma.ModeleContrat$contratsArgs<ExtArgs>;
    _count?: boolean | Prisma.ModeleContratCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ModeleContratIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ModeleContratIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ModeleContratPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ModeleContrat";
    objects: {
        contrats: Prisma.$ContratPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        titre: string;
        typeBail: string | null;
        contenu: string;
        actif: boolean;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["modeleContrat"]>;
    composites: {};
};
export type ModeleContratGetPayload<S extends boolean | null | undefined | ModeleContratDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload, S>;
export type ModeleContratCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModeleContratFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModeleContratCountAggregateInputType | true;
};
export interface ModeleContratDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ModeleContrat'];
        meta: {
            name: 'ModeleContrat';
        };
    };
    /**
     * Find zero or one ModeleContrat that matches the filter.
     * @param {ModeleContratFindUniqueArgs} args - Arguments to find a ModeleContrat
     * @example
     * // Get one ModeleContrat
     * const modeleContrat = await prisma.modeleContrat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeleContratFindUniqueArgs>(args: Prisma.SelectSubset<T, ModeleContratFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ModeleContrat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeleContratFindUniqueOrThrowArgs} args - Arguments to find a ModeleContrat
     * @example
     * // Get one ModeleContrat
     * const modeleContrat = await prisma.modeleContrat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeleContratFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModeleContratFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ModeleContrat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleContratFindFirstArgs} args - Arguments to find a ModeleContrat
     * @example
     * // Get one ModeleContrat
     * const modeleContrat = await prisma.modeleContrat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeleContratFindFirstArgs>(args?: Prisma.SelectSubset<T, ModeleContratFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ModeleContrat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleContratFindFirstOrThrowArgs} args - Arguments to find a ModeleContrat
     * @example
     * // Get one ModeleContrat
     * const modeleContrat = await prisma.modeleContrat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeleContratFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModeleContratFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ModeleContrats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleContratFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModeleContrats
     * const modeleContrats = await prisma.modeleContrat.findMany()
     *
     * // Get first 10 ModeleContrats
     * const modeleContrats = await prisma.modeleContrat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const modeleContratWithIdOnly = await prisma.modeleContrat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ModeleContratFindManyArgs>(args?: Prisma.SelectSubset<T, ModeleContratFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ModeleContrat.
     * @param {ModeleContratCreateArgs} args - Arguments to create a ModeleContrat.
     * @example
     * // Create one ModeleContrat
     * const ModeleContrat = await prisma.modeleContrat.create({
     *   data: {
     *     // ... data to create a ModeleContrat
     *   }
     * })
     *
     */
    create<T extends ModeleContratCreateArgs>(args: Prisma.SelectSubset<T, ModeleContratCreateArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ModeleContrats.
     * @param {ModeleContratCreateManyArgs} args - Arguments to create many ModeleContrats.
     * @example
     * // Create many ModeleContrats
     * const modeleContrat = await prisma.modeleContrat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ModeleContratCreateManyArgs>(args?: Prisma.SelectSubset<T, ModeleContratCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ModeleContrats and returns the data saved in the database.
     * @param {ModeleContratCreateManyAndReturnArgs} args - Arguments to create many ModeleContrats.
     * @example
     * // Create many ModeleContrats
     * const modeleContrat = await prisma.modeleContrat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ModeleContrats and only return the `id`
     * const modeleContratWithIdOnly = await prisma.modeleContrat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ModeleContratCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModeleContratCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ModeleContrat.
     * @param {ModeleContratDeleteArgs} args - Arguments to delete one ModeleContrat.
     * @example
     * // Delete one ModeleContrat
     * const ModeleContrat = await prisma.modeleContrat.delete({
     *   where: {
     *     // ... filter to delete one ModeleContrat
     *   }
     * })
     *
     */
    delete<T extends ModeleContratDeleteArgs>(args: Prisma.SelectSubset<T, ModeleContratDeleteArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ModeleContrat.
     * @param {ModeleContratUpdateArgs} args - Arguments to update one ModeleContrat.
     * @example
     * // Update one ModeleContrat
     * const modeleContrat = await prisma.modeleContrat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ModeleContratUpdateArgs>(args: Prisma.SelectSubset<T, ModeleContratUpdateArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ModeleContrats.
     * @param {ModeleContratDeleteManyArgs} args - Arguments to filter ModeleContrats to delete.
     * @example
     * // Delete a few ModeleContrats
     * const { count } = await prisma.modeleContrat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ModeleContratDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModeleContratDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ModeleContrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleContratUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModeleContrats
     * const modeleContrat = await prisma.modeleContrat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ModeleContratUpdateManyArgs>(args: Prisma.SelectSubset<T, ModeleContratUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ModeleContrats and returns the data updated in the database.
     * @param {ModeleContratUpdateManyAndReturnArgs} args - Arguments to update many ModeleContrats.
     * @example
     * // Update many ModeleContrats
     * const modeleContrat = await prisma.modeleContrat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ModeleContrats and only return the `id`
     * const modeleContratWithIdOnly = await prisma.modeleContrat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModeleContratUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModeleContratUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ModeleContrat.
     * @param {ModeleContratUpsertArgs} args - Arguments to update or create a ModeleContrat.
     * @example
     * // Update or create a ModeleContrat
     * const modeleContrat = await prisma.modeleContrat.upsert({
     *   create: {
     *     // ... data to create a ModeleContrat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModeleContrat we want to update
     *   }
     * })
     */
    upsert<T extends ModeleContratUpsertArgs>(args: Prisma.SelectSubset<T, ModeleContratUpsertArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ModeleContrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleContratCountArgs} args - Arguments to filter ModeleContrats to count.
     * @example
     * // Count the number of ModeleContrats
     * const count = await prisma.modeleContrat.count({
     *   where: {
     *     // ... the filter for the ModeleContrats we want to count
     *   }
     * })
    **/
    count<T extends ModeleContratCountArgs>(args?: Prisma.Subset<T, ModeleContratCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModeleContratCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ModeleContrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleContratAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModeleContratAggregateArgs>(args: Prisma.Subset<T, ModeleContratAggregateArgs>): Prisma.PrismaPromise<GetModeleContratAggregateType<T>>;
    /**
     * Group by ModeleContrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeleContratGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ModeleContratGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModeleContratGroupByArgs['orderBy'];
    } : {
        orderBy?: ModeleContratGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModeleContratGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeleContratGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ModeleContrat model
     */
    readonly fields: ModeleContratFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ModeleContrat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ModeleContratClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contrats<T extends Prisma.ModeleContrat$contratsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModeleContrat$contratsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ModeleContrat model
 */
export interface ModeleContratFieldRefs {
    readonly id: Prisma.FieldRef<"ModeleContrat", 'String'>;
    readonly titre: Prisma.FieldRef<"ModeleContrat", 'String'>;
    readonly typeBail: Prisma.FieldRef<"ModeleContrat", 'String'>;
    readonly contenu: Prisma.FieldRef<"ModeleContrat", 'String'>;
    readonly actif: Prisma.FieldRef<"ModeleContrat", 'Boolean'>;
    readonly ordre: Prisma.FieldRef<"ModeleContrat", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ModeleContrat", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ModeleContrat", 'DateTime'>;
}
/**
 * ModeleContrat findUnique
 */
export type ModeleContratFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * Filter, which ModeleContrat to fetch.
     */
    where: Prisma.ModeleContratWhereUniqueInput;
};
/**
 * ModeleContrat findUniqueOrThrow
 */
export type ModeleContratFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * Filter, which ModeleContrat to fetch.
     */
    where: Prisma.ModeleContratWhereUniqueInput;
};
/**
 * ModeleContrat findFirst
 */
export type ModeleContratFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * Filter, which ModeleContrat to fetch.
     */
    where?: Prisma.ModeleContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeleContrats to fetch.
     */
    orderBy?: Prisma.ModeleContratOrderByWithRelationInput | Prisma.ModeleContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ModeleContrats.
     */
    cursor?: Prisma.ModeleContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeleContrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeleContrats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ModeleContrats.
     */
    distinct?: Prisma.ModeleContratScalarFieldEnum | Prisma.ModeleContratScalarFieldEnum[];
};
/**
 * ModeleContrat findFirstOrThrow
 */
export type ModeleContratFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * Filter, which ModeleContrat to fetch.
     */
    where?: Prisma.ModeleContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeleContrats to fetch.
     */
    orderBy?: Prisma.ModeleContratOrderByWithRelationInput | Prisma.ModeleContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ModeleContrats.
     */
    cursor?: Prisma.ModeleContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeleContrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeleContrats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ModeleContrats.
     */
    distinct?: Prisma.ModeleContratScalarFieldEnum | Prisma.ModeleContratScalarFieldEnum[];
};
/**
 * ModeleContrat findMany
 */
export type ModeleContratFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * Filter, which ModeleContrats to fetch.
     */
    where?: Prisma.ModeleContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeleContrats to fetch.
     */
    orderBy?: Prisma.ModeleContratOrderByWithRelationInput | Prisma.ModeleContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ModeleContrats.
     */
    cursor?: Prisma.ModeleContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeleContrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeleContrats.
     */
    skip?: number;
    distinct?: Prisma.ModeleContratScalarFieldEnum | Prisma.ModeleContratScalarFieldEnum[];
};
/**
 * ModeleContrat create
 */
export type ModeleContratCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * The data needed to create a ModeleContrat.
     */
    data: Prisma.XOR<Prisma.ModeleContratCreateInput, Prisma.ModeleContratUncheckedCreateInput>;
};
/**
 * ModeleContrat createMany
 */
export type ModeleContratCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModeleContrats.
     */
    data: Prisma.ModeleContratCreateManyInput | Prisma.ModeleContratCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ModeleContrat createManyAndReturn
 */
export type ModeleContratCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * The data used to create many ModeleContrats.
     */
    data: Prisma.ModeleContratCreateManyInput | Prisma.ModeleContratCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ModeleContrat update
 */
export type ModeleContratUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * The data needed to update a ModeleContrat.
     */
    data: Prisma.XOR<Prisma.ModeleContratUpdateInput, Prisma.ModeleContratUncheckedUpdateInput>;
    /**
     * Choose, which ModeleContrat to update.
     */
    where: Prisma.ModeleContratWhereUniqueInput;
};
/**
 * ModeleContrat updateMany
 */
export type ModeleContratUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ModeleContrats.
     */
    data: Prisma.XOR<Prisma.ModeleContratUpdateManyMutationInput, Prisma.ModeleContratUncheckedUpdateManyInput>;
    /**
     * Filter which ModeleContrats to update
     */
    where?: Prisma.ModeleContratWhereInput;
    /**
     * Limit how many ModeleContrats to update.
     */
    limit?: number;
};
/**
 * ModeleContrat updateManyAndReturn
 */
export type ModeleContratUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * The data used to update ModeleContrats.
     */
    data: Prisma.XOR<Prisma.ModeleContratUpdateManyMutationInput, Prisma.ModeleContratUncheckedUpdateManyInput>;
    /**
     * Filter which ModeleContrats to update
     */
    where?: Prisma.ModeleContratWhereInput;
    /**
     * Limit how many ModeleContrats to update.
     */
    limit?: number;
};
/**
 * ModeleContrat upsert
 */
export type ModeleContratUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * The filter to search for the ModeleContrat to update in case it exists.
     */
    where: Prisma.ModeleContratWhereUniqueInput;
    /**
     * In case the ModeleContrat found by the `where` argument doesn't exist, create a new ModeleContrat with this data.
     */
    create: Prisma.XOR<Prisma.ModeleContratCreateInput, Prisma.ModeleContratUncheckedCreateInput>;
    /**
     * In case the ModeleContrat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ModeleContratUpdateInput, Prisma.ModeleContratUncheckedUpdateInput>;
};
/**
 * ModeleContrat delete
 */
export type ModeleContratDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
    /**
     * Filter which ModeleContrat to delete.
     */
    where: Prisma.ModeleContratWhereUniqueInput;
};
/**
 * ModeleContrat deleteMany
 */
export type ModeleContratDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ModeleContrats to delete
     */
    where?: Prisma.ModeleContratWhereInput;
    /**
     * Limit how many ModeleContrats to delete.
     */
    limit?: number;
};
/**
 * ModeleContrat.contrats
 */
export type ModeleContrat$contratsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: Prisma.ContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contrat
     */
    omit?: Prisma.ContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContratInclude<ExtArgs> | null;
    where?: Prisma.ContratWhereInput;
    orderBy?: Prisma.ContratOrderByWithRelationInput | Prisma.ContratOrderByWithRelationInput[];
    cursor?: Prisma.ContratWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContratScalarFieldEnum | Prisma.ContratScalarFieldEnum[];
};
/**
 * ModeleContrat without action
 */
export type ModeleContratDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeleContrat
     */
    select?: Prisma.ModeleContratSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeleContrat
     */
    omit?: Prisma.ModeleContratOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeleContratInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ModeleContrat.d.ts.map