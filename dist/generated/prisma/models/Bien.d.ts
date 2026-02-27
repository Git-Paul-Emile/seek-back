import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Bien
 *
 */
export type BienModel = runtime.Types.Result.DefaultSelection<Prisma.$BienPayload>;
export type AggregateBien = {
    _count: BienCountAggregateOutputType | null;
    _avg: BienAvgAggregateOutputType | null;
    _sum: BienSumAggregateOutputType | null;
    _min: BienMinAggregateOutputType | null;
    _max: BienMaxAggregateOutputType | null;
};
export type BienAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    surface: number | null;
    surfaceParcelle: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    nbSalons: number | null;
    nbCuisines: number | null;
    etage: number | null;
    nbEtages: number | null;
    nbAppartements: number | null;
    nbPieces: number | null;
    nbWc: number | null;
    prix: number | null;
    caution: number | null;
};
export type BienSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    surface: number | null;
    surfaceParcelle: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    nbSalons: number | null;
    nbCuisines: number | null;
    etage: number | null;
    nbEtages: number | null;
    nbAppartements: number | null;
    nbPieces: number | null;
    nbWc: number | null;
    prix: number | null;
    caution: number | null;
};
export type BienMinAggregateOutputType = {
    id: string | null;
    titre: string | null;
    description: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    proprietaireId: string | null;
    pays: string | null;
    region: string | null;
    ville: string | null;
    quartier: string | null;
    adresse: string | null;
    pointRepere: string | null;
    latitude: number | null;
    longitude: number | null;
    surface: number | null;
    surfaceParcelle: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    nbSalons: number | null;
    nbCuisines: number | null;
    etage: number | null;
    nbEtages: number | null;
    nbAppartements: number | null;
    nbPieces: number | null;
    nbWc: number | null;
    typeTerrain: string | null;
    cloture: boolean | null;
    typeBureau: string | null;
    rideauMetallique: boolean | null;
    meuble: boolean | null;
    fumeurs: boolean | null;
    animaux: boolean | null;
    parking: boolean | null;
    ascenseur: boolean | null;
    prix: number | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean | null;
    caution: number | null;
    disponibleLe: Date | null;
    actif: boolean | null;
    statutAnnonce: $Enums.StatutAnnonce | null;
    noteAdmin: string | null;
    hasPendingRevision: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BienMaxAggregateOutputType = {
    id: string | null;
    titre: string | null;
    description: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    proprietaireId: string | null;
    pays: string | null;
    region: string | null;
    ville: string | null;
    quartier: string | null;
    adresse: string | null;
    pointRepere: string | null;
    latitude: number | null;
    longitude: number | null;
    surface: number | null;
    surfaceParcelle: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    nbSalons: number | null;
    nbCuisines: number | null;
    etage: number | null;
    nbEtages: number | null;
    nbAppartements: number | null;
    nbPieces: number | null;
    nbWc: number | null;
    typeTerrain: string | null;
    cloture: boolean | null;
    typeBureau: string | null;
    rideauMetallique: boolean | null;
    meuble: boolean | null;
    fumeurs: boolean | null;
    animaux: boolean | null;
    parking: boolean | null;
    ascenseur: boolean | null;
    prix: number | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean | null;
    caution: number | null;
    disponibleLe: Date | null;
    actif: boolean | null;
    statutAnnonce: $Enums.StatutAnnonce | null;
    noteAdmin: string | null;
    hasPendingRevision: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BienCountAggregateOutputType = {
    id: number;
    titre: number;
    description: number;
    typeLogementId: number;
    typeTransactionId: number;
    statutBienId: number;
    proprietaireId: number;
    pays: number;
    region: number;
    ville: number;
    quartier: number;
    adresse: number;
    pointRepere: number;
    latitude: number;
    longitude: number;
    surface: number;
    surfaceParcelle: number;
    nbChambres: number;
    nbSdb: number;
    nbSalons: number;
    nbCuisines: number;
    etage: number;
    nbEtages: number;
    nbAppartements: number;
    nbPieces: number;
    nbWc: number;
    typeTerrain: number;
    cloture: number;
    typeBureau: number;
    rideauMetallique: number;
    meuble: number;
    fumeurs: number;
    animaux: number;
    parking: number;
    ascenseur: number;
    prix: number;
    frequencePaiement: number;
    chargesIncluses: number;
    caution: number;
    disponibleLe: number;
    photos: number;
    actif: number;
    statutAnnonce: number;
    noteAdmin: number;
    hasPendingRevision: number;
    pendingRevision: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BienAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    surface?: true;
    surfaceParcelle?: true;
    nbChambres?: true;
    nbSdb?: true;
    nbSalons?: true;
    nbCuisines?: true;
    etage?: true;
    nbEtages?: true;
    nbAppartements?: true;
    nbPieces?: true;
    nbWc?: true;
    prix?: true;
    caution?: true;
};
export type BienSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    surface?: true;
    surfaceParcelle?: true;
    nbChambres?: true;
    nbSdb?: true;
    nbSalons?: true;
    nbCuisines?: true;
    etage?: true;
    nbEtages?: true;
    nbAppartements?: true;
    nbPieces?: true;
    nbWc?: true;
    prix?: true;
    caution?: true;
};
export type BienMinAggregateInputType = {
    id?: true;
    titre?: true;
    description?: true;
    typeLogementId?: true;
    typeTransactionId?: true;
    statutBienId?: true;
    proprietaireId?: true;
    pays?: true;
    region?: true;
    ville?: true;
    quartier?: true;
    adresse?: true;
    pointRepere?: true;
    latitude?: true;
    longitude?: true;
    surface?: true;
    surfaceParcelle?: true;
    nbChambres?: true;
    nbSdb?: true;
    nbSalons?: true;
    nbCuisines?: true;
    etage?: true;
    nbEtages?: true;
    nbAppartements?: true;
    nbPieces?: true;
    nbWc?: true;
    typeTerrain?: true;
    cloture?: true;
    typeBureau?: true;
    rideauMetallique?: true;
    meuble?: true;
    fumeurs?: true;
    animaux?: true;
    parking?: true;
    ascenseur?: true;
    prix?: true;
    frequencePaiement?: true;
    chargesIncluses?: true;
    caution?: true;
    disponibleLe?: true;
    actif?: true;
    statutAnnonce?: true;
    noteAdmin?: true;
    hasPendingRevision?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BienMaxAggregateInputType = {
    id?: true;
    titre?: true;
    description?: true;
    typeLogementId?: true;
    typeTransactionId?: true;
    statutBienId?: true;
    proprietaireId?: true;
    pays?: true;
    region?: true;
    ville?: true;
    quartier?: true;
    adresse?: true;
    pointRepere?: true;
    latitude?: true;
    longitude?: true;
    surface?: true;
    surfaceParcelle?: true;
    nbChambres?: true;
    nbSdb?: true;
    nbSalons?: true;
    nbCuisines?: true;
    etage?: true;
    nbEtages?: true;
    nbAppartements?: true;
    nbPieces?: true;
    nbWc?: true;
    typeTerrain?: true;
    cloture?: true;
    typeBureau?: true;
    rideauMetallique?: true;
    meuble?: true;
    fumeurs?: true;
    animaux?: true;
    parking?: true;
    ascenseur?: true;
    prix?: true;
    frequencePaiement?: true;
    chargesIncluses?: true;
    caution?: true;
    disponibleLe?: true;
    actif?: true;
    statutAnnonce?: true;
    noteAdmin?: true;
    hasPendingRevision?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BienCountAggregateInputType = {
    id?: true;
    titre?: true;
    description?: true;
    typeLogementId?: true;
    typeTransactionId?: true;
    statutBienId?: true;
    proprietaireId?: true;
    pays?: true;
    region?: true;
    ville?: true;
    quartier?: true;
    adresse?: true;
    pointRepere?: true;
    latitude?: true;
    longitude?: true;
    surface?: true;
    surfaceParcelle?: true;
    nbChambres?: true;
    nbSdb?: true;
    nbSalons?: true;
    nbCuisines?: true;
    etage?: true;
    nbEtages?: true;
    nbAppartements?: true;
    nbPieces?: true;
    nbWc?: true;
    typeTerrain?: true;
    cloture?: true;
    typeBureau?: true;
    rideauMetallique?: true;
    meuble?: true;
    fumeurs?: true;
    animaux?: true;
    parking?: true;
    ascenseur?: true;
    prix?: true;
    frequencePaiement?: true;
    chargesIncluses?: true;
    caution?: true;
    disponibleLe?: true;
    photos?: true;
    actif?: true;
    statutAnnonce?: true;
    noteAdmin?: true;
    hasPendingRevision?: true;
    pendingRevision?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BienAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bien to aggregate.
     */
    where?: Prisma.BienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Biens to fetch.
     */
    orderBy?: Prisma.BienOrderByWithRelationInput | Prisma.BienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Biens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Biens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Biens
    **/
    _count?: true | BienCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BienAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BienSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BienMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BienMaxAggregateInputType;
};
export type GetBienAggregateType<T extends BienAggregateArgs> = {
    [P in keyof T & keyof AggregateBien]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBien[P]> : Prisma.GetScalarType<T[P], AggregateBien[P]>;
};
export type BienGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienWhereInput;
    orderBy?: Prisma.BienOrderByWithAggregationInput | Prisma.BienOrderByWithAggregationInput[];
    by: Prisma.BienScalarFieldEnum[] | Prisma.BienScalarFieldEnum;
    having?: Prisma.BienScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BienCountAggregateInputType | true;
    _avg?: BienAvgAggregateInputType;
    _sum?: BienSumAggregateInputType;
    _min?: BienMinAggregateInputType;
    _max?: BienMaxAggregateInputType;
};
export type BienGroupByOutputType = {
    id: string;
    titre: string | null;
    description: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    proprietaireId: string;
    pays: string | null;
    region: string | null;
    ville: string | null;
    quartier: string | null;
    adresse: string | null;
    pointRepere: string | null;
    latitude: number | null;
    longitude: number | null;
    surface: number | null;
    surfaceParcelle: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    nbSalons: number | null;
    nbCuisines: number | null;
    etage: number | null;
    nbEtages: number | null;
    nbAppartements: number | null;
    nbPieces: number | null;
    nbWc: number | null;
    typeTerrain: string | null;
    cloture: boolean;
    typeBureau: string | null;
    rideauMetallique: boolean;
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    actif: boolean;
    statutAnnonce: $Enums.StatutAnnonce;
    noteAdmin: string | null;
    hasPendingRevision: boolean;
    pendingRevision: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BienCountAggregateOutputType | null;
    _avg: BienAvgAggregateOutputType | null;
    _sum: BienSumAggregateOutputType | null;
    _min: BienMinAggregateOutputType | null;
    _max: BienMaxAggregateOutputType | null;
};
type GetBienGroupByPayload<T extends BienGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BienGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BienGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BienGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BienGroupByOutputType[P]>;
}>>;
export type BienWhereInput = {
    AND?: Prisma.BienWhereInput | Prisma.BienWhereInput[];
    OR?: Prisma.BienWhereInput[];
    NOT?: Prisma.BienWhereInput | Prisma.BienWhereInput[];
    id?: Prisma.StringFilter<"Bien"> | string;
    titre?: Prisma.StringNullableFilter<"Bien"> | string | null;
    description?: Prisma.StringNullableFilter<"Bien"> | string | null;
    typeLogementId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    typeTransactionId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    statutBienId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    proprietaireId?: Prisma.StringFilter<"Bien"> | string;
    pays?: Prisma.StringNullableFilter<"Bien"> | string | null;
    region?: Prisma.StringNullableFilter<"Bien"> | string | null;
    ville?: Prisma.StringNullableFilter<"Bien"> | string | null;
    quartier?: Prisma.StringNullableFilter<"Bien"> | string | null;
    adresse?: Prisma.StringNullableFilter<"Bien"> | string | null;
    pointRepere?: Prisma.StringNullableFilter<"Bien"> | string | null;
    latitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surface?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceParcelle?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    nbChambres?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbSdb?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbSalons?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbCuisines?: Prisma.IntNullableFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbEtages?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbAppartements?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbWc?: Prisma.IntNullableFilter<"Bien"> | number | null;
    typeTerrain?: Prisma.StringNullableFilter<"Bien"> | string | null;
    cloture?: Prisma.BoolFilter<"Bien"> | boolean;
    typeBureau?: Prisma.StringNullableFilter<"Bien"> | string | null;
    rideauMetallique?: Prisma.BoolFilter<"Bien"> | boolean;
    meuble?: Prisma.BoolFilter<"Bien"> | boolean;
    fumeurs?: Prisma.BoolFilter<"Bien"> | boolean;
    animaux?: Prisma.BoolFilter<"Bien"> | boolean;
    parking?: Prisma.BoolFilter<"Bien"> | boolean;
    ascenseur?: Prisma.BoolFilter<"Bien"> | boolean;
    prix?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    frequencePaiement?: Prisma.StringNullableFilter<"Bien"> | string | null;
    chargesIncluses?: Prisma.BoolFilter<"Bien"> | boolean;
    caution?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    disponibleLe?: Prisma.DateTimeNullableFilter<"Bien"> | Date | string | null;
    photos?: Prisma.StringNullableListFilter<"Bien">;
    actif?: Prisma.BoolFilter<"Bien"> | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFilter<"Bien"> | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.StringNullableFilter<"Bien"> | string | null;
    hasPendingRevision?: Prisma.BoolFilter<"Bien"> | boolean;
    pendingRevision?: Prisma.JsonNullableFilter<"Bien">;
    createdAt?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    typeLogement?: Prisma.XOR<Prisma.TypeLogementNullableScalarRelationFilter, Prisma.TypeLogementWhereInput> | null;
    typeTransaction?: Prisma.XOR<Prisma.TypeTransactionNullableScalarRelationFilter, Prisma.TypeTransactionWhereInput> | null;
    statutBien?: Prisma.XOR<Prisma.StatutBienNullableScalarRelationFilter, Prisma.StatutBienWhereInput> | null;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    equipements?: Prisma.BienEquipementListRelationFilter;
    meubles?: Prisma.BienMeubleListRelationFilter;
    etablissements?: Prisma.EtablissementListRelationFilter;
    bails?: Prisma.BailLocationListRelationFilter;
};
export type BienOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeLogementId?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    statutBienId?: Prisma.SortOrderInput | Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    pays?: Prisma.SortOrderInput | Prisma.SortOrder;
    region?: Prisma.SortOrderInput | Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    quartier?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointRepere?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    surface?: Prisma.SortOrderInput | Prisma.SortOrder;
    surfaceParcelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbChambres?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbSdb?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbSalons?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbCuisines?: Prisma.SortOrderInput | Prisma.SortOrder;
    etage?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbEtages?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbAppartements?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbPieces?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbWc?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeTerrain?: Prisma.SortOrderInput | Prisma.SortOrder;
    cloture?: Prisma.SortOrder;
    typeBureau?: Prisma.SortOrderInput | Prisma.SortOrder;
    rideauMetallique?: Prisma.SortOrder;
    meuble?: Prisma.SortOrder;
    fumeurs?: Prisma.SortOrder;
    animaux?: Prisma.SortOrder;
    parking?: Prisma.SortOrder;
    ascenseur?: Prisma.SortOrder;
    prix?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    chargesIncluses?: Prisma.SortOrder;
    caution?: Prisma.SortOrderInput | Prisma.SortOrder;
    disponibleLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    statutAnnonce?: Prisma.SortOrder;
    noteAdmin?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasPendingRevision?: Prisma.SortOrder;
    pendingRevision?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    typeLogement?: Prisma.TypeLogementOrderByWithRelationInput;
    typeTransaction?: Prisma.TypeTransactionOrderByWithRelationInput;
    statutBien?: Prisma.StatutBienOrderByWithRelationInput;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
    equipements?: Prisma.BienEquipementOrderByRelationAggregateInput;
    meubles?: Prisma.BienMeubleOrderByRelationAggregateInput;
    etablissements?: Prisma.EtablissementOrderByRelationAggregateInput;
    bails?: Prisma.BailLocationOrderByRelationAggregateInput;
};
export type BienWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BienWhereInput | Prisma.BienWhereInput[];
    OR?: Prisma.BienWhereInput[];
    NOT?: Prisma.BienWhereInput | Prisma.BienWhereInput[];
    titre?: Prisma.StringNullableFilter<"Bien"> | string | null;
    description?: Prisma.StringNullableFilter<"Bien"> | string | null;
    typeLogementId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    typeTransactionId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    statutBienId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    proprietaireId?: Prisma.StringFilter<"Bien"> | string;
    pays?: Prisma.StringNullableFilter<"Bien"> | string | null;
    region?: Prisma.StringNullableFilter<"Bien"> | string | null;
    ville?: Prisma.StringNullableFilter<"Bien"> | string | null;
    quartier?: Prisma.StringNullableFilter<"Bien"> | string | null;
    adresse?: Prisma.StringNullableFilter<"Bien"> | string | null;
    pointRepere?: Prisma.StringNullableFilter<"Bien"> | string | null;
    latitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surface?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceParcelle?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    nbChambres?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbSdb?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbSalons?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbCuisines?: Prisma.IntNullableFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbEtages?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbAppartements?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbWc?: Prisma.IntNullableFilter<"Bien"> | number | null;
    typeTerrain?: Prisma.StringNullableFilter<"Bien"> | string | null;
    cloture?: Prisma.BoolFilter<"Bien"> | boolean;
    typeBureau?: Prisma.StringNullableFilter<"Bien"> | string | null;
    rideauMetallique?: Prisma.BoolFilter<"Bien"> | boolean;
    meuble?: Prisma.BoolFilter<"Bien"> | boolean;
    fumeurs?: Prisma.BoolFilter<"Bien"> | boolean;
    animaux?: Prisma.BoolFilter<"Bien"> | boolean;
    parking?: Prisma.BoolFilter<"Bien"> | boolean;
    ascenseur?: Prisma.BoolFilter<"Bien"> | boolean;
    prix?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    frequencePaiement?: Prisma.StringNullableFilter<"Bien"> | string | null;
    chargesIncluses?: Prisma.BoolFilter<"Bien"> | boolean;
    caution?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    disponibleLe?: Prisma.DateTimeNullableFilter<"Bien"> | Date | string | null;
    photos?: Prisma.StringNullableListFilter<"Bien">;
    actif?: Prisma.BoolFilter<"Bien"> | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFilter<"Bien"> | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.StringNullableFilter<"Bien"> | string | null;
    hasPendingRevision?: Prisma.BoolFilter<"Bien"> | boolean;
    pendingRevision?: Prisma.JsonNullableFilter<"Bien">;
    createdAt?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    typeLogement?: Prisma.XOR<Prisma.TypeLogementNullableScalarRelationFilter, Prisma.TypeLogementWhereInput> | null;
    typeTransaction?: Prisma.XOR<Prisma.TypeTransactionNullableScalarRelationFilter, Prisma.TypeTransactionWhereInput> | null;
    statutBien?: Prisma.XOR<Prisma.StatutBienNullableScalarRelationFilter, Prisma.StatutBienWhereInput> | null;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    equipements?: Prisma.BienEquipementListRelationFilter;
    meubles?: Prisma.BienMeubleListRelationFilter;
    etablissements?: Prisma.EtablissementListRelationFilter;
    bails?: Prisma.BailLocationListRelationFilter;
}, "id">;
export type BienOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeLogementId?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    statutBienId?: Prisma.SortOrderInput | Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    pays?: Prisma.SortOrderInput | Prisma.SortOrder;
    region?: Prisma.SortOrderInput | Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    quartier?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointRepere?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    surface?: Prisma.SortOrderInput | Prisma.SortOrder;
    surfaceParcelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbChambres?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbSdb?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbSalons?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbCuisines?: Prisma.SortOrderInput | Prisma.SortOrder;
    etage?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbEtages?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbAppartements?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbPieces?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbWc?: Prisma.SortOrderInput | Prisma.SortOrder;
    typeTerrain?: Prisma.SortOrderInput | Prisma.SortOrder;
    cloture?: Prisma.SortOrder;
    typeBureau?: Prisma.SortOrderInput | Prisma.SortOrder;
    rideauMetallique?: Prisma.SortOrder;
    meuble?: Prisma.SortOrder;
    fumeurs?: Prisma.SortOrder;
    animaux?: Prisma.SortOrder;
    parking?: Prisma.SortOrder;
    ascenseur?: Prisma.SortOrder;
    prix?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    chargesIncluses?: Prisma.SortOrder;
    caution?: Prisma.SortOrderInput | Prisma.SortOrder;
    disponibleLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    statutAnnonce?: Prisma.SortOrder;
    noteAdmin?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasPendingRevision?: Prisma.SortOrder;
    pendingRevision?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BienCountOrderByAggregateInput;
    _avg?: Prisma.BienAvgOrderByAggregateInput;
    _max?: Prisma.BienMaxOrderByAggregateInput;
    _min?: Prisma.BienMinOrderByAggregateInput;
    _sum?: Prisma.BienSumOrderByAggregateInput;
};
export type BienScalarWhereWithAggregatesInput = {
    AND?: Prisma.BienScalarWhereWithAggregatesInput | Prisma.BienScalarWhereWithAggregatesInput[];
    OR?: Prisma.BienScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BienScalarWhereWithAggregatesInput | Prisma.BienScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Bien"> | string;
    titre?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    typeLogementId?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    typeTransactionId?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    statutBienId?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"Bien"> | string;
    pays?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    region?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    ville?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    quartier?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    adresse?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    pointRepere?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    surface?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    surfaceParcelle?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    nbChambres?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    nbSdb?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    nbSalons?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    nbCuisines?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    nbEtages?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    nbAppartements?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    nbWc?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    typeTerrain?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    cloture?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    typeBureau?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    rideauMetallique?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    meuble?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    fumeurs?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    animaux?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    parking?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    ascenseur?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    prix?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    frequencePaiement?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    chargesIncluses?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    caution?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    disponibleLe?: Prisma.DateTimeNullableWithAggregatesFilter<"Bien"> | Date | string | null;
    photos?: Prisma.StringNullableListFilter<"Bien">;
    actif?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceWithAggregatesFilter<"Bien"> | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    hasPendingRevision?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    pendingRevision?: Prisma.JsonNullableWithAggregatesFilter<"Bien">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Bien"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Bien"> | Date | string;
};
export type BienCreateInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateManyInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BienUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienListRelationFilter = {
    every?: Prisma.BienWhereInput;
    some?: Prisma.BienWhereInput;
    none?: Prisma.BienWhereInput;
};
export type BienOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type BienCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    typeLogementId?: Prisma.SortOrder;
    typeTransactionId?: Prisma.SortOrder;
    statutBienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    pointRepere?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceParcelle?: Prisma.SortOrder;
    nbChambres?: Prisma.SortOrder;
    nbSdb?: Prisma.SortOrder;
    nbSalons?: Prisma.SortOrder;
    nbCuisines?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    nbEtages?: Prisma.SortOrder;
    nbAppartements?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    nbWc?: Prisma.SortOrder;
    typeTerrain?: Prisma.SortOrder;
    cloture?: Prisma.SortOrder;
    typeBureau?: Prisma.SortOrder;
    rideauMetallique?: Prisma.SortOrder;
    meuble?: Prisma.SortOrder;
    fumeurs?: Prisma.SortOrder;
    animaux?: Prisma.SortOrder;
    parking?: Prisma.SortOrder;
    ascenseur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrder;
    chargesIncluses?: Prisma.SortOrder;
    caution?: Prisma.SortOrder;
    disponibleLe?: Prisma.SortOrder;
    photos?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    statutAnnonce?: Prisma.SortOrder;
    noteAdmin?: Prisma.SortOrder;
    hasPendingRevision?: Prisma.SortOrder;
    pendingRevision?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BienAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceParcelle?: Prisma.SortOrder;
    nbChambres?: Prisma.SortOrder;
    nbSdb?: Prisma.SortOrder;
    nbSalons?: Prisma.SortOrder;
    nbCuisines?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    nbEtages?: Prisma.SortOrder;
    nbAppartements?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    nbWc?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    caution?: Prisma.SortOrder;
};
export type BienMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    typeLogementId?: Prisma.SortOrder;
    typeTransactionId?: Prisma.SortOrder;
    statutBienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    pointRepere?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceParcelle?: Prisma.SortOrder;
    nbChambres?: Prisma.SortOrder;
    nbSdb?: Prisma.SortOrder;
    nbSalons?: Prisma.SortOrder;
    nbCuisines?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    nbEtages?: Prisma.SortOrder;
    nbAppartements?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    nbWc?: Prisma.SortOrder;
    typeTerrain?: Prisma.SortOrder;
    cloture?: Prisma.SortOrder;
    typeBureau?: Prisma.SortOrder;
    rideauMetallique?: Prisma.SortOrder;
    meuble?: Prisma.SortOrder;
    fumeurs?: Prisma.SortOrder;
    animaux?: Prisma.SortOrder;
    parking?: Prisma.SortOrder;
    ascenseur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrder;
    chargesIncluses?: Prisma.SortOrder;
    caution?: Prisma.SortOrder;
    disponibleLe?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    statutAnnonce?: Prisma.SortOrder;
    noteAdmin?: Prisma.SortOrder;
    hasPendingRevision?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BienMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    typeLogementId?: Prisma.SortOrder;
    typeTransactionId?: Prisma.SortOrder;
    statutBienId?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    pointRepere?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceParcelle?: Prisma.SortOrder;
    nbChambres?: Prisma.SortOrder;
    nbSdb?: Prisma.SortOrder;
    nbSalons?: Prisma.SortOrder;
    nbCuisines?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    nbEtages?: Prisma.SortOrder;
    nbAppartements?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    nbWc?: Prisma.SortOrder;
    typeTerrain?: Prisma.SortOrder;
    cloture?: Prisma.SortOrder;
    typeBureau?: Prisma.SortOrder;
    rideauMetallique?: Prisma.SortOrder;
    meuble?: Prisma.SortOrder;
    fumeurs?: Prisma.SortOrder;
    animaux?: Prisma.SortOrder;
    parking?: Prisma.SortOrder;
    ascenseur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    frequencePaiement?: Prisma.SortOrder;
    chargesIncluses?: Prisma.SortOrder;
    caution?: Prisma.SortOrder;
    disponibleLe?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    statutAnnonce?: Prisma.SortOrder;
    noteAdmin?: Prisma.SortOrder;
    hasPendingRevision?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BienSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceParcelle?: Prisma.SortOrder;
    nbChambres?: Prisma.SortOrder;
    nbSdb?: Prisma.SortOrder;
    nbSalons?: Prisma.SortOrder;
    nbCuisines?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    nbEtages?: Prisma.SortOrder;
    nbAppartements?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    nbWc?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    caution?: Prisma.SortOrder;
};
export type BienScalarRelationFilter = {
    is?: Prisma.BienWhereInput;
    isNot?: Prisma.BienWhereInput;
};
export type BienCreateNestedManyWithoutTypeLogementInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeLogementInput, Prisma.BienUncheckedCreateWithoutTypeLogementInput> | Prisma.BienCreateWithoutTypeLogementInput[] | Prisma.BienUncheckedCreateWithoutTypeLogementInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeLogementInput | Prisma.BienCreateOrConnectWithoutTypeLogementInput[];
    createMany?: Prisma.BienCreateManyTypeLogementInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUncheckedCreateNestedManyWithoutTypeLogementInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeLogementInput, Prisma.BienUncheckedCreateWithoutTypeLogementInput> | Prisma.BienCreateWithoutTypeLogementInput[] | Prisma.BienUncheckedCreateWithoutTypeLogementInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeLogementInput | Prisma.BienCreateOrConnectWithoutTypeLogementInput[];
    createMany?: Prisma.BienCreateManyTypeLogementInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUpdateManyWithoutTypeLogementNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeLogementInput, Prisma.BienUncheckedCreateWithoutTypeLogementInput> | Prisma.BienCreateWithoutTypeLogementInput[] | Prisma.BienUncheckedCreateWithoutTypeLogementInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeLogementInput | Prisma.BienCreateOrConnectWithoutTypeLogementInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutTypeLogementInput | Prisma.BienUpsertWithWhereUniqueWithoutTypeLogementInput[];
    createMany?: Prisma.BienCreateManyTypeLogementInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutTypeLogementInput | Prisma.BienUpdateWithWhereUniqueWithoutTypeLogementInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutTypeLogementInput | Prisma.BienUpdateManyWithWhereWithoutTypeLogementInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienUncheckedUpdateManyWithoutTypeLogementNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeLogementInput, Prisma.BienUncheckedCreateWithoutTypeLogementInput> | Prisma.BienCreateWithoutTypeLogementInput[] | Prisma.BienUncheckedCreateWithoutTypeLogementInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeLogementInput | Prisma.BienCreateOrConnectWithoutTypeLogementInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutTypeLogementInput | Prisma.BienUpsertWithWhereUniqueWithoutTypeLogementInput[];
    createMany?: Prisma.BienCreateManyTypeLogementInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutTypeLogementInput | Prisma.BienUpdateWithWhereUniqueWithoutTypeLogementInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutTypeLogementInput | Prisma.BienUpdateManyWithWhereWithoutTypeLogementInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienCreateNestedManyWithoutTypeTransactionInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeTransactionInput, Prisma.BienUncheckedCreateWithoutTypeTransactionInput> | Prisma.BienCreateWithoutTypeTransactionInput[] | Prisma.BienUncheckedCreateWithoutTypeTransactionInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeTransactionInput | Prisma.BienCreateOrConnectWithoutTypeTransactionInput[];
    createMany?: Prisma.BienCreateManyTypeTransactionInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUncheckedCreateNestedManyWithoutTypeTransactionInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeTransactionInput, Prisma.BienUncheckedCreateWithoutTypeTransactionInput> | Prisma.BienCreateWithoutTypeTransactionInput[] | Prisma.BienUncheckedCreateWithoutTypeTransactionInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeTransactionInput | Prisma.BienCreateOrConnectWithoutTypeTransactionInput[];
    createMany?: Prisma.BienCreateManyTypeTransactionInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUpdateManyWithoutTypeTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeTransactionInput, Prisma.BienUncheckedCreateWithoutTypeTransactionInput> | Prisma.BienCreateWithoutTypeTransactionInput[] | Prisma.BienUncheckedCreateWithoutTypeTransactionInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeTransactionInput | Prisma.BienCreateOrConnectWithoutTypeTransactionInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutTypeTransactionInput | Prisma.BienUpsertWithWhereUniqueWithoutTypeTransactionInput[];
    createMany?: Prisma.BienCreateManyTypeTransactionInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutTypeTransactionInput | Prisma.BienUpdateWithWhereUniqueWithoutTypeTransactionInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutTypeTransactionInput | Prisma.BienUpdateManyWithWhereWithoutTypeTransactionInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienUncheckedUpdateManyWithoutTypeTransactionNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutTypeTransactionInput, Prisma.BienUncheckedCreateWithoutTypeTransactionInput> | Prisma.BienCreateWithoutTypeTransactionInput[] | Prisma.BienUncheckedCreateWithoutTypeTransactionInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutTypeTransactionInput | Prisma.BienCreateOrConnectWithoutTypeTransactionInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutTypeTransactionInput | Prisma.BienUpsertWithWhereUniqueWithoutTypeTransactionInput[];
    createMany?: Prisma.BienCreateManyTypeTransactionInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutTypeTransactionInput | Prisma.BienUpdateWithWhereUniqueWithoutTypeTransactionInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutTypeTransactionInput | Prisma.BienUpdateManyWithWhereWithoutTypeTransactionInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienCreateNestedManyWithoutStatutBienInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutStatutBienInput, Prisma.BienUncheckedCreateWithoutStatutBienInput> | Prisma.BienCreateWithoutStatutBienInput[] | Prisma.BienUncheckedCreateWithoutStatutBienInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutStatutBienInput | Prisma.BienCreateOrConnectWithoutStatutBienInput[];
    createMany?: Prisma.BienCreateManyStatutBienInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUncheckedCreateNestedManyWithoutStatutBienInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutStatutBienInput, Prisma.BienUncheckedCreateWithoutStatutBienInput> | Prisma.BienCreateWithoutStatutBienInput[] | Prisma.BienUncheckedCreateWithoutStatutBienInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutStatutBienInput | Prisma.BienCreateOrConnectWithoutStatutBienInput[];
    createMany?: Prisma.BienCreateManyStatutBienInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUpdateManyWithoutStatutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutStatutBienInput, Prisma.BienUncheckedCreateWithoutStatutBienInput> | Prisma.BienCreateWithoutStatutBienInput[] | Prisma.BienUncheckedCreateWithoutStatutBienInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutStatutBienInput | Prisma.BienCreateOrConnectWithoutStatutBienInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutStatutBienInput | Prisma.BienUpsertWithWhereUniqueWithoutStatutBienInput[];
    createMany?: Prisma.BienCreateManyStatutBienInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutStatutBienInput | Prisma.BienUpdateWithWhereUniqueWithoutStatutBienInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutStatutBienInput | Prisma.BienUpdateManyWithWhereWithoutStatutBienInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienUncheckedUpdateManyWithoutStatutBienNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutStatutBienInput, Prisma.BienUncheckedCreateWithoutStatutBienInput> | Prisma.BienCreateWithoutStatutBienInput[] | Prisma.BienUncheckedCreateWithoutStatutBienInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutStatutBienInput | Prisma.BienCreateOrConnectWithoutStatutBienInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutStatutBienInput | Prisma.BienUpsertWithWhereUniqueWithoutStatutBienInput[];
    createMany?: Prisma.BienCreateManyStatutBienInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutStatutBienInput | Prisma.BienUpdateWithWhereUniqueWithoutStatutBienInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutStatutBienInput | Prisma.BienUpdateManyWithWhereWithoutStatutBienInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienCreatephotosInput = {
    set: string[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BienUpdatephotosInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumStatutAnnonceFieldUpdateOperationsInput = {
    set?: $Enums.StatutAnnonce;
};
export type BienCreateNestedOneWithoutEquipementsInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutEquipementsInput, Prisma.BienUncheckedCreateWithoutEquipementsInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutEquipementsInput;
    connect?: Prisma.BienWhereUniqueInput;
};
export type BienUpdateOneRequiredWithoutEquipementsNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutEquipementsInput, Prisma.BienUncheckedCreateWithoutEquipementsInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutEquipementsInput;
    upsert?: Prisma.BienUpsertWithoutEquipementsInput;
    connect?: Prisma.BienWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BienUpdateToOneWithWhereWithoutEquipementsInput, Prisma.BienUpdateWithoutEquipementsInput>, Prisma.BienUncheckedUpdateWithoutEquipementsInput>;
};
export type BienCreateNestedOneWithoutMeublesInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutMeublesInput, Prisma.BienUncheckedCreateWithoutMeublesInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutMeublesInput;
    connect?: Prisma.BienWhereUniqueInput;
};
export type BienUpdateOneRequiredWithoutMeublesNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutMeublesInput, Prisma.BienUncheckedCreateWithoutMeublesInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutMeublesInput;
    upsert?: Prisma.BienUpsertWithoutMeublesInput;
    connect?: Prisma.BienWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BienUpdateToOneWithWhereWithoutMeublesInput, Prisma.BienUpdateWithoutMeublesInput>, Prisma.BienUncheckedUpdateWithoutMeublesInput>;
};
export type BienCreateNestedOneWithoutEtablissementsInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutEtablissementsInput, Prisma.BienUncheckedCreateWithoutEtablissementsInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutEtablissementsInput;
    connect?: Prisma.BienWhereUniqueInput;
};
export type BienUpdateOneRequiredWithoutEtablissementsNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutEtablissementsInput, Prisma.BienUncheckedCreateWithoutEtablissementsInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutEtablissementsInput;
    upsert?: Prisma.BienUpsertWithoutEtablissementsInput;
    connect?: Prisma.BienWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BienUpdateToOneWithWhereWithoutEtablissementsInput, Prisma.BienUpdateWithoutEtablissementsInput>, Prisma.BienUncheckedUpdateWithoutEtablissementsInput>;
};
export type BienCreateNestedOneWithoutBailsInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutBailsInput, Prisma.BienUncheckedCreateWithoutBailsInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutBailsInput;
    connect?: Prisma.BienWhereUniqueInput;
};
export type BienUpdateOneRequiredWithoutBailsNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutBailsInput, Prisma.BienUncheckedCreateWithoutBailsInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutBailsInput;
    upsert?: Prisma.BienUpsertWithoutBailsInput;
    connect?: Prisma.BienWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BienUpdateToOneWithWhereWithoutBailsInput, Prisma.BienUpdateWithoutBailsInput>, Prisma.BienUncheckedUpdateWithoutBailsInput>;
};
export type BienCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutProprietaireInput, Prisma.BienUncheckedCreateWithoutProprietaireInput> | Prisma.BienCreateWithoutProprietaireInput[] | Prisma.BienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutProprietaireInput | Prisma.BienCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.BienCreateManyProprietaireInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutProprietaireInput, Prisma.BienUncheckedCreateWithoutProprietaireInput> | Prisma.BienCreateWithoutProprietaireInput[] | Prisma.BienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutProprietaireInput | Prisma.BienCreateOrConnectWithoutProprietaireInput[];
    createMany?: Prisma.BienCreateManyProprietaireInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutProprietaireInput, Prisma.BienUncheckedCreateWithoutProprietaireInput> | Prisma.BienCreateWithoutProprietaireInput[] | Prisma.BienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutProprietaireInput | Prisma.BienCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.BienUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.BienCreateManyProprietaireInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.BienUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutProprietaireInput | Prisma.BienUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutProprietaireInput, Prisma.BienUncheckedCreateWithoutProprietaireInput> | Prisma.BienCreateWithoutProprietaireInput[] | Prisma.BienUncheckedCreateWithoutProprietaireInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutProprietaireInput | Prisma.BienCreateOrConnectWithoutProprietaireInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutProprietaireInput | Prisma.BienUpsertWithWhereUniqueWithoutProprietaireInput[];
    createMany?: Prisma.BienCreateManyProprietaireInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutProprietaireInput | Prisma.BienUpdateWithWhereUniqueWithoutProprietaireInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutProprietaireInput | Prisma.BienUpdateManyWithWhereWithoutProprietaireInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienCreateWithoutTypeLogementInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutTypeLogementInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutTypeLogementInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutTypeLogementInput, Prisma.BienUncheckedCreateWithoutTypeLogementInput>;
};
export type BienCreateManyTypeLogementInputEnvelope = {
    data: Prisma.BienCreateManyTypeLogementInput | Prisma.BienCreateManyTypeLogementInput[];
    skipDuplicates?: boolean;
};
export type BienUpsertWithWhereUniqueWithoutTypeLogementInput = {
    where: Prisma.BienWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienUpdateWithoutTypeLogementInput, Prisma.BienUncheckedUpdateWithoutTypeLogementInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutTypeLogementInput, Prisma.BienUncheckedCreateWithoutTypeLogementInput>;
};
export type BienUpdateWithWhereUniqueWithoutTypeLogementInput = {
    where: Prisma.BienWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutTypeLogementInput, Prisma.BienUncheckedUpdateWithoutTypeLogementInput>;
};
export type BienUpdateManyWithWhereWithoutTypeLogementInput = {
    where: Prisma.BienScalarWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateManyMutationInput, Prisma.BienUncheckedUpdateManyWithoutTypeLogementInput>;
};
export type BienScalarWhereInput = {
    AND?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
    OR?: Prisma.BienScalarWhereInput[];
    NOT?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
    id?: Prisma.StringFilter<"Bien"> | string;
    titre?: Prisma.StringNullableFilter<"Bien"> | string | null;
    description?: Prisma.StringNullableFilter<"Bien"> | string | null;
    typeLogementId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    typeTransactionId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    statutBienId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    proprietaireId?: Prisma.StringFilter<"Bien"> | string;
    pays?: Prisma.StringNullableFilter<"Bien"> | string | null;
    region?: Prisma.StringNullableFilter<"Bien"> | string | null;
    ville?: Prisma.StringNullableFilter<"Bien"> | string | null;
    quartier?: Prisma.StringNullableFilter<"Bien"> | string | null;
    adresse?: Prisma.StringNullableFilter<"Bien"> | string | null;
    pointRepere?: Prisma.StringNullableFilter<"Bien"> | string | null;
    latitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surface?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceParcelle?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    nbChambres?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbSdb?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbSalons?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbCuisines?: Prisma.IntNullableFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbEtages?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbAppartements?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableFilter<"Bien"> | number | null;
    nbWc?: Prisma.IntNullableFilter<"Bien"> | number | null;
    typeTerrain?: Prisma.StringNullableFilter<"Bien"> | string | null;
    cloture?: Prisma.BoolFilter<"Bien"> | boolean;
    typeBureau?: Prisma.StringNullableFilter<"Bien"> | string | null;
    rideauMetallique?: Prisma.BoolFilter<"Bien"> | boolean;
    meuble?: Prisma.BoolFilter<"Bien"> | boolean;
    fumeurs?: Prisma.BoolFilter<"Bien"> | boolean;
    animaux?: Prisma.BoolFilter<"Bien"> | boolean;
    parking?: Prisma.BoolFilter<"Bien"> | boolean;
    ascenseur?: Prisma.BoolFilter<"Bien"> | boolean;
    prix?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    frequencePaiement?: Prisma.StringNullableFilter<"Bien"> | string | null;
    chargesIncluses?: Prisma.BoolFilter<"Bien"> | boolean;
    caution?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    disponibleLe?: Prisma.DateTimeNullableFilter<"Bien"> | Date | string | null;
    photos?: Prisma.StringNullableListFilter<"Bien">;
    actif?: Prisma.BoolFilter<"Bien"> | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFilter<"Bien"> | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.StringNullableFilter<"Bien"> | string | null;
    hasPendingRevision?: Prisma.BoolFilter<"Bien"> | boolean;
    pendingRevision?: Prisma.JsonNullableFilter<"Bien">;
    createdAt?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bien"> | Date | string;
};
export type BienCreateWithoutTypeTransactionInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutTypeTransactionInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutTypeTransactionInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutTypeTransactionInput, Prisma.BienUncheckedCreateWithoutTypeTransactionInput>;
};
export type BienCreateManyTypeTransactionInputEnvelope = {
    data: Prisma.BienCreateManyTypeTransactionInput | Prisma.BienCreateManyTypeTransactionInput[];
    skipDuplicates?: boolean;
};
export type BienUpsertWithWhereUniqueWithoutTypeTransactionInput = {
    where: Prisma.BienWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienUpdateWithoutTypeTransactionInput, Prisma.BienUncheckedUpdateWithoutTypeTransactionInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutTypeTransactionInput, Prisma.BienUncheckedCreateWithoutTypeTransactionInput>;
};
export type BienUpdateWithWhereUniqueWithoutTypeTransactionInput = {
    where: Prisma.BienWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutTypeTransactionInput, Prisma.BienUncheckedUpdateWithoutTypeTransactionInput>;
};
export type BienUpdateManyWithWhereWithoutTypeTransactionInput = {
    where: Prisma.BienScalarWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateManyMutationInput, Prisma.BienUncheckedUpdateManyWithoutTypeTransactionInput>;
};
export type BienCreateWithoutStatutBienInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutStatutBienInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutStatutBienInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutStatutBienInput, Prisma.BienUncheckedCreateWithoutStatutBienInput>;
};
export type BienCreateManyStatutBienInputEnvelope = {
    data: Prisma.BienCreateManyStatutBienInput | Prisma.BienCreateManyStatutBienInput[];
    skipDuplicates?: boolean;
};
export type BienUpsertWithWhereUniqueWithoutStatutBienInput = {
    where: Prisma.BienWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienUpdateWithoutStatutBienInput, Prisma.BienUncheckedUpdateWithoutStatutBienInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutStatutBienInput, Prisma.BienUncheckedCreateWithoutStatutBienInput>;
};
export type BienUpdateWithWhereUniqueWithoutStatutBienInput = {
    where: Prisma.BienWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutStatutBienInput, Prisma.BienUncheckedUpdateWithoutStatutBienInput>;
};
export type BienUpdateManyWithWhereWithoutStatutBienInput = {
    where: Prisma.BienScalarWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateManyMutationInput, Prisma.BienUncheckedUpdateManyWithoutStatutBienInput>;
};
export type BienCreateWithoutEquipementsInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutEquipementsInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutEquipementsInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutEquipementsInput, Prisma.BienUncheckedCreateWithoutEquipementsInput>;
};
export type BienUpsertWithoutEquipementsInput = {
    update: Prisma.XOR<Prisma.BienUpdateWithoutEquipementsInput, Prisma.BienUncheckedUpdateWithoutEquipementsInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutEquipementsInput, Prisma.BienUncheckedCreateWithoutEquipementsInput>;
    where?: Prisma.BienWhereInput;
};
export type BienUpdateToOneWithWhereWithoutEquipementsInput = {
    where?: Prisma.BienWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutEquipementsInput, Prisma.BienUncheckedUpdateWithoutEquipementsInput>;
};
export type BienUpdateWithoutEquipementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutEquipementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateWithoutMeublesInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutMeublesInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutMeublesInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutMeublesInput, Prisma.BienUncheckedCreateWithoutMeublesInput>;
};
export type BienUpsertWithoutMeublesInput = {
    update: Prisma.XOR<Prisma.BienUpdateWithoutMeublesInput, Prisma.BienUncheckedUpdateWithoutMeublesInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutMeublesInput, Prisma.BienUncheckedCreateWithoutMeublesInput>;
    where?: Prisma.BienWhereInput;
};
export type BienUpdateToOneWithWhereWithoutMeublesInput = {
    where?: Prisma.BienWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutMeublesInput, Prisma.BienUncheckedUpdateWithoutMeublesInput>;
};
export type BienUpdateWithoutMeublesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutMeublesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateWithoutEtablissementsInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutEtablissementsInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutEtablissementsInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutEtablissementsInput, Prisma.BienUncheckedCreateWithoutEtablissementsInput>;
};
export type BienUpsertWithoutEtablissementsInput = {
    update: Prisma.XOR<Prisma.BienUpdateWithoutEtablissementsInput, Prisma.BienUncheckedUpdateWithoutEtablissementsInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutEtablissementsInput, Prisma.BienUncheckedCreateWithoutEtablissementsInput>;
    where?: Prisma.BienWhereInput;
};
export type BienUpdateToOneWithWhereWithoutEtablissementsInput = {
    where?: Prisma.BienWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutEtablissementsInput, Prisma.BienUncheckedUpdateWithoutEtablissementsInput>;
};
export type BienUpdateWithoutEtablissementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutEtablissementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateWithoutBailsInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutBailsInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutBailsInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutBailsInput, Prisma.BienUncheckedCreateWithoutBailsInput>;
};
export type BienUpsertWithoutBailsInput = {
    update: Prisma.XOR<Prisma.BienUpdateWithoutBailsInput, Prisma.BienUncheckedUpdateWithoutBailsInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutBailsInput, Prisma.BienUncheckedCreateWithoutBailsInput>;
    where?: Prisma.BienWhereInput;
};
export type BienUpdateToOneWithWhereWithoutBailsInput = {
    where?: Prisma.BienWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutBailsInput, Prisma.BienUncheckedUpdateWithoutBailsInput>;
};
export type BienUpdateWithoutBailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutBailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateWithoutProprietaireInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeLogement?: Prisma.TypeLogementCreateNestedOneWithoutBiensInput;
    typeTransaction?: Prisma.TypeTransactionCreateNestedOneWithoutBiensInput;
    statutBien?: Prisma.StatutBienCreateNestedOneWithoutBiensInput;
    equipements?: Prisma.BienEquipementCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    equipements?: Prisma.BienEquipementUncheckedCreateNestedManyWithoutBienInput;
    meubles?: Prisma.BienMeubleUncheckedCreateNestedManyWithoutBienInput;
    etablissements?: Prisma.EtablissementUncheckedCreateNestedManyWithoutBienInput;
    bails?: Prisma.BailLocationUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutProprietaireInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutProprietaireInput, Prisma.BienUncheckedCreateWithoutProprietaireInput>;
};
export type BienCreateManyProprietaireInputEnvelope = {
    data: Prisma.BienCreateManyProprietaireInput | Prisma.BienCreateManyProprietaireInput[];
    skipDuplicates?: boolean;
};
export type BienUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.BienWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienUpdateWithoutProprietaireInput, Prisma.BienUncheckedUpdateWithoutProprietaireInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutProprietaireInput, Prisma.BienUncheckedCreateWithoutProprietaireInput>;
};
export type BienUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: Prisma.BienWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutProprietaireInput, Prisma.BienUncheckedUpdateWithoutProprietaireInput>;
};
export type BienUpdateManyWithWhereWithoutProprietaireInput = {
    where: Prisma.BienScalarWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateManyMutationInput, Prisma.BienUncheckedUpdateManyWithoutProprietaireInput>;
};
export type BienCreateManyTypeLogementInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BienUpdateWithoutTypeLogementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutTypeLogementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateManyWithoutTypeLogementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienCreateManyTypeTransactionInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BienUpdateWithoutTypeTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutTypeTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateManyWithoutTypeTransactionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienCreateManyStatutBienInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BienUpdateWithoutStatutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutStatutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateManyWithoutStatutBienInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienCreateManyProprietaireInput = {
    id?: string;
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    surfaceParcelle?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    nbAppartements?: number | null;
    nbPieces?: number | null;
    nbWc?: number | null;
    typeTerrain?: string | null;
    cloture?: boolean;
    typeBureau?: string | null;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | string | null;
    photos?: Prisma.BienCreatephotosInput | string[];
    actif?: boolean;
    statutAnnonce?: $Enums.StatutAnnonce;
    noteAdmin?: string | null;
    hasPendingRevision?: boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BienUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeLogement?: Prisma.TypeLogementUpdateOneWithoutBiensNestedInput;
    typeTransaction?: Prisma.TypeTransactionUpdateOneWithoutBiensNestedInput;
    statutBien?: Prisma.StatutBienUpdateOneWithoutBiensNestedInput;
    equipements?: Prisma.BienEquipementUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    equipements?: Prisma.BienEquipementUncheckedUpdateManyWithoutBienNestedInput;
    meubles?: Prisma.BienMeubleUncheckedUpdateManyWithoutBienNestedInput;
    etablissements?: Prisma.EtablissementUncheckedUpdateManyWithoutBienNestedInput;
    bails?: Prisma.BailLocationUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeLogementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    typeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statutBienId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointRepere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceParcelle?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbChambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSdb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbSalons?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbCuisines?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbEtages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbAppartements?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nbWc?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    typeTerrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloture?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    typeBureau?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rideauMetallique?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    meuble?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fumeurs?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    animaux?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ascenseur?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prix?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    frequencePaiement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargesIncluses?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    caution?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    disponibleLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photos?: Prisma.BienUpdatephotosInput | string[];
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statutAnnonce?: Prisma.EnumStatutAnnonceFieldUpdateOperationsInput | $Enums.StatutAnnonce;
    noteAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasPendingRevision?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pendingRevision?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type BienCountOutputType
 */
export type BienCountOutputType = {
    equipements: number;
    meubles: number;
    etablissements: number;
    bails: number;
};
export type BienCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    equipements?: boolean | BienCountOutputTypeCountEquipementsArgs;
    meubles?: boolean | BienCountOutputTypeCountMeublesArgs;
    etablissements?: boolean | BienCountOutputTypeCountEtablissementsArgs;
    bails?: boolean | BienCountOutputTypeCountBailsArgs;
};
/**
 * BienCountOutputType without action
 */
