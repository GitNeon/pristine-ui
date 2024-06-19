import { ref } from 'vue';
import { useEventListener } from '@/hooks/use-event-listener';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  useEventListener(window, 'mousemove', (event) => {
    const msEvent = event as MouseEvent;
    x.value = msEvent.x;
    y.value = msEvent.y;
  });

  return { x, y };
}
