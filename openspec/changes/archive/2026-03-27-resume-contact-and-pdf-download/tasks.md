## 1. Layout Override Setup

- [x] 1.1 Create `layouts/resume/` directory for resume-specific layout
- [x] 1.2 Copy the theme's `single.html` as the base for `layouts/resume/single.html`
- [x] 1.3 Set `type: resume` in `content/resume.md` frontmatter to activate the custom layout

## 2. Contact Section

- [x] 2.1 Add contact section HTML to `layouts/resume/single.html` with LinkedIn, GitHub, and email links
- [x] 2.2 Ensure LinkedIn and GitHub links use `target="_blank" rel="noopener noreferrer"`
- [x] 2.3 Verify contact section renders correctly above the resume content in the browser

## 3. PDF Download Button

- [x] 3.1 Add a "Download PDF" button to `layouts/resume/single.html`
- [x] 3.2 Wire the button to call `window.print()` via an `onclick` attribute or inline `<script>`

## 4. Print Styles

- [x] 4.1 Add a `<style>` block or link a CSS file with `@media print` rules to `layouts/resume/single.html`
- [x] 4.2 Add print rule to hide the site navigation header (`nav`, `.menu`)
- [x] 4.3 Add print rule to hide the "Download PDF" button
- [x] 4.4 Verify all resume sections (contact, summary, skills, experience, education) appear correctly in a print preview
