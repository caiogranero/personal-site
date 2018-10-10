import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import vSelect from "vue-select";

import "bootstrap/dist/css/bootstrap.css";
import "izitoast/dist/css/iziToast.css";
import "slideout/dist/slideout.js";

import dotenv from "dotenv";
dotenv.config();

Vue.use(BootstrapVue);

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

import AppServices from "./services";
Object.keys(AppServices).forEach(k => Vue.use(AppServices[k]));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
