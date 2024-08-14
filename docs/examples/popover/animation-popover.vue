<script setup lang="ts">
import PriPopover from '@pristine-ui/components/popover/src/popover.vue';
import PriButton from '@pristine-ui/components/button/src/button.vue';
</script>

<template>
  <div class="otc">
    <div class="itc">
      <PriPopover trigger="hover" position="top" animation-name="fade">
        <template #reference>
          <PriButton>fade-top</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="right" animation-name="fade">
        <template #reference>
          <PriButton>fade-right</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="bottom" animation-name="fade">
        <template #reference>
          <PriButton>fade-bottom</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="left" animation-name="fade">
        <template #reference>
          <PriButton>fade-left</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
    </div>
    <div class="itc">
      <PriPopover trigger="hover" position="top" animation-name="scale">
        <template #reference>
          <PriButton>scale-top</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="right" animation-name="scale">
        <template #reference>
          <PriButton>scale-right</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="bottom" animation-name="scale">
        <template #reference>
          <PriButton>scale-bottom</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="left" animation-name="scale">
        <template #reference>
          <PriButton>scale-left</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
    </div>
    <div class="itc">
      <PriPopover trigger="hover" position="top" animation-name="translate">
        <template #reference>
          <PriButton>translate-top</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="right" animation-name="translate">
        <template #reference>
          <PriButton>translate-right</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="bottom" animation-name="translate">
        <template #reference>
          <PriButton>translate-bottom</PriButton>
        </template>
        <template #content>
          <span>这是内容区域</span>
        </template>
      </PriPopover>
      <PriPopover trigger="hover" position="left" animation-name="translate">
        <template #reference>
          <PriButton>translate-left</PriButton>
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
