<script setup lang="ts">
import { useDay } from '../hooks/use-day.ts';

defineOptions({
  name: 'DayTablePanel',
});

const { year, month, weeks, dayList, moveYear } = useDay();
</script>

<template>
  <div class="date-panel-month-container">
    <div class="date-panel-month-control">
      <div class="year-prev" @click="moveYear('prev')">{{ '<<' }}</div>
      <div class="month-prev">{{ '<' }}</div>
      <div>
        <span class="year-span">{{ year }}年</span>
        <span class="month-span">{{ month }}月</span>
      </div>
      <div class="month-next">{{ '>' }}</div>
      <div class="year-next" @click="moveYear('next')">{{ '>>' }}</div>
    </div>
    <table class="date-panel-table">
      <thead>
        <tr>
          <th v-for="week in weeks" :key="week">{{ week }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, index) in dayList" :key="index">
          <td
            v-for="dayItem in day"
            :key="dayItem.label"
            :class="dayItem.thisMonth ? '' : 'off-text'"
          >
            {{ dayItem.label }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import '../../../../theme-chalk/src/date-picker.css';
</style>
