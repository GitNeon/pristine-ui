# 快速开始

## 用法

完整引入，全局挂载组件实例，使用更加方便，但是打包后的文件可能较大

```js
// main.ts
import { createApp } from 'vue';
import PristineUI from 'pristine-ui';
import 'pristine-ui/dist/index.css';

const app = createApp(App);
app.use(PristineUI);
app.mount('#app');
```

如果想获得Vue Official支持，需要在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。

```json
{
  "compilerOptions": {
    "types": ["pristine-ui/global"]
  }
}
```

## 按需导入
按需导入时，导入样式有两种方式，一种是在main.ts中全局引入样式：
```js
import 'pristine-ui/dist/index.css';
```
另一种是导入单个组件的样式，目前这种方式还在开发中，后续会支持。

在你想要使用的地方，按需引入组件即可：
```vue
<script setup lang="ts">
import { PriButton } from 'pristine-ui';
</script>

<template>
  <div>
    <pri-button>组件测试使用</pri-button>
  </div>
</template>

<style scoped></style>
```

::: tip
现在你可以启动项目了。 对于每个组件的用法，请查阅**组件**内容部分
:::
