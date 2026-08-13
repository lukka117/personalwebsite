import { createRouter, createWebHistory } from 'vue-router'
import { getCreativeWorkBySlug } from '@/data/projects'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Home', showHeroName: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'About', showHeroName: true },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: { title: 'Projects' },
    },
    {
      path: '/projects/:slug',
      name: 'work-detail',
      component: () => import('@/views/WorkDetailView.vue'),
      meta: { title: 'Project' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { title: 'Contact', showHeroName: true },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.afterEach((to) => {
  if (to.name === 'work-detail') {
    const work = getCreativeWorkBySlug(to.params.slug)
    document.title = work ? `${work.title} - lukkafz` : 'Project - lukkafz'
    return
  }
  document.title = to.meta.title
    ? `${to.meta.title} - lukkafz`
    : 'lukkafz - Junior Frontend Developer'
})

export default router
