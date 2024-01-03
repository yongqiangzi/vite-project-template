/*
 * @Date: 2024-01-03 11:08:34
 * @LastEditTime: 2024-01-03 20:00:47
 * @FilePath: \vite.config.ts
 */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { createHtmlPlugin } from 'vite-plugin-html';

const getTarget = (mode: string, target: string) => {
  return loadEnv(mode, process.cwd())[target];
};

export default ({ mode }: any) => {
  const { VITE_BASE_PATH } = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
        dts: false,
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: getTarget(mode, 'VITE_APP_TITLE'),
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '*': fileURLToPath(new URL('./src/pages', import.meta.url)),
      },
    },
    server: {
      hmr: true,
      host: '0.0.0.0',
      port: 8088,
    },
    base: VITE_BASE_PATH,
    build: {
      outDir: 'build',
    },
  });
};
