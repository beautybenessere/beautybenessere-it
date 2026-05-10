import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ResultBusinessCard } from "@/components/ResultBusinessCard";
import { ResultsFilters } from "@/components/ResultsFilters";
import { ResultsMap } from "@/components/ResultsMap";
import { SearchBox } from "@/components/SearchBox";
import { resultsBusinesses } from "@/data/resultsBusinesses";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Risultati ricerca | ${siteConfig.name}`,
  description: "Consulta la prima lista demo delle attività Beauty e Benessere con filtri per categoria, città, regione e badge attività."
};

export default function ResultsPage() {
  return (
    <main>
      <Header />

      <section className="results-hero">
        <div>
          <span className="eyebrow">Ricerca attività</span>
          <h1>Trova il centro giusto vicino a te.</h1>
          <p>
            Prima pagina risultati demo con lista attività, filtri leggibili e area mappa predisposta per il futuro collegamento a Google Maps Platform e Firestore.
          </p>
        </div>
        <SearchBox />
      </section>

      <section className="results-shell" aria-label="Risultati ricerca Beauty e Benessere">
        <ResultsFilters />

        <div className="results-list-column">
          <div className="results-list-header">
            <div>
              <span className="eyebrow">Risultati demo</span>
              <h2>{resultsBusinesses.length} attività trovate</h2>
            </div>
            <span className="results-note">Dati locali provvisori</span>
          </div>

          <div className="results-list">
            {resultsBusinesses.map((business, index) => (
              <ResultBusinessCard business={business} index={index} key={business.id} />
            ))}
          </div>
        </div>

        <ResultsMap businesses={resultsBusinesses} />
      </section>

      <footer className="site-footer">
        <strong>BeautyBenessere.it</strong>
        <span>© 2026 — Portale nazionale Beauty e Benessere.</span>
      </footer>
    </main>
  );
}
