import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EtablissementProche
 *
 */
export type EtablissementProcheModel = runtime.Types.Result.DefaultSelection<Prisma.$EtablissementProchePayload>;
export type AggregateEtablissementProche = {
    _count: EtablissementProcheCountAggregateOutputType | null;
    _avg: EtablissementProcheAvgAggregateOutputType | null;
    _sum: EtablissementProcheSumAggregateOutputType | null;
    _min: EtablissementProcheMinAggregateOutputType | null;
    _max: EtablissementProcheMaxAggregateOutputType | null;
};
export type EtablissementProcheAvgAggregateOutputType = {
    distanceKm: number | null;
    dureeMinutes: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type EtablissementProcheSumAggregateOutputType = {
    distanceKm: number | null;
    dureeMinutes: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type EtablissementProcheMinAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    categorie: $Enums.CategorieEtablissement | null;
    type: $Enums.TypeEtablissement | null;
    nom: string | null;
    adresse: string | null;
    distanceKm: number | null;
    dureeMinutes: number | null;
    latitude: number | null;
    longitude: number | null;
    dateCreation: Date | null;
    dateModification: Date | null;
};
export type EtablissementProcheMaxAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    categorie: $Enums.CategorieEtablissement | null;
    type: $Enums.TypeEtablissement | null;
    nom: string | null;
    adresse: string | null;
    distanceKm: number | null;
    dureeMinutes: number | null;
    latitude: number | null;
    longitude: number | null;
    dateCreation: Date | null;
    dateModification: Date | null;
};
export type EtablissementProcheCountAggregateOutputType = {
    id: number;
    bienId: number;
    categorie: number;
    type: number;
    nom: number;
    adresse: number;
    distanceKm: number;
    dureeMinutes: number;
    latitude: number;
    longitude: number;
    dateCreation: number;
    dateModification: number;
    _all: number;
};
export type EtablissementProcheAvgAggregateInputType = {
    distanceKm?: true;
    dureeMinutes?: true;
    latitude?: true;
    longitude?: true;
};
export type EtablissementProcheSumAggregateInputType = {
    distanceKm?: true;
    dureeMinutes?: true;
    latitude?: true;
    longitude?: true;
};
export type EtablissementProcheMinAggregateInputType = {
    id?: true;
    bienId?: true;
    categorie?: true;
    type?: true;
    nom?: true;
    adresse?: true;
    distanceKm?: true;
    dureeMinutes?: true;
    latitude?: true;
    longitude?: true;
    dateCreation?: true;
    dateModification?: true;
};
export type EtablissementProcheMaxAggregateInputType = {
    id?: true;
    bienId?: true;
    categorie?: true;
    type?: true;
    nom?: true;
    adresse?: true;
    distanceKm?: true;
    dureeMinutes?: true;
    latitude?: true;
    longitude?: true;
    dateCreation?: true;
    dateModification?: true;
};
export type EtablissementProcheCountAggregateInputType = {
    id?: true;
    bienId?: true;
    categorie?: true;
    type?: true;
    nom?: true;
    adresse?: true;
    distanceKm?: true;
    dureeMinutes?: true;
    latitude?: true;
    longitude?: true;
    dateCreation?: true;
    dateModification?: true;
    _all?: true;
};
export type EtablissementProcheAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EtablissementProche to aggregate.
     */
    where?: Prisma.EtablissementProcheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtablissementProches to fetch.
     */
    orderBy?: Prisma.EtablissementProcheOrderByWithRelationInput | Prisma.EtablissementProcheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EtablissementProcheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtablissementProches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtablissementProches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EtablissementProches
    **/
    _count?: true | EtablissementProcheCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EtablissementProcheAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EtablissementProcheSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EtablissementProcheMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EtablissementProcheMaxAggregateInputType;
};
export type GetEtablissementProcheAggregateType<T extends EtablissementProcheAggregateArgs> = {
    [P in keyof T & keyof AggregateEtablissementProche]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEtablissementProche[P]> : Prisma.GetScalarType<T[P], AggregateEtablissementProche[P]>;
};
export type EtablissementProcheGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtablissementProcheWhereInput;
    orderBy?: Prisma.EtablissementProcheOrderByWithAggregationInput | Prisma.EtablissementProcheOrderByWithAggregationInput[];
    by: Prisma.EtablissementProcheScalarFieldEnum[] | Prisma.EtablissementProcheScalarFieldEnum;
    having?: Prisma.EtablissementProcheScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EtablissementProcheCountAggregateInputType | true;
    _avg?: EtablissementProcheAvgAggregateInputType;
    _sum?: EtablissementProcheSumAggregateInputType;
    _min?: EtablissementProcheMinAggregateInputType;
    _max?: EtablissementProcheMaxAggregateInputType;
};
export type EtablissementProcheGroupByOutputType = {
    id: string;
    bienId: string;
    categorie: $Enums.CategorieEtablissement;
    type: $Enums.TypeEtablissement;
    nom: string;
    adresse: string | null;
    distanceKm: number;
    dureeMinutes: number | null;
    latitude: number | null;
    longitude: number | null;
    dateCreation: Date;
    dateModification: Date;
    _count: EtablissementProcheCountAggregateOutputType | null;
    _avg: EtablissementProcheAvgAggregateOutputType | null;
    _sum: EtablissementProcheSumAggregateOutputType | null;
    _min: EtablissementProcheMinAggregateOutputType | null;
    _max: EtablissementProcheMaxAggregateOutputType | null;
};
type GetEtablissementProcheGroupByPayload<T extends EtablissementProcheGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EtablissementProcheGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EtablissementProcheGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EtablissementProcheGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EtablissementProcheGroupByOutputType[P]>;
}>>;
export type EtablissementProcheWhereInput = {
    AND?: Prisma.EtablissementProcheWhereInput | Prisma.EtablissementProcheWhereInput[];
    OR?: Prisma.EtablissementProcheWhereInput[];
    NOT?: Prisma.EtablissementProcheWhereInput | Prisma.EtablissementProcheWhereInput[];
    id?: Prisma.StringFilter<"EtablissementProche"> | string;
    bienId?: Prisma.StringFilter<"EtablissementProche"> | string;
    categorie?: Prisma.EnumCategorieEtablissementFilter<"EtablissementProche"> | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFilter<"EtablissementProche"> | $Enums.TypeEtablissement;
    nom?: Prisma.StringFilter<"EtablissementProche"> | string;
    adresse?: Prisma.StringNullableFilter<"EtablissementProche"> | string | null;
    distanceKm?: Prisma.FloatFilter<"EtablissementProche"> | number;
    dureeMinutes?: Prisma.IntNullableFilter<"EtablissementProche"> | number | null;
    latitude?: Prisma.FloatNullableFilter<"EtablissementProche"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"EtablissementProche"> | number | null;
    dateCreation?: Prisma.DateTimeFilter<"EtablissementProche"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"EtablissementProche"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
};
export type EtablissementProcheOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    dureeMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
};
export type EtablissementProcheWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bienId_type_nom?: Prisma.EtablissementProcheBienIdTypeNomCompoundUniqueInput;
    AND?: Prisma.EtablissementProcheWhereInput | Prisma.EtablissementProcheWhereInput[];
    OR?: Prisma.EtablissementProcheWhereInput[];
    NOT?: Prisma.EtablissementProcheWhereInput | Prisma.EtablissementProcheWhereInput[];
    bienId?: Prisma.StringFilter<"EtablissementProche"> | string;
    categorie?: Prisma.EnumCategorieEtablissementFilter<"EtablissementProche"> | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFilter<"EtablissementProche"> | $Enums.TypeEtablissement;
    nom?: Prisma.StringFilter<"EtablissementProche"> | string;
    adresse?: Prisma.StringNullableFilter<"EtablissementProche"> | string | null;
    distanceKm?: Prisma.FloatFilter<"EtablissementProche"> | number;
    dureeMinutes?: Prisma.IntNullableFilter<"EtablissementProche"> | number | null;
    latitude?: Prisma.FloatNullableFilter<"EtablissementProche"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"EtablissementProche"> | number | null;
    dateCreation?: Prisma.DateTimeFilter<"EtablissementProche"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"EtablissementProche"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
}, "id" | "bienId_type_nom">;
export type EtablissementProcheOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    dureeMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    _count?: Prisma.EtablissementProcheCountOrderByAggregateInput;
    _avg?: Prisma.EtablissementProcheAvgOrderByAggregateInput;
    _max?: Prisma.EtablissementProcheMaxOrderByAggregateInput;
    _min?: Prisma.EtablissementProcheMinOrderByAggregateInput;
    _sum?: Prisma.EtablissementProcheSumOrderByAggregateInput;
};
export type EtablissementProcheScalarWhereWithAggregatesInput = {
    AND?: Prisma.EtablissementProcheScalarWhereWithAggregatesInput | Prisma.EtablissementProcheScalarWhereWithAggregatesInput[];
    OR?: Prisma.EtablissementProcheScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EtablissementProcheScalarWhereWithAggregatesInput | Prisma.EtablissementProcheScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EtablissementProche"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"EtablissementProche"> | string;
    categorie?: Prisma.EnumCategorieEtablissementWithAggregatesFilter<"EtablissementProche"> | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementWithAggregatesFilter<"EtablissementProche"> | $Enums.TypeEtablissement;
    nom?: Prisma.StringWithAggregatesFilter<"EtablissementProche"> | string;
    adresse?: Prisma.StringNullableWithAggregatesFilter<"EtablissementProche"> | string | null;
    distanceKm?: Prisma.FloatWithAggregatesFilter<"EtablissementProche"> | number;
    dureeMinutes?: Prisma.IntNullableWithAggregatesFilter<"EtablissementProche"> | number | null;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"EtablissementProche"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"EtablissementProche"> | number | null;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"EtablissementProche"> | Date | string;
    dateModification?: Prisma.DateTimeWithAggregatesFilter<"EtablissementProche"> | Date | string;
};
export type EtablissementProcheCreateInput = {
    id?: string;
    categorie: $Enums.CategorieEtablissement;
    type: $Enums.TypeEtablissement;
    nom: string;
    adresse?: string | null;
    distanceKm: number;
    dureeMinutes?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutEtablissementsInput;
};
export type EtablissementProcheUncheckedCreateInput = {
    id?: string;
    bienId: string;
    categorie: $Enums.CategorieEtablissement;
    type: $Enums.TypeEtablissement;
    nom: string;
    adresse?: string | null;
    distanceKm: number;
    dureeMinutes?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type EtablissementProcheUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categorie?: Prisma.EnumCategorieEtablissementFieldUpdateOperationsInput | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    dureeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutEtablissementsNestedInput;
};
export type EtablissementProcheUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    categorie?: Prisma.EnumCategorieEtablissementFieldUpdateOperationsInput | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    dureeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementProcheCreateManyInput = {
    id?: string;
    bienId: string;
    categorie: $Enums.CategorieEtablissement;
    type: $Enums.TypeEtablissement;
    nom: string;
    adresse?: string | null;
    distanceKm: number;
    dureeMinutes?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type EtablissementProcheUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categorie?: Prisma.EnumCategorieEtablissementFieldUpdateOperationsInput | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    dureeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementProcheUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    categorie?: Prisma.EnumCategorieEtablissementFieldUpdateOperationsInput | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    dureeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementProcheListRelationFilter = {
    every?: Prisma.EtablissementProcheWhereInput;
    some?: Prisma.EtablissementProcheWhereInput;
    none?: Prisma.EtablissementProcheWhereInput;
};
export type EtablissementProcheOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EtablissementProcheBienIdTypeNomCompoundUniqueInput = {
    bienId: string;
    type: $Enums.TypeEtablissement;
    nom: string;
};
export type EtablissementProcheCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    dureeMinutes?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type EtablissementProcheAvgOrderByAggregateInput = {
    distanceKm?: Prisma.SortOrder;
    dureeMinutes?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type EtablissementProcheMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    dureeMinutes?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type EtablissementProcheMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    distanceKm?: Prisma.SortOrder;
    dureeMinutes?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type EtablissementProcheSumOrderByAggregateInput = {
    distanceKm?: Prisma.SortOrder;
    dureeMinutes?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type EtablissementProcheCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.EtablissementProcheCreateWithoutBienInput, Prisma.EtablissementProcheUncheckedCreateWithoutBienInput> | Prisma.EtablissementProcheCreateWithoutBienInput[] | Prisma.EtablissementProcheUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementProcheCreateOrConnectWithoutBienInput | Prisma.EtablissementProcheCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.EtablissementProcheCreateManyBienInputEnvelope;
    connect?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
};
export type EtablissementProcheUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.EtablissementProcheCreateWithoutBienInput, Prisma.EtablissementProcheUncheckedCreateWithoutBienInput> | Prisma.EtablissementProcheCreateWithoutBienInput[] | Prisma.EtablissementProcheUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementProcheCreateOrConnectWithoutBienInput | Prisma.EtablissementProcheCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.EtablissementProcheCreateManyBienInputEnvelope;
    connect?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
};
export type EtablissementProcheUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.EtablissementProcheCreateWithoutBienInput, Prisma.EtablissementProcheUncheckedCreateWithoutBienInput> | Prisma.EtablissementProcheCreateWithoutBienInput[] | Prisma.EtablissementProcheUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementProcheCreateOrConnectWithoutBienInput | Prisma.EtablissementProcheCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.EtablissementProcheUpsertWithWhereUniqueWithoutBienInput | Prisma.EtablissementProcheUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.EtablissementProcheCreateManyBienInputEnvelope;
    set?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    disconnect?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    delete?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    connect?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    update?: Prisma.EtablissementProcheUpdateWithWhereUniqueWithoutBienInput | Prisma.EtablissementProcheUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.EtablissementProcheUpdateManyWithWhereWithoutBienInput | Prisma.EtablissementProcheUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.EtablissementProcheScalarWhereInput | Prisma.EtablissementProcheScalarWhereInput[];
};
export type EtablissementProcheUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.EtablissementProcheCreateWithoutBienInput, Prisma.EtablissementProcheUncheckedCreateWithoutBienInput> | Prisma.EtablissementProcheCreateWithoutBienInput[] | Prisma.EtablissementProcheUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtablissementProcheCreateOrConnectWithoutBienInput | Prisma.EtablissementProcheCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.EtablissementProcheUpsertWithWhereUniqueWithoutBienInput | Prisma.EtablissementProcheUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.EtablissementProcheCreateManyBienInputEnvelope;
    set?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    disconnect?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    delete?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    connect?: Prisma.EtablissementProcheWhereUniqueInput | Prisma.EtablissementProcheWhereUniqueInput[];
    update?: Prisma.EtablissementProcheUpdateWithWhereUniqueWithoutBienInput | Prisma.EtablissementProcheUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.EtablissementProcheUpdateManyWithWhereWithoutBienInput | Prisma.EtablissementProcheUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.EtablissementProcheScalarWhereInput | Prisma.EtablissementProcheScalarWhereInput[];
};
export type EnumCategorieEtablissementFieldUpdateOperationsInput = {
    set?: $Enums.CategorieEtablissement;
};
export type EnumTypeEtablissementFieldUpdateOperationsInput = {
    set?: $Enums.TypeEtablissement;
};
export type EtablissementProcheCreateWithoutBienInput = {
    id?: string;
    categorie: $Enums.CategorieEtablissement;
    type: $Enums.TypeEtablissement;
    nom: string;
    adresse?: string | null;
    distanceKm: number;
    dureeMinutes?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type EtablissementProcheUncheckedCreateWithoutBienInput = {
    id?: string;
    categorie: $Enums.CategorieEtablissement;
    type: $Enums.TypeEtablissement;
    nom: string;
    adresse?: string | null;
    distanceKm: number;
    dureeMinutes?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type EtablissementProcheCreateOrConnectWithoutBienInput = {
    where: Prisma.EtablissementProcheWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtablissementProcheCreateWithoutBienInput, Prisma.EtablissementProcheUncheckedCreateWithoutBienInput>;
};
export type EtablissementProcheCreateManyBienInputEnvelope = {
    data: Prisma.EtablissementProcheCreateManyBienInput | Prisma.EtablissementProcheCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type EtablissementProcheUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.EtablissementProcheWhereUniqueInput;
    update: Prisma.XOR<Prisma.EtablissementProcheUpdateWithoutBienInput, Prisma.EtablissementProcheUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.EtablissementProcheCreateWithoutBienInput, Prisma.EtablissementProcheUncheckedCreateWithoutBienInput>;
};
export type EtablissementProcheUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.EtablissementProcheWhereUniqueInput;
    data: Prisma.XOR<Prisma.EtablissementProcheUpdateWithoutBienInput, Prisma.EtablissementProcheUncheckedUpdateWithoutBienInput>;
};
export type EtablissementProcheUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.EtablissementProcheScalarWhereInput;
    data: Prisma.XOR<Prisma.EtablissementProcheUpdateManyMutationInput, Prisma.EtablissementProcheUncheckedUpdateManyWithoutBienInput>;
};
export type EtablissementProcheScalarWhereInput = {
    AND?: Prisma.EtablissementProcheScalarWhereInput | Prisma.EtablissementProcheScalarWhereInput[];
    OR?: Prisma.EtablissementProcheScalarWhereInput[];
    NOT?: Prisma.EtablissementProcheScalarWhereInput | Prisma.EtablissementProcheScalarWhereInput[];
    id?: Prisma.StringFilter<"EtablissementProche"> | string;
    bienId?: Prisma.StringFilter<"EtablissementProche"> | string;
    categorie?: Prisma.EnumCategorieEtablissementFilter<"EtablissementProche"> | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFilter<"EtablissementProche"> | $Enums.TypeEtablissement;
    nom?: Prisma.StringFilter<"EtablissementProche"> | string;
    adresse?: Prisma.StringNullableFilter<"EtablissementProche"> | string | null;
    distanceKm?: Prisma.FloatFilter<"EtablissementProche"> | number;
    dureeMinutes?: Prisma.IntNullableFilter<"EtablissementProche"> | number | null;
    latitude?: Prisma.FloatNullableFilter<"EtablissementProche"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"EtablissementProche"> | number | null;
    dateCreation?: Prisma.DateTimeFilter<"EtablissementProche"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"EtablissementProche"> | Date | string;
};
export type EtablissementProcheCreateManyBienInput = {
    id?: string;
    categorie: $Enums.CategorieEtablissement;
    type: $Enums.TypeEtablissement;
    nom: string;
    adresse?: string | null;
    distanceKm: number;
    dureeMinutes?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type EtablissementProcheUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categorie?: Prisma.EnumCategorieEtablissementFieldUpdateOperationsInput | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    dureeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementProcheUncheckedUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categorie?: Prisma.EnumCategorieEtablissementFieldUpdateOperationsInput | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    dureeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementProcheUncheckedUpdateManyWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categorie?: Prisma.EnumCategorieEtablissementFieldUpdateOperationsInput | $Enums.CategorieEtablissement;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    distanceKm?: Prisma.FloatFieldUpdateOperationsInput | number;
    dureeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtablissementProcheSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    categorie?: boolean;
    type?: boolean;
    nom?: boolean;
    adresse?: boolean;
    distanceKm?: boolean;
    dureeMinutes?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etablissementProche"]>;
export type EtablissementProcheSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    categorie?: boolean;
    type?: boolean;
    nom?: boolean;
    adresse?: boolean;
    distanceKm?: boolean;
    dureeMinutes?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etablissementProche"]>;
export type EtablissementProcheSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    categorie?: boolean;
    type?: boolean;
    nom?: boolean;
    adresse?: boolean;
    distanceKm?: boolean;
    dureeMinutes?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etablissementProche"]>;
export type EtablissementProcheSelectScalar = {
    id?: boolean;
    bienId?: boolean;
    categorie?: boolean;
    type?: boolean;
    nom?: boolean;
    adresse?: boolean;
    distanceKm?: boolean;
    dureeMinutes?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
};
export type EtablissementProcheOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bienId" | "categorie" | "type" | "nom" | "adresse" | "distanceKm" | "dureeMinutes" | "latitude" | "longitude" | "dateCreation" | "dateModification", ExtArgs["result"]["etablissementProche"]>;
export type EtablissementProcheInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type EtablissementProcheIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type EtablissementProcheIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type $EtablissementProchePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EtablissementProche";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bienId: string;
        categorie: $Enums.CategorieEtablissement;
        type: $Enums.TypeEtablissement;
        nom: string;
        adresse: string | null;
        distanceKm: number;
        dureeMinutes: number | null;
        latitude: number | null;
        longitude: number | null;
        dateCreation: Date;
        dateModification: Date;
    }, ExtArgs["result"]["etablissementProche"]>;
    composites: {};
};
export type EtablissementProcheGetPayload<S extends boolean | null | undefined | EtablissementProcheDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload, S>;
export type EtablissementProcheCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EtablissementProcheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EtablissementProcheCountAggregateInputType | true;
};
export interface EtablissementProcheDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EtablissementProche'];
        meta: {
            name: 'EtablissementProche';
        };
    };
    /**
     * Find zero or one EtablissementProche that matches the filter.
     * @param {EtablissementProcheFindUniqueArgs} args - Arguments to find a EtablissementProche
     * @example
     * // Get one EtablissementProche
     * const etablissementProche = await prisma.etablissementProche.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtablissementProcheFindUniqueArgs>(args: Prisma.SelectSubset<T, EtablissementProcheFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EtablissementProche that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtablissementProcheFindUniqueOrThrowArgs} args - Arguments to find a EtablissementProche
     * @example
     * // Get one EtablissementProche
     * const etablissementProche = await prisma.etablissementProche.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtablissementProcheFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EtablissementProcheFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EtablissementProche that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementProcheFindFirstArgs} args - Arguments to find a EtablissementProche
     * @example
     * // Get one EtablissementProche
     * const etablissementProche = await prisma.etablissementProche.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtablissementProcheFindFirstArgs>(args?: Prisma.SelectSubset<T, EtablissementProcheFindFirstArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EtablissementProche that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementProcheFindFirstOrThrowArgs} args - Arguments to find a EtablissementProche
     * @example
     * // Get one EtablissementProche
     * const etablissementProche = await prisma.etablissementProche.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtablissementProcheFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EtablissementProcheFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EtablissementProches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementProcheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EtablissementProches
     * const etablissementProches = await prisma.etablissementProche.findMany()
     *
     * // Get first 10 EtablissementProches
     * const etablissementProches = await prisma.etablissementProche.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const etablissementProcheWithIdOnly = await prisma.etablissementProche.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EtablissementProcheFindManyArgs>(args?: Prisma.SelectSubset<T, EtablissementProcheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EtablissementProche.
     * @param {EtablissementProcheCreateArgs} args - Arguments to create a EtablissementProche.
     * @example
     * // Create one EtablissementProche
     * const EtablissementProche = await prisma.etablissementProche.create({
     *   data: {
     *     // ... data to create a EtablissementProche
     *   }
     * })
     *
     */
    create<T extends EtablissementProcheCreateArgs>(args: Prisma.SelectSubset<T, EtablissementProcheCreateArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EtablissementProches.
     * @param {EtablissementProcheCreateManyArgs} args - Arguments to create many EtablissementProches.
     * @example
     * // Create many EtablissementProches
     * const etablissementProche = await prisma.etablissementProche.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EtablissementProcheCreateManyArgs>(args?: Prisma.SelectSubset<T, EtablissementProcheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EtablissementProches and returns the data saved in the database.
     * @param {EtablissementProcheCreateManyAndReturnArgs} args - Arguments to create many EtablissementProches.
     * @example
     * // Create many EtablissementProches
     * const etablissementProche = await prisma.etablissementProche.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EtablissementProches and only return the `id`
     * const etablissementProcheWithIdOnly = await prisma.etablissementProche.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EtablissementProcheCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EtablissementProcheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EtablissementProche.
     * @param {EtablissementProcheDeleteArgs} args - Arguments to delete one EtablissementProche.
     * @example
     * // Delete one EtablissementProche
     * const EtablissementProche = await prisma.etablissementProche.delete({
     *   where: {
     *     // ... filter to delete one EtablissementProche
     *   }
     * })
     *
     */
    delete<T extends EtablissementProcheDeleteArgs>(args: Prisma.SelectSubset<T, EtablissementProcheDeleteArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EtablissementProche.
     * @param {EtablissementProcheUpdateArgs} args - Arguments to update one EtablissementProche.
     * @example
     * // Update one EtablissementProche
     * const etablissementProche = await prisma.etablissementProche.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EtablissementProcheUpdateArgs>(args: Prisma.SelectSubset<T, EtablissementProcheUpdateArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EtablissementProches.
     * @param {EtablissementProcheDeleteManyArgs} args - Arguments to filter EtablissementProches to delete.
     * @example
     * // Delete a few EtablissementProches
     * const { count } = await prisma.etablissementProche.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EtablissementProcheDeleteManyArgs>(args?: Prisma.SelectSubset<T, EtablissementProcheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EtablissementProches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementProcheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EtablissementProches
     * const etablissementProche = await prisma.etablissementProche.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EtablissementProcheUpdateManyArgs>(args: Prisma.SelectSubset<T, EtablissementProcheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EtablissementProches and returns the data updated in the database.
     * @param {EtablissementProcheUpdateManyAndReturnArgs} args - Arguments to update many EtablissementProches.
     * @example
     * // Update many EtablissementProches
     * const etablissementProche = await prisma.etablissementProche.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EtablissementProches and only return the `id`
     * const etablissementProcheWithIdOnly = await prisma.etablissementProche.updateManyAndReturn({
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
    updateManyAndReturn<T extends EtablissementProcheUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EtablissementProcheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EtablissementProche.
     * @param {EtablissementProcheUpsertArgs} args - Arguments to update or create a EtablissementProche.
     * @example
     * // Update or create a EtablissementProche
     * const etablissementProche = await prisma.etablissementProche.upsert({
     *   create: {
     *     // ... data to create a EtablissementProche
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EtablissementProche we want to update
     *   }
     * })
     */
    upsert<T extends EtablissementProcheUpsertArgs>(args: Prisma.SelectSubset<T, EtablissementProcheUpsertArgs<ExtArgs>>): Prisma.Prisma__EtablissementProcheClient<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EtablissementProches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementProcheCountArgs} args - Arguments to filter EtablissementProches to count.
     * @example
     * // Count the number of EtablissementProches
     * const count = await prisma.etablissementProche.count({
     *   where: {
     *     // ... the filter for the EtablissementProches we want to count
     *   }
     * })
    **/
    count<T extends EtablissementProcheCountArgs>(args?: Prisma.Subset<T, EtablissementProcheCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EtablissementProcheCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EtablissementProche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementProcheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtablissementProcheAggregateArgs>(args: Prisma.Subset<T, EtablissementProcheAggregateArgs>): Prisma.PrismaPromise<GetEtablissementProcheAggregateType<T>>;
    /**
     * Group by EtablissementProche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementProcheGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EtablissementProcheGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EtablissementProcheGroupByArgs['orderBy'];
    } : {
        orderBy?: EtablissementProcheGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EtablissementProcheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtablissementProcheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EtablissementProche model
     */
    readonly fields: EtablissementProcheFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EtablissementProche.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EtablissementProcheClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EtablissementProche model
 */
export interface EtablissementProcheFieldRefs {
    readonly id: Prisma.FieldRef<"EtablissementProche", 'String'>;
    readonly bienId: Prisma.FieldRef<"EtablissementProche", 'String'>;
    readonly categorie: Prisma.FieldRef<"EtablissementProche", 'CategorieEtablissement'>;
    readonly type: Prisma.FieldRef<"EtablissementProche", 'TypeEtablissement'>;
    readonly nom: Prisma.FieldRef<"EtablissementProche", 'String'>;
    readonly adresse: Prisma.FieldRef<"EtablissementProche", 'String'>;
    readonly distanceKm: Prisma.FieldRef<"EtablissementProche", 'Float'>;
    readonly dureeMinutes: Prisma.FieldRef<"EtablissementProche", 'Int'>;
    readonly latitude: Prisma.FieldRef<"EtablissementProche", 'Float'>;
    readonly longitude: Prisma.FieldRef<"EtablissementProche", 'Float'>;
    readonly dateCreation: Prisma.FieldRef<"EtablissementProche", 'DateTime'>;
    readonly dateModification: Prisma.FieldRef<"EtablissementProche", 'DateTime'>;
}
/**
 * EtablissementProche findUnique
 */
export type EtablissementProcheFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * Filter, which EtablissementProche to fetch.
     */
    where: Prisma.EtablissementProcheWhereUniqueInput;
};
/**
 * EtablissementProche findUniqueOrThrow
 */
export type EtablissementProcheFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * Filter, which EtablissementProche to fetch.
     */
    where: Prisma.EtablissementProcheWhereUniqueInput;
};
/**
 * EtablissementProche findFirst
 */
export type EtablissementProcheFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * Filter, which EtablissementProche to fetch.
     */
    where?: Prisma.EtablissementProcheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtablissementProches to fetch.
     */
    orderBy?: Prisma.EtablissementProcheOrderByWithRelationInput | Prisma.EtablissementProcheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EtablissementProches.
     */
    cursor?: Prisma.EtablissementProcheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtablissementProches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtablissementProches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EtablissementProches.
     */
    distinct?: Prisma.EtablissementProcheScalarFieldEnum | Prisma.EtablissementProcheScalarFieldEnum[];
};
/**
 * EtablissementProche findFirstOrThrow
 */
export type EtablissementProcheFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * Filter, which EtablissementProche to fetch.
     */
    where?: Prisma.EtablissementProcheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtablissementProches to fetch.
     */
    orderBy?: Prisma.EtablissementProcheOrderByWithRelationInput | Prisma.EtablissementProcheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EtablissementProches.
     */
    cursor?: Prisma.EtablissementProcheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtablissementProches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtablissementProches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EtablissementProches.
     */
    distinct?: Prisma.EtablissementProcheScalarFieldEnum | Prisma.EtablissementProcheScalarFieldEnum[];
};
/**
 * EtablissementProche findMany
 */
export type EtablissementProcheFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * Filter, which EtablissementProches to fetch.
     */
    where?: Prisma.EtablissementProcheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtablissementProches to fetch.
     */
    orderBy?: Prisma.EtablissementProcheOrderByWithRelationInput | Prisma.EtablissementProcheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EtablissementProches.
     */
    cursor?: Prisma.EtablissementProcheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtablissementProches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtablissementProches.
     */
    skip?: number;
    distinct?: Prisma.EtablissementProcheScalarFieldEnum | Prisma.EtablissementProcheScalarFieldEnum[];
};
/**
 * EtablissementProche create
 */
export type EtablissementProcheCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * The data needed to create a EtablissementProche.
     */
    data: Prisma.XOR<Prisma.EtablissementProcheCreateInput, Prisma.EtablissementProcheUncheckedCreateInput>;
};
/**
 * EtablissementProche createMany
 */
export type EtablissementProcheCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EtablissementProches.
     */
    data: Prisma.EtablissementProcheCreateManyInput | Prisma.EtablissementProcheCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EtablissementProche createManyAndReturn
 */
export type EtablissementProcheCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * The data used to create many EtablissementProches.
     */
    data: Prisma.EtablissementProcheCreateManyInput | Prisma.EtablissementProcheCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EtablissementProche update
 */
export type EtablissementProcheUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * The data needed to update a EtablissementProche.
     */
    data: Prisma.XOR<Prisma.EtablissementProcheUpdateInput, Prisma.EtablissementProcheUncheckedUpdateInput>;
    /**
     * Choose, which EtablissementProche to update.
     */
    where: Prisma.EtablissementProcheWhereUniqueInput;
};
/**
 * EtablissementProche updateMany
 */
export type EtablissementProcheUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EtablissementProches.
     */
    data: Prisma.XOR<Prisma.EtablissementProcheUpdateManyMutationInput, Prisma.EtablissementProcheUncheckedUpdateManyInput>;
    /**
     * Filter which EtablissementProches to update
     */
    where?: Prisma.EtablissementProcheWhereInput;
    /**
     * Limit how many EtablissementProches to update.
     */
    limit?: number;
};
/**
 * EtablissementProche updateManyAndReturn
 */
