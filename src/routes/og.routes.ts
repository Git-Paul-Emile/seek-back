import { Router } from "express";
import type { Request, Response } from "express";
import { getAnnoncePublieById } from "../services/bien.service.js";

const router = Router();

/**
 * GET /og/annonces/:id
 * Sert une page HTML minimale avec les balises Open Graph pour WhatsApp / Facebook.
 * Redirige ensuite l'utilisateur vers la page frontend correspondante.
 */
router.get("/annonces/:id", async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
  const annonceUrl = `${frontendUrl}/annonces/${id}`;

  try {
    const bien = await getAnnoncePublieById(id);

    if (!bien) {
      res.redirect(annonceUrl);
      return;
    }

    const titre = bien.titre ?? "Annonce immobilière - SEEK";
    const image = (bien.photos ?? [])[0] ?? "";
    const localisation = [bien.quartier, bien.ville, bien.pays].filter(Boolean).join(", ");
    const prixFormate = bien.prix
      ? new Intl.NumberFormat("fr-SN", { style: "currency", currency: "XOF" }).format(bien.prix)
      : "";
    const description = [
      localisation,
      prixFormate,
      bien.surface ? `${bien.surface} m²` : null,
    ]
      .filter(Boolean)
      .join(" · ");

    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>${esc(titre)}</title>
  <meta property="og:title" content="${esc(titre)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${esc(annonceUrl)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SEEK Immobilier" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(titre)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${esc(image)}" />
  <meta http-equiv="refresh" content="0; url=${annonceUrl}" />
</head>
<body>
  <script>window.location.replace("${annonceUrl}");</script>
  <p>Redirection… <a href="${annonceUrl}">Cliquez ici</a></p>
</body>
</html>`;

    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  } catch {
    res.redirect(annonceUrl);
  }
});

export default router;
