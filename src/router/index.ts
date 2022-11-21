import { createRouter, createWebHistory } from 'vue-router'
import guard from './guard'
import routes from './module/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

guard(router)

export default router
