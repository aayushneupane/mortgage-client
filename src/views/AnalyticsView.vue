<template>
  <div class="analytics">
    <div class="flex">
      <div class="box">
        <h4>Number of Accounts by Month</h4>
        <line-chart v-bind:chartData="chartData" />
      </div>
      <div class="box right">
        <h4>Breakdown of accounts by status</h4>
        <doughnut-chart v-bind:chartData="chartData" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import LineChart from "../components/LineChart.vue";
import DoughnutChart from "../components/DoughnutChart.vue";

export default {
  name: "analyticsView",
  components: {
    LineChart,
    DoughnutChart,
  },
  computed: {
    ...mapState(["accountData"]),
    chartData() {
      this.accountData.forEach((element) => {
        element.date = moment(element.created, "YYYY-MM-DDTHH:mm:ss").format(
          "MM/YYYY"
        );
      });
      return this.accountData;
    },
  },
};
</script>

<style lang="scss" scoped>
.analytics {
  .flex {
    display: flex;

    .box {
      height: 600px;
      width: 600px;
      flex: 1;

      h4 {
        text-align: center;
        color: #fff;
      }
    }

    .right {
      padding-left: 200px;
    }
  }
}
</style>
