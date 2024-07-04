<script setup>
import PriButton from '@pristine-ui/components/button/src/button.vue';

defineOptions({
  name: 'LinkButton',
});
</script>

<template>
  <div class="otc">
    <div class="itc">
      <PriButton link type="primary">链接文本</PriButton>
      <PriButton link type="success">链接文本</PriButton>
      <PriButton link type="warning">链接文本</PriButton>
      <PriButton link type="danger">链接文本</PriButton>
    </div>
    <div class="itc">
      <PriButton link disabled type="primary">链接文本</PriButton>
      <PriButton link disabled type="success">链接文本</PriButton>
      <PriButton link disabled type="warning">链接文本</PriButton>
      <PriButton link disabled type="danger">链接文本</PriButton>
    </div>
  </div>
</template>

<style scoped>
</style>
