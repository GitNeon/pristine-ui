import type { App, Component } from 'vue';

// 组件上绑定install方法
export function withInstall<T extends Component>(component: T) {
  (component as Record<string, any>).install = (app: App) => {
    const componentName = component.name;
    if (!componentName) {
      throw new Error('Component name must be provided!');
    }
    app.component(componentName, component);
  };

  return component;
}
