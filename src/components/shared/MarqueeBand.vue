<script setup>
defineProps({
  text: {
    type: String,
    default: "Let's work together",
  },
})
</script>

<template>
  <section class="marquee-band" aria-hidden="true">
    <div class="marquee-band__track">
      <span v-for="n in 8" :key="n" class="marquee-band__item">{{ text }}</span>
    </div>
  </section>
</template>
