# PROGETTO CONTESTO — BEAUTYBENESSERE.IT

## Nome progetto
BeautyBenessere.it

## Dominio principale
beautybenessere.it

## Posizionamento
BeautyBenessere.it è un portale/directory nazionale per trovare, confrontare e contattare attività Beauty e Benessere in Italia.

## Payoff consigliato
La mappa italiana del Beauty e del Benessere.

## Descrizione breve
Trova centri estetici, parrucchieri, barber shop, tattoo studio, piercing studio, SPA, centri olistici, centri abbronzatura, nail center, massaggiatori e professionisti della cura della persona vicino a te.

## Settori inclusi
- Centri estetici
- Parrucchieri
- Barber shop
- Tattoo studio
- Piercing studio
- SPA
- Centri benessere
- Centri olistici
- Centri abbronzatura
- Nail center
- Lash & Brow studio
- Dermopigmentazione
- Make-up artist
- Massaggiatori
- Medicina estetica
- Solarium
- Saloni unisex

## Obiettivo del progetto
Creare un portale pubblico verticale dedicato a Beauty e Benessere, con:
- ricerca per keyword;
- ricerca per città;
- ricerca per regione;
- ricerca per categoria;
- vista mappa;
- schede attività;
- rivendicazione scheda da parte del gestore;
- gestione foto, logo, servizi, orari e contatti;
- piani premium e priorità nei risultati;
- possibile integrazione futura con PrenotaQuiOra.

## Collegamento con PrenotaQuiOra
BeautyBenessere.it deve essere un progetto separato come dominio e brand, ma può diventare un canale commerciale collegato a PrenotaQuiOra.

Possibile logica futura:
- BeautyBenessere.it genera visibilità e lead;
- PrenotaQuiOra gestisce prenotazioni, clienti e calendario;
- le attività che usano PrenotaQuiOra possono avere badge “Prenotazione online disponibile”.


## Decisione tecnica iniziale v0.2
È stata creata una prima base tecnica con Next.js App Router per il front-end pubblico SEO-oriented.

Motivazione:
- buona compatibilità con Vercel;
- gestione semplice di pagine pubbliche SEO;
- predisposizione a route dinamiche per categorie, città e schede attività;
- possibilità di integrare successivamente Firebase Auth, Firestore, Storage e dashboard gestore/admin.

La base v0.2 usa dati demo locali in `data/` in attesa di collegamento a Firestore.


## Decisione tecnica v0.3 — Pagina risultati
È stata creata la prima pagina risultati pubblica in `/risultati`.

La pagina usa ancora dati demo locali e non comunica con Firebase. La struttura è però predisposta per una futura collection Firestore delle attività.

Elementi presenti:
- hero SEO-oriented della pagina risultati;
- barra ricerca collegata a `/risultati`;
- filtri demo per categoria, città, regione, verificato e premium;
- lista attività con card premium e leggibili;
- placeholder mappa con marker grafici;
- layout responsive desktop/tablet/mobile.

Vincoli confermati:
- nessun collegamento Firebase nello Step 002;
- nessun collegamento reale Google Maps nello Step 002;
- testi sempre leggibili, con base 16px dove possibile e senza microtesti sotto 14px.


## Decisione tecnica v0.4 — Scheda attività pubblica
È stata creata la prima scheda attività pubblica dinamica in `/attivita/[slug]`.

La pagina usa ancora dati demo locali, ma è predisposta per diventare una scheda reale alimentata da Firestore.

Elementi presenti:
- metadata dinamica per ogni attività;
- JSON-LD `LocalBusiness` per SEO locale;
- hero attività con badge verificato, premium e prenotazione online;
- descrizione attività;
- servizi principali;
- punti di forza;
- contatti rapidi;
- orari;
- informazioni utili;
- mappa demo;
- CTA “Rivendica attività”.

Vincoli confermati:
- nessun collegamento Firebase nello Step 003;
- nessuna integrazione reale Google Maps nello Step 003;
- dati demo locali in attesa di modello Firestore definitivo;
- scheda già collegata dalla pagina risultati tramite slug.


## Decisione UI v0.4.1 — Fix design scheda attività
Dopo il primo deploy dello Step 003, la scheda attività pubblica è stata rifinita perché il design risultava meno premium rispetto alle demo approvate di homepage e pagina risultati.

Aggiornamenti confermati:
- il blocco destro della hero deve essere più ricco e scenografico, non vuoto;
- usare composizione stile mappa/marker coerente con il concept directory nazionale;
- mantenere palette avorio, bianco caldo, oro soft, verde salvia e antracite;
- preservare leggibilità e font size minimi del design system;
- non regredire `tsconfig.json`: deve restare con `baseUrl` e `paths` per gli alias `@/*`.

