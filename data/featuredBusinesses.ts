export type FeaturedBusiness = {
  id: string;
  name: string;
  category: string;
  city: string;
  region: string;
  description: string;
  tags: string[];
  plan: "Free" | "Verificato" | "Premium";
};

export const featuredBusinesses: FeaturedBusiness[] = [
  {
    id: "demo-essenza-spa",
    name: "Essenza Beauty SPA",
    category: "SPA e benessere",
    city: "Firenze",
    region: "Toscana",
    description: "Rituali corpo, massaggi e percorsi relax in un ambiente elegante e riservato.",
    tags: ["Massaggi", "Percorsi SPA", "Trattamenti corpo"],
    plan: "Premium"
  },
  {
    id: "demo-luce-estetica",
    name: "Luce Estetica Studio",
    category: "Centro estetico",
    city: "Milano",
    region: "Lombardia",
    description: "Trattamenti viso, epilazione e protocolli beauty personalizzati.",
    tags: ["Viso", "Epilazione", "Lash & Brow"],
    plan: "Verificato"
  },
  {
    id: "demo-salone-aria",
    name: "Salone Aria Hair",
    category: "Parrucchiere",
    city: "Roma",
    region: "Lazio",
    description: "Colore, taglio e consulenza immagine con prodotti professionali.",
    tags: ["Colore", "Taglio", "Piega"],
    plan: "Premium"
  }
];
