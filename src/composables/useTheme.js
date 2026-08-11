import { useDark, useToggle } from '@vueuse/core'
import { watchEffect } from 'vue'

/**
 * Theme - dark-first Cursor-like palette on body classes.
 */
export function useTheme() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: 'lukka117-theme-v2',
    initialValue: 'dark',
  })

  const toggleTheme = useToggle(isDark)

  watchEffect(() => {
    document.body.classList.toggle('dark-theme', !!isDark.value)
    document.body.classList.toggle('light-theme', !isDark.value)
  })

  return { isDark, toggleTheme }
}
