<script setup>
defineProps({
  /** Change this to replay the entrance (e.g. route.path) */
  replayKey: {
    type: [String, Number],
    required: true,
  },
})
</script>

<template>
  <section
    :key="replayKey"
    id="say-my-name-top"
    class="hero-name"
    aria-hidden="true"
  >
    <span class="hero-name__mask">
      <span class="hero-name__ghost" aria-hidden="true">Lukka117</span>
      <span class="hero-name__text">Lukka117</span>
    </span>
  </section>
</template>
