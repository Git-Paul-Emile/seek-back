import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DocumentBien
 *
 */
export type DocumentBienModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentBienPayload>;
export type AggregateDocumentBien = {
    _count: DocumentBienCountAggregateOutputType | null;
    _avg: DocumentBienAvgAggregateOutputType | null;
    _sum: DocumentBienSumAggregateOutputType | null;
    _min: DocumentBienMinAggregateOutputType | null;
    _max: DocumentBienMaxAggregateOutputType | null;
};
export type DocumentBienAvgAggregateOutputType = {
    taille: number | null;
};
export type DocumentBienSumAggregateOutputType = {
    taille: number | null;
};
export type DocumentBienMinAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    nom: string | null;
    type: string | null;
    url: string | null;
    taille: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentBienMaxAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    proprietaireId: string | null;
    nom: string | null;
    type: string | null;
    url: string | null;
    taille: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentBienCountAggregateOutputType = {
    id: number;
    bienId: number;
    proprietaireId: number;
    nom: number;
    type: number;
    url: number;
    taille: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DocumentBienAvgAggregateInputType = {
    taille?: true;
};
export type DocumentBienSumAggregateInputType = {
    taille?: true;
};
export type DocumentBienMinAggregateInputType = {
    id?: true;
    bienId?: true;
    proprietaireId?: true;
    nom?: true;
    type?: true;
    url?: true;
    taille?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentBienMaxAggregateInputType = {
    id?: true;
    bienId?: true;
    proprietaireId?: true;
    nom?: true;
    type?: true;
    url?: true;
    taille?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentBienCountAggregateInputType = {
    id?: true;
    bienId?: true;
    proprietaireId?: true;
    nom?: true;
    type?: true;
    url?: true;
    taille?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DocumentBienAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentBien to aggregate.
     */
    where?: Prisma.DocumentBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBiens to fetch.
     */
    orderBy?: Prisma.DocumentBienOrderByWithRelationInput | Prisma.DocumentBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DocumentBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBiens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DocumentBiens
    **/
    _count?: true | DocumentBienCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DocumentBienAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DocumentBienSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DocumentBienMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DocumentBienMaxAggregateInputType;
};
export type GetDocumentBienAggregateType<T extends DocumentBienAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentBien]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentBien[P]> : Prisma.GetScalarType<T[P], AggregateDocumentBien[P]>;
};
export type DocumentBienGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentBienWhereInput;
    orderBy?: Prisma.DocumentBienOrderByWithAggregationInput | Prisma.DocumentBienOrderByWithAggregationInput[];
    by: Prisma.DocumentBienScalarFieldEnum[] | Prisma.DocumentBienScalarFieldEnum;
    having?: Prisma.DocumentBienScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentBienCountAggregateInputType | true;
    _avg?: DocumentBienAvgAggregateInputType;
    _sum?: DocumentBienSumAggregateInputType;
    _min?: DocumentBienMinAggregateInputType;
    _max?: DocumentBienMaxAggregateInputType;
};
export type DocumentBienGroupByOutputType = {
    id: string;
    bienId: string;
    proprietaireId: string;
    nom: string;
    type: string;
    url: string;
    taille: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DocumentBienCountAggregateOutputType | null;
    _avg: DocumentBienAvgAggregateOutputType | null;
    _sum: DocumentBienSumAggregateOutputType | null;
    _min: DocumentBienMinAggregateOutputType | null;
    _max: DocumentBienMaxAggregateOutputType | null;
};
type GetDocumentBienGroupByPayload<T extends DocumentBienGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentBienGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentBienGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentBienGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentBienGroupByOutputType[P]>;
}>>;
export type DocumentBienWhereInput = {
    AND?: Prisma.DocumentBienWhereInput | Prisma.DocumentBienWhereInput[];
    OR?: Prisma.DocumentBienWhereInput[];
    NOT?: Prisma.DocumentBienWhereInput | Prisma.DocumentBienWhereInput[];
    id?: Prisma.StringFilter<"DocumentBien"> | string;
    bienId?: Prisma.StringFilter<"DocumentBien"> | string;
    proprietaireId?: Prisma.StringFilter<"DocumentBien"> | string;
    nom?: Prisma.StringFilter<"DocumentBien"> | string;
    type?: Prisma.StringFilter<"DocumentBien"> | string;
    url?: Prisma.StringFilter<"DocumentBien"> | string;
    taille?: Prisma.IntNullableFilter<"DocumentBien"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentBien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DocumentBien"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
};
export type DocumentBienOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    taille?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
};
export type DocumentBienWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DocumentBienWhereInput | Prisma.DocumentBienWhereInput[];
    OR?: Prisma.DocumentBienWhereInput[];
    NOT?: Prisma.DocumentBienWhereInput | Prisma.DocumentBienWhereInput[];
    bienId?: Prisma.StringFilter<"DocumentBien"> | string;
    proprietaireId?: Prisma.StringFilter<"DocumentBien"> | string;
    nom?: Prisma.StringFilter<"DocumentBien"> | string;
    type?: Prisma.StringFilter<"DocumentBien"> | string;
    url?: Prisma.StringFilter<"DocumentBien"> | string;
    taille?: Prisma.IntNullableFilter<"DocumentBien"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentBien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DocumentBien"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
}, "id">;
export type DocumentBienOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    taille?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentBienCountOrderByAggregateInput;
    _avg?: Prisma.DocumentBienAvgOrderByAggregateInput;
    _max?: Prisma.DocumentBienMaxOrderByAggregateInput;
    _min?: Prisma.DocumentBienMinOrderByAggregateInput;
    _sum?: Prisma.DocumentBienSumOrderByAggregateInput;
};
export type DocumentBienScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentBienScalarWhereWithAggregatesInput | Prisma.DocumentBienScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentBienScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentBienScalarWhereWithAggregatesInput | Prisma.DocumentBienScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DocumentBien"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"DocumentBien"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"DocumentBien"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"DocumentBien"> | string;
    type?: Prisma.StringWithAggregatesFilter<"DocumentBien"> | string;
    url?: Prisma.StringWithAggregatesFilter<"DocumentBien"> | string;
    taille?: Prisma.IntNullableWithAggregatesFilter<"DocumentBien"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DocumentBien"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DocumentBien"> | Date | string;
};
export type DocumentBienCreateInput = {
    id?: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutDocumentsInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutDocumentsBienInput;
};
export type DocumentBienUncheckedCreateInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBienUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutDocumentsNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutDocumentsBienNestedInput;
};
export type DocumentBienUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBienCreateManyInput = {
    id?: string;
    bienId: string;
    proprietaireId: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBienUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBienUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBienListRelationFilter = {
    every?: Prisma.DocumentBienWhereInput;
    some?: Prisma.DocumentBienWhereInput;
    none?: Prisma.DocumentBienWhereInput;
};
export type DocumentBienOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentBienCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    taille?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentBienAvgOrderByAggregateInput = {
    taille?: Prisma.SortOrder;
};
export type DocumentBienMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    taille?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentBienMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    taille?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentBienSumOrderByAggregateInput = {
    taille?: Prisma.SortOrder;
};
export type DocumentBienCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutBienInput, Prisma.DocumentBienUncheckedCreateWithoutBienInput> | Prisma.DocumentBienCreateWithoutBienInput[] | Prisma.DocumentBienUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutBienInput | Prisma.DocumentBienCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.DocumentBienCreateManyBienInputEnvelope;
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
};
export type DocumentBienUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutBienInput, Prisma.DocumentBienUncheckedCreateWithoutBienInput> | Prisma.DocumentBienCreateWithoutBienInput[] | Prisma.DocumentBienUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutBienInput | Prisma.DocumentBienCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.DocumentBienCreateManyBienInputEnvelope;
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
};
export type DocumentBienUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutBienInput, Prisma.DocumentBienUncheckedCreateWithoutBienInput> | Prisma.DocumentBienCreateWithoutBienInput[] | Prisma.DocumentBienUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutBienInput | Prisma.DocumentBienCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.DocumentBienUpsertWithWhereUniqueWithoutBienInput | Prisma.DocumentBienUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.DocumentBienCreateManyBienInputEnvelope;
    set?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    disconnect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    delete?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    update?: Prisma.DocumentBienUpdateWithWhereUniqueWithoutBienInput | Prisma.DocumentBienUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.DocumentBienUpdateManyWithWhereWithoutBienInput | Prisma.DocumentBienUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.DocumentBienScalarWhereInput | Prisma.DocumentBienScalarWhereInput[];
};
export type DocumentBienUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutBienInput, Prisma.DocumentBienUncheckedCreateWithoutBienInput> | Prisma.DocumentBienCreateWithoutBienInput[] | Prisma.DocumentBienUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutBienInput | Prisma.DocumentBienCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.DocumentBienUpsertWithWhereUniqueWithoutBienInput | Prisma.DocumentBienUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.DocumentBienCreateManyBienInputEnvelope;
    set?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    disconnect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    delete?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    update?: Prisma.DocumentBienUpdateWithWhereUniqueWithoutBienInput | Prisma.DocumentBienUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.DocumentBienUpdateManyWithWhereWithoutBienInput | Prisma.DocumentBienUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.DocumentBienScalarWhereInput | Prisma.DocumentBienScalarWhereInput[];
};
export type DocumentBienCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutProprietaireInput, Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput> | Prisma.DocumentBienCreateWithoutProprietaireInput[] | Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput | Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.DocumentBienCreateManyProprietaireInputEnvelope;
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
};
export type DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutProprietaireInput, Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput> | Prisma.DocumentBienCreateWithoutProprietaireInput[] | Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput | Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.DocumentBienCreateManyProprietaireInputEnvelope;
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
};
export type DocumentBienUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutProprietaireInput, Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput> | Prisma.DocumentBienCreateWithoutProprietaireInput[] | Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput | Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.DocumentBienUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.DocumentBienUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.DocumentBienCreateManyProprietaireInputEnvelope;
    set?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    disconnect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    delete?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    update?: Prisma.DocumentBienUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.DocumentBienUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.DocumentBienUpdateManyWithWhereWithoutProprietaireInput | Prisma.DocumentBienUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.DocumentBienScalarWhereInput | Prisma.DocumentBienScalarWhereInput[];
};
export type DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentBienCreateWithoutProprietaireInput, Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput> | Prisma.DocumentBienCreateWithoutProprietaireInput[] | Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput | Prisma.DocumentBienCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.DocumentBienUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.DocumentBienUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.DocumentBienCreateManyProprietaireInputEnvelope;
    set?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    disconnect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    delete?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    connect?: Prisma.DocumentBienWhereUniqueInput | Prisma.DocumentBienWhereUniqueInput[];
    update?: Prisma.DocumentBienUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.DocumentBienUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.DocumentBienUpdateManyWithWhereWithoutProprietaireInput | Prisma.DocumentBienUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.DocumentBienScalarWhereInput | Prisma.DocumentBienScalarWhereInput[];
};
export type DocumentBienCreateWithoutBienInput = {
    id?: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutDocumentsBienInput;
};
export type DocumentBienUncheckedCreateWithoutBienInput = {
    id?: string;
    proprietaireId: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBienCreateOrConnectWithoutBienInput = {
    where: Prisma.DocumentBienWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentBienCreateWithoutBienInput, Prisma.DocumentBienUncheckedCreateWithoutBienInput>;
};
export type DocumentBienCreateManyBienInputEnvelope = {
    data: Prisma.DocumentBienCreateManyBienInput | Prisma.DocumentBienCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type DocumentBienUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.DocumentBienWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentBienUpdateWithoutBienInput, Prisma.DocumentBienUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.DocumentBienCreateWithoutBienInput, Prisma.DocumentBienUncheckedCreateWithoutBienInput>;
};
export type DocumentBienUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.DocumentBienWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentBienUpdateWithoutBienInput, Prisma.DocumentBienUncheckedUpdateWithoutBienInput>;
};
export type DocumentBienUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.DocumentBienScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentBienUpdateManyMutationInput, Prisma.DocumentBienUncheckedUpdateManyWithoutBienInput>;
};
export type DocumentBienScalarWhereInput = {
    AND?: Prisma.DocumentBienScalarWhereInput | Prisma.DocumentBienScalarWhereInput[];
    OR?: Prisma.DocumentBienScalarWhereInput[];
    NOT?: Prisma.DocumentBienScalarWhereInput | Prisma.DocumentBienScalarWhereInput[];
    id?: Prisma.StringFilter<"DocumentBien"> | string;
    bienId?: Prisma.StringFilter<"DocumentBien"> | string;
    proprietaireId?: Prisma.StringFilter<"DocumentBien"> | string;
    nom?: Prisma.StringFilter<"DocumentBien"> | string;
    type?: Prisma.StringFilter<"DocumentBien"> | string;
    url?: Prisma.StringFilter<"DocumentBien"> | string;
    taille?: Prisma.IntNullableFilter<"DocumentBien"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentBien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DocumentBien"> | Date | string;
};
export type DocumentBienCreateWithoutProprietaireInput = {
    id?: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutDocumentsInput;
};
export type DocumentBienUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    bienId: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBienCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.DocumentBienWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentBienCreateWithoutProprietaireInput, Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput>;
};
export type DocumentBienCreateManyProprietaireInputEnvelope = {
    data: Prisma.DocumentBienCreateManyProprietaireInput | Prisma.DocumentBienCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type DocumentBienUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.DocumentBienWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentBienUpdateWithoutProprietaireInput, Prisma.DocumentBienUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.DocumentBienCreateWithoutProprietaireInput, Prisma.DocumentBienUncheckedCreateWithoutProprietaireInput>;
};
export type DocumentBienUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.DocumentBienWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentBienUpdateWithoutProprietaireInput, Prisma.DocumentBienUncheckedUpdateWithoutProprietaireInput>;
};
export type DocumentBienUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.DocumentBienScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentBienUpdateManyMutationInput, Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireInput>;
};
export type DocumentBienCreateManyBienInput = {
    id?: string;
    proprietaireId: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBienUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutDocumentsBienNestedInput;
};
export type DocumentBienUncheckedUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBienUncheckedUpdateManyWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBienCreateManyProprietaireInput = {
    id?: string;
    bienId: string;
    nom: string;
    type: string;
    url: string;
    taille?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentBienUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type DocumentBienUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBienUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentBienSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    type?: boolean;
    url?: boolean;
    taille?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentBien"]>;
export type DocumentBienSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    type?: boolean;
    url?: boolean;
    taille?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentBien"]>;
export type DocumentBienSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    type?: boolean;
    url?: boolean;
    taille?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentBien"]>;
export type DocumentBienSelectScalar = {
    id?: boolean;
    bienId?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    type?: boolean;
    url?: boolean;
    taille?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DocumentBienOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bienId" | "proprietaireId" | "nom" | "type" | "url" | "taille" | "createdAt" | "updatedAt", ExtArgs["result"]["documentBien"]>;
export type DocumentBienInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type DocumentBienIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type DocumentBienIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $DocumentBienPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentBien";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bienId: string;
        proprietaireId: string;
        nom: string;
        type: string;
        url: string;
        taille: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["documentBien"]>;
    composites: {};
};
export type DocumentBienGetPayload<S extends boolean | null | undefined | DocumentBienDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload, S>;
export type DocumentBienCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentBienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentBienCountAggregateInputType | true;
};
export interface DocumentBienDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentBien'];
        meta: {
            name: 'DocumentBien';
        };
    };
    /**
     * Find zero or one DocumentBien that matches the filter.
     * @param {DocumentBienFindUniqueArgs} args - Arguments to find a DocumentBien
     * @example
     * // Get one DocumentBien
     * const documentBien = await prisma.documentBien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentBienFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentBienFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DocumentBien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentBienFindUniqueOrThrowArgs} args - Arguments to find a DocumentBien
     * @example
     * // Get one DocumentBien
     * const documentBien = await prisma.documentBien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentBienFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentBienFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DocumentBien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBienFindFirstArgs} args - Arguments to find a DocumentBien
     * @example
     * // Get one DocumentBien
     * const documentBien = await prisma.documentBien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentBienFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentBienFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DocumentBien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBienFindFirstOrThrowArgs} args - Arguments to find a DocumentBien
     * @example
     * // Get one DocumentBien
     * const documentBien = await prisma.documentBien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentBienFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentBienFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DocumentBiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentBiens
     * const documentBiens = await prisma.documentBien.findMany()
     *
     * // Get first 10 DocumentBiens
     * const documentBiens = await prisma.documentBien.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const documentBienWithIdOnly = await prisma.documentBien.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DocumentBienFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentBienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DocumentBien.
     * @param {DocumentBienCreateArgs} args - Arguments to create a DocumentBien.
     * @example
     * // Create one DocumentBien
     * const DocumentBien = await prisma.documentBien.create({
     *   data: {
     *     // ... data to create a DocumentBien
     *   }
     * })
     *
     */
    create<T extends DocumentBienCreateArgs>(args: Prisma.SelectSubset<T, DocumentBienCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DocumentBiens.
     * @param {DocumentBienCreateManyArgs} args - Arguments to create many DocumentBiens.
     * @example
     * // Create many DocumentBiens
     * const documentBien = await prisma.documentBien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DocumentBienCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentBienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DocumentBiens and returns the data saved in the database.
     * @param {DocumentBienCreateManyAndReturnArgs} args - Arguments to create many DocumentBiens.
     * @example
     * // Create many DocumentBiens
     * const documentBien = await prisma.documentBien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DocumentBiens and only return the `id`
     * const documentBienWithIdOnly = await prisma.documentBien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DocumentBienCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentBienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DocumentBien.
     * @param {DocumentBienDeleteArgs} args - Arguments to delete one DocumentBien.
     * @example
     * // Delete one DocumentBien
     * const DocumentBien = await prisma.documentBien.delete({
     *   where: {
     *     // ... filter to delete one DocumentBien
     *   }
     * })
     *
     */
    delete<T extends DocumentBienDeleteArgs>(args: Prisma.SelectSubset<T, DocumentBienDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DocumentBien.
     * @param {DocumentBienUpdateArgs} args - Arguments to update one DocumentBien.
     * @example
     * // Update one DocumentBien
     * const documentBien = await prisma.documentBien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DocumentBienUpdateArgs>(args: Prisma.SelectSubset<T, DocumentBienUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DocumentBiens.
     * @param {DocumentBienDeleteManyArgs} args - Arguments to filter DocumentBiens to delete.
     * @example
     * // Delete a few DocumentBiens
     * const { count } = await prisma.documentBien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DocumentBienDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentBienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DocumentBiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentBiens
     * const documentBien = await prisma.documentBien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DocumentBienUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentBienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DocumentBiens and returns the data updated in the database.
     * @param {DocumentBienUpdateManyAndReturnArgs} args - Arguments to update many DocumentBiens.
     * @example
     * // Update many DocumentBiens
     * const documentBien = await prisma.documentBien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DocumentBiens and only return the `id`
     * const documentBienWithIdOnly = await prisma.documentBien.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentBienUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentBienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DocumentBien.
     * @param {DocumentBienUpsertArgs} args - Arguments to update or create a DocumentBien.
     * @example
     * // Update or create a DocumentBien
     * const documentBien = await prisma.documentBien.upsert({
     *   create: {
     *     // ... data to create a DocumentBien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentBien we want to update
     *   }
     * })
     */
    upsert<T extends DocumentBienUpsertArgs>(args: Prisma.SelectSubset<T, DocumentBienUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentBienClient<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DocumentBiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBienCountArgs} args - Arguments to filter DocumentBiens to count.
     * @example
     * // Count the number of DocumentBiens
     * const count = await prisma.documentBien.count({
     *   where: {
     *     // ... the filter for the DocumentBiens we want to count
     *   }
     * })
    **/
    count<T extends DocumentBienCountArgs>(args?: Prisma.Subset<T, DocumentBienCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentBienCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DocumentBien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentBienAggregateArgs>(args: Prisma.Subset<T, DocumentBienAggregateArgs>): Prisma.PrismaPromise<GetDocumentBienAggregateType<T>>;
    /**
     * Group by DocumentBien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentBienGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DocumentBienGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentBienGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentBienGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentBienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentBienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DocumentBien model
     */
    readonly fields: DocumentBienFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DocumentBien.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DocumentBienClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bien<T extends Prisma.BienDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BienDefaultArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the DocumentBien model
 */
export interface DocumentBienFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentBien", 'String'>;
    readonly bienId: Prisma.FieldRef<"DocumentBien", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"DocumentBien", 'String'>;
    readonly nom: Prisma.FieldRef<"DocumentBien", 'String'>;
    readonly type: Prisma.FieldRef<"DocumentBien", 'String'>;
    readonly url: Prisma.FieldRef<"DocumentBien", 'String'>;
    readonly taille: Prisma.FieldRef<"DocumentBien", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"DocumentBien", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DocumentBien", 'DateTime'>;
}
/**
 * DocumentBien findUnique
 */
export type DocumentBienFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBien to fetch.
     */
    where: Prisma.DocumentBienWhereUniqueInput;
};
/**
 * DocumentBien findUniqueOrThrow
 */
export type DocumentBienFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBien to fetch.
     */
    where: Prisma.DocumentBienWhereUniqueInput;
};
/**
 * DocumentBien findFirst
 */
export type DocumentBienFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBien to fetch.
     */
    where?: Prisma.DocumentBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBiens to fetch.
     */
    orderBy?: Prisma.DocumentBienOrderByWithRelationInput | Prisma.DocumentBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DocumentBiens.
     */
    cursor?: Prisma.DocumentBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBiens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DocumentBiens.
     */
    distinct?: Prisma.DocumentBienScalarFieldEnum | Prisma.DocumentBienScalarFieldEnum[];
};
/**
 * DocumentBien findFirstOrThrow
 */
