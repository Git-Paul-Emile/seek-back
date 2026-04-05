import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Proprietaire
 *
 */
export type ProprietaireModel = runtime.Types.Result.DefaultSelection<Prisma.$ProprietairePayload>;
export type AggregateProprietaire = {
    _count: ProprietaireCountAggregateOutputType | null;
    _avg: ProprietaireAvgAggregateOutputType | null;
    _sum: ProprietaireSumAggregateOutputType | null;
    _min: ProprietaireMinAggregateOutputType | null;
    _max: ProprietaireMaxAggregateOutputType | null;
};
export type ProprietaireAvgAggregateOutputType = {
    nbAvertissements: number | null;
    nbSignalementsValides: number | null;
};
export type ProprietaireSumAggregateOutputType = {
    nbAvertissements: number | null;
    nbSignalementsValides: number | null;
};
export type ProprietaireMinAggregateOutputType = {
    id: string | null;
    prenom: string | null;
    nom: string | null;
    sexe: string | null;
    telephone: string | null;
    email: string | null;
    password: string | null;
    statutVerification: $Enums.StatutVerification | null;
    verifiedAt: Date | null;
    telephoneVerifie: boolean | null;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean | null;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number | null;
    nbSignalementsValides: number | null;
    estRestreint: boolean | null;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean | null;
    dateBannissement: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProprietaireMaxAggregateOutputType = {
    id: string | null;
    prenom: string | null;
    nom: string | null;
    sexe: string | null;
    telephone: string | null;
    email: string | null;
    password: string | null;
    statutVerification: $Enums.StatutVerification | null;
    verifiedAt: Date | null;
    telephoneVerifie: boolean | null;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean | null;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number | null;
    nbSignalementsValides: number | null;
    estRestreint: boolean | null;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean | null;
    dateBannissement: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProprietaireCountAggregateOutputType = {
    id: number;
    prenom: number;
    nom: number;
    sexe: number;
    telephone: number;
    email: number;
    password: number;
    statutVerification: number;
    verifiedAt: number;
    telephoneVerifie: number;
    telephoneOtp: number;
    telephoneOtpExpiresAt: number;
    estSuspendu: number;
    motifSuspension: number;
    dateSuspension: number;
    suspenduPar: number;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: number;
    dateFinRestriction: number;
    dateFinSuspension: number;
    estBanni: number;
    dateBannissement: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProprietaireAvgAggregateInputType = {
    nbAvertissements?: true;
    nbSignalementsValides?: true;
};
export type ProprietaireSumAggregateInputType = {
    nbAvertissements?: true;
    nbSignalementsValides?: true;
};
export type ProprietaireMinAggregateInputType = {
    id?: true;
    prenom?: true;
    nom?: true;
    sexe?: true;
    telephone?: true;
    email?: true;
    password?: true;
    statutVerification?: true;
    verifiedAt?: true;
    telephoneVerifie?: true;
    telephoneOtp?: true;
    telephoneOtpExpiresAt?: true;
    estSuspendu?: true;
    motifSuspension?: true;
    dateSuspension?: true;
    suspenduPar?: true;
    nbAvertissements?: true;
    nbSignalementsValides?: true;
    estRestreint?: true;
    dateFinRestriction?: true;
    dateFinSuspension?: true;
    estBanni?: true;
    dateBannissement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProprietaireMaxAggregateInputType = {
    id?: true;
    prenom?: true;
    nom?: true;
    sexe?: true;
    telephone?: true;
    email?: true;
    password?: true;
    statutVerification?: true;
    verifiedAt?: true;
    telephoneVerifie?: true;
    telephoneOtp?: true;
    telephoneOtpExpiresAt?: true;
    estSuspendu?: true;
    motifSuspension?: true;
    dateSuspension?: true;
    suspenduPar?: true;
    nbAvertissements?: true;
    nbSignalementsValides?: true;
    estRestreint?: true;
    dateFinRestriction?: true;
    dateFinSuspension?: true;
    estBanni?: true;
    dateBannissement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProprietaireCountAggregateInputType = {
    id?: true;
    prenom?: true;
    nom?: true;
    sexe?: true;
    telephone?: true;
    email?: true;
    password?: true;
    statutVerification?: true;
    verifiedAt?: true;
    telephoneVerifie?: true;
    telephoneOtp?: true;
    telephoneOtpExpiresAt?: true;
    estSuspendu?: true;
    motifSuspension?: true;
    dateSuspension?: true;
    suspenduPar?: true;
    nbAvertissements?: true;
    nbSignalementsValides?: true;
    estRestreint?: true;
    dateFinRestriction?: true;
    dateFinSuspension?: true;
    estBanni?: true;
    dateBannissement?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProprietaireAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Proprietaire to aggregate.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Proprietaires
    **/
    _count?: true | ProprietaireCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProprietaireAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProprietaireSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProprietaireMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProprietaireMaxAggregateInputType;
};
export type GetProprietaireAggregateType<T extends ProprietaireAggregateArgs> = {
    [P in keyof T & keyof AggregateProprietaire]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProprietaire[P]> : Prisma.GetScalarType<T[P], AggregateProprietaire[P]>;
};
export type ProprietaireGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProprietaireWhereInput;
    orderBy?: Prisma.ProprietaireOrderByWithAggregationInput | Prisma.ProprietaireOrderByWithAggregationInput[];
    by: Prisma.ProprietaireScalarFieldEnum[] | Prisma.ProprietaireScalarFieldEnum;
    having?: Prisma.ProprietaireScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProprietaireCountAggregateInputType | true;
    _avg?: ProprietaireAvgAggregateInputType;
    _sum?: ProprietaireSumAggregateInputType;
    _min?: ProprietaireMinAggregateInputType;
    _max?: ProprietaireMaxAggregateInputType;
};
export type ProprietaireGroupByOutputType = {
    id: string;
    prenom: string;
    nom: string;
    sexe: string | null;
    telephone: string;
    email: string | null;
    password: string;
    statutVerification: $Enums.StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProprietaireCountAggregateOutputType | null;
    _avg: ProprietaireAvgAggregateOutputType | null;
    _sum: ProprietaireSumAggregateOutputType | null;
    _min: ProprietaireMinAggregateOutputType | null;
    _max: ProprietaireMaxAggregateOutputType | null;
};
type GetProprietaireGroupByPayload<T extends ProprietaireGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProprietaireGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProprietaireGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProprietaireGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProprietaireGroupByOutputType[P]>;
}>>;
export type ProprietaireWhereInput = {
    AND?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    OR?: Prisma.ProprietaireWhereInput[];
    NOT?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    id?: Prisma.StringFilter<"Proprietaire"> | string;
    prenom?: Prisma.StringFilter<"Proprietaire"> | string;
    nom?: Prisma.StringFilter<"Proprietaire"> | string;
    sexe?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    telephone?: Prisma.StringFilter<"Proprietaire"> | string;
    email?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    password?: Prisma.StringFilter<"Proprietaire"> | string;
    statutVerification?: Prisma.EnumStatutVerificationFilter<"Proprietaire"> | $Enums.StatutVerification;
    verifiedAt?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    telephoneVerifie?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    telephoneOtp?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    telephoneOtpExpiresAt?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    estSuspendu?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    motifSuspension?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    dateSuspension?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    suspenduPar?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    nbAvertissements?: Prisma.IntFilter<"Proprietaire"> | number;
    nbSignalementsValides?: Prisma.IntFilter<"Proprietaire"> | number;
    estRestreint?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    dateFinRestriction?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    dateFinSuspension?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    estBanni?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    dateBannissement?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    bailInvitations?: Prisma.BailInvitationListRelationFilter;
    bails?: Prisma.BailLocationListRelationFilter;
    biens?: Prisma.BienListRelationFilter;
    comptePublic?: Prisma.XOR<Prisma.ComptePublicNullableScalarRelationFilter, Prisma.ComptePublicWhereInput> | null;
    documentsBien?: Prisma.DocumentBienListRelationFilter;
    etatsDesLieux?: Prisma.EtatDesLieuxListRelationFilter;
    locataire?: Prisma.LocataireListRelationFilter;
    messagesInternes?: Prisma.MessageInterneListRelationFilter;
    passwordResetTokens?: Prisma.PasswordResetTokenListRelationFilter;
    promotionHistories?: Prisma.PromotionHistoryListRelationFilter;
    refreshTokens?: Prisma.ProprietaireRefreshTokenListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    verification?: Prisma.XOR<Prisma.VerificationDocumentsNullableScalarRelationFilter, Prisma.VerificationDocumentsWhereInput> | null;
};
export type ProprietaireOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statutVerification?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephoneVerifie?: Prisma.SortOrder;
    telephoneOtp?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephoneOtpExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    estSuspendu?: Prisma.SortOrder;
    motifSuspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateSuspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    suspenduPar?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbAvertissements?: Prisma.SortOrder;
    nbSignalementsValides?: Prisma.SortOrder;
    estRestreint?: Prisma.SortOrder;
    dateFinRestriction?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateFinSuspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    estBanni?: Prisma.SortOrder;
    dateBannissement?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bailInvitations?: Prisma.BailInvitationOrderByRelationAggregateInput;
    bails?: Prisma.BailLocationOrderByRelationAggregateInput;
    biens?: Prisma.BienOrderByRelationAggregateInput;
    comptePublic?: Prisma.ComptePublicOrderByWithRelationInput;
    documentsBien?: Prisma.DocumentBienOrderByRelationAggregateInput;
    etatsDesLieux?: Prisma.EtatDesLieuxOrderByRelationAggregateInput;
    locataire?: Prisma.LocataireOrderByRelationAggregateInput;
    messagesInternes?: Prisma.MessageInterneOrderByRelationAggregateInput;
    passwordResetTokens?: Prisma.PasswordResetTokenOrderByRelationAggregateInput;
    promotionHistories?: Prisma.PromotionHistoryOrderByRelationAggregateInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenOrderByRelationAggregateInput;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
    verification?: Prisma.VerificationDocumentsOrderByWithRelationInput;
};
export type ProprietaireWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    telephone?: string;
    email?: string;
    AND?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    OR?: Prisma.ProprietaireWhereInput[];
    NOT?: Prisma.ProprietaireWhereInput | Prisma.ProprietaireWhereInput[];
    prenom?: Prisma.StringFilter<"Proprietaire"> | string;
    nom?: Prisma.StringFilter<"Proprietaire"> | string;
    sexe?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    password?: Prisma.StringFilter<"Proprietaire"> | string;
    statutVerification?: Prisma.EnumStatutVerificationFilter<"Proprietaire"> | $Enums.StatutVerification;
    verifiedAt?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    telephoneVerifie?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    telephoneOtp?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    telephoneOtpExpiresAt?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    estSuspendu?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    motifSuspension?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    dateSuspension?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    suspenduPar?: Prisma.StringNullableFilter<"Proprietaire"> | string | null;
    nbAvertissements?: Prisma.IntFilter<"Proprietaire"> | number;
    nbSignalementsValides?: Prisma.IntFilter<"Proprietaire"> | number;
    estRestreint?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    dateFinRestriction?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    dateFinSuspension?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    estBanni?: Prisma.BoolFilter<"Proprietaire"> | boolean;
    dateBannissement?: Prisma.DateTimeNullableFilter<"Proprietaire"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Proprietaire"> | Date | string;
    bailInvitations?: Prisma.BailInvitationListRelationFilter;
    bails?: Prisma.BailLocationListRelationFilter;
    biens?: Prisma.BienListRelationFilter;
    comptePublic?: Prisma.XOR<Prisma.ComptePublicNullableScalarRelationFilter, Prisma.ComptePublicWhereInput> | null;
    documentsBien?: Prisma.DocumentBienListRelationFilter;
    etatsDesLieux?: Prisma.EtatDesLieuxListRelationFilter;
    locataire?: Prisma.LocataireListRelationFilter;
    messagesInternes?: Prisma.MessageInterneListRelationFilter;
    passwordResetTokens?: Prisma.PasswordResetTokenListRelationFilter;
    promotionHistories?: Prisma.PromotionHistoryListRelationFilter;
    refreshTokens?: Prisma.ProprietaireRefreshTokenListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    verification?: Prisma.XOR<Prisma.VerificationDocumentsNullableScalarRelationFilter, Prisma.VerificationDocumentsWhereInput> | null;
}, "id" | "telephone" | "email">;
export type ProprietaireOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statutVerification?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephoneVerifie?: Prisma.SortOrder;
    telephoneOtp?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephoneOtpExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    estSuspendu?: Prisma.SortOrder;
    motifSuspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateSuspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    suspenduPar?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbAvertissements?: Prisma.SortOrder;
    nbSignalementsValides?: Prisma.SortOrder;
    estRestreint?: Prisma.SortOrder;
    dateFinRestriction?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateFinSuspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    estBanni?: Prisma.SortOrder;
    dateBannissement?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProprietaireCountOrderByAggregateInput;
    _avg?: Prisma.ProprietaireAvgOrderByAggregateInput;
    _max?: Prisma.ProprietaireMaxOrderByAggregateInput;
    _min?: Prisma.ProprietaireMinOrderByAggregateInput;
    _sum?: Prisma.ProprietaireSumOrderByAggregateInput;
};
export type ProprietaireScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProprietaireScalarWhereWithAggregatesInput | Prisma.ProprietaireScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProprietaireScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProprietaireScalarWhereWithAggregatesInput | Prisma.ProprietaireScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    sexe?: Prisma.StringNullableWithAggregatesFilter<"Proprietaire"> | string | null;
    telephone?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Proprietaire"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"Proprietaire"> | string;
    statutVerification?: Prisma.EnumStatutVerificationWithAggregatesFilter<"Proprietaire"> | $Enums.StatutVerification;
    verifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Proprietaire"> | Date | string | null;
    telephoneVerifie?: Prisma.BoolWithAggregatesFilter<"Proprietaire"> | boolean;
    telephoneOtp?: Prisma.StringNullableWithAggregatesFilter<"Proprietaire"> | string | null;
    telephoneOtpExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Proprietaire"> | Date | string | null;
    estSuspendu?: Prisma.BoolWithAggregatesFilter<"Proprietaire"> | boolean;
    motifSuspension?: Prisma.StringNullableWithAggregatesFilter<"Proprietaire"> | string | null;
    dateSuspension?: Prisma.DateTimeNullableWithAggregatesFilter<"Proprietaire"> | Date | string | null;
    suspenduPar?: Prisma.StringNullableWithAggregatesFilter<"Proprietaire"> | string | null;
    nbAvertissements?: Prisma.IntWithAggregatesFilter<"Proprietaire"> | number;
    nbSignalementsValides?: Prisma.IntWithAggregatesFilter<"Proprietaire"> | number;
    estRestreint?: Prisma.BoolWithAggregatesFilter<"Proprietaire"> | boolean;
    dateFinRestriction?: Prisma.DateTimeNullableWithAggregatesFilter<"Proprietaire"> | Date | string | null;
    dateFinSuspension?: Prisma.DateTimeNullableWithAggregatesFilter<"Proprietaire"> | Date | string | null;
    estBanni?: Prisma.BoolWithAggregatesFilter<"Proprietaire"> | boolean;
    dateBannissement?: Prisma.DateTimeNullableWithAggregatesFilter<"Proprietaire"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Proprietaire"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Proprietaire"> | Date | string;
};
export type ProprietaireCreateInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateManyInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProprietaireUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProprietaireScalarRelationFilter = {
    is?: Prisma.ProprietaireWhereInput;
    isNot?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireNullableScalarRelationFilter = {
    is?: Prisma.ProprietaireWhereInput | null;
    isNot?: Prisma.ProprietaireWhereInput | null;
};
export type ProprietaireCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statutVerification?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    telephoneVerifie?: Prisma.SortOrder;
    telephoneOtp?: Prisma.SortOrder;
    telephoneOtpExpiresAt?: Prisma.SortOrder;
    estSuspendu?: Prisma.SortOrder;
    motifSuspension?: Prisma.SortOrder;
    dateSuspension?: Prisma.SortOrder;
    suspenduPar?: Prisma.SortOrder;
    nbAvertissements?: Prisma.SortOrder;
    nbSignalementsValides?: Prisma.SortOrder;
    estRestreint?: Prisma.SortOrder;
    dateFinRestriction?: Prisma.SortOrder;
    dateFinSuspension?: Prisma.SortOrder;
    estBanni?: Prisma.SortOrder;
    dateBannissement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProprietaireAvgOrderByAggregateInput = {
    nbAvertissements?: Prisma.SortOrder;
    nbSignalementsValides?: Prisma.SortOrder;
};
export type ProprietaireMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statutVerification?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    telephoneVerifie?: Prisma.SortOrder;
    telephoneOtp?: Prisma.SortOrder;
    telephoneOtpExpiresAt?: Prisma.SortOrder;
    estSuspendu?: Prisma.SortOrder;
    motifSuspension?: Prisma.SortOrder;
    dateSuspension?: Prisma.SortOrder;
    suspenduPar?: Prisma.SortOrder;
    nbAvertissements?: Prisma.SortOrder;
    nbSignalementsValides?: Prisma.SortOrder;
    estRestreint?: Prisma.SortOrder;
    dateFinRestriction?: Prisma.SortOrder;
    dateFinSuspension?: Prisma.SortOrder;
    estBanni?: Prisma.SortOrder;
    dateBannissement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProprietaireMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    statutVerification?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    telephoneVerifie?: Prisma.SortOrder;
    telephoneOtp?: Prisma.SortOrder;
    telephoneOtpExpiresAt?: Prisma.SortOrder;
    estSuspendu?: Prisma.SortOrder;
    motifSuspension?: Prisma.SortOrder;
    dateSuspension?: Prisma.SortOrder;
    suspenduPar?: Prisma.SortOrder;
    nbAvertissements?: Prisma.SortOrder;
    nbSignalementsValides?: Prisma.SortOrder;
    estRestreint?: Prisma.SortOrder;
    dateFinRestriction?: Prisma.SortOrder;
    dateFinSuspension?: Prisma.SortOrder;
    estBanni?: Prisma.SortOrder;
    dateBannissement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProprietaireSumOrderByAggregateInput = {
    nbAvertissements?: Prisma.SortOrder;
    nbSignalementsValides?: Prisma.SortOrder;
};
export type ProprietaireCreateNestedOneWithoutBiensInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutBiensInput, Prisma.ProprietaireUncheckedCreateWithoutBiensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutBiensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutBiensNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutBiensInput, Prisma.ProprietaireUncheckedCreateWithoutBiensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutBiensInput;
    upsert?: Prisma.ProprietaireUpsertWithoutBiensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutBiensInput, Prisma.ProprietaireUpdateWithoutBiensInput>, Prisma.ProprietaireUncheckedUpdateWithoutBiensInput>;
};
export type ProprietaireCreateNestedOneWithoutComptePublicInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutComptePublicInput, Prisma.ProprietaireUncheckedCreateWithoutComptePublicInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutComptePublicInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneWithoutComptePublicNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutComptePublicInput, Prisma.ProprietaireUncheckedCreateWithoutComptePublicInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutComptePublicInput;
    upsert?: Prisma.ProprietaireUpsertWithoutComptePublicInput;
    disconnect?: Prisma.ProprietaireWhereInput | boolean;
    delete?: Prisma.ProprietaireWhereInput | boolean;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutComptePublicInput, Prisma.ProprietaireUpdateWithoutComptePublicInput>, Prisma.ProprietaireUncheckedUpdateWithoutComptePublicInput>;
};
export type ProprietaireCreateNestedOneWithoutDocumentsBienInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutDocumentsBienInput, Prisma.ProprietaireUncheckedCreateWithoutDocumentsBienInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutDocumentsBienInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutDocumentsBienNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutDocumentsBienInput, Prisma.ProprietaireUncheckedCreateWithoutDocumentsBienInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutDocumentsBienInput;
    upsert?: Prisma.ProprietaireUpsertWithoutDocumentsBienInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutDocumentsBienInput, Prisma.ProprietaireUpdateWithoutDocumentsBienInput>, Prisma.ProprietaireUncheckedUpdateWithoutDocumentsBienInput>;
};
export type ProprietaireCreateNestedOneWithoutLocataireInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutLocataireInput, Prisma.ProprietaireUncheckedCreateWithoutLocataireInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutLocataireInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutLocataireNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutLocataireInput, Prisma.ProprietaireUncheckedCreateWithoutLocataireInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutLocataireInput;
    upsert?: Prisma.ProprietaireUpsertWithoutLocataireInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutLocataireInput, Prisma.ProprietaireUpdateWithoutLocataireInput>, Prisma.ProprietaireUncheckedUpdateWithoutLocataireInput>;
};
export type ProprietaireCreateNestedOneWithoutBailsInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailsInput, Prisma.ProprietaireUncheckedCreateWithoutBailsInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutBailsInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutBailsNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailsInput, Prisma.ProprietaireUncheckedCreateWithoutBailsInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutBailsInput;
    upsert?: Prisma.ProprietaireUpsertWithoutBailsInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutBailsInput, Prisma.ProprietaireUpdateWithoutBailsInput>, Prisma.ProprietaireUncheckedUpdateWithoutBailsInput>;
};
export type ProprietaireCreateNestedOneWithoutVerificationInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutVerificationInput, Prisma.ProprietaireUncheckedCreateWithoutVerificationInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutVerificationInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutVerificationNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutVerificationInput, Prisma.ProprietaireUncheckedCreateWithoutVerificationInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutVerificationInput;
    upsert?: Prisma.ProprietaireUpsertWithoutVerificationInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutVerificationInput, Prisma.ProprietaireUpdateWithoutVerificationInput>, Prisma.ProprietaireUncheckedUpdateWithoutVerificationInput>;
};
export type EnumStatutVerificationFieldUpdateOperationsInput = {
    set?: $Enums.StatutVerification;
};
export type ProprietaireCreateNestedOneWithoutMessagesInternesInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutMessagesInternesInput, Prisma.ProprietaireUncheckedCreateWithoutMessagesInternesInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutMessagesInternesInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutMessagesInternesNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutMessagesInternesInput, Prisma.ProprietaireUncheckedCreateWithoutMessagesInternesInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutMessagesInternesInput;
    upsert?: Prisma.ProprietaireUpsertWithoutMessagesInternesInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutMessagesInternesInput, Prisma.ProprietaireUpdateWithoutMessagesInternesInput>, Prisma.ProprietaireUncheckedUpdateWithoutMessagesInternesInput>;
};
export type ProprietaireCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.ProprietaireUpsertWithoutRefreshTokensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.ProprietaireUpdateWithoutRefreshTokensInput>, Prisma.ProprietaireUncheckedUpdateWithoutRefreshTokensInput>;
};
export type ProprietaireCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutPasswordResetTokensInput, Prisma.ProprietaireUncheckedCreateWithoutPasswordResetTokensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutPasswordResetTokensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutPasswordResetTokensInput, Prisma.ProprietaireUncheckedCreateWithoutPasswordResetTokensInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutPasswordResetTokensInput;
    upsert?: Prisma.ProprietaireUpsertWithoutPasswordResetTokensInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutPasswordResetTokensInput, Prisma.ProprietaireUpdateWithoutPasswordResetTokensInput>, Prisma.ProprietaireUncheckedUpdateWithoutPasswordResetTokensInput>;
};
export type ProprietaireCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutTransactionsInput, Prisma.ProprietaireUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutTransactionsInput, Prisma.ProprietaireUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.ProprietaireUpsertWithoutTransactionsInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutTransactionsInput, Prisma.ProprietaireUpdateWithoutTransactionsInput>, Prisma.ProprietaireUncheckedUpdateWithoutTransactionsInput>;
};
export type ProprietaireCreateNestedOneWithoutPromotionHistoriesInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutPromotionHistoriesInput, Prisma.ProprietaireUncheckedCreateWithoutPromotionHistoriesInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutPromotionHistoriesInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutPromotionHistoriesNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutPromotionHistoriesInput, Prisma.ProprietaireUncheckedCreateWithoutPromotionHistoriesInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutPromotionHistoriesInput;
    upsert?: Prisma.ProprietaireUpsertWithoutPromotionHistoriesInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutPromotionHistoriesInput, Prisma.ProprietaireUpdateWithoutPromotionHistoriesInput>, Prisma.ProprietaireUncheckedUpdateWithoutPromotionHistoriesInput>;
};
export type ProprietaireCreateNestedOneWithoutBailInvitationsInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailInvitationsInput, Prisma.ProprietaireUncheckedCreateWithoutBailInvitationsInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutBailInvitationsInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutBailInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailInvitationsInput, Prisma.ProprietaireUncheckedCreateWithoutBailInvitationsInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutBailInvitationsInput;
    upsert?: Prisma.ProprietaireUpsertWithoutBailInvitationsInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutBailInvitationsInput, Prisma.ProprietaireUpdateWithoutBailInvitationsInput>, Prisma.ProprietaireUncheckedUpdateWithoutBailInvitationsInput>;
};
export type ProprietaireCreateNestedOneWithoutEtatsDesLieuxInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutEtatsDesLieuxInput, Prisma.ProprietaireUncheckedCreateWithoutEtatsDesLieuxInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutEtatsDesLieuxInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
};
export type ProprietaireUpdateOneRequiredWithoutEtatsDesLieuxNestedInput = {
    create?: Prisma.XOR<Prisma.ProprietaireCreateWithoutEtatsDesLieuxInput, Prisma.ProprietaireUncheckedCreateWithoutEtatsDesLieuxInput>;
    connectOrCreate?: Prisma.ProprietaireCreateOrConnectWithoutEtatsDesLieuxInput;
    upsert?: Prisma.ProprietaireUpsertWithoutEtatsDesLieuxInput;
    connect?: Prisma.ProprietaireWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProprietaireUpdateToOneWithWhereWithoutEtatsDesLieuxInput, Prisma.ProprietaireUpdateWithoutEtatsDesLieuxInput>, Prisma.ProprietaireUncheckedUpdateWithoutEtatsDesLieuxInput>;
};
export type ProprietaireCreateWithoutBiensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutBiensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutBiensInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutBiensInput, Prisma.ProprietaireUncheckedCreateWithoutBiensInput>;
};
export type ProprietaireUpsertWithoutBiensInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutBiensInput, Prisma.ProprietaireUncheckedUpdateWithoutBiensInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutBiensInput, Prisma.ProprietaireUncheckedCreateWithoutBiensInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutBiensInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutBiensInput, Prisma.ProprietaireUncheckedUpdateWithoutBiensInput>;
};
export type ProprietaireUpdateWithoutBiensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutBiensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutComptePublicInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutComptePublicInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutComptePublicInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutComptePublicInput, Prisma.ProprietaireUncheckedCreateWithoutComptePublicInput>;
};
export type ProprietaireUpsertWithoutComptePublicInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutComptePublicInput, Prisma.ProprietaireUncheckedUpdateWithoutComptePublicInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutComptePublicInput, Prisma.ProprietaireUncheckedCreateWithoutComptePublicInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutComptePublicInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutComptePublicInput, Prisma.ProprietaireUncheckedUpdateWithoutComptePublicInput>;
};
export type ProprietaireUpdateWithoutComptePublicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutComptePublicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutDocumentsBienInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutDocumentsBienInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutDocumentsBienInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutDocumentsBienInput, Prisma.ProprietaireUncheckedCreateWithoutDocumentsBienInput>;
};
export type ProprietaireUpsertWithoutDocumentsBienInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutDocumentsBienInput, Prisma.ProprietaireUncheckedUpdateWithoutDocumentsBienInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutDocumentsBienInput, Prisma.ProprietaireUncheckedCreateWithoutDocumentsBienInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutDocumentsBienInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutDocumentsBienInput, Prisma.ProprietaireUncheckedUpdateWithoutDocumentsBienInput>;
};
export type ProprietaireUpdateWithoutDocumentsBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutDocumentsBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutLocataireInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutLocataireInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutLocataireInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutLocataireInput, Prisma.ProprietaireUncheckedCreateWithoutLocataireInput>;
};
export type ProprietaireUpsertWithoutLocataireInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutLocataireInput, Prisma.ProprietaireUncheckedUpdateWithoutLocataireInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutLocataireInput, Prisma.ProprietaireUncheckedCreateWithoutLocataireInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutLocataireInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutLocataireInput, Prisma.ProprietaireUncheckedUpdateWithoutLocataireInput>;
};
export type ProprietaireUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutLocataireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutBailsInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutBailsInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutBailsInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailsInput, Prisma.ProprietaireUncheckedCreateWithoutBailsInput>;
};
export type ProprietaireUpsertWithoutBailsInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutBailsInput, Prisma.ProprietaireUncheckedUpdateWithoutBailsInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailsInput, Prisma.ProprietaireUncheckedCreateWithoutBailsInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutBailsInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutBailsInput, Prisma.ProprietaireUncheckedUpdateWithoutBailsInput>;
};
export type ProprietaireUpdateWithoutBailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutBailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutVerificationInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutVerificationInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutVerificationInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutVerificationInput, Prisma.ProprietaireUncheckedCreateWithoutVerificationInput>;
};
export type ProprietaireUpsertWithoutVerificationInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutVerificationInput, Prisma.ProprietaireUncheckedUpdateWithoutVerificationInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutVerificationInput, Prisma.ProprietaireUncheckedCreateWithoutVerificationInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutVerificationInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutVerificationInput, Prisma.ProprietaireUncheckedUpdateWithoutVerificationInput>;
};
export type ProprietaireUpdateWithoutVerificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutVerificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutMessagesInternesInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutMessagesInternesInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutMessagesInternesInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutMessagesInternesInput, Prisma.ProprietaireUncheckedCreateWithoutMessagesInternesInput>;
};
export type ProprietaireUpsertWithoutMessagesInternesInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutMessagesInternesInput, Prisma.ProprietaireUncheckedUpdateWithoutMessagesInternesInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutMessagesInternesInput, Prisma.ProprietaireUncheckedCreateWithoutMessagesInternesInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutMessagesInternesInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutMessagesInternesInput, Prisma.ProprietaireUncheckedUpdateWithoutMessagesInternesInput>;
};
export type ProprietaireUpdateWithoutMessagesInternesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutMessagesInternesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutRefreshTokensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
};
export type ProprietaireUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutRefreshTokensInput, Prisma.ProprietaireUncheckedUpdateWithoutRefreshTokensInput>;
};
export type ProprietaireUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutPasswordResetTokensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutPasswordResetTokensInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutPasswordResetTokensInput, Prisma.ProprietaireUncheckedCreateWithoutPasswordResetTokensInput>;
};
export type ProprietaireUpsertWithoutPasswordResetTokensInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutPasswordResetTokensInput, Prisma.ProprietaireUncheckedUpdateWithoutPasswordResetTokensInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutPasswordResetTokensInput, Prisma.ProprietaireUncheckedCreateWithoutPasswordResetTokensInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutPasswordResetTokensInput, Prisma.ProprietaireUncheckedUpdateWithoutPasswordResetTokensInput>;
};
export type ProprietaireUpdateWithoutPasswordResetTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutTransactionsInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutTransactionsInput, Prisma.ProprietaireUncheckedCreateWithoutTransactionsInput>;
};
export type ProprietaireUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutTransactionsInput, Prisma.ProprietaireUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutTransactionsInput, Prisma.ProprietaireUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutTransactionsInput, Prisma.ProprietaireUncheckedUpdateWithoutTransactionsInput>;
};
export type ProprietaireUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutPromotionHistoriesInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutPromotionHistoriesInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutPromotionHistoriesInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutPromotionHistoriesInput, Prisma.ProprietaireUncheckedCreateWithoutPromotionHistoriesInput>;
};
export type ProprietaireUpsertWithoutPromotionHistoriesInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutPromotionHistoriesInput, Prisma.ProprietaireUncheckedUpdateWithoutPromotionHistoriesInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutPromotionHistoriesInput, Prisma.ProprietaireUncheckedCreateWithoutPromotionHistoriesInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutPromotionHistoriesInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutPromotionHistoriesInput, Prisma.ProprietaireUncheckedUpdateWithoutPromotionHistoriesInput>;
};
export type ProprietaireUpdateWithoutPromotionHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutPromotionHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutBailInvitationsInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutBailInvitationsInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutBailInvitationsInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailInvitationsInput, Prisma.ProprietaireUncheckedCreateWithoutBailInvitationsInput>;
};
export type ProprietaireUpsertWithoutBailInvitationsInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutBailInvitationsInput, Prisma.ProprietaireUncheckedUpdateWithoutBailInvitationsInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutBailInvitationsInput, Prisma.ProprietaireUncheckedCreateWithoutBailInvitationsInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutBailInvitationsInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutBailInvitationsInput, Prisma.ProprietaireUncheckedUpdateWithoutBailInvitationsInput>;
};
export type ProprietaireUpdateWithoutBailInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutBailInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    etatsDesLieux?: Prisma.EtatDesLieuxUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireCreateWithoutEtatsDesLieuxInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireUncheckedCreateWithoutEtatsDesLieuxInput = {
    id?: string;
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
    statutVerification?: $Enums.StatutVerification;
    verifiedAt?: Date | string | null;
    telephoneVerifie?: boolean;
    telephoneOtp?: string | null;
    telephoneOtpExpiresAt?: Date | string | null;
    estSuspendu?: boolean;
    motifSuspension?: string | null;
    dateSuspension?: Date | string | null;
    suspenduPar?: string | null;
    nbAvertissements?: number;
    nbSignalementsValides?: number;
    estRestreint?: boolean;
    dateFinRestriction?: Date | string | null;
    dateFinSuspension?: Date | string | null;
    estBanni?: boolean;
    dateBannissement?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedCreateNestedManyWithoutProprietaireInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutProprietaireInput;
    biens?: Prisma.BienUncheckedCreateNestedManyWithoutProprietaireInput;
    comptePublic?: Prisma.ComptePublicUncheckedCreateNestedOneWithoutProprietaireInput;
    documentsBien?: Prisma.DocumentBienUncheckedCreateNestedManyWithoutProprietaireInput;
    locataire?: Prisma.LocataireUncheckedCreateNestedManyWithoutProprietaireInput;
    messagesInternes?: Prisma.MessageInterneUncheckedCreateNestedManyWithoutProprietaireInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedCreateNestedManyWithoutProprietaireInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedCreateNestedManyWithoutProprietaireInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutProprietaireInput;
    verification?: Prisma.VerificationDocumentsUncheckedCreateNestedOneWithoutProprietaireInput;
};
export type ProprietaireCreateOrConnectWithoutEtatsDesLieuxInput = {
    where: Prisma.ProprietaireWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutEtatsDesLieuxInput, Prisma.ProprietaireUncheckedCreateWithoutEtatsDesLieuxInput>;
};
export type ProprietaireUpsertWithoutEtatsDesLieuxInput = {
    update: Prisma.XOR<Prisma.ProprietaireUpdateWithoutEtatsDesLieuxInput, Prisma.ProprietaireUncheckedUpdateWithoutEtatsDesLieuxInput>;
    create: Prisma.XOR<Prisma.ProprietaireCreateWithoutEtatsDesLieuxInput, Prisma.ProprietaireUncheckedCreateWithoutEtatsDesLieuxInput>;
    where?: Prisma.ProprietaireWhereInput;
};
export type ProprietaireUpdateToOneWithWhereWithoutEtatsDesLieuxInput = {
    where?: Prisma.ProprietaireWhereInput;
    data: Prisma.XOR<Prisma.ProprietaireUpdateWithoutEtatsDesLieuxInput, Prisma.ProprietaireUncheckedUpdateWithoutEtatsDesLieuxInput>;
};
export type ProprietaireUpdateWithoutEtatsDesLieuxInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUpdateOneWithoutProprietaireNestedInput;
};
export type ProprietaireUncheckedUpdateWithoutEtatsDesLieuxInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    statutVerification?: Prisma.EnumStatutVerificationFieldUpdateOperationsInput | $Enums.StatutVerification;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    telephoneVerifie?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    telephoneOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephoneOtpExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estSuspendu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    motifSuspension?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    suspenduPar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbAvertissements?: Prisma.IntFieldUpdateOperationsInput | number;
    nbSignalementsValides?: Prisma.IntFieldUpdateOperationsInput | number;
    estRestreint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateFinRestriction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateFinSuspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estBanni?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateBannissement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bailInvitations?: Prisma.BailInvitationUncheckedUpdateManyWithoutProprietaireNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutProprietaireNestedInput;
    biens?: Prisma.BienUncheckedUpdateManyWithoutProprietaireNestedInput;
    comptePublic?: Prisma.ComptePublicUncheckedUpdateOneWithoutProprietaireNestedInput;
    documentsBien?: Prisma.DocumentBienUncheckedUpdateManyWithoutProprietaireNestedInput;
    locataire?: Prisma.LocataireUncheckedUpdateManyWithoutProprietaireNestedInput;
    messagesInternes?: Prisma.MessageInterneUncheckedUpdateManyWithoutProprietaireNestedInput;
    passwordResetTokens?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    promotionHistories?: Prisma.PromotionHistoryUncheckedUpdateManyWithoutProprietaireNestedInput;
    refreshTokens?: Prisma.ProprietaireRefreshTokenUncheckedUpdateManyWithoutProprietaireNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutProprietaireNestedInput;
    verification?: Prisma.VerificationDocumentsUncheckedUpdateOneWithoutProprietaireNestedInput;
};
/**
 * Count Type ProprietaireCountOutputType
 */
