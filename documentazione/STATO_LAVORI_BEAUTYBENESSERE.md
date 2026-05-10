# STATO LAVORI — BEAUTYBENESSERE.IT

## Data ultimo aggiornamento
2026-05-10

## Versione
v0.4 — Scheda attività pubblica demo

## Stato generale
Progetto avviato dalla documentazione iniziale. È stata creata una base Next.js per il portale pubblico SEO-oriented, con homepage demo, design system applicato, dati provvisori, prima pagina risultati con filtri/lista/mappa e prima scheda attività pubblica dinamica.

## Decisioni già prese
- Dominio scelto: beautybenessere.it
- Progetto su dominio separato rispetto a PrenotaQuiOra.
- Brand consigliato: Beauty Benessere.
- Payoff consigliato: La mappa italiana del Beauty e del Benessere.
- Il progetto sarà una directory/portale nazionale per attività Beauty e Benessere.
- Lato pubblico: design chiaro, elegante, premium, caldo, avorio/oro/salvia.
- Lato admin/gestore: stile simile a PrenotaQuiOra, blu notte + oro.
- Regola obbligatoria: evitare testi piccolissimi.
- Foto, loghi e media: Firebase Storage.
- Database: Firebase Firestore.
- Login admin/gestori: Firebase Auth.
- Mappe: Google Maps Platform.
- Front-end pubblico SEO: base iniziale impostata con Next.js, pronta per deploy su Vercel.
- Pagina risultati pubblica `/risultati` creata con layout lista + mappa e dati demo locali.
- Scheda attività pubblica dinamica `/attivita/[slug]` creata e collegata ai risultati.

## Step completati

### Step 001 — Base portale pubblico
- Base tecnica Next.js App Router.
- Homepage pubblica demo.
- Design system pubblico iniziale.
- Componenti homepage e dati demo iniziali.

### Step 002 — Pagina risultati lista + mappa
- Pagina `/risultati` SEO-oriented.
- Layout desktop con filtri, lista attività e area mappa.
- Layout responsive tablet/mobile.
- Filtri demo per categoria, città, regione, verificato e premium.
- Card attività premium e leggibili.
- Dati demo locali predisposti per futura migrazione Firestore.
- Placeholder mappa predisposto per Google Maps Platform.


### Step 003 — Scheda attività pubblica
- Route dinamica `/attivita/[slug]`.
- Collegamento dalle card risultati alla pagina dettaglio.
- Dataset demo ampliato con slug, contatti, sito, email, orari, servizi, punti di forza, informazioni utili e descrizione estesa.
- Scheda pubblica con hero, badge, contatti, servizi, orari, mappa demo e CTA “Rivendica attività”.
- Metadata dinamica e JSON-LD `LocalBusiness` per SEO locale.
- Layout responsive desktop/tablet/mobile.

## File creati nello Step 003
- app/attivita/[slug]/page.tsx
- documentazione/report/REPORT_STEP_003_SCHEDA_ATTIVITA_PUBBLICA.md

## File modificati nello Step 003
- app/globals.css
- components/ResultBusinessCard.tsx
- data/resultsBusinesses.ts
- README.md
- documentazione/STATO_LAVORI_BEAUTYBENESSERE.md
- documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md
- documentazione/ROADMAP_BEAUTYBENESSERE.md

## File eliminati nello Step 003
Nessuno.

## File creati nello Step 002
- app/risultati/page.tsx
- components/ResultsFilters.tsx
- components/ResultBusinessCard.tsx
- components/ResultsMap.tsx
- data/resultsBusinesses.ts
- documentazione/report/REPORT_STEP_002_PAGINA_RISULTATI.md

## File modificati nello Step 002
- app/globals.css
- components/Header.tsx
- components/SearchBox.tsx
- README.md
- documentazione/STATO_LAVORI_BEAUTYBENESSERE.md
- documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md
- documentazione/ROADMAP_BEAUTYBENESSERE.md

## File eliminati nello Step 002
Nessuno.


### Fix Step 003 — Design scheda attività premium
- Migliorato il design della scheda attività pubblica per renderlo più coerente con homepage e pagina risultati demo.
- Rifatto il pannello visuale destro della hero con composizione stile mappa, marker grafici, card informativa e mini-card riepilogative.
- Preservato il fix `tsconfig.json` con alias `@/*` necessario per deploy Vercel.

## File creati nel Fix Step 003 Design
- documentazione/report/REPORT_STEP_003_FIX_DESIGN_SCHEDA_PREMIUM.md

