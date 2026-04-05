export function parseListQuery(req, defaultSortBy = "createdAt") {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
    const skip = (page - 1) * limit;
    const search = req.query.search?.trim() ?? "";
    const sortBy = req.query.sortBy || defaultSortBy;
    const sortOrder = req.query.sortOrder === "asc" ? "asc" : "desc";
    let actif = undefined;
    if (req.query.actif === "true")
        actif = true;
    else if (req.query.actif === "false")
        actif = false;
    const categorieId = req.query.categorieId || undefined;
    return { page, limit, skip, search, sortBy, sortOrder, actif, categorieId };
}
export function buildPaginationMeta(total, params) {
    return {
        total,
        page: params.page,
        limit: params.limit,
        totalPages: Math.ceil(total / params.limit),
    };
}
//# sourceMappingURL=listQueryParser.js.map