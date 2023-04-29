// https://nuxt.com/docs/api/configuration/nuxt-config
// Add app.scss
export default defineNuxtConfig({
  css: ["normalize.css/normalize.css", "~/assets/styles/app.scss"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://use.typekit.net/uos8phh.css",
        },
      ],
    },
  },
  modules: ["nuxt-icon"],
});
