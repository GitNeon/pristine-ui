<script setup lang="ts">
import PriPopover from '@pristine-ui/components/popover/src/popover.vue';
import PriButton from '@pristine-ui/components/button/src/button.vue';
</script>

<template>
  <div class="otc">
    <div class="itc">
      <PriPopover trigger="hover" position="top">
        <template #reference>
          <PriButton>hover悬浮</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="click" position="top">
        <template #reference>
          <PriButton>click点击</PriButton>
        </template>
        <template #content>
          <p>这是内容区域这是内容区域这是内容区域这是内容区域这是内容区域这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
          <p>这是内容区域</p>
        </template>
      </PriPopover>
    </div>
  </div>
</template>

<style scoped>
</style>
