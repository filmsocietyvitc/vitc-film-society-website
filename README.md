# VITC Film Society — React + Vite site

## Run it in VS Code

1. Install [Node.js](https://nodejs.org) (LTS version) if you don't have it — this gives you `npm`.
2. Open this folder in VS Code: **File → Open Folder**.
3. Open a terminal inside VS Code: **Terminal → New Terminal**.
4. Install dependencies:
   ```
   npm install
   ```
5. Start the dev server:
   ```
   npm run dev
   ```
6. Open the URL it prints (usually `http://localhost:5173`). It hot-reloads on every save.

## Background video

The site plays a fixed full-page video behind everything (`src/components/BackgroundVideo.jsx`).

1. Add your video file at `public/video-bg.mp4` (keep it under ~10-15MB and compressed — H.264 mp4, no audio needed since it's muted anyway).
2. Optional: add a still frame at `public/video-bg-poster.jpg` — it shows while the video is loading.
3. That's it — Vite serves anything in `public/` from the site root, so `/video-bg.mp4` just works.

Text sections sit on a translucent dark panel (`section` in `index.css`) so copy stays readable over the moving video; the hero itself is left clear so the video shows through fully there. Tweak the darkness in `.site-bg-overlay` and the `section { background: ... }` rule in `src/styles/index.css` if you want more or less video showing through.

## Project structure

```
src/
├── App.jsx              # wires all sections together
├── main.jsx              # React entry point
├── data.js                # all editable copy: domains, events, blog posts, team
├── styles/index.css      # design tokens + all styling
├── utils/renderBold.jsx  # tiny helper for **bold** text in data.js
└── components/
    ├── FilmRail.jsx       # sprocket-hole side rails
    ├── FrameCounter.jsx   # live 24fps timecode tied to scroll
    ├── Nav.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Domains.jsx
    ├── Portfolio.jsx      # swap `.reel-cell` divs for real video embeds
    ├── Events.jsx
    ├── Blog.jsx
    ├── Team.jsx           # swap `.team-portrait` divs for real photos
    ├── Contact.jsx        # recruitment form — wire handleSubmit to your backend
    └── Footer.jsx
```

## Where to edit things

- **All copy** (domains, events, reviews, team, events): `src/data.js`
- **Colors / fonts**: the `:root {}` block at the top of `src/styles/index.css`
- **Video embeds**: `src/components/Portfolio.jsx` — replace the placeholder `div`s with `<iframe>` embeds
- **Team photos**: `src/components/Team.jsx` — replace `.team-portrait` divs with `<img>`
- **Recruitment form submission**: `src/components/Contact.jsx` — `handleSubmit` currently just alerts; point it at a Google Form endpoint or your own API

## Build for production

```
npm run build
```
Outputs a static site to `dist/`. Deploy that folder to Vercel, Netlify, or GitHub Pages.

## Recommended VS Code extensions

- **ES7+ React/Redux/React-Native snippets** — faster component scaffolding
- **Prettier** — auto-formatting
- **ESLint** — catch mistakes as you type
# vitc-film-society
