import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home/index.vue';
import Archives from '@/views/archives/index.vue';
import Categories from '@/views/categories/index.vue';
import Tags from '@/views/tags/index.vue';
import About from '@/views/about/index.vue';
import Links from '@/views/links/index.vue';
import Timeline from '@/views/timeline/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'Index',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/archives',
        name: 'Archives',
        component: Archives
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/tags',
        name: 'Tags',
        component: Tags
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/links',
        name: 'Links',
        component: Links
    },
    {
        path: '/timeline',
        name: 'Timeline',
        component: Timeline
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;