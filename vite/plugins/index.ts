import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'

import { autoImport } from './autoImport'
export const setupPlugins = (isBuild: boolean) => {
    const plugins: Plugin[] = [vue()]
    autoImport(plugins)
    return plugins
}
