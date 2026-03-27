## ADDED Requirements

### Requirement: Projects page displays GitHub side projects
The site SHALL provide a `/projects` page listing the owner's small personal GitHub projects, sourced from static YAML data.

#### Scenario: Projects page is accessible
- **WHEN** a visitor navigates to `/projects`
- **THEN** the page renders with all project entries visible

#### Scenario: Each project entry shows required fields
- **WHEN** a project entry is rendered
- **THEN** it SHALL display: project name (as a link to the GitHub repo), a short description, and primary language/tech tags

### Requirement: Project data is stored in a YAML data file
Project data SHALL be maintained in `data/projects.yaml`. Each entry MUST include: `name`, `url`, `description`, `tags` (list of strings).

#### Scenario: Valid data file structure
- **WHEN** Hugo builds the site
- **THEN** it SHALL read `data/projects.yaml` without errors and render all entries on the projects page

### Requirement: Projects page is linked from site navigation
The site SHALL include a navigation link to the projects page in the top-level menu.

#### Scenario: Nav link exists
- **WHEN** any page on the site loads
- **THEN** the navigation bar SHALL contain a link labeled "Projects" pointing to `/projects`
