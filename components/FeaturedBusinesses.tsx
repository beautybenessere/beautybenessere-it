import { featuredBusinesses } from "@/data/featuredBusinesses";

export function FeaturedBusinesses() {
  return (
    <section className="section featured-section">
      <div className="section-heading compact">
        <span className="eyebrow">In evidenza</span>
        <h2>Prime schede demo per definire card, badge e layout risultati.</h2>
      </div>
      <div className="business-grid">
        {featuredBusinesses.map((business) => (
          <article className="business-card" key={business.id}>
            <div className="business-cover" aria-hidden="true">
              <span>{business.category}</span>
            </div>
            <div className="business-content">
              <div className="business-topline">
                <span className="badge">{business.plan}</span>
                <span>{business.city}, {business.region}</span>
              </div>
              <h3>{business.name}</h3>
              <p>{business.description}</p>
              <div className="tag-list">
                {business.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="business-actions">
                <a href={`/attivita/${business.id}`}>Apri scheda</a>
                <a href="#mappa">Indicazioni</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
