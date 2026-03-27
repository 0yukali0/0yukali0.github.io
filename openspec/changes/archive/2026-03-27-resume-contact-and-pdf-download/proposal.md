## Why

The resume page currently lacks contact information and a way for visitors to save or share it offline. Adding a contact section and a PDF download button improves discoverability and usability for recruiters and collaborators.

## What Changes

- Add a contact section to the resume page with LinkedIn, GitHub, and email links
- Add a "Download as PDF" button that triggers the browser's print-to-PDF dialog with resume-optimized print styles

## Capabilities

### New Capabilities

- `resume-contact-section`: Displays LinkedIn, GitHub, and email contact links at the top of the resume page
- `resume-pdf-download`: A button that triggers browser print dialog configured for clean PDF output of the resume

### Modified Capabilities

_(none)_

## Impact

- `content/resume.md`: Add contact info and download button trigger
- `layouts/` or theme override: May need a custom `single.html` layout for the resume page to inject the button and contact links via HTML
- `static/css/` or custom CSS: Print media query styles to hide navigation/button when printing, and ensure clean PDF layout
