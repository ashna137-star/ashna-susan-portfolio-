# Ashna Susan — Personal Portfolio

A modern, dark-themed developer portfolio built with **React**, **Vite**, and **Tailwind CSS**.

## Updating Placeholders

Edit `src/data/portfolioData.js` to customize:
- `linkedinUrl` in `PROFILE`
- `repoUrl` and `demoUrl` for each entry in `PROJECTS`

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

The production bundle is generated in `dist/`.

## Deployment Options

- **Vercel**: Connect the repository or run `npx vercel` (`Build Command: npm run build`, `Output Directory: dist`).
- **Netlify**: Connect the repository or drag-and-drop `dist/` (`Build command: npm run build`, `Publish directory: dist`).
- **GitHub Pages**: Set `base` in `vite.config.js` to `/<repo-name>/`, run `npm run build`, and publish `dist/` via GitHub Actions or `gh-pages`.