export type EtablissementProcheUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * The data used to update EtablissementProches.
     */
    data: Prisma.XOR<Prisma.EtablissementProcheUpdateManyMutationInput, Prisma.EtablissementProcheUncheckedUpdateManyInput>;
    /**
     * Filter which EtablissementProches to update
     */
    where?: Prisma.EtablissementProcheWhereInput;
    /**
     * Limit how many EtablissementProches to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EtablissementProche upsert
 */
export type EtablissementProcheUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * The filter to search for the EtablissementProche to update in case it exists.
     */
    where: Prisma.EtablissementProcheWhereUniqueInput;
    /**
     * In case the EtablissementProche found by the `where` argument doesn't exist, create a new EtablissementProche with this data.
     */
    create: Prisma.XOR<Prisma.EtablissementProcheCreateInput, Prisma.EtablissementProcheUncheckedCreateInput>;
    /**
     * In case the EtablissementProche was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EtablissementProcheUpdateInput, Prisma.EtablissementProcheUncheckedUpdateInput>;
};
/**
 * EtablissementProche delete
 */
export type EtablissementProcheDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    /**
     * Filter which EtablissementProche to delete.
     */
    where: Prisma.EtablissementProcheWhereUniqueInput;
};
/**
 * EtablissementProche deleteMany
 */
export type EtablissementProcheDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EtablissementProches to delete
     */
    where?: Prisma.EtablissementProcheWhereInput;
    /**
     * Limit how many EtablissementProches to delete.
     */
    limit?: number;
};
/**
 * EtablissementProche without action
 */
export type EtablissementProcheDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EtablissementProche.d.ts.map