import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BienImage
 *
 */
export type BienImageModel = runtime.Types.Result.DefaultSelection<Prisma.$BienImagePayload>;
export type AggregateBienImage = {
    _count: BienImageCountAggregateOutputType | null;
    _avg: BienImageAvgAggregateOutputType | null;
    _sum: BienImageSumAggregateOutputType | null;
    _min: BienImageMinAggregateOutputType | null;
    _max: BienImageMaxAggregateOutputType | null;
};
export type BienImageAvgAggregateOutputType = {
    taille: number | null;
    largeur: number | null;
    hauteur: number | null;
    ordre: number | null;
};
export type BienImageSumAggregateOutputType = {
    taille: number | null;
    largeur: number | null;
    hauteur: number | null;
    ordre: number | null;
};
export type BienImageMinAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    type: $Enums.TypeImage | null;
    url: string | null;
    chemin: string | null;
    nomOriginal: string | null;
    taille: number | null;
    largeur: number | null;
    hauteur: number | null;
    format: string | null;
    hash: string | null;
    qualite: string | null;
    ordre: number | null;
    dateCreation: Date | null;
    dateModification: Date | null;
};
export type BienImageMaxAggregateOutputType = {
    id: string | null;
    bienId: string | null;
    type: $Enums.TypeImage | null;
    url: string | null;
    chemin: string | null;
    nomOriginal: string | null;
    taille: number | null;
    largeur: number | null;
    hauteur: number | null;
    format: string | null;
    hash: string | null;
    qualite: string | null;
    ordre: number | null;
    dateCreation: Date | null;
    dateModification: Date | null;
};
export type BienImageCountAggregateOutputType = {
    id: number;
    bienId: number;
    type: number;
    url: number;
    chemin: number;
    nomOriginal: number;
    taille: number;
    largeur: number;
    hauteur: number;
    format: number;
    hash: number;
    qualite: number;
    ordre: number;
    dateCreation: number;
    dateModification: number;
    _all: number;
};
export type BienImageAvgAggregateInputType = {
    taille?: true;
    largeur?: true;
    hauteur?: true;
    ordre?: true;
};
export type BienImageSumAggregateInputType = {
    taille?: true;
    largeur?: true;
    hauteur?: true;
    ordre?: true;
};
export type BienImageMinAggregateInputType = {
    id?: true;
    bienId?: true;
    type?: true;
    url?: true;
    chemin?: true;
    nomOriginal?: true;
    taille?: true;
    largeur?: true;
    hauteur?: true;
    format?: true;
    hash?: true;
    qualite?: true;
    ordre?: true;
    dateCreation?: true;
    dateModification?: true;
};
export type BienImageMaxAggregateInputType = {
    id?: true;
    bienId?: true;
    type?: true;
    url?: true;
    chemin?: true;
    nomOriginal?: true;
    taille?: true;
    largeur?: true;
    hauteur?: true;
    format?: true;
    hash?: true;
    qualite?: true;
    ordre?: true;
    dateCreation?: true;
    dateModification?: true;
};
export type BienImageCountAggregateInputType = {
    id?: true;
    bienId?: true;
    type?: true;
    url?: true;
    chemin?: true;
    nomOriginal?: true;
    taille?: true;
    largeur?: true;
    hauteur?: true;
    format?: true;
    hash?: true;
    qualite?: true;
    ordre?: true;
    dateCreation?: true;
    dateModification?: true;
    _all?: true;
};
export type BienImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BienImage to aggregate.
     */
    where?: Prisma.BienImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienImages to fetch.
     */
    orderBy?: Prisma.BienImageOrderByWithRelationInput | Prisma.BienImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BienImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BienImages
    **/
    _count?: true | BienImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BienImageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BienImageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BienImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BienImageMaxAggregateInputType;
};
export type GetBienImageAggregateType<T extends BienImageAggregateArgs> = {
    [P in keyof T & keyof AggregateBienImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBienImage[P]> : Prisma.GetScalarType<T[P], AggregateBienImage[P]>;
};
export type BienImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienImageWhereInput;
    orderBy?: Prisma.BienImageOrderByWithAggregationInput | Prisma.BienImageOrderByWithAggregationInput[];
    by: Prisma.BienImageScalarFieldEnum[] | Prisma.BienImageScalarFieldEnum;
    having?: Prisma.BienImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BienImageCountAggregateInputType | true;
    _avg?: BienImageAvgAggregateInputType;
    _sum?: BienImageSumAggregateInputType;
    _min?: BienImageMinAggregateInputType;
    _max?: BienImageMaxAggregateInputType;
};
export type BienImageGroupByOutputType = {
    id: string;
    bienId: string;
    type: $Enums.TypeImage;
    url: string;
    chemin: string | null;
    nomOriginal: string | null;
    taille: number | null;
    largeur: number | null;
    hauteur: number | null;
    format: string | null;
    hash: string | null;
    qualite: string | null;
    ordre: number;
    dateCreation: Date;
    dateModification: Date;
    _count: BienImageCountAggregateOutputType | null;
    _avg: BienImageAvgAggregateOutputType | null;
    _sum: BienImageSumAggregateOutputType | null;
    _min: BienImageMinAggregateOutputType | null;
    _max: BienImageMaxAggregateOutputType | null;
};
type GetBienImageGroupByPayload<T extends BienImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BienImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BienImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BienImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BienImageGroupByOutputType[P]>;
}>>;
export type BienImageWhereInput = {
    AND?: Prisma.BienImageWhereInput | Prisma.BienImageWhereInput[];
    OR?: Prisma.BienImageWhereInput[];
    NOT?: Prisma.BienImageWhereInput | Prisma.BienImageWhereInput[];
    id?: Prisma.StringFilter<"BienImage"> | string;
    bienId?: Prisma.StringFilter<"BienImage"> | string;
    type?: Prisma.EnumTypeImageFilter<"BienImage"> | $Enums.TypeImage;
    url?: Prisma.StringFilter<"BienImage"> | string;
    chemin?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    nomOriginal?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    taille?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    largeur?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    hauteur?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    format?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    hash?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    qualite?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    ordre?: Prisma.IntFilter<"BienImage"> | number;
    dateCreation?: Prisma.DateTimeFilter<"BienImage"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"BienImage"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
};
export type BienImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    chemin?: Prisma.SortOrderInput | Prisma.SortOrder;
    nomOriginal?: Prisma.SortOrderInput | Prisma.SortOrder;
    taille?: Prisma.SortOrderInput | Prisma.SortOrder;
    largeur?: Prisma.SortOrderInput | Prisma.SortOrder;
    hauteur?: Prisma.SortOrderInput | Prisma.SortOrder;
    format?: Prisma.SortOrderInput | Prisma.SortOrder;
    hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualite?: Prisma.SortOrderInput | Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    bien?: Prisma.BienOrderByWithRelationInput;
};
export type BienImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bienId_type?: Prisma.BienImageBienIdTypeCompoundUniqueInput;
    AND?: Prisma.BienImageWhereInput | Prisma.BienImageWhereInput[];
    OR?: Prisma.BienImageWhereInput[];
    NOT?: Prisma.BienImageWhereInput | Prisma.BienImageWhereInput[];
    bienId?: Prisma.StringFilter<"BienImage"> | string;
    type?: Prisma.EnumTypeImageFilter<"BienImage"> | $Enums.TypeImage;
    url?: Prisma.StringFilter<"BienImage"> | string;
    chemin?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    nomOriginal?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    taille?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    largeur?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    hauteur?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    format?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    hash?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    qualite?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    ordre?: Prisma.IntFilter<"BienImage"> | number;
    dateCreation?: Prisma.DateTimeFilter<"BienImage"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"BienImage"> | Date | string;
    bien?: Prisma.XOR<Prisma.BienScalarRelationFilter, Prisma.BienWhereInput>;
}, "id" | "bienId_type">;
export type BienImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    chemin?: Prisma.SortOrderInput | Prisma.SortOrder;
    nomOriginal?: Prisma.SortOrderInput | Prisma.SortOrder;
    taille?: Prisma.SortOrderInput | Prisma.SortOrder;
    largeur?: Prisma.SortOrderInput | Prisma.SortOrder;
    hauteur?: Prisma.SortOrderInput | Prisma.SortOrder;
    format?: Prisma.SortOrderInput | Prisma.SortOrder;
    hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualite?: Prisma.SortOrderInput | Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    _count?: Prisma.BienImageCountOrderByAggregateInput;
    _avg?: Prisma.BienImageAvgOrderByAggregateInput;
    _max?: Prisma.BienImageMaxOrderByAggregateInput;
    _min?: Prisma.BienImageMinOrderByAggregateInput;
    _sum?: Prisma.BienImageSumOrderByAggregateInput;
};
export type BienImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.BienImageScalarWhereWithAggregatesInput | Prisma.BienImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.BienImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BienImageScalarWhereWithAggregatesInput | Prisma.BienImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BienImage"> | string;
    bienId?: Prisma.StringWithAggregatesFilter<"BienImage"> | string;
    type?: Prisma.EnumTypeImageWithAggregatesFilter<"BienImage"> | $Enums.TypeImage;
    url?: Prisma.StringWithAggregatesFilter<"BienImage"> | string;
    chemin?: Prisma.StringNullableWithAggregatesFilter<"BienImage"> | string | null;
    nomOriginal?: Prisma.StringNullableWithAggregatesFilter<"BienImage"> | string | null;
    taille?: Prisma.IntNullableWithAggregatesFilter<"BienImage"> | number | null;
    largeur?: Prisma.IntNullableWithAggregatesFilter<"BienImage"> | number | null;
    hauteur?: Prisma.IntNullableWithAggregatesFilter<"BienImage"> | number | null;
    format?: Prisma.StringNullableWithAggregatesFilter<"BienImage"> | string | null;
    hash?: Prisma.StringNullableWithAggregatesFilter<"BienImage"> | string | null;
    qualite?: Prisma.StringNullableWithAggregatesFilter<"BienImage"> | string | null;
    ordre?: Prisma.IntWithAggregatesFilter<"BienImage"> | number;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"BienImage"> | Date | string;
    dateModification?: Prisma.DateTimeWithAggregatesFilter<"BienImage"> | Date | string;
};
export type BienImageCreateInput = {
    id?: string;
    type: $Enums.TypeImage;
    url: string;
    chemin?: string | null;
    nomOriginal?: string | null;
    taille?: number | null;
    largeur?: number | null;
    hauteur?: number | null;
    format?: string | null;
    hash?: string | null;
    qualite?: string | null;
    ordre?: number;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    bien: Prisma.BienCreateNestedOneWithoutBienImagesInput;
};
export type BienImageUncheckedCreateInput = {
    id?: string;
    bienId: string;
    type: $Enums.TypeImage;
    url: string;
    chemin?: string | null;
    nomOriginal?: string | null;
    taille?: number | null;
    largeur?: number | null;
    hauteur?: number | null;
    format?: string | null;
    hash?: string | null;
    qualite?: string | null;
    ordre?: number;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type BienImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeImageFieldUpdateOperationsInput | $Enums.TypeImage;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    chemin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomOriginal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    largeur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hauteur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bien?: Prisma.BienUpdateOneRequiredWithoutBienImagesNestedInput;
};
export type BienImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeImageFieldUpdateOperationsInput | $Enums.TypeImage;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    chemin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomOriginal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    largeur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hauteur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienImageCreateManyInput = {
    id?: string;
    bienId: string;
    type: $Enums.TypeImage;
    url: string;
    chemin?: string | null;
    nomOriginal?: string | null;
    taille?: number | null;
    largeur?: number | null;
    hauteur?: number | null;
    format?: string | null;
    hash?: string | null;
    qualite?: string | null;
    ordre?: number;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type BienImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeImageFieldUpdateOperationsInput | $Enums.TypeImage;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    chemin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomOriginal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    largeur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hauteur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bienId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeImageFieldUpdateOperationsInput | $Enums.TypeImage;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    chemin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomOriginal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    largeur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hauteur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienImageBienIdTypeCompoundUniqueInput = {
    bienId: string;
    type: $Enums.TypeImage;
};
export type BienImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    chemin?: Prisma.SortOrder;
    nomOriginal?: Prisma.SortOrder;
    taille?: Prisma.SortOrder;
    largeur?: Prisma.SortOrder;
    hauteur?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    hash?: Prisma.SortOrder;
    qualite?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type BienImageAvgOrderByAggregateInput = {
    taille?: Prisma.SortOrder;
    largeur?: Prisma.SortOrder;
    hauteur?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
};
export type BienImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    chemin?: Prisma.SortOrder;
    nomOriginal?: Prisma.SortOrder;
    taille?: Prisma.SortOrder;
    largeur?: Prisma.SortOrder;
    hauteur?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    hash?: Prisma.SortOrder;
    qualite?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type BienImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bienId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    chemin?: Prisma.SortOrder;
    nomOriginal?: Prisma.SortOrder;
    taille?: Prisma.SortOrder;
    largeur?: Prisma.SortOrder;
    hauteur?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    hash?: Prisma.SortOrder;
    qualite?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type BienImageSumOrderByAggregateInput = {
    taille?: Prisma.SortOrder;
    largeur?: Prisma.SortOrder;
    hauteur?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
};
export type BienImageListRelationFilter = {
    every?: Prisma.BienImageWhereInput;
    some?: Prisma.BienImageWhereInput;
    none?: Prisma.BienImageWhereInput;
};
export type BienImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumTypeImageFieldUpdateOperationsInput = {
    set?: $Enums.TypeImage;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BienImageCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BienImageCreateWithoutBienInput, Prisma.BienImageUncheckedCreateWithoutBienInput> | Prisma.BienImageCreateWithoutBienInput[] | Prisma.BienImageUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienImageCreateOrConnectWithoutBienInput | Prisma.BienImageCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BienImageCreateManyBienInputEnvelope;
    connect?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
};
export type BienImageUncheckedCreateNestedManyWithoutBienInput = {
    create?: Prisma.XOR<Prisma.BienImageCreateWithoutBienInput, Prisma.BienImageUncheckedCreateWithoutBienInput> | Prisma.BienImageCreateWithoutBienInput[] | Prisma.BienImageUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienImageCreateOrConnectWithoutBienInput | Prisma.BienImageCreateOrConnectWithoutBienInput[];
    createMany?: Prisma.BienImageCreateManyBienInputEnvelope;
    connect?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
};
export type BienImageUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienImageCreateWithoutBienInput, Prisma.BienImageUncheckedCreateWithoutBienInput> | Prisma.BienImageCreateWithoutBienInput[] | Prisma.BienImageUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienImageCreateOrConnectWithoutBienInput | Prisma.BienImageCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BienImageUpsertWithWhereUniqueWithoutBienInput | Prisma.BienImageUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BienImageCreateManyBienInputEnvelope;
    set?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    disconnect?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    delete?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    connect?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    update?: Prisma.BienImageUpdateWithWhereUniqueWithoutBienInput | Prisma.BienImageUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BienImageUpdateManyWithWhereWithoutBienInput | Prisma.BienImageUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BienImageScalarWhereInput | Prisma.BienImageScalarWhereInput[];
};
export type BienImageUncheckedUpdateManyWithoutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienImageCreateWithoutBienInput, Prisma.BienImageUncheckedCreateWithoutBienInput> | Prisma.BienImageCreateWithoutBienInput[] | Prisma.BienImageUncheckedCreateWithoutBienInput[];
    connectOrCreate?: Prisma.BienImageCreateOrConnectWithoutBienInput | Prisma.BienImageCreateOrConnectWithoutBienInput[];
    upsert?: Prisma.BienImageUpsertWithWhereUniqueWithoutBienInput | Prisma.BienImageUpsertWithWhereUniqueWithoutBienInput[];
    createMany?: Prisma.BienImageCreateManyBienInputEnvelope;
    set?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    disconnect?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    delete?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    connect?: Prisma.BienImageWhereUniqueInput | Prisma.BienImageWhereUniqueInput[];
    update?: Prisma.BienImageUpdateWithWhereUniqueWithoutBienInput | Prisma.BienImageUpdateWithWhereUniqueWithoutBienInput[];
    updateMany?: Prisma.BienImageUpdateManyWithWhereWithoutBienInput | Prisma.BienImageUpdateManyWithWhereWithoutBienInput[];
    deleteMany?: Prisma.BienImageScalarWhereInput | Prisma.BienImageScalarWhereInput[];
};
export type BienImageCreateWithoutBienInput = {
    id?: string;
    type: $Enums.TypeImage;
    url: string;
    chemin?: string | null;
    nomOriginal?: string | null;
    taille?: number | null;
    largeur?: number | null;
    hauteur?: number | null;
    format?: string | null;
    hash?: string | null;
    qualite?: string | null;
    ordre?: number;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type BienImageUncheckedCreateWithoutBienInput = {
    id?: string;
    type: $Enums.TypeImage;
    url: string;
    chemin?: string | null;
    nomOriginal?: string | null;
    taille?: number | null;
    largeur?: number | null;
    hauteur?: number | null;
    format?: string | null;
    hash?: string | null;
    qualite?: string | null;
    ordre?: number;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type BienImageCreateOrConnectWithoutBienInput = {
    where: Prisma.BienImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienImageCreateWithoutBienInput, Prisma.BienImageUncheckedCreateWithoutBienInput>;
};
export type BienImageCreateManyBienInputEnvelope = {
    data: Prisma.BienImageCreateManyBienInput | Prisma.BienImageCreateManyBienInput[];
    skipDuplicates?: boolean;
};
export type BienImageUpsertWithWhereUniqueWithoutBienInput = {
    where: Prisma.BienImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienImageUpdateWithoutBienInput, Prisma.BienImageUncheckedUpdateWithoutBienInput>;
    create: Prisma.XOR<Prisma.BienImageCreateWithoutBienInput, Prisma.BienImageUncheckedCreateWithoutBienInput>;
};
export type BienImageUpdateWithWhereUniqueWithoutBienInput = {
    where: Prisma.BienImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienImageUpdateWithoutBienInput, Prisma.BienImageUncheckedUpdateWithoutBienInput>;
};
export type BienImageUpdateManyWithWhereWithoutBienInput = {
    where: Prisma.BienImageScalarWhereInput;
    data: Prisma.XOR<Prisma.BienImageUpdateManyMutationInput, Prisma.BienImageUncheckedUpdateManyWithoutBienInput>;
};
export type BienImageScalarWhereInput = {
    AND?: Prisma.BienImageScalarWhereInput | Prisma.BienImageScalarWhereInput[];
    OR?: Prisma.BienImageScalarWhereInput[];
    NOT?: Prisma.BienImageScalarWhereInput | Prisma.BienImageScalarWhereInput[];
    id?: Prisma.StringFilter<"BienImage"> | string;
    bienId?: Prisma.StringFilter<"BienImage"> | string;
    type?: Prisma.EnumTypeImageFilter<"BienImage"> | $Enums.TypeImage;
    url?: Prisma.StringFilter<"BienImage"> | string;
    chemin?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    nomOriginal?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    taille?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    largeur?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    hauteur?: Prisma.IntNullableFilter<"BienImage"> | number | null;
    format?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    hash?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    qualite?: Prisma.StringNullableFilter<"BienImage"> | string | null;
    ordre?: Prisma.IntFilter<"BienImage"> | number;
    dateCreation?: Prisma.DateTimeFilter<"BienImage"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"BienImage"> | Date | string;
};
export type BienImageCreateManyBienInput = {
    id?: string;
    type: $Enums.TypeImage;
    url: string;
    chemin?: string | null;
    nomOriginal?: string | null;
    taille?: number | null;
    largeur?: number | null;
    hauteur?: number | null;
    format?: string | null;
    hash?: string | null;
    qualite?: string | null;
    ordre?: number;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type BienImageUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeImageFieldUpdateOperationsInput | $Enums.TypeImage;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    chemin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomOriginal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    largeur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hauteur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienImageUncheckedUpdateWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeImageFieldUpdateOperationsInput | $Enums.TypeImage;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    chemin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomOriginal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    largeur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hauteur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienImageUncheckedUpdateManyWithoutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeImageFieldUpdateOperationsInput | $Enums.TypeImage;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    chemin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nomOriginal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taille?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    largeur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hauteur?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    url?: boolean;
    chemin?: boolean;
    nomOriginal?: boolean;
    taille?: boolean;
    largeur?: boolean;
    hauteur?: boolean;
    format?: boolean;
    hash?: boolean;
    qualite?: boolean;
    ordre?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienImage"]>;
export type BienImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    url?: boolean;
    chemin?: boolean;
    nomOriginal?: boolean;
    taille?: boolean;
    largeur?: boolean;
    hauteur?: boolean;
    format?: boolean;
    hash?: boolean;
    qualite?: boolean;
    ordre?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienImage"]>;
export type BienImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    url?: boolean;
    chemin?: boolean;
    nomOriginal?: boolean;
    taille?: boolean;
    largeur?: boolean;
    hauteur?: boolean;
    format?: boolean;
    hash?: boolean;
    qualite?: boolean;
    ordre?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bienImage"]>;
export type BienImageSelectScalar = {
    id?: boolean;
    bienId?: boolean;
    type?: boolean;
    url?: boolean;
    chemin?: boolean;
    nomOriginal?: boolean;
    taille?: boolean;
    largeur?: boolean;
    hauteur?: boolean;
    format?: boolean;
    hash?: boolean;
    qualite?: boolean;
    ordre?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
};
export type BienImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bienId" | "type" | "url" | "chemin" | "nomOriginal" | "taille" | "largeur" | "hauteur" | "format" | "hash" | "qualite" | "ordre" | "dateCreation" | "dateModification", ExtArgs["result"]["bienImage"]>;
export type BienImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type BienImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type BienImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bien?: boolean | Prisma.BienDefaultArgs<ExtArgs>;
};
export type $BienImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BienImage";
    objects: {
        bien: Prisma.$BienPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bienId: string;
        type: $Enums.TypeImage;
        url: string;
        chemin: string | null;
        nomOriginal: string | null;
        taille: number | null;
        largeur: number | null;
        hauteur: number | null;
        format: string | null;
        hash: string | null;
        qualite: string | null;
        ordre: number;
        dateCreation: Date;
        dateModification: Date;
    }, ExtArgs["result"]["bienImage"]>;
    composites: {};
};
export type BienImageGetPayload<S extends boolean | null | undefined | BienImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BienImagePayload, S>;
export type BienImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BienImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BienImageCountAggregateInputType | true;
};
export interface BienImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BienImage'];
        meta: {
            name: 'BienImage';
        };
    };
    /**
     * Find zero or one BienImage that matches the filter.
     * @param {BienImageFindUniqueArgs} args - Arguments to find a BienImage
     * @example
     * // Get one BienImage
     * const bienImage = await prisma.bienImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BienImageFindUniqueArgs>(args: Prisma.SelectSubset<T, BienImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BienImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BienImageFindUniqueOrThrowArgs} args - Arguments to find a BienImage
     * @example
     * // Get one BienImage
     * const bienImage = await prisma.bienImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BienImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BienImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BienImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienImageFindFirstArgs} args - Arguments to find a BienImage
     * @example
     * // Get one BienImage
     * const bienImage = await prisma.bienImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BienImageFindFirstArgs>(args?: Prisma.SelectSubset<T, BienImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BienImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienImageFindFirstOrThrowArgs} args - Arguments to find a BienImage
     * @example
     * // Get one BienImage
     * const bienImage = await prisma.bienImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BienImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BienImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BienImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BienImages
     * const bienImages = await prisma.bienImage.findMany()
     *
     * // Get first 10 BienImages
     * const bienImages = await prisma.bienImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bienImageWithIdOnly = await prisma.bienImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BienImageFindManyArgs>(args?: Prisma.SelectSubset<T, BienImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BienImage.
     * @param {BienImageCreateArgs} args - Arguments to create a BienImage.
     * @example
     * // Create one BienImage
     * const BienImage = await prisma.bienImage.create({
     *   data: {
     *     // ... data to create a BienImage
     *   }
     * })
     *
     */
    create<T extends BienImageCreateArgs>(args: Prisma.SelectSubset<T, BienImageCreateArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BienImages.
     * @param {BienImageCreateManyArgs} args - Arguments to create many BienImages.
     * @example
     * // Create many BienImages
     * const bienImage = await prisma.bienImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BienImageCreateManyArgs>(args?: Prisma.SelectSubset<T, BienImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BienImages and returns the data saved in the database.
     * @param {BienImageCreateManyAndReturnArgs} args - Arguments to create many BienImages.
     * @example
     * // Create many BienImages
     * const bienImage = await prisma.bienImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BienImages and only return the `id`
     * const bienImageWithIdOnly = await prisma.bienImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BienImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BienImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BienImage.
     * @param {BienImageDeleteArgs} args - Arguments to delete one BienImage.
     * @example
     * // Delete one BienImage
     * const BienImage = await prisma.bienImage.delete({
     *   where: {
     *     // ... filter to delete one BienImage
     *   }
     * })
     *
     */
    delete<T extends BienImageDeleteArgs>(args: Prisma.SelectSubset<T, BienImageDeleteArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BienImage.
     * @param {BienImageUpdateArgs} args - Arguments to update one BienImage.
     * @example
     * // Update one BienImage
     * const bienImage = await prisma.bienImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BienImageUpdateArgs>(args: Prisma.SelectSubset<T, BienImageUpdateArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BienImages.
     * @param {BienImageDeleteManyArgs} args - Arguments to filter BienImages to delete.
     * @example
     * // Delete a few BienImages
     * const { count } = await prisma.bienImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BienImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, BienImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BienImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BienImages
     * const bienImage = await prisma.bienImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BienImageUpdateManyArgs>(args: Prisma.SelectSubset<T, BienImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BienImages and returns the data updated in the database.
     * @param {BienImageUpdateManyAndReturnArgs} args - Arguments to update many BienImages.
     * @example
     * // Update many BienImages
     * const bienImage = await prisma.bienImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BienImages and only return the `id`
     * const bienImageWithIdOnly = await prisma.bienImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BienImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BienImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BienImage.
     * @param {BienImageUpsertArgs} args - Arguments to update or create a BienImage.
     * @example
     * // Update or create a BienImage
     * const bienImage = await prisma.bienImage.upsert({
     *   create: {
     *     // ... data to create a BienImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BienImage we want to update
     *   }
     * })
     */
    upsert<T extends BienImageUpsertArgs>(args: Prisma.SelectSubset<T, BienImageUpsertArgs<ExtArgs>>): Prisma.Prisma__BienImageClient<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BienImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienImageCountArgs} args - Arguments to filter BienImages to count.
     * @example
     * // Count the number of BienImages
     * const count = await prisma.bienImage.count({
     *   where: {
     *     // ... the filter for the BienImages we want to count
     *   }
     * })
    **/
    count<T extends BienImageCountArgs>(args?: Prisma.Subset<T, BienImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BienImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BienImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BienImageAggregateArgs>(args: Prisma.Subset<T, BienImageAggregateArgs>): Prisma.PrismaPromise<GetBienImageAggregateType<T>>;
    /**
     * Group by BienImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BienImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BienImageGroupByArgs['orderBy'];
    } : {
        orderBy?: BienImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BienImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBienImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BienImage model
     */
    readonly fields: BienImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BienImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BienImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the BienImage model
 */
export interface BienImageFieldRefs {
    readonly id: Prisma.FieldRef<"BienImage", 'String'>;
    readonly bienId: Prisma.FieldRef<"BienImage", 'String'>;
    readonly type: Prisma.FieldRef<"BienImage", 'TypeImage'>;
    readonly url: Prisma.FieldRef<"BienImage", 'String'>;
    readonly chemin: Prisma.FieldRef<"BienImage", 'String'>;
    readonly nomOriginal: Prisma.FieldRef<"BienImage", 'String'>;
    readonly taille: Prisma.FieldRef<"BienImage", 'Int'>;
    readonly largeur: Prisma.FieldRef<"BienImage", 'Int'>;
    readonly hauteur: Prisma.FieldRef<"BienImage", 'Int'>;
    readonly format: Prisma.FieldRef<"BienImage", 'String'>;
    readonly hash: Prisma.FieldRef<"BienImage", 'String'>;
    readonly qualite: Prisma.FieldRef<"BienImage", 'String'>;
    readonly ordre: Prisma.FieldRef<"BienImage", 'Int'>;
    readonly dateCreation: Prisma.FieldRef<"BienImage", 'DateTime'>;
    readonly dateModification: Prisma.FieldRef<"BienImage", 'DateTime'>;
}
/**
 * BienImage findUnique
 */
export type BienImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * Filter, which BienImage to fetch.
     */
    where: Prisma.BienImageWhereUniqueInput;
};
/**
 * BienImage findUniqueOrThrow
 */
export type BienImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * Filter, which BienImage to fetch.
     */
    where: Prisma.BienImageWhereUniqueInput;
};
/**
 * BienImage findFirst
 */
export type BienImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * Filter, which BienImage to fetch.
     */
    where?: Prisma.BienImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienImages to fetch.
     */
    orderBy?: Prisma.BienImageOrderByWithRelationInput | Prisma.BienImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BienImages.
     */
    cursor?: Prisma.BienImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BienImages.
     */
    distinct?: Prisma.BienImageScalarFieldEnum | Prisma.BienImageScalarFieldEnum[];
};
/**
 * BienImage findFirstOrThrow
 */
export type BienImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * Filter, which BienImage to fetch.
     */
    where?: Prisma.BienImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienImages to fetch.
     */
    orderBy?: Prisma.BienImageOrderByWithRelationInput | Prisma.BienImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BienImages.
     */
    cursor?: Prisma.BienImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BienImages.
     */
    distinct?: Prisma.BienImageScalarFieldEnum | Prisma.BienImageScalarFieldEnum[];
};
/**
 * BienImage findMany
 */
export type BienImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * Filter, which BienImages to fetch.
     */
    where?: Prisma.BienImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BienImages to fetch.
     */
    orderBy?: Prisma.BienImageOrderByWithRelationInput | Prisma.BienImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BienImages.
     */
    cursor?: Prisma.BienImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BienImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BienImages.
     */
    skip?: number;
    distinct?: Prisma.BienImageScalarFieldEnum | Prisma.BienImageScalarFieldEnum[];
};
/**
 * BienImage create
 */
