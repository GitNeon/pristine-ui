import type { App, Component, Plugin } from 'vue';

// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin;

// 组件上绑定install方法
export function withInstall<T extends Component>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const componentName = component.name;
    if (!componentName) {
      throw new Error('Component name must be provided!');
    }
    app.component(componentName, component);
  };

  return component;
}
