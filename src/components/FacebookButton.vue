<template>
  <div>
    <button @click="getUserData()">FACEBOOK</button>
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
          console.log(result);
          Cookies.set("PERSONAL-TOKEN", result.data.data);
          this.$store.commit("setCurrentUser", jwtDecode(result.data.data));
          this.$router.push({ name: "Usuarios" });
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
