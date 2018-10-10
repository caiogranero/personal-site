<template>
  <div id="navbar">
    <b-container fluid>
      <b-row>
        <button class="toggle-button" v-show="displayMenu">
          <i class="fas fa-bars clickable" style="font-size: 1.5em;"></i>
        </button>
        <label v-show="!displayMenu" style="margin-left: 40px;"></label>
        <h1 :class="titleClass">treine.me</h1>
      </b-row>
    
    </b-container>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      exception: ["/login", "/cadastro", "/"]
    };
  },
  computed: {
    displayMenu() {
      return !this.exception.some(x => this.$route.path.toLowerCase() === x);
    },

    titleClass() {
      if (this.displayMenu) {
        return "space";
      }

      return "";
    }
  }
};
</script>

<style>
h1 {
  /* font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif !important; */
  font-family: myFirstFont !important;
  font-size: 22px !important;
  font-style: normal !important;
  /* font-variant: small-caps !important;
  font-weight: 400 !important;*/
  line-height: 30px !important;
  color: white !important;
}

#navbar {
  background-color: #5093e1;
  padding-top: 7px;
  padding-bottom: 7px;
  border-bottom: 2px solid #c4c5c6;
}

.toggle-button {
  color: white;
  background-color: transparent;
  border: 0px;
  margin-left: 10px;
  margin-right: 15px;
}

.space {
  margin-left: 15px;
}
</style>
