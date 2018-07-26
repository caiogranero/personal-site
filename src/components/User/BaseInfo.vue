<template>
  <div class="base-info">
    <b-container>
      <b-row>
        <b-col md="3" sm="12">
          <b-row id="basic" class="text-center">
            <b-col md="4" sm="12">
              <img src="@/assets/profile.jpg" id="profile">
            </b-col>
            <b-col md="8" sm="12">
              <h2>{{user.nome}}</h2>
              <span id="grey">Tel: +55 {{user.telefone}}</span><br>
              <custom-select></custom-select>
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
import CustomSelect from "@/components/CustomSelect";

export default {
  name: "BaseInfo",

  components: {
    CustomSelect
  },

  data() {
    return {
      user: {
        altura: "0 cm",
        nome: "",
        genero: "neuter",
        peso: "0 Kg",
        doença: "-"
      }
    };
  },

  created() {
    const userId = this.$route.params.userId;

    this.$UserService.getById(userId).then(user => {
      const data = user.data.data;
      this.user.nome = data.nome;
      this.user.email = data.email;
      this.user.idade = data.idade || "0 anos";
      this.user.telefone = data.telefone || "(00) 0000-0000";
      this.user.nascimento = data.nascimento || "Data não informada";

      if (data.genero === "masculino") {
        this.user.genero = "mars";
      } else if (data.genero === "feminino") {
        this.user.genero = "venus";
      }

      const altura = data.medidas.find(x =>
        x.nome.toLowerCase().includes("altura")
      );

      if (altura) {
        this.user.altura =
          altura.valores[altura.valores.length - 1].valor + " cm";
      }

      const peso = data.medidas.find(x =>
        x.nome.toLowerCase().includes("peso")
      );

      if (peso) {
        this.user.peso = peso.valores[peso.valores.length - 1].valor + " Kg";
      }

      if (data.doenças.length > 0) {
        this.user.doença = data.doenças[0].nome;
      }
    });
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
