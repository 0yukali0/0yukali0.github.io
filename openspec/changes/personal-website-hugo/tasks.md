## 1. Repo Cleanup

- [x] 1.1 Remove Docusaurus files: `package.json`, `package-lock.json`, `babel.config.js`, `tsconfig.json`, `docusaurus.config.ts`, `sidebars.ts`
- [x] 1.2 Remove Docusaurus source directories: `src/`, `blog/`, `docs/`, `static/`
- [x] 1.3 Remove old GitHub Actions workflow `deploy.yaml` and `Makefile`

## 2. Hugo Site Scaffold

- [x] 2.1 Run `hugo new site . --force` to initialize Hugo structure at repo root
- [x] 2.2 Add `hugo-xmin` theme as git submodule: `git submodule add https://github.com/yihui/hugo-xmin themes/hugo-xmin`
- [x] 2.3 Create `hugo.toml` with site title (`0yukali0`), base URL (`https://0yukali0.github.io/`), and theme (`hugo-xmin`)
- [x] 2.4 Configure navigation menu entries in `hugo.toml` for Resume, Contributions, and Projects

## 3. Resume Page

- [x] 3.1 Create `content/resume.md` with front matter (`title: "Resume"`, menu entry)
- [x] 3.2 Fill in resume content: summary, skills (grouped by category), open source experience, education

## 4. OSS Contributions Page

- [x] 4.1 Create `data/contributions.yaml` with merged PR entries (fields: `title`, `url`, `org`, `repo`, `category`, `difficulty`, `merged_at`)
- [x] 4.2 Populate `data/contributions.yaml` with PRs from flyteorg org (from GitHub search results)
- [x] 4.3 Populate `data/contributions.yaml` with PRs from apache org (from GitHub search results)
- [x] 4.4 Create `content/contributions.md` with front matter and a shortcode/template reference
- [x] 4.5 Create `layouts/shortcodes/contributions.html` (or partial) that renders PRs grouped by org then category
- [x] 4.6 Add Chart.js bar chart to the contributions layout showing PR counts by org and category (Chart.js via CDN, pinned version)
- [x] 4.7 Ensure table renders correctly without JavaScript (graceful degradation)

## 5. GitHub Projects Page

- [x] 5.1 Create `data/projects.yaml` with project entries (fields: `name`, `url`, `description`, `tags`)
- [x] 5.2 Populate `data/projects.yaml` with personal/side projects
- [x] 5.3 Create `content/projects.md` with front matter
- [x] 5.4 Create `layouts/shortcodes/projects.html` (or partial) that renders the projects list with name, description, and tags

## 6. GitHub Actions Deployment

- [x] 6.1 Create `.github/workflows/deploy.yaml` with Hugo build step (pin Hugo version)
- [x] 6.2 Configure workflow to deploy to GitHub Pages using `actions/configure-pages` and `actions/deploy-pages`
- [x] 6.3 Set workflow trigger to `push` on `main` branch

## 7. Verification

- [x] 7.1 Run `hugo server` locally and verify all three pages render correctly
- [x] 7.2 Push to `main` and confirm GitHub Actions workflow completes successfully
- [ ] 7.3 Verify live site at `https://0yukali0.github.io` shows Resume, Contributions, and Projects pages
