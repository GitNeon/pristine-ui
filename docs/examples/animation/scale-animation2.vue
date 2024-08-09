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
    <Transition name="scale-left-top">
      <div v-if="scaleVisible" class="item">
        <span>scaleY-1</span>
      </div>
    </Transition>
    <Transition name="scale-left-top">
      <div v-if="scaleVisible" class="item">
        <span>scaleY-2</span>
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
