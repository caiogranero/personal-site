import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import vSelect from "vue-select";
import VueSweetalert2 from "vue-sweetalert2";
import "firebase/firestore";

import "bootstrap/dist/css/bootstrap.css";
import "izitoast/dist/css/iziToast.css";
import "slideout/dist/slideout.js";

import "@/directives/focus.js";

import firebase from "firebase";

import "bootstrap-social/bootstrap-social.css";

import dotenv from "dotenv";
dotenv.config();

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

import AppServices from "./services";
Object.keys(AppServices).forEach(k => Vue.use(AppServices[k]));

firebase.initializeApp({
  apiKey: "AIzaSyB2a3Zk3YmMAFuifWhxsxOVHx2VOfGtffE",
  authDomain: "cubeme-a1911.firebaseapp.com",
  databaseURL: "https://cubeme-a1911.firebaseio.com",
  projectId: "cubeme-a1911",
  storageBucket: "cubeme-a1911.appspot.com",
  messagingSenderId: "1045449942246"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
