import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import {viteStaticCopy} from 'vite-plugin-static-copy'

const config = {
    components: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "Vue3Polaris",
        fileName: (format: string) => `vue3-polaris-test.${format}.js`,
    },
    icons: {
        entry: path.resolve(__dirname, "src/icons/index.js"),
        name: "Icons",
        fileName: (format: string) => `icons.${format}.js`,
    },
}

// @ts-ignore
const currentConfig = config[process.env.LIB_NAME];

export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: path.resolve(__dirname, './src/sass') + '/[!.]*',
                    dest: './sass',
                },
                {
                    src: path.resolve(__dirname, './src/icons') + '/[!.]*',
                    dest: './icons',
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            "@/": new URL("./src/", import.meta.url).pathname,
        },
    },

    build: {
        cssCodeSplit: true,
        target: "esnext",
        emptyOutDir: false,
        lib: {
            ...currentConfig
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});