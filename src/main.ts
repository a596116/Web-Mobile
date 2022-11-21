import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
/**
 * Tailwindcss
 */
import './styles/tailwindcss.css'

/**
 * Vant
 */
import { Toast } from 'vant'
import 'vant/es/toast/style'
import { Dialog } from 'vant'
import 'vant/es/dialog/style'
import { Notify } from 'vant'
import 'vant/es/notify/style'
import { ImagePreview } from 'vant'
import 'vant/es/image-preview/style'


async function main() {
    const app = createApp(App)
    app.use(Toast, Dialog, Notify, ImagePreview)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
}
main()
