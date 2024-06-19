import { resolve } from 'node:path';
import * as path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './packages'),
      },
    ],
  },
  build: {
    // 构建输出目录
    outDir: 'build',
    /**
     * 构建目标版本，兼容至ES5，但不包含polyfill
     * 传统浏览器可以通过插件 @vitejs/plugin-legacy 来支持，
     * 它将自动生成传统版本的 chunk 及与其相对应 ES 语言特性方面的 polyfill
     */
    target: 'es2015',
    // 分离css，如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    cssCodeSplit: true,
    // 库模式，该选项将项目构建为库，entry不能使用html作为入口
    lib: {
      entry: path.resolve(__dirname, './packages/pristine-ui/index.ts'),
      name: 'PristineUI', // 暴露全局的变量
      fileName: () => `index.js`, // 输出的包文件名
      // "build.lib.formats" will be ignored because "build.rollupOptions.output" is already an array format.
      // formats: ["es", "cjs"],                                            // 分别输出为esModule, commonJs
    },
    rollupOptions: {
      external: ['vue'],
      /**
       * element-plus源码中输出了三个包
       * es文件夹用来兼容esm语法，
       * lib文件夹兼容commentJs，
       * dist也是esm语法，但是把所有样式都打包到index.css中，方便全局引入
       */
      output: [
        {
          format: 'umd', // 打包后的js格式 umd
          entryFileNames: 'index.full.js',
          exports: 'named', // 指定导出模式，对于TS、Webpack等来说，应该使用使用named命名模式
          name: 'PristineUI', // 全局变量名,同一页面上的其他脚本可以使用这个变量名来访问你的 bundle 输出
          dir: path.resolve(__dirname, 'build/dist'), // 指定打包路径
        },
        {
          format: 'es', // 打包成es module格式
          entryFileNames: 'index.full.mjs',
          exports: 'named',
          name: 'PristineUI',
          dir: path.resolve(__dirname, 'build/dist'), // 指定打包路径
        },
        {
          format: 'es',
          entryFileNames: '[name].mjs', // 入口点文件的命名，这里保持原有文件名，会影响构建后的文件名称，会覆盖lib的命名规则
          exports: 'named',
          preserveModules: true, // 使用原始模块名作为文件名
          preserveModulesRoot: 'packages', // 简单来说打包后保持源码当中的文件夹结构
          dir: path.resolve(__dirname, 'build/es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'packages',
          dir: path.resolve(__dirname, 'build/lib'),
        },
      ],
    },
  },
  plugins: [
    vue(),
    // 打包出ts类型标注
    // dts({
    //   tsconfigPath: './tsconfig.prod.json',
    //   rollupTypes: true,
    //   outDir: ['build/dist'],
    // }),
  ],
});
