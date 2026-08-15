# Changelog

### 2026-08-15 00:28
- Changed: Set up GitHub Pages deployment for the Astro site.
  - Added remote `origin` pointing to `https://github.com/er2-ai/er2-ai.github.io.git` and pushed the local history (renamed local branch `master` → `main`).
  - Added `site: 'https://er2-ai.github.io'` to `astro.config.mjs`.
  - Added `.github/workflows/deploy.yml` using the official Astro GitHub Pages workflow (`withastro/action@v3` + `actions/deploy-pages@v4`, Node 22).
  - Switched GitHub Pages source from the legacy `main` branch build to GitHub Actions (`build_type: workflow`) via the Pages API.
- Why: The `er2-ai/er2-ai.github.io` repository existed but had no site content. The Astro site now builds and deploys automatically on every push to `main` and is live at https://er2-ai.github.io/.
