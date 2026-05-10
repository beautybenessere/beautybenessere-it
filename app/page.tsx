import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedBusinesses } from "@/components/FeaturedBusinesses";
import { Header } from "@/components/Header";
import { OwnerCta } from "@/components/OwnerCta";
import { SearchBox } from "@/components/SearchBox";
import { siteConfig } from "@/lib/site";

const featuredCities = ["Milano", "Roma", "Firenze", "Torino", "Napoli", "Bologna", "Genova", "Palermo"];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Portale nazionale Beauty & Benessere</span>
          <h1>{siteConfig.payoff}</h1>
          <p>
            Cerca centri estetici, parrucchieri, barber shop, tattoo studio, SPA, centri olistici e professionisti della cura della persona vicino a te.
          </p>
          <SearchBox />
          <div className="hero-trust">
            <span>Ricerca per categoria</span>
            <span>Vista mappa</span>
            <span>Schede verificabili</span>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Anteprima portale">
          <div className="map-preview" id="mappa">
            <span className="map-pin pin-one">Beauty</span>
            <span className="map-pin pin-two">SPA</span>
            <span className="map-pin pin-three">Hair</span>
          </div>
          <div className="hero-floating-card">
            <strong>BeautyBenessere.it</strong>
            <span>Directory locale, premium e SEO-oriented.</span>
          </div>
        </aside>
      </section>

      <CategoryGrid />

      <section className="section cities-section" id="città">
        <div className="section-heading compact">
          <span className="eyebrow">Città in evidenza</span>
          <h2>Parti dalle città più cercate e costruisci pagine SEO locali.</h2>
        </div>
        <div className="city-list">
          {featuredCities.map((city) => (
            <a href={`/citta/${city.toLowerCase()}`} key={city}>{city}</a>
          ))}
        </div>
      </section>

      <FeaturedBusinesses />
      <OwnerCta />

      <footer className="site-footer">
        <strong>BeautyBenessere.it</strong>
        <span>© 2026 — Portale nazionale Beauty e Benessere.</span>
      </footer>
    </main>
  );
}
