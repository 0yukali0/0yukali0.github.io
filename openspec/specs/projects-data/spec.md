## ADDED Requirements

### Requirement: Projects list contains exactly three entries from the PDF
The projects data file SHALL contain exactly three projects: ResourceUsageReporter, My-skills, and Postgres-metrics-observability, with descriptions matching the PDF.

#### Scenario: Three projects rendered
- **WHEN** a visitor navigates to the projects page
- **THEN** exactly three project cards appear: ResourceUsageReporter, My-skills, and Postgres-metrics-observability

### Requirement: Each project has a name, URL, description, and tags
Each project entry SHALL include a name, a GitHub URL under the user's account, a description from the PDF, and relevant technology tags.

#### Scenario: ResourceUsageReporter entry
- **WHEN** a visitor views the projects page
- **THEN** ResourceUsageReporter shows description about bridging real-time node metrics in Kubernetes for schedulers

#### Scenario: My-skills entry
- **WHEN** a visitor views the projects page
- **THEN** My-skills shows description about agent-invocable skills submitting workflows to Kubernetes for Claude and local LLMs

#### Scenario: Postgres-metrics-observability entry
- **WHEN** a visitor views the projects page
- **THEN** Postgres-metrics-observability shows description about collecting Postgres metrics via OpenTelemetry Collector and visualizing in Grafana
