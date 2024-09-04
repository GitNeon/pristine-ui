<script setup lang="ts">
import fastPrevIcon from '../../../base/icon/fast-prev.svg';
import fastPrev2Icon from '../../../base/icon/fast-prev-2.svg';
import fastNextIcon from '../../../base/icon/fast-next.svg';
import fastNext2Icon from '../../../base/icon/fast-next-2.svg';
import type {
  BasicControlEmits,
  BasicControlProps,
  ControlShowType,
} from '../date-picker.ts';

const props = defineProps<BasicControlProps>();
const emits = defineEmits<BasicControlEmits>();

const handleOuterPrev = () => emits('outerPrevClick', 'prev');
const handleInnerPrev = () => emits('innerPrevClick', 'prev');
const handleOuterNext = () => emits('outerNextClick', 'next');
const handleInnerNext = () => emits('innerNextClick', 'next');

const visible = (type: ControlShowType) => props.show.includes(type) ? 'visible' : 'hidden';
</script>

<template>
  <div class="date-panel-control">
    <img
      :style="{ visibility: visible('outer-prev') }"
      :src="fastPrevIcon"
      alt="outer-fast-prev"
      @click="handleOuterPrev"
    >
    <img
      :style="{ visibility: visible('inner-prev') }"
      :src="fastPrev2Icon"
      alt="inner-fast-prev"
      @click="handleInnerPrev"
    >
    <div class="center-control">
      <slot name="center" />
    </div>
    <img
      :style="{ visibility: visible('inner-next') }"
      :src="fastNext2Icon"
      alt="inner-fast-next"
      @click="handleInnerNext"
    >
    <img
      :style="{ visibility: visible('outer-next') }"
      :src="fastNextIcon"
      alt="outer-fast-next"
      @click="handleOuterNext"
    >
  </div>
</template>

<style scoped>
@import "../../../../theme-chalk/src/date-picker/basic-control.css";
</style>
