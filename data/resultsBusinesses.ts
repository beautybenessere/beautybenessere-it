export type ResultBusiness = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  city: string;
  province: string;
  region: string;
  address: string;
  description: string;
  services: string[];
  plan: "Free" | "Verificato" | "Premium";
  isVerified: boolean;
  isPremium: boolean;
  hasOnlineBooking: boolean;
  phone: string;
  distanceLabel: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export const resultsBusinesses: ResultBusiness[] = [
  {
    id: "essenza-beauty-spa-firenze",
    name: "Essenza Beauty SPA",
    category: "SPA e benessere",
    categorySlug: "spa-benessere",
    city: "Firenze",
    province: "FI",
    region: "Toscana",
    address: "Via dei Giardini 18",
    description: "Rituali corpo, massaggi drenanti, percorsi relax e trattamenti viso in un ambiente elegante e riservato.",
    services: ["Massaggi", "Percorsi SPA", "Trattamenti corpo"],
    plan: "Premium",
    isVerified: true,
    isPremium: true,
    hasOnlineBooking: true,
    phone: "+39 055 000 000",
    distanceLabel: "Centro città",
    coordinates: { lat: 43.7696, lng: 11.2558 }
  },
  {
    id: "luce-estetica-studio-milano",
    name: "Luce Estetica Studio",
    category: "Centro estetico",
    categorySlug: "centri-estetici",
    city: "Milano",
    province: "MI",
    region: "Lombardia",
    address: "Corso Magenta 42",
    description: "Trattamenti viso, epilazione, lash & brow e protocolli beauty personalizzati per una cura completa.",
    services: ["Viso", "Epilazione", "Lash & Brow"],
    plan: "Verificato",
    isVerified: true,
    isPremium: false,
    hasOnlineBooking: false,
    phone: "+39 02 0000 0000",
    distanceLabel: "Zona centrale",
    coordinates: { lat: 45.4642, lng: 9.19 }
  },
  {
    id: "salone-aria-hair-roma",
    name: "Salone Aria Hair",
    category: "Parrucchiere",
    categorySlug: "parrucchieri",
    city: "Roma",
    province: "RM",
    region: "Lazio",
    address: "Via delle Rose 9",
    description: "Colore, taglio, piega e consulenza immagine con prodotti professionali e attenzione al dettaglio.",
    services: ["Colore", "Taglio", "Piega"],
    plan: "Premium",
    isVerified: true,
    isPremium: true,
    hasOnlineBooking: true,
    phone: "+39 06 0000 0000",
    distanceLabel: "Vicino metro",
    coordinates: { lat: 41.9028, lng: 12.4964 }
  },
  {
    id: "atelier-ink-piercing-torino",
    name: "Atelier Ink & Piercing",
    category: "Tattoo e piercing",
    categorySlug: "tattoo-piercing",
    city: "Torino",
    province: "TO",
    region: "Piemonte",
    address: "Via Po 21",
    description: "Studio professionale per tatuaggi, piercing e consulenze personalizzate con focus su igiene e stile.",
    services: ["Tattoo", "Piercing", "Consulenza"],
    plan: "Verificato",
    isVerified: true,
    isPremium: false,
    hasOnlineBooking: false,
    phone: "+39 011 000 000",
    distanceLabel: "Centro storico",
    coordinates: { lat: 45.0703, lng: 7.6869 }
  },
  {
    id: "salvia-centro-olistico-bologna",
    name: "Salvia Centro Olistico",
    category: "Centro olistico",
    categorySlug: "centri-olistici",
    city: "Bologna",
    province: "BO",
    region: "Emilia-Romagna",
    address: "Via San Felice 64",
    description: "Trattamenti energetici, riequilibrio, meditazione guidata e percorsi naturali per il benessere personale.",
    services: ["Reiki", "Meditazione", "Riequilibrio"],
    plan: "Free",
    isVerified: false,
    isPremium: false,
    hasOnlineBooking: false,
    phone: "+39 051 000 000",
    distanceLabel: "Quartiere Saragozza",
    coordinates: { lat: 44.4949, lng: 11.3426 }
  }
];
