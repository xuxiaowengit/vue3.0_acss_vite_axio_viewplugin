/*
// @author ：司达叔讲前端
// @date ： 2021-12-23
// @使用过程中如遇到问题 ： 关注头条号 ： “司达叔讲前端” ，私信
*/
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import  { ViteDevPlugin } from 'vue-dev-plugin'


function pathResolve(dir) {
  return resolve(__dirname, dir);
}

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    viteMockServe({
      // default
      mockPath: './src/mock',
      localEnabled: true,
      prodEnabled: false,
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
    }),
    ViteDevPlugin()
  ],
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: `@import "@/styles/index.scss";`,
      },
    },
  },
  optimizeDeps: {
    include: ['axios'],
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 2048,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        // target: 'https://xxxxxxx/',
        // changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
