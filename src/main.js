import { createApp, h } from 'vue'
import App from './App.vue'
import {BootstrapVue3} from 'bootstrap-vue-3'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp({
    render: () => h(App)
});

app.use(BootstrapVue3);
app.use(BootstrapIconsPlugin);

app.mount("#app");