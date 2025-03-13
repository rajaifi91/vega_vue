import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "@heartlandone/vega/style/vega.css";
import { VegaComponentLibrary } from "@heartlandone/vega-vue";

const app = createApp(App)
.use(VegaComponentLibrary)
.use(router);

VegaComponentLibrary.isReady().then(() => {
    app.mount("#app");
  });
