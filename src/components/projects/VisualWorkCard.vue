<script setup>
defineProps({
  work: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="visual-card">
    <div class="visual-card__media">
      <img
        class="visual-card__img"
        :src="work.image"
        :alt="work.title"
        loading="lazy"
      />
    </div>
    <div class="visual-card__meta">
      <div class="visual-card__row">
        <h3 class="visual-card__title">{{ work.title }}</h3>
        <span class="visual-card__year">{{ work.year }}</span>
      </div>
      <p class="visual-card__category">{{ work.category }}</p>
      <p class="visual-card__desc">{{ work.description }}</p>
    </div>
  </article>
</template>
