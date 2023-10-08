<script setup lang='ts'>
useHead({
  title: 'p5 sketches | Patrik Bird',
  meta: [
    { name: 'description', content: 'Some sketches made with p5js.' },
  ],
})

const routes = useRouter().getRoutes()

const routesWithoutIndex = computed(() => {
  const index = routes.findIndex(route => route.name === 'index')
  // remove root page from list
  if (index !== -1)
    routes.splice(index, 1)

  return routes
})
</script>

<template>
  <main>
    <h2 class="text-3xl font-bold tracking-tight">
      Sketches
    </h2>
    <p class="mt-6 text-lg">
      made with p5js.
    </p>
    <ul class="pl-0 mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
      <li v-for="{ name, path } in routesWithoutIndex" :key="name" class="list-none">
        <NuxtLink
          :to="path"
          class="no-underline"
        >
          <img
            class="aspect-[3/2] w-full object-cover"
            src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
            alt="test"
          >
          <p>
            Some name here
          </p>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
