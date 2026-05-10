import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Categorie", href: "/#categorie" },
  { label: "Città", href: "/#città" },
  { label: "Risultati", href: "/risultati" },
  { label: "Per gestori", href: "/#per-gestori" },
  { label: "Rivendica attività", href: "/#rivendica-attività" }
];

function LotusMark() {
  return (
    <svg className="brand-lotus" viewBox="0 0 80 80" aria-hidden="true">
      <path d="M40 12C31 26 30 39 40 55C50 39 49 26 40 12Z" />
      <path d="M23 20C21 36 27 49 40 57C39 41 33 29 23 20Z" />
      <path d="M57 20C59 36 53 49 40 57C41 41 47 29 57 20Z" />
      <path d="M12 37C20 50 30 58 40 58C33 44 24 38 12 37Z" />
      <path d="M68 37C60 50 50 58 40 58C47 44 56 38 68 37Z" />
      <path d="M20 64H60" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Vai alla homepage BeautyBenessere.it">
        <span className="brand-mark"><LotusMark /></span>
        <span>
          <strong>{siteConfig.brandLabel}</strong>
          <small>{siteConfig.payoff}</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Navigazione principale">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-login" href="/#accesso">♙ Accedi</a>
    </header>
  );
}
