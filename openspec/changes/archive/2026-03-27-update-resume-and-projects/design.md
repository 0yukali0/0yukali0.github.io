## Context

The site has two content sources to update: `content/resume.md` (markdown) and `data/projects.yaml` (YAML data file consumed by a Hugo shortcode). Both are simple flat files — no templating engine changes required.

## Goals / Non-Goals

**Goals:**
- Sync `content/resume.md` with the PDF: new summary, categorized skills, ASUS work experience, Apache Yunikorn PMC open source section, corrected education (Master's)
- Replace `data/projects.yaml` with the three projects listed in the PDF: ResourceUsageReporter, My-skills, Postgres-metrics-observability

**Non-Goals:**
- Modifying Hugo layouts or shortcodes
- Adding new pages or navigation items
- Updating `data/contributions.yaml`

## Decisions

**Direct file edits, no schema changes** — Both files follow existing formats already understood by Hugo templates. No structural changes needed; content replacement is sufficient.

**Full rewrite of resume.md** — The current content is a generic placeholder. Replacing it entirely is cleaner than patching.

**Full replacement of projects.yaml** — The existing two entries (portfolio site, SRE Notes) are placeholders. The PDF lists three concrete personal projects; replace all entries.

## Risks / Trade-offs

- Project GitHub URLs are not listed in the PDF → Use `https://github.com/0yukali0/<repo-name>` pattern based on username, which matches existing conventions. [Risk: URL may be wrong] → User can correct after review.
- ASUS end date is "Sep 2025" which is in the future relative to PDF creation date → Keep as-is, reflecting the PDF exactly.
