## Context

This is a new personal portfolio site built with Hugo, hosted on GitHub Pages at `0yukali0.github.io`. There is no prior content to migrate — the repo is treated as a fresh start.

The site owner (`0yukali0`) has merged PRs across two major open source organizations:
- **flyteorg**: ML workflow orchestration ecosystem
- **apache**: Apache Software Foundation projects (e.g., Hadoop, Spark, Ozone, HBase, etc.)

PR data is sourced from GitHub search queries and maintained as static Hugo data files.

## Goals / Non-Goals

**Goals:**
- Scaffold a Hugo site using the **XMin** theme (`hugo-xmin`) — minimal, fast, typography-focused
- Implement three main pages: Resume, OSS Contributions, GitHub Projects
- Display PR contributions grouped by **both organization and category**, with difficulty labels
- Show a bar chart visualizing PR summary statistics (count per org / category)
- Automate deployment to GitHub Pages via GitHub Actions on push to `main`

**Non-Goals:**
- Real-time GitHub API integration (static YAML data files only)
- Blog or article publishing
- Multi-language support
- Backend server or database

## Decisions

### 1. Hugo + XMin Theme
**Decision**: Use Hugo with the **hugo-xmin** theme as the visual foundation.
**Rationale**: XMin is an extremely minimal (~150 lines of code) Hugo theme focused on clean typography. It is easy to customize without fighting a large framework. Aligns with the owner's preference for a no-frills, readable style.
**Reference**: https://themes.gohugo.io/themes/hugo-xmin/
**Alternative considered**: PaperMod, Hugo Profile — rejected as heavier and more opinionated.

### 2. Static Data Files for PR Contributions
**Decision**: Store PR data as `data/contributions.yaml`. Seeded from:
- `https://github.com/search?q=org%3Aflyteorg+is%3Apr+author%3A0yukali0+is%3Amerged`
- `https://github.com/search?q=org%3Aapache+is%3Apr+author%3A0yukali0+is%3Amerged`

Each entry includes: `title`, `url`, `org`, `repo`, `category` (`feature`/`bugfix`/`docs`/`test`/`refactor`), `difficulty` (`easy`/`medium`/`hard`), `merged_at`.
**Rationale**: Static host — no server-side code. Fast, version-controlled, easy to update manually.

### 3. PR Grouping: By Org AND Category
**Decision**: The contributions page groups PRs first by **organization** (flyteorg, apache), then by **category** within each org.
**Rationale**: This gives a clear picture of both where and what type of contributions were made.

### 4. Bar Chart for Summary Statistics
**Decision**: Render a bar chart on the contributions page showing PR counts per org and per category using a lightweight client-side library (Chart.js via CDN).
**Rationale**: A visual summary makes the page more engaging and scannable. Chart.js is minimal, requires no build step, and works with Hugo's static output.
**Alternative considered**: Plain HTML table — available as a fallback but bar chart preferred for visual impact.

### 5. PR Difficulty and Category Labels
**Decision**: Manually annotate each PR entry in `data/contributions.yaml` with `category` and `difficulty`.
**Rationale**: GitHub has no standardized difficulty labels; manual annotation ensures accuracy.

### 6. GitHub Actions for Deployment
**Decision**: Use GitHub Actions with Hugo build + `actions/deploy-pages` targeting the `gh-pages` branch.
**Rationale**: Fully automated on push to `main`. Hugo version pinned in workflow to prevent drift.

## Risks / Trade-offs

- **Stale contribution data** → Mitigation: YAML file is easy to edit; document update steps in README.
- **XMin customization limits** → Mitigation: XMin is intentionally minimal and override-friendly via custom CSS and partial templates.
- **Chart.js CDN dependency** → Mitigation: Pin to a specific Chart.js version URL; site degrades gracefully (table fallback) if CDN is unavailable.

## Migration Plan

1. Initialize Hugo site in the repo root (`hugo new site . --force`)
2. Add `hugo-xmin` as a git submodule under `themes/hugo-xmin`
3. Configure `hugo.toml` with site title, base URL, nav links
4. Create content: `content/resume.md`, `content/contributions.md`, `content/projects.md`
5. Populate data files: `data/contributions.yaml`, `data/projects.yaml`
6. Add custom Hugo partial templates for contributions table + Chart.js bar chart
7. Configure and test GitHub Actions workflow
8. Verify live deployment at `https://0yukali0.github.io`