## File modificati nel Fix Step 003 Design
- app/attivita/[slug]/page.tsx
- app/globals.css
- documentazione/STATO_LAVORI_BEAUTYBENESSERE.md
- documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md

## File eliminati nel Fix Step 003 Design
Nessuno.

## Prossime attività consigliate
1. Creare modulo “Rivendica attività” dedicato.
2. Definire dataset demo più completo per attività/città/categorie.
3. Preparare configurazione Firebase client.
4. Creare modello iniziale per ricerca keyword/città/categoria.
5. Creare admin base per attività e categorie.
6. Preparare pagine SEO per categoria/città.

## Note importanti
Ogni futura modifica deve aggiornare i file `.md` quando introduce decisioni, regole o cambiamenti importanti.

## Step 003 — Fix design scheda attività editoriale premium
- Scheda attività rifatta in stile più vicino alle demo premium approvate.
- Hero fotografica/editoriale con logo-card attività, badge, località e azioni rapide.
- Layout contenuti a due colonne con descrizione, servizi, gallery demo, attività simili, contatti, orari, mappa e box rivendicazione.
- Preservato il fix stabile `tsconfig.json` per alias `@/*`.

## Step 004 — Restyle homepage master da screen 1
- Homepage pubblica rifatta come base visiva maestra del portale.
- Nuovo header globale più editoriale, con logo loto oro, navigazione pulita e bottone Accedi più leggero.
- Hero homepage in stile riferimento: testo a sinistra, atmosfera fotografica beauty/spa a destra e ricerca premium integrata.
- Sezione categorie rifatta con card compatte, icone oro e layout ordinato.
- Aggiunto teaser mappa con marker grafici e CTA “Apri la mappa”.
- Rifatta area città in evidenza con card visuali.
- Rifatto box gestori/rivendicazione attività in stile premium caldo.
- Aggiunta fascia segnali fiducia.
- Preservato il fix stabile `tsconfig.json` con `baseUrl` e `paths` per alias `@/*`.

## File creati nello Step 004
- documentazione/report/REPORT_STEP_004_RESTYLE_HOMEPAGE_MASTER.md

## File modificati nello Step 004
- app/page.tsx
- app/globals.css
- components/Header.tsx
- package.json
- README.md
- documentazione/STATO_LAVORI_BEAUTYBENESSERE.md
- documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md

## File eliminati nello Step 004
Nessuno.

## Fix Step 004 — Homepage hero più equilibrata
- Hero homepage rifinita per essere più vicina allo screen 1 di riferimento.
- Titolo ridotto e reso più proporzionato su desktop.
- Immagine hero resa meno zoomata, meno tagliata e più calda/luminosa.
- Overlay/gradiente alleggerito per mantenere leggibilità senza appesantire il visual.
- Box ricerca reso più compatto e premium.
- Spaziatura tra hero e categorie leggermente migliorata.
- Preservato il fix stabile `tsconfig.json` con `baseUrl` e `paths` per alias `@/*`.

## File creati nel Fix Step 004 Hero
- documentazione/report/REPORT_STEP_004_FIX_HOMEPAGE_HERO_EQUILIBRATA.md

## File modificati nel Fix Step 004 Hero
- app/globals.css
- documentazione/STATO_LAVORI_BEAUTYBENESSERE.md
- documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md

## File eliminati nel Fix Step 004 Hero
Nessuno.

## Fix Step 004 — Sostituzione immagine hero con foto 2
- Sostituita l’immagine hero della homepage con la foto 2 fornita dall’utente, più coerente con lo stile SPA premium dello screen 1.
- Aggiunta immagine locale in `public/images/home-hero-spa.jpeg` per evitare dipendenza da URL esterni.
- Regolate posizione e dimensione della hero per ridurre tagli e valorizzare meglio il soggetto.
- Preservati header, box ricerca, categorie, risultati, scheda attività e fix stabile `tsconfig.json` con alias `@/*`.

## File creati nel Fix Step 004 Foto 2
- public/images/home-hero-spa.jpeg
- documentazione/report/REPORT_STEP_004_FIX_SOSTITUZIONE_IMMAGINE_HERO_FOTO_2.md

## File modificati nel Fix Step 004 Foto 2
- app/globals.css
- documentazione/STATO_LAVORI_BEAUTYBENESSERE.md
- documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md

## File eliminati nel Fix Step 004 Foto 2
Nessuno.

## Step 004 — Fix hero foto non interrotta

- Corretta la visualizzazione della foto 2 nella hero homepage.
- La foto ora copre tutta l’area hero senza risultare interrotta sul lato destro.
- Preservato il fix stabile di `tsconfig.json` con `baseUrl` e alias `@/*`.

