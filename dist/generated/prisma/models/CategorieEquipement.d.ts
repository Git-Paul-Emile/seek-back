import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CategorieEquipement
 *
 */
export type CategorieEquipementModel = runtime.Types.Result.DefaultSelection<Prisma.$CategorieEquipementPayload>;
export type AggregateCategorieEquipement = {
    _count: CategorieEquipementCountAggregateOutputType | null;
    _avg: CategorieEquipementAvgAggregateOutputType | null;
    _sum: CategorieEquipementSumAggregateOutputType | null;
    _min: CategorieEquipementMinAggregateOutputType | null;
    _max: CategorieEquipementMaxAggregateOutputType | null;
};
export type CategorieEquipementAvgAggregateOutputType = {
    ordre: number | null;
};
export type CategorieEquipementSumAggregateOutputType = {
    ordre: number | null;
};
export type CategorieEquipementMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategorieEquipementMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    slug: string | null;
    actif: boolean | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategorieEquipementCountAggregateOutputType = {
    id: number;
    nom: number;
    slug: number;
    actif: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CategorieEquipementAvgAggregateInputType = {
    ordre?: true;
};
export type CategorieEquipementSumAggregateInputType = {
    ordre?: true;
};
export type CategorieEquipementMinAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategorieEquipementMaxAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategorieEquipementCountAggregateInputType = {
    id?: true;
    nom?: true;
    slug?: true;
    actif?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CategorieEquipementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieEquipement to aggregate.
     */
    where?: Prisma.CategorieEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieEquipements to fetch.
     */
    orderBy?: Prisma.CategorieEquipementOrderByWithRelationInput | Prisma.CategorieEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CategorieEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieEquipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CategorieEquipements
    **/
    _count?: true | CategorieEquipementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CategorieEquipementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CategorieEquipementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CategorieEquipementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CategorieEquipementMaxAggregateInputType;
};
export type GetCategorieEquipementAggregateType<T extends CategorieEquipementAggregateArgs> = {
    [P in keyof T & keyof AggregateCategorieEquipement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategorieEquipement[P]> : Prisma.GetScalarType<T[P], AggregateCategorieEquipement[P]>;
};
export type CategorieEquipementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategorieEquipementWhereInput;
    orderBy?: Prisma.CategorieEquipementOrderByWithAggregationInput | Prisma.CategorieEquipementOrderByWithAggregationInput[];
    by: Prisma.CategorieEquipementScalarFieldEnum[] | Prisma.CategorieEquipementScalarFieldEnum;
    having?: Prisma.CategorieEquipementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategorieEquipementCountAggregateInputType | true;
    _avg?: CategorieEquipementAvgAggregateInputType;
    _sum?: CategorieEquipementSumAggregateInputType;
    _min?: CategorieEquipementMinAggregateInputType;
    _max?: CategorieEquipementMaxAggregateInputType;
};
export type CategorieEquipementGroupByOutputType = {
    id: string;
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CategorieEquipementCountAggregateOutputType | null;
    _avg: CategorieEquipementAvgAggregateOutputType | null;
    _sum: CategorieEquipementSumAggregateOutputType | null;
    _min: CategorieEquipementMinAggregateOutputType | null;
    _max: CategorieEquipementMaxAggregateOutputType | null;
};
type GetCategorieEquipementGroupByPayload<T extends CategorieEquipementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategorieEquipementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategorieEquipementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategorieEquipementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategorieEquipementGroupByOutputType[P]>;
}>>;
export type CategorieEquipementWhereInput = {
    AND?: Prisma.CategorieEquipementWhereInput | Prisma.CategorieEquipementWhereInput[];
    OR?: Prisma.CategorieEquipementWhereInput[];
    NOT?: Prisma.CategorieEquipementWhereInput | Prisma.CategorieEquipementWhereInput[];
    id?: Prisma.StringFilter<"CategorieEquipement"> | string;
    nom?: Prisma.StringFilter<"CategorieEquipement"> | string;
    slug?: Prisma.StringFilter<"CategorieEquipement"> | string;
    actif?: Prisma.BoolFilter<"CategorieEquipement"> | boolean;
    ordre?: Prisma.IntFilter<"CategorieEquipement"> | number;
    createdAt?: Prisma.DateTimeFilter<"CategorieEquipement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CategorieEquipement"> | Date | string;
    equipements?: Prisma.EquipementListRelationFilter;
};
export type CategorieEquipementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    equipements?: Prisma.EquipementOrderByRelationAggregateInput;
};
export type CategorieEquipementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom?: string;
    slug?: string;
    AND?: Prisma.CategorieEquipementWhereInput | Prisma.CategorieEquipementWhereInput[];
    OR?: Prisma.CategorieEquipementWhereInput[];
    NOT?: Prisma.CategorieEquipementWhereInput | Prisma.CategorieEquipementWhereInput[];
    actif?: Prisma.BoolFilter<"CategorieEquipement"> | boolean;
    ordre?: Prisma.IntFilter<"CategorieEquipement"> | number;
    createdAt?: Prisma.DateTimeFilter<"CategorieEquipement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CategorieEquipement"> | Date | string;
    equipements?: Prisma.EquipementListRelationFilter;
}, "id" | "nom" | "slug">;
export type CategorieEquipementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CategorieEquipementCountOrderByAggregateInput;
    _avg?: Prisma.CategorieEquipementAvgOrderByAggregateInput;
    _max?: Prisma.CategorieEquipementMaxOrderByAggregateInput;
    _min?: Prisma.CategorieEquipementMinOrderByAggregateInput;
    _sum?: Prisma.CategorieEquipementSumOrderByAggregateInput;
};
export type CategorieEquipementScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategorieEquipementScalarWhereWithAggregatesInput | Prisma.CategorieEquipementScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategorieEquipementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategorieEquipementScalarWhereWithAggregatesInput | Prisma.CategorieEquipementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CategorieEquipement"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"CategorieEquipement"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"CategorieEquipement"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"CategorieEquipement"> | boolean;
    ordre?: Prisma.IntWithAggregatesFilter<"CategorieEquipement"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CategorieEquipement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CategorieEquipement"> | Date | string;
};
export type CategorieEquipementCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.EquipementCreateNestedManyWithoutCategorieInput;
};
export type CategorieEquipementUncheckedCreateInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.EquipementUncheckedCreateNestedManyWithoutCategorieInput;
};
export type CategorieEquipementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.EquipementUpdateManyWithoutCategorieNestedInput;
};
export type CategorieEquipementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.EquipementUncheckedUpdateManyWithoutCategorieNestedInput;
};
export type CategorieEquipementCreateManyInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategorieEquipementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategorieEquipementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategorieEquipementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategorieEquipementAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type CategorieEquipementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategorieEquipementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategorieEquipementSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type CategorieEquipementScalarRelationFilter = {
    is?: Prisma.CategorieEquipementWhereInput;
    isNot?: Prisma.CategorieEquipementWhereInput;
};
export type CategorieEquipementCreateNestedOneWithoutEquipementsInput = {
    create?: Prisma.XOR<Prisma.CategorieEquipementCreateWithoutEquipementsInput, Prisma.CategorieEquipementUncheckedCreateWithoutEquipementsInput>;
    connectOrCreate?: Prisma.CategorieEquipementCreateOrConnectWithoutEquipementsInput;
    connect?: Prisma.CategorieEquipementWhereUniqueInput;
};
export type CategorieEquipementUpdateOneRequiredWithoutEquipementsNestedInput = {
    create?: Prisma.XOR<Prisma.CategorieEquipementCreateWithoutEquipementsInput, Prisma.CategorieEquipementUncheckedCreateWithoutEquipementsInput>;
    connectOrCreate?: Prisma.CategorieEquipementCreateOrConnectWithoutEquipementsInput;
    upsert?: Prisma.CategorieEquipementUpsertWithoutEquipementsInput;
    connect?: Prisma.CategorieEquipementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategorieEquipementUpdateToOneWithWhereWithoutEquipementsInput, Prisma.CategorieEquipementUpdateWithoutEquipementsInput>, Prisma.CategorieEquipementUncheckedUpdateWithoutEquipementsInput>;
};
export type CategorieEquipementCreateWithoutEquipementsInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategorieEquipementUncheckedCreateWithoutEquipementsInput = {
    id?: string;
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategorieEquipementCreateOrConnectWithoutEquipementsInput = {
    where: Prisma.CategorieEquipementWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategorieEquipementCreateWithoutEquipementsInput, Prisma.CategorieEquipementUncheckedCreateWithoutEquipementsInput>;
};
export type CategorieEquipementUpsertWithoutEquipementsInput = {
    update: Prisma.XOR<Prisma.CategorieEquipementUpdateWithoutEquipementsInput, Prisma.CategorieEquipementUncheckedUpdateWithoutEquipementsInput>;
    create: Prisma.XOR<Prisma.CategorieEquipementCreateWithoutEquipementsInput, Prisma.CategorieEquipementUncheckedCreateWithoutEquipementsInput>;
    where?: Prisma.CategorieEquipementWhereInput;
};
export type CategorieEquipementUpdateToOneWithWhereWithoutEquipementsInput = {
    where?: Prisma.CategorieEquipementWhereInput;
    data: Prisma.XOR<Prisma.CategorieEquipementUpdateWithoutEquipementsInput, Prisma.CategorieEquipementUncheckedUpdateWithoutEquipementsInput>;
};
export type CategorieEquipementUpdateWithoutEquipementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategorieEquipementUncheckedUpdateWithoutEquipementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CategorieEquipementCountOutputType
 */
export type CategorieEquipementCountOutputType = {
    equipements: number;
};
export type CategorieEquipementCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    equipements?: boolean | CategorieEquipementCountOutputTypeCountEquipementsArgs;
};
/**
 * CategorieEquipementCountOutputType without action
 */
