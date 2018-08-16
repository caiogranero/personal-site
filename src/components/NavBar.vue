<template>
  <div id="navbar">
    <b-container>
      <b-row>
        <!-- <b-col md="1" sm="2"> -->
        <button class="toggle-button">
          <i class="fas fa-bars clickable" style="font-size: 1.5em;"></i>
        </button>
        <!-- </b-col>
        <b-col md="2" sm="9"> -->
        <h1>My Personal</h1>
        <!-- </b-col> -->
        <!-- <b-col></b-col> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
</script>

<style>
h1 {
  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif !important;
  font-size: 22px !important;
  font-style: normal !important;
  font-variant: small-caps !important;
  font-weight: 400 !important;
  line-height: 30px !important;
  color: #67a4e8 !important;
}

#navbar {
  background-color: white;
  padding-top: 7px;
  padding-bottom: 7px;
  border-bottom: 2px solid #c4c5c6;
}

.toggle-button {
  background-color: transparent;
  border: 0px;
  margin-left: 10px;
  margin-right: 15px;
}
</style>
