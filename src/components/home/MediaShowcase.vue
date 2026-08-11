<script setup>
import Container from '@/components/base/Container.vue'
import { motionPresets } from '@/composables/useMotionPresets'

defineProps({
  project: {
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
  <article
    class="py-6 md:py-8"
    v-motion="motionPresets.stagger(index)"
    v-motion-visible
  >
    <Container>
      <div
        class="grid grid-cols-12 items-start gap-x-8 gap-y-6"
      >
        <div
          class="col-span-12 md:col-span-7"
          :class="project.homeLayout === 'right' ? 'md:order-2' : 'md:order-1'"
        >
          <img
            v-if="project.homeImages?.primary"
            :src="project.homeImages.primary"
            :alt="`${project.homeCaption} preview`"
            class="w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div
          class="col-span-12 flex flex-col gap-4 md:col-span-5"
          :class="project.homeLayout === 'right' ? 'md:order-1' : 'md:order-2'"
        >
          <img
            v-if="project.homeImages?.secondary"
            :src="project.homeImages.secondary"
            :alt="`${project.homeCaption} sequence`"
            class="w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
          <div class="grid grid-cols-12 gap-4 border-t border-border pt-4">
            <span class="col-span-8 text-sm font-medium md:text-base">{{ project.homeCaption }}</span>
            <span class="col-span-4 text-right text-sm font-medium text-muted md:text-base">{{ project.year }}</span>
          </div>
        </div>
      </div>
    </Container>
  </article>
</template>
