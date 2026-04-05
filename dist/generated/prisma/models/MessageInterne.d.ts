import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MessageInterne
 *
 */
export type MessageInterneModel = runtime.Types.Result.DefaultSelection<Prisma.$MessageInternePayload>;
export type AggregateMessageInterne = {
    _count: MessageInterneCountAggregateOutputType | null;
    _min: MessageInterneMinAggregateOutputType | null;
    _max: MessageInterneMaxAggregateOutputType | null;
};
export type MessageInterneMinAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    bailId: string | null;
    bienId: string | null;
    titre: string | null;
    corps: string | null;
    type: string | null;
    lu: boolean | null;
    createdAt: Date | null;
};
export type MessageInterneMaxAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    bailId: string | null;
    bienId: string | null;
    titre: string | null;
    corps: string | null;
    type: string | null;
    lu: boolean | null;
    createdAt: Date | null;
};
export type MessageInterneCountAggregateOutputType = {
    id: number;
    proprietaireId: number;
    bailId: number;
    bienId: number;
    titre: number;
    corps: number;
    type: number;
    lu: number;
    createdAt: number;
    _all: number;
};
export type MessageInterneMinAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    bailId?: true;
    bienId?: true;
    titre?: true;
    corps?: true;
    type?: true;
    lu?: true;
    createdAt?: true;
};
export type MessageInterneMaxAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    bailId?: true;
    bienId?: true;
    titre?: true;
    corps?: true;
    type?: true;
    lu?: true;
    createdAt?: true;
};
export type MessageInterneCountAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    bailId?: true;
    bienId?: true;
    titre?: true;
    corps?: true;
    type?: true;
    lu?: true;
    createdAt?: true;
    _all?: true;
};
export type MessageInterneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageInterne to aggregate.
     */
    where?: Prisma.MessageInterneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageInternes to fetch.
     */
    orderBy?: Prisma.MessageInterneOrderByWithRelationInput | Prisma.MessageInterneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MessageInterneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageInternes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageInternes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MessageInternes
    **/
    _count?: true | MessageInterneCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MessageInterneMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MessageInterneMaxAggregateInputType;
};
export type GetMessageInterneAggregateType<T extends MessageInterneAggregateArgs> = {
    [P in keyof T & keyof AggregateMessageInterne]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessageInterne[P]> : Prisma.GetScalarType<T[P], AggregateMessageInterne[P]>;
};
export type MessageInterneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageInterneWhereInput;
    orderBy?: Prisma.MessageInterneOrderByWithAggregationInput | Prisma.MessageInterneOrderByWithAggregationInput[];
    by: Prisma.MessageInterneScalarFieldEnum[] | Prisma.MessageInterneScalarFieldEnum;
    having?: Prisma.MessageInterneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageInterneCountAggregateInputType | true;
    _min?: MessageInterneMinAggregateInputType;
    _max?: MessageInterneMaxAggregateInputType;
};
export type MessageInterneGroupByOutputType = {
    id: string;
    proprietaireId: string;
    bailId: string | null;
    bienId: string | null;
    titre: string;
    corps: string;
    type: string;
    lu: boolean;
    createdAt: Date;
    _count: MessageInterneCountAggregateOutputType | null;
    _min: MessageInterneMinAggregateOutputType | null;
    _max: MessageInterneMaxAggregateOutputType | null;
};
type GetMessageInterneGroupByPayload<T extends MessageInterneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageInterneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageInterneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageInterneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageInterneGroupByOutputType[P]>;
}>>;
export type MessageInterneWhereInput = {
    AND?: Prisma.MessageInterneWhereInput | Prisma.MessageInterneWhereInput[];
    OR?: Prisma.MessageInterneWhereInput[];
    NOT?: Prisma.MessageInterneWhereInput | Prisma.MessageInterneWhereInput[];
    id?: Prisma.StringFilter<"MessageInterne"> | string;
    proprietaireId?: Prisma.StringFilter<"MessageInterne"> | string;
    bailId?: Prisma.StringNullableFilter<"MessageInterne"> | string | null;
    bienId?: Prisma.StringNullableFilter<"MessageInterne"> | string | null;
    titre?: Prisma.StringFilter<"MessageInterne"> | string;
    corps?: Prisma.StringFilter<"MessageInterne"> | string;
    type?: Prisma.StringFilter<"MessageInterne"> | string;
    lu?: Prisma.BoolFilter<"MessageInterne"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MessageInterne"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
};
export type MessageInterneOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bienId?: Prisma.SortOrderInput | Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
};
export type MessageInterneWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MessageInterneWhereInput | Prisma.MessageInterneWhereInput[];
    OR?: Prisma.MessageInterneWhereInput[];
    NOT?: Prisma.MessageInterneWhereInput | Prisma.MessageInterneWhereInput[];
    proprietaireId?: Prisma.StringFilter<"MessageInterne"> | string;
    bailId?: Prisma.StringNullableFilter<"MessageInterne"> | string | null;
    bienId?: Prisma.StringNullableFilter<"MessageInterne"> | string | null;
    titre?: Prisma.StringFilter<"MessageInterne"> | string;
    corps?: Prisma.StringFilter<"MessageInterne"> | string;
    type?: Prisma.StringFilter<"MessageInterne"> | string;
    lu?: Prisma.BoolFilter<"MessageInterne"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MessageInterne"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
}, "id">;
export type MessageInterneOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bienId?: Prisma.SortOrderInput | Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MessageInterneCountOrderByAggregateInput;
    _max?: Prisma.MessageInterneMaxOrderByAggregateInput;
    _min?: Prisma.MessageInterneMinOrderByAggregateInput;
};
export type MessageInterneScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageInterneScalarWhereWithAggregatesInput | Prisma.MessageInterneScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageInterneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageInterneScalarWhereWithAggregatesInput | Prisma.MessageInterneScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MessageInterne"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"MessageInterne"> | string;
    bailId?: Prisma.StringNullableWithAggregatesFilter<"MessageInterne"> | string | null;
    bienId?: Prisma.StringNullableWithAggregatesFilter<"MessageInterne"> | string | null;
    titre?: Prisma.StringWithAggregatesFilter<"MessageInterne"> | string;
    corps?: Prisma.StringWithAggregatesFilter<"MessageInterne"> | string;
    type?: Prisma.StringWithAggregatesFilter<"MessageInterne"> | string;
    lu?: Prisma.BoolWithAggregatesFilter<"MessageInterne"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MessageInterne"> | Date | string;
};
export type MessageInterneCreateInput = {
    id?: string;
    bailId?: string | null;
    bienId?: string | null;
    titre: string;
    corps: string;
    type?: string;
    lu?: boolean;
    createdAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutMessagesInternesInput;
};
export type MessageInterneUncheckedCreateInput = {
    id?: string;
    proprietaireId: string;
    bailId?: string | null;
    bienId?: string | null;
    titre: string;
    corps: string;
    type?: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type MessageInterneUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutMessagesInternesNestedInput;
};
export type MessageInterneUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageInterneCreateManyInput = {
    id?: string;
    proprietaireId: string;
    bailId?: string | null;
    bienId?: string | null;
    titre: string;
    corps: string;
    type?: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type MessageInterneUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageInterneUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageInterneListRelationFilter = {
    every?: Prisma.MessageInterneWhereInput;
    some?: Prisma.MessageInterneWhereInput;
    none?: Prisma.MessageInterneWhereInput;
};
export type MessageInterneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MessageInterneCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessageInterneMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessageInterneMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    bailId?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessageInterneCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.MessageInterneCreateWithoutProprietaireInput, Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput> | Prisma.MessageInterneCreateWithoutProprietaireInput[] | Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput | Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.MessageInterneCreateManyProprietaireInputEnvelope;
    connect?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
};
export type MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.MessageInterneCreateWithoutProprietaireInput, Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput> | Prisma.MessageInterneCreateWithoutProprietaireInput[] | Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput | Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.MessageInterneCreateManyProprietaireInputEnvelope;
    connect?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
};
export type MessageInterneUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.MessageInterneCreateWithoutProprietaireInput, Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput> | Prisma.MessageInterneCreateWithoutProprietaireInput[] | Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput | Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.MessageInterneUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.MessageInterneUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.MessageInterneCreateManyProprietaireInputEnvelope;
    set?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    disconnect?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    delete?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    connect?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    update?: Prisma.MessageInterneUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.MessageInterneUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.MessageInterneUpdateManyWithWhereWithoutProprietaireInput | Prisma.MessageInterneUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.MessageInterneScalarWhereInput | Prisma.MessageInterneScalarWhereInput[];
};
export type MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.MessageInterneCreateWithoutProprietaireInput, Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput> | Prisma.MessageInterneCreateWithoutProprietaireInput[] | Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput | Prisma.MessageInterneCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.MessageInterneUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.MessageInterneUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.MessageInterneCreateManyProprietaireInputEnvelope;
    set?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    disconnect?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    delete?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    connect?: Prisma.MessageInterneWhereUniqueInput | Prisma.MessageInterneWhereUniqueInput[];
    update?: Prisma.MessageInterneUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.MessageInterneUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.MessageInterneUpdateManyWithWhereWithoutProprietaireInput | Prisma.MessageInterneUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.MessageInterneScalarWhereInput | Prisma.MessageInterneScalarWhereInput[];
};
export type MessageInterneCreateWithoutProprietaireInput = {
    id?: string;
    bailId?: string | null;
    bienId?: string | null;
    titre: string;
    corps: string;
    type?: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type MessageInterneUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    bailId?: string | null;
    bienId?: string | null;
    titre: string;
    corps: string;
    type?: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type MessageInterneCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.MessageInterneWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageInterneCreateWithoutProprietaireInput, Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput>;
};
export type MessageInterneCreateManyProprietaireInputEnvelope = {
    data: Prisma.MessageInterneCreateManyProprietaireInput | Prisma.MessageInterneCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type MessageInterneUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.MessageInterneWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageInterneUpdateWithoutProprietaireInput, Prisma.MessageInterneUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.MessageInterneCreateWithoutProprietaireInput, Prisma.MessageInterneUncheckedCreateWithoutProprietaireInput>;
};
export type MessageInterneUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.MessageInterneWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageInterneUpdateWithoutProprietaireInput, Prisma.MessageInterneUncheckedUpdateWithoutProprietaireInput>;
};
export type MessageInterneUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.MessageInterneScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageInterneUpdateManyMutationInput, Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireInput>;
};
export type MessageInterneScalarWhereInput = {
    AND?: Prisma.MessageInterneScalarWhereInput | Prisma.MessageInterneScalarWhereInput[];
    OR?: Prisma.MessageInterneScalarWhereInput[];
    NOT?: Prisma.MessageInterneScalarWhereInput | Prisma.MessageInterneScalarWhereInput[];
    id?: Prisma.StringFilter<"MessageInterne"> | string;
    proprietaireId?: Prisma.StringFilter<"MessageInterne"> | string;
    bailId?: Prisma.StringNullableFilter<"MessageInterne"> | string | null;
    bienId?: Prisma.StringNullableFilter<"MessageInterne"> | string | null;
    titre?: Prisma.StringFilter<"MessageInterne"> | string;
    corps?: Prisma.StringFilter<"MessageInterne"> | string;
    type?: Prisma.StringFilter<"MessageInterne"> | string;
    lu?: Prisma.BoolFilter<"MessageInterne"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MessageInterne"> | Date | string;
};
export type MessageInterneCreateManyProprietaireInput = {
    id?: string;
    bailId?: string | null;
    bienId?: string | null;
    titre: string;
    corps: string;
    type?: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type MessageInterneUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageInterneUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageInterneUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bailId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageInterneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    titre?: boolean;
    corps?: boolean;
    type?: boolean;
    lu?: boolean;
    createdAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageInterne"]>;
export type MessageInterneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    titre?: boolean;
    corps?: boolean;
    type?: boolean;
    lu?: boolean;
    createdAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageInterne"]>;
export type MessageInterneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    titre?: boolean;
    corps?: boolean;
    type?: boolean;
    lu?: boolean;
    createdAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageInterne"]>;
export type MessageInterneSelectScalar = {
    id?: boolean;
    proprietaireId?: boolean;
    bailId?: boolean;
    bienId?: boolean;
    titre?: boolean;
    corps?: boolean;
    type?: boolean;
    lu?: boolean;
    createdAt?: boolean;
};
export type MessageInterneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proprietaireId" | "bailId" | "bienId" | "titre" | "corps" | "type" | "lu" | "createdAt", ExtArgs["result"]["messageInterne"]>;
export type MessageInterneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type MessageInterneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type MessageInterneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $MessageInternePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MessageInterne";
    objects: {
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        proprietaireId: string;
        bailId: string | null;
        bienId: string | null;
        titre: string;
        corps: string;
        type: string;
        lu: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["messageInterne"]>;
    composites: {};
};
export type MessageInterneGetPayload<S extends boolean | null | undefined | MessageInterneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessageInternePayload, S>;
export type MessageInterneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageInterneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageInterneCountAggregateInputType | true;
};
export interface MessageInterneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MessageInterne'];
        meta: {
            name: 'MessageInterne';
        };
    };
    /**
     * Find zero or one MessageInterne that matches the filter.
     * @param {MessageInterneFindUniqueArgs} args - Arguments to find a MessageInterne
     * @example
     * // Get one MessageInterne
     * const messageInterne = await prisma.messageInterne.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageInterneFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageInterneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MessageInterne that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageInterneFindUniqueOrThrowArgs} args - Arguments to find a MessageInterne
     * @example
     * // Get one MessageInterne
     * const messageInterne = await prisma.messageInterne.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageInterneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageInterneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MessageInterne that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageInterneFindFirstArgs} args - Arguments to find a MessageInterne
     * @example
     * // Get one MessageInterne
     * const messageInterne = await prisma.messageInterne.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageInterneFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageInterneFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MessageInterne that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageInterneFindFirstOrThrowArgs} args - Arguments to find a MessageInterne
     * @example
     * // Get one MessageInterne
     * const messageInterne = await prisma.messageInterne.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageInterneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageInterneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MessageInternes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageInterneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageInternes
     * const messageInternes = await prisma.messageInterne.findMany()
     *
     * // Get first 10 MessageInternes
     * const messageInternes = await prisma.messageInterne.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageInterneWithIdOnly = await prisma.messageInterne.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MessageInterneFindManyArgs>(args?: Prisma.SelectSubset<T, MessageInterneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MessageInterne.
     * @param {MessageInterneCreateArgs} args - Arguments to create a MessageInterne.
     * @example
     * // Create one MessageInterne
     * const MessageInterne = await prisma.messageInterne.create({
     *   data: {
     *     // ... data to create a MessageInterne
     *   }
     * })
     *
     */
    create<T extends MessageInterneCreateArgs>(args: Prisma.SelectSubset<T, MessageInterneCreateArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MessageInternes.
     * @param {MessageInterneCreateManyArgs} args - Arguments to create many MessageInternes.
     * @example
     * // Create many MessageInternes
     * const messageInterne = await prisma.messageInterne.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageInterneCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageInterneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MessageInternes and returns the data saved in the database.
     * @param {MessageInterneCreateManyAndReturnArgs} args - Arguments to create many MessageInternes.
     * @example
     * // Create many MessageInternes
     * const messageInterne = await prisma.messageInterne.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MessageInternes and only return the `id`
     * const messageInterneWithIdOnly = await prisma.messageInterne.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessageInterneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageInterneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MessageInterne.
     * @param {MessageInterneDeleteArgs} args - Arguments to delete one MessageInterne.
     * @example
     * // Delete one MessageInterne
     * const MessageInterne = await prisma.messageInterne.delete({
     *   where: {
     *     // ... filter to delete one MessageInterne
     *   }
     * })
     *
     */
    delete<T extends MessageInterneDeleteArgs>(args: Prisma.SelectSubset<T, MessageInterneDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MessageInterne.
     * @param {MessageInterneUpdateArgs} args - Arguments to update one MessageInterne.
     * @example
     * // Update one MessageInterne
     * const messageInterne = await prisma.messageInterne.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessageInterneUpdateArgs>(args: Prisma.SelectSubset<T, MessageInterneUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MessageInternes.
     * @param {MessageInterneDeleteManyArgs} args - Arguments to filter MessageInternes to delete.
     * @example
     * // Delete a few MessageInternes
     * const { count } = await prisma.messageInterne.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessageInterneDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageInterneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MessageInternes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageInterneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageInternes
     * const messageInterne = await prisma.messageInterne.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessageInterneUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageInterneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MessageInternes and returns the data updated in the database.
     * @param {MessageInterneUpdateManyAndReturnArgs} args - Arguments to update many MessageInternes.
     * @example
     * // Update many MessageInternes
     * const messageInterne = await prisma.messageInterne.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MessageInternes and only return the `id`
     * const messageInterneWithIdOnly = await prisma.messageInterne.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageInterneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageInterneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MessageInterne.
     * @param {MessageInterneUpsertArgs} args - Arguments to update or create a MessageInterne.
     * @example
     * // Update or create a MessageInterne
     * const messageInterne = await prisma.messageInterne.upsert({
     *   create: {
     *     // ... data to create a MessageInterne
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageInterne we want to update
     *   }
     * })
     */
    upsert<T extends MessageInterneUpsertArgs>(args: Prisma.SelectSubset<T, MessageInterneUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageInterneClient<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MessageInternes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageInterneCountArgs} args - Arguments to filter MessageInternes to count.
     * @example
     * // Count the number of MessageInternes
     * const count = await prisma.messageInterne.count({
     *   where: {
     *     // ... the filter for the MessageInternes we want to count
     *   }
     * })
    **/
    count<T extends MessageInterneCountArgs>(args?: Prisma.Subset<T, MessageInterneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageInterneCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MessageInterne.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageInterneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageInterneAggregateArgs>(args: Prisma.Subset<T, MessageInterneAggregateArgs>): Prisma.PrismaPromise<GetMessageInterneAggregateType<T>>;
    /**
     * Group by MessageInterne.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageInterneGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MessageInterneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageInterneGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageInterneGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageInterneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageInterneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MessageInterne model
     */
    readonly fields: MessageInterneFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MessageInterne.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MessageInterneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the MessageInterne model
 */
export interface MessageInterneFieldRefs {
    readonly id: Prisma.FieldRef<"MessageInterne", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"MessageInterne", 'String'>;
    readonly bailId: Prisma.FieldRef<"MessageInterne", 'String'>;
    readonly bienId: Prisma.FieldRef<"MessageInterne", 'String'>;
    readonly titre: Prisma.FieldRef<"MessageInterne", 'String'>;
    readonly corps: Prisma.FieldRef<"MessageInterne", 'String'>;
    readonly type: Prisma.FieldRef<"MessageInterne", 'String'>;
    readonly lu: Prisma.FieldRef<"MessageInterne", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"MessageInterne", 'DateTime'>;
}
/**
 * MessageInterne findUnique
 */
export type MessageInterneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * Filter, which MessageInterne to fetch.
     */
    where: Prisma.MessageInterneWhereUniqueInput;
};
/**
 * MessageInterne findUniqueOrThrow
 */
export type MessageInterneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * Filter, which MessageInterne to fetch.
     */
    where: Prisma.MessageInterneWhereUniqueInput;
};
/**
 * MessageInterne findFirst
 */
export type MessageInterneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * Filter, which MessageInterne to fetch.
     */
    where?: Prisma.MessageInterneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageInternes to fetch.
     */
    orderBy?: Prisma.MessageInterneOrderByWithRelationInput | Prisma.MessageInterneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MessageInternes.
     */
    cursor?: Prisma.MessageInterneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageInternes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageInternes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MessageInternes.
     */
    distinct?: Prisma.MessageInterneScalarFieldEnum | Prisma.MessageInterneScalarFieldEnum[];
};
/**
 * MessageInterne findFirstOrThrow
 */
export type MessageInterneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * Filter, which MessageInterne to fetch.
     */
    where?: Prisma.MessageInterneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageInternes to fetch.
     */
    orderBy?: Prisma.MessageInterneOrderByWithRelationInput | Prisma.MessageInterneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MessageInternes.
     */
    cursor?: Prisma.MessageInterneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageInternes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageInternes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MessageInternes.
     */
    distinct?: Prisma.MessageInterneScalarFieldEnum | Prisma.MessageInterneScalarFieldEnum[];
};
/**
 * MessageInterne findMany
 */
