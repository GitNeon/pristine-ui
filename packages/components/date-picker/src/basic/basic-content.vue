<script setup lang="ts">
import { computed } from 'vue';
import type { BasicContentEmits, BasicContentProps } from '../date-picker.ts';

defineOptions({
  name: 'BasicContent',
});

const props = defineProps<BasicContentProps>();
const emits = defineEmits<BasicContentEmits>();
const showColumn = computed(() => props.columns?.length);

const handleHeaderClick = (event: MouseEvent) => emits('headerClick', event);
const handleContentClick = (event: MouseEvent) => emits('contentClick', event);
</script>

<template>
  <table class="date-panel-table">
    <thead v-if="showColumn" @click="handleHeaderClick">
      <tr v-for="(column, index) in columns" :key="index">
        <th
          v-for="columnItem in column"
          :key="columnItem.value"
          :data-date-value="columnItem.value"
          :class="{
            selected: selected.includes(columnItem.value),
          }"
        >
          {{ columnItem.label }}
        </th>
      </tr>
    </thead>
    <tbody @click="handleContentClick">
      <tr v-for="(row, index) in rows" :key="index">
        <td
          v-for="(rowItem, itemIndex) in row"
          :key="rowItem.label"
          :class="{
            'off-text': !rowItem.isCurrentDate,
          }"
          :data-date-index="`${index}-${itemIndex}`"
        >
          <div
            class="cell"
            :data-date-value="rowItem.value"
            :class="{
              selected: selected.includes(rowItem.value),
            }"
          >
            {{ rowItem.label }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import "../../../../theme-chalk/src/date-picker/basic-content.css";
</style>