export type ProprietaireCountOutputType = {
    bailInvitations: number;
    bails: number;
    biens: number;
    documentsBien: number;
    etatsDesLieux: number;
    locataire: number;
    messagesInternes: number;
    passwordResetTokens: number;
    promotionHistories: number;
    refreshTokens: number;
    transactions: number;
};
export type ProprietaireCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bailInvitations?: boolean | ProprietaireCountOutputTypeCountBailInvitationsArgs;
    bails?: boolean | ProprietaireCountOutputTypeCountBailsArgs;
    biens?: boolean | ProprietaireCountOutputTypeCountBiensArgs;
    documentsBien?: boolean | ProprietaireCountOutputTypeCountDocumentsBienArgs;
    etatsDesLieux?: boolean | ProprietaireCountOutputTypeCountEtatsDesLieuxArgs;
    locataire?: boolean | ProprietaireCountOutputTypeCountLocataireArgs;
    messagesInternes?: boolean | ProprietaireCountOutputTypeCountMessagesInternesArgs;
    passwordResetTokens?: boolean | ProprietaireCountOutputTypeCountPasswordResetTokensArgs;
    promotionHistories?: boolean | ProprietaireCountOutputTypeCountPromotionHistoriesArgs;
    refreshTokens?: boolean | ProprietaireCountOutputTypeCountRefreshTokensArgs;
    transactions?: boolean | ProprietaireCountOutputTypeCountTransactionsArgs;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireCountOutputType
     */
    select?: Prisma.ProprietaireCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountBailInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BailInvitationWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountBailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BailLocationWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountBiensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountDocumentsBienArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentBienWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountEtatsDesLieuxArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtatDesLieuxWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountLocataireArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocataireWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountMessagesInternesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageInterneWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasswordResetTokenWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountPromotionHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromotionHistoryWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
};
/**
 * ProprietaireCountOutputType without action
 */
