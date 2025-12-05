# Pathways Finance

A bilingual budgeting, remittance, and family-learning prototype for immigrant households. The app is built as a static HTML/CSS/JS experience that works offline and stores data in the browser.

## Features
- **Budget + Remittance tracking:** Add line items, estimate fees and FX buffers, and see totals at a glance.
- **Bilingual UI:** Toggle between English and Spanish content instantly.
- **Family Learning Mode:** Three micro-lessons with completion streak tracking.
- **Local storage:** Keeps your data, lesson completion, and streak between sessions.
- **Starter data:** Pre-populated examples show how remittance-aware budgeting works.

## Running locally
Open `index.html` in your browser (no build tools required). All state is stored in `localStorage`.

If you prefer a local web server (to mimic a hosted setup), run either of these commands from the
project root:

- Python: `python -m http.server 8000` then open `http://localhost:8000`
- Node: `npx serve -l 8000` then open `http://localhost:8000`

## Deploying a viewable web app
Because the project is pure HTML/CSS/JS, you can host it for free without any build process.

**GitHub Pages**
1. Commit and push this repository to GitHub.
2. In the repo settings, enable Pages and choose the `main` branch (root directory).
3. After Pages finishes building, your app is live at `https://<your-username>.github.io/<repo>/`.

**Netlify (drag-and-drop)**
1. Zip the repository or drag the project folder into the Netlify dashboard.
2. Set the publish directory to the repo root (where `index.html` lives).
3. Netlify deploys instantly and gives you a public URL you can share.

**Any static file host**
Upload `index.html`, `style.css`, and `main.js` to any static host (S3, Firebase Hosting,
Vercel/Netlify static site, or a simple VPS running `python -m http.server`). No server-side code is
required.

## File overview
- `index.html` – layout and content.
- `style.css` – theming and layout.
- `main.js` – interactions, translations, and local storage.
