<template>
  <div class="diseases">
    <b-container>
      <b-row class="text-left">
        <i class="fas fa-dumbbell title-icon"></i>
        <strong>Observação</strong>
      </b-row>
    </b-container>

    <br />
    <b-form @submit="onSubmit">
      <b-form-group id="descriptionInputGroup" label-for="descriptionInput">
        <b-form-textarea
          id="descriptionInput"
          v-model="form.description"
          placeholder="Insira a observação"
          :rows="3"
          :max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">ADICIONAR</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "DisesasesForm",
  data() {
    return {
      form: {
        description: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));

      this.form.description = "";
      // Make http request to save.
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
