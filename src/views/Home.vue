<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <b-row v-for="user in users" :key="user._id">
      <b-col md="12">
        <router-link :to="'/usuarios/' + user._id">{{ user.nome }}</router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      users: []
    };
  },
  created() {}
};
</script>
