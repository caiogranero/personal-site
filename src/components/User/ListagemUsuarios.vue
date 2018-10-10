<template>
  <div class="listagem-usuario">
    <br>
    <b-container fluid>
      <b-row>
        <b-col>
          <h3>Meus alunos</h3>
        </b-col>
      </b-row>
    </b-container>  
    <b-container fluid>
      <b-row>
        <b-col>
          <b-table hover :responsive="true" :outlined="true" :fields="fields" :items="items" :current-page="page.currentPage" :per-page="page.perPage">
            <template slot="visualizar" slot-scope="cell">
              <b-button @click="visualizar(cell.item)" size="sm">
                <i class="fas fa-eye clickable"></i>
              </b-button>
            </template>
          </b-table>

          <b-container fluid>
            <b-row class="text-center">
              <b-col md="12" class="my-1">
                <b-pagination align="center" :total-rows="items.length" :per-page="page.perPage" v-model="page.currentPage" class="my-0" />
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ListagemUsuario",
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
      page: {
        perPage: 8,
        currentPage: 0
      }
    };
  },
  created() {
    this.$UserService
      .getAlunos(this.$store.state.currentUser.id)
      .then(usuarios => {
        this.items = usuarios.data.data.map(x =>
          Object.assign(x, {
            idade: moment(x.nascimento).fromNow(true),
            _updateAt: moment(x._updateAt).format("DD/MM/YYYY HH:mm")
          })
        );
      });
  },

  methods: {
    visualizar(item) {
      this.$router.push({ name: "UserProfile", params: { userId: item._id } });
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
