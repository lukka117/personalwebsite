/**
 * Code / product projects.
 */
export const projects = [
  {
    id: '01',
    title: 'Solary — Philips concept landing',
    stack: ['React', 'Three.js', 'JSX'],
    image: '/assets/solary/finale-frames/solary-packaging1.jpg',
    description:
      'Landing page for a fictional Philips wall lamp. 3D model built in Cinema 4D, loaded and lit in Three.js inside a React app. Scroll-driven camera, product configurator, and a product-marketing layout built around the geometry.',
    year: '2025',
    slug: null,
    repo: null,
    demo: null,
    status: 'live',
    featured: true,
    snippet: `import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons'

export function useLampScene(canvasRef) {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 1.2, 4)

    const light = new THREE.RectAreaLight('#fff5e0', 6, 1, 2)
    light.position.set(0, 2, 1)
    scene.add(light)

    new GLTFLoader().load('/models/solary.glb', ({ scene: model }) => {
      scene.add(model)
    })

    // scroll → camera orbit
    const onScroll = () => {
      const t = window.scrollY / document.body.scrollHeight
      camera.position.x = Math.sin(t * Math.PI) * 2
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}`,
  },
  {
    id: '02',
    title: 'Product Comparator',
    stack: ['Vue.js', 'JavaScript', 'OpenAI API'],
    image: '/assets/gradient.webp',
    description:
      'Drop up to 5 product URLs and get a structured side-by-side breakdown: materials, colorways, sizing, pricing, and more. o4-mini fetches and reasons over each page, then returns a clean comparison table. Built with Vue 3 and a direct OpenAI API call — no backend.',
    year: '2025',
    slug: null,
    repo: null,
    demo: null,
    status: 'live',
    featured: true,
    snippet: `// composables/useComparator.js
import { ref } from 'vue'

const FIELDS = [
  'name', 'brand', 'price', 'colors',
  'materials', 'sizing', 'key features',
]

export function useComparator() {
  const results = ref([])
  const loading = ref(false)

  async function compare(urls) {
    loading.value = true
    const prompt = \`Compare these products on:
\${FIELDS.join(', ')}.
URLs: \${urls.join(', ')}
Return a JSON array, one object per product.\`

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${import.meta.env.VITE_OPENAI_KEY}\`,
      },
      body: JSON.stringify({
        model: 'o4-mini',
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    const data = await res.json()
    results.value = JSON.parse(data.choices[0].message.content)
    loading.value = false
  }

  return { results, loading, compare }
}`,
  },
  {
    id: '03',
    title: 'Coming soon',
    stack: ['Vue.js', 'JavaScript'],
    description:
      'Third slot — reserved for the next build.',
    year: '2026',
    slug: null,
    repo: null,
    demo: null,
    status: 'soon',
    featured: true,
    snippet: `<template>
  <section>Next up</section>
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
    description:
      'Identity and packaging system for a solar-forward line - materials, hierarchy, and shelf presence.',
    image: '/assets/solary/finale-frames/solary-packaging1.jpg',
    featured: true,
  },
  {
    id: 'cw-02',
    title: 'Kapterid',
    category: 'Motion & identity',
    year: '2024',
    description:
      'Concept branding with motion frames - mark, rhythm, and a system that can move on screen.',
    image: '/assets/kapterid/stationarykhapter.webp',
    featured: true,
  },
  {
    id: 'cw-03',
    title: 'The Stranding',
    category: 'Film stills',
    year: '2023',
    description:
      'Still selection from a short narrative edit - atmosphere, framing, and pacing in a single frame.',
    image: '/assets/thestrandingimg.jpg',
    featured: true,
  },
  {
    id: 'cw-04',
    title: 'Monster',
    category: 'Campaign visual',
    year: '2023',
    description:
      'High-energy campaign treatment - color, type, and impact built for quick recognition.',
    image: '/assets/monster1.webp',
    featured: false,
  },
  {
    id: 'cw-05',
    title: 'Cudi Cast',
    category: 'Editorial / motion',
    year: '2023',
    description:
      'Music-led editorial series - stills and motion that carry tone without over-explaining.',
    image: '/assets/cudi1.webp',
    featured: false,
  },
]

export const methodologyItems = [
  {
    number: '1.1',
    title: 'Research & UX',
    text: 'Before code: map users, goals, and constraints. Wireframes and UI decisions land first so the frontend has a clear job - screens, flows, and empty states included.',
  },
  {
    number: '1.2',
    title: 'Frontend systems',
    text: 'JavaScript, React, and Vue.js - components, state, and interfaces built to stay maintainable. Prefer patterns you can open months later and still understand.',
  },
  {
    number: '1.3',
    title: 'Polish & ship',
    text: 'Detail work on interaction, spacing, and accessibility. Then ship - demos, snippets, and repos that show how the thing actually runs, not just how it looks in a mock.',
  },
]

export const featuredHomeProjects = projects.filter((p) => p.featured)
export const featuredCreativeWorks = creativeWorks.filter((w) => w.featured)
export const projectsByYear = {}
