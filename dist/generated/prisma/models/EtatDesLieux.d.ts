import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EtatDesLieux
 *
 */
export type EtatDesLieuxModel = runtime.Types.Result.DefaultSelection<Prisma.$EtatDesLieuxPayload>;
export type AggregateEtatDesLieux = {
    _count: EtatDesLieuxCountAggregateOutputType | null;
    _avg: EtatDesLieuxAvgAggregateOutputType | null;
    _sum: EtatDesLieuxSumAggregateOutputType | null;
    _min: EtatDesLieuxMinAggregateOutputType | null;
    _max: EtatDesLieuxMaxAggregateOutputType | null;
};
export type EtatDesLieuxAvgAggregateOutputType = {
    nbCles: number | null;
};
export type EtatDesLieuxSumAggregateOutputType = {
    nbCles: number | null;
};
export type EtatDesLieuxMinAggregateOutputType = {
    id: string | null;
    bailId: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    locataireId: string | null;
    type: $Enums.TypeEtatDesLieux | null;
    statut: $Enums.StatutEtatDesLieux | null;
    dateRealisation: Date | null;
    dateValidation: Date | null;
    documentPdf: string | null;
    nbCles: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EtatDesLieuxMaxAggregateOutputType = {
    id: string | null;
    bailId: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    locataireId: string | null;
    type: $Enums.TypeEtatDesLieux | null;
    statut: $Enums.StatutEtatDesLieux | null;
    dateRealisation: Date | null;
    dateValidation: Date | null;
    documentPdf: string | null;
    nbCles: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EtatDesLieuxCountAggregateOutputType = {
    id: number;
    bailId: number;
    bienId: number;
    proprietaireId: number;
    locataireId: number;
    type: number;
    statut: number;
    dateRealisation: number;
    dateValidation: number;
    documentPdf: number;
    nbCles: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EtatDesLieuxAvgAggregateInputType = {
    nbCles?: true;
};
export type EtatDesLieuxSumAggregateInputType = {
    nbCles?: true;
};
export type EtatDesLieuxMinAggregateInputType = {
    id?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    type?: true;
    statut?: true;
    dateRealisation?: true;
    dateValidation?: true;
    documentPdf?: true;
    nbCles?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EtatDesLieuxMaxAggregateInputType = {
    id?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    type?: true;
    statut?: true;
    dateRealisation?: true;
    dateValidation?: true;
    documentPdf?: true;
    nbCles?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EtatDesLieuxCountAggregateInputType = {
    id?: true;
    bailId?: true;
    bienId?: true;
    proprietaireId?: true;
    locataireId?: true;
    type?: true;
    statut?: true;
    dateRealisation?: true;
    dateValidation?: true;
    documentPdf?: true;
    nbCles?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EtatDesLieuxAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EtatDesLieux to aggregate.
     */
    where?: Prisma.EtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.EtatDesLieuxOrderByWithRelationInput | Prisma.EtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtatDesLieuxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EtatDesLieuxes
    **/
    _count?: true | EtatDesLieuxCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EtatDesLieuxAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EtatDesLieuxSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EtatDesLieuxMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EtatDesLieuxMaxAggregateInputType;
};
export type GetEtatDesLieuxAggregateType<T extends EtatDesLieuxAggregateArgs> = {
    [P in keyof T & keyof AggregateEtatDesLieux]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEtatDesLieux[P]> : Prisma.GetScalarType<T[P], AggregateEtatDesLieux[P]>;
};
export type EtatDesLieuxGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtatDesLieuxWhereInput;
    orderBy?: Prisma.EtatDesLieuxOrderByWithAggregationInput | Prisma.EtatDesLieuxOrderByWithAggregationInput[];
    by: Prisma.EtatDesLieuxScalarFieldEnum[] | Prisma.EtatDesLieuxScalarFieldEnum;
    having?: Prisma.EtatDesLieuxScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EtatDesLieuxCountAggregateInputType | true;
    _avg?: EtatDesLieuxAvgAggregateInputType;
    _sum?: EtatDesLieuxSumAggregateInputType;
    _min?: EtatDesLieuxMinAggregateInputType;
    _max?: EtatDesLieuxMaxAggregateInputType;
};
export type EtatDesLieuxGroupByOutputType = {
    id: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut: $Enums.StatutEtatDesLieux;
    dateRealisation: Date;
    dateValidation: Date | null;
    documentPdf: string | null;
    nbCles: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EtatDesLieuxCountAggregateOutputType | null;
    _avg: EtatDesLieuxAvgAggregateOutputType | null;
    _sum: EtatDesLieuxSumAggregateOutputType | null;
    _min: EtatDesLieuxMinAggregateOutputType | null;
    _max: EtatDesLieuxMaxAggregateOutputType | null;
};
type GetEtatDesLieuxGroupByPayload<T extends EtatDesLieuxGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EtatDesLieuxGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EtatDesLieuxGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EtatDesLieuxGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EtatDesLieuxGroupByOutputType[P]>;
}>>;
export type EtatDesLieuxWhereInput = {
    AND?: Prisma.EtatDesLieuxWhereInput | Prisma.EtatDesLieuxWhereInput[];
    OR?: Prisma.EtatDesLieuxWhereInput[];
    NOT?: Prisma.EtatDesLieuxWhereInput | Prisma.EtatDesLieuxWhereInput[];
    id?: Prisma.StringFilter<"EtatDesLieux"> | string;
    bailId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    bienId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    proprietaireId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    locataireId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    type?: Prisma.EnumTypeEtatDesLieuxFilter<"EtatDesLieux"> | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFilter<"EtatDesLieux"> | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    dateValidation?: Prisma.DateTimeNullableFilter<"EtatDesLieux"> | Date | string | null;
    documentPdf?: Prisma.StringNullableFilter<"EtatDesLieux"> | string | null;
    nbCles?: Prisma.IntNullableFilter<"EtatDesLieux"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    bail?: Prisma.XOR<Prisma.BailLocationScalarRelationFilter, Prisma.BailLocationWhereInput>;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    locataire?: Prisma.XOR<Prisma.LocataireScalarRelationFilter, Prisma.LocataireWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    pieces?: Prisma.PieceEtatDesLieuxListRelationFilter;
};
export type EtatDesLieuxOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateRealisation?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentPdf?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbCles?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bail?: Prisma.BailLocationOrderByWithRelationInput;
    bien?: Prisma.BienOrderByWithRelationInput;
    locataire?: Prisma.LocataireOrderByWithRelationInput;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
    pieces?: Prisma.PieceEtatDesLieuxOrderByRelationAggregateInput;
};
export type EtatDesLieuxWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bailId_type?: Prisma.EtatDesLieuxBailIdTypeCompoundUniqueInput;
    AND?: Prisma.EtatDesLieuxWhereInput | Prisma.EtatDesLieuxWhereInput[];
    OR?: Prisma.EtatDesLieuxWhereInput[];
    NOT?: Prisma.EtatDesLieuxWhereInput | Prisma.EtatDesLieuxWhereInput[];
    bailId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    bienId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    proprietaireId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    locataireId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    type?: Prisma.EnumTypeEtatDesLieuxFilter<"EtatDesLieux"> | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFilter<"EtatDesLieux"> | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    dateValidation?: Prisma.DateTimeNullableFilter<"EtatDesLieux"> | Date | string | null;
    documentPdf?: Prisma.StringNullableFilter<"EtatDesLieux"> | string | null;
    nbCles?: Prisma.IntNullableFilter<"EtatDesLieux"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    bail?: Prisma.XOR<Prisma.BailLocationScalarRelationFilter, Prisma.BailLocationWhereInput>;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    locataire?: Prisma.XOR<Prisma.LocataireScalarRelationFilter, Prisma.LocataireWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    pieces?: Prisma.PieceEtatDesLieuxListRelationFilter;
}, "id" | "bailId_type">;
export type EtatDesLieuxOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateRealisation?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentPdf?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbCles?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EtatDesLieuxCountOrderByAggregateInput;
    _avg?: Prisma.EtatDesLieuxAvgOrderByAggregateInput;
    _max?: Prisma.EtatDesLieuxMaxOrderByAggregateInput;
    _min?: Prisma.EtatDesLieuxMinOrderByAggregateInput;
    _sum?: Prisma.EtatDesLieuxSumOrderByAggregateInput;
};
export type EtatDesLieuxScalarWhereWithAggregatesInput = {
    AND?: Prisma.EtatDesLieuxScalarWhereWithAggregatesInput | Prisma.EtatDesLieuxScalarWhereWithAggregatesInput[];
    OR?: Prisma.EtatDesLieuxScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EtatDesLieuxScalarWhereWithAggregatesInput | Prisma.EtatDesLieuxScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EtatDesLieux"> | string;
    bailId?: Prisma.StringWithAggregatesFilter<"EtatDesLieux"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"EtatDesLieux"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"EtatDesLieux"> | string;
    locataireId?: Prisma.StringWithAggregatesFilter<"EtatDesLieux"> | string;
    type?: Prisma.EnumTypeEtatDesLieuxWithAggregatesFilter<"EtatDesLieux"> | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxWithAggregatesFilter<"EtatDesLieux"> | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeWithAggregatesFilter<"EtatDesLieux"> | Date | string;
    dateValidation?: Prisma.DateTimeNullableWithAggregatesFilter<"EtatDesLieux"> | Date | string | null;
    documentPdf?: Prisma.StringNullableWithAggregatesFilter<"EtatDesLieux"> | string | null;
    nbCles?: Prisma.IntNullableWithAggregatesFilter<"EtatDesLieux"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EtatDesLieux"> | Date | string;
};
export type EtatDesLieuxCreateInput = {
    id?: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutEtatsDesLieuxInput;
    bien: Prisma.BienCreateNestedOneWithoutEtatsDesLieuxInput;
    locataire: Prisma.LocataireCreateNestedOneWithoutEtatsDesLieuxInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutEtatsDesLieuxInput;
    pieces?: Prisma.PieceEtatDesLieuxCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxUncheckedCreateInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    bien?: Prisma.BienUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    pieces?: Prisma.PieceEtatDesLieuxUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxCreateManyInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EtatDesLieuxUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtatDesLieuxUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtatDesLieuxListRelationFilter = {
    every?: Prisma.EtatDesLieuxWhereInput;
    some?: Prisma.EtatDesLieuxWhereInput;
    none?: Prisma.EtatDesLieuxWhereInput;
};
export type EtatDesLieuxOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EtatDesLieuxBailIdTypeCompoundUniqueInput = {
    bailId: string;
    type: $Enums.TypeEtatDesLieux;
};
export type EtatDesLieuxCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateRealisation?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    documentPdf?: Prisma.SortOrder;
    nbCles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EtatDesLieuxAvgOrderByAggregateInput = {
    nbCles?: Prisma.SortOrder;
};
export type EtatDesLieuxMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateRealisation?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    documentPdf?: Prisma.SortOrder;
    nbCles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EtatDesLieuxMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    locataireId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateRealisation?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    documentPdf?: Prisma.SortOrder;
    nbCles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EtatDesLieuxSumOrderByAggregateInput = {
    nbCles?: Prisma.SortOrder;
};
export type EtatDesLieuxScalarRelationFilter = {
    is?: Prisma.EtatDesLieuxWhereInput;
    isNot?: Prisma.EtatDesLieuxWhereInput;
};
export type EtatDesLieuxCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBienInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput> | Prisma.EtatDesLieuxCreateWithoutBienInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBienInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBienInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput> | Prisma.EtatDesLieuxCreateWithoutBienInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBienInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBienInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput> | Prisma.EtatDesLieuxCreateWithoutBienInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBienInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBienInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBienInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBienInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EtatDesLieuxUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBienInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput> | Prisma.EtatDesLieuxCreateWithoutBienInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBienInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBienInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBienInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBienInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EtatDesLieuxCreateNestedManyWithoutLocataireInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput> | Prisma.EtatDesLieuxCreateWithoutLocataireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyLocataireInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUncheckedCreateNestedManyWithoutLocataireInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput> | Prisma.EtatDesLieuxCreateWithoutLocataireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyLocataireInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUpdateManyWithoutLocataireNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput> | Prisma.EtatDesLieuxCreateWithoutLocataireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutLocataireInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutLocataireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyLocataireInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutLocataireInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutLocataireInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutLocataireInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutLocataireInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EtatDesLieuxUncheckedUpdateManyWithoutLocataireNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput> | Prisma.EtatDesLieuxCreateWithoutLocataireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutLocataireInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutLocataireInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutLocataireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyLocataireInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutLocataireInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutLocataireInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutLocataireInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutLocataireInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EtatDesLieuxCreateNestedManyWithoutBailInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBailInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput> | Prisma.EtatDesLieuxCreateWithoutBailInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBailInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUncheckedCreateNestedManyWithoutBailInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBailInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput> | Prisma.EtatDesLieuxCreateWithoutBailInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBailInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUpdateManyWithoutBailNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBailInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput> | Prisma.EtatDesLieuxCreateWithoutBailInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBailInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBailInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBailInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBailInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBailInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBailInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBailInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EtatDesLieuxUncheckedUpdateManyWithoutBailNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBailInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput> | Prisma.EtatDesLieuxCreateWithoutBailInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput | Prisma.EtatDesLieuxCreateOrConnectWithoutBailInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBailInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutBailInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyBailInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBailInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutBailInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBailInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutBailInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EtatDesLieuxCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput> | Prisma.EtatDesLieuxCreateWithoutProprietaireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyProprietaireInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput> | Prisma.EtatDesLieuxCreateWithoutProprietaireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyProprietaireInputEnvelope;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
};
export type EtatDesLieuxUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput> | Prisma.EtatDesLieuxCreateWithoutProprietaireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyProprietaireInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutProprietaireInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput> | Prisma.EtatDesLieuxCreateWithoutProprietaireInput[] | Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput | Prisma.EtatDesLieuxCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.EtatDesLieuxUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.EtatDesLieuxCreateManyProprietaireInputEnvelope;
    set?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.EtatDesLieuxWhereUniqueInput | Prisma.EtatDesLieuxWhereUniqueInput[];
    update?: Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.EtatDesLieuxUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.EtatDesLieuxUpdateManyWithWhereWithoutProprietaireInput | Prisma.EtatDesLieuxUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
};
export type EnumTypeEtatDesLieuxFieldUpdateOperationsInput = {
    set?: $Enums.TypeEtatDesLieux;
};
export type EnumStatutEtatDesLieuxFieldUpdateOperationsInput = {
    set?: $Enums.StatutEtatDesLieux;
};
export type EtatDesLieuxCreateNestedOneWithoutPiecesInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutPiecesInput, Prisma.EtatDesLieuxUncheckedCreateWithoutPiecesInput>;
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutPiecesInput;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput;
};
export type EtatDesLieuxUpdateOneRequiredWithoutPiecesNestedInput = {
    create?: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutPiecesInput, Prisma.EtatDesLieuxUncheckedCreateWithoutPiecesInput>;
    connectOrCreate?: Prisma.EtatDesLieuxCreateOrConnectWithoutPiecesInput;
    upsert?: Prisma.EtatDesLieuxUpsertWithoutPiecesInput;
    connect?: Prisma.EtatDesLieuxWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EtatDesLieuxUpdateToOneWithWhereWithoutPiecesInput, Prisma.EtatDesLieuxUpdateWithoutPiecesInput>, Prisma.EtatDesLieuxUncheckedUpdateWithoutPiecesInput>;
};
export type EtatDesLieuxCreateWithoutBienInput = {
    id?: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutEtatsDesLieuxInput;
    locataire: Prisma.LocataireCreateNestedOneWithoutEtatsDesLieuxInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutEtatsDesLieuxInput;
    pieces?: Prisma.PieceEtatDesLieuxCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxUncheckedCreateWithoutBienInput = {
    id?: string;
    bailId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxCreateOrConnectWithoutBienInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBienInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput>;
};
export type EtatDesLieuxCreateManyBienInputEnvelope = {
    data: Prisma.EtatDesLieuxCreateManyBienInput | Prisma.EtatDesLieuxCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type EtatDesLieuxUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    update: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutBienInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBienInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBienInput>;
};
export type EtatDesLieuxUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutBienInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutBienInput>;
};
export type EtatDesLieuxUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.EtatDesLieuxScalarWhereInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateManyMutationInput, Prisma.EtatDesLieuxUncheckedUpdateManyWithoutBienInput>;
};
export type EtatDesLieuxScalarWhereInput = {
    AND?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
    OR?: Prisma.EtatDesLieuxScalarWhereInput[];
    NOT?: Prisma.EtatDesLieuxScalarWhereInput | Prisma.EtatDesLieuxScalarWhereInput[];
    id?: Prisma.StringFilter<"EtatDesLieux"> | string;
    bailId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    bienId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    proprietaireId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    locataireId?: Prisma.StringFilter<"EtatDesLieux"> | string;
    type?: Prisma.EnumTypeEtatDesLieuxFilter<"EtatDesLieux"> | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFilter<"EtatDesLieux"> | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    dateValidation?: Prisma.DateTimeNullableFilter<"EtatDesLieux"> | Date | string | null;
    documentPdf?: Prisma.StringNullableFilter<"EtatDesLieux"> | string | null;
    nbCles?: Prisma.IntNullableFilter<"EtatDesLieux"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EtatDesLieux"> | Date | string;
};
export type EtatDesLieuxCreateWithoutLocataireInput = {
    id?: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutEtatsDesLieuxInput;
    bien: Prisma.BienCreateNestedOneWithoutEtatsDesLieuxInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutEtatsDesLieuxInput;
    pieces?: Prisma.PieceEtatDesLieuxCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxUncheckedCreateWithoutLocataireInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxCreateOrConnectWithoutLocataireInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput>;
};
export type EtatDesLieuxCreateManyLocataireInputEnvelope = {
    data: Prisma.EtatDesLieuxCreateManyLocataireInput | Prisma.EtatDesLieuxCreateManyLocataireInput[];
    skipDuplicates?: boolean;
};
export type EtatDesLieuxUpsertWithWhereUniqueWithoutLocataireInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    update: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutLocataireInput>;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutLocataireInput>;
};
export type EtatDesLieuxUpdateWithWhereUniqueWithoutLocataireInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutLocataireInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutLocataireInput>;
};
export type EtatDesLieuxUpdateManyWithWhereWithoutLocataireInput = {
    where: Prisma.EtatDesLieuxScalarWhereInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateManyMutationInput, Prisma.EtatDesLieuxUncheckedUpdateManyWithoutLocataireInput>;
};
export type EtatDesLieuxCreateWithoutBailInput = {
    id?: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutEtatsDesLieuxInput;
    locataire: Prisma.LocataireCreateNestedOneWithoutEtatsDesLieuxInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutEtatsDesLieuxInput;
    pieces?: Prisma.PieceEtatDesLieuxCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxUncheckedCreateWithoutBailInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxCreateOrConnectWithoutBailInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBailInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput>;
};
export type EtatDesLieuxCreateManyBailInputEnvelope = {
    data: Prisma.EtatDesLieuxCreateManyBailInput | Prisma.EtatDesLieuxCreateManyBailInput[];
    skipDuplicates?: boolean;
};
export type EtatDesLieuxUpsertWithWhereUniqueWithoutBailInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    update: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutBailInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutBailInput>;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutBailInput, Prisma.EtatDesLieuxUncheckedCreateWithoutBailInput>;
};
export type EtatDesLieuxUpdateWithWhereUniqueWithoutBailInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutBailInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutBailInput>;
};
export type EtatDesLieuxUpdateManyWithWhereWithoutBailInput = {
    where: Prisma.EtatDesLieuxScalarWhereInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateManyMutationInput, Prisma.EtatDesLieuxUncheckedUpdateManyWithoutBailInput>;
};
export type EtatDesLieuxCreateWithoutProprietaireInput = {
    id?: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutEtatsDesLieuxInput;
    bien: Prisma.BienCreateNestedOneWithoutEtatsDesLieuxInput;
    locataire: Prisma.LocataireCreateNestedOneWithoutEtatsDesLieuxInput;
    pieces?: Prisma.PieceEtatDesLieuxCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    bailId: string;
    bienId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedCreateNestedManyWithoutEtatDesLieuxInput;
};
export type EtatDesLieuxCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput>;
};
export type EtatDesLieuxCreateManyProprietaireInputEnvelope = {
    data: Prisma.EtatDesLieuxCreateManyProprietaireInput | Prisma.EtatDesLieuxCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type EtatDesLieuxUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    update: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedCreateWithoutProprietaireInput>;
};
export type EtatDesLieuxUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutProprietaireInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutProprietaireInput>;
};
export type EtatDesLieuxUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.EtatDesLieuxScalarWhereInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateManyMutationInput, Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireInput>;
};
export type EtatDesLieuxCreateWithoutPiecesInput = {
    id?: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bail: Prisma.BailLocationCreateNestedOneWithoutEtatsDesLieuxInput;
    bien: Prisma.BienCreateNestedOneWithoutEtatsDesLieuxInput;
    locataire: Prisma.LocataireCreateNestedOneWithoutEtatsDesLieuxInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutEtatsDesLieuxInput;
};
export type EtatDesLieuxUncheckedCreateWithoutPiecesInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EtatDesLieuxCreateOrConnectWithoutPiecesInput = {
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutPiecesInput, Prisma.EtatDesLieuxUncheckedCreateWithoutPiecesInput>;
};
export type EtatDesLieuxUpsertWithoutPiecesInput = {
    update: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutPiecesInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutPiecesInput>;
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateWithoutPiecesInput, Prisma.EtatDesLieuxUncheckedCreateWithoutPiecesInput>;
    where?: Prisma.EtatDesLieuxWhereInput;
};
export type EtatDesLieuxUpdateToOneWithWhereWithoutPiecesInput = {
    where?: Prisma.EtatDesLieuxWhereInput;
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateWithoutPiecesInput, Prisma.EtatDesLieuxUncheckedUpdateWithoutPiecesInput>;
};
export type EtatDesLieuxUpdateWithoutPiecesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    bien?: Prisma.BienUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateWithoutPiecesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtatDesLieuxCreateManyBienInput = {
    id?: string;
    bailId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EtatDesLieuxUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    pieces?: Prisma.PieceEtatDesLieuxUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateManyWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtatDesLieuxCreateManyLocataireInput = {
    id?: string;
    bailId: string;
    bienId: string;
    proprietaireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EtatDesLieuxUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    bien?: Prisma.BienUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    pieces?: Prisma.PieceEtatDesLieuxUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateManyWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtatDesLieuxCreateManyBailInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EtatDesLieuxUpdateWithoutBailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    pieces?: Prisma.PieceEtatDesLieuxUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateWithoutBailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateManyWithoutBailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EtatDesLieuxCreateManyProprietaireInput = {
    id?: string;
    bailId: string;
    bienId: string;
    locataireId: string;
    type: $Enums.TypeEtatDesLieux;
    statut?: $Enums.StatutEtatDesLieux;
    dateRealisation?: Date | string;
    dateValidation?: Date | string | null;
    documentPdf?: string | null;
    nbCles?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EtatDesLieuxUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bail?: Prisma.BailLocationUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    bien?: Prisma.BienUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    locataire?: Prisma.LocataireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput;
    pieces?: Prisma.PieceEtatDesLieuxUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pieces?: Prisma.PieceEtatDesLieuxUncheckedUpdateManyWithoutEtatDesLieuxNestedInput;
};
export type EtatDesLieuxUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    locataireId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtatDesLieuxFieldUpdateOperationsInput | $Enums.TypeEtatDesLieux;
    statut?: Prisma.EnumStatutEtatDesLieuxFieldUpdateOperationsInput | $Enums.StatutEtatDesLieux;
    dateRealisation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentPdf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbCles?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type EtatDesLieuxCountOutputType
 */
export type EtatDesLieuxCountOutputType = {
    pieces: number;
};
export type EtatDesLieuxCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pieces?: boolean | EtatDesLieuxCountOutputTypeCountPiecesArgs;
};
/**
 * EtatDesLieuxCountOutputType without action
 */
export type EtatDesLieuxCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieuxCountOutputType
     */
    select?: Prisma.EtatDesLieuxCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EtatDesLieuxCountOutputType without action
 */
export type EtatDesLieuxCountOutputTypeCountPiecesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PieceEtatDesLieuxWhereInput;
};
export type EtatDesLieuxSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    type?: boolean;
    statut?: boolean;
    dateRealisation?: boolean;
    dateValidation?: boolean;
    documentPdf?: boolean;
    nbCles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    pieces?: boolean | Prisma.EtatDesLieux$piecesArgs<ExtArgs>;
    _count?: boolean | Prisma.EtatDesLieuxCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etatDesLieux"]>;
