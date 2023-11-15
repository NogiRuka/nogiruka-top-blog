import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import i18n from "./locales/index";
// css
import 'virtual:uno.css'
import '@/styles/index.scss'
// confetti
import { initConfetti } from '@/utils/confetti.ts';
document.addEventListener('click', (event: MouseEvent) => initConfetti(event));

const app = createApp(App);
app.use(router)
    .use(i18n)
     .use(createPinia());

app.mount('#nogiruka');
