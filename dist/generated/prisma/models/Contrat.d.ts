import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Contrat
 *
 */
export type ContratModel = runtime.Types.Result.DefaultSelection<Prisma.$ContratPayload>;
export type AggregateContrat = {
    _count: ContratCountAggregateOutputType | null;
    _min: ContratMinAggregateOutputType | null;
    _max: ContratMaxAggregateOutputType | null;
};
export type ContratMinAggregateOutputType = {
    id: string | null;
    bailId: string | null;
    modeleId: string | null;
    titre: string | null;
    contenu: string | null;
    statut: $Enums.StatutContrat | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContratMaxAggregateOutputType = {
    id: string | null;
    bailId: string | null;
    modeleId: string | null;
    titre: string | null;
    contenu: string | null;
    statut: $Enums.StatutContrat | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContratCountAggregateOutputType = {
    id: number;
    bailId: number;
    modeleId: number;
    titre: number;
    contenu: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ContratMinAggregateInputType = {
    id?: true;
    bailId?: true;
    modeleId?: true;
    titre?: true;
    contenu?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContratMaxAggregateInputType = {
    id?: true;
    bailId?: true;
    modeleId?: true;
    titre?: true;
    contenu?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContratCountAggregateInputType = {
    id?: true;
    bailId?: true;
    modeleId?: true;
    titre?: true;
    contenu?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ContratAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Contrat to aggregate.
     */
    where?: Prisma.ContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contrats to fetch.
     */
    orderBy?: Prisma.ContratOrderByWithRelationInput | Prisma.ContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contrats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Contrats
    **/
    _count?: true | ContratCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContratMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContratMaxAggregateInputType;
};
export type GetContratAggregateType<T extends ContratAggregateArgs> = {
    [P in keyof T & keyof AggregateContrat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContrat[P]> : Prisma.GetScalarType<T[P], AggregateContrat[P]>;
};
export type ContratGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContratWhereInput;
    orderBy?: Prisma.ContratOrderByWithAggregationInput | Prisma.ContratOrderByWithAggregationInput[];
    by: Prisma.ContratScalarFieldEnum[] | Prisma.ContratScalarFieldEnum;
    having?: Prisma.ContratScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContratCountAggregateInputType | true;
    _min?: ContratMinAggregateInputType;
    _max?: ContratMaxAggregateInputType;
};
export type ContratGroupByOutputType = {
    id: string;
    bailId: string;
    modeleId: string | null;
    titre: string;
    contenu: string;
    statut: $Enums.StatutContrat;
    createdAt: Date;
    updatedAt: Date;
    _count: ContratCountAggregateOutputType | null;
    _min: ContratMinAggregateOutputType | null;
    _max: ContratMaxAggregateOutputType | null;
};
type GetContratGroupByPayload<T extends ContratGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContratGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContratGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContratGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContratGroupByOutputType[P]>;
}>>;
export type ContratWhereInput = {
    AND?: Prisma.ContratWhereInput | Prisma.ContratWhereInput[];
    OR?: Prisma.ContratWhereInput[];
    NOT?: Prisma.ContratWhereInput | Prisma.ContratWhereInput[];
    id?: Prisma.StringFilter<"Contrat"> | string;
    bailId?: Prisma.StringFilter<"Contrat"> | string;
    modeleId?: Prisma.StringNullableFilter<"Contrat"> | string | null;
    titre?: Prisma.StringFilter<"Contrat"> | string;
    contenu?: Prisma.StringFilter<"Contrat"> | string;
    statut?: Prisma.EnumStatutContratFilter<"Contrat"> | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFilter<"Contrat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contrat"> | Date | string;
    bail?: Prisma.XOR<Prisma.BailLocationScalarRelationFilter, Prisma.BailLocationWhereInput>;
    modele?: Prisma.XOR<Prisma.ModeleContratNullableScalarRelationFilter, Prisma.ModeleContratWhereInput> | null;
};
export type ContratOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    modeleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bail?: Prisma.BailLocationOrderByWithRelationInput;
    modele?: Prisma.ModeleContratOrderByWithRelationInput;
};
export type ContratWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bailId?: string;
    AND?: Prisma.ContratWhereInput | Prisma.ContratWhereInput[];
    OR?: Prisma.ContratWhereInput[];
    NOT?: Prisma.ContratWhereInput | Prisma.ContratWhereInput[];
    modeleId?: Prisma.StringNullableFilter<"Contrat"> | string | null;
    titre?: Prisma.StringFilter<"Contrat"> | string;
    contenu?: Prisma.StringFilter<"Contrat"> | string;
    statut?: Prisma.EnumStatutContratFilter<"Contrat"> | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFilter<"Contrat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contrat"> | Date | string;
    bail?: Prisma.XOR<Prisma.BailLocationScalarRelationFilter, Prisma.BailLocationWhereInput>;
    modele?: Prisma.XOR<Prisma.ModeleContratNullableScalarRelationFilter, Prisma.ModeleContratWhereInput> | null;
}, "id" | "bailId">;
export type ContratOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    modeleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ContratCountOrderByAggregateInput;
    _max?: Prisma.ContratMaxOrderByAggregateInput;
    _min?: Prisma.ContratMinOrderByAggregateInput;
};
export type ContratScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContratScalarWhereWithAggregatesInput | Prisma.ContratScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContratScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContratScalarWhereWithAggregatesInput | Prisma.ContratScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Contrat"> | string;
    bailId?: Prisma.StringWithAggregatesFilter<"Contrat"> | string;
    modeleId?: Prisma.StringNullableWithAggregatesFilter<"Contrat"> | string | null;
    titre?: Prisma.StringWithAggregatesFilter<"Contrat"> | string;
    contenu?: Prisma.StringWithAggregatesFilter<"Contrat"> | string;
    statut?: Prisma.EnumStatutContratWithAggregatesFilter<"Contrat"> | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Contrat"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Contrat"> | Date | string;
};
export type ContratCreateInput = {
    id?: string;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutContratInput;
    modele?: Prisma.ModeleContratCreateNestedOneWithoutContratsInput;
};
export type ContratUncheckedCreateInput = {
    id?: string;
    bailId: string;
    modeleId?: string | null;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContratUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutContratNestedInput;
    modele?: Prisma.ModeleContratUpdateOneWithoutContratsNestedInput;
};
export type ContratUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    modeleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContratCreateManyInput = {
    id?: string;
    bailId: string;
    modeleId?: string | null;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContratUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContratUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    modeleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContratNullableScalarRelationFilter = {
    is?: Prisma.ContratWhereInput | null;
    isNot?: Prisma.ContratWhereInput | null;
};
export type ContratListRelationFilter = {
    every?: Prisma.ContratWhereInput;
    some?: Prisma.ContratWhereInput;
    none?: Prisma.ContratWhereInput;
};
export type ContratOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContratCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    modeleId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContratMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    modeleId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContratMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    modeleId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    contenu?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContratCreateNestedOneWithoutBailInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutBailInput, Prisma.ContratUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutBailInput;
    connect?: Prisma.ContratWhereUniqueInput;
};
export type ContratUncheckedCreateNestedOneWithoutBailInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutBailInput, Prisma.ContratUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutBailInput;
    connect?: Prisma.ContratWhereUniqueInput;
};
export type ContratUpdateOneWithoutBailNestedInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutBailInput, Prisma.ContratUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutBailInput;
    upsert?: Prisma.ContratUpsertWithoutBailInput;
    disconnect?: Prisma.ContratWhereInput | boolean;
    delete?: Prisma.ContratWhereInput | boolean;
    connect?: Prisma.ContratWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContratUpdateToOneWithWhereWithoutBailInput, Prisma.ContratUpdateWithoutBailInput>, Prisma.ContratUncheckedUpdateWithoutBailInput>;
};
export type ContratUncheckedUpdateOneWithoutBailNestedInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutBailInput, Prisma.ContratUncheckedCreateWithoutBailInput>;
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutBailInput;
    upsert?: Prisma.ContratUpsertWithoutBailInput;
    disconnect?: Prisma.ContratWhereInput | boolean;
    delete?: Prisma.ContratWhereInput | boolean;
    connect?: Prisma.ContratWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContratUpdateToOneWithWhereWithoutBailInput, Prisma.ContratUpdateWithoutBailInput>, Prisma.ContratUncheckedUpdateWithoutBailInput>;
};
export type ContratCreateNestedManyWithoutModeleInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutModeleInput, Prisma.ContratUncheckedCreateWithoutModeleInput> | Prisma.ContratCreateWithoutModeleInput[] | Prisma.ContratUncheckedCreateWithoutModeleInput[];
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutModeleInput | Prisma.ContratCreateOrConnectWithoutModeleInput[];
    createMany?: Prisma.ContratCreateManyModeleInputEnvelope;
    connect?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
};
export type ContratUncheckedCreateNestedManyWithoutModeleInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutModeleInput, Prisma.ContratUncheckedCreateWithoutModeleInput> | Prisma.ContratCreateWithoutModeleInput[] | Prisma.ContratUncheckedCreateWithoutModeleInput[];
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutModeleInput | Prisma.ContratCreateOrConnectWithoutModeleInput[];
    createMany?: Prisma.ContratCreateManyModeleInputEnvelope;
    connect?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
};
export type ContratUpdateManyWithoutModeleNestedInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutModeleInput, Prisma.ContratUncheckedCreateWithoutModeleInput> | Prisma.ContratCreateWithoutModeleInput[] | Prisma.ContratUncheckedCreateWithoutModeleInput[];
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutModeleInput | Prisma.ContratCreateOrConnectWithoutModeleInput[];
    upsert?: Prisma.ContratUpsertWithWhereUniqueWithoutModeleInput | Prisma.ContratUpsertWithWhereUniqueWithoutModeleInput[];
    createMany?: Prisma.ContratCreateManyModeleInputEnvelope;
    set?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    disconnect?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    delete?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    connect?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    update?: Prisma.ContratUpdateWithWhereUniqueWithoutModeleInput | Prisma.ContratUpdateWithWhereUniqueWithoutModeleInput[];
    updateMany?: Prisma.ContratUpdateManyWithWhereWithoutModeleInput | Prisma.ContratUpdateManyWithWhereWithoutModeleInput[];
    deleteMany?: Prisma.ContratScalarWhereInput | Prisma.ContratScalarWhereInput[];
};
export type ContratUncheckedUpdateManyWithoutModeleNestedInput = {
    create?: Prisma.XOR<Prisma.ContratCreateWithoutModeleInput, Prisma.ContratUncheckedCreateWithoutModeleInput> | Prisma.ContratCreateWithoutModeleInput[] | Prisma.ContratUncheckedCreateWithoutModeleInput[];
    connectOrCreate?: Prisma.ContratCreateOrConnectWithoutModeleInput | Prisma.ContratCreateOrConnectWithoutModeleInput[];
    upsert?: Prisma.ContratUpsertWithWhereUniqueWithoutModeleInput | Prisma.ContratUpsertWithWhereUniqueWithoutModeleInput[];
    createMany?: Prisma.ContratCreateManyModeleInputEnvelope;
    set?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    disconnect?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    delete?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    connect?: Prisma.ContratWhereUniqueInput | Prisma.ContratWhereUniqueInput[];
    update?: Prisma.ContratUpdateWithWhereUniqueWithoutModeleInput | Prisma.ContratUpdateWithWhereUniqueWithoutModeleInput[];
    updateMany?: Prisma.ContratUpdateManyWithWhereWithoutModeleInput | Prisma.ContratUpdateManyWithWhereWithoutModeleInput[];
    deleteMany?: Prisma.ContratScalarWhereInput | Prisma.ContratScalarWhereInput[];
};
export type EnumStatutContratFieldUpdateOperationsInput = {
    set?: $Enums.StatutContrat;
};
export type ContratCreateWithoutBailInput = {
    id?: string;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    modele?: Prisma.ModeleContratCreateNestedOneWithoutContratsInput;
};
export type ContratUncheckedCreateWithoutBailInput = {
    id?: string;
    modeleId?: string | null;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContratCreateOrConnectWithoutBailInput = {
    where: Prisma.ContratWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContratCreateWithoutBailInput, Prisma.ContratUncheckedCreateWithoutBailInput>;
};
export type ContratUpsertWithoutBailInput = {
    update: Prisma.XOR<Prisma.ContratUpdateWithoutBailInput, Prisma.ContratUncheckedUpdateWithoutBailInput>;
    create: Prisma.XOR<Prisma.ContratCreateWithoutBailInput, Prisma.ContratUncheckedCreateWithoutBailInput>;
    where?: Prisma.ContratWhereInput;
};
export type ContratUpdateToOneWithWhereWithoutBailInput = {
    where?: Prisma.ContratWhereInput;
    data: Prisma.XOR<Prisma.ContratUpdateWithoutBailInput, Prisma.ContratUncheckedUpdateWithoutBailInput>;
};
export type ContratUpdateWithoutBailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modele?: Prisma.ModeleContratUpdateOneWithoutContratsNestedInput;
};
export type ContratUncheckedUpdateWithoutBailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modeleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContratCreateWithoutModeleInput = {
    id?: string;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutContratInput;
};
export type ContratUncheckedCreateWithoutModeleInput = {
    id?: string;
    bailId: string;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContratCreateOrConnectWithoutModeleInput = {
    where: Prisma.ContratWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContratCreateWithoutModeleInput, Prisma.ContratUncheckedCreateWithoutModeleInput>;
};
export type ContratCreateManyModeleInputEnvelope = {
    data: Prisma.ContratCreateManyModeleInput | Prisma.ContratCreateManyModeleInput[];
    skipDuplicates?: boolean;
};
export type ContratUpsertWithWhereUniqueWithoutModeleInput = {
    where: Prisma.ContratWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContratUpdateWithoutModeleInput, Prisma.ContratUncheckedUpdateWithoutModeleInput>;
    create: Prisma.XOR<Prisma.ContratCreateWithoutModeleInput, Prisma.ContratUncheckedCreateWithoutModeleInput>;
};
export type ContratUpdateWithWhereUniqueWithoutModeleInput = {
    where: Prisma.ContratWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContratUpdateWithoutModeleInput, Prisma.ContratUncheckedUpdateWithoutModeleInput>;
};
export type ContratUpdateManyWithWhereWithoutModeleInput = {
    where: Prisma.ContratScalarWhereInput;
    data: Prisma.XOR<Prisma.ContratUpdateManyMutationInput, Prisma.ContratUncheckedUpdateManyWithoutModeleInput>;
};
export type ContratScalarWhereInput = {
    AND?: Prisma.ContratScalarWhereInput | Prisma.ContratScalarWhereInput[];
    OR?: Prisma.ContratScalarWhereInput[];
    NOT?: Prisma.ContratScalarWhereInput | Prisma.ContratScalarWhereInput[];
    id?: Prisma.StringFilter<"Contrat"> | string;
    bailId?: Prisma.StringFilter<"Contrat"> | string;
    modeleId?: Prisma.StringNullableFilter<"Contrat"> | string | null;
    titre?: Prisma.StringFilter<"Contrat"> | string;
    contenu?: Prisma.StringFilter<"Contrat"> | string;
    statut?: Prisma.EnumStatutContratFilter<"Contrat"> | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFilter<"Contrat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contrat"> | Date | string;
};
export type ContratCreateManyModeleInput = {
    id?: string;
    bailId: string;
    titre: string;
    contenu: string;
    statut?: $Enums.StatutContrat;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContratUpdateWithoutModeleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutContratNestedInput;
};
export type ContratUncheckedUpdateWithoutModeleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContratUncheckedUpdateManyWithoutModeleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    contenu?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutContratFieldUpdateOperationsInput | $Enums.StatutContrat;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContratSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    modeleId?: boolean;
    titre?: boolean;
    contenu?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    modele?: boolean | Prisma.Contrat$modeleArgs<ExtArgs>;
}, ExtArgs["result"]["contrat"]>;
export type ContratSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    modeleId?: boolean;
    titre?: boolean;
    contenu?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    modele?: boolean | Prisma.Contrat$modeleArgs<ExtArgs>;
}, ExtArgs["result"]["contrat"]>;
export type ContratSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    modeleId?: boolean;
    titre?: boolean;
    contenu?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    modele?: boolean | Prisma.Contrat$modeleArgs<ExtArgs>;
}, ExtArgs["result"]["contrat"]>;
export type ContratSelectScalar = {
    id?: boolean;
    bailId?: boolean;
    modeleId?: boolean;
    titre?: boolean;
    contenu?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ContratOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bailId" | "modeleId" | "titre" | "contenu" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["contrat"]>;
export type ContratInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    modele?: boolean | Prisma.Contrat$modeleArgs<ExtArgs>;
};
export type ContratIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    modele?: boolean | Prisma.Contrat$modeleArgs<ExtArgs>;
};
export type ContratIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    modele?: boolean | Prisma.Contrat$modeleArgs<ExtArgs>;
};
export type $ContratPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Contrat";
    objects: {
        bail: Prisma.$BailLocationPayload<ExtArgs>;
        modele: Prisma.$ModeleContratPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bailId: string;
        modeleId: string | null;
        titre: string;
        contenu: string;
        statut: $Enums.StatutContrat;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["contrat"]>;
    composites: {};
};
export type ContratGetPayload<S extends boolean | null | undefined | ContratDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContratPayload, S>;
export type ContratCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContratFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContratCountAggregateInputType | true;
};
export interface ContratDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Contrat'];
        meta: {
            name: 'Contrat';
        };
    };
    /**
     * Find zero or one Contrat that matches the filter.
     * @param {ContratFindUniqueArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContratFindUniqueArgs>(args: Prisma.SelectSubset<T, ContratFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Contrat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContratFindUniqueOrThrowArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContratFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContratFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contrat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindFirstArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContratFindFirstArgs>(args?: Prisma.SelectSubset<T, ContratFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contrat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindFirstOrThrowArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContratFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContratFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Contrats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contrats
     * const contrats = await prisma.contrat.findMany()
     *
     * // Get first 10 Contrats
     * const contrats = await prisma.contrat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contratWithIdOnly = await prisma.contrat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ContratFindManyArgs>(args?: Prisma.SelectSubset<T, ContratFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Contrat.
     * @param {ContratCreateArgs} args - Arguments to create a Contrat.
     * @example
     * // Create one Contrat
     * const Contrat = await prisma.contrat.create({
     *   data: {
     *     // ... data to create a Contrat
     *   }
     * })
     *
     */
    create<T extends ContratCreateArgs>(args: Prisma.SelectSubset<T, ContratCreateArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Contrats.
     * @param {ContratCreateManyArgs} args - Arguments to create many Contrats.
     * @example
     * // Create many Contrats
     * const contrat = await prisma.contrat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContratCreateManyArgs>(args?: Prisma.SelectSubset<T, ContratCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Contrats and returns the data saved in the database.
     * @param {ContratCreateManyAndReturnArgs} args - Arguments to create many Contrats.
     * @example
     * // Create many Contrats
     * const contrat = await prisma.contrat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Contrats and only return the `id`
     * const contratWithIdOnly = await prisma.contrat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContratCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContratCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Contrat.
     * @param {ContratDeleteArgs} args - Arguments to delete one Contrat.
     * @example
     * // Delete one Contrat
     * const Contrat = await prisma.contrat.delete({
     *   where: {
     *     // ... filter to delete one Contrat
     *   }
     * })
     *
     */
    delete<T extends ContratDeleteArgs>(args: Prisma.SelectSubset<T, ContratDeleteArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Contrat.
     * @param {ContratUpdateArgs} args - Arguments to update one Contrat.
     * @example
     * // Update one Contrat
     * const contrat = await prisma.contrat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContratUpdateArgs>(args: Prisma.SelectSubset<T, ContratUpdateArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Contrats.
     * @param {ContratDeleteManyArgs} args - Arguments to filter Contrats to delete.
     * @example
     * // Delete a few Contrats
     * const { count } = await prisma.contrat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContratDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContratDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contrats
     * const contrat = await prisma.contrat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContratUpdateManyArgs>(args: Prisma.SelectSubset<T, ContratUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contrats and returns the data updated in the database.
     * @param {ContratUpdateManyAndReturnArgs} args - Arguments to update many Contrats.
     * @example
     * // Update many Contrats
     * const contrat = await prisma.contrat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Contrats and only return the `id`
     * const contratWithIdOnly = await prisma.contrat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContratUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContratUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Contrat.
     * @param {ContratUpsertArgs} args - Arguments to update or create a Contrat.
     * @example
     * // Update or create a Contrat
     * const contrat = await prisma.contrat.upsert({
     *   create: {
     *     // ... data to create a Contrat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contrat we want to update
     *   }
     * })
     */
    upsert<T extends ContratUpsertArgs>(args: Prisma.SelectSubset<T, ContratUpsertArgs<ExtArgs>>): Prisma.Prisma__ContratClient<runtime.Types.Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Contrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratCountArgs} args - Arguments to filter Contrats to count.
     * @example
     * // Count the number of Contrats
     * const count = await prisma.contrat.count({
     *   where: {
     *     // ... the filter for the Contrats we want to count
     *   }
     * })
    **/
    count<T extends ContratCountArgs>(args?: Prisma.Subset<T, ContratCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContratCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Contrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContratAggregateArgs>(args: Prisma.Subset<T, ContratAggregateArgs>): Prisma.PrismaPromise<GetContratAggregateType<T>>;
    /**
     * Group by Contrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ContratGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContratGroupByArgs['orderBy'];
    } : {
        orderBy?: ContratGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContratGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Contrat model
     */
    readonly fields: ContratFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Contrat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ContratClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bail<T extends Prisma.BailLocationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BailLocationDefaultArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    modele<T extends Prisma.Contrat$modeleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contrat$modeleArgs<ExtArgs>>): Prisma.Prisma__ModeleContratClient<runtime.Types.Result.GetResult<Prisma.$ModeleContratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Contrat model
 */
export interface ContratFieldRefs {
    readonly id: Prisma.FieldRef<"Contrat", 'String'>;
    readonly bailId: Prisma.FieldRef<"Contrat", 'String'>;
    readonly modeleId: Prisma.FieldRef<"Contrat", 'String'>;
    readonly titre: Prisma.FieldRef<"Contrat", 'String'>;
    readonly contenu: Prisma.FieldRef<"Contrat", 'String'>;
    readonly statut: Prisma.FieldRef<"Contrat", 'StatutContrat'>;
    readonly createdAt: Prisma.FieldRef<"Contrat", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Contrat", 'DateTime'>;
}
/**
 * Contrat findUnique
 */
export type ContratFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Contrat to fetch.
     */
    where: Prisma.ContratWhereUniqueInput;
};
/**
 * Contrat findUniqueOrThrow
 */
export type ContratFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Contrat to fetch.
     */
    where: Prisma.ContratWhereUniqueInput;
};
/**
 * Contrat findFirst
 */
export type ContratFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Contrat to fetch.
     */
    where?: Prisma.ContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contrats to fetch.
     */
    orderBy?: Prisma.ContratOrderByWithRelationInput | Prisma.ContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contrats.
     */
    cursor?: Prisma.ContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contrats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contrats.
     */
    distinct?: Prisma.ContratScalarFieldEnum | Prisma.ContratScalarFieldEnum[];
};
/**
 * Contrat findFirstOrThrow
 */
export type ContratFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Contrat to fetch.
     */
    where?: Prisma.ContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contrats to fetch.
     */
    orderBy?: Prisma.ContratOrderByWithRelationInput | Prisma.ContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contrats.
     */
    cursor?: Prisma.ContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contrats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contrats.
     */
    distinct?: Prisma.ContratScalarFieldEnum | Prisma.ContratScalarFieldEnum[];
};
/**
 * Contrat findMany
 */
