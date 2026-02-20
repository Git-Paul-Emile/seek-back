import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Equipement
 *
 */
export type EquipementModel = runtime.Types.Result.DefaultSelection<Prisma.$EquipementPayload>;
export type AggregateEquipement = {
    _count: EquipementCountAggregateOutputType | null;
    _min: EquipementMinAggregateOutputType | null;
    _max: EquipementMaxAggregateOutputType | null;
};
export type EquipementMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    categorieId: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EquipementMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    categorieId: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EquipementCountAggregateOutputType = {
    id: number;
    nom: number;
    categorieId: number;
    actif: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EquipementMinAggregateInputType = {
    id?: true;
    nom?: true;
    categorieId?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EquipementMaxAggregateInputType = {
    id?: true;
    nom?: true;
    categorieId?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EquipementCountAggregateInputType = {
    id?: true;
    nom?: true;
    categorieId?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EquipementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Equipement to aggregate.
     */
    where?: Prisma.EquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Equipements to fetch.
     */
    orderBy?: Prisma.EquipementOrderByWithRelationInput | Prisma.EquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Equipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Equipements
    **/
    _count?: true | EquipementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EquipementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EquipementMaxAggregateInputType;
};
export type GetEquipementAggregateType<T extends EquipementAggregateArgs> = {
    [P in keyof T & keyof AggregateEquipement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEquipement[P]> : Prisma.GetScalarType<T[P], AggregateEquipement[P]>;
};
export type EquipementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EquipementWhereInput;
    orderBy?: Prisma.EquipementOrderByWithAggregationInput | Prisma.EquipementOrderByWithAggregationInput[];
    by: Prisma.EquipementScalarFieldEnum[] | Prisma.EquipementScalarFieldEnum;
    having?: Prisma.EquipementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EquipementCountAggregateInputType | true;
    _min?: EquipementMinAggregateInputType;
    _max?: EquipementMaxAggregateInputType;
};
export type EquipementGroupByOutputType = {
    id: string;
    nom: string;
    categorieId: string;
    actif: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: EquipementCountAggregateOutputType | null;
    _min: EquipementMinAggregateOutputType | null;
    _max: EquipementMaxAggregateOutputType | null;
};
type GetEquipementGroupByPayload<T extends EquipementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EquipementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EquipementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EquipementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EquipementGroupByOutputType[P]>;
}>>;
export type EquipementWhereInput = {
    AND?: Prisma.EquipementWhereInput | Prisma.EquipementWhereInput[];
    OR?: Prisma.EquipementWhereInput[];
    NOT?: Prisma.EquipementWhereInput | Prisma.EquipementWhereInput[];
    id?: Prisma.StringFilter<"Equipement"> | string;
    nom?: Prisma.StringFilter<"Equipement"> | string;
    categorieId?: Prisma.StringFilter<"Equipement"> | string;
    actif?: Prisma.BoolFilter<"Equipement"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Equipement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Equipement"> | Date | string;
    categorie?: Prisma.XOR<Prisma.CategorieEquipementScalarRelationFilter, Prisma.CategorieEquipementWhereInput>;
};
export type EquipementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categorie?: Prisma.CategorieEquipementOrderByWithRelationInput;
};
export type EquipementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom_categorieId?: Prisma.EquipementNomCategorieIdCompoundUniqueInput;
    AND?: Prisma.EquipementWhereInput | Prisma.EquipementWhereInput[];
    OR?: Prisma.EquipementWhereInput[];
    NOT?: Prisma.EquipementWhereInput | Prisma.EquipementWhereInput[];
    nom?: Prisma.StringFilter<"Equipement"> | string;
    categorieId?: Prisma.StringFilter<"Equipement"> | string;
    actif?: Prisma.BoolFilter<"Equipement"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Equipement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Equipement"> | Date | string;
    categorie?: Prisma.XOR<Prisma.CategorieEquipementScalarRelationFilter, Prisma.CategorieEquipementWhereInput>;
}, "id" | "nom_categorieId">;
export type EquipementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EquipementCountOrderByAggregateInput;
    _max?: Prisma.EquipementMaxOrderByAggregateInput;
    _min?: Prisma.EquipementMinOrderByAggregateInput;
};
export type EquipementScalarWhereWithAggregatesInput = {
    AND?: Prisma.EquipementScalarWhereWithAggregatesInput | Prisma.EquipementScalarWhereWithAggregatesInput[];
    OR?: Prisma.EquipementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EquipementScalarWhereWithAggregatesInput | Prisma.EquipementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Equipement"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Equipement"> | string;
    categorieId?: Prisma.StringWithAggregatesFilter<"Equipement"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"Equipement"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Equipement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Equipement"> | Date | string;
};
export type EquipementCreateInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categorie: Prisma.CategorieEquipementCreateNestedOneWithoutEquipementsInput;
};
export type EquipementUncheckedCreateInput = {
    id?: string;
    nom: string;
    categorieId: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EquipementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categorie?: Prisma.CategorieEquipementUpdateOneRequiredWithoutEquipementsNestedInput;
};
export type EquipementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EquipementCreateManyInput = {
    id?: string;
    nom: string;
    categorieId: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EquipementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EquipementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    categorieId?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EquipementListRelationFilter = {
    every?: Prisma.EquipementWhereInput;
    some?: Prisma.EquipementWhereInput;
    none?: Prisma.EquipementWhereInput;
};
export type EquipementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EquipementNomCategorieIdCompoundUniqueInput = {
    nom: string;
    categorieId: string;
};
export type EquipementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EquipementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EquipementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    categorieId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EquipementCreateNestedManyWithoutCategorieInput = {
    create?: Prisma.XOR<Prisma.EquipementCreateWithoutCategorieInput, Prisma.EquipementUncheckedCreateWithoutCategorieInput> | Prisma.EquipementCreateWithoutCategorieInput[] | Prisma.EquipementUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.EquipementCreateOrConnectWithoutCategorieInput | Prisma.EquipementCreateOrConnectWithoutCategorieInput[];
    createMany?: Prisma.EquipementCreateManyCategorieInputEnvelope;
    connect?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
};
export type EquipementUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: Prisma.XOR<Prisma.EquipementCreateWithoutCategorieInput, Prisma.EquipementUncheckedCreateWithoutCategorieInput> | Prisma.EquipementCreateWithoutCategorieInput[] | Prisma.EquipementUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.EquipementCreateOrConnectWithoutCategorieInput | Prisma.EquipementCreateOrConnectWithoutCategorieInput[];
    createMany?: Prisma.EquipementCreateManyCategorieInputEnvelope;
    connect?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
};
export type EquipementUpdateManyWithoutCategorieNestedInput = {
    create?: Prisma.XOR<Prisma.EquipementCreateWithoutCategorieInput, Prisma.EquipementUncheckedCreateWithoutCategorieInput> | Prisma.EquipementCreateWithoutCategorieInput[] | Prisma.EquipementUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.EquipementCreateOrConnectWithoutCategorieInput | Prisma.EquipementCreateOrConnectWithoutCategorieInput[];
    upsert?: Prisma.EquipementUpsertWithWhereUniqueWithoutCategorieInput | Prisma.EquipementUpsertWithWhereUniqueWithoutCategorieInput[];
    createMany?: Prisma.EquipementCreateManyCategorieInputEnvelope;
    set?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    disconnect?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    delete?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    connect?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    update?: Prisma.EquipementUpdateWithWhereUniqueWithoutCategorieInput | Prisma.EquipementUpdateWithWhereUniqueWithoutCategorieInput[];
    updateMany?: Prisma.EquipementUpdateManyWithWhereWithoutCategorieInput | Prisma.EquipementUpdateManyWithWhereWithoutCategorieInput[];
    deleteMany?: Prisma.EquipementScalarWhereInput | Prisma.EquipementScalarWhereInput[];
};
export type EquipementUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: Prisma.XOR<Prisma.EquipementCreateWithoutCategorieInput, Prisma.EquipementUncheckedCreateWithoutCategorieInput> | Prisma.EquipementCreateWithoutCategorieInput[] | Prisma.EquipementUncheckedCreateWithoutCategorieInput[];
    connectOrCreate?: Prisma.EquipementCreateOrConnectWithoutCategorieInput | Prisma.EquipementCreateOrConnectWithoutCategorieInput[];
    upsert?: Prisma.EquipementUpsertWithWhereUniqueWithoutCategorieInput | Prisma.EquipementUpsertWithWhereUniqueWithoutCategorieInput[];
    createMany?: Prisma.EquipementCreateManyCategorieInputEnvelope;
    set?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    disconnect?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    delete?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    connect?: Prisma.EquipementWhereUniqueInput | Prisma.EquipementWhereUniqueInput[];
    update?: Prisma.EquipementUpdateWithWhereUniqueWithoutCategorieInput | Prisma.EquipementUpdateWithWhereUniqueWithoutCategorieInput[];
    updateMany?: Prisma.EquipementUpdateManyWithWhereWithoutCategorieInput | Prisma.EquipementUpdateManyWithWhereWithoutCategorieInput[];
    deleteMany?: Prisma.EquipementScalarWhereInput | Prisma.EquipementScalarWhereInput[];
};
export type EquipementCreateWithoutCategorieInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EquipementUncheckedCreateWithoutCategorieInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EquipementCreateOrConnectWithoutCategorieInput = {
    where: Prisma.EquipementWhereUniqueInput;
    create: Prisma.XOR<Prisma.EquipementCreateWithoutCategorieInput, Prisma.EquipementUncheckedCreateWithoutCategorieInput>;
};
export type EquipementCreateManyCategorieInputEnvelope = {
    data: Prisma.EquipementCreateManyCategorieInput | Prisma.EquipementCreateManyCategorieInput[];
    skipDuplicates?: boolean;
};
export type EquipementUpsertWithWhereUniqueWithoutCategorieInput = {
    where: Prisma.EquipementWhereUniqueInput;
    update: Prisma.XOR<Prisma.EquipementUpdateWithoutCategorieInput, Prisma.EquipementUncheckedUpdateWithoutCategorieInput>;
    create: Prisma.XOR<Prisma.EquipementCreateWithoutCategorieInput, Prisma.EquipementUncheckedCreateWithoutCategorieInput>;
};
export type EquipementUpdateWithWhereUniqueWithoutCategorieInput = {
    where: Prisma.EquipementWhereUniqueInput;
    data: Prisma.XOR<Prisma.EquipementUpdateWithoutCategorieInput, Prisma.EquipementUncheckedUpdateWithoutCategorieInput>;
};
export type EquipementUpdateManyWithWhereWithoutCategorieInput = {
    where: Prisma.EquipementScalarWhereInput;
    data: Prisma.XOR<Prisma.EquipementUpdateManyMutationInput, Prisma.EquipementUncheckedUpdateManyWithoutCategorieInput>;
};
export type EquipementScalarWhereInput = {
    AND?: Prisma.EquipementScalarWhereInput | Prisma.EquipementScalarWhereInput[];
    OR?: Prisma.EquipementScalarWhereInput[];
    NOT?: Prisma.EquipementScalarWhereInput | Prisma.EquipementScalarWhereInput[];
    id?: Prisma.StringFilter<"Equipement"> | string;
    nom?: Prisma.StringFilter<"Equipement"> | string;
    categorieId?: Prisma.StringFilter<"Equipement"> | string;
    actif?: Prisma.BoolFilter<"Equipement"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Equipement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Equipement"> | Date | string;
};
export type EquipementCreateManyCategorieInput = {
    id?: string;
    nom: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EquipementUpdateWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EquipementUncheckedUpdateWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EquipementUncheckedUpdateManyWithoutCategorieInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EquipementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categorie?: boolean | Prisma.CategorieEquipementDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["equipement"]>;
export type EquipementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categorie?: boolean | Prisma.CategorieEquipementDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["equipement"]>;
export type EquipementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categorie?: boolean | Prisma.CategorieEquipementDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["equipement"]>;
export type EquipementSelectScalar = {
    id?: boolean;
    nom?: boolean;
    categorieId?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EquipementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "categorieId" | "actif" | "createdAt" | "updatedAt", ExtArgs["result"]["equipement"]>;
export type EquipementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.CategorieEquipementDefaultArgs<ExtArgs>;
};
export type EquipementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.CategorieEquipementDefaultArgs<ExtArgs>;
};
export type EquipementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categorie?: boolean | Prisma.CategorieEquipementDefaultArgs<ExtArgs>;
};
export type $EquipementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Equipement";
    objects: {
        categorie: Prisma.$CategorieEquipementPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        categorieId: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["equipement"]>;
    composites: {};
};
export type EquipementGetPayload<S extends boolean | null | undefined | EquipementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EquipementPayload, S>;
export type EquipementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EquipementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EquipementCountAggregateInputType | true;
};
export interface EquipementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Equipement'];
        meta: {
            name: 'Equipement';
        };
    };
    /**
     * Find zero or one Equipement that matches the filter.
     * @param {EquipementFindUniqueArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipementFindUniqueArgs>(args: Prisma.SelectSubset<T, EquipementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Equipement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipementFindUniqueOrThrowArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EquipementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Equipement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementFindFirstArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipementFindFirstArgs>(args?: Prisma.SelectSubset<T, EquipementFindFirstArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Equipement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementFindFirstOrThrowArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EquipementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Equipements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipements
     * const equipements = await prisma.equipement.findMany()
     *
     * // Get first 10 Equipements
     * const equipements = await prisma.equipement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const equipementWithIdOnly = await prisma.equipement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EquipementFindManyArgs>(args?: Prisma.SelectSubset<T, EquipementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Equipement.
     * @param {EquipementCreateArgs} args - Arguments to create a Equipement.
     * @example
     * // Create one Equipement
     * const Equipement = await prisma.equipement.create({
     *   data: {
     *     // ... data to create a Equipement
     *   }
     * })
     *
     */
    create<T extends EquipementCreateArgs>(args: Prisma.SelectSubset<T, EquipementCreateArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Equipements.
     * @param {EquipementCreateManyArgs} args - Arguments to create many Equipements.
     * @example
     * // Create many Equipements
     * const equipement = await prisma.equipement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EquipementCreateManyArgs>(args?: Prisma.SelectSubset<T, EquipementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Equipements and returns the data saved in the database.
     * @param {EquipementCreateManyAndReturnArgs} args - Arguments to create many Equipements.
     * @example
     * // Create many Equipements
     * const equipement = await prisma.equipement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Equipements and only return the `id`
     * const equipementWithIdOnly = await prisma.equipement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EquipementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EquipementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Equipement.
     * @param {EquipementDeleteArgs} args - Arguments to delete one Equipement.
     * @example
     * // Delete one Equipement
     * const Equipement = await prisma.equipement.delete({
     *   where: {
     *     // ... filter to delete one Equipement
     *   }
     * })
     *
     */
    delete<T extends EquipementDeleteArgs>(args: Prisma.SelectSubset<T, EquipementDeleteArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Equipement.
     * @param {EquipementUpdateArgs} args - Arguments to update one Equipement.
     * @example
     * // Update one Equipement
     * const equipement = await prisma.equipement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EquipementUpdateArgs>(args: Prisma.SelectSubset<T, EquipementUpdateArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Equipements.
     * @param {EquipementDeleteManyArgs} args - Arguments to filter Equipements to delete.
     * @example
     * // Delete a few Equipements
     * const { count } = await prisma.equipement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EquipementDeleteManyArgs>(args?: Prisma.SelectSubset<T, EquipementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Equipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipements
     * const equipement = await prisma.equipement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EquipementUpdateManyArgs>(args: Prisma.SelectSubset<T, EquipementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Equipements and returns the data updated in the database.
     * @param {EquipementUpdateManyAndReturnArgs} args - Arguments to update many Equipements.
     * @example
     * // Update many Equipements
     * const equipement = await prisma.equipement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Equipements and only return the `id`
     * const equipementWithIdOnly = await prisma.equipement.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EquipementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Equipement.
     * @param {EquipementUpsertArgs} args - Arguments to update or create a Equipement.
     * @example
     * // Update or create a Equipement
     * const equipement = await prisma.equipement.upsert({
     *   create: {
     *     // ... data to create a Equipement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipement we want to update
     *   }
     * })
     */
    upsert<T extends EquipementUpsertArgs>(args: Prisma.SelectSubset<T, EquipementUpsertArgs<ExtArgs>>): Prisma.Prisma__EquipementClient<runtime.Types.Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Equipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementCountArgs} args - Arguments to filter Equipements to count.
     * @example
     * // Count the number of Equipements
     * const count = await prisma.equipement.count({
     *   where: {
     *     // ... the filter for the Equipements we want to count
     *   }
     * })
    **/
    count<T extends EquipementCountArgs>(args?: Prisma.Subset<T, EquipementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EquipementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Equipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipementAggregateArgs>(args: Prisma.Subset<T, EquipementAggregateArgs>): Prisma.PrismaPromise<GetEquipementAggregateType<T>>;
    /**
     * Group by Equipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EquipementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EquipementGroupByArgs['orderBy'];
    } : {
        orderBy?: EquipementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EquipementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Equipement model
     */
    readonly fields: EquipementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Equipement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EquipementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categorie<T extends Prisma.CategorieEquipementDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategorieEquipementDefaultArgs<ExtArgs>>): Prisma.Prisma__CategorieEquipementClient<runtime.Types.Result.GetResult<Prisma.$CategorieEquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Equipement model
 */
export interface EquipementFieldRefs {
    readonly id: Prisma.FieldRef<"Equipement", 'String'>;
    readonly nom: Prisma.FieldRef<"Equipement", 'String'>;
    readonly categorieId: Prisma.FieldRef<"Equipement", 'String'>;
    readonly actif: Prisma.FieldRef<"Equipement", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Equipement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Equipement", 'DateTime'>;
}
/**
 * Equipement findUnique
 */
export type EquipementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Equipement to fetch.
     */
    where: Prisma.EquipementWhereUniqueInput;
};
/**
 * Equipement findUniqueOrThrow
 */
export type EquipementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Equipement to fetch.
     */
    where: Prisma.EquipementWhereUniqueInput;
};
/**
 * Equipement findFirst
 */
export type EquipementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Equipement to fetch.
     */
    where?: Prisma.EquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Equipements to fetch.
     */
    orderBy?: Prisma.EquipementOrderByWithRelationInput | Prisma.EquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Equipements.
     */
    cursor?: Prisma.EquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Equipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Equipements.
     */
    distinct?: Prisma.EquipementScalarFieldEnum | Prisma.EquipementScalarFieldEnum[];
};
/**
 * Equipement findFirstOrThrow
 */
export type EquipementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Equipement to fetch.
     */
    where?: Prisma.EquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Equipements to fetch.
     */
    orderBy?: Prisma.EquipementOrderByWithRelationInput | Prisma.EquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Equipements.
     */
    cursor?: Prisma.EquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Equipements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Equipements.
     */
    distinct?: Prisma.EquipementScalarFieldEnum | Prisma.EquipementScalarFieldEnum[];
};
/**
 * Equipement findMany
 */
export type EquipementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Equipements to fetch.
     */
    where?: Prisma.EquipementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Equipements to fetch.
     */
    orderBy?: Prisma.EquipementOrderByWithRelationInput | Prisma.EquipementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Equipements.
     */
    cursor?: Prisma.EquipementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Equipements.
     */
    skip?: number;
    distinct?: Prisma.EquipementScalarFieldEnum | Prisma.EquipementScalarFieldEnum[];
};
/**
 * Equipement create
 */
