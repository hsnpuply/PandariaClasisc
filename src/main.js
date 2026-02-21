import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AppView from '@/views/AppView.vue';
import router from '@/router';
import '@/assets/styles/main.css';

const app = createApp(AppView);
app.use(createPinia());
app.use(router);
app.mount('#app');