export type BienImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a BienImage.
     */
    data: Prisma.XOR<Prisma.BienImageCreateInput, Prisma.BienImageUncheckedCreateInput>;
};
/**
 * BienImage createMany
 */
export type BienImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BienImages.
     */
    data: Prisma.BienImageCreateManyInput | Prisma.BienImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BienImage createManyAndReturn
 */
export type BienImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * The data used to create many BienImages.
     */
    data: Prisma.BienImageCreateManyInput | Prisma.BienImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BienImage update
 */
export type BienImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a BienImage.
     */
    data: Prisma.XOR<Prisma.BienImageUpdateInput, Prisma.BienImageUncheckedUpdateInput>;
    /**
     * Choose, which BienImage to update.
     */
    where: Prisma.BienImageWhereUniqueInput;
};
/**
 * BienImage updateMany
 */
export type BienImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BienImages.
     */
    data: Prisma.XOR<Prisma.BienImageUpdateManyMutationInput, Prisma.BienImageUncheckedUpdateManyInput>;
    /**
     * Filter which BienImages to update
     */
    where?: Prisma.BienImageWhereInput;
    /**
     * Limit how many BienImages to update.
     */
    limit?: number;
};
/**
 * BienImage updateManyAndReturn
 */
export type BienImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * The data used to update BienImages.
     */
    data: Prisma.XOR<Prisma.BienImageUpdateManyMutationInput, Prisma.BienImageUncheckedUpdateManyInput>;
    /**
     * Filter which BienImages to update
     */
    where?: Prisma.BienImageWhereInput;
    /**
     * Limit how many BienImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BienImage upsert
 */
export type BienImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the BienImage to update in case it exists.
     */
    where: Prisma.BienImageWhereUniqueInput;
    /**
     * In case the BienImage found by the `where` argument doesn't exist, create a new BienImage with this data.
     */
    create: Prisma.XOR<Prisma.BienImageCreateInput, Prisma.BienImageUncheckedCreateInput>;
    /**
     * In case the BienImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BienImageUpdateInput, Prisma.BienImageUncheckedUpdateInput>;
};
/**
 * BienImage delete
 */
export type BienImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
    /**
     * Filter which BienImage to delete.
     */
    where: Prisma.BienImageWhereUniqueInput;
};
/**
 * BienImage deleteMany
 */
export type BienImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BienImages to delete
     */
    where?: Prisma.BienImageWhereInput;
    /**
     * Limit how many BienImages to delete.
     */
    limit?: number;
};
/**
 * BienImage without action
 */
export type BienImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienImage
     */
    select?: Prisma.BienImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienImage
     */
    omit?: Prisma.BienImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienImageInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=BienImage.d.ts.map