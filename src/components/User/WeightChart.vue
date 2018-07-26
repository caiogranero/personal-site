<template>
  <div class="weight">
    <line-chart :height="310"></line-chart>
  </div>
</template>

<script>
import LineChart from "@/components/Charts/LineChart.js";

export default {
  name: "WeightChart",
  components: { LineChart },
  data() {
    return {};
  }
};
</script>

<style>
</style>
