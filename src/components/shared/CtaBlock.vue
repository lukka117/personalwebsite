<script setup>
import Container from '@/components/base/Container.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { motionPresets } from '@/composables/useMotionPresets'

defineProps(  {
    title: {
      type: String,
      default: 'Are you Ready\nto embark\na new project?',
    },
    buttonText: {
      type: String,
      default: "Let's make it happen",
    },
  buttonTo: {
    type: String,
    default: '/contact',
  },
})
</script>

<template>
  <div
    class="py-[var(--spacing-section)]"
    v-motion="motionPresets.fadeUp"
    v-motion-visible
  >
    <Container>
      <div class="text-center">
        <h2
          class="whitespace-pre-line text-4xl font-black uppercase leading-tight md:text-6xl lg:text-7xl"
        >
          {{ title }}
        </h2>
        <div class="mt-8">
          <BaseButton :to="buttonTo" size="lg">
            {{ buttonText }}
          </BaseButton>
        </div>
      </div>
    </Container>
  </div>
</template>