export type BienCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienCountOutputType
     */
    select?: Prisma.BienCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BienCountOutputType without action
 */
export type BienCountOutputTypeCountEquipementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienEquipementWhereInput;
};
/**
 * BienCountOutputType without action
 */
export type BienCountOutputTypeCountMeublesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienMeubleWhereInput;
};
/**
 * BienCountOutputType without action
 */
export type BienCountOutputTypeCountEtablissementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtablissementWhereInput;
};
/**
 * BienCountOutputType without action
 */
export type BienCountOutputTypeCountBailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BailLocationWhereInput;
};
export type BienSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    description?: boolean;
    typeLogementId?: boolean;
    typeTransactionId?: boolean;
    statutBienId?: boolean;
    proprietaireId?: boolean;
    pays?: boolean;
    region?: boolean;
    ville?: boolean;
    quartier?: boolean;
    adresse?: boolean;
    pointRepere?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    surface?: boolean;
    surfaceParcelle?: boolean;
    nbChambres?: boolean;
    nbSdb?: boolean;
    nbSalons?: boolean;
    nbCuisines?: boolean;
    etage?: boolean;
    nbEtages?: boolean;
    nbAppartements?: boolean;
    nbPieces?: boolean;
    nbWc?: boolean;
    typeTerrain?: boolean;
    cloture?: boolean;
    typeBureau?: boolean;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: boolean;
    frequencePaiement?: boolean;
    chargesIncluses?: boolean;
    caution?: boolean;
    disponibleLe?: boolean;
    photos?: boolean;
    actif?: boolean;
    statutAnnonce?: boolean;
    noteAdmin?: boolean;
    hasPendingRevision?: boolean;
    pendingRevision?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    typeLogement?: boolean | Prisma.Bien$typeLogementArgs<ExtArgs>;
    typeTransaction?: boolean | Prisma.Bien$typeTransactionArgs<ExtArgs>;
    statutBien?: boolean | Prisma.Bien$statutBienArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    equipements?: boolean | Prisma.Bien$equipementsArgs<ExtArgs>;
    meubles?: boolean | Prisma.Bien$meublesArgs<ExtArgs>;
    etablissements?: boolean | Prisma.Bien$etablissementsArgs<ExtArgs>;
    bails?: boolean | Prisma.Bien$bailsArgs<ExtArgs>;
    _count?: boolean | Prisma.BienCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bien"]>;
