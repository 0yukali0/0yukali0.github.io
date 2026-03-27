## ADDED Requirements

### Requirement: Contributions page displays merged PRs
The site SHALL provide a `/contributions` page listing all merged pull requests by `0yukali0` in the `flyteorg` and `apache` GitHub organizations, sourced from static YAML data.

#### Scenario: Contributions page is accessible
- **WHEN** a visitor navigates to `/contributions`
- **THEN** the page renders with contribution data visible

#### Scenario: PRs grouped by organization then category
- **WHEN** the contributions page loads
- **THEN** PRs SHALL be grouped first by organization (`flyteorg`, `apache`), then by category within each org
- **THEN** each group SHALL display a section heading with the org name and category name

#### Scenario: Each PR entry shows required fields
- **WHEN** a PR entry is rendered
- **THEN** it SHALL display: PR title (as a link to the PR URL), repository name, difficulty label, and merge date

### Requirement: Contributions page shows a summary bar chart
The site SHALL render a bar chart visualizing PR counts, giving a quick visual overview of contribution volume.

#### Scenario: Bar chart renders on page load
- **WHEN** the contributions page loads
- **THEN** a bar chart SHALL be visible showing PR counts grouped by organization and by category
- **THEN** the chart SHALL use Chart.js loaded via CDN

#### Scenario: Chart degrades gracefully without JavaScript
- **WHEN** JavaScript is disabled or the CDN fails
- **THEN** the PR data table SHALL still be fully readable without the chart

### Requirement: Contribution data is stored in a YAML data file
PR data SHALL be maintained in `data/contributions.yaml`. Each entry MUST include: `title`, `url`, `org`, `repo`, `category`, `difficulty`, `merged_at`.

#### Scenario: Valid data file structure
- **WHEN** Hugo builds the site
- **THEN** it SHALL read `data/contributions.yaml` without errors and render all entries on the contributions page

### Requirement: Contributions page is linked from site navigation
The site SHALL include a navigation link to the contributions page in the top-level menu.

#### Scenario: Nav link exists
- **WHEN** any page on the site loads
- **THEN** the navigation bar SHALL contain a link labeled "Contributions" pointing to `/contributions`
