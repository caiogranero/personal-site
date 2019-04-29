import Vue from "vue";

// Registra a diretiva personalizada global chamada `v-focus`
Vue.directive("focus", {
  // Quando o elemento vinculado é inserido no DOM...
  inserted: function(el) {
    // Coloque o foco no elemento
    el.focus();
  }
});
