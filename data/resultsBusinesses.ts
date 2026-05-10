export type ResultBusiness = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  city: string;
  province: string;
  region: string;
  address: string;
  description: string;
  longDescription: string;
  services: string[];
  highlights: string[];
  amenities: string[];
  plan: "Free" | "Verificato" | "Premium";
  isVerified: boolean;
  isPremium: boolean;
  hasOnlineBooking: boolean;
  phone: string;
  email: string;
  website: string;
  distanceLabel: string;
  priceLabel: string;
  openingHours: {
    day: string;
    hours: string;
  }[];
  coordinates: {
    lat: number;
    lng: number;
  };
};

export const resultsBusinesses: ResultBusiness[] = [
  {
    id: "essenza-beauty-spa-firenze",
    slug: "essenza-beauty-spa-firenze",
    name: "Essenza Beauty SPA",
    category: "SPA e benessere",
    categorySlug: "spa-benessere",
    city: "Firenze",
    province: "FI",
    region: "Toscana",
    address: "Via dei Giardini 18",
    description: "Rituali corpo, massaggi drenanti, percorsi relax e trattamenti viso in un ambiente elegante e riservato.",
    longDescription: "Essenza Beauty SPA è una scheda demo pensata per rappresentare una struttura premium del settore benessere. La pagina mostra come potranno essere organizzati servizi, contatti, orari, badge, mappa e invito alla rivendicazione della scheda da parte del gestore.",
    services: ["Massaggi", "Percorsi SPA", "Trattamenti corpo", "Trattamenti viso", "Rituali relax"],
    highlights: ["Ambiente riservato", "Percorsi benessere", "Consulenza personalizzata"],
    amenities: ["Cabine trattamento", "Area relax", "Prodotti professionali", "Gift card"],
    plan: "Premium",
    isVerified: true,
    isPremium: true,
    hasOnlineBooking: true,
    phone: "+39 055 000 000",
    email: "info@essenzabeauty.demo",
    website: "https://www.essenzabeauty.demo",
    distanceLabel: "Centro città",
    priceLabel: "€€€",
    openingHours: [
      { day: "Lunedì", hours: "Chiuso" },
      { day: "Martedì - Venerdì", hours: "09:30 - 19:30" },
      { day: "Sabato", hours: "09:00 - 18:00" },
      { day: "Domenica", hours: "Su appuntamento" }
    ],
    coordinates: { lat: 43.7696, lng: 11.2558 }
  },
  {
    id: "luce-estetica-studio-milano",
    slug: "luce-estetica-studio-milano",
    name: "Luce Estetica Studio",
    category: "Centro estetico",
    categorySlug: "centri-estetici",
    city: "Milano",
    province: "MI",
    region: "Lombardia",
    address: "Corso Magenta 42",
    description: "Trattamenti viso, epilazione, lash & brow e protocolli beauty personalizzati per una cura completa.",
    longDescription: "Luce Estetica Studio è una scheda demo per un centro estetico urbano. La struttura della pagina è predisposta per descrivere trattamenti, informazioni utili, canali di contatto e futura integrazione con dati Firestore.",
    services: ["Viso", "Epilazione", "Lash & Brow", "Manicure", "Consulenza beauty"],
    highlights: ["Trattamenti personalizzati", "Zona centrale", "Percorsi viso"],
    amenities: ["Pagamenti elettronici", "Consulenza su appuntamento", "Prodotti professionali"],
    plan: "Verificato",
    isVerified: true,
    isPremium: false,
    hasOnlineBooking: false,
    phone: "+39 02 0000 0000",
    email: "ciao@luceestetica.demo",
    website: "https://www.luceestetica.demo",
    distanceLabel: "Zona centrale",
    priceLabel: "€€",
    openingHours: [
      { day: "Lunedì", hours: "10:00 - 18:00" },
      { day: "Martedì - Venerdì", hours: "09:30 - 19:00" },
      { day: "Sabato", hours: "09:30 - 17:30" },
      { day: "Domenica", hours: "Chiuso" }
    ],
    coordinates: { lat: 45.4642, lng: 9.19 }
  },
  {
    id: "salone-aria-hair-roma",
    slug: "salone-aria-hair-roma",
    name: "Salone Aria Hair",
    category: "Parrucchiere",
    categorySlug: "parrucchieri",
    city: "Roma",
    province: "RM",
    region: "Lazio",
    address: "Via delle Rose 9",
    description: "Colore, taglio, piega e consulenza immagine con prodotti professionali e attenzione al dettaglio.",
    longDescription: "Salone Aria Hair è una scheda demo dedicata al mondo hair salon. Il layout valorizza stile, servizi e informazioni di contatto, con CTA pronte per prenotazione, chiamata e rivendicazione della scheda.",
    services: ["Colore", "Taglio", "Piega", "Trattamenti capelli", "Consulenza immagine"],
    highlights: ["Colorazioni professionali", "Consulenza stile", "Prodotti haircare"],
    amenities: ["Wi-Fi", "Pagamenti elettronici", "Prodotti professionali", "Accesso su appuntamento"],
    plan: "Premium",
    isVerified: true,
    isPremium: true,
    hasOnlineBooking: true,
    phone: "+39 06 0000 0000",
    email: "salone@ariahair.demo",
    website: "https://www.ariahair.demo",
    distanceLabel: "Vicino metro",
    priceLabel: "€€",
    openingHours: [
      { day: "Lunedì", hours: "Chiuso" },
      { day: "Martedì - Venerdì", hours: "09:00 - 19:30" },
      { day: "Sabato", hours: "09:00 - 18:30" },
      { day: "Domenica", hours: "Chiuso" }
    ],
    coordinates: { lat: 41.9028, lng: 12.4964 }
  },
  {
    id: "atelier-ink-piercing-torino",
    slug: "atelier-ink-piercing-torino",
    name: "Atelier Ink & Piercing",
    category: "Tattoo e piercing",
    categorySlug: "tattoo-piercing",
    city: "Torino",
    province: "TO",
    region: "Piemonte",
    address: "Via Po 21",
    description: "Studio professionale per tatuaggi, piercing e consulenze personalizzate con focus su igiene e stile.",
    longDescription: "Atelier Ink & Piercing è una scheda demo per studi tattoo e piercing. La pagina mette in evidenza informazioni chiare, contatti rapidi, igiene, stile e possibilità futura di arricchire la scheda con gallery e portfolio.",
    services: ["Tattoo", "Piercing", "Consulenza", "Cover up", "Micro tattoo"],
    highlights: ["Studio verificato", "Consulenze su appuntamento", "Focus igiene"],
    amenities: ["Materiale sterile", "Portfolio consultabile", "Pagamenti elettronici"],
    plan: "Verificato",
    isVerified: true,
    isPremium: false,
    hasOnlineBooking: false,
    phone: "+39 011 000 000",
    email: "studio@atelierink.demo",
    website: "https://www.atelierink.demo",
    distanceLabel: "Centro storico",
    priceLabel: "€€",
    openingHours: [
      { day: "Lunedì", hours: "Chiuso" },
      { day: "Martedì - Sabato", hours: "11:00 - 20:00" },
      { day: "Domenica", hours: "Su appuntamento" }
    ],
    coordinates: { lat: 45.0703, lng: 7.6869 }
  },
  {
    id: "salvia-centro-olistico-bologna",
    slug: "salvia-centro-olistico-bologna",
    name: "Salvia Centro Olistico",
    category: "Centro olistico",
    categorySlug: "centri-olistici",
    city: "Bologna",
    province: "BO",
    region: "Emilia-Romagna",
    address: "Via San Felice 64",
    description: "Trattamenti energetici, riequilibrio, meditazione guidata e percorsi naturali per il benessere personale.",
    longDescription: "Salvia Centro Olistico è una scheda demo per attività dedicate al benessere naturale. Il layout permette di presentare percorsi, servizi, atmosfera del centro, contatti e informazioni utili in modo chiaro e premium.",
    services: ["Reiki", "Meditazione", "Riequilibrio", "Trattamenti energetici", "Percorsi naturali"],
    highlights: ["Percorsi individuali", "Ambiente calmo", "Benessere naturale"],
    amenities: ["Sala meditazione", "Consulenze individuali", "Percorsi personalizzati"],
    plan: "Free",
    isVerified: false,
    isPremium: false,
    hasOnlineBooking: false,
    phone: "+39 051 000 000",
    email: "info@salviaolistico.demo",
    website: "https://www.salviaolistico.demo",
    distanceLabel: "Quartiere Saragozza",
    priceLabel: "€€",
    openingHours: [
      { day: "Lunedì - Venerdì", hours: "10:00 - 19:00" },
      { day: "Sabato", hours: "10:00 - 14:00" },
      { day: "Domenica", hours: "Chiuso" }
    ],
    coordinates: { lat: 44.4949, lng: 11.3426 }
  }
];

export function getBusinessBySlug(slug: string) {
  return resultsBusinesses.find((business) => business.slug === slug || business.id === slug);
}
