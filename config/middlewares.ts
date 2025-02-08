export default [
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://o-sun-git-strapi-integration-nad-cats-projects.vercel.app/",
      ],
      headers: "*",
    },
  },
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://res.cloudinary.com", // Ajout de Cloudinary
          ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
