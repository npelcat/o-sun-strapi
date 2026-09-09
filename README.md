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

[Liste tes vrais content types : accordions, block-contents, component-with-links, pricing-cards]

## Deployment

Hosted on Koyeb. Push to `main` triggers an automatic deploy.
To roll back: Koyeb dashboard → Deployments → select previous → Redeploy.

Environment variables are configured directly in Koyeb — see `.env.example`
for the full list required.

## Access

Admin panel: [ton URL Koyeb]/admin
Read-only public API, no auth required for GET requests on published content.

## Contact

[ton contact, comme pour le repo principal]
