<template>
  <div class="base-info">
    <b-container >
      <b-row>
        <b-col cols="3">
          <b-row id="basic">
            <b-col cols="4">
              <img src="@/assets/profile.jpg" id="profile">
            </b-col>
            <b-col>
              <h2>Sandra Cook</h2>
              <span id="grey">Tel: +55 11 94659-8848</span><br>
              <custom-select></custom-select>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="8">
          <b-row id="basic" class="text-center">
            <b-col cols="3" style="border-right:1px solid #d0dde2;">
              <span id="grey">Informações</span><br>
              <span id="black">32 <i class="fas fa-mars"></i> 12 Setembro, 1990</span><br>
              <span id="black">167cm</span>
            </b-col>
            <b-col cols="3" style="border-right:1px solid #d0dde2;">
              <span id="grey">Alergias</span><br>
              <span id="black">Rinite</span>
            </b-col>
            <b-col cols="3">
              <span id="grey">Doenças crônicas</span><br>
              <span id="black">Diabetes</span>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CustomSelect from "@/components/CustomSelect";

export default {
  name: "BaseInfo",

  components: {
    CustomSelect
  }
};
</script>

<style>
.base-info {
  background-color: white;
  padding-top: 25px;
  padding-bottom: 25px;
}

img#profile {
  border-radius: 50%;
  height: 80px;
}

#basic {
  text-align: left;
}
</style>