export type BienSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    description?: boolean;
    typeLogementId?: boolean;
    typeTransactionId?: boolean;
    statutBienId?: boolean;
    proprietaireId?: boolean;
    pays?: boolean;
    region?: boolean;
    ville?: boolean;
    quartier?: boolean;
    adresse?: boolean;
    pointRepere?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    surface?: boolean;
    surfaceParcelle?: boolean;
    nbChambres?: boolean;
    nbSdb?: boolean;
    nbSalons?: boolean;
    nbCuisines?: boolean;
    etage?: boolean;
    nbEtages?: boolean;
    nbAppartements?: boolean;
    nbPieces?: boolean;
    nbWc?: boolean;
    typeTerrain?: boolean;
    cloture?: boolean;
    typeBureau?: boolean;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: boolean;
    frequencePaiement?: boolean;
    chargesIncluses?: boolean;
    caution?: boolean;
    disponibleLe?: boolean;
    photos?: boolean;
    actif?: boolean;
    statutAnnonce?: boolean;
    noteAdmin?: boolean;
    hasPendingRevision?: boolean;
    pendingRevision?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    typeLogement?: boolean | Prisma.Bien$typeLogementArgs<ExtArgs>;
    typeTransaction?: boolean | Prisma.Bien$typeTransactionArgs<ExtArgs>;
    statutBien?: boolean | Prisma.Bien$statutBienArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bien"]>;
