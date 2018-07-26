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
          <b-form-input id="input-small" size="sm" type="text" v-model="form.name" placeholder="Insira a descrição da medida"></b-form-input>
        </b-col>
        <b-col sm="2">
          <b-button type="submit" size="sm" variant="primary" @click="newMeasure">
            ADICIONAR
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <br>
    <b-table small hover :fields="fields" :items="items">
      <template slot="remover" slot-scope="cell">
        <b-button size="sm" @click="remove(cell.item)">
          <i class="fas fa-minus-circle clickable"></i>
        </b-button>
      </template>
    </b-table>

    <b-container>
      <b-row class="text-center">
        <b-col md="12" class="my-1">
          <b-pagination @input="changePage" align="center" :total-rows="page.totalRows" :per-page="page.perPage" v-model="page.currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "MeasureForm",
  data() {
    return {
      form: {
        name: ""
      },
      fields: [{ key: "medida", label: "Medida" }, "remover"],
      items: [
        {
          medida: "Gordura Corporal (%)"
        },
        {
          medida: "Músculo (%)"
        },
        {
          medida: "Idade Metabólica"
        },
        {
          medida: "Peso"
        }
      ],
      page: {
        totalRows: 8,
        perPage: 4,
        currentPage: 0
      }
    };
  },
  methods: {
    remove(evt) {
      console.log(evt);
    },

    newMeasure(evt) {
      evt.preventDefault();

      if (!this.form.name) return;

      const userId = this.$route.params.userId;

      this.$MeasureService
        .create(userId, {
          nome: this.form.name
        })
        .then(() => {
          this.form.name = "";
        });
    },

    changePage() {
      console.log(this.page.currentPage);
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