export type DocumentBienFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBien to fetch.
     */
    where?: Prisma.DocumentBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBiens to fetch.
     */
    orderBy?: Prisma.DocumentBienOrderByWithRelationInput | Prisma.DocumentBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DocumentBiens.
     */
    cursor?: Prisma.DocumentBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBiens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DocumentBiens.
     */
    distinct?: Prisma.DocumentBienScalarFieldEnum | Prisma.DocumentBienScalarFieldEnum[];
};
/**
 * DocumentBien findMany
 */
export type DocumentBienFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentBiens to fetch.
     */
    where?: Prisma.DocumentBienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentBiens to fetch.
     */
    orderBy?: Prisma.DocumentBienOrderByWithRelationInput | Prisma.DocumentBienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DocumentBiens.
     */
    cursor?: Prisma.DocumentBienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentBiens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentBiens.
     */
    skip?: number;
    distinct?: Prisma.DocumentBienScalarFieldEnum | Prisma.DocumentBienScalarFieldEnum[];
};
/**
 * DocumentBien create
 */
export type DocumentBienCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * The data needed to create a DocumentBien.
     */
    data: Prisma.XOR<Prisma.DocumentBienCreateInput, Prisma.DocumentBienUncheckedCreateInput>;
};
/**
 * DocumentBien createMany
 */
