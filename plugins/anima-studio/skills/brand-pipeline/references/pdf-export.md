# Phase 5 — producing an actual PDF, not just an export button

Living, linked artifacts stay the source of truth for the Brand Book and Web Design System — a static PDF
goes stale the moment a token changes (see `brandbook-vs-guidelines.md`'s "modern caveat"). But a real,
downloadable PDF is still a legitimate deliverable for offline review, board presentations, or handing to a
vendor who won't open a link — and when the user asks for one, "you can click Export PDF in the canvas" is
not the same as handing them a file. Produce the file.

## The gap this closes

The `design` skill's Claude Design canvas has an **Export PDF** button in its own toolbar — but that's a
client-side action a human clicks inside the rendered editor. There is no CLI or API path to trigger it from
an agent session. If the user wants an actual `.pdf` on disk without opening the canvas and clicking export
themselves, render one directly instead.

## How to render one directly

The artboards you authored for the `design` skill are plain HTML/CSS wrapped in the `.dc.html`/`support.js`
component runtime. For a direct PDF render you don't need that runtime at all — assemble a **second, plain**
HTML document from the same inner markup (no `<x-dc>`, no `data-dc-script`, no component wrapper needed),
laid out as one `<div>` per page at the artboard's real pixel dimensions, each followed by a CSS page break:

```css
.page { width: 1000px; height: 1250px; page-break-after: always; }
.page:last-child { page-break-after: auto; }
```

Then print it with a local Chromium-based browser in headless mode — check for one before assuming it's
there:

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"   # macOS common path
[ -x "$CHROME" ] || CHROME=$(command -v google-chrome || command -v chromium || true)
"$CHROME" --headless=new --disable-gpu --no-sandbox \
  --print-to-pdf="<destination path>.pdf" --print-to-pdf-no-header \
  "<path to the plain print HTML>"
```

The same technique produces PNGs (for standalone raster assets — see `brand-kit-poster-spec.md`'s asset
bundling requirement) by swapping `--print-to-pdf=...` for `--screenshot=<path>.png
--window-size=<w>,<h>`.

If no Chromium-based browser is found on the machine, say so plainly and fall back to telling the user how
to export from the canvas's own toolbar — don't fail silently, and don't claim a PDF exists if it doesn't.

## Always ask before exporting

Producing and saving a file is a visible, disk-writing action outside the scratch/working directory — always
**ask the user before running the export**, and ask where to save it. Default the suggestion to the user's
Desktop (`~/Desktop/<name>.pdf`) since that's where a person expects to find a file they just asked for, but
don't assume — confirm the destination, especially if a file of that name might already exist there (don't
silently overwrite).

## After exporting

Verify the file was actually written (check it exists and has a non-trivial size) before telling the user
it's done — the same "verify the write" discipline as everywhere else in this phase. Tell them the real path.
