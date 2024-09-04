<script setup lang="ts">
import { useYear } from '../hooks/use-year.ts';
import type { ControlShowType } from '../date-picker.ts';
import BasicControl from '../basic/basic-control.vue';
import BasicContent from '../basic/basic-content.vue';
import BasicToolbar from '../basic/basic-toolbar.vue';

const showList: ControlShowType[] = [
  'outer-prev',
  'outer-next',
];

const {
  startYear,
  endYear,
  yearList,
  selectList,
  changeYear,
  handleSelect,
  handleThisDate,
  clearSelect,
} = useYear();
</script>

<template>
  <div class="date-panel-container panel-border panel-shadow">
    <BasicControl
      :show="showList"
      @outer-prev-click="changeYear('prev')"
      @outer-next-click="changeYear('next')"
    >
      <template #center>
        <span>{{ `${startYear}-${endYear}` }}年</span>
      </template>
    </BasicControl>
    <BasicContent
      class="year"
      :columns="[]"
      :rows="yearList"
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
