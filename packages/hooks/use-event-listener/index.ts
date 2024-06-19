import { onMounted, onUnmounted } from 'vue';

export function useEventListener(target: Window, event: string, callback: (event: Event) => void) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}
