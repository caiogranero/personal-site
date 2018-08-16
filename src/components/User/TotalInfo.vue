<template>
  <div class="total-info background-view">
    <b-col>
      <b-row class="one-info text-left" v-for="(oneInfo, index) in infos" :key="index">
        <b-col cols="1" sm="1">
          <div class="circle">{{oneInfo.qtd}}</div>
        </b-col>
        <b-col cols="8" md="9" sm="6">
          <span id="black">{{oneInfo.tipo}}</span>
        </b-col>
        <b-col cols="1" sm="1">
          <i v-if="oneInfo.canAdd" class="fas fa-plus-circle clickable" @click="view(oneInfo.event, 'insert')"></i>
        </b-col>
        <b-col cols="1" sm="1">
          <i class="fas fa-eye clickable" @click="view(oneInfo.event, 'view')"></i>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "TotalInfo",

  data() {
    return {
      infos: [
        {
          tipo: "Dados básicos",
          qtd: 1,
          event: "DADOS_BASICOS",
          canAdd: false
        },
        {
          tipo: "Doenças crônicas",
          qtd: 2,
          event: "DOENCAS_CRONICAS",
          canAdd: true
        },
        {
          tipo: "Medidas",
          qtd: 3,
          event: "MEDIDAS",
          canAdd: true
        },
        {
          tipo: "Remédios",
          qtd: 4,
          event: "REMEDIOS",
          canAdd: true
        },
        {
          tipo: "Observações",
          qtd: 5,
          event: "OBSERVACOES",
          canAdd: true
        }
      ]
    };
  },

  methods: {
    view(event, type) {
      this.$emit("view", { event, type });
    }
  }
};
</script>

<style>
.one-info {
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(208, 221, 226);
}

.one-info:last-child {
  border-bottom: none;
}

.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 10px;
  color: white;
  vertical-align: middle;
  text-align: center;
  background: #fa9a84;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
