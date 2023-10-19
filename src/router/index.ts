import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/Home.vue';
import Archives from '@/views/archives/Archives.vue';
import Categories from '@/views/categories/Categories.vue';
import Tags from '@/views/tags/Tags.vue';
import About from '@/views/about/About.vue';
import Links from '@/views/links/Links.vue';
import Timeline from '@/views/timeline/Timeline.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
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