export type EquipementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Equipement.
     */
    data: Prisma.XOR<Prisma.EquipementCreateInput, Prisma.EquipementUncheckedCreateInput>;
};
/**
 * Equipement createMany
 */
export type EquipementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipements.
     */
    data: Prisma.EquipementCreateManyInput | Prisma.EquipementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Equipement createManyAndReturn
 */
export type EquipementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: Prisma.EquipementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Equipement
     */
    omit?: Prisma.EquipementOmit<ExtArgs> | null;
    /**
     * The data used to create many Equipements.
     */
    data: Prisma.EquipementCreateManyInput | Prisma.EquipementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EquipementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Equipement update
 */
export type EquipementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Equipement.
     */
    data: Prisma.XOR<Prisma.EquipementUpdateInput, Prisma.EquipementUncheckedUpdateInput>;
    /**
     * Choose, which Equipement to update.
     */
    where: Prisma.EquipementWhereUniqueInput;
};
/**
 * Equipement updateMany
 */
export type EquipementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipements.
     */
    data: Prisma.XOR<Prisma.EquipementUpdateManyMutationInput, Prisma.EquipementUncheckedUpdateManyInput>;
    /**
     * Filter which Equipements to update
     */
    where?: Prisma.EquipementWhereInput;
    /**
     * Limit how many Equipements to update.
     */
    limit?: number;
};
/**
 * Equipement updateManyAndReturn
 */
