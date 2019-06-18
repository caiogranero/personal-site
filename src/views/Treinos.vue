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
    <treino-base-form></treino-base-form>

    <b-container>
      <b-row style="justify-content: space-around;">
        <b-col md="4" sm="12" v-for="(item, index) in grupos" :key="index">
          <grupo :bgColor="index"></grupo>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseInfo from "@/components/User/BaseInfo";
import TreinoBaseForm from "@/components/Treino/TreinoBaseForm";
import Grupo from "@/components/Treino/Grupo";

export default {
  name: "Treinos",
  components: { BaseInfo, TreinoBaseForm, Grupo },
  data() {
    return {
      grupos: [{}, {}, {}]
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
</style>
