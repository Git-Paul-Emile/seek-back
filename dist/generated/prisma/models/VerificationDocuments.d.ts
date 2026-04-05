import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model VerificationDocuments
 *
 */
export type VerificationDocumentsModel = runtime.Types.Result.DefaultSelection<Prisma.$VerificationDocumentsPayload>;
export type AggregateVerificationDocuments = {
    _count: VerificationDocumentsCountAggregateOutputType | null;
    _min: VerificationDocumentsMinAggregateOutputType | null;
    _max: VerificationDocumentsMaxAggregateOutputType | null;
};
export type VerificationDocumentsMinAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    typePiece: string | null;
    pieceIdentiteRecto: string | null;
    pieceIdentiteVerso: string | null;
    selfie: string | null;
    conditionsAcceptees: boolean | null;
    motifRejet: string | null;
    traitePar: string | null;
    dateTraitement: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VerificationDocumentsMaxAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    typePiece: string | null;
    pieceIdentiteRecto: string | null;
    pieceIdentiteVerso: string | null;
    selfie: string | null;
    conditionsAcceptees: boolean | null;
    motifRejet: string | null;
    traitePar: string | null;
    dateTraitement: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VerificationDocumentsCountAggregateOutputType = {
    id: number;
    proprietaireId: number;
    typePiece: number;
    pieceIdentiteRecto: number;
    pieceIdentiteVerso: number;
    selfie: number;
    conditionsAcceptees: number;
    motifRejet: number;
    traitePar: number;
    dateTraitement: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VerificationDocumentsMinAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    typePiece?: true;
    pieceIdentiteRecto?: true;
    pieceIdentiteVerso?: true;
    selfie?: true;
    conditionsAcceptees?: true;
    motifRejet?: true;
    traitePar?: true;
    dateTraitement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VerificationDocumentsMaxAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    typePiece?: true;
    pieceIdentiteRecto?: true;
    pieceIdentiteVerso?: true;
    selfie?: true;
    conditionsAcceptees?: true;
    motifRejet?: true;
    traitePar?: true;
    dateTraitement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VerificationDocumentsCountAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    typePiece?: true;
    pieceIdentiteRecto?: true;
    pieceIdentiteVerso?: true;
    selfie?: true;
    conditionsAcceptees?: true;
    motifRejet?: true;
    traitePar?: true;
    dateTraitement?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VerificationDocumentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationDocuments to aggregate.
     */
    where?: Prisma.VerificationDocumentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: Prisma.VerificationDocumentsOrderByWithRelationInput | Prisma.VerificationDocumentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VerificationDocumentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VerificationDocuments
    **/
    _count?: true | VerificationDocumentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VerificationDocumentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VerificationDocumentsMaxAggregateInputType;
};
export type GetVerificationDocumentsAggregateType<T extends VerificationDocumentsAggregateArgs> = {
    [P in keyof T & keyof AggregateVerificationDocuments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVerificationDocuments[P]> : Prisma.GetScalarType<T[P], AggregateVerificationDocuments[P]>;
};
export type VerificationDocumentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VerificationDocumentsWhereInput;
    orderBy?: Prisma.VerificationDocumentsOrderByWithAggregationInput | Prisma.VerificationDocumentsOrderByWithAggregationInput[];
    by: Prisma.VerificationDocumentsScalarFieldEnum[] | Prisma.VerificationDocumentsScalarFieldEnum;
    having?: Prisma.VerificationDocumentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VerificationDocumentsCountAggregateInputType | true;
    _min?: VerificationDocumentsMinAggregateInputType;
    _max?: VerificationDocumentsMaxAggregateInputType;
};
export type VerificationDocumentsGroupByOutputType = {
    id: string;
    proprietaireId: string;
    typePiece: string;
    pieceIdentiteRecto: string | null;
    pieceIdentiteVerso: string | null;
    selfie: string | null;
    conditionsAcceptees: boolean;
    motifRejet: string | null;
    traitePar: string | null;
    dateTraitement: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: VerificationDocumentsCountAggregateOutputType | null;
    _min: VerificationDocumentsMinAggregateOutputType | null;
    _max: VerificationDocumentsMaxAggregateOutputType | null;
};
type GetVerificationDocumentsGroupByPayload<T extends VerificationDocumentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VerificationDocumentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VerificationDocumentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VerificationDocumentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VerificationDocumentsGroupByOutputType[P]>;
}>>;
export type VerificationDocumentsWhereInput = {
    AND?: Prisma.VerificationDocumentsWhereInput | Prisma.VerificationDocumentsWhereInput[];
    OR?: Prisma.VerificationDocumentsWhereInput[];
    NOT?: Prisma.VerificationDocumentsWhereInput | Prisma.VerificationDocumentsWhereInput[];
    id?: Prisma.StringFilter<"VerificationDocuments"> | string;
    proprietaireId?: Prisma.StringFilter<"VerificationDocuments"> | string;
    typePiece?: Prisma.StringFilter<"VerificationDocuments"> | string;
    pieceIdentiteRecto?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    pieceIdentiteVerso?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    selfie?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    conditionsAcceptees?: Prisma.BoolFilter<"VerificationDocuments"> | boolean;
    motifRejet?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    traitePar?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    dateTraitement?: Prisma.DateTimeNullableFilter<"VerificationDocuments"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"VerificationDocuments"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VerificationDocuments"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
};
export type VerificationDocumentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    pieceIdentiteRecto?: Prisma.SortOrderInput | Prisma.SortOrder;
    pieceIdentiteVerso?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfie?: Prisma.SortOrderInput | Prisma.SortOrder;
    conditionsAcceptees?: Prisma.SortOrder;
    motifRejet?: Prisma.SortOrderInput | Prisma.SortOrder;
    traitePar?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateTraitement?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
};
export type VerificationDocumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    proprietaireId?: string;
    AND?: Prisma.VerificationDocumentsWhereInput | Prisma.VerificationDocumentsWhereInput[];
    OR?: Prisma.VerificationDocumentsWhereInput[];
    NOT?: Prisma.VerificationDocumentsWhereInput | Prisma.VerificationDocumentsWhereInput[];
    typePiece?: Prisma.StringFilter<"VerificationDocuments"> | string;
    pieceIdentiteRecto?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    pieceIdentiteVerso?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    selfie?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    conditionsAcceptees?: Prisma.BoolFilter<"VerificationDocuments"> | boolean;
    motifRejet?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    traitePar?: Prisma.StringNullableFilter<"VerificationDocuments"> | string | null;
    dateTraitement?: Prisma.DateTimeNullableFilter<"VerificationDocuments"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"VerificationDocuments"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VerificationDocuments"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
}, "id" | "proprietaireId">;
export type VerificationDocumentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    pieceIdentiteRecto?: Prisma.SortOrderInput | Prisma.SortOrder;
    pieceIdentiteVerso?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfie?: Prisma.SortOrderInput | Prisma.SortOrder;
    conditionsAcceptees?: Prisma.SortOrder;
    motifRejet?: Prisma.SortOrderInput | Prisma.SortOrder;
    traitePar?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateTraitement?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VerificationDocumentsCountOrderByAggregateInput;
    _max?: Prisma.VerificationDocumentsMaxOrderByAggregateInput;
    _min?: Prisma.VerificationDocumentsMinOrderByAggregateInput;
};
export type VerificationDocumentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.VerificationDocumentsScalarWhereWithAggregatesInput | Prisma.VerificationDocumentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.VerificationDocumentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VerificationDocumentsScalarWhereWithAggregatesInput | Prisma.VerificationDocumentsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VerificationDocuments"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"VerificationDocuments"> | string;
    typePiece?: Prisma.StringWithAggregatesFilter<"VerificationDocuments"> | string;
    pieceIdentiteRecto?: Prisma.StringNullableWithAggregatesFilter<"VerificationDocuments"> | string | null;
    pieceIdentiteVerso?: Prisma.StringNullableWithAggregatesFilter<"VerificationDocuments"> | string | null;
    selfie?: Prisma.StringNullableWithAggregatesFilter<"VerificationDocuments"> | string | null;
    conditionsAcceptees?: Prisma.BoolWithAggregatesFilter<"VerificationDocuments"> | boolean;
    motifRejet?: Prisma.StringNullableWithAggregatesFilter<"VerificationDocuments"> | string | null;
    traitePar?: Prisma.StringNullableWithAggregatesFilter<"VerificationDocuments"> | string | null;
    dateTraitement?: Prisma.DateTimeNullableWithAggregatesFilter<"VerificationDocuments"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VerificationDocuments"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VerificationDocuments"> | Date | string;
};
export type VerificationDocumentsCreateInput = {
    id?: string;
    typePiece?: string;
    pieceIdentiteRecto?: string | null;
    pieceIdentiteVerso?: string | null;
    selfie?: string | null;
    conditionsAcceptees?: boolean;
    motifRejet?: string | null;
    traitePar?: string | null;
    dateTraitement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutVerificationInput;
};
export type VerificationDocumentsUncheckedCreateInput = {
    id?: string;
    proprietaireId: string;
    typePiece?: string;
    pieceIdentiteRecto?: string | null;
    pieceIdentiteVerso?: string | null;
    selfie?: string | null;
    conditionsAcceptees?: boolean;
    motifRejet?: string | null;
    traitePar?: string | null;
    dateTraitement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VerificationDocumentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typePiece?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceIdentiteRecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pieceIdentiteVerso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditionsAcceptees?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifRejet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    traitePar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateTraitement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutVerificationNestedInput;
};
export type VerificationDocumentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typePiece?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceIdentiteRecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pieceIdentiteVerso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditionsAcceptees?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifRejet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    traitePar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateTraitement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationDocumentsCreateManyInput = {
    id?: string;
    proprietaireId: string;
    typePiece?: string;
    pieceIdentiteRecto?: string | null;
    pieceIdentiteVerso?: string | null;
    selfie?: string | null;
    conditionsAcceptees?: boolean;
    motifRejet?: string | null;
    traitePar?: string | null;
    dateTraitement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VerificationDocumentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typePiece?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceIdentiteRecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pieceIdentiteVerso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditionsAcceptees?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifRejet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    traitePar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateTraitement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationDocumentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    typePiece?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceIdentiteRecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pieceIdentiteVerso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditionsAcceptees?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifRejet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    traitePar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateTraitement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationDocumentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    pieceIdentiteRecto?: Prisma.SortOrder;
    pieceIdentiteVerso?: Prisma.SortOrder;
    selfie?: Prisma.SortOrder;
    conditionsAcceptees?: Prisma.SortOrder;
    motifRejet?: Prisma.SortOrder;
    traitePar?: Prisma.SortOrder;
    dateTraitement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VerificationDocumentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    pieceIdentiteRecto?: Prisma.SortOrder;
    pieceIdentiteVerso?: Prisma.SortOrder;
    selfie?: Prisma.SortOrder;
    conditionsAcceptees?: Prisma.SortOrder;
    motifRejet?: Prisma.SortOrder;
    traitePar?: Prisma.SortOrder;
    dateTraitement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VerificationDocumentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    pieceIdentiteRecto?: Prisma.SortOrder;
    pieceIdentiteVerso?: Prisma.SortOrder;
    selfie?: Prisma.SortOrder;
    conditionsAcceptees?: Prisma.SortOrder;
    motifRejet?: Prisma.SortOrder;
    traitePar?: Prisma.SortOrder;
    dateTraitement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VerificationDocumentsNullableScalarRelationFilter = {
    is?: Prisma.VerificationDocumentsWhereInput | null;
    isNot?: Prisma.VerificationDocumentsWhereInput | null;
};
export type VerificationDocumentsCreateNestedOneWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.VerificationDocumentsCreateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedCreateWithoutProprietaireInput>;
    connectOrCreate?: Prisma.VerificationDocumentsCreateOrConnectWithoutProprietaireInput;
    connect?: Prisma.VerificationDocumentsWhereUniqueInput;
};
export type VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.VerificationDocumentsCreateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedCreateWithoutProprietaireInput>;
    connectOrCreate?: Prisma.VerificationDocumentsCreateOrConnectWithoutProprietaireInput;
    connect?: Prisma.VerificationDocumentsWhereUniqueInput;
};
export type VerificationDocumentsUpdateOneWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.VerificationDocumentsCreateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedCreateWithoutProprietaireInput>;
    connectOrCreate?: Prisma.VerificationDocumentsCreateOrConnectWithoutProprietaireInput;
    upsert?: Prisma.VerificationDocumentsUpsertWithoutProprietaireInput;
    disconnect?: Prisma.VerificationDocumentsWhereInput | boolean;
    delete?: Prisma.VerificationDocumentsWhereInput | boolean;
    connect?: Prisma.VerificationDocumentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VerificationDocumentsUpdateToOneWithWhereWithoutProprietaireInput, Prisma.VerificationDocumentsUpdateWithoutProprietaireInput>, Prisma.VerificationDocumentsUncheckedUpdateWithoutProprietaireInput>;
};
export type VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.VerificationDocumentsCreateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedCreateWithoutProprietaireInput>;
    connectOrCreate?: Prisma.VerificationDocumentsCreateOrConnectWithoutProprietaireInput;
    upsert?: Prisma.VerificationDocumentsUpsertWithoutProprietaireInput;
    disconnect?: Prisma.VerificationDocumentsWhereInput | boolean;
    delete?: Prisma.VerificationDocumentsWhereInput | boolean;
    connect?: Prisma.VerificationDocumentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VerificationDocumentsUpdateToOneWithWhereWithoutProprietaireInput, Prisma.VerificationDocumentsUpdateWithoutProprietaireInput>, Prisma.VerificationDocumentsUncheckedUpdateWithoutProprietaireInput>;
};
export type VerificationDocumentsCreateWithoutProprietaireInput = {
    id?: string;
    typePiece?: string;
    pieceIdentiteRecto?: string | null;
    pieceIdentiteVerso?: string | null;
    selfie?: string | null;
    conditionsAcceptees?: boolean;
    motifRejet?: string | null;
    traitePar?: string | null;
    dateTraitement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VerificationDocumentsUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    typePiece?: string;
    pieceIdentiteRecto?: string | null;
    pieceIdentiteVerso?: string | null;
    selfie?: string | null;
    conditionsAcceptees?: boolean;
    motifRejet?: string | null;
    traitePar?: string | null;
    dateTraitement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VerificationDocumentsCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.VerificationDocumentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VerificationDocumentsCreateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedCreateWithoutProprietaireInput>;
};
export type VerificationDocumentsUpsertWithoutProprietaireInput = {
    update: Prisma.XOR<Prisma.VerificationDocumentsUpdateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.VerificationDocumentsCreateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedCreateWithoutProprietaireInput>;
    where?: Prisma.VerificationDocumentsWhereInput;
};
export type VerificationDocumentsUpdateToOneWithWhereWithoutProprietaireInput = {
    where?: Prisma.VerificationDocumentsWhereInput;
    data: Prisma.XOR<Prisma.VerificationDocumentsUpdateWithoutProprietaireInput, Prisma.VerificationDocumentsUncheckedUpdateWithoutProprietaireInput>;
};
export type VerificationDocumentsUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typePiece?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceIdentiteRecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pieceIdentiteVerso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditionsAcceptees?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifRejet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    traitePar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateTraitement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationDocumentsUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typePiece?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceIdentiteRecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pieceIdentiteVerso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditionsAcceptees?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifRejet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    traitePar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateTraitement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationDocumentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    typePiece?: boolean;
    pieceIdentiteRecto?: boolean;
    pieceIdentiteVerso?: boolean;
    selfie?: boolean;
    conditionsAcceptees?: boolean;
    motifRejet?: boolean;
    traitePar?: boolean;
    dateTraitement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["verificationDocuments"]>;