export type EquipementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: Prisma.EquipementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Equipement
     */
    omit?: Prisma.EquipementOmit<ExtArgs> | null;
    /**
     * The data used to update Equipements.
     */
    data: Prisma.XOR<Prisma.EquipementUpdateManyMutationInput, Prisma.EquipementUncheckedUpdateManyInput>;
    /**
     * Filter which Equipements to update
     */
    where?: Prisma.EquipementWhereInput;
    /**
     * Limit how many Equipements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EquipementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Equipement upsert
 */
export type EquipementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Equipement to update in case it exists.
     */
    where: Prisma.EquipementWhereUniqueInput;
    /**
     * In case the Equipement found by the `where` argument doesn't exist, create a new Equipement with this data.
     */
    create: Prisma.XOR<Prisma.EquipementCreateInput, Prisma.EquipementUncheckedCreateInput>;
    /**
     * In case the Equipement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EquipementUpdateInput, Prisma.EquipementUncheckedUpdateInput>;
};
/**
 * Equipement delete
 */
export type EquipementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Equipement to delete.
     */
    where: Prisma.EquipementWhereUniqueInput;
};
/**
 * Equipement deleteMany
 */
export type EquipementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Equipements to delete
     */
    where?: Prisma.EquipementWhereInput;
    /**
     * Limit how many Equipements to delete.
     */
    limit?: number;
};
/**
 * Equipement without action
 */
export type EquipementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Equipement.d.ts.map