export type BienSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    description?: boolean;
    typeLogementId?: boolean;
    typeTransactionId?: boolean;
    statutBienId?: boolean;
    proprietaireId?: boolean;
    pays?: boolean;
    region?: boolean;
    ville?: boolean;
    quartier?: boolean;
    adresse?: boolean;
    pointRepere?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    surface?: boolean;
    surfaceParcelle?: boolean;
    nbChambres?: boolean;
    nbSdb?: boolean;
    nbSalons?: boolean;
    nbCuisines?: boolean;
    etage?: boolean;
    nbEtages?: boolean;
    nbAppartements?: boolean;
    nbPieces?: boolean;
    nbWc?: boolean;
    typeTerrain?: boolean;
    cloture?: boolean;
    typeBureau?: boolean;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: boolean;
    frequencePaiement?: boolean;
    chargesIncluses?: boolean;
    caution?: boolean;
    disponibleLe?: boolean;
    photos?: boolean;
    actif?: boolean;
    statutAnnonce?: boolean;
    noteAdmin?: boolean;
    hasPendingRevision?: boolean;
    pendingRevision?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    typeLogement?: boolean | Prisma.Bien$typeLogementArgs<ExtArgs>;
    typeTransaction?: boolean | Prisma.Bien$typeTransactionArgs<ExtArgs>;
    statutBien?: boolean | Prisma.Bien$statutBienArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bien"]>;
