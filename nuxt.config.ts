// https://nuxt.com/docs/api/configuration/nuxt-config
const defaultTheme = require("tailwindcss/defaultTheme");

export default defineNuxtConfig({
  build: {
    transpile: ["tslib"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo","@nuxtjs/tailwindcss", "@nuxt/image"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clq6ijytq4iv101ui8d586upr/master",
      },
    },
  },
  css: [
    "remixicon/fonts/remixicon.css",
    "highlight.js/styles/night-owl.min.css",
    "assets/font.css",
  ],
  tailwindcss: {
    config: {
      plugins: [require("@tailwindcss/forms")],
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            serif: ["Dm Sans", ...defaultTheme.fontFamily.serif],
          },
        },
      },
    },
  },
});
