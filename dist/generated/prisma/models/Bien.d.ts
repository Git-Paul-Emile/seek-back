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
    prix: runtime.Decimal | null;
    surface: number | null;
    surfaceHabitable: number | null;
    surfaceTerrain: number | null;
    nbPieces: number | null;
    chambres: number | null;
    sallesDeBain: number | null;
    etage: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type BienSumAggregateOutputType = {
    prix: runtime.Decimal | null;
    surface: number | null;
    surfaceHabitable: number | null;
    surfaceTerrain: number | null;
    nbPieces: number | null;
    chambres: number | null;
    sallesDeBain: number | null;
    etage: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type BienMinAggregateOutputType = {
    id: string | null;
    titre: string | null;
    type: $Enums.TypeBien | null;
    prix: runtime.Decimal | null;
    statut: $Enums.StatutBien | null;
    modeLocation: $Enums.ModeLocation | null;
    description: string | null;
    surface: number | null;
    surfaceHabitable: number | null;
    surfaceTerrain: number | null;
    nbPieces: number | null;
    chambres: number | null;
    sallesDeBain: number | null;
    etage: number | null;
    numeroPorte: string | null;
    adresse: string | null;
    quartier: string | null;
    villeId: string | null;
    disponibleALocation: boolean | null;
    dateDisponibilite: Date | null;
    latitude: number | null;
    longitude: number | null;
    imageCouverture: string | null;
    images: string | null;
    documents: string | null;
    urlVisiteVirtuelle: string | null;
    caracteristiques: string | null;
    dateCreation: Date | null;
    dateModification: Date | null;
    proprietaireId: string | null;
};
export type BienMaxAggregateOutputType = {
    id: string | null;
    titre: string | null;
    type: $Enums.TypeBien | null;
    prix: runtime.Decimal | null;
    statut: $Enums.StatutBien | null;
    modeLocation: $Enums.ModeLocation | null;
    description: string | null;
    surface: number | null;
    surfaceHabitable: number | null;
    surfaceTerrain: number | null;
    nbPieces: number | null;
    chambres: number | null;
    sallesDeBain: number | null;
    etage: number | null;
    numeroPorte: string | null;
    adresse: string | null;
    quartier: string | null;
    villeId: string | null;
    disponibleALocation: boolean | null;
    dateDisponibilite: Date | null;
    latitude: number | null;
    longitude: number | null;
    imageCouverture: string | null;
    images: string | null;
    documents: string | null;
    urlVisiteVirtuelle: string | null;
    caracteristiques: string | null;
    dateCreation: Date | null;
    dateModification: Date | null;
    proprietaireId: string | null;
};
export type BienCountAggregateOutputType = {
    id: number;
    titre: number;
    type: number;
    prix: number;
    statut: number;
    modeLocation: number;
    description: number;
    surface: number;
    surfaceHabitable: number;
    surfaceTerrain: number;
    nbPieces: number;
    chambres: number;
    sallesDeBain: number;
    etage: number;
    numeroPorte: number;
    adresse: number;
    quartier: number;
    villeId: number;
    disponibleALocation: number;
    dateDisponibilite: number;
    latitude: number;
    longitude: number;
    imageCouverture: number;
    images: number;
    documents: number;
    urlVisiteVirtuelle: number;
    caracteristiques: number;
    dateCreation: number;
    dateModification: number;
    proprietaireId: number;
    _all: number;
};
export type BienAvgAggregateInputType = {
    prix?: true;
    surface?: true;
    surfaceHabitable?: true;
    surfaceTerrain?: true;
    nbPieces?: true;
    chambres?: true;
    sallesDeBain?: true;
    etage?: true;
    latitude?: true;
    longitude?: true;
};
export type BienSumAggregateInputType = {
    prix?: true;
    surface?: true;
    surfaceHabitable?: true;
    surfaceTerrain?: true;
    nbPieces?: true;
    chambres?: true;
    sallesDeBain?: true;
    etage?: true;
    latitude?: true;
    longitude?: true;
};
export type BienMinAggregateInputType = {
    id?: true;
    titre?: true;
    type?: true;
    prix?: true;
    statut?: true;
    modeLocation?: true;
    description?: true;
    surface?: true;
    surfaceHabitable?: true;
    surfaceTerrain?: true;
    nbPieces?: true;
    chambres?: true;
    sallesDeBain?: true;
    etage?: true;
    numeroPorte?: true;
    adresse?: true;
    quartier?: true;
    villeId?: true;
    disponibleALocation?: true;
    dateDisponibilite?: true;
    latitude?: true;
    longitude?: true;
    imageCouverture?: true;
    images?: true;
    documents?: true;
    urlVisiteVirtuelle?: true;
    caracteristiques?: true;
    dateCreation?: true;
    dateModification?: true;
    proprietaireId?: true;
};
export type BienMaxAggregateInputType = {
    id?: true;
    titre?: true;
    type?: true;
    prix?: true;
    statut?: true;
    modeLocation?: true;
    description?: true;
    surface?: true;
    surfaceHabitable?: true;
    surfaceTerrain?: true;
    nbPieces?: true;
    chambres?: true;
    sallesDeBain?: true;
    etage?: true;
    numeroPorte?: true;
    adresse?: true;
    quartier?: true;
    villeId?: true;
    disponibleALocation?: true;
    dateDisponibilite?: true;
    latitude?: true;
    longitude?: true;
    imageCouverture?: true;
    images?: true;
    documents?: true;
    urlVisiteVirtuelle?: true;
    caracteristiques?: true;
    dateCreation?: true;
    dateModification?: true;
    proprietaireId?: true;
};
export type BienCountAggregateInputType = {
    id?: true;
    titre?: true;
    type?: true;
    prix?: true;
    statut?: true;
    modeLocation?: true;
    description?: true;
    surface?: true;
    surfaceHabitable?: true;
    surfaceTerrain?: true;
    nbPieces?: true;
    chambres?: true;
    sallesDeBain?: true;
    etage?: true;
    numeroPorte?: true;
    adresse?: true;
    quartier?: true;
    villeId?: true;
    disponibleALocation?: true;
    dateDisponibilite?: true;
    latitude?: true;
    longitude?: true;
    imageCouverture?: true;
    images?: true;
    documents?: true;
    urlVisiteVirtuelle?: true;
    caracteristiques?: true;
    dateCreation?: true;
    dateModification?: true;
    proprietaireId?: true;
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
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal;
    statut: $Enums.StatutBien;
    modeLocation: $Enums.ModeLocation | null;
    description: string | null;
    surface: number | null;
    surfaceHabitable: number | null;
    surfaceTerrain: number | null;
    nbPieces: number | null;
    chambres: number | null;
    sallesDeBain: number | null;
    etage: number | null;
    numeroPorte: string | null;
    adresse: string;
    quartier: string | null;
    villeId: string | null;
    disponibleALocation: boolean;
    dateDisponibilite: Date | null;
    latitude: number | null;
    longitude: number | null;
    imageCouverture: string | null;
    images: string | null;
    documents: string | null;
    urlVisiteVirtuelle: string | null;
    caracteristiques: string | null;
    dateCreation: Date;
    dateModification: Date;
    proprietaireId: string;
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
    titre?: Prisma.StringFilter<"Bien"> | string;
    type?: Prisma.EnumTypeBienFilter<"Bien"> | $Enums.TypeBien;
    prix?: Prisma.DecimalFilter<"Bien"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFilter<"Bien"> | $Enums.StatutBien;
    modeLocation?: Prisma.EnumModeLocationNullableFilter<"Bien"> | $Enums.ModeLocation | null;
    description?: Prisma.StringNullableFilter<"Bien"> | string | null;
    surface?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceHabitable?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceTerrain?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableFilter<"Bien"> | number | null;
    chambres?: Prisma.IntNullableFilter<"Bien"> | number | null;
    sallesDeBain?: Prisma.IntNullableFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableFilter<"Bien"> | number | null;
    numeroPorte?: Prisma.StringNullableFilter<"Bien"> | string | null;
    adresse?: Prisma.StringFilter<"Bien"> | string;
    quartier?: Prisma.StringNullableFilter<"Bien"> | string | null;
    villeId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    disponibleALocation?: Prisma.BoolFilter<"Bien"> | boolean;
    dateDisponibilite?: Prisma.DateTimeNullableFilter<"Bien"> | Date | string | null;
    latitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    imageCouverture?: Prisma.StringNullableFilter<"Bien"> | string | null;
    images?: Prisma.StringNullableFilter<"Bien"> | string | null;
    documents?: Prisma.StringNullableFilter<"Bien"> | string | null;
    urlVisiteVirtuelle?: Prisma.StringNullableFilter<"Bien"> | string | null;
    caracteristiques?: Prisma.StringNullableFilter<"Bien"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    proprietaireId?: Prisma.StringFilter<"Bien"> | string;
    ville?: Prisma.XOR<Prisma.VilleNullableScalarRelationFilter, Prisma.VilleWhereInput> | null;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    etablissements?: Prisma.EtablissementProcheListRelationFilter;
    bienImages?: Prisma.BienImageListRelationFilter;
};
export type BienOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    modeLocation?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    surface?: Prisma.SortOrderInput | Prisma.SortOrder;
    surfaceHabitable?: Prisma.SortOrderInput | Prisma.SortOrder;
    surfaceTerrain?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbPieces?: Prisma.SortOrderInput | Prisma.SortOrder;
    chambres?: Prisma.SortOrderInput | Prisma.SortOrder;
    sallesDeBain?: Prisma.SortOrderInput | Prisma.SortOrder;
    etage?: Prisma.SortOrderInput | Prisma.SortOrder;
    numeroPorte?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    quartier?: Prisma.SortOrderInput | Prisma.SortOrder;
    villeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disponibleALocation?: Prisma.SortOrder;
    dateDisponibilite?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageCouverture?: Prisma.SortOrderInput | Prisma.SortOrder;
    images?: Prisma.SortOrderInput | Prisma.SortOrder;
    documents?: Prisma.SortOrderInput | Prisma.SortOrder;
    urlVisiteVirtuelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    caracteristiques?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
    ville?: Prisma.VilleOrderByWithRelationInput;
    proprietaire?: Prisma.ProprietaireOrderByWithRelationInput;
    etablissements?: Prisma.EtablissementProcheOrderByRelationAggregateInput;
    bienImages?: Prisma.BienImageOrderByRelationAggregateInput;
};
export type BienWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BienWhereInput | Prisma.BienWhereInput[];
    OR?: Prisma.BienWhereInput[];
    NOT?: Prisma.BienWhereInput | Prisma.BienWhereInput[];
    titre?: Prisma.StringFilter<"Bien"> | string;
    type?: Prisma.EnumTypeBienFilter<"Bien"> | $Enums.TypeBien;
    prix?: Prisma.DecimalFilter<"Bien"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFilter<"Bien"> | $Enums.StatutBien;
    modeLocation?: Prisma.EnumModeLocationNullableFilter<"Bien"> | $Enums.ModeLocation | null;
    description?: Prisma.StringNullableFilter<"Bien"> | string | null;
    surface?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceHabitable?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceTerrain?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableFilter<"Bien"> | number | null;
    chambres?: Prisma.IntNullableFilter<"Bien"> | number | null;
    sallesDeBain?: Prisma.IntNullableFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableFilter<"Bien"> | number | null;
    numeroPorte?: Prisma.StringNullableFilter<"Bien"> | string | null;
    adresse?: Prisma.StringFilter<"Bien"> | string;
    quartier?: Prisma.StringNullableFilter<"Bien"> | string | null;
    villeId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    disponibleALocation?: Prisma.BoolFilter<"Bien"> | boolean;
    dateDisponibilite?: Prisma.DateTimeNullableFilter<"Bien"> | Date | string | null;
    latitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    imageCouverture?: Prisma.StringNullableFilter<"Bien"> | string | null;
    images?: Prisma.StringNullableFilter<"Bien"> | string | null;
    documents?: Prisma.StringNullableFilter<"Bien"> | string | null;
    urlVisiteVirtuelle?: Prisma.StringNullableFilter<"Bien"> | string | null;
    caracteristiques?: Prisma.StringNullableFilter<"Bien"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    proprietaireId?: Prisma.StringFilter<"Bien"> | string;
    ville?: Prisma.XOR<Prisma.VilleNullableScalarRelationFilter, Prisma.VilleWhereInput> | null;
    proprietaire?: Prisma.XOR<Prisma.ProprietaireScalarRelationFilter, Prisma.ProprietaireWhereInput>;
    etablissements?: Prisma.EtablissementProcheListRelationFilter;
    bienImages?: Prisma.BienImageListRelationFilter;
}, "id">;
export type BienOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    modeLocation?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    surface?: Prisma.SortOrderInput | Prisma.SortOrder;
    surfaceHabitable?: Prisma.SortOrderInput | Prisma.SortOrder;
    surfaceTerrain?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbPieces?: Prisma.SortOrderInput | Prisma.SortOrder;
    chambres?: Prisma.SortOrderInput | Prisma.SortOrder;
    sallesDeBain?: Prisma.SortOrderInput | Prisma.SortOrder;
    etage?: Prisma.SortOrderInput | Prisma.SortOrder;
    numeroPorte?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    quartier?: Prisma.SortOrderInput | Prisma.SortOrder;
    villeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disponibleALocation?: Prisma.SortOrder;
    dateDisponibilite?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageCouverture?: Prisma.SortOrderInput | Prisma.SortOrder;
    images?: Prisma.SortOrderInput | Prisma.SortOrder;
    documents?: Prisma.SortOrderInput | Prisma.SortOrder;
    urlVisiteVirtuelle?: Prisma.SortOrderInput | Prisma.SortOrder;
    caracteristiques?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
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
    titre?: Prisma.StringWithAggregatesFilter<"Bien"> | string;
    type?: Prisma.EnumTypeBienWithAggregatesFilter<"Bien"> | $Enums.TypeBien;
    prix?: Prisma.DecimalWithAggregatesFilter<"Bien"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienWithAggregatesFilter<"Bien"> | $Enums.StatutBien;
    modeLocation?: Prisma.EnumModeLocationNullableWithAggregatesFilter<"Bien"> | $Enums.ModeLocation | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    surface?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    surfaceHabitable?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    surfaceTerrain?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    chambres?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    sallesDeBain?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableWithAggregatesFilter<"Bien"> | number | null;
    numeroPorte?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    adresse?: Prisma.StringWithAggregatesFilter<"Bien"> | string;
    quartier?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    villeId?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    disponibleALocation?: Prisma.BoolWithAggregatesFilter<"Bien"> | boolean;
    dateDisponibilite?: Prisma.DateTimeNullableWithAggregatesFilter<"Bien"> | Date | string | null;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"Bien"> | number | null;
    imageCouverture?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    images?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    documents?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    urlVisiteVirtuelle?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    caracteristiques?: Prisma.StringNullableWithAggregatesFilter<"Bien"> | string | null;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"Bien"> | Date | string;
    dateModification?: Prisma.DateTimeWithAggregatesFilter<"Bien"> | Date | string;
    proprietaireId?: Prisma.StringWithAggregatesFilter<"Bien"> | string;
};
export type BienCreateInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    ville?: Prisma.VilleCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    etablissements?: Prisma.EtablissementProcheCreateNestedManyWithoutBienInput;
    bienImages?: Prisma.BienImageCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    villeId?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    proprietaireId: string;
    etablissements?: Prisma.EtablissementProcheUncheckedCreateNestedManyWithoutBienInput;
    bienImages?: Prisma.BienImageUncheckedCreateNestedManyWithoutBienInput;
};
export type BienUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ville?: Prisma.VilleUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    etablissements?: Prisma.EtablissementProcheUpdateManyWithoutBienNestedInput;
    bienImages?: Prisma.BienImageUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    villeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    etablissements?: Prisma.EtablissementProcheUncheckedUpdateManyWithoutBienNestedInput;
    bienImages?: Prisma.BienImageUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateManyInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    villeId?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    proprietaireId: string;
};
export type BienUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    villeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BienListRelationFilter = {
    every?: Prisma.BienWhereInput;
    some?: Prisma.BienWhereInput;
    none?: Prisma.BienWhereInput;
};
export type BienOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BienScalarRelationFilter = {
    is?: Prisma.BienWhereInput;
    isNot?: Prisma.BienWhereInput;
};
export type BienCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    modeLocation?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceHabitable?: Prisma.SortOrder;
    surfaceTerrain?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    chambres?: Prisma.SortOrder;
    sallesDeBain?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    numeroPorte?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    villeId?: Prisma.SortOrder;
    disponibleALocation?: Prisma.SortOrder;
    dateDisponibilite?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    imageCouverture?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    documents?: Prisma.SortOrder;
    urlVisiteVirtuelle?: Prisma.SortOrder;
    caracteristiques?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
};
export type BienAvgOrderByAggregateInput = {
    prix?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceHabitable?: Prisma.SortOrder;
    surfaceTerrain?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    chambres?: Prisma.SortOrder;
    sallesDeBain?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type BienMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    modeLocation?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceHabitable?: Prisma.SortOrder;
    surfaceTerrain?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    chambres?: Prisma.SortOrder;
    sallesDeBain?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    numeroPorte?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    villeId?: Prisma.SortOrder;
    disponibleALocation?: Prisma.SortOrder;
    dateDisponibilite?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    imageCouverture?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    documents?: Prisma.SortOrder;
    urlVisiteVirtuelle?: Prisma.SortOrder;
    caracteristiques?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
};
export type BienMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    modeLocation?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceHabitable?: Prisma.SortOrder;
    surfaceTerrain?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    chambres?: Prisma.SortOrder;
    sallesDeBain?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    numeroPorte?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    quartier?: Prisma.SortOrder;
    villeId?: Prisma.SortOrder;
    disponibleALocation?: Prisma.SortOrder;
    dateDisponibilite?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    imageCouverture?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    documents?: Prisma.SortOrder;
    urlVisiteVirtuelle?: Prisma.SortOrder;
    caracteristiques?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    proprietaireId?: Prisma.SortOrder;
};
export type BienSumOrderByAggregateInput = {
    prix?: Prisma.SortOrder;
    surface?: Prisma.SortOrder;
    surfaceHabitable?: Prisma.SortOrder;
    surfaceTerrain?: Prisma.SortOrder;
    nbPieces?: Prisma.SortOrder;
    chambres?: Prisma.SortOrder;
    sallesDeBain?: Prisma.SortOrder;
    etage?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
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
export type BienCreateNestedManyWithoutVilleInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutVilleInput, Prisma.BienUncheckedCreateWithoutVilleInput> | Prisma.BienCreateWithoutVilleInput[] | Prisma.BienUncheckedCreateWithoutVilleInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutVilleInput | Prisma.BienCreateOrConnectWithoutVilleInput[];
    createMany?: Prisma.BienCreateManyVilleInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUncheckedCreateNestedManyWithoutVilleInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutVilleInput, Prisma.BienUncheckedCreateWithoutVilleInput> | Prisma.BienCreateWithoutVilleInput[] | Prisma.BienUncheckedCreateWithoutVilleInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutVilleInput | Prisma.BienCreateOrConnectWithoutVilleInput[];
    createMany?: Prisma.BienCreateManyVilleInputEnvelope;
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
};
export type BienUpdateManyWithoutVilleNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutVilleInput, Prisma.BienUncheckedCreateWithoutVilleInput> | Prisma.BienCreateWithoutVilleInput[] | Prisma.BienUncheckedCreateWithoutVilleInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutVilleInput | Prisma.BienCreateOrConnectWithoutVilleInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutVilleInput | Prisma.BienUpsertWithWhereUniqueWithoutVilleInput[];
    createMany?: Prisma.BienCreateManyVilleInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutVilleInput | Prisma.BienUpdateWithWhereUniqueWithoutVilleInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutVilleInput | Prisma.BienUpdateManyWithWhereWithoutVilleInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienUncheckedUpdateManyWithoutVilleNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutVilleInput, Prisma.BienUncheckedCreateWithoutVilleInput> | Prisma.BienCreateWithoutVilleInput[] | Prisma.BienUncheckedCreateWithoutVilleInput[];
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutVilleInput | Prisma.BienCreateOrConnectWithoutVilleInput[];
    upsert?: Prisma.BienUpsertWithWhereUniqueWithoutVilleInput | Prisma.BienUpsertWithWhereUniqueWithoutVilleInput[];
    createMany?: Prisma.BienCreateManyVilleInputEnvelope;
    set?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    disconnect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    delete?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    connect?: Prisma.BienWhereUniqueInput | Prisma.BienWhereUniqueInput[];
    update?: Prisma.BienUpdateWithWhereUniqueWithoutVilleInput | Prisma.BienUpdateWithWhereUniqueWithoutVilleInput[];
    updateMany?: Prisma.BienUpdateManyWithWhereWithoutVilleInput | Prisma.BienUpdateManyWithWhereWithoutVilleInput[];
    deleteMany?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
};
export type BienCreateNestedOneWithoutBienImagesInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutBienImagesInput, Prisma.BienUncheckedCreateWithoutBienImagesInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutBienImagesInput;
    connect?: Prisma.BienWhereUniqueInput;
};
export type BienUpdateOneRequiredWithoutBienImagesNestedInput = {
    create?: Prisma.XOR<Prisma.BienCreateWithoutBienImagesInput, Prisma.BienUncheckedCreateWithoutBienImagesInput>;
    connectOrCreate?: Prisma.BienCreateOrConnectWithoutBienImagesInput;
    upsert?: Prisma.BienUpsertWithoutBienImagesInput;
    connect?: Prisma.BienWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BienUpdateToOneWithWhereWithoutBienImagesInput, Prisma.BienUpdateWithoutBienImagesInput>, Prisma.BienUncheckedUpdateWithoutBienImagesInput>;
};
export type EnumTypeBienFieldUpdateOperationsInput = {
    set?: $Enums.TypeBien;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumStatutBienFieldUpdateOperationsInput = {
    set?: $Enums.StatutBien;
};
export type NullableEnumModeLocationFieldUpdateOperationsInput = {
    set?: $Enums.ModeLocation | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
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
export type BienCreateWithoutProprietaireInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    ville?: Prisma.VilleCreateNestedOneWithoutBiensInput;
    etablissements?: Prisma.EtablissementProcheCreateNestedManyWithoutBienInput;
    bienImages?: Prisma.BienImageCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutProprietaireInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    villeId?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    etablissements?: Prisma.EtablissementProcheUncheckedCreateNestedManyWithoutBienInput;
    bienImages?: Prisma.BienImageUncheckedCreateNestedManyWithoutBienInput;
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
export type BienScalarWhereInput = {
    AND?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
    OR?: Prisma.BienScalarWhereInput[];
    NOT?: Prisma.BienScalarWhereInput | Prisma.BienScalarWhereInput[];
    id?: Prisma.StringFilter<"Bien"> | string;
    titre?: Prisma.StringFilter<"Bien"> | string;
    type?: Prisma.EnumTypeBienFilter<"Bien"> | $Enums.TypeBien;
    prix?: Prisma.DecimalFilter<"Bien"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFilter<"Bien"> | $Enums.StatutBien;
    modeLocation?: Prisma.EnumModeLocationNullableFilter<"Bien"> | $Enums.ModeLocation | null;
    description?: Prisma.StringNullableFilter<"Bien"> | string | null;
    surface?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceHabitable?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    surfaceTerrain?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    nbPieces?: Prisma.IntNullableFilter<"Bien"> | number | null;
    chambres?: Prisma.IntNullableFilter<"Bien"> | number | null;
    sallesDeBain?: Prisma.IntNullableFilter<"Bien"> | number | null;
    etage?: Prisma.IntNullableFilter<"Bien"> | number | null;
    numeroPorte?: Prisma.StringNullableFilter<"Bien"> | string | null;
    adresse?: Prisma.StringFilter<"Bien"> | string;
    quartier?: Prisma.StringNullableFilter<"Bien"> | string | null;
    villeId?: Prisma.StringNullableFilter<"Bien"> | string | null;
    disponibleALocation?: Prisma.BoolFilter<"Bien"> | boolean;
    dateDisponibilite?: Prisma.DateTimeNullableFilter<"Bien"> | Date | string | null;
    latitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Bien"> | number | null;
    imageCouverture?: Prisma.StringNullableFilter<"Bien"> | string | null;
    images?: Prisma.StringNullableFilter<"Bien"> | string | null;
    documents?: Prisma.StringNullableFilter<"Bien"> | string | null;
    urlVisiteVirtuelle?: Prisma.StringNullableFilter<"Bien"> | string | null;
    caracteristiques?: Prisma.StringNullableFilter<"Bien"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"Bien"> | Date | string;
    proprietaireId?: Prisma.StringFilter<"Bien"> | string;
};
export type BienCreateWithoutVilleInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    etablissements?: Prisma.EtablissementProcheCreateNestedManyWithoutBienInput;
    bienImages?: Prisma.BienImageCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutVilleInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    proprietaireId: string;
    etablissements?: Prisma.EtablissementProcheUncheckedCreateNestedManyWithoutBienInput;
    bienImages?: Prisma.BienImageUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutVilleInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutVilleInput, Prisma.BienUncheckedCreateWithoutVilleInput>;
};
export type BienCreateManyVilleInputEnvelope = {
    data: Prisma.BienCreateManyVilleInput | Prisma.BienCreateManyVilleInput[];
    skipDuplicates?: boolean;
};
export type BienUpsertWithWhereUniqueWithoutVilleInput = {
    where: Prisma.BienWhereUniqueInput;
    update: Prisma.XOR<Prisma.BienUpdateWithoutVilleInput, Prisma.BienUncheckedUpdateWithoutVilleInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutVilleInput, Prisma.BienUncheckedCreateWithoutVilleInput>;
};
export type BienUpdateWithWhereUniqueWithoutVilleInput = {
    where: Prisma.BienWhereUniqueInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutVilleInput, Prisma.BienUncheckedUpdateWithoutVilleInput>;
};
export type BienUpdateManyWithWhereWithoutVilleInput = {
    where: Prisma.BienScalarWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateManyMutationInput, Prisma.BienUncheckedUpdateManyWithoutVilleInput>;
};
export type BienCreateWithoutBienImagesInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    ville?: Prisma.VilleCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    etablissements?: Prisma.EtablissementProcheCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutBienImagesInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    villeId?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    proprietaireId: string;
    etablissements?: Prisma.EtablissementProcheUncheckedCreateNestedManyWithoutBienInput;
};
export type BienCreateOrConnectWithoutBienImagesInput = {
    where: Prisma.BienWhereUniqueInput;
    create: Prisma.XOR<Prisma.BienCreateWithoutBienImagesInput, Prisma.BienUncheckedCreateWithoutBienImagesInput>;
};
export type BienUpsertWithoutBienImagesInput = {
    update: Prisma.XOR<Prisma.BienUpdateWithoutBienImagesInput, Prisma.BienUncheckedUpdateWithoutBienImagesInput>;
    create: Prisma.XOR<Prisma.BienCreateWithoutBienImagesInput, Prisma.BienUncheckedCreateWithoutBienImagesInput>;
    where?: Prisma.BienWhereInput;
};
export type BienUpdateToOneWithWhereWithoutBienImagesInput = {
    where?: Prisma.BienWhereInput;
    data: Prisma.XOR<Prisma.BienUpdateWithoutBienImagesInput, Prisma.BienUncheckedUpdateWithoutBienImagesInput>;
};
export type BienUpdateWithoutBienImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ville?: Prisma.VilleUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    etablissements?: Prisma.EtablissementProcheUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutBienImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    villeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    etablissements?: Prisma.EtablissementProcheUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateWithoutEtablissementsInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    ville?: Prisma.VilleCreateNestedOneWithoutBiensInput;
    proprietaire: Prisma.ProprietaireCreateNestedOneWithoutBiensInput;
    bienImages?: Prisma.BienImageCreateNestedManyWithoutBienInput;
};
export type BienUncheckedCreateWithoutEtablissementsInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    villeId?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    proprietaireId: string;
    bienImages?: Prisma.BienImageUncheckedCreateNestedManyWithoutBienInput;
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
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ville?: Prisma.VilleUpdateOneWithoutBiensNestedInput;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    bienImages?: Prisma.BienImageUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutEtablissementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    villeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    bienImages?: Prisma.BienImageUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienCreateManyProprietaireInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    villeId?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type BienUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ville?: Prisma.VilleUpdateOneWithoutBiensNestedInput;
    etablissements?: Prisma.EtablissementProcheUpdateManyWithoutBienNestedInput;
    bienImages?: Prisma.BienImageUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    villeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    etablissements?: Prisma.EtablissementProcheUncheckedUpdateManyWithoutBienNestedInput;
    bienImages?: Prisma.BienImageUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateManyWithoutProprietaireInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    villeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BienCreateManyVilleInput = {
    id?: string;
    titre: string;
    type: $Enums.TypeBien;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: $Enums.StatutBien;
    modeLocation?: $Enums.ModeLocation | null;
    description?: string | null;
    surface?: number | null;
    surfaceHabitable?: number | null;
    surfaceTerrain?: number | null;
    nbPieces?: number | null;
    chambres?: number | null;
    sallesDeBain?: number | null;
    etage?: number | null;
    numeroPorte?: string | null;
    adresse: string;
    quartier?: string | null;
    disponibleALocation?: boolean;
    dateDisponibilite?: Date | string | null;
    latitude?: number | null;
    longitude?: number | null;
    imageCouverture?: string | null;
    images?: string | null;
    documents?: string | null;
    urlVisiteVirtuelle?: string | null;
    caracteristiques?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    proprietaireId: string;
};
export type BienUpdateWithoutVilleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaire?: Prisma.ProprietaireUpdateOneRequiredWithoutBiensNestedInput;
    etablissements?: Prisma.EtablissementProcheUpdateManyWithoutBienNestedInput;
    bienImages?: Prisma.BienImageUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateWithoutVilleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
    etablissements?: Prisma.EtablissementProcheUncheckedUpdateManyWithoutBienNestedInput;
    bienImages?: Prisma.BienImageUncheckedUpdateManyWithoutBienNestedInput;
};
export type BienUncheckedUpdateManyWithoutVilleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeBienFieldUpdateOperationsInput | $Enums.TypeBien;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.EnumStatutBienFieldUpdateOperationsInput | $Enums.StatutBien;
    modeLocation?: Prisma.NullableEnumModeLocationFieldUpdateOperationsInput | $Enums.ModeLocation | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    surface?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceHabitable?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    surfaceTerrain?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    nbPieces?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    chambres?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sallesDeBain?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numeroPorte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    quartier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponibleALocation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateDisponibilite?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    imageCouverture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documents?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlVisiteVirtuelle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caracteristiques?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proprietaireId?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type BienCountOutputType
 */
