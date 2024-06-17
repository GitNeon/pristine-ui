# Pristine UI 组件库
🎉 一款仿Element Plus 的组件库，为个人练习开发组件库、熟悉大厂组件库源码而创建的项目。

## 一、项目概述
- Element Plus git仓库： https://github.com/element-plus/element-plus
- 包管理：pnpm workspace
- 组件代码： Vue SFC、TypeScript、JSX
- 样式： scss、css、var
- 构建：Vite、Rollup
- 代码风格：Eslint
> 搭建教程参考 https://juejin.cn/post/7373482464722092069
>
> 源码及目录结构参考 Element Plus源码

## 二、工程化配置项
包含如下:
- editorconfig：为编辑器设定统一开发风格
- gitattributes: git版本控制系统配置，指定git工作的一些策略，如文件识别、代码合并、指定差异算法等
- eslint: 采用@antfu/eslint-config的最佳预设配置，剔除固执的Prettier代码格式化
- tsconfig：ts编译的选项配置
- vite.config.js vite的打包工具配置
- package.json 该项目的配置
- pnpm-workspace pnpm工作空间配置，适用于monorepo项目结构
