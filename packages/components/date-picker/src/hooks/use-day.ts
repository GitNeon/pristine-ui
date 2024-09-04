import { computed, onBeforeMount, ref } from 'vue';
import { dayjs } from '../day-js-shared.ts';
import type { ContentItem, DirectionType } from '../date-picker.ts';
import {
  DEFAULT_FORMAT,
  DEFAULT_M_FORMAT,
  DEFAULT_YM_FORMAT,
  DEFAULT_Y_FORMAT,
  changeDate,
  getCurrentDate,
  useSelect,
} from './public.ts';
import { chunkList } from '@/utils/data.ts';

const MAX_DAY = 42;

export function useDay() {
  const year = ref<string>('');
  const month = ref<string>('');
  const weeks = ref<ContentItem[][]>([]);

  const { selectList, setSelectList, clearSelect, handleSelect } = useSelect();

  const initWeeksName = () => {
    const weeksName = dayjs().locale('zh-cn').localeData().weekdaysShort();
    if (weeksName[0] === '周日') {
      weeksName.push(weeksName.shift() || '');
    }

    const weekNameList: ContentItem[] = weeksName.map((item, index) => ({
      label: item,
      value: `${index + 1}`,
      isCurrentDate: false,
      checked: false,
    }));
    weeks.value = [weekNameList];
  };

  // 计算指定年月全部天数
  const calculateMonthDays = (customDate = '') => {
    const resultList = [];
    const currentDate = getCurrentDate(customDate);
    const startDay = currentDate.startOf('month').date();
    const endDay = currentDate.endOf('month').date();
    const month = currentDate.format(DEFAULT_YM_FORMAT);

    for (let i = startDay; i <= endDay; i++) {
      const day = `${i}`.length === 1 ? `0${i}` : `${i}`;
      resultList.push(`${month}-${day}`);
    }

    return resultList;
  };

  // 获取往前推的天数集合
  const getPrevDaysOfMonth = (customDate = '') => {
    const currentDate = getCurrentDate(customDate);
    const startOfMonth = currentDate.startOf('month');
    const dayOfWeek = startOfMonth.day();
    // 根据日历规则，最多往前推7天
    const prevDayNum = (dayOfWeek === 0 ? 7 : dayOfWeek) - 1;

    const dates = [];
    for (let i = 0; i < prevDayNum; i++) {
      dates.push(startOfMonth.subtract(i + 1, 'day').format(DEFAULT_FORMAT));
    }
    dates.reverse();
    return dates;
  };

  // 获取往后推的天数集合
  const getNextDaysOfMonth = (daysNum = 0, customDate = '') => {
    const currentDate = getCurrentDate(customDate);
    const endOfMonth = currentDate.endOf('month');
    const dates = [];
    for (let i = 0; i <= daysNum; i++) {
      dates.push(endOfMonth.clone().add(i, 'day').format(DEFAULT_FORMAT));
    }
    dates.shift();
    return dates;
  };

  const genContentList = (dates: string[], config = {}) => {
    return dates.map((item) => {
      const day = item.split('-')[2];
      const contentItem = {
        label: day.replace(/^0+/, ''),
        value: item,
        isCurrentDate: false,
        checked: false,
      };
      return Object.assign(contentItem, config);
    });
  };

  const dayList = computed(() => {
    const YM = `${year.value}-${month.value}`;
    const monthDays = calculateMonthDays(`${year.value}-${month.value}`);
    const prevList = genContentList(getPrevDaysOfMonth(YM));
    const nextNum = MAX_DAY - monthDays.length - prevList.length;
    const nextList = genContentList(getNextDaysOfMonth(nextNum, YM));
    const currentList = genContentList(monthDays, { isCurrentDate: true });
    const allDayList: ContentItem[] = prevList
      .concat(currentList)
      .concat(nextList);
    return chunkList(allDayList, 7);
  });

  const handleThisDate = () => {
    const thisYear = getCurrentDate().format(DEFAULT_Y_FORMAT);
    const thisMonth = getCurrentDate().format(DEFAULT_M_FORMAT);
    const currentDate = getCurrentDate().format(DEFAULT_FORMAT);
    year.value = thisYear;
    month.value = thisMonth;
    setSelectList([currentDate]);
  };

  const changeYear = (direction: DirectionType) => {
    changeDate({
      direction,
      dateType: 'year',
      format: DEFAULT_Y_FORMAT,
      updateValue: year,
      num: 1,
    });
  };

  const changeMonth = (direction: DirectionType) => {
    changeDate({
      direction,
      dateType: 'month',
      format: DEFAULT_M_FORMAT,
      updateValue: month,
      num: 1,
    });
    if (month.value === '01' && direction === 'next') {
      year.value = `${Number(year.value) + 1}`;
    }
    else if (month.value === '12' && direction === 'prev') {
      year.value = `${Number(year.value) - 1}`;
    }
  };

  onBeforeMount(() => {
    initWeeksName();
    handleThisDate();
  });

  return {
    year,
    month,
    weeks,
    dayList,
    selectList,
    changeYear,
    changeMonth,
    handleSelect,
    handleThisDate,
    clearSelect,
  };
}
