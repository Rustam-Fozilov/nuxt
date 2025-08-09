// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  icon: {
    provider: 'iconify',
    mode: 'svg',
  },
  ui: {
    colorMode: false,
  }
});
