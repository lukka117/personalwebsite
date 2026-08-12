<script setup>
import VisualWorkCard from '@/components/projects/VisualWorkCard.vue'

defineProps({
  works: {
    type: Array,
    required: true,
  },
  /** Quieter heading for home; fuller copy on projects page */
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="visual-works" :class="{ 'visual-works--compact': compact }">
    <header class="visual-works__head">
      <div>
        <p class="dev-page__eyebrow">Also</p>
        <h2 class="visual-works__title">
          {{ compact ? 'Visual & brand' : 'Visual & brand work' }}
        </h2>
        <p v-if="!compact" class="visual-works__lead">
          Brand, motion, and stills - secondary to the code work.
        </p>
      </div>
    </header>

    <div class="visual-grid">
      <VisualWorkCard
        v-for="work in works"
        :key="work.id"
        :work="work"
      />
    </div>
  </section>
</template>