export type BienSelectScalar = {
    id?: boolean;
    titre?: boolean;
    description?: boolean;
    typeLogementId?: boolean;
    typeTransactionId?: boolean;
    statutBienId?: boolean;
    proprietaireId?: boolean;
    pays?: boolean;
    region?: boolean;
    ville?: boolean;
    quartier?: boolean;
    adresse?: boolean;
    pointRepere?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    surface?: boolean;
    surfaceParcelle?: boolean;
    nbChambres?: boolean;
    nbSdb?: boolean;
    nbSalons?: boolean;
    nbCuisines?: boolean;
    etage?: boolean;
    nbEtages?: boolean;
    nbAppartements?: boolean;
    nbPieces?: boolean;
    nbWc?: boolean;
    typeTerrain?: boolean;
    cloture?: boolean;
    typeBureau?: boolean;
    rideauMetallique?: boolean;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: boolean;
    frequencePaiement?: boolean;
    chargesIncluses?: boolean;
    caution?: boolean;
    disponibleLe?: boolean;
    photos?: boolean;
    actif?: boolean;
    statutAnnonce?: boolean;
    noteAdmin?: boolean;
    hasPendingRevision?: boolean;
    pendingRevision?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BienOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titre" | "description" | "typeLogementId" | "typeTransactionId" | "statutBienId" | "proprietaireId" | "pays" | "region" | "ville" | "quartier" | "adresse" | "pointRepere" | "latitude" | "longitude" | "surface" | "surfaceParcelle" | "nbChambres" | "nbSdb" | "nbSalons" | "nbCuisines" | "etage" | "nbEtages" | "nbAppartements" | "nbPieces" | "nbWc" | "typeTerrain" | "cloture" | "typeBureau" | "rideauMetallique" | "meuble" | "fumeurs" | "animaux" | "parking" | "ascenseur" | "prix" | "frequencePaiement" | "chargesIncluses" | "caution" | "disponibleLe" | "photos" | "actif" | "statutAnnonce" | "noteAdmin" | "hasPendingRevision" | "pendingRevision" | "createdAt" | "updatedAt", ExtArgs["result"]["bien"]>;
export type BienInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeLogement?: boolean | Prisma.Bien$typeLogementArgs<ExtArgs>;
    typeTransaction?: boolean | Prisma.Bien$typeTransactionArgs<ExtArgs>;
    statutBien?: boolean | Prisma.Bien$statutBienArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    equipements?: boolean | Prisma.Bien$equipementsArgs<ExtArgs>;
    meubles?: boolean | Prisma.Bien$meublesArgs<ExtArgs>;
    etablissements?: boolean | Prisma.Bien$etablissementsArgs<ExtArgs>;
    bails?: boolean | Prisma.Bien$bailsArgs<ExtArgs>;
    _count?: boolean | Prisma.BienCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BienIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeLogement?: boolean | Prisma.Bien$typeLogementArgs<ExtArgs>;
    typeTransaction?: boolean | Prisma.Bien$typeTransactionArgs<ExtArgs>;
    statutBien?: boolean | Prisma.Bien$statutBienArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type BienIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeLogement?: boolean | Prisma.Bien$typeLogementArgs<ExtArgs>;
    typeTransaction?: boolean | Prisma.Bien$typeTransactionArgs<ExtArgs>;
    statutBien?: boolean | Prisma.Bien$statutBienArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $BienPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bien";
    objects: {
        typeLogement: Prisma.$TypeLogementPayload<ExtArgs> | null;
        typeTransaction: Prisma.$TypeTransactionPayload<ExtArgs> | null;
        statutBien: Prisma.$StatutBienPayload<ExtArgs> | null;
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
        equipements: Prisma.$BienEquipementPayload<ExtArgs>[];
        meubles: Prisma.$BienMeublePayload<ExtArgs>[];
        etablissements: Prisma.$EtablissementPayload<ExtArgs>[];
        bails: Prisma.$BailLocationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        titre: string | null;
        description: string | null;
        typeLogementId: string | null;
        typeTransactionId: string | null;
        statutBienId: string | null;
        proprietaireId: string;
        pays: string | null;
        region: string | null;
        ville: string | null;
        quartier: string | null;
        adresse: string | null;
        pointRepere: string | null;
        latitude: number | null;
        longitude: number | null;
        surface: number | null;
        surfaceParcelle: number | null;
        nbChambres: number | null;
        nbSdb: number | null;
        nbSalons: number | null;
        nbCuisines: number | null;
        etage: number | null;
        nbEtages: number | null;
        nbAppartements: number | null;
        nbPieces: number | null;
        nbWc: number | null;
        typeTerrain: string | null;
        cloture: boolean;
        typeBureau: string | null;
        rideauMetallique: boolean;
        meuble: boolean;
        fumeurs: boolean;
        animaux: boolean;
        parking: boolean;
        ascenseur: boolean;
        prix: number | null;
        frequencePaiement: string | null;
        chargesIncluses: boolean;
        caution: number | null;
        disponibleLe: Date | null;
        photos: string[];
        actif: boolean;
        statutAnnonce: $Enums.StatutAnnonce;
        noteAdmin: string | null;
        hasPendingRevision: boolean;
        pendingRevision: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["bien"]>;
    composites: {};
};
export type BienGetPayload<S extends boolean | null | undefined | BienDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BienPayload, S>;
export type BienCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BienCountAggregateInputType | true;
};
export interface BienDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bien'];
        meta: {
            name: 'Bien';
        };
    };
    /**
     * Find zero or one Bien that matches the filter.
     * @param {BienFindUniqueArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BienFindUniqueArgs>(args: Prisma.SelectSubset<T, BienFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Bien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BienFindUniqueOrThrowArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BienFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BienFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienFindFirstArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BienFindFirstArgs>(args?: Prisma.SelectSubset<T, BienFindFirstArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienFindFirstOrThrowArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BienFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BienFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Biens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Biens
     * const biens = await prisma.bien.findMany()
     *
     * // Get first 10 Biens
     * const biens = await prisma.bien.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bienWithIdOnly = await prisma.bien.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BienFindManyArgs>(args?: Prisma.SelectSubset<T, BienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Bien.
     * @param {BienCreateArgs} args - Arguments to create a Bien.
     * @example
     * // Create one Bien
     * const Bien = await prisma.bien.create({
     *   data: {
     *     // ... data to create a Bien
     *   }
     * })
     *
     */
    create<T extends BienCreateArgs>(args: Prisma.SelectSubset<T, BienCreateArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Biens.
     * @param {BienCreateManyArgs} args - Arguments to create many Biens.
     * @example
     * // Create many Biens
     * const bien = await prisma.bien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BienCreateManyArgs>(args?: Prisma.SelectSubset<T, BienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Biens and returns the data saved in the database.
     * @param {BienCreateManyAndReturnArgs} args - Arguments to create many Biens.
     * @example
     * // Create many Biens
     * const bien = await prisma.bien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Biens and only return the `id`
     * const bienWithIdOnly = await prisma.bien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BienCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Bien.
     * @param {BienDeleteArgs} args - Arguments to delete one Bien.
     * @example
     * // Delete one Bien
     * const Bien = await prisma.bien.delete({
     *   where: {
     *     // ... filter to delete one Bien
     *   }
     * })
     *
     */
    delete<T extends BienDeleteArgs>(args: Prisma.SelectSubset<T, BienDeleteArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Bien.
     * @param {BienUpdateArgs} args - Arguments to update one Bien.
     * @example
     * // Update one Bien
     * const bien = await prisma.bien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BienUpdateArgs>(args: Prisma.SelectSubset<T, BienUpdateArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Biens.
     * @param {BienDeleteManyArgs} args - Arguments to filter Biens to delete.
     * @example
     * // Delete a few Biens
     * const { count } = await prisma.bien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BienDeleteManyArgs>(args?: Prisma.SelectSubset<T, BienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Biens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Biens
     * const bien = await prisma.bien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BienUpdateManyArgs>(args: Prisma.SelectSubset<T, BienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Biens and returns the data updated in the database.
     * @param {BienUpdateManyAndReturnArgs} args - Arguments to update many Biens.
     * @example
     * // Update many Biens
     * const bien = await prisma.bien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Biens and only return the `id`
     * const bienWithIdOnly = await prisma.bien.updateManyAndReturn({
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
    updateManyAndReturn<T extends BienUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Bien.
     * @param {BienUpsertArgs} args - Arguments to update or create a Bien.
     * @example
     * // Update or create a Bien
     * const bien = await prisma.bien.upsert({
     *   create: {
     *     // ... data to create a Bien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bien we want to update
     *   }
     * })
     */
    upsert<T extends BienUpsertArgs>(args: Prisma.SelectSubset<T, BienUpsertArgs<ExtArgs>>): Prisma.Prisma__BienClient<runtime.Types.Result.GetResult<Prisma.$BienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Biens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienCountArgs} args - Arguments to filter Biens to count.
     * @example
     * // Count the number of Biens
     * const count = await prisma.bien.count({
     *   where: {
     *     // ... the filter for the Biens we want to count
     *   }
     * })
    **/
    count<T extends BienCountArgs>(args?: Prisma.Subset<T, BienCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BienCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Bien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BienAggregateArgs>(args: Prisma.Subset<T, BienAggregateArgs>): Prisma.PrismaPromise<GetBienAggregateType<T>>;
    /**
     * Group by Bien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BienGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BienGroupByArgs['orderBy'];
    } : {
        orderBy?: BienGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Bien model
     */
    readonly fields: BienFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Bien.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BienClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    typeLogement<T extends Prisma.Bien$typeLogementArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$typeLogementArgs<ExtArgs>>): Prisma.Prisma__TypeLogementClient<runtime.Types.Result.GetResult<Prisma.$TypeLogementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    typeTransaction<T extends Prisma.Bien$typeTransactionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$typeTransactionArgs<ExtArgs>>): Prisma.Prisma__TypeTransactionClient<runtime.Types.Result.GetResult<Prisma.$TypeTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    statutBien<T extends Prisma.Bien$statutBienArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$statutBienArgs<ExtArgs>>): Prisma.Prisma__StatutBienClient<runtime.Types.Result.GetResult<Prisma.$StatutBienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    proprietaire<T extends Prisma.ProprietaireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProprietaireDefaultArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    equipements<T extends Prisma.Bien$equipementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$equipementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienEquipementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    meubles<T extends Prisma.Bien$meublesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$meublesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienMeublePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    etablissements<T extends Prisma.Bien$etablissementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$etablissementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bails<T extends Prisma.Bien$bailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$bailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BailLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Bien model
 */
export interface BienFieldRefs {
    readonly id: Prisma.FieldRef<"Bien", 'String'>;
    readonly titre: Prisma.FieldRef<"Bien", 'String'>;
    readonly description: Prisma.FieldRef<"Bien", 'String'>;
    readonly typeLogementId: Prisma.FieldRef<"Bien", 'String'>;
    readonly typeTransactionId: Prisma.FieldRef<"Bien", 'String'>;
    readonly statutBienId: Prisma.FieldRef<"Bien", 'String'>;
    readonly proprietaireId: Prisma.FieldRef<"Bien", 'String'>;
    readonly pays: Prisma.FieldRef<"Bien", 'String'>;
    readonly region: Prisma.FieldRef<"Bien", 'String'>;
    readonly ville: Prisma.FieldRef<"Bien", 'String'>;
    readonly quartier: Prisma.FieldRef<"Bien", 'String'>;
    readonly adresse: Prisma.FieldRef<"Bien", 'String'>;
    readonly pointRepere: Prisma.FieldRef<"Bien", 'String'>;
    readonly latitude: Prisma.FieldRef<"Bien", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Bien", 'Float'>;
    readonly surface: Prisma.FieldRef<"Bien", 'Float'>;
    readonly surfaceParcelle: Prisma.FieldRef<"Bien", 'Float'>;
    readonly nbChambres: Prisma.FieldRef<"Bien", 'Int'>;
    readonly nbSdb: Prisma.FieldRef<"Bien", 'Int'>;
    readonly nbSalons: Prisma.FieldRef<"Bien", 'Int'>;
    readonly nbCuisines: Prisma.FieldRef<"Bien", 'Int'>;
    readonly etage: Prisma.FieldRef<"Bien", 'Int'>;
    readonly nbEtages: Prisma.FieldRef<"Bien", 'Int'>;
    readonly nbAppartements: Prisma.FieldRef<"Bien", 'Int'>;
    readonly nbPieces: Prisma.FieldRef<"Bien", 'Int'>;
    readonly nbWc: Prisma.FieldRef<"Bien", 'Int'>;
    readonly typeTerrain: Prisma.FieldRef<"Bien", 'String'>;
    readonly cloture: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly typeBureau: Prisma.FieldRef<"Bien", 'String'>;
    readonly rideauMetallique: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly meuble: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly fumeurs: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly animaux: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly parking: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly ascenseur: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly prix: Prisma.FieldRef<"Bien", 'Float'>;
    readonly frequencePaiement: Prisma.FieldRef<"Bien", 'String'>;
    readonly chargesIncluses: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly caution: Prisma.FieldRef<"Bien", 'Float'>;
    readonly disponibleLe: Prisma.FieldRef<"Bien", 'DateTime'>;
    readonly photos: Prisma.FieldRef<"Bien", 'String[]'>;
    readonly actif: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly statutAnnonce: Prisma.FieldRef<"Bien", 'StatutAnnonce'>;
    readonly noteAdmin: Prisma.FieldRef<"Bien", 'String'>;
    readonly hasPendingRevision: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly pendingRevision: Prisma.FieldRef<"Bien", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Bien", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Bien", 'DateTime'>;
}
/**
 * Bien findUnique
 */
export type BienFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bien to fetch.
     */
    where: Prisma.BienWhereUniqueInput;
};
/**
 * Bien findUniqueOrThrow
 */
export type BienFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bien to fetch.
     */
    where: Prisma.BienWhereUniqueInput;
};
/**
 * Bien findFirst
 */
export type BienFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bien to fetch.
     */
    where?: Prisma.BienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Biens to fetch.
     */
    orderBy?: Prisma.BienOrderByWithRelationInput | Prisma.BienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Biens.
     */
    cursor?: Prisma.BienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Biens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Biens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Biens.
     */
    distinct?: Prisma.BienScalarFieldEnum | Prisma.BienScalarFieldEnum[];
};
/**
 * Bien findFirstOrThrow
 */
export type BienFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bien to fetch.
     */
    where?: Prisma.BienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Biens to fetch.
     */
    orderBy?: Prisma.BienOrderByWithRelationInput | Prisma.BienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Biens.
     */
    cursor?: Prisma.BienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Biens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Biens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Biens.
     */
    distinct?: Prisma.BienScalarFieldEnum | Prisma.BienScalarFieldEnum[];
};
/**
 * Bien findMany
 */
export type BienFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Biens to fetch.
     */
    where?: Prisma.BienWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Biens to fetch.
     */
    orderBy?: Prisma.BienOrderByWithRelationInput | Prisma.BienOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Biens.
     */
    cursor?: Prisma.BienWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Biens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Biens.
     */
    skip?: number;
    distinct?: Prisma.BienScalarFieldEnum | Prisma.BienScalarFieldEnum[];
};
/**
 * Bien create
 */
