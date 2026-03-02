/**
 * Quartiers du Sénégal par ville, avec coordonnées GPS.
 * Données pur — aucune logique métier.
 *
 * Structure : { ville, quartiers: [{ nom, latitude, longitude }] }
 * Les noms de ville doivent correspondre exactement à ceux de VILLES_SENEGAL.
 */

export interface QuartierData {
  nom: string;
  latitude: number;
  longitude: number;
}

export interface VilleQuartiersData {
  ville: string;
  quartiers: QuartierData[];
}

export const QUARTIERS_SENEGAL: readonly VilleQuartiersData[] = [
  // ─── Dakar ───────────────────────────────────────────────────────────────────
  {
    ville: "Dakar",
    quartiers: [
      { nom: "Plateau",                latitude: 14.6682, longitude: -17.4382 },
      { nom: "Médina",                 latitude: 14.6897, longitude: -17.4500 },
      { nom: "Gueule Tapée",           latitude: 14.6947, longitude: -17.4450 },
      { nom: "Fass",                   latitude: 14.6960, longitude: -17.4430 },
      { nom: "Colobane",               latitude: 14.6978, longitude: -17.4372 },
      { nom: "HLM Grand Yoff",         latitude: 14.7253, longitude: -17.4572 },
      { nom: "Grand Yoff",             latitude: 14.7253, longitude: -17.4500 },
      { nom: "Patte d'Oie",            latitude: 14.7228, longitude: -17.4672 },
      { nom: "Liberté VI",             latitude: 14.7228, longitude: -17.4472 },
      { nom: "Sicap Liberté",          latitude: 14.7028, longitude: -17.4572 },
      { nom: "Dieuppeul",              latitude: 14.7078, longitude: -17.4572 },
      { nom: "Derklé",                 latitude: 14.7090, longitude: -17.4530 },
      { nom: "Fann-Résidence",         latitude: 14.6968, longitude: -17.4752 },
      { nom: "Point E",                latitude: 14.7028, longitude: -17.4752 },
      { nom: "Amitié",                 latitude: 14.7003, longitude: -17.4725 },
      { nom: "Mermoz",                 latitude: 14.7178, longitude: -17.4872 },
      { nom: "Sacré-Cœur",             latitude: 14.7200, longitude: -17.4850 },
      { nom: "Ouakam",                 latitude: 14.7353, longitude: -17.5072 },
      { nom: "Ngor",                   latitude: 14.7453, longitude: -17.5072 },
      { nom: "Almadies",               latitude: 14.7481, longitude: -17.5325 },
      { nom: "Yoff",                   latitude: 14.7661, longitude: -17.4872 },
      { nom: "Cambérène",              latitude: 14.7561, longitude: -17.4572 },
      { nom: "Parcelles Assainies",    latitude: 14.7612, longitude: -17.4372 },
      { nom: "Keur Massar",            latitude: 14.7453, longitude: -17.3300 },
      { nom: "Mbao",                   latitude: 14.7453, longitude: -17.3572 },
      { nom: "Hann Bel-Air",           latitude: 14.7153, longitude: -17.4172 },
      { nom: "Port",                   latitude: 14.6728, longitude: -17.4272 },
      { nom: "Biscuiterie",            latitude: 14.7128, longitude: -17.4472 },
      { nom: "Keur Gorgui",            latitude: 14.7178, longitude: -17.4672 },
      { nom: "Rocade",                 latitude: 14.7078, longitude: -17.4672 },
      { nom: "Hlm Foire",              latitude: 14.6978, longitude: -17.4572 },
      { nom: "Scat Urbam",             latitude: 14.6940, longitude: -17.4540 },
      { nom: "Castors",                latitude: 14.7050, longitude: -17.4800 },
      { nom: "Sodida",                 latitude: 14.7300, longitude: -17.4700 },
      { nom: "Dalifort",               latitude: 14.7411, longitude: -17.3922 },
    ],
  },

  // ─── Pikine ───────────────────────────────────────────────────────────────────
  {
    ville: "Pikine",
    quartiers: [
      { nom: "Pikine Ancien",          latitude: 14.7478, longitude: -17.3822 },
      { nom: "Diamaguène",             latitude: 14.7511, longitude: -17.3972 },
      { nom: "Guinaw-Rails Nord",      latitude: 14.7511, longitude: -17.3822 },
      { nom: "Guinaw-Rails Sud",       latitude: 14.7490, longitude: -17.3800 },
      { nom: "Thiaroye-sur-Mer",       latitude: 14.7353, longitude: -17.4072 },
      { nom: "Thiaroye Gare",          latitude: 14.7400, longitude: -17.4000 },
      { nom: "Koumassar",              latitude: 14.7611, longitude: -17.3772 },
      { nom: "Yeumbeul Nord",          latitude: 14.7725, longitude: -17.3450 },
      { nom: "Yeumbeul Sud",           latitude: 14.7650, longitude: -17.3400 },
      { nom: "Malika",                 latitude: 14.7800, longitude: -17.3200 },
      { nom: "Keur Massar Nord",       latitude: 14.7550, longitude: -17.3150 },
      { nom: "Tivaouane Peulh",        latitude: 14.7890, longitude: -17.3600 },
      { nom: "Pikine Technopole",      latitude: 14.7450, longitude: -17.3850 },
    ],
  },

  // ─── Guédiawaye ──────────────────────────────────────────────────────────────
  {
    ville: "Guédiawaye",
    quartiers: [
      { nom: "Sam Notaire",            latitude: 14.7725, longitude: -17.3950 },
      { nom: "Golf Sud",               latitude: 14.7650, longitude: -17.4000 },
      { nom: "Ndiarème Limamoulaye",   latitude: 14.7800, longitude: -17.4100 },
      { nom: "Médina Gounass",         latitude: 14.7850, longitude: -17.4000 },
      { nom: "Wakhinane Nimzatt",      latitude: 14.7600, longitude: -17.4050 },
      { nom: "Sahm",                   latitude: 14.7700, longitude: -17.4200 },
      { nom: "Daroukhane",             latitude: 14.7750, longitude: -17.4250 },
      { nom: "Rebeuss",                latitude: 14.7680, longitude: -17.4150 },
    ],
  },

  // ─── Rufisque ─────────────────────────────────────────────────────────────────
  {
    ville: "Rufisque",
    quartiers: [
      { nom: "Rufisque Centre",        latitude: 14.7139, longitude: -17.2758 },
      { nom: "Diokoul",                latitude: 14.7200, longitude: -17.2650 },
      { nom: "Colobane",               latitude: 14.7100, longitude: -17.2700 },
      { nom: "Mérina",                 latitude: 14.7050, longitude: -17.2800 },
      { nom: "Keury Kaw",              latitude: 14.7200, longitude: -17.2800 },
      { nom: "Keury Kao",              latitude: 14.7230, longitude: -17.2750 },
      { nom: "Thiawlène",              latitude: 14.7150, longitude: -17.2650 },
      { nom: "Ndiakhirat",             latitude: 14.7050, longitude: -17.2600 },
      { nom: "Déni Guedj",             latitude: 14.7100, longitude: -17.2750 },
    ],
  },

  // ─── Thiès ────────────────────────────────────────────────────────────────────
  {
    ville: "Thiès",
    quartiers: [
      { nom: "Thiès Nord",             latitude: 14.8050, longitude: -16.9250 },
      { nom: "Thiès Sud",              latitude: 14.7875, longitude: -16.9250 },
      { nom: "Thiès Ouest",            latitude: 14.7950, longitude: -16.9350 },
      { nom: "Randoulène Nord",        latitude: 14.7990, longitude: -16.9150 },
      { nom: "Randoulène Sud",         latitude: 14.7950, longitude: -16.9100 },
      { nom: "Médina Fall",            latitude: 14.7975, longitude: -16.9350 },
      { nom: "Nguinth",                latitude: 14.7850, longitude: -16.9300 },
      { nom: "Mbafa",                  latitude: 14.8050, longitude: -16.9150 },
      { nom: "Cité Lamy",              latitude: 14.7920, longitude: -16.9420 },
      { nom: "Cité Cheikh",            latitude: 14.7900, longitude: -16.9380 },
      { nom: "Keur Mbaye Fall",        latitude: 14.8000, longitude: -16.9200 },
      { nom: "Sam",                    latitude: 14.7930, longitude: -16.9280 },
      { nom: "Essepe",                 latitude: 14.8020, longitude: -16.9180 },
      { nom: "Diamaguène",             latitude: 14.7970, longitude: -16.9300 },
      { nom: "Cité Lamy",              latitude: 14.7920, longitude: -16.9420 },
    ],
  },

  // ─── Mbour ────────────────────────────────────────────────────────────────────
  {
    ville: "Mbour",
    quartiers: [
      { nom: "Mbour Centre",           latitude: 14.4142, longitude: -16.9658 },
      { nom: "Diamaguène",             latitude: 14.4200, longitude: -16.9600 },
      { nom: "HLM",                    latitude: 14.4300, longitude: -16.9700 },
      { nom: "Escale",                 latitude: 14.4100, longitude: -16.9650 },
      { nom: "Médine",                 latitude: 14.4250, longitude: -16.9650 },
      { nom: "Tefess",                 latitude: 14.4050, longitude: -16.9600 },
      { nom: "Santhie",                latitude: 14.4350, longitude: -16.9750 },
      { nom: "Liberté",                latitude: 14.4320, longitude: -16.9680 },
      { nom: "Bongré",                 latitude: 14.4280, longitude: -16.9720 },
      { nom: "Grand Mbour",            latitude: 14.4400, longitude: -16.9800 },
    ],
  },

  // ─── Saint-Louis ─────────────────────────────────────────────────────────────
  {
    ville: "Saint-Louis",
    quartiers: [
      { nom: "Guet Ndar",              latitude: 16.0150, longitude: -16.5020 },
      { nom: "Ndar Toute",             latitude: 16.0200, longitude: -16.4950 },
      { nom: "Sor",                    latitude: 16.0269, longitude: -16.5130 },
      { nom: "Île Nord",               latitude: 16.0400, longitude: -16.5000 },
      { nom: "Île Sud",                latitude: 16.0200, longitude: -16.5000 },
      { nom: "Eaux-Claires",           latitude: 16.0350, longitude: -16.4900 },
      { nom: "Pikine",                 latitude: 16.0100, longitude: -16.4850 },
      { nom: "Bango",                  latitude: 15.9953, longitude: -16.4722 },
      { nom: "Léona",                  latitude: 16.0220, longitude: -16.4980 },
      { nom: "Briquet",                latitude: 16.0290, longitude: -16.5050 },
      { nom: "Khor",                   latitude: 16.0450, longitude: -16.5100 },
      { nom: "Médina Courses",         latitude: 16.0320, longitude: -16.5000 },
    ],
  },

  // ─── Touba ────────────────────────────────────────────────────────────────────
  {
    ville: "Touba",
    quartiers: [
      { nom: "Touba Mosquée",          latitude: 14.8639, longitude: -15.8861 },
      { nom: "Darou Marnane",          latitude: 14.8611, longitude: -15.8822 },
      { nom: "Gouye Mbind",            latitude: 14.8750, longitude: -15.8750 },
      { nom: "Darou Khoudoss",         latitude: 14.8800, longitude: -15.8700 },
      { nom: "Keur Niang",             latitude: 14.8900, longitude: -15.9000 },
      { nom: "Darou Rahmane",          latitude: 14.8550, longitude: -15.8900 },
      { nom: "Ndamatou",               latitude: 14.8700, longitude: -15.8950 },
      { nom: "Touba Belel",            latitude: 14.8500, longitude: -15.8700 },
      { nom: "Darou Salam",            latitude: 14.8650, longitude: -15.8650 },
      { nom: "Guédé",                  latitude: 14.8750, longitude: -15.8950 },
    ],
  },

  // ─── Kaolack ─────────────────────────────────────────────────────────────────
  {
    ville: "Kaolack",
    quartiers: [
      { nom: "Médina Baye",            latitude: 14.1522, longitude: -16.0753 },
      { nom: "Léona",                  latitude: 14.1600, longitude: -16.0700 },
      { nom: "Sara Tidiane",           latitude: 14.1700, longitude: -16.0600 },
      { nom: "Grand Kaolack",          latitude: 14.1450, longitude: -16.0700 },
      { nom: "Ndorong",                latitude: 14.1400, longitude: -16.0600 },
      { nom: "Escale",                 latitude: 14.1500, longitude: -16.0750 },
      { nom: "Dialègne",               latitude: 14.1380, longitude: -16.0650 },
      { nom: "Touba Ndorong",          latitude: 14.1420, longitude: -16.0700 },
      { nom: "Bongré",                 latitude: 14.1550, longitude: -16.0800 },
      { nom: "HLM",                    latitude: 14.1650, longitude: -16.0650 },
    ],
  },

  // ─── Ziguinchor ──────────────────────────────────────────────────────────────
  {
    ville: "Ziguinchor",
    quartiers: [
      { nom: "Boudody",                latitude: 12.5608, longitude: -16.2758 },
      { nom: "Tilène",                 latitude: 12.5700, longitude: -16.2700 },
      { nom: "Lyndiane",               latitude: 12.5750, longitude: -16.2800 },
      { nom: "Ebo Town",               latitude: 12.5800, longitude: -16.2650 },
      { nom: "Kandialang",             latitude: 12.5500, longitude: -16.2600 },
      { nom: "Santiaba",               latitude: 12.5650, longitude: -16.2500 },
      { nom: "Diabir",                 latitude: 12.5450, longitude: -16.2700 },
      { nom: "Santhiaba",              latitude: 12.5620, longitude: -16.2580 },
      { nom: "Nema",                   latitude: 12.5750, longitude: -16.2750 },
      { nom: "HLM",                    latitude: 12.5850, longitude: -16.2600 },
    ],
  },

  // ─── Tambacounda ─────────────────────────────────────────────────────────────
  {
    ville: "Tambacounda",
    quartiers: [
      { nom: "Centre Ville",           latitude: 13.7714, longitude: -13.6687 },
      { nom: "Médina",                 latitude: 13.7750, longitude: -13.6600 },
      { nom: "Liberté",                latitude: 13.7800, longitude: -13.6700 },
      { nom: "Extension",              latitude: 13.7650, longitude: -13.6600 },
      { nom: "Plateau",                latitude: 13.7700, longitude: -13.6750 },
      { nom: "Pont",                   latitude: 13.7650, longitude: -13.6700 },
      { nom: "Sotrac",                 latitude: 13.7850, longitude: -13.6650 },
      { nom: "Dakar",                  latitude: 13.7700, longitude: -13.6800 },
    ],
  },

  // ─── Louga ────────────────────────────────────────────────────────────────────
  {
    ville: "Louga",
    quartiers: [
      { nom: "Centre Ville",           latitude: 15.6178, longitude: -16.2264 },
      { nom: "Médina",                 latitude: 15.6200, longitude: -16.2150 },
      { nom: "Gawane",                 latitude: 15.6250, longitude: -16.2200 },
      { nom: "Léona",                  latitude: 15.6100, longitude: -16.2150 },
      { nom: "Santhiaba",              latitude: 15.6050, longitude: -16.2300 },
      { nom: "Guet Ndar",              latitude: 15.6150, longitude: -16.2300 },
      { nom: "Extension",              latitude: 15.6300, longitude: -16.2100 },
    ],
  },

  // ─── Fatick ───────────────────────────────────────────────────────────────────
  {
    ville: "Fatick",
    quartiers: [
      { nom: "Centre Ville",           latitude: 14.3392, longitude: -16.4072 },
      { nom: "Diakhao",                latitude: 14.3500, longitude: -16.4000 },
      { nom: "Ndiop",                  latitude: 14.3300, longitude: -16.4000 },
      { nom: "Ndoffane",               latitude: 14.3250, longitude: -16.3950 },
      { nom: "Médina",                 latitude: 14.3450, longitude: -16.4100 },
      { nom: "HLM",                    latitude: 14.3400, longitude: -16.4150 },
    ],
  },

  // ─── Diourbel ─────────────────────────────────────────────────────────────────
  {
    ville: "Diourbel",
    quartiers: [
      { nom: "Centre Ville",           latitude: 14.6500, longitude: -16.2300 },
      { nom: "Médina",                 latitude: 14.6550, longitude: -16.2250 },
      { nom: "Léona",                  latitude: 14.6600, longitude: -16.2200 },
      { nom: "HLM",                    latitude: 14.6450, longitude: -16.2200 },
      { nom: "Cotac",                  latitude: 14.6520, longitude: -16.2350 },
    ],
  },

  // ─── Diamniadio ──────────────────────────────────────────────────────────────
  {
    ville: "Diamniadio",
    quartiers: [
      { nom: "Diamniadio Centre",      latitude: 14.7183, longitude: -17.1872 },
      { nom: "Pôle Urbain",            latitude: 14.7250, longitude: -17.1900 },
      { nom: "Technopole",             latitude: 14.7150, longitude: -17.1950 },
      { nom: "Lac Rose",               latitude: 14.7350, longitude: -17.2050 },
      { nom: "Sangalkam",              latitude: 14.7300, longitude: -17.2000 },
    ],
  },

  // ─── Saly Portudal ───────────────────────────────────────────────────────────
  {
    ville: "Saly Portudal",
    quartiers: [
      { nom: "Saly Centre",            latitude: 14.4603, longitude: -17.0186 },
      { nom: "Saly Village",           latitude: 14.4530, longitude: -17.0100 },
      { nom: "Saly North",             latitude: 14.4700, longitude: -17.0250 },
      { nom: "Résidence",              latitude: 14.4680, longitude: -17.0200 },
      { nom: "Saly Niakh Niakhal",     latitude: 14.4550, longitude: -17.0150 },
    ],
  },

  // ─── Kédougou ─────────────────────────────────────────────────────────────────
  {
    ville: "Kédougou",
    quartiers: [
      { nom: "Kédougou Centre",        latitude: 12.5550, longitude: -12.1750 },
      { nom: "Bantaco",                latitude: 12.5650, longitude: -12.1700 },
      { nom: "Ninéfescha",             latitude: 12.5500, longitude: -12.1800 },
      { nom: "Foukou",                 latitude: 12.5600, longitude: -12.1850 },
      { nom: "Médina",                 latitude: 12.5700, longitude: -12.1750 },
    ],
  },

  // ─── Thiès (Tivaouane) ────────────────────────────────────────────────────────
  {
    ville: "Tivaouane",
    quartiers: [
      { nom: "Centre Ville",           latitude: 14.9525, longitude: -16.8222 },
      { nom: "Médinatu Salam",         latitude: 14.9580, longitude: -16.8150 },
      { nom: "Darou Salam",            latitude: 14.9470, longitude: -16.8300 },
      { nom: "Médina",                 latitude: 14.9550, longitude: -16.8250 },
      { nom: "Taïba",                  latitude: 14.9490, longitude: -16.8200 },
    ],
  },

  // ─── Mbacké ──────────────────────────────────────────────────────────────────
  {
    ville: "Mbacké",
    quartiers: [
      { nom: "Mbacké Centre",          latitude: 14.7961, longitude: -15.9092 },
      { nom: "Médina",                 latitude: 14.8000, longitude: -15.9050 },
      { nom: "HLM",                    latitude: 14.7920, longitude: -15.9150 },
      { nom: "Darou Marnane",          latitude: 14.7900, longitude: -15.9000 },
      { nom: "Ndindy",                 latitude: 14.8050, longitude: -15.9100 },
    ],
  },

  // ─── Bambey ──────────────────────────────────────────────────────────────────
  {
    ville: "Bambey",
    quartiers: [
      { nom: "Bambey Centre",          latitude: 14.6989, longitude: -16.4556 },
      { nom: "Médina",                 latitude: 14.7020, longitude: -16.4500 },
      { nom: "Thiénaba",               latitude: 14.6950, longitude: -16.4600 },
      { nom: "HLM",                    latitude: 14.6970, longitude: -16.4520 },
    ],
  },

  // ─── Kaffrine ─────────────────────────────────────────────────────────────────
  {
    ville: "Kaffrine",
    quartiers: [
      { nom: "Kaffrine Centre",        latitude: 14.1050, longitude: -15.5503 },
      { nom: "Médina",                 latitude: 14.1100, longitude: -15.5450 },
      { nom: "HLM",                    latitude: 14.1000, longitude: -15.5550 },
      { nom: "Gare",                   latitude: 14.1080, longitude: -15.5480 },
    ],
  },

  // ─── Joal-Fadiouth ────────────────────────────────────────────────────────────
  {
    ville: "Joal-Fadiouth",
    quartiers: [
      { nom: "Joal Centre",            latitude: 14.1628, longitude: -16.8519 },
      { nom: "Fadiouth",               latitude: 14.1594, longitude: -16.8589 },
      { nom: "Keur Ndama",             latitude: 14.1700, longitude: -16.8450 },
      { nom: "Médina",                 latitude: 14.1650, longitude: -16.8500 },
    ],
  },

  // ─── Bignona ──────────────────────────────────────────────────────────────────
  {
    ville: "Bignona",
    quartiers: [
      { nom: "Bignona Centre",         latitude: 12.8089, longitude: -16.2297 },
      { nom: "Médina",                 latitude: 12.8150, longitude: -16.2250 },
      { nom: "Léona",                  latitude: 12.8050, longitude: -16.2350 },
      { nom: "Escale",                 latitude: 12.8100, longitude: -16.2300 },
    ],
  },
];
