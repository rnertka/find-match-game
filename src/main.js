import {
    createApp
} from 'vue'
import App from './App.vue'
import mitt from 'mitt'

/* createApp(App).mount('#app') */

const eBus = mitt();
const app = createApp(App);

app.config.globalProperties.eBus = eBus;
app.mount('#app');