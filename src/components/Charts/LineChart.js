import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["data", "options"],
  mounted() {
    const data = {
      labels: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho"
      ],
      datasets: [
        {
          label: "Peso",
          borderColor: "#5093e1",
          fill: false,
          data: [40, 39, 10, 40, 39, 60, 40]
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false
    };
    this.renderChart(data, options);
  }
};