export type ProprietaireCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
export type ProprietaireSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    statutVerification?: boolean;
    verifiedAt?: boolean;
    telephoneVerifie?: boolean;
    telephoneOtp?: boolean;
    telephoneOtpExpiresAt?: boolean;
    estSuspendu?: boolean;
    motifSuspension?: boolean;
    dateSuspension?: boolean;
    suspenduPar?: boolean;
    nbAvertissements?: boolean;
    nbSignalementsValides?: boolean;
    estRestreint?: boolean;
    dateFinRestriction?: boolean;
    dateFinSuspension?: boolean;
    estBanni?: boolean;
    dateBannissement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bailInvitations?: boolean | Prisma.Proprietaire$bailInvitationsArgs<ExtArgs>;
    bails?: boolean | Prisma.Proprietaire$bailsArgs<ExtArgs>;
    biens?: boolean | Prisma.Proprietaire$biensArgs<ExtArgs>;
    comptePublic?: boolean | Prisma.Proprietaire$comptePublicArgs<ExtArgs>;
    documentsBien?: boolean | Prisma.Proprietaire$documentsBienArgs<ExtArgs>;
    etatsDesLieux?: boolean | Prisma.Proprietaire$etatsDesLieuxArgs<ExtArgs>;
    locataire?: boolean | Prisma.Proprietaire$locataireArgs<ExtArgs>;
    messagesInternes?: boolean | Prisma.Proprietaire$messagesInternesArgs<ExtArgs>;
    passwordResetTokens?: boolean | Prisma.Proprietaire$passwordResetTokensArgs<ExtArgs>;
    promotionHistories?: boolean | Prisma.Proprietaire$promotionHistoriesArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.Proprietaire$refreshTokensArgs<ExtArgs>;
    transactions?: boolean | Prisma.Proprietaire$transactionsArgs<ExtArgs>;
    verification?: boolean | Prisma.Proprietaire$verificationArgs<ExtArgs>;
    _count?: boolean | Prisma.ProprietaireCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proprietaire"]>;
