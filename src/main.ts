import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// css
import 'virtual:uno.css'
import 'normalize.css'
import '@/style/index.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
