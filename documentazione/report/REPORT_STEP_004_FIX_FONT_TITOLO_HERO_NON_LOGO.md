# REPORT STEP 004 — Fix font titolo hero homepage, senza modificare logo

## Obiettivo
Correggere lo scope del precedente intervento sul font: la modifica richiesta riguarda il titolo hero della homepage “Trova attività Beauty e Benessere vicino a te”, non il logo testuale dell'header.

## Interventi eseguiti
- Aggiunto font serif editoriale dedicato al titolo hero homepage tramite variabile `--font-hero`.
- Applicato il nuovo font solo a `.home-master-hero h1`.
- Ripristinato/forzato il logo testuale “Beauty Benessere” sul font titolo già previsto, senza ulteriori variazioni concettuali al logo.
- Non modificata la logica di navigazione.
- Non modificato `tsconfig.json`.

## File coinvolti
- `app/layout.tsx`
- `app/globals.css`
- `documentazione/STATO_LAVORI_BEAUTYBENESSERE.md`
- `documentazione/PROGETTO_CONTESTO_BEAUTYBENESSERE.md`

## Nota stabile
Da ora, quando viene richiesta una modifica al font dell’header/hero, distinguere sempre tra:
- logo/brand testuale;
- menu topbar;
- titolo hero;
- bottoni.

Il logo non deve essere modificato salvo richiesta esplicita.
