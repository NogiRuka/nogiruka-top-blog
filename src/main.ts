import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

// UnoCSS
import 'virtual:uno.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
