<script setup>
import { projects } from '@/data/projects'
import CodeProjectCard from '@/components/projects/CodeProjectCard.vue'
</script>

<template>
  <div class="dev-page">
    <header class="dev-page__intro">
      <p class="dev-page__eyebrow">Projects</p>
      <h1 class="dev-page__title">Code builds</h1>
      <p class="dev-page__lead">
        Frontend work in JavaScript, React, and Vue.js - slots below are ready for real repos and snippets.
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
