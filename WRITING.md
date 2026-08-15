# Writing Guide

This site is a research notebook: an evolving map of intelligence from first
principles to implementation. Notes live inside the **Intelligence Stack**, a
seventeen-section taxonomy defined in `src/data/stack.ts`.

## Adding a note

Create a file in `src/content/articles/`, e.g. `src/content/articles/landauers-principle.md`.

```md
---
title: A Note on Something
description: A one-sentence summary shown in lists. Optional.
date: 2026-08-15
status: note          # note | study | question
section: physics      # section id, see below
topic: landauers-principle   # topic id within that section
tags: [thermodynamics]       # optional
related: [another-slug]      # optional cross-links to other articles
references:                  # optional, rendered as a References list
  - Author, *Title*, Publisher, Year.
---

Article body…
```

Rules:

- `section` and `topic` must match ids in `src/data/stack.ts`. The build fails
  with a helpful message if they do not.
- `date` is required; it drives ordering and the "Recent Notes" list.
- `status: question` entries appear under "Questions Under Investigation" on
  the home page.
- `related` takes article slugs (the file path without extension) and renders
  as cross-links at the end of the article.

Section ids: `philosophy`, `mathematics`, `physics`, `computation`,
`digital-foundations`, `hardware`, `systems`, `software`, `classical-ai`,
`machine-learning`, `neural-networks`, `scaling`, `cognitive-architectures`,
`biological`, `measurement`, `general-intelligence`, `open-questions`.

A topic "lights up" in the sidebar and the stack map as soon as it has at
least one note; topics without notes remain muted.

## Markdown features

### Sidenotes and margin notes

```
A claim that deserves a caveat{- The caveat, set in the right margin. -}.
A paragraph introduced by{-- an unnumbered margin note. --} something.
```

- Sidenotes are numbered automatically, margin notes are not.
- Keep them to a single paragraph. No `$…$` math or Markdown links inside
  (raw HTML works).
- On narrow screens both collapse into the text flow.

### Mathematics

KaTeX, rendered at build time (no client JavaScript):

```
Inline math: $E = mc^2$.

Display math:

$$
P(x) = \frac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right) \tag{1}
$$
```

Use `\tag{1}` to number a display equation. Long equations scroll
horizontally on small screens.

### Code

Standard fenced blocks; language tags enable syntax highlighting:

````md
```python
def softmax(x):
    e = exp(x - max(x))
    return e / sum(e)
```
````

### Tables

GitHub-flavored tables are rendered in booktabs style (top and bottom rules
only, no vertical lines).

### Footnotes

GitHub-style footnotes render at the end of the article:

```md
A claim.[^1]

[^1]: The supporting note.
```

For citations, use footnotes for the in-text marker and the `references`
frontmatter field for the bibliography.

### Figures and diagrams

Two options:

1. Plain Markdown image in a `.md` file.
2. MDX (`.mdx` file) with the `Figure` component, for captions and
   full-width figures:

```mdx
import Figure from '../../components/Figure.astro';
import img from '../../assets/diagram.png';

<Figure src={img} alt="A diagram" caption="Figure 1. A diagram." full />
```

`full` spans the text column and the margin column on wide screens.

### Cross-links

- Between articles: `[title](/articles/some-slug/)` or the `related`
  frontmatter field.
- Between topics: `[GPUs](/stack/hardware/gpus/)`.

## Layout notes

- The text column is deliberately narrow; notes live in the right margin.
- On screens under 1300px the stack moves to a collapsible "Contents" block
  at the top. Under 950px, sidenotes flow inline.
- No client-side JavaScript is used anywhere.

## Commands

```sh
npm run dev       # local server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build
```

Pushing to `main` builds and deploys the site to
<https://er2-ai.github.io> automatically.