export type EtatDesLieuxSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    type?: boolean;
    statut?: boolean;
    dateRealisation?: boolean;
    dateValidation?: boolean;
    documentPdf?: boolean;
    nbCles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etatDesLieux"]>;
export type EtatDesLieuxSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    type?: boolean;
    statut?: boolean;
    dateRealisation?: boolean;
    dateValidation?: boolean;
    documentPdf?: boolean;
    nbCles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etatDesLieux"]>;
export type EtatDesLieuxSelectScalar = {
    id?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    locataireId?: boolean;
    type?: boolean;
    statut?: boolean;
    dateRealisation?: boolean;
    dateValidation?: boolean;
    documentPdf?: boolean;
    nbCles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EtatDesLieuxOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bailId" | "bienId" | "proprietaireId" | "locataireId" | "type" | "statut" | "dateRealisation" | "dateValidation" | "documentPdf" | "nbCles" | "createdAt" | "updatedAt", ExtArgs["result"]["etatDesLieux"]>;
export type EtatDesLieuxInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    pieces?: boolean | Prisma.EtatDesLieux$piecesArgs<ExtArgs>;
    _count?: boolean | Prisma.EtatDesLieuxCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EtatDesLieuxIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type EtatDesLieuxIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bail?: boolean | Prisma.BailLocationDefaultArgs<ExtArgs>;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    locataire?: boolean | Prisma.LocataireDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $EtatDesLieuxPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EtatDesLieux";
    objects: {
        bail: Prisma.$BailLocationPayload<ExtArgs>;
        bien: Prisma.$BienPayload<ExtArgs>;
        locataire: Prisma.$LocatairePayload<ExtArgs>;
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
        pieces: Prisma.$PieceEtatDesLieuxPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bailId: string;
        bienId: string;
        proprietaireId: string;
        locataireId: string;
        type: $Enums.TypeEtatDesLieux;
        statut: $Enums.StatutEtatDesLieux;
        dateRealisation: Date;
        dateValidation: Date | null;
        documentPdf: string | null;
        nbCles: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["etatDesLieux"]>;
    composites: {};
};
export type EtatDesLieuxGetPayload<S extends boolean | null | undefined | EtatDesLieuxDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload, S>;
export type EtatDesLieuxCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EtatDesLieuxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EtatDesLieuxCountAggregateInputType | true;
};
export interface EtatDesLieuxDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EtatDesLieux'];
        meta: {
            name: 'EtatDesLieux';
        };
    };
    /**
     * Find zero or one EtatDesLieux that matches the filter.
     * @param {EtatDesLieuxFindUniqueArgs} args - Arguments to find a EtatDesLieux
     * @example
     * // Get one EtatDesLieux
     * const etatDesLieux = await prisma.etatDesLieux.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtatDesLieuxFindUniqueArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EtatDesLieux that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtatDesLieuxFindUniqueOrThrowArgs} args - Arguments to find a EtatDesLieux
     * @example
     * // Get one EtatDesLieux
     * const etatDesLieux = await prisma.etatDesLieux.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtatDesLieuxFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EtatDesLieux that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatDesLieuxFindFirstArgs} args - Arguments to find a EtatDesLieux
     * @example
     * // Get one EtatDesLieux
     * const etatDesLieux = await prisma.etatDesLieux.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtatDesLieuxFindFirstArgs>(args?: Prisma.SelectSubset<T, EtatDesLieuxFindFirstArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EtatDesLieux that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatDesLieuxFindFirstOrThrowArgs} args - Arguments to find a EtatDesLieux
     * @example
     * // Get one EtatDesLieux
     * const etatDesLieux = await prisma.etatDesLieux.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtatDesLieuxFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EtatDesLieuxFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EtatDesLieuxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatDesLieuxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EtatDesLieuxes
     * const etatDesLieuxes = await prisma.etatDesLieux.findMany()
     *
     * // Get first 10 EtatDesLieuxes
     * const etatDesLieuxes = await prisma.etatDesLieux.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const etatDesLieuxWithIdOnly = await prisma.etatDesLieux.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EtatDesLieuxFindManyArgs>(args?: Prisma.SelectSubset<T, EtatDesLieuxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EtatDesLieux.
     * @param {EtatDesLieuxCreateArgs} args - Arguments to create a EtatDesLieux.
     * @example
     * // Create one EtatDesLieux
     * const EtatDesLieux = await prisma.etatDesLieux.create({
     *   data: {
     *     // ... data to create a EtatDesLieux
     *   }
     * })
     *
     */
    create<T extends EtatDesLieuxCreateArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxCreateArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EtatDesLieuxes.
     * @param {EtatDesLieuxCreateManyArgs} args - Arguments to create many EtatDesLieuxes.
     * @example
     * // Create many EtatDesLieuxes
     * const etatDesLieux = await prisma.etatDesLieux.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EtatDesLieuxCreateManyArgs>(args?: Prisma.SelectSubset<T, EtatDesLieuxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EtatDesLieuxes and returns the data saved in the database.
     * @param {EtatDesLieuxCreateManyAndReturnArgs} args - Arguments to create many EtatDesLieuxes.
     * @example
     * // Create many EtatDesLieuxes
     * const etatDesLieux = await prisma.etatDesLieux.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EtatDesLieuxes and only return the `id`
     * const etatDesLieuxWithIdOnly = await prisma.etatDesLieux.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EtatDesLieuxCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EtatDesLieuxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EtatDesLieux.
     * @param {EtatDesLieuxDeleteArgs} args - Arguments to delete one EtatDesLieux.
     * @example
     * // Delete one EtatDesLieux
     * const EtatDesLieux = await prisma.etatDesLieux.delete({
     *   where: {
     *     // ... filter to delete one EtatDesLieux
     *   }
     * })
     *
     */
    delete<T extends EtatDesLieuxDeleteArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxDeleteArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EtatDesLieux.
     * @param {EtatDesLieuxUpdateArgs} args - Arguments to update one EtatDesLieux.
     * @example
     * // Update one EtatDesLieux
     * const etatDesLieux = await prisma.etatDesLieux.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EtatDesLieuxUpdateArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxUpdateArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EtatDesLieuxes.
     * @param {EtatDesLieuxDeleteManyArgs} args - Arguments to filter EtatDesLieuxes to delete.
     * @example
     * // Delete a few EtatDesLieuxes
     * const { count } = await prisma.etatDesLieux.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EtatDesLieuxDeleteManyArgs>(args?: Prisma.SelectSubset<T, EtatDesLieuxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EtatDesLieuxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatDesLieuxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EtatDesLieuxes
     * const etatDesLieux = await prisma.etatDesLieux.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EtatDesLieuxUpdateManyArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EtatDesLieuxes and returns the data updated in the database.
     * @param {EtatDesLieuxUpdateManyAndReturnArgs} args - Arguments to update many EtatDesLieuxes.
     * @example
     * // Update many EtatDesLieuxes
     * const etatDesLieux = await prisma.etatDesLieux.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EtatDesLieuxes and only return the `id`
     * const etatDesLieuxWithIdOnly = await prisma.etatDesLieux.updateManyAndReturn({
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
    updateManyAndReturn<T extends EtatDesLieuxUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EtatDesLieux.
     * @param {EtatDesLieuxUpsertArgs} args - Arguments to update or create a EtatDesLieux.
     * @example
     * // Update or create a EtatDesLieux
     * const etatDesLieux = await prisma.etatDesLieux.upsert({
     *   create: {
     *     // ... data to create a EtatDesLieux
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EtatDesLieux we want to update
     *   }
     * })
     */
    upsert<T extends EtatDesLieuxUpsertArgs>(args: Prisma.SelectSubset<T, EtatDesLieuxUpsertArgs<ExtArgs>>): Prisma.Prisma__EtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EtatDesLieuxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatDesLieuxCountArgs} args - Arguments to filter EtatDesLieuxes to count.
     * @example
     * // Count the number of EtatDesLieuxes
     * const count = await prisma.etatDesLieux.count({
     *   where: {
     *     // ... the filter for the EtatDesLieuxes we want to count
     *   }
     * })
    **/
    count<T extends EtatDesLieuxCountArgs>(args?: Prisma.Subset<T, EtatDesLieuxCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EtatDesLieuxCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EtatDesLieux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatDesLieuxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtatDesLieuxAggregateArgs>(args: Prisma.Subset<T, EtatDesLieuxAggregateArgs>): Prisma.PrismaPromise<GetEtatDesLieuxAggregateType<T>>;
    /**
     * Group by EtatDesLieux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatDesLieuxGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EtatDesLieuxGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EtatDesLieuxGroupByArgs['orderBy'];
    } : {
        orderBy?: EtatDesLieuxGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EtatDesLieuxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtatDesLieuxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EtatDesLieux model
     */
    readonly fields: EtatDesLieuxFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EtatDesLieux.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EtatDesLieuxClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bail<T extends Prisma.BailLocationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BailLocationDefaultArgs<ExtArgs>>): Prisma.Prisma__BailLocationClient<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    locataire<T extends Prisma.LocataireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LocataireDefaultArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proprietaire<T extends Prisma.ProprietaireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProprietaireDefaultArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pieces<T extends Prisma.EtatDesLieux$piecesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EtatDesLieux$piecesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PieceEtatDesLieuxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EtatDesLieux model
 */
export interface EtatDesLieuxFieldRefs {
    readonly id: Prisma.FieldRef<"EtatDesLieux", 'String'>;
    readonly bailId: Prisma.FieldRef<"EtatDesLieux", 'String'>;
    readonly bienId: Prisma.FieldRef<"EtatDesLieux", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"EtatDesLieux", 'String'>;
    readonly locataireId: Prisma.FieldRef<"EtatDesLieux", 'String'>;
    readonly type: Prisma.FieldRef<"EtatDesLieux", 'TypeEtatDesLieux'>;
    readonly statut: Prisma.FieldRef<"EtatDesLieux", 'StatutEtatDesLieux'>;
    readonly dateRealisation: Prisma.FieldRef<"EtatDesLieux", 'DateTime'>;
    readonly dateValidation: Prisma.FieldRef<"EtatDesLieux", 'DateTime'>;
    readonly documentPdf: Prisma.FieldRef<"EtatDesLieux", 'String'>;
    readonly nbCles: Prisma.FieldRef<"EtatDesLieux", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"EtatDesLieux", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EtatDesLieux", 'DateTime'>;
}
/**
 * EtatDesLieux findUnique
 */
export type EtatDesLieuxFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which EtatDesLieux to fetch.
     */
    where: Prisma.EtatDesLieuxWhereUniqueInput;
};
/**
 * EtatDesLieux findUniqueOrThrow
 */
export type EtatDesLieuxFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which EtatDesLieux to fetch.
     */
    where: Prisma.EtatDesLieuxWhereUniqueInput;
};
/**
 * EtatDesLieux findFirst
 */
export type EtatDesLieuxFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which EtatDesLieux to fetch.
     */
    where?: Prisma.EtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.EtatDesLieuxOrderByWithRelationInput | Prisma.EtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EtatDesLieuxes.
     */
    cursor?: Prisma.EtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtatDesLieuxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EtatDesLieuxes.
     */
    distinct?: Prisma.EtatDesLieuxScalarFieldEnum | Prisma.EtatDesLieuxScalarFieldEnum[];
};
/**
 * EtatDesLieux findFirstOrThrow
 */