export type VerificationDocumentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    typePiece?: boolean;
    pieceIdentiteRecto?: boolean;
    pieceIdentiteVerso?: boolean;
    selfie?: boolean;
    conditionsAcceptees?: boolean;
    motifRejet?: boolean;
    traitePar?: boolean;
    dateTraitement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["verificationDocuments"]>;
export type VerificationDocumentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    typePiece?: boolean;
    pieceIdentiteRecto?: boolean;
    pieceIdentiteVerso?: boolean;
    selfie?: boolean;
    conditionsAcceptees?: boolean;
    motifRejet?: boolean;
    traitePar?: boolean;
    dateTraitement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["verificationDocuments"]>;
export type VerificationDocumentsSelectScalar = {
    id?: boolean;
    proprietaireId?: boolean;
    typePiece?: boolean;
    pieceIdentiteRecto?: boolean;
    pieceIdentiteVerso?: boolean;
    selfie?: boolean;
    conditionsAcceptees?: boolean;
    motifRejet?: boolean;
    traitePar?: boolean;
    dateTraitement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VerificationDocumentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proprietaireId" | "typePiece" | "pieceIdentiteRecto" | "pieceIdentiteVerso" | "selfie" | "conditionsAcceptees" | "motifRejet" | "traitePar" | "dateTraitement" | "createdAt" | "updatedAt", ExtArgs["result"]["verificationDocuments"]>;
export type VerificationDocumentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type VerificationDocumentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type VerificationDocumentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $VerificationDocumentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VerificationDocuments";
    objects: {
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        proprietaireId: string;
        typePiece: string;
        pieceIdentiteRecto: string | null;
        pieceIdentiteVerso: string | null;
        selfie: string | null;
        conditionsAcceptees: boolean;
        motifRejet: string | null;
        traitePar: string | null;
        dateTraitement: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["verificationDocuments"]>;
    composites: {};
};
export type VerificationDocumentsGetPayload<S extends boolean | null | undefined | VerificationDocumentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload, S>;
export type VerificationDocumentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VerificationDocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VerificationDocumentsCountAggregateInputType | true;
};
export interface VerificationDocumentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VerificationDocuments'];
        meta: {
            name: 'VerificationDocuments';
        };
    };
    /**
     * Find zero or one VerificationDocuments that matches the filter.
     * @param {VerificationDocumentsFindUniqueArgs} args - Arguments to find a VerificationDocuments
     * @example
     * // Get one VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationDocumentsFindUniqueArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VerificationDocuments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationDocumentsFindUniqueOrThrowArgs} args - Arguments to find a VerificationDocuments
     * @example
     * // Get one VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationDocumentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VerificationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentsFindFirstArgs} args - Arguments to find a VerificationDocuments
     * @example
     * // Get one VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationDocumentsFindFirstArgs>(args?: Prisma.SelectSubset<T, VerificationDocumentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VerificationDocuments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentsFindFirstOrThrowArgs} args - Arguments to find a VerificationDocuments
     * @example
     * // Get one VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationDocumentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VerificationDocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VerificationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.findMany()
     *
     * // Get first 10 VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const verificationDocumentsWithIdOnly = await prisma.verificationDocuments.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VerificationDocumentsFindManyArgs>(args?: Prisma.SelectSubset<T, VerificationDocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VerificationDocuments.
     * @param {VerificationDocumentsCreateArgs} args - Arguments to create a VerificationDocuments.
     * @example
     * // Create one VerificationDocuments
     * const VerificationDocuments = await prisma.verificationDocuments.create({
     *   data: {
     *     // ... data to create a VerificationDocuments
     *   }
     * })
     *
     */
    create<T extends VerificationDocumentsCreateArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsCreateArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VerificationDocuments.
     * @param {VerificationDocumentsCreateManyArgs} args - Arguments to create many VerificationDocuments.
     * @example
     * // Create many VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VerificationDocumentsCreateManyArgs>(args?: Prisma.SelectSubset<T, VerificationDocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VerificationDocuments and returns the data saved in the database.
     * @param {VerificationDocumentsCreateManyAndReturnArgs} args - Arguments to create many VerificationDocuments.
     * @example
     * // Create many VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VerificationDocuments and only return the `id`
     * const verificationDocumentsWithIdOnly = await prisma.verificationDocuments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VerificationDocumentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VerificationDocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VerificationDocuments.
     * @param {VerificationDocumentsDeleteArgs} args - Arguments to delete one VerificationDocuments.
     * @example
     * // Delete one VerificationDocuments
     * const VerificationDocuments = await prisma.verificationDocuments.delete({
     *   where: {
     *     // ... filter to delete one VerificationDocuments
     *   }
     * })
     *
     */
    delete<T extends VerificationDocumentsDeleteArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsDeleteArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VerificationDocuments.
     * @param {VerificationDocumentsUpdateArgs} args - Arguments to update one VerificationDocuments.
     * @example
     * // Update one VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VerificationDocumentsUpdateArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsUpdateArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VerificationDocuments.
     * @param {VerificationDocumentsDeleteManyArgs} args - Arguments to filter VerificationDocuments to delete.
     * @example
     * // Delete a few VerificationDocuments
     * const { count } = await prisma.verificationDocuments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VerificationDocumentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, VerificationDocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VerificationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VerificationDocumentsUpdateManyArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VerificationDocuments and returns the data updated in the database.
     * @param {VerificationDocumentsUpdateManyAndReturnArgs} args - Arguments to update many VerificationDocuments.
     * @example
     * // Update many VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VerificationDocuments and only return the `id`
     * const verificationDocumentsWithIdOnly = await prisma.verificationDocuments.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationDocumentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VerificationDocuments.
     * @param {VerificationDocumentsUpsertArgs} args - Arguments to update or create a VerificationDocuments.
     * @example
     * // Update or create a VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocuments.upsert({
     *   create: {
     *     // ... data to create a VerificationDocuments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationDocuments we want to update
     *   }
     * })
     */
    upsert<T extends VerificationDocumentsUpsertArgs>(args: Prisma.SelectSubset<T, VerificationDocumentsUpsertArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VerificationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentsCountArgs} args - Arguments to filter VerificationDocuments to count.
     * @example
     * // Count the number of VerificationDocuments
     * const count = await prisma.verificationDocuments.count({
     *   where: {
     *     // ... the filter for the VerificationDocuments we want to count
     *   }
     * })
    **/
    count<T extends VerificationDocumentsCountArgs>(args?: Prisma.Subset<T, VerificationDocumentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VerificationDocumentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VerificationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationDocumentsAggregateArgs>(args: Prisma.Subset<T, VerificationDocumentsAggregateArgs>): Prisma.PrismaPromise<GetVerificationDocumentsAggregateType<T>>;
    /**
     * Group by VerificationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VerificationDocumentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VerificationDocumentsGroupByArgs['orderBy'];
    } : {
        orderBy?: VerificationDocumentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VerificationDocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VerificationDocuments model
     */
    readonly fields: VerificationDocumentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VerificationDocuments.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VerificationDocumentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the VerificationDocuments model
 */
export interface VerificationDocumentsFieldRefs {
    readonly id: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly typePiece: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly pieceIdentiteRecto: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly pieceIdentiteVerso: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly selfie: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly conditionsAcceptees: Prisma.FieldRef<"VerificationDocuments", 'Boolean'>;
    readonly motifRejet: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly traitePar: Prisma.FieldRef<"VerificationDocuments", 'String'>;
    readonly dateTraitement: Prisma.FieldRef<"VerificationDocuments", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"VerificationDocuments", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"VerificationDocuments", 'DateTime'>;
}
/**
 * VerificationDocuments findUnique
 */
export type VerificationDocumentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * Filter, which VerificationDocuments to fetch.
     */
    where: Prisma.VerificationDocumentsWhereUniqueInput;
};
/**
 * VerificationDocuments findUniqueOrThrow
 */
