# johnoscott.com

The public website at https://johnoscott.com, served by GitHub Pages from this repository's `main` branch
(`CNAME`, `.nojekyll`). Hand-written: `index.html` (the home page, whose header and footer every blog page reuses),
`404.html`, `site.css`, `site.js`, `favicon.svg`, `robots.txt`. Generated, never edited by hand: everything under
`blog/`, the blog entries of `sitemap.xml`, and the latest-posts list in `index.html` (between `<!--latest-->` markers).

Posts are written in the private repository `blog-johnoscott` (checked out at `../blog-johnoscott`); see its README.

    python3 tools/blog-build.py ../blog-johnoscott && tools/stamp.sh    # rebuild blog/ from published posts

| Tool | What it does |
| --- | --- |
| `tools/blog-build.py` | Posts repo → `blog/` (pages, Markdown twins, images, Atom feed), sitemap, home page list. `--drafts --out DIR` for a preview outside this repo; `--retire` / `--replace` to change a published address. |
| `tools/markdown.py` | The strict Markdown renderer (from Dozable's `tools/docs-build.py`). |
| `tools/stamp.sh` | Fingerprints `site.css` / `site.js` links (`?v=<hash>`) so caches pick up new versions. |

Stdlib Python 3.11+, no dependencies.
