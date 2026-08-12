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
    <div class="hero-name__mask">
      <div class="hero-name__track">
        <span v-for="n in 8" :key="n" class="hero-name__item">Lukka117</span>
      </div>
    </div>
  </section>
</template>
