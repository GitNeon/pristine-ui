import { computed, ref } from 'vue';
import type { ButtonEmit, ButtonProps } from './button.ts';

const normalizeSpaces = (str: string) => str.replace(/\s{2,}/g, ' ');

export function useButton(props: ButtonProps, emit: ButtonEmit) {
  const ref_btn = ref<HTMLElement>();

  const _class = computed(() => {
    const type = props.type || 'default';
    const disabled = (props.disabled || props.loading) ? 'disabled' : '';
    const round = props.round ? 'round' : '';
    const circle = props.circle ? 'circle' : '';
    const size = props.size ? props.size : 'normal';
    const link = props.link ? 'link' : '';
    return normalizeSpaces(`pri-button ${type} ${disabled} ${round} ${circle} ${size} ${link}`);
  });

  const isDisabled = computed(() => {
    return props.disabled || props.loading;
  });

  /**
   * 水波涟漪特效处理
   */
  let rippleNum = 0;
  const rippleEffect = (event: MouseEvent) => {
    const btn = ref_btn.value!;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';

    rippleNum = rippleNum + 1;
    const id = `ripple-id-${rippleNum}`;
    const rippleEl = document.createElement('span');
    rippleEl.id = id;
    rippleEl.className = 'ripple-effect';

    const [clientX, clientY] = [event.clientX, event.clientY];
    const { left, top } = btn.getBoundingClientRect();
    rippleEl.style.left = `${clientX - left}px`;
    rippleEl.style.top = `${clientY - top}px`;

    btn.append(rippleEl);

    setTimeout(() => {
      rippleEl.remove();
    }, 600);
  };

  const handleClick = (event: MouseEvent) => {
    if (isDisabled.value)
      return;
    rippleEffect(event);
    emit('click', event);
  };

  return {
    _class,
    ref_btn,
    handleClick,
  };
}
