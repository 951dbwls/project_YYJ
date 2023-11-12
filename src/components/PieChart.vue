<template>
  <div>
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  data() {
    return {
      // 파이 차트 데이터
      chartData: {
        labels: ['레이블 1', '레이블 2', '레이블 3'],
        datasets: [
          {
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            data: [30, 50, 20],
          },
        ],
      },
      // 파이 차트 옵션
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    // 차트 렌더링 (한 번만 호출되도록 확인)
    if (!this.chartRendered) {
      this.renderChart(this.chartData, this.chartOptions);
      this.chartRendered = true; // 플래그 설정
    }
  },
  data() {
    return {
      chartRendered: false, // 렌더링 여부를 추적하기 위한 플래그
    };
  },
};
</script>
