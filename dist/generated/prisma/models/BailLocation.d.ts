import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BailLocation
 *
 */
export type BailLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$BailLocationPayload>;
export type AggregateBailLocation = {
    _count: BailLocationCountAggregateOutputType | null;
    _avg: BailLocationAvgAggregateOutputType | null;
    _sum: BailLocationSumAggregateOutputType | null;
    _min: BailLocationMinAggregateOutputType | null;
    _max: BailLocationMaxAggregateOutputType | null;
};
export type BailLocationAvgAggregateOutputType = {
    montantLoyer: number | null;
    montantCaution: number | null;
};
export type BailLocationSumAggregateOutputType = {
    montantLoyer: number | null;
    montantCaution: number | null;
};
export type BailLocationMinAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    locataireId: string | null;
    proprietaireId: string | null;
    typeBail: string | null;
    dateDebutBail: Date | null;
    dateFinBail: Date | null;
    renouvellement: boolean | null;
    montantLoyer: number | null;
    montantCaution: number | null;
    frequencePaiement: string | null;
    statut: $Enums.StatutBail | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BailLocationMaxAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    locataireId: string | null;
    proprietaireId: string | null;
    typeBail: string | null;
    dateDebutBail: Date | null;
    dateFinBail: Date | null;
    renouvellement: boolean | null;
    montantLoyer: number | null;
    montantCaution: number | null;
    frequencePaiement: string | null;
    statut: $Enums.StatutBail | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BailLocationCountAggregateOutputType = {
    id: number;
    bienId: number;
    locataireId: number;
    proprietaireId: number;
    typeBail: number;
    dateDebutBail: number;
    dateFinBail: number;
    renouvellement: number;
    montantLoyer: number;
    montantCaution: number;
    frequencePaiement: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BailLocationAvgAggregateInputType = {
    montantLoyer?: true;
    montantCaution?: true;
};
export type BailLocationSumAggregateInputType = {
    montantLoyer?: true;
    montantCaution?: true;
};
export type BailLocationMinAggregateInputType = {
    id?: true;
    bienId?: true;
    locataireId?: true;
    proprietaireId?: true;
    typeBail?: true;
    dateDebutBail?: true;
    dateFinBail?: true;
    renouvellement?: true;
    montantLoyer?: true;
    montantCaution?: true;
    frequencePaiement?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BailLocationMaxAggregateInputType = {
    id?: true;
    bienId?: true;
    locataireId?: true;
    proprietaireId?: true;
    typeBail?: true;
    dateDebutBail?: true;
    dateFinBail?: true;
    renouvellement?: true;
    montantLoyer?: true;
    montantCaution?: true;
    frequencePaiement?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BailLocationCountAggregateInputType = {
    id?: true;
    bienId?: true;
    locataireId?: true;
    proprietaireId?: true;
    typeBail?: true;
    dateDebutBail?: true;
    dateFinBail?: true;
    renouvellement?: true;
    montantLoyer?: true;
    montantCaution?: true;
    frequencePaiement?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BailLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BailLocation to aggregate.
     */
    where?: Prisma.BailLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BailLocations to fetch.
     */
    orderBy?: Prisma.BailLocationOrderByWithRelationInput | Prisma.BailLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BailLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BailLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BailLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BailLocations
    **/
    _count?: true | BailLocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BailLocationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BailLocationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BailLocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BailLocationMaxAggregateInputType;
};
export type GetBailLocationAggregateType<T extends BailLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateBailLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBailLocation[P]> : Prisma.GetScalarType<T[P], AggregateBailLocation[P]>;
};
export type BailLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BailLocationWhereInput;
    orderBy?: Prisma.BailLocationOrderByWithAggregationInput | Prisma.BailLocationOrderByWithAggregationInput[];
    by: Prisma.BailLocationScalarFieldEnum[] | Prisma.BailLocationScalarFieldEnum;
    having?: Prisma.BailLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BailLocationCountAggregateInputType | true;
    _avg?: BailLocationAvgAggregateInputType;
    _sum?: BailLocationSumAggregateInputType;
    _min?: BailLocationMinAggregateInputType;
    _max?: BailLocationMaxAggregateInputType;
};
export type BailLocationGroupByOutputType = {
    id: string;
    bienId: string;
    locataireId: string;
    proprietaireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    frequencePaiement: string | null;
    statut: $Enums.StatutBail;
    createdAt: Date;
    updatedAt: Date;
    _count: BailLocationCountAggregateOutputType | null;
    _avg: BailLocationAvgAggregateOutputType | null;
    _sum: BailLocationSumAggregateOutputType | null;
    _min: BailLocationMinAggregateOutputType | null;
    _max: BailLocationMaxAggregateOutputType | null;
};
type GetBailLocationGroupByPayload<T extends BailLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BailLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BailLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BailLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BailLocationGroupByOutputType[P]>;
}>>;
export type BailLocationWhereInput = {
    AND?: Prisma.BailLocationWhereInput | Prisma.BailLocationWhereInput[];
    OR?: Prisma.BailLocationWhereInput[];
    NOT?: Prisma.BailLocationWhereInput | Prisma.BailLocationWhereInput[];
    id?: Prisma.StringFilter<"BailLocation"> | string;
    bienId?: Prisma.StringFilter<"BailLocation"> | string;
    locataireId?: Prisma.StringFilter<"BailLocation"> | string;
    proprietaireId?: Prisma.StringFilter<"BailLocation"> | string;
    typeBail?: Prisma.StringNullableFilter<"BailLocation"> | string | null;
    dateDebutBail?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    dateFinBail?: Prisma.DateTimeNullableFilter<"BailLocation"> | Date | string | null;
    renouvellement?: Prisma.BoolFilter<"BailLocation"> | boolean;
    montantLoyer?: Prisma.FloatFilter<"BailLocation"> | number;
    montantCaution?: Prisma.FloatNullableFilter<"BailLocation"> | number | null;
    frequencePaiement?: Prisma.StringNullableFilter<"BailLocation"> | string | null;
    statut?: Prisma.EnumStatutBailFilter<"BailLocation"> | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    locataire?: Prisma.XOR<Prisma.LocataireScalarRelationFilter, Prisma.LocataireWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
};
export type BailLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDebutBail?: Prisma.SortOrder;
    dateFinBail?: Prisma.SortOrderInput | Prisma.SortOrder;
    renouvellement?: Prisma.SortOrder;
    montantLoyer?: Prisma.SortOrder;
    montantCaution?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
    locataire?: Prisma.LocataireOrderByWithRelationInput;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
};
export type BailLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BailLocationWhereInput | Prisma.BailLocationWhereInput[];
    OR?: Prisma.BailLocationWhereInput[];
    NOT?: Prisma.BailLocationWhereInput | Prisma.BailLocationWhereInput[];
    bienId?: Prisma.StringFilter<"BailLocation"> | string;
    locataireId?: Prisma.StringFilter<"BailLocation"> | string;
    proprietaireId?: Prisma.StringFilter<"BailLocation"> | string;
    typeBail?: Prisma.StringNullableFilter<"BailLocation"> | string | null;
    dateDebutBail?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    dateFinBail?: Prisma.DateTimeNullableFilter<"BailLocation"> | Date | string | null;
    renouvellement?: Prisma.BoolFilter<"BailLocation"> | boolean;
    montantLoyer?: Prisma.FloatFilter<"BailLocation"> | number;
    montantCaution?: Prisma.FloatNullableFilter<"BailLocation"> | number | null;
    frequencePaiement?: Prisma.StringNullableFilter<"BailLocation"> | string | null;
    statut?: Prisma.EnumStatutBailFilter<"BailLocation"> | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    locataire?: Prisma.XOR<Prisma.LocataireScalarRelationFilter, Prisma.LocataireWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
}, "id">;
export type BailLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDebutBail?: Prisma.SortOrder;
    dateFinBail?: Prisma.SortOrderInput | Prisma.SortOrder;
    renouvellement?: Prisma.SortOrder;
    montantLoyer?: Prisma.SortOrder;
    montantCaution?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BailLocationCountOrderByAggregateInput;
    _avg?: Prisma.BailLocationAvgOrderByAggregateInput;
    _max?: Prisma.BailLocationMaxOrderByAggregateInput;
    _min?: Prisma.BailLocationMinOrderByAggregateInput;
    _sum?: Prisma.BailLocationSumOrderByAggregateInput;
};
export type BailLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.BailLocationScalarWhereWithAggregatesInput | Prisma.BailLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.BailLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BailLocationScalarWhereWithAggregatesInput | Prisma.BailLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BailLocation"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"BailLocation"> | string;
    locataireId?: Prisma.StringWithAggregatesFilter<"BailLocation"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"BailLocation"> | string;
    typeBail?: Prisma.StringNullableWithAggregatesFilter<"BailLocation"> | string | null;
    dateDebutBail?: Prisma.DateTimeWithAggregatesFilter<"BailLocation"> | Date | string;
    dateFinBail?: Prisma.DateTimeNullableWithAggregatesFilter<"BailLocation"> | Date | string | null;
    renouvellement?: Prisma.BoolWithAggregatesFilter<"BailLocation"> | boolean;
    montantLoyer?: Prisma.FloatWithAggregatesFilter<"BailLocation"> | number;
    montantCaution?: Prisma.FloatNullableWithAggregatesFilter<"BailLocation"> | number | null;
    frequencePaiement?: Prisma.StringNullableWithAggregatesFilter<"BailLocation"> | string | null;
    statut?: Prisma.EnumStatutBailWithAggregatesFilter<"BailLocation"> | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BailLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BailLocation"> | Date | string;
};
export type BailLocationCreateInput = {
    id?: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutBailsInput;
    locataire: Prisma.LocataireCreateNestedOneWithoutBailsInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBailsInput;
};
export type BailLocationUncheckedCreateInput = {
    id?: string;
    bienId: string;
    locataireId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutBailsNestedInput;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutBailsNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBailsNestedInput;
};
export type BailLocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationCreateManyInput = {
    id?: string;
    bienId: string;
    locataireId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationListRelationFilter = {
    every?: Prisma.BailLocationWhereInput;
    some?: Prisma.BailLocationWhereInput;
    none?: Prisma.BailLocationWhereInput;
};
export type BailLocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BailLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrder;
    dateDebutBail?: Prisma.SortOrder;
    dateFinBail?: Prisma.SortOrder;
    renouvellement?: Prisma.SortOrder;
    montantLoyer?: Prisma.SortOrder;
    montantCaution?: Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BailLocationAvgOrderByAggregateInput = {
    montantLoyer?: Prisma.SortOrder;
    montantCaution?: Prisma.SortOrder;
};
export type BailLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrder;
    dateDebutBail?: Prisma.SortOrder;
    dateFinBail?: Prisma.SortOrder;
    renouvellement?: Prisma.SortOrder;
    montantLoyer?: Prisma.SortOrder;
    montantCaution?: Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BailLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typeBail?: Prisma.SortOrder;
    dateDebutBail?: Prisma.SortOrder;
    dateFinBail?: Prisma.SortOrder;
    renouvellement?: Prisma.SortOrder;
    montantLoyer?: Prisma.SortOrder;
    montantCaution?: Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BailLocationSumOrderByAggregateInput = {
    montantLoyer?: Prisma.SortOrder;
    montantCaution?: Prisma.SortOrder;
};
export type BailLocationCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutBienInput, Prisma.BailLocationUncheckedCreateWithoutBienInput> | Prisma.BailLocationCreateWithoutBienInput[] | Prisma.BailLocationUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutBienInput | Prisma.BailLocationCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BailLocationCreateManyBienInputEnvelope;
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
};
export type BailLocationUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutBienInput, Prisma.BailLocationUncheckedCreateWithoutBienInput> | Prisma.BailLocationCreateWithoutBienInput[] | Prisma.BailLocationUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutBienInput | Prisma.BailLocationCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BailLocationCreateManyBienInputEnvelope;
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
};
export type BailLocationUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutBienInput, Prisma.BailLocationUncheckedCreateWithoutBienInput> | Prisma.BailLocationCreateWithoutBienInput[] | Prisma.BailLocationUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutBienInput | Prisma.BailLocationCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BailLocationUpsertWithWhereUniqueWithoutBienInput | Prisma.BailLocationUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BailLocationCreateManyBienInputEnvelope;
    set?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    disconnect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    delete?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    update?: Prisma.BailLocationUpdateWithWhereUniqueWithoutBienInput | Prisma.BailLocationUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BailLocationUpdateManyWithWhereWithoutBienInput | Prisma.BailLocationUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
};
export type BailLocationUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutBienInput, Prisma.BailLocationUncheckedCreateWithoutBienInput> | Prisma.BailLocationCreateWithoutBienInput[] | Prisma.BailLocationUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutBienInput | Prisma.BailLocationCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BailLocationUpsertWithWhereUniqueWithoutBienInput | Prisma.BailLocationUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BailLocationCreateManyBienInputEnvelope;
    set?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    disconnect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    delete?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    update?: Prisma.BailLocationUpdateWithWhereUniqueWithoutBienInput | Prisma.BailLocationUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BailLocationUpdateManyWithWhereWithoutBienInput | Prisma.BailLocationUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
};
export type BailLocationCreateNestedManyWithoutLocataireInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutLocataireInput, Prisma.BailLocationUncheckedCreateWithoutLocataireInput> | Prisma.BailLocationCreateWithoutLocataireInput[] | Prisma.BailLocationUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutLocataireInput | Prisma.BailLocationCreateOrConnectWithoutLocataireInput[];
    createMany?: Prisma.BailLocationCreateManyLocataireInputEnvelope;
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
};
export type BailLocationUncheckedCreateNestedManyWithoutLocataireInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutLocataireInput, Prisma.BailLocationUncheckedCreateWithoutLocataireInput> | Prisma.BailLocationCreateWithoutLocataireInput[] | Prisma.BailLocationUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutLocataireInput | Prisma.BailLocationCreateOrConnectWithoutLocataireInput[];
    createMany?: Prisma.BailLocationCreateManyLocataireInputEnvelope;
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
};
export type BailLocationUpdateManyWithoutLocataireNestedInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutLocataireInput, Prisma.BailLocationUncheckedCreateWithoutLocataireInput> | Prisma.BailLocationCreateWithoutLocataireInput[] | Prisma.BailLocationUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutLocataireInput | Prisma.BailLocationCreateOrConnectWithoutLocataireInput[];
    upsert?: Prisma.BailLocationUpsertWithWhereUniqueWithoutLocataireInput | Prisma.BailLocationUpsertWithWhereUniqueWithoutLocataireInput[];
    createMany?: Prisma.BailLocationCreateManyLocataireInputEnvelope;
    set?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    disconnect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    delete?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    update?: Prisma.BailLocationUpdateWithWhereUniqueWithoutLocataireInput | Prisma.BailLocationUpdateWithWhereUniqueWithoutLocataireInput[];
    updateMany?: Prisma.BailLocationUpdateManyWithWhereWithoutLocataireInput | Prisma.BailLocationUpdateManyWithWhereWithoutLocataireInput[];
    deleteMany?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
};
export type BailLocationUncheckedUpdateManyWithoutLocataireNestedInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutLocataireInput, Prisma.BailLocationUncheckedCreateWithoutLocataireInput> | Prisma.BailLocationCreateWithoutLocataireInput[] | Prisma.BailLocationUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutLocataireInput | Prisma.BailLocationCreateOrConnectWithoutLocataireInput[];
    upsert?: Prisma.BailLocationUpsertWithWhereUniqueWithoutLocataireInput | Prisma.BailLocationUpsertWithWhereUniqueWithoutLocataireInput[];
    createMany?: Prisma.BailLocationCreateManyLocataireInputEnvelope;
    set?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    disconnect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    delete?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    update?: Prisma.BailLocationUpdateWithWhereUniqueWithoutLocataireInput | Prisma.BailLocationUpdateWithWhereUniqueWithoutLocataireInput[];
    updateMany?: Prisma.BailLocationUpdateManyWithWhereWithoutLocataireInput | Prisma.BailLocationUpdateManyWithWhereWithoutLocataireInput[];
    deleteMany?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
};
export type EnumStatutBailFieldUpdateOperationsInput = {
    set?: $Enums.StatutBail;
};
export type BailLocationCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutProprietaireInput, Prisma.BailLocationUncheckedCreateWithoutProprietaireInput> | Prisma.BailLocationCreateWithoutProprietaireInput[] | Prisma.BailLocationUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutProprietaireInput | Prisma.BailLocationCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.BailLocationCreateManyProprietaireInputEnvelope;
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
};
export type BailLocationUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutProprietaireInput, Prisma.BailLocationUncheckedCreateWithoutProprietaireInput> | Prisma.BailLocationCreateWithoutProprietaireInput[] | Prisma.BailLocationUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutProprietaireInput | Prisma.BailLocationCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.BailLocationCreateManyProprietaireInputEnvelope;
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
};
export type BailLocationUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutProprietaireInput, Prisma.BailLocationUncheckedCreateWithoutProprietaireInput> | Prisma.BailLocationCreateWithoutProprietaireInput[] | Prisma.BailLocationUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutProprietaireInput | Prisma.BailLocationCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.BailLocationUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.BailLocationUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.BailLocationCreateManyProprietaireInputEnvelope;
    set?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    disconnect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    delete?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    update?: Prisma.BailLocationUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.BailLocationUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.BailLocationUpdateManyWithWhereWithoutProprietaireInput | Prisma.BailLocationUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
};
export type BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.BailLocationCreateWithoutProprietaireInput, Prisma.BailLocationUncheckedCreateWithoutProprietaireInput> | Prisma.BailLocationCreateWithoutProprietaireInput[] | Prisma.BailLocationUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BailLocationCreateOrConnectWithoutProprietaireInput | Prisma.BailLocationCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.BailLocationUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.BailLocationUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.BailLocationCreateManyProprietaireInputEnvelope;
    set?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    disconnect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    delete?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    connect?: Prisma.BailLocationWhereUniqueInput | Prisma.BailLocationWhereUniqueInput[];
    update?: Prisma.BailLocationUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.BailLocationUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.BailLocationUpdateManyWithWhereWithoutProprietaireInput | Prisma.BailLocationUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
};
export type BailLocationCreateWithoutBienInput = {
    id?: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    locataire: Prisma.LocataireCreateNestedOneWithoutBailsInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBailsInput;
};
export type BailLocationUncheckedCreateWithoutBienInput = {
    id?: string;
    locataireId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationCreateOrConnectWithoutBienInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BailLocationCreateWithoutBienInput, Prisma.BailLocationUncheckedCreateWithoutBienInput>;
};
export type BailLocationCreateManyBienInputEnvelope = {
    data: Prisma.BailLocationCreateManyBienInput | Prisma.BailLocationCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type BailLocationUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BailLocationUpdateWithoutBienInput, Prisma.BailLocationUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.BailLocationCreateWithoutBienInput, Prisma.BailLocationUncheckedCreateWithoutBienInput>;
};
export type BailLocationUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BailLocationUpdateWithoutBienInput, Prisma.BailLocationUncheckedUpdateWithoutBienInput>;
};
export type BailLocationUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.BailLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.BailLocationUpdateManyMutationInput, Prisma.BailLocationUncheckedUpdateManyWithoutBienInput>;
};
export type BailLocationScalarWhereInput = {
    AND?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
    OR?: Prisma.BailLocationScalarWhereInput[];
    NOT?: Prisma.BailLocationScalarWhereInput | Prisma.BailLocationScalarWhereInput[];
    id?: Prisma.StringFilter<"BailLocation"> | string;
    bienId?: Prisma.StringFilter<"BailLocation"> | string;
    locataireId?: Prisma.StringFilter<"BailLocation"> | string;
    proprietaireId?: Prisma.StringFilter<"BailLocation"> | string;
    typeBail?: Prisma.StringNullableFilter<"BailLocation"> | string | null;
    dateDebutBail?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    dateFinBail?: Prisma.DateTimeNullableFilter<"BailLocation"> | Date | string | null;
    renouvellement?: Prisma.BoolFilter<"BailLocation"> | boolean;
    montantLoyer?: Prisma.FloatFilter<"BailLocation"> | number;
    montantCaution?: Prisma.FloatNullableFilter<"BailLocation"> | number | null;
    frequencePaiement?: Prisma.StringNullableFilter<"BailLocation"> | string | null;
    statut?: Prisma.EnumStatutBailFilter<"BailLocation"> | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BailLocation"> | Date | string;
};
export type BailLocationCreateWithoutLocataireInput = {
    id?: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutBailsInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBailsInput;
};
export type BailLocationUncheckedCreateWithoutLocataireInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationCreateOrConnectWithoutLocataireInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BailLocationCreateWithoutLocataireInput, Prisma.BailLocationUncheckedCreateWithoutLocataireInput>;
};
export type BailLocationCreateManyLocataireInputEnvelope = {
    data: Prisma.BailLocationCreateManyLocataireInput | Prisma.BailLocationCreateManyLocataireInput[];
    skipDuplicates?: boolean;
};
export type BailLocationUpsertWithWhereUniqueWithoutLocataireInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BailLocationUpdateWithoutLocataireInput, Prisma.BailLocationUncheckedUpdateWithoutLocataireInput>;
    create: Prisma.XOR<Prisma.BailLocationCreateWithoutLocataireInput, Prisma.BailLocationUncheckedCreateWithoutLocataireInput>;
};
export type BailLocationUpdateWithWhereUniqueWithoutLocataireInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BailLocationUpdateWithoutLocataireInput, Prisma.BailLocationUncheckedUpdateWithoutLocataireInput>;
};
export type BailLocationUpdateManyWithWhereWithoutLocataireInput = {
    where: Prisma.BailLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.BailLocationUpdateManyMutationInput, Prisma.BailLocationUncheckedUpdateManyWithoutLocataireInput>;
};
export type BailLocationCreateWithoutProprietaireInput = {
    id?: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutBailsInput;
    locataire: Prisma.LocataireCreateNestedOneWithoutBailsInput;
};
export type BailLocationUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    bienId: string;
    locataireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BailLocationCreateWithoutProprietaireInput, Prisma.BailLocationUncheckedCreateWithoutProprietaireInput>;
};
export type BailLocationCreateManyProprietaireInputEnvelope = {
    data: Prisma.BailLocationCreateManyProprietaireInput | Prisma.BailLocationCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type BailLocationUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BailLocationUpdateWithoutProprietaireInput, Prisma.BailLocationUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.BailLocationCreateWithoutProprietaireInput, Prisma.BailLocationUncheckedCreateWithoutProprietaireInput>;
};
export type BailLocationUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.BailLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BailLocationUpdateWithoutProprietaireInput, Prisma.BailLocationUncheckedUpdateWithoutProprietaireInput>;
};
export type BailLocationUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.BailLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.BailLocationUpdateManyMutationInput, Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireInput>;
};
export type BailLocationCreateManyBienInput = {
    id?: string;
    locataireId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutBailsNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBailsNestedInput;
};
export type BailLocationUncheckedUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationUncheckedUpdateManyWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationCreateManyLocataireInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutBailsNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBailsNestedInput;
};
export type BailLocationUncheckedUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationUncheckedUpdateManyWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationCreateManyProprietaireInput = {
    id?: string;
    bienId: string;
    locataireId: string;
    typeBail?: string | null;
    dateDebutBail: Date | string;
    dateFinBail?: Date | string | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
    statut?: $Enums.StatutBail;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BailLocationUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutBailsNestedInput;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutBailsNestedInput;
};
export type BailLocationUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateDebutBail?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateFinBail?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    renouvellement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    montantLoyer?: Prisma.FloatFieldUpdateOperationsInput | number;
    montantCaution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutBailFieldUpdateOperationsInput | $Enums.StatutBail;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BailLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    locataireId?: boolean;
    proprietaireId?: boolean;
    typeBail?: boolean;
    dateDebutBail?: boolean;
    dateFinBail?: boolean;
    renouvellement?: boolean;
    montantLoyer?: boolean;
    montantCaution?: boolean;
    frequencePaiement?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bailLocation"]>;
