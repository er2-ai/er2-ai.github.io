# Intelligence

A research notebook — an evolving map of intelligence, from first principles
to implementation.

Built with [Astro](https://astro.build). Static output, no client-side
JavaScript, KaTeX rendered at build time, ET Book typography.

- **The Intelligence Stack** (left sidebar) is the site's primary navigation:
  seventeen sections from *Philosophy* to *General Intelligence*. Topics
  become links as notes are written.
- **Notes** are Markdown or MDX files in `src/content/articles/`. See
  [WRITING.md](WRITING.md) for the authoring guide.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to ./dist/
```

## Deploy

Pushing to `main` deploys to <https://er2-ai.github.io> via GitHub Actions
(`.github/workflows/deploy.yml`).
