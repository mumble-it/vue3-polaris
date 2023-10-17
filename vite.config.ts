import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import {viteStaticCopy} from 'vite-plugin-static-copy'
import svgLoader from 'vite-svg-loader';


export default defineConfig({
    plugins: [
        vue(),
        svgLoader(),
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
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "Vue3Polaris",
            fileName: (format) => `vue3-polaris-test.${format}.js`,
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