export type ProprietaireSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    statutVerification?: boolean;
    verifiedAt?: boolean;
    telephoneVerifie?: boolean;
    telephoneOtp?: boolean;
    telephoneOtpExpiresAt?: boolean;
    estSuspendu?: boolean;
    motifSuspension?: boolean;
    dateSuspension?: boolean;
    suspenduPar?: boolean;
    nbAvertissements?: boolean;
    nbSignalementsValides?: boolean;
    estRestreint?: boolean;
    dateFinRestriction?: boolean;
    dateFinSuspension?: boolean;
    estBanni?: boolean;
    dateBannissement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["proprietaire"]>;
export type ProprietaireSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    statutVerification?: boolean;
    verifiedAt?: boolean;
    telephoneVerifie?: boolean;
    telephoneOtp?: boolean;
    telephoneOtpExpiresAt?: boolean;
    estSuspendu?: boolean;
    motifSuspension?: boolean;
    dateSuspension?: boolean;
    suspenduPar?: boolean;
    nbAvertissements?: boolean;
    nbSignalementsValides?: boolean;
    estRestreint?: boolean;
    dateFinRestriction?: boolean;
    dateFinSuspension?: boolean;
    estBanni?: boolean;
    dateBannissement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["proprietaire"]>;
export type ProprietaireSelectScalar = {
    id?: boolean;
    prenom?: boolean;
    nom?: boolean;
    sexe?: boolean;
    telephone?: boolean;
    email?: boolean;
    password?: boolean;
    statutVerification?: boolean;
    verifiedAt?: boolean;
    telephoneVerifie?: boolean;
    telephoneOtp?: boolean;
    telephoneOtpExpiresAt?: boolean;
    estSuspendu?: boolean;
    motifSuspension?: boolean;
    dateSuspension?: boolean;
    suspenduPar?: boolean;
    nbAvertissements?: boolean;
    nbSignalementsValides?: boolean;
    estRestreint?: boolean;
    dateFinRestriction?: boolean;
    dateFinSuspension?: boolean;
    estBanni?: boolean;
    dateBannissement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProprietaireOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "prenom" | "nom" | "sexe" | "telephone" | "email" | "password" | "statutVerification" | "verifiedAt" | "telephoneVerifie" | "telephoneOtp" | "telephoneOtpExpiresAt" | "estSuspendu" | "motifSuspension" | "dateSuspension" | "suspenduPar" | "nbAvertissements" | "nbSignalementsValides" | "estRestreint" | "dateFinRestriction" | "dateFinSuspension" | "estBanni" | "dateBannissement" | "createdAt" | "updatedAt", ExtArgs["result"]["proprietaire"]>;
export type ProprietaireInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bailInvitations?: boolean | Prisma.Proprietaire$bailInvitationsArgs<ExtArgs>;
    bails?: boolean | Prisma.Proprietaire$bailsArgs<ExtArgs>;
    biens?: boolean | Prisma.Proprietaire$biensArgs<ExtArgs>;
    comptePublic?: boolean | Prisma.Proprietaire$comptePublicArgs<ExtArgs>;
    documentsBien?: boolean | Prisma.Proprietaire$documentsBienArgs<ExtArgs>;
    etatsDesLieux?: boolean | Prisma.Proprietaire$etatsDesLieuxArgs<ExtArgs>;
    locataire?: boolean | Prisma.Proprietaire$locataireArgs<ExtArgs>;
    messagesInternes?: boolean | Prisma.Proprietaire$messagesInternesArgs<ExtArgs>;
    passwordResetTokens?: boolean | Prisma.Proprietaire$passwordResetTokensArgs<ExtArgs>;
    promotionHistories?: boolean | Prisma.Proprietaire$promotionHistoriesArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.Proprietaire$refreshTokensArgs<ExtArgs>;
    transactions?: boolean | Prisma.Proprietaire$transactionsArgs<ExtArgs>;
    verification?: boolean | Prisma.Proprietaire$verificationArgs<ExtArgs>;
    _count?: boolean | Prisma.ProprietaireCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProprietaireIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProprietaireIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProprietairePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Proprietaire";
    objects: {
        bailInvitations: Prisma.$BailInvitationPayload<ExtArgs>[];
        bails: Prisma.$BailLocationPayload<ExtArgs>[];
        biens: Prisma.$BienPayload<ExtArgs>[];
        comptePublic: Prisma.$ComptePublicPayload<ExtArgs> | null;
        documentsBien: Prisma.$DocumentBienPayload<ExtArgs>[];
        etatsDesLieux: Prisma.$EtatDesLieuxPayload<ExtArgs>[];
        locataire: Prisma.$LocatairePayload<ExtArgs>[];
        messagesInternes: Prisma.$MessageInternePayload<ExtArgs>[];
        passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[];
        promotionHistories: Prisma.$PromotionHistoryPayload<ExtArgs>[];
        refreshTokens: Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>[];
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
        verification: Prisma.$VerificationDocumentsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        prenom: string;
        nom: string;
        sexe: string | null;
        telephone: string;
        email: string | null;
        password: string;
        statutVerification: $Enums.StatutVerification;
        verifiedAt: Date | null;
        telephoneVerifie: boolean;
        telephoneOtp: string | null;
        telephoneOtpExpiresAt: Date | null;
        estSuspendu: boolean;
        motifSuspension: string | null;
        dateSuspension: Date | null;
        suspenduPar: string | null;
        nbAvertissements: number;
        nbSignalementsValides: number;
        estRestreint: boolean;
        dateFinRestriction: Date | null;
        dateFinSuspension: Date | null;
        estBanni: boolean;
        dateBannissement: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["proprietaire"]>;
    composites: {};
};
export type ProprietaireGetPayload<S extends boolean | null | undefined | ProprietaireDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProprietairePayload, S>;
export type ProprietaireCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProprietaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProprietaireCountAggregateInputType | true;
};
export interface ProprietaireDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Proprietaire'];
        meta: {
            name: 'Proprietaire';
        };
    };
    /**
     * Find zero or one Proprietaire that matches the filter.
     * @param {ProprietaireFindUniqueArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProprietaireFindUniqueArgs>(args: Prisma.SelectSubset<T, ProprietaireFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Proprietaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProprietaireFindUniqueOrThrowArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProprietaireFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProprietaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proprietaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireFindFirstArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProprietaireFindFirstArgs>(args?: Prisma.SelectSubset<T, ProprietaireFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proprietaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireFindFirstOrThrowArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProprietaireFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProprietaireFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Proprietaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proprietaires
     * const proprietaires = await prisma.proprietaire.findMany()
     *
     * // Get first 10 Proprietaires
     * const proprietaires = await prisma.proprietaire.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proprietaireWithIdOnly = await prisma.proprietaire.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProprietaireFindManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Proprietaire.
     * @param {ProprietaireCreateArgs} args - Arguments to create a Proprietaire.
     * @example
     * // Create one Proprietaire
     * const Proprietaire = await prisma.proprietaire.create({
     *   data: {
     *     // ... data to create a Proprietaire
     *   }
     * })
     *
     */
    create<T extends ProprietaireCreateArgs>(args: Prisma.SelectSubset<T, ProprietaireCreateArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Proprietaires.
     * @param {ProprietaireCreateManyArgs} args - Arguments to create many Proprietaires.
     * @example
     * // Create many Proprietaires
     * const proprietaire = await prisma.proprietaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProprietaireCreateManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Proprietaires and returns the data saved in the database.
     * @param {ProprietaireCreateManyAndReturnArgs} args - Arguments to create many Proprietaires.
     * @example
     * // Create many Proprietaires
     * const proprietaire = await prisma.proprietaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Proprietaires and only return the `id`
     * const proprietaireWithIdOnly = await prisma.proprietaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProprietaireCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProprietaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Proprietaire.
     * @param {ProprietaireDeleteArgs} args - Arguments to delete one Proprietaire.
     * @example
     * // Delete one Proprietaire
     * const Proprietaire = await prisma.proprietaire.delete({
     *   where: {
     *     // ... filter to delete one Proprietaire
     *   }
     * })
     *
     */
    delete<T extends ProprietaireDeleteArgs>(args: Prisma.SelectSubset<T, ProprietaireDeleteArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Proprietaire.
     * @param {ProprietaireUpdateArgs} args - Arguments to update one Proprietaire.
     * @example
     * // Update one Proprietaire
     * const proprietaire = await prisma.proprietaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProprietaireUpdateArgs>(args: Prisma.SelectSubset<T, ProprietaireUpdateArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Proprietaires.
     * @param {ProprietaireDeleteManyArgs} args - Arguments to filter Proprietaires to delete.
     * @example
     * // Delete a few Proprietaires
     * const { count } = await prisma.proprietaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProprietaireDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProprietaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proprietaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proprietaires
     * const proprietaire = await prisma.proprietaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProprietaireUpdateManyArgs>(args: Prisma.SelectSubset<T, ProprietaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proprietaires and returns the data updated in the database.
     * @param {ProprietaireUpdateManyAndReturnArgs} args - Arguments to update many Proprietaires.
     * @example
     * // Update many Proprietaires
     * const proprietaire = await prisma.proprietaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Proprietaires and only return the `id`
     * const proprietaireWithIdOnly = await prisma.proprietaire.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProprietaireUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProprietaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Proprietaire.
     * @param {ProprietaireUpsertArgs} args - Arguments to update or create a Proprietaire.
     * @example
     * // Update or create a Proprietaire
     * const proprietaire = await prisma.proprietaire.upsert({
     *   create: {
     *     // ... data to create a Proprietaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proprietaire we want to update
     *   }
     * })
     */
    upsert<T extends ProprietaireUpsertArgs>(args: Prisma.SelectSubset<T, ProprietaireUpsertArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Proprietaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireCountArgs} args - Arguments to filter Proprietaires to count.
     * @example
     * // Count the number of Proprietaires
     * const count = await prisma.proprietaire.count({
     *   where: {
     *     // ... the filter for the Proprietaires we want to count
     *   }
     * })
    **/
    count<T extends ProprietaireCountArgs>(args?: Prisma.Subset<T, ProprietaireCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProprietaireCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Proprietaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProprietaireAggregateArgs>(args: Prisma.Subset<T, ProprietaireAggregateArgs>): Prisma.PrismaPromise<GetProprietaireAggregateType<T>>;
    /**
     * Group by Proprietaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProprietaireGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProprietaireGroupByArgs['orderBy'];
    } : {
        orderBy?: ProprietaireGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProprietaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProprietaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Proprietaire model
     */
    readonly fields: ProprietaireFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Proprietaire.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProprietaireClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bailInvitations<T extends Prisma.Proprietaire$bailInvitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$bailInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BailInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bails<T extends Prisma.Proprietaire$bailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$bailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    biens<T extends Prisma.Proprietaire$biensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$biensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comptePublic<T extends Prisma.Proprietaire$comptePublicArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$comptePublicArgs<ExtArgs>>): Prisma.Prisma__ComptePublicClient<runtime.Types.Result.GetResult<Prisma.$ComptePublicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    documentsBien<T extends Prisma.Proprietaire$documentsBienArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$documentsBienArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentBienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    etatsDesLieux<T extends Prisma.Proprietaire$etatsDesLieuxArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$etatsDesLieuxArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtatDesLieuxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    locataire<T extends Prisma.Proprietaire$locataireArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$locataireArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocatairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    messagesInternes<T extends Prisma.Proprietaire$messagesInternesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$messagesInternesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageInternePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    passwordResetTokens<T extends Prisma.Proprietaire$passwordResetTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    promotionHistories<T extends Prisma.Proprietaire$promotionHistoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$promotionHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromotionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refreshTokens<T extends Prisma.Proprietaire$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.Proprietaire$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    verification<T extends Prisma.Proprietaire$verificationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proprietaire$verificationArgs<ExtArgs>>): Prisma.Prisma__VerificationDocumentsClient<runtime.Types.Result.GetResult<Prisma.$VerificationDocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Proprietaire model
 */
export interface ProprietaireFieldRefs {
    readonly id: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly prenom: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly nom: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly sexe: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly telephone: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly email: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly password: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly statutVerification: Prisma.FieldRef<"Proprietaire", 'StatutVerification'>;
    readonly verifiedAt: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly telephoneVerifie: Prisma.FieldRef<"Proprietaire", 'Boolean'>;
    readonly telephoneOtp: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly telephoneOtpExpiresAt: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly estSuspendu: Prisma.FieldRef<"Proprietaire", 'Boolean'>;
    readonly motifSuspension: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly dateSuspension: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly suspenduPar: Prisma.FieldRef<"Proprietaire", 'String'>;
    readonly nbAvertissements: Prisma.FieldRef<"Proprietaire", 'Int'>;
    readonly nbSignalementsValides: Prisma.FieldRef<"Proprietaire", 'Int'>;
    readonly estRestreint: Prisma.FieldRef<"Proprietaire", 'Boolean'>;
    readonly dateFinRestriction: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly dateFinSuspension: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly estBanni: Prisma.FieldRef<"Proprietaire", 'Boolean'>;
    readonly dateBannissement: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Proprietaire", 'DateTime'>;
}
/**
 * Proprietaire findUnique
 */
export type ProprietaireFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire findUniqueOrThrow
 */
export type ProprietaireFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire findFirst
 */
export type ProprietaireFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Proprietaires.
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Proprietaires.
     */
    distinct?: Prisma.ProprietaireScalarFieldEnum | Prisma.ProprietaireScalarFieldEnum[];
};
/**
 * Proprietaire findFirstOrThrow
 */
export type ProprietaireFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaire to fetch.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Proprietaires.
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Proprietaires.
     */
    distinct?: Prisma.ProprietaireScalarFieldEnum | Prisma.ProprietaireScalarFieldEnum[];
};
/**
 * Proprietaire findMany
 */
export type ProprietaireFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter, which Proprietaires to fetch.
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Proprietaires to fetch.
     */
    orderBy?: Prisma.ProprietaireOrderByWithRelationInput | Prisma.ProprietaireOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Proprietaires.
     */
    cursor?: Prisma.ProprietaireWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Proprietaires from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Proprietaires.
     */
    skip?: number;
    distinct?: Prisma.ProprietaireScalarFieldEnum | Prisma.ProprietaireScalarFieldEnum[];
};
/**
 * Proprietaire create
 */
