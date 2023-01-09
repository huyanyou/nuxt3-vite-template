// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
export default defineNuxtConfig({
    vite: {
        vue: {
            reactivityTransform: true,
        },
        plugins: [
            AutoImport({
                resolvers: [ArcoResolver()],
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                    /\.md$/, // .md
                ],
                // dts: 'src/auto-imports.d.ts',
                imports: [
                    'vue',
                    'vue-router',
                    // vue的语法糖$ref
                    'vue/macros',
                ],
                vueTemplate: true,
            }),
            Components({
                resolvers: [
                    ArcoResolver({
                        sideEffect: true
                    })
                ],
                // dirs: ['src/components', 'src/views/*/'],
                extensions: ['vue'],
                // include: [/.vue$/, /.vue?vue/],
                deep: true,
                // dts: 'src/components.d.ts',
                directives: true,
                globalNamespaces: ['global'],
                include: [/\.vue$/, /\.vue\?vue/],
            })
        ]
    },
    srcDir: 'src/',
    experimental: {
        reactivityTransform: true,
        inlineSSRStyles: false,
    },
    modules: [
    ],
    ssr: true
})


