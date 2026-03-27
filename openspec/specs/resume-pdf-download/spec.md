### Requirement: PDF download button on resume page
The resume page SHALL display a "Download PDF" button that triggers the browser print dialog, allowing the user to save the resume as a PDF file.

#### Scenario: Button is visible on resume page
- **WHEN** a visitor loads the resume page
- **THEN** a "Download PDF" button SHALL be visible on the page

#### Scenario: Button triggers print dialog
- **WHEN** a visitor clicks the "Download PDF" button
- **THEN** the browser's print dialog SHALL open via `window.print()`

### Requirement: Print-optimized styles for clean PDF output
The resume page SHALL include `@media print` CSS rules so that when printed or saved as PDF, the output contains only the resume content without site navigation, buttons, or other UI chrome.

#### Scenario: Navigation hidden on print
- **WHEN** the user prints or saves the page as PDF
- **THEN** the site navigation header SHALL NOT appear in the printed output

#### Scenario: Download button hidden on print
- **WHEN** the user prints or saves the page as PDF
- **THEN** the "Download PDF" button SHALL NOT appear in the printed output

#### Scenario: Resume content preserved on print
- **WHEN** the user prints or saves the page as PDF
- **THEN** all resume sections (contact, summary, skills, experience, education) SHALL be fully visible in the printed output
