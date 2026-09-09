# O'Sun – Voix Animale — Strapi CMS

Headless CMS for managing editorial content (service pages, testimonials)
for the O'Sun booking platform. Deployed separately from the main Next.js app.

Frontend repo: https://github.com/npelcat/o-sun

## Getting started

Prerequisites: Node 22+ (or whatever version you use), npm

    git clone <this-repo>
    cd <folder>
    cp .env.example .env
    npm install
    npm run develop   # → http://localhost:1337/admin

## Content types

- **accordions** — collapsible content blocks (e.g. FAQ)
- **block-contents** — rich text sections with an optional picture
- **link-component** — content block with a link and picture
- **pricing-cards** — service pricing display

## Deployment

Hosted on Koyeb. Push to `main` triggers an automatic deploy.
To roll back: Koyeb dashboard → Deployments → select previous → Redeploy.

Environment variables are configured directly in Koyeb — see `.env.example`
for the full list required.

## Access

Admin panel: https://annual-bessie-nadcat-17feb7ed.koyeb.app/admin
Read-only public API, no auth required for GET requests on published content.

## Contact

Nadège Pelcat — https://www.linkedin.com/in/nadege-pelcat/
