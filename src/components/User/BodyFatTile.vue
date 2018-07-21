<template>
  <div class="tile-info background-view">
    <b-col>
        <b-row class="text-left">
            <b-col>
                <span id="title">Gordura corporal</span>
            </b-col>
        </b-row>
        <br>
        <b-row class="text-left">
            <b-col cols="8">
                <span id="qtt">&\nbsp 15.4 Kg</span>
            </b-col>
            <b-col cols="4">
                <span id="diff">+10</span>
            </b-col>
        </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "TotalInfo",

  data() {
    return {};
  }
};
</script>

<style>
.tile-info {
  height: 110px;
  padding: 10px;
}

#title {
  font-size: 20px !important;
  font-weight: 600 !important;
  margin-bottom: 25px;
}

#qtt {
  border-left: 2px solid red;
  font-size: 40px !important;
  font-weight: 500 !important;
}

#diff {
  font-size: 30px !important;
  font-weight: 200 !important;
  color: darkgray;
}
</style>
