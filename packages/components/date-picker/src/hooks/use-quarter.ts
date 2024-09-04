import { computed, onBeforeMount, ref } from 'vue';
import type { ContentItem, DirectionType } from '../date-picker.ts';
import {
  DEFAULT_YM_FORMAT,
  DEFAULT_Y_FORMAT,
  changeDate,
  getCurrentDate,
  useSelect,
} from '../hooks/public.ts';

export function useQuarter() {
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

  const quarterList = computed(() => {
    const result = [];
    for (let i = 1; i <= 4; i++) {
      const quarterItem: ContentItem = {
        label: `Q${i}`,
        value: `${year.value}-Q${i}`,
        isCurrentDate: true,
        checked: false,
      };
      result.push(quarterItem);
    }
    return [result];
  });

  onBeforeMount(() => {
    handleThisDate();
  });

  return {
    year,
    quarterList,
    selectList,
    changeYear,
    handleSelect,
    handleThisDate,
    clearSelect,
  };
}
