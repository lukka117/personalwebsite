<script setup>
import Container from '@/components/base/Container.vue'
import ProjectCard from './ProjectCard.vue'

defineProps({
  year: {
    type: String,
    required: true,
  },
  projects: {
    type: Array,
    required: true,
  },
})

const yearLabel = (year) => `'${year.slice(-2)}`
</script>

<template>
  <section class="relative mb-[var(--spacing-section)]">
    <Container>
      <div class="grid grid-cols-12 gap-x-8 gap-y-10 pt-8">
        <div class="relative col-span-12 md:col-span-3">
          <span
            class="pointer-events-none text-[clamp(3rem,10vw,8rem)] font-black leading-none text-text/10"
            aria-hidden="true"
          >
            {{ yearLabel(year) }}
          </span>
        </div>

        <div
          class="col-span-12 grid gap-10 md:col-span-9"
          :class="projects.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'"
        >
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.id"
            :project="project"
            :index="index"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
