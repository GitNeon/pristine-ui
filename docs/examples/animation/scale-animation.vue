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
    <Transition enter-active-class="scale-enter scale-bottom" leave-active-class="scale-leave scale-bottom">
      <div v-if="scaleVisible" class="item">
        <span>class=scale-enter scale-bottom</span>
      </div>
    </Transition>
    <Transition enter-active-class="scale-enter scale-top" leave-active-class="scale-leave scale-top">
      <div v-if="scaleVisible" class="item">
        <span>class=scale-enter scale-top</span>
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
