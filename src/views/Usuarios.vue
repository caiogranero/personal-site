<template>
  <div class="usuarios">
    <listagem-usuarios></listagem-usuarios>
  </div>
</template>

<script>
import ListagemUsuarios from "@/components/User/ListagemUsuarios.vue";

export default {
  name: "Usuarios",
  components: {
    ListagemUsuarios
  }
};
</script>
