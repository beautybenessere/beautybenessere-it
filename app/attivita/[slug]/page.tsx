import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { getBusinessBySlug, resultsBusinesses } from "@/data/resultsBusinesses";
import { siteConfig } from "@/lib/site";

type ActivityPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return resultsBusinesses.map((business) => ({ slug: business.slug }));
}

export function generateMetadata({ params }: ActivityPageProps): Metadata {
  const business = getBusinessBySlug(params.slug);

  if (!business) {
    return {
      title: `Attività non trovata | ${siteConfig.name}`
    };
  }

  const title = `${business.name} a ${business.city} | ${siteConfig.name}`;
  const description = `${business.category} a ${business.city}: ${business.description}`;
  const url = `/attivita/${business.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "it_IT",
      type: "website"
    }
  };
}

export default function ActivityPage({ params }: ActivityPageProps) {
  const business = getBusinessBySlug(params.slug);

  if (!business) {
    notFound();
  }

  const mapQuery = encodeURIComponent(`${business.name} ${business.address} ${business.city}`);
  const phoneHref = `tel:${business.phone.replaceAll(" ", "")}`;
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    url: `https://www.beautybenessere.it/attivita/${business.slug}`,
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceLabel,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: "IT"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng
    },
    openingHoursSpecification: business.openingHours.map((item) => ({
      "@type": "OpeningHoursSpecification",
      name: item.day,
      description: item.hours
    }))
  };

  return (
    <main>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="activity-hero" aria-label={`Scheda attività ${business.name}`}>
        <div className="activity-hero-copy">
          <a className="back-link" href="/risultati">← Torna ai risultati</a>
          <div className="activity-category-row">
            <span className="eyebrow">Scheda attività</span>
            <span>{business.category}</span>
          </div>

          <h1>{business.name}</h1>
          <p>{business.description}</p>

          <div className="activity-badges" aria-label="Badge attività">
            {business.isVerified && <span className="badge verified-badge">Verificato</span>}
            {business.isPremium && <span className="badge premium-badge">Premium</span>}
            {business.hasOnlineBooking && <span className="badge booking-badge">Prenotazione online disponibile</span>}
          </div>

          <div className="activity-hero-actions">
            <a className="activity-primary-action" href={phoneHref}>Chiama ora</a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>Indicazioni</a>
            {business.hasOnlineBooking ? <a href="#prenota">Prenota</a> : <a href="#rivendica">Rivendica attività</a>}
          </div>
        </div>

        <div className="activity-photo-panel" aria-hidden="true">
          <div className="activity-photo-main">
            <span>{business.category}</span>
          </div>
          <div className="activity-photo-grid">
            <span>Ambiente</span>
            <span>Servizi</span>
            <span>Dettagli</span>
          </div>
        </div>
      </section>

      <section className="activity-layout">
        <div className="activity-main-column">
          <article className="activity-card">
            <span className="eyebrow">Descrizione</span>
            <h2>Informazioni su {business.name}</h2>
            <p>{business.longDescription}</p>
          </article>

          <article className="activity-card">
            <span className="eyebrow">Servizi</span>
            <h2>Servizi principali</h2>
            <div className="activity-service-grid">
              {business.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </article>

          <article className="activity-card">
            <span className="eyebrow">Punti di forza</span>
            <h2>Perché sceglierla</h2>
            <div className="activity-highlight-grid">
              {business.highlights.map((highlight) => (
                <div key={highlight}>
                  <strong>{highlight}</strong>
                  <p>Informazione demo predisposta per essere sostituita dai dati reali caricati dal gestore o dall&apos;admin.</p>
                </div>
              ))}
            </div>
          </article>

          <article className="activity-card" id="rivendica">
            <div className="claim-card-content">
              <div>
                <span className="eyebrow">Gestore attività</span>
                <h2>Questa è la tua attività?</h2>
                <p>
                  Rivendica la scheda per aggiornare informazioni, servizi, orari, foto e contatti quando sarà attiva l&apos;area gestore di BeautyBenessere.it.
                </p>
              </div>
              <a className="activity-primary-action" href="mailto:claim@beautybenessere.it">Rivendica attività</a>
            </div>
          </article>
        </div>

        <aside className="activity-side-column" aria-label="Informazioni rapide attività">
          <section className="activity-info-card">
            <h2>Contatti</h2>
            <dl>
              <div>
                <dt>Telefono</dt>
                <dd><a href={phoneHref}>{business.phone}</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${business.email}`}>{business.email}</a></dd>
              </div>
              <div>
                <dt>Sito</dt>
                <dd><a href={business.website}>{business.website.replace("https://", "")}</a></dd>
              </div>
            </dl>
          </section>

          <section className="activity-info-card">
            <h2>Dove si trova</h2>
            <p className="activity-address">{business.address}, {business.city} ({business.province})</p>
            <div className="activity-mini-map" aria-label="Mappa demo attività">
              <span>{business.city}</span>
            </div>
            <a className="side-link" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>Apri indicazioni</a>
          </section>

          <section className="activity-info-card">
            <h2>Orari</h2>
            <div className="hours-list">
              {business.openingHours.map((item) => (
                <div key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.hours}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="activity-info-card">
            <h2>Informazioni utili</h2>
            <div className="activity-chip-list">
              <span>{business.plan}</span>
              <span>{business.priceLabel}</span>
              <span>{business.distanceLabel}</span>
              {business.amenities.map((amenity) => (
                <span key={amenity}>{amenity}</span>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <footer className="site-footer">
        <strong>BeautyBenessere.it</strong>
        <span>© 2026 — Portale nazionale Beauty e Benessere.</span>
      </footer>
    </main>
  );
}
