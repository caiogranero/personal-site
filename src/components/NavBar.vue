<template>
  <div id="navbar">
    <b-container fluid>
      <b-row align-h="between">
          <button class="toggle-button" v-show="displayMenu">
            <i class="fas fa-bars clickable" style="font-size: 1.5em;"></i>
          </button>
          <label v-show="!displayMenu" style="margin-left: 40px;"></label>
          
          <h1 :class="titleClass">treine.club</h1>
          
          <label v-show="!displayConvidarAluno" style="margin-left: 40px;"></label>
          <b-button @click="copiarCodigo" type="submit" variant="light" size="sm" id="btn-convitar-aluno" v-show="displayConvidarAluno">
            CONVIDAR ALUNO
          </b-button>
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

    displayConvidarAluno() {
      return (
        !this.exception.some(x => this.$route.path.toLowerCase() === x) &&
        this.$store.state.currentUser.type === "Personal"
      );
    },

    titleClass() {
      if (this.displayMenu) {
        return "space";
      }

      return "";
    }
  },
  methods: {
    copiarCodigo() {
      const code = this.$store.state.currentUser.code;
      const text = `Olá, vem ser meu aluno no treine.club, você só precisa acessar esse link: ${
        window.location.origin
      }/?#/Cadastro?code=${code}`;
      navigator.clipboard.writeText(text).then(
        () => {
          console.log(this);
          this.$swal(
            "URL de convite foi copiada!",
            "Agora é só enviar para seus alunos e eles terão acesso ao treine.club",
            "success"
          );
          console.log("Async: Copying to clipboard was successful!");
        },
        err => {
          console.error("Async: Could not copy text: ", err);
        }
      );
    }
  }
};
</script>

<style>
h1 {
  font-family: myFirstFont !important;
  font-size: 22px !important;
  font-style: normal !important;
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
  margin-left: 15px;
}

#btn-convitar-aluno {
  margin-right: 15px;
  border-radius: 30px;
}
</style>
