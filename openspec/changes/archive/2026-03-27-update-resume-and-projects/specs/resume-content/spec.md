## ADDED Requirements

### Requirement: Resume summary reflects current profile
The resume page SHALL display an up-to-date summary identifying the user as Apache Yunikorn PMC Member and Software Engineer with ASUS experience, 31+ PRs (75 commits), and core expertise in Kubernetes observability, MLOps, GPU monitoring, and cloud-native development.

#### Scenario: Summary is visible
- **WHEN** a visitor navigates to the resume page
- **THEN** the summary paragraph matches the PDF content verbatim

### Requirement: Skills are categorized by domain
The resume page SHALL list technical skills grouped into: Harness Engineering, MLOps, Containers & Orchestration, Backend Development, Observability, IaC & CI/CD, Development, and Security.

#### Scenario: Skill categories rendered
- **WHEN** a visitor views the resume page
- **THEN** all eight skill categories appear with their respective tool lists

### Requirement: Work experience section includes ASUS
The resume page SHALL include a Work Experience section with ASUS as Software Engineer (May 2024 – Sep 2025, Taipei, Taiwan) and all seven bullet points from the PDF.

#### Scenario: ASUS entry present
- **WHEN** a visitor views the resume page
- **THEN** ASUS is listed with correct title, dates, location, and all seven achievements

### Requirement: Open source section covers Yunikorn and Flyte
The resume page SHALL include an Open Source Experience section with Apache Yunikorn (PMC Member / Contributor, 31+ PRs, 75 commits) and Flyte (Contributor), each with their respective bullet points from the PDF.

#### Scenario: Yunikorn and Flyte entries present
- **WHEN** a visitor views the resume page
- **THEN** both Apache Yunikorn and Flyte sections appear with correct roles and bullet points

### Requirement: Education reflects Master's degree
The resume page SHALL list education as Master of Computer Science at Taichung University of Education (Taichung, Taiwan, 2021–2023).

#### Scenario: Correct degree shown
- **WHEN** a visitor views the resume page
- **THEN** education shows Master of Computer Science, not Bachelor of Engineering
