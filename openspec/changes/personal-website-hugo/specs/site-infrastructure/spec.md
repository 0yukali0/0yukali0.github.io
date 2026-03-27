## ADDED Requirements

### Requirement: Hugo site scaffold is initialized
The repository SHALL contain a valid Hugo site structure at the repo root with `hugo.toml`, `content/`, `data/`, `themes/`, `layouts/`, and `static/` directories.

#### Scenario: Hugo build succeeds
- **WHEN** `hugo` is run at the repo root
- **THEN** it SHALL produce a `public/` directory with rendered HTML without errors

### Requirement: XMin theme is integrated
The site SHALL use the `hugo-xmin` theme added as a git submodule under `themes/hugo-xmin`.

#### Scenario: Theme submodule is present
- **WHEN** the repository is cloned with `--recurse-submodules`
- **THEN** `themes/hugo-xmin/` SHALL contain the theme files

#### Scenario: Site renders with XMin styling
- **WHEN** Hugo builds the site
- **THEN** all pages SHALL use XMin's minimal typography layout

### Requirement: GitHub Actions workflow deploys to GitHub Pages
The repository SHALL contain a GitHub Actions workflow that builds the Hugo site and deploys to GitHub Pages automatically on every push to `main`.

#### Scenario: Workflow triggers on push to main
- **WHEN** a commit is pushed to the `main` branch
- **THEN** the GitHub Actions workflow SHALL trigger, build the site with Hugo, and deploy to GitHub Pages

#### Scenario: Hugo version is pinned
- **WHEN** the workflow runs
- **THEN** it SHALL use a specific pinned Hugo version to ensure reproducible builds

#### Scenario: Deployment succeeds
- **WHEN** the workflow completes successfully
- **THEN** the live site at `https://0yukali0.github.io` SHALL reflect the latest `main` branch content

### Requirement: Site navigation includes all main pages
The `hugo.toml` SHALL configure menu entries for Resume, Contributions, and Projects pages.

#### Scenario: All nav links are present
- **WHEN** any page loads
- **THEN** the navigation SHALL include links to `/resume`, `/contributions`, and `/projects`
