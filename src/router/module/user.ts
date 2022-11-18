import type { RouteRecordRaw } from 'vue-router'
export default {
    page: {
        auth: true,
        name: 'home',
        menu: {
            title: 'User',
            icon: 'User',
        },
    },
    children: [
        {
            name: 'home/user',
            path: 'user',
            component: () => import('@/views/user/index.vue'),
            meta: {
                menu: { title: '用戶' }
            },
        },
    ],
} as { page: any, children: RouteRecordRaw[] }
