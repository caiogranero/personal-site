<template>
  <div class="login">
    <br><br>
    <b-container>
    <b-row>
      <b-col md="12">
        <h2><strong>Acesse sua conta</strong></h2>
        <br>
        <strong>Não tem uma conta ainda? <router-link to="Cadastro">Cadastre-se</router-link></strong>
      </b-col>
    </b-row>
    
    <br>
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="5" class="justify-content-md-center" align-self="center">
        <b-form @submit="onSubmit">
            <b-form-input type="email" v-model="form.email" required placeholder="Email" size="md">
            </b-form-input>
            <br>
            <b-form-input type="password" v-model="form.senha" size="md" required placeholder="Senha">
            </b-form-input>
            <br>
          <b-button type="submit" variant="primary">
            ACESSAR
          </b-button>
        </b-form>
      </b-col>
      <b-col md="5" class="login-image">
        <img src="/img/Kettle_Bell.png">
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import iziToast from "izitoast";
const jwtDecode = require("jwt-decode");

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$AuthService
        .doLogin(this.form)
        .then(result => {
          Cookies.set("PERSONAL-TOKEN", result.data.data);
          this.$store.commit("setCurrentUser", jwtDecode(result.data.data));

          // setTimeout(() => {
          this.$router.push({ name: "Usuarios" });
          // }, 300);
        })
        .catch(error => {
          iziToast.error({
            title: error.response.data.error,
            position: "topCenter"
          });
        });
    }
  }
};
</script>

<style>
.login-image img {
  width: 500px;
  height: auto;
}

@media screen and (max-width: 600px) {
  .login-image img {
    width: 300px;
    height: auto;
  }
}
</style>
