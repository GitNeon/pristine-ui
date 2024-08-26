import type { Ref } from 'vue';

export interface DayItem {
  /**
   * @description 用于日期面板显示的label名
   */
  label: string;
  /**
   * @description 选中的值
   */
  value: string | string[];
  /**
   * @description 是否本月,用于样式判断
   */
  thisMonth: boolean;
  /**
   * @description 是否选中
   */
  checked: boolean;
}

export type DirectionType = 'current' | 'prev' | 'next';

export type FormatType = 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY' | 'MM';

export interface ChangeDateOption {
  /**
   * @description 根据方向判断增加或减少日期
   */
  direction: DirectionType;
  /**
   * @description 日期类型
   */
  dateType: 'year' | 'month';
  /**
   * @description 日期格式化类型
   */
  format: FormatType;
  /**
   * @description 要更新的日期值
   */
  updateValue: Ref<string>;
  /**
   * @description 增加或减少天数的数量
   */
  num: number;
}
