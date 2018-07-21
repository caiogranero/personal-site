<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <div id="side-content" :style="{height:windowHeight}">
          <side-bar></side-bar>
        </div>
        <div id="router-content">
          <nav-bar></nav-bar>
          <router-view/>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default {
  name: "App",

  data() {
    return {
      windowHeight: "400px"
    };
  },

  components: {
    SideBar,
    NavBar
  },

  mounted() {
    this.calcMapHeight();

    // TODO: Colocar debounce na funçao
    window.onresize = () => {
      this.calcMapHeight();
    };
  },

  methods: {
    calcMapHeight() {
      if (document.getElementsByTagName("html")[0]) {
        const windowHeight = document.getElementsByTagName("html")[0]
          .clientHeight;
        this.windowHeight = windowHeight.toString() + "px";
      }
    }
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

#router-content {
  // margin-top: 25px;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 0px;
  padding-left: 0px;
  flex: 0 0 95%;
  max-width: 95%;
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
</style>
