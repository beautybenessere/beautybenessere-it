import { categories } from "@/data/categories";

const cities = ["Milano", "Roma", "Firenze", "Torino", "Bologna", "Napoli"];
const regions = ["Lombardia", "Lazio", "Toscana", "Piemonte", "Emilia-Romagna", "Campania"];

export function ResultsFilters() {
  return (
    <aside className="results-filters" aria-label="Filtri ricerca attività">
      <div className="filter-heading">
        <span className="eyebrow">Filtri</span>
        <h2>Affina la ricerca</h2>
      </div>

      <form className="filter-form">
        <label>
          <span>Categoria</span>
          <select name="categoria" defaultValue="">
            <option value="">Tutte le categorie</option>
            {categories.map((category) => (
              <option value={category.slug} key={category.id}>{category.name}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Città</span>
          <select name="citta" defaultValue="">
            <option value="">Tutte le città</option>
            {cities.map((city) => (
              <option value={city.toLowerCase()} key={city}>{city}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Regione</span>
          <select name="regione" defaultValue="">
            <option value="">Tutte le regioni</option>
            {regions.map((region) => (
              <option value={region.toLowerCase()} key={region}>{region}</option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend>Badge attività</legend>
          <label className="check-row">
            <input type="checkbox" name="verificato" />
            <span>Solo attività verificate</span>
          </label>
          <label className="check-row">
            <input type="checkbox" name="premium" />
            <span>In evidenza Premium</span>
          </label>
        </fieldset>

        <button type="button">Applica filtri</button>
      </form>
    </aside>
  );
}
