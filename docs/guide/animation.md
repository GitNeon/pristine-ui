# 内置过渡动画

本UI组件库内置的部分过渡动画，你可以直接在类名上指定名称使用，也可以配合vue的Transition组件配合使用，
你可以阅读官方文档[访问Transition](https://cn.vuejs.org/guide/built-ins/transition)获得该组件的使用细节。

## Fade 淡入淡出

<FadeAnimation></FadeAnimation>

## Scale 缩放

支持上、下、左、右四个方向；

<ScaleAnimation></ScaleAnimation>

配合vue的transition组件实现效果：

::: details 查看代码
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import PriButton from '@pristine-ui/components/button/src/button.vue';

  const scaleVisible = ref(true);
  function isScaleVisible() {
    scaleVisible.value = !scaleVisible.value;
  }
</script>

<template>
  <hr>
  <PriButton @click="isScaleVisible">scale缩放</PriButton>
  <hr>
  <div class="flex-container">
    <Transition enter-active-class="scale-enter scale-bottom" leave-active-class="scale-leave scale-bottom">
      <div v-if="scaleVisible" class="item">
        <span>class=scale-enter scale-bottom</span>
      </div>
    </Transition>
    <Transition enter-active-class="scale-enter scale-top" leave-active-class="scale-leave scale-top">
      <div v-if="scaleVisible" class="item">
        <span>class=scale-enter scale-top</span>
      </div>
    </Transition>
  </div>
  <hr>
</template>

<style scoped>
  .flex-container {
    display: flex;
    height: 140px;
    padding: 20px;
    border: 1px solid skyblue;
    border-radius: 2px;
    gap: 20px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 100px;
    background-color: var(--primary-color-5);
  }
</style>
```
:::

## Translate 平移

同样支持上、下、左、右四个方向；

<TranslateAnimation></TranslateAnimation>

::: details 查看代码
```vue
<Transition enter-active-class="translate-enter translate-bottom" leave-active-class="translate-leave translate-bottom">
  ...
</Transition>
```
:::
