<script setup>
import { useAppReady } from '@/composables/useAppReady'

const { isReady } = useAppReady()
</script>

<template>
  <footer>
    <section
      id="say-my-name-bottom"
      class="outro-name"
      :class="{ 'app-intro': isReady }"
      aria-hidden="true"
    >
      lukkafz
    </section>
    <div class="copyright-styles" :class="{ 'app-intro': isReady }">
      © lukkafz. Please don't copy my aka cuz I kinda like it :D.
    </div>
  </footer>
</template>
