// https://nuxt.com/docs/api/configuration/nuxt-config
// Add app.scss
export default defineNuxtConfig({
  css: ["normalize.css/normalize.css", "~/assets/styles/app.scss"],
  app: {
    head: {
      title: "Green Dragon Bungay",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "The Green Dragon in Bungay, Suffolk – a highly-rated pub & brewery, praised for its friendly staff, exceptional craft beers, and delicious food. Open Thu-Sat, 12-8pm.",
        },
      ],
      link: [
        // Profile Pro.
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://use.typekit.net/uos8phh.css",
        },
        // https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
        // 32 x 32
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        //  180 x 180
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  modules: ["nuxt-icon"],
});
