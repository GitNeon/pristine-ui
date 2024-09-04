<script setup lang="ts">
import PanelDay from '@/components/date-picker/src/panel/panel-day.vue';
import PanelYear from '@/components/date-picker/src/panel/panel-year.vue';
import PanelMonth from '@/components/date-picker/src/panel/panel-month.vue';
import PanelQuarter from '@/components/date-picker/src/panel/panel-quarter.vue';
</script>

<template>
  <div class="test-title">Pristine UI Component Test Page</div>
  <h3>日期面板</h3>
  <PanelDay />
  <h3>年份面板</h3>
  <PanelYear />
  <h3>月份面板</h3>
  <PanelMonth />
  <h3>季度面板</h3>
  <PanelQuarter />
</template>

<style>
.test-title {
  margin: 10px;
  background-clip: text;
  background-image: linear-gradient(to right, deepskyblue, greenyellow, lightgreen);
  color: transparent;
  font-size: 48px;
  font-weight: bolder;
  text-align: center;
}
</style>
