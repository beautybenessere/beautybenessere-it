# REPORT STEP 004 — Fix sostituzione immagine hero con foto 2

## Obiettivo
Sostituire l’immagine hero attuale della homepage con la foto 2 fornita dall’utente, più coerente con il riferimento premium SPA scelto come master design della homepage BeautyBenessere.it.

## Interventi effettuati
- Aggiunta immagine hero locale in `public/images/home-hero-spa.jpeg`.
- Sostituita la sorgente immagine della hero homepage da URL esterno Unsplash a immagine locale del progetto.
- Regolati `background-position` e `background-size` della hero per valorizzare meglio il soggetto e ridurre tagli eccessivi.
- Mantenuto overlay caldo/luminoso per preservare la leggibilità del testo a sinistra.
- Mantenuto il box ricerca premium già impostato nello Step 004.
- Preservato `tsconfig.json` con fix stabile per alias `@/*`.

## File modificati
- `app/globals.css`
- `documentazione/STATO_LAVORI_BEAUTYBENESSERE.md`
- `documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md`

## File creati
- `public/images/home-hero-spa.jpeg`
- `documentazione/report/REPORT_STEP_004_FIX_SOSTITUZIONE_IMMAGINE_HERO_FOTO_2.md`

## File eliminati
Nessuno.

## Note
La homepage resta il riferimento visivo maestro per i prossimi riallineamenti di pagina risultati e scheda attività.
