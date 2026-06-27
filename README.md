# Caturra Social Documentation

This repository houses the public developer documentation for Caturra Social. It was successfully converted from GitBook to **Docusaurus v3** to provide robust versioning, internationalisation (i18n), and seamless automated deployment.

## 🚀 Quick Start (Local Development)

First, make sure you have dependencies installed (using npm):

```bash
npm install
```

To run the local development server:

```bash
npm run start
```

This starts the site locally at `http://localhost:3000/documentation/`. Most changes are hot-reloaded automatically.

---

## 📁 Project Structure

The project has been converted as follows:
- **`docs/`**: All markdown documents. The home page is `docs/index.md` (renamed from `README.md`). All subdirectories (like `api/`, `oauth/`, and `guidelines/`) are preserved here.
- **`sidebars.ts`**: The manual sidebar definition, mirroring the exact order from GitBook's original `SUMMARY.md`.
- **`static/.gitbook/assets/`**: Contains the images referenced by your markdown files.
- **`docusaurus.config.ts`**: The core site configuration containing locale setup, GitHub repository fields, and navbar elements.

---

## 🏷️ Docusaurus Versioning

Versioning allows you to capture a snapshot of the documentation for different releases of your project (e.g., `v1.0.0`, `v2.0.0`).

### How to Create a New Version
To tag a version of the current docs:
```bash
npm run docusaurus docs:version v1.0.0
```

### What Happens?
1. Docusaurus copies the current contents of `docs/` to `versioned_docs/version-v1.0.0/`.
2. Docusaurus copies the current `sidebars.ts` to `versioned_sidebars/version-v1.0.0-sidebars.json`.
3. A entry is added to `versions.json`.

### Working with Versions
- **Current Version (Unreleased)**: Continue editing files inside the standard `/docs/` folder. These changes will reflect in your "Next" version.
- **Tagged Versions**: To edit a past version, edit files inside the corresponding `versioned_docs/version-<version>/` folder.
- **Navbar Dropdown**: The version dropdown in the navbar will automatically update when versions exist.

---

## 🌐 Internationalisation (i18n)

The site is configured to support multiple locales, with English (`en`) and Spanish (`es`) set up as a standard.

### Translating Documentation
To translate a document (e.g., `docs/api/v1/scopes.md`):

1. **Scaffold the locale directory**:
   Run the following script to generate translation skeleton files:
   ```bash
   npm run write-translations
   ```
2. **Translate Page Content**:
   Copy the markdown file you want to translate into the translation directory:
   - Source: `docs/api/v1/scopes.md`
   - Destination: `i18n/es/docusaurus-plugin-content-docs/current/api/v1/scopes.md` (for Spanish translation of the unreleased version)
   - For versioned docs, copy to: `i18n/es/docusaurus-plugin-content-docs/version-<version>/api/v1/scopes.md`
3. **Translate Site Strings** (Buttons, Sidebar Labels):
   Translate JSON files created in `i18n/es/code.json` or `i18n/es/docusaurus-plugin-content-docs/current.json`.

### Testing Translations Locally
Start the server in a specific locale to test:
```bash
# Start Spanish version
npm run start -- --locale es
```

---

## 📦 Deployment on GitHub Pages

Deployment is fully automated using **GitHub Actions**.

### Automated Deployments
We created a workflow file in [deploy.yml](file:///D:/Github%20Repose/documentation/.github/workflows/deploy.yml). Whenever you push or merge code to the `main`, `master`, or `docusaurus` branches, GitHub Actions will:
1. Check out the codebase.
2. Install dependencies.
3. Build the static production bundle (`npm run build`).
4. Publish the output to the `gh-pages` branch, serving it automatically at `https://caturrasocial.github.io/documentation/`.

### Manual Deployments
If you ever need to manually deploy the site:
```cmd
# cmd (Windows)
set GIT_USER=<your-github-username>
npm run deploy

# PowerShell
$env:GIT_USER="<your-github-username>"
npm run deploy
```
