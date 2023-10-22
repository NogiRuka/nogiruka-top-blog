import { createApp } from 'vue'
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

const app = createApp(App);
app.use(router);

app.mount('#nogiruka');
