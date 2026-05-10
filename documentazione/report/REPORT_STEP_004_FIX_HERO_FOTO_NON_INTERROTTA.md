# REPORT STEP 004 — Fix hero foto non interrotta

## Obiettivo
Correggere la visualizzazione della foto hero della homepage, che risultava interrotta/tagliata sul lato destro dopo la sostituzione con la foto 2.

## Interventi effettuati
- Aggiornata la gestione CSS dello sfondo hero.
- La foto hero ora usa `background-size: cover` per coprire tutta l’area disponibile.
- La posizione è stata regolata su centro/centro per evitare l’effetto immagine “interrotta”.
- Mantenuto overlay caldo e leggibile sulla parte sinistra.
- Preservato il fix stabile di `tsconfig.json` con `baseUrl` e alias `@/*`.

## File modificati
- `app/globals.css`
- `documentazione/STATO_LAVORI_BEAUTYBENESSERE.md`
- `documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md`

## File creati
- `documentazione/report/REPORT_STEP_004_FIX_HERO_FOTO_NON_INTERROTTA.md`

## File eliminati
Nessuno.
