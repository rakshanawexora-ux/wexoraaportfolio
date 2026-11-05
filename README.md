# Wexoraa portfolio

Minimal Next.js portfolio. Project descriptions open on click; all original screenshots remain visible. No PDF links or About Us section.

## Start

Requires Node.js 20.9+. Open the folder containing this `package.json` in VS Code.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Windows, macOS, and Linux supported; no Python needed. If npm reports `ENOSPC`, free disk space before retrying installation.

## Simple folder map

```text
src/
  app/                    Page layout and section order
  components/
    layout/               Header, footer, logo
    portfolio/            Project cards and page sections
    ui/                   Gallery, expandable content, shared headings
  data/
    projects.json         ADD / EDIT WEBSITE PROJECTS HERE
    site.json             Brand, navigation, main text, founder
    mobile-app.json       Mobile app content
    creative-works.json   Creative work
    campaigns.json        Campaign results
  styles/globals.css      Colors, spacing, responsive design
public/images/
  websites/               ADD WEBSITE SCREENSHOTS HERE
  brand/                  Logo
  mobile/                 App screens
  creatives/              Creative images
  campaigns/              Result screenshots
scripts/                  Content validation and local production server
docs/
  project-template.json   Copy this to add a project
  editing-content.md      Three-step editing guide
  archive/                Original source files; not served on the website
```

## Add a website project

1. Add its screenshots to `public/images/websites/`.
2. Copy [project-template.json](docs/project-template.json) into the array in `src/data/projects.json`. Fill in the name, URL, description, features, and image paths. Separate project objects with a comma.
3. Run `npm run check:projects`, then check the page with `npm run dev`.

The grid, project numbering, and website counts update automatically. No component editing or imports needed. Use an empty `features` array if there are no features to list.

Full examples: [Editing content](docs/editing-content.md).

## Build and preview

```sh
npm run build
npm start
```

Build validates projects and generates `out/` for static hosting. `npm start` serves it locally using Node. The repository can also be deployed with Vercel.

## Useful checks

```sh
npm run check:projects
npm run format
npm run format:check
```

Keep `package-lock.json` committed. `node_modules/`, `.next/`, and `out/` are generated folders and ignored by Git. `docs/archive/` is reference material, not live website content.
