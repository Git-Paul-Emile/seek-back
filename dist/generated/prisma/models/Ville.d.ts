import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Ville
 *
 */
export type VilleModel = runtime.Types.Result.DefaultSelection<Prisma.$VillePayload>;
export type AggregateVille = {
    _count: VilleCountAggregateOutputType | null;
    _min: VilleMinAggregateOutputType | null;
    _max: VilleMaxAggregateOutputType | null;
};
export type VilleMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    paysId: string | null;
    date_creation: Date | null;
    date_modification: Date | null;
};
export type VilleMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    paysId: string | null;
    date_creation: Date | null;
    date_modification: Date | null;
};
export type VilleCountAggregateOutputType = {
    id: number;
    nom: number;
    paysId: number;
    date_creation: number;
    date_modification: number;
    _all: number;
};
export type VilleMinAggregateInputType = {
    id?: true;
    nom?: true;
    paysId?: true;
    date_creation?: true;
    date_modification?: true;
};
export type VilleMaxAggregateInputType = {
    id?: true;
    nom?: true;
    paysId?: true;
    date_creation?: true;
    date_modification?: true;
};
export type VilleCountAggregateInputType = {
    id?: true;
    nom?: true;
    paysId?: true;
    date_creation?: true;
    date_modification?: true;
    _all?: true;
};
export type VilleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Ville to aggregate.
     */
    where?: Prisma.VilleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Villes to fetch.
     */
    orderBy?: Prisma.VilleOrderByWithRelationInput | Prisma.VilleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VilleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Villes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Villes
    **/
    _count?: true | VilleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VilleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VilleMaxAggregateInputType;
};
export type GetVilleAggregateType<T extends VilleAggregateArgs> = {
    [P in keyof T & keyof AggregateVille]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVille[P]> : Prisma.GetScalarType<T[P], AggregateVille[P]>;
};
export type VilleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VilleWhereInput;
    orderBy?: Prisma.VilleOrderByWithAggregationInput | Prisma.VilleOrderByWithAggregationInput[];
    by: Prisma.VilleScalarFieldEnum[] | Prisma.VilleScalarFieldEnum;
    having?: Prisma.VilleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VilleCountAggregateInputType | true;
    _min?: VilleMinAggregateInputType;
    _max?: VilleMaxAggregateInputType;
};
export type VilleGroupByOutputType = {
    id: string;
    nom: string;
    paysId: string;
    date_creation: Date;
    date_modification: Date;
    _count: VilleCountAggregateOutputType | null;
    _min: VilleMinAggregateOutputType | null;
    _max: VilleMaxAggregateOutputType | null;
};
type GetVilleGroupByPayload<T extends VilleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VilleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VilleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VilleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VilleGroupByOutputType[P]>;
}>>;
export type VilleWhereInput = {
    AND?: Prisma.VilleWhereInput | Prisma.VilleWhereInput[];
    OR?: Prisma.VilleWhereInput[];
    NOT?: Prisma.VilleWhereInput | Prisma.VilleWhereInput[];
    id?: Prisma.StringFilter<"Ville"> | string;
    nom?: Prisma.StringFilter<"Ville"> | string;
    paysId?: Prisma.StringFilter<"Ville"> | string;
    date_creation?: Prisma.DateTimeFilter<"Ville"> | Date | string;
    date_modification?: Prisma.DateTimeFilter<"Ville"> | Date | string;
    pays?: Prisma.XOR<Prisma.PaysScalarRelationFilter, Prisma.PaysWhereInput>;
    biens?: Prisma.BienListRelationFilter;
};
export type VilleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    paysId?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
    pays?: Prisma.PaysOrderByWithRelationInput;
    biens?: Prisma.BienOrderByRelationAggregateInput;
};
export type VilleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom_paysId?: Prisma.VilleNomPaysIdCompoundUniqueInput;
    AND?: Prisma.VilleWhereInput | Prisma.VilleWhereInput[];
    OR?: Prisma.VilleWhereInput[];
    NOT?: Prisma.VilleWhereInput | Prisma.VilleWhereInput[];
    nom?: Prisma.StringFilter<"Ville"> | string;
    paysId?: Prisma.StringFilter<"Ville"> | string;
    date_creation?: Prisma.DateTimeFilter<"Ville"> | Date | string;
    date_modification?: Prisma.DateTimeFilter<"Ville"> | Date | string;
    pays?: Prisma.XOR<Prisma.PaysScalarRelationFilter, Prisma.PaysWhereInput>;
    biens?: Prisma.BienListRelationFilter;
}, "id" | "nom_paysId">;
export type VilleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    paysId?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
    _count?: Prisma.VilleCountOrderByAggregateInput;
    _max?: Prisma.VilleMaxOrderByAggregateInput;
    _min?: Prisma.VilleMinOrderByAggregateInput;
};
export type VilleScalarWhereWithAggregatesInput = {
    AND?: Prisma.VilleScalarWhereWithAggregatesInput | Prisma.VilleScalarWhereWithAggregatesInput[];
    OR?: Prisma.VilleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VilleScalarWhereWithAggregatesInput | Prisma.VilleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ville"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Ville"> | string;
    paysId?: Prisma.StringWithAggregatesFilter<"Ville"> | string;
    date_creation?: Prisma.DateTimeWithAggregatesFilter<"Ville"> | Date | string;
    date_modification?: Prisma.DateTimeWithAggregatesFilter<"Ville"> | Date | string;
};
export type VilleCreateInput = {
    id?: string;
    nom: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
    pays: Prisma.PaysCreateNestedOneWithoutVillesInput;
    biens?: Prisma.BienCreateNestedManyWithoutVilleInput;
};
export type VilleUncheckedCreateInput = {
    id?: string;
    nom: string;
    paysId: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutVilleInput;
};
export type VilleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pays?: Prisma.PaysUpdateOneRequiredWithoutVillesNestedInput;
    biens?: Prisma.BienUpdateManyWithoutVilleNestedInput;
};
export type VilleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    paysId?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    biens?: Prisma.BienUncheckedUpdateManyWithoutVilleNestedInput;
};
export type VilleCreateManyInput = {
    id?: string;
    nom: string;
    paysId: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
};
export type VilleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VilleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    paysId?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VilleListRelationFilter = {
    every?: Prisma.VilleWhereInput;
    some?: Prisma.VilleWhereInput;
    none?: Prisma.VilleWhereInput;
};
export type VilleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VilleNomPaysIdCompoundUniqueInput = {
    nom: string;
    paysId: string;
};
export type VilleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    paysId?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
};
export type VilleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    paysId?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
};
export type VilleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    paysId?: Prisma.SortOrder;
    date_creation?: Prisma.SortOrder;
    date_modification?: Prisma.SortOrder;
};
export type VilleNullableScalarRelationFilter = {
    is?: Prisma.VilleWhereInput | null;
    isNot?: Prisma.VilleWhereInput | null;
};
export type VilleCreateNestedManyWithoutPaysInput = {
    create?: Prisma.XOR<Prisma.VilleCreateWithoutPaysInput, Prisma.VilleUncheckedCreateWithoutPaysInput> | Prisma.VilleCreateWithoutPaysInput[] | Prisma.VilleUncheckedCreateWithoutPaysInput[];
    connectOrCreate?: Prisma.VilleCreateOrConnectWithoutPaysInput | Prisma.VilleCreateOrConnectWithoutPaysInput[];
    createMany?: Prisma.VilleCreateManyPaysInputEnvelope;
    connect?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
};
export type VilleUncheckedCreateNestedManyWithoutPaysInput = {
    create?: Prisma.XOR<Prisma.VilleCreateWithoutPaysInput, Prisma.VilleUncheckedCreateWithoutPaysInput> | Prisma.VilleCreateWithoutPaysInput[] | Prisma.VilleUncheckedCreateWithoutPaysInput[];
    connectOrCreate?: Prisma.VilleCreateOrConnectWithoutPaysInput | Prisma.VilleCreateOrConnectWithoutPaysInput[];
    createMany?: Prisma.VilleCreateManyPaysInputEnvelope;
    connect?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
};
export type VilleUpdateManyWithoutPaysNestedInput = {
    create?: Prisma.XOR<Prisma.VilleCreateWithoutPaysInput, Prisma.VilleUncheckedCreateWithoutPaysInput> | Prisma.VilleCreateWithoutPaysInput[] | Prisma.VilleUncheckedCreateWithoutPaysInput[];
    connectOrCreate?: Prisma.VilleCreateOrConnectWithoutPaysInput | Prisma.VilleCreateOrConnectWithoutPaysInput[];
    upsert?: Prisma.VilleUpsertWithWhereUniqueWithoutPaysInput | Prisma.VilleUpsertWithWhereUniqueWithoutPaysInput[];
    createMany?: Prisma.VilleCreateManyPaysInputEnvelope;
    set?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    disconnect?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    delete?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    connect?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    update?: Prisma.VilleUpdateWithWhereUniqueWithoutPaysInput | Prisma.VilleUpdateWithWhereUniqueWithoutPaysInput[];
    updateMany?: Prisma.VilleUpdateManyWithWhereWithoutPaysInput | Prisma.VilleUpdateManyWithWhereWithoutPaysInput[];
    deleteMany?: Prisma.VilleScalarWhereInput | Prisma.VilleScalarWhereInput[];
};
export type VilleUncheckedUpdateManyWithoutPaysNestedInput = {
    create?: Prisma.XOR<Prisma.VilleCreateWithoutPaysInput, Prisma.VilleUncheckedCreateWithoutPaysInput> | Prisma.VilleCreateWithoutPaysInput[] | Prisma.VilleUncheckedCreateWithoutPaysInput[];
    connectOrCreate?: Prisma.VilleCreateOrConnectWithoutPaysInput | Prisma.VilleCreateOrConnectWithoutPaysInput[];
    upsert?: Prisma.VilleUpsertWithWhereUniqueWithoutPaysInput | Prisma.VilleUpsertWithWhereUniqueWithoutPaysInput[];
    createMany?: Prisma.VilleCreateManyPaysInputEnvelope;
    set?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    disconnect?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    delete?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    connect?: Prisma.VilleWhereUniqueInput | Prisma.VilleWhereUniqueInput[];
    update?: Prisma.VilleUpdateWithWhereUniqueWithoutPaysInput | Prisma.VilleUpdateWithWhereUniqueWithoutPaysInput[];
    updateMany?: Prisma.VilleUpdateManyWithWhereWithoutPaysInput | Prisma.VilleUpdateManyWithWhereWithoutPaysInput[];
    deleteMany?: Prisma.VilleScalarWhereInput | Prisma.VilleScalarWhereInput[];
};
export type VilleCreateNestedOneWithoutBiensInput = {
    create?: Prisma.XOR<Prisma.VilleCreateWithoutBiensInput, Prisma.VilleUncheckedCreateWithoutBiensInput>;
    connectOrCreate?: Prisma.VilleCreateOrConnectWithoutBiensInput;
    connect?: Prisma.VilleWhereUniqueInput;
};
export type VilleUpdateOneWithoutBiensNestedInput = {
    create?: Prisma.XOR<Prisma.VilleCreateWithoutBiensInput, Prisma.VilleUncheckedCreateWithoutBiensInput>;
    connectOrCreate?: Prisma.VilleCreateOrConnectWithoutBiensInput;
    upsert?: Prisma.VilleUpsertWithoutBiensInput;
    disconnect?: Prisma.VilleWhereInput | boolean;
    delete?: Prisma.VilleWhereInput | boolean;
    connect?: Prisma.VilleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VilleUpdateToOneWithWhereWithoutBiensInput, Prisma.VilleUpdateWithoutBiensInput>, Prisma.VilleUncheckedUpdateWithoutBiensInput>;
};
export type VilleCreateWithoutPaysInput = {
    id?: string;
    nom: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
    biens?: Prisma.BienCreateNestedManyWithoutVilleInput;
};
export type VilleUncheckedCreateWithoutPaysInput = {
    id?: string;
    nom: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutVilleInput;
};
export type VilleCreateOrConnectWithoutPaysInput = {
    where: Prisma.VilleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VilleCreateWithoutPaysInput, Prisma.VilleUncheckedCreateWithoutPaysInput>;
};
export type VilleCreateManyPaysInputEnvelope = {
    data: Prisma.VilleCreateManyPaysInput | Prisma.VilleCreateManyPaysInput[];
    skipDuplicates?: boolean;
};
export type VilleUpsertWithWhereUniqueWithoutPaysInput = {
    where: Prisma.VilleWhereUniqueInput;
    update: Prisma.XOR<Prisma.VilleUpdateWithoutPaysInput, Prisma.VilleUncheckedUpdateWithoutPaysInput>;
    create: Prisma.XOR<Prisma.VilleCreateWithoutPaysInput, Prisma.VilleUncheckedCreateWithoutPaysInput>;
};
export type VilleUpdateWithWhereUniqueWithoutPaysInput = {
    where: Prisma.VilleWhereUniqueInput;
    data: Prisma.XOR<Prisma.VilleUpdateWithoutPaysInput, Prisma.VilleUncheckedUpdateWithoutPaysInput>;
};
export type VilleUpdateManyWithWhereWithoutPaysInput = {
    where: Prisma.VilleScalarWhereInput;
    data: Prisma.XOR<Prisma.VilleUpdateManyMutationInput, Prisma.VilleUncheckedUpdateManyWithoutPaysInput>;
};
export type VilleScalarWhereInput = {
    AND?: Prisma.VilleScalarWhereInput | Prisma.VilleScalarWhereInput[];
    OR?: Prisma.VilleScalarWhereInput[];
    NOT?: Prisma.VilleScalarWhereInput | Prisma.VilleScalarWhereInput[];
    id?: Prisma.StringFilter<"Ville"> | string;
    nom?: Prisma.StringFilter<"Ville"> | string;
    paysId?: Prisma.StringFilter<"Ville"> | string;
    date_creation?: Prisma.DateTimeFilter<"Ville"> | Date | string;
    date_modification?: Prisma.DateTimeFilter<"Ville"> | Date | string;
};
export type VilleCreateWithoutBiensInput = {
    id?: string;
    nom: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
    pays: Prisma.PaysCreateNestedOneWithoutVillesInput;
};
export type VilleUncheckedCreateWithoutBiensInput = {
    id?: string;
    nom: string;
    paysId: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
};
export type VilleCreateOrConnectWithoutBiensInput = {
    where: Prisma.VilleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VilleCreateWithoutBiensInput, Prisma.VilleUncheckedCreateWithoutBiensInput>;
};
export type VilleUpsertWithoutBiensInput = {
    update: Prisma.XOR<Prisma.VilleUpdateWithoutBiensInput, Prisma.VilleUncheckedUpdateWithoutBiensInput>;
    create: Prisma.XOR<Prisma.VilleCreateWithoutBiensInput, Prisma.VilleUncheckedCreateWithoutBiensInput>;
    where?: Prisma.VilleWhereInput;
};
export type VilleUpdateToOneWithWhereWithoutBiensInput = {
    where?: Prisma.VilleWhereInput;
    data: Prisma.XOR<Prisma.VilleUpdateWithoutBiensInput, Prisma.VilleUncheckedUpdateWithoutBiensInput>;
};
export type VilleUpdateWithoutBiensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pays?: Prisma.PaysUpdateOneRequiredWithoutVillesNestedInput;
};
export type VilleUncheckedUpdateWithoutBiensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    paysId?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VilleCreateManyPaysInput = {
    id?: string;
    nom: string;
    date_creation?: Date | string;
    date_modification?: Date | string;
};
export type VilleUpdateWithoutPaysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    biens?: Prisma.BienUpdateManyWithoutVilleNestedInput;
};
export type VilleUncheckedUpdateWithoutPaysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    biens?: Prisma.BienUncheckedUpdateManyWithoutVilleNestedInput;
};
export type VilleUncheckedUpdateManyWithoutPaysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    date_creation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_modification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type VilleCountOutputType
 */
