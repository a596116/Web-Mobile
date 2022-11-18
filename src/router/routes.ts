export const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: () => import('../views/Home.vue'),
        children: []
    },
    // {
    //     path: '/admin',
    //     name: 'admin',
    //     redirect: '/admin/home',
    //     component: () => import('@/layouts/admin.vue'),
    //     children: []
    // },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue'),
        meta: { guest: true },
    },
    // {
    //     path: '/regist',
    //     name: 'regist',
    //     component: () => import('../views/auth/login.vue'),
    //     meta: { guest: true },
    // },
    {
        path: '/:any(.*)',
        name: 'notFound',
        component: () => import('../views/error/404.vue'),
    },
]