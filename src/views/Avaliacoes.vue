<template>
  <div id="avaliacoes">
    <base-info></base-info>
    <br />

    <b-container>
      <b-row style="justify-content: space-around;">
        <b-col md="4" sm="12" v-for="(item, index) in avaliacoes" :key="index">
          <grupo
            :bgColor="index"
            :title="item.title"
            :action="item.action"
          ></grupo>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseInfo from "@/components/User/BaseInfo";
import Grupo from "@/components/Treino/Grupo";

export default {
  name: "Avaliacoes",
  components: { BaseInfo, Grupo },
  data() {
    return {
      avaliacoes: [
        {
          title: "Anamnese",
          action: () => {
            this.$router.push({ name: "Anamnese" });
          }
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
#avaliacoes .b-form-group {
  text-align: left;
}
</style>
