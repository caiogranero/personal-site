<template>
  <div class="user-profile">
    <base-info></base-info>
    <br><br>
    <b-container >
      <b-row>
        <b-col cols="5" class="background-view">
          <total-info></total-info>
        </b-col>
        <b-col cols="7">
          <b-row>
            <b-col cols="6">
              <body-fat-tile></body-fat-tile>
            </b-col>
            <b-col cols="6">
              <body-fat-tile></body-fat-tile>
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
import BodyFatTile from "@/components/User/BodyFatTile";

export default {
  name: "App",
  components: {
    BaseInfo,
    TotalInfo,
    BodyFatTile
  }
};
</script>

<style>
</style>
