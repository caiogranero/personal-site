<template>
  <div class="user-profile">
    <base-info></base-info>
    <br><br>
    <b-container>
      <b-row>
        <b-col md="5" sm="12" class="background-view">
          <total-info @view="display($event)"></total-info>
        </b-col>
        <b-col md="1" id="sm-space"></b-col>
        <b-col md="6" sm="12" class="background-view">
          <b-row>
            <b-col cols="12">
              <dados-basicos v-if="events.DADOS_BASICOS.view"></dados-basicos>
              <diseases-form v-if="events.DOENCAS_CRONICAS.insert"></diseases-form>
              <doencas-lista v-if="events.DOENCAS_CRONICAS.view"></doencas-lista>
              <measure-form v-if="events.MEDIDAS.insert"></measure-form>
              <medida-valor-form v-if="events.MEDIDAS.view"></medida-valor-form>
              <remedios-lista v-if="events.REMEDIOS.view"></remedios-lista>
              <drugs-form v-if="events.REMEDIOS.insert"></drugs-form>
              <observation-form v-if="events.OBSERVACOES.insert"></observation-form>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseInfo from "@/components/User/BaseInfo";
import TotalInfo from "@/components/User/TotalInfo";
import DiseasesForm from "@/components/User/Details/DiseasesForm";
import DoencasLista from "@/components/User/Details/DoencasLista";
import RemediosLista from "@/components/User/Details/RemediosLista";
import MeasureForm from "@/components/User/Details/MeasureForm";
import DrugsForm from "@/components/User/Details/DrugsForm";
import ObservationForm from "@/components/User/Details/ObservationForm";
import DadosBasicos from "@/components/User/Details/DadosBasicos";
import MedidaValorForm from "@/components/User/Details/MedidaValorForm";

export default {
  name: "App",
  data() {
    return {
      events: {
        DOENCAS_CRONICAS: {
          view: false,
          insert: false
        },
        DADOS_BASICOS: {
          view: false,
          insert: false
        },
        MEDIDAS: {
          view: false,
          insert: false
        },
        REMEDIOS: {
          view: false,
          insert: false
        },
        OBSERVACOES: {
          view: false,
          insert: false
        }
      }
    };
  },
  components: {
    BaseInfo,
    TotalInfo,
    DiseasesForm,
    MeasureForm,
    DrugsForm,
    DoencasLista,
    ObservationForm,
    DadosBasicos,
    MedidaValorForm,
    RemediosLista
  },

  methods: {
    display(evt) {
      Object.keys(this.events).forEach(aPage => {
        this.events[aPage].view = false;
        this.events[aPage].insert = false;
      });

      this.events[evt.event][evt.type] = true;
    }
  },

  mounted() {
    this.display({ event: "DADOS_BASICOS", type: "view" });
  }
};
</script>

<style>
#sm-space {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
