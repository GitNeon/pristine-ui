<script setup lang="ts">
import fastPrevIcon from '../../../base/icon/fast-prev.svg';
import fastPrev2Icon from '../../../base/icon/fast-prev-2.svg';
import fastNextIcon from '../../../base/icon/fast-next.svg';
import fastNext2Icon from '../../../base/icon/fast-next-2.svg';
import { useDay } from '../hooks/use-day.ts';

defineOptions({
  name: 'DayTablePanel',
});

const {
  year,
  month,
  weeks,
  dayList,
  selectList,
  moveYear,
  moveMonth,
  handlePickDate,
  handleThisDate,
  handleClear,
} = useDay();
</script>

<template>
  <div class="date-panel-container d-border d-shadow">
    <div class="date-panel-control">
      <img :src="fastPrevIcon" alt="year-fast-prev" @click="moveYear('prev')">
      <img
        :src="fastPrev2Icon"
        alt="month-fast-prev"
        @click="moveMonth('prev')"
      >
      <div>
        <span class="year-span">{{ year }}年</span>
        <span class="month-span">{{ month }}月</span>
      </div>
      <img
        :src="fastNext2Icon"
        alt="month-fast-next"
        @click="moveMonth('next')"
      >
      <img
        :src="fastNextIcon"
        alt="year-fast-next"
        @click="moveMonth('next')"
      >
    </div>
    <table class="date-panel-table" @click="handlePickDate">
      <thead>
        <tr>
          <th v-for="week in weeks" :key="week">{{ week }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, index) in dayList" :key="index">
          <td
            v-for="(dayItem, innerIndex) in day"
            :key="dayItem.label"
            :class="{
              'off-text': !dayItem.thisMonth,
            }"
            :data-date-value="dayItem.value"
            :data-date-index="`${index}-${innerIndex}`"
          >
            <div
              class="cell"
              :class="{
                selected: selectList.includes(dayItem.value),
              }"
            >
              {{ dayItem.label }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="date-panel-footer">
      <div class="date-mini-button" @click="handleThisDate">今天</div>
      <div class="date-mini-button" @click="handleClear">清除</div>
    </div>
  </div>
</template>

<style scoped>
@import '../../../../theme-chalk/src/date-picker.css';
</style>