export type MessageInterneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * Filter, which MessageInternes to fetch.
     */
    where?: Prisma.MessageInterneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageInternes to fetch.
     */
    orderBy?: Prisma.MessageInterneOrderByWithRelationInput | Prisma.MessageInterneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MessageInternes.
     */
    cursor?: Prisma.MessageInterneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageInternes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageInternes.
     */
    skip?: number;
    distinct?: Prisma.MessageInterneScalarFieldEnum | Prisma.MessageInterneScalarFieldEnum[];
};
/**
 * MessageInterne create
 */
export type MessageInterneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * The data needed to create a MessageInterne.
     */
    data: Prisma.XOR<Prisma.MessageInterneCreateInput, Prisma.MessageInterneUncheckedCreateInput>;
};
/**
 * MessageInterne createMany
 */
export type MessageInterneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageInternes.
     */
    data: Prisma.MessageInterneCreateManyInput | Prisma.MessageInterneCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MessageInterne createManyAndReturn
 */
export type MessageInterneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * The data used to create many MessageInternes.
     */
    data: Prisma.MessageInterneCreateManyInput | Prisma.MessageInterneCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MessageInterne update
 */
export type MessageInterneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * The data needed to update a MessageInterne.
     */
    data: Prisma.XOR<Prisma.MessageInterneUpdateInput, Prisma.MessageInterneUncheckedUpdateInput>;
    /**
     * Choose, which MessageInterne to update.
     */
    where: Prisma.MessageInterneWhereUniqueInput;
};
/**
 * MessageInterne updateMany
 */