export type DocumentBienCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentBiens.
     */
    data: Prisma.DocumentBienCreateManyInput | Prisma.DocumentBienCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DocumentBien createManyAndReturn
 */
export type DocumentBienCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * The data used to create many DocumentBiens.
     */
    data: Prisma.DocumentBienCreateManyInput | Prisma.DocumentBienCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DocumentBien update
 */
export type DocumentBienUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * The data needed to update a DocumentBien.
     */
    data: Prisma.XOR<Prisma.DocumentBienUpdateInput, Prisma.DocumentBienUncheckedUpdateInput>;
    /**
     * Choose, which DocumentBien to update.
     */
    where: Prisma.DocumentBienWhereUniqueInput;
};
/**
 * DocumentBien updateMany
 */
export type DocumentBienUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentBiens.
     */
    data: Prisma.XOR<Prisma.DocumentBienUpdateManyMutationInput, Prisma.DocumentBienUncheckedUpdateManyInput>;
    /**
     * Filter which DocumentBiens to update
     */
    where?: Prisma.DocumentBienWhereInput;
    /**
     * Limit how many DocumentBiens to update.
     */
    limit?: number;
};
/**
 * DocumentBien updateManyAndReturn
 */
export type DocumentBienUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * The data used to update DocumentBiens.
     */
    data: Prisma.XOR<Prisma.DocumentBienUpdateManyMutationInput, Prisma.DocumentBienUncheckedUpdateManyInput>;
    /**
     * Filter which DocumentBiens to update
     */
    where?: Prisma.DocumentBienWhereInput;
    /**
     * Limit how many DocumentBiens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DocumentBien upsert
 */
export type DocumentBienUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * The filter to search for the DocumentBien to update in case it exists.
     */
    where: Prisma.DocumentBienWhereUniqueInput;
    /**
     * In case the DocumentBien found by the `where` argument doesn't exist, create a new DocumentBien with this data.
     */
    create: Prisma.XOR<Prisma.DocumentBienCreateInput, Prisma.DocumentBienUncheckedCreateInput>;
    /**
     * In case the DocumentBien was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DocumentBienUpdateInput, Prisma.DocumentBienUncheckedUpdateInput>;
};
/**
 * DocumentBien delete
 */
export type DocumentBienDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
    /**
     * Filter which DocumentBien to delete.
     */
    where: Prisma.DocumentBienWhereUniqueInput;
};
/**
 * DocumentBien deleteMany
 */
export type DocumentBienDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentBiens to delete
     */
    where?: Prisma.DocumentBienWhereInput;
    /**
     * Limit how many DocumentBiens to delete.
     */
    limit?: number;
};
/**
 * DocumentBien without action
 */
export type DocumentBienDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentBien
     */
    select?: Prisma.DocumentBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentBien
     */
    omit?: Prisma.DocumentBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentBienInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DocumentBien.d.ts.map