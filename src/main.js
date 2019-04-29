import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import vSelect from "vue-select";
import VueSweetalert2 from "vue-sweetalert2";

import "bootstrap/dist/css/bootstrap.css";
import "izitoast/dist/css/iziToast.css";
import "slideout/dist/slideout.js";

import "@/directives/focus.js";

import dotenv from "dotenv";
dotenv.config();

Vue.use(VueSweetalert2);
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

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// function statusChangeCallback(response) {
//   console.log('statusChangeCallback');
//   console.log(response);
//   // The response object is returned with a status field that lets the
//   // app know the current login status of the person.
//   // Full docs on the response object can be found in the documentation
//   // for FB.getLoginStatus().
//   if (response.status === 'connected') {
//     // Logged into your app and Facebook.
//     testAPI();
//   } else {
//     // The person is not logged into your app or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this app.';
//   }
// }

window.fbAsyncInit = function() {
  window.FB.init({
    appId: "2309174122509812",
    cookie: true, // enable cookies to allow the server to access
    // the session
    xfbml: true, // parse social plugins on this page
    version: "v3.1" // The Graph API version to use for the call
  });
  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
};

// function testAPI() {
//   console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function(response) {
//     console.log('Successful login for: ' + response.name);
//     document.getElementById('status').innerHTML =
//       'Thanks for logging in, ' + response.name + '!';
//   });
// }
