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

/**
 * @description 获取年月的方向
 */
export type DirectionType = 'current' | 'prev' | 'next';
