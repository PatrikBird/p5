// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/critters',
    '@vueuse/nuxt',
  ],
  typescript: {
    shim: false,
  },
})
