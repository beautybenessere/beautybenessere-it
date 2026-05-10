import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Categorie", href: "/#categorie" },
  { label: "Città", href: "/#città" },
  { label: "Risultati", href: "/risultati" },
  { label: "Per gestori", href: "/#per-gestori" },
  { label: "Rivendica attività", href: "/#rivendica-attività" }
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Vai alla homepage BeautyBenessere.it">
        <span className="brand-mark">BB</span>
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
      <a className="header-login" href="/#accesso">Accedi</a>
    </header>
  );
}
