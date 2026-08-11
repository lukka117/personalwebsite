<script setup>
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
    class="group flex flex-col"
    v-motion="motionPresets.stagger(index)"
    v-motion-visible
  >
    <component
      :is="project.slug ? 'RouterLink' : 'div'"
      :to="project.slug ? `/projects/${project.slug}` : undefined"
      class="block overflow-hidden"
    >
      <img
        :src="project.preview"
        :alt="project.title"
        class="w-full object-contain pb-2 transition-transform duration-200 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </component>

    <div class="flex w-full flex-row gap-4">
      <span class="text-xs font-light md:text-sm">{{ project.id }}</span>
      <span class="text-xs font-light md:text-sm">{{ project.title }}</span>
    </div>

    <p
      class="text-xs font-light opacity-0 transition-opacity duration-300 group-hover:opacity-50 md:text-sm max-md:opacity-50"
    >
      {{ project.category }}
    </p>
  </article>
</template>
