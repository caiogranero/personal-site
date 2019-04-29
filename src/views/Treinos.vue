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

    <b-container>
      <b-row style="justify-content: space-around;">
        <b-col md="5" sm="12" class="background-view" v-for="(s,index) in sessao" :key="s.ordem">
          <h3 v-on:click="enableEdit(index)" v-if="!s.titulo.edit" class="treino-titulo">{{s.titulo.title}}</h3>
          <input
            type="text"
            class="edit_item"
            v-model="s.titulo.title"
            v-if="s.titulo.edit"
            ref="search"
            v-focus
            v-on:keyup.enter="disableEdit(index)"
            v-on:blur="disableEdit(index)"
          >

          <br>

          <b-row>
            <b-table striped hover :items="s.exercicios" :small="true">
              <template slot="exercicio" slot-scope="row">
                <b-form-select :options="objetivos" v-model="treino.objetivo" size="sm"/>
              </template>
            </b-table>
          </b-row>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseInfo from "@/components/User/BaseInfo";

export default {
  components: { BaseInfo },
  data() {
    return {
      alunos: [],
      form: {
        aluno: ""
      },
      directives: {
        inserted(el) {
          el.focus();
        }
      },
      treino: {
        nome: "",
        observacao: "",
        dataInicio: "",
        dataFim: "",
        objetivo: ""
      },
      objetivos: [],
      sessao: [
        {
          titulo: {
            title: "Nova sessão",
            edit: false
          },
          exercicios: [
            {
              ordem: 0,
              exercicio: "",
              repeticoes: 0,
              serie: 0,
              descanso: 0
            }
          ]
        }
      ]
    };
  },
  created() {
    if (this.$route.params.userId) {
      const userId = this.$route.params.userId;

      this.$UserService
        .getById(userId)
        .then(usuario => usuario.data.data)
        .then(usuario => {
          return {
            value: usuario._id,
            text: usuario.nome
          };
        })
        .then(aluno => (this.alunos = [aluno]))
        .then(aluno => (this.form.aluno = aluno));
    }
  },
  methods: {
    enableEdit(index) {
      this.sessao[index].titulo.edit = true;
    },
    disableEdit(index) {
      this.sessao[index].titulo.edit = false;
    }
  }
};
</script>

<style scoped>
.treino-titulo {
  margin-top: 5px;
  font-size: 1.25rem;
}
</style>
