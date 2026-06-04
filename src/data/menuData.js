export const translations = {
  es: {
    // Hero
    heroSubtitle: "Repostería Gourmet",
    heroTagline: "Experiencia de Degustación",
    heroCta: "Descubrir el Menú",

    // Menu Nav
    navDegustacion: "Degustación",
    navConMaridaje: "con Maridaje",
    navSinMaridaje: "sin Maridaje",

    // Menu Section
    menuTitleMaridaje: "Menú Degustación",
    menuSubtitleMaridaje: "Con Maridaje",
    menuTitleDegustacion: "Menú Degustación",
    menuSubtitleDegustacion: "Sin Maridaje",
    totalLabelMaridaje: "Degustación con Maridaje",
    totalLabelDegustacion: "Degustación Completa",
    perPerson: "pp",

    // Menu Item
    pairingLabel: "Maridaje",

    // Footer
    footerNote: "Todos los precios incluyen IVA.\nLos platillos pueden contener alérgenos.\nConsulte con su mesero.",
    footerPpDisclaimer: "pp = precio por persona",
    footerAddress: "Comisión Federal de Electricidad 1545, 50150 Toluca de Lerdo, Méx.",
    footerCopyright: "Gardenia Repostería Gourmet",
  },
  en: {
    // Hero
    heroSubtitle: "Gourmet Pâtisserie",
    heroTagline: "Tasting Experience",
    heroCta: "Explore the Menu",

    // Menu Nav
    navDegustacion: "Tasting Menu",
    navConMaridaje: "with Pairing",
    navSinMaridaje: "without Pairing",

    // Menu Section
    menuTitleMaridaje: "Tasting Menu",
    menuSubtitleMaridaje: "With Pairing",
    menuTitleDegustacion: "Tasting Menu",
    menuSubtitleDegustacion: "Without Pairing",
    totalLabelMaridaje: "Tasting with Pairing",
    totalLabelDegustacion: "Complete Tasting",
    perPerson: "pp",

    // Menu Item
    pairingLabel: "Pairing",

    // Footer
    footerNote: "All prices include tax.\nDishes may contain allergens.\nPlease ask your server.",
    footerPpDisclaimer: "pp = price per person",
    footerAddress: "Comisión Federal de Electricidad 1545, 50150 Toluca de Lerdo, Méx.",
    footerCopyright: "Gardenia Gourmet Pâtisserie",
  },
};

export const menuItems = [
  {
    id: 1,
    name: { es: "Rosa y Lichi", en: "Rose & Lychee" },
    priceMaridaje: "$180",
    priceDegustacion: "$95",
    weight: "65GR",
    image: `${import.meta.env.BASE_URL}images/rosa-lichi.png`,
    description: {
      es: "Macaron de rosa damascena y lichi",
      en: "Damascus rose and lychee macaron",
    },
    details: {
      es: ["Ganache de rosa", "Centro de lichi fresco"],
      en: ["Rose ganache", "Fresh lychee center"],
    },
    pairing: {
      drink: { es: "Champagne Brut", en: "Brut Champagne" },
      volume: "90 Ml",
    },
    accentColor: "var(--color-rose)",
  },
  {
    id: 2,
    name: { es: "Lavanda y Limón Meyer", en: "Lavender & Meyer Lemon" },
    priceMaridaje: "$215",
    priceDegustacion: "$145",
    weight: "60GR",
    image: `${import.meta.env.BASE_URL}images/lavanda-limon.png`,
    description: {
      es: "Mousse de miel de lavanda",
      en: "Lavender honey mousse",
    },
    details: {
      es: ["Cremoso de limón Meyer", "Bizcocho de almendra"],
      en: ["Meyer lemon cremeux", "Almond sponge cake"],
    },
    pairing: {
      drink: {
        es: "Cóctel de ginebra, toronja y romero",
        en: "Gin, grapefruit & rosemary cocktail",
      },
      volume: "120 Ml",
    },
    accentColor: "var(--color-lavender)",
  },
  {
    id: 3,
    name: {
      es: "Cheesecake de Queso de Cabra y Azahar",
      en: "Goat Cheese & Orange Blossom Cheesecake",
    },
    priceMaridaje: "$315",
    priceDegustacion: "$175",
    weight: "70GR",
    image: `${import.meta.env.BASE_URL}images/cheesecake-azahar.png`,
    description: {
      es: "Cheesecake artesanal",
      en: "Artisan cheesecake",
    },
    details: {
      es: ["Miel de azahar", "Flores comestibles", "Nueces tostadas"],
      en: ["Orange blossom honey", "Edible flowers", "Toasted walnuts"],
    },
    pairing: {
      drink: { es: "Vino blanco seco", en: "Dry white wine" },
      volume: "60 Ml",
    },
    accentColor: "var(--color-gold)",
  },
  {
    id: 4,
    name: {
      es: "Granité de Saúco, Yuzu y Pepino",
      en: "Elderflower, Yuzu & Cucumber Granité",
    },
    priceMaridaje: "$345",
    priceDegustacion: "$195",
    weight: "80GR",
    image: `${import.meta.env.BASE_URL}images/granite-sauco.png`,
    description: {
      es: "Granité refrescante",
      en: "Refreshing granité",
    },
    details: {
      es: ["Saúco fresco", "Yuzu cítrico", "Pepino"],
      en: ["Fresh elderflower", "Citrus yuzu", "Cucumber"],
    },
    pairing: {
      drink: { es: "Sake frío", en: "Cold sake" },
      volume: "100 Ml",
    },
    accentColor: "var(--color-sage)",
  },
  {
    id: 5,
    name: { es: "Entremet de Té Jazmín", en: "Jasmine Tea Entremet" },
    priceMaridaje: "$525",
    priceDegustacion: "$295",
    weight: "110GR",
    image: `${import.meta.env.BASE_URL}images/entremet-jazmin.png`,
    description: {
      es: "Entremet de jazmín",
      en: "Jasmine entremet",
    },
    details: {
      es: ["Centro de pera", "Vainilla de Madagascar", "Crujiente de almendra"],
      en: ["Pear center", "Madagascar vanilla", "Almond crunch"],
    },
    pairing: {
      drink: { es: "Vino rosado dulce", en: "Sweet rosé wine" },
      volume: "75 Ml",
    },
    accentColor: "var(--color-blue)",
  },
  {
    id: 6,
    name: { es: "Petit Fours Botánicos", en: "Botanical Petit Fours" },
    priceMaridaje: "$195",
    priceDegustacion: "$115",
    weight: "35GR",
    image: `${import.meta.env.BASE_URL}images/petit-fours.png`,
    description: {
      es: "Selección botánica",
      en: "Botanical selection",
    },
    details: {
      es: [
        "Trufa de violeta",
        "Bombón de hibisco",
        "Financier de lavanda",
        "Pâte de fruit de jamaica",
      ],
      en: [
        "Violet truffle",
        "Hibiscus bonbon",
        "Lavender financier",
        "Jamaica fruit pâte",
      ],
    },
    pairing: {
      drink: { es: "Café de especialidad", en: "Specialty coffee" },
      volume: "65 Ml",
    },
    accentColor: "var(--color-lavender)",
  },
];

export const totalPrices = {
  maridaje: "$1,700",
  degustacion: "$1,000",
};
