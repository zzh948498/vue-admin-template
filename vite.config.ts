import { viteMockServe } from 'vite-plugin-mock';
// import viteSvgIcons from 'vite-plugin-svg-icons';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default ({ command }) => {
    const prodMock = true;
    return defineConfig({
        plugins: [
            vue(),
            VitePWA({
                // registerType: 'autoUpdate',
                includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
                manifest: {
                    name: 'Vue Typescript Admin',
                    // eslint-disable-next-line camelcase
                    short_name: 'Vue Ts Admin',
                    description: 'Description of your app',
                    // eslint-disable-next-line camelcase
                    theme_color: '#ffffff',
                    icons: [
                        {
                            src: 'img/icons/android-chrome-192x192.png',
                            sizes: '192x192',
                            type: 'image/png',
                        },
                        {
                            src: 'img/icons/android-chrome-512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                        },
                        {
                            src: 'img/icons/android-chrome-512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                            purpose: 'any maskable',
                        },
                    ],
                },
            }),
            vueJsx({
                // options are passed on to @vue/babel-plugin-jsx
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                dts: true, // enabled by default if `typescript` is installed
                resolvers: [ElementPlusResolver()],
            }),
            // 添加下面插件
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
                symbolId: 'icon-[dir]-[name]',
            }),
            viteMockServe({
                // default
                mockPath: 'mock',
                localEnabled: command === 'serve',
                prodEnabled: command !== 'serve' && prodMock,
                injectCode: `
                  import { setupProdMockServer } from './mockProdServer';
                  setupProdMockServer();
                `,
            }),
        ],
        base: '/vue-admin-template/',
        server: {
            host: '0.0.0.0',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        // 忽略@charset警告
        // https://github.com/vitejs/vite/issues/5833
        css: {
            postcss: {
                plugins: [
                    {
                        postcssPlugin: 'internal:charset-removal',
                        AtRule: {
                            charset: atRule => {
                                if (atRule.name === 'charset') {
                                    atRule.remove();
                                }
                            },
                        },
                    },
                ],
            },
        },
    });
};
