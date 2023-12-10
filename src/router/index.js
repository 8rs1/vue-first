import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/homePage.vue')
    },
    {
      path: '/contact',
      name: 'contactUs',
      component: () => import('@/views/contactPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/aboutPage.vue')
    }
  ]
})

export default router
