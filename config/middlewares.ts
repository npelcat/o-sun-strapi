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
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
