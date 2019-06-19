<template>
  <div id="avaliacoes">
    <base-info></base-info>
    <br>

    <b-container>
      <b-row class="background-view">
        <b-col md="12">
          <br>
          <h5> Atividades praticadas </h5>
          <br>
          <b-row>
            <b-col md="4">
              <b-form-group id="input-group-1" label="Atividade:" label-for="atividade">
                <v-select v-model="form.atividades.atividade" :filterable="true" id="atividade" :clearable="true" :autocomplete="true" :options="atividades"></v-select>
              </b-form-group>
            </b-col>
            <b-col md="2">
              <b-form-group id="input-group-1" label="Frequencia" label-for="frequencia" description="vezes por semana">
                <b-form-input id="frequencia" size="sm" type="number" v-model="form.atividades.frequencia" placeholder=""></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="2">
              <b-form-group id="input-group-1" label="Tempo" label-for="tempo" description="meses">
                <b-form-input id="tempo" size="sm" type="number" v-model="form.atividades.tempo" placeholder=""></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="2">
              <b-form-group id="input-group-1" label="Duração" label-for="duracao" description="minutos">
                <b-form-input id="duracao" size="sm" type="number" v-model="form.atividades.duracao" placeholder=""></b-form-input>
              </b-form-group>
            </b-col>  
            <b-col>
              <b-button type="submit" variant="primary" @click="adicionarAtividade()">ADICIONAR</b-button>
            </b-col>
          </b-row>
          
          <b-table small hover :fields="fields" :items="items" :current-page="page.currentPage" :per-page="page.perPage">
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
      fields: [
        { key: "atividade.label", label: "Atividade" },
        "frequencia",
        "tempo",
        "duracao",
        "remover"
      ],
      atividades: [
        {
          id: 1,
          label: "Caio"
        }
      ],
      form: {
        atividades: {
          frequencia: "",
          tempo: "",
          duracao: "",
          atividade: null
        }
      },
      items: [],
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
  methods: {
    adicionarAtividade() {
      this.items.push(this.form.atividades);
    },
    onSubmit() {},
    remove(item) {
      console.log(item);
    }
  }
};
</script>

<style scoped>
#avaliacoes .b-form-group {
  text-align: left;
}
</style>
