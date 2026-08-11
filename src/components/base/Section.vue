<script setup>
defineProps({
  as: {
    type: String,
    default: 'section',
  },
  padded: {
    type: Boolean,
    default: true,
  },
  id: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <component
    :is="as"
    :id="id"
    class="w-full"
    :class="padded ? 'py-[var(--spacing-section)]' : ''"
  >
    <slot />
  </component>
</template>
