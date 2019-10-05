<template>
  <div id="atividades-fisicas">
    <b-row>
      <b-col md="7">
        <b-form-group
          label-size="sm"
          size="sm"
          id="input-group-1"
          label="Atividade"
          label-for="atividade"
        >
          <v-select
            v-model="form.atividades.atividade"
            :filterable="true"
            id="atividade"
            :clearable="true"
            :autocomplete="true"
            :options="atividades"
          ></v-select>
        </b-form-group>
      </b-col>
      <b-col md="1">
        <b-form-group
          label-size="sm"
          id="input-group-1"
          label="Frequencia"
          label-for="frequencia"
          description="vezes por semana"
        >
          <b-form-input
            id="frequencia"
            size="sm"
            type="number"
            v-model="form.atividades.frequencia"
            placeholder
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="1">
        <b-form-group
          label-size="sm"
          id="input-group-1"
          label="Tempo"
          label-for="tempo"
          description="meses"
        >
          <b-form-input
            id="tempo"
            size="sm"
            type="number"
            v-model="form.atividades.tempo"
            placeholder
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="1">
        <b-form-group
          label-size="sm"
          id="input-group-1"
          label="Duração"
          label-for="duracao"
          description="minutos"
        >
          <b-form-input
            id="duracao"
            size="sm"
            type="number"
            v-model="form.atividades.duracao"
            placeholder
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-button type="submit" variant="primary" @click="adicionarAtividade()"
          >ADICIONAR</b-button
        >
      </b-col>
    </b-row>

    <b-table small hover :fields="fields" :items="items">
      <template slot="remover" slot-scope="cell">
        <b-button size="sm" @click="remove(cell.item)">
          <i class="fas fa-minus-circle clickable"></i>
        </b-button>
      </template>
    </b-table>
    <b-row>
      <b-col md="12">
        <b-progress
          :value="resultado.value"
          variant="info"
          :striped="true"
          class="mt-2"
        ></b-progress>
        {{ resultado.text }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
import iziToast from "izitoast";
import moment from "moment";
import intensidades from "./intensidades";

export default {
  name: "AtividadesFisicas",
  data() {
    return {
      user: {
        age: 0
      },
      fields: [
        { key: "atividade.label", label: "Atividade" },
        "frequencia",
        "tempo",
        "duracao",
        "remover"
      ],
      form: {
        atividades: {
          frequencia: "",
          tempo: "",
          duracao: "",
          atividade: null
        }
      },
      atividades: [],
      items: []
    };
  },
  created() {
    this.getUserAge();

    this.$ActivityService
      .Get()
      .then(resp => resp.data.data)
      .then(
        resp =>
          (this.atividades = resp.map(x => {
            return {
              id: x.codigo,
              met: x.met,
              label: x.atividade
            };
          }))
      );
  },
  computed: {
    resultado() {
      let idade = this.user.age;

      if (this.items.length === 0) {
        return { text: "SEDENTÁRIO", value: 25 };
      }

      if (!this.items.find(i => i.duracao >= 10)) {
        return { text: "SEDENTÁRIO", value: 25 };
      }

      const atividades = this.items.filter(
        i => i.frequencia > 3 && i.duracao > 20
      );

      if (atividades.length === 0) {
        return { text: "IRREGULARMENTE ATIVO", value: 50 };
      }

      const ai = atividades.map(atividade => {
        const { met } = atividade.atividade;

        const int = intensidades
          .filter(x => idade >= x.age.min && idade <= x.age.max)
          .find(x => met >= x.met.min && met <= x.met.max);

        return { atividade, intensidade: int.intesidade };
      });

      if (
        ai.find(
          i =>
            i.intesidade === "Vigorosa" &&
            i.atividade.frequencia >= 5 &&
            i.atividade.duracao >= 30
        )
      ) {
        return { text: "MUITO ATIVO", value: 100 };
      }

      if (
        ai.find(
          i =>
            i.intesidade === "Vigorosa" &&
            i.atividade.frequencia >= 3 &&
            i.atividade.duracao >= 20
        )
      ) {
        if (
          ai.find(
            i =>
              i.intesidade !== "Vigorosa" &&
              i.atividade.frequencia >= 5 &&
              i.atividade.duracao >= 30
          )
        ) {
          return { text: "MUITO ATIVO", value: 100 };
        }
      }

      if (
        ai.find(
          i =>
            i.intesidade === "Vigorosa" &&
            i.atividade.frequencia >= 3 &&
            i.atividade.duracao >= 20
        )
      ) {
        return { text: "ATIVO", value: 75 };
      }

      if (
        ai.find(
          i =>
            i.intesidade !== "Vigorosa" &&
            i.atividade.frequencia >= 5 &&
            i.atividade.duracao >= 30
        )
      ) {
        return { text: "ATIVO", value: 75 };
      }

      if (
        ai.find(
          i =>
            i.atividade.frequencia >= 5 &&
            i.atividade.duracao * i.atividade.frequencia >= 150
        )
      ) {
        return { text: "ATIVO", value: 75 };
      }

      return { text: "IRREGULARMENTE ATIVO", value: 50 };
    }
  },
  methods: {
    adicionarAtividade() {
      if (
        this.items.find(
          i => i.atividade.id === this.form.atividades.atividade.id
        )
      ) {
        iziToast.error({
          title: `A atividade ${
            this.form.atividades.atividade.label
          } já foi adicionada.`,
          position: "topCenter"
        });

        return;
      }

      this.items.push(this.form.atividades);

      this.form.atividades = {
        frequencia: "",
        tempo: "",
        duracao: "",
        atividade: null
      };
    },
    remove(item) {
      this.items = this.items.filter(i => i.atividade.id != item.atividade.id);
    },
    getUserAge() {
      const userId = this.$route.params.userId;

      this.$UserService
        .getById(userId)
        .then(user => user.data.data)
        .then(data => {
          if (moment(data.nascimento).isValid()) {
            this.user.age = parseInt(
              moment(data.nascimento)
                .fromNow(true)
                .split(" ")[0]
            );
          }
        });
    }
  },
  mounted() {
    this.$parent.$on("RELOAD_DADOS_BASICOS", () => {
      this.getUserAge();
    });
  }
};
</script>

<style scoped>
#atividades-fisicas .form-group {
  text-align: left;
}
</style>