export type ProprietaireCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * The data needed to create a Proprietaire.
     */
    data: Prisma.XOR<Prisma.ProprietaireCreateInput, Prisma.ProprietaireUncheckedCreateInput>;
};
/**
 * Proprietaire createMany
 */
export type ProprietaireCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proprietaires.
     */
    data: Prisma.ProprietaireCreateManyInput | Prisma.ProprietaireCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Proprietaire createManyAndReturn
 */
export type ProprietaireCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * The data used to create many Proprietaires.
     */
    data: Prisma.ProprietaireCreateManyInput | Prisma.ProprietaireCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Proprietaire update
 */
export type ProprietaireUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * The data needed to update a Proprietaire.
     */
    data: Prisma.XOR<Prisma.ProprietaireUpdateInput, Prisma.ProprietaireUncheckedUpdateInput>;
    /**
     * Choose, which Proprietaire to update.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire updateMany
 */
export type ProprietaireUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Proprietaires.
     */
    data: Prisma.XOR<Prisma.ProprietaireUpdateManyMutationInput, Prisma.ProprietaireUncheckedUpdateManyInput>;
    /**
     * Filter which Proprietaires to update
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * Limit how many Proprietaires to update.
     */
    limit?: number;
};
/**
 * Proprietaire updateManyAndReturn
 */