export type CategorieEquipementCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipementCountOutputType
     */
    select?: Prisma.CategorieEquipementCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CategorieEquipementCountOutputType without action
 */
export type CategorieEquipementCountOutputTypeCountEquipementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EquipementWhereInput;
};
export type CategorieEquipementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    equipements?: boolean | Prisma.CategorieEquipement$equipementsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategorieEquipementCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categorieEquipement"]>;
export type CategorieEquipementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["categorieEquipement"]>;
export type CategorieEquipementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["categorieEquipement"]>;
export type CategorieEquipementSelectScalar = {
    id?: boolean;
    nom?: boolean;
    slug?: boolean;
    actif?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CategorieEquipementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "slug" | "actif" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["categorieEquipement"]>;
export type CategorieEquipementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    equipements?: boolean | Prisma.CategorieEquipement$equipementsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategorieEquipementCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategorieEquipementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CategorieEquipementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CategorieEquipementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CategorieEquipement";
    objects: {
        equipements: Prisma.$EquipementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["categorieEquipement"]>;
    composites: {};
};
export type CategorieEquipementGetPayload<S extends boolean | null | undefined | CategorieEquipementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload, S>;
export type CategorieEquipementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategorieEquipementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategorieEquipementCountAggregateInputType | true;
};
export interface CategorieEquipementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CategorieEquipement'];
        meta: {
            name: 'CategorieEquipement';
        };
    };
    /**
     * Find zero or one CategorieEquipement that matches the filter.
     * @param {CategorieEquipementFindUniqueArgs} args - Arguments to find a CategorieEquipement
     * @example
     * // Get one CategorieEquipement
     * const categorieEquipement = await prisma.categorieEquipement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieEquipementFindUniqueArgs>(args: Prisma.SelectSubset<T, CategorieEquipementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CategorieEquipement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieEquipementFindUniqueOrThrowArgs} args - Arguments to find a CategorieEquipement
     * @example
     * // Get one CategorieEquipement
     * const categorieEquipement = await prisma.categorieEquipement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieEquipementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategorieEquipementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CategorieEquipement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieEquipementFindFirstArgs} args - Arguments to find a CategorieEquipement
     * @example
     * // Get one CategorieEquipement
     * const categorieEquipement = await prisma.categorieEquipement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieEquipementFindFirstArgs>(args?: Prisma.SelectSubset<T, CategorieEquipementFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CategorieEquipement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieEquipementFindFirstOrThrowArgs} args - Arguments to find a CategorieEquipement
     * @example
     * // Get one CategorieEquipement
     * const categorieEquipement = await prisma.categorieEquipement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieEquipementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategorieEquipementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CategorieEquipements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieEquipementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategorieEquipements
     * const categorieEquipements = await prisma.categorieEquipement.findMany()
     *
     * // Get first 10 CategorieEquipements
     * const categorieEquipements = await prisma.categorieEquipement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categorieEquipementWithIdOnly = await prisma.categorieEquipement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategorieEquipementFindManyArgs>(args?: Prisma.SelectSubset<T, CategorieEquipementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CategorieEquipement.
     * @param {CategorieEquipementCreateArgs} args - Arguments to create a CategorieEquipement.
     * @example
     * // Create one CategorieEquipement
     * const CategorieEquipement = await prisma.categorieEquipement.create({
     *   data: {
     *     // ... data to create a CategorieEquipement
     *   }
     * })
     *
     */
    create<T extends CategorieEquipementCreateArgs>(args: Prisma.SelectSubset<T, CategorieEquipementCreateArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CategorieEquipements.
     * @param {CategorieEquipementCreateManyArgs} args - Arguments to create many CategorieEquipements.
     * @example
     * // Create many CategorieEquipements
     * const categorieEquipement = await prisma.categorieEquipement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategorieEquipementCreateManyArgs>(args?: Prisma.SelectSubset<T, CategorieEquipementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CategorieEquipements and returns the data saved in the database.
     * @param {CategorieEquipementCreateManyAndReturnArgs} args - Arguments to create many CategorieEquipements.
     * @example
     * // Create many CategorieEquipements
     * const categorieEquipement = await prisma.categorieEquipement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CategorieEquipements and only return the `id`
     * const categorieEquipementWithIdOnly = await prisma.categorieEquipement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategorieEquipementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategorieEquipementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CategorieEquipement.
     * @param {CategorieEquipementDeleteArgs} args - Arguments to delete one CategorieEquipement.
     * @example
     * // Delete one CategorieEquipement
     * const CategorieEquipement = await prisma.categorieEquipement.delete({
     *   where: {
     *     // ... filter to delete one CategorieEquipement
     *   }
     * })
     *
     */
    delete<T extends CategorieEquipementDeleteArgs>(args: Prisma.SelectSubset<T, CategorieEquipementDeleteArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CategorieEquipement.
     * @param {CategorieEquipementUpdateArgs} args - Arguments to update one CategorieEquipement.
     * @example
     * // Update one CategorieEquipement
     * const categorieEquipement = await prisma.categorieEquipement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategorieEquipementUpdateArgs>(args: Prisma.SelectSubset<T, CategorieEquipementUpdateArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CategorieEquipements.
     * @param {CategorieEquipementDeleteManyArgs} args - Arguments to filter CategorieEquipements to delete.
     * @example
     * // Delete a few CategorieEquipements
     * const { count } = await prisma.categorieEquipement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategorieEquipementDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategorieEquipementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CategorieEquipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieEquipementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategorieEquipements
     * const categorieEquipement = await prisma.categorieEquipement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategorieEquipementUpdateManyArgs>(args: Prisma.SelectSubset<T, CategorieEquipementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CategorieEquipements and returns the data updated in the database.
     * @param {CategorieEquipementUpdateManyAndReturnArgs} args - Arguments to update many CategorieEquipements.
     * @example
     * // Update many CategorieEquipements
     * const categorieEquipement = await prisma.categorieEquipement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CategorieEquipements and only return the `id`
     * const categorieEquipementWithIdOnly = await prisma.categorieEquipement.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategorieEquipementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategorieEquipementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CategorieEquipement.
     * @param {CategorieEquipementUpsertArgs} args - Arguments to update or create a CategorieEquipement.
     * @example
     * // Update or create a CategorieEquipement
     * const categorieEquipement = await prisma.categorieEquipement.upsert({
     *   create: {
     *     // ... data to create a CategorieEquipement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategorieEquipement we want to update
     *   }
     * })
     */
    upsert<T extends CategorieEquipementUpsertArgs>(args: Prisma.SelectSubset<T, CategorieEquipementUpsertArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CategorieEquipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieEquipementCountArgs} args - Arguments to filter CategorieEquipements to count.
     * @example
     * // Count the number of CategorieEquipements
     * const count = await prisma.categorieEquipement.count({
     *   where: {
     *     // ... the filter for the CategorieEquipements we want to count
     *   }
     * })
    **/
    count<T extends CategorieEquipementCountArgs>(args?: Prisma.Subset<T, CategorieEquipementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategorieEquipementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CategorieEquipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieEquipementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieEquipementAggregateArgs>(args: Prisma.Subset<T, CategorieEquipementAggregateArgs>): Prisma.PrismaPromise<GetCategorieEquipementAggregateType<T>>;
    /**
     * Group by CategorieEquipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieEquipementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CategorieEquipementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategorieEquipementGroupByArgs['orderBy'];
    } : {
        orderBy?: CategorieEquipementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategorieEquipementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieEquipementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CategorieEquipement model
     */
    readonly fields: CategorieEquipementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CategorieEquipement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CategorieEquipementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    equipements<T extends Prisma.CategorieEquipement$equipementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategorieEquipement$equipementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the CategorieEquipement model
 */
export interface CategorieEquipementFieldRefs {
    readonly id: Prisma.FieldRef<"CategorieEquipement", 'String'>;
    readonly nom: Prisma.FieldRef<"CategorieEquipement", 'String'>;
    readonly slug: Prisma.FieldRef<"CategorieEquipement", 'String'>;
    readonly actif: Prisma.FieldRef<"CategorieEquipement", 'Boolean'>;
    readonly ordre: Prisma.FieldRef<"CategorieEquipement", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CategorieEquipement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CategorieEquipement", 'DateTime'>;
}
/**
 * CategorieEquipement findUnique
 */
export type CategorieEquipementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieEquipement to fetch.
     */
    where: Prisma.CategorieEquipementWhereUniqueInput;
};
/**
 * CategorieEquipement findUniqueOrThrow
 */
export type CategorieEquipementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieEquipement to fetch.
     */
    where: Prisma.CategorieEquipementWhereUniqueInput;
};
/**
 * CategorieEquipement findFirst
 */
export type CategorieEquipementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieEquipement to fetch.
     */
    where?: Prisma.CategorieEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieEquipements to fetch.
     */
    orderBy?: Prisma.CategorieEquipementOrderByWithRelationInput | Prisma.CategorieEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategorieEquipements.
     */
    cursor?: Prisma.CategorieEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieEquipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategorieEquipements.
     */
    distinct?: Prisma.CategorieEquipementScalarFieldEnum | Prisma.CategorieEquipementScalarFieldEnum[];
};
/**
 * CategorieEquipement findFirstOrThrow
 */
export type CategorieEquipementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieEquipement to fetch.
     */
    where?: Prisma.CategorieEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieEquipements to fetch.
     */
    orderBy?: Prisma.CategorieEquipementOrderByWithRelationInput | Prisma.CategorieEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategorieEquipements.
     */
    cursor?: Prisma.CategorieEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieEquipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategorieEquipements.
     */
    distinct?: Prisma.CategorieEquipementScalarFieldEnum | Prisma.CategorieEquipementScalarFieldEnum[];
};
/**
 * CategorieEquipement findMany
 */
export type CategorieEquipementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * Filter, which CategorieEquipements to fetch.
     */
    where?: Prisma.CategorieEquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategorieEquipements to fetch.
     */
    orderBy?: Prisma.CategorieEquipementOrderByWithRelationInput | Prisma.CategorieEquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CategorieEquipements.
     */
    cursor?: Prisma.CategorieEquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategorieEquipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategorieEquipements.
     */
    skip?: number;
    distinct?: Prisma.CategorieEquipementScalarFieldEnum | Prisma.CategorieEquipementScalarFieldEnum[];
};
/**
 * CategorieEquipement create
 */
export type CategorieEquipementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * The data needed to create a CategorieEquipement.
     */
    data: Prisma.XOR<Prisma.CategorieEquipementCreateInput, Prisma.CategorieEquipementUncheckedCreateInput>;
};
/**
 * CategorieEquipement createMany
 */