export type MessageInterneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageInternes.
     */
    data: Prisma.XOR<Prisma.MessageInterneUpdateManyMutationInput, Prisma.MessageInterneUncheckedUpdateManyInput>;
    /**
     * Filter which MessageInternes to update
     */
    where?: Prisma.MessageInterneWhereInput;
    /**
     * Limit how many MessageInternes to update.
     */
    limit?: number;
};
/**
 * MessageInterne updateManyAndReturn
 */
export type MessageInterneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * The data used to update MessageInternes.
     */
    data: Prisma.XOR<Prisma.MessageInterneUpdateManyMutationInput, Prisma.MessageInterneUncheckedUpdateManyInput>;
    /**
     * Filter which MessageInternes to update
     */
    where?: Prisma.MessageInterneWhereInput;
    /**
     * Limit how many MessageInternes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MessageInterne upsert
 */
export type MessageInterneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * The filter to search for the MessageInterne to update in case it exists.
     */
    where: Prisma.MessageInterneWhereUniqueInput;
    /**
     * In case the MessageInterne found by the `where` argument doesn't exist, create a new MessageInterne with this data.
     */
    create: Prisma.XOR<Prisma.MessageInterneCreateInput, Prisma.MessageInterneUncheckedCreateInput>;
    /**
     * In case the MessageInterne was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MessageInterneUpdateInput, Prisma.MessageInterneUncheckedUpdateInput>;
};
/**
 * MessageInterne delete
 */
export type MessageInterneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
    /**
     * Filter which MessageInterne to delete.
     */
    where: Prisma.MessageInterneWhereUniqueInput;
};
/**
 * MessageInterne deleteMany
 */
export type MessageInterneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageInternes to delete
     */
    where?: Prisma.MessageInterneWhereInput;
    /**
     * Limit how many MessageInternes to delete.
     */
    limit?: number;
};
/**
 * MessageInterne without action
 */
export type MessageInterneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageInterne
     */
    select?: Prisma.MessageInterneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageInterne
     */
    omit?: Prisma.MessageInterneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInterneInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MessageInterne.d.ts.map