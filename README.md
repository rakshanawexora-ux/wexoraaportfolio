# Wexoraa Infotech portfolio

Responsive, single-page portfolio built from the supplied 26-page PDF. Original logo, project screenshots, mobile application images, creative work and campaign evidence are extracted into `assets/`. Full verbatim extracted text is available in expandable sections, alongside the original downloadable PDF. The hero sculpture is generated artwork; original brand assets remain in the header and footer.

## Run

Requires Python 3; no package installation or build required.

```sh
cd /workspace/wexoraaportfolio
npm run dev
```

Serves on port 3000, bound to localhost. Any static host can serve this directory. Keep `assets/document.json` accessible; run via HTTP rather than opening the HTML directly.

## Checks

`npm run check` checks JavaScript syntax. Browser checks verified seven projects, three travel filter results, image modal opening/closing, all seven original-document groups, no broken loaded images, no JavaScript errors and no horizontal overflow at 390px.

The PDF does not provide an email address or phone number, so none are invented. The collaboration section presents the founder and original portfolio. Source figures are reproduced as supplied, including the differing campaign-company counts in the original document.
