import { Header } from "@/components/Header";

const masterCategories = [
  { name: "Centri estetici", icon: "✧", href: "/risultati?categoria=centri-estetici" },
  { name: "Parrucchieri", icon: "✂", href: "/risultati?categoria=parrucchieri" },
  { name: "Barber Shop", icon: "▥", href: "/risultati?categoria=barber-shop" },
  { name: "Tattoo Studio", icon: "⌁", href: "/risultati?categoria=tattoo-studio" },
  { name: "SPA", icon: "✺", href: "/risultati?categoria=spa" },
  { name: "Centri Olistici", icon: "◐", href: "/risultati?categoria=centri-olistici" },
  { name: "Piercing Studio", icon: "◌", href: "/risultati?categoria=piercing-studio" },
  { name: "Solarium", icon: "☼", href: "/risultati?categoria=solarium" }
];

const featuredCities = [
  { name: "Milano", tone: "duomo" },
  { name: "Roma", tone: "roma" },
  { name: "Torino", tone: "torino" },
  { name: "Firenze", tone: "firenze" },
  { name: "Bologna", tone: "bologna" }
];

const trustItems = [
  { title: "Attività verificate", text: "Solo attività selezionate e di qualità" },
  { title: "Recensioni autentiche", text: "Leggi le esperienze di chi è già stato" },
  { title: "Vicino a te", text: "Trova le migliori attività nella tua zona" },
  { title: "Sempre aggiornato", text: "Informazioni semplici, attuali e affidabili" }
];

export default function Home() {
  return (
    <main className="home-master">
      <Header />

      <section className="home-master-hero" aria-labelledby="home-title">
        <div className="home-master-copy">
          <span className="home-master-kicker">Il tuo benessere, vicino a te</span>
          <h1 id="home-title">Trova attività Beauty e Benessere vicino a te</h1>
          <p>
            Scopri i migliori centri e professionisti selezionati in tutta Italia.
          </p>

          <form className="home-master-search" action="/risultati">
            <label>
              <span>Cosa cerchi?</span>
              <input name="q" placeholder="Es. Massaggio, Parrucchiere, SPA..." />
            </label>
            <label>
              <span>Dove?</span>
              <input name="dove" placeholder="Es. Milano, Roma, Torino..." />
            </label>
            <button type="submit">⌕ Cerca</button>
          </form>
        </div>
      </section>

      <section className="home-master-section home-master-categories" id="categorie" aria-labelledby="categories-title">
        <div className="home-master-section-heading centered">
          <h2 id="categories-title">Esplora le categorie</h2>
        </div>
        <div className="home-master-category-row">
          {masterCategories.map((category) => (
            <a className="home-master-category-card" href={category.href} key={category.name}>
              <span aria-hidden="true">{category.icon}</span>
              <strong>{category.name}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="home-master-map" id="mappa" aria-labelledby="map-title">
        <div className="home-master-map-copy">
          <span>Scopri, esplora, scegli</span>
          <h2 id="map-title">Tutte le attività sulla mappa</h2>
          <p>
            Esplora la mappa interattiva e trova le migliori attività Beauty e Benessere intorno a te.
          </p>
          <a href="/risultati">⌖ Apri la mappa</a>
        </div>
        <div className="home-master-map-visual" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, index) => (
            <span className={`home-master-pin pin-${index + 1}`} key={index}>✺</span>
          ))}
        </div>
      </section>

      <section className="home-master-lower-grid">
        <div className="home-master-cities" id="città" aria-labelledby="cities-title">
          <div className="home-master-section-heading centered">
            <h2 id="cities-title">Città in evidenza</h2>
          </div>
          <div className="home-master-city-grid">
            {featuredCities.map((city) => (
              <a className={`home-master-city-card ${city.tone}`} href={`/risultati?citta=${city.name.toLowerCase()}`} key={city.name}>
                <span>{city.name}</span>
              </a>
            ))}
          </div>
          <a className="home-master-all-cities" href="/risultati">Scopri tutte le città →</a>
        </div>

        <aside className="home-master-owner" id="per-gestori" aria-labelledby="owner-title">
          <span id="rivendica-attività" className="anchor-target" aria-hidden="true" />
          <span className="home-master-owner-icon">▤</span>
          <div>
            <p>Sei un gestore?</p>
            <h2 id="owner-title">Rivendica la tua attività</h2>
            <span>
              Ottieni più visibilità, raggiungi nuovi clienti e gestisci la tua presenza su Beauty Benessere.
            </span>
            <a href="/#per-gestori">▤ Rivendica la tua attività</a>
          </div>
        </aside>
      </section>

      <section className="home-master-trust" aria-label="Vantaggi BeautyBenessere.it">
        {trustItems.map((item) => (
          <article key={item.title}>
            <span aria-hidden="true">♡</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="site-footer home-master-footer">
        <strong>Beauty Benessere</strong>
        <span>© 2026 — La mappa italiana del Beauty e del Benessere.</span>
      </footer>
    </main>
  );
}
