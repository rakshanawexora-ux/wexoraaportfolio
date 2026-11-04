# Wexoraa Infotech portfolio

A Next.js App Router portfolio with seven website projects, four chat app screens, eight creative showcases, and seven campaign-result images. Project content is rendered on the server, so it stays visible without JavaScript. The image viewer is the only client component.

## Run locally

Install Node.js 20.9 or later. Open this repository's folder in VS Code: the correct folder contains `package.json`, `src/`, and `public/`.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. These commands work in Windows PowerShell, macOS, and Linux. Python is not required.

If installation reports `ENOSPC`, free disk space before retrying. Do not run the dev server until dependency installation completes.

## Folder structure

```text
wexoraaportfolio/
├── src/
│   ├── app/
│   │   ├── layout.jsx               # Page metadata and global stylesheet
│   │   └── page.jsx                 # Assembles the portfolio sections
│   ├── components/
│   │   ├── layout/                  # Brand, Header, Footer
│   │   ├── portfolio/               # One component for each portfolio section
│   │   └── ui/                      # ContentBlocks, ImageGallery, SectionHeading
│   ├── data/                        # Editable text, project details, image paths
│   └── styles/
│       └── globals.css              # Formatted CSS with responsive layouts
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── websites/
│   │   ├── mobile/
│   │   ├── creatives/
│   │   ├── campaigns/
│   │   └── unused/                  # Optional generated artwork; not on the page
│   └── documents/                   # Original portfolio PDF
├── scripts/
│   └── serve.mjs                    # Cross-platform static production server
├── docs/
│   └── editing-content.md           # Practical content-editing guide
├── next.config.mjs
├── package.json
└── package-lock.json
```

## Where to make changes

| Change                                         | File                                 |
| ---------------------------------------------- | ------------------------------------ |
| Brand, navigation, main USP, founder           | `src/data/site.json`                 |
| Website names, URLs, descriptions, screenshots | `src/data/website-projects.json`     |
| Chat application content and screens           | `src/data/mobile-app.json`           |
| Creative work and client names                 | `src/data/creative-works.json`       |
| Social media, Meta Ads, Google Ads results     | `src/data/campaigns.json`            |
| Original introduction and closing notes        | `src/data/portfolio-notes.json`      |
| Page section order                             | `src/app/page.jsx`                   |
| Colors, spacing, typography, responsive styles | `src/styles/globals.css`             |
| Image enlargement behavior                     | `src/components/ui/ImageGallery.jsx` |

See [Editing content](docs/editing-content.md) for examples. `src/data/original-document.json` is an archival extraction of the supplied PDF, not a live data source. Its original image IDs are preserved for reference; use the descriptive image paths in the editable data files for the website.

## Production

```sh
npm run build
npm start
```

The build generates `out/`. `npm start` serves that directory on localhost port 3000 using Node. You can also deploy `out/` to a static host or import the repository into Vercel. To change the server port in PowerShell: `$env:PORT=3001; npm start`.

## Formatting

```sh
npm run format
npm run format:check
```

Keep `package-lock.json` committed. Do not commit `node_modules/`, `.next/`, or `out/`.
