import type { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueUseComponentsResolver, VantResolver } from 'unplugin-vue-components/resolvers'

// 自動導入包，模塊
export const autoImport = (plugin: Plugin[]) => {
    plugin.push(
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'pinia',
                '@vueuse/core',
                {
                    '@/utils': [
                        'env',  // import { env } from '@/utils',
                        // ['env', 'myenv'] // import { env as myenv } from '@/utils',
                    ],
                },

            ],
            // 為true時在項目根目錄自動創建
            dts: 'types/auto-imports.d.ts',
        }),
        Components({
            resolvers: [
                VantResolver(), VueUseComponentsResolver(),
            ],
        }),
    )
}