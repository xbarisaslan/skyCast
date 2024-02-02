export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: false,
    timeline: {
      enabled: false,
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
