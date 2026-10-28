# 🌮 CHINO'S TASCA CHINGARO — Cocina & Cantina

![CI](https://github.com/iksterbo-design/chinos-tasca-chingaro/actions/workflows/ci.yml/badge.svg)
![Pages](https://github.com/iksterbo-design/chinos-tasca-chingaro/actions/workflows/pages.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-gold)

Sitio demo completo + API de reservas para la cantina de la familia **Guzman**.

## Stack de herramientas (10 del toolbox)
VS Code · React · Tailwind CSS · Next.js · PostgreSQL · GitHub · npm · Webpack · Jest · Figma

## Stack del proyecto
- **Frontend:** HTML5, CSS3 (custom + Tailwind build), JS vanilla
- **Backend:** Node.js + Express (demo API de reservas)
- **Testing:** Jest + Supertest (unit + API)
- **Lint/Format:** ESLint + Prettier + Husky + lint-staged
- **CI/CD:** GitHub Actions (lint, test, deploy a GitHub Pages)
- **Container:** Docker
- **Build:** Tailwind CLI, npm scripts, Makefile

## Ejecutar local
```bash
npm install
cp .env.example .env
npm run dev        # server + watch css
# o
npm start          # solo server
```
Abre http://localhost:3000

## Tests
```bash
npm test           # jest + coverage
npm run lint
npm run format:check
```

## Demo flow (start → end)
1. `index.html` — hero con logo, favoritos, cervezas (Modelo/Corona pitchers), cantina, galería.
2. `menu.html` — carta completa.
3. `reservas.html` — form → confirmación.
4. `contacto.html` — contacto.
5. `admin.html` — dashboard demo.
6. API: `GET /api/health`, `POST /api/reservas`, `GET /api/menu`.

## Deploy
Push a `main` dispara GitHub Pages (sitio estático) + CI.

## Paleta
Chili `#e63946` · Oro `#e9c46a` · Jade `#2a9d8f` · Negro `#0a0a0a` · Crema `#f5f0e6`

© Familia Guzman — MIT License
