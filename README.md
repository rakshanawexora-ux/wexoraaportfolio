# Wexoraa Infotech — Next.js portfolio

A project-first, single-page portfolio built with Next.js App Router and React. All seven website projects render in the initial HTML, with their full original descriptions and all corresponding screenshots visible. No client-side content fetch is needed. Includes all four chat application screens, eight creative showcases, and seven campaign-result images from the supplied PDF. Images open in an accessible native dialog. The original logo and downloadable PDF are retained.

## Development

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm start
```

The build exports the complete site to `out/`, which can be deployed to any static host. `npm start` requires Python 3 and serves `out/` on localhost port 3000. For Vercel, import this repository as a Next.js project. Source assets are served from `public/assets/` using absolute URLs.

## Content

`app/page.js` imports the original PDF text at build time and explicitly maps every screenshot to its correct project. `app/gallery.js` handles only the image enlargement interaction. All work remains visible with JavaScript disabled. Non-portfolio marketing sections and generated hero artwork are omitted from the page.
