import Vue from "vue";
import Router from "vue-router";
import UserProfile from "./views/UserProfile.vue";
import Usuarios from "./views/Usuarios.vue";
import Login from "./views/Login.vue";
import Cadastro from "./views/Cadastro.vue";
import Treinos from "./views/Treinos.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
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
    },
    {
      path: "/usuarios/:userId/treinos",
      name: "Treinos",
      component: Treinos
    }
  ]
});
