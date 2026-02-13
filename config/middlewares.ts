export default [
  {
    name: "strapi::cors",
    config: {
      origin: ["https://o-sun-phi.vercel.app/"],
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
            "https://res.cloudinary.com",
          ],
        },
      },
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // Limite pour les formulaires
      jsonLimit: "256mb", // Limite pour JSON
      textLimit: "256mb", // Limite pour le texte
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // 250MB en bytes
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
