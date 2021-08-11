<script>
import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";
export default defineComponent({
  extends: Line,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
      scaleOverride: true,
      scaleSteps: 1,
      scaleStepWidth: 1,
      scaleStartValue: 1,
    },
  },
  mounted() {
    const dates = this.chartData.map((d) => d.date);

    let occurences = {};
    for (let i = 0; i < dates.length; i++) {
      occurences[dates[i]] = (occurences[dates[i]] || 0) + 1;
    }

    this.renderChart(
      {
        labels: Object.keys(occurences),
        datasets: [
          {
            label: "Number of Accounts by Month",
            data: Object.values(occurences),
            borderColor: "#7c5dfa",
            backgroundColor: "#7c5dfa",
          },
        ],
      },
      this.options
    );
  },
});
</script>