export type BienCountOutputType = {
    etablissements: number;
    bienImages: number;
};
export type BienCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    etablissements?: boolean | BienCountOutputTypeCountEtablissementsArgs;
    bienImages?: boolean | BienCountOutputTypeCountBienImagesArgs;
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
export type BienCountOutputTypeCountEtablissementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtablissementProcheWhereInput;
};
/**
 * BienCountOutputType without action
 */
export type BienCountOutputTypeCountBienImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BienImageWhereInput;
};
export type BienSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    prix?: boolean;
    statut?: boolean;
    modeLocation?: boolean;
    description?: boolean;
    surface?: boolean;
    surfaceHabitable?: boolean;
    surfaceTerrain?: boolean;
    nbPieces?: boolean;
    chambres?: boolean;
    sallesDeBain?: boolean;
    etage?: boolean;
    numeroPorte?: boolean;
    adresse?: boolean;
    quartier?: boolean;
    villeId?: boolean;
    disponibleALocation?: boolean;
    dateDisponibilite?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    imageCouverture?: boolean;
    images?: boolean;
    documents?: boolean;
    urlVisiteVirtuelle?: boolean;
    caracteristiques?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    proprietaireId?: boolean;
    ville?: boolean | Prisma.Bien$villeArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    etablissements?: boolean | Prisma.Bien$etablissementsArgs<ExtArgs>;
    bienImages?: boolean | Prisma.Bien$bienImagesArgs<ExtArgs>;
    _count?: boolean | Prisma.BienCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bien"]>;
