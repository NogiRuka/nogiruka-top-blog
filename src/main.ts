import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import i18n from "./locales/index";
// css
import 'uno.css'
import 'normalize.css'
import '@/style/base.scss'
// confetti
import { initConfetti } from '@/utils/confetti.ts';
document.addEventListener('click', (event: MouseEvent) => initConfetti(event));

// todo 国际化


const app = createApp(App);
app.use(router)
    .use(i18n)
    .use(createPinia());

app.mount('#nogiruka');
