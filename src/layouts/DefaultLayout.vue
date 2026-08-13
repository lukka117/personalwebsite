<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import Preloader from '@/components/shared/Preloader.vue'
import HeroName from '@/components/layout/HeroName.vue'
import { useAppReady } from '@/composables/useAppReady'

const route = useRoute()
const { isReady } = useAppReady()
const showHeroName = computed(() => isReady.value && route.meta.showHeroName === true)
</script>

<template>
  <div>
    <Preloader />
    <NavBar />

    <Transition name="hero-name">
      <HeroName v-if="showHeroName" :replay-key="route.path" />
    </Transition>

    <main
      class="main-content"
      :class="{ 'app-intro': isReady, 'main-content--no-hero': !showHeroName }"
    >
      <RouterView v-slot="{ Component, route: currentRoute }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="currentRoute.path" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>
