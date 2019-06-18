<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col sm="12" md="4">
          <b-form-group label="Objetivo" horizontal :label-cols="4" size="sm">
            <b-form-select :options="objetivos" v-model="treino.objetivo" size="sm"/>
          </b-form-group>
        </b-col>
        <b-col sm="12" md="4">
          <b-form-group label="Data inicio" horizontal :label-cols="4" size="sm">
            <b-form-input type="date" v-model="treino.dataInicio" size="sm"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="12" md="4">
          <b-form-group label="Data fim" horizontal :label-cols="4" size="sm">
            <b-form-input type="date" v-model="treino.dataFim" size="sm"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="12" md="12">
          <b-form-group label="Observação" horizontal :label-cols="1" size="sm">
            <b-form-input
              type="text"
              v-model="treino.observacao"
              size="sm"
              placeholder="Observacao"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TreinoBase",
  data() {
    return {
      treino: {
        observacao: "",
        dataInicio: "",
        dataFinal: "",
        objetivo: ""
      },
      objetivos: []
    };
  },
  created() {
    this.$GoalsService
      .find()
      .then(result => {
        this.objetivos = result.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>
