<template>
  <div>
    <button class="btn btn-block btn-social btn-google" @click="getUserData()">
      <i class="fab fa-google"></i>
      Entrar com Google
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
        .doGoogleLogin()
        .then(result => {
          Cookies.set("PERSONAL-TOKEN", result.data.data);
          this.$store.commit("setCurrentUser", jwtDecode(result.data.data));
          this.$router.push({ name: "Usuarios" });
        })
        .catch(error => {
          console.log(error.message);
          console.log();
          iziToast.error({
            title: error.response.data.error
              ? error.response.data.error
              : error.message,
            position: "topCenter"
          });
        });
    }
  }
};
</script>
