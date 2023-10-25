import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
// css
import 'uno.css'
import 'normalize.css'
import '@/style/index.css'
import '@/style/nogiruka-logo.css'
// ts
import { initConfetti } from '@/utils/confetti.ts';
document.addEventListener('click', (event: MouseEvent) => initConfetti(event));

// todo 国际化
// https://vue-i18n.intlify.dev/
const i18n = createI18n({
    // something vue-i18n options here ...
})


const app = createApp(App);
app.use(router)
    .use(i18n)
    .use(createPinia());

app.mount('#nogiruka');