<template>
  <div class="diseases">
    <b-container>
      <b-row class="text-left">
        <i class="fas fa-dumbbell title-icon"></i>
        <strong>Dados Básicos</strong>
      </b-row>
    </b-container>

    <b-form @submit="onSubmit">
      <b-form-group label="Data de nascimento" horizontal :label-cols="4" size="sm">
        <b-form-input  type="date" v-model="form.nascimento" size="sm"></b-form-input>
      </b-form-group>

      <b-form-group label="Telefone" horizontal size="sm" :label-cols="4">
        <the-mask class="form-control form-control-sm" type="tel" :mask="['(##) ####-####', '(##) #####-####']" :masked="true" v-model="form.telefone"/>
      </b-form-group>

      <b-form-group label="Altura (cm)" horizontal size="sm" :label-cols="4">
        <b-form-input  type="number" v-model="form.altura" size="sm"></b-form-input>
      </b-form-group>
      
      <b-form-group label="Gênero" horizontal :label-cols="4" size="sm">
        <b-form-select v-model="form.genero" :options="generos" class="mb-3" size="sm">
        </b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary" size="sm">
        ALTERAR
      </b-button>
    </b-form>

    <br>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import moment from "moment";
import iziToast from "izitoast";

export default {
  name: "DadosBasicos",
  components: { TheMask },
  data() {
    return {
      form: {
        nascimento: "",
        telefone: "",
        altura: "",
        genero: ""
      },
      generos: [
        {
          value: 1,
          text: "Feminino"
        },
        {
          value: 2,
          text: "Masculino"
        }
      ]
    };
  },

  created() {
    this.montaForm();
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const userId = this.$route.params.userId;

      this.$UserService
        .edit(userId, {
          nascimento: this.form.nascimento,
          telefone: this.form.telefone,
          altura: this.form.altura,
          genero: this.form.genero
        })
        .then(() => {
          this.$parent.$emit("RELOAD_DADOS_BASICOS", true);
          this.montaForm();
          iziToast.success({
            title: "Informações básicas alterados.",
            position: "topCenter"
          });
        })
        .catch(error => {
          iziToast.error({
            title: error.response.data.error,
            position: "topCenter"
          });
        });
    },

    montaForm() {
      const userId = this.$route.params.userId;

      this.$UserService.getById(userId).then(response => {
        this.form.nascimento = moment(response.data.data.nascimento).format(
          "YYYY-MM-DD"
        );
        this.form.altura = response.data.data.altura;
        this.form.telefone = response.data.data.telefone;
        this.form.genero = response.data.data.genero;
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