export type EtatDesLieuxFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which EtatDesLieux to fetch.
     */
    where?: Prisma.EtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.EtatDesLieuxOrderByWithRelationInput | Prisma.EtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EtatDesLieuxes.
     */
    cursor?: Prisma.EtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtatDesLieuxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EtatDesLieuxes.
     */
    distinct?: Prisma.EtatDesLieuxScalarFieldEnum | Prisma.EtatDesLieuxScalarFieldEnum[];
};
/**
 * EtatDesLieux findMany
 */
export type EtatDesLieuxFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which EtatDesLieuxes to fetch.
     */
    where?: Prisma.EtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.EtatDesLieuxOrderByWithRelationInput | Prisma.EtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EtatDesLieuxes.
     */
    cursor?: Prisma.EtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtatDesLieuxes.
     */
    skip?: number;
    distinct?: Prisma.EtatDesLieuxScalarFieldEnum | Prisma.EtatDesLieuxScalarFieldEnum[];
};
/**
 * EtatDesLieux create
 */
export type EtatDesLieuxCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * The data needed to create a EtatDesLieux.
     */
    data: Prisma.XOR<Prisma.EtatDesLieuxCreateInput, Prisma.EtatDesLieuxUncheckedCreateInput>;
};
/**
 * EtatDesLieux createMany
 */
