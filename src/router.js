import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserProfile from "./views/UserProfile.vue";
import Usuarios from "./views/Usuarios.vue";
import Login from "./views/Login.vue";
import Cadastro from "./views/Cadastro.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/cadastro",
      name: "Cadastro",
      component: Cadastro
    },
    {
      path: "/usuarios",
      name: "Usuarios",
      component: Usuarios
    },
    {
      path: "/usuarios/:userId",
      name: "UserProfile",
      component: UserProfile
    }
  ]
});
