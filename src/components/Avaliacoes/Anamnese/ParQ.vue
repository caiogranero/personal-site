<template>
  <div id="parq">
    <b-row v-for="(p, i) in perguntas" :key="p.pergunta">
      <b-col md="12">
        <b-form-group :label="p.pergunta">
          <b-form-radio-group v-model="p.resposta" :name="'radio-options-' + i">
            <b-form-radio value="true">Sim</b-form-radio>
            <b-form-radio value="false">Não</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ParQ",
  data() {
    return {
      perguntas: [
        {
          pergunta:
            "Alguma vez seu médico lhe disse que você tem algum problema cardíaco e que só deve fazer ativiade física recomendada por um médico?",
          resposta: false
        },
        {
          pergunta:
            "Neste último mês, você teve dores no peito quando não estava fazendo atividade física?",
          resposta: false
        },
        {
          pergunta:
            "Você tem algum problema ósseo ou articular (por exemplo: costas, joelho ou quadril) que possa piorar com a modificação da sua atividade física",
          resposta: false
        },
        {
          pergunta:
            "Você sabe de alguma outra razão que contra-indique a prática de atividade física?",
          resposta: false
        },
        {
          pergunta: "Você sente dor no peito quando faz atividade física?",
          resposta: false
        },
        {
          pergunta:
            "Você perde seu equilíbrio por causa de tontura ou alguma vez perdeu a consciência?",
          resposta: false
        },
        {
          pergunta:
            "Seu médico está prescrevendo algum remédio (por exemplo: diuréticos) para sua pressão arterial ou coração?",
          resposta: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#parq .form-group {
  text-align: left;
}
</style>