export type ProprietaireUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * The data used to update Proprietaires.
     */
    data: Prisma.XOR<Prisma.ProprietaireUpdateManyMutationInput, Prisma.ProprietaireUncheckedUpdateManyInput>;
    /**
     * Filter which Proprietaires to update
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * Limit how many Proprietaires to update.
     */
    limit?: number;
};
/**
 * Proprietaire upsert
 */
export type ProprietaireUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * The filter to search for the Proprietaire to update in case it exists.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
    /**
     * In case the Proprietaire found by the `where` argument doesn't exist, create a new Proprietaire with this data.
     */
    create: Prisma.XOR<Prisma.ProprietaireCreateInput, Prisma.ProprietaireUncheckedCreateInput>;
    /**
     * In case the Proprietaire was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProprietaireUpdateInput, Prisma.ProprietaireUncheckedUpdateInput>;
};
/**
 * Proprietaire delete
 */
export type ProprietaireDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
    /**
     * Filter which Proprietaire to delete.
     */
    where: Prisma.ProprietaireWhereUniqueInput;
};
/**
 * Proprietaire deleteMany
 */
export type ProprietaireDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Proprietaires to delete
     */
    where?: Prisma.ProprietaireWhereInput;
    /**
     * Limit how many Proprietaires to delete.
     */
    limit?: number;
};
/**
 * Proprietaire.bailInvitations
 */
