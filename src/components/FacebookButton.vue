<template>
  <div>
    <button
      class="btn btn-block btn-social btn-facebook"
      @click="getUserData()"
    >
      <i class="fab fa-facebook-f"></i>
      Entrar com Facebook
    </button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import iziToast from "izitoast";
const jwtDecode = require("jwt-decode");

export default {
  methods: {
    getUserData() {
      this.$AuthService
        .doFacebookLogin()
        .then(result => {
          Cookies.set("PERSONAL-TOKEN", result.data.data);
          this.$store.commit("setCurrentUser", jwtDecode(result.data.data));
          this.$router.push({ name: "Usuarios" });
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
