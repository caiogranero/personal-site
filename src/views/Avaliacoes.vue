<template>
  <div id="treinos">
    <base-info></base-info>
    <br>

    <b-container>
      <b-row class="background-view">
        <b-col md="6">
          <br>
          <h5> Atividades praticadas </h5>
          <br>
          <b-table small hover :fields="fields" :items="items" :current-page="page.currentPage" :per-page="page.perPage">
            <template slot="atividade" slot-scope="cell">
              <v-select 
                v-model="cell.item.atividade"
                :filterable="true" 
                :clearable="true"
                :autocomplete="true"
                :options="atividades">
              </v-select>
            </template>
            <template slot="frequencia" slot-scope="cell">
              <b-form-input id="input-small" size="sm" type="text" v-model="cell.item.frequencia" placeholder=""></b-form-input>
            </template>
            <template slot="tempo" slot-scope="cell">
              <b-form-input id="input-small" size="sm" type="text" v-model="cell.item.tempo" placeholder=""></b-form-input>
            </template>
            <template slot="duracao" slot-scope="cell">
              <b-form-input id="input-small" size="sm" type="text" v-model="cell.item.duracao" placeholder=""></b-form-input>
            </template>
            <template slot="remover" slot-scope="cell">
              <b-button size="sm" @click="remove(cell.item)">
                <i class="fas fa-minus-circle clickable"></i>
              </b-button>
            </template>
          </b-table>

          <b-container>
            <b-row class="text-center">
              <b-col md="12" class="my-1">
                <b-pagination align="center" :total-rows="items.length" :per-page="page.perPage" v-model="page.currentPage" class="my-0" />
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col md="6">

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseInfo from "@/components/User/BaseInfo";

export default {
  name: "Avaliacoes",
  components: { BaseInfo },
  data() {
    return {
      fields: ["atividade", "frequencia", "tempo", "duracao", "remover"],
      atividades: [
        {
          id: 1,
          label: "Caio"
        }
      ],
      items: [
        {
          atividade: {
            id: 1,
            label: "Caio"
          },
          frequencia: 2,
          tempo: 4,
          duracao: 5
        }
      ],
      page: {
        perPage: 4,
        currentPage: 0
      }
    };
  },
  created() {
    // this.$PhysicalActivityService
    //   .findAll()
    //   .then(response => response.data.data.atividades)
    //   .then(atividades => (this.atividades = atividades));
  },
  methods: {}
};
</script>

<style scoped>
</style>