export type VerificationDocumentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * Filter, which VerificationDocuments to fetch.
     */
    where: Prisma.VerificationDocumentsWhereUniqueInput;
};
/**
 * VerificationDocuments findFirst
 */
export type VerificationDocumentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * Filter, which VerificationDocuments to fetch.
     */
    where?: Prisma.VerificationDocumentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: Prisma.VerificationDocumentsOrderByWithRelationInput | Prisma.VerificationDocumentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationDocuments.
     */
    cursor?: Prisma.VerificationDocumentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationDocuments.
     */
    distinct?: Prisma.VerificationDocumentsScalarFieldEnum | Prisma.VerificationDocumentsScalarFieldEnum[];
};
/**
 * VerificationDocuments findFirstOrThrow
 */
export type VerificationDocumentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * Filter, which VerificationDocuments to fetch.
     */
    where?: Prisma.VerificationDocumentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: Prisma.VerificationDocumentsOrderByWithRelationInput | Prisma.VerificationDocumentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationDocuments.
     */
    cursor?: Prisma.VerificationDocumentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationDocuments.
     */
    distinct?: Prisma.VerificationDocumentsScalarFieldEnum | Prisma.VerificationDocumentsScalarFieldEnum[];
};
/**
 * VerificationDocuments findMany
 */
export type VerificationDocumentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * Filter, which VerificationDocuments to fetch.
     */
    where?: Prisma.VerificationDocumentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: Prisma.VerificationDocumentsOrderByWithRelationInput | Prisma.VerificationDocumentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VerificationDocuments.
     */
    cursor?: Prisma.VerificationDocumentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number;
    distinct?: Prisma.VerificationDocumentsScalarFieldEnum | Prisma.VerificationDocumentsScalarFieldEnum[];
};
/**
 * VerificationDocuments create
 */