export type BienSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    prix?: boolean;
    statut?: boolean;
    modeLocation?: boolean;
    description?: boolean;
    surface?: boolean;
    surfaceHabitable?: boolean;
    surfaceTerrain?: boolean;
    nbPieces?: boolean;
    chambres?: boolean;
    sallesDeBain?: boolean;
    etage?: boolean;
    numeroPorte?: boolean;
    adresse?: boolean;
    quartier?: boolean;
    villeId?: boolean;
    disponibleALocation?: boolean;
    dateDisponibilite?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    imageCouverture?: boolean;
    images?: boolean;
    documents?: boolean;
    urlVisiteVirtuelle?: boolean;
    caracteristiques?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    proprietaireId?: boolean;
    ville?: boolean | Prisma.Bien$villeArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bien"]>;
export type BienSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    prix?: boolean;
    statut?: boolean;
    modeLocation?: boolean;
    description?: boolean;
    surface?: boolean;
    surfaceHabitable?: boolean;
    surfaceTerrain?: boolean;
    nbPieces?: boolean;
    chambres?: boolean;
    sallesDeBain?: boolean;
    etage?: boolean;
    numeroPorte?: boolean;
    adresse?: boolean;
    quartier?: boolean;
    villeId?: boolean;
    disponibleALocation?: boolean;
    dateDisponibilite?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    imageCouverture?: boolean;
    images?: boolean;
    documents?: boolean;
    urlVisiteVirtuelle?: boolean;
    caracteristiques?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    proprietaireId?: boolean;
    ville?: boolean | Prisma.Bien$villeArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bien"]>;
