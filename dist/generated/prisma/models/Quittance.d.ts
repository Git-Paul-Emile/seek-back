import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Quittance
 *
 */
export type QuittanceModel = runtime.Types.Result.DefaultSelection<Prisma.$QuittancePayload>;
export type AggregateQuittance = {
    _count: QuittanceCountAggregateOutputType | null;
    _min: QuittanceMinAggregateOutputType | null;
    _max: QuittanceMaxAggregateOutputType | null;
};
export type QuittanceMinAggregateOutputType = {
    id: string | null;
    echeanceId: string | null;
    bailId: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    locataireId: string | null;
    numero: string | null;
    dateGeneration: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuittanceMaxAggregateOutputType = {
    id: string | null;
    echeanceId: string | null;
    bailId: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    locataireId: string | null;
    numero: string | null;
    dateGeneration: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuittanceCountAggregateOutputType = {
    id: number;
    echeanceId: number;
    bailId: number;
    bienId: number;
    proprietaireId: number;
    locataireId: number;
    numero: number;
    dateGeneration: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type QuittanceMinAggregateInputType = {
    id?: true;
    echeanceId?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    numero?: true;
    dateGeneration?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuittanceMaxAggregateInputType = {
    id?: true;
    echeanceId?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    numero?: true;
    dateGeneration?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuittanceCountAggregateInputType = {
    id?: true;
    echeanceId?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    numero?: true;
    dateGeneration?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type QuittanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Quittance to aggregate.
     */
    where?: Prisma.QuittanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quittances to fetch.
     */
    orderBy?: Prisma.QuittanceOrderByWithRelationInput | Prisma.QuittanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.QuittanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quittances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quittances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Quittances
    **/
    _count?: true | QuittanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: QuittanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: QuittanceMaxAggregateInputType;
};
export type GetQuittanceAggregateType<T extends QuittanceAggregateArgs> = {
    [P in keyof T & keyof AggregateQuittance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuittance[P]> : Prisma.GetScalarType<T[P], AggregateQuittance[P]>;
};
export type QuittanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuittanceWhereInput;
    orderBy?: Prisma.QuittanceOrderByWithAggregationInput | Prisma.QuittanceOrderByWithAggregationInput[];
    by: Prisma.QuittanceScalarFieldEnum[] | Prisma.QuittanceScalarFieldEnum;
    having?: Prisma.QuittanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuittanceCountAggregateInputType | true;
    _min?: QuittanceMinAggregateInputType;
    _max?: QuittanceMaxAggregateInputType;
};
export type QuittanceGroupByOutputType = {
    id: string;
    echeanceId: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    numero: string;
    dateGeneration: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: QuittanceCountAggregateOutputType | null;
    _min: QuittanceMinAggregateOutputType | null;
    _max: QuittanceMaxAggregateOutputType | null;
};
type GetQuittanceGroupByPayload<T extends QuittanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuittanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuittanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuittanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuittanceGroupByOutputType[P]>;
}>>;
export type QuittanceWhereInput = {
    AND?: Prisma.QuittanceWhereInput | Prisma.QuittanceWhereInput[];
    OR?: Prisma.QuittanceWhereInput[];
    NOT?: Prisma.QuittanceWhereInput | Prisma.QuittanceWhereInput[];
    id?: Prisma.StringFilter<"Quittance"> | string;
    echeanceId?: Prisma.StringFilter<"Quittance"> | string;
    bailId?: Prisma.StringFilter<"Quittance"> | string;
    bienId?: Prisma.StringFilter<"Quittance"> | string;
    proprietaireId?: Prisma.StringFilter<"Quittance"> | string;
    locataireId?: Prisma.StringFilter<"Quittance"> | string;
    numero?: Prisma.StringFilter<"Quittance"> | string;
    dateGeneration?: Prisma.DateTimeFilter<"Quittance"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Quittance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Quittance"> | Date | string;
    echeance?: Prisma.XOR<Prisma.EcheancierLoyerScalarRelationFilter, Prisma.EcheancierLoyerWhereInput>;
};
export type QuittanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    echeanceId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    dateGeneration?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    echeance?: Prisma.EcheancierLoyerOrderByWithRelationInput;
};
export type QuittanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    echeanceId?: string;
    AND?: Prisma.QuittanceWhereInput | Prisma.QuittanceWhereInput[];
    OR?: Prisma.QuittanceWhereInput[];
    NOT?: Prisma.QuittanceWhereInput | Prisma.QuittanceWhereInput[];
    bailId?: Prisma.StringFilter<"Quittance"> | string;
    bienId?: Prisma.StringFilter<"Quittance"> | string;
    proprietaireId?: Prisma.StringFilter<"Quittance"> | string;
    locataireId?: Prisma.StringFilter<"Quittance"> | string;
    numero?: Prisma.StringFilter<"Quittance"> | string;
    dateGeneration?: Prisma.DateTimeFilter<"Quittance"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Quittance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Quittance"> | Date | string;
    echeance?: Prisma.XOR<Prisma.EcheancierLoyerScalarRelationFilter, Prisma.EcheancierLoyerWhereInput>;
}, "id" | "echeanceId">;
export type QuittanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    echeanceId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    dateGeneration?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.QuittanceCountOrderByAggregateInput;
    _max?: Prisma.QuittanceMaxOrderByAggregateInput;
    _min?: Prisma.QuittanceMinOrderByAggregateInput;
};
export type QuittanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuittanceScalarWhereWithAggregatesInput | Prisma.QuittanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuittanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuittanceScalarWhereWithAggregatesInput | Prisma.QuittanceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Quittance"> | string;
    echeanceId?: Prisma.StringWithAggregatesFilter<"Quittance"> | string;
    bailId?: Prisma.StringWithAggregatesFilter<"Quittance"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"Quittance"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"Quittance"> | string;
    locataireId?: Prisma.StringWithAggregatesFilter<"Quittance"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"Quittance"> | string;
    dateGeneration?: Prisma.DateTimeWithAggregatesFilter<"Quittance"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Quittance"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Quittance"> | Date | string;
};
export type QuittanceCreateInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    numero: string;
    dateGeneration?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    echeance: Prisma.EcheancierLoyerCreateNestedOneWithoutQuittanceInput;
};
export type QuittanceUncheckedCreateInput = {
    id?: string;
    echeanceId: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    numero: string;
    dateGeneration?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuittanceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    dateGeneration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    echeance?: Prisma.EcheancierLoyerUpdateOneRequiredWithoutQuittanceNestedInput;
};
export type QuittanceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    echeanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    dateGeneration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuittanceCreateManyInput = {
    id?: string;
    echeanceId: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    numero: string;
    dateGeneration?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuittanceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    dateGeneration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuittanceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    echeanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    dateGeneration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuittanceNullableScalarRelationFilter = {
    is?: Prisma.QuittanceWhereInput | null;
    isNot?: Prisma.QuittanceWhereInput | null;
};
export type QuittanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    echeanceId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    dateGeneration?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuittanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    echeanceId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    dateGeneration?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuittanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    echeanceId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    dateGeneration?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuittanceCreateNestedOneWithoutEcheanceInput = {
    create?: Prisma.XOR<Prisma.QuittanceCreateWithoutEcheanceInput, Prisma.QuittanceUncheckedCreateWithoutEcheanceInput>;
    connectOrCreate?: Prisma.QuittanceCreateOrConnectWithoutEcheanceInput;
    connect?: Prisma.QuittanceWhereUniqueInput;
};
export type QuittanceUncheckedCreateNestedOneWithoutEcheanceInput = {
    create?: Prisma.XOR<Prisma.QuittanceCreateWithoutEcheanceInput, Prisma.QuittanceUncheckedCreateWithoutEcheanceInput>;
    connectOrCreate?: Prisma.QuittanceCreateOrConnectWithoutEcheanceInput;
    connect?: Prisma.QuittanceWhereUniqueInput;
};
export type QuittanceUpdateOneWithoutEcheanceNestedInput = {
    create?: Prisma.XOR<Prisma.QuittanceCreateWithoutEcheanceInput, Prisma.QuittanceUncheckedCreateWithoutEcheanceInput>;
    connectOrCreate?: Prisma.QuittanceCreateOrConnectWithoutEcheanceInput;
    upsert?: Prisma.QuittanceUpsertWithoutEcheanceInput;
    disconnect?: Prisma.QuittanceWhereInput | boolean;
    delete?: Prisma.QuittanceWhereInput | boolean;
    connect?: Prisma.QuittanceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuittanceUpdateToOneWithWhereWithoutEcheanceInput, Prisma.QuittanceUpdateWithoutEcheanceInput>, Prisma.QuittanceUncheckedUpdateWithoutEcheanceInput>;
};
export type QuittanceUncheckedUpdateOneWithoutEcheanceNestedInput = {
    create?: Prisma.XOR<Prisma.QuittanceCreateWithoutEcheanceInput, Prisma.QuittanceUncheckedCreateWithoutEcheanceInput>;
    connectOrCreate?: Prisma.QuittanceCreateOrConnectWithoutEcheanceInput;
    upsert?: Prisma.QuittanceUpsertWithoutEcheanceInput;
    disconnect?: Prisma.QuittanceWhereInput | boolean;
    delete?: Prisma.QuittanceWhereInput | boolean;
    connect?: Prisma.QuittanceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuittanceUpdateToOneWithWhereWithoutEcheanceInput, Prisma.QuittanceUpdateWithoutEcheanceInput>, Prisma.QuittanceUncheckedUpdateWithoutEcheanceInput>;
};
export type QuittanceCreateWithoutEcheanceInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    numero: string;
    dateGeneration?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuittanceUncheckedCreateWithoutEcheanceInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    numero: string;
    dateGeneration?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuittanceCreateOrConnectWithoutEcheanceInput = {
    where: Prisma.QuittanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuittanceCreateWithoutEcheanceInput, Prisma.QuittanceUncheckedCreateWithoutEcheanceInput>;
};
export type QuittanceUpsertWithoutEcheanceInput = {
    update: Prisma.XOR<Prisma.QuittanceUpdateWithoutEcheanceInput, Prisma.QuittanceUncheckedUpdateWithoutEcheanceInput>;
    create: Prisma.XOR<Prisma.QuittanceCreateWithoutEcheanceInput, Prisma.QuittanceUncheckedCreateWithoutEcheanceInput>;
    where?: Prisma.QuittanceWhereInput;
};
export type QuittanceUpdateToOneWithWhereWithoutEcheanceInput = {
    where?: Prisma.QuittanceWhereInput;
    data: Prisma.XOR<Prisma.QuittanceUpdateWithoutEcheanceInput, Prisma.QuittanceUncheckedUpdateWithoutEcheanceInput>;
};
export type QuittanceUpdateWithoutEcheanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    dateGeneration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuittanceUncheckedUpdateWithoutEcheanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    dateGeneration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuittanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    echeanceId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    numero?: boolean;
    dateGeneration?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    echeance?: boolean | Prisma.EcheancierLoyerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quittance"]>;
export type QuittanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    echeanceId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    numero?: boolean;
    dateGeneration?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    echeance?: boolean | Prisma.EcheancierLoyerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quittance"]>;
export type QuittanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    echeanceId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    numero?: boolean;
    dateGeneration?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    echeance?: boolean | Prisma.EcheancierLoyerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quittance"]>;
export type QuittanceSelectScalar = {
    id?: boolean;
    echeanceId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    numero?: boolean;
    dateGeneration?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type QuittanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "echeanceId" | "bailId" | "bienId" | "proprietaireId" | "locataireId" | "numero" | "dateGeneration" | "createdAt" | "updatedAt", ExtArgs["result"]["quittance"]>;
export type QuittanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    echeance?: boolean | Prisma.EcheancierLoyerDefaultArgs<ExtArgs>;
};
export type QuittanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    echeance?: boolean | Prisma.EcheancierLoyerDefaultArgs<ExtArgs>;
};
export type QuittanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    echeance?: boolean | Prisma.EcheancierLoyerDefaultArgs<ExtArgs>;
};
export type $QuittancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Quittance";
    objects: {
        echeance: Prisma.$EcheancierLoyerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        echeanceId: string;
        bailId: string;
        bienId: string;
        proprietaireId: string;
        locataireId: string;
        numero: string;
        dateGeneration: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["quittance"]>;
    composites: {};
};
export type QuittanceGetPayload<S extends boolean | null | undefined | QuittanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuittancePayload, S>;
export type QuittanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuittanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuittanceCountAggregateInputType | true;
};
export interface QuittanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Quittance'];
        meta: {
            name: 'Quittance';
        };
    };
    /**
     * Find zero or one Quittance that matches the filter.
     * @param {QuittanceFindUniqueArgs} args - Arguments to find a Quittance
     * @example
     * // Get one Quittance
     * const quittance = await prisma.quittance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuittanceFindUniqueArgs>(args: Prisma.SelectSubset<T, QuittanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Quittance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuittanceFindUniqueOrThrowArgs} args - Arguments to find a Quittance
     * @example
     * // Get one Quittance
     * const quittance = await prisma.quittance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuittanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuittanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Quittance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuittanceFindFirstArgs} args - Arguments to find a Quittance
     * @example
     * // Get one Quittance
     * const quittance = await prisma.quittance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuittanceFindFirstArgs>(args?: Prisma.SelectSubset<T, QuittanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Quittance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuittanceFindFirstOrThrowArgs} args - Arguments to find a Quittance
     * @example
     * // Get one Quittance
     * const quittance = await prisma.quittance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuittanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuittanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Quittances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuittanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quittances
     * const quittances = await prisma.quittance.findMany()
     *
     * // Get first 10 Quittances
     * const quittances = await prisma.quittance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const quittanceWithIdOnly = await prisma.quittance.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuittanceFindManyArgs>(args?: Prisma.SelectSubset<T, QuittanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Quittance.
     * @param {QuittanceCreateArgs} args - Arguments to create a Quittance.
     * @example
     * // Create one Quittance
     * const Quittance = await prisma.quittance.create({
     *   data: {
     *     // ... data to create a Quittance
     *   }
     * })
     *
     */
    create<T extends QuittanceCreateArgs>(args: Prisma.SelectSubset<T, QuittanceCreateArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Quittances.
     * @param {QuittanceCreateManyArgs} args - Arguments to create many Quittances.
     * @example
     * // Create many Quittances
     * const quittance = await prisma.quittance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuittanceCreateManyArgs>(args?: Prisma.SelectSubset<T, QuittanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Quittances and returns the data saved in the database.
     * @param {QuittanceCreateManyAndReturnArgs} args - Arguments to create many Quittances.
     * @example
     * // Create many Quittances
     * const quittance = await prisma.quittance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Quittances and only return the `id`
     * const quittanceWithIdOnly = await prisma.quittance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends QuittanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuittanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Quittance.
     * @param {QuittanceDeleteArgs} args - Arguments to delete one Quittance.
     * @example
     * // Delete one Quittance
     * const Quittance = await prisma.quittance.delete({
     *   where: {
     *     // ... filter to delete one Quittance
     *   }
     * })
     *
     */
    delete<T extends QuittanceDeleteArgs>(args: Prisma.SelectSubset<T, QuittanceDeleteArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Quittance.
     * @param {QuittanceUpdateArgs} args - Arguments to update one Quittance.
     * @example
     * // Update one Quittance
     * const quittance = await prisma.quittance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuittanceUpdateArgs>(args: Prisma.SelectSubset<T, QuittanceUpdateArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Quittances.
     * @param {QuittanceDeleteManyArgs} args - Arguments to filter Quittances to delete.
     * @example
     * // Delete a few Quittances
     * const { count } = await prisma.quittance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuittanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuittanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Quittances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuittanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quittances
     * const quittance = await prisma.quittance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuittanceUpdateManyArgs>(args: Prisma.SelectSubset<T, QuittanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Quittances and returns the data updated in the database.
     * @param {QuittanceUpdateManyAndReturnArgs} args - Arguments to update many Quittances.
     * @example
     * // Update many Quittances
     * const quittance = await prisma.quittance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Quittances and only return the `id`
     * const quittanceWithIdOnly = await prisma.quittance.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuittanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuittanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Quittance.
     * @param {QuittanceUpsertArgs} args - Arguments to update or create a Quittance.
     * @example
     * // Update or create a Quittance
     * const quittance = await prisma.quittance.upsert({
     *   create: {
     *     // ... data to create a Quittance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quittance we want to update
     *   }
     * })
     */
    upsert<T extends QuittanceUpsertArgs>(args: Prisma.SelectSubset<T, QuittanceUpsertArgs<ExtArgs>>): Prisma.Prisma__QuittanceClient<runtime.Types.Result.GetResult<Prisma.$QuittancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Quittances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuittanceCountArgs} args - Arguments to filter Quittances to count.
     * @example
     * // Count the number of Quittances
     * const count = await prisma.quittance.count({
     *   where: {
     *     // ... the filter for the Quittances we want to count
     *   }
     * })
    **/
    count<T extends QuittanceCountArgs>(args?: Prisma.Subset<T, QuittanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuittanceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Quittance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuittanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuittanceAggregateArgs>(args: Prisma.Subset<T, QuittanceAggregateArgs>): Prisma.PrismaPromise<GetQuittanceAggregateType<T>>;
    /**
     * Group by Quittance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuittanceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends QuittanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuittanceGroupByArgs['orderBy'];
    } : {
        orderBy?: QuittanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuittanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuittanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Quittance model
     */
    readonly fields: QuittanceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Quittance.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__QuittanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    echeance<T extends Prisma.EcheancierLoyerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EcheancierLoyerDefaultArgs<ExtArgs>>): Prisma.Prisma__EcheancierLoyerClient<runtime.Types.Result.GetResult<Prisma.$EcheancierLoyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Quittance model
 */
export interface QuittanceFieldRefs {
    readonly id: Prisma.FieldRef<"Quittance", 'String'>;
    readonly echeanceId: Prisma.FieldRef<"Quittance", 'String'>;
    readonly bailId: Prisma.FieldRef<"Quittance", 'String'>;
    readonly bienId: Prisma.FieldRef<"Quittance", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"Quittance", 'String'>;
    readonly locataireId: Prisma.FieldRef<"Quittance", 'String'>;
    readonly numero: Prisma.FieldRef<"Quittance", 'String'>;
    readonly dateGeneration: Prisma.FieldRef<"Quittance", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Quittance", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Quittance", 'DateTime'>;
}
/**
 * Quittance findUnique
 */
export type QuittanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * Filter, which Quittance to fetch.
     */
    where: Prisma.QuittanceWhereUniqueInput;
};
/**
 * Quittance findUniqueOrThrow
 */
export type QuittanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * Filter, which Quittance to fetch.
     */
    where: Prisma.QuittanceWhereUniqueInput;
};
/**
 * Quittance findFirst
 */
export type QuittanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * Filter, which Quittance to fetch.
     */
    where?: Prisma.QuittanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quittances to fetch.
     */
    orderBy?: Prisma.QuittanceOrderByWithRelationInput | Prisma.QuittanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Quittances.
     */
    cursor?: Prisma.QuittanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quittances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quittances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Quittances.
     */
    distinct?: Prisma.QuittanceScalarFieldEnum | Prisma.QuittanceScalarFieldEnum[];
};
/**
 * Quittance findFirstOrThrow
 */
export type QuittanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * Filter, which Quittance to fetch.
     */
    where?: Prisma.QuittanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quittances to fetch.
     */
    orderBy?: Prisma.QuittanceOrderByWithRelationInput | Prisma.QuittanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Quittances.
     */
    cursor?: Prisma.QuittanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quittances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quittances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Quittances.
     */
    distinct?: Prisma.QuittanceScalarFieldEnum | Prisma.QuittanceScalarFieldEnum[];
};
/**
 * Quittance findMany
 */
