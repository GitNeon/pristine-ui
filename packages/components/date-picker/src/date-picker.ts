import type { Ref } from 'vue';

export type DirectionType = 'current' | 'prev' | 'next';

export type FormatType = 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY' | 'MM';

export type DateType = 'day' | 'month' | 'quarter' | 'year';

export type ControlShowType = 'inner-prev' | 'inner-next' | 'outer-prev' | 'outer-next';

export interface DayItem {
  /**
   * @description 用于日期面板显示的label名
   */
  label: string;
  /**
   * @description 日期值
   */
  value: string;
  /**
   * @description 是否本月,用于样式判断
   */
  thisMonth: boolean;
  /**
   * @description 是否选中
   */
  checked: boolean;
}

export interface ContentItem {
  /**
   * @description 用于日期面板显示的label名
   */
  label: string;
  /**
   * @description 日期值
   */
  value: string;
  /**
   * @description 是否为当前日期
   */
  isCurrentDate: boolean;
  /**
   * @description 是否选中
   */
  checked: boolean;
}

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

export interface BasicContentProps {
  /**
   * @description 列数据
   */
  columns: ContentItem[][];
  /**
   * @description 行数据
   */
  rows: ContentItem[][];
  /**
   * @description 已选择的值
   */
  selected: string[];
}

export interface BasicContentEmits {
  (e: 'headerClick', event: MouseEvent): void;
  (e: 'contentClick', event: MouseEvent): void;
}

export interface BasicControlProps {
  show: ControlShowType[];
}

export interface BasicControlEmits {
  (e: 'innerPrevClick', direction: DirectionType): void;
  (e: 'innerNextClick', direction: DirectionType): void;
  (e: 'outerPrevClick', direction: DirectionType): void;
  (e: 'outerNextClick', direction: DirectionType): void;
}

export interface BasicToolbarEmits {
  (e: 'handleDefaultDate'): void;
  (e: 'handleCurrentDate'): void;
  (e: 'handleClearDate'): void;
}
