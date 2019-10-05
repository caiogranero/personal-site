<template>
  <div class="diseases">
    <b-container>
      <b-row class="text-left">
        <i class="fas fa-dumbbell title-icon"></i>
        <strong>Medidas</strong>
      </b-row>
    </b-container>

    <b-container>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Descrição:</label>
        </b-col>
        <b-col sm="7">
          <b-form-input
            id="input-small"
            size="sm"
            type="text"
            v-model="form.name"
            placeholder="Insira a descrição da medida"
          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <b-button
            type="submit"
            size="sm"
            variant="primary"
            @click="newMeasure"
            >ADICIONAR</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <br />
    <b-table
      small
      hover
      :fields="fields"
      :items="items"
      :current-page="page.currentPage"
      :per-page="page.perPage"
    >
      <template slot="remover" slot-scope="cell">
        <b-button size="sm" @click="remove(cell.item)">
          <i class="fas fa-minus-circle clickable"></i>
        </b-button>
      </template>
    </b-table>

    <b-container>
      <b-row class="text-center">
        <b-col md="12" class="my-1">
          <b-pagination
            align="center"
            :total-rows="items.length"
            :per-page="page.perPage"
            v-model="page.currentPage"
            class="my-0"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import iziToast from "izitoast";

export default {
  name: "MeasureForm",
  data() {
    return {
      form: {
        name: ""
      },
      fields: [{ key: "nome", label: "Medida" }, "remover"],
      items: [],
      page: {
        perPage: 4,
        currentPage: 0
      }
    };
  },
  created() {
    const userId = this.$route.params.userId;
    this.listarMedidas(userId);
  },
  methods: {
    listarMedidas(idUsuario) {
      this.$MeasureService
        .findAll(idUsuario)
        .then(response => response.data.data.medidas)
        .then(medidas => (this.items = medidas));
    },

    remove(evt) {
      const userId = this.$route.params.userId;
      this.$MeasureService
        .delete(userId, evt._id)
        .then(() => this.listarMedidas(userId))
        .then(() =>
          iziToast.success({ title: "Dados alterados.", position: "topCenter" })
        )
        .catch(error => {
          iziToast.error({
            title: error.response.data.error,
            position: "topCenter"
          });
        });
    },

    newMeasure(evt) {
      evt.preventDefault();

      if (!this.form.name) return;

      const userId = this.$route.params.userId;

      this.$MeasureService
        .create(userId, { nome: this.form.name })
        .then(() => {
          this.listarMedidas(userId);
          this.form.name = "";
        })
        .then(() => {
          iziToast.success({
            title: "Medida adicionada",
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
