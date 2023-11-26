import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {
  createWebHistory,
  createRouter,
  setupDataFetchingGuard,
} from 'vue-router/auto'
import { i18n } from './locales/index';
// css
import 'virtual:uno.css'
import '@/styles/index.scss'
// confetti
import { initConfetti } from '@/utils/confetti.ts';
document.addEventListener('click', (event: MouseEvent) => initConfetti(event));

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return routes
  },
})

setupDataFetchingGuard(router)

const app = createApp(App);

app.use(router)
    .use(i18n)
     .use(createPinia());

app.mount('#nogiruka');