export type VilleCountOutputType = {
    biens: number;
};
export type VilleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    biens?: boolean | VilleCountOutputTypeCountBiensArgs;
};
/**
 * VilleCountOutputType without action
 */
export type VilleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VilleCountOutputType
     */
    select?: Prisma.VilleCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VilleCountOutputType without action
 */
export type VilleCountOutputTypeCountBiensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienWhereInput;
};
export type VilleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    paysId?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
    pays?: boolean | Prisma.PaysDefaultArgs<ExtArgs>;
    biens?: boolean | Prisma.Ville$biensArgs<ExtArgs>;
    _count?: boolean | Prisma.VilleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ville"]>;
export type VilleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    paysId?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
    pays?: boolean | Prisma.PaysDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ville"]>;
export type VilleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    paysId?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
    pays?: boolean | Prisma.PaysDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ville"]>;
export type VilleSelectScalar = {
    id?: boolean;
    nom?: boolean;
    paysId?: boolean;
    date_creation?: boolean;
    date_modification?: boolean;
};
export type VilleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "paysId" | "date_creation" | "date_modification", ExtArgs["result"]["ville"]>;
export type VilleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pays?: boolean | Prisma.PaysDefaultArgs<ExtArgs>;
    biens?: boolean | Prisma.Ville$biensArgs<ExtArgs>;
    _count?: boolean | Prisma.VilleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VilleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pays?: boolean | Prisma.PaysDefaultArgs<ExtArgs>;
};
export type VilleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pays?: boolean | Prisma.PaysDefaultArgs<ExtArgs>;
};
export type $VillePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ville";
    objects: {
        pays: Prisma.$PaysPayload<ExtArgs>;
        biens: Prisma.$BienPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        paysId: string;
        date_creation: Date;
        date_modification: Date;
    }, ExtArgs["result"]["ville"]>;
    composites: {};
};
export type VilleGetPayload<S extends boolean | null | undefined | VilleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VillePayload, S>;
export type VilleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VilleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VilleCountAggregateInputType | true;
};
export interface VilleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ville'];
        meta: {
            name: 'Ville';
        };
    };
    /**
     * Find zero or one Ville that matches the filter.
     * @param {VilleFindUniqueArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VilleFindUniqueArgs>(args: Prisma.SelectSubset<T, VilleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ville that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VilleFindUniqueOrThrowArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VilleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VilleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ville that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindFirstArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VilleFindFirstArgs>(args?: Prisma.SelectSubset<T, VilleFindFirstArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ville that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindFirstOrThrowArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VilleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VilleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Villes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villes
     * const villes = await prisma.ville.findMany()
     *
     * // Get first 10 Villes
     * const villes = await prisma.ville.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const villeWithIdOnly = await prisma.ville.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VilleFindManyArgs>(args?: Prisma.SelectSubset<T, VilleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ville.
     * @param {VilleCreateArgs} args - Arguments to create a Ville.
     * @example
     * // Create one Ville
     * const Ville = await prisma.ville.create({
     *   data: {
     *     // ... data to create a Ville
     *   }
     * })
     *
     */
    create<T extends VilleCreateArgs>(args: Prisma.SelectSubset<T, VilleCreateArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Villes.
     * @param {VilleCreateManyArgs} args - Arguments to create many Villes.
     * @example
     * // Create many Villes
     * const ville = await prisma.ville.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VilleCreateManyArgs>(args?: Prisma.SelectSubset<T, VilleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Villes and returns the data saved in the database.
     * @param {VilleCreateManyAndReturnArgs} args - Arguments to create many Villes.
     * @example
     * // Create many Villes
     * const ville = await prisma.ville.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Villes and only return the `id`
     * const villeWithIdOnly = await prisma.ville.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VilleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VilleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ville.
     * @param {VilleDeleteArgs} args - Arguments to delete one Ville.
     * @example
     * // Delete one Ville
     * const Ville = await prisma.ville.delete({
     *   where: {
     *     // ... filter to delete one Ville
     *   }
     * })
     *
     */
    delete<T extends VilleDeleteArgs>(args: Prisma.SelectSubset<T, VilleDeleteArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ville.
     * @param {VilleUpdateArgs} args - Arguments to update one Ville.
     * @example
     * // Update one Ville
     * const ville = await prisma.ville.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VilleUpdateArgs>(args: Prisma.SelectSubset<T, VilleUpdateArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Villes.
     * @param {VilleDeleteManyArgs} args - Arguments to filter Villes to delete.
     * @example
     * // Delete a few Villes
     * const { count } = await prisma.ville.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VilleDeleteManyArgs>(args?: Prisma.SelectSubset<T, VilleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Villes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villes
     * const ville = await prisma.ville.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VilleUpdateManyArgs>(args: Prisma.SelectSubset<T, VilleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Villes and returns the data updated in the database.
     * @param {VilleUpdateManyAndReturnArgs} args - Arguments to update many Villes.
     * @example
     * // Update many Villes
     * const ville = await prisma.ville.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Villes and only return the `id`
     * const villeWithIdOnly = await prisma.ville.updateManyAndReturn({
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
    updateManyAndReturn<T extends VilleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VilleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ville.
     * @param {VilleUpsertArgs} args - Arguments to update or create a Ville.
     * @example
     * // Update or create a Ville
     * const ville = await prisma.ville.upsert({
     *   create: {
     *     // ... data to create a Ville
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ville we want to update
     *   }
     * })
     */
    upsert<T extends VilleUpsertArgs>(args: Prisma.SelectSubset<T, VilleUpsertArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Villes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleCountArgs} args - Arguments to filter Villes to count.
     * @example
     * // Count the number of Villes
     * const count = await prisma.ville.count({
     *   where: {
     *     // ... the filter for the Villes we want to count
     *   }
     * })
    **/
    count<T extends VilleCountArgs>(args?: Prisma.Subset<T, VilleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VilleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ville.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VilleAggregateArgs>(args: Prisma.Subset<T, VilleAggregateArgs>): Prisma.PrismaPromise<GetVilleAggregateType<T>>;
    /**
     * Group by Ville.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VilleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VilleGroupByArgs['orderBy'];
    } : {
        orderBy?: VilleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VilleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVilleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Ville model
     */
    readonly fields: VilleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Ville.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VilleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pays<T extends Prisma.PaysDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaysDefaultArgs<ExtArgs>>): Prisma.Prisma__PaysClient<runtime.Types.Result.GetResult<Prisma.$PaysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    biens<T extends Prisma.Ville$biensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ville$biensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Ville model
 */
export interface VilleFieldRefs {
    readonly id: Prisma.FieldRef<"Ville", 'String'>;
    readonly nom: Prisma.FieldRef<"Ville", 'String'>;
    readonly paysId: Prisma.FieldRef<"Ville", 'String'>;
    readonly date_creation: Prisma.FieldRef<"Ville", 'DateTime'>;
    readonly date_modification: Prisma.FieldRef<"Ville", 'DateTime'>;
}
/**
 * Ville findUnique
 */
export type VilleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ville to fetch.
     */
    where: Prisma.VilleWhereUniqueInput;
};
/**
 * Ville findUniqueOrThrow
 */
export type VilleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ville to fetch.
     */
    where: Prisma.VilleWhereUniqueInput;
};
/**
 * Ville findFirst
 */
export type VilleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ville to fetch.
     */
    where?: Prisma.VilleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Villes to fetch.
     */
    orderBy?: Prisma.VilleOrderByWithRelationInput | Prisma.VilleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Villes.
     */
    cursor?: Prisma.VilleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Villes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Villes.
     */
    distinct?: Prisma.VilleScalarFieldEnum | Prisma.VilleScalarFieldEnum[];
};
/**
 * Ville findFirstOrThrow
 */
export type VilleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ville to fetch.
     */
    where?: Prisma.VilleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Villes to fetch.
     */
    orderBy?: Prisma.VilleOrderByWithRelationInput | Prisma.VilleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Villes.
     */
    cursor?: Prisma.VilleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Villes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Villes.
     */
    distinct?: Prisma.VilleScalarFieldEnum | Prisma.VilleScalarFieldEnum[];
};
/**
 * Ville findMany
 */
export type VilleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Villes to fetch.
     */
    where?: Prisma.VilleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Villes to fetch.
     */
    orderBy?: Prisma.VilleOrderByWithRelationInput | Prisma.VilleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Villes.
     */
    cursor?: Prisma.VilleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Villes.
     */
    skip?: number;
    distinct?: Prisma.VilleScalarFieldEnum | Prisma.VilleScalarFieldEnum[];
};
/**
 * Ville create
 */
export type VilleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Ville.
     */
    data: Prisma.XOR<Prisma.VilleCreateInput, Prisma.VilleUncheckedCreateInput>;
};
/**
 * Ville createMany
 */
export type VilleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Villes.
     */
    data: Prisma.VilleCreateManyInput | Prisma.VilleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Ville createManyAndReturn
 */
export type VilleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: Prisma.VilleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Ville
     */
    omit?: Prisma.VilleOmit<ExtArgs> | null;
    /**
     * The data used to create many Villes.
     */
    data: Prisma.VilleCreateManyInput | Prisma.VilleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VilleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Ville update
 */
export type VilleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Ville.
     */
    data: Prisma.XOR<Prisma.VilleUpdateInput, Prisma.VilleUncheckedUpdateInput>;
    /**
     * Choose, which Ville to update.
     */
    where: Prisma.VilleWhereUniqueInput;
};
/**
 * Ville updateMany
 */
export type VilleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Villes.
     */
    data: Prisma.XOR<Prisma.VilleUpdateManyMutationInput, Prisma.VilleUncheckedUpdateManyInput>;
    /**
     * Filter which Villes to update
     */
    where?: Prisma.VilleWhereInput;
    /**
     * Limit how many Villes to update.
     */
    limit?: number;
};
/**
 * Ville updateManyAndReturn
 */
