<script setup>
import { computed } from 'vue'
import Reveal from '@/components/motion/Reveal.vue'

const props = defineProps({
  lines: {
    type: Array,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: undefined,
  },
})

const items = computed(() => props.lines.filter(Boolean))
</script>

<template>
  <Reveal variant="up" stagger :stagger-step="80">
    <div :id="id" :class="className">
      <span
        v-for="(line, i) in items"
        :key="i"
        class="reveal-child split-line"
        :style="{ '--i': i }"
      >
        {{ line }}
      </span>
    </div>
  </Reveal>
</template>
