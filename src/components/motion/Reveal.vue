<script setup>
/**
 * Reliable scroll reveal. Keep motion simple: opacity + translateY.
 * Optional stagger via .reveal-child with data-i (0-based).
 */
import { onMounted, onBeforeUnmount, ref, computed, nextTick } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'up',
    validator: (v) => ['up', 'left', 'right', 'fade'].includes(v),
  },
  delay: {
    type: Number,
    default: 0,
  },
  stagger: {
    type: Boolean,
    default: false,
  },
  staggerStep: {
    type: Number,
    default: 100,
  },
})

const root = ref(null)
let observer

const classes = computed(() => [
  'reveal',
  `reveal--${props.variant}`,
  props.stagger ? 'reveal--stagger' : null,
])

const style = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-stagger': `${props.staggerStep}ms`,
}))

function reveal(el) {
  el.classList.add('is-visible')
}

onMounted(async () => {
  await nextTick()
  const el = root.value
  if (!el) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveal(el)
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      reveal(entry.target)
      observer.unobserve(entry.target)
    },
    {
      threshold: 0.01,
      rootMargin: '0px 0px -6% 0px',
    },
  )

  observer.observe(el)

  // Catch elements already in view - wait 2 frames so initial styles paint first
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || 0
  if (rect.top < vh * 0.94 && rect.bottom > 0) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!el.classList.contains('is-visible')) {
          reveal(el)
          observer.unobserve(el)
        }
      })
    })
  }
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="root" :class="classes" :style="style">
    <slot />
  </div>
</template>
