import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Locataire
 *
 */
export type LocataireModel = runtime.Types.Result.DefaultSelection<Prisma.$LocatairePayload>;
export type AggregateLocataire = {
    _count: LocataireCountAggregateOutputType | null;
    _avg: LocataireAvgAggregateOutputType | null;
    _sum: LocataireSumAggregateOutputType | null;
    _min: LocataireMinAggregateOutputType | null;
    _max: LocataireMaxAggregateOutputType | null;
};
export type LocataireAvgAggregateOutputType = {
    nbOccupants: number | null;
};
export type LocataireSumAggregateOutputType = {
    nbOccupants: number | null;
};
export type LocataireMinAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    email: string | null;
    nbOccupants: number | null;
    presenceEnfants: boolean | null;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    sexe: string | null;
    numPieceIdentite: string | null;
    typePiece: $Enums.TypePieceIdentite | null;
    dateDelivrance: Date | null;
    dateExpiration: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
    statut: $Enums.StatutLocataire | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LocataireMaxAggregateOutputType = {
    id: string | null;
    proprietaireId: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    email: string | null;
    nbOccupants: number | null;
    presenceEnfants: boolean | null;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    sexe: string | null;
    numPieceIdentite: string | null;
    typePiece: $Enums.TypePieceIdentite | null;
    dateDelivrance: Date | null;
    dateExpiration: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
    statut: $Enums.StatutLocataire | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LocataireCountAggregateOutputType = {
    id: number;
    proprietaireId: number;
    nom: number;
    prenom: number;
    telephone: number;
    email: number;
    nbOccupants: number;
    presenceEnfants: number;
    dateNaissance: number;
    lieuNaissance: number;
    nationalite: number;
    sexe: number;
    numPieceIdentite: number;
    typePiece: number;
    dateDelivrance: number;
    dateExpiration: number;
    autoriteDelivrance: number;
    situationProfessionnelle: number;
    activationToken: number;
    tokenExpiresAt: number;
    statut: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LocataireAvgAggregateInputType = {
    nbOccupants?: true;
};
export type LocataireSumAggregateInputType = {
    nbOccupants?: true;
};
export type LocataireMinAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    email?: true;
    nbOccupants?: true;
    presenceEnfants?: true;
    dateNaissance?: true;
    lieuNaissance?: true;
    nationalite?: true;
    sexe?: true;
    numPieceIdentite?: true;
    typePiece?: true;
    dateDelivrance?: true;
    dateExpiration?: true;
    autoriteDelivrance?: true;
    situationProfessionnelle?: true;
    activationToken?: true;
    tokenExpiresAt?: true;
    statut?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LocataireMaxAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    email?: true;
    nbOccupants?: true;
    presenceEnfants?: true;
    dateNaissance?: true;
    lieuNaissance?: true;
    nationalite?: true;
    sexe?: true;
    numPieceIdentite?: true;
    typePiece?: true;
    dateDelivrance?: true;
    dateExpiration?: true;
    autoriteDelivrance?: true;
    situationProfessionnelle?: true;
    activationToken?: true;
    tokenExpiresAt?: true;
    statut?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LocataireCountAggregateInputType = {
    id?: true;
    proprietaireId?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    email?: true;
    nbOccupants?: true;
    presenceEnfants?: true;
    dateNaissance?: true;
    lieuNaissance?: true;
    nationalite?: true;
    sexe?: true;
    numPieceIdentite?: true;
    typePiece?: true;
    dateDelivrance?: true;
    dateExpiration?: true;
    autoriteDelivrance?: true;
    situationProfessionnelle?: true;
    activationToken?: true;
    tokenExpiresAt?: true;
    statut?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LocataireAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Locataire to aggregate.
     */
    where?: Prisma.LocataireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locataires to fetch.
     */
    orderBy?: Prisma.LocataireOrderByWithRelationInput | Prisma.LocataireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LocataireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locataires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locataires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Locataires
    **/
    _count?: true | LocataireCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LocataireAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LocataireSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LocataireMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LocataireMaxAggregateInputType;
};
export type GetLocataireAggregateType<T extends LocataireAggregateArgs> = {
    [P in keyof T & keyof AggregateLocataire]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocataire[P]> : Prisma.GetScalarType<T[P], AggregateLocataire[P]>;
};
export type LocataireGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocataireWhereInput;
    orderBy?: Prisma.LocataireOrderByWithAggregationInput | Prisma.LocataireOrderByWithAggregationInput[];
    by: Prisma.LocataireScalarFieldEnum[] | Prisma.LocataireScalarFieldEnum;
    having?: Prisma.LocataireScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocataireCountAggregateInputType | true;
    _avg?: LocataireAvgAggregateInputType;
    _sum?: LocataireSumAggregateInputType;
    _min?: LocataireMinAggregateInputType;
    _max?: LocataireMaxAggregateInputType;
};
export type LocataireGroupByOutputType = {
    id: string;
    proprietaireId: string;
    nom: string;
    prenom: string;
    telephone: string;
    email: string | null;
    nbOccupants: number;
    presenceEnfants: boolean;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    sexe: string | null;
    numPieceIdentite: string | null;
    typePiece: $Enums.TypePieceIdentite | null;
    dateDelivrance: Date | null;
    dateExpiration: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
    statut: $Enums.StatutLocataire;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LocataireCountAggregateOutputType | null;
    _avg: LocataireAvgAggregateOutputType | null;
    _sum: LocataireSumAggregateOutputType | null;
    _min: LocataireMinAggregateOutputType | null;
    _max: LocataireMaxAggregateOutputType | null;
};
type GetLocataireGroupByPayload<T extends LocataireGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocataireGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocataireGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocataireGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocataireGroupByOutputType[P]>;
}>>;
export type LocataireWhereInput = {
    AND?: Prisma.LocataireWhereInput | Prisma.LocataireWhereInput[];
    OR?: Prisma.LocataireWhereInput[];
    NOT?: Prisma.LocataireWhereInput | Prisma.LocataireWhereInput[];
    id?: Prisma.StringFilter<"Locataire"> | string;
    proprietaireId?: Prisma.StringFilter<"Locataire"> | string;
    nom?: Prisma.StringFilter<"Locataire"> | string;
    prenom?: Prisma.StringFilter<"Locataire"> | string;
    telephone?: Prisma.StringFilter<"Locataire"> | string;
    email?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    nbOccupants?: Prisma.IntFilter<"Locataire"> | number;
    presenceEnfants?: Prisma.BoolFilter<"Locataire"> | boolean;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    lieuNaissance?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    nationalite?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    sexe?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    numPieceIdentite?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    typePiece?: Prisma.EnumTypePieceIdentiteNullableFilter<"Locataire"> | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    dateExpiration?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    autoriteDelivrance?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    situationProfessionnelle?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    activationToken?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFilter<"Locataire"> | $Enums.StatutLocataire;
    password?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Locataire"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Locataire"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    bails?: Prisma.BailLocationListRelationFilter;
    refreshTokens?: Prisma.LocataireRefreshTokenListRelationFilter;
};
export type LocataireOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbOccupants?: Prisma.SortOrder;
    presenceEnfants?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    lieuNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationalite?: Prisma.SortOrderInput | Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    numPieceIdentite?: Prisma.SortOrderInput | Prisma.SortOrder;
    typePiece?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDelivrance?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateExpiration?: Prisma.SortOrderInput | Prisma.SortOrder;
    autoriteDelivrance?: Prisma.SortOrderInput | Prisma.SortOrder;
    situationProfessionnelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    activationToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
    bails?: Prisma.BailLocationOrderByRelationAggregateInput;
    refreshTokens?: Prisma.LocataireRefreshTokenOrderByRelationAggregateInput;
};
export type LocataireWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    activationToken?: string;
    AND?: Prisma.LocataireWhereInput | Prisma.LocataireWhereInput[];
    OR?: Prisma.LocataireWhereInput[];
    NOT?: Prisma.LocataireWhereInput | Prisma.LocataireWhereInput[];
    proprietaireId?: Prisma.StringFilter<"Locataire"> | string;
    nom?: Prisma.StringFilter<"Locataire"> | string;
    prenom?: Prisma.StringFilter<"Locataire"> | string;
    telephone?: Prisma.StringFilter<"Locataire"> | string;
    email?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    nbOccupants?: Prisma.IntFilter<"Locataire"> | number;
    presenceEnfants?: Prisma.BoolFilter<"Locataire"> | boolean;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    lieuNaissance?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    nationalite?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    sexe?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    numPieceIdentite?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    typePiece?: Prisma.EnumTypePieceIdentiteNullableFilter<"Locataire"> | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    dateExpiration?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    autoriteDelivrance?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    situationProfessionnelle?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFilter<"Locataire"> | $Enums.StatutLocataire;
    password?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Locataire"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Locataire"> | Date | string;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    bails?: Prisma.BailLocationListRelationFilter;
    refreshTokens?: Prisma.LocataireRefreshTokenListRelationFilter;
}, "id" | "activationToken">;
export type LocataireOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbOccupants?: Prisma.SortOrder;
    presenceEnfants?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    lieuNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationalite?: Prisma.SortOrderInput | Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    numPieceIdentite?: Prisma.SortOrderInput | Prisma.SortOrder;
    typePiece?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDelivrance?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateExpiration?: Prisma.SortOrderInput | Prisma.SortOrder;
    autoriteDelivrance?: Prisma.SortOrderInput | Prisma.SortOrder;
    situationProfessionnelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    activationToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LocataireCountOrderByAggregateInput;
    _avg?: Prisma.LocataireAvgOrderByAggregateInput;
    _max?: Prisma.LocataireMaxOrderByAggregateInput;
    _min?: Prisma.LocataireMinOrderByAggregateInput;
    _sum?: Prisma.LocataireSumOrderByAggregateInput;
};
export type LocataireScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocataireScalarWhereWithAggregatesInput | Prisma.LocataireScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocataireScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocataireScalarWhereWithAggregatesInput | Prisma.LocataireScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Locataire"> | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"Locataire"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Locataire"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Locataire"> | string;
    telephone?: Prisma.StringWithAggregatesFilter<"Locataire"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    nbOccupants?: Prisma.IntWithAggregatesFilter<"Locataire"> | number;
    presenceEnfants?: Prisma.BoolWithAggregatesFilter<"Locataire"> | boolean;
    dateNaissance?: Prisma.DateTimeNullableWithAggregatesFilter<"Locataire"> | Date | string | null;
    lieuNaissance?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    nationalite?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    sexe?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    numPieceIdentite?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    typePiece?: Prisma.EnumTypePieceIdentiteNullableWithAggregatesFilter<"Locataire"> | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.DateTimeNullableWithAggregatesFilter<"Locataire"> | Date | string | null;
    dateExpiration?: Prisma.DateTimeNullableWithAggregatesFilter<"Locataire"> | Date | string | null;
    autoriteDelivrance?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    situationProfessionnelle?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    activationToken?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Locataire"> | Date | string | null;
    statut?: Prisma.EnumStatutLocataireWithAggregatesFilter<"Locataire"> | $Enums.StatutLocataire;
    password?: Prisma.StringNullableWithAggregatesFilter<"Locataire"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Locataire"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Locataire"> | Date | string;
};
export type LocataireCreateInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutLocatairesInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutLocataireInput;
    refreshTokens?: Prisma.LocataireRefreshTokenCreateNestedManyWithoutLocataireInput;
};
export type LocataireUncheckedCreateInput = {
    id?: string;
    proprietaireId: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutLocataireInput;
    refreshTokens?: Prisma.LocataireRefreshTokenUncheckedCreateNestedManyWithoutLocataireInput;
};
export type LocataireUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutLocatairesNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutLocataireNestedInput;
    refreshTokens?: Prisma.LocataireRefreshTokenUpdateManyWithoutLocataireNestedInput;
};
export type LocataireUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutLocataireNestedInput;
    refreshTokens?: Prisma.LocataireRefreshTokenUncheckedUpdateManyWithoutLocataireNestedInput;
};
export type LocataireCreateManyInput = {
    id?: string;
    proprietaireId: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LocataireUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocataireCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nbOccupants?: Prisma.SortOrder;
    presenceEnfants?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    lieuNaissance?: Prisma.SortOrder;
    nationalite?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    numPieceIdentite?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    dateDelivrance?: Prisma.SortOrder;
    dateExpiration?: Prisma.SortOrder;
    autoriteDelivrance?: Prisma.SortOrder;
    situationProfessionnelle?: Prisma.SortOrder;
    activationToken?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LocataireAvgOrderByAggregateInput = {
    nbOccupants?: Prisma.SortOrder;
};
export type LocataireMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nbOccupants?: Prisma.SortOrder;
    presenceEnfants?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    lieuNaissance?: Prisma.SortOrder;
    nationalite?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    numPieceIdentite?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    dateDelivrance?: Prisma.SortOrder;
    dateExpiration?: Prisma.SortOrder;
    autoriteDelivrance?: Prisma.SortOrder;
    situationProfessionnelle?: Prisma.SortOrder;
    activationToken?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LocataireMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nbOccupants?: Prisma.SortOrder;
    presenceEnfants?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    lieuNaissance?: Prisma.SortOrder;
    nationalite?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    numPieceIdentite?: Prisma.SortOrder;
    typePiece?: Prisma.SortOrder;
    dateDelivrance?: Prisma.SortOrder;
    dateExpiration?: Prisma.SortOrder;
    autoriteDelivrance?: Prisma.SortOrder;
    situationProfessionnelle?: Prisma.SortOrder;
    activationToken?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LocataireSumOrderByAggregateInput = {
    nbOccupants?: Prisma.SortOrder;
};
export type LocataireScalarRelationFilter = {
    is?: Prisma.LocataireWhereInput;
    isNot?: Prisma.LocataireWhereInput;
};
export type LocataireListRelationFilter = {
    every?: Prisma.LocataireWhereInput;
    some?: Prisma.LocataireWhereInput;
    none?: Prisma.LocataireWhereInput;
};
export type LocataireOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableEnumTypePieceIdentiteFieldUpdateOperationsInput = {
    set?: $Enums.TypePieceIdentite | null;
};
export type EnumStatutLocataireFieldUpdateOperationsInput = {
    set?: $Enums.StatutLocataire;
};
export type LocataireCreateNestedOneWithoutBailsInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutBailsInput, Prisma.LocataireUncheckedCreateWithoutBailsInput>;
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutBailsInput;
    connect?: Prisma.LocataireWhereUniqueInput;
};
export type LocataireUpdateOneRequiredWithoutBailsNestedInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutBailsInput, Prisma.LocataireUncheckedCreateWithoutBailsInput>;
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutBailsInput;
    upsert?: Prisma.LocataireUpsertWithoutBailsInput;
    connect?: Prisma.LocataireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocataireUpdateToOneWithWhereWithoutBailsInput, Prisma.LocataireUpdateWithoutBailsInput>, Prisma.LocataireUncheckedUpdateWithoutBailsInput>;
};
export type LocataireCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutRefreshTokensInput, Prisma.LocataireUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.LocataireWhereUniqueInput;
};
export type LocataireUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutRefreshTokensInput, Prisma.LocataireUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.LocataireUpsertWithoutRefreshTokensInput;
    connect?: Prisma.LocataireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocataireUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.LocataireUpdateWithoutRefreshTokensInput>, Prisma.LocataireUncheckedUpdateWithoutRefreshTokensInput>;
};
export type LocataireCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutProprietaireInput, Prisma.LocataireUncheckedCreateWithoutProprietaireInput> | Prisma.LocataireCreateWithoutProprietaireInput[] | Prisma.LocataireUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutProprietaireInput | Prisma.LocataireCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.LocataireCreateManyProprietaireInputEnvelope;
    connect?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
};
export type LocataireUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutProprietaireInput, Prisma.LocataireUncheckedCreateWithoutProprietaireInput> | Prisma.LocataireCreateWithoutProprietaireInput[] | Prisma.LocataireUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutProprietaireInput | Prisma.LocataireCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.LocataireCreateManyProprietaireInputEnvelope;
    connect?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
};
export type LocataireUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutProprietaireInput, Prisma.LocataireUncheckedCreateWithoutProprietaireInput> | Prisma.LocataireCreateWithoutProprietaireInput[] | Prisma.LocataireUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutProprietaireInput | Prisma.LocataireCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.LocataireUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.LocataireUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.LocataireCreateManyProprietaireInputEnvelope;
    set?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    disconnect?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    delete?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    connect?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    update?: Prisma.LocataireUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.LocataireUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.LocataireUpdateManyWithWhereWithoutProprietaireInput | Prisma.LocataireUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.LocataireScalarWhereInput | Prisma.LocataireScalarWhereInput[];
};
export type LocataireUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.LocataireCreateWithoutProprietaireInput, Prisma.LocataireUncheckedCreateWithoutProprietaireInput> | Prisma.LocataireCreateWithoutProprietaireInput[] | Prisma.LocataireUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.LocataireCreateOrConnectWithoutProprietaireInput | Prisma.LocataireCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.LocataireUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.LocataireUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.LocataireCreateManyProprietaireInputEnvelope;
    set?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    disconnect?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    delete?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    connect?: Prisma.LocataireWhereUniqueInput | Prisma.LocataireWhereUniqueInput[];
    update?: Prisma.LocataireUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.LocataireUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.LocataireUpdateManyWithWhereWithoutProprietaireInput | Prisma.LocataireUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.LocataireScalarWhereInput | Prisma.LocataireScalarWhereInput[];
};
export type LocataireCreateWithoutBailsInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutLocatairesInput;
    refreshTokens?: Prisma.LocataireRefreshTokenCreateNestedManyWithoutLocataireInput;
};
export type LocataireUncheckedCreateWithoutBailsInput = {
    id?: string;
    proprietaireId: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refreshTokens?: Prisma.LocataireRefreshTokenUncheckedCreateNestedManyWithoutLocataireInput;
};
export type LocataireCreateOrConnectWithoutBailsInput = {
    where: Prisma.LocataireWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocataireCreateWithoutBailsInput, Prisma.LocataireUncheckedCreateWithoutBailsInput>;
};
export type LocataireUpsertWithoutBailsInput = {
    update: Prisma.XOR<Prisma.LocataireUpdateWithoutBailsInput, Prisma.LocataireUncheckedUpdateWithoutBailsInput>;
    create: Prisma.XOR<Prisma.LocataireCreateWithoutBailsInput, Prisma.LocataireUncheckedCreateWithoutBailsInput>;
    where?: Prisma.LocataireWhereInput;
};
export type LocataireUpdateToOneWithWhereWithoutBailsInput = {
    where?: Prisma.LocataireWhereInput;
    data: Prisma.XOR<Prisma.LocataireUpdateWithoutBailsInput, Prisma.LocataireUncheckedUpdateWithoutBailsInput>;
};
export type LocataireUpdateWithoutBailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutLocatairesNestedInput;
    refreshTokens?: Prisma.LocataireRefreshTokenUpdateManyWithoutLocataireNestedInput;
};
export type LocataireUncheckedUpdateWithoutBailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: Prisma.LocataireRefreshTokenUncheckedUpdateManyWithoutLocataireNestedInput;
};
export type LocataireCreateWithoutRefreshTokensInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutLocatairesInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutLocataireInput;
};
export type LocataireUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    proprietaireId: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutLocataireInput;
};
export type LocataireCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.LocataireWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocataireCreateWithoutRefreshTokensInput, Prisma.LocataireUncheckedCreateWithoutRefreshTokensInput>;
};
export type LocataireUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.LocataireUpdateWithoutRefreshTokensInput, Prisma.LocataireUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.LocataireCreateWithoutRefreshTokensInput, Prisma.LocataireUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.LocataireWhereInput;
};
export type LocataireUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.LocataireWhereInput;
    data: Prisma.XOR<Prisma.LocataireUpdateWithoutRefreshTokensInput, Prisma.LocataireUncheckedUpdateWithoutRefreshTokensInput>;
};
export type LocataireUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutLocatairesNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutLocataireNestedInput;
};
export type LocataireUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutLocataireNestedInput;
};
export type LocataireCreateWithoutProprietaireInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bails?: Prisma.BailLocationCreateNestedManyWithoutLocataireInput;
    refreshTokens?: Prisma.LocataireRefreshTokenCreateNestedManyWithoutLocataireInput;
};
export type LocataireUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutLocataireInput;
    refreshTokens?: Prisma.LocataireRefreshTokenUncheckedCreateNestedManyWithoutLocataireInput;
};
export type LocataireCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.LocataireWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocataireCreateWithoutProprietaireInput, Prisma.LocataireUncheckedCreateWithoutProprietaireInput>;
};
export type LocataireCreateManyProprietaireInputEnvelope = {
    data: Prisma.LocataireCreateManyProprietaireInput | Prisma.LocataireCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type LocataireUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.LocataireWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocataireUpdateWithoutProprietaireInput, Prisma.LocataireUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.LocataireCreateWithoutProprietaireInput, Prisma.LocataireUncheckedCreateWithoutProprietaireInput>;
};
export type LocataireUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.LocataireWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocataireUpdateWithoutProprietaireInput, Prisma.LocataireUncheckedUpdateWithoutProprietaireInput>;
};
export type LocataireUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.LocataireScalarWhereInput;
    data: Prisma.XOR<Prisma.LocataireUpdateManyMutationInput, Prisma.LocataireUncheckedUpdateManyWithoutProprietaireInput>;
};
export type LocataireScalarWhereInput = {
    AND?: Prisma.LocataireScalarWhereInput | Prisma.LocataireScalarWhereInput[];
    OR?: Prisma.LocataireScalarWhereInput[];
    NOT?: Prisma.LocataireScalarWhereInput | Prisma.LocataireScalarWhereInput[];
    id?: Prisma.StringFilter<"Locataire"> | string;
    proprietaireId?: Prisma.StringFilter<"Locataire"> | string;
    nom?: Prisma.StringFilter<"Locataire"> | string;
    prenom?: Prisma.StringFilter<"Locataire"> | string;
    telephone?: Prisma.StringFilter<"Locataire"> | string;
    email?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    nbOccupants?: Prisma.IntFilter<"Locataire"> | number;
    presenceEnfants?: Prisma.BoolFilter<"Locataire"> | boolean;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    lieuNaissance?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    nationalite?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    sexe?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    numPieceIdentite?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    typePiece?: Prisma.EnumTypePieceIdentiteNullableFilter<"Locataire"> | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    dateExpiration?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    autoriteDelivrance?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    situationProfessionnelle?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    activationToken?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"Locataire"> | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFilter<"Locataire"> | $Enums.StatutLocataire;
    password?: Prisma.StringNullableFilter<"Locataire"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Locataire"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Locataire"> | Date | string;
};
export type LocataireCreateManyProprietaireInput = {
    id?: string;
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    nbOccupants?: number;
    presenceEnfants?: boolean;
    dateNaissance?: Date | string | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: $Enums.TypePieceIdentite | null;
    dateDelivrance?: Date | string | null;
    dateExpiration?: Date | string | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
    activationToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    statut?: $Enums.StatutLocataire;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LocataireUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bails?: Prisma.BailLocationUpdateManyWithoutLocataireNestedInput;
    refreshTokens?: Prisma.LocataireRefreshTokenUpdateManyWithoutLocataireNestedInput;
};
export type LocataireUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutLocataireNestedInput;
    refreshTokens?: Prisma.LocataireRefreshTokenUncheckedUpdateManyWithoutLocataireNestedInput;
};
export type LocataireUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbOccupants?: Prisma.IntFieldUpdateOperationsInput | number;
    presenceEnfants?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lieuNaissance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationalite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numPieceIdentite?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typePiece?: Prisma.NullableEnumTypePieceIdentiteFieldUpdateOperationsInput | $Enums.TypePieceIdentite | null;
    dateDelivrance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateExpiration?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    autoriteDelivrance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    situationProfessionnelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.EnumStatutLocataireFieldUpdateOperationsInput | $Enums.StatutLocataire;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LocataireCountOutputType
 */
