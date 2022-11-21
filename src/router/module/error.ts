import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/:any(.*)',
  name: 'notFound',
  component: () => import('@/views/error/404.vue'),
  meta: {
    title: '錯誤頁面'
  }
} as RouteRecordRaw
