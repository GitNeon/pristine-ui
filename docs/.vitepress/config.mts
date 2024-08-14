import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Pristine UI',
  description: 'A Vue3 UI components library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon/logo.svg',
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '设计原则', link: '/guide/design' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '内置过渡动画', link: '/guide/animation' },
            { text: '更新日志', link: '/guide/update-log' },
          ],
        },
      ],
      '/components': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Border 边框', link: '/components/border' },
          ],
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Popover 弹出层', link: '/components/popover' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'MIT许可协议',
      copyright: 'Copyright © 2024 Yunyan 🌲',
    },
  },
});
