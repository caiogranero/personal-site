<template>
  <div class="base-info">
    <b-container>
      <b-row>
        <b-col md="3" sm="12">
          <b-row id="basic" class="text-center">
            <b-col md="4" sm="12">
              <img :src="user.picture" id="profile"> 
            </b-col>
            <b-col md="8" sm="12">
              <h2>{{user.nome}}</h2>
              <a :href="'mailto:'+user.email"><i class="fas fa-envelope"></i></a><br>
              <span id="grey">Tel: +55 {{user.telefone}}</span><br>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="1"></b-col>
        <b-col md="8">
          <b-row id="basic" class="text-center">
            <b-col md="3" style="border-right:1px solid #d0dde2;">
              <span id="grey">Informações</span><br>
              <span id="black">{{user.idade}}
                <i :class="'fas fa-'+user.genero"></i>
                {{user.nascimento}}</span><br>
              <span id="black">{{user.altura}}</span>
            </b-col>
            <b-col md="3" style="border-right:1px solid #d0dde2;">
              <span id="grey">Peso atual</span><br>
              <span id="black">{{user.peso}}</span>
            </b-col>
            <b-col md="3">
              <span id="grey">Doenças crônicas</span><br>
              <span id="black">{{user.doença}}</span>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ImagemPerfilMasculino from "@/assets/profile-mars.png";
import ImagemPerfilFeminino from "@/assets/profile-venus.png";
import CustomSelect from "@/components/CustomSelect";
import moment from "moment";
import _ from "lodash";

export default {
  name: "BaseInfo",

  components: {
    CustomSelect
  },

  data() {
    return {
      user: {
        email: "",
        altura: "0 cm",
        nome: "",
        genero: "neuter",
        peso: "0 Kg",
        idade: "0 anos",
        doença: "-",
        nascimento: "Data não informada",
        telefone: "(00) 0000-0000",
        picture: ""
      }
    };
  },

  mounted() {
    this.$parent.$on("RELOAD_DADOS_BASICOS", () => {
      this.getUser();
    });
  },

  methods: {
    getUser() {
      const userId = this.$route.params.userId;

      this.$UserService.getById(userId).then(user => {
        const data = user.data.data;

        this.user.nome = data.nome;
        this.user.email = data.email;

        if (moment(data.nascimento).isValid()) {
          this.user.idade = moment(data.nascimento).fromNow(true);
          this.user.nascimento = moment(data.nascimento).format("DD MMMM YYYY");
        }

        if (data.telefone) {
          this.user.telefone = data.telefone;
        }

        if (data.genero === 2) {
          this.user.genero = "mars";
          this.user.picture = ImagemPerfilMasculino;
        } else if (data.genero === 1) {
          this.user.genero = "venus";
          this.user.picture = ImagemPerfilFeminino;
        } else {
          this.user.picture = ImagemPerfilFeminino;
        }

        if (data.altura) {
          this.user.altura = data.altura + " cm";
        }

        const peso = data.medidas.find(x =>
          x.nome.toLowerCase().includes("peso")
        );

        if (peso && _.last(peso.valores)) {
          this.user.peso = _.last(peso.valores).valor + " Kg";
        }

        if (data.doenças.length > 0) {
          this.user.doença = data.doenças[0].nome;
        }
      });
    }
  },

  created() {
    this.getUser();
  }
};
</script>

<style>
.base-info {
  background-color: white;
  padding-top: 25px;
  padding-bottom: 25px;
}

img#profile {
  border-radius: 50%;
  height: 80px;
}

#basic {
  text-align: left;
}
</style>
