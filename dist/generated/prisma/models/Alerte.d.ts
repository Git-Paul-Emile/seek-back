import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Alerte
 *
 */
export type AlerteModel = runtime.Types.Result.DefaultSelection<Prisma.$AlertePayload>;
export type AggregateAlerte = {
    _count: AlerteCountAggregateOutputType | null;
    _avg: AlerteAvgAggregateOutputType | null;
    _sum: AlerteSumAggregateOutputType | null;
    _min: AlerteMinAggregateOutputType | null;
    _max: AlerteMaxAggregateOutputType | null;
};
export type AlerteAvgAggregateOutputType = {
    prixMin: number | null;
    prixMax: number | null;
};
export type AlerteSumAggregateOutputType = {
    prixMin: number | null;
    prixMax: number | null;
};
export type AlerteMinAggregateOutputType = {
    id: string | null;
    telephone: string | null;
    ville: string | null;
    quartier: string | null;
    typeLogement: string | null;
    typeTransaction: string | null;
    prixMin: number | null;
    prixMax: number | null;
    canalPrefere: string | null;
    statut: $Enums.StatutAlerte | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlerteMaxAggregateOutputType = {
    id: string | null;
    telephone: string | null;
    ville: string | null;
    quartier: string | null;
    typeLogement: string | null;
    typeTransaction: string | null;
    prixMin: number | null;
    prixMax: number | null;
    canalPrefere: string | null;
    statut: $Enums.StatutAlerte | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlerteCountAggregateOutputType = {
    id: number;
    telephone: number;
    ville: number;
    quartier: number;
    typeLogement: number;
    typeTransaction: number;
    prixMin: number;
    prixMax: number;
    canalPrefere: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AlerteAvgAggregateInputType = {
    prixMin?: true;
    prixMax?: true;
};
export type AlerteSumAggregateInputType = {
    prixMin?: true;
    prixMax?: true;
};
export type AlerteMinAggregateInputType = {
    id?: true;
    telephone?: true;
    ville?: true;
    quartier?: true;
    typeLogement?: true;
    typeTransaction?: true;
    prixMin?: true;
    prixMax?: true;
    canalPrefere?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlerteMaxAggregateInputType = {
    id?: true;
    telephone?: true;
    ville?: true;
    quartier?: true;
    typeLogement?: true;
    typeTransaction?: true;
    prixMin?: true;
    prixMax?: true;
    canalPrefere?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlerteCountAggregateInputType = {
    id?: true;
    telephone?: true;
    ville?: true;
    quartier?: true;
    typeLogement?: true;
    typeTransaction?: true;
    prixMin?: true;
    prixMax?: true;
    canalPrefere?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AlerteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Alerte to aggregate.
     */
    where?: Prisma.AlerteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alertes to fetch.
     */
    orderBy?: Prisma.AlerteOrderByWithRelationInput | Prisma.AlerteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AlerteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alertes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alertes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Alertes
    **/
    _count?: true | AlerteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AlerteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AlerteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AlerteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AlerteMaxAggregateInputType;
};
export type GetAlerteAggregateType<T extends AlerteAggregateArgs> = {
    [P in keyof T & keyof AggregateAlerte]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlerte[P]> : Prisma.GetScalarType<T[P], AggregateAlerte[P]>;
};
export type AlerteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteWhereInput;
    orderBy?: Prisma.AlerteOrderByWithAggregationInput | Prisma.AlerteOrderByWithAggregationInput[];
    by: Prisma.AlerteScalarFieldEnum[] | Prisma.AlerteScalarFieldEnum;
    having?: Prisma.AlerteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlerteCountAggregateInputType | true;
    _avg?: AlerteAvgAggregateInputType;
    _sum?: AlerteSumAggregateInputType;
    _min?: AlerteMinAggregateInputType;
    _max?: AlerteMaxAggregateInputType;
};
export type AlerteGroupByOutputType = {
    id: string;
    telephone: string;
    ville: string | null;
    quartier: string | null;
    typeLogement: string | null;
    typeTransaction: string | null;
    prixMin: number | null;
    prixMax: number | null;
    canalPrefere: string;
    statut: $Enums.StatutAlerte;
    createdAt: Date;
    updatedAt: Date;
    _count: AlerteCountAggregateOutputType | null;
    _avg: AlerteAvgAggregateOutputType | null;
    _sum: AlerteSumAggregateOutputType | null;
    _min: AlerteMinAggregateOutputType | null;
    _max: AlerteMaxAggregateOutputType | null;
};
type GetAlerteGroupByPayload<T extends AlerteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlerteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlerteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlerteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlerteGroupByOutputType[P]>;
}>>;
export type AlerteWhereInput = {
    AND?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    OR?: Prisma.AlerteWhereInput[];
    NOT?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    id?: Prisma.StringFilter<"Alerte"> | string;
    telephone?: Prisma.StringFilter<"Alerte"> | string;
    ville?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    quartier?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    typeLogement?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    typeTransaction?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    prixMin?: Prisma.IntNullableFilter<"Alerte"> | number | null;
    prixMax?: Prisma.IntNullableFilter<"Alerte"> | number | null;
    canalPrefere?: Prisma.StringFilter<"Alerte"> | string;
    statut?: Prisma.EnumStatutAlerteFilter<"Alerte"> | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
};
export type AlerteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    quartier?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeLogement?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeTransaction?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    canalPrefere?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlerteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    OR?: Prisma.AlerteWhereInput[];
    NOT?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    telephone?: Prisma.StringFilter<"Alerte"> | string;
    ville?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    quartier?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    typeLogement?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    typeTransaction?: Prisma.StringNullableFilter<"Alerte"> | string | null;
    prixMin?: Prisma.IntNullableFilter<"Alerte"> | number | null;
    prixMax?: Prisma.IntNullableFilter<"Alerte"> | number | null;
    canalPrefere?: Prisma.StringFilter<"Alerte"> | string;
    statut?: Prisma.EnumStatutAlerteFilter<"Alerte"> | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
}, "id">;
export type AlerteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    quartier?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeLogement?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeTransaction?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    canalPrefere?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AlerteCountOrderByAggregateInput;
    _avg?: Prisma.AlerteAvgOrderByAggregateInput;
    _max?: Prisma.AlerteMaxOrderByAggregateInput;
    _min?: Prisma.AlerteMinOrderByAggregateInput;
    _sum?: Prisma.AlerteSumOrderByAggregateInput;
};
export type AlerteScalarWhereWithAggregatesInput = {
    AND?: Prisma.AlerteScalarWhereWithAggregatesInput | Prisma.AlerteScalarWhereWithAggregatesInput[];
    OR?: Prisma.AlerteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AlerteScalarWhereWithAggregatesInput | Prisma.AlerteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Alerte"> | string;
    telephone?: Prisma.StringWithAggregatesFilter<"Alerte"> | string;
    ville?: Prisma.StringNullableWithAggregatesFilter<"Alerte"> | string | null;
    quartier?: Prisma.StringNullableWithAggregatesFilter<"Alerte"> | string | null;
    typeLogement?: Prisma.StringNullableWithAggregatesFilter<"Alerte"> | string | null;
    typeTransaction?: Prisma.StringNullableWithAggregatesFilter<"Alerte"> | string | null;
    prixMin?: Prisma.IntNullableWithAggregatesFilter<"Alerte"> | number | null;
    prixMax?: Prisma.IntNullableWithAggregatesFilter<"Alerte"> | number | null;
    canalPrefere?: Prisma.StringWithAggregatesFilter<"Alerte"> | string;
    statut?: Prisma.EnumStatutAlerteWithAggregatesFilter<"Alerte"> | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Alerte"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Alerte"> | Date | string;
};
export type AlerteCreateInput = {
    id?: string;
    telephone: string;
    ville?: string | null;
    quartier?: string | null;
    typeLogement?: string | null;
    typeTransaction?: string | null;
    prixMin?: number | null;
    prixMax?: number | null;
    canalPrefere?: string;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlerteUncheckedCreateInput = {
    id?: string;
    telephone: string;
    ville?: string | null;
    quartier?: string | null;
    typeLogement?: string | null;
    typeTransaction?: string | null;
    prixMin?: number | null;
    prixMax?: number | null;
    canalPrefere?: string;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlerteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prixMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canalPrefere?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prixMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canalPrefere?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteCreateManyInput = {
    id?: string;
    telephone: string;
    ville?: string | null;
    quartier?: string | null;
    typeLogement?: string | null;
    typeTransaction?: string | null;
    prixMin?: number | null;
    prixMax?: number | null;
    canalPrefere?: string;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlerteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prixMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canalPrefere?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prixMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canalPrefere?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    typeLogement?: Prisma.SortOrder;
    typeTransaction?: Prisma.SortOrder;
    prixMin?: Prisma.SortOrder;
    prixMax?: Prisma.SortOrder;
    canalPrefere?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlerteAvgOrderByAggregateInput = {
    prixMin?: Prisma.SortOrder;
    prixMax?: Prisma.SortOrder;
};
export type AlerteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    typeLogement?: Prisma.SortOrder;
    typeTransaction?: Prisma.SortOrder;
    prixMin?: Prisma.SortOrder;
    prixMax?: Prisma.SortOrder;
    canalPrefere?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlerteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    typeLogement?: Prisma.SortOrder;
    typeTransaction?: Prisma.SortOrder;
    prixMin?: Prisma.SortOrder;
    prixMax?: Prisma.SortOrder;
    canalPrefere?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlerteSumOrderByAggregateInput = {
    prixMin?: Prisma.SortOrder;
    prixMax?: Prisma.SortOrder;
};
export type EnumStatutAlerteFieldUpdateOperationsInput = {
    set?: $Enums.StatutAlerte;
};
export type AlerteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    telephone?: boolean;
    ville?: boolean;
    quartier?: boolean;
    typeLogement?: boolean;
    typeTransaction?: boolean;
    prixMin?: boolean;
    prixMax?: boolean;
    canalPrefere?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["alerte"]>;
export type AlerteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    telephone?: boolean;
    ville?: boolean;
    quartier?: boolean;
    typeLogement?: boolean;
    typeTransaction?: boolean;
    prixMin?: boolean;
    prixMax?: boolean;
    canalPrefere?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["alerte"]>;
export type AlerteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    telephone?: boolean;
    ville?: boolean;
    quartier?: boolean;
    typeLogement?: boolean;
    typeTransaction?: boolean;
    prixMin?: boolean;
    prixMax?: boolean;
    canalPrefere?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["alerte"]>;
export type AlerteSelectScalar = {
    id?: boolean;
    telephone?: boolean;
    ville?: boolean;
    quartier?: boolean;
    typeLogement?: boolean;
    typeTransaction?: boolean;
    prixMin?: boolean;
    prixMax?: boolean;
    canalPrefere?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AlerteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "telephone" | "ville" | "quartier" | "typeLogement" | "typeTransaction" | "prixMin" | "prixMax" | "canalPrefere" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["alerte"]>;
export type $AlertePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Alerte";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        telephone: string;
        ville: string | null;
        quartier: string | null;
        typeLogement: string | null;
        typeTransaction: string | null;
        prixMin: number | null;
        prixMax: number | null;
        canalPrefere: string;
        statut: $Enums.StatutAlerte;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["alerte"]>;
    composites: {};
};
export type AlerteGetPayload<S extends boolean | null | undefined | AlerteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AlertePayload, S>;
export type AlerteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AlerteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlerteCountAggregateInputType | true;
};
export interface AlerteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Alerte'];
        meta: {
            name: 'Alerte';
        };
    };
    /**
     * Find zero or one Alerte that matches the filter.
     * @param {AlerteFindUniqueArgs} args - Arguments to find a Alerte
     * @example
     * // Get one Alerte
     * const alerte = await prisma.alerte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlerteFindUniqueArgs>(args: Prisma.SelectSubset<T, AlerteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alerte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlerteFindUniqueOrThrowArgs} args - Arguments to find a Alerte
     * @example
     * // Get one Alerte
     * const alerte = await prisma.alerte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlerteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AlerteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alerte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteFindFirstArgs} args - Arguments to find a Alerte
     * @example
     * // Get one Alerte
     * const alerte = await prisma.alerte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlerteFindFirstArgs>(args?: Prisma.SelectSubset<T, AlerteFindFirstArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alerte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteFindFirstOrThrowArgs} args - Arguments to find a Alerte
     * @example
     * // Get one Alerte
     * const alerte = await prisma.alerte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlerteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AlerteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alertes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alertes
     * const alertes = await prisma.alerte.findMany()
     *
     * // Get first 10 Alertes
     * const alertes = await prisma.alerte.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const alerteWithIdOnly = await prisma.alerte.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AlerteFindManyArgs>(args?: Prisma.SelectSubset<T, AlerteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alerte.
     * @param {AlerteCreateArgs} args - Arguments to create a Alerte.
     * @example
     * // Create one Alerte
     * const Alerte = await prisma.alerte.create({
     *   data: {
     *     // ... data to create a Alerte
     *   }
     * })
     *
     */
    create<T extends AlerteCreateArgs>(args: Prisma.SelectSubset<T, AlerteCreateArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alertes.
     * @param {AlerteCreateManyArgs} args - Arguments to create many Alertes.
     * @example
     * // Create many Alertes
     * const alerte = await prisma.alerte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AlerteCreateManyArgs>(args?: Prisma.SelectSubset<T, AlerteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alertes and returns the data saved in the database.
     * @param {AlerteCreateManyAndReturnArgs} args - Arguments to create many Alertes.
     * @example
     * // Create many Alertes
     * const alerte = await prisma.alerte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alertes and only return the `id`
     * const alerteWithIdOnly = await prisma.alerte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AlerteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AlerteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alerte.
     * @param {AlerteDeleteArgs} args - Arguments to delete one Alerte.
     * @example
     * // Delete one Alerte
     * const Alerte = await prisma.alerte.delete({
     *   where: {
     *     // ... filter to delete one Alerte
     *   }
     * })
     *
     */
    delete<T extends AlerteDeleteArgs>(args: Prisma.SelectSubset<T, AlerteDeleteArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alerte.
     * @param {AlerteUpdateArgs} args - Arguments to update one Alerte.
     * @example
     * // Update one Alerte
     * const alerte = await prisma.alerte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AlerteUpdateArgs>(args: Prisma.SelectSubset<T, AlerteUpdateArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alertes.
     * @param {AlerteDeleteManyArgs} args - Arguments to filter Alertes to delete.
     * @example
     * // Delete a few Alertes
     * const { count } = await prisma.alerte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AlerteDeleteManyArgs>(args?: Prisma.SelectSubset<T, AlerteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alertes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alertes
     * const alerte = await prisma.alerte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AlerteUpdateManyArgs>(args: Prisma.SelectSubset<T, AlerteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alertes and returns the data updated in the database.
     * @param {AlerteUpdateManyAndReturnArgs} args - Arguments to update many Alertes.
     * @example
     * // Update many Alertes
     * const alerte = await prisma.alerte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alertes and only return the `id`
     * const alerteWithIdOnly = await prisma.alerte.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlerteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AlerteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alerte.
     * @param {AlerteUpsertArgs} args - Arguments to update or create a Alerte.
     * @example
     * // Update or create a Alerte
     * const alerte = await prisma.alerte.upsert({
     *   create: {
     *     // ... data to create a Alerte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerte we want to update
     *   }
     * })
     */
    upsert<T extends AlerteUpsertArgs>(args: Prisma.SelectSubset<T, AlerteUpsertArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alertes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteCountArgs} args - Arguments to filter Alertes to count.
     * @example
     * // Count the number of Alertes
     * const count = await prisma.alerte.count({
     *   where: {
     *     // ... the filter for the Alertes we want to count
     *   }
     * })
    **/
    count<T extends AlerteCountArgs>(args?: Prisma.Subset<T, AlerteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlerteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alerte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlerteAggregateArgs>(args: Prisma.Subset<T, AlerteAggregateArgs>): Prisma.PrismaPromise<GetAlerteAggregateType<T>>;
    /**
     * Group by Alerte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AlerteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AlerteGroupByArgs['orderBy'];
    } : {
        orderBy?: AlerteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AlerteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlerteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Alerte model
     */
    readonly fields: AlerteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Alerte.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AlerteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Alerte model
 */
export interface AlerteFieldRefs {
    readonly id: Prisma.FieldRef<"Alerte", 'String'>;
    readonly telephone: Prisma.FieldRef<"Alerte", 'String'>;
    readonly ville: Prisma.FieldRef<"Alerte", 'String'>;
    readonly quartier: Prisma.FieldRef<"Alerte", 'String'>;
    readonly typeLogement: Prisma.FieldRef<"Alerte", 'String'>;
    readonly typeTransaction: Prisma.FieldRef<"Alerte", 'String'>;
    readonly prixMin: Prisma.FieldRef<"Alerte", 'Int'>;
    readonly prixMax: Prisma.FieldRef<"Alerte", 'Int'>;
    readonly canalPrefere: Prisma.FieldRef<"Alerte", 'String'>;
    readonly statut: Prisma.FieldRef<"Alerte", 'StatutAlerte'>;
    readonly createdAt: Prisma.FieldRef<"Alerte", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Alerte", 'DateTime'>;
}
/**
 * Alerte findUnique
 */
export type AlerteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * Filter, which Alerte to fetch.
     */
    where: Prisma.AlerteWhereUniqueInput;
};
/**
 * Alerte findUniqueOrThrow
 */
export type AlerteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * Filter, which Alerte to fetch.
     */
    where: Prisma.AlerteWhereUniqueInput;
};
/**
 * Alerte findFirst
 */
export type AlerteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * Filter, which Alerte to fetch.
     */
    where?: Prisma.AlerteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alertes to fetch.
     */
    orderBy?: Prisma.AlerteOrderByWithRelationInput | Prisma.AlerteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Alertes.
     */
    cursor?: Prisma.AlerteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alertes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alertes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Alertes.
     */
    distinct?: Prisma.AlerteScalarFieldEnum | Prisma.AlerteScalarFieldEnum[];
};
/**
 * Alerte findFirstOrThrow
 */
export type AlerteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * Filter, which Alerte to fetch.
     */
    where?: Prisma.AlerteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alertes to fetch.
     */
    orderBy?: Prisma.AlerteOrderByWithRelationInput | Prisma.AlerteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Alertes.
     */
    cursor?: Prisma.AlerteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alertes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alertes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Alertes.
     */
    distinct?: Prisma.AlerteScalarFieldEnum | Prisma.AlerteScalarFieldEnum[];
};
/**
 * Alerte findMany
 */
export type AlerteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * Filter, which Alertes to fetch.
     */
    where?: Prisma.AlerteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Alertes to fetch.
     */
    orderBy?: Prisma.AlerteOrderByWithRelationInput | Prisma.AlerteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Alertes.
     */
    cursor?: Prisma.AlerteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Alertes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Alertes.
     */
    skip?: number;
    distinct?: Prisma.AlerteScalarFieldEnum | Prisma.AlerteScalarFieldEnum[];
};
/**
 * Alerte create
 */
export type AlerteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * The data needed to create a Alerte.
     */
    data: Prisma.XOR<Prisma.AlerteCreateInput, Prisma.AlerteUncheckedCreateInput>;
};
/**
 * Alerte createMany
 */
export type AlerteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alertes.
     */
    data: Prisma.AlerteCreateManyInput | Prisma.AlerteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Alerte createManyAndReturn
 */
export type AlerteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * The data used to create many Alertes.
     */
    data: Prisma.AlerteCreateManyInput | Prisma.AlerteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Alerte update
 */
export type AlerteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * The data needed to update a Alerte.
     */
    data: Prisma.XOR<Prisma.AlerteUpdateInput, Prisma.AlerteUncheckedUpdateInput>;
    /**
     * Choose, which Alerte to update.
     */
    where: Prisma.AlerteWhereUniqueInput;
};
/**
 * Alerte updateMany
 */
export type AlerteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Alertes.
     */
    data: Prisma.XOR<Prisma.AlerteUpdateManyMutationInput, Prisma.AlerteUncheckedUpdateManyInput>;
    /**
     * Filter which Alertes to update
     */
    where?: Prisma.AlerteWhereInput;
    /**
     * Limit how many Alertes to update.
     */
    limit?: number;
};
/**
 * Alerte updateManyAndReturn
 */
export type AlerteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * The data used to update Alertes.
     */
    data: Prisma.XOR<Prisma.AlerteUpdateManyMutationInput, Prisma.AlerteUncheckedUpdateManyInput>;
    /**
     * Filter which Alertes to update
     */
    where?: Prisma.AlerteWhereInput;
    /**
     * Limit how many Alertes to update.
     */
    limit?: number;
};
/**
 * Alerte upsert
 */
export type AlerteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * The filter to search for the Alerte to update in case it exists.
     */
    where: Prisma.AlerteWhereUniqueInput;
    /**
     * In case the Alerte found by the `where` argument doesn't exist, create a new Alerte with this data.
     */
    create: Prisma.XOR<Prisma.AlerteCreateInput, Prisma.AlerteUncheckedCreateInput>;
    /**
     * In case the Alerte was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AlerteUpdateInput, Prisma.AlerteUncheckedUpdateInput>;
};
/**
 * Alerte delete
 */
export type AlerteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    /**
     * Filter which Alerte to delete.
     */
    where: Prisma.AlerteWhereUniqueInput;
};
/**
 * Alerte deleteMany
 */
export type AlerteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Alertes to delete
     */
    where?: Prisma.AlerteWhereInput;
    /**
     * Limit how many Alertes to delete.
     */
    limit?: number;
};
/**
 * Alerte without action
 */
export type AlerteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerte
     */
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alerte
     */
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Alerte.d.ts.map