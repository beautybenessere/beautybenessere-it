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
