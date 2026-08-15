# Changelog

### 2026-08-15 17:26
- Changed: Tightened the site's Tufte fidelity and minimalism (formatting only,
  no content added).
  - Fixed: sidenotes rendered a margin note with no in-text reference. The
    remark plugin now emits a `<span class="sidenote-number">` before each
    sidenote, so the superscript number in the text and the number in the
    margin increment from the same counter. Margin notes stay unnumbered.
  - Typography: body set to 1.15rem/1.55 (ET Book runs small for its point
    size); measure narrowed 34rem → 31rem for a ~62–68 character line;
    old-style figures enabled site-wide.
  - Ragged right: `text-align: justify` + `hyphens: auto` replaced with
    left-aligned text. Browser justification opened rivers at this measure.
  - Removed non-data ink: the filled/rounded code panel (and Shiki's inline
    background), the dashed placeholder border, the decorative rule under
    section headings, and the blockquote indent bar.
  - Replaced synthesized `font-variant: small-caps` in `h3` and table headers
    with letterspaced uppercase — ET Book has no true small-caps cut.
  - Accessibility: `--faint` #9a9a92 → #75756c, lifting contrast on paper from
    2.82:1 to 4.63:1 (was below WCAG AA for the meta lines and muted topics).
- Why: The scaffolding was already Tufte-shaped, but the signature feature —
  the numbered sidenote — was silently broken, and several boxes, rules, and
  fills were adding ink without adding information.

### 2026-08-15 00:41
- Changed: Rebuilt the site as a Tufte-inspired research notebook.
  - Added the **Intelligence Stack**: a persistent, collapsible left sidebar
    (`src/data/stack.ts`) mapping intelligence from Philosophy through
    Mathematics, Physics, Computation, Hardware, Systems, Software, AI,
    Machine Learning, Neural Networks, and on to General Intelligence and
    Open Questions. Topics with notes become links; topics without stay muted.
  - Added article pages (`/articles/[slug]/`) with breadcrumbs through the
    stack, sidenotes, margin notes, KaTeX math (build-time rendered), code,
    tables, figures, footnotes, references, and related cross-links.
  - Added section pages (`/stack/[section]/`) and topic pages
    (`/stack/[section]/[topic]/`).
  - Added a sparse home page: title, placeholder description, the stack as a
    map, recent notes, and questions under investigation.
  - Typography: self-hosted ET Book, narrow text column, generous margins,
    monochromatic palette. Zero client-side JavaScript (collapsible sections
    use `<details>`; sidenotes use a custom remark plugin + CSS).
  - Added `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/markdown-remark`,
    `remark-math`, `rehype-katex`, `katex`; added `WRITING.md` authoring guide.
- Why: The site should feel like a research notebook or digital monograph —
  an evolving map of intelligence from first principles to implementation —
  rather than a blog or portfolio.

### 2026-08-15 00:28
- Changed: Set up GitHub Pages deployment for the Astro site.
  - Added remote `origin` pointing to `https://github.com/er2-ai/er2-ai.github.io.git` and pushed the local history (renamed local branch `master` → `main`).
  - Added `site: 'https://er2-ai.github.io'` to `astro.config.mjs`.
  - Added `.github/workflows/deploy.yml` using the official Astro GitHub Pages workflow (`withastro/action@v3` + `actions/deploy-pages@v4`, Node 22).
  - Switched GitHub Pages source from the legacy `main` branch build to GitHub Actions (`build_type: workflow`) via the Pages API.
- Why: The `er2-ai/er2-ai.github.io` repository existed but had no site content. The Astro site now builds and deploys automatically on every push to `main` and is live at https://er2-ai.github.io/.
