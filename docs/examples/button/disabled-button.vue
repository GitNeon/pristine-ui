<script setup>
import PriButton from '@pristine-ui/components/button/src/button.vue';

defineOptions({
  name: 'DisabledButton',
});

function onButtonClick() {
  // eslint-disable-next-line no-alert
  window.alert('点击了按钮');
}
</script>

<template>
  <div class="otc">
    <div class="itc">
      <PriButton @click="onButtonClick">普通按钮</PriButton>
      <PriButton disabled>禁用按钮</PriButton>
      <PriButton disabled type="primary">主要按钮</PriButton>
      <PriButton disabled type="success">成功按钮</PriButton>
      <PriButton disabled type="warning">警告按钮</PriButton>
      <PriButton disabled type="danger">危险按钮</PriButton>
    </div>
    <div class="itc">
      <PriButton disabled round>Round</PriButton>
      <PriButton round disabled>圆角按钮</PriButton>
      <PriButton round type="primary" disabled>圆角按钮</PriButton>
      <PriButton round type="success" disabled>圆角按钮</PriButton>
      <PriButton round type="warning" disabled>圆角按钮</PriButton>
      <PriButton round type="danger" disabled>圆角按钮</PriButton>
    </div>
  </div>
</template>

<style scoped>
</style>
