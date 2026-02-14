import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import { limiteurGlobal } from "../middlewares/rateLimiter.middleware.js";

const app = express();

const allowedOrigins = [
  process.env.FRONT_URL || 'http://localhost:8080',
  'http://localhost:5173', // Vite default
  'http://localhost:8080',
  'http://localhost:3000', // React default
  'http://localhost:3001', // React alternative
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
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// ============= PARSERS =============

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// ============= ROUTES =============

app.get('/', (req, res) => {
  res.redirect(process.env.FRONT_URL || 'http://localhost:8080');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API opérationnelle' });
});

// Importation des routes
import ownerRoutes from "../routes/ownerRoutes.js";
import villeRoutes from "../routes/villeRoutes.js";

// Utilisation des routes
app.use('/api', ownerRoutes);
app.use('/api/localisation', villeRoutes);

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