export type LocataireCountOutputType = {
    bails: number;
    refreshTokens: number;
};
export type LocataireCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bails?: boolean | LocataireCountOutputTypeCountBailsArgs;
    refreshTokens?: boolean | LocataireCountOutputTypeCountRefreshTokensArgs;
};
/**
 * LocataireCountOutputType without action
 */
export type LocataireCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireCountOutputType
     */
    select?: Prisma.LocataireCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LocataireCountOutputType without action
 */
export type LocataireCountOutputTypeCountBailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BailLocationWhereInput;
};
/**
 * LocataireCountOutputType without action
 */
export type LocataireCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocataireRefreshTokenWhereInput;
};
export type LocataireSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    nbOccupants?: boolean;
    presenceEnfants?: boolean;
    dateNaissance?: boolean;
    lieuNaissance?: boolean;
    nationalite?: boolean;
    sexe?: boolean;
    numPieceIdentite?: boolean;
    typePiece?: boolean;
    dateDelivrance?: boolean;
    dateExpiration?: boolean;
    autoriteDelivrance?: boolean;
    situationProfessionnelle?: boolean;
    activationToken?: boolean;
    tokenExpiresAt?: boolean;
    statut?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    bails?: boolean | Prisma.Locataire$bailsArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.Locataire$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.LocataireCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locataire"]>;
