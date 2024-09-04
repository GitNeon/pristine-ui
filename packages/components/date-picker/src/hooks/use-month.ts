import { computed, onBeforeMount, ref } from 'vue';
import type { ContentItem, DirectionType } from '../date-picker.ts';
import {
  DEFAULT_YM_FORMAT,
  DEFAULT_Y_FORMAT,
  changeDate,
  getCurrentDate,
  useSelect,
} from '../hooks/public.ts';
import { chunkList } from '@/utils/data.ts';

export function useMonth() {
  const year = ref<string>('');

  const { selectList, setSelectList, handleSelect, clearSelect } = useSelect();

  const changeYear = (direction: DirectionType) => {
    changeDate({
      direction,
      dateType: 'year',
      format: DEFAULT_Y_FORMAT,
      updateValue: year,
      num: 1,
    });
  };

  const handleThisDate = () => {
    year.value = getCurrentDate().format(DEFAULT_Y_FORMAT);
    const currentDate = getCurrentDate().format(DEFAULT_YM_FORMAT);
    setSelectList([currentDate]);
  };

  const monthList = computed(() => {
    const result = [];
    for (let i = 1; i <= 12; i++) {
      const m = `${i}`.length === 1 ? `0${i}` : `${i}`;
      const monthItem: ContentItem = {
        label: `${i}月`,
        value: `${year.value}-${m}`,
        isCurrentDate: true,
        checked: false,
      };
      result.push(monthItem);
    }
    return chunkList(result, 4);
  });

  onBeforeMount(() => {
    handleThisDate();
  });

  return {
    year,
    monthList,
    selectList,
    changeYear,
    handleSelect,
    handleThisDate,
    clearSelect,
  };
}
