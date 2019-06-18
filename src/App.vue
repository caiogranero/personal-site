<template>
  <div id="app">
    <nav id="menu">
      <side-bar></side-bar>
    </nav>
  
    <main id="panel">
      <header>
        <nav-bar></nav-bar>
      </header>

      <div id="router-content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import moment from "moment";
import Slideout from "slideout";
import Cookies from "js-cookie";
const jwtDecode = require("jwt-decode");

export default {
  name: "App",

  data() {
    return {
      slideout: null,
      exception: ["/login", "/cadastro", "/"]
    };
  },

  created() {
    moment.locale("pt-BR");
    if (Cookies.get("PERSONAL-TOKEN")) {
      this.$store.commit(
        "setCurrentUser",
        jwtDecode(Cookies.get("PERSONAL-TOKEN"))
      );
    }
  },

  components: {
    SideBar,
    NavBar
  },

  methods: {
    setupSlideout() {
      const slideout = new Slideout({
        panel: document.getElementById("panel"),
        menu: document.getElementById("menu"),
        padding: 200,
        tolerance: 100
      });

      slideout;

      document
        .querySelector(".toggle-button")
        .addEventListener("click", function() {
          slideout.toggle();
        });
    }
  },

  watch: {
    $route(to) {
      if (this.exception.some(x => to.path.toLowerCase() === x)) {
        if (this.slideout && this.slideout.isOpen()) {
          this.slideout.close();
        }
      }
    }
  },

  mounted() {
    this.setupSlideout();
  }
};
</script>

<style lang="scss">
.background-view {
  background-color: white;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f7f8f9;
  height: 100%;
}

#side-content {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 0px;
  padding-left: 0px;
  flex: 0 0 5%;
  max-width: 5%;
}

html * {
  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
}

h2 {
  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif !important;
  font-size: 24px !important;
  font-style: normal !important;
  font-variant: normal !important;
  font-weight: 100 !important;
  line-height: 26.4px !important;
  margin-bottom: 0px !important;
}

span {
  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-variant: normal !important;
  font-weight: 400 !important;
  line-height: 20px !important;
}

span#grey {
  color: #8698a0;
}

span#black {
  font-size: 16px !important;
  color: #34444b;
}

.clickable {
  cursor: pointer;
}

i.clickable:hover {
  color: #007bff;
}

body {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: myFirstFont;
  src: url("../public/Arciform.otf");
}
</style>
