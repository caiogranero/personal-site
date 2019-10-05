<template>
  <div id="geral">
    <b-row>
      <b-col md="12">
        <b-form-group
          id="input-group-1"
          label="Histórico médico familiar"
          label-for="historico-familiar"
        >
          <b-form-textarea
            id="historico-familiar"
            size="sm"
            type="number"
            v-model="form.historicoFamiliar"
            rows="3"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <b-form-group label-for="lesoes" label="Dores e lesões">
          <v-select
            v-model="form.lesoes"
            :filterable="true"
            id="lesoes"
            :clearable="true"
            :autocomplete="true"
            :options="lesoes"
          ></v-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="3">
        <b-form-group
          label-for="qtd-refeicoes"
          label="Quantidade de refeições por dia"
          size="sm"
        >
          <b-form-input
            size="sm"
            type="number"
            id="qtd-refeicoes"
            v-model="form.refeicoes.quantidade"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="12">
        <b-form-group
          label-for="obs-refeicoes"
          label="Observação quanto a alimentação"
          size="sm"
        >
          <b-form-textarea
            size="sm"
            type="text"
            id="obs-refeicoes"
            v-model="form.refeicoes.observacao"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="2">
        <b-form-group label="Fuma" size="sm">
          <b-form-select
            v-model="form.fumante"
            :options="fumante"
            class="mb-3"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="3">
        <b-form-group label="Consome bebida alcólica?" size="sm">
          <b-form-select
            v-model="form.bebida"
            :options="bebida"
            class="mb-3"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import lesoes from "./lesoes.js";

export default {
  name: "Geral",
  data() {
    return {
      fumante: [
        {
          value: 1,
          text: "Não"
        },
        {
          value: 2,
          text: "Ex-fumante"
        },
        {
          value: 3,
          text: "Fumante"
        }
      ],
      bebida: [
        {
          value: 1,
          text: "Não"
        },
        {
          value: 2,
          text: "Sim"
        }
      ],
      form: {
        historicoFamiliar: "",
        lesoes: null,
        refeicoes: {
          quantidade: null,
          observacao: null
        },
        fumante: null,
        bebida: null,
        objetivos: []
      }
    };
  },
  created() {},
  methods: {},
  computed: {
    lesoes: () => lesoes
  }
};
</script>

<style scoped>
#geral .form-group {
  text-align: left;
}
</style>
