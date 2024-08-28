import { onBeforeMount, ref } from 'vue';
import { dayjs } from '../day-js-shared.ts';
import type { ChangeDateOption, DayItem, DirectionType } from '../date-picker.ts';

const MAX_DAY = 42;
const DEFAULT_FORMAT = 'YYYY-MM-DD';
const DEFAULT_YM_FORMAT = 'YYYY-MM';
const DEFAULT_Y_FORMAT = 'YYYY';
const DEFAULT_M_FORMAT = 'MM';

export function useDay() {
  const year = ref<string>('');
  const month = ref<string>('');
  const weeks = ref<string[]>([]);
  const dayList = ref<DayItem[][]>([]);
  const selectList = ref<string[]>([]);

  const getCurrentDate = (customDate = '', fmt = DEFAULT_YM_FORMAT) => customDate ? dayjs(customDate, fmt) : dayjs();

  const baseDateChange = (option: ChangeDateOption) => {
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
  };

  const changeYear = (option?: Partial<ChangeDateOption>) => {
    const opt = {
      direction: 'current',
      dateType: 'year',
      format: DEFAULT_Y_FORMAT,
      updateValue: year,
      num: 1,
    };
    baseDateChange(Object.assign(opt, option));
  };

  const changeMonth = (option?: Partial<ChangeDateOption>) => {
    const opt = {
      direction: 'current',
      dateType: 'month',
      format: DEFAULT_M_FORMAT,
      updateValue: month,
      num: 1,
    };
    baseDateChange(Object.assign(opt, option));
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
    const month = currentDate.format(DEFAULT_YM_FORMAT);

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
  };

  const moveYear = (direction: DirectionType) => {
    changeYear({ direction });
    getDayList(`${year.value}-${month.value}`);
  };

  const moveMonth = (direction: DirectionType) => {
    changeMonth({ direction });
    if (month.value === '01' && direction === 'next') {
      year.value = `${Number(year.value) + 1}`;
    }
    else if (month.value === '12' && direction === 'prev') {
      year.value = `${Number(year.value) - 1}`;
    }
    getDayList(`${year.value}-${month.value}`);
  };

  const handlePickDate = (event: MouseEvent) => {
    const target = (event.target as HTMLElement).closest('td');
    if (!target)
      return;
    const cell = target.children[0]!;
    const { dateValue = '' } = target.dataset;
    if (cell.className.includes('selected')) {
      const index = selectList.value.indexOf(dateValue);
      if (index !== -1) {
        selectList.value.splice(index, 1);
      }
    }
    else {
      selectList.value.push(dateValue);
    }
  };

  const handleThisDate = () => {
    const thisYear = getCurrentDate().format(DEFAULT_Y_FORMAT);
    const thisMonth = getCurrentDate().format(DEFAULT_M_FORMAT);
    const currentDate = getCurrentDate().format(DEFAULT_FORMAT);
    year.value = thisYear;
    month.value = thisMonth;
    getDayList(`${thisYear}-${thisMonth}`);
    selectList.value = [];
    selectList.value.push(currentDate);
  };

  const handleClear = () => {
    selectList.value = [];
  };

  onBeforeMount(() => {
    initWeeksName();
    changeYear();
    changeMonth();
    getDayList();
  });

  return {
    year,
    month,
    weeks,
    dayList,
    selectList,
    moveYear,
    moveMonth,
    handlePickDate,
    handleThisDate,
    handleClear,
  };
}