export type LocataireSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    nbOccupants?: boolean;
    presenceEnfants?: boolean;
    dateNaissance?: boolean;
    lieuNaissance?: boolean;
    nationalite?: boolean;
    sexe?: boolean;
    numPieceIdentite?: boolean;
    typePiece?: boolean;
    dateDelivrance?: boolean;
    dateExpiration?: boolean;
    autoriteDelivrance?: boolean;
    situationProfessionnelle?: boolean;
    activationToken?: boolean;
    tokenExpiresAt?: boolean;
    statut?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locataire"]>;
export type LocataireSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    nbOccupants?: boolean;
    presenceEnfants?: boolean;
    dateNaissance?: boolean;
    lieuNaissance?: boolean;
    nationalite?: boolean;
    sexe?: boolean;
    numPieceIdentite?: boolean;
    typePiece?: boolean;
    dateDelivrance?: boolean;
    dateExpiration?: boolean;
    autoriteDelivrance?: boolean;
    situationProfessionnelle?: boolean;
    activationToken?: boolean;
    tokenExpiresAt?: boolean;
    statut?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locataire"]>;
export type LocataireSelectScalar = {
    id?: boolean;
    proprietaireId?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    email?: boolean;
    nbOccupants?: boolean;
    presenceEnfants?: boolean;
    dateNaissance?: boolean;
    lieuNaissance?: boolean;
    nationalite?: boolean;
    sexe?: boolean;
    numPieceIdentite?: boolean;
    typePiece?: boolean;
    dateDelivrance?: boolean;
    dateExpiration?: boolean;
    autoriteDelivrance?: boolean;
    situationProfessionnelle?: boolean;
    activationToken?: boolean;
    tokenExpiresAt?: boolean;
    statut?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LocataireOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proprietaireId" | "nom" | "prenom" | "telephone" | "email" | "nbOccupants" | "presenceEnfants" | "dateNaissance" | "lieuNaissance" | "nationalite" | "sexe" | "numPieceIdentite" | "typePiece" | "dateDelivrance" | "dateExpiration" | "autoriteDelivrance" | "situationProfessionnelle" | "activationToken" | "tokenExpiresAt" | "statut" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["locataire"]>;
export type LocataireInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    bails?: boolean | Prisma.Locataire$bailsArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.Locataire$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.LocataireCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LocataireIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type LocataireIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $LocatairePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Locataire";
    objects: {
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
        bails: Prisma.$BailLocationPayload<ExtArgs>[];
        refreshTokens: Prisma.$LocataireRefreshTokenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        proprietaireId: string;
        nom: string;
        prenom: string;
        telephone: string;
        email: string | null;
        nbOccupants: number;
        presenceEnfants: boolean;
        dateNaissance: Date | null;
        lieuNaissance: string | null;
        nationalite: string | null;
        sexe: string | null;
        numPieceIdentite: string | null;
        typePiece: $Enums.TypePieceIdentite | null;
        dateDelivrance: Date | null;
        dateExpiration: Date | null;
        autoriteDelivrance: string | null;
        situationProfessionnelle: string | null;
        activationToken: string | null;
        tokenExpiresAt: Date | null;
        statut: $Enums.StatutLocataire;
        password: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["locataire"]>;
    composites: {};
};
export type LocataireGetPayload<S extends boolean | null | undefined | LocataireDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocatairePayload, S>;
export type LocataireCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocataireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocataireCountAggregateInputType | true;
};
export interface LocataireDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Locataire'];
        meta: {
            name: 'Locataire';
        };
    };
    /**
     * Find zero or one Locataire that matches the filter.
     * @param {LocataireFindUniqueArgs} args - Arguments to find a Locataire
     * @example
     * // Get one Locataire
     * const locataire = await prisma.locataire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocataireFindUniqueArgs>(args: Prisma.SelectSubset<T, LocataireFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Locataire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocataireFindUniqueOrThrowArgs} args - Arguments to find a Locataire
     * @example
     * // Get one Locataire
     * const locataire = await prisma.locataire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocataireFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocataireFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Locataire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireFindFirstArgs} args - Arguments to find a Locataire
     * @example
     * // Get one Locataire
     * const locataire = await prisma.locataire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocataireFindFirstArgs>(args?: Prisma.SelectSubset<T, LocataireFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Locataire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireFindFirstOrThrowArgs} args - Arguments to find a Locataire
     * @example
     * // Get one Locataire
     * const locataire = await prisma.locataire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocataireFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocataireFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Locataires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locataires
     * const locataires = await prisma.locataire.findMany()
     *
     * // Get first 10 Locataires
     * const locataires = await prisma.locataire.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const locataireWithIdOnly = await prisma.locataire.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LocataireFindManyArgs>(args?: Prisma.SelectSubset<T, LocataireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Locataire.
     * @param {LocataireCreateArgs} args - Arguments to create a Locataire.
     * @example
     * // Create one Locataire
     * const Locataire = await prisma.locataire.create({
     *   data: {
     *     // ... data to create a Locataire
     *   }
     * })
     *
     */
    create<T extends LocataireCreateArgs>(args: Prisma.SelectSubset<T, LocataireCreateArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Locataires.
     * @param {LocataireCreateManyArgs} args - Arguments to create many Locataires.
     * @example
     * // Create many Locataires
     * const locataire = await prisma.locataire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LocataireCreateManyArgs>(args?: Prisma.SelectSubset<T, LocataireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Locataires and returns the data saved in the database.
     * @param {LocataireCreateManyAndReturnArgs} args - Arguments to create many Locataires.
     * @example
     * // Create many Locataires
     * const locataire = await prisma.locataire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Locataires and only return the `id`
     * const locataireWithIdOnly = await prisma.locataire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LocataireCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocataireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Locataire.
     * @param {LocataireDeleteArgs} args - Arguments to delete one Locataire.
     * @example
     * // Delete one Locataire
     * const Locataire = await prisma.locataire.delete({
     *   where: {
     *     // ... filter to delete one Locataire
     *   }
     * })
     *
     */
    delete<T extends LocataireDeleteArgs>(args: Prisma.SelectSubset<T, LocataireDeleteArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Locataire.
     * @param {LocataireUpdateArgs} args - Arguments to update one Locataire.
     * @example
     * // Update one Locataire
     * const locataire = await prisma.locataire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LocataireUpdateArgs>(args: Prisma.SelectSubset<T, LocataireUpdateArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Locataires.
     * @param {LocataireDeleteManyArgs} args - Arguments to filter Locataires to delete.
     * @example
     * // Delete a few Locataires
     * const { count } = await prisma.locataire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LocataireDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocataireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Locataires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locataires
     * const locataire = await prisma.locataire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LocataireUpdateManyArgs>(args: Prisma.SelectSubset<T, LocataireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Locataires and returns the data updated in the database.
     * @param {LocataireUpdateManyAndReturnArgs} args - Arguments to update many Locataires.
     * @example
     * // Update many Locataires
     * const locataire = await prisma.locataire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Locataires and only return the `id`
     * const locataireWithIdOnly = await prisma.locataire.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocataireUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocataireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Locataire.
     * @param {LocataireUpsertArgs} args - Arguments to update or create a Locataire.
     * @example
     * // Update or create a Locataire
     * const locataire = await prisma.locataire.upsert({
     *   create: {
     *     // ... data to create a Locataire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locataire we want to update
     *   }
     * })
     */
    upsert<T extends LocataireUpsertArgs>(args: Prisma.SelectSubset<T, LocataireUpsertArgs<ExtArgs>>): Prisma.Prisma__LocataireClient<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Locataires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireCountArgs} args - Arguments to filter Locataires to count.
     * @example
     * // Count the number of Locataires
     * const count = await prisma.locataire.count({
     *   where: {
     *     // ... the filter for the Locataires we want to count
     *   }
     * })
    **/
    count<T extends LocataireCountArgs>(args?: Prisma.Subset<T, LocataireCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocataireCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Locataire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocataireAggregateArgs>(args: Prisma.Subset<T, LocataireAggregateArgs>): Prisma.PrismaPromise<GetLocataireAggregateType<T>>;
    /**
     * Group by Locataire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocataireGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LocataireGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocataireGroupByArgs['orderBy'];
    } : {
        orderBy?: LocataireGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocataireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocataireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Locataire model
     */
    readonly fields: LocataireFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Locataire.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LocataireClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proprietaire<T extends Prisma.ProprietaireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProprietaireDefaultArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bails<T extends Prisma.Locataire$bailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Locataire$bailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refreshTokens<T extends Prisma.Locataire$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Locataire$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocataireRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Locataire model
 */
export interface LocataireFieldRefs {
    readonly id: Prisma.FieldRef<"Locataire", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"Locataire", 'String'>;
    readonly nom: Prisma.FieldRef<"Locataire", 'String'>;
    readonly prenom: Prisma.FieldRef<"Locataire", 'String'>;
    readonly telephone: Prisma.FieldRef<"Locataire", 'String'>;
    readonly email: Prisma.FieldRef<"Locataire", 'String'>;
    readonly nbOccupants: Prisma.FieldRef<"Locataire", 'Int'>;
    readonly presenceEnfants: Prisma.FieldRef<"Locataire", 'Boolean'>;
    readonly dateNaissance: Prisma.FieldRef<"Locataire", 'DateTime'>;
    readonly lieuNaissance: Prisma.FieldRef<"Locataire", 'String'>;
    readonly nationalite: Prisma.FieldRef<"Locataire", 'String'>;
    readonly sexe: Prisma.FieldRef<"Locataire", 'String'>;
    readonly numPieceIdentite: Prisma.FieldRef<"Locataire", 'String'>;
    readonly typePiece: Prisma.FieldRef<"Locataire", 'TypePieceIdentite'>;
    readonly dateDelivrance: Prisma.FieldRef<"Locataire", 'DateTime'>;
    readonly dateExpiration: Prisma.FieldRef<"Locataire", 'DateTime'>;
    readonly autoriteDelivrance: Prisma.FieldRef<"Locataire", 'String'>;
    readonly situationProfessionnelle: Prisma.FieldRef<"Locataire", 'String'>;
    readonly activationToken: Prisma.FieldRef<"Locataire", 'String'>;
    readonly tokenExpiresAt: Prisma.FieldRef<"Locataire", 'DateTime'>;
    readonly statut: Prisma.FieldRef<"Locataire", 'StatutLocataire'>;
    readonly password: Prisma.FieldRef<"Locataire", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Locataire", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Locataire", 'DateTime'>;
}
/**
 * Locataire findUnique
 */
export type LocataireFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * Filter, which Locataire to fetch.
     */
    where: Prisma.LocataireWhereUniqueInput;
};
/**
 * Locataire findUniqueOrThrow
 */
export type LocataireFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * Filter, which Locataire to fetch.
     */
    where: Prisma.LocataireWhereUniqueInput;
};
/**
 * Locataire findFirst
 */
export type LocataireFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * Filter, which Locataire to fetch.
     */
    where?: Prisma.LocataireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locataires to fetch.
     */
    orderBy?: Prisma.LocataireOrderByWithRelationInput | Prisma.LocataireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locataires.
     */
    cursor?: Prisma.LocataireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locataires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locataires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locataires.
     */
    distinct?: Prisma.LocataireScalarFieldEnum | Prisma.LocataireScalarFieldEnum[];
};
/**
 * Locataire findFirstOrThrow
 */
export type LocataireFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * Filter, which Locataire to fetch.
     */
    where?: Prisma.LocataireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locataires to fetch.
     */
    orderBy?: Prisma.LocataireOrderByWithRelationInput | Prisma.LocataireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locataires.
     */
    cursor?: Prisma.LocataireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locataires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locataires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locataires.
     */
    distinct?: Prisma.LocataireScalarFieldEnum | Prisma.LocataireScalarFieldEnum[];
};
/**
 * Locataire findMany
 */
export type LocataireFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * Filter, which Locataires to fetch.
     */
    where?: Prisma.LocataireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locataires to fetch.
     */
    orderBy?: Prisma.LocataireOrderByWithRelationInput | Prisma.LocataireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Locataires.
     */
    cursor?: Prisma.LocataireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locataires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locataires.
     */
    skip?: number;
    distinct?: Prisma.LocataireScalarFieldEnum | Prisma.LocataireScalarFieldEnum[];
};
/**
 * Locataire create
 */
