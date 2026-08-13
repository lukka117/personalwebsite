/**
 * Code / product projects.
 */
export const projects = [
  {
    id: '01',
    title: 'Solary - Philips concept landing',
    stack: ['React', 'Three.js', 'JSX'],
    image: '/assets/solary/solarywebsite.gif',
    description:
      'Landing for a fictional Philips wall lamp. Cinema 4D model in Three.js, React UI, scroll-linked camera.',
    year: '2025',
    slug: null,
    repo: null,
    demo: 'https://lukka117.github.io/solary-web/',
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
    stack: ['Vue.js', 'Node.js', 'OpenAI API', 'Firebase'],
    image: '/assets/product-comparator-demo.gif',
    description:
      'Personal project — paste product URLs, answer a few questions, get an AI side-by-side comparison. Vue 3 frontend, Node scraper, Firebase auth. Runs locally; setup in the repo.',
    year: '2025',
    slug: null,
    repo: 'https://github.com/lukka117/comparator',
    demo: null,
    status: 'local',
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
    description: 'Next project - TBD.',
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
    slug: 'solary',
    title: 'Philips Solary',
    category: '3D modelling',
    year: '2024',
    description: 'Fictional Philips wall lamp - Cinema 4D model and product views.',
    image: '/assets/solary/finale-frames/solary-packaging1.jpg',
    featured: true,
    hero: {
      type: 'video',
      src: '/assets/solary/solaryanimation.mp4',
      poster: '/assets/solary/11.jpg',
    },
    gallery: [
      { src: '/assets/solary/finale-frames/12.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/7.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/9.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/8.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/5.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/4.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/3.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/2.png', caption: 'One view after the other' },
      { src: '/assets/solary/finale-frames/10.png', caption: 'One view after the other' },
    ],
  },
  {
    id: 'cw-02',
    slug: 'khapter-industries',
    title: 'Khapter Industries',
    category: 'Branding',
    year: '2024',
    description: 'Brand system, mark, and stationery.',
    image: '/assets/kapterid/stationarykhapter.webp',
    featured: true,
    hero: {
      type: 'image',
      src: '/assets/kapterid/SequenceKapter.gif',
    },
    gallery: [
      { src: '/assets/kapterid/kapter.jpg', caption: 'Khapter Big Board' },
      { src: '/assets/kapterid/kapter16.jpg', caption: 'A lovely intro' },
      { src: '/assets/kapterid/stationarykhapter.webp', caption: 'The stationary they need' },
      { src: '/assets/kapterid/kapter15.webp', caption: 'The process acts' },
      { src: '/assets/kapterid/kapter14.webp', caption: 'The mark strikes' },
    ],
  },
  {
    id: 'cw-04',
    slug: 'monster-energy',
    title: 'Monster Energy',
    category: 'Campaign visual',
    year: '2023',
    description: 'Campaign still and motion for a Monster Energy treatment.',
    image: '/assets/monster1.webp',
    featured: true,
    hero: {
      type: 'video',
      src: '/assets/monster%20energy%20animation.mp4',
      poster: '/assets/monster1.webp',
    },
    gallery: [
      { src: '/assets/monsterenergy.gif', caption: 'Motion' },
      { src: '/assets/monster.png', caption: 'Key visual' },
      { src: '/assets/monster1.webp', caption: 'Still' },
    ],
  },
]

export const methodologyItems = [
  {
    number: '1.1',
    title: 'Research & UX',
    text: 'Map users and constraints first. Decide the UI before writing much code.',
  },
  {
    number: '1.2',
    title: 'Frontend',
    text: 'JavaScript, React, Vue - components and state kept simple enough to reopen later.',
  },
  {
    number: '1.3',
    title: 'Finish',
    text: 'Tighten interaction and accessibility, then ship something you can actually open.',
  },
]

export const featuredHomeProjects = projects.filter((p) => p.featured)
export const featuredCreativeWorks = creativeWorks.filter((w) => w.featured)
export function getCreativeWorkBySlug(slug) {
  return creativeWorks.find((w) => w.slug === slug)
}
export const projectsByYear = {}
