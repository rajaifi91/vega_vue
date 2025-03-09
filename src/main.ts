import './assets/main.css'
import '@heartlandone/vega/style/vega.css';

import { createApp } from 'vue'
import App from './App.vue'
//import router from 'vue-router'


import { VegaComponentLibrary } from '@heartlandone/vega-vue';
const app = createApp(App).use(VegaComponentLibrary);
VegaComponentLibrary.isReady().then( ()=>
{   
 //app.use(router);
 app.mount("#app"); 
});
