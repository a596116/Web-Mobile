import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/auth',
  component: () => import('@/layouts/auth.vue'),
  meta: { guest: true, menu: { title: '登入' } },
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login.vue'),
      meta: {
        title: '用戶登入'
      }
    },
  ],
} as RouteRecordRaw
