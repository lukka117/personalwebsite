<script setup>
import { projects, creativeWorks } from '@/data/projects'
import CodeProjectCard from '@/components/projects/CodeProjectCard.vue'
import VisualWorksSection from '@/components/projects/VisualWorksSection.vue'
</script>

<template>
  <div class="dev-page">
    <header class="dev-page__intro">
      <p class="dev-page__eyebrow">Projects</p>
      <h1 class="dev-page__title">Code</h1>
      <p class="dev-page__lead">
        Frontend projects in JavaScript, React, and Vue.
      </p>
    </header>

    <div class="code-grid">
      <CodeProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>

    <VisualWorksSection :works="creativeWorks" />

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
