import type { ResultBusiness } from "@/data/resultsBusinesses";

type ResultsMapProps = {
  businesses: ResultBusiness[];
};

export function ResultsMap({ businesses }: ResultsMapProps) {
  return (
    <aside className="results-map-panel" aria-label="Anteprima mappa risultati">
      <div className="results-map-header">
        <div>
          <span className="eyebrow">Vista mappa</span>
          <h2>Attività sul territorio</h2>
        </div>
        <span className="map-count">{businesses.length} risultati</span>
      </div>

      <div className="results-map-placeholder">
        {businesses.map((business, index) => (
          <span
            className={`map-result-pin pin-${index + 1}`}
            key={business.id}
            aria-label={`${business.name}, ${business.city}`}
          >
            <span>{index + 1}</span>
          </span>
        ))}
        <div className="map-watermark">
          <strong>Google Maps Platform</strong>
          <span>Placeholder grafico. Collegamento reale previsto negli step successivi.</span>
        </div>
      </div>
    </aside>
  );
}
