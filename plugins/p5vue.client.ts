/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import p5vue from 'p5vue'
import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(p5vue)
})
