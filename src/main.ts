import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { VegaComponentLibrary } from '@heartlandone/vega-vue';
const app = createApp(App).use(VegaComponentLibrary);
VegaComponentLibrary.isReady().then( ()=>
{
    app.mount("#app");
});

//createApp(App).mount('#app')
