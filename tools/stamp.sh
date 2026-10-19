#!/bin/bash
# tools/stamp.sh — run after tools/blog-build.py, before every commit that changes site.css or site.js.
# Fingerprints their links in every page (?v=<8 hex of the file's sha256>), each by its own relative path, so a
# browser or CDN holding the old file for hours still loads the new one with a newly published page.
set -euo pipefail
cd "$(dirname "$0")/.."
python3 - <<'PY'
import glob, hashlib, os, re
def fp(path):
    return hashlib.sha256(open(path, 'rb').read()).hexdigest()[:8]
pages = sorted(glob.glob('*.html') + glob.glob('blog/*.html'))
for page in pages:
    s = open(page, encoding='utf-8').read()
    for asset in ('site.css', 'site.js'):
        rel = os.path.relpath(asset, os.path.dirname(page) or '.')
        for r in {rel, '/' + asset}:
            s = re.sub(r'(href|src)="%s(\?v=[0-9a-f]+)?"' % re.escape(r), r'\1="%s?v=%s"' % (r, fp(asset)), s)
    open(page, 'w', encoding='utf-8').write(s)
print('stamped %d pages' % len(pages))
PY
