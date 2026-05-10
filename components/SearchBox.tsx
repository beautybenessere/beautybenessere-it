export function SearchBox() {
  return (
    <form className="search-box" action="/risultati" method="get" aria-label="Cerca attività Beauty e Benessere">
      <label>
        <span>Cosa cerchi?</span>
        <input name="q" type="search" placeholder="Es. centro estetico, massaggio, parrucchiere" />
      </label>
      <label>
        <span>Dove?</span>
        <input name="dove" type="search" placeholder="Città, provincia o regione" />
      </label>
      <button type="submit">Cerca ora</button>
    </form>
  );
}