export type EtatDesLieuxCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EtatDesLieuxes.
     */
    data: Prisma.EtatDesLieuxCreateManyInput | Prisma.EtatDesLieuxCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EtatDesLieux createManyAndReturn
 */
export type EtatDesLieuxCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * The data used to create many EtatDesLieuxes.
     */
    data: Prisma.EtatDesLieuxCreateManyInput | Prisma.EtatDesLieuxCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EtatDesLieux update
 */
export type EtatDesLieuxUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * The data needed to update a EtatDesLieux.
     */
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateInput, Prisma.EtatDesLieuxUncheckedUpdateInput>;
    /**
     * Choose, which EtatDesLieux to update.
     */
    where: Prisma.EtatDesLieuxWhereUniqueInput;
};
/**
 * EtatDesLieux updateMany
 */
export type EtatDesLieuxUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EtatDesLieuxes.
     */
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateManyMutationInput, Prisma.EtatDesLieuxUncheckedUpdateManyInput>;
    /**
     * Filter which EtatDesLieuxes to update
     */
    where?: Prisma.EtatDesLieuxWhereInput;
    /**
     * Limit how many EtatDesLieuxes to update.
     */
    limit?: number;
};
/**
 * EtatDesLieux updateManyAndReturn
 */
export type EtatDesLieuxUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * The data used to update EtatDesLieuxes.
     */
    data: Prisma.XOR<Prisma.EtatDesLieuxUpdateManyMutationInput, Prisma.EtatDesLieuxUncheckedUpdateManyInput>;
    /**
     * Filter which EtatDesLieuxes to update
     */
    where?: Prisma.EtatDesLieuxWhereInput;
    /**
     * Limit how many EtatDesLieuxes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EtatDesLieux upsert
 */