export type CategorieEquipementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategorieEquipements.
     */
    data: Prisma.CategorieEquipementCreateManyInput | Prisma.CategorieEquipementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CategorieEquipement createManyAndReturn
 */
export type CategorieEquipementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * The data used to create many CategorieEquipements.
     */
    data: Prisma.CategorieEquipementCreateManyInput | Prisma.CategorieEquipementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CategorieEquipement update
 */
export type CategorieEquipementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * The data needed to update a CategorieEquipement.
     */
    data: Prisma.XOR<Prisma.CategorieEquipementUpdateInput, Prisma.CategorieEquipementUncheckedUpdateInput>;
    /**
     * Choose, which CategorieEquipement to update.
     */
    where: Prisma.CategorieEquipementWhereUniqueInput;
};
/**
 * CategorieEquipement updateMany
 */
export type CategorieEquipementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CategorieEquipements.
     */
    data: Prisma.XOR<Prisma.CategorieEquipementUpdateManyMutationInput, Prisma.CategorieEquipementUncheckedUpdateManyInput>;
    /**
     * Filter which CategorieEquipements to update
     */
    where?: Prisma.CategorieEquipementWhereInput;
    /**
     * Limit how many CategorieEquipements to update.
     */
    limit?: number;
};
/**
 * CategorieEquipement updateManyAndReturn
 */
