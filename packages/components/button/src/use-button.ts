import { computed } from 'vue';
import type { ButtonEmit, ButtonProps } from './button.ts';

const normalizeSpaces = (str: string) => str.replace(/\s{2,}/g, ' ');

export function useButton(props: ButtonProps, emit: ButtonEmit) {
  const _class = computed(() => {
    const type = props.type || 'default';
    const disabled = (props.disabled || props.loading) ? 'disabled' : '';
    const round = props.round ? 'round' : '';
    const circle = props.circle ? 'circle' : '';
    const size = props.size ? props.size : '';
    const link = props.link ? 'link' : '';
    return normalizeSpaces(`pri-button ${type} ${disabled} ${round} ${circle} ${size} ${link}`);
  });

  const handleClick = (event: MouseEvent) => {
    emit('click', event);
  };

  return {
    _class,
    handleClick,
  };
}
