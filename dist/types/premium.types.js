// ============================================================
// TYPES POUR LES FORMULES PREMIUM ET LE PAIEMENT
// ============================================================
// Liste des formules premium disponibles
export const FORMULES_PREMIUM = [
    {
        id: "boost_express",
        nom: "BOOST EXPRESS",
        dureeJours: 3,
        prix: 2000,
        accroche: "Donnez un coup d'accélérateur rapide à votre annonce !",
        description: "Idéal si vous venez de publier votre bien et souhaitez générer rapidement des vues et des contacts.",
        idealPour: ["Tester la demande", "Relancer une annonce récente", "Créer un pic de visibilité"],
        populer: false,
    },
    {
        id: "visibilite_plus",
        nom: "VISIBILITÉ PLUS",
        dureeJours: 7,
        prix: 4500,
        accroche: "Soyez parmi les premières annonces vues cette semaine !",
        description: "Votre bien apparaît en priorité pendant 7 jours pour maximiser vos chances de location ou de vente.",
        idealPour: ["Biens en zone concurrentielle", "Location rapide", "Annonce stratégique"],
        populer: false,
    },
    {
        id: "max_performance",
        nom: "MAX PERFORMANCE",
        dureeJours: 15,
        prix: 8000,
        accroche: "Doublez vos chances de trouver un locataire ou acheteur !",
        description: "Exposition prolongée + meilleure visibilité sur la plateforme.",
        idealPour: ["Exposition longue", "Meilleur positionnement", "Plus de contacts"],
        populer: true,
    },
    {
        id: "domination_totale",
        nom: "DOMINATION TOTALE",
        dureeJours: 30,
        prix: 14000,
        accroche: "Dominez les résultats de recherche pendant 1 mois !",
        description: "Votre annonce reste en haut des résultats pendant 30 jours complets.",
        idealPour: ["Exposition maximale", "Présence continue", "Absence de concurrence"],
        populer: false,
    },
];
// Modes de paiement disponibles (simulation)
export var ModePaiement;
(function (ModePaiement) {
    ModePaiement["ORANGE_MONEY"] = "ORANGE_MONEY";
    ModePaiement["WAVE"] = "WAVE";
})(ModePaiement || (ModePaiement = {}));
// Liste des moyens de paiement disponibles
export const MOYENS_PAIEMENT = [
    {
        id: ModePaiement.ORANGE_MONEY,
        nom: "Orange Money",
        logo: "/images/orange-money.png", // À remplacer par le vrai logo
        description: "Payez via votre compte Orange Money",
        couleur: "orange",
    },
    {
        id: ModePaiement.WAVE,
        nom: "Wave",
        logo: "/images/wave.png", // À remplacer par le vrai logo
        description: "Payez via votre compte Wave",
        couleur: "bleu",
    },
];
//# sourceMappingURL=premium.types.js.map