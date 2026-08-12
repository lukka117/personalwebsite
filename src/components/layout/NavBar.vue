<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const { toggleTheme } = useTheme()
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 16)

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function isActive(path) {
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>

<template>
  <div class="hero-container">
    <header>
      <nav id="navbar" :class="{ 'navbar-solid': scrolled }" aria-label="Main navigation">
        <RouterLink id="navbar-brand" class="ds-nav" to="/">
          My name is lukkafz
        </RouterLink>

        <div class="page-element-pages-shortcut">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            class="pages-shortcut nav-link ds-nav"
            :to="link.to"
            :aria-current="isActive(link.to) ? 'page' : undefined"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="location-theme">
          <div id="work-location" class="ds-nav">Biella & Brescia, IT</div>
          <button
            id="theme-toggle-btn"
            type="button"
            aria-label="Cambia tema"
            @click="toggleTheme()"
          />
        </div>
      </nav>
    </header>
  </div>
</template>
