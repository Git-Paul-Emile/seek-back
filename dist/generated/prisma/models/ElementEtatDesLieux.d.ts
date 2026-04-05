import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ElementEtatDesLieux
 *
 */
export type ElementEtatDesLieuxModel = runtime.Types.Result.DefaultSelection<Prisma.$ElementEtatDesLieuxPayload>;
export type AggregateElementEtatDesLieux = {
    _count: ElementEtatDesLieuxCountAggregateOutputType | null;
    _min: ElementEtatDesLieuxMinAggregateOutputType | null;
    _max: ElementEtatDesLieuxMaxAggregateOutputType | null;
};
export type ElementEtatDesLieuxMinAggregateOutputType = {
    id: string | null;
    pieceId: string | null;
    nom: string | null;
    etat: $Enums.EtatElement | null;
    commentaire: string | null;
    estConteste: boolean | null;
    motifContestation: string | null;
    photoContestation: string | null;
    statutContestation: $Enums.StatutContestationElement | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ElementEtatDesLieuxMaxAggregateOutputType = {
    id: string | null;
    pieceId: string | null;
    nom: string | null;
    etat: $Enums.EtatElement | null;
    commentaire: string | null;
    estConteste: boolean | null;
    motifContestation: string | null;
    photoContestation: string | null;
    statutContestation: $Enums.StatutContestationElement | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ElementEtatDesLieuxCountAggregateOutputType = {
    id: number;
    pieceId: number;
    nom: number;
    etat: number;
    commentaire: number;
    photos: number;
    estConteste: number;
    motifContestation: number;
    photoContestation: number;
    statutContestation: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ElementEtatDesLieuxMinAggregateInputType = {
    id?: true;
    pieceId?: true;
    nom?: true;
    etat?: true;
    commentaire?: true;
    estConteste?: true;
    motifContestation?: true;
    photoContestation?: true;
    statutContestation?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ElementEtatDesLieuxMaxAggregateInputType = {
    id?: true;
    pieceId?: true;
    nom?: true;
    etat?: true;
    commentaire?: true;
    estConteste?: true;
    motifContestation?: true;
    photoContestation?: true;
    statutContestation?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ElementEtatDesLieuxCountAggregateInputType = {
    id?: true;
    pieceId?: true;
    nom?: true;
    etat?: true;
    commentaire?: true;
    photos?: true;
    estConteste?: true;
    motifContestation?: true;
    photoContestation?: true;
    statutContestation?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ElementEtatDesLieuxAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ElementEtatDesLieux to aggregate.
     */
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElementEtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.ElementEtatDesLieuxOrderByWithRelationInput | Prisma.ElementEtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElementEtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElementEtatDesLieuxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ElementEtatDesLieuxes
    **/
    _count?: true | ElementEtatDesLieuxCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ElementEtatDesLieuxMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ElementEtatDesLieuxMaxAggregateInputType;
};
export type GetElementEtatDesLieuxAggregateType<T extends ElementEtatDesLieuxAggregateArgs> = {
    [P in keyof T & keyof AggregateElementEtatDesLieux]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateElementEtatDesLieux[P]> : Prisma.GetScalarType<T[P], AggregateElementEtatDesLieux[P]>;
};
export type ElementEtatDesLieuxGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    orderBy?: Prisma.ElementEtatDesLieuxOrderByWithAggregationInput | Prisma.ElementEtatDesLieuxOrderByWithAggregationInput[];
    by: Prisma.ElementEtatDesLieuxScalarFieldEnum[] | Prisma.ElementEtatDesLieuxScalarFieldEnum;
    having?: Prisma.ElementEtatDesLieuxScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ElementEtatDesLieuxCountAggregateInputType | true;
    _min?: ElementEtatDesLieuxMinAggregateInputType;
    _max?: ElementEtatDesLieuxMaxAggregateInputType;
};
export type ElementEtatDesLieuxGroupByOutputType = {
    id: string;
    pieceId: string;
    nom: string;
    etat: $Enums.EtatElement;
    commentaire: string | null;
    photos: string[];
    estConteste: boolean;
    motifContestation: string | null;
    photoContestation: string | null;
    statutContestation: $Enums.StatutContestationElement | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ElementEtatDesLieuxCountAggregateOutputType | null;
    _min: ElementEtatDesLieuxMinAggregateOutputType | null;
    _max: ElementEtatDesLieuxMaxAggregateOutputType | null;
};
type GetElementEtatDesLieuxGroupByPayload<T extends ElementEtatDesLieuxGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ElementEtatDesLieuxGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ElementEtatDesLieuxGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ElementEtatDesLieuxGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ElementEtatDesLieuxGroupByOutputType[P]>;
}>>;
export type ElementEtatDesLieuxWhereInput = {
    AND?: Prisma.ElementEtatDesLieuxWhereInput | Prisma.ElementEtatDesLieuxWhereInput[];
    OR?: Prisma.ElementEtatDesLieuxWhereInput[];
    NOT?: Prisma.ElementEtatDesLieuxWhereInput | Prisma.ElementEtatDesLieuxWhereInput[];
    id?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    pieceId?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    nom?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    etat?: Prisma.EnumEtatElementFilter<"ElementEtatDesLieux"> | $Enums.EtatElement;
    commentaire?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    photos?: Prisma.StringNullableListFilter<"ElementEtatDesLieux">;
    estConteste?: Prisma.BoolFilter<"ElementEtatDesLieux"> | boolean;
    motifContestation?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    photoContestation?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    statutContestation?: Prisma.EnumStatutContestationElementNullableFilter<"ElementEtatDesLieux"> | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFilter<"ElementEtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ElementEtatDesLieux"> | Date | string;
    piece?: Prisma.XOR<Prisma.PieceEtatDesLieuxScalarRelationFilter, Prisma.PieceEtatDesLieuxWhereInput>;
};
export type ElementEtatDesLieuxOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pieceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    estConteste?: Prisma.SortOrder;
    motifContestation?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoContestation?: Prisma.SortOrderInput | Prisma.SortOrder;
    statutContestation?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    piece?: Prisma.PieceEtatDesLieuxOrderByWithRelationInput;
};
export type ElementEtatDesLieuxWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ElementEtatDesLieuxWhereInput | Prisma.ElementEtatDesLieuxWhereInput[];
    OR?: Prisma.ElementEtatDesLieuxWhereInput[];
    NOT?: Prisma.ElementEtatDesLieuxWhereInput | Prisma.ElementEtatDesLieuxWhereInput[];
    pieceId?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    nom?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    etat?: Prisma.EnumEtatElementFilter<"ElementEtatDesLieux"> | $Enums.EtatElement;
    commentaire?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    photos?: Prisma.StringNullableListFilter<"ElementEtatDesLieux">;
    estConteste?: Prisma.BoolFilter<"ElementEtatDesLieux"> | boolean;
    motifContestation?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    photoContestation?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    statutContestation?: Prisma.EnumStatutContestationElementNullableFilter<"ElementEtatDesLieux"> | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFilter<"ElementEtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ElementEtatDesLieux"> | Date | string;
    piece?: Prisma.XOR<Prisma.PieceEtatDesLieuxScalarRelationFilter, Prisma.PieceEtatDesLieuxWhereInput>;
}, "id">;
export type ElementEtatDesLieuxOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pieceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    estConteste?: Prisma.SortOrder;
    motifContestation?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoContestation?: Prisma.SortOrderInput | Prisma.SortOrder;
    statutContestation?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ElementEtatDesLieuxCountOrderByAggregateInput;
    _max?: Prisma.ElementEtatDesLieuxMaxOrderByAggregateInput;
    _min?: Prisma.ElementEtatDesLieuxMinOrderByAggregateInput;
};
export type ElementEtatDesLieuxScalarWhereWithAggregatesInput = {
    AND?: Prisma.ElementEtatDesLieuxScalarWhereWithAggregatesInput | Prisma.ElementEtatDesLieuxScalarWhereWithAggregatesInput[];
    OR?: Prisma.ElementEtatDesLieuxScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ElementEtatDesLieuxScalarWhereWithAggregatesInput | Prisma.ElementEtatDesLieuxScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ElementEtatDesLieux"> | string;
    pieceId?: Prisma.StringWithAggregatesFilter<"ElementEtatDesLieux"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"ElementEtatDesLieux"> | string;
    etat?: Prisma.EnumEtatElementWithAggregatesFilter<"ElementEtatDesLieux"> | $Enums.EtatElement;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"ElementEtatDesLieux"> | string | null;
    photos?: Prisma.StringNullableListFilter<"ElementEtatDesLieux">;
    estConteste?: Prisma.BoolWithAggregatesFilter<"ElementEtatDesLieux"> | boolean;
    motifContestation?: Prisma.StringNullableWithAggregatesFilter<"ElementEtatDesLieux"> | string | null;
    photoContestation?: Prisma.StringNullableWithAggregatesFilter<"ElementEtatDesLieux"> | string | null;
    statutContestation?: Prisma.EnumStatutContestationElementNullableWithAggregatesFilter<"ElementEtatDesLieux"> | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ElementEtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ElementEtatDesLieux"> | Date | string;
};
export type ElementEtatDesLieuxCreateInput = {
    id?: string;
    nom: string;
    etat: $Enums.EtatElement;
    commentaire?: string | null;
    photos?: Prisma.ElementEtatDesLieuxCreatephotosInput | string[];
    estConteste?: boolean;
    motifContestation?: string | null;
    photoContestation?: string | null;
    statutContestation?: $Enums.StatutContestationElement | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    piece: Prisma.PieceEtatDesLieuxCreateNestedOneWithoutElementsInput;
};
export type ElementEtatDesLieuxUncheckedCreateInput = {
    id?: string;
    pieceId: string;
    nom: string;
    etat: $Enums.EtatElement;
    commentaire?: string | null;
    photos?: Prisma.ElementEtatDesLieuxCreatephotosInput | string[];
    estConteste?: boolean;
    motifContestation?: string | null;
    photoContestation?: string | null;
    statutContestation?: $Enums.StatutContestationElement | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementEtatDesLieuxUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photos?: Prisma.ElementEtatDesLieuxUpdatephotosInput | string[];
    estConteste?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutContestation?: Prisma.NullableEnumStatutContestationElementFieldUpdateOperationsInput | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    piece?: Prisma.PieceEtatDesLieuxUpdateOneRequiredWithoutElementsNestedInput;
};
export type ElementEtatDesLieuxUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photos?: Prisma.ElementEtatDesLieuxUpdatephotosInput | string[];
    estConteste?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutContestation?: Prisma.NullableEnumStatutContestationElementFieldUpdateOperationsInput | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementEtatDesLieuxCreateManyInput = {
    id?: string;
    pieceId: string;
    nom: string;
    etat: $Enums.EtatElement;
    commentaire?: string | null;
    photos?: Prisma.ElementEtatDesLieuxCreatephotosInput | string[];
    estConteste?: boolean;
    motifContestation?: string | null;
    photoContestation?: string | null;
    statutContestation?: $Enums.StatutContestationElement | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementEtatDesLieuxUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photos?: Prisma.ElementEtatDesLieuxUpdatephotosInput | string[];
    estConteste?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutContestation?: Prisma.NullableEnumStatutContestationElementFieldUpdateOperationsInput | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementEtatDesLieuxUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pieceId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photos?: Prisma.ElementEtatDesLieuxUpdatephotosInput | string[];
    estConteste?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutContestation?: Prisma.NullableEnumStatutContestationElementFieldUpdateOperationsInput | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementEtatDesLieuxListRelationFilter = {
    every?: Prisma.ElementEtatDesLieuxWhereInput;
    some?: Prisma.ElementEtatDesLieuxWhereInput;
    none?: Prisma.ElementEtatDesLieuxWhereInput;
};
export type ElementEtatDesLieuxOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ElementEtatDesLieuxCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pieceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    estConteste?: Prisma.SortOrder;
    motifContestation?: Prisma.SortOrder;
    photoContestation?: Prisma.SortOrder;
    statutContestation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ElementEtatDesLieuxMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pieceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    estConteste?: Prisma.SortOrder;
    motifContestation?: Prisma.SortOrder;
    photoContestation?: Prisma.SortOrder;
    statutContestation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ElementEtatDesLieuxMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pieceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    estConteste?: Prisma.SortOrder;
    motifContestation?: Prisma.SortOrder;
    photoContestation?: Prisma.SortOrder;
    statutContestation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ElementEtatDesLieuxCreateNestedManyWithoutPieceInput = {
    create?: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput> | Prisma.ElementEtatDesLieuxCreateWithoutPieceInput[] | Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput[];
    connectOrCreate?: Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput | Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput[];
    createMany?: Prisma.ElementEtatDesLieuxCreateManyPieceInputEnvelope;
    connect?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
};
export type ElementEtatDesLieuxUncheckedCreateNestedManyWithoutPieceInput = {
    create?: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput> | Prisma.ElementEtatDesLieuxCreateWithoutPieceInput[] | Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput[];
    connectOrCreate?: Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput | Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput[];
    createMany?: Prisma.ElementEtatDesLieuxCreateManyPieceInputEnvelope;
    connect?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
};
export type ElementEtatDesLieuxUpdateManyWithoutPieceNestedInput = {
    create?: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput> | Prisma.ElementEtatDesLieuxCreateWithoutPieceInput[] | Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput[];
    connectOrCreate?: Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput | Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput[];
    upsert?: Prisma.ElementEtatDesLieuxUpsertWithWhereUniqueWithoutPieceInput | Prisma.ElementEtatDesLieuxUpsertWithWhereUniqueWithoutPieceInput[];
    createMany?: Prisma.ElementEtatDesLieuxCreateManyPieceInputEnvelope;
    set?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    update?: Prisma.ElementEtatDesLieuxUpdateWithWhereUniqueWithoutPieceInput | Prisma.ElementEtatDesLieuxUpdateWithWhereUniqueWithoutPieceInput[];
    updateMany?: Prisma.ElementEtatDesLieuxUpdateManyWithWhereWithoutPieceInput | Prisma.ElementEtatDesLieuxUpdateManyWithWhereWithoutPieceInput[];
    deleteMany?: Prisma.ElementEtatDesLieuxScalarWhereInput | Prisma.ElementEtatDesLieuxScalarWhereInput[];
};
export type ElementEtatDesLieuxUncheckedUpdateManyWithoutPieceNestedInput = {
    create?: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput> | Prisma.ElementEtatDesLieuxCreateWithoutPieceInput[] | Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput[];
    connectOrCreate?: Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput | Prisma.ElementEtatDesLieuxCreateOrConnectWithoutPieceInput[];
    upsert?: Prisma.ElementEtatDesLieuxUpsertWithWhereUniqueWithoutPieceInput | Prisma.ElementEtatDesLieuxUpsertWithWhereUniqueWithoutPieceInput[];
    createMany?: Prisma.ElementEtatDesLieuxCreateManyPieceInputEnvelope;
    set?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    disconnect?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    delete?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    connect?: Prisma.ElementEtatDesLieuxWhereUniqueInput | Prisma.ElementEtatDesLieuxWhereUniqueInput[];
    update?: Prisma.ElementEtatDesLieuxUpdateWithWhereUniqueWithoutPieceInput | Prisma.ElementEtatDesLieuxUpdateWithWhereUniqueWithoutPieceInput[];
    updateMany?: Prisma.ElementEtatDesLieuxUpdateManyWithWhereWithoutPieceInput | Prisma.ElementEtatDesLieuxUpdateManyWithWhereWithoutPieceInput[];
    deleteMany?: Prisma.ElementEtatDesLieuxScalarWhereInput | Prisma.ElementEtatDesLieuxScalarWhereInput[];
};
export type ElementEtatDesLieuxCreatephotosInput = {
    set: string[];
};
export type EnumEtatElementFieldUpdateOperationsInput = {
    set?: $Enums.EtatElement;
};
export type ElementEtatDesLieuxUpdatephotosInput = {
    set?: string[];
    push?: string | string[];
};
export type NullableEnumStatutContestationElementFieldUpdateOperationsInput = {
    set?: $Enums.StatutContestationElement | null;
};
export type ElementEtatDesLieuxCreateWithoutPieceInput = {
    id?: string;
    nom: string;
    etat: $Enums.EtatElement;
    commentaire?: string | null;
    photos?: Prisma.ElementEtatDesLieuxCreatephotosInput | string[];
    estConteste?: boolean;
    motifContestation?: string | null;
    photoContestation?: string | null;
    statutContestation?: $Enums.StatutContestationElement | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementEtatDesLieuxUncheckedCreateWithoutPieceInput = {
    id?: string;
    nom: string;
    etat: $Enums.EtatElement;
    commentaire?: string | null;
    photos?: Prisma.ElementEtatDesLieuxCreatephotosInput | string[];
    estConteste?: boolean;
    motifContestation?: string | null;
    photoContestation?: string | null;
    statutContestation?: $Enums.StatutContestationElement | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementEtatDesLieuxCreateOrConnectWithoutPieceInput = {
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    create: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput>;
};
export type ElementEtatDesLieuxCreateManyPieceInputEnvelope = {
    data: Prisma.ElementEtatDesLieuxCreateManyPieceInput | Prisma.ElementEtatDesLieuxCreateManyPieceInput[];
    skipDuplicates?: boolean;
};
export type ElementEtatDesLieuxUpsertWithWhereUniqueWithoutPieceInput = {
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    update: Prisma.XOR<Prisma.ElementEtatDesLieuxUpdateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedUpdateWithoutPieceInput>;
    create: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedCreateWithoutPieceInput>;
};
export type ElementEtatDesLieuxUpdateWithWhereUniqueWithoutPieceInput = {
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    data: Prisma.XOR<Prisma.ElementEtatDesLieuxUpdateWithoutPieceInput, Prisma.ElementEtatDesLieuxUncheckedUpdateWithoutPieceInput>;
};
export type ElementEtatDesLieuxUpdateManyWithWhereWithoutPieceInput = {
    where: Prisma.ElementEtatDesLieuxScalarWhereInput;
    data: Prisma.XOR<Prisma.ElementEtatDesLieuxUpdateManyMutationInput, Prisma.ElementEtatDesLieuxUncheckedUpdateManyWithoutPieceInput>;
};
export type ElementEtatDesLieuxScalarWhereInput = {
    AND?: Prisma.ElementEtatDesLieuxScalarWhereInput | Prisma.ElementEtatDesLieuxScalarWhereInput[];
    OR?: Prisma.ElementEtatDesLieuxScalarWhereInput[];
    NOT?: Prisma.ElementEtatDesLieuxScalarWhereInput | Prisma.ElementEtatDesLieuxScalarWhereInput[];
    id?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    pieceId?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    nom?: Prisma.StringFilter<"ElementEtatDesLieux"> | string;
    etat?: Prisma.EnumEtatElementFilter<"ElementEtatDesLieux"> | $Enums.EtatElement;
    commentaire?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    photos?: Prisma.StringNullableListFilter<"ElementEtatDesLieux">;
    estConteste?: Prisma.BoolFilter<"ElementEtatDesLieux"> | boolean;
    motifContestation?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    photoContestation?: Prisma.StringNullableFilter<"ElementEtatDesLieux"> | string | null;
    statutContestation?: Prisma.EnumStatutContestationElementNullableFilter<"ElementEtatDesLieux"> | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFilter<"ElementEtatDesLieux"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ElementEtatDesLieux"> | Date | string;
};
export type ElementEtatDesLieuxCreateManyPieceInput = {
    id?: string;
    nom: string;
    etat: $Enums.EtatElement;
    commentaire?: string | null;
    photos?: Prisma.ElementEtatDesLieuxCreatephotosInput | string[];
    estConteste?: boolean;
    motifContestation?: string | null;
    photoContestation?: string | null;
    statutContestation?: $Enums.StatutContestationElement | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementEtatDesLieuxUpdateWithoutPieceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photos?: Prisma.ElementEtatDesLieuxUpdatephotosInput | string[];
    estConteste?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutContestation?: Prisma.NullableEnumStatutContestationElementFieldUpdateOperationsInput | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementEtatDesLieuxUncheckedUpdateWithoutPieceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photos?: Prisma.ElementEtatDesLieuxUpdatephotosInput | string[];
    estConteste?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutContestation?: Prisma.NullableEnumStatutContestationElementFieldUpdateOperationsInput | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementEtatDesLieuxUncheckedUpdateManyWithoutPieceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photos?: Prisma.ElementEtatDesLieuxUpdatephotosInput | string[];
    estConteste?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoContestation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutContestation?: Prisma.NullableEnumStatutContestationElementFieldUpdateOperationsInput | $Enums.StatutContestationElement | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementEtatDesLieuxSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pieceId?: boolean;
    nom?: boolean;
    etat?: boolean;
    commentaire?: boolean;
    photos?: boolean;
    estConteste?: boolean;
    motifContestation?: boolean;
    photoContestation?: boolean;
    statutContestation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    piece?: boolean | Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["elementEtatDesLieux"]>;
export type ElementEtatDesLieuxSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pieceId?: boolean;
    nom?: boolean;
    etat?: boolean;
    commentaire?: boolean;
    photos?: boolean;
    estConteste?: boolean;
    motifContestation?: boolean;
    photoContestation?: boolean;
    statutContestation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    piece?: boolean | Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["elementEtatDesLieux"]>;
export type ElementEtatDesLieuxSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pieceId?: boolean;
    nom?: boolean;
    etat?: boolean;
    commentaire?: boolean;
    photos?: boolean;
    estConteste?: boolean;
    motifContestation?: boolean;
    photoContestation?: boolean;
    statutContestation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    piece?: boolean | Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["elementEtatDesLieux"]>;
export type ElementEtatDesLieuxSelectScalar = {
    id?: boolean;
    pieceId?: boolean;
    nom?: boolean;
    etat?: boolean;
    commentaire?: boolean;
    photos?: boolean;
    estConteste?: boolean;
    motifContestation?: boolean;
    photoContestation?: boolean;
    statutContestation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ElementEtatDesLieuxOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pieceId" | "nom" | "etat" | "commentaire" | "photos" | "estConteste" | "motifContestation" | "photoContestation" | "statutContestation" | "createdAt" | "updatedAt", ExtArgs["result"]["elementEtatDesLieux"]>;
export type ElementEtatDesLieuxInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    piece?: boolean | Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs>;
};
export type ElementEtatDesLieuxIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    piece?: boolean | Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs>;
};
export type ElementEtatDesLieuxIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    piece?: boolean | Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs>;
};
export type $ElementEtatDesLieuxPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ElementEtatDesLieux";
    objects: {
        piece: Prisma.$PieceEtatDesLieuxPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        pieceId: string;
        nom: string;
        etat: $Enums.EtatElement;
        commentaire: string | null;
        photos: string[];
        estConteste: boolean;
        motifContestation: string | null;
        photoContestation: string | null;
        statutContestation: $Enums.StatutContestationElement | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["elementEtatDesLieux"]>;
    composites: {};
};
export type ElementEtatDesLieuxGetPayload<S extends boolean | null | undefined | ElementEtatDesLieuxDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload, S>;
export type ElementEtatDesLieuxCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ElementEtatDesLieuxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ElementEtatDesLieuxCountAggregateInputType | true;
};
export interface ElementEtatDesLieuxDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ElementEtatDesLieux'];
        meta: {
            name: 'ElementEtatDesLieux';
        };
    };
    /**
     * Find zero or one ElementEtatDesLieux that matches the filter.
     * @param {ElementEtatDesLieuxFindUniqueArgs} args - Arguments to find a ElementEtatDesLieux
     * @example
     * // Get one ElementEtatDesLieux
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementEtatDesLieuxFindUniqueArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ElementEtatDesLieux that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementEtatDesLieuxFindUniqueOrThrowArgs} args - Arguments to find a ElementEtatDesLieux
     * @example
     * // Get one ElementEtatDesLieux
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementEtatDesLieuxFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ElementEtatDesLieux that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementEtatDesLieuxFindFirstArgs} args - Arguments to find a ElementEtatDesLieux
     * @example
     * // Get one ElementEtatDesLieux
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementEtatDesLieuxFindFirstArgs>(args?: Prisma.SelectSubset<T, ElementEtatDesLieuxFindFirstArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ElementEtatDesLieux that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementEtatDesLieuxFindFirstOrThrowArgs} args - Arguments to find a ElementEtatDesLieux
     * @example
     * // Get one ElementEtatDesLieux
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementEtatDesLieuxFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ElementEtatDesLieuxFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ElementEtatDesLieuxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementEtatDesLieuxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElementEtatDesLieuxes
     * const elementEtatDesLieuxes = await prisma.elementEtatDesLieux.findMany()
     *
     * // Get first 10 ElementEtatDesLieuxes
     * const elementEtatDesLieuxes = await prisma.elementEtatDesLieux.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const elementEtatDesLieuxWithIdOnly = await prisma.elementEtatDesLieux.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ElementEtatDesLieuxFindManyArgs>(args?: Prisma.SelectSubset<T, ElementEtatDesLieuxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ElementEtatDesLieux.
     * @param {ElementEtatDesLieuxCreateArgs} args - Arguments to create a ElementEtatDesLieux.
     * @example
     * // Create one ElementEtatDesLieux
     * const ElementEtatDesLieux = await prisma.elementEtatDesLieux.create({
     *   data: {
     *     // ... data to create a ElementEtatDesLieux
     *   }
     * })
     *
     */
    create<T extends ElementEtatDesLieuxCreateArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxCreateArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ElementEtatDesLieuxes.
     * @param {ElementEtatDesLieuxCreateManyArgs} args - Arguments to create many ElementEtatDesLieuxes.
     * @example
     * // Create many ElementEtatDesLieuxes
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ElementEtatDesLieuxCreateManyArgs>(args?: Prisma.SelectSubset<T, ElementEtatDesLieuxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ElementEtatDesLieuxes and returns the data saved in the database.
     * @param {ElementEtatDesLieuxCreateManyAndReturnArgs} args - Arguments to create many ElementEtatDesLieuxes.
     * @example
     * // Create many ElementEtatDesLieuxes
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ElementEtatDesLieuxes and only return the `id`
     * const elementEtatDesLieuxWithIdOnly = await prisma.elementEtatDesLieux.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ElementEtatDesLieuxCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ElementEtatDesLieuxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ElementEtatDesLieux.
     * @param {ElementEtatDesLieuxDeleteArgs} args - Arguments to delete one ElementEtatDesLieux.
     * @example
     * // Delete one ElementEtatDesLieux
     * const ElementEtatDesLieux = await prisma.elementEtatDesLieux.delete({
     *   where: {
     *     // ... filter to delete one ElementEtatDesLieux
     *   }
     * })
     *
     */
    delete<T extends ElementEtatDesLieuxDeleteArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxDeleteArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ElementEtatDesLieux.
     * @param {ElementEtatDesLieuxUpdateArgs} args - Arguments to update one ElementEtatDesLieux.
     * @example
     * // Update one ElementEtatDesLieux
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ElementEtatDesLieuxUpdateArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxUpdateArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ElementEtatDesLieuxes.
     * @param {ElementEtatDesLieuxDeleteManyArgs} args - Arguments to filter ElementEtatDesLieuxes to delete.
     * @example
     * // Delete a few ElementEtatDesLieuxes
     * const { count } = await prisma.elementEtatDesLieux.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ElementEtatDesLieuxDeleteManyArgs>(args?: Prisma.SelectSubset<T, ElementEtatDesLieuxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ElementEtatDesLieuxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementEtatDesLieuxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElementEtatDesLieuxes
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ElementEtatDesLieuxUpdateManyArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ElementEtatDesLieuxes and returns the data updated in the database.
     * @param {ElementEtatDesLieuxUpdateManyAndReturnArgs} args - Arguments to update many ElementEtatDesLieuxes.
     * @example
     * // Update many ElementEtatDesLieuxes
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ElementEtatDesLieuxes and only return the `id`
     * const elementEtatDesLieuxWithIdOnly = await prisma.elementEtatDesLieux.updateManyAndReturn({
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
    updateManyAndReturn<T extends ElementEtatDesLieuxUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ElementEtatDesLieux.
     * @param {ElementEtatDesLieuxUpsertArgs} args - Arguments to update or create a ElementEtatDesLieux.
     * @example
     * // Update or create a ElementEtatDesLieux
     * const elementEtatDesLieux = await prisma.elementEtatDesLieux.upsert({
     *   create: {
     *     // ... data to create a ElementEtatDesLieux
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElementEtatDesLieux we want to update
     *   }
     * })
     */
    upsert<T extends ElementEtatDesLieuxUpsertArgs>(args: Prisma.SelectSubset<T, ElementEtatDesLieuxUpsertArgs<ExtArgs>>): Prisma.Prisma__ElementEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$ElementEtatDesLieuxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ElementEtatDesLieuxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementEtatDesLieuxCountArgs} args - Arguments to filter ElementEtatDesLieuxes to count.
     * @example
     * // Count the number of ElementEtatDesLieuxes
     * const count = await prisma.elementEtatDesLieux.count({
     *   where: {
     *     // ... the filter for the ElementEtatDesLieuxes we want to count
     *   }
     * })
    **/
    count<T extends ElementEtatDesLieuxCountArgs>(args?: Prisma.Subset<T, ElementEtatDesLieuxCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ElementEtatDesLieuxCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ElementEtatDesLieux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementEtatDesLieuxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElementEtatDesLieuxAggregateArgs>(args: Prisma.Subset<T, ElementEtatDesLieuxAggregateArgs>): Prisma.PrismaPromise<GetElementEtatDesLieuxAggregateType<T>>;
    /**
     * Group by ElementEtatDesLieux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementEtatDesLieuxGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ElementEtatDesLieuxGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ElementEtatDesLieuxGroupByArgs['orderBy'];
    } : {
        orderBy?: ElementEtatDesLieuxGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ElementEtatDesLieuxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementEtatDesLieuxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ElementEtatDesLieux model
     */
    readonly fields: ElementEtatDesLieuxFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ElementEtatDesLieux.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ElementEtatDesLieuxClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    piece<T extends Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PieceEtatDesLieuxDefaultArgs<ExtArgs>>): Prisma.Prisma__PieceEtatDesLieuxClient<runtime.Types.Result.GetResult<Prisma.$PieceEtatDesLieuxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ElementEtatDesLieux model
 */
export interface ElementEtatDesLieuxFieldRefs {
    readonly id: Prisma.FieldRef<"ElementEtatDesLieux", 'String'>;
    readonly pieceId: Prisma.FieldRef<"ElementEtatDesLieux", 'String'>;
    readonly nom: Prisma.FieldRef<"ElementEtatDesLieux", 'String'>;
    readonly etat: Prisma.FieldRef<"ElementEtatDesLieux", 'EtatElement'>;
    readonly commentaire: Prisma.FieldRef<"ElementEtatDesLieux", 'String'>;
    readonly photos: Prisma.FieldRef<"ElementEtatDesLieux", 'String[]'>;
    readonly estConteste: Prisma.FieldRef<"ElementEtatDesLieux", 'Boolean'>;
    readonly motifContestation: Prisma.FieldRef<"ElementEtatDesLieux", 'String'>;
    readonly photoContestation: Prisma.FieldRef<"ElementEtatDesLieux", 'String'>;
    readonly statutContestation: Prisma.FieldRef<"ElementEtatDesLieux", 'StatutContestationElement'>;
    readonly createdAt: Prisma.FieldRef<"ElementEtatDesLieux", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ElementEtatDesLieux", 'DateTime'>;
}
/**
 * ElementEtatDesLieux findUnique
 */
export type ElementEtatDesLieuxFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which ElementEtatDesLieux to fetch.
     */
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
};
/**
 * ElementEtatDesLieux findUniqueOrThrow
 */
export type ElementEtatDesLieuxFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which ElementEtatDesLieux to fetch.
     */
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
};
/**
 * ElementEtatDesLieux findFirst
 */
export type ElementEtatDesLieuxFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which ElementEtatDesLieux to fetch.
     */
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElementEtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.ElementEtatDesLieuxOrderByWithRelationInput | Prisma.ElementEtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ElementEtatDesLieuxes.
     */
    cursor?: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElementEtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElementEtatDesLieuxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ElementEtatDesLieuxes.
     */
    distinct?: Prisma.ElementEtatDesLieuxScalarFieldEnum | Prisma.ElementEtatDesLieuxScalarFieldEnum[];
};
/**
 * ElementEtatDesLieux findFirstOrThrow
 */
export type ElementEtatDesLieuxFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which ElementEtatDesLieux to fetch.
     */
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElementEtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.ElementEtatDesLieuxOrderByWithRelationInput | Prisma.ElementEtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ElementEtatDesLieuxes.
     */
    cursor?: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElementEtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElementEtatDesLieuxes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ElementEtatDesLieuxes.
     */
    distinct?: Prisma.ElementEtatDesLieuxScalarFieldEnum | Prisma.ElementEtatDesLieuxScalarFieldEnum[];
};
/**
 * ElementEtatDesLieux findMany
 */
export type ElementEtatDesLieuxFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter, which ElementEtatDesLieuxes to fetch.
     */
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ElementEtatDesLieuxes to fetch.
     */
    orderBy?: Prisma.ElementEtatDesLieuxOrderByWithRelationInput | Prisma.ElementEtatDesLieuxOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ElementEtatDesLieuxes.
     */
    cursor?: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ElementEtatDesLieuxes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ElementEtatDesLieuxes.
     */
    skip?: number;
    distinct?: Prisma.ElementEtatDesLieuxScalarFieldEnum | Prisma.ElementEtatDesLieuxScalarFieldEnum[];
};
/**
 * ElementEtatDesLieux create
 */
export type ElementEtatDesLieuxCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * The data needed to create a ElementEtatDesLieux.
     */
    data: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateInput, Prisma.ElementEtatDesLieuxUncheckedCreateInput>;
};
/**
 * ElementEtatDesLieux createMany
 */
export type ElementEtatDesLieuxCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElementEtatDesLieuxes.
     */
    data: Prisma.ElementEtatDesLieuxCreateManyInput | Prisma.ElementEtatDesLieuxCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ElementEtatDesLieux createManyAndReturn
 */
export type ElementEtatDesLieuxCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * The data used to create many ElementEtatDesLieuxes.
     */
    data: Prisma.ElementEtatDesLieuxCreateManyInput | Prisma.ElementEtatDesLieuxCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ElementEtatDesLieux update
 */
export type ElementEtatDesLieuxUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * The data needed to update a ElementEtatDesLieux.
     */
    data: Prisma.XOR<Prisma.ElementEtatDesLieuxUpdateInput, Prisma.ElementEtatDesLieuxUncheckedUpdateInput>;
    /**
     * Choose, which ElementEtatDesLieux to update.
     */
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
};
/**
 * ElementEtatDesLieux updateMany
 */
export type ElementEtatDesLieuxUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ElementEtatDesLieuxes.
     */
    data: Prisma.XOR<Prisma.ElementEtatDesLieuxUpdateManyMutationInput, Prisma.ElementEtatDesLieuxUncheckedUpdateManyInput>;
    /**
     * Filter which ElementEtatDesLieuxes to update
     */
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    /**
     * Limit how many ElementEtatDesLieuxes to update.
     */
    limit?: number;
};
/**
 * ElementEtatDesLieux updateManyAndReturn
 */
export type ElementEtatDesLieuxUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * The data used to update ElementEtatDesLieuxes.
     */
    data: Prisma.XOR<Prisma.ElementEtatDesLieuxUpdateManyMutationInput, Prisma.ElementEtatDesLieuxUncheckedUpdateManyInput>;
    /**
     * Filter which ElementEtatDesLieuxes to update
     */
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    /**
     * Limit how many ElementEtatDesLieuxes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ElementEtatDesLieux upsert
 */
export type ElementEtatDesLieuxUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * The filter to search for the ElementEtatDesLieux to update in case it exists.
     */
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
    /**
     * In case the ElementEtatDesLieux found by the `where` argument doesn't exist, create a new ElementEtatDesLieux with this data.
     */
    create: Prisma.XOR<Prisma.ElementEtatDesLieuxCreateInput, Prisma.ElementEtatDesLieuxUncheckedCreateInput>;
    /**
     * In case the ElementEtatDesLieux was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ElementEtatDesLieuxUpdateInput, Prisma.ElementEtatDesLieuxUncheckedUpdateInput>;
};
/**
 * ElementEtatDesLieux delete
 */
export type ElementEtatDesLieuxDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
    /**
     * Filter which ElementEtatDesLieux to delete.
     */
    where: Prisma.ElementEtatDesLieuxWhereUniqueInput;
};
/**
 * ElementEtatDesLieux deleteMany
 */
export type ElementEtatDesLieuxDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ElementEtatDesLieuxes to delete
     */
    where?: Prisma.ElementEtatDesLieuxWhereInput;
    /**
     * Limit how many ElementEtatDesLieuxes to delete.
     */
    limit?: number;
};
/**
 * ElementEtatDesLieux without action
 */
export type ElementEtatDesLieuxDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElementEtatDesLieux
     */
    select?: Prisma.ElementEtatDesLieuxSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ElementEtatDesLieux
     */
    omit?: Prisma.ElementEtatDesLieuxOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ElementEtatDesLieuxInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ElementEtatDesLieux.d.ts.map