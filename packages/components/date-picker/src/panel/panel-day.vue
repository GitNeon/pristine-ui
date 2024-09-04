<script setup lang="ts">
import { useDay } from '../hooks/use-day.ts';
import BasicContent from '../basic/basic-content.vue';
import BasicControl from '../basic/basic-control.vue';
import BasicToolbar from '../basic/basic-toolbar.vue';
import type { ControlShowType } from '../date-picker.ts';

defineOptions({
  name: 'PanelDayTable',
});

const showList: ControlShowType[] = [
  'inner-prev',
  'outer-prev',
  'inner-next',
  'outer-next',
];

const {
  year,
  month,
  weeks,
  dayList,
  selectList,
  changeYear,
  changeMonth,
  handleSelect,
  handleThisDate,
  clearSelect,
} = useDay();
</script>

<template>
  <div class="date-panel-container panel-border panel-shadow">
    <BasicControl
      :show="showList"
      @inner-prev-click="changeMonth('prev')"
      @inner-next-click="changeMonth('next')"
      @outer-prev-click="changeYear('prev')"
      @outer-next-click="changeYear('next')"
    >
      <template #center>
        <span>{{ year }}年</span>
        <span>{{ month }}月</span>
      </template>
    </BasicControl>
    <BasicContent
      :columns="weeks"
      :rows="dayList"
      :selected="selectList"
      @content-click="handleSelect"
    />
    <BasicToolbar
      @handle-current-date="handleThisDate"
      @handle-clear-date="clearSelect"
    />
  </div>
</template>

<style scoped>
@import '../../../../theme-chalk/src/date-picker/panel-picker.css';
</style>
