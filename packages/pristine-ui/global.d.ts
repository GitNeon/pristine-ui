import type PriButton from '../components/button/button.vue';

declare module 'vue' {
  export interface GlobalComponents {
    PriButton: typeof PriButton;
  }
}
