import { ref, readonly, computed } from 'vue'

const ready = ref(false)

/**
 * Gates first-paint intro animations until the preloader exits.
 */
export function useAppReady() {
  function markReady() {
    if (!ready.value) ready.value = true
  }

  return {
    ready: readonly(ready),
    isReady: computed(() => ready.value),
    markReady,
  }
}
