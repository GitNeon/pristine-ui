<script setup lang="ts">
import PriButton from '@/components/button/src/button.vue';

function onButtonClick() {
  // eslint-disable-next-line no-alert
  window.alert('点击了按钮');
}
</script>

<template>
  <div>
    <h2>一、按钮测试</h2>
    <div class="flex-wrapper">
      <PriButton @click="onButtonClick">
        普通按钮
      </PriButton>
      <PriButton :disabled="true">
        禁用按钮
      </PriButton>
      <PriButton type="primary">
        主要按钮
      </PriButton>
      <PriButton type="success">
        成功按钮
      </PriButton>
      <PriButton type="warning">
        警告按钮
      </PriButton>
      <PriButton type="danger">
        危险按钮
      </PriButton>
    </div>
    <div class="flex-wrapper">
      <PriButton :round="true">
        圆角按钮
      </PriButton>
      <PriButton :round="true" :disabled="true">
        圆角按钮
      </PriButton>
      <PriButton :round="true" type="primary" :disabled="true">
        圆角按钮
      </PriButton>
      <PriButton :round="true" type="success">
        圆角按钮
      </PriButton>
      <PriButton :round="true" type="warning">
        圆角按钮
      </PriButton>
      <PriButton :round="true" type="danger">
        圆角按钮
      </PriButton>
    </div>
    <div class="flex-wrapper">
      <PriButton :loading="true">
        加载中
      </PriButton>
    </div>
    <div class="flex-wrapper">
      <PriButton circle>
        圆
      </PriButton>
      <PriButton type="primary" circle>
        形
      </PriButton>
      <PriButton type="success" circle>
        按
      </PriButton>
      <PriButton type="info" circle>
        钮
      </PriButton>
    </div>
    <div class="flex-wrapper">
      <PriButton size="small">
        小型按钮
      </PriButton>
      <PriButton>默认按钮</PriButton>
      <PriButton size="large">
        大型按钮
      </PriButton>
    </div>
    <div class="flex-wrapper">
      <PriButton type="primary" link>
        链接按钮
      </PriButton>
      <PriButton type="success" link>
        链接按钮-成功
      </PriButton>
      <PriButton type="warning" link>
        链接按钮-警告
      </PriButton>
    </div>
  </div>
</template>

<style>
.flex-wrapper {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}
</style>
