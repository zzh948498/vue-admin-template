import { createVuePlugin } from 'vite-plugin-vue2';
import { viteMockServe } from 'vite-plugin-mock';
import viteSvgIcons from 'vite-plugin-svg-icons';
import { defineConfig } from 'vite';
import path from 'path';
export default ({ command }) => {
    let prodMock = false;
    return defineConfig({
        plugins: [
            createVuePlugin({
                jsx: true,
            }),
            // 添加下面插件
            viteSvgIcons({
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
        build: {
            assetsDir: 'assets',
            // outDir: 'dist/vue-admin-template/',
        },
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
