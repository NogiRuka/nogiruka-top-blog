import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// css
import 'uno.css'
import 'normalize.css'
import '@/style/index.css'
import '@/style/nogiruka-logo.css'

const app = createApp(App);
app.use(router);
app.mount('#nogiruka');
