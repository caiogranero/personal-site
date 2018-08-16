<template>
  <div class="diseases">
    <b-container>
      <b-row class="text-left">
        <i class="fas fa-dumbbell title-icon"></i>
        <strong>Remédios</strong>
      </b-row>
    </b-container>

    <br>
    <b-table small hover :fields="fields" :items="items" :current-page="page.currentPage" :per-page="page.perPage">
      <template slot="remover" slot-scope="cell">
        <b-button size="sm" @click="remove(cell.item)">
          <i class="fas fa-minus-circle clickable"></i>
        </b-button>
      </template>
    </b-table>

    <b-container>
      <b-row class="text-center">
        <b-col md="12" class="my-1">
          <b-pagination align="center" :total-rows="items.length" :per-page="page.perPage" v-model="page.currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import iziToast from "izitoast";

export default {
  name: "DoencasLista",
  data() {
    return {
      fields: [
        {
          key: "nome",
          label: "Nome"
        },
        {
          key: "descriçao",
          label: "Descrição"
        },
        "remover"
      ],
      items: [],
      page: {
        perPage: 4,
        currentPage: 0
      }
    };
  },
  created() {
    const userId = this.$route.params.userId;
    this.listarRemedios(userId);
  },
  methods: {
    listarRemedios(idUsuario) {
      this.$DrugService
        .findAll(idUsuario)
        .then(response => response.data.data.remedios)
        .then(remedios => (this.items = remedios));
    },
    remove(evt) {
      const userId = this.$route.params.userId;
      this.$DrugService
        .delete(userId, evt._id)
        .then(() => this.listarRemedios(userId))
        .then(() => {
          iziToast.success({
            title: "Remédio removido",
            position: "topCenter"
          });
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

<style>
.diseases {
  margin-top: 15px;
}

.title-icon {
  margin: 5px;
}
</style>
