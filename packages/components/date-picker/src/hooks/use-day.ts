import { onBeforeMount, ref } from 'vue';
import { dayjs } from '../day-js-shared.ts';
import type { DayItem, DirectionType } from '../date-picker.ts';

const MAX_DAY = 42;
const DEFAULT_FORMAT = 'YYYY-MM-DD';
const DEFAULT_MONTH_FORMAT = 'YYYY-MM';
const DEFAULT_YEAR_FORMAT = 'YYYY';

export function useDay() {
  const year = ref<string>('');
  const month = ref<string>('');
  const weeks = ref<string[]>([]);
  const dayList = ref<DayItem[][]>([]);

  const getCurrentDate = (customDate = '', fmt = DEFAULT_MONTH_FORMAT) => customDate ? dayjs(customDate, fmt) : dayjs();

  const getYear = (direction: DirectionType) => {
    if (direction === 'current') {
      const currentDate = getCurrentDate();
      year.value = currentDate.format(DEFAULT_YEAR_FORMAT);
    }
    else if (direction === 'next') {
      const currentDate = getCurrentDate(year.value, DEFAULT_YEAR_FORMAT);
      year.value = currentDate.add(1, 'year').format(DEFAULT_YEAR_FORMAT);
    }
    else if (direction === 'prev') {
      const currentDate = getCurrentDate(year.value, DEFAULT_YEAR_FORMAT);
      year.value = currentDate.subtract(1, 'year').format(DEFAULT_YEAR_FORMAT);
    }
  };

  const getMonth = (direction: DirectionType, num = 1) => {
    const currentDate = dayjs();
    if (direction === 'current') {
      month.value = currentDate.format('MM');
    }
    else if (direction === 'next') {
      month.value = currentDate.add(num, 'month').format('MM');
    }
    else if (direction === 'prev') {
      month.value = currentDate.subtract(num, 'month').format('MM');
    }
  };

  const initWeeksName = () => {
    const currentDate = dayjs();
    const weeksName = currentDate.locale('zh-cn').localeData().weekdaysShort();
    if (weeksName[0] === '周日') {
      weeksName.push(weeksName.shift() || '');
    }
    weeks.value = weeksName;
  };

  // 获取指定年月第一天、最后一天、全部天数的数据集合
  const getMonthDay = (customDate = '') => {
    const dates = [];
    const days = [];
    const currentDate = getCurrentDate(customDate);
    const startDay = currentDate.startOf('month').date();
    const endDay = currentDate.endOf('month').date();
    const month = currentDate.format(DEFAULT_MONTH_FORMAT);

    for (let i = startDay; i <= endDay; i++) {
      const day = i.toString().length === 1 ? `0${i}` : i.toString();
      dates.push(`${month}-${day}`);
      days.push(i.toString());
    }

    return { month, startDay: `${startDay}`, endDay: `${endDay}`, days, dates };
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

  const getSplitDate = (date: string) => {
    const _split = date.split('-');
    const year = _split[0];
    const month = _split[1];
    const day = _split[2];
    return { year, month, day };
  };

  const getWrapDateList = (dates: string[], config = {}) => {
    return dates.map((item) => {
      const { day } = getSplitDate(item);
      const _config = {
        label: day.replace(/^0+/, ''),
        value: item,
        thisMonth: false,
        checked: false,
      };
      return Object.assign(_config, config);
    });
  };

  const chunkDayList = (dayList: DayItem[], chunkSize = 7) => {
    const result = [];
    for (let i = 0; i < dayList.length; i += chunkSize) {
      const chunk = dayList.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };

  const getDayList = (customDate = '') => {
    const { dates } = getMonthDay(customDate);
    const prevDayList = getWrapDateList(getPrevDaysOfMonth(customDate));
    const nextDayNum = MAX_DAY - dates.length - prevDayList.length;
    const nextDayList = getWrapDateList(getNextDaysOfMonth(nextDayNum, customDate));
    const currentDayList = getWrapDateList(dates, { thisMonth: true });
    const allDayList: DayItem[] = prevDayList.concat(currentDayList).concat(nextDayList);
    dayList.value = chunkDayList(allDayList);
    console.log(dayList.value);
  };

  const moveYear = (direction: DirectionType) => {
    getYear(direction);
    getDayList(`${year.value}-${month.value}`);
  };

  onBeforeMount(() => {
    initWeeksName();
    getYear('current');
    getMonth('current');
    getDayList();
  });

  return {
    year,
    month,
    weeks,
    dayList,
    moveYear,
  };
}
