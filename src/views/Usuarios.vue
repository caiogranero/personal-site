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
  },
  created() {
    const currentUser = this.$store.state.currentUser;

    if (currentUser.type === "Aluno") {
      this.$router.push(`/usuarios/${currentUser.id}`);
    }
  }
};
</script>