export type QuittanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * Filter, which Quittances to fetch.
     */
    where?: Prisma.QuittanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quittances to fetch.
     */
    orderBy?: Prisma.QuittanceOrderByWithRelationInput | Prisma.QuittanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Quittances.
     */
    cursor?: Prisma.QuittanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quittances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quittances.
     */
    skip?: number;
    distinct?: Prisma.QuittanceScalarFieldEnum | Prisma.QuittanceScalarFieldEnum[];
};
/**
 * Quittance create
 */
export type QuittanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Quittance.
     */
    data: Prisma.XOR<Prisma.QuittanceCreateInput, Prisma.QuittanceUncheckedCreateInput>;
};
/**
 * Quittance createMany
 */
export type QuittanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quittances.
     */
    data: Prisma.QuittanceCreateManyInput | Prisma.QuittanceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Quittance createManyAndReturn
 */
export type QuittanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * The data used to create many Quittances.
     */
    data: Prisma.QuittanceCreateManyInput | Prisma.QuittanceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Quittance update
 */
export type QuittanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Quittance.
     */
    data: Prisma.XOR<Prisma.QuittanceUpdateInput, Prisma.QuittanceUncheckedUpdateInput>;
    /**
     * Choose, which Quittance to update.
     */
    where: Prisma.QuittanceWhereUniqueInput;
};
/**
 * Quittance updateMany
 */
