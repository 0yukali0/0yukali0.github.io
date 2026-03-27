## ADDED Requirements

### Requirement: Resume page displays personal information
The site SHALL provide a `/resume` page containing the owner's professional resume, including a summary, skills, work/open source experience, and education sections.

#### Scenario: Resume page is accessible
- **WHEN** a visitor navigates to `/resume`
- **THEN** the page renders with all resume sections visible

#### Scenario: Skills section is present
- **WHEN** the resume page loads
- **THEN** a skills section SHALL list technical skills grouped by category (e.g., languages, tools, frameworks)

#### Scenario: Experience section is present
- **WHEN** the resume page loads
- **THEN** an experience section SHALL list open source and professional contributions in reverse chronological order

#### Scenario: Education section is present
- **WHEN** the resume page loads
- **THEN** an education section SHALL list academic background

### Requirement: Resume page is linked from site navigation
The site SHALL include a navigation link to the resume page in the top-level menu.

#### Scenario: Nav link exists
- **WHEN** any page on the site loads
- **THEN** the navigation bar SHALL contain a link labeled "Resume" pointing to `/resume`
