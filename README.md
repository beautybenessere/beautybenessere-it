# BeautyBenessere.it

Portale/directory nazionale per attività Beauty e Benessere.

## Stato
v0.4 — Base portale pubblico con homepage, risultati lista + mappa e scheda attività pubblica demo.

## Dominio
beautybenessere.it

## Documentazione
La documentazione iniziale si trova nella cartella:

/documentazione

File principali:
- REGOLE_BEAUTYBENESSERE.md
- PROGETTO_CONTESTO_BEAUTYBENESSERE.md
- DESIGN_SYSTEM_BEAUTYBENESSERE.md
- DATABASE_MODEL_BEAUTYBENESSERE.md
- ROADMAP_BEAUTYBENESSERE.md
- STATO_LAVORI_BEAUTYBENESSERE.md


## Avvio locale

Installazione dipendenze:

```bash
npm install
```

Avvio ambiente sviluppo:

```bash
npm run dev
```

Build produzione:

```bash
npm run build
```

## Struttura iniziale

- `app/` — pagine Next.js App Router e stile globale
- `components/` — componenti UI pubblici
- `data/` — dati demo temporanei per categorie, attività in evidenza e risultati ricerca
- `lib/` — configurazione base del sito
- `documentazione/` — regole, contesto, design system, database model, roadmap e stato lavori

## Pagine disponibili

- `/` — homepage pubblica SEO-oriented
- `/risultati` — pagina risultati demo con filtri, lista attività e placeholder mappa
- `/attivita/[slug]` — scheda attività pubblica demo con dati strutturati LocalBusiness
