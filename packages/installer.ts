/**
 * @Author: fanx
 * @Date: 2024年06月14日 上午10:41
 * @Description: file content
 */
import type { App } from 'vue';
import * as AllComponents from './components/index';

export function installer(app: App) {
  for (const key in AllComponents) {
    app.use(AllComponents[key as never]);
  }
}
