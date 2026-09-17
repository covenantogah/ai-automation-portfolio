# ai-automation-portfolio

A polished, responsive portfolio website for Covenant Ogah, focused on AI-powered workflow automations, integrations, and practical business solutions.

## What's included

- Responsive landing page with hero, selected work, services, process, about, and contact sections
- Project and case-study cards loaded from `data/projects.json`
- Image-ready project cards using `assets/images/`
- Mobile navigation and accessible labels
- No build step required: open `index.html` locally or deploy the repository with GitHub Pages

## Customize it

1. Update your email address in `index.html` (`hello@example.com`).
2. Replace the sample project copy in `data/projects.json` with your real case studies.
3. Add your images to `assets/images/` and reference them from the JSON file.
4. Adjust colors, typography, and layout in `styles.css`.

## Run locally

Because the browser may block `fetch()` when opening a file directly, serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
