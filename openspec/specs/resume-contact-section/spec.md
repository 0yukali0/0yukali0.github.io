### Requirement: Contact section displayed on resume page
The resume page SHALL display a contact section containing LinkedIn, GitHub, and email links. The section SHALL appear near the top of the resume, before the main content body.

#### Scenario: LinkedIn link is present
- **WHEN** a visitor loads the resume page
- **THEN** a clickable LinkedIn link SHALL be displayed pointing to `https://www.linkedin.com/in/yuteng-chen-452473254/`

#### Scenario: GitHub link is present
- **WHEN** a visitor loads the resume page
- **THEN** a clickable GitHub link SHALL be displayed pointing to `https://github.com/0yukali0`

#### Scenario: Email link is present
- **WHEN** a visitor loads the resume page
- **THEN** a clickable email (`mailto:`) link SHALL be displayed for `a08h0283@gmail.com`

#### Scenario: Contact links open correctly
- **WHEN** a visitor clicks the LinkedIn or GitHub link
- **THEN** the link SHALL open in a new browser tab (`target="_blank"`)

#### Scenario: Contact section visible when printing
- **WHEN** the user prints or saves the page as PDF
- **THEN** the contact section links SHALL still be visible in the PDF (they are content, not navigation)