export type BienCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Bien.
     */
    data: Prisma.XOR<Prisma.BienCreateInput, Prisma.BienUncheckedCreateInput>;
};
/**
 * Bien createMany
 */
export type BienCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Biens.
     */
    data: Prisma.BienCreateManyInput | Prisma.BienCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Bien createManyAndReturn
 */
export type BienCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bien
     */
    select?: Prisma.BienSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bien
     */
    omit?: Prisma.BienOmit<ExtArgs> | null;
    /**
     * The data used to create many Biens.
     */
    data: Prisma.BienCreateManyInput | Prisma.BienCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Bien update
 */
export type BienUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Bien.
     */
    data: Prisma.XOR<Prisma.BienUpdateInput, Prisma.BienUncheckedUpdateInput>;
    /**
     * Choose, which Bien to update.
     */
    where: Prisma.BienWhereUniqueInput;
};
/**
 * Bien updateMany
 */
export type BienUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Biens.
     */
    data: Prisma.XOR<Prisma.BienUpdateManyMutationInput, Prisma.BienUncheckedUpdateManyInput>;
    /**
     * Filter which Biens to update
     */
    where?: Prisma.BienWhereInput;
    /**
     * Limit how many Biens to update.
     */
    limit?: number;
};
/**
 * Bien updateManyAndReturn
 */
