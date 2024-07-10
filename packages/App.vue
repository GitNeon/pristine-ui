<script setup lang="ts">
import PriButton from '@/components/button/src/button.vue';
import PriPopover from '@/components/popover/src/popover.vue';
</script>

<template>
  <div>This is Pristine UI Project</div>
  <div style="position: relative; left: 200px; width: 200px; height: 200px; border: 1px solid">
    <PriPopover trigger="click" position="bottom">
      <template #reference>
        <PriButton>是否可见</PriButton>
      </template>
      <template #content>
        <span>这是内容区域</span>
      </template>
    </PriPopover>
  </div>
</template>