export type ContratFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Contrats to fetch.
     */
    where?: Prisma.ContratWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contrats to fetch.
     */
    orderBy?: Prisma.ContratOrderByWithRelationInput | Prisma.ContratOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Contrats.
     */
    cursor?: Prisma.ContratWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contrats.
     */
    skip?: number;
    distinct?: Prisma.ContratScalarFieldEnum | Prisma.ContratScalarFieldEnum[];
};
/**
 * Contrat create
 */
export type ContratCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Contrat.
     */
    data: Prisma.XOR<Prisma.ContratCreateInput, Prisma.ContratUncheckedCreateInput>;
};
/**
 * Contrat createMany
 */
export type ContratCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contrats.
     */
    data: Prisma.ContratCreateManyInput | Prisma.ContratCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Contrat createManyAndReturn
 */
export type ContratCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: Prisma.ContratSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Contrat
     */
    omit?: Prisma.ContratOmit<ExtArgs> | null;
    /**
     * The data used to create many Contrats.
     */
    data: Prisma.ContratCreateManyInput | Prisma.ContratCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContratIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Contrat update
 */
export type ContratUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Contrat.
     */
    data: Prisma.XOR<Prisma.ContratUpdateInput, Prisma.ContratUncheckedUpdateInput>;
    /**
     * Choose, which Contrat to update.
     */
    where: Prisma.ContratWhereUniqueInput;
};
/**
 * Contrat updateMany
 */
