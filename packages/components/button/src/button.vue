<script setup lang="ts">
import LoadingIcon from '../../base/icon/loading.svg';
import type { ButtonEmit, ButtonProps } from './button.ts';
import { useButton } from './use-button.ts';

defineOptions({
  name: 'PriButton',
  inheritAttrs: true,
});

const props = defineProps<ButtonProps>();
const emit = defineEmits<ButtonEmit>();

const { _class, ref_btn, handleClick } = useButton(props, emit);
</script>

<template>
  <button ref="ref_btn" :class="_class" :disabled="disabled" @click="handleClick">
    <template v-if="loading">
      <img class="btn-icon loading" :src="LoadingIcon" alt="loading">
    </template>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="css">
@import "../../../theme-chalk/src/button.css";
</style>
