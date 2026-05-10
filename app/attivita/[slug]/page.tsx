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

const serviceIcons = ["✦", "◒", "♢", "✧", "○", "☾"];
const galleryLabels = ["Reception", "Cabina", "Trattamento", "Relax", "Prodotti"];

export default function ActivityPage({ params }: ActivityPageProps) {
  const business = getBusinessBySlug(params.slug);

  if (!business) {
    notFound();
  }

  const mapQuery = encodeURIComponent(`${business.name} ${business.address} ${business.city}`);
  const phoneHref = `tel:${business.phone.replaceAll(" ", "")}`;
  const whatsappHref = `https://wa.me/${business.phone.replace(/\D/g, "")}`;
  const similarBusinesses = resultsBusinesses
    .filter((item) => item.slug !== business.slug)
    .slice(0, 4);

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
    <main className="activity-profile-page">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="activity-profile-hero" aria-label={`Scheda attività ${business.name}`}>
        <div className="activity-cover-art" aria-hidden="true" />
        <div className="activity-cover-overlay" />

        <div className="activity-logo-card" aria-hidden="true">
          <span>{business.name.split(" ").slice(0, 2).map((word) => word[0]).join("")}</span>
          <strong>{business.name}</strong>
          <small>{business.category}</small>
        </div>

        <div className="activity-hero-content">
          <a className="activity-back-pill" href="/risultati">← Torna ai risultati</a>
          <span className="activity-category-pill">{business.category}</span>
          <h1>{business.name}</h1>
          <p className="activity-location">⌖ {business.city}, {business.region}</p>
          <div className="activity-badges" aria-label="Badge attività">
            {business.isVerified && <span className="badge verified-badge">Verificato</span>}
            {business.isPremium && <span className="badge premium-badge">Premium</span>}
            {business.hasOnlineBooking && <span className="badge booking-badge">Prenotazione online</span>}
          </div>
        </div>
      </section>

      <nav className="activity-action-bar" aria-label="Azioni rapide attività">
        <a href={phoneHref}>☏ Chiama</a>
        <a href={whatsappHref}>WhatsApp</a>
        <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>⌖ Indicazioni</a>
        <a className="activity-action-primary" href={business.hasOnlineBooking ? "#prenota" : "#rivendica"}>▣ Prenota</a>
        <a href={business.website}>◎ Sito web</a>
      </nav>

      <section className="activity-profile-layout">
        <div className="activity-profile-main">
          <article className="activity-profile-section">
            <h2>Descrizione</h2>
            <p>{business.longDescription}</p>
          </article>

          <article className="activity-profile-section">
            <div className="activity-section-title-row">
              <h2>Servizi</h2>
              <a href="#prenota">Vedi tutti</a>
            </div>
            <div className="activity-service-icons">
              {business.services.map((service, index) => (
                <span key={service}>
                  <i>{serviceIcons[index % serviceIcons.length]}</i>
                  <strong>{service}</strong>
                </span>
              ))}
            </div>
          </article>

          <article className="activity-profile-section activity-gallery-section">
            <div className="activity-section-title-row">
              <h2>Galleria foto</h2>
              <a href="#foto">Vedi tutte le foto</a>
            </div>
            <div className="activity-gallery-grid" id="foto">
              {galleryLabels.map((label, index) => (
                <span key={label} className={`gallery-tile gallery-tile-${index + 1}`}>
                  <small>{label}</small>
                </span>
              ))}
            </div>
          </article>

          <article className="activity-profile-section">
            <h2>Punti di forza</h2>
            <div className="activity-strength-list">
              {business.highlights.map((highlight) => (
                <span key={highlight}>✓ {highlight}</span>
              ))}
            </div>
          </article>

          <article className="activity-profile-section">
            <div className="activity-section-title-row">
              <h2>Attività simili nei dintorni</h2>
              <a href="/risultati">Vedi tutte</a>
            </div>
            <div className="activity-similar-grid">
              {similarBusinesses.map((item) => (
                <a key={item.slug} href={`/attivita/${item.slug}`}>
                  <span>{item.name.split(" ").slice(0, 2).map((word) => word[0]).join("")}</span>
                  <strong>{item.name}</strong>
                  <small>{item.city} · {item.distanceLabel}</small>
                  <em>{item.priceLabel}</em>
                </a>
              ))}
            </div>
          </article>
        </div>

        <aside className="activity-profile-side" aria-label="Informazioni rapide attività">
          <section className="activity-claim-box" id="rivendica">
            <span>♕</span>
            <h2>Sei il proprietario di questa attività?</h2>
            <p>Rivendica la scheda per gestire orari, servizi, foto, contatti e visibilità.</p>
            <a href="mailto:claim@beautybenessere.it">Rivendica la scheda</a>
          </section>

          <section className="activity-side-card">
            <h2>Orari</h2>
            <div className="activity-hours-table">
              {business.openingHours.map((item) => (
                <div key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.hours}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="activity-side-card">
            <h2>Contatti</h2>
            <ul className="activity-contact-list">
              <li>☏ <a href={phoneHref}>{business.phone}</a></li>
              <li>✉ <a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li>◎ <a href={business.website}>{business.website.replace("https://", "")}</a></li>
              <li>⌖ {business.address}, {business.city} ({business.province})</li>
            </ul>
          </section>

          <section className="activity-map-card">
            <div className="activity-map-visual" aria-label="Mappa demo attività">
              <span>{business.city}</span>
            </div>
          </section>

          <section className="activity-side-card activity-save-card">
            <a href="#preferiti">♡ Salva nei preferiti</a>
            <a href="#condividi">⌯ Condividi</a>
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
