## Context

The site is a Hugo static site using the `hugo-xmin` theme. The resume is rendered via `content/resume.md` using the theme's default `single.html` template. There is no current contact section or download functionality. The site does not use JavaScript frameworks — it uses minimal, vanilla JS where needed (e.g., Chart.js in shortcodes).

## Goals / Non-Goals

**Goals:**
- Add a contact row (LinkedIn, GitHub, email) near the top of the resume page
- Add a "Download PDF" button that triggers `window.print()` with print-optimized CSS so the output is a clean resume PDF
- Keep changes minimal and consistent with the existing minimalist theme aesthetic

**Non-Goals:**
- Server-side PDF generation (e.g., Puppeteer, wkhtmltopdf)
- Adding a backend or build step for PDF export
- Modifying the theme's source files directly (use layout overrides instead)

## Decisions

### 1. Contact section via custom layout override (not markdown)

Hugo allows overriding theme layouts by placing files in `layouts/`. A `layouts/_default/single.html` (or `layouts/resume/single.html` using a page-type) will override the theme's `single.html` for the resume page.

The contact info will be injected as HTML in the layout override, keeping `content/resume.md` clean.

**Alternative considered:** Embed HTML directly in `resume.md` via raw HTML in markdown. Rejected because Hugo's `goldmark` renderer requires `unsafe: true` in config to render raw HTML, which is a broader security change.

**Alternative considered:** Use a Hugo shortcode in the markdown. This is feasible but the contact links and download button are page-level concerns better handled in the layout.

### 2. PDF download via `window.print()`

The "Download PDF" button calls `window.print()`. Combined with a `@media print` CSS block that hides navigation, the button, and other non-resume content, this produces a clean PDF when the user saves as PDF from the browser print dialog.

**Alternative considered:** Use a library like `html2pdf.js`. Rejected because it adds an external dependency and `window.print()` is universally supported and produces higher-fidelity output for simple text-based pages.

### 3. Resume-specific layout via Hugo page type

Set `type: resume` in `resume.md` frontmatter and create `layouts/resume/single.html`. This scopes the custom layout to only the resume page without affecting other single pages.

## Risks / Trade-offs

- **Print dialog UX varies by browser** → Users must manually choose "Save as PDF" in the print dialog. This is standard behavior and clearly communicated by the button label.
- **Print CSS may need tuning** → Font sizes and page breaks can differ across browsers. Mitigation: keep the resume layout simple and test in Chrome and Firefox.
- **Layout override maintenance** → If the theme's `single.html` is updated, the override won't automatically inherit changes. Mitigation: the override is minimal — it adds only the contact bar and button around the existing `{{ .Content }}` block.
