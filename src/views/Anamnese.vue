<template>
  <div id="anamnese">
    <base-info></base-info>
    <br />
    <b-container>
      <b-row align-h="center">
        <b-col md="2">
          <chip
            text="Anamnese"
            backgroundColor="#007bff"
            textColor="#fff"
            fontSize="16px"
          ></chip>
        </b-col>
      </b-row>
    </b-container>
    <br />
    <b-container>
      <b-nav tabs align="center">
        <b-nav-item :active="tabs.geral" @click="changeTab('geral')"
          >Geral</b-nav-item
        >
        <b-nav-item
          :active="tabs.atividadesFisicas"
          @click="changeTab('atividadesFisicas')"
          >Atividades Fisicas</b-nav-item
        >
        <b-nav-item :active="tabs.parq" @click="changeTab('parq')"
          >Par-Q</b-nav-item
        >
        <b-nav-item :active="tabs.aha" @click="changeTab('aha')"
          >Aha</b-nav-item
        >
      </b-nav>

      <b-col md="12" class="background-view">
        <br />
        <atividades-fisicas v-if="tabs.atividadesFisicas"></atividades-fisicas>
        <geral v-if="tabs.geral"></geral>
        <par-q v-if="tabs.parq"></par-q>
        <aha v-if="tabs.aha"></aha>
        <br />
      </b-col>
    </b-container>
  </div>
</template>

<script>
import Chip from "@/components/Chip2";
import BaseInfo from "@/components/User/BaseInfo";
import AtividadesFisicas from "@/components/Avaliacoes/Anamnese/AtividadesFisicas";
import Geral from "@/components/Avaliacoes/Anamnese/Geral";
import ParQ from "@/components/Avaliacoes/Anamnese/ParQ";
import Aha from "@/components/Avaliacoes/Anamnese/Aha";

export default {
  name: "Anamnese",
  components: { BaseInfo, Chip, AtividadesFisicas, Geral, ParQ, Aha },
  data() {
    return {
      tabs: {
        atividadesFisicas: true,
        geral: false,
        parq: false,
        aha: false
      }
    };
  },
  methods: {
    changeTab(tab) {
      Object.keys(this.tabs).forEach(key => {
        if (key === tab) {
          this.tabs[key] = true;
        } else {
          this.tabs[key] = false;
        }
      });
    }
  }
};
</script>

<style scoped></style>