export type BailLocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    locataireId?: boolean;
    proprietaireId?: boolean;
    typeBail?: boolean;
    dateDebutBail?: boolean;
    dateFinBail?: boolean;
    renouvellement?: boolean;
    montantLoyer?: boolean;
    montantCaution?: boolean;
    frequencePaiement?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bailLocation"]>;
export type BailLocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    locataireId?: boolean;
    proprietaireId?: boolean;
    typeBail?: boolean;
    dateDebutBail?: boolean;
    dateFinBail?: boolean;
    renouvellement?: boolean;
    montantLoyer?: boolean;
    montantCaution?: boolean;
    frequencePaiement?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bailLocation"]>;
export type BailLocationSelectScalar = {
    id?: boolean;
    bienId?: boolean;
    locataireId?: boolean;
    proprietaireId?: boolean;
    typeBail?: boolean;
    dateDebutBail?: boolean;
    dateFinBail?: boolean;
    renouvellement?: boolean;
    montantLoyer?: boolean;
    montantCaution?: boolean;
    frequencePaiement?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BailLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bienId" | "locataireId" | "proprietaireId" | "typeBail" | "dateDebutBail" | "dateFinBail" | "renouvellement" | "montantLoyer" | "montantCaution" | "frequencePaiement" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["bailLocation"]>;
export type BailLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type BailLocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type BailLocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $BailLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BailLocation";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
        locataire: Prisma.$LocatairePayload<ExtArgs>;
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bienId: string;
        locataireId: string;
        proprietaireId: string;
        typeBail: string | null;
        dateDebutBail: Date;
        dateFinBail: Date | null;
        renouvellement: boolean;
        montantLoyer: number;
        montantCaution: number | null;
        frequencePaiement: string | null;
        statut: $Enums.StatutBail;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["bailLocation"]>;
    composites: {};
};
export type BailLocationGetPayload<S extends boolean | null | undefined | BailLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BailLocationPayload, S>;
export type BailLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BailLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BailLocationCountAggregateInputType | true;
};
export interface BailLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BailLocation'];
        meta: {
            name: 'BailLocation';
        };
    };
    /**
     * Find zero or one BailLocation that matches the filter.
     * @param {BailLocationFindUniqueArgs} args - Arguments to find a BailLocation
     * @example
     * // Get one BailLocation
     * const bailLocation = await prisma.bailLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BailLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, BailLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BailLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BailLocationFindUniqueOrThrowArgs} args - Arguments to find a BailLocation
     * @example
     * // Get one BailLocation
     * const bailLocation = await prisma.bailLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BailLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BailLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BailLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BailLocationFindFirstArgs} args - Arguments to find a BailLocation
     * @example
     * // Get one BailLocation
     * const bailLocation = await prisma.bailLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BailLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, BailLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BailLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BailLocationFindFirstOrThrowArgs} args - Arguments to find a BailLocation
     * @example
     * // Get one BailLocation
     * const bailLocation = await prisma.bailLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BailLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BailLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BailLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BailLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BailLocations
     * const bailLocations = await prisma.bailLocation.findMany()
     *
     * // Get first 10 BailLocations
     * const bailLocations = await prisma.bailLocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bailLocationWithIdOnly = await prisma.bailLocation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BailLocationFindManyArgs>(args?: Prisma.SelectSubset<T, BailLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BailLocation.
     * @param {BailLocationCreateArgs} args - Arguments to create a BailLocation.
     * @example
     * // Create one BailLocation
     * const BailLocation = await prisma.bailLocation.create({
     *   data: {
     *     // ... data to create a BailLocation
     *   }
     * })
     *
     */
    create<T extends BailLocationCreateArgs>(args: Prisma.SelectSubset<T, BailLocationCreateArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BailLocations.
     * @param {BailLocationCreateManyArgs} args - Arguments to create many BailLocations.
     * @example
     * // Create many BailLocations
     * const bailLocation = await prisma.bailLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BailLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, BailLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BailLocations and returns the data saved in the database.
     * @param {BailLocationCreateManyAndReturnArgs} args - Arguments to create many BailLocations.
     * @example
     * // Create many BailLocations
     * const bailLocation = await prisma.bailLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BailLocations and only return the `id`
     * const bailLocationWithIdOnly = await prisma.bailLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BailLocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BailLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BailLocation.
     * @param {BailLocationDeleteArgs} args - Arguments to delete one BailLocation.
     * @example
     * // Delete one BailLocation
     * const BailLocation = await prisma.bailLocation.delete({
     *   where: {
     *     // ... filter to delete one BailLocation
     *   }
     * })
     *
     */
    delete<T extends BailLocationDeleteArgs>(args: Prisma.SelectSubset<T, BailLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BailLocation.
     * @param {BailLocationUpdateArgs} args - Arguments to update one BailLocation.
     * @example
     * // Update one BailLocation
     * const bailLocation = await prisma.bailLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BailLocationUpdateArgs>(args: Prisma.SelectSubset<T, BailLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BailLocations.
     * @param {BailLocationDeleteManyArgs} args - Arguments to filter BailLocations to delete.
     * @example
     * // Delete a few BailLocations
     * const { count } = await prisma.bailLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BailLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, BailLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BailLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BailLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BailLocations
     * const bailLocation = await prisma.bailLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BailLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, BailLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BailLocations and returns the data updated in the database.
     * @param {BailLocationUpdateManyAndReturnArgs} args - Arguments to update many BailLocations.
     * @example
     * // Update many BailLocations
     * const bailLocation = await prisma.bailLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BailLocations and only return the `id`
     * const bailLocationWithIdOnly = await prisma.bailLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends BailLocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BailLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BailLocation.
     * @param {BailLocationUpsertArgs} args - Arguments to update or create a BailLocation.
     * @example
     * // Update or create a BailLocation
     * const bailLocation = await prisma.bailLocation.upsert({
     *   create: {
     *     // ... data to create a BailLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BailLocation we want to update
     *   }
     * })
     */
    upsert<T extends BailLocationUpsertArgs>(args: Prisma.SelectSubset<T, BailLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BailLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BailLocationCountArgs} args - Arguments to filter BailLocations to count.
     * @example
     * // Count the number of BailLocations
     * const count = await prisma.bailLocation.count({
     *   where: {
     *     // ... the filter for the BailLocations we want to count
     *   }
     * })
    **/
    count<T extends BailLocationCountArgs>(args?: Prisma.Subset<T, BailLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BailLocationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BailLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BailLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BailLocationAggregateArgs>(args: Prisma.Subset<T, BailLocationAggregateArgs>): Prisma.PrismaPromise<GetBailLocationAggregateType<T>>;
    /**
     * Group by BailLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BailLocationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BailLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BailLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: BailLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BailLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBailLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BailLocation model
     */
    readonly fields: BailLocationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BailLocation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BailLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    locataire<T extends Prisma.LocataireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LocataireDefaultArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proprietaire<T extends Prisma.ProprietaireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProprietaireDefaultArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BailLocation model
 */
export interface BailLocationFieldRefs {
    readonly id: Prisma.FieldRef<"BailLocation", 'String'>;
    readonly bienId: Prisma.FieldRef<"BailLocation", 'String'>;
    readonly locataireId: Prisma.FieldRef<"BailLocation", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"BailLocation", 'String'>;
    readonly typeBail: Prisma.FieldRef<"BailLocation", 'String'>;
    readonly dateDebutBail: Prisma.FieldRef<"BailLocation", 'DateTime'>;
    readonly dateFinBail: Prisma.FieldRef<"BailLocation", 'DateTime'>;
    readonly renouvellement: Prisma.FieldRef<"BailLocation", 'Boolean'>;
    readonly montantLoyer: Prisma.FieldRef<"BailLocation", 'Float'>;
    readonly montantCaution: Prisma.FieldRef<"BailLocation", 'Float'>;
    readonly frequencePaiement: Prisma.FieldRef<"BailLocation", 'String'>;
    readonly statut: Prisma.FieldRef<"BailLocation", 'StatutBail'>;
    readonly createdAt: Prisma.FieldRef<"BailLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BailLocation", 'DateTime'>;
}
/**
 * BailLocation findUnique
 */
export type BailLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BailLocation to fetch.
     */
    where: Prisma.BailLocationWhereUniqueInput;
};
/**
 * BailLocation findUniqueOrThrow
 */
export type BailLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BailLocation to fetch.
     */
    where: Prisma.BailLocationWhereUniqueInput;
};
/**
 * BailLocation findFirst
 */
export type BailLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BailLocation to fetch.
     */
    where?: Prisma.BailLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BailLocations to fetch.
     */
    orderBy?: Prisma.BailLocationOrderByWithRelationInput | Prisma.BailLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BailLocations.
     */
    cursor?: Prisma.BailLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BailLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BailLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BailLocations.
     */
    distinct?: Prisma.BailLocationScalarFieldEnum | Prisma.BailLocationScalarFieldEnum[];
};
/**
 * BailLocation findFirstOrThrow
 */
export type BailLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BailLocation to fetch.
     */
    where?: Prisma.BailLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BailLocations to fetch.
     */
    orderBy?: Prisma.BailLocationOrderByWithRelationInput | Prisma.BailLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BailLocations.
     */
    cursor?: Prisma.BailLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BailLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BailLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BailLocations.
     */
    distinct?: Prisma.BailLocationScalarFieldEnum | Prisma.BailLocationScalarFieldEnum[];
};
/**
 * BailLocation findMany
 */
