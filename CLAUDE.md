# CLAUDE.md — johnoscott.com (PUBLIC website repo)

GitHub Pages site for https://johnoscott.com. Read README.md. Posts come from the private repo `../blog-johnoscott`.

- Never hand-edit `blog/`, the blog lines of `sitemap.xml`, or the `<!--latest-->` block of `index.html`; rebuild with
  `python3 tools/blog-build.py ../blog-johnoscott && tools/stamp.sh`.
- Never build drafts here (`--drafts` needs `--out` outside this repo). This repository is public.
- After changing `site.css` or `site.js`, run `tools/stamp.sh` before committing.
- Don't commit or push without the owner asking: a push publishes.
