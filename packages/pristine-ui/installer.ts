/**
 * @Author: fanx
 * @Date: 2024年06月14日 上午10:41
 * @Description: file content
 */
import type { App } from 'vue';
import * as allComponents from '../components/index';

export function installer(app: App) {
  for (let key in allComponents) {
    app.use(allComponents[key as never]);
  }
}