export type LocataireCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * The data needed to create a Locataire.
     */
    data: Prisma.XOR<Prisma.LocataireCreateInput, Prisma.LocataireUncheckedCreateInput>;
};
/**
 * Locataire createMany
 */
export type LocataireCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locataires.
     */
    data: Prisma.LocataireCreateManyInput | Prisma.LocataireCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Locataire createManyAndReturn
 */
export type LocataireCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * The data used to create many Locataires.
     */
    data: Prisma.LocataireCreateManyInput | Prisma.LocataireCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Locataire update
 */
export type LocataireUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * The data needed to update a Locataire.
     */
    data: Prisma.XOR<Prisma.LocataireUpdateInput, Prisma.LocataireUncheckedUpdateInput>;
    /**
     * Choose, which Locataire to update.
     */
    where: Prisma.LocataireWhereUniqueInput;
};
/**
 * Locataire updateMany
 */
export type LocataireUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Locataires.
     */
    data: Prisma.XOR<Prisma.LocataireUpdateManyMutationInput, Prisma.LocataireUncheckedUpdateManyInput>;
    /**
     * Filter which Locataires to update
     */
    where?: Prisma.LocataireWhereInput;
    /**
     * Limit how many Locataires to update.
     */
    limit?: number;
};
/**
 * Locataire updateManyAndReturn
 */
