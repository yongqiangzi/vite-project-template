import { createApp } from 'vue';
import pinia from '@/store';
import App from './App.vue';
import { router } from './router';

import './styles/global.scss';
import './styles/theme.scss';
import 'normalize.css/normalize.css';

const app = createApp(App);

app.use(router).use(pinia).mount('#app');
