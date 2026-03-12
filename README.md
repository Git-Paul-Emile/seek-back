# Seek - Backend API

![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat&logo=express)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=flat&logo=prisma)
![MySQL](https://img.shields.io/badge/MySQL-8-00758F?style=flat&logo=mysql)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178C6?style=flat&logo=typescript)

API RESTful pour la plateforme de location immobilière Seek. Développée avec Node.js, Express et Prisma ORM.

## 📋 Description

Le backend Seek fournit une API complète pour la gestion d'une plateforme de location immobilière incluant :
- Gestion des utilisateurs (propriétaires, locataires, administrateurs)
- Gestion des biens et annonces
- Système de contrats de bail numériques
- Paiements via Mobile Money
- Système de notifications
- Documentation API interactive (Swagger)

## 🛠 Technologies

- **Runtime** : Node.js 20+
- **Framework** : Express.js 5
- **ORM** : Prisma 6
- **Base de données** : MySQL 8.0+
- **Authentification** : JWT avec cookies sécurisés
- **Validation** : Zod
- **Documentation** : Swagger UI Express
- **Images** : Sharp + Cloudinary
- **SMS/Payments** : Twilio

## 📁 Structure du Projet

```
back/
├── prisma/
│   ├── seeders/          # Données initiales
│   ├── seeders/data/     # Données géographiques (villes, quartiers)
│   ├── schema.prisma    # Schéma de la base de données
│   └── seed.ts          # Script de seed
├── src/
│   ├── config/          # Configurations (app, database, jwt, cloudinary)
│   ├── controllers/     # Contrôleurs HTTP
│   ├── middlewares/     # Middlewares (auth, upload, validation)
│   ├── repositories/    # Couche d'accès aux données
│   ├── routes/          # Définitions des routes API
│   ├── services/       # Logique métier
│   ├── types/          # Types TypeScript
│   ├── utils/          # Utilitaires (errors, mailer, crypto)
│   ├── generated/      # Code généré par Prisma
│   └── index.ts        # Point d'entrée
└── package.json
```

## 🚀 Installation

### Prérequis
- Node.js 20+
- MySQL 8.0+
- npm ou yarn

### Étapes

1. **Installer les dépendances**
```bash
npm install
```

2. **Configurer les variables d'environnement**
```bash
cp .env.example .env
```

3. **Configurer le fichier .env**
```env
PORT=8000
DATABASE_URL="mysql://user:password@localhost:3306/seek"
JWT_SECRET="votre-secret-jwt-très-securisé"
JWT_EXPIRES_IN="7d"

# Cloudinary (stockage d'images)
CLOUDINARY_CLOUD_NAME=votre-cloud
CLOUDINARY_API_KEY=votre-api-key
CLOUDINARY_API_SECRET=votre-secret

# Twilio (Mobile Money)
TWILIO_ACCOUNT_SID=votre-sid
TWILIO_AUTH_TOKEN=votre-token
TWILIO_PHONE_NUMBER=votre-numero
```

4. **Générer le client Prisma**
```bash
npm run generate
```

5. **Appliquer les migrations**
```bash
npm run migrate
```

6. **Importer les données initiales (optionnel)**
```bash
npm run seed
```

## ▶️ Démarrage

### Mode développement
```bash
npm run dev
```
Le serveur démarre sur `http://localhost:8000`

### Mode production
```bash
npm run build
npm run start
```

## 📡 Points d'Accès API

### Documentation Swagger
Une fois le serveur démarré, accédez à :
- **Swagger UI** : `http://localhost:8000/api-docs`
- **JSON OpenAPI** : `http://localhost:8000/api-docs.json`

### Routes Principales

| Module | Route | Description |
|--------|-------|-------------|
| Auth | `/api/auth/*` | Inscription, connexion, déconnexion |
| Biens | `/api/biens/*` | CRUD des biens et annonces |
| Propriétaires | `/api/owners/*` | Gestion des propriétaires |
| Locataires | `/api/locataires/*` | Gestion des locataires |
| Contrats | `/api/contrats/*` | Création et gestion des baux |
| Paiements | `/api/transactions/*` | Suivi des paiements |
| Géographie | `/api/geo/*` | Villes, quartiers, pays |
| Notifications | `/api/notifications/*` | Notifications utilisateurs |
| Premium | `/api/premium/*` | Abonnements premium |

## 🔐 Authentification

L'API utilise l'authentification JWT avec des cookies sécurisés.

### Headers requis
```
Authorization: Bearer <token_jwt>
```

### Rôles utilisateurs
- `OWNER` - Propriétaire de biens
- `LOCATAIRE` - Locataire
- `ADMIN` - Administrateur

## 🗄 Schéma de Base de Données

Les entités principales :
- `User` - Utilisateurs (multiples rôles)
- `Bien` - Biens immobiliers
- `Annonce` - Annonces publiées
- `Contrat` - Contrats de bail
- `Transaction` - Paiements
- `Paiement` - Détails des paiements
- `Ville`, `Quartier` - Géographie (Sénéal)
- `Equipement`, `Meuble` - Caractéristiques des biens

Voir [`prisma/schema.prisma`](prisma/schema.prisma) pour le schéma complet.

## 🔧 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Démarrage en mode développement avec watch |
| `npm run build` | Compilation TypeScript |
| `npm run start` | Démarrage en production |
| `npm run generate` | Générer le client Prisma |
| `npm run migrate` | Appliquer les migrations |
| `npm run seed` | Importer les données initiales |

## 📦 Services Implémentés

- **AuthService** - Gestion authentification
- **BienService** - Gestion des biens
- **BailService** - Création et gestion des contrats
- **TransactionService** - Suivi des paiements
- **NotificationService** - Envoi de notifications
- **CloudinaryService** - Upload et optimisation d'images
- **MobileMoneyService** - Intégration Twilio
- **VerificationService** - Vérification des utilisateurs
- **SuspensionService** - Gestion des suspensions

## 🔒 Sécurité

- Protection CORS configurée
- Rate limiting sur les endpoints sensibles
- Validation des entrées avec Zod
- Hachage des mots de passe avec bcrypt
- Cookies sécurisés (HttpOnly, SameSite)

## 📄 Licence

Tous droits réservés - Seek Senegal
