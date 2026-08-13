<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <article class="code-card">
    <header class="code-card__meta">
      <span class="code-card__id">{{ String(index + 1).padStart(2, '0') }}</span>
      <span class="code-card__year">{{ project.year }}</span>
      <span class="code-card__status" :data-status="project.status">
        {{
          project.status === 'live'
            ? 'live'
            : project.status === 'local'
              ? 'local'
              : 'soon'
        }}
      </span>
    </header>

    <div class="code-card__body">
      <div class="code-card__info">
        <h2 class="code-card__title">{{ project.title }}</h2>
        <p class="code-card__desc">{{ project.description }}</p>
        <div class="code-card__stack">
          <span v-for="tag in project.stack" :key="tag" class="code-pill">{{ tag }}</span>
        </div>
        <div class="code-card__actions">
          <a
            v-if="project.demo"
            class="liquid-glass liquid-glass--pill code-card__glass-btn"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit site
          </a>
          <a
            v-if="project.repo"
            class="liquid-glass liquid-glass--pill code-card__glass-btn"
            :class="{ 'code-card__glass-btn--secondary': project.demo }"
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ project.demo ? 'Repo' : 'View repo' }}
          </a>
          <span v-if="!project.demo && !project.repo" class="code-card__hint">
            No links yet
          </span>
        </div>
      </div>

      <div class="code-card__preview">
        <img
          v-if="project.image"
          class="code-card__img"
          :src="project.image"
          :alt="project.title"
          loading="lazy"
        />
        <div v-else class="code-card__placeholder">
          <span>Preview</span>
        </div>
      </div>
    </div>
  </article>
</template>
