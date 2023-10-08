<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    type="button"
    aria-label="Toggle color mode"
    class="h-12 w-12 rounded-full border-none bg-zinc-50 hover:bg-zinc-100 dark:(hover:bg-zinc-800 bg-zinc-900) inline-block items-center justify-center cursor-pointer"
    @click="toggleDark()"
  >
    <span class="i-line-md:sunny-outline-loop dark:i-line-md:moon h-5 w-5" />
  </button>
</template>
