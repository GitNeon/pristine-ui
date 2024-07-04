<script setup lang="ts">
import LoadingIcon from '../../../../public/loading.svg';
import type { ButtonEmit, ButtonProps } from './button.ts';
import { useButton } from './use-button.ts';

defineOptions({
  name: 'PriButton',
  inheritAttrs: true,
});

const props = defineProps<ButtonProps>();
const emit = defineEmits<ButtonEmit>();

const { _class, handleClick } = useButton(props, emit);
</script>

<template>
  <button :class="_class" :disabled="disabled" @click="handleClick">
    <template v-if="loading">
      <img class="btn-icon loading" :src="LoadingIcon" alt="loading">
    </template>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="css">
@import "../../../theme-chalk/button.css";
</style>