export type EtatDesLieuxUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * The filter to search for the EtatDesLieux to update in case it exists.
     */
    where: Prisma.EtatDesLieuxWhereUniqueInput;
    /**
     * In case the EtatDesLieux found by the `where` argument doesn't exist, create a new EtatDesLieux with this data.
     */
    create: Prisma.XOR<Prisma.EtatDesLieuxCreateInput, Prisma.EtatDesLieuxUncheckedCreateInput>;
    /**
     * In case the EtatDesLieux was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EtatDesLieuxUpdateInput, Prisma.EtatDesLieuxUncheckedUpdateInput>;
};
/**
 * EtatDesLieux delete
 */
export type EtatDesLieuxDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter which EtatDesLieux to delete.
     */
    where: Prisma.EtatDesLieuxWhereUniqueInput;
};
/**
 * EtatDesLieux deleteMany
 */
export type EtatDesLieuxDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EtatDesLieuxes to delete
     */
    where?: Prisma.EtatDesLieuxWhereInput;
    /**
     * Limit how many EtatDesLieuxes to delete.
     */
    limit?: number;
};
/**
 * EtatDesLieux.pieces
 */
export type EtatDesLieux$piecesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PieceEtatDesLieux
     */
    select?: Prisma.PieceEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PieceEtatDesLieux
     */
    omit?: Prisma.PieceEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PieceEtatDesLieuxInclude<ExtArgs> | null;
    where?: Prisma.PieceEtatDesLieuxWhereInput;
    orderBy?: Prisma.PieceEtatDesLieuxOrderByWithRelationInput | Prisma.PieceEtatDesLieuxOrderByWithRelationInput[];
    cursor?: Prisma.PieceEtatDesLieuxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PieceEtatDesLieuxScalarFieldEnum | Prisma.PieceEtatDesLieuxScalarFieldEnum[];
};
/**
 * EtatDesLieux without action
 */
export type EtatDesLieuxDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatDesLieux
     */
    select?: Prisma.EtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtatDesLieux
     */
    omit?: Prisma.EtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtatDesLieuxInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EtatDesLieux.d.ts.map