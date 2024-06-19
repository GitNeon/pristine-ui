export type ButtonSize = 'large' | 'default' | 'small';
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface ButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
}
