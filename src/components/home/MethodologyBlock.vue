<script setup>
import Container from '@/components/base/Container.vue'
import { motionPresets } from '@/composables/useMotionPresets'

defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div v-motion="motionPresets.stagger(index)" v-motion-visible>
    <Container>
      <div class="grid grid-cols-12 items-baseline gap-x-8 gap-y-2 py-4">
        <h3 class="col-span-12 text-lg font-light md:col-span-8 md:text-xl">{{ item.title }}</h3>
        <span class="col-span-12 text-sm font-light text-muted md:col-span-4 md:text-right">{{ item.number }}</span>
      </div>
    </Container>
    <hr class="border-border" />
    <Container>
      <div class="grid grid-cols-12 gap-x-8 py-6">
        <div class="hidden md:col-span-7 md:block" aria-hidden="true" />
        <p class="col-span-12 text-sm font-medium leading-relaxed md:col-span-5 md:text-base">
          {{ item.text }}
        </p>
      </div>
    </Container>
    <hr class="border-border" />
  </div>
</template>
