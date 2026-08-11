/**
 * Code / product projects. Fill slug, repo, demo, and snippet when ready.
 */
export const projects = [
  {
    id: '01',
    title: 'Coming soon',
    stack: ['JavaScript', 'Vue.js'],
    description: 'Slot for your next frontend build - replace title, stack, and snippet.',
    year: '2026',
    slug: null,
    repo: null,
    demo: null,
    status: 'soon',
    featured: true,
    snippet: `// your project entry
export function init() {
  return { ready: true }
}`,
  },
  {
    id: '02',
    title: 'Coming soon',
    stack: ['React', 'JavaScript'],
    description: 'Another build slot - UI, hooks, and product logic go here.',
    year: '2026',
    slug: null,
    repo: null,
    demo: null,
    status: 'soon',
    featured: true,
    snippet: `export default function App() {
  return createElement('main', null, 'Hello')
}`,
  },
  {
    id: '03',
    title: 'Coming soon',
    stack: ['Vue.js', 'UX/UI'],
    description: 'Third slot for a UX-led frontend piece with real code on show.',
    year: '2026',
    slug: null,
    repo: null,
    demo: null,
    status: 'soon',
    featured: true,
    snippet: `<template>
  <section>Ship it</section>
</template>

<script setup>
const ready = true
<\/script>`,
  },
]

export const methodologyItems = [
  {
    number: '1.1',
    title: 'Research & UX',
    text: 'Map the user, the flow, and the constraints before writing a line - UX/UI thinking first.',
  },
  {
    number: '1.2',
    title: 'Frontend systems',
    text: 'JavaScript, React, and Vue.js - components, states, and interfaces that stay clear and maintainable.',
  },
  {
    number: '1.3',
    title: 'AI-assisted craft',
    text: 'Use AI to move faster on boilerplate and exploration - keep the judgment, the taste, and the final call.',
  },
]

export const featuredHomeProjects = projects.filter((p) => p.featured)
export const projectsByYear = {}