export type BienSelectScalar = {
    id?: boolean;
    titre?: boolean;
    type?: boolean;
    prix?: boolean;
    statut?: boolean;
    modeLocation?: boolean;
    description?: boolean;
    surface?: boolean;
    surfaceHabitable?: boolean;
    surfaceTerrain?: boolean;
    nbPieces?: boolean;
    chambres?: boolean;
    sallesDeBain?: boolean;
    etage?: boolean;
    numeroPorte?: boolean;
    adresse?: boolean;
    quartier?: boolean;
    villeId?: boolean;
    disponibleALocation?: boolean;
    dateDisponibilite?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    imageCouverture?: boolean;
    images?: boolean;
    documents?: boolean;
    urlVisiteVirtuelle?: boolean;
    caracteristiques?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    proprietaireId?: boolean;
};
export type BienOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titre" | "type" | "prix" | "statut" | "modeLocation" | "description" | "surface" | "surfaceHabitable" | "surfaceTerrain" | "nbPieces" | "chambres" | "sallesDeBain" | "etage" | "numeroPorte" | "adresse" | "quartier" | "villeId" | "disponibleALocation" | "dateDisponibilite" | "latitude" | "longitude" | "imageCouverture" | "images" | "documents" | "urlVisiteVirtuelle" | "caracteristiques" | "dateCreation" | "dateModification" | "proprietaireId", ExtArgs["result"]["bien"]>;
export type BienInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ville?: boolean | Prisma.Bien$villeArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
    etablissements?: boolean | Prisma.Bien$etablissementsArgs<ExtArgs>;
    bienImages?: boolean | Prisma.Bien$bienImagesArgs<ExtArgs>;
    _count?: boolean | Prisma.BienCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BienIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ville?: boolean | Prisma.Bien$villeArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type BienIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ville?: boolean | Prisma.Bien$villeArgs<ExtArgs>;
    proprietaire?: boolean | Prisma.ProprietaireDefaultArgs<ExtArgs>;
};
export type $BienPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bien";
    objects: {
        ville: Prisma.$VillePayload<ExtArgs> | null;
        proprietaire: Prisma.$ProprietairePayload<ExtArgs>;
        etablissements: Prisma.$EtablissementProchePayload<ExtArgs>[];
        bienImages: Prisma.$BienImagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        titre: string;
        type: $Enums.TypeBien;
        prix: runtime.Decimal;
        statut: $Enums.StatutBien;
        modeLocation: $Enums.ModeLocation | null;
        description: string | null;
        surface: number | null;
        surfaceHabitable: number | null;
        surfaceTerrain: number | null;
        nbPieces: number | null;
        chambres: number | null;
        sallesDeBain: number | null;
        etage: number | null;
        numeroPorte: string | null;
        adresse: string;
        quartier: string | null;
        villeId: string | null;
        disponibleALocation: boolean;
        dateDisponibilite: Date | null;
        latitude: number | null;
        longitude: number | null;
        imageCouverture: string | null;
        images: string | null;
        documents: string | null;
        urlVisiteVirtuelle: string | null;
        caracteristiques: string | null;
        dateCreation: Date;
        dateModification: Date;
        proprietaireId: string;
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
    ville<T extends Prisma.Bien$villeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$villeArgs<ExtArgs>>): Prisma.Prisma__VilleClient<runtime.Types.Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    proprietaire<T extends Prisma.ProprietaireDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProprietaireDefaultArgs<ExtArgs>>): Prisma.Prisma__ProprietaireClient<runtime.Types.Result.GetResult<Prisma.$ProprietairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    etablissements<T extends Prisma.Bien$etablissementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$etablissementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtablissementProchePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bienImages<T extends Prisma.Bien$bienImagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bien$bienImagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BienImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
    readonly type: Prisma.FieldRef<"Bien", 'TypeBien'>;
    readonly prix: Prisma.FieldRef<"Bien", 'Decimal'>;
    readonly statut: Prisma.FieldRef<"Bien", 'StatutBien'>;
    readonly modeLocation: Prisma.FieldRef<"Bien", 'ModeLocation'>;
    readonly description: Prisma.FieldRef<"Bien", 'String'>;
    readonly surface: Prisma.FieldRef<"Bien", 'Float'>;
    readonly surfaceHabitable: Prisma.FieldRef<"Bien", 'Float'>;
    readonly surfaceTerrain: Prisma.FieldRef<"Bien", 'Float'>;
    readonly nbPieces: Prisma.FieldRef<"Bien", 'Int'>;
    readonly chambres: Prisma.FieldRef<"Bien", 'Int'>;
    readonly sallesDeBain: Prisma.FieldRef<"Bien", 'Int'>;
    readonly etage: Prisma.FieldRef<"Bien", 'Int'>;
    readonly numeroPorte: Prisma.FieldRef<"Bien", 'String'>;
    readonly adresse: Prisma.FieldRef<"Bien", 'String'>;
    readonly quartier: Prisma.FieldRef<"Bien", 'String'>;
    readonly villeId: Prisma.FieldRef<"Bien", 'String'>;
    readonly disponibleALocation: Prisma.FieldRef<"Bien", 'Boolean'>;
    readonly dateDisponibilite: Prisma.FieldRef<"Bien", 'DateTime'>;
    readonly latitude: Prisma.FieldRef<"Bien", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Bien", 'Float'>;
    readonly imageCouverture: Prisma.FieldRef<"Bien", 'String'>;
    readonly images: Prisma.FieldRef<"Bien", 'String'>;
    readonly documents: Prisma.FieldRef<"Bien", 'String'>;
    readonly urlVisiteVirtuelle: Prisma.FieldRef<"Bien", 'String'>;
    readonly caracteristiques: Prisma.FieldRef<"Bien", 'String'>;
    readonly dateCreation: Prisma.FieldRef<"Bien", 'DateTime'>;
    readonly dateModification: Prisma.FieldRef<"Bien", 'DateTime'>;
    readonly proprietaireId: Prisma.FieldRef<"Bien", 'String'>;
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
 * Bien.ville
 */
export type Bien$villeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: Prisma.VilleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ville
     */
    omit?: Prisma.VilleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VilleInclude<ExtArgs> | null;
    where?: Prisma.VilleWhereInput;
};
/**
 * Bien.etablissements
 */
export type Bien$etablissementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementProche
     */
    select?: Prisma.EtablissementProcheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EtablissementProche
     */
    omit?: Prisma.EtablissementProcheOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EtablissementProcheInclude<ExtArgs> | null;
    where?: Prisma.EtablissementProcheWhereInput;
    orderBy?: Prisma.EtablissementProcheOrderByWithRelationInput | Prisma.EtablissementProcheOrderByWithRelationInput[];
    cursor?: Prisma.EtablissementProcheWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EtablissementProcheScalarFieldEnum | Prisma.EtablissementProcheScalarFieldEnum[];
};
/**
 * Bien.bienImages
 */
export type Bien$bienImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.BienImageWhereInput;
    orderBy?: Prisma.BienImageOrderByWithRelationInput | Prisma.BienImageOrderByWithRelationInput[];
    cursor?: Prisma.BienImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BienImageScalarFieldEnum | Prisma.BienImageScalarFieldEnum[];
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