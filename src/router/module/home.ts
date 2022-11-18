import type { RouteRecordRaw } from 'vue-router'
export default {
  page: {
    auth: false,
    name: 'home',
    menu: {
      title: 'Home',
      icon: 'Home',
    },
  },
  children: [
    {
      name: 'home/index',
      path: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        menu: { title: '首頁' }
      },
    },
  ],
} as { page: any, children: RouteRecordRaw[] }
