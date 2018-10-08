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
          <label for="input-small">Medida:</label>
        </b-col>
        <b-col sm="10">
          <v-select 
            label="nome" 
            v-model="form.medida"
            :filterable="false" 
            :options="medidas" 
            @search="onSearch">
          </v-select>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    <b-form @submit="onSubmit" v-show="form.medida">
      <b-form-group id="nameInputGroup" label="Valor:" horizontal size="sm">
        <b-form-input id="nameInput" type="number" v-model="form.valor" required placeholder="Insira o valor" size="sm">
        </b-form-input>
      </b-form-group>

      <b-form-group label="Data:" size="sm" horizontal>
        <b-form-input type="date" v-model="form.data" size="sm">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">
        ADICIONAR
      </b-button>
    </b-form>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import iziToast from "izitoast";

export default {
  name: "MeasureForm",
  data() {
    return {
      form: {
        medida: "",
        valor: "",
        data: ""
      },
      medidas: []
    };
  },
  created() {
    this.form.data = moment().format("YYYY-MM-DD");

    const userId = this.$route.params.userId;
    this.$MeasureService
      .findAll(userId, "")
      .then(response => response.data.data.medidas)
      .then(medidas => (this.medidas = medidas));
  },
  methods: {
    buscarMedidas: _.debounce((userId, term, _this) => {
      _this.$MeasureService
        .findAll(userId, term)
        .then(response => response.data.data.medidas)
        .then(medidas => (_this.medidas = medidas));
    }, 250),

    onSearch(term) {
      const userId = this.$route.params.userId;
      this.buscarMedidas(userId, term, this);
    },

    onSubmit(evt) {
      evt.preventDefault();

      const userId = this.$route.params.userId;

      this.$MeasureService
        .adicionarValorEmMedida(userId, this.form.medida._id, {
          medida: this.form.medida._id,
          valor: this.form.valor,
          data: this.form.data
        })
        .then(() => {
          this.form.valor = "";
          this.form.data = "";
          iziToast.success({
            title: "Registro adicionado.",
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
