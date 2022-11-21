import type { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/',
    component: () => import('@/layouts/home.vue'),
    meta: { auth: false, menu: { title: '首頁' } },
    children: [
      {
        name: 'home',
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首頁'
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/home.vue'),
    meta: { auth: true, menu: { title: '用戶' } },
    children: [
      {
        name: 'user',
        path: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用戶'
        },
      },
    ],
  },
] as RouteRecordRaw[] 
