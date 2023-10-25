import type {StorybookConfig} from "@storybook/vue3-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "./**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: 'storybook-addon-sass-postcss',
            options: {
                loadSassAfterPostCSS: true,
            },
        },
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
