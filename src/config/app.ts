import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import { limiteurGlobal } from "../middlewares/rateLimiter.middleware.js";
import authRouter from "../routes/auth.routes.js";
import ownerRouter from "../routes/owner.routes.js";
import verificationRouter from "../routes/verification.routes.js";
import adminVerificationRouter from "../routes/adminVerification.routes.js";
import typeLogementRouter from "../routes/typeLogement.routes.js";
import typeTransactionRouter from "../routes/typeTransaction.routes.js";
import statutBienRouter from "../routes/statutBien.routes.js";
import meubleRouter from "../routes/meuble.routes.js";
import equipementRouter from "../routes/equipement.routes.js";
import categorieMeubleRouter from "../routes/categorieMeuble.routes.js";
import categorieEquipementRouter from "../routes/categorieEquipement.routes.js";
import statsRouter from "../routes/stats.routes.js";
import bienRouter from "../routes/bien.routes.js";
import annonceRouter from "../routes/annonce.routes.js";
import geoRouter from "../routes/geo.routes.js";
import locataireRouter from "../routes/locataire.routes.js";
import bailRouter from "../routes/bail.routes.js";
import locataireAuthRouter from "../routes/locataireAuth.routes.js";
import modeleContratRouter from "../routes/modeleContrat.routes.js";
import temoignageRouter from "../routes/temoignage.routes.js";
import alerteRouter from "../routes/alerte.routes.js";
import promotionRouter from "../routes/promotion.routes.js";
import premiumRouter from "../routes/premium.routes.js";
import transactionRouter from "../routes/transaction.routes.js";
import suspensionRouter from "../routes/suspension.routes.js";
import signalementRouter from "../routes/signalement.routes.js";
import documentBienRouter from "../routes/documentBien.routes.js";
import favoriRouter from "../routes/favori.routes.js";
import comptePublicAuthRouter from "../routes/comptePublicAuth.routes.js";
import proprietairesRouter, { ownerScoreRouter } from "../routes/trustScore.routes.js";
import monetisationRouter from "../routes/monetisation.routes.js";
import ogRouter from "../routes/og.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const allowedOrigins = [
  process.env.FRONT_URL || 'http://localhost:8080',
  process.env.FRONT_URL_PROD || 'https://seek-front-plum.vercel.app',
  'http://localhost:5173', // Vite default
  'http://localhost:8080',
  'http://localhost:3000', // React default
  'http://localhost:3001', // React alternative
  'https://seek-front-plum.vercel.app', // Production Vercel
];

// ============= SÉCURITÉ =============

// Helmet - Headers de sécurité
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Rate limiting global
app.use(limiteurGlobal);

// ============= CORS =============

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allowed?: boolean) => void) => {
    // Allow requests with no origin (e.g., curl, mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS policy: origin not allowed'), false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-owner-id'],
};

app.use(cors(corsOptions));

// ============= PARSERS =============

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// ============= FICHIERS STATIQUES =============

// Servir les fichiers uploadés (images, covers)
// Override Helmet's Cross-Origin-Resource-Policy pour permettre le chargement cross-origin des images
app.use('/uploads', (_req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
}, express.static(path.join(__dirname, '../../uploads')));

// ============= ROUTES =============

app.get('/', (req, res) => {
  res.redirect(process.env.FRONT_URL || 'http://localhost:8080');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API opérationnelle' });
});

// Auth admin
app.use('/api/auth', authRouter);

// Auth propriétaires
app.use('/api/owner/auth', ownerRouter);

// Vérification d'identité propriétaire
app.use('/api/owner/verification', verificationRouter);

// Vérification admin
app.use('/api/admin', adminVerificationRouter);

// Types de logement
app.use('/api/types-logement', typeLogementRouter);

// Types de transaction
app.use('/api/types-transaction', typeTransactionRouter);

// Statuts de bien
app.use('/api/statuts-bien', statutBienRouter);

// Meubles & Équipements
app.use('/api/meubles',     meubleRouter);
app.use('/api/equipements', equipementRouter);

// Catégories Meublé / Équipement
app.use('/api/categories-meubles',     categorieMeubleRouter);
app.use('/api/categories-equipements', categorieEquipementRouter);

// Statistiques publiques
app.use('/api/stats', statsRouter);

// Biens immobiliers
app.use('/api/biens', bienRouter);

// Annonces (admin)
app.use('/api/annonces', annonceRouter);

// Géographie (pays / villes)
app.use('/api/geo', geoRouter);

// Locataires (owner CRUD)
app.use('/api/owner/locataires', locataireRouter);

// Bails (sous /api/biens/:id/bail)
app.use('/api/biens/:id/bail', bailRouter);

// Auth espace locataire
app.use('/api/locataire/auth', locataireAuthRouter);

// Modèles de contrat (admin CRUD + owner liste)
app.use('/api/modeles-contrat', modeleContratRouter);

// Témoignages (public)
app.use('/api/temoignages', temoignageRouter);

// Alertes (public)
app.use('/api/alertes', alerteRouter);

// Promotion / Mise en avant des annonces
app.use('/api/promotions', promotionRouter);

// Premium / Mise en avant payante
app.use('/api/premium', premiumRouter);

// Transactions / Historique des paiements
app.use('/api/transactions', transactionRouter);

// Suspension de comptes (admin)
app.use('/api/suspension', suspensionRouter);

// Signalements
app.use('/api/signalements', signalementRouter);

// Documents des biens (owner)
app.use('/api/biens/:bienId/documents', documentBienRouter);

// Auth compte public (visiteurs)
app.use('/api/public/auth', comptePublicAuthRouter);

// Favoris (compte public authentifié)
app.use('/api/public/favoris', favoriRouter);

// Score de confiance des propriétaires (public)
app.use('/api/proprietaires', proprietairesRouter);

// Score de confiance du propriétaire connecté
app.use('/api/owner', ownerScoreRouter);

// Monétisation (abonnements, commissions, mises en avant)
app.use('/api/monetisation', monetisationRouter);

// Open Graph preview (WhatsApp / Facebook / SMS)
app.use('/og', ogRouter);

// ============= GESTION DES ERREURS =============

// Middleware pour routes non trouvées
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "Route non trouvée" });
});

// Middleware de gestion des erreurs
app.use((err: Error | AppError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);

  // Gestion des erreurs Prisma
  if ('code' in err && typeof err.code === 'string') {
    switch (err.code) {
      case 'P2002':
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: `Conflit unique sur le champ: ${(err as any).meta?.target || 'inconnu'}`
        });
      case 'P2025':
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Ressource non trouvée' });
      default:
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erreur de base de données inconnue' });
    }
  }

  // Gestion des AppError et autres erreurs
  const statusCode = (err instanceof AppError) ? err.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Erreur interne du serveur';
  res.status(statusCode).json({ message });
});

export default app;
