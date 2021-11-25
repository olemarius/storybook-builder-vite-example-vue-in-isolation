const { loadConfigFromFile, mergeConfig } = require('vite');
const { resolve } = require('path');
const WindiCSS = require('vite-plugin-windicss').default;
const vue = require('@vitejs/plugin-vue').default;
const vueI18n = require('@intlify/vite-plugin-vue-i18n').default;

const Icons = require('unplugin-icons/vite');
const IconsResolver = require('unplugin-icons/resolver');
const Components = require('unplugin-vue-components/vite');

module.exports = {
    framework: '@storybook/vue3',
    stories: [
        "../src/stories/**/*.stories.mdx",
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ],
    core: {
        builder: 'storybook-builder-vite',
    },
    async viteFinal(config) {
        config.resolve.alias['@'] = resolve(__dirname, '../src');
        config.plugins.push(WindiCSS());
        Icons({
            scale: 1,
            compiler: 'vue3',
            autoInstall: true
        });
        Components({
            dts: true,
            dirs: [
                'src/components',
                'src/pages/Orienteering/components'
            ],
            deep: true,
            resolvers: IconsResolver({
                componentPrefix: 'icon'
            }),
        });
        config.plugins.push(
            vueI18n({
                runtimeOnly: false,
                include: [
                    resolve(__dirname, './src/locales/**'),
                ]
            })
        );
        // enabling this will cause 'Component is missing template or render function' error
        // config.plugins.push(vue())

        return config;
    },
}