export type BailLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * Filter, which BailLocations to fetch.
     */
    where?: Prisma.BailLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BailLocations to fetch.
     */
    orderBy?: Prisma.BailLocationOrderByWithRelationInput | Prisma.BailLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BailLocations.
     */
    cursor?: Prisma.BailLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BailLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BailLocations.
     */
    skip?: number;
    distinct?: Prisma.BailLocationScalarFieldEnum | Prisma.BailLocationScalarFieldEnum[];
};
/**
 * BailLocation create
 */
export type BailLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * The data needed to create a BailLocation.
     */
    data: Prisma.XOR<Prisma.BailLocationCreateInput, Prisma.BailLocationUncheckedCreateInput>;
};
/**
 * BailLocation createMany
 */
export type BailLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BailLocations.
     */
    data: Prisma.BailLocationCreateManyInput | Prisma.BailLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BailLocation createManyAndReturn
 */
export type BailLocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * The data used to create many BailLocations.
     */
    data: Prisma.BailLocationCreateManyInput | Prisma.BailLocationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BailLocation update
 */
export type BailLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * The data needed to update a BailLocation.
     */
    data: Prisma.XOR<Prisma.BailLocationUpdateInput, Prisma.BailLocationUncheckedUpdateInput>;
    /**
     * Choose, which BailLocation to update.
     */
    where: Prisma.BailLocationWhereUniqueInput;
};
/**
 * BailLocation updateMany
 */