export type VilleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: Prisma.VilleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Ville
     */
    omit?: Prisma.VilleOmit<ExtArgs> | null;
    /**
     * The data used to update Villes.
     */
    data: Prisma.XOR<Prisma.VilleUpdateManyMutationInput, Prisma.VilleUncheckedUpdateManyInput>;
    /**
     * Filter which Villes to update
     */
    where?: Prisma.VilleWhereInput;
    /**
     * Limit how many Villes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VilleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Ville upsert
 */
export type VilleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Ville to update in case it exists.
     */
    where: Prisma.VilleWhereUniqueInput;
    /**
     * In case the Ville found by the `where` argument doesn't exist, create a new Ville with this data.
     */
    create: Prisma.XOR<Prisma.VilleCreateInput, Prisma.VilleUncheckedCreateInput>;
    /**
     * In case the Ville was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VilleUpdateInput, Prisma.VilleUncheckedUpdateInput>;
};
/**
 * Ville delete
 */
export type VilleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Ville to delete.
     */
    where: Prisma.VilleWhereUniqueInput;
};
/**
 * Ville deleteMany
 */
export type VilleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Villes to delete
     */
    where?: Prisma.VilleWhereInput;
    /**
     * Limit how many Villes to delete.
     */
    limit?: number;
};
/**
 * Ville.biens
 */
export type Ville$biensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bien
     */
    select?: Prisma.BienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bien
     */
    omit?: Prisma.BienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienInclude<ExtArgs> | null;
    where?: Prisma.BienWhereInput;
    orderBy?: Prisma.BienOrderByWithRelationInput | Prisma.BienOrderByWithRelationInput[];
    cursor?: Prisma.BienWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BienScalarFieldEnum | Prisma.BienScalarFieldEnum[];
};
/**
 * Ville without action
 */
export type VilleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Ville.d.ts.map