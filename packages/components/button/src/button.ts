export type ButtonSize = 'normal' | 'large' | 'small';
export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NativeButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /**
   * @description 按钮的尺寸
   */
  size?: ButtonSize;
  /**
   * @description 按钮的类型
   */
  type?: ButtonType;
  /**
   * @description 是否为朴素按钮
   */
  plain?: boolean;
  /**
   * @description 是否为圆角按钮
   */
  round?: boolean;
  /**
   * @description 是否为文字按钮
   */
  text?: boolean;
  /**
   * @description 是否为链接按钮
   */
  link?: boolean;
  /**
   * @description 是否为圆形按钮
   */
  circle?: boolean;
  /**
   * @description 是否为加载中状态
   */
  loading?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 原生button属性
   */
  nativeType?: NativeButtonType;
}

export interface ButtonEmit {
  (e: 'click', event: MouseEvent): void;
}
