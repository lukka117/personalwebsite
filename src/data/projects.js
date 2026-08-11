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

/**
 * Non-code / visual work (brand, motion, packaging). Secondary to code builds.
 */
export const creativeWorks = [
  {
    id: 'cw-01',
    title: 'Solary',
    category: 'Brand & packaging',
    year: '2024',
    description: 'Visual identity and packaging exploration for a solar-forward product line.',
    image: '/assets/solary/finale-frames/solary-packaging1.jpg',
    featured: true,
  },
  {
    id: 'cw-02',
    title: 'Kapterid',
    category: 'Motion & identity',
    year: '2024',
    description: 'Brand frames and motion sequences for a concept identity system.',
    image: '/assets/kapterid/stationarykhapter.webp',
    featured: true,
  },
  {
    id: 'cw-03',
    title: 'The Stranding',
    category: 'Film stills',
    year: '2023',
    description: 'Still selection from a short narrative / footage edit.',
    image: '/assets/thestrandingimg.jpg',
    featured: true,
  },
  {
    id: 'cw-04',
    title: 'Monster',
    category: 'Campaign visual',
    year: '2023',
    description: 'Energy-branded visual treatment used as a campaign still.',
    image: '/assets/monster1.webp',
    featured: false,
  },
  {
    id: 'cw-05',
    title: 'Cudi Cast',
    category: 'Editorial / motion',
    year: '2023',
    description: 'Editorial motion piece and still from a music-led visual series.',
    image: '/assets/cudi1.webp',
    featured: false,
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
export const featuredCreativeWorks = creativeWorks.filter((w) => w.featured)
export const projectsByYear = {}