export type Proprietaire$bailInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BailInvitation
     */
    select?: Prisma.BailInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BailInvitation
     */
    omit?: Prisma.BailInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BailInvitationInclude<ExtArgs> | null;
    where?: Prisma.BailInvitationWhereInput;
    orderBy?: Prisma.BailInvitationOrderByWithRelationInput | Prisma.BailInvitationOrderByWithRelationInput[];
    cursor?: Prisma.BailInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BailInvitationScalarFieldEnum | Prisma.BailInvitationScalarFieldEnum[];
};
/**
 * Proprietaire.bails
 */
export type Proprietaire$bailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Proprietaire.biens
 */
export type Proprietaire$biensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bien
     */
    select?: Prisma.BienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bien
     */
    omit?: Prisma.BienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienInclude<ExtArgs> | null;
    where?: Prisma.BienWhereInput;
    orderBy?: Prisma.BienOrderByWithRelationInput | Prisma.BienOrderByWithRelationInput[];
    cursor?: Prisma.BienWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BienScalarFieldEnum | Prisma.BienScalarFieldEnum[];
};
/**
 * Proprietaire.comptePublic
 */
export type Proprietaire$comptePublicArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComptePublic
     */
    select?: Prisma.ComptePublicSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ComptePublic
     */
    omit?: Prisma.ComptePublicOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ComptePublicInclude<ExtArgs> | null;
    where?: Prisma.ComptePublicWhereInput;
};
/**
 * Proprietaire.documentsBien
 */
