<script setup>
defineProps({
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'ghost', 'outline'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
})

const variantClasses = {
  primary:
    'bg-primary text-secondary hover:bg-accent hover:text-white border-transparent',
  ghost: 'bg-transparent text-text hover:text-accent border-transparent',
  outline:
    'bg-transparent text-text border-border hover:border-accent hover:text-accent',
}

const sizeClasses = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-6 py-3',
  lg: 'text-lg px-8 py-4 rounded-[var(--radius-pill)]',
}
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center font-medium rounded-[var(--radius-pill)] border transition-all duration-[var(--duration-normal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="href"
    :href="href"
    class="inline-flex items-center justify-center font-medium rounded-[var(--radius-pill)] border transition-all duration-[var(--duration-normal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    class="inline-flex items-center justify-center font-medium rounded-[var(--radius-pill)] border transition-all duration-[var(--duration-normal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </button>
</template>