## Decisione UI — Scheda attività pubblica premium
La scheda attività pubblica deve seguire lo stile delle demo approvate: visual editoriale ampio, atmosfera beauty/wellness, logo-card attività, azioni rapide ben visibili e contenuti organizzati come una directory premium. Evitare hero troppo vuote o solo astratte: la scheda deve sembrare una pagina attività reale, elegante e ricca.

## File stabile protetto
`tsconfig.json` deve mantenere il fix per Vercel e alias `@/*`:
- `"baseUrl": "."`
- `"paths": { "@/*": ["./*"] }`
Non regredire questo file negli ZIP futuri.

## Decisione UI v0.5 — Homepage master design
La homepage condivisa nello screen 1 diventa il riferimento visivo maestro del portale BeautyBenessere.it.

Indicazioni confermate:
- homepage editoriale, calda, elegante e fotografica;
- header più raffinato con logo in stile loto/benessere e accenti oro;
- hero con immagine/atmosfera spa, testo grande a sinistra e ricerca integrata;
- categorie in card compatte con icone oro;
- teaser mappa con marker e CTA;
- città in evidenza con card visuali;
- box gestori/rivendicazione attività in stile premium;
- risultati e scheda attività dovranno essere riallineati a questa homepage master nei prossimi step.

Vincoli confermati:
- non collegare ancora Firebase;
- non introdurre Google Maps reale nello Step 004;
- preservare il fix stabile di `tsconfig.json` con `baseUrl` e `paths` per alias `@/*`.

## Decisione UI v0.5.1 — Hero homepage più equilibrata
La homepage master deve mantenere lo stile dello screen 1, ma con proporzioni più controllate:
- titolo grande ma non eccessivo;
- immagine hero calda, luminosa e meno zoomata;
- overlay morbido, non troppo pesante;
- box ricerca compatto, elegante e ben integrato;
- passaggio verso le categorie più armonioso.

La homepage resta il riferimento visivo da cui allineare risultati e scheda attività nei prossimi step.

Nota tecnica stabile: `tsconfig.json` non deve regredire e deve mantenere `baseUrl` e `paths` per gli alias `@/*`.

## Decisione UI v0.5.2 — Immagine hero homepage ufficiale
La foto 2 fornita dall’utente è stata scelta come immagine hero della homepage master perché più coerente con il posizionamento SPA/relax premium del portale.

Indicazioni confermate:
- usare immagine locale nel progetto, non URL esterno;
- mantenere atmosfera calda, luminosa, elegante e benessere;
- evitare tagli eccessivi o zoom troppo aggressivi nella hero;
- preservare testo leggibile a sinistra e ricerca premium integrata;
- homepage master resta la base visiva per riallineare risultati e scheda attività.

Nota tecnica stabile: `tsconfig.json` non deve regredire e deve mantenere `baseUrl` e `paths` per gli alias `@/*`.

## Step 004 — Fix hero foto non interrotta

- Corretta la visualizzazione della foto 2 nella hero homepage.
- La foto ora copre tutta l’area hero senza risultare interrotta sul lato destro.
- Preservato il fix stabile di `tsconfig.json` con `baseUrl` e alias `@/*`.


## Decisione UI — Header premium globale

L'header pubblico di BeautyBenessere.it è stato allineato alla direzione dello screen 1: identità più editoriale, font logo serif elegante, icona loto valorizzata, menu più pulito e bottone Accedi leggero con bordo oro soft. Questo header diventa riferimento globale per le pagine pubbliche del portale.

Nota tecnica stabile: `tsconfig.json` deve mantenere sempre `baseUrl` e `paths` per gli alias `@/*`; non sovrascrivere con versioni precedenti.


## Fix Step 004 — Header più vicino allo screen 1 e hero più nitida
- Rafforzato il font del logo testuale con serif editoriale più marcato.
- Rifinita la topbar globale per avvicinarla al riferimento premium.
- Ridotto l'overlay sulla parte destra della hero, mantenendo il gradiente solo dove serve alla leggibilità del testo.
- Patch senza modifiche a tsconfig.json.

## Fix Step 004 — Topbar dropdown Categorie e Città

La topbar pubblica è stata corretta per usare dropdown premium su **Categorie** e **Città**. Le voci sono statiche demo e rimandano provvisoriamente alla pagina `/risultati`.

Categorie demo incluse:
Centri estetici, Parrucchieri, Barber Shop, Tattoo Studio, Piercing Studio, SPA, Centri Olistici, Solarium, Nail Center, Massaggiatori, Lash & Brow, Medicina estetica.

Città demo incluse:
Milano, Roma, Torino, Firenze, Bologna, Napoli, Genova, Venezia, Verona, Palermo, Tutte le città.

Nota tecnica:
- dropdown realizzati senza Firebase e senza logiche dinamiche;
- `tsconfig.json` resta protetto e non è stato incluso nella patch.
