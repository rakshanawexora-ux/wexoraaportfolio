# Add a project in three steps

## 1. Add screenshots

Copy images into `public/images/websites/`. Use clear filenames such as `my-project-home.jpg` and `my-project-admin.jpg`.

## 2. Add a project record

Open `src/data/projects.json`. Copy `docs/project-template.json` and paste it as another object in the existing array. Add a comma between objects.

```json
{
  "id": "my-project",
  "name": "My Project",
  "category": "Business website",
  "websiteUrl": "https://example.com/",
  "images": ["/images/websites/my-project-home.jpg", "/images/websites/my-project-admin.jpg"],
  "description": ["Explain what the project does.", "Add another paragraph if needed."],
  "featuresTitle": "Key Features:",
  "features": ["Online booking", "Responsive design"]
}
```

- `id`: unique lowercase words separated by hyphens. It becomes the card's anchor.
- `images`: URLs start with `/images/`, not `/public/images/`. The first image is the cover; the others appear below it.
- `description`: one string per paragraph.
- `features`: one string per bullet. Use `[]` for no features.
- Array order controls project order. Counts, numbering, cards, and links update automatically.

## 3. Validate and preview

```sh
npm run check:projects
npm run dev
```

The validator reports missing images, invalid URLs, duplicate IDs, or malformed content. It also runs automatically during `npm run build`.

Inspect the card on desktop and mobile. Open details, enlarge images, and confirm the website link. Then run `npm run format` and `npm run build` before committing.

## Other changes

| What to edit                         | File                           |
| ------------------------------------ | ------------------------------ |
| Logo, navigation, hero copy, founder | `src/data/site.json`           |
| Mobile app                           | `src/data/mobile-app.json`     |
| Creative works                       | `src/data/creative-works.json` |
| Campaign results                     | `src/data/campaigns.json`      |
| Section order                        | `src/app/page.jsx`             |
| Design                               | `src/styles/globals.css`       |

Mobile, creative, and campaign content uses paragraph/list blocks rendered by `ContentBlocks.jsx`. Website projects use plain description and feature arrays to keep adding projects straightforward. Original PDF material is preserved in `docs/archive/`; it is not served by the website or read by page components.

## Projects without a confirmed link or screenshot

Use `"websiteUrl": null` until the client supplies a confirmed URL. The card will not display a guessed or broken link. For a temporary typographic cover, use `"images": []`, add a `coverTitle`, and optionally set `coverStyle` to `warm` or `orange`. Add the actual screenshot paths to `images` when the files are available.

## Long-form case studies

A project can include a `caseStudy` array. Each section has a `title`, optional `heading`, and `paragraphs`. A solution section can also have `steps` with `label`, `heading`, and `text`. See TopGrade in `src/data/projects.json` for a complete example. Case studies remain inside the same click-to-open details panel.
