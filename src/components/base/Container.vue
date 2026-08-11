<script setup>
defineProps({
  /** Tailwind max-width token: sm | md | lg | xl | full */
  size: {
    type: String,
    default: 'xl',
  },
  as: {
    type: String,
    default: 'div',
  },
})

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
}
</script>

<template>
  <component
    :is="as"
    class="mx-auto w-full px-[var(--spacing-gutter)]"
    :class="sizeClasses[size]"
  >
    <slot />
  </component>
</template>
