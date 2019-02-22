<template>
  <div class="listagem-usuario">
    <br>
    <b-container fluid>
      <b-row>
        <b-col class="text-left" >
          <h3>Meus alunos</h3>
        </b-col>
      </b-row>
    </b-container>  
    <br>
    <b-container fluid>
      <b-row align-h="around">
        <b-col col-md="4" v-for="i in itemsInView" :key="i.id">
          <b-card >
            <b-media>
              <img :src="i.picture" id="profile" height="64" slot="aside" class="clickable" @click="visualizar(i)">
              <h5 class="mt-0 text-left clickable" @click="visualizar(i)">{{i.nome}}</h5>
              <b-row align-h="start">
                <chip :text="i.peso" backgroundColor="#f1f1f1"></chip>
                <chip :text="i.gordura" backgroundColor="#f1f1f1"></chip>
              </b-row>
            </b-media>
          </b-card>  
          <br>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row class="text-center">
        <b-col md="12" class="my-1">
          <b-pagination @change="changePage" align="center" :total-rows="items.length" :per-page="page.perPage" v-model="page.currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Chip from "@/components/Chip2";
import ImagemPerfilMasculino from "@/assets/profile-mars.png";
import ImagemPerfilFeminino from "@/assets/profile-venus.png";
import moment from "moment";
export default {
  name: "ListagemUsuario",
  components: { Chip },
  data() {
    return {
      fields: [
        {
          key: "nome",
          label: "Nome",
          sortable: true
        },
        {
          key: "idade",
          label: "Idade"
        },
        {
          key: "telefone",
          label: "Telefone"
        },
        {
          key: "email",
          label: "Email"
        },
        {
          key: "_updateAt",
          label: "Último acesso",
          sortable: true
        },
        "visualizar"
      ],
      items: [],
      itemsInView: [],
      page: {
        perPage: 6,
        currentPage: 0
      }
    };
  },
  created() {
    this.$UserService
      .getAlunos(this.$store.state.currentUser.id)
      .then(usuarios => {
        this.items = usuarios.data.data.map(x => {
          const mm = {
            idade: moment(x.nascimento).fromNow(true),
            _updateAt: moment(x._updateAt).format("DD/MM/YYYY HH:mm"),
            picture: "",
            peso: "Peso: 0 Kg",
            gordura: "Gordura: 0 %"
          };

          const peso = x.medidas.find(x =>
            x.nome.toLowerCase().includes("peso")
          );

          console.log(peso);

          if (peso && peso.valores.length > 0) {
            console.log("oi");
            const valor = peso.valores[peso.valores.length - 1].valor;
            mm.peso = `Peso: ${valor} Kg`;
          }

          const gordura = x.medidas.find(x =>
            x.nome.toLowerCase().includes("gordura")
          );

          if (gordura && gordura.valores.length > 0) {
            const valor = gordura.valores[gordura.valores.length - 1].valor;
            mm.gordura = `Gordura: ${valor} %`;
          }

          if (x.genero === 2) {
            mm.picture = ImagemPerfilMasculino;
          } else if (x.genero === 1) {
            mm.picture = ImagemPerfilFeminino;
          } else {
            mm.picture = ImagemPerfilFeminino;
          }

          return Object.assign(x, mm);
        });
        this.itemsInView = this.items;
      });
  },

  methods: {
    visualizar(item) {
      this.$router.push({ name: "UserProfile", params: { userId: item._id } });
    },

    changePage(currentPage) {
      const skip = this.page.perPage * (currentPage - 1);
      const limit = this.page.perPage * currentPage;

      this.itemsInView = this.items.filter(
        (item, index) => index >= skip && index < limit
      );
    }
  }
};
</script>

<style>
.listagem-usuario table {
  background-color: white;
  margin-top: 30px;
}
</style>
