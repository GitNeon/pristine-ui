export type AnimationType = 'fade' | 'scale' | 'translate';
export type HandleType = 'add' | 'remove';

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
  /**
   * @description 为popover弹出层添加自定义类名
   */
  popoverClass?: string;
  /**
   * @description 为 popper 自定义样式
   */
  popoverStyle?: Record<string, string | number>;
}

export interface EventHandlers {
  click: () => void;
  hover: () => void;
}

export type TriggerType = keyof EventHandlers;

export interface PositionMap {
  top: {
    x: number;
    y: number;
  };
  bottom: {
    x: number;
    y: number;
  };
  left: {
    x: number;
    y: number;
  };
  right: {
    x: number;
    y: number;
  };
}

export type PositionType = keyof PositionMap;