export type LocataireUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * The data used to update Locataires.
     */
    data: Prisma.XOR<Prisma.LocataireUpdateManyMutationInput, Prisma.LocataireUncheckedUpdateManyInput>;
    /**
     * Filter which Locataires to update
     */
    where?: Prisma.LocataireWhereInput;
    /**
     * Limit how many Locataires to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Locataire upsert
 */
export type LocataireUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * The filter to search for the Locataire to update in case it exists.
     */
    where: Prisma.LocataireWhereUniqueInput;
    /**
     * In case the Locataire found by the `where` argument doesn't exist, create a new Locataire with this data.
     */
    create: Prisma.XOR<Prisma.LocataireCreateInput, Prisma.LocataireUncheckedCreateInput>;
    /**
     * In case the Locataire was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LocataireUpdateInput, Prisma.LocataireUncheckedUpdateInput>;
};
/**
 * Locataire delete
 */
export type LocataireDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
    /**
     * Filter which Locataire to delete.
     */
    where: Prisma.LocataireWhereUniqueInput;
};
/**
 * Locataire deleteMany
 */
export type LocataireDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Locataires to delete
     */
    where?: Prisma.LocataireWhereInput;
    /**
     * Limit how many Locataires to delete.
     */
    limit?: number;
};
/**
 * Locataire.bails
 */
export type Locataire$bailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.BailLocationWhereInput;
    orderBy?: Prisma.BailLocationOrderByWithRelationInput | Prisma.BailLocationOrderByWithRelationInput[];
    cursor?: Prisma.BailLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BailLocationScalarFieldEnum | Prisma.BailLocationScalarFieldEnum[];
};
/**
 * Locataire.refreshTokens
 */
export type Locataire$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocataireRefreshToken
     */
    select?: Prisma.LocataireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocataireRefreshToken
     */
    omit?: Prisma.LocataireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.LocataireRefreshTokenWhereInput;
    orderBy?: Prisma.LocataireRefreshTokenOrderByWithRelationInput | Prisma.LocataireRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.LocataireRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocataireRefreshTokenScalarFieldEnum | Prisma.LocataireRefreshTokenScalarFieldEnum[];
};
/**
 * Locataire without action
 */
export type LocataireDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locataire
     */
    select?: Prisma.LocataireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locataire
     */
    omit?: Prisma.LocataireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocataireInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Locataire.d.ts.map