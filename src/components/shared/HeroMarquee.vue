<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showHeroName = computed(() => route.meta.showHeroName === true)
</script>

<template>
  <div
    v-if="showHeroName"
    class="hero-name pointer-events-none fixed left-0 top-0 z-0 flex h-[20vw] w-full items-center justify-center pt-[5vw] text-text opacity-[0.06]"
    aria-hidden="true"
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :visible="{ opacity: 0.06, y: -30, transition: { duration: 2000 } }"
    v-motion-visible
  >
    Lukka117
  </div>
</template>
