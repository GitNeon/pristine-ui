<script setup lang="ts">
import { ref } from 'vue';
import PriButton from '@pristine-ui/components/button/src/button.vue';

const fadeVisible = ref(true);
function isVisible() {
  fadeVisible.value = !fadeVisible.value;
}
</script>

<template>
  <PriButton @click="isVisible">translate平移</PriButton>
  <hr>
  <div class="flex-container">
    <Transition enter-active-class="translate-enter translate-bottom" leave-active-class="translate-leave translate-bottom">
      <div v-if="fadeVisible" class="item">
        <span>translate-enter translate-bottom</span>
      </div>
    </Transition>
    <Transition enter-active-class="translate-enter translate-top" leave-active-class="translate-leave translate-top">
      <div v-if="fadeVisible" class="item">
        <span>translate-enter translate-bottom</span>
      </div>
    </Transition>
  </div>
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
