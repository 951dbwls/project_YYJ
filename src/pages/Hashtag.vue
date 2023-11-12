<template>
    <!-- main part -->
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
      <div class="flex flex-col">
        <!-- page title -->
        <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">탐색하기</div>
        <!-- 그래프 그리기 등 할 공간 -->
        <div class="flex items-center justify-center">
          <PieChart style="width: 400px; height: 400px;" />
        </div>
      </div>
    </div>
    <!-- trend part -->
  </template>
  
  <script>
  import Trends from '../components/Trends.vue'
  import PieChart from '../components/PieChart.vue'
  
  export default {
    components: { Trends, PieChart },
  }
  </script>
  
  <style></style>
  