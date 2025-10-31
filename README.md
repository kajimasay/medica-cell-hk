# CVG Site (Vite + React + Tailwind)

This repository contains the marketing site for **Cell Vision Global** (Medica Cell).

## Local dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
1. Create a new GitHub repository and push this folder.
2. Go to https://vercel.com → **Add New Project** → **Import Git Repository**.
3. Framework Preset: **Vite** (auto-detected)  
   - Build Command: `npm run build`  
   - Output: `dist`
4. Deploy. Optionally connect a custom domain in **Settings → Domains**.

### Notes
- Logo is at `public/logo.png`.
- Edit site content in `src/App.jsx`.
- Tailwind is configured in `tailwind.config.js` and `src/index.css`.