export type BienUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bien
     */
    select?: Prisma.BienSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bien
     */
    omit?: Prisma.BienOmit<ExtArgs> | null;
    /**
     * The data used to update Biens.
     */
    data: Prisma.XOR<Prisma.BienUpdateManyMutationInput, Prisma.BienUncheckedUpdateManyInput>;
    /**
     * Filter which Biens to update
     */
    where?: Prisma.BienWhereInput;
    /**
     * Limit how many Biens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Bien upsert
 */
export type BienUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Bien to update in case it exists.
     */
    where: Prisma.BienWhereUniqueInput;
    /**
     * In case the Bien found by the `where` argument doesn't exist, create a new Bien with this data.
     */
    create: Prisma.XOR<Prisma.BienCreateInput, Prisma.BienUncheckedCreateInput>;
    /**
     * In case the Bien was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BienUpdateInput, Prisma.BienUncheckedUpdateInput>;
};
/**
 * Bien delete
 */
export type BienDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Bien to delete.
     */
    where: Prisma.BienWhereUniqueInput;
};
/**
 * Bien deleteMany
 */
export type BienDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Biens to delete
     */
    where?: Prisma.BienWhereInput;
    /**
     * Limit how many Biens to delete.
     */
    limit?: number;
};
/**
 * Bien.typeLogement
 */
