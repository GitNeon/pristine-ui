import { defineAsyncComponent } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import '@pristine-ui/theme-chalk/common/root.css';

function toPascalCase(str) {
  if (!str)
    return '';
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str.replace(/-([a-z])/g, (g) => {
    return g[1].toUpperCase();
  });
}

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    const modules = import.meta.glob('../../examples/**/*.vue');
    for (const [path, value] of Object.entries(modules)) {
      const fileName = path.split('/').pop().replace(/\.vue$/, '');
      const componentName = toPascalCase(fileName);
      const _component = defineAsyncComponent(value);
      app.component(componentName, _component);
    }
  },
};
