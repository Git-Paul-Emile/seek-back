import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumTypeProprietaireFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProprietaire | Prisma.EnumTypeProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeProprietaireFilter<$PrismaModel> | $Enums.TypeProprietaire;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumStatutProprietaireFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProprietaire | Prisma.EnumStatutProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutProprietaireFilter<$PrismaModel> | $Enums.StatutProprietaire;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumTypeProprietaireWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProprietaire | Prisma.EnumTypeProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeProprietaireWithAggregatesFilter<$PrismaModel> | $Enums.TypeProprietaire;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeProprietaireFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeProprietaireFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumStatutProprietaireWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProprietaire | Prisma.EnumStatutProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutProprietaireWithAggregatesFilter<$PrismaModel> | $Enums.StatutProprietaire;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutProprietaireFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutProprietaireFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumResetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResetType | Prisma.EnumResetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumResetTypeFilter<$PrismaModel> | $Enums.ResetType;
};
export type EnumResetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResetType | Prisma.EnumResetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumResetTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResetType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumResetTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumResetTypeFilter<$PrismaModel>;
};
export type EnumTypeBienFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBien | Prisma.EnumTypeBienFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeBienFilter<$PrismaModel> | $Enums.TypeBien;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type EnumStatutBienFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutBien | Prisma.EnumStatutBienFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutBienFilter<$PrismaModel> | $Enums.StatutBien;
};
export type EnumModeLocationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeLocation | Prisma.EnumModeLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModeLocationNullableFilter<$PrismaModel> | $Enums.ModeLocation | null;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumTypeBienWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBien | Prisma.EnumTypeBienFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeBienWithAggregatesFilter<$PrismaModel> | $Enums.TypeBien;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeBienFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeBienFilter<$PrismaModel>;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumStatutBienWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutBien | Prisma.EnumStatutBienFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutBienWithAggregatesFilter<$PrismaModel> | $Enums.StatutBien;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutBienFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutBienFilter<$PrismaModel>;
};
export type EnumModeLocationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeLocation | Prisma.EnumModeLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModeLocationNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModeLocation | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModeLocationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModeLocationNullableFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumCategorieEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieEtablissement | Prisma.EnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCategorieEtablissementFilter<$PrismaModel> | $Enums.CategorieEtablissement;
};
export type EnumTypeEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel> | $Enums.TypeEtablissement;
};
export type EnumCategorieEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieEtablissement | Prisma.EnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCategorieEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.CategorieEtablissement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCategorieEtablissementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCategorieEtablissementFilter<$PrismaModel>;
};
export type EnumTypeEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.TypeEtablissement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumTypeProprietaireFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProprietaire | Prisma.EnumTypeProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeProprietaireFilter<$PrismaModel> | $Enums.TypeProprietaire;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumStatutProprietaireFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProprietaire | Prisma.EnumStatutProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutProprietaireFilter<$PrismaModel> | $Enums.StatutProprietaire;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumTypeProprietaireWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProprietaire | Prisma.EnumTypeProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeProprietaire[] | Prisma.ListEnumTypeProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeProprietaireWithAggregatesFilter<$PrismaModel> | $Enums.TypeProprietaire;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeProprietaireFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeProprietaireFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumStatutProprietaireWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProprietaire | Prisma.EnumStatutProprietaireFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutProprietaire[] | Prisma.ListEnumStatutProprietaireFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutProprietaireWithAggregatesFilter<$PrismaModel> | $Enums.StatutProprietaire;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutProprietaireFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutProprietaireFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumResetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResetType | Prisma.EnumResetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumResetTypeFilter<$PrismaModel> | $Enums.ResetType;
};
export type NestedEnumResetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResetType | Prisma.EnumResetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ResetType[] | Prisma.ListEnumResetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumResetTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResetType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumResetTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumResetTypeFilter<$PrismaModel>;
};
export type NestedEnumTypeBienFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBien | Prisma.EnumTypeBienFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeBienFilter<$PrismaModel> | $Enums.TypeBien;
};
export type NestedEnumStatutBienFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutBien | Prisma.EnumStatutBienFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutBienFilter<$PrismaModel> | $Enums.StatutBien;
};
export type NestedEnumModeLocationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeLocation | Prisma.EnumModeLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModeLocationNullableFilter<$PrismaModel> | $Enums.ModeLocation | null;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumTypeBienWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBien | Prisma.EnumTypeBienFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeBien[] | Prisma.ListEnumTypeBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeBienWithAggregatesFilter<$PrismaModel> | $Enums.TypeBien;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeBienFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeBienFilter<$PrismaModel>;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumStatutBienWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutBien | Prisma.EnumStatutBienFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatutBien[] | Prisma.ListEnumStatutBienFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatutBienWithAggregatesFilter<$PrismaModel> | $Enums.StatutBien;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutBienFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutBienFilter<$PrismaModel>;
};
export type NestedEnumModeLocationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeLocation | Prisma.EnumModeLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModeLocation[] | Prisma.ListEnumModeLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModeLocationNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModeLocation | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModeLocationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModeLocationNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedEnumCategorieEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieEtablissement | Prisma.EnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCategorieEtablissementFilter<$PrismaModel> | $Enums.CategorieEtablissement;
};
export type NestedEnumTypeEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel> | $Enums.TypeEtablissement;
};
export type NestedEnumCategorieEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategorieEtablissement | Prisma.EnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CategorieEtablissement[] | Prisma.ListEnumCategorieEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCategorieEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.CategorieEtablissement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCategorieEtablissementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCategorieEtablissementFilter<$PrismaModel>;
};
export type NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TypeEtablissement[] | Prisma.ListEnumTypeEtablissementFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.TypeEtablissement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map