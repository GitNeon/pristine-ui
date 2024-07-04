<script setup>
import PriButton from '@pristine-ui/components/button/src/button.vue';

defineOptions({
  name: 'SizeButton',
});
</script>

<template>
  <div class="otc">
    <div class="itc">
      <PriButton size="small" type="primary">小型按钮</PriButton>
      <PriButton size="small" type="success">小型按钮</PriButton>
      <PriButton size="small" type="danger">小型按钮</PriButton>
    </div>
    <div class="itc">
      <PriButton size="normal" type="primary">常规按钮</PriButton>
      <PriButton size="normal" type="success">常规按钮</PriButton>
      <PriButton size="normal" type="danger">常规按钮</PriButton>
    </div>
    <div class="itc">
      <PriButton size="large" type="primary">大型按钮</PriButton>
      <PriButton size="large" type="success">大型按钮</PriButton>
      <PriButton size="large" type="danger">大型按钮</PriButton>
    </div>
  </div>
</template>

<style scoped>
</style>
