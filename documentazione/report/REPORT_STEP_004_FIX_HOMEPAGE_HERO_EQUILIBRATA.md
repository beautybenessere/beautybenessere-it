# REPORT STEP 004 FIX — Homepage hero più equilibrata

## Obiettivo
Rifinire la homepage master di BeautyBenessere.it per renderla più vicina allo screen 1 di riferimento, con hero più equilibrata, immagine meno zoomata, titolo più proporzionato e box ricerca più premium.

## Interventi effettuati
- Ridotta leggermente l'altezza della hero per ottenere una proporzione più elegante.
- Ridotta la dimensione massima del titolo hero su desktop.
- Migliorati line-height e letter-spacing del titolo per renderlo più editoriale e meno ingombrante.
- Alleggerito il testo descrittivo sotto il titolo.
- Modificata la gestione del background hero:
  - immagine meno zoomata;
  - posizione più controllata verso destra;
  - overlay più morbido e caldo;
  - gradiente meno pesante.
- Reso il box ricerca più compatto:
  - larghezza più equilibrata;
  - altezza campi ridotta;
  - bottone ricerca più proporzionato;
  - ombra più leggera.
- Ridotta leggermente la spaziatura tra hero e sezione categorie.
- Aggiornate regole responsive per mantenere la leggibilità su tablet e mobile.

## Vincoli rispettati
- Nessun collegamento Firebase introdotto.
- Nessuna integrazione Google Maps reale introdotta.
- Pagina risultati non modificata.
- Scheda attività non modificata.
- Preservato `tsconfig.json` con alias `@/*`:
  - `"baseUrl": "."`
  - `"paths": { "@/*": ["./*"] }`

## File modificati
- `app/globals.css`
- `documentazione/STATO_LAVORI_BEAUTYBENESSERE.md`
- `documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md`

## File creati
- `documentazione/report/REPORT_STEP_004_FIX_HOMEPAGE_HERO_EQUILIBRATA.md`

## File eliminati
Nessuno.
