// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
  ssr: true,
  nitro: {
    preset: "static",
  },
  runtimeConfig: {
    public: {
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER,
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL,
    },
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"},
      ],
      meta: [
        { name: "robots", content: "index, follow" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
    },
  },
  css: ["~/assets/scss/main.scss"],
  i18n: {
    defaultLocale: "pt",
    langDir: "locales/",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "pt",
        iso: "pt-BR",
        name: "Português",
        file: "pt.json",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "es",
        iso: "es-ES",
        name: "Espanol",
        file: "es.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "pt",
    },
  },
});
