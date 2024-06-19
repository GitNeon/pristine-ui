<script setup lang="ts">
import type { ButtonProps } from '@/components/button/button.ts';

defineOptions({
  name: 'PButton',
});

/**
 * 当使用基于类型的声明时，我们失去了为 props 声明默认值的能力
 * 这可以通过 withDefaults 编译器宏解决
 * 由Vue官方提供的解决方案
 */
const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'default',
  type: undefined,
});

console.log(props);
</script>

<template>
  <button class="pri-button">
    <span>测试按钮</span>
  </button>
</template>

<style scoped lang="css">
@import "../../theme-chalk/button.css";
</style>
