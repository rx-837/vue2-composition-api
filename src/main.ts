import VueCompositionAPI, { createApp } from "@vue/composition-api";
import Vue from "vue";
import App from "./App.vue";

Vue.use(VueCompositionAPI)

createApp(App).mount('#app')
