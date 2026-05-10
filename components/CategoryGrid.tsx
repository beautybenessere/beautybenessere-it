import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="section" id="categorie">
      <div className="section-heading">
        <span className="eyebrow">Categorie principali</span>
        <h2>Trova il servizio giusto per il tuo momento di benessere.</h2>
        <p>Una selezione chiara delle attività più cercate nel mondo Beauty, cura della persona e wellness.</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <a className="category-card" href={`/categorie/${category.slug}`} key={category.id}>
            <span className="category-icon">{category.icon}</span>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
