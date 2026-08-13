<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCreativeWorkBySlug } from '@/data/projects'

const route = useRoute()
const router = useRouter()
const work = computed(() => getCreativeWorkBySlug(route.params.slug))

watch(
  work,
  (value) => {
    if (!value) router.replace('/projects')
  },
  { immediate: true },
)

function chunk(items, size) {
  const rows = []
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size))
  }
  return rows
}
</script>

<template>
  <div v-if="work" class="work-page">
    <p class="dev-page__eyebrow">
      <RouterLink to="/projects">Projects</RouterLink>
      <span> / {{ work.category }}</span>
    </p>
    <h1 class="work-page__title">{{ work.title }}</h1>

    <div v-if="work.hero" class="work-page__hero">
      <video
        v-if="work.hero.type === 'video'"
        class="work-page__video"
        :src="work.hero.src"
        :poster="work.hero.poster"
        controls
        playsinline
      />
      <img
        v-else
        class="work-page__hero-img"
        :src="work.hero.src"
        :alt="work.title"
      />
    </div>

    <div
      v-for="(row, rowIndex) in chunk(work.gallery || [], 3)"
      :key="rowIndex"
      class="work-page__row"
    >
      <figure
        v-for="item in row"
        :key="item.src"
        class="work-page__item"
      >
        <img :src="item.src" :alt="item.caption || work.title" loading="lazy" />
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    </div>

    <div id="form-header">
      Are you Ready<br />to embark<br />a new project?<br />
    </div>
    <div id="send-form-button">
      <RouterLink to="/contact">
        Let's make it happen
      </RouterLink>
    </div>
  </div>
</template>
