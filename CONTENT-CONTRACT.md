# Recurring content contract

New blog, research, and alternatives articles live in `content/<type>/<slug>.md`. Existing hard-coded articles remain supported while routines migrate.

Each file requires `slug`, `title`, `description`, `published`, `updated`, `category`, `image`, and `imageAlt` front matter. `related` is an optional comma-separated list. The slug must equal the filename. Body content supports H2/H3 headings, paragraphs, bullet lists, bold text, and Markdown links.

Run `npm run content:thumbnails` after adding an article. The Python pipeline assigns one approved background using SHA-256 of the slug and writes `public/thumbnails/<slug>.svg` without an image API call. Then run `npm run content:validate`, `npm run build`, and `python scripts/live_health.py <base-url>`.

The handoff gate passes only when content validation, the production build, deployment, and live health checks pass. Google Search Console is intentionally excluded.