export type Proprietaire$documentsBienArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.DocumentBienWhereInput;
    orderBy?: Prisma.DocumentBienOrderByWithRelationInput | Prisma.DocumentBienOrderByWithRelationInput[];
    cursor?: Prisma.DocumentBienWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentBienScalarFieldEnum | Prisma.DocumentBienScalarFieldEnum[];
};
/**
 * Proprietaire.etatsDesLieux
 */
export type Proprietaire$etatsDesLieuxArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EtatDesLieuxWhereInput;
    orderBy?: Prisma.EtatDesLieuxOrderByWithRelationInput | Prisma.EtatDesLieuxOrderByWithRelationInput[];
    cursor?: Prisma.EtatDesLieuxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EtatDesLieuxScalarFieldEnum | Prisma.EtatDesLieuxScalarFieldEnum[];
};
/**
 * Proprietaire.locataire
 */
export type Proprietaire$locataireArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.LocataireWhereInput;
    orderBy?: Prisma.LocataireOrderByWithRelationInput | Prisma.LocataireOrderByWithRelationInput[];
    cursor?: Prisma.LocataireWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocataireScalarFieldEnum | Prisma.LocataireScalarFieldEnum[];
};
/**
 * Proprietaire.messagesInternes
 */
export type Proprietaire$messagesInternesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MessageInterneWhereInput;
    orderBy?: Prisma.MessageInterneOrderByWithRelationInput | Prisma.MessageInterneOrderByWithRelationInput[];
    cursor?: Prisma.MessageInterneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageInterneScalarFieldEnum | Prisma.MessageInterneScalarFieldEnum[];
};
/**
 * Proprietaire.passwordResetTokens
 */
export type Proprietaire$passwordResetTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: Prisma.PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: Prisma.PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasswordResetTokenInclude<ExtArgs> | null;
    where?: Prisma.PasswordResetTokenWhereInput;
    orderBy?: Prisma.PasswordResetTokenOrderByWithRelationInput | Prisma.PasswordResetTokenOrderByWithRelationInput[];
    cursor?: Prisma.PasswordResetTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasswordResetTokenScalarFieldEnum | Prisma.PasswordResetTokenScalarFieldEnum[];
};
/**
 * Proprietaire.promotionHistories
 */
export type Proprietaire$promotionHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionHistory
     */
    select?: Prisma.PromotionHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromotionHistory
     */
    omit?: Prisma.PromotionHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromotionHistoryInclude<ExtArgs> | null;
    where?: Prisma.PromotionHistoryWhereInput;
    orderBy?: Prisma.PromotionHistoryOrderByWithRelationInput | Prisma.PromotionHistoryOrderByWithRelationInput[];
    cursor?: Prisma.PromotionHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromotionHistoryScalarFieldEnum | Prisma.PromotionHistoryScalarFieldEnum[];
};
/**
 * Proprietaire.refreshTokens
 */
export type Proprietaire$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietaireRefreshToken
     */
    select?: Prisma.ProprietaireRefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProprietaireRefreshToken
     */
    omit?: Prisma.ProprietaireRefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.ProprietaireRefreshTokenWhereInput;
    orderBy?: Prisma.ProprietaireRefreshTokenOrderByWithRelationInput | Prisma.ProprietaireRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.ProprietaireRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProprietaireRefreshTokenScalarFieldEnum | Prisma.ProprietaireRefreshTokenScalarFieldEnum[];
};
/**
 * Proprietaire.transactions
 */
export type Proprietaire$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * Proprietaire.verification
 */
export type Proprietaire$verificationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.VerificationDocumentsWhereInput;
};
/**
 * Proprietaire without action
 */
export type ProprietaireDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietaire
     */
    select?: Prisma.ProprietaireSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proprietaire
     */
    omit?: Prisma.ProprietaireOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProprietaireInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Proprietaire.d.ts.map