export type VerificationDocumentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * The data needed to create a VerificationDocuments.
     */
    data: Prisma.XOR<Prisma.VerificationDocumentsCreateInput, Prisma.VerificationDocumentsUncheckedCreateInput>;
};
/**
 * VerificationDocuments createMany
 */
export type VerificationDocumentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationDocuments.
     */
    data: Prisma.VerificationDocumentsCreateManyInput | Prisma.VerificationDocumentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VerificationDocuments createManyAndReturn
 */
export type VerificationDocumentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * The data used to create many VerificationDocuments.
     */
    data: Prisma.VerificationDocumentsCreateManyInput | Prisma.VerificationDocumentsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * VerificationDocuments update
 */
export type VerificationDocumentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * The data needed to update a VerificationDocuments.
     */
    data: Prisma.XOR<Prisma.VerificationDocumentsUpdateInput, Prisma.VerificationDocumentsUncheckedUpdateInput>;
    /**
     * Choose, which VerificationDocuments to update.
     */
    where: Prisma.VerificationDocumentsWhereUniqueInput;
};
/**
 * VerificationDocuments updateMany
 */
export type VerificationDocumentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationDocuments.
     */
    data: Prisma.XOR<Prisma.VerificationDocumentsUpdateManyMutationInput, Prisma.VerificationDocumentsUncheckedUpdateManyInput>;
    /**
     * Filter which VerificationDocuments to update
     */
    where?: Prisma.VerificationDocumentsWhereInput;
    /**
     * Limit how many VerificationDocuments to update.
     */
    limit?: number;
};
/**
 * VerificationDocuments updateManyAndReturn
 */
