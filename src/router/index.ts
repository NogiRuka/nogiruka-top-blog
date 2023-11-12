import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'Index',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/archives',
        name: 'Archives',
        component: () => import('@/views/archives/index.vue'),
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/views/categories/index.vue'),
    },
    {
        path: '/tags',
        name: 'Tags',
        component: () => import('@/views/tags/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () => import('@/views/friends/index.vue'),
    },
    {
        path: '/timeline',
        name: 'Timeline',
        component: () => import('@/views/timeline/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
