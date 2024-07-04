# 安装

## 使用包管理器
```shell
# NPM
$ npm install pristine-ui --save

# Yarn
$ yarn add pristine-ui

# pnpm
$ pnpm install pristine-ui
```

## 浏览器直接引入
克隆项目后，编译完项目会生成build目录，直接通过浏览器的 HTML 标签导入 Pristine UI，然后就可以使用全局变量 PristineUI 了。
```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="build/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="lib/vue3.js"></script>
  <!-- Import component library -->
  <script src="build/dist/index.full.js"></script>
</head>
```

::: tip
- 你可以将build后的产物托管到CDN服务器上，然后通过CDN的方式使用
- 不要忘了引入vue3 js库
:::
