<template>
  <div class="diseases">
    <b-container>
      <b-row class="text-left">
        <i class="fas fa-dumbbell title-icon"></i>
        <strong>Doenças Crônicas</strong>
      </b-row>
    </b-container>

    <b-form @submit="onSubmit">
      <b-form-group id="nameInputGroup" label="Nome" label-for="nameInput">
        <b-form-input id="nameInput" type="text" v-model="form.name" required placeholder="Insira o nome">
        </b-form-input>
      </b-form-group>

      <b-form-group id="descriptionInputGroup" label="Descrição" label-for="descriptionInput">
        <b-form-textarea id="descriptionInput" v-model="form.description" placeholder="Insira a descrição" :rows="3" :max-rows="6">
        </b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">
        adicionar
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "DisesasesForm",
  data() {
    return {
      form: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const userId = this.$route.params.userId;

      this.$DiseaseService
        .create(userId, {
          nome: this.form.name,
          descricao: this.form.description
        })
        .then(() => {
          this.form.name = "";
          this.form.description = "";
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
