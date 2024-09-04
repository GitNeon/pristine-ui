import { computed, onBeforeMount, ref } from 'vue';
import type { ContentItem, DirectionType } from '../date-picker.ts';
import { DEFAULT_Y_FORMAT, changeDate, getCurrentDate, useSelect } from '../hooks/public.ts';
import { chunkList } from '@/utils/data.ts';

const PREV_NUM = 14;

export function useYear() {
  const startYear = ref<string>('');
  const endYear = ref<string>('');

  const { selectList, setSelectList, handleSelect, clearSelect } = useSelect();

  const changeYear = (direction: DirectionType) => {
    changeDate({
      direction,
      dateType: 'year',
      format: DEFAULT_Y_FORMAT,
      updateValue: startYear,
      num: PREV_NUM,
    });
    changeDate({
      direction,
      dateType: 'year',
      format: DEFAULT_Y_FORMAT,
      updateValue: endYear,
      num: PREV_NUM,
    });
  };

  const handleThisDate = () => {
    startYear.value = getCurrentDate().subtract(PREV_NUM, 'year').format(DEFAULT_Y_FORMAT);
    endYear.value = getCurrentDate().format(DEFAULT_Y_FORMAT);
    setSelectList([endYear.value]);
  };

  const yearList = computed(() => {
    const start = Number(startYear.value);
    const end = Number(endYear.value);

    const resultList = [];
    for (let i = start; i <= end; i++) {
      const item: ContentItem = {
        label: `${i}`,
        value: `${i}`,
        checked: false,
        isCurrentDate: true,
      };
      resultList.push(item);
    }

    return chunkList(resultList, 5);
  });

  onBeforeMount(() => {
    handleThisDate();
  });

  return {
    startYear,
    endYear,
    yearList,
    selectList,
    changeYear,
    handleSelect,
    handleThisDate,
    clearSelect,
  };
}