export type CategorieEquipementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * The data used to update CategorieEquipements.
     */
    data: Prisma.XOR<Prisma.CategorieEquipementUpdateManyMutationInput, Prisma.CategorieEquipementUncheckedUpdateManyInput>;
    /**
     * Filter which CategorieEquipements to update
     */
    where?: Prisma.CategorieEquipementWhereInput;
    /**
     * Limit how many CategorieEquipements to update.
     */
    limit?: number;
};
/**
 * CategorieEquipement upsert
 */
export type CategorieEquipementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * The filter to search for the CategorieEquipement to update in case it exists.
     */
    where: Prisma.CategorieEquipementWhereUniqueInput;
    /**
     * In case the CategorieEquipement found by the `where` argument doesn't exist, create a new CategorieEquipement with this data.
     */
    create: Prisma.XOR<Prisma.CategorieEquipementCreateInput, Prisma.CategorieEquipementUncheckedCreateInput>;
    /**
     * In case the CategorieEquipement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CategorieEquipementUpdateInput, Prisma.CategorieEquipementUncheckedUpdateInput>;
};
/**
 * CategorieEquipement delete
 */
export type CategorieEquipementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
    /**
     * Filter which CategorieEquipement to delete.
     */
    where: Prisma.CategorieEquipementWhereUniqueInput;
};
/**
 * CategorieEquipement deleteMany
 */
export type CategorieEquipementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieEquipements to delete
     */
    where?: Prisma.CategorieEquipementWhereInput;
    /**
     * Limit how many CategorieEquipements to delete.
     */
    limit?: number;
};
/**
 * CategorieEquipement.equipements
 */
export type CategorieEquipement$equipementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: Prisma.EquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Equipement
     */
    omit?: Prisma.EquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EquipementInclude<ExtArgs> | null;
    where?: Prisma.EquipementWhereInput;
    orderBy?: Prisma.EquipementOrderByWithRelationInput | Prisma.EquipementOrderByWithRelationInput[];
    cursor?: Prisma.EquipementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EquipementScalarFieldEnum | Prisma.EquipementScalarFieldEnum[];
};
/**
 * CategorieEquipement without action
 */
export type CategorieEquipementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieEquipement
     */
    select?: Prisma.CategorieEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategorieEquipement
     */
    omit?: Prisma.CategorieEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategorieEquipementInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CategorieEquipement.d.ts.map