export type ContratUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Contrats.
     */
    data: Prisma.XOR<Prisma.ContratUpdateManyMutationInput, Prisma.ContratUncheckedUpdateManyInput>;
    /**
     * Filter which Contrats to update
     */
    where?: Prisma.ContratWhereInput;
    /**
     * Limit how many Contrats to update.
     */
    limit?: number;
};
/**
 * Contrat updateManyAndReturn
 */
export type ContratUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: Prisma.ContratSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Contrat
     */
    omit?: Prisma.ContratOmit<ExtArgs> | null;
    /**
     * The data used to update Contrats.
     */
    data: Prisma.XOR<Prisma.ContratUpdateManyMutationInput, Prisma.ContratUncheckedUpdateManyInput>;
    /**
     * Filter which Contrats to update
     */
    where?: Prisma.ContratWhereInput;
    /**
     * Limit how many Contrats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContratIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Contrat upsert
 */
export type ContratUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Contrat to update in case it exists.
     */
    where: Prisma.ContratWhereUniqueInput;
    /**
     * In case the Contrat found by the `where` argument doesn't exist, create a new Contrat with this data.
     */
    create: Prisma.XOR<Prisma.ContratCreateInput, Prisma.ContratUncheckedCreateInput>;
    /**
     * In case the Contrat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ContratUpdateInput, Prisma.ContratUncheckedUpdateInput>;
};
/**
 * Contrat delete
 */
export type ContratDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Contrat to delete.
     */
    where: Prisma.ContratWhereUniqueInput;
};
/**
 * Contrat deleteMany
 */
export type ContratDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Contrats to delete
     */
    where?: Prisma.ContratWhereInput;
    /**
     * Limit how many Contrats to delete.
     */
    limit?: number;
};
/**
 * Contrat.modele
 */
export type Contrat$modeleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ModeleContratWhereInput;
};
/**
 * Contrat without action
 */
export type ContratDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Contrat.d.ts.map