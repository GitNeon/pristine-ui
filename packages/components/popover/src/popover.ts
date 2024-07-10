export type AnimationType = 'fade' | 'zoom';
export type TriggerType = 'click' | 'focus' | 'hover';
export type PositionType = 'top' | 'bottom' | 'left' | 'right';

export interface PopoverProps {
  /**
   * @description 过渡动画名称
   */
  animationName?: AnimationType;
  /**
   * @description 是否可见
   */
  visible?: boolean;
  /**
   * @description 触发类型
   */
  trigger?: TriggerType;
  /**
   * @description 显示位置
   */
  position?: PositionType;
  /**
   * @description 相对于显示位置的偏移量
   */
  offset?: number;
}
