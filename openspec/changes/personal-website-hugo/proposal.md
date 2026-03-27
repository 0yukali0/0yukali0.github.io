## Why

Currently there is no dedicated personal website to showcase open source contributions, resume, and side projects. Building a Hugo-based static site on GitHub Pages provides a professional online presence highlighting real-world contributions to Apache and Flyte ecosystems.

## What Changes

- Create a new Hugo static site replacing the existing Docusaurus setup
- Add a Resume page with skills, experience, and education
- Add an Open Source Contributions page showing merged PRs in `flyteorg` and `apache` organizations (count, category, difficulty)
- Add a GitHub Projects page listing small personal/side projects
- Deploy automatically to GitHub Pages via GitHub Actions

## Capabilities

### New Capabilities

- `resume-page`: Personal resume/CV page with skills, experience, and education sections
- `oss-contributions`: Open source contributions dashboard showing merged PRs from flyteorg and apache orgs, categorized by type and difficulty
- `github-projects`: Showcase page listing small GitHub projects with descriptions and links
- `site-infrastructure`: Hugo site scaffold, theme configuration, GitHub Actions deployment pipeline

### Modified Capabilities

<!-- No existing capabilities are being modified -->

## Impact

- Replaces the current Docusaurus-based `0yukali0.github.io` site
- New dependency: Hugo static site generator
- GitHub Actions workflow updated for Hugo build and GitHub Pages deployment
- GitHub API or search URLs used to fetch PR data for the contributions page
