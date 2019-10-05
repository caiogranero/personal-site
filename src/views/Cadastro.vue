<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col md="12">
          <img :src="logo" width="150" />
        </b-col>
      </b-row>

      <b-row style="margin-top: -20px">
        <b-col md="12">
          <h2>
            <strong>Inscrever-se com seu endereço de e-mail</strong>
          </h2>
          <br />
          <strong>
            Já tem uma conta?
            <router-link to="Login">Entrar</router-link>
          </strong>
        </b-col>
      </b-row>

      <br />
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="5" class="justify-content-md-center" align-self="center">
          <b-form @submit="onSubmit">
            <b-form-input
              type="text"
              v-model="form.nome"
              required
              placeholder="Nome"
              size="md"
            ></b-form-input>
            <br />
            <b-form-input
              type="email"
              v-model="form.email"
              required
              placeholder="Email"
              size="md"
            ></b-form-input>
            <br />
            <b-form-input
              type="password"
              v-model="form.senha"
              size="md"
              required
              placeholder="Senha"
            ></b-form-input>
            <br />
            <b-button block type="submit" variant="primary">CADASTRAR</b-button>
          </b-form>
          <br />

          <b-row>
            <b-col md="6">
              <facebook-button></facebook-button>
            </b-col>
            <b-col md="6">
              <google-button></google-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="5" class="login-image">
          <img src="/img/Kettle_Bell.png" />
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FacebookButton from "@/components/FacebookButton.vue";
import GoogleButton from "@/components/GoogleButton.vue";
import Cookies from "js-cookie";
import iziToast from "izitoast";
import Logo from "@/assets/logo-2.png";
const jwtDecode = require("jwt-decode");

export default {
  name: "Cadastro",
  data() {
    return {
      form: {
        nome: "",
        email: "",
        senha: ""
      }
    };
  },
  computed: {
    logo() {
      return Logo;
    }
  },
  components: {
    FacebookButton,
    GoogleButton
  },
  methods: {
    onSubmit($evt) {
      $evt.preventDefault();
      const code = this.$route.query.code;

      this.$AuthService
        .doRegister(this.form, code)
        .then(() => {
          this.$AuthService.doLogin(this.form).then(result => {
            Cookies.set("PERSONAL-TOKEN", result.data.data);
            this.$store.commit("setCurrentUser", jwtDecode(result.data.data));
            this.$router.push({ name: "Usuarios" });
          });
        })
        .catch(error => {
          iziToast.error({
            title: error.message ? error.message : error.response.data.error,
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
