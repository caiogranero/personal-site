<template>
  <div class="login">
    <br><br>
    <b-container>
    <b-row>
      <b-col md="12">
        <h2><strong>Acesse sua conta</strong></h2>
        <br>
        <strong>Não tem uma conta ainda? <a href="">Cadastre-se</a></strong>
      </b-col>
    </b-row>
    
    <br>
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="5" class="justify-content-md-center" align-self="center">
        <b-form @submit="onSubmit">
          <!-- <b-form-group horizontal size="md"> -->
            <b-form-input type="email" v-model="form.email" required placeholder="Email" size="md">
            </b-form-input>
          <!-- </b-form-group> -->
            <br>
          <!-- <b-form-group size="md" horizontal> -->
            <b-form-input type="password" v-model="form.password" size="md" required placeholder="Senha">
            </b-form-input>
          <!-- </b-form-group> -->
            <br>
          <b-button type="submit" variant="primary">
            ACESSAR
          </b-button>
        </b-form>
      </b-col>
      <b-col md="5" class="login-image">
        <img src="/img/Kettle_Bell.png">
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style>
.login-image img {
  /* background-image: url("/img/Kettle_Bell.jpg"); */
  width: 500px; /* you can use % */
  height: auto;
}
</style>
