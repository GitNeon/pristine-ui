<script setup lang="ts">
import PriPopover from '@pristine-ui/components/popover/src/popover.vue';
import PriButton from '@pristine-ui/components/button/src/button.vue';
</script>

<template>
  <div class="otc">
    <div class="itc">
      <PriPopover trigger="hover" position="top">
        <template #reference>
          <PriButton>top-上</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="right">
        <template #reference>
          <PriButton>right-右</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="bottom">
        <template #reference>
          <PriButton>bottom-下</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="left">
        <template #reference>
          <PriButton>left-左</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
    </div>
  </div>
</template>

<style scoped>
</style>