export type Bien$typeLogementArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeLogement
     */
    select?: Prisma.TypeLogementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeLogement
     */
    omit?: Prisma.TypeLogementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeLogementInclude<ExtArgs> | null;
    where?: Prisma.TypeLogementWhereInput;
};
/**
 * Bien.typeTransaction
 */
export type Bien$typeTransactionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeTransaction
     */
    select?: Prisma.TypeTransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeTransaction
     */
    omit?: Prisma.TypeTransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeTransactionInclude<ExtArgs> | null;
    where?: Prisma.TypeTransactionWhereInput;
};
/**
 * Bien.statutBien
 */
export type Bien$statutBienArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutBien
     */
    select?: Prisma.StatutBienSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatutBien
     */
    omit?: Prisma.StatutBienOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StatutBienInclude<ExtArgs> | null;
    where?: Prisma.StatutBienWhereInput;
};
/**
 * Bien.equipements
 */
export type Bien$equipementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienEquipement
     */
    select?: Prisma.BienEquipementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienEquipement
     */
    omit?: Prisma.BienEquipementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienEquipementInclude<ExtArgs> | null;
    where?: Prisma.BienEquipementWhereInput;
    orderBy?: Prisma.BienEquipementOrderByWithRelationInput | Prisma.BienEquipementOrderByWithRelationInput[];
    cursor?: Prisma.BienEquipementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BienEquipementScalarFieldEnum | Prisma.BienEquipementScalarFieldEnum[];
};
/**
 * Bien.meubles
 */
export type Bien$meublesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienMeuble
     */
    select?: Prisma.BienMeubleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BienMeuble
     */
    omit?: Prisma.BienMeubleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BienMeubleInclude<ExtArgs> | null;
    where?: Prisma.BienMeubleWhereInput;
    orderBy?: Prisma.BienMeubleOrderByWithRelationInput | Prisma.BienMeubleOrderByWithRelationInput[];
    cursor?: Prisma.BienMeubleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BienMeubleScalarFieldEnum | Prisma.BienMeubleScalarFieldEnum[];
};
/**
 * Bien.etablissements
 */
export type Bien$etablissementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: Prisma.EtablissementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: Prisma.EtablissementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementInclude<ExtArgs> | null;
    where?: Prisma.EtablissementWhereInput;
    orderBy?: Prisma.EtablissementOrderByWithRelationInput | Prisma.EtablissementOrderByWithRelationInput[];
    cursor?: Prisma.EtablissementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EtablissementScalarFieldEnum | Prisma.EtablissementScalarFieldEnum[];
};
/**
 * Bien.bails
 */
export type Bien$bailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Bien without action
 */
export type BienDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Bien.d.ts.map