export type QuittanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Quittances.
     */
    data: Prisma.XOR<Prisma.QuittanceUpdateManyMutationInput, Prisma.QuittanceUncheckedUpdateManyInput>;
    /**
     * Filter which Quittances to update
     */
    where?: Prisma.QuittanceWhereInput;
    /**
     * Limit how many Quittances to update.
     */
    limit?: number;
};
/**
 * Quittance updateManyAndReturn
 */
export type QuittanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * The data used to update Quittances.
     */
    data: Prisma.XOR<Prisma.QuittanceUpdateManyMutationInput, Prisma.QuittanceUncheckedUpdateManyInput>;
    /**
     * Filter which Quittances to update
     */
    where?: Prisma.QuittanceWhereInput;
    /**
     * Limit how many Quittances to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Quittance upsert
 */
export type QuittanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Quittance to update in case it exists.
     */
    where: Prisma.QuittanceWhereUniqueInput;
    /**
     * In case the Quittance found by the `where` argument doesn't exist, create a new Quittance with this data.
     */
    create: Prisma.XOR<Prisma.QuittanceCreateInput, Prisma.QuittanceUncheckedCreateInput>;
    /**
     * In case the Quittance was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.QuittanceUpdateInput, Prisma.QuittanceUncheckedUpdateInput>;
};
/**
 * Quittance delete
 */
export type QuittanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
    /**
     * Filter which Quittance to delete.
     */
    where: Prisma.QuittanceWhereUniqueInput;
};
/**
 * Quittance deleteMany
 */
export type QuittanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Quittances to delete
     */
    where?: Prisma.QuittanceWhereInput;
    /**
     * Limit how many Quittances to delete.
     */
    limit?: number;
};
/**
 * Quittance without action
 */
export type QuittanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quittance
     */
    select?: Prisma.QuittanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quittance
     */
    omit?: Prisma.QuittanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuittanceInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Quittance.d.ts.map