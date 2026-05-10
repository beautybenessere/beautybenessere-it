export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    id: "centri-estetici",
    name: "Centri estetici",
    slug: "centri-estetici",
    description: "Trattamenti viso, corpo, epilazione, rituali beauty e consulenze estetiche.",
    icon: "✦"
  },
  {
    id: "parrucchieri",
    name: "Parrucchieri",
    slug: "parrucchieri",
    description: "Saloni donna, uomo e unisex per taglio, colore, piega e trattamenti haircare.",
    icon: "◇"
  },
  {
    id: "barber-shop",
    name: "Barber shop",
    slug: "barber-shop",
    description: "Barba, capelli, grooming maschile e servizi premium per l'uomo.",
    icon: "◆"
  },
  {
    id: "spa-benessere",
    name: "SPA e benessere",
    slug: "spa-benessere",
    description: "Percorsi relax, massaggi, rituali corpo, wellness e momenti rigeneranti.",
    icon: "✺"
  },
  {
    id: "tattoo-piercing",
    name: "Tattoo e piercing",
    slug: "tattoo-piercing",
    description: "Studi professionali per tatuaggi, piercing e consulenze personalizzate.",
    icon: "✧"
  },
  {
    id: "olistici",
    name: "Centri olistici",
    slug: "centri-olistici",
    description: "Discipline naturali, trattamenti energetici, riequilibrio e cura della persona.",
    icon: "◌"
  }
];
