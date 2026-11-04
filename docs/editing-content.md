# Editing portfolio content

## Update a website project

Open `src/data/website-projects.json`. Each project has named fields rather than positional arrays:

```json
{
  "id": "example-project",
  "name": "Example Project",
  "category": "Travel & tourism",
  "websiteUrl": "https://example.com/",
  "images": ["/images/websites/example-home.jpeg"],
  "content": [
    { "type": "paragraph", "text": "Describe the project here." },
    { "type": "paragraph", "text": "Key Features:" },
    { "type": "list", "items": ["Online booking", "Responsive design"] }
  ]
}
```

Place the image in `public/images/websites/`. In JSON, its URL starts with `/images/`, not `/public/images/`. Order the `images` array to control screenshot order. Do not use another project's screenshots.

To add a project, append a new object with a unique `id`. Website counts and project numbers update automatically. Keep the existing descriptions and features faithful to the source PDF unless the client supplies updated copy.

## Update the main USP

Open `src/data/site.json`, then edit `hero.uspTitle` and `hero.uspDescription`. This does not require changing the page component.

## Update other portfolio sections

- `mobile-app.json`: application name, category, screens, and content.
- `creative-works.json`: introduction and creative projects.
- `campaigns.json`: marketing introduction and campaign results. Keep social, Meta, and Google results in their correct entries.
- `portfolio-notes.json`: original introduction, services, closing message, and the note about inconsistent source counts.

Text uses `content` arrays of paragraph and list objects. `ContentBlocks.jsx` renders them without parsing text headings or searching the PDF at runtime.

## Check your changes

1. Run `npm run dev` and inspect the changed section on desktop and mobile.
2. Check every new screenshot under its correct project. Click to verify enlargement and press Escape to close.
3. Confirm website links and the PDF download.
4. Run `npm run format:check` and `npm run build` before committing.

The PDF is in `public/documents/wexoraa-portfolio.pdf`. The archival extraction in `src/data/original-document.json` is reference material; editing it does not change the live portfolio.
