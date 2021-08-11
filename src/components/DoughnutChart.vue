<script>
import { defineComponent } from "vue";
import { Doughnut } from "vue3-chart-v2";
export default defineComponent({
  extends: Doughnut,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    const status = this.chartData.map((d) => d.status);

    let occurences = {};
    for (let i = 0; i < status.length; i++) {
      occurences[status[i]] = (occurences[status[i]] || 0) + 1;
    }

    this.renderChart(
      {
        labels: ["Rejected", "Ongoing", "Completed"],
        datasets: [
          {
            label: "Number of Accounts by Month",
            data: Object.values(occurences),
            backgroundColor: ["#dd3838", "#cebd2c", "#33d69f"],
          },
        ],
      },
      this.options
    );
  },
});
</script>