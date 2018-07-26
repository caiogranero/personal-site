import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
// import bCol from "bootstrap-vue/es/components/layout/col";
// import bContainer from "bootstrap-vue/es/components/layout/container";
// import bRow from "bootstrap-vue/es/components/layout/row";

import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.component("b-col", bCol);
// Vue.component("b-container", bContainer);
// Vue.component("b-row", bRow);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

import AppServices from "./services";
Object.keys(AppServices).forEach(k => Vue.use(AppServices[k]));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
