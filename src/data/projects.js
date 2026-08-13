import { assetUrl } from '@/utils/assetUrl'

/**
 * Code / product projects.
 */
export const projects = [
  {
    id: '01',
    title: 'Solary - Philips concept landing',
    stack: ['React', 'Three.js', 'JSX'],
    image: assetUrl('assets/solary/solarywebsite.gif'),
    description:
      'Landing for a fictional Philips wall lamp. Cinema 4D model in Three.js, React UI, scroll-linked camera.',
    year: 'May 2026',
    slug: null,
    repo: null,
    demo: 'https://lukka117.github.io/solary-web/',
    status: 'live',
    featured: true,
  },
  {
    id: '02',
    title: 'Product Comparator',
    stack: ['Vue.js', 'Node.js', 'OpenAI API', 'Firebase'],
    image: assetUrl('assets/product-comparator-demo.gif'),
    description:
      'Personal project - paste product URLs, answer a few questions, get an AI side-by-side comparison. Vue 3 frontend, Node scraper, Firebase auth. Runs locally; setup in the repo.',
    year: 'June 2026',
    slug: null,
    repo: 'https://github.com/lukka117/comparator',
    demo: null,
    status: 'local',
    featured: true,
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
    image: assetUrl('assets/solary/finale-frames/solary-packaging1.jpg'),
    featured: true,
    hero: {
      type: 'video',
      src: assetUrl('assets/solary/solaryanimation.mp4'),
      poster: assetUrl('assets/solary/11.jpg'),
    },
    gallery: [
      { src: assetUrl('assets/solary/finale-frames/12.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/7.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/9.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/8.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/5.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/4.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/3.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/2.png'), caption: 'One view after the other' },
      { src: assetUrl('assets/solary/finale-frames/10.png'), caption: 'One view after the other' },
    ],
  },
  {
    id: 'cw-02',
    slug: 'khapter-industries',
    title: 'Khapter Industries',
    category: 'Branding',
    year: '2024',
    description: 'Brand system, mark, and stationery.',
    image: assetUrl('assets/kapterid/stationarykhapter.webp'),
    featured: true,
    hero: {
      type: 'image',
      src: assetUrl('assets/kapterid/SequenceKapter.gif'),
    },
    gallery: [
      { src: assetUrl('assets/kapterid/kapter.jpg'), caption: 'Khapter Big Board' },
      { src: assetUrl('assets/kapterid/kapter16.jpg'), caption: 'A lovely intro' },
      { src: assetUrl('assets/kapterid/stationarykhapter.webp'), caption: 'The stationary they need' },
      { src: assetUrl('assets/kapterid/kapter15.webp'), caption: 'The process acts' },
      { src: assetUrl('assets/kapterid/kapter14.webp'), caption: 'The mark strikes' },
    ],
  },
  {
    id: 'cw-04',
    slug: 'monster-energy',
    title: 'Monster Energy',
    category: 'Campaign visual',
    year: '2023',
    description: 'Campaign still and motion for a Monster Energy treatment.',
    image: assetUrl('assets/monster1.webp'),
    featured: true,
    hero: {
      type: 'video',
      src: assetUrl('assets/monster energy animation.mp4'),
      poster: assetUrl('assets/monster1.webp'),
    },
    gallery: [
      { src: assetUrl('assets/monsterenergy.gif'), caption: 'Motion' },
      { src: assetUrl('assets/monster.png'), caption: 'Key visual' },
      { src: assetUrl('assets/monster1.webp'), caption: 'Still' },
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
