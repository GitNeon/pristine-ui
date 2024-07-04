<script setup>
import PriButton from '@pristine-ui/components/button/src/button.vue';

defineOptions({
  name: 'LoadingButton',
});
</script>

<template>
  <div class="otc">
    <div class="itc">
      <PriButton loading type="primary">加载中</PriButton>
      <PriButton loading>加载中</PriButton>
      <PriButton loading type="success">加载中</PriButton>
      <PriButton loading type="danger">加载中</PriButton>
    </div>
  </div>
</template>

<style scoped>
</style>
