import type { ResultBusiness } from "@/data/resultsBusinesses";

type ResultBusinessCardProps = {
  business: ResultBusiness;
  index: number;
};

export function ResultBusinessCard({ business, index }: ResultBusinessCardProps) {
  return (
    <article className="result-card">
      <div className="result-cover" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="result-content">
        <div className="result-meta-row">
          <span>{business.category}</span>
          <span>{business.city}, {business.region}</span>
        </div>

        <div className="result-title-row">
          <h2>{business.name}</h2>
          <div className="result-badges" aria-label="Badge attività">
            {business.isVerified && <span className="badge verified-badge">Verificato</span>}
            {business.isPremium && <span className="badge premium-badge">Premium</span>}
            {business.hasOnlineBooking && <span className="badge booking-badge">Prenotazione online</span>}
          </div>
        </div>

        <p className="result-address">{business.address} · {business.province} · {business.distanceLabel}</p>
        <p className="result-description">{business.description}</p>

        <div className="tag-list">
          {business.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>

        <div className="result-actions">
          <a className="primary-result-action" href={`/attivita/${business.id}`}>Apri scheda</a>
          <a href={`tel:${business.phone.replaceAll(" ", "")}`}>Chiama</a>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.name} ${business.address} ${business.city}`)}`}>Indicazioni</a>
        </div>
      </div>
    </article>
  );
}
