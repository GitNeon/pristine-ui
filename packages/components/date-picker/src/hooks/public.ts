import { ref } from 'vue';
import { dayjs } from '../day-js-shared.ts';
import type { ChangeDateOption } from '../date-picker.ts';

export const DEFAULT_FORMAT = 'YYYY-MM-DD';
export const DEFAULT_YM_FORMAT = 'YYYY-MM';
export const DEFAULT_Y_FORMAT = 'YYYY';
export const DEFAULT_M_FORMAT = 'MM';

export function getCurrentDate(customDate = '', fmt = DEFAULT_YM_FORMAT) {
  return customDate ? dayjs(customDate, fmt) : dayjs();
}

export function changeDate(option: ChangeDateOption) {
  const { direction, dateType, format, updateValue, num } = option;
  if (direction === 'current') {
    const currentDate = getCurrentDate();
    updateValue.value = currentDate.format(format);
  }
  else if (direction === 'next') {
    const currentDate = getCurrentDate(updateValue.value, format);
    updateValue.value = currentDate.add(num, dateType).format(format);
  }
  else if (direction === 'prev') {
    const currentDate = getCurrentDate(updateValue.value, format);
    updateValue.value = currentDate.subtract(num, dateType).format(format);
  }
}

export function useSelect() {
  const selectList = ref<string[]>([]);

  const handleSelect = (event: MouseEvent) => {
    const eventElement = event.target as HTMLElement;
    const target = eventElement.closest('td div.cell') as HTMLElement;
    if (!target) {
      return;
    }
    const { dateValue = '' } = target.dataset;
    if (target.className.includes('selected')) {
      const index = selectList.value.indexOf(dateValue);
      if (index !== -1) {
        selectList.value.splice(index, 1);
      }
    }
    else {
      selectList.value.push(dateValue);
    }
  };

  const clearSelect = () => (selectList.value = []);

  const setSelectList = (list: string[]) => (selectList.value = list);

  return {
    selectList,
    handleSelect,
    setSelectList,
    clearSelect,
  };
}
