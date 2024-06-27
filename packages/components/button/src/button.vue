<script setup lang="ts">
import type { ButtonProps } from '@/components/button/src/button.ts';

defineOptions({
  name: 'PriButton',
  inheritAttrs: true,
});

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'default',
  type: 'default',
  plain: false,

});

console.log(props);
</script>

<template>
  <button class="pri-button">
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="css">
@import "../../../theme-chalk/button.css";
</style>
