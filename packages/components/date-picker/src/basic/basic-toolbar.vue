<script setup lang="ts">
import type { BasicToolbarEmits } from '../date-picker.ts';

const emit = defineEmits<BasicToolbarEmits>();
</script>

<template>
  <div class="date-panel-toolbar">
    <template v-if="$slots.custom">
      <slot name="custom" />
    </template>
    <template v-else>
      <div class="toolbar-button" @click="emit('handleDefaultDate')">默认</div>
      <div class="toolbar-button" @click="emit('handleCurrentDate')">此刻</div>
      <div class="toolbar-button" @click="emit('handleClearDate')">清空</div>
    </template>
  </div>
</template>

<style scoped>
@import '../../../../theme-chalk/src/date-picker/basic-toolbar.css';
</style>
