<template>
  <div 
    class="fb-login-button" 
    data-width="30" 
    data-size="medium" 
    data-button-type="login_with" 
    data-auto-logout-link="false" 
    data-use-continue-as="false"></div>
</template>

<script>
import Cookies from "js-cookie";
import iziToast from "izitoast";
const jwtDecode = require("jwt-decode");

export default {
  created() {
    window.FB.getLoginStatus(response => {
      if (response.status === "connected") {
        this.getUserData();
      }
    });

    window.FB.Event.subscribe("auth.authResponseChange", response => {
      if (response.status === "connected") {
        this.getUserData();
      }
    });
  },

  mounted() {
    window.FB.XFBML.parse();
  },

  methods: {
    getUserData() {
      window.FB.api(
        "/me",
        "GET",
        { fields: "id,name,email" },
        userInformation => {
          this.$AuthService
            .doFacebookLogin({
              email: userInformation.email,
              facebookId: userInformation.id,
              nome: userInformation.name
            })
            .then(result => {
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
      );
    }
  }
};
</script>
