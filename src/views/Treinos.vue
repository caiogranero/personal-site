<template>
  <div id="treinos">
    <base-info></base-info>
    <br>
    <b-container>
      <b-row align-h="center" align-v="center">
        <b-col class="text-right">
          <i class="fas fa-chevron-left"></i>
        </b-col>
        <b-col sm="4" md="4">
          <h3>Treino atual</h3>
        </b-col>
        <b-col class="text-left">
          <i class="fas fa-chevron-right"></i>
        </b-col>
      </b-row>
    </b-container>
    <br>
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

    <!-- <b-container>
      <b-row style="justify-content: space-around;">
        <b-col md="5" sm="12" class="background-view" v-for="(s,index) in grupo" :key="s.ordem">
          
        </b-col>
      </b-row>
    </b-container> -->
  </div>
</template>

<script>
import BaseInfo from "@/components/User/BaseInfo";

export default {
  components: { BaseInfo },
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
  },
  methods: {}
};
</script>

<style scoped>
.treino-titulo {
  margin-top: 5px;
  font-size: 1.25rem;
}
</style>