export type BailLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BailLocations.
     */
    data: Prisma.XOR<Prisma.BailLocationUpdateManyMutationInput, Prisma.BailLocationUncheckedUpdateManyInput>;
    /**
     * Filter which BailLocations to update
     */
    where?: Prisma.BailLocationWhereInput;
    /**
     * Limit how many BailLocations to update.
     */
    limit?: number;
};
/**
 * BailLocation updateManyAndReturn
 */
export type BailLocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * The data used to update BailLocations.
     */
    data: Prisma.XOR<Prisma.BailLocationUpdateManyMutationInput, Prisma.BailLocationUncheckedUpdateManyInput>;
    /**
     * Filter which BailLocations to update
     */
    where?: Prisma.BailLocationWhereInput;
    /**
     * Limit how many BailLocations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BailLocation upsert
 */
export type BailLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * The filter to search for the BailLocation to update in case it exists.
     */
    where: Prisma.BailLocationWhereUniqueInput;
    /**
     * In case the BailLocation found by the `where` argument doesn't exist, create a new BailLocation with this data.
     */
    create: Prisma.XOR<Prisma.BailLocationCreateInput, Prisma.BailLocationUncheckedCreateInput>;
    /**
     * In case the BailLocation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BailLocationUpdateInput, Prisma.BailLocationUncheckedUpdateInput>;
};
/**
 * BailLocation delete
 */
export type BailLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
    /**
     * Filter which BailLocation to delete.
     */
    where: Prisma.BailLocationWhereUniqueInput;
};
/**
 * BailLocation deleteMany
 */
export type BailLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BailLocations to delete
     */
    where?: Prisma.BailLocationWhereInput;
    /**
     * Limit how many BailLocations to delete.
     */
    limit?: number;
};
/**
 * BailLocation without action
 */
export type BailLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailLocation
     */
    select?: Prisma.BailLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailLocation
     */
    omit?: Prisma.BailLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailLocationInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=BailLocation.d.ts.map