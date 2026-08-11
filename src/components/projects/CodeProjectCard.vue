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
        {{ project.status === 'live' ? 'Live' : 'Soon' }}
      </span>
    </header>

    <div class="code-card__body">
      <div class="code-card__info">
        <h2 class="code-card__title">{{ project.title }}</h2>
        <p class="code-card__desc">{{ project.description }}</p>
        <div class="code-card__stack">
          <span
            v-for="tag in project.stack"
            :key="tag"
            class="code-pill"
          >{{ tag }}</span>
        </div>
        <div class="code-card__actions">
          <RouterLink
            v-if="project.slug"
            class="code-pill code-pill--action"
            :to="`/projects/${project.slug}`"
          >
            Open
          </RouterLink>
          <a
            v-if="project.repo"
            class="code-pill code-pill--action"
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          <a
            v-if="project.demo"
            class="code-pill code-pill--action"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <span
            v-if="!project.slug && !project.repo && !project.demo"
            class="code-card__hint"
          >
            Space reserved for code
          </span>
        </div>
      </div>

      <pre class="code-card__snippet" tabindex="0"><code>{{ project.snippet }}</code></pre>
    </div>
  </article>
</template>