export type VerificationDocumentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * The data used to update VerificationDocuments.
     */
    data: Prisma.XOR<Prisma.VerificationDocumentsUpdateManyMutationInput, Prisma.VerificationDocumentsUncheckedUpdateManyInput>;
    /**
     * Filter which VerificationDocuments to update
     */
    where?: Prisma.VerificationDocumentsWhereInput;
    /**
     * Limit how many VerificationDocuments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * VerificationDocuments upsert
 */
export type VerificationDocumentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * The filter to search for the VerificationDocuments to update in case it exists.
     */
    where: Prisma.VerificationDocumentsWhereUniqueInput;
    /**
     * In case the VerificationDocuments found by the `where` argument doesn't exist, create a new VerificationDocuments with this data.
     */
    create: Prisma.XOR<Prisma.VerificationDocumentsCreateInput, Prisma.VerificationDocumentsUncheckedCreateInput>;
    /**
     * In case the VerificationDocuments was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VerificationDocumentsUpdateInput, Prisma.VerificationDocumentsUncheckedUpdateInput>;
};
/**
 * VerificationDocuments delete
 */
export type VerificationDocumentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
    /**
     * Filter which VerificationDocuments to delete.
     */
    where: Prisma.VerificationDocumentsWhereUniqueInput;
};
/**
 * VerificationDocuments deleteMany
 */
export type VerificationDocumentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationDocuments to delete
     */
    where?: Prisma.VerificationDocumentsWhereInput;
    /**
     * Limit how many VerificationDocuments to delete.
     */
    limit?: number;
};
/**
 * VerificationDocuments without action
 */
export type VerificationDocumentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocuments
     */
    select?: Prisma.VerificationDocumentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationDocuments
     */
    omit?: Prisma.VerificationDocumentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VerificationDocumentsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=VerificationDocuments.d.ts.map