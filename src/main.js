import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import VueKonva from 'vue-konva';
import router from './router';
import '@mdi/font/css/materialdesignicons.css' // Import Material Design Icons CSS


const app = createApp(App);

app.use(store);
app.use(vuetify);
app.use(VueKonva);
app.use(router);
app.mount('#app');
