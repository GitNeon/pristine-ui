import Button from './button.vue';
import { withInstall } from '@/utils/install';

export type { ButtonInstance } from './instance';
export const PButton = withInstall(Button);
export default PButton;
