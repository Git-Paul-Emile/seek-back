import type { Request } from "express";
export interface ListQueryParams {
    page: number;
    limit: number;
    skip: number;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
    actif: boolean | undefined;
    categorieId: string | undefined;
}
export interface PaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare function parseListQuery(req: Request, defaultSortBy?: string): ListQueryParams;
export declare function buildPaginationMeta(total: number, params: Pick<ListQueryParams, "page" | "limit">): PaginationMeta;
//# sourceMappingURL=listQueryParser.